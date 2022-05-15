goog.provide('zizek_quotes.quote');
zizek_quotes.quote.quote = (function zizek_quotes$quote$quote(){
var map__28406 = cljs.core.rand_nth(cljs.core.vals(cljs.core.deref(zizek_quotes.state.quotes)));
var map__28406__$1 = cljs.core.__destructure_map(map__28406);
var txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28406__$1,new cljs.core.Keyword(null,"txt","txt",626843688));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28406__$1,new cljs.core.Keyword(null,"url","url",276297046));
var by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28406__$1,new cljs.core.Keyword(null,"by","by",30600856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),txt], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"width","width",-384071477),(400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),by], null)], null)], null)], null);
});

//# sourceMappingURL=zizek_quotes.quote.js.map
