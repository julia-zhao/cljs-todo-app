(ns todoapp.core
  (:require
   [ajax.core :as ajax];to create a connection to SQL database
   [day8.re-frame.http-fx] 
   [re-frame.core :as rf]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))
;; -------------------------
;; Routes
(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components
(defn home-page []
  (fn []
    [:span.main
     [:h1 "Welcome to TODO APP"]
     [:ul
      [:li [:a {:href (path-for :items)} "tasks for today"]]]]))

;initializes the app-db with the following values
;; (rf/reg-event-db
;;  :init-db
;;  (fn [db [_]]
;;    (assoc db :task-list [] :num-tasks 1)))

(rf/reg-event-db
 :init-db
 (fn [{:keys [db]} [_]]
   :db (assoc db :task-list [] :num-tasks 1)))

;toggles the :finished state from true <-> false
(rf/reg-event-db
 :toggle
 (fn [db [_ index]]
   (update-in db [:task-list index :finished] not)))

;adds new task into :task-list
(rf/reg-event-db
 :update-db-tasklist
 (fn [db [_ name]]
   (update db :task-list #(conj % (assoc {} :task name :finished false)))))

(rf/reg-event-fx
 :add-task
 (fn
   [db [_ name]]
  ;;  [{db :db} _]
   ;;return a map of side effects
   {:http-xhrio {:method           :post
                 :uri              "http://localhost:3000/api/todos"
                 :params           {:item name
                                    :completed false}
                 :format           (ajax/json-request-format)
                 :response-format  (ajax/json-response-format {:keywords? true})
                 :on-success       [:update-db-tasklist name]
                 :on-failure       [:failure-post]}
    }))

(rf/reg-event-fx
 :get-tasks
 (fn
   [{:keys [db]} _]
   ;;return a map of side effects
   {
    :http-xhrio {:method           :get
                 :uri              "http://localhost:3000/api/todos"
                 :format           (ajax/json-request-format)
                 :response-format  (ajax/json-response-format {:keywords? true})
                 :on-success       [:success-get]
                 :on-failure       [:failure-get]}
    }))

(rf/reg-event-db
 :failure-post
 (fn
   [db [_ response]]
   (js/alert response)
   (js/alert "failure")))

(rf/reg-event-db
 :success-get
 (fn
   [db [_ response]]
   (assoc db :task-list response)))

(rf/reg-event-db
 :failure-get
 (fn
   [db [_ response]]
   (js/alert response)
   (js/alert "failure")))

;increase the number of tasks by 1
(rf/reg-event-db
 :inc-tasks
 (fn [db]
   (update db :num-tasks inc)))

;deletes all completed tasks from db
(rf/reg-event-fx
 :delete-completed
 (fn [{:keys [db]}]
   {:db (->> (get db :task-list)
             (filter #(false? (get % :finished)))
             (assoc db :task-list))
    :dispatch [:update-num-tasks]}))

;updates num tasks after all completed tasks have been cleared
(rf/reg-event-db
 :update-num-tasks
 (fn [db]
   (assoc db :num-tasks (inc (count (get db :task-list))))))

(defn query-tasks [db]
  (get db :task-list))

(defn query-num [db]
  (get db :num-tasks))

(rf/reg-sub
 :get-tasklist
 query-tasks)

(rf/reg-sub
 :get-numtasks
 query-num)

;; a form for the user to submit
(let [task-name (atom "")]
  (defn add-todo []
    [:div
     [:div
      [:input {:type "text"
               :placeholder "Please enter details of the task to insert."
               :value @task-name
               :on-change #(reset! task-name (-> % .-target .-value))}]]
     [:div
      [:input {:type "button"
               :value "+ add a new task"
               :on-click #(if (not (= @task-name ""))
                            (do
                              (rf/dispatch [:add-task @task-name])
                              (rf/dispatch [:inc-tasks])
                              (reset! task-name ""))
                            ())}]]]))

(defn todo-chkbx [item-id {:keys [task finished]}]
  [:ul
   [:input {:type "checkbox"
            :checked finished
            :on-click #(rf/dispatch [:toggle item-id])}]
   [:a {:href (path-for :item {:item-id item-id})} task]])

(defn delete-completed []
  [:input {:type "button"
           :value "clear completed" 
           :on-click #(rf/dispatch [:delete-completed])}])

(let [tasks (rf/subscribe [:get-tasklist])
      num-tasks (rf/subscribe [:get-numtasks])]

  (defn items-page []
    [:div
     [:div
      [:h1 "You have " (dec @num-tasks) " tasks."]]
     [:div
      [:ul (doall (for [[item-id task] (map-indexed list @tasks)]
                    ^{:key item-id}
                    [todo-chkbx item-id task]))]
      [add-todo]
      [delete-completed]]]))

(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:span.main
       [:h1 (str "TASK " item)]
       [:p [:a {:href (path-for :items)} "Back to the list of tasks"]]])))

(defn about-page []
  (fn [] [:span.main
          [:h1 "About TODO APP"]]))

;; -------------------------
;; Translate routes -> page components
(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page))

;; -------------------------
;; Page mounting component
(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About todoapp"]]]
       [page]
       [:footer
        [:p "todoapp was generated by the "
         [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app"))
  (rf/dispatch [:init-db]))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
