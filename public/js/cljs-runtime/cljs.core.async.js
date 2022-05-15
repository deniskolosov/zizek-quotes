goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17655 = arguments.length;
switch (G__17655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17658 = (function (f,blockable,meta17659){
this.f = f;
this.blockable = blockable;
this.meta17659 = meta17659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17660,meta17659__$1){
var self__ = this;
var _17660__$1 = this;
return (new cljs.core.async.t_cljs$core$async17658(self__.f,self__.blockable,meta17659__$1));
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17660){
var self__ = this;
var _17660__$1 = this;
return self__.meta17659;
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17659","meta17659",955307409,null)], null);
}));

(cljs.core.async.t_cljs$core$async17658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17658");

(cljs.core.async.t_cljs$core$async17658.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async17658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17658.
 */
cljs.core.async.__GT_t_cljs$core$async17658 = (function cljs$core$async$__GT_t_cljs$core$async17658(f__$1,blockable__$1,meta17659){
return (new cljs.core.async.t_cljs$core$async17658(f__$1,blockable__$1,meta17659));
});

}

return (new cljs.core.async.t_cljs$core$async17658(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17752 = arguments.length;
switch (G__17752) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17755 = arguments.length;
switch (G__17755) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19949 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19949) : fn1.call(null,val_19949));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19949) : fn1.call(null,val_19949));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17796 = arguments.length;
switch (G__17796) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___19956 = n;
var x_19957 = (0);
while(true){
if((x_19957 < n__4741__auto___19956)){
(a[x_19957] = x_19957);

var G__19958 = (x_19957 + (1));
x_19957 = G__19958;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17798 = (function (flag,meta17799){
this.flag = flag;
this.meta17799 = meta17799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17800,meta17799__$1){
var self__ = this;
var _17800__$1 = this;
return (new cljs.core.async.t_cljs$core$async17798(self__.flag,meta17799__$1));
}));

(cljs.core.async.t_cljs$core$async17798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17800){
var self__ = this;
var _17800__$1 = this;
return self__.meta17799;
}));

(cljs.core.async.t_cljs$core$async17798.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17799","meta17799",528602341,null)], null);
}));

(cljs.core.async.t_cljs$core$async17798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17798");

(cljs.core.async.t_cljs$core$async17798.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async17798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17798.
 */
cljs.core.async.__GT_t_cljs$core$async17798 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17798(flag__$1,meta17799){
return (new cljs.core.async.t_cljs$core$async17798(flag__$1,meta17799));
});

}

return (new cljs.core.async.t_cljs$core$async17798(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17802 = (function (flag,cb,meta17803){
this.flag = flag;
this.cb = cb;
this.meta17803 = meta17803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17804,meta17803__$1){
var self__ = this;
var _17804__$1 = this;
return (new cljs.core.async.t_cljs$core$async17802(self__.flag,self__.cb,meta17803__$1));
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17804){
var self__ = this;
var _17804__$1 = this;
return self__.meta17803;
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17803","meta17803",163851941,null)], null);
}));

(cljs.core.async.t_cljs$core$async17802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17802");

(cljs.core.async.t_cljs$core$async17802.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async17802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17802.
 */
cljs.core.async.__GT_t_cljs$core$async17802 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17802(flag__$1,cb__$1,meta17803){
return (new cljs.core.async.t_cljs$core$async17802(flag__$1,cb__$1,meta17803));
});

}

return (new cljs.core.async.t_cljs$core$async17802(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17806_SHARP_){
var G__17809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17806_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17809) : fret.call(null,G__17809));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17807_SHARP_){
var G__17810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17807_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17810) : fret.call(null,G__17810));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19960 = (i + (1));
i = G__19960;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19962 = arguments.length;
var i__4865__auto___19963 = (0);
while(true){
if((i__4865__auto___19963 < len__4864__auto___19962)){
args__4870__auto__.push((arguments[i__4865__auto___19963]));

var G__19964 = (i__4865__auto___19963 + (1));
i__4865__auto___19963 = G__19964;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17814){
var map__17815 = p__17814;
var map__17815__$1 = cljs.core.__destructure_map(map__17815);
var opts = map__17815__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17812){
var G__17813 = cljs.core.first(seq17812);
var seq17812__$1 = cljs.core.next(seq17812);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17813,seq17812__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17818 = arguments.length;
switch (G__17818) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17537__auto___19971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_17847){
var state_val_17848 = (state_17847[(1)]);
if((state_val_17848 === (7))){
var inst_17843 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17850_19973 = state_17847__$1;
(statearr_17850_19973[(2)] = inst_17843);

(statearr_17850_19973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (1))){
var state_17847__$1 = state_17847;
var statearr_17851_19974 = state_17847__$1;
(statearr_17851_19974[(2)] = null);

(statearr_17851_19974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (4))){
var inst_17825 = (state_17847[(7)]);
var inst_17825__$1 = (state_17847[(2)]);
var inst_17826 = (inst_17825__$1 == null);
var state_17847__$1 = (function (){var statearr_17853 = state_17847;
(statearr_17853[(7)] = inst_17825__$1);

return statearr_17853;
})();
if(cljs.core.truth_(inst_17826)){
var statearr_17854_19975 = state_17847__$1;
(statearr_17854_19975[(1)] = (5));

} else {
var statearr_17855_19976 = state_17847__$1;
(statearr_17855_19976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (13))){
var state_17847__$1 = state_17847;
var statearr_17856_19977 = state_17847__$1;
(statearr_17856_19977[(2)] = null);

(statearr_17856_19977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (6))){
var inst_17825 = (state_17847[(7)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17847__$1,(11),to,inst_17825);
} else {
if((state_val_17848 === (3))){
var inst_17845 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17847__$1,inst_17845);
} else {
if((state_val_17848 === (12))){
var state_17847__$1 = state_17847;
var statearr_17858_19979 = state_17847__$1;
(statearr_17858_19979[(2)] = null);

(statearr_17858_19979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (2))){
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17847__$1,(4),from);
} else {
if((state_val_17848 === (11))){
var inst_17835 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17835)){
var statearr_17859_19981 = state_17847__$1;
(statearr_17859_19981[(1)] = (12));

} else {
var statearr_17860_19982 = state_17847__$1;
(statearr_17860_19982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (9))){
var state_17847__$1 = state_17847;
var statearr_17861_19983 = state_17847__$1;
(statearr_17861_19983[(2)] = null);

(statearr_17861_19983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (5))){
var state_17847__$1 = state_17847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17862_19984 = state_17847__$1;
(statearr_17862_19984[(1)] = (8));

} else {
var statearr_17863_19985 = state_17847__$1;
(statearr_17863_19985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (14))){
var inst_17841 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17865_19986 = state_17847__$1;
(statearr_17865_19986[(2)] = inst_17841);

(statearr_17865_19986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (10))){
var inst_17832 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17866_19987 = state_17847__$1;
(statearr_17866_19987[(2)] = inst_17832);

(statearr_17866_19987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (8))){
var inst_17829 = cljs.core.async.close_BANG_(to);
var state_17847__$1 = state_17847;
var statearr_17867_19988 = state_17847__$1;
(statearr_17867_19988[(2)] = inst_17829);

(statearr_17867_19988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_17868 = [null,null,null,null,null,null,null,null];
(statearr_17868[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_17868[(1)] = (1));

return statearr_17868;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_17847){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_17847);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e17869){var ex__17156__auto__ = e17869;
var statearr_17870_19991 = state_17847;
(statearr_17870_19991[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_17847[(4)]))){
var statearr_17872_19992 = state_17847;
(statearr_17872_19992[(1)] = cljs.core.first((state_17847[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19993 = state_17847;
state_17847 = G__19993;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_17847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_17847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_17873 = f__17538__auto__();
(statearr_17873[(6)] = c__17537__auto___19971);

return statearr_17873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__17875){
var vec__17876 = p__17875;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17876,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17876,(1),null);
var job = vec__17876;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17537__auto___20000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_17883){
var state_val_17884 = (state_17883[(1)]);
if((state_val_17884 === (1))){
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17883__$1,(2),res,v);
} else {
if((state_val_17884 === (2))){
var inst_17880 = (state_17883[(2)]);
var inst_17881 = cljs.core.async.close_BANG_(res);
var state_17883__$1 = (function (){var statearr_17886 = state_17883;
(statearr_17886[(7)] = inst_17880);

return statearr_17886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17883__$1,inst_17881);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0 = (function (){
var statearr_17887 = [null,null,null,null,null,null,null,null];
(statearr_17887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__);

(statearr_17887[(1)] = (1));

return statearr_17887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1 = (function (state_17883){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_17883);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e17888){var ex__17156__auto__ = e17888;
var statearr_17889_20005 = state_17883;
(statearr_17889_20005[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_17883[(4)]))){
var statearr_17890_20006 = state_17883;
(statearr_17890_20006[(1)] = cljs.core.first((state_17883[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20007 = state_17883;
state_17883 = G__20007;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = function(state_17883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1.call(this,state_17883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_17892 = f__17538__auto__();
(statearr_17892[(6)] = c__17537__auto___20000);

return statearr_17892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17893){
var vec__17894 = p__17893;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17894,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17894,(1),null);
var job = vec__17894;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___20010 = n;
var __20011 = (0);
while(true){
if((__20011 < n__4741__auto___20010)){
var G__17897_20012 = type;
var G__17897_20013__$1 = (((G__17897_20012 instanceof cljs.core.Keyword))?G__17897_20012.fqn:null);
switch (G__17897_20013__$1) {
case "compute":
var c__17537__auto___20015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20011,c__17537__auto___20015,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async){
return (function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = ((function (__20011,c__17537__auto___20015,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async){
return (function (state_17911){
var state_val_17912 = (state_17911[(1)]);
if((state_val_17912 === (1))){
var state_17911__$1 = state_17911;
var statearr_17913_20016 = state_17911__$1;
(statearr_17913_20016[(2)] = null);

(statearr_17913_20016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (2))){
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17911__$1,(4),jobs);
} else {
if((state_val_17912 === (3))){
var inst_17909 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17911__$1,inst_17909);
} else {
if((state_val_17912 === (4))){
var inst_17901 = (state_17911[(2)]);
var inst_17902 = process(inst_17901);
var state_17911__$1 = state_17911;
if(cljs.core.truth_(inst_17902)){
var statearr_17914_20018 = state_17911__$1;
(statearr_17914_20018[(1)] = (5));

} else {
var statearr_17915_20019 = state_17911__$1;
(statearr_17915_20019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (5))){
var state_17911__$1 = state_17911;
var statearr_17916_20020 = state_17911__$1;
(statearr_17916_20020[(2)] = null);

(statearr_17916_20020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (6))){
var state_17911__$1 = state_17911;
var statearr_17917_20021 = state_17911__$1;
(statearr_17917_20021[(2)] = null);

(statearr_17917_20021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (7))){
var inst_17907 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17918_20022 = state_17911__$1;
(statearr_17918_20022[(2)] = inst_17907);

(statearr_17918_20022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20011,c__17537__auto___20015,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async))
;
return ((function (__20011,switch__17152__auto__,c__17537__auto___20015,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0 = (function (){
var statearr_17920 = [null,null,null,null,null,null,null];
(statearr_17920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__);

(statearr_17920[(1)] = (1));

return statearr_17920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1 = (function (state_17911){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_17911);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e17921){var ex__17156__auto__ = e17921;
var statearr_17922_20025 = state_17911;
(statearr_17922_20025[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_17911[(4)]))){
var statearr_17923_20026 = state_17911;
(statearr_17923_20026[(1)] = cljs.core.first((state_17911[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20031 = state_17911;
state_17911 = G__20031;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = function(state_17911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1.call(this,state_17911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__;
})()
;})(__20011,switch__17152__auto__,c__17537__auto___20015,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async))
})();
var state__17539__auto__ = (function (){var statearr_17924 = f__17538__auto__();
(statearr_17924[(6)] = c__17537__auto___20015);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
});})(__20011,c__17537__auto___20015,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async))
);


break;
case "async":
var c__17537__auto___20036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20011,c__17537__auto___20036,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async){
return (function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = ((function (__20011,c__17537__auto___20036,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async){
return (function (state_17937){
var state_val_17938 = (state_17937[(1)]);
if((state_val_17938 === (1))){
var state_17937__$1 = state_17937;
var statearr_17940_20037 = state_17937__$1;
(statearr_17940_20037[(2)] = null);

(statearr_17940_20037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (2))){
var state_17937__$1 = state_17937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17937__$1,(4),jobs);
} else {
if((state_val_17938 === (3))){
var inst_17935 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17937__$1,inst_17935);
} else {
if((state_val_17938 === (4))){
var inst_17927 = (state_17937[(2)]);
var inst_17928 = async(inst_17927);
var state_17937__$1 = state_17937;
if(cljs.core.truth_(inst_17928)){
var statearr_17941_20038 = state_17937__$1;
(statearr_17941_20038[(1)] = (5));

} else {
var statearr_17942_20039 = state_17937__$1;
(statearr_17942_20039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (5))){
var state_17937__$1 = state_17937;
var statearr_17943_20040 = state_17937__$1;
(statearr_17943_20040[(2)] = null);

(statearr_17943_20040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (6))){
var state_17937__$1 = state_17937;
var statearr_17944_20041 = state_17937__$1;
(statearr_17944_20041[(2)] = null);

(statearr_17944_20041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (7))){
var inst_17933 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_17945_20042 = state_17937__$1;
(statearr_17945_20042[(2)] = inst_17933);

(statearr_17945_20042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20011,c__17537__auto___20036,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async))
;
return ((function (__20011,switch__17152__auto__,c__17537__auto___20036,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0 = (function (){
var statearr_17946 = [null,null,null,null,null,null,null];
(statearr_17946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__);

(statearr_17946[(1)] = (1));

return statearr_17946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1 = (function (state_17937){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_17937);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e17948){var ex__17156__auto__ = e17948;
var statearr_17949_20043 = state_17937;
(statearr_17949_20043[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_17937[(4)]))){
var statearr_17950_20044 = state_17937;
(statearr_17950_20044[(1)] = cljs.core.first((state_17937[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20045 = state_17937;
state_17937 = G__20045;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = function(state_17937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1.call(this,state_17937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__;
})()
;})(__20011,switch__17152__auto__,c__17537__auto___20036,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async))
})();
var state__17539__auto__ = (function (){var statearr_17951 = f__17538__auto__();
(statearr_17951[(6)] = c__17537__auto___20036);

return statearr_17951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
});})(__20011,c__17537__auto___20036,G__17897_20012,G__17897_20013__$1,n__4741__auto___20010,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17897_20013__$1)].join('')));

}

var G__20046 = (__20011 + (1));
__20011 = G__20046;
continue;
} else {
}
break;
}

var c__17537__auto___20047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_17974){
var state_val_17975 = (state_17974[(1)]);
if((state_val_17975 === (7))){
var inst_17970 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17976_20048 = state_17974__$1;
(statearr_17976_20048[(2)] = inst_17970);

(statearr_17976_20048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (1))){
var state_17974__$1 = state_17974;
var statearr_17977_20050 = state_17974__$1;
(statearr_17977_20050[(2)] = null);

(statearr_17977_20050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (4))){
var inst_17954 = (state_17974[(7)]);
var inst_17954__$1 = (state_17974[(2)]);
var inst_17955 = (inst_17954__$1 == null);
var state_17974__$1 = (function (){var statearr_17979 = state_17974;
(statearr_17979[(7)] = inst_17954__$1);

return statearr_17979;
})();
if(cljs.core.truth_(inst_17955)){
var statearr_17980_20057 = state_17974__$1;
(statearr_17980_20057[(1)] = (5));

} else {
var statearr_17981_20062 = state_17974__$1;
(statearr_17981_20062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (6))){
var inst_17959 = (state_17974[(8)]);
var inst_17954 = (state_17974[(7)]);
var inst_17959__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17962 = [inst_17954,inst_17959__$1];
var inst_17963 = (new cljs.core.PersistentVector(null,2,(5),inst_17961,inst_17962,null));
var state_17974__$1 = (function (){var statearr_17982 = state_17974;
(statearr_17982[(8)] = inst_17959__$1);

return statearr_17982;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17974__$1,(8),jobs,inst_17963);
} else {
if((state_val_17975 === (3))){
var inst_17972 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17974__$1,inst_17972);
} else {
if((state_val_17975 === (2))){
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17974__$1,(4),from);
} else {
if((state_val_17975 === (9))){
var inst_17967 = (state_17974[(2)]);
var state_17974__$1 = (function (){var statearr_17983 = state_17974;
(statearr_17983[(9)] = inst_17967);

return statearr_17983;
})();
var statearr_17984_20064 = state_17974__$1;
(statearr_17984_20064[(2)] = null);

(statearr_17984_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (5))){
var inst_17957 = cljs.core.async.close_BANG_(jobs);
var state_17974__$1 = state_17974;
var statearr_17985_20066 = state_17974__$1;
(statearr_17985_20066[(2)] = inst_17957);

(statearr_17985_20066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (8))){
var inst_17959 = (state_17974[(8)]);
var inst_17965 = (state_17974[(2)]);
var state_17974__$1 = (function (){var statearr_17987 = state_17974;
(statearr_17987[(10)] = inst_17965);

return statearr_17987;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17974__$1,(9),results,inst_17959);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0 = (function (){
var statearr_17988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__);

(statearr_17988[(1)] = (1));

return statearr_17988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1 = (function (state_17974){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_17974);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e17989){var ex__17156__auto__ = e17989;
var statearr_17990_20072 = state_17974;
(statearr_17990_20072[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_17974[(4)]))){
var statearr_17991_20078 = state_17974;
(statearr_17991_20078[(1)] = cljs.core.first((state_17974[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20082 = state_17974;
state_17974 = G__20082;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = function(state_17974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1.call(this,state_17974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_17992 = f__17538__auto__();
(statearr_17992[(6)] = c__17537__auto___20047);

return statearr_17992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


var c__17537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18031){
var state_val_18032 = (state_18031[(1)]);
if((state_val_18032 === (7))){
var inst_18027 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18033_20087 = state_18031__$1;
(statearr_18033_20087[(2)] = inst_18027);

(statearr_18033_20087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (20))){
var state_18031__$1 = state_18031;
var statearr_18034_20091 = state_18031__$1;
(statearr_18034_20091[(2)] = null);

(statearr_18034_20091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (1))){
var state_18031__$1 = state_18031;
var statearr_18036_20092 = state_18031__$1;
(statearr_18036_20092[(2)] = null);

(statearr_18036_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (4))){
var inst_17995 = (state_18031[(7)]);
var inst_17995__$1 = (state_18031[(2)]);
var inst_17996 = (inst_17995__$1 == null);
var state_18031__$1 = (function (){var statearr_18037 = state_18031;
(statearr_18037[(7)] = inst_17995__$1);

return statearr_18037;
})();
if(cljs.core.truth_(inst_17996)){
var statearr_18038_20098 = state_18031__$1;
(statearr_18038_20098[(1)] = (5));

} else {
var statearr_18039_20099 = state_18031__$1;
(statearr_18039_20099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (15))){
var inst_18009 = (state_18031[(8)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18031__$1,(18),to,inst_18009);
} else {
if((state_val_18032 === (21))){
var inst_18022 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18040_20103 = state_18031__$1;
(statearr_18040_20103[(2)] = inst_18022);

(statearr_18040_20103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (13))){
var inst_18024 = (state_18031[(2)]);
var state_18031__$1 = (function (){var statearr_18041 = state_18031;
(statearr_18041[(9)] = inst_18024);

return statearr_18041;
})();
var statearr_18042_20112 = state_18031__$1;
(statearr_18042_20112[(2)] = null);

(statearr_18042_20112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (6))){
var inst_17995 = (state_18031[(7)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18031__$1,(11),inst_17995);
} else {
if((state_val_18032 === (17))){
var inst_18017 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
if(cljs.core.truth_(inst_18017)){
var statearr_18044_20117 = state_18031__$1;
(statearr_18044_20117[(1)] = (19));

} else {
var statearr_18045_20118 = state_18031__$1;
(statearr_18045_20118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (3))){
var inst_18029 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18031__$1,inst_18029);
} else {
if((state_val_18032 === (12))){
var inst_18006 = (state_18031[(10)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18031__$1,(14),inst_18006);
} else {
if((state_val_18032 === (2))){
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18031__$1,(4),results);
} else {
if((state_val_18032 === (19))){
var state_18031__$1 = state_18031;
var statearr_18046_20122 = state_18031__$1;
(statearr_18046_20122[(2)] = null);

(statearr_18046_20122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (11))){
var inst_18006 = (state_18031[(2)]);
var state_18031__$1 = (function (){var statearr_18047 = state_18031;
(statearr_18047[(10)] = inst_18006);

return statearr_18047;
})();
var statearr_18048_20126 = state_18031__$1;
(statearr_18048_20126[(2)] = null);

(statearr_18048_20126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (9))){
var state_18031__$1 = state_18031;
var statearr_18050_20127 = state_18031__$1;
(statearr_18050_20127[(2)] = null);

(statearr_18050_20127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (5))){
var state_18031__$1 = state_18031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18051_20128 = state_18031__$1;
(statearr_18051_20128[(1)] = (8));

} else {
var statearr_18052_20129 = state_18031__$1;
(statearr_18052_20129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (14))){
var inst_18009 = (state_18031[(8)]);
var inst_18011 = (state_18031[(11)]);
var inst_18009__$1 = (state_18031[(2)]);
var inst_18010 = (inst_18009__$1 == null);
var inst_18011__$1 = cljs.core.not(inst_18010);
var state_18031__$1 = (function (){var statearr_18053 = state_18031;
(statearr_18053[(8)] = inst_18009__$1);

(statearr_18053[(11)] = inst_18011__$1);

return statearr_18053;
})();
if(inst_18011__$1){
var statearr_18054_20135 = state_18031__$1;
(statearr_18054_20135[(1)] = (15));

} else {
var statearr_18055_20136 = state_18031__$1;
(statearr_18055_20136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (16))){
var inst_18011 = (state_18031[(11)]);
var state_18031__$1 = state_18031;
var statearr_18056_20137 = state_18031__$1;
(statearr_18056_20137[(2)] = inst_18011);

(statearr_18056_20137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (10))){
var inst_18003 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18057_20138 = state_18031__$1;
(statearr_18057_20138[(2)] = inst_18003);

(statearr_18057_20138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (18))){
var inst_18014 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18059_20142 = state_18031__$1;
(statearr_18059_20142[(2)] = inst_18014);

(statearr_18059_20142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (8))){
var inst_17999 = cljs.core.async.close_BANG_(to);
var state_18031__$1 = state_18031;
var statearr_18060_20144 = state_18031__$1;
(statearr_18060_20144[(2)] = inst_17999);

(statearr_18060_20144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0 = (function (){
var statearr_18061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__);

(statearr_18061[(1)] = (1));

return statearr_18061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1 = (function (state_18031){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18031);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18062){var ex__17156__auto__ = e18062;
var statearr_18063_20145 = state_18031;
(statearr_18063_20145[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18031[(4)]))){
var statearr_18064_20146 = state_18031;
(statearr_18064_20146[(1)] = cljs.core.first((state_18031[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20148 = state_18031;
state_18031 = G__20148;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__ = function(state_18031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1.call(this,state_18031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17153__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18065 = f__17538__auto__();
(statearr_18065[(6)] = c__17537__auto__);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

return c__17537__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18068 = arguments.length;
switch (G__18068) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18071 = arguments.length;
switch (G__18071) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18075 = arguments.length;
switch (G__18075) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17537__auto___20156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18103){
var state_val_18104 = (state_18103[(1)]);
if((state_val_18104 === (7))){
var inst_18099 = (state_18103[(2)]);
var state_18103__$1 = state_18103;
var statearr_18105_20157 = state_18103__$1;
(statearr_18105_20157[(2)] = inst_18099);

(statearr_18105_20157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (1))){
var state_18103__$1 = state_18103;
var statearr_18106_20158 = state_18103__$1;
(statearr_18106_20158[(2)] = null);

(statearr_18106_20158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (4))){
var inst_18080 = (state_18103[(7)]);
var inst_18080__$1 = (state_18103[(2)]);
var inst_18081 = (inst_18080__$1 == null);
var state_18103__$1 = (function (){var statearr_18107 = state_18103;
(statearr_18107[(7)] = inst_18080__$1);

return statearr_18107;
})();
if(cljs.core.truth_(inst_18081)){
var statearr_18108_20163 = state_18103__$1;
(statearr_18108_20163[(1)] = (5));

} else {
var statearr_18109_20164 = state_18103__$1;
(statearr_18109_20164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (13))){
var state_18103__$1 = state_18103;
var statearr_18110_20165 = state_18103__$1;
(statearr_18110_20165[(2)] = null);

(statearr_18110_20165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (6))){
var inst_18080 = (state_18103[(7)]);
var inst_18086 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18080) : p.call(null,inst_18080));
var state_18103__$1 = state_18103;
if(cljs.core.truth_(inst_18086)){
var statearr_18111_20166 = state_18103__$1;
(statearr_18111_20166[(1)] = (9));

} else {
var statearr_18112_20167 = state_18103__$1;
(statearr_18112_20167[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (3))){
var inst_18101 = (state_18103[(2)]);
var state_18103__$1 = state_18103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18103__$1,inst_18101);
} else {
if((state_val_18104 === (12))){
var state_18103__$1 = state_18103;
var statearr_18113_20169 = state_18103__$1;
(statearr_18113_20169[(2)] = null);

(statearr_18113_20169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (2))){
var state_18103__$1 = state_18103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18103__$1,(4),ch);
} else {
if((state_val_18104 === (11))){
var inst_18080 = (state_18103[(7)]);
var inst_18090 = (state_18103[(2)]);
var state_18103__$1 = state_18103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18103__$1,(8),inst_18090,inst_18080);
} else {
if((state_val_18104 === (9))){
var state_18103__$1 = state_18103;
var statearr_18116_20175 = state_18103__$1;
(statearr_18116_20175[(2)] = tc);

(statearr_18116_20175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (5))){
var inst_18083 = cljs.core.async.close_BANG_(tc);
var inst_18084 = cljs.core.async.close_BANG_(fc);
var state_18103__$1 = (function (){var statearr_18117 = state_18103;
(statearr_18117[(8)] = inst_18083);

return statearr_18117;
})();
var statearr_18118_20190 = state_18103__$1;
(statearr_18118_20190[(2)] = inst_18084);

(statearr_18118_20190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (14))){
var inst_18097 = (state_18103[(2)]);
var state_18103__$1 = state_18103;
var statearr_18119_20192 = state_18103__$1;
(statearr_18119_20192[(2)] = inst_18097);

(statearr_18119_20192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (10))){
var state_18103__$1 = state_18103;
var statearr_18120_20193 = state_18103__$1;
(statearr_18120_20193[(2)] = fc);

(statearr_18120_20193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18104 === (8))){
var inst_18092 = (state_18103[(2)]);
var state_18103__$1 = state_18103;
if(cljs.core.truth_(inst_18092)){
var statearr_18121_20197 = state_18103__$1;
(statearr_18121_20197[(1)] = (12));

} else {
var statearr_18122_20198 = state_18103__$1;
(statearr_18122_20198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_18123 = [null,null,null,null,null,null,null,null,null];
(statearr_18123[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_18123[(1)] = (1));

return statearr_18123;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_18103){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18103);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18124){var ex__17156__auto__ = e18124;
var statearr_18125_20210 = state_18103;
(statearr_18125_20210[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18103[(4)]))){
var statearr_18126_20214 = state_18103;
(statearr_18126_20214[(1)] = cljs.core.first((state_18103[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20216 = state_18103;
state_18103 = G__20216;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_18103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_18103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18127 = f__17538__auto__();
(statearr_18127[(6)] = c__17537__auto___20156);

return statearr_18127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18155){
var state_val_18156 = (state_18155[(1)]);
if((state_val_18156 === (7))){
var inst_18151 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18160_20224 = state_18155__$1;
(statearr_18160_20224[(2)] = inst_18151);

(statearr_18160_20224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (1))){
var inst_18131 = init;
var inst_18132 = inst_18131;
var state_18155__$1 = (function (){var statearr_18161 = state_18155;
(statearr_18161[(7)] = inst_18132);

return statearr_18161;
})();
var statearr_18162_20235 = state_18155__$1;
(statearr_18162_20235[(2)] = null);

(statearr_18162_20235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (4))){
var inst_18135 = (state_18155[(8)]);
var inst_18135__$1 = (state_18155[(2)]);
var inst_18136 = (inst_18135__$1 == null);
var state_18155__$1 = (function (){var statearr_18163 = state_18155;
(statearr_18163[(8)] = inst_18135__$1);

return statearr_18163;
})();
if(cljs.core.truth_(inst_18136)){
var statearr_18164_20239 = state_18155__$1;
(statearr_18164_20239[(1)] = (5));

} else {
var statearr_18165_20240 = state_18155__$1;
(statearr_18165_20240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (6))){
var inst_18141 = (state_18155[(9)]);
var inst_18132 = (state_18155[(7)]);
var inst_18135 = (state_18155[(8)]);
var inst_18141__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18132,inst_18135) : f.call(null,inst_18132,inst_18135));
var inst_18142 = cljs.core.reduced_QMARK_(inst_18141__$1);
var state_18155__$1 = (function (){var statearr_18167 = state_18155;
(statearr_18167[(9)] = inst_18141__$1);

return statearr_18167;
})();
if(inst_18142){
var statearr_18169_20257 = state_18155__$1;
(statearr_18169_20257[(1)] = (8));

} else {
var statearr_18171_20267 = state_18155__$1;
(statearr_18171_20267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (3))){
var inst_18153 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18155__$1,inst_18153);
} else {
if((state_val_18156 === (2))){
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18155__$1,(4),ch);
} else {
if((state_val_18156 === (9))){
var inst_18141 = (state_18155[(9)]);
var inst_18132 = inst_18141;
var state_18155__$1 = (function (){var statearr_18172 = state_18155;
(statearr_18172[(7)] = inst_18132);

return statearr_18172;
})();
var statearr_18173_20269 = state_18155__$1;
(statearr_18173_20269[(2)] = null);

(statearr_18173_20269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (5))){
var inst_18132 = (state_18155[(7)]);
var state_18155__$1 = state_18155;
var statearr_18175_20270 = state_18155__$1;
(statearr_18175_20270[(2)] = inst_18132);

(statearr_18175_20270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (10))){
var inst_18149 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18177_20271 = state_18155__$1;
(statearr_18177_20271[(2)] = inst_18149);

(statearr_18177_20271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (8))){
var inst_18141 = (state_18155[(9)]);
var inst_18145 = cljs.core.deref(inst_18141);
var state_18155__$1 = state_18155;
var statearr_18180_20272 = state_18155__$1;
(statearr_18180_20272[(2)] = inst_18145);

(statearr_18180_20272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17153__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17153__auto____0 = (function (){
var statearr_18182 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18182[(0)] = cljs$core$async$reduce_$_state_machine__17153__auto__);

(statearr_18182[(1)] = (1));

return statearr_18182;
});
var cljs$core$async$reduce_$_state_machine__17153__auto____1 = (function (state_18155){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18155);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18184){var ex__17156__auto__ = e18184;
var statearr_18185_20281 = state_18155;
(statearr_18185_20281[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18155[(4)]))){
var statearr_18188_20285 = state_18155;
(statearr_18188_20285[(1)] = cljs.core.first((state_18155[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20286 = state_18155;
state_18155 = G__20286;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17153__auto__ = function(state_18155){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17153__auto____1.call(this,state_18155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17153__auto____0;
cljs$core$async$reduce_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17153__auto____1;
return cljs$core$async$reduce_$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18191 = f__17538__auto__();
(statearr_18191[(6)] = c__17537__auto__);

return statearr_18191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

return c__17537__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18202){
var state_val_18203 = (state_18202[(1)]);
if((state_val_18203 === (1))){
var inst_18196 = cljs.core.async.reduce(f__$1,init,ch);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18202__$1,(2),inst_18196);
} else {
if((state_val_18203 === (2))){
var inst_18198 = (state_18202[(2)]);
var inst_18199 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18198) : f__$1.call(null,inst_18198));
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18202__$1,inst_18199);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17153__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17153__auto____0 = (function (){
var statearr_18210 = [null,null,null,null,null,null,null];
(statearr_18210[(0)] = cljs$core$async$transduce_$_state_machine__17153__auto__);

(statearr_18210[(1)] = (1));

return statearr_18210;
});
var cljs$core$async$transduce_$_state_machine__17153__auto____1 = (function (state_18202){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18202);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18212){var ex__17156__auto__ = e18212;
var statearr_18214_20309 = state_18202;
(statearr_18214_20309[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18202[(4)]))){
var statearr_18217_20310 = state_18202;
(statearr_18217_20310[(1)] = cljs.core.first((state_18202[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20322 = state_18202;
state_18202 = G__20322;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17153__auto__ = function(state_18202){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17153__auto____1.call(this,state_18202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17153__auto____0;
cljs$core$async$transduce_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17153__auto____1;
return cljs$core$async$transduce_$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18219 = f__17538__auto__();
(statearr_18219[(6)] = c__17537__auto__);

return statearr_18219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

return c__17537__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18226 = arguments.length;
switch (G__18226) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18260){
var state_val_18261 = (state_18260[(1)]);
if((state_val_18261 === (7))){
var inst_18240 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
var statearr_18266_20343 = state_18260__$1;
(statearr_18266_20343[(2)] = inst_18240);

(statearr_18266_20343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (1))){
var inst_18231 = cljs.core.seq(coll);
var inst_18233 = inst_18231;
var state_18260__$1 = (function (){var statearr_18269 = state_18260;
(statearr_18269[(7)] = inst_18233);

return statearr_18269;
})();
var statearr_18272_20348 = state_18260__$1;
(statearr_18272_20348[(2)] = null);

(statearr_18272_20348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (4))){
var inst_18233 = (state_18260[(7)]);
var inst_18238 = cljs.core.first(inst_18233);
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18260__$1,(7),ch,inst_18238);
} else {
if((state_val_18261 === (13))){
var inst_18252 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
var statearr_18274_20350 = state_18260__$1;
(statearr_18274_20350[(2)] = inst_18252);

(statearr_18274_20350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (6))){
var inst_18243 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
if(cljs.core.truth_(inst_18243)){
var statearr_18278_20351 = state_18260__$1;
(statearr_18278_20351[(1)] = (8));

} else {
var statearr_18279_20357 = state_18260__$1;
(statearr_18279_20357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (3))){
var inst_18256 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18260__$1,inst_18256);
} else {
if((state_val_18261 === (12))){
var state_18260__$1 = state_18260;
var statearr_18283_20363 = state_18260__$1;
(statearr_18283_20363[(2)] = null);

(statearr_18283_20363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (2))){
var inst_18233 = (state_18260[(7)]);
var state_18260__$1 = state_18260;
if(cljs.core.truth_(inst_18233)){
var statearr_18285_20370 = state_18260__$1;
(statearr_18285_20370[(1)] = (4));

} else {
var statearr_18287_20371 = state_18260__$1;
(statearr_18287_20371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (11))){
var inst_18249 = cljs.core.async.close_BANG_(ch);
var state_18260__$1 = state_18260;
var statearr_18288_20376 = state_18260__$1;
(statearr_18288_20376[(2)] = inst_18249);

(statearr_18288_20376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (9))){
var state_18260__$1 = state_18260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18292_20381 = state_18260__$1;
(statearr_18292_20381[(1)] = (11));

} else {
var statearr_18293_20382 = state_18260__$1;
(statearr_18293_20382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (5))){
var inst_18233 = (state_18260[(7)]);
var state_18260__$1 = state_18260;
var statearr_18296_20389 = state_18260__$1;
(statearr_18296_20389[(2)] = inst_18233);

(statearr_18296_20389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (10))){
var inst_18254 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
var statearr_18299_20390 = state_18260__$1;
(statearr_18299_20390[(2)] = inst_18254);

(statearr_18299_20390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (8))){
var inst_18233 = (state_18260[(7)]);
var inst_18245 = cljs.core.next(inst_18233);
var inst_18233__$1 = inst_18245;
var state_18260__$1 = (function (){var statearr_18301 = state_18260;
(statearr_18301[(7)] = inst_18233__$1);

return statearr_18301;
})();
var statearr_18302_20391 = state_18260__$1;
(statearr_18302_20391[(2)] = null);

(statearr_18302_20391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_18309 = [null,null,null,null,null,null,null,null];
(statearr_18309[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_18309[(1)] = (1));

return statearr_18309;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_18260){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18260);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18311){var ex__17156__auto__ = e18311;
var statearr_18312_20397 = state_18260;
(statearr_18312_20397[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18260[(4)]))){
var statearr_18314_20399 = state_18260;
(statearr_18314_20399[(1)] = cljs.core.first((state_18260[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20400 = state_18260;
state_18260 = G__20400;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_18260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_18260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18318 = f__17538__auto__();
(statearr_18318[(6)] = c__17537__auto__);

return statearr_18318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

return c__17537__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18327 = arguments.length;
switch (G__18327) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20402 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20402(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20413 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20413(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20457 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20457(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20483 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20483(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18372 = (function (ch,cs,meta18373){
this.ch = ch;
this.cs = cs;
this.meta18373 = meta18373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18374,meta18373__$1){
var self__ = this;
var _18374__$1 = this;
return (new cljs.core.async.t_cljs$core$async18372(self__.ch,self__.cs,meta18373__$1));
}));

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18374){
var self__ = this;
var _18374__$1 = this;
return self__.meta18373;
}));

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18372.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18373","meta18373",-1122293858,null)], null);
}));

(cljs.core.async.t_cljs$core$async18372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18372");

(cljs.core.async.t_cljs$core$async18372.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18372.
 */
cljs.core.async.__GT_t_cljs$core$async18372 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18372(ch__$1,cs__$1,meta18373){
return (new cljs.core.async.t_cljs$core$async18372(ch__$1,cs__$1,meta18373));
});

}

return (new cljs.core.async.t_cljs$core$async18372(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17537__auto___20502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18563){
var state_val_18565 = (state_18563[(1)]);
if((state_val_18565 === (7))){
var inst_18550 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18575_20503 = state_18563__$1;
(statearr_18575_20503[(2)] = inst_18550);

(statearr_18575_20503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (20))){
var inst_18433 = (state_18563[(7)]);
var inst_18451 = cljs.core.first(inst_18433);
var inst_18452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18451,(0),null);
var inst_18453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18451,(1),null);
var state_18563__$1 = (function (){var statearr_18578 = state_18563;
(statearr_18578[(8)] = inst_18452);

return statearr_18578;
})();
if(cljs.core.truth_(inst_18453)){
var statearr_18579_20504 = state_18563__$1;
(statearr_18579_20504[(1)] = (22));

} else {
var statearr_18584_20505 = state_18563__$1;
(statearr_18584_20505[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (27))){
var inst_18487 = (state_18563[(9)]);
var inst_18398 = (state_18563[(10)]);
var inst_18492 = (state_18563[(11)]);
var inst_18485 = (state_18563[(12)]);
var inst_18492__$1 = cljs.core._nth(inst_18485,inst_18487);
var inst_18493 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18492__$1,inst_18398,done);
var state_18563__$1 = (function (){var statearr_18585 = state_18563;
(statearr_18585[(11)] = inst_18492__$1);

return statearr_18585;
})();
if(cljs.core.truth_(inst_18493)){
var statearr_18589_20507 = state_18563__$1;
(statearr_18589_20507[(1)] = (30));

} else {
var statearr_18590_20508 = state_18563__$1;
(statearr_18590_20508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (1))){
var state_18563__$1 = state_18563;
var statearr_18592_20526 = state_18563__$1;
(statearr_18592_20526[(2)] = null);

(statearr_18592_20526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (24))){
var inst_18433 = (state_18563[(7)]);
var inst_18458 = (state_18563[(2)]);
var inst_18459 = cljs.core.next(inst_18433);
var inst_18407 = inst_18459;
var inst_18408 = null;
var inst_18409 = (0);
var inst_18410 = (0);
var state_18563__$1 = (function (){var statearr_18593 = state_18563;
(statearr_18593[(13)] = inst_18408);

(statearr_18593[(14)] = inst_18410);

(statearr_18593[(15)] = inst_18458);

(statearr_18593[(16)] = inst_18409);

(statearr_18593[(17)] = inst_18407);

return statearr_18593;
})();
var statearr_18594_20527 = state_18563__$1;
(statearr_18594_20527[(2)] = null);

(statearr_18594_20527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (39))){
var state_18563__$1 = state_18563;
var statearr_18599_20528 = state_18563__$1;
(statearr_18599_20528[(2)] = null);

(statearr_18599_20528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (4))){
var inst_18398 = (state_18563[(10)]);
var inst_18398__$1 = (state_18563[(2)]);
var inst_18399 = (inst_18398__$1 == null);
var state_18563__$1 = (function (){var statearr_18600 = state_18563;
(statearr_18600[(10)] = inst_18398__$1);

return statearr_18600;
})();
if(cljs.core.truth_(inst_18399)){
var statearr_18605_20529 = state_18563__$1;
(statearr_18605_20529[(1)] = (5));

} else {
var statearr_18606_20530 = state_18563__$1;
(statearr_18606_20530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (15))){
var inst_18408 = (state_18563[(13)]);
var inst_18410 = (state_18563[(14)]);
var inst_18409 = (state_18563[(16)]);
var inst_18407 = (state_18563[(17)]);
var inst_18428 = (state_18563[(2)]);
var inst_18430 = (inst_18410 + (1));
var tmp18596 = inst_18408;
var tmp18597 = inst_18409;
var tmp18598 = inst_18407;
var inst_18407__$1 = tmp18598;
var inst_18408__$1 = tmp18596;
var inst_18409__$1 = tmp18597;
var inst_18410__$1 = inst_18430;
var state_18563__$1 = (function (){var statearr_18614 = state_18563;
(statearr_18614[(13)] = inst_18408__$1);

(statearr_18614[(14)] = inst_18410__$1);

(statearr_18614[(16)] = inst_18409__$1);

(statearr_18614[(17)] = inst_18407__$1);

(statearr_18614[(18)] = inst_18428);

return statearr_18614;
})();
var statearr_18615_20534 = state_18563__$1;
(statearr_18615_20534[(2)] = null);

(statearr_18615_20534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (21))){
var inst_18462 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18619_20536 = state_18563__$1;
(statearr_18619_20536[(2)] = inst_18462);

(statearr_18619_20536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (31))){
var inst_18492 = (state_18563[(11)]);
var inst_18501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18492);
var state_18563__$1 = state_18563;
var statearr_18624_20542 = state_18563__$1;
(statearr_18624_20542[(2)] = inst_18501);

(statearr_18624_20542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (32))){
var inst_18487 = (state_18563[(9)]);
var inst_18484 = (state_18563[(19)]);
var inst_18486 = (state_18563[(20)]);
var inst_18485 = (state_18563[(12)]);
var inst_18503 = (state_18563[(2)]);
var inst_18504 = (inst_18487 + (1));
var tmp18616 = inst_18484;
var tmp18617 = inst_18486;
var tmp18618 = inst_18485;
var inst_18484__$1 = tmp18616;
var inst_18485__$1 = tmp18618;
var inst_18486__$1 = tmp18617;
var inst_18487__$1 = inst_18504;
var state_18563__$1 = (function (){var statearr_18628 = state_18563;
(statearr_18628[(9)] = inst_18487__$1);

(statearr_18628[(19)] = inst_18484__$1);

(statearr_18628[(20)] = inst_18486__$1);

(statearr_18628[(12)] = inst_18485__$1);

(statearr_18628[(21)] = inst_18503);

return statearr_18628;
})();
var statearr_18630_20544 = state_18563__$1;
(statearr_18630_20544[(2)] = null);

(statearr_18630_20544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (40))){
var inst_18520 = (state_18563[(22)]);
var inst_18525 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18520);
var state_18563__$1 = state_18563;
var statearr_18631_20545 = state_18563__$1;
(statearr_18631_20545[(2)] = inst_18525);

(statearr_18631_20545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (33))){
var inst_18508 = (state_18563[(23)]);
var inst_18512 = cljs.core.chunked_seq_QMARK_(inst_18508);
var state_18563__$1 = state_18563;
if(inst_18512){
var statearr_18636_20550 = state_18563__$1;
(statearr_18636_20550[(1)] = (36));

} else {
var statearr_18637_20551 = state_18563__$1;
(statearr_18637_20551[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (13))){
var inst_18420 = (state_18563[(24)]);
var inst_18425 = cljs.core.async.close_BANG_(inst_18420);
var state_18563__$1 = state_18563;
var statearr_18639_20552 = state_18563__$1;
(statearr_18639_20552[(2)] = inst_18425);

(statearr_18639_20552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (22))){
var inst_18452 = (state_18563[(8)]);
var inst_18455 = cljs.core.async.close_BANG_(inst_18452);
var state_18563__$1 = state_18563;
var statearr_18640_20554 = state_18563__$1;
(statearr_18640_20554[(2)] = inst_18455);

(statearr_18640_20554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (36))){
var inst_18508 = (state_18563[(23)]);
var inst_18515 = cljs.core.chunk_first(inst_18508);
var inst_18516 = cljs.core.chunk_rest(inst_18508);
var inst_18517 = cljs.core.count(inst_18515);
var inst_18484 = inst_18516;
var inst_18485 = inst_18515;
var inst_18486 = inst_18517;
var inst_18487 = (0);
var state_18563__$1 = (function (){var statearr_18645 = state_18563;
(statearr_18645[(9)] = inst_18487);

(statearr_18645[(19)] = inst_18484);

(statearr_18645[(20)] = inst_18486);

(statearr_18645[(12)] = inst_18485);

return statearr_18645;
})();
var statearr_18646_20555 = state_18563__$1;
(statearr_18646_20555[(2)] = null);

(statearr_18646_20555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (41))){
var inst_18508 = (state_18563[(23)]);
var inst_18527 = (state_18563[(2)]);
var inst_18528 = cljs.core.next(inst_18508);
var inst_18484 = inst_18528;
var inst_18485 = null;
var inst_18486 = (0);
var inst_18487 = (0);
var state_18563__$1 = (function (){var statearr_18651 = state_18563;
(statearr_18651[(9)] = inst_18487);

(statearr_18651[(19)] = inst_18484);

(statearr_18651[(20)] = inst_18486);

(statearr_18651[(12)] = inst_18485);

(statearr_18651[(25)] = inst_18527);

return statearr_18651;
})();
var statearr_18652_20557 = state_18563__$1;
(statearr_18652_20557[(2)] = null);

(statearr_18652_20557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (43))){
var state_18563__$1 = state_18563;
var statearr_18653_20560 = state_18563__$1;
(statearr_18653_20560[(2)] = null);

(statearr_18653_20560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (29))){
var inst_18536 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18657_20563 = state_18563__$1;
(statearr_18657_20563[(2)] = inst_18536);

(statearr_18657_20563[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (44))){
var inst_18547 = (state_18563[(2)]);
var state_18563__$1 = (function (){var statearr_18659 = state_18563;
(statearr_18659[(26)] = inst_18547);

return statearr_18659;
})();
var statearr_18660_20566 = state_18563__$1;
(statearr_18660_20566[(2)] = null);

(statearr_18660_20566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (6))){
var inst_18472 = (state_18563[(27)]);
var inst_18471 = cljs.core.deref(cs);
var inst_18472__$1 = cljs.core.keys(inst_18471);
var inst_18473 = cljs.core.count(inst_18472__$1);
var inst_18474 = cljs.core.reset_BANG_(dctr,inst_18473);
var inst_18483 = cljs.core.seq(inst_18472__$1);
var inst_18484 = inst_18483;
var inst_18485 = null;
var inst_18486 = (0);
var inst_18487 = (0);
var state_18563__$1 = (function (){var statearr_18665 = state_18563;
(statearr_18665[(9)] = inst_18487);

(statearr_18665[(19)] = inst_18484);

(statearr_18665[(20)] = inst_18486);

(statearr_18665[(28)] = inst_18474);

(statearr_18665[(27)] = inst_18472__$1);

(statearr_18665[(12)] = inst_18485);

return statearr_18665;
})();
var statearr_18666_20568 = state_18563__$1;
(statearr_18666_20568[(2)] = null);

(statearr_18666_20568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (28))){
var inst_18484 = (state_18563[(19)]);
var inst_18508 = (state_18563[(23)]);
var inst_18508__$1 = cljs.core.seq(inst_18484);
var state_18563__$1 = (function (){var statearr_18670 = state_18563;
(statearr_18670[(23)] = inst_18508__$1);

return statearr_18670;
})();
if(inst_18508__$1){
var statearr_18672_20570 = state_18563__$1;
(statearr_18672_20570[(1)] = (33));

} else {
var statearr_18673_20571 = state_18563__$1;
(statearr_18673_20571[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (25))){
var inst_18487 = (state_18563[(9)]);
var inst_18486 = (state_18563[(20)]);
var inst_18489 = (inst_18487 < inst_18486);
var inst_18490 = inst_18489;
var state_18563__$1 = state_18563;
if(cljs.core.truth_(inst_18490)){
var statearr_18674_20572 = state_18563__$1;
(statearr_18674_20572[(1)] = (27));

} else {
var statearr_18675_20573 = state_18563__$1;
(statearr_18675_20573[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (34))){
var state_18563__$1 = state_18563;
var statearr_18677_20575 = state_18563__$1;
(statearr_18677_20575[(2)] = null);

(statearr_18677_20575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (17))){
var state_18563__$1 = state_18563;
var statearr_18678_20577 = state_18563__$1;
(statearr_18678_20577[(2)] = null);

(statearr_18678_20577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (3))){
var inst_18554 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18563__$1,inst_18554);
} else {
if((state_val_18565 === (12))){
var inst_18467 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18679_20578 = state_18563__$1;
(statearr_18679_20578[(2)] = inst_18467);

(statearr_18679_20578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (2))){
var state_18563__$1 = state_18563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18563__$1,(4),ch);
} else {
if((state_val_18565 === (23))){
var state_18563__$1 = state_18563;
var statearr_18687_20579 = state_18563__$1;
(statearr_18687_20579[(2)] = null);

(statearr_18687_20579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (35))){
var inst_18534 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18689_20580 = state_18563__$1;
(statearr_18689_20580[(2)] = inst_18534);

(statearr_18689_20580[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (19))){
var inst_18433 = (state_18563[(7)]);
var inst_18441 = cljs.core.chunk_first(inst_18433);
var inst_18443 = cljs.core.chunk_rest(inst_18433);
var inst_18444 = cljs.core.count(inst_18441);
var inst_18407 = inst_18443;
var inst_18408 = inst_18441;
var inst_18409 = inst_18444;
var inst_18410 = (0);
var state_18563__$1 = (function (){var statearr_18693 = state_18563;
(statearr_18693[(13)] = inst_18408);

(statearr_18693[(14)] = inst_18410);

(statearr_18693[(16)] = inst_18409);

(statearr_18693[(17)] = inst_18407);

return statearr_18693;
})();
var statearr_18695_20582 = state_18563__$1;
(statearr_18695_20582[(2)] = null);

(statearr_18695_20582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (11))){
var inst_18433 = (state_18563[(7)]);
var inst_18407 = (state_18563[(17)]);
var inst_18433__$1 = cljs.core.seq(inst_18407);
var state_18563__$1 = (function (){var statearr_18696 = state_18563;
(statearr_18696[(7)] = inst_18433__$1);

return statearr_18696;
})();
if(inst_18433__$1){
var statearr_18700_20583 = state_18563__$1;
(statearr_18700_20583[(1)] = (16));

} else {
var statearr_18702_20584 = state_18563__$1;
(statearr_18702_20584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (9))){
var inst_18469 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18703_20585 = state_18563__$1;
(statearr_18703_20585[(2)] = inst_18469);

(statearr_18703_20585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (5))){
var inst_18405 = cljs.core.deref(cs);
var inst_18406 = cljs.core.seq(inst_18405);
var inst_18407 = inst_18406;
var inst_18408 = null;
var inst_18409 = (0);
var inst_18410 = (0);
var state_18563__$1 = (function (){var statearr_18707 = state_18563;
(statearr_18707[(13)] = inst_18408);

(statearr_18707[(14)] = inst_18410);

(statearr_18707[(16)] = inst_18409);

(statearr_18707[(17)] = inst_18407);

return statearr_18707;
})();
var statearr_18709_20590 = state_18563__$1;
(statearr_18709_20590[(2)] = null);

(statearr_18709_20590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (14))){
var state_18563__$1 = state_18563;
var statearr_18710_20591 = state_18563__$1;
(statearr_18710_20591[(2)] = null);

(statearr_18710_20591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (45))){
var inst_18544 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18711_20594 = state_18563__$1;
(statearr_18711_20594[(2)] = inst_18544);

(statearr_18711_20594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (26))){
var inst_18472 = (state_18563[(27)]);
var inst_18538 = (state_18563[(2)]);
var inst_18540 = cljs.core.seq(inst_18472);
var state_18563__$1 = (function (){var statearr_18712 = state_18563;
(statearr_18712[(29)] = inst_18538);

return statearr_18712;
})();
if(inst_18540){
var statearr_18713_20596 = state_18563__$1;
(statearr_18713_20596[(1)] = (42));

} else {
var statearr_18714_20597 = state_18563__$1;
(statearr_18714_20597[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (16))){
var inst_18433 = (state_18563[(7)]);
var inst_18436 = cljs.core.chunked_seq_QMARK_(inst_18433);
var state_18563__$1 = state_18563;
if(inst_18436){
var statearr_18715_20598 = state_18563__$1;
(statearr_18715_20598[(1)] = (19));

} else {
var statearr_18716_20599 = state_18563__$1;
(statearr_18716_20599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (38))){
var inst_18531 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18721_20600 = state_18563__$1;
(statearr_18721_20600[(2)] = inst_18531);

(statearr_18721_20600[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (30))){
var state_18563__$1 = state_18563;
var statearr_18722_20603 = state_18563__$1;
(statearr_18722_20603[(2)] = null);

(statearr_18722_20603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (10))){
var inst_18408 = (state_18563[(13)]);
var inst_18410 = (state_18563[(14)]);
var inst_18419 = cljs.core._nth(inst_18408,inst_18410);
var inst_18420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18419,(0),null);
var inst_18421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18419,(1),null);
var state_18563__$1 = (function (){var statearr_18724 = state_18563;
(statearr_18724[(24)] = inst_18420);

return statearr_18724;
})();
if(cljs.core.truth_(inst_18421)){
var statearr_18725_20610 = state_18563__$1;
(statearr_18725_20610[(1)] = (13));

} else {
var statearr_18726_20611 = state_18563__$1;
(statearr_18726_20611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (18))){
var inst_18465 = (state_18563[(2)]);
var state_18563__$1 = state_18563;
var statearr_18727_20615 = state_18563__$1;
(statearr_18727_20615[(2)] = inst_18465);

(statearr_18727_20615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (42))){
var state_18563__$1 = state_18563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18563__$1,(45),dchan);
} else {
if((state_val_18565 === (37))){
var inst_18398 = (state_18563[(10)]);
var inst_18520 = (state_18563[(22)]);
var inst_18508 = (state_18563[(23)]);
var inst_18520__$1 = cljs.core.first(inst_18508);
var inst_18522 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18520__$1,inst_18398,done);
var state_18563__$1 = (function (){var statearr_18728 = state_18563;
(statearr_18728[(22)] = inst_18520__$1);

return statearr_18728;
})();
if(cljs.core.truth_(inst_18522)){
var statearr_18730_20618 = state_18563__$1;
(statearr_18730_20618[(1)] = (39));

} else {
var statearr_18732_20622 = state_18563__$1;
(statearr_18732_20622[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (8))){
var inst_18410 = (state_18563[(14)]);
var inst_18409 = (state_18563[(16)]);
var inst_18413 = (inst_18410 < inst_18409);
var inst_18414 = inst_18413;
var state_18563__$1 = state_18563;
if(cljs.core.truth_(inst_18414)){
var statearr_18733_20623 = state_18563__$1;
(statearr_18733_20623[(1)] = (10));

} else {
var statearr_18734_20624 = state_18563__$1;
(statearr_18734_20624[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17153__auto__ = null;
var cljs$core$async$mult_$_state_machine__17153__auto____0 = (function (){
var statearr_18735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18735[(0)] = cljs$core$async$mult_$_state_machine__17153__auto__);

(statearr_18735[(1)] = (1));

return statearr_18735;
});
var cljs$core$async$mult_$_state_machine__17153__auto____1 = (function (state_18563){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18563);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18736){var ex__17156__auto__ = e18736;
var statearr_18737_20633 = state_18563;
(statearr_18737_20633[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18563[(4)]))){
var statearr_18738_20635 = state_18563;
(statearr_18738_20635[(1)] = cljs.core.first((state_18563[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20638 = state_18563;
state_18563 = G__20638;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17153__auto__ = function(state_18563){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17153__auto____1.call(this,state_18563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17153__auto____0;
cljs$core$async$mult_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17153__auto____1;
return cljs$core$async$mult_$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18739 = f__17538__auto__();
(statearr_18739[(6)] = c__17537__auto___20502);

return statearr_18739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18741 = arguments.length;
switch (G__18741) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20648 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20648(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20651 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20651(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20662 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20662(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20663 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20663(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20664 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20664(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___20670 = arguments.length;
var i__4865__auto___20671 = (0);
while(true){
if((i__4865__auto___20671 < len__4864__auto___20670)){
args__4870__auto__.push((arguments[i__4865__auto___20671]));

var G__20672 = (i__4865__auto___20671 + (1));
i__4865__auto___20671 = G__20672;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18754){
var map__18755 = p__18754;
var map__18755__$1 = cljs.core.__destructure_map(map__18755);
var opts = map__18755__$1;
var statearr_18756_20679 = state;
(statearr_18756_20679[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18757_20680 = state;
(statearr_18757_20680[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_18762_20685 = state;
(statearr_18762_20685[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18748){
var G__18749 = cljs.core.first(seq18748);
var seq18748__$1 = cljs.core.next(seq18748);
var G__18750 = cljs.core.first(seq18748__$1);
var seq18748__$2 = cljs.core.next(seq18748__$1);
var G__18751 = cljs.core.first(seq18748__$2);
var seq18748__$3 = cljs.core.next(seq18748__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18749,G__18750,G__18751,seq18748__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18771 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18772){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18772 = meta18772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18773,meta18772__$1){
var self__ = this;
var _18773__$1 = this;
return (new cljs.core.async.t_cljs$core$async18771(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18772__$1));
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18773){
var self__ = this;
var _18773__$1 = this;
return self__.meta18772;
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18772","meta18772",-554933180,null)], null);
}));

(cljs.core.async.t_cljs$core$async18771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18771");

(cljs.core.async.t_cljs$core$async18771.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18771.
 */
cljs.core.async.__GT_t_cljs$core$async18771 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18771(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18772){
return (new cljs.core.async.t_cljs$core$async18771(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18772));
});

}

return (new cljs.core.async.t_cljs$core$async18771(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17537__auto___20700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_18877){
var state_val_18878 = (state_18877[(1)]);
if((state_val_18878 === (7))){
var inst_18833 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
if(cljs.core.truth_(inst_18833)){
var statearr_18879_20704 = state_18877__$1;
(statearr_18879_20704[(1)] = (8));

} else {
var statearr_18880_20705 = state_18877__$1;
(statearr_18880_20705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (20))){
var inst_18826 = (state_18877[(7)]);
var state_18877__$1 = state_18877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18877__$1,(23),out,inst_18826);
} else {
if((state_val_18878 === (1))){
var inst_18809 = calc_state();
var inst_18810 = cljs.core.__destructure_map(inst_18809);
var inst_18811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18810,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18810,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18810,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18814 = inst_18809;
var state_18877__$1 = (function (){var statearr_18881 = state_18877;
(statearr_18881[(8)] = inst_18813);

(statearr_18881[(9)] = inst_18814);

(statearr_18881[(10)] = inst_18811);

(statearr_18881[(11)] = inst_18812);

return statearr_18881;
})();
var statearr_18882_20709 = state_18877__$1;
(statearr_18882_20709[(2)] = null);

(statearr_18882_20709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (24))){
var inst_18817 = (state_18877[(12)]);
var inst_18814 = inst_18817;
var state_18877__$1 = (function (){var statearr_18884 = state_18877;
(statearr_18884[(9)] = inst_18814);

return statearr_18884;
})();
var statearr_18888_20710 = state_18877__$1;
(statearr_18888_20710[(2)] = null);

(statearr_18888_20710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (4))){
var inst_18828 = (state_18877[(13)]);
var inst_18826 = (state_18877[(7)]);
var inst_18825 = (state_18877[(2)]);
var inst_18826__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18825,(0),null);
var inst_18827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18825,(1),null);
var inst_18828__$1 = (inst_18826__$1 == null);
var state_18877__$1 = (function (){var statearr_18889 = state_18877;
(statearr_18889[(13)] = inst_18828__$1);

(statearr_18889[(14)] = inst_18827);

(statearr_18889[(7)] = inst_18826__$1);

return statearr_18889;
})();
if(cljs.core.truth_(inst_18828__$1)){
var statearr_18892_20712 = state_18877__$1;
(statearr_18892_20712[(1)] = (5));

} else {
var statearr_18893_20714 = state_18877__$1;
(statearr_18893_20714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (15))){
var inst_18818 = (state_18877[(15)]);
var inst_18847 = (state_18877[(16)]);
var inst_18847__$1 = cljs.core.empty_QMARK_(inst_18818);
var state_18877__$1 = (function (){var statearr_18895 = state_18877;
(statearr_18895[(16)] = inst_18847__$1);

return statearr_18895;
})();
if(inst_18847__$1){
var statearr_18896_20716 = state_18877__$1;
(statearr_18896_20716[(1)] = (17));

} else {
var statearr_18897_20717 = state_18877__$1;
(statearr_18897_20717[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (21))){
var inst_18817 = (state_18877[(12)]);
var inst_18814 = inst_18817;
var state_18877__$1 = (function (){var statearr_18899 = state_18877;
(statearr_18899[(9)] = inst_18814);

return statearr_18899;
})();
var statearr_18900_20723 = state_18877__$1;
(statearr_18900_20723[(2)] = null);

(statearr_18900_20723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (13))){
var inst_18840 = (state_18877[(2)]);
var inst_18841 = calc_state();
var inst_18814 = inst_18841;
var state_18877__$1 = (function (){var statearr_18901 = state_18877;
(statearr_18901[(17)] = inst_18840);

(statearr_18901[(9)] = inst_18814);

return statearr_18901;
})();
var statearr_18902_20726 = state_18877__$1;
(statearr_18902_20726[(2)] = null);

(statearr_18902_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (22))){
var inst_18867 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
var statearr_18903_20727 = state_18877__$1;
(statearr_18903_20727[(2)] = inst_18867);

(statearr_18903_20727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (6))){
var inst_18827 = (state_18877[(14)]);
var inst_18831 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18827,change);
var state_18877__$1 = state_18877;
var statearr_18904_20728 = state_18877__$1;
(statearr_18904_20728[(2)] = inst_18831);

(statearr_18904_20728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (25))){
var state_18877__$1 = state_18877;
var statearr_18905_20729 = state_18877__$1;
(statearr_18905_20729[(2)] = null);

(statearr_18905_20729[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (17))){
var inst_18819 = (state_18877[(18)]);
var inst_18827 = (state_18877[(14)]);
var inst_18849 = (inst_18819.cljs$core$IFn$_invoke$arity$1 ? inst_18819.cljs$core$IFn$_invoke$arity$1(inst_18827) : inst_18819.call(null,inst_18827));
var inst_18850 = cljs.core.not(inst_18849);
var state_18877__$1 = state_18877;
var statearr_18906_20732 = state_18877__$1;
(statearr_18906_20732[(2)] = inst_18850);

(statearr_18906_20732[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (3))){
var inst_18871 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18877__$1,inst_18871);
} else {
if((state_val_18878 === (12))){
var state_18877__$1 = state_18877;
var statearr_18909_20733 = state_18877__$1;
(statearr_18909_20733[(2)] = null);

(statearr_18909_20733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (2))){
var inst_18817 = (state_18877[(12)]);
var inst_18814 = (state_18877[(9)]);
var inst_18817__$1 = cljs.core.__destructure_map(inst_18814);
var inst_18818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18817__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18817__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18817__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18877__$1 = (function (){var statearr_18910 = state_18877;
(statearr_18910[(12)] = inst_18817__$1);

(statearr_18910[(15)] = inst_18818);

(statearr_18910[(18)] = inst_18819);

return statearr_18910;
})();
return cljs.core.async.ioc_alts_BANG_(state_18877__$1,(4),inst_18820);
} else {
if((state_val_18878 === (23))){
var inst_18858 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
if(cljs.core.truth_(inst_18858)){
var statearr_18911_20737 = state_18877__$1;
(statearr_18911_20737[(1)] = (24));

} else {
var statearr_18913_20738 = state_18877__$1;
(statearr_18913_20738[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (19))){
var inst_18853 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
var statearr_18915_20739 = state_18877__$1;
(statearr_18915_20739[(2)] = inst_18853);

(statearr_18915_20739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (11))){
var inst_18827 = (state_18877[(14)]);
var inst_18837 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18827);
var state_18877__$1 = state_18877;
var statearr_18919_20740 = state_18877__$1;
(statearr_18919_20740[(2)] = inst_18837);

(statearr_18919_20740[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (9))){
var inst_18844 = (state_18877[(19)]);
var inst_18818 = (state_18877[(15)]);
var inst_18827 = (state_18877[(14)]);
var inst_18844__$1 = (inst_18818.cljs$core$IFn$_invoke$arity$1 ? inst_18818.cljs$core$IFn$_invoke$arity$1(inst_18827) : inst_18818.call(null,inst_18827));
var state_18877__$1 = (function (){var statearr_18920 = state_18877;
(statearr_18920[(19)] = inst_18844__$1);

return statearr_18920;
})();
if(cljs.core.truth_(inst_18844__$1)){
var statearr_18921_20741 = state_18877__$1;
(statearr_18921_20741[(1)] = (14));

} else {
var statearr_18922_20742 = state_18877__$1;
(statearr_18922_20742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (5))){
var inst_18828 = (state_18877[(13)]);
var state_18877__$1 = state_18877;
var statearr_18923_20744 = state_18877__$1;
(statearr_18923_20744[(2)] = inst_18828);

(statearr_18923_20744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (14))){
var inst_18844 = (state_18877[(19)]);
var state_18877__$1 = state_18877;
var statearr_18924_20746 = state_18877__$1;
(statearr_18924_20746[(2)] = inst_18844);

(statearr_18924_20746[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (26))){
var inst_18863 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
var statearr_18925_20747 = state_18877__$1;
(statearr_18925_20747[(2)] = inst_18863);

(statearr_18925_20747[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (16))){
var inst_18855 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
if(cljs.core.truth_(inst_18855)){
var statearr_18926_20748 = state_18877__$1;
(statearr_18926_20748[(1)] = (20));

} else {
var statearr_18927_20749 = state_18877__$1;
(statearr_18927_20749[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (10))){
var inst_18869 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
var statearr_18928_20752 = state_18877__$1;
(statearr_18928_20752[(2)] = inst_18869);

(statearr_18928_20752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (18))){
var inst_18847 = (state_18877[(16)]);
var state_18877__$1 = state_18877;
var statearr_18929_20753 = state_18877__$1;
(statearr_18929_20753[(2)] = inst_18847);

(statearr_18929_20753[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (8))){
var inst_18826 = (state_18877[(7)]);
var inst_18835 = (inst_18826 == null);
var state_18877__$1 = state_18877;
if(cljs.core.truth_(inst_18835)){
var statearr_18930_20755 = state_18877__$1;
(statearr_18930_20755[(1)] = (11));

} else {
var statearr_18931_20756 = state_18877__$1;
(statearr_18931_20756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17153__auto__ = null;
var cljs$core$async$mix_$_state_machine__17153__auto____0 = (function (){
var statearr_18932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18932[(0)] = cljs$core$async$mix_$_state_machine__17153__auto__);

(statearr_18932[(1)] = (1));

return statearr_18932;
});
var cljs$core$async$mix_$_state_machine__17153__auto____1 = (function (state_18877){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_18877);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e18933){var ex__17156__auto__ = e18933;
var statearr_18934_20761 = state_18877;
(statearr_18934_20761[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_18877[(4)]))){
var statearr_18935_20762 = state_18877;
(statearr_18935_20762[(1)] = cljs.core.first((state_18877[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20763 = state_18877;
state_18877 = G__20763;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17153__auto__ = function(state_18877){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17153__auto____1.call(this,state_18877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17153__auto____0;
cljs$core$async$mix_$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17153__auto____1;
return cljs$core$async$mix_$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_18936 = f__17538__auto__();
(statearr_18936[(6)] = c__17537__auto___20700);

return statearr_18936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20770 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20770(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20774 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20774(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20778 = (function() {
var G__20779 = null;
var G__20779__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20779__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20779 = function(p,v){
switch(arguments.length){
case 1:
return G__20779__1.call(this,p);
case 2:
return G__20779__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20779.cljs$core$IFn$_invoke$arity$1 = G__20779__1;
G__20779.cljs$core$IFn$_invoke$arity$2 = G__20779__2;
return G__20779;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18951 = arguments.length;
switch (G__18951) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20778(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20778(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18961 = arguments.length;
switch (G__18961) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18959_SHARP_){
if(cljs.core.truth_((p1__18959_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18959_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18959_SHARP_.call(null,topic)))){
return p1__18959_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18959_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18962 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18963){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18963 = meta18963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18964,meta18963__$1){
var self__ = this;
var _18964__$1 = this;
return (new cljs.core.async.t_cljs$core$async18962(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18963__$1));
}));

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18964){
var self__ = this;
var _18964__$1 = this;
return self__.meta18963;
}));

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18963","meta18963",-461932324,null)], null);
}));

(cljs.core.async.t_cljs$core$async18962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18962");

(cljs.core.async.t_cljs$core$async18962.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18962.
 */
cljs.core.async.__GT_t_cljs$core$async18962 = (function cljs$core$async$__GT_t_cljs$core$async18962(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18963){
return (new cljs.core.async.t_cljs$core$async18962(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18963));
});

}

return (new cljs.core.async.t_cljs$core$async18962(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17537__auto___20807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19041){
var state_val_19042 = (state_19041[(1)]);
if((state_val_19042 === (7))){
var inst_19037 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19043_20808 = state_19041__$1;
(statearr_19043_20808[(2)] = inst_19037);

(statearr_19043_20808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (20))){
var state_19041__$1 = state_19041;
var statearr_19044_20812 = state_19041__$1;
(statearr_19044_20812[(2)] = null);

(statearr_19044_20812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (1))){
var state_19041__$1 = state_19041;
var statearr_19045_20813 = state_19041__$1;
(statearr_19045_20813[(2)] = null);

(statearr_19045_20813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (24))){
var inst_19020 = (state_19041[(7)]);
var inst_19029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19020);
var state_19041__$1 = state_19041;
var statearr_19046_20814 = state_19041__$1;
(statearr_19046_20814[(2)] = inst_19029);

(statearr_19046_20814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (4))){
var inst_18972 = (state_19041[(8)]);
var inst_18972__$1 = (state_19041[(2)]);
var inst_18973 = (inst_18972__$1 == null);
var state_19041__$1 = (function (){var statearr_19047 = state_19041;
(statearr_19047[(8)] = inst_18972__$1);

return statearr_19047;
})();
if(cljs.core.truth_(inst_18973)){
var statearr_19048_20815 = state_19041__$1;
(statearr_19048_20815[(1)] = (5));

} else {
var statearr_19049_20816 = state_19041__$1;
(statearr_19049_20816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (15))){
var inst_19014 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19050_20817 = state_19041__$1;
(statearr_19050_20817[(2)] = inst_19014);

(statearr_19050_20817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (21))){
var inst_19034 = (state_19041[(2)]);
var state_19041__$1 = (function (){var statearr_19051 = state_19041;
(statearr_19051[(9)] = inst_19034);

return statearr_19051;
})();
var statearr_19052_20820 = state_19041__$1;
(statearr_19052_20820[(2)] = null);

(statearr_19052_20820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (13))){
var inst_18996 = (state_19041[(10)]);
var inst_18998 = cljs.core.chunked_seq_QMARK_(inst_18996);
var state_19041__$1 = state_19041;
if(inst_18998){
var statearr_19053_20821 = state_19041__$1;
(statearr_19053_20821[(1)] = (16));

} else {
var statearr_19054_20822 = state_19041__$1;
(statearr_19054_20822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (22))){
var inst_19026 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_19026)){
var statearr_19055_20823 = state_19041__$1;
(statearr_19055_20823[(1)] = (23));

} else {
var statearr_19056_20824 = state_19041__$1;
(statearr_19056_20824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (6))){
var inst_18972 = (state_19041[(8)]);
var inst_19020 = (state_19041[(7)]);
var inst_19022 = (state_19041[(11)]);
var inst_19020__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18972) : topic_fn.call(null,inst_18972));
var inst_19021 = cljs.core.deref(mults);
var inst_19022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19021,inst_19020__$1);
var state_19041__$1 = (function (){var statearr_19057 = state_19041;
(statearr_19057[(7)] = inst_19020__$1);

(statearr_19057[(11)] = inst_19022__$1);

return statearr_19057;
})();
if(cljs.core.truth_(inst_19022__$1)){
var statearr_19058_20825 = state_19041__$1;
(statearr_19058_20825[(1)] = (19));

} else {
var statearr_19059_20826 = state_19041__$1;
(statearr_19059_20826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (25))){
var inst_19031 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19060_20832 = state_19041__$1;
(statearr_19060_20832[(2)] = inst_19031);

(statearr_19060_20832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (17))){
var inst_18996 = (state_19041[(10)]);
var inst_19005 = cljs.core.first(inst_18996);
var inst_19006 = cljs.core.async.muxch_STAR_(inst_19005);
var inst_19007 = cljs.core.async.close_BANG_(inst_19006);
var inst_19008 = cljs.core.next(inst_18996);
var inst_18982 = inst_19008;
var inst_18983 = null;
var inst_18984 = (0);
var inst_18985 = (0);
var state_19041__$1 = (function (){var statearr_19061 = state_19041;
(statearr_19061[(12)] = inst_18984);

(statearr_19061[(13)] = inst_18985);

(statearr_19061[(14)] = inst_18982);

(statearr_19061[(15)] = inst_19007);

(statearr_19061[(16)] = inst_18983);

return statearr_19061;
})();
var statearr_19062_20836 = state_19041__$1;
(statearr_19062_20836[(2)] = null);

(statearr_19062_20836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (3))){
var inst_19039 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19041__$1,inst_19039);
} else {
if((state_val_19042 === (12))){
var inst_19016 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19064_20882 = state_19041__$1;
(statearr_19064_20882[(2)] = inst_19016);

(statearr_19064_20882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (2))){
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19041__$1,(4),ch);
} else {
if((state_val_19042 === (23))){
var state_19041__$1 = state_19041;
var statearr_19065_20886 = state_19041__$1;
(statearr_19065_20886[(2)] = null);

(statearr_19065_20886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (19))){
var inst_18972 = (state_19041[(8)]);
var inst_19022 = (state_19041[(11)]);
var inst_19024 = cljs.core.async.muxch_STAR_(inst_19022);
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19041__$1,(22),inst_19024,inst_18972);
} else {
if((state_val_19042 === (11))){
var inst_18996 = (state_19041[(10)]);
var inst_18982 = (state_19041[(14)]);
var inst_18996__$1 = cljs.core.seq(inst_18982);
var state_19041__$1 = (function (){var statearr_19066 = state_19041;
(statearr_19066[(10)] = inst_18996__$1);

return statearr_19066;
})();
if(inst_18996__$1){
var statearr_19067_20897 = state_19041__$1;
(statearr_19067_20897[(1)] = (13));

} else {
var statearr_19068_20898 = state_19041__$1;
(statearr_19068_20898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (9))){
var inst_19018 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19069_20902 = state_19041__$1;
(statearr_19069_20902[(2)] = inst_19018);

(statearr_19069_20902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (5))){
var inst_18979 = cljs.core.deref(mults);
var inst_18980 = cljs.core.vals(inst_18979);
var inst_18981 = cljs.core.seq(inst_18980);
var inst_18982 = inst_18981;
var inst_18983 = null;
var inst_18984 = (0);
var inst_18985 = (0);
var state_19041__$1 = (function (){var statearr_19073 = state_19041;
(statearr_19073[(12)] = inst_18984);

(statearr_19073[(13)] = inst_18985);

(statearr_19073[(14)] = inst_18982);

(statearr_19073[(16)] = inst_18983);

return statearr_19073;
})();
var statearr_19074_20905 = state_19041__$1;
(statearr_19074_20905[(2)] = null);

(statearr_19074_20905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (14))){
var state_19041__$1 = state_19041;
var statearr_19078_20909 = state_19041__$1;
(statearr_19078_20909[(2)] = null);

(statearr_19078_20909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (16))){
var inst_18996 = (state_19041[(10)]);
var inst_19000 = cljs.core.chunk_first(inst_18996);
var inst_19001 = cljs.core.chunk_rest(inst_18996);
var inst_19002 = cljs.core.count(inst_19000);
var inst_18982 = inst_19001;
var inst_18983 = inst_19000;
var inst_18984 = inst_19002;
var inst_18985 = (0);
var state_19041__$1 = (function (){var statearr_19079 = state_19041;
(statearr_19079[(12)] = inst_18984);

(statearr_19079[(13)] = inst_18985);

(statearr_19079[(14)] = inst_18982);

(statearr_19079[(16)] = inst_18983);

return statearr_19079;
})();
var statearr_19080_20913 = state_19041__$1;
(statearr_19080_20913[(2)] = null);

(statearr_19080_20913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (10))){
var inst_18984 = (state_19041[(12)]);
var inst_18985 = (state_19041[(13)]);
var inst_18982 = (state_19041[(14)]);
var inst_18983 = (state_19041[(16)]);
var inst_18990 = cljs.core._nth(inst_18983,inst_18985);
var inst_18991 = cljs.core.async.muxch_STAR_(inst_18990);
var inst_18992 = cljs.core.async.close_BANG_(inst_18991);
var inst_18993 = (inst_18985 + (1));
var tmp19075 = inst_18984;
var tmp19076 = inst_18982;
var tmp19077 = inst_18983;
var inst_18982__$1 = tmp19076;
var inst_18983__$1 = tmp19077;
var inst_18984__$1 = tmp19075;
var inst_18985__$1 = inst_18993;
var state_19041__$1 = (function (){var statearr_19085 = state_19041;
(statearr_19085[(12)] = inst_18984__$1);

(statearr_19085[(13)] = inst_18985__$1);

(statearr_19085[(14)] = inst_18982__$1);

(statearr_19085[(16)] = inst_18983__$1);

(statearr_19085[(17)] = inst_18992);

return statearr_19085;
})();
var statearr_19086_20917 = state_19041__$1;
(statearr_19086_20917[(2)] = null);

(statearr_19086_20917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (18))){
var inst_19011 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19087_20919 = state_19041__$1;
(statearr_19087_20919[(2)] = inst_19011);

(statearr_19087_20919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (8))){
var inst_18984 = (state_19041[(12)]);
var inst_18985 = (state_19041[(13)]);
var inst_18987 = (inst_18985 < inst_18984);
var inst_18988 = inst_18987;
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_18988)){
var statearr_19088_20920 = state_19041__$1;
(statearr_19088_20920[(1)] = (10));

} else {
var statearr_19089_20921 = state_19041__$1;
(statearr_19089_20921[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19090[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19090[(1)] = (1));

return statearr_19090;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19041){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19041);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19091){var ex__17156__auto__ = e19091;
var statearr_19092_20922 = state_19041;
(statearr_19092_20922[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19041[(4)]))){
var statearr_19093_20923 = state_19041;
(statearr_19093_20923[(1)] = cljs.core.first((state_19041[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20926 = state_19041;
state_19041 = G__20926;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19094 = f__17538__auto__();
(statearr_19094[(6)] = c__17537__auto___20807);

return statearr_19094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19096 = arguments.length;
switch (G__19096) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19112 = arguments.length;
switch (G__19112) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19134 = arguments.length;
switch (G__19134) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17537__auto___20971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19189){
var state_val_19190 = (state_19189[(1)]);
if((state_val_19190 === (7))){
var state_19189__$1 = state_19189;
var statearr_19191_20972 = state_19189__$1;
(statearr_19191_20972[(2)] = null);

(statearr_19191_20972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (1))){
var state_19189__$1 = state_19189;
var statearr_19192_20973 = state_19189__$1;
(statearr_19192_20973[(2)] = null);

(statearr_19192_20973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (4))){
var inst_19146 = (state_19189[(7)]);
var inst_19147 = (state_19189[(8)]);
var inst_19149 = (inst_19147 < inst_19146);
var state_19189__$1 = state_19189;
if(cljs.core.truth_(inst_19149)){
var statearr_19193_20974 = state_19189__$1;
(statearr_19193_20974[(1)] = (6));

} else {
var statearr_19194_20975 = state_19189__$1;
(statearr_19194_20975[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (15))){
var inst_19175 = (state_19189[(9)]);
var inst_19180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19175);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19189__$1,(17),out,inst_19180);
} else {
if((state_val_19190 === (13))){
var inst_19175 = (state_19189[(9)]);
var inst_19175__$1 = (state_19189[(2)]);
var inst_19176 = cljs.core.some(cljs.core.nil_QMARK_,inst_19175__$1);
var state_19189__$1 = (function (){var statearr_19195 = state_19189;
(statearr_19195[(9)] = inst_19175__$1);

return statearr_19195;
})();
if(cljs.core.truth_(inst_19176)){
var statearr_19196_20976 = state_19189__$1;
(statearr_19196_20976[(1)] = (14));

} else {
var statearr_19197_20977 = state_19189__$1;
(statearr_19197_20977[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (6))){
var state_19189__$1 = state_19189;
var statearr_19198_20978 = state_19189__$1;
(statearr_19198_20978[(2)] = null);

(statearr_19198_20978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (17))){
var inst_19182 = (state_19189[(2)]);
var state_19189__$1 = (function (){var statearr_19200 = state_19189;
(statearr_19200[(10)] = inst_19182);

return statearr_19200;
})();
var statearr_19201_20979 = state_19189__$1;
(statearr_19201_20979[(2)] = null);

(statearr_19201_20979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (3))){
var inst_19187 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19189__$1,inst_19187);
} else {
if((state_val_19190 === (12))){
var _ = (function (){var statearr_19202 = state_19189;
(statearr_19202[(4)] = cljs.core.rest((state_19189[(4)])));

return statearr_19202;
})();
var state_19189__$1 = state_19189;
var ex19199 = (state_19189__$1[(2)]);
var statearr_19203_20989 = state_19189__$1;
(statearr_19203_20989[(5)] = ex19199);


if((ex19199 instanceof Object)){
var statearr_19204_20990 = state_19189__$1;
(statearr_19204_20990[(1)] = (11));

(statearr_19204_20990[(5)] = null);

} else {
throw ex19199;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (2))){
var inst_19145 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19146 = cnt;
var inst_19147 = (0);
var state_19189__$1 = (function (){var statearr_19205 = state_19189;
(statearr_19205[(7)] = inst_19146);

(statearr_19205[(11)] = inst_19145);

(statearr_19205[(8)] = inst_19147);

return statearr_19205;
})();
var statearr_19206_20991 = state_19189__$1;
(statearr_19206_20991[(2)] = null);

(statearr_19206_20991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (11))){
var inst_19154 = (state_19189[(2)]);
var inst_19155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19189__$1 = (function (){var statearr_19207 = state_19189;
(statearr_19207[(12)] = inst_19154);

return statearr_19207;
})();
var statearr_19208_20998 = state_19189__$1;
(statearr_19208_20998[(2)] = inst_19155);

(statearr_19208_20998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (9))){
var inst_19147 = (state_19189[(8)]);
var _ = (function (){var statearr_19209 = state_19189;
(statearr_19209[(4)] = cljs.core.cons((12),(state_19189[(4)])));

return statearr_19209;
})();
var inst_19161 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19147) : chs__$1.call(null,inst_19147));
var inst_19162 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19147) : done.call(null,inst_19147));
var inst_19163 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19161,inst_19162);
var ___$1 = (function (){var statearr_19210 = state_19189;
(statearr_19210[(4)] = cljs.core.rest((state_19189[(4)])));

return statearr_19210;
})();
var state_19189__$1 = state_19189;
var statearr_19213_20999 = state_19189__$1;
(statearr_19213_20999[(2)] = inst_19163);

(statearr_19213_20999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (5))){
var inst_19173 = (state_19189[(2)]);
var state_19189__$1 = (function (){var statearr_19220 = state_19189;
(statearr_19220[(13)] = inst_19173);

return statearr_19220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19189__$1,(13),dchan);
} else {
if((state_val_19190 === (14))){
var inst_19178 = cljs.core.async.close_BANG_(out);
var state_19189__$1 = state_19189;
var statearr_19224_21000 = state_19189__$1;
(statearr_19224_21000[(2)] = inst_19178);

(statearr_19224_21000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (16))){
var inst_19185 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19225_21001 = state_19189__$1;
(statearr_19225_21001[(2)] = inst_19185);

(statearr_19225_21001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (10))){
var inst_19147 = (state_19189[(8)]);
var inst_19166 = (state_19189[(2)]);
var inst_19167 = (inst_19147 + (1));
var inst_19147__$1 = inst_19167;
var state_19189__$1 = (function (){var statearr_19226 = state_19189;
(statearr_19226[(14)] = inst_19166);

(statearr_19226[(8)] = inst_19147__$1);

return statearr_19226;
})();
var statearr_19227_21004 = state_19189__$1;
(statearr_19227_21004[(2)] = null);

(statearr_19227_21004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (8))){
var inst_19171 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19228_21007 = state_19189__$1;
(statearr_19228_21007[(2)] = inst_19171);

(statearr_19228_21007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19229[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19229[(1)] = (1));

return statearr_19229;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19189){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19189);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19230){var ex__17156__auto__ = e19230;
var statearr_19231_21014 = state_19189;
(statearr_19231_21014[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19189[(4)]))){
var statearr_19232_21021 = state_19189;
(statearr_19232_21021[(1)] = cljs.core.first((state_19189[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21022 = state_19189;
state_19189 = G__21022;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19233 = f__17538__auto__();
(statearr_19233[(6)] = c__17537__auto___20971);

return statearr_19233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19236 = arguments.length;
switch (G__19236) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17537__auto___21027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19268){
var state_val_19269 = (state_19268[(1)]);
if((state_val_19269 === (7))){
var inst_19247 = (state_19268[(7)]);
var inst_19248 = (state_19268[(8)]);
var inst_19247__$1 = (state_19268[(2)]);
var inst_19248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19247__$1,(0),null);
var inst_19249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19247__$1,(1),null);
var inst_19250 = (inst_19248__$1 == null);
var state_19268__$1 = (function (){var statearr_19274 = state_19268;
(statearr_19274[(9)] = inst_19249);

(statearr_19274[(7)] = inst_19247__$1);

(statearr_19274[(8)] = inst_19248__$1);

return statearr_19274;
})();
if(cljs.core.truth_(inst_19250)){
var statearr_19275_21031 = state_19268__$1;
(statearr_19275_21031[(1)] = (8));

} else {
var statearr_19276_21032 = state_19268__$1;
(statearr_19276_21032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (1))){
var inst_19237 = cljs.core.vec(chs);
var inst_19238 = inst_19237;
var state_19268__$1 = (function (){var statearr_19277 = state_19268;
(statearr_19277[(10)] = inst_19238);

return statearr_19277;
})();
var statearr_19278_21033 = state_19268__$1;
(statearr_19278_21033[(2)] = null);

(statearr_19278_21033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (4))){
var inst_19238 = (state_19268[(10)]);
var state_19268__$1 = state_19268;
return cljs.core.async.ioc_alts_BANG_(state_19268__$1,(7),inst_19238);
} else {
if((state_val_19269 === (6))){
var inst_19264 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19281_21035 = state_19268__$1;
(statearr_19281_21035[(2)] = inst_19264);

(statearr_19281_21035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (3))){
var inst_19266 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19268__$1,inst_19266);
} else {
if((state_val_19269 === (2))){
var inst_19238 = (state_19268[(10)]);
var inst_19240 = cljs.core.count(inst_19238);
var inst_19241 = (inst_19240 > (0));
var state_19268__$1 = state_19268;
if(cljs.core.truth_(inst_19241)){
var statearr_19285_21038 = state_19268__$1;
(statearr_19285_21038[(1)] = (4));

} else {
var statearr_19286_21039 = state_19268__$1;
(statearr_19286_21039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (11))){
var inst_19238 = (state_19268[(10)]);
var inst_19257 = (state_19268[(2)]);
var tmp19282 = inst_19238;
var inst_19238__$1 = tmp19282;
var state_19268__$1 = (function (){var statearr_19287 = state_19268;
(statearr_19287[(11)] = inst_19257);

(statearr_19287[(10)] = inst_19238__$1);

return statearr_19287;
})();
var statearr_19288_21048 = state_19268__$1;
(statearr_19288_21048[(2)] = null);

(statearr_19288_21048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (9))){
var inst_19248 = (state_19268[(8)]);
var state_19268__$1 = state_19268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19268__$1,(11),out,inst_19248);
} else {
if((state_val_19269 === (5))){
var inst_19262 = cljs.core.async.close_BANG_(out);
var state_19268__$1 = state_19268;
var statearr_19289_21049 = state_19268__$1;
(statearr_19289_21049[(2)] = inst_19262);

(statearr_19289_21049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (10))){
var inst_19260 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19290_21051 = state_19268__$1;
(statearr_19290_21051[(2)] = inst_19260);

(statearr_19290_21051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (8))){
var inst_19238 = (state_19268[(10)]);
var inst_19249 = (state_19268[(9)]);
var inst_19247 = (state_19268[(7)]);
var inst_19248 = (state_19268[(8)]);
var inst_19252 = (function (){var cs = inst_19238;
var vec__19243 = inst_19247;
var v = inst_19248;
var c = inst_19249;
return (function (p1__19234_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19234_SHARP_);
});
})();
var inst_19253 = cljs.core.filterv(inst_19252,inst_19238);
var inst_19238__$1 = inst_19253;
var state_19268__$1 = (function (){var statearr_19291 = state_19268;
(statearr_19291[(10)] = inst_19238__$1);

return statearr_19291;
})();
var statearr_19292_21053 = state_19268__$1;
(statearr_19292_21053[(2)] = null);

(statearr_19292_21053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19293[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19293[(1)] = (1));

return statearr_19293;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19268){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19268);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19294){var ex__17156__auto__ = e19294;
var statearr_19295_21084 = state_19268;
(statearr_19295_21084[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19268[(4)]))){
var statearr_19299_21087 = state_19268;
(statearr_19299_21087[(1)] = cljs.core.first((state_19268[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21090 = state_19268;
state_19268 = G__21090;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19300 = f__17538__auto__();
(statearr_19300[(6)] = c__17537__auto___21027);

return statearr_19300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19305 = arguments.length;
switch (G__19305) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17537__auto___21101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19346){
var state_val_19347 = (state_19346[(1)]);
if((state_val_19347 === (7))){
var inst_19321 = (state_19346[(7)]);
var inst_19321__$1 = (state_19346[(2)]);
var inst_19322 = (inst_19321__$1 == null);
var inst_19323 = cljs.core.not(inst_19322);
var state_19346__$1 = (function (){var statearr_19351 = state_19346;
(statearr_19351[(7)] = inst_19321__$1);

return statearr_19351;
})();
if(inst_19323){
var statearr_19352_21108 = state_19346__$1;
(statearr_19352_21108[(1)] = (8));

} else {
var statearr_19353_21109 = state_19346__$1;
(statearr_19353_21109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (1))){
var inst_19316 = (0);
var state_19346__$1 = (function (){var statearr_19354 = state_19346;
(statearr_19354[(8)] = inst_19316);

return statearr_19354;
})();
var statearr_19358_21110 = state_19346__$1;
(statearr_19358_21110[(2)] = null);

(statearr_19358_21110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (4))){
var state_19346__$1 = state_19346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19346__$1,(7),ch);
} else {
if((state_val_19347 === (6))){
var inst_19338 = (state_19346[(2)]);
var state_19346__$1 = state_19346;
var statearr_19366_21115 = state_19346__$1;
(statearr_19366_21115[(2)] = inst_19338);

(statearr_19366_21115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (3))){
var inst_19340 = (state_19346[(2)]);
var inst_19341 = cljs.core.async.close_BANG_(out);
var state_19346__$1 = (function (){var statearr_19370 = state_19346;
(statearr_19370[(9)] = inst_19340);

return statearr_19370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19346__$1,inst_19341);
} else {
if((state_val_19347 === (2))){
var inst_19316 = (state_19346[(8)]);
var inst_19318 = (inst_19316 < n);
var state_19346__$1 = state_19346;
if(cljs.core.truth_(inst_19318)){
var statearr_19375_21120 = state_19346__$1;
(statearr_19375_21120[(1)] = (4));

} else {
var statearr_19376_21121 = state_19346__$1;
(statearr_19376_21121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (11))){
var inst_19316 = (state_19346[(8)]);
var inst_19326 = (state_19346[(2)]);
var inst_19330 = (inst_19316 + (1));
var inst_19316__$1 = inst_19330;
var state_19346__$1 = (function (){var statearr_19377 = state_19346;
(statearr_19377[(10)] = inst_19326);

(statearr_19377[(8)] = inst_19316__$1);

return statearr_19377;
})();
var statearr_19378_21124 = state_19346__$1;
(statearr_19378_21124[(2)] = null);

(statearr_19378_21124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (9))){
var state_19346__$1 = state_19346;
var statearr_19381_21126 = state_19346__$1;
(statearr_19381_21126[(2)] = null);

(statearr_19381_21126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (5))){
var state_19346__$1 = state_19346;
var statearr_19382_21128 = state_19346__$1;
(statearr_19382_21128[(2)] = null);

(statearr_19382_21128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (10))){
var inst_19335 = (state_19346[(2)]);
var state_19346__$1 = state_19346;
var statearr_19383_21132 = state_19346__$1;
(statearr_19383_21132[(2)] = inst_19335);

(statearr_19383_21132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (8))){
var inst_19321 = (state_19346[(7)]);
var state_19346__$1 = state_19346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19346__$1,(11),out,inst_19321);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19384[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19384[(1)] = (1));

return statearr_19384;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19346){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19346);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19385){var ex__17156__auto__ = e19385;
var statearr_19386_21138 = state_19346;
(statearr_19386_21138[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19346[(4)]))){
var statearr_19387_21139 = state_19346;
(statearr_19387_21139[(1)] = cljs.core.first((state_19346[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21142 = state_19346;
state_19346 = G__21142;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19388 = f__17538__auto__();
(statearr_19388[(6)] = c__17537__auto___21101);

return statearr_19388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19390 = (function (f,ch,meta19391){
this.f = f;
this.ch = ch;
this.meta19391 = meta19391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19392,meta19391__$1){
var self__ = this;
var _19392__$1 = this;
return (new cljs.core.async.t_cljs$core$async19390(self__.f,self__.ch,meta19391__$1));
}));

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19392){
var self__ = this;
var _19392__$1 = this;
return self__.meta19391;
}));

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19393 = (function (f,ch,meta19391,_,fn1,meta19394){
this.f = f;
this.ch = ch;
this.meta19391 = meta19391;
this._ = _;
this.fn1 = fn1;
this.meta19394 = meta19394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19395,meta19394__$1){
var self__ = this;
var _19395__$1 = this;
return (new cljs.core.async.t_cljs$core$async19393(self__.f,self__.ch,self__.meta19391,self__._,self__.fn1,meta19394__$1));
}));

(cljs.core.async.t_cljs$core$async19393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19395){
var self__ = this;
var _19395__$1 = this;
return self__.meta19394;
}));

(cljs.core.async.t_cljs$core$async19393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19389_SHARP_){
var G__19396 = (((p1__19389_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19389_SHARP_) : self__.f.call(null,p1__19389_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19396) : f1.call(null,G__19396));
});
}));

(cljs.core.async.t_cljs$core$async19393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19391","meta19391",1681102511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19390","cljs.core.async/t_cljs$core$async19390",-492638057,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19394","meta19394",1566042424,null)], null);
}));

(cljs.core.async.t_cljs$core$async19393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19393");

(cljs.core.async.t_cljs$core$async19393.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19393.
 */
cljs.core.async.__GT_t_cljs$core$async19393 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19393(f__$1,ch__$1,meta19391__$1,___$2,fn1__$1,meta19394){
return (new cljs.core.async.t_cljs$core$async19393(f__$1,ch__$1,meta19391__$1,___$2,fn1__$1,meta19394));
});

}

return (new cljs.core.async.t_cljs$core$async19393(self__.f,self__.ch,self__.meta19391,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19399 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19399) : self__.f.call(null,G__19399));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19391","meta19391",1681102511,null)], null);
}));

(cljs.core.async.t_cljs$core$async19390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19390");

(cljs.core.async.t_cljs$core$async19390.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19390.
 */
cljs.core.async.__GT_t_cljs$core$async19390 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19390(f__$1,ch__$1,meta19391){
return (new cljs.core.async.t_cljs$core$async19390(f__$1,ch__$1,meta19391));
});

}

return (new cljs.core.async.t_cljs$core$async19390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19412 = (function (f,ch,meta19413){
this.f = f;
this.ch = ch;
this.meta19413 = meta19413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19414,meta19413__$1){
var self__ = this;
var _19414__$1 = this;
return (new cljs.core.async.t_cljs$core$async19412(self__.f,self__.ch,meta19413__$1));
}));

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19414){
var self__ = this;
var _19414__$1 = this;
return self__.meta19413;
}));

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19413","meta19413",83357223,null)], null);
}));

(cljs.core.async.t_cljs$core$async19412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19412");

(cljs.core.async.t_cljs$core$async19412.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19412.
 */
cljs.core.async.__GT_t_cljs$core$async19412 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19412(f__$1,ch__$1,meta19413){
return (new cljs.core.async.t_cljs$core$async19412(f__$1,ch__$1,meta19413));
});

}

return (new cljs.core.async.t_cljs$core$async19412(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19416 = (function (p,ch,meta19417){
this.p = p;
this.ch = ch;
this.meta19417 = meta19417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19418,meta19417__$1){
var self__ = this;
var _19418__$1 = this;
return (new cljs.core.async.t_cljs$core$async19416(self__.p,self__.ch,meta19417__$1));
}));

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19418){
var self__ = this;
var _19418__$1 = this;
return self__.meta19417;
}));

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19417","meta19417",174296108,null)], null);
}));

(cljs.core.async.t_cljs$core$async19416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19416");

(cljs.core.async.t_cljs$core$async19416.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19416.
 */
cljs.core.async.__GT_t_cljs$core$async19416 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19416(p__$1,ch__$1,meta19417){
return (new cljs.core.async.t_cljs$core$async19416(p__$1,ch__$1,meta19417));
});

}

return (new cljs.core.async.t_cljs$core$async19416(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19433 = arguments.length;
switch (G__19433) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17537__auto___21190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19454){
var state_val_19455 = (state_19454[(1)]);
if((state_val_19455 === (7))){
var inst_19450 = (state_19454[(2)]);
var state_19454__$1 = state_19454;
var statearr_19456_21191 = state_19454__$1;
(statearr_19456_21191[(2)] = inst_19450);

(statearr_19456_21191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (1))){
var state_19454__$1 = state_19454;
var statearr_19457_21192 = state_19454__$1;
(statearr_19457_21192[(2)] = null);

(statearr_19457_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (4))){
var inst_19436 = (state_19454[(7)]);
var inst_19436__$1 = (state_19454[(2)]);
var inst_19437 = (inst_19436__$1 == null);
var state_19454__$1 = (function (){var statearr_19458 = state_19454;
(statearr_19458[(7)] = inst_19436__$1);

return statearr_19458;
})();
if(cljs.core.truth_(inst_19437)){
var statearr_19459_21199 = state_19454__$1;
(statearr_19459_21199[(1)] = (5));

} else {
var statearr_19460_21200 = state_19454__$1;
(statearr_19460_21200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (6))){
var inst_19436 = (state_19454[(7)]);
var inst_19441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19436) : p.call(null,inst_19436));
var state_19454__$1 = state_19454;
if(cljs.core.truth_(inst_19441)){
var statearr_19461_21201 = state_19454__$1;
(statearr_19461_21201[(1)] = (8));

} else {
var statearr_19462_21202 = state_19454__$1;
(statearr_19462_21202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (3))){
var inst_19452 = (state_19454[(2)]);
var state_19454__$1 = state_19454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19454__$1,inst_19452);
} else {
if((state_val_19455 === (2))){
var state_19454__$1 = state_19454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19454__$1,(4),ch);
} else {
if((state_val_19455 === (11))){
var inst_19444 = (state_19454[(2)]);
var state_19454__$1 = state_19454;
var statearr_19465_21203 = state_19454__$1;
(statearr_19465_21203[(2)] = inst_19444);

(statearr_19465_21203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (9))){
var state_19454__$1 = state_19454;
var statearr_19466_21208 = state_19454__$1;
(statearr_19466_21208[(2)] = null);

(statearr_19466_21208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (5))){
var inst_19439 = cljs.core.async.close_BANG_(out);
var state_19454__$1 = state_19454;
var statearr_19467_21211 = state_19454__$1;
(statearr_19467_21211[(2)] = inst_19439);

(statearr_19467_21211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (10))){
var inst_19447 = (state_19454[(2)]);
var state_19454__$1 = (function (){var statearr_19469 = state_19454;
(statearr_19469[(8)] = inst_19447);

return statearr_19469;
})();
var statearr_19470_21214 = state_19454__$1;
(statearr_19470_21214[(2)] = null);

(statearr_19470_21214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (8))){
var inst_19436 = (state_19454[(7)]);
var state_19454__$1 = state_19454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19454__$1,(11),out,inst_19436);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19472 = [null,null,null,null,null,null,null,null,null];
(statearr_19472[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19472[(1)] = (1));

return statearr_19472;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19454){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19454);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19473){var ex__17156__auto__ = e19473;
var statearr_19474_21217 = state_19454;
(statearr_19474_21217[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19454[(4)]))){
var statearr_19475_21218 = state_19454;
(statearr_19475_21218[(1)] = cljs.core.first((state_19454[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21219 = state_19454;
state_19454 = G__21219;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19476 = f__17538__auto__();
(statearr_19476[(6)] = c__17537__auto___21190);

return statearr_19476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19485 = arguments.length;
switch (G__19485) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19569){
var state_val_19570 = (state_19569[(1)]);
if((state_val_19570 === (7))){
var inst_19564 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19571_21225 = state_19569__$1;
(statearr_19571_21225[(2)] = inst_19564);

(statearr_19571_21225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (20))){
var inst_19527 = (state_19569[(7)]);
var inst_19545 = (state_19569[(2)]);
var inst_19546 = cljs.core.next(inst_19527);
var inst_19509 = inst_19546;
var inst_19510 = null;
var inst_19511 = (0);
var inst_19512 = (0);
var state_19569__$1 = (function (){var statearr_19574 = state_19569;
(statearr_19574[(8)] = inst_19510);

(statearr_19574[(9)] = inst_19509);

(statearr_19574[(10)] = inst_19512);

(statearr_19574[(11)] = inst_19545);

(statearr_19574[(12)] = inst_19511);

return statearr_19574;
})();
var statearr_19578_21227 = state_19569__$1;
(statearr_19578_21227[(2)] = null);

(statearr_19578_21227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (1))){
var state_19569__$1 = state_19569;
var statearr_19581_21231 = state_19569__$1;
(statearr_19581_21231[(2)] = null);

(statearr_19581_21231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (4))){
var inst_19498 = (state_19569[(13)]);
var inst_19498__$1 = (state_19569[(2)]);
var inst_19499 = (inst_19498__$1 == null);
var state_19569__$1 = (function (){var statearr_19582 = state_19569;
(statearr_19582[(13)] = inst_19498__$1);

return statearr_19582;
})();
if(cljs.core.truth_(inst_19499)){
var statearr_19583_21232 = state_19569__$1;
(statearr_19583_21232[(1)] = (5));

} else {
var statearr_19584_21233 = state_19569__$1;
(statearr_19584_21233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (15))){
var state_19569__$1 = state_19569;
var statearr_19589_21234 = state_19569__$1;
(statearr_19589_21234[(2)] = null);

(statearr_19589_21234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (21))){
var state_19569__$1 = state_19569;
var statearr_19594_21235 = state_19569__$1;
(statearr_19594_21235[(2)] = null);

(statearr_19594_21235[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (13))){
var inst_19510 = (state_19569[(8)]);
var inst_19509 = (state_19569[(9)]);
var inst_19512 = (state_19569[(10)]);
var inst_19511 = (state_19569[(12)]);
var inst_19523 = (state_19569[(2)]);
var inst_19524 = (inst_19512 + (1));
var tmp19586 = inst_19510;
var tmp19587 = inst_19509;
var tmp19588 = inst_19511;
var inst_19509__$1 = tmp19587;
var inst_19510__$1 = tmp19586;
var inst_19511__$1 = tmp19588;
var inst_19512__$1 = inst_19524;
var state_19569__$1 = (function (){var statearr_19595 = state_19569;
(statearr_19595[(8)] = inst_19510__$1);

(statearr_19595[(14)] = inst_19523);

(statearr_19595[(9)] = inst_19509__$1);

(statearr_19595[(10)] = inst_19512__$1);

(statearr_19595[(12)] = inst_19511__$1);

return statearr_19595;
})();
var statearr_19596_21238 = state_19569__$1;
(statearr_19596_21238[(2)] = null);

(statearr_19596_21238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (22))){
var state_19569__$1 = state_19569;
var statearr_19597_21250 = state_19569__$1;
(statearr_19597_21250[(2)] = null);

(statearr_19597_21250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (6))){
var inst_19498 = (state_19569[(13)]);
var inst_19507 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19498) : f.call(null,inst_19498));
var inst_19508 = cljs.core.seq(inst_19507);
var inst_19509 = inst_19508;
var inst_19510 = null;
var inst_19511 = (0);
var inst_19512 = (0);
var state_19569__$1 = (function (){var statearr_19599 = state_19569;
(statearr_19599[(8)] = inst_19510);

(statearr_19599[(9)] = inst_19509);

(statearr_19599[(10)] = inst_19512);

(statearr_19599[(12)] = inst_19511);

return statearr_19599;
})();
var statearr_19600_21251 = state_19569__$1;
(statearr_19600_21251[(2)] = null);

(statearr_19600_21251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (17))){
var inst_19527 = (state_19569[(7)]);
var inst_19532 = cljs.core.chunk_first(inst_19527);
var inst_19539 = cljs.core.chunk_rest(inst_19527);
var inst_19540 = cljs.core.count(inst_19532);
var inst_19509 = inst_19539;
var inst_19510 = inst_19532;
var inst_19511 = inst_19540;
var inst_19512 = (0);
var state_19569__$1 = (function (){var statearr_19609 = state_19569;
(statearr_19609[(8)] = inst_19510);

(statearr_19609[(9)] = inst_19509);

(statearr_19609[(10)] = inst_19512);

(statearr_19609[(12)] = inst_19511);

return statearr_19609;
})();
var statearr_19610_21254 = state_19569__$1;
(statearr_19610_21254[(2)] = null);

(statearr_19610_21254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (3))){
var inst_19566 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19569__$1,inst_19566);
} else {
if((state_val_19570 === (12))){
var inst_19554 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19611_21257 = state_19569__$1;
(statearr_19611_21257[(2)] = inst_19554);

(statearr_19611_21257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (2))){
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19569__$1,(4),in$);
} else {
if((state_val_19570 === (23))){
var inst_19562 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19614_21259 = state_19569__$1;
(statearr_19614_21259[(2)] = inst_19562);

(statearr_19614_21259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (19))){
var inst_19549 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19615_21260 = state_19569__$1;
(statearr_19615_21260[(2)] = inst_19549);

(statearr_19615_21260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (11))){
var inst_19509 = (state_19569[(9)]);
var inst_19527 = (state_19569[(7)]);
var inst_19527__$1 = cljs.core.seq(inst_19509);
var state_19569__$1 = (function (){var statearr_19618 = state_19569;
(statearr_19618[(7)] = inst_19527__$1);

return statearr_19618;
})();
if(inst_19527__$1){
var statearr_19619_21263 = state_19569__$1;
(statearr_19619_21263[(1)] = (14));

} else {
var statearr_19620_21264 = state_19569__$1;
(statearr_19620_21264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (9))){
var inst_19556 = (state_19569[(2)]);
var inst_19557 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19569__$1 = (function (){var statearr_19621 = state_19569;
(statearr_19621[(15)] = inst_19556);

return statearr_19621;
})();
if(cljs.core.truth_(inst_19557)){
var statearr_19622_21265 = state_19569__$1;
(statearr_19622_21265[(1)] = (21));

} else {
var statearr_19623_21266 = state_19569__$1;
(statearr_19623_21266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (5))){
var inst_19501 = cljs.core.async.close_BANG_(out);
var state_19569__$1 = state_19569;
var statearr_19625_21267 = state_19569__$1;
(statearr_19625_21267[(2)] = inst_19501);

(statearr_19625_21267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (14))){
var inst_19527 = (state_19569[(7)]);
var inst_19529 = cljs.core.chunked_seq_QMARK_(inst_19527);
var state_19569__$1 = state_19569;
if(inst_19529){
var statearr_19626_21268 = state_19569__$1;
(statearr_19626_21268[(1)] = (17));

} else {
var statearr_19628_21269 = state_19569__$1;
(statearr_19628_21269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (16))){
var inst_19552 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19629_21270 = state_19569__$1;
(statearr_19629_21270[(2)] = inst_19552);

(statearr_19629_21270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19570 === (10))){
var inst_19510 = (state_19569[(8)]);
var inst_19512 = (state_19569[(10)]);
var inst_19521 = cljs.core._nth(inst_19510,inst_19512);
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19569__$1,(13),out,inst_19521);
} else {
if((state_val_19570 === (18))){
var inst_19527 = (state_19569[(7)]);
var inst_19543 = cljs.core.first(inst_19527);
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19569__$1,(20),out,inst_19543);
} else {
if((state_val_19570 === (8))){
var inst_19512 = (state_19569[(10)]);
var inst_19511 = (state_19569[(12)]);
var inst_19518 = (inst_19512 < inst_19511);
var inst_19519 = inst_19518;
var state_19569__$1 = state_19569;
if(cljs.core.truth_(inst_19519)){
var statearr_19630_21273 = state_19569__$1;
(statearr_19630_21273[(1)] = (10));

} else {
var statearr_19631_21274 = state_19569__$1;
(statearr_19631_21274[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17153__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17153__auto____0 = (function (){
var statearr_19632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19632[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17153__auto__);

(statearr_19632[(1)] = (1));

return statearr_19632;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17153__auto____1 = (function (state_19569){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19569);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19633){var ex__17156__auto__ = e19633;
var statearr_19634_21281 = state_19569;
(statearr_19634_21281[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19569[(4)]))){
var statearr_19639_21282 = state_19569;
(statearr_19639_21282[(1)] = cljs.core.first((state_19569[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21284 = state_19569;
state_19569 = G__21284;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17153__auto__ = function(state_19569){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17153__auto____1.call(this,state_19569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17153__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17153__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19647 = f__17538__auto__();
(statearr_19647[(6)] = c__17537__auto__);

return statearr_19647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));

return c__17537__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19656 = arguments.length;
switch (G__19656) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19658 = arguments.length;
switch (G__19658) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19674 = arguments.length;
switch (G__19674) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17537__auto___21311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19708){
var state_val_19709 = (state_19708[(1)]);
if((state_val_19709 === (7))){
var inst_19703 = (state_19708[(2)]);
var state_19708__$1 = state_19708;
var statearr_19710_21313 = state_19708__$1;
(statearr_19710_21313[(2)] = inst_19703);

(statearr_19710_21313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (1))){
var inst_19685 = null;
var state_19708__$1 = (function (){var statearr_19712 = state_19708;
(statearr_19712[(7)] = inst_19685);

return statearr_19712;
})();
var statearr_19713_21317 = state_19708__$1;
(statearr_19713_21317[(2)] = null);

(statearr_19713_21317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (4))){
var inst_19688 = (state_19708[(8)]);
var inst_19688__$1 = (state_19708[(2)]);
var inst_19689 = (inst_19688__$1 == null);
var inst_19690 = cljs.core.not(inst_19689);
var state_19708__$1 = (function (){var statearr_19714 = state_19708;
(statearr_19714[(8)] = inst_19688__$1);

return statearr_19714;
})();
if(inst_19690){
var statearr_19715_21322 = state_19708__$1;
(statearr_19715_21322[(1)] = (5));

} else {
var statearr_19717_21323 = state_19708__$1;
(statearr_19717_21323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (6))){
var state_19708__$1 = state_19708;
var statearr_19723_21329 = state_19708__$1;
(statearr_19723_21329[(2)] = null);

(statearr_19723_21329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (3))){
var inst_19705 = (state_19708[(2)]);
var inst_19706 = cljs.core.async.close_BANG_(out);
var state_19708__$1 = (function (){var statearr_19724 = state_19708;
(statearr_19724[(9)] = inst_19705);

return statearr_19724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19708__$1,inst_19706);
} else {
if((state_val_19709 === (2))){
var state_19708__$1 = state_19708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19708__$1,(4),ch);
} else {
if((state_val_19709 === (11))){
var inst_19688 = (state_19708[(8)]);
var inst_19697 = (state_19708[(2)]);
var inst_19685 = inst_19688;
var state_19708__$1 = (function (){var statearr_19725 = state_19708;
(statearr_19725[(7)] = inst_19685);

(statearr_19725[(10)] = inst_19697);

return statearr_19725;
})();
var statearr_19726_21336 = state_19708__$1;
(statearr_19726_21336[(2)] = null);

(statearr_19726_21336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (9))){
var inst_19688 = (state_19708[(8)]);
var state_19708__$1 = state_19708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19708__$1,(11),out,inst_19688);
} else {
if((state_val_19709 === (5))){
var inst_19688 = (state_19708[(8)]);
var inst_19685 = (state_19708[(7)]);
var inst_19692 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19688,inst_19685);
var state_19708__$1 = state_19708;
if(inst_19692){
var statearr_19728_21338 = state_19708__$1;
(statearr_19728_21338[(1)] = (8));

} else {
var statearr_19729_21339 = state_19708__$1;
(statearr_19729_21339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (10))){
var inst_19700 = (state_19708[(2)]);
var state_19708__$1 = state_19708;
var statearr_19731_21340 = state_19708__$1;
(statearr_19731_21340[(2)] = inst_19700);

(statearr_19731_21340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19709 === (8))){
var inst_19685 = (state_19708[(7)]);
var tmp19727 = inst_19685;
var inst_19685__$1 = tmp19727;
var state_19708__$1 = (function (){var statearr_19735 = state_19708;
(statearr_19735[(7)] = inst_19685__$1);

return statearr_19735;
})();
var statearr_19736_21341 = state_19708__$1;
(statearr_19736_21341[(2)] = null);

(statearr_19736_21341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19737[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19737[(1)] = (1));

return statearr_19737;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19708){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19708);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19738){var ex__17156__auto__ = e19738;
var statearr_19739_21361 = state_19708;
(statearr_19739_21361[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19708[(4)]))){
var statearr_19740_21363 = state_19708;
(statearr_19740_21363[(1)] = cljs.core.first((state_19708[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21364 = state_19708;
state_19708 = G__21364;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19748 = f__17538__auto__();
(statearr_19748[(6)] = c__17537__auto___21311);

return statearr_19748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19753 = arguments.length;
switch (G__19753) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17537__auto___21375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19794){
var state_val_19795 = (state_19794[(1)]);
if((state_val_19795 === (7))){
var inst_19787 = (state_19794[(2)]);
var state_19794__$1 = state_19794;
var statearr_19796_21380 = state_19794__$1;
(statearr_19796_21380[(2)] = inst_19787);

(statearr_19796_21380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (1))){
var inst_19754 = (new Array(n));
var inst_19755 = inst_19754;
var inst_19756 = (0);
var state_19794__$1 = (function (){var statearr_19797 = state_19794;
(statearr_19797[(7)] = inst_19755);

(statearr_19797[(8)] = inst_19756);

return statearr_19797;
})();
var statearr_19798_21385 = state_19794__$1;
(statearr_19798_21385[(2)] = null);

(statearr_19798_21385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (4))){
var inst_19759 = (state_19794[(9)]);
var inst_19759__$1 = (state_19794[(2)]);
var inst_19760 = (inst_19759__$1 == null);
var inst_19761 = cljs.core.not(inst_19760);
var state_19794__$1 = (function (){var statearr_19799 = state_19794;
(statearr_19799[(9)] = inst_19759__$1);

return statearr_19799;
})();
if(inst_19761){
var statearr_19800_21391 = state_19794__$1;
(statearr_19800_21391[(1)] = (5));

} else {
var statearr_19801_21392 = state_19794__$1;
(statearr_19801_21392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (15))){
var inst_19781 = (state_19794[(2)]);
var state_19794__$1 = state_19794;
var statearr_19802_21394 = state_19794__$1;
(statearr_19802_21394[(2)] = inst_19781);

(statearr_19802_21394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (13))){
var state_19794__$1 = state_19794;
var statearr_19803_21396 = state_19794__$1;
(statearr_19803_21396[(2)] = null);

(statearr_19803_21396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (6))){
var inst_19756 = (state_19794[(8)]);
var inst_19777 = (inst_19756 > (0));
var state_19794__$1 = state_19794;
if(cljs.core.truth_(inst_19777)){
var statearr_19804_21400 = state_19794__$1;
(statearr_19804_21400[(1)] = (12));

} else {
var statearr_19805_21404 = state_19794__$1;
(statearr_19805_21404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (3))){
var inst_19789 = (state_19794[(2)]);
var state_19794__$1 = state_19794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19794__$1,inst_19789);
} else {
if((state_val_19795 === (12))){
var inst_19755 = (state_19794[(7)]);
var inst_19779 = cljs.core.vec(inst_19755);
var state_19794__$1 = state_19794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19794__$1,(15),out,inst_19779);
} else {
if((state_val_19795 === (2))){
var state_19794__$1 = state_19794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19794__$1,(4),ch);
} else {
if((state_val_19795 === (11))){
var inst_19771 = (state_19794[(2)]);
var inst_19772 = (new Array(n));
var inst_19755 = inst_19772;
var inst_19756 = (0);
var state_19794__$1 = (function (){var statearr_19806 = state_19794;
(statearr_19806[(7)] = inst_19755);

(statearr_19806[(10)] = inst_19771);

(statearr_19806[(8)] = inst_19756);

return statearr_19806;
})();
var statearr_19807_21415 = state_19794__$1;
(statearr_19807_21415[(2)] = null);

(statearr_19807_21415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (9))){
var inst_19755 = (state_19794[(7)]);
var inst_19769 = cljs.core.vec(inst_19755);
var state_19794__$1 = state_19794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19794__$1,(11),out,inst_19769);
} else {
if((state_val_19795 === (5))){
var inst_19764 = (state_19794[(11)]);
var inst_19755 = (state_19794[(7)]);
var inst_19759 = (state_19794[(9)]);
var inst_19756 = (state_19794[(8)]);
var inst_19763 = (inst_19755[inst_19756] = inst_19759);
var inst_19764__$1 = (inst_19756 + (1));
var inst_19765 = (inst_19764__$1 < n);
var state_19794__$1 = (function (){var statearr_19808 = state_19794;
(statearr_19808[(11)] = inst_19764__$1);

(statearr_19808[(12)] = inst_19763);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19765)){
var statearr_19809_21416 = state_19794__$1;
(statearr_19809_21416[(1)] = (8));

} else {
var statearr_19810_21417 = state_19794__$1;
(statearr_19810_21417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (14))){
var inst_19784 = (state_19794[(2)]);
var inst_19785 = cljs.core.async.close_BANG_(out);
var state_19794__$1 = (function (){var statearr_19812 = state_19794;
(statearr_19812[(13)] = inst_19784);

return statearr_19812;
})();
var statearr_19813_21418 = state_19794__$1;
(statearr_19813_21418[(2)] = inst_19785);

(statearr_19813_21418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (10))){
var inst_19775 = (state_19794[(2)]);
var state_19794__$1 = state_19794;
var statearr_19814_21420 = state_19794__$1;
(statearr_19814_21420[(2)] = inst_19775);

(statearr_19814_21420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19795 === (8))){
var inst_19764 = (state_19794[(11)]);
var inst_19755 = (state_19794[(7)]);
var tmp19811 = inst_19755;
var inst_19755__$1 = tmp19811;
var inst_19756 = inst_19764;
var state_19794__$1 = (function (){var statearr_19815 = state_19794;
(statearr_19815[(7)] = inst_19755__$1);

(statearr_19815[(8)] = inst_19756);

return statearr_19815;
})();
var statearr_19816_21421 = state_19794__$1;
(statearr_19816_21421[(2)] = null);

(statearr_19816_21421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19818[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19818[(1)] = (1));

return statearr_19818;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19794){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19794);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19819){var ex__17156__auto__ = e19819;
var statearr_19820_21425 = state_19794;
(statearr_19820_21425[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19794[(4)]))){
var statearr_19821_21427 = state_19794;
(statearr_19821_21427[(1)] = cljs.core.first((state_19794[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21428 = state_19794;
state_19794 = G__21428;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19825 = f__17538__auto__();
(statearr_19825[(6)] = c__17537__auto___21375);

return statearr_19825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19827 = arguments.length;
switch (G__19827) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17537__auto___21434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17538__auto__ = (function (){var switch__17152__auto__ = (function (state_19875){
var state_val_19876 = (state_19875[(1)]);
if((state_val_19876 === (7))){
var inst_19871 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19877_21435 = state_19875__$1;
(statearr_19877_21435[(2)] = inst_19871);

(statearr_19877_21435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (1))){
var inst_19831 = [];
var inst_19832 = inst_19831;
var inst_19833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19875__$1 = (function (){var statearr_19878 = state_19875;
(statearr_19878[(7)] = inst_19833);

(statearr_19878[(8)] = inst_19832);

return statearr_19878;
})();
var statearr_19879_21436 = state_19875__$1;
(statearr_19879_21436[(2)] = null);

(statearr_19879_21436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (4))){
var inst_19836 = (state_19875[(9)]);
var inst_19836__$1 = (state_19875[(2)]);
var inst_19837 = (inst_19836__$1 == null);
var inst_19838 = cljs.core.not(inst_19837);
var state_19875__$1 = (function (){var statearr_19881 = state_19875;
(statearr_19881[(9)] = inst_19836__$1);

return statearr_19881;
})();
if(inst_19838){
var statearr_19882_21437 = state_19875__$1;
(statearr_19882_21437[(1)] = (5));

} else {
var statearr_19883_21438 = state_19875__$1;
(statearr_19883_21438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (15))){
var inst_19832 = (state_19875[(8)]);
var inst_19863 = cljs.core.vec(inst_19832);
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19875__$1,(18),out,inst_19863);
} else {
if((state_val_19876 === (13))){
var inst_19858 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19884_21459 = state_19875__$1;
(statearr_19884_21459[(2)] = inst_19858);

(statearr_19884_21459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (6))){
var inst_19832 = (state_19875[(8)]);
var inst_19860 = inst_19832.length;
var inst_19861 = (inst_19860 > (0));
var state_19875__$1 = state_19875;
if(cljs.core.truth_(inst_19861)){
var statearr_19885_21466 = state_19875__$1;
(statearr_19885_21466[(1)] = (15));

} else {
var statearr_19886_21470 = state_19875__$1;
(statearr_19886_21470[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (17))){
var inst_19868 = (state_19875[(2)]);
var inst_19869 = cljs.core.async.close_BANG_(out);
var state_19875__$1 = (function (){var statearr_19887 = state_19875;
(statearr_19887[(10)] = inst_19868);

return statearr_19887;
})();
var statearr_19892_21476 = state_19875__$1;
(statearr_19892_21476[(2)] = inst_19869);

(statearr_19892_21476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (3))){
var inst_19873 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19875__$1,inst_19873);
} else {
if((state_val_19876 === (12))){
var inst_19832 = (state_19875[(8)]);
var inst_19851 = cljs.core.vec(inst_19832);
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19875__$1,(14),out,inst_19851);
} else {
if((state_val_19876 === (2))){
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19875__$1,(4),ch);
} else {
if((state_val_19876 === (11))){
var inst_19840 = (state_19875[(11)]);
var inst_19836 = (state_19875[(9)]);
var inst_19832 = (state_19875[(8)]);
var inst_19848 = inst_19832.push(inst_19836);
var tmp19893 = inst_19832;
var inst_19832__$1 = tmp19893;
var inst_19833 = inst_19840;
var state_19875__$1 = (function (){var statearr_19898 = state_19875;
(statearr_19898[(12)] = inst_19848);

(statearr_19898[(7)] = inst_19833);

(statearr_19898[(8)] = inst_19832__$1);

return statearr_19898;
})();
var statearr_19899_21506 = state_19875__$1;
(statearr_19899_21506[(2)] = null);

(statearr_19899_21506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (9))){
var inst_19833 = (state_19875[(7)]);
var inst_19844 = cljs.core.keyword_identical_QMARK_(inst_19833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19875__$1 = state_19875;
var statearr_19900_21514 = state_19875__$1;
(statearr_19900_21514[(2)] = inst_19844);

(statearr_19900_21514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (5))){
var inst_19840 = (state_19875[(11)]);
var inst_19836 = (state_19875[(9)]);
var inst_19833 = (state_19875[(7)]);
var inst_19841 = (state_19875[(13)]);
var inst_19840__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19836) : f.call(null,inst_19836));
var inst_19841__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19840__$1,inst_19833);
var state_19875__$1 = (function (){var statearr_19901 = state_19875;
(statearr_19901[(11)] = inst_19840__$1);

(statearr_19901[(13)] = inst_19841__$1);

return statearr_19901;
})();
if(inst_19841__$1){
var statearr_19902_21528 = state_19875__$1;
(statearr_19902_21528[(1)] = (8));

} else {
var statearr_19903_21534 = state_19875__$1;
(statearr_19903_21534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (14))){
var inst_19840 = (state_19875[(11)]);
var inst_19836 = (state_19875[(9)]);
var inst_19853 = (state_19875[(2)]);
var inst_19854 = [];
var inst_19855 = inst_19854.push(inst_19836);
var inst_19832 = inst_19854;
var inst_19833 = inst_19840;
var state_19875__$1 = (function (){var statearr_19904 = state_19875;
(statearr_19904[(14)] = inst_19853);

(statearr_19904[(7)] = inst_19833);

(statearr_19904[(15)] = inst_19855);

(statearr_19904[(8)] = inst_19832);

return statearr_19904;
})();
var statearr_19905_21554 = state_19875__$1;
(statearr_19905_21554[(2)] = null);

(statearr_19905_21554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (16))){
var state_19875__$1 = state_19875;
var statearr_19906_21559 = state_19875__$1;
(statearr_19906_21559[(2)] = null);

(statearr_19906_21559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (10))){
var inst_19846 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
if(cljs.core.truth_(inst_19846)){
var statearr_19908_21560 = state_19875__$1;
(statearr_19908_21560[(1)] = (11));

} else {
var statearr_19910_21561 = state_19875__$1;
(statearr_19910_21561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (18))){
var inst_19865 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19911_21562 = state_19875__$1;
(statearr_19911_21562[(2)] = inst_19865);

(statearr_19911_21562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19876 === (8))){
var inst_19841 = (state_19875[(13)]);
var state_19875__$1 = state_19875;
var statearr_19912_21563 = state_19875__$1;
(statearr_19912_21563[(2)] = inst_19841);

(statearr_19912_21563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17153__auto__ = null;
var cljs$core$async$state_machine__17153__auto____0 = (function (){
var statearr_19913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19913[(0)] = cljs$core$async$state_machine__17153__auto__);

(statearr_19913[(1)] = (1));

return statearr_19913;
});
var cljs$core$async$state_machine__17153__auto____1 = (function (state_19875){
while(true){
var ret_value__17154__auto__ = (function (){try{while(true){
var result__17155__auto__ = switch__17152__auto__(state_19875);
if(cljs.core.keyword_identical_QMARK_(result__17155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17155__auto__;
}
break;
}
}catch (e19914){var ex__17156__auto__ = e19914;
var statearr_19915_21565 = state_19875;
(statearr_19915_21565[(2)] = ex__17156__auto__);


if(cljs.core.seq((state_19875[(4)]))){
var statearr_19916_21570 = state_19875;
(statearr_19916_21570[(1)] = cljs.core.first((state_19875[(4)])));

} else {
throw ex__17156__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21571 = state_19875;
state_19875 = G__21571;
continue;
} else {
return ret_value__17154__auto__;
}
break;
}
});
cljs$core$async$state_machine__17153__auto__ = function(state_19875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17153__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17153__auto____1.call(this,state_19875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17153__auto____0;
cljs$core$async$state_machine__17153__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17153__auto____1;
return cljs$core$async$state_machine__17153__auto__;
})()
})();
var state__17539__auto__ = (function (){var statearr_19917 = f__17538__auto__();
(statearr_19917[(6)] = c__17537__auto___21434);

return statearr_19917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17539__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
