(ns todo-backend.dev-middleware
  (:require
   [ring.middleware.reload :refer [wrap-reload]]
   [selmer.middleware :refer [wrap-error-page]]
   [prone.middleware :refer [wrap-exceptions]]
   [ring.middleware.cors :refer [wrap-cors]]
  ))

(defn wrap-dev [handler]
  (-> handler
      (wrap-cors  :access-control-allow-origin [#"http://localhost:3001"]
                  :access-control-allow-methods [:get :put :post :delete])
      wrap-reload
      wrap-error-page
      (wrap-exceptions {:app-namespaces ['todo-backend]})))
