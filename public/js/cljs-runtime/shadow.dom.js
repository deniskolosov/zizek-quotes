goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21256 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21256(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21261 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21261(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19954 = coll;
var G__19955 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19954,G__19955) : shadow.dom.lazy_native_coll_seq.call(null,G__19954,G__19955));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19965 = arguments.length;
switch (G__19965) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19970 = arguments.length;
switch (G__19970) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19980 = arguments.length;
switch (G__19980) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19990 = arguments.length;
switch (G__19990) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19995 = arguments.length;
switch (G__19995) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20009 = arguments.length;
switch (G__20009) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20017){if((e20017 instanceof Object)){
var e = e20017;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20017;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20027 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20028 = null;
var count__20029 = (0);
var i__20030 = (0);
while(true){
if((i__20030 < count__20029)){
var el = chunk__20028.cljs$core$IIndexed$_nth$arity$2(null,i__20030);
var handler_21315__$1 = ((function (seq__20027,chunk__20028,count__20029,i__20030,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20027,chunk__20028,count__20029,i__20030,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21315__$1);


var G__21318 = seq__20027;
var G__21319 = chunk__20028;
var G__21320 = count__20029;
var G__21321 = (i__20030 + (1));
seq__20027 = G__21318;
chunk__20028 = G__21319;
count__20029 = G__21320;
i__20030 = G__21321;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20027);
if(temp__5753__auto__){
var seq__20027__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20027__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20027__$1);
var G__21324 = cljs.core.chunk_rest(seq__20027__$1);
var G__21325 = c__4679__auto__;
var G__21326 = cljs.core.count(c__4679__auto__);
var G__21327 = (0);
seq__20027 = G__21324;
chunk__20028 = G__21325;
count__20029 = G__21326;
i__20030 = G__21327;
continue;
} else {
var el = cljs.core.first(seq__20027__$1);
var handler_21328__$1 = ((function (seq__20027,chunk__20028,count__20029,i__20030,el,seq__20027__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20027,chunk__20028,count__20029,i__20030,el,seq__20027__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21328__$1);


var G__21330 = cljs.core.next(seq__20027__$1);
var G__21331 = null;
var G__21332 = (0);
var G__21333 = (0);
seq__20027 = G__21330;
chunk__20028 = G__21331;
count__20029 = G__21332;
i__20030 = G__21333;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20051 = arguments.length;
switch (G__20051) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20077 = cljs.core.seq(events);
var chunk__20079 = null;
var count__20080 = (0);
var i__20081 = (0);
while(true){
if((i__20081 < count__20080)){
var vec__20100 = chunk__20079.cljs$core$IIndexed$_nth$arity$2(null,i__20081);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21352 = seq__20077;
var G__21353 = chunk__20079;
var G__21354 = count__20080;
var G__21355 = (i__20081 + (1));
seq__20077 = G__21352;
chunk__20079 = G__21353;
count__20080 = G__21354;
i__20081 = G__21355;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20077);
if(temp__5753__auto__){
var seq__20077__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20077__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20077__$1);
var G__21357 = cljs.core.chunk_rest(seq__20077__$1);
var G__21358 = c__4679__auto__;
var G__21359 = cljs.core.count(c__4679__auto__);
var G__21360 = (0);
seq__20077 = G__21357;
chunk__20079 = G__21358;
count__20080 = G__21359;
i__20081 = G__21360;
continue;
} else {
var vec__20105 = cljs.core.first(seq__20077__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20105,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21365 = cljs.core.next(seq__20077__$1);
var G__21366 = null;
var G__21367 = (0);
var G__21368 = (0);
seq__20077 = G__21365;
chunk__20079 = G__21366;
count__20080 = G__21367;
i__20081 = G__21368;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20113 = cljs.core.seq(styles);
var chunk__20114 = null;
var count__20115 = (0);
var i__20116 = (0);
while(true){
if((i__20116 < count__20115)){
var vec__20130 = chunk__20114.cljs$core$IIndexed$_nth$arity$2(null,i__20116);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21371 = seq__20113;
var G__21372 = chunk__20114;
var G__21373 = count__20115;
var G__21374 = (i__20116 + (1));
seq__20113 = G__21371;
chunk__20114 = G__21372;
count__20115 = G__21373;
i__20116 = G__21374;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20113);
if(temp__5753__auto__){
var seq__20113__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20113__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20113__$1);
var G__21376 = cljs.core.chunk_rest(seq__20113__$1);
var G__21377 = c__4679__auto__;
var G__21378 = cljs.core.count(c__4679__auto__);
var G__21379 = (0);
seq__20113 = G__21376;
chunk__20114 = G__21377;
count__20115 = G__21378;
i__20116 = G__21379;
continue;
} else {
var vec__20139 = cljs.core.first(seq__20113__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20139,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21381 = cljs.core.next(seq__20113__$1);
var G__21382 = null;
var G__21383 = (0);
var G__21384 = (0);
seq__20113 = G__21381;
chunk__20114 = G__21382;
count__20115 = G__21383;
i__20116 = G__21384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20147_21386 = key;
var G__20147_21387__$1 = (((G__20147_21386 instanceof cljs.core.Keyword))?G__20147_21386.fqn:null);
switch (G__20147_21387__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21403 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_21403,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_21403,"aria-");
}
})())){
el.setAttribute(ks_21403,value);
} else {
(el[ks_21403] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20196){
var map__20199 = p__20196;
var map__20199__$1 = cljs.core.__destructure_map(map__20199);
var props = map__20199__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20204 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20204,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20204,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20204,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20215 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20215,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20215;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20231 = arguments.length;
switch (G__20231) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20280){
var vec__20282 = p__20280;
var seq__20283 = cljs.core.seq(vec__20282);
var first__20284 = cljs.core.first(seq__20283);
var seq__20283__$1 = cljs.core.next(seq__20283);
var nn = first__20284;
var first__20284__$1 = cljs.core.first(seq__20283__$1);
var seq__20283__$2 = cljs.core.next(seq__20283__$1);
var np = first__20284__$1;
var nc = seq__20283__$2;
var node = vec__20282;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20294 = nn;
var G__20295 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20294,G__20295) : create_fn.call(null,G__20294,G__20295));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20298 = nn;
var G__20299 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20298,G__20299) : create_fn.call(null,G__20298,G__20299));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20315 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20315,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20315,(1),null);
var seq__20323_21460 = cljs.core.seq(node_children);
var chunk__20324_21461 = null;
var count__20325_21462 = (0);
var i__20326_21463 = (0);
while(true){
if((i__20326_21463 < count__20325_21462)){
var child_struct_21465 = chunk__20324_21461.cljs$core$IIndexed$_nth$arity$2(null,i__20326_21463);
var children_21469 = shadow.dom.dom_node(child_struct_21465);
if(cljs.core.seq_QMARK_(children_21469)){
var seq__20403_21471 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21469));
var chunk__20405_21472 = null;
var count__20406_21473 = (0);
var i__20407_21474 = (0);
while(true){
if((i__20407_21474 < count__20406_21473)){
var child_21475 = chunk__20405_21472.cljs$core$IIndexed$_nth$arity$2(null,i__20407_21474);
if(cljs.core.truth_(child_21475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21475);


var G__21478 = seq__20403_21471;
var G__21479 = chunk__20405_21472;
var G__21480 = count__20406_21473;
var G__21481 = (i__20407_21474 + (1));
seq__20403_21471 = G__21478;
chunk__20405_21472 = G__21479;
count__20406_21473 = G__21480;
i__20407_21474 = G__21481;
continue;
} else {
var G__21482 = seq__20403_21471;
var G__21483 = chunk__20405_21472;
var G__21484 = count__20406_21473;
var G__21485 = (i__20407_21474 + (1));
seq__20403_21471 = G__21482;
chunk__20405_21472 = G__21483;
count__20406_21473 = G__21484;
i__20407_21474 = G__21485;
continue;
}
} else {
var temp__5753__auto___21486 = cljs.core.seq(seq__20403_21471);
if(temp__5753__auto___21486){
var seq__20403_21487__$1 = temp__5753__auto___21486;
if(cljs.core.chunked_seq_QMARK_(seq__20403_21487__$1)){
var c__4679__auto___21488 = cljs.core.chunk_first(seq__20403_21487__$1);
var G__21489 = cljs.core.chunk_rest(seq__20403_21487__$1);
var G__21490 = c__4679__auto___21488;
var G__21491 = cljs.core.count(c__4679__auto___21488);
var G__21492 = (0);
seq__20403_21471 = G__21489;
chunk__20405_21472 = G__21490;
count__20406_21473 = G__21491;
i__20407_21474 = G__21492;
continue;
} else {
var child_21493 = cljs.core.first(seq__20403_21487__$1);
if(cljs.core.truth_(child_21493)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21493);


var G__21494 = cljs.core.next(seq__20403_21487__$1);
var G__21495 = null;
var G__21496 = (0);
var G__21497 = (0);
seq__20403_21471 = G__21494;
chunk__20405_21472 = G__21495;
count__20406_21473 = G__21496;
i__20407_21474 = G__21497;
continue;
} else {
var G__21498 = cljs.core.next(seq__20403_21487__$1);
var G__21499 = null;
var G__21500 = (0);
var G__21501 = (0);
seq__20403_21471 = G__21498;
chunk__20405_21472 = G__21499;
count__20406_21473 = G__21500;
i__20407_21474 = G__21501;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21469);
}


var G__21502 = seq__20323_21460;
var G__21503 = chunk__20324_21461;
var G__21504 = count__20325_21462;
var G__21505 = (i__20326_21463 + (1));
seq__20323_21460 = G__21502;
chunk__20324_21461 = G__21503;
count__20325_21462 = G__21504;
i__20326_21463 = G__21505;
continue;
} else {
var temp__5753__auto___21507 = cljs.core.seq(seq__20323_21460);
if(temp__5753__auto___21507){
var seq__20323_21508__$1 = temp__5753__auto___21507;
if(cljs.core.chunked_seq_QMARK_(seq__20323_21508__$1)){
var c__4679__auto___21509 = cljs.core.chunk_first(seq__20323_21508__$1);
var G__21510 = cljs.core.chunk_rest(seq__20323_21508__$1);
var G__21511 = c__4679__auto___21509;
var G__21512 = cljs.core.count(c__4679__auto___21509);
var G__21513 = (0);
seq__20323_21460 = G__21510;
chunk__20324_21461 = G__21511;
count__20325_21462 = G__21512;
i__20326_21463 = G__21513;
continue;
} else {
var child_struct_21515 = cljs.core.first(seq__20323_21508__$1);
var children_21516 = shadow.dom.dom_node(child_struct_21515);
if(cljs.core.seq_QMARK_(children_21516)){
var seq__20468_21517 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21516));
var chunk__20470_21518 = null;
var count__20471_21519 = (0);
var i__20472_21520 = (0);
while(true){
if((i__20472_21520 < count__20471_21519)){
var child_21522 = chunk__20470_21518.cljs$core$IIndexed$_nth$arity$2(null,i__20472_21520);
if(cljs.core.truth_(child_21522)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21522);


var G__21523 = seq__20468_21517;
var G__21524 = chunk__20470_21518;
var G__21525 = count__20471_21519;
var G__21526 = (i__20472_21520 + (1));
seq__20468_21517 = G__21523;
chunk__20470_21518 = G__21524;
count__20471_21519 = G__21525;
i__20472_21520 = G__21526;
continue;
} else {
var G__21529 = seq__20468_21517;
var G__21530 = chunk__20470_21518;
var G__21531 = count__20471_21519;
var G__21532 = (i__20472_21520 + (1));
seq__20468_21517 = G__21529;
chunk__20470_21518 = G__21530;
count__20471_21519 = G__21531;
i__20472_21520 = G__21532;
continue;
}
} else {
var temp__5753__auto___21533__$1 = cljs.core.seq(seq__20468_21517);
if(temp__5753__auto___21533__$1){
var seq__20468_21535__$1 = temp__5753__auto___21533__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20468_21535__$1)){
var c__4679__auto___21537 = cljs.core.chunk_first(seq__20468_21535__$1);
var G__21538 = cljs.core.chunk_rest(seq__20468_21535__$1);
var G__21539 = c__4679__auto___21537;
var G__21540 = cljs.core.count(c__4679__auto___21537);
var G__21541 = (0);
seq__20468_21517 = G__21538;
chunk__20470_21518 = G__21539;
count__20471_21519 = G__21540;
i__20472_21520 = G__21541;
continue;
} else {
var child_21542 = cljs.core.first(seq__20468_21535__$1);
if(cljs.core.truth_(child_21542)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21542);


var G__21543 = cljs.core.next(seq__20468_21535__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__20468_21517 = G__21543;
chunk__20470_21518 = G__21544;
count__20471_21519 = G__21545;
i__20472_21520 = G__21546;
continue;
} else {
var G__21548 = cljs.core.next(seq__20468_21535__$1);
var G__21549 = null;
var G__21550 = (0);
var G__21551 = (0);
seq__20468_21517 = G__21548;
chunk__20470_21518 = G__21549;
count__20471_21519 = G__21550;
i__20472_21520 = G__21551;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21516);
}


var G__21555 = cljs.core.next(seq__20323_21508__$1);
var G__21556 = null;
var G__21557 = (0);
var G__21558 = (0);
seq__20323_21460 = G__21555;
chunk__20324_21461 = G__21556;
count__20325_21462 = G__21557;
i__20326_21463 = G__21558;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20518 = cljs.core.seq(node);
var chunk__20519 = null;
var count__20520 = (0);
var i__20521 = (0);
while(true){
if((i__20521 < count__20520)){
var n = chunk__20519.cljs$core$IIndexed$_nth$arity$2(null,i__20521);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21566 = seq__20518;
var G__21567 = chunk__20519;
var G__21568 = count__20520;
var G__21569 = (i__20521 + (1));
seq__20518 = G__21566;
chunk__20519 = G__21567;
count__20520 = G__21568;
i__20521 = G__21569;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20518);
if(temp__5753__auto__){
var seq__20518__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20518__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20518__$1);
var G__21572 = cljs.core.chunk_rest(seq__20518__$1);
var G__21573 = c__4679__auto__;
var G__21574 = cljs.core.count(c__4679__auto__);
var G__21575 = (0);
seq__20518 = G__21572;
chunk__20519 = G__21573;
count__20520 = G__21574;
i__20521 = G__21575;
continue;
} else {
var n = cljs.core.first(seq__20518__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21577 = cljs.core.next(seq__20518__$1);
var G__21578 = null;
var G__21579 = (0);
var G__21580 = (0);
seq__20518 = G__21577;
chunk__20519 = G__21578;
count__20520 = G__21579;
i__20521 = G__21580;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20533 = arguments.length;
switch (G__20533) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20543 = arguments.length;
switch (G__20543) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20562 = arguments.length;
switch (G__20562) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21589 = arguments.length;
var i__4865__auto___21590 = (0);
while(true){
if((i__4865__auto___21590 < len__4864__auto___21589)){
args__4870__auto__.push((arguments[i__4865__auto___21590]));

var G__21591 = (i__4865__auto___21590 + (1));
i__4865__auto___21590 = G__21591;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20586_21594 = cljs.core.seq(nodes);
var chunk__20587_21595 = null;
var count__20588_21596 = (0);
var i__20589_21597 = (0);
while(true){
if((i__20589_21597 < count__20588_21596)){
var node_21598 = chunk__20587_21595.cljs$core$IIndexed$_nth$arity$2(null,i__20589_21597);
fragment.appendChild(shadow.dom._to_dom(node_21598));


var G__21599 = seq__20586_21594;
var G__21600 = chunk__20587_21595;
var G__21601 = count__20588_21596;
var G__21602 = (i__20589_21597 + (1));
seq__20586_21594 = G__21599;
chunk__20587_21595 = G__21600;
count__20588_21596 = G__21601;
i__20589_21597 = G__21602;
continue;
} else {
var temp__5753__auto___21603 = cljs.core.seq(seq__20586_21594);
if(temp__5753__auto___21603){
var seq__20586_21604__$1 = temp__5753__auto___21603;
if(cljs.core.chunked_seq_QMARK_(seq__20586_21604__$1)){
var c__4679__auto___21605 = cljs.core.chunk_first(seq__20586_21604__$1);
var G__21606 = cljs.core.chunk_rest(seq__20586_21604__$1);
var G__21607 = c__4679__auto___21605;
var G__21608 = cljs.core.count(c__4679__auto___21605);
var G__21609 = (0);
seq__20586_21594 = G__21606;
chunk__20587_21595 = G__21607;
count__20588_21596 = G__21608;
i__20589_21597 = G__21609;
continue;
} else {
var node_21611 = cljs.core.first(seq__20586_21604__$1);
fragment.appendChild(shadow.dom._to_dom(node_21611));


var G__21612 = cljs.core.next(seq__20586_21604__$1);
var G__21613 = null;
var G__21614 = (0);
var G__21615 = (0);
seq__20586_21594 = G__21612;
chunk__20587_21595 = G__21613;
count__20588_21596 = G__21614;
i__20589_21597 = G__21615;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20581){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20581));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20606_21617 = cljs.core.seq(scripts);
var chunk__20607_21618 = null;
var count__20608_21619 = (0);
var i__20609_21620 = (0);
while(true){
if((i__20609_21620 < count__20608_21619)){
var vec__20625_21621 = chunk__20607_21618.cljs$core$IIndexed$_nth$arity$2(null,i__20609_21620);
var script_tag_21622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625_21621,(0),null);
var script_body_21623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625_21621,(1),null);
eval(script_body_21623);


var G__21624 = seq__20606_21617;
var G__21625 = chunk__20607_21618;
var G__21626 = count__20608_21619;
var G__21627 = (i__20609_21620 + (1));
seq__20606_21617 = G__21624;
chunk__20607_21618 = G__21625;
count__20608_21619 = G__21626;
i__20609_21620 = G__21627;
continue;
} else {
var temp__5753__auto___21643 = cljs.core.seq(seq__20606_21617);
if(temp__5753__auto___21643){
var seq__20606_21644__$1 = temp__5753__auto___21643;
if(cljs.core.chunked_seq_QMARK_(seq__20606_21644__$1)){
var c__4679__auto___21645 = cljs.core.chunk_first(seq__20606_21644__$1);
var G__21646 = cljs.core.chunk_rest(seq__20606_21644__$1);
var G__21647 = c__4679__auto___21645;
var G__21648 = cljs.core.count(c__4679__auto___21645);
var G__21649 = (0);
seq__20606_21617 = G__21646;
chunk__20607_21618 = G__21647;
count__20608_21619 = G__21648;
i__20609_21620 = G__21649;
continue;
} else {
var vec__20630_21650 = cljs.core.first(seq__20606_21644__$1);
var script_tag_21651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20630_21650,(0),null);
var script_body_21652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20630_21650,(1),null);
eval(script_body_21652);


var G__21653 = cljs.core.next(seq__20606_21644__$1);
var G__21654 = null;
var G__21655 = (0);
var G__21656 = (0);
seq__20606_21617 = G__21653;
chunk__20607_21618 = G__21654;
count__20608_21619 = G__21655;
i__20609_21620 = G__21656;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20637){
var vec__20639 = p__20637;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20639,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20639,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20655 = arguments.length;
switch (G__20655) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20681 = cljs.core.seq(style_keys);
var chunk__20682 = null;
var count__20683 = (0);
var i__20684 = (0);
while(true){
if((i__20684 < count__20683)){
var it = chunk__20682.cljs$core$IIndexed$_nth$arity$2(null,i__20684);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21666 = seq__20681;
var G__21667 = chunk__20682;
var G__21668 = count__20683;
var G__21669 = (i__20684 + (1));
seq__20681 = G__21666;
chunk__20682 = G__21667;
count__20683 = G__21668;
i__20684 = G__21669;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20681);
if(temp__5753__auto__){
var seq__20681__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20681__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20681__$1);
var G__21670 = cljs.core.chunk_rest(seq__20681__$1);
var G__21671 = c__4679__auto__;
var G__21672 = cljs.core.count(c__4679__auto__);
var G__21673 = (0);
seq__20681 = G__21670;
chunk__20682 = G__21671;
count__20683 = G__21672;
i__20684 = G__21673;
continue;
} else {
var it = cljs.core.first(seq__20681__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21674 = cljs.core.next(seq__20681__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__20681 = G__21674;
chunk__20682 = G__21675;
count__20683 = G__21676;
i__20684 = G__21677;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k20688,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__20695 = k20688;
var G__20695__$1 = (((G__20695 instanceof cljs.core.Keyword))?G__20695.fqn:null);
switch (G__20695__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20688,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__20696){
var vec__20697 = p__20696;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20697,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20697,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20687){
var self__ = this;
var G__20687__$1 = this;
return (new cljs.core.RecordIter((0),G__20687__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20689,other20690){
var self__ = this;
var this20689__$1 = this;
return (((!((other20690 == null)))) && ((((this20689__$1.constructor === other20690.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20689__$1.x,other20690.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20689__$1.y,other20690.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20689__$1.__extmap,other20690.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k20688){
var self__ = this;
var this__4509__auto____$1 = this;
var G__20731 = k20688;
var G__20731__$1 = (((G__20731 instanceof cljs.core.Keyword))?G__20731.fqn:null);
switch (G__20731__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20688);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__20687){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__20734 = cljs.core.keyword_identical_QMARK_;
var expr__20735 = k__4511__auto__;
if(cljs.core.truth_((pred__20734.cljs$core$IFn$_invoke$arity$2 ? pred__20734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20735) : pred__20734.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20735)))){
return (new shadow.dom.Coordinate(G__20687,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20734.cljs$core$IFn$_invoke$arity$2 ? pred__20734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20735) : pred__20734.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20735)))){
return (new shadow.dom.Coordinate(self__.x,G__20687,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__20687),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__20687){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20687,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20692){
var extmap__4542__auto__ = (function (){var G__20754 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20692,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20692)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20754);
} else {
return G__20754;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20692),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20692),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k20767,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__20777 = k20767;
var G__20777__$1 = (((G__20777 instanceof cljs.core.Keyword))?G__20777.fqn:null);
switch (G__20777__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20767,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__20781){
var vec__20784 = p__20781;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20784,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20784,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20766){
var self__ = this;
var G__20766__$1 = this;
return (new cljs.core.RecordIter((0),G__20766__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20768,other20769){
var self__ = this;
var this20768__$1 = this;
return (((!((other20769 == null)))) && ((((this20768__$1.constructor === other20769.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20768__$1.w,other20769.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20768__$1.h,other20769.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20768__$1.__extmap,other20769.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k20767){
var self__ = this;
var this__4509__auto____$1 = this;
var G__20802 = k20767;
var G__20802__$1 = (((G__20802 instanceof cljs.core.Keyword))?G__20802.fqn:null);
switch (G__20802__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20767);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__20766){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__20809 = cljs.core.keyword_identical_QMARK_;
var expr__20810 = k__4511__auto__;
if(cljs.core.truth_((pred__20809.cljs$core$IFn$_invoke$arity$2 ? pred__20809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20810) : pred__20809.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20810)))){
return (new shadow.dom.Size(G__20766,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20809.cljs$core$IFn$_invoke$arity$2 ? pred__20809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20810) : pred__20809.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20810)))){
return (new shadow.dom.Size(self__.w,G__20766,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__20766),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__20766){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20766,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20771){
var extmap__4542__auto__ = (function (){var G__20833 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20771,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20771)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20833);
} else {
return G__20833;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20771),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20771),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__21743 = (i + (1));
var G__21744 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21743;
ret = G__21744;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20861){
var vec__20862 = p__20861;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20875 = arguments.length;
switch (G__20875) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21764 = ps;
var G__21765 = (i + (1));
el__$1 = G__21764;
i = G__21765;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20931 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20934_21775 = cljs.core.seq(props);
var chunk__20935_21776 = null;
var count__20936_21777 = (0);
var i__20937_21778 = (0);
while(true){
if((i__20937_21778 < count__20936_21777)){
var vec__20959_21779 = chunk__20935_21776.cljs$core$IIndexed$_nth$arity$2(null,i__20937_21778);
var k_21780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959_21779,(0),null);
var v_21781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959_21779,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_21780);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21780),v_21781);


var G__21782 = seq__20934_21775;
var G__21783 = chunk__20935_21776;
var G__21784 = count__20936_21777;
var G__21785 = (i__20937_21778 + (1));
seq__20934_21775 = G__21782;
chunk__20935_21776 = G__21783;
count__20936_21777 = G__21784;
i__20937_21778 = G__21785;
continue;
} else {
var temp__5753__auto___21786 = cljs.core.seq(seq__20934_21775);
if(temp__5753__auto___21786){
var seq__20934_21787__$1 = temp__5753__auto___21786;
if(cljs.core.chunked_seq_QMARK_(seq__20934_21787__$1)){
var c__4679__auto___21790 = cljs.core.chunk_first(seq__20934_21787__$1);
var G__21791 = cljs.core.chunk_rest(seq__20934_21787__$1);
var G__21792 = c__4679__auto___21790;
var G__21793 = cljs.core.count(c__4679__auto___21790);
var G__21794 = (0);
seq__20934_21775 = G__21791;
chunk__20935_21776 = G__21792;
count__20936_21777 = G__21793;
i__20937_21778 = G__21794;
continue;
} else {
var vec__20962_21795 = cljs.core.first(seq__20934_21787__$1);
var k_21796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20962_21795,(0),null);
var v_21797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20962_21795,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_21796);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21796),v_21797);


var G__21798 = cljs.core.next(seq__20934_21787__$1);
var G__21799 = null;
var G__21800 = (0);
var G__21801 = (0);
seq__20934_21775 = G__21798;
chunk__20935_21776 = G__21799;
count__20936_21777 = G__21800;
i__20937_21778 = G__21801;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20980 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20980,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20980,(1),null);
var seq__20983_21802 = cljs.core.seq(node_children);
var chunk__20985_21803 = null;
var count__20986_21804 = (0);
var i__20987_21805 = (0);
while(true){
if((i__20987_21805 < count__20986_21804)){
var child_struct_21806 = chunk__20985_21803.cljs$core$IIndexed$_nth$arity$2(null,i__20987_21805);
if((!((child_struct_21806 == null)))){
if(typeof child_struct_21806 === 'string'){
var text_21808 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21808),child_struct_21806].join(''));
} else {
var children_21810 = shadow.dom.svg_node(child_struct_21806);
if(cljs.core.seq_QMARK_(children_21810)){
var seq__21042_21811 = cljs.core.seq(children_21810);
var chunk__21044_21812 = null;
var count__21045_21813 = (0);
var i__21046_21814 = (0);
while(true){
if((i__21046_21814 < count__21045_21813)){
var child_21815 = chunk__21044_21812.cljs$core$IIndexed$_nth$arity$2(null,i__21046_21814);
if(cljs.core.truth_(child_21815)){
node.appendChild(child_21815);


var G__21818 = seq__21042_21811;
var G__21819 = chunk__21044_21812;
var G__21820 = count__21045_21813;
var G__21821 = (i__21046_21814 + (1));
seq__21042_21811 = G__21818;
chunk__21044_21812 = G__21819;
count__21045_21813 = G__21820;
i__21046_21814 = G__21821;
continue;
} else {
var G__21822 = seq__21042_21811;
var G__21823 = chunk__21044_21812;
var G__21824 = count__21045_21813;
var G__21825 = (i__21046_21814 + (1));
seq__21042_21811 = G__21822;
chunk__21044_21812 = G__21823;
count__21045_21813 = G__21824;
i__21046_21814 = G__21825;
continue;
}
} else {
var temp__5753__auto___21826 = cljs.core.seq(seq__21042_21811);
if(temp__5753__auto___21826){
var seq__21042_21827__$1 = temp__5753__auto___21826;
if(cljs.core.chunked_seq_QMARK_(seq__21042_21827__$1)){
var c__4679__auto___21828 = cljs.core.chunk_first(seq__21042_21827__$1);
var G__21829 = cljs.core.chunk_rest(seq__21042_21827__$1);
var G__21830 = c__4679__auto___21828;
var G__21831 = cljs.core.count(c__4679__auto___21828);
var G__21832 = (0);
seq__21042_21811 = G__21829;
chunk__21044_21812 = G__21830;
count__21045_21813 = G__21831;
i__21046_21814 = G__21832;
continue;
} else {
var child_21833 = cljs.core.first(seq__21042_21827__$1);
if(cljs.core.truth_(child_21833)){
node.appendChild(child_21833);


var G__21834 = cljs.core.next(seq__21042_21827__$1);
var G__21835 = null;
var G__21836 = (0);
var G__21837 = (0);
seq__21042_21811 = G__21834;
chunk__21044_21812 = G__21835;
count__21045_21813 = G__21836;
i__21046_21814 = G__21837;
continue;
} else {
var G__21838 = cljs.core.next(seq__21042_21827__$1);
var G__21839 = null;
var G__21840 = (0);
var G__21841 = (0);
seq__21042_21811 = G__21838;
chunk__21044_21812 = G__21839;
count__21045_21813 = G__21840;
i__21046_21814 = G__21841;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21810);
}
}


var G__21842 = seq__20983_21802;
var G__21843 = chunk__20985_21803;
var G__21844 = count__20986_21804;
var G__21845 = (i__20987_21805 + (1));
seq__20983_21802 = G__21842;
chunk__20985_21803 = G__21843;
count__20986_21804 = G__21844;
i__20987_21805 = G__21845;
continue;
} else {
var G__21846 = seq__20983_21802;
var G__21847 = chunk__20985_21803;
var G__21848 = count__20986_21804;
var G__21849 = (i__20987_21805 + (1));
seq__20983_21802 = G__21846;
chunk__20985_21803 = G__21847;
count__20986_21804 = G__21848;
i__20987_21805 = G__21849;
continue;
}
} else {
var temp__5753__auto___21850 = cljs.core.seq(seq__20983_21802);
if(temp__5753__auto___21850){
var seq__20983_21851__$1 = temp__5753__auto___21850;
if(cljs.core.chunked_seq_QMARK_(seq__20983_21851__$1)){
var c__4679__auto___21852 = cljs.core.chunk_first(seq__20983_21851__$1);
var G__21853 = cljs.core.chunk_rest(seq__20983_21851__$1);
var G__21854 = c__4679__auto___21852;
var G__21855 = cljs.core.count(c__4679__auto___21852);
var G__21856 = (0);
seq__20983_21802 = G__21853;
chunk__20985_21803 = G__21854;
count__20986_21804 = G__21855;
i__20987_21805 = G__21856;
continue;
} else {
var child_struct_21857 = cljs.core.first(seq__20983_21851__$1);
if((!((child_struct_21857 == null)))){
if(typeof child_struct_21857 === 'string'){
var text_21860 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21860),child_struct_21857].join(''));
} else {
var children_21865 = shadow.dom.svg_node(child_struct_21857);
if(cljs.core.seq_QMARK_(children_21865)){
var seq__21092_21866 = cljs.core.seq(children_21865);
var chunk__21094_21867 = null;
var count__21095_21868 = (0);
var i__21096_21869 = (0);
while(true){
if((i__21096_21869 < count__21095_21868)){
var child_21871 = chunk__21094_21867.cljs$core$IIndexed$_nth$arity$2(null,i__21096_21869);
if(cljs.core.truth_(child_21871)){
node.appendChild(child_21871);


var G__21872 = seq__21092_21866;
var G__21873 = chunk__21094_21867;
var G__21874 = count__21095_21868;
var G__21875 = (i__21096_21869 + (1));
seq__21092_21866 = G__21872;
chunk__21094_21867 = G__21873;
count__21095_21868 = G__21874;
i__21096_21869 = G__21875;
continue;
} else {
var G__21876 = seq__21092_21866;
var G__21877 = chunk__21094_21867;
var G__21878 = count__21095_21868;
var G__21879 = (i__21096_21869 + (1));
seq__21092_21866 = G__21876;
chunk__21094_21867 = G__21877;
count__21095_21868 = G__21878;
i__21096_21869 = G__21879;
continue;
}
} else {
var temp__5753__auto___21880__$1 = cljs.core.seq(seq__21092_21866);
if(temp__5753__auto___21880__$1){
var seq__21092_21881__$1 = temp__5753__auto___21880__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21092_21881__$1)){
var c__4679__auto___21882 = cljs.core.chunk_first(seq__21092_21881__$1);
var G__21883 = cljs.core.chunk_rest(seq__21092_21881__$1);
var G__21884 = c__4679__auto___21882;
var G__21885 = cljs.core.count(c__4679__auto___21882);
var G__21886 = (0);
seq__21092_21866 = G__21883;
chunk__21094_21867 = G__21884;
count__21095_21868 = G__21885;
i__21096_21869 = G__21886;
continue;
} else {
var child_21887 = cljs.core.first(seq__21092_21881__$1);
if(cljs.core.truth_(child_21887)){
node.appendChild(child_21887);


var G__21888 = cljs.core.next(seq__21092_21881__$1);
var G__21889 = null;
var G__21890 = (0);
var G__21891 = (0);
seq__21092_21866 = G__21888;
chunk__21094_21867 = G__21889;
count__21095_21868 = G__21890;
i__21096_21869 = G__21891;
continue;
} else {
var G__21892 = cljs.core.next(seq__21092_21881__$1);
var G__21893 = null;
var G__21894 = (0);
var G__21895 = (0);
seq__21092_21866 = G__21892;
chunk__21094_21867 = G__21893;
count__21095_21868 = G__21894;
i__21096_21869 = G__21895;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21865);
}
}


var G__21896 = cljs.core.next(seq__20983_21851__$1);
var G__21897 = null;
var G__21898 = (0);
var G__21899 = (0);
seq__20983_21802 = G__21896;
chunk__20985_21803 = G__21897;
count__20986_21804 = G__21898;
i__20987_21805 = G__21899;
continue;
} else {
var G__21900 = cljs.core.next(seq__20983_21851__$1);
var G__21901 = null;
var G__21902 = (0);
var G__21903 = (0);
seq__20983_21802 = G__21900;
chunk__20985_21803 = G__21901;
count__20986_21804 = G__21902;
i__20987_21805 = G__21903;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21904 = arguments.length;
var i__4865__auto___21905 = (0);
while(true){
if((i__4865__auto___21905 < len__4864__auto___21904)){
args__4870__auto__.push((arguments[i__4865__auto___21905]));

var G__21907 = (i__4865__auto___21905 + (1));
i__4865__auto___21905 = G__21907;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21172){
var G__21173 = cljs.core.first(seq21172);
var seq21172__$1 = cljs.core.next(seq21172);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21173,seq21172__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__21182 = arguments.length;
switch (G__21182) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__17537__auto___21911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_21197){
var state_val_21198 = (state_21197[(1)]);
if((state_val_21198 === (1))){
var state_21197__$1 = state_21197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21197__$1,(2),once_or_cleanup);
} else {
if((state_val_21198 === (2))){
var inst_21194 = (state_21197[(2)]);
var inst_21195 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21197__$1 = (function (){var statearr_21204 = state_21197;
(statearr_21204[(7)] = inst_21194);

return statearr_21204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21197__$1,inst_21195);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17153__auto__ = null;
var shadow$dom$state_machine__17153__auto____0 = (function (){
var statearr_21207 = [null,null,null,null,null,null,null,null];
(statearr_21207[(0)] = shadow$dom$state_machine__17153__auto__);

(statearr_21207[(1)] = (1));

return statearr_21207;
});
var shadow$dom$state_machine__17153__auto____1 = (function (state_21197){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_21197);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e21210){var ex__17156__auto__ = e21210;
var statearr_21212_21916 = state_21197;
(statearr_21212_21916[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_21197[(4)]))){
var statearr_21213_21917 = state_21197;
(statearr_21213_21917[(1)] = cljs.core.first((state_21197[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21918 = state_21197;
state_21197 = G__21918;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
shadow$dom$state_machine__17153__auto__ = function(state_21197){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17153__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17153__auto____1.call(this,state_21197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17153__auto____0;
shadow$dom$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17153__auto____1;
return shadow$dom$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_21216 = f__17538__auto__();
(statearr_21216[(6)] = c__17537__auto___21911);

return statearr_21216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
