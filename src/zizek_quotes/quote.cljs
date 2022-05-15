(ns zizek-quotes.quote
  (:require [zizek-quotes.state :as state]))


(defn quote []
  (let [{:keys [txt url by]}
        (rand-nth (vals @state/quotes))]
    [:div
     [:p [:h3 txt]]
     [:figure
      [:img {:src url
             :height 300
             :width 400}]
      [:figcaption [:small by]]]]))
