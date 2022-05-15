goog.provide('zizek_quotes.core');
zizek_quotes.core.home_page = (function zizek_quotes$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zizek_quotes.quote.quote], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next quote!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.location.reload();
})], null)], null)], null);
});
zizek_quotes.core.mount_root = (function zizek_quotes$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zizek_quotes.core.home_page], null),document.getElementById("app"));
});
zizek_quotes.core.init_BANG_ = (function zizek_quotes$core$init_BANG_(){
return zizek_quotes.core.mount_root();
});
goog.exportSymbol('zizek_quotes.core.init_BANG_', zizek_quotes.core.init_BANG_);

//# sourceMappingURL=zizek_quotes.core.js.map
