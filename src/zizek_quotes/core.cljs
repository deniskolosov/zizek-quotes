(ns zizek-quotes.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [zizek-quotes.state :as state]))

;; -------------------------
;; Views

(defn home-page []
  (let [{:keys [txt url] :as quotes}
        (rand-nth (vals @state/quotes))]
    [:div
     [:p [:h2 txt]]
     [:img {:src url}]]))




;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
