(ns todo-backend.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[todo-backend started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[todo-backend has shut down successfully]=-"))
   :middleware identity})
