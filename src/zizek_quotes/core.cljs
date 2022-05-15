(ns zizek-quotes.core
    (:require
     [reagent.dom :as d]
     [reagent.core :as r]
     [zizek-quotes.quote :refer [quote]]))

;; -------------------------
;; Views

(defn home-page []
  [:div [quote]
  [:input {:type "button"
           :value "Next quote!"
           :on-click #(.reload js/window.location)}]])


;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
