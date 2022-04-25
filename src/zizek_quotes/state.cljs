(ns zizek-quotes.state
  (:require [reagent.core :as r]))

(def quotes (r/atom {:quote-01 {:txt "If you have reasons to love someone, you don’t love them."
                               :url "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Slavoj_%C5%BDi%C5%BEek_2015.jpg/1024px-Slavoj_%C5%BDi%C5%BEek_2015.jpg"}
                    :quote-02 {:txt "Words are never 'only words'; they matter because they define the contours of what we can do."
                               :url "https://upload.wikimedia.org/wikipedia/commons/3/31/Slavoj_Zizek_Fot_M_Kubik_May15_2009_10.jpg"}}))

