(ns zizek-quotes.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(defn home-page []
  [:div [:img {:src "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Slavoj_%C5%BDi%C5%BEek_2015.jpg/1024px-Slavoj_%C5%BDi%C5%BEek_2015.jpg"}]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
