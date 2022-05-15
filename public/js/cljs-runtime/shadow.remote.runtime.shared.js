goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17461,res){
var map__17463 = p__17461;
var map__17463__$1 = cljs.core.__destructure_map(map__17463);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17465 = res;
var G__17465__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17465,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17465);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17465__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17465__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17467 = arguments.length;
switch (G__17467) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17471,msg,handlers,timeout_after_ms){
var map__17472 = p__17471;
var map__17472__$1 = cljs.core.__destructure_map(map__17472);
var runtime = map__17472__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17683 = arguments.length;
var i__4865__auto___17684 = (0);
while(true){
if((i__4865__auto___17684 < len__4864__auto___17683)){
args__4870__auto__.push((arguments[i__4865__auto___17684]));

var G__17685 = (i__4865__auto___17684 + (1));
i__4865__auto___17684 = G__17685;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17477,ev,args){
var map__17478 = p__17477;
var map__17478__$1 = cljs.core.__destructure_map(map__17478);
var runtime = map__17478__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17478__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17479 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17482 = null;
var count__17483 = (0);
var i__17484 = (0);
while(true){
if((i__17484 < count__17483)){
var ext = chunk__17482.cljs$core$IIndexed$_nth$arity$2(null,i__17484);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17687 = seq__17479;
var G__17688 = chunk__17482;
var G__17689 = count__17483;
var G__17690 = (i__17484 + (1));
seq__17479 = G__17687;
chunk__17482 = G__17688;
count__17483 = G__17689;
i__17484 = G__17690;
continue;
} else {
var G__17691 = seq__17479;
var G__17692 = chunk__17482;
var G__17693 = count__17483;
var G__17694 = (i__17484 + (1));
seq__17479 = G__17691;
chunk__17482 = G__17692;
count__17483 = G__17693;
i__17484 = G__17694;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17479);
if(temp__5753__auto__){
var seq__17479__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17479__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17479__$1);
var G__17695 = cljs.core.chunk_rest(seq__17479__$1);
var G__17696 = c__4679__auto__;
var G__17697 = cljs.core.count(c__4679__auto__);
var G__17698 = (0);
seq__17479 = G__17695;
chunk__17482 = G__17696;
count__17483 = G__17697;
i__17484 = G__17698;
continue;
} else {
var ext = cljs.core.first(seq__17479__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17703 = cljs.core.next(seq__17479__$1);
var G__17704 = null;
var G__17705 = (0);
var G__17706 = (0);
seq__17479 = G__17703;
chunk__17482 = G__17704;
count__17483 = G__17705;
i__17484 = G__17706;
continue;
} else {
var G__17707 = cljs.core.next(seq__17479__$1);
var G__17708 = null;
var G__17709 = (0);
var G__17710 = (0);
seq__17479 = G__17707;
chunk__17482 = G__17708;
count__17483 = G__17709;
i__17484 = G__17710;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17473){
var G__17474 = cljs.core.first(seq17473);
var seq17473__$1 = cljs.core.next(seq17473);
var G__17475 = cljs.core.first(seq17473__$1);
var seq17473__$2 = cljs.core.next(seq17473__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17474,G__17475,seq17473__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17487,p__17488){
var map__17489 = p__17487;
var map__17489__$1 = cljs.core.__destructure_map(map__17489);
var runtime = map__17489__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17489__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17490 = p__17488;
var map__17490__$1 = cljs.core.__destructure_map(map__17490);
var msg = map__17490__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17491 = cljs.core.deref(state_ref);
var map__17491__$1 = cljs.core.__destructure_map(map__17491);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17491__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17491__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17492){
var map__17493 = p__17492;
var map__17493__$1 = cljs.core.__destructure_map(map__17493);
var runtime = map__17493__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17493__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17495,msg){
var map__17496 = p__17495;
var map__17496__$1 = cljs.core.__destructure_map(map__17496);
var runtime = map__17496__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17502,key,p__17503){
var map__17504 = p__17502;
var map__17504__$1 = cljs.core.__destructure_map(map__17504);
var state = map__17504__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17504__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17505 = p__17503;
var map__17505__$1 = cljs.core.__destructure_map(map__17505);
var spec = map__17505__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17520,key,spec){
var map__17522 = p__17520;
var map__17522__$1 = cljs.core.__destructure_map(map__17522);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17523_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17523_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17524_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17524_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17525_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17525_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17526_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17526_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17527_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17527_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17552,key){
var map__17553 = p__17552;
var map__17553__$1 = cljs.core.__destructure_map(map__17553);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17553__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17560,msg){
var map__17562 = p__17560;
var map__17562__$1 = cljs.core.__destructure_map(map__17562);
var runtime = map__17562__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17581,p__17582){
var map__17585 = p__17581;
var map__17585__$1 = cljs.core.__destructure_map(map__17585);
var runtime = map__17585__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17585__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17586 = p__17582;
var map__17586__$1 = cljs.core.__destructure_map(map__17586);
var msg = map__17586__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17586__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17586__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17605 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17607 = null;
var count__17608 = (0);
var i__17609 = (0);
while(true){
if((i__17609 < count__17608)){
var map__17622 = chunk__17607.cljs$core$IIndexed$_nth$arity$2(null,i__17609);
var map__17622__$1 = cljs.core.__destructure_map(map__17622);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17762 = seq__17605;
var G__17763 = chunk__17607;
var G__17764 = count__17608;
var G__17765 = (i__17609 + (1));
seq__17605 = G__17762;
chunk__17607 = G__17763;
count__17608 = G__17764;
i__17609 = G__17765;
continue;
} else {
var G__17767 = seq__17605;
var G__17768 = chunk__17607;
var G__17769 = count__17608;
var G__17770 = (i__17609 + (1));
seq__17605 = G__17767;
chunk__17607 = G__17768;
count__17608 = G__17769;
i__17609 = G__17770;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17605);
if(temp__5753__auto__){
var seq__17605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17605__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17605__$1);
var G__17776 = cljs.core.chunk_rest(seq__17605__$1);
var G__17777 = c__4679__auto__;
var G__17778 = cljs.core.count(c__4679__auto__);
var G__17779 = (0);
seq__17605 = G__17776;
chunk__17607 = G__17777;
count__17608 = G__17778;
i__17609 = G__17779;
continue;
} else {
var map__17646 = cljs.core.first(seq__17605__$1);
var map__17646__$1 = cljs.core.__destructure_map(map__17646);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17646__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17784 = cljs.core.next(seq__17605__$1);
var G__17785 = null;
var G__17786 = (0);
var G__17787 = (0);
seq__17605 = G__17784;
chunk__17607 = G__17785;
count__17608 = G__17786;
i__17609 = G__17787;
continue;
} else {
var G__17788 = cljs.core.next(seq__17605__$1);
var G__17789 = null;
var G__17790 = (0);
var G__17791 = (0);
seq__17605 = G__17788;
chunk__17607 = G__17789;
count__17608 = G__17790;
i__17609 = G__17791;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
