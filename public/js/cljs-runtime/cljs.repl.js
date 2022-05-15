goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20023){
var map__20024 = p__20023;
var map__20024__$1 = cljs.core.__destructure_map(map__20024);
var m = map__20024__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20024__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20032_20409 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20033_20410 = null;
var count__20034_20411 = (0);
var i__20035_20412 = (0);
while(true){
if((i__20035_20412 < count__20034_20411)){
var f_20414 = chunk__20033_20410.cljs$core$IIndexed$_nth$arity$2(null,i__20035_20412);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20414], 0));


var G__20415 = seq__20032_20409;
var G__20416 = chunk__20033_20410;
var G__20417 = count__20034_20411;
var G__20418 = (i__20035_20412 + (1));
seq__20032_20409 = G__20415;
chunk__20033_20410 = G__20416;
count__20034_20411 = G__20417;
i__20035_20412 = G__20418;
continue;
} else {
var temp__5753__auto___20419 = cljs.core.seq(seq__20032_20409);
if(temp__5753__auto___20419){
var seq__20032_20420__$1 = temp__5753__auto___20419;
if(cljs.core.chunked_seq_QMARK_(seq__20032_20420__$1)){
var c__4679__auto___20422 = cljs.core.chunk_first(seq__20032_20420__$1);
var G__20423 = cljs.core.chunk_rest(seq__20032_20420__$1);
var G__20424 = c__4679__auto___20422;
var G__20425 = cljs.core.count(c__4679__auto___20422);
var G__20426 = (0);
seq__20032_20409 = G__20423;
chunk__20033_20410 = G__20424;
count__20034_20411 = G__20425;
i__20035_20412 = G__20426;
continue;
} else {
var f_20431 = cljs.core.first(seq__20032_20420__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20431], 0));


var G__20432 = cljs.core.next(seq__20032_20420__$1);
var G__20433 = null;
var G__20434 = (0);
var G__20435 = (0);
seq__20032_20409 = G__20432;
chunk__20033_20410 = G__20433;
count__20034_20411 = G__20434;
i__20035_20412 = G__20435;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20436 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20436], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20436)))?cljs.core.second(arglists_20436):arglists_20436)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20053_20439 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20054_20440 = null;
var count__20055_20441 = (0);
var i__20056_20442 = (0);
while(true){
if((i__20056_20442 < count__20055_20441)){
var vec__20073_20443 = chunk__20054_20440.cljs$core$IIndexed$_nth$arity$2(null,i__20056_20442);
var name_20444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20073_20443,(0),null);
var map__20076_20445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20073_20443,(1),null);
var map__20076_20446__$1 = cljs.core.__destructure_map(map__20076_20445);
var doc_20447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20076_20446__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20076_20446__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20444], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20448], 0));

if(cljs.core.truth_(doc_20447)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20447], 0));
} else {
}


var G__20450 = seq__20053_20439;
var G__20451 = chunk__20054_20440;
var G__20452 = count__20055_20441;
var G__20453 = (i__20056_20442 + (1));
seq__20053_20439 = G__20450;
chunk__20054_20440 = G__20451;
count__20055_20441 = G__20452;
i__20056_20442 = G__20453;
continue;
} else {
var temp__5753__auto___20454 = cljs.core.seq(seq__20053_20439);
if(temp__5753__auto___20454){
var seq__20053_20455__$1 = temp__5753__auto___20454;
if(cljs.core.chunked_seq_QMARK_(seq__20053_20455__$1)){
var c__4679__auto___20456 = cljs.core.chunk_first(seq__20053_20455__$1);
var G__20458 = cljs.core.chunk_rest(seq__20053_20455__$1);
var G__20459 = c__4679__auto___20456;
var G__20460 = cljs.core.count(c__4679__auto___20456);
var G__20461 = (0);
seq__20053_20439 = G__20458;
chunk__20054_20440 = G__20459;
count__20055_20441 = G__20460;
i__20056_20442 = G__20461;
continue;
} else {
var vec__20094_20462 = cljs.core.first(seq__20053_20455__$1);
var name_20463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20094_20462,(0),null);
var map__20097_20464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20094_20462,(1),null);
var map__20097_20465__$1 = cljs.core.__destructure_map(map__20097_20464);
var doc_20466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20097_20465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20097_20465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20463], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20467], 0));

if(cljs.core.truth_(doc_20466)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20466], 0));
} else {
}


var G__20476 = cljs.core.next(seq__20053_20455__$1);
var G__20477 = null;
var G__20478 = (0);
var G__20479 = (0);
seq__20053_20439 = G__20476;
chunk__20054_20440 = G__20477;
count__20055_20441 = G__20478;
i__20056_20442 = G__20479;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20108 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20109 = null;
var count__20110 = (0);
var i__20111 = (0);
while(true){
if((i__20111 < count__20110)){
var role = chunk__20109.cljs$core$IIndexed$_nth$arity$2(null,i__20111);
var temp__5753__auto___20484__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___20484__$1)){
var spec_20485 = temp__5753__auto___20484__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20485)], 0));
} else {
}


var G__20486 = seq__20108;
var G__20487 = chunk__20109;
var G__20488 = count__20110;
var G__20489 = (i__20111 + (1));
seq__20108 = G__20486;
chunk__20109 = G__20487;
count__20110 = G__20488;
i__20111 = G__20489;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__20108);
if(temp__5753__auto____$1){
var seq__20108__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20108__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20108__$1);
var G__20490 = cljs.core.chunk_rest(seq__20108__$1);
var G__20491 = c__4679__auto__;
var G__20492 = cljs.core.count(c__4679__auto__);
var G__20493 = (0);
seq__20108 = G__20490;
chunk__20109 = G__20491;
count__20110 = G__20492;
i__20111 = G__20493;
continue;
} else {
var role = cljs.core.first(seq__20108__$1);
var temp__5753__auto___20494__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___20494__$2)){
var spec_20495 = temp__5753__auto___20494__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20495)], 0));
} else {
}


var G__20496 = cljs.core.next(seq__20108__$1);
var G__20497 = null;
var G__20498 = (0);
var G__20499 = (0);
seq__20108 = G__20496;
chunk__20109 = G__20497;
count__20110 = G__20498;
i__20111 = G__20499;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20500 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20501 = cljs.core.ex_cause(t);
via = G__20500;
t = G__20501;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20159 = datafied_throwable;
var map__20159__$1 = cljs.core.__destructure_map(map__20159);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20159__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20159__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20159__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20160 = cljs.core.last(via);
var map__20160__$1 = cljs.core.__destructure_map(map__20160);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20160__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20160__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20160__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20161 = data;
var map__20161__$1 = cljs.core.__destructure_map(map__20161);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20162 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20162__$1 = cljs.core.__destructure_map(map__20162);
var top_data = map__20162__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20168 = phase;
var G__20168__$1 = (((G__20168 instanceof cljs.core.Keyword))?G__20168.fqn:null);
switch (G__20168__$1) {
case "read-source":
var map__20174 = data;
var map__20174__$1 = cljs.core.__destructure_map(map__20174);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20174__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20174__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20180 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20180__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20180,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20180);
var G__20180__$2 = (cljs.core.truth_((function (){var fexpr__20191 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20191.cljs$core$IFn$_invoke$arity$1 ? fexpr__20191.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20191.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20180__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20180__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20180__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20194 = top_data;
var G__20194__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20194,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20194);
var G__20194__$2 = (cljs.core.truth_((function (){var fexpr__20195 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20195.cljs$core$IFn$_invoke$arity$1 ? fexpr__20195.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20195.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20194__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20194__$1);
var G__20194__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20194__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20194__$2);
var G__20194__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20194__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20194__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20194__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20194__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20211 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(3),null);
var G__20217 = top_data;
var G__20217__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20217,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20217);
var G__20217__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20217__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20217__$1);
var G__20217__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20217__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20217__$2);
var G__20217__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20217__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20217__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20217__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20217__$4;
}

break;
case "execution":
var vec__20236 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20236,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20236,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20236,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20236,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20155_SHARP_){
var or__4253__auto__ = (p1__20155_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__20250 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20250.cljs$core$IFn$_invoke$arity$1 ? fexpr__20250.cljs$core$IFn$_invoke$arity$1(p1__20155_SHARP_) : fexpr__20250.call(null,p1__20155_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__20268 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20268__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20268,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20268);
var G__20268__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20268__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20268__$1);
var G__20268__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20268__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20268__$2);
var G__20268__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20268__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20268__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20268__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20268__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20168__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20300){
var map__20305 = p__20300;
var map__20305__$1 = cljs.core.__destructure_map(map__20305);
var triage_data = map__20305__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20338 = phase;
var G__20338__$1 = (((G__20338 instanceof cljs.core.Keyword))?G__20338.fqn:null);
switch (G__20338__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20339 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20341 = loc;
var G__20342 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20344_20537 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20345_20538 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20346_20539 = true;
var _STAR_print_fn_STAR__temp_val__20347_20540 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20346_20539);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20347_20540);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20287_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20287_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20345_20538);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20344_20537);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20339,G__20340,G__20341,G__20342) : format.call(null,G__20339,G__20340,G__20341,G__20342));

break;
case "macroexpansion":
var G__20352 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20353 = cause_type;
var G__20354 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20355 = loc;
var G__20356 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20352,G__20353,G__20354,G__20355,G__20356) : format.call(null,G__20352,G__20353,G__20354,G__20355,G__20356));

break;
case "compile-syntax-check":
var G__20358 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20359 = cause_type;
var G__20360 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20361 = loc;
var G__20362 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20358,G__20359,G__20360,G__20361,G__20362) : format.call(null,G__20358,G__20359,G__20360,G__20361,G__20362));

break;
case "compilation":
var G__20365 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20366 = cause_type;
var G__20367 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20368 = loc;
var G__20369 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20365,G__20366,G__20367,G__20368,G__20369) : format.call(null,G__20365,G__20366,G__20367,G__20368,G__20369));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20372 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20373 = symbol;
var G__20374 = loc;
var G__20375 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20377_20546 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20378_20547 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20379_20548 = true;
var _STAR_print_fn_STAR__temp_val__20380_20549 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20379_20548);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20380_20549);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20292_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20292_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20378_20547);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20377_20546);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20372,G__20373,G__20374,G__20375) : format.call(null,G__20372,G__20373,G__20374,G__20375));
} else {
var G__20392 = "Execution error%s at %s(%s).\n%s\n";
var G__20393 = cause_type;
var G__20394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20395 = loc;
var G__20396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20392,G__20393,G__20394,G__20395,G__20396) : format.call(null,G__20392,G__20393,G__20394,G__20395,G__20396));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20338__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
