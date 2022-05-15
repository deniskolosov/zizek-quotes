(ns zizek-quotes.state
  (:require [reagent.core :as r]))

(def quotes (r/atom {:quote-01 {:txt "If you have reasons to love someone, you don’t love them."
                                :url "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Slavoj_%C5%BDi%C5%BEek_2015.jpg/1024px-Slavoj_%C5%BDi%C5%BEek_2015.jpg"
                                :by "By Amrei-Marie - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=39173626"}
                    :quote-02 {:txt "Words are never 'only words'; they matter because they define the contours of what we can do."
                               :url "https://upload.wikimedia.org/wikipedia/commons/3/31/Slavoj_Zizek_Fot_M_Kubik_May15_2009_10.jpg"
                               :by "By Mariusz Kubik - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=6785912"}

                     :quote-03 {:txt "We feel free because we lack the very language to articulate our unfreedom."
                                :url "https://upload.wikimedia.org/wikipedia/commons/c/c1/Slavoj_%C5%BDi%C5%BEek_2011.jpg"
                                :by "By Michael Bruns from Lippstadt, Deutschland, NRW - zizekUploaded by Sporti, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=15830711"}
                     :quote-04 {:txt "The problem for us is not are our desires satisfied or not. The problem is how do we know what we desire."
                                :url "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Slavoj_Zizek_in_Liverpool_%282340906835%29.jpg/2560px-Slavoj_Zizek_in_Liverpool_%282340906835%29.jpg?20181215181439"
                                :by "By Andy Miah from Liverpool, UK - Slavoj Zizek in Liverpool, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=75089965"}
                     :quote-05 {:txt "Love feels like a great misfortune, a monstrous parasite, a permanent state of emergency that ruins all small pleasures."
                                :url "https://upload.wikimedia.org/wikipedia/commons/e/e2/Slavoj_%C5%BDi%C5%BEek_2013_%288556931477%29.jpg"
                                :by "By UnB Agência - Palestra Slavoj ŽižekUploaded by Sporti, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=25187103"}}))

