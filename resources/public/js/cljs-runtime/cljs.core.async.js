goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54894 = arguments.length;
switch (G__54894) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54895 = (function (f,blockable,meta54896){
this.f = f;
this.blockable = blockable;
this.meta54896 = meta54896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54897,meta54896__$1){
var self__ = this;
var _54897__$1 = this;
return (new cljs.core.async.t_cljs$core$async54895(self__.f,self__.blockable,meta54896__$1));
}));

(cljs.core.async.t_cljs$core$async54895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54897){
var self__ = this;
var _54897__$1 = this;
return self__.meta54896;
}));

(cljs.core.async.t_cljs$core$async54895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54896","meta54896",1881612718,null)], null);
}));

(cljs.core.async.t_cljs$core$async54895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54895");

(cljs.core.async.t_cljs$core$async54895.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54895.
 */
cljs.core.async.__GT_t_cljs$core$async54895 = (function cljs$core$async$__GT_t_cljs$core$async54895(f__$1,blockable__$1,meta54896){
return (new cljs.core.async.t_cljs$core$async54895(f__$1,blockable__$1,meta54896));
});

}

return (new cljs.core.async.t_cljs$core$async54895(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54900 = arguments.length;
switch (G__54900) {
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
var G__54902 = arguments.length;
switch (G__54902) {
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
var G__54904 = arguments.length;
switch (G__54904) {
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
var val_56334 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56334) : fn1.call(null,val_56334));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56334) : fn1.call(null,val_56334));
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__54906 = arguments.length;
switch (G__54906) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4607__auto___56338 = n;
var x_56339 = (0);
while(true){
if((x_56339 < n__4607__auto___56338)){
(a[x_56339] = (0));

var G__56340 = (x_56339 + (1));
x_56339 = G__56340;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__56341 = (i + (1));
i = G__56341;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54907 = (function (flag,meta54908){
this.flag = flag;
this.meta54908 = meta54908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54909,meta54908__$1){
var self__ = this;
var _54909__$1 = this;
return (new cljs.core.async.t_cljs$core$async54907(self__.flag,meta54908__$1));
}));

(cljs.core.async.t_cljs$core$async54907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54909){
var self__ = this;
var _54909__$1 = this;
return self__.meta54908;
}));

(cljs.core.async.t_cljs$core$async54907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54908","meta54908",532027088,null)], null);
}));

(cljs.core.async.t_cljs$core$async54907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54907");

(cljs.core.async.t_cljs$core$async54907.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54907.
 */
cljs.core.async.__GT_t_cljs$core$async54907 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54907(flag__$1,meta54908){
return (new cljs.core.async.t_cljs$core$async54907(flag__$1,meta54908));
});

}

return (new cljs.core.async.t_cljs$core$async54907(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54910 = (function (flag,cb,meta54911){
this.flag = flag;
this.cb = cb;
this.meta54911 = meta54911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54912,meta54911__$1){
var self__ = this;
var _54912__$1 = this;
return (new cljs.core.async.t_cljs$core$async54910(self__.flag,self__.cb,meta54911__$1));
}));

(cljs.core.async.t_cljs$core$async54910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54912){
var self__ = this;
var _54912__$1 = this;
return self__.meta54911;
}));

(cljs.core.async.t_cljs$core$async54910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54911","meta54911",1763529763,null)], null);
}));

(cljs.core.async.t_cljs$core$async54910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54910");

(cljs.core.async.t_cljs$core$async54910.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54910.
 */
cljs.core.async.__GT_t_cljs$core$async54910 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54910(flag__$1,cb__$1,meta54911){
return (new cljs.core.async.t_cljs$core$async54910(flag__$1,cb__$1,meta54911));
});

}

return (new cljs.core.async.t_cljs$core$async54910(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__54913_SHARP_){
var G__54915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54913_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54915) : fret.call(null,G__54915));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54914_SHARP_){
var G__54916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54914_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54916) : fret.call(null,G__54916));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56372 = (i + (1));
i = G__56372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___56380 = arguments.length;
var i__4731__auto___56381 = (0);
while(true){
if((i__4731__auto___56381 < len__4730__auto___56380)){
args__4736__auto__.push((arguments[i__4731__auto___56381]));

var G__56385 = (i__4731__auto___56381 + (1));
i__4731__auto___56381 = G__56385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54919){
var map__54920 = p__54919;
var map__54920__$1 = (((((!((map__54920 == null))))?(((((map__54920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54920):map__54920);
var opts = map__54920__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54917){
var G__54918 = cljs.core.first(seq54917);
var seq54917__$1 = cljs.core.next(seq54917);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54918,seq54917__$1);
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
var G__54923 = arguments.length;
switch (G__54923) {
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
var c__54836__auto___56400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_54947){
var state_val_54948 = (state_54947[(1)]);
if((state_val_54948 === (7))){
var inst_54943 = (state_54947[(2)]);
var state_54947__$1 = state_54947;
var statearr_54949_56401 = state_54947__$1;
(statearr_54949_56401[(2)] = inst_54943);

(statearr_54949_56401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (1))){
var state_54947__$1 = state_54947;
var statearr_54950_56402 = state_54947__$1;
(statearr_54950_56402[(2)] = null);

(statearr_54950_56402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (4))){
var inst_54926 = (state_54947[(7)]);
var inst_54926__$1 = (state_54947[(2)]);
var inst_54927 = (inst_54926__$1 == null);
var state_54947__$1 = (function (){var statearr_54951 = state_54947;
(statearr_54951[(7)] = inst_54926__$1);

return statearr_54951;
})();
if(cljs.core.truth_(inst_54927)){
var statearr_54952_56406 = state_54947__$1;
(statearr_54952_56406[(1)] = (5));

} else {
var statearr_54953_56407 = state_54947__$1;
(statearr_54953_56407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (13))){
var state_54947__$1 = state_54947;
var statearr_54954_56409 = state_54947__$1;
(statearr_54954_56409[(2)] = null);

(statearr_54954_56409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (6))){
var inst_54926 = (state_54947[(7)]);
var state_54947__$1 = state_54947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54947__$1,(11),to,inst_54926);
} else {
if((state_val_54948 === (3))){
var inst_54945 = (state_54947[(2)]);
var state_54947__$1 = state_54947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54947__$1,inst_54945);
} else {
if((state_val_54948 === (12))){
var state_54947__$1 = state_54947;
var statearr_54955_56414 = state_54947__$1;
(statearr_54955_56414[(2)] = null);

(statearr_54955_56414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (2))){
var state_54947__$1 = state_54947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54947__$1,(4),from);
} else {
if((state_val_54948 === (11))){
var inst_54936 = (state_54947[(2)]);
var state_54947__$1 = state_54947;
if(cljs.core.truth_(inst_54936)){
var statearr_54956_56415 = state_54947__$1;
(statearr_54956_56415[(1)] = (12));

} else {
var statearr_54957_56416 = state_54947__$1;
(statearr_54957_56416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (9))){
var state_54947__$1 = state_54947;
var statearr_54958_56419 = state_54947__$1;
(statearr_54958_56419[(2)] = null);

(statearr_54958_56419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (5))){
var state_54947__$1 = state_54947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54959_56422 = state_54947__$1;
(statearr_54959_56422[(1)] = (8));

} else {
var statearr_54960_56423 = state_54947__$1;
(statearr_54960_56423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (14))){
var inst_54941 = (state_54947[(2)]);
var state_54947__$1 = state_54947;
var statearr_54961_56424 = state_54947__$1;
(statearr_54961_56424[(2)] = inst_54941);

(statearr_54961_56424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (10))){
var inst_54933 = (state_54947[(2)]);
var state_54947__$1 = state_54947;
var statearr_54962_56425 = state_54947__$1;
(statearr_54962_56425[(2)] = inst_54933);

(statearr_54962_56425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54948 === (8))){
var inst_54930 = cljs.core.async.close_BANG_(to);
var state_54947__$1 = state_54947;
var statearr_54963_56430 = state_54947__$1;
(statearr_54963_56430[(2)] = inst_54930);

(statearr_54963_56430[(1)] = (10));


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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_54964 = [null,null,null,null,null,null,null,null];
(statearr_54964[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_54964[(1)] = (1));

return statearr_54964;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_54947){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_54947);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e54965){if((e54965 instanceof Object)){
var ex__54504__auto__ = e54965;
var statearr_54966_56443 = state_54947;
(statearr_54966_56443[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56446 = state_54947;
state_54947 = G__56446;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_54947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_54947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_54967 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_54967[(6)] = c__54836__auto___56400);

return statearr_54967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
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
var process = (function (p__54968){
var vec__54969 = p__54968;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54969,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54969,(1),null);
var job = vec__54969;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54836__auto___56448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_54976){
var state_val_54977 = (state_54976[(1)]);
if((state_val_54977 === (1))){
var state_54976__$1 = state_54976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54976__$1,(2),res,v);
} else {
if((state_val_54977 === (2))){
var inst_54973 = (state_54976[(2)]);
var inst_54974 = cljs.core.async.close_BANG_(res);
var state_54976__$1 = (function (){var statearr_54978 = state_54976;
(statearr_54978[(7)] = inst_54973);

return statearr_54978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54976__$1,inst_54974);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0 = (function (){
var statearr_54979 = [null,null,null,null,null,null,null,null];
(statearr_54979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__);

(statearr_54979[(1)] = (1));

return statearr_54979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1 = (function (state_54976){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_54976);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e54980){if((e54980 instanceof Object)){
var ex__54504__auto__ = e54980;
var statearr_54981_56450 = state_54976;
(statearr_54981_56450[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56451 = state_54976;
state_54976 = G__56451;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = function(state_54976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1.call(this,state_54976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_54982 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_54982[(6)] = c__54836__auto___56448);

return statearr_54982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54983){
var vec__54984 = p__54983;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54984,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54984,(1),null);
var job = vec__54984;
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
var n__4607__auto___56452 = n;
var __56453 = (0);
while(true){
if((__56453 < n__4607__auto___56452)){
var G__54987_56456 = type;
var G__54987_56457__$1 = (((G__54987_56456 instanceof cljs.core.Keyword))?G__54987_56456.fqn:null);
switch (G__54987_56457__$1) {
case "compute":
var c__54836__auto___56459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56453,c__54836__auto___56459,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async){
return (function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = ((function (__56453,c__54836__auto___56459,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async){
return (function (state_55000){
var state_val_55001 = (state_55000[(1)]);
if((state_val_55001 === (1))){
var state_55000__$1 = state_55000;
var statearr_55002_56460 = state_55000__$1;
(statearr_55002_56460[(2)] = null);

(statearr_55002_56460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55001 === (2))){
var state_55000__$1 = state_55000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55000__$1,(4),jobs);
} else {
if((state_val_55001 === (3))){
var inst_54998 = (state_55000[(2)]);
var state_55000__$1 = state_55000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55000__$1,inst_54998);
} else {
if((state_val_55001 === (4))){
var inst_54990 = (state_55000[(2)]);
var inst_54991 = process(inst_54990);
var state_55000__$1 = state_55000;
if(cljs.core.truth_(inst_54991)){
var statearr_55003_56461 = state_55000__$1;
(statearr_55003_56461[(1)] = (5));

} else {
var statearr_55004_56462 = state_55000__$1;
(statearr_55004_56462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55001 === (5))){
var state_55000__$1 = state_55000;
var statearr_55005_56463 = state_55000__$1;
(statearr_55005_56463[(2)] = null);

(statearr_55005_56463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55001 === (6))){
var state_55000__$1 = state_55000;
var statearr_55006_56464 = state_55000__$1;
(statearr_55006_56464[(2)] = null);

(statearr_55006_56464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55001 === (7))){
var inst_54996 = (state_55000[(2)]);
var state_55000__$1 = state_55000;
var statearr_55007_56469 = state_55000__$1;
(statearr_55007_56469[(2)] = inst_54996);

(statearr_55007_56469[(1)] = (3));


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
});})(__56453,c__54836__auto___56459,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async))
;
return ((function (__56453,switch__54500__auto__,c__54836__auto___56459,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0 = (function (){
var statearr_55008 = [null,null,null,null,null,null,null];
(statearr_55008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__);

(statearr_55008[(1)] = (1));

return statearr_55008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1 = (function (state_55000){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55000);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55009){if((e55009 instanceof Object)){
var ex__54504__auto__ = e55009;
var statearr_55010_56471 = state_55000;
(statearr_55010_56471[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56473 = state_55000;
state_55000 = G__56473;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = function(state_55000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1.call(this,state_55000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__;
})()
;})(__56453,switch__54500__auto__,c__54836__auto___56459,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async))
})();
var state__54838__auto__ = (function (){var statearr_55011 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55011[(6)] = c__54836__auto___56459);

return statearr_55011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
});})(__56453,c__54836__auto___56459,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async))
);


break;
case "async":
var c__54836__auto___56479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56453,c__54836__auto___56479,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async){
return (function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = ((function (__56453,c__54836__auto___56479,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async){
return (function (state_55024){
var state_val_55025 = (state_55024[(1)]);
if((state_val_55025 === (1))){
var state_55024__$1 = state_55024;
var statearr_55026_56483 = state_55024__$1;
(statearr_55026_56483[(2)] = null);

(statearr_55026_56483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (2))){
var state_55024__$1 = state_55024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55024__$1,(4),jobs);
} else {
if((state_val_55025 === (3))){
var inst_55022 = (state_55024[(2)]);
var state_55024__$1 = state_55024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55024__$1,inst_55022);
} else {
if((state_val_55025 === (4))){
var inst_55014 = (state_55024[(2)]);
var inst_55015 = async(inst_55014);
var state_55024__$1 = state_55024;
if(cljs.core.truth_(inst_55015)){
var statearr_55027_56489 = state_55024__$1;
(statearr_55027_56489[(1)] = (5));

} else {
var statearr_55028_56491 = state_55024__$1;
(statearr_55028_56491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (5))){
var state_55024__$1 = state_55024;
var statearr_55029_56494 = state_55024__$1;
(statearr_55029_56494[(2)] = null);

(statearr_55029_56494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (6))){
var state_55024__$1 = state_55024;
var statearr_55030_56495 = state_55024__$1;
(statearr_55030_56495[(2)] = null);

(statearr_55030_56495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (7))){
var inst_55020 = (state_55024[(2)]);
var state_55024__$1 = state_55024;
var statearr_55031_56497 = state_55024__$1;
(statearr_55031_56497[(2)] = inst_55020);

(statearr_55031_56497[(1)] = (3));


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
});})(__56453,c__54836__auto___56479,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async))
;
return ((function (__56453,switch__54500__auto__,c__54836__auto___56479,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0 = (function (){
var statearr_55032 = [null,null,null,null,null,null,null];
(statearr_55032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__);

(statearr_55032[(1)] = (1));

return statearr_55032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1 = (function (state_55024){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55024);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55033){if((e55033 instanceof Object)){
var ex__54504__auto__ = e55033;
var statearr_55034_56505 = state_55024;
(statearr_55034_56505[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56512 = state_55024;
state_55024 = G__56512;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = function(state_55024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1.call(this,state_55024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__;
})()
;})(__56453,switch__54500__auto__,c__54836__auto___56479,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async))
})();
var state__54838__auto__ = (function (){var statearr_55035 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55035[(6)] = c__54836__auto___56479);

return statearr_55035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
});})(__56453,c__54836__auto___56479,G__54987_56456,G__54987_56457__$1,n__4607__auto___56452,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54987_56457__$1)].join('')));

}

var G__56513 = (__56453 + (1));
__56453 = G__56513;
continue;
} else {
}
break;
}

var c__54836__auto___56514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55057){
var state_val_55058 = (state_55057[(1)]);
if((state_val_55058 === (7))){
var inst_55053 = (state_55057[(2)]);
var state_55057__$1 = state_55057;
var statearr_55059_56516 = state_55057__$1;
(statearr_55059_56516[(2)] = inst_55053);

(statearr_55059_56516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (1))){
var state_55057__$1 = state_55057;
var statearr_55060_56518 = state_55057__$1;
(statearr_55060_56518[(2)] = null);

(statearr_55060_56518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (4))){
var inst_55038 = (state_55057[(7)]);
var inst_55038__$1 = (state_55057[(2)]);
var inst_55039 = (inst_55038__$1 == null);
var state_55057__$1 = (function (){var statearr_55061 = state_55057;
(statearr_55061[(7)] = inst_55038__$1);

return statearr_55061;
})();
if(cljs.core.truth_(inst_55039)){
var statearr_55062_56519 = state_55057__$1;
(statearr_55062_56519[(1)] = (5));

} else {
var statearr_55063_56520 = state_55057__$1;
(statearr_55063_56520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (6))){
var inst_55038 = (state_55057[(7)]);
var inst_55043 = (state_55057[(8)]);
var inst_55043__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55045 = [inst_55038,inst_55043__$1];
var inst_55046 = (new cljs.core.PersistentVector(null,2,(5),inst_55044,inst_55045,null));
var state_55057__$1 = (function (){var statearr_55064 = state_55057;
(statearr_55064[(8)] = inst_55043__$1);

return statearr_55064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55057__$1,(8),jobs,inst_55046);
} else {
if((state_val_55058 === (3))){
var inst_55055 = (state_55057[(2)]);
var state_55057__$1 = state_55057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55057__$1,inst_55055);
} else {
if((state_val_55058 === (2))){
var state_55057__$1 = state_55057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55057__$1,(4),from);
} else {
if((state_val_55058 === (9))){
var inst_55050 = (state_55057[(2)]);
var state_55057__$1 = (function (){var statearr_55065 = state_55057;
(statearr_55065[(9)] = inst_55050);

return statearr_55065;
})();
var statearr_55066_56528 = state_55057__$1;
(statearr_55066_56528[(2)] = null);

(statearr_55066_56528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (5))){
var inst_55041 = cljs.core.async.close_BANG_(jobs);
var state_55057__$1 = state_55057;
var statearr_55067_56531 = state_55057__$1;
(statearr_55067_56531[(2)] = inst_55041);

(statearr_55067_56531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (8))){
var inst_55043 = (state_55057[(8)]);
var inst_55048 = (state_55057[(2)]);
var state_55057__$1 = (function (){var statearr_55068 = state_55057;
(statearr_55068[(10)] = inst_55048);

return statearr_55068;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55057__$1,(9),results,inst_55043);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0 = (function (){
var statearr_55069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__);

(statearr_55069[(1)] = (1));

return statearr_55069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1 = (function (state_55057){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55057);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55070){if((e55070 instanceof Object)){
var ex__54504__auto__ = e55070;
var statearr_55071_56538 = state_55057;
(statearr_55071_56538[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56546 = state_55057;
state_55057 = G__56546;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = function(state_55057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1.call(this,state_55057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55072 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55072[(6)] = c__54836__auto___56514);

return statearr_55072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


var c__54836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55110){
var state_val_55111 = (state_55110[(1)]);
if((state_val_55111 === (7))){
var inst_55106 = (state_55110[(2)]);
var state_55110__$1 = state_55110;
var statearr_55112_56549 = state_55110__$1;
(statearr_55112_56549[(2)] = inst_55106);

(statearr_55112_56549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (20))){
var state_55110__$1 = state_55110;
var statearr_55113_56550 = state_55110__$1;
(statearr_55113_56550[(2)] = null);

(statearr_55113_56550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (1))){
var state_55110__$1 = state_55110;
var statearr_55114_56552 = state_55110__$1;
(statearr_55114_56552[(2)] = null);

(statearr_55114_56552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (4))){
var inst_55075 = (state_55110[(7)]);
var inst_55075__$1 = (state_55110[(2)]);
var inst_55076 = (inst_55075__$1 == null);
var state_55110__$1 = (function (){var statearr_55115 = state_55110;
(statearr_55115[(7)] = inst_55075__$1);

return statearr_55115;
})();
if(cljs.core.truth_(inst_55076)){
var statearr_55116_56556 = state_55110__$1;
(statearr_55116_56556[(1)] = (5));

} else {
var statearr_55117_56557 = state_55110__$1;
(statearr_55117_56557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (15))){
var inst_55088 = (state_55110[(8)]);
var state_55110__$1 = state_55110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55110__$1,(18),to,inst_55088);
} else {
if((state_val_55111 === (21))){
var inst_55101 = (state_55110[(2)]);
var state_55110__$1 = state_55110;
var statearr_55118_56558 = state_55110__$1;
(statearr_55118_56558[(2)] = inst_55101);

(statearr_55118_56558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (13))){
var inst_55103 = (state_55110[(2)]);
var state_55110__$1 = (function (){var statearr_55119 = state_55110;
(statearr_55119[(9)] = inst_55103);

return statearr_55119;
})();
var statearr_55120_56559 = state_55110__$1;
(statearr_55120_56559[(2)] = null);

(statearr_55120_56559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (6))){
var inst_55075 = (state_55110[(7)]);
var state_55110__$1 = state_55110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55110__$1,(11),inst_55075);
} else {
if((state_val_55111 === (17))){
var inst_55096 = (state_55110[(2)]);
var state_55110__$1 = state_55110;
if(cljs.core.truth_(inst_55096)){
var statearr_55121_56567 = state_55110__$1;
(statearr_55121_56567[(1)] = (19));

} else {
var statearr_55122_56568 = state_55110__$1;
(statearr_55122_56568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (3))){
var inst_55108 = (state_55110[(2)]);
var state_55110__$1 = state_55110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55110__$1,inst_55108);
} else {
if((state_val_55111 === (12))){
var inst_55085 = (state_55110[(10)]);
var state_55110__$1 = state_55110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55110__$1,(14),inst_55085);
} else {
if((state_val_55111 === (2))){
var state_55110__$1 = state_55110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55110__$1,(4),results);
} else {
if((state_val_55111 === (19))){
var state_55110__$1 = state_55110;
var statearr_55123_56572 = state_55110__$1;
(statearr_55123_56572[(2)] = null);

(statearr_55123_56572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (11))){
var inst_55085 = (state_55110[(2)]);
var state_55110__$1 = (function (){var statearr_55124 = state_55110;
(statearr_55124[(10)] = inst_55085);

return statearr_55124;
})();
var statearr_55125_56576 = state_55110__$1;
(statearr_55125_56576[(2)] = null);

(statearr_55125_56576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (9))){
var state_55110__$1 = state_55110;
var statearr_55126_56577 = state_55110__$1;
(statearr_55126_56577[(2)] = null);

(statearr_55126_56577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (5))){
var state_55110__$1 = state_55110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55127_56581 = state_55110__$1;
(statearr_55127_56581[(1)] = (8));

} else {
var statearr_55128_56582 = state_55110__$1;
(statearr_55128_56582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (14))){
var inst_55088 = (state_55110[(8)]);
var inst_55088__$1 = (state_55110[(2)]);
var inst_55089 = (inst_55088__$1 == null);
var inst_55090 = cljs.core.not(inst_55089);
var state_55110__$1 = (function (){var statearr_55129 = state_55110;
(statearr_55129[(8)] = inst_55088__$1);

return statearr_55129;
})();
if(inst_55090){
var statearr_55130_56583 = state_55110__$1;
(statearr_55130_56583[(1)] = (15));

} else {
var statearr_55131_56585 = state_55110__$1;
(statearr_55131_56585[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (16))){
var state_55110__$1 = state_55110;
var statearr_55132_56586 = state_55110__$1;
(statearr_55132_56586[(2)] = false);

(statearr_55132_56586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (10))){
var inst_55082 = (state_55110[(2)]);
var state_55110__$1 = state_55110;
var statearr_55133_56588 = state_55110__$1;
(statearr_55133_56588[(2)] = inst_55082);

(statearr_55133_56588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (18))){
var inst_55093 = (state_55110[(2)]);
var state_55110__$1 = state_55110;
var statearr_55134_56589 = state_55110__$1;
(statearr_55134_56589[(2)] = inst_55093);

(statearr_55134_56589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55111 === (8))){
var inst_55079 = cljs.core.async.close_BANG_(to);
var state_55110__$1 = state_55110;
var statearr_55135_56590 = state_55110__$1;
(statearr_55135_56590[(2)] = inst_55079);

(statearr_55135_56590[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0 = (function (){
var statearr_55136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__);

(statearr_55136[(1)] = (1));

return statearr_55136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1 = (function (state_55110){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55110);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55137){if((e55137 instanceof Object)){
var ex__54504__auto__ = e55137;
var statearr_55138_56594 = state_55110;
(statearr_55138_56594[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56598 = state_55110;
state_55110 = G__56598;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__ = function(state_55110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1.call(this,state_55110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55139 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55139[(6)] = c__54836__auto__);

return statearr_55139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));

return c__54836__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__55141 = arguments.length;
switch (G__55141) {
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
var G__55143 = arguments.length;
switch (G__55143) {
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
var G__55145 = arguments.length;
switch (G__55145) {
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
var c__54836__auto___56634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55171){
var state_val_55172 = (state_55171[(1)]);
if((state_val_55172 === (7))){
var inst_55167 = (state_55171[(2)]);
var state_55171__$1 = state_55171;
var statearr_55173_56635 = state_55171__$1;
(statearr_55173_56635[(2)] = inst_55167);

(statearr_55173_56635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (1))){
var state_55171__$1 = state_55171;
var statearr_55174_56642 = state_55171__$1;
(statearr_55174_56642[(2)] = null);

(statearr_55174_56642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (4))){
var inst_55148 = (state_55171[(7)]);
var inst_55148__$1 = (state_55171[(2)]);
var inst_55149 = (inst_55148__$1 == null);
var state_55171__$1 = (function (){var statearr_55175 = state_55171;
(statearr_55175[(7)] = inst_55148__$1);

return statearr_55175;
})();
if(cljs.core.truth_(inst_55149)){
var statearr_55176_56647 = state_55171__$1;
(statearr_55176_56647[(1)] = (5));

} else {
var statearr_55177_56648 = state_55171__$1;
(statearr_55177_56648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (13))){
var state_55171__$1 = state_55171;
var statearr_55178_56652 = state_55171__$1;
(statearr_55178_56652[(2)] = null);

(statearr_55178_56652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (6))){
var inst_55148 = (state_55171[(7)]);
var inst_55154 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55148) : p.call(null,inst_55148));
var state_55171__$1 = state_55171;
if(cljs.core.truth_(inst_55154)){
var statearr_55179_56653 = state_55171__$1;
(statearr_55179_56653[(1)] = (9));

} else {
var statearr_55180_56654 = state_55171__$1;
(statearr_55180_56654[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (3))){
var inst_55169 = (state_55171[(2)]);
var state_55171__$1 = state_55171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55171__$1,inst_55169);
} else {
if((state_val_55172 === (12))){
var state_55171__$1 = state_55171;
var statearr_55181_56661 = state_55171__$1;
(statearr_55181_56661[(2)] = null);

(statearr_55181_56661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (2))){
var state_55171__$1 = state_55171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55171__$1,(4),ch);
} else {
if((state_val_55172 === (11))){
var inst_55148 = (state_55171[(7)]);
var inst_55158 = (state_55171[(2)]);
var state_55171__$1 = state_55171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55171__$1,(8),inst_55158,inst_55148);
} else {
if((state_val_55172 === (9))){
var state_55171__$1 = state_55171;
var statearr_55182_56662 = state_55171__$1;
(statearr_55182_56662[(2)] = tc);

(statearr_55182_56662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (5))){
var inst_55151 = cljs.core.async.close_BANG_(tc);
var inst_55152 = cljs.core.async.close_BANG_(fc);
var state_55171__$1 = (function (){var statearr_55183 = state_55171;
(statearr_55183[(8)] = inst_55151);

return statearr_55183;
})();
var statearr_55184_56664 = state_55171__$1;
(statearr_55184_56664[(2)] = inst_55152);

(statearr_55184_56664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (14))){
var inst_55165 = (state_55171[(2)]);
var state_55171__$1 = state_55171;
var statearr_55185_56665 = state_55171__$1;
(statearr_55185_56665[(2)] = inst_55165);

(statearr_55185_56665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (10))){
var state_55171__$1 = state_55171;
var statearr_55186_56666 = state_55171__$1;
(statearr_55186_56666[(2)] = fc);

(statearr_55186_56666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55172 === (8))){
var inst_55160 = (state_55171[(2)]);
var state_55171__$1 = state_55171;
if(cljs.core.truth_(inst_55160)){
var statearr_55187_56667 = state_55171__$1;
(statearr_55187_56667[(1)] = (12));

} else {
var statearr_55188_56668 = state_55171__$1;
(statearr_55188_56668[(1)] = (13));

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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_55189 = [null,null,null,null,null,null,null,null,null];
(statearr_55189[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_55189[(1)] = (1));

return statearr_55189;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_55171){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55171);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55190){if((e55190 instanceof Object)){
var ex__54504__auto__ = e55190;
var statearr_55191_56670 = state_55171;
(statearr_55191_56670[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56671 = state_55171;
state_55171 = G__56671;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_55171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_55171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55192 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55192[(6)] = c__54836__auto___56634);

return statearr_55192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
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
var c__54836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55213){
var state_val_55214 = (state_55213[(1)]);
if((state_val_55214 === (7))){
var inst_55209 = (state_55213[(2)]);
var state_55213__$1 = state_55213;
var statearr_55215_56672 = state_55213__$1;
(statearr_55215_56672[(2)] = inst_55209);

(statearr_55215_56672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (1))){
var inst_55193 = init;
var state_55213__$1 = (function (){var statearr_55216 = state_55213;
(statearr_55216[(7)] = inst_55193);

return statearr_55216;
})();
var statearr_55217_56673 = state_55213__$1;
(statearr_55217_56673[(2)] = null);

(statearr_55217_56673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (4))){
var inst_55196 = (state_55213[(8)]);
var inst_55196__$1 = (state_55213[(2)]);
var inst_55197 = (inst_55196__$1 == null);
var state_55213__$1 = (function (){var statearr_55218 = state_55213;
(statearr_55218[(8)] = inst_55196__$1);

return statearr_55218;
})();
if(cljs.core.truth_(inst_55197)){
var statearr_55219_56676 = state_55213__$1;
(statearr_55219_56676[(1)] = (5));

} else {
var statearr_55220_56677 = state_55213__$1;
(statearr_55220_56677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (6))){
var inst_55193 = (state_55213[(7)]);
var inst_55196 = (state_55213[(8)]);
var inst_55200 = (state_55213[(9)]);
var inst_55200__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55193,inst_55196) : f.call(null,inst_55193,inst_55196));
var inst_55201 = cljs.core.reduced_QMARK_(inst_55200__$1);
var state_55213__$1 = (function (){var statearr_55221 = state_55213;
(statearr_55221[(9)] = inst_55200__$1);

return statearr_55221;
})();
if(inst_55201){
var statearr_55222_56678 = state_55213__$1;
(statearr_55222_56678[(1)] = (8));

} else {
var statearr_55223_56679 = state_55213__$1;
(statearr_55223_56679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (3))){
var inst_55211 = (state_55213[(2)]);
var state_55213__$1 = state_55213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55213__$1,inst_55211);
} else {
if((state_val_55214 === (2))){
var state_55213__$1 = state_55213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55213__$1,(4),ch);
} else {
if((state_val_55214 === (9))){
var inst_55200 = (state_55213[(9)]);
var inst_55193 = inst_55200;
var state_55213__$1 = (function (){var statearr_55224 = state_55213;
(statearr_55224[(7)] = inst_55193);

return statearr_55224;
})();
var statearr_55225_56680 = state_55213__$1;
(statearr_55225_56680[(2)] = null);

(statearr_55225_56680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (5))){
var inst_55193 = (state_55213[(7)]);
var state_55213__$1 = state_55213;
var statearr_55226_56681 = state_55213__$1;
(statearr_55226_56681[(2)] = inst_55193);

(statearr_55226_56681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (10))){
var inst_55207 = (state_55213[(2)]);
var state_55213__$1 = state_55213;
var statearr_55227_56682 = state_55213__$1;
(statearr_55227_56682[(2)] = inst_55207);

(statearr_55227_56682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55214 === (8))){
var inst_55200 = (state_55213[(9)]);
var inst_55203 = cljs.core.deref(inst_55200);
var state_55213__$1 = state_55213;
var statearr_55228_56683 = state_55213__$1;
(statearr_55228_56683[(2)] = inst_55203);

(statearr_55228_56683[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54501__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54501__auto____0 = (function (){
var statearr_55229 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55229[(0)] = cljs$core$async$reduce_$_state_machine__54501__auto__);

(statearr_55229[(1)] = (1));

return statearr_55229;
});
var cljs$core$async$reduce_$_state_machine__54501__auto____1 = (function (state_55213){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55213);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55230){if((e55230 instanceof Object)){
var ex__54504__auto__ = e55230;
var statearr_55231_56684 = state_55213;
(statearr_55231_56684[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56685 = state_55213;
state_55213 = G__56685;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54501__auto__ = function(state_55213){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54501__auto____1.call(this,state_55213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54501__auto____0;
cljs$core$async$reduce_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54501__auto____1;
return cljs$core$async$reduce_$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55232 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55232[(6)] = c__54836__auto__);

return statearr_55232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));

return c__54836__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55238){
var state_val_55239 = (state_55238[(1)]);
if((state_val_55239 === (1))){
var inst_55233 = cljs.core.async.reduce(f__$1,init,ch);
var state_55238__$1 = state_55238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55238__$1,(2),inst_55233);
} else {
if((state_val_55239 === (2))){
var inst_55235 = (state_55238[(2)]);
var inst_55236 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55235) : f__$1.call(null,inst_55235));
var state_55238__$1 = state_55238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55238__$1,inst_55236);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54501__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54501__auto____0 = (function (){
var statearr_55240 = [null,null,null,null,null,null,null];
(statearr_55240[(0)] = cljs$core$async$transduce_$_state_machine__54501__auto__);

(statearr_55240[(1)] = (1));

return statearr_55240;
});
var cljs$core$async$transduce_$_state_machine__54501__auto____1 = (function (state_55238){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55238);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55241){if((e55241 instanceof Object)){
var ex__54504__auto__ = e55241;
var statearr_55242_56692 = state_55238;
(statearr_55242_56692[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56693 = state_55238;
state_55238 = G__56693;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54501__auto__ = function(state_55238){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54501__auto____1.call(this,state_55238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54501__auto____0;
cljs$core$async$transduce_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54501__auto____1;
return cljs$core$async$transduce_$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55243 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55243[(6)] = c__54836__auto__);

return statearr_55243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));

return c__54836__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__55245 = arguments.length;
switch (G__55245) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55270){
var state_val_55271 = (state_55270[(1)]);
if((state_val_55271 === (7))){
var inst_55252 = (state_55270[(2)]);
var state_55270__$1 = state_55270;
var statearr_55272_56699 = state_55270__$1;
(statearr_55272_56699[(2)] = inst_55252);

(statearr_55272_56699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (1))){
var inst_55246 = cljs.core.seq(coll);
var inst_55247 = inst_55246;
var state_55270__$1 = (function (){var statearr_55273 = state_55270;
(statearr_55273[(7)] = inst_55247);

return statearr_55273;
})();
var statearr_55274_56700 = state_55270__$1;
(statearr_55274_56700[(2)] = null);

(statearr_55274_56700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (4))){
var inst_55247 = (state_55270[(7)]);
var inst_55250 = cljs.core.first(inst_55247);
var state_55270__$1 = state_55270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55270__$1,(7),ch,inst_55250);
} else {
if((state_val_55271 === (13))){
var inst_55264 = (state_55270[(2)]);
var state_55270__$1 = state_55270;
var statearr_55275_56701 = state_55270__$1;
(statearr_55275_56701[(2)] = inst_55264);

(statearr_55275_56701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (6))){
var inst_55255 = (state_55270[(2)]);
var state_55270__$1 = state_55270;
if(cljs.core.truth_(inst_55255)){
var statearr_55276_56705 = state_55270__$1;
(statearr_55276_56705[(1)] = (8));

} else {
var statearr_55277_56707 = state_55270__$1;
(statearr_55277_56707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (3))){
var inst_55268 = (state_55270[(2)]);
var state_55270__$1 = state_55270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55270__$1,inst_55268);
} else {
if((state_val_55271 === (12))){
var state_55270__$1 = state_55270;
var statearr_55278_56708 = state_55270__$1;
(statearr_55278_56708[(2)] = null);

(statearr_55278_56708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (2))){
var inst_55247 = (state_55270[(7)]);
var state_55270__$1 = state_55270;
if(cljs.core.truth_(inst_55247)){
var statearr_55279_56709 = state_55270__$1;
(statearr_55279_56709[(1)] = (4));

} else {
var statearr_55280_56710 = state_55270__$1;
(statearr_55280_56710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (11))){
var inst_55261 = cljs.core.async.close_BANG_(ch);
var state_55270__$1 = state_55270;
var statearr_55281_56711 = state_55270__$1;
(statearr_55281_56711[(2)] = inst_55261);

(statearr_55281_56711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (9))){
var state_55270__$1 = state_55270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55282_56712 = state_55270__$1;
(statearr_55282_56712[(1)] = (11));

} else {
var statearr_55283_56713 = state_55270__$1;
(statearr_55283_56713[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (5))){
var inst_55247 = (state_55270[(7)]);
var state_55270__$1 = state_55270;
var statearr_55284_56714 = state_55270__$1;
(statearr_55284_56714[(2)] = inst_55247);

(statearr_55284_56714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (10))){
var inst_55266 = (state_55270[(2)]);
var state_55270__$1 = state_55270;
var statearr_55285_56715 = state_55270__$1;
(statearr_55285_56715[(2)] = inst_55266);

(statearr_55285_56715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55271 === (8))){
var inst_55247 = (state_55270[(7)]);
var inst_55257 = cljs.core.next(inst_55247);
var inst_55247__$1 = inst_55257;
var state_55270__$1 = (function (){var statearr_55286 = state_55270;
(statearr_55286[(7)] = inst_55247__$1);

return statearr_55286;
})();
var statearr_55287_56716 = state_55270__$1;
(statearr_55287_56716[(2)] = null);

(statearr_55287_56716[(1)] = (2));


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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_55288 = [null,null,null,null,null,null,null,null];
(statearr_55288[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_55288[(1)] = (1));

return statearr_55288;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_55270){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55270);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55289){if((e55289 instanceof Object)){
var ex__54504__auto__ = e55289;
var statearr_55290_56718 = state_55270;
(statearr_55290_56718[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56722 = state_55270;
state_55270 = G__56722;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_55270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_55270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55291 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55291[(6)] = c__54836__auto__);

return statearr_55291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));

return c__54836__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_56728 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_56728(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56736 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_56736(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56743 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_56743(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56744 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_56744(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55292 = (function (ch,cs,meta55293){
this.ch = ch;
this.cs = cs;
this.meta55293 = meta55293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55294,meta55293__$1){
var self__ = this;
var _55294__$1 = this;
return (new cljs.core.async.t_cljs$core$async55292(self__.ch,self__.cs,meta55293__$1));
}));

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55294){
var self__ = this;
var _55294__$1 = this;
return self__.meta55293;
}));

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55293","meta55293",-1036379112,null)], null);
}));

(cljs.core.async.t_cljs$core$async55292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55292");

(cljs.core.async.t_cljs$core$async55292.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55292.
 */
cljs.core.async.__GT_t_cljs$core$async55292 = (function cljs$core$async$mult_$___GT_t_cljs$core$async55292(ch__$1,cs__$1,meta55293){
return (new cljs.core.async.t_cljs$core$async55292(ch__$1,cs__$1,meta55293));
});

}

return (new cljs.core.async.t_cljs$core$async55292(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__54836__auto___56757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55429){
var state_val_55430 = (state_55429[(1)]);
if((state_val_55430 === (7))){
var inst_55425 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55431_56758 = state_55429__$1;
(statearr_55431_56758[(2)] = inst_55425);

(statearr_55431_56758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (20))){
var inst_55328 = (state_55429[(7)]);
var inst_55340 = cljs.core.first(inst_55328);
var inst_55341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55340,(0),null);
var inst_55342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55340,(1),null);
var state_55429__$1 = (function (){var statearr_55432 = state_55429;
(statearr_55432[(8)] = inst_55341);

return statearr_55432;
})();
if(cljs.core.truth_(inst_55342)){
var statearr_55433_56759 = state_55429__$1;
(statearr_55433_56759[(1)] = (22));

} else {
var statearr_55434_56760 = state_55429__$1;
(statearr_55434_56760[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (27))){
var inst_55297 = (state_55429[(9)]);
var inst_55372 = (state_55429[(10)]);
var inst_55377 = (state_55429[(11)]);
var inst_55370 = (state_55429[(12)]);
var inst_55377__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55370,inst_55372);
var inst_55378 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55377__$1,inst_55297,done);
var state_55429__$1 = (function (){var statearr_55435 = state_55429;
(statearr_55435[(11)] = inst_55377__$1);

return statearr_55435;
})();
if(cljs.core.truth_(inst_55378)){
var statearr_55436_56761 = state_55429__$1;
(statearr_55436_56761[(1)] = (30));

} else {
var statearr_55437_56762 = state_55429__$1;
(statearr_55437_56762[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (1))){
var state_55429__$1 = state_55429;
var statearr_55438_56763 = state_55429__$1;
(statearr_55438_56763[(2)] = null);

(statearr_55438_56763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (24))){
var inst_55328 = (state_55429[(7)]);
var inst_55347 = (state_55429[(2)]);
var inst_55348 = cljs.core.next(inst_55328);
var inst_55306 = inst_55348;
var inst_55307 = null;
var inst_55308 = (0);
var inst_55309 = (0);
var state_55429__$1 = (function (){var statearr_55439 = state_55429;
(statearr_55439[(13)] = inst_55306);

(statearr_55439[(14)] = inst_55347);

(statearr_55439[(15)] = inst_55307);

(statearr_55439[(16)] = inst_55309);

(statearr_55439[(17)] = inst_55308);

return statearr_55439;
})();
var statearr_55440_56770 = state_55429__$1;
(statearr_55440_56770[(2)] = null);

(statearr_55440_56770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (39))){
var state_55429__$1 = state_55429;
var statearr_55444_56771 = state_55429__$1;
(statearr_55444_56771[(2)] = null);

(statearr_55444_56771[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (4))){
var inst_55297 = (state_55429[(9)]);
var inst_55297__$1 = (state_55429[(2)]);
var inst_55298 = (inst_55297__$1 == null);
var state_55429__$1 = (function (){var statearr_55445 = state_55429;
(statearr_55445[(9)] = inst_55297__$1);

return statearr_55445;
})();
if(cljs.core.truth_(inst_55298)){
var statearr_55446_56772 = state_55429__$1;
(statearr_55446_56772[(1)] = (5));

} else {
var statearr_55447_56773 = state_55429__$1;
(statearr_55447_56773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (15))){
var inst_55306 = (state_55429[(13)]);
var inst_55307 = (state_55429[(15)]);
var inst_55309 = (state_55429[(16)]);
var inst_55308 = (state_55429[(17)]);
var inst_55324 = (state_55429[(2)]);
var inst_55325 = (inst_55309 + (1));
var tmp55441 = inst_55306;
var tmp55442 = inst_55307;
var tmp55443 = inst_55308;
var inst_55306__$1 = tmp55441;
var inst_55307__$1 = tmp55442;
var inst_55308__$1 = tmp55443;
var inst_55309__$1 = inst_55325;
var state_55429__$1 = (function (){var statearr_55448 = state_55429;
(statearr_55448[(18)] = inst_55324);

(statearr_55448[(13)] = inst_55306__$1);

(statearr_55448[(15)] = inst_55307__$1);

(statearr_55448[(16)] = inst_55309__$1);

(statearr_55448[(17)] = inst_55308__$1);

return statearr_55448;
})();
var statearr_55449_56774 = state_55429__$1;
(statearr_55449_56774[(2)] = null);

(statearr_55449_56774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (21))){
var inst_55351 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55453_56775 = state_55429__$1;
(statearr_55453_56775[(2)] = inst_55351);

(statearr_55453_56775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (31))){
var inst_55377 = (state_55429[(11)]);
var inst_55381 = done(null);
var inst_55382 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55377);
var state_55429__$1 = (function (){var statearr_55454 = state_55429;
(statearr_55454[(19)] = inst_55381);

return statearr_55454;
})();
var statearr_55455_56776 = state_55429__$1;
(statearr_55455_56776[(2)] = inst_55382);

(statearr_55455_56776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (32))){
var inst_55371 = (state_55429[(20)]);
var inst_55372 = (state_55429[(10)]);
var inst_55370 = (state_55429[(12)]);
var inst_55369 = (state_55429[(21)]);
var inst_55384 = (state_55429[(2)]);
var inst_55385 = (inst_55372 + (1));
var tmp55450 = inst_55371;
var tmp55451 = inst_55370;
var tmp55452 = inst_55369;
var inst_55369__$1 = tmp55452;
var inst_55370__$1 = tmp55451;
var inst_55371__$1 = tmp55450;
var inst_55372__$1 = inst_55385;
var state_55429__$1 = (function (){var statearr_55456 = state_55429;
(statearr_55456[(22)] = inst_55384);

(statearr_55456[(20)] = inst_55371__$1);

(statearr_55456[(10)] = inst_55372__$1);

(statearr_55456[(12)] = inst_55370__$1);

(statearr_55456[(21)] = inst_55369__$1);

return statearr_55456;
})();
var statearr_55457_56777 = state_55429__$1;
(statearr_55457_56777[(2)] = null);

(statearr_55457_56777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (40))){
var inst_55397 = (state_55429[(23)]);
var inst_55401 = done(null);
var inst_55402 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55397);
var state_55429__$1 = (function (){var statearr_55458 = state_55429;
(statearr_55458[(24)] = inst_55401);

return statearr_55458;
})();
var statearr_55459_56778 = state_55429__$1;
(statearr_55459_56778[(2)] = inst_55402);

(statearr_55459_56778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (33))){
var inst_55388 = (state_55429[(25)]);
var inst_55390 = cljs.core.chunked_seq_QMARK_(inst_55388);
var state_55429__$1 = state_55429;
if(inst_55390){
var statearr_55460_56779 = state_55429__$1;
(statearr_55460_56779[(1)] = (36));

} else {
var statearr_55461_56780 = state_55429__$1;
(statearr_55461_56780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (13))){
var inst_55318 = (state_55429[(26)]);
var inst_55321 = cljs.core.async.close_BANG_(inst_55318);
var state_55429__$1 = state_55429;
var statearr_55462_56781 = state_55429__$1;
(statearr_55462_56781[(2)] = inst_55321);

(statearr_55462_56781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (22))){
var inst_55341 = (state_55429[(8)]);
var inst_55344 = cljs.core.async.close_BANG_(inst_55341);
var state_55429__$1 = state_55429;
var statearr_55463_56782 = state_55429__$1;
(statearr_55463_56782[(2)] = inst_55344);

(statearr_55463_56782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (36))){
var inst_55388 = (state_55429[(25)]);
var inst_55392 = cljs.core.chunk_first(inst_55388);
var inst_55393 = cljs.core.chunk_rest(inst_55388);
var inst_55394 = cljs.core.count(inst_55392);
var inst_55369 = inst_55393;
var inst_55370 = inst_55392;
var inst_55371 = inst_55394;
var inst_55372 = (0);
var state_55429__$1 = (function (){var statearr_55464 = state_55429;
(statearr_55464[(20)] = inst_55371);

(statearr_55464[(10)] = inst_55372);

(statearr_55464[(12)] = inst_55370);

(statearr_55464[(21)] = inst_55369);

return statearr_55464;
})();
var statearr_55465_56785 = state_55429__$1;
(statearr_55465_56785[(2)] = null);

(statearr_55465_56785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (41))){
var inst_55388 = (state_55429[(25)]);
var inst_55404 = (state_55429[(2)]);
var inst_55405 = cljs.core.next(inst_55388);
var inst_55369 = inst_55405;
var inst_55370 = null;
var inst_55371 = (0);
var inst_55372 = (0);
var state_55429__$1 = (function (){var statearr_55466 = state_55429;
(statearr_55466[(20)] = inst_55371);

(statearr_55466[(27)] = inst_55404);

(statearr_55466[(10)] = inst_55372);

(statearr_55466[(12)] = inst_55370);

(statearr_55466[(21)] = inst_55369);

return statearr_55466;
})();
var statearr_55467_56790 = state_55429__$1;
(statearr_55467_56790[(2)] = null);

(statearr_55467_56790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (43))){
var state_55429__$1 = state_55429;
var statearr_55468_56791 = state_55429__$1;
(statearr_55468_56791[(2)] = null);

(statearr_55468_56791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (29))){
var inst_55413 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55469_56792 = state_55429__$1;
(statearr_55469_56792[(2)] = inst_55413);

(statearr_55469_56792[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (44))){
var inst_55422 = (state_55429[(2)]);
var state_55429__$1 = (function (){var statearr_55470 = state_55429;
(statearr_55470[(28)] = inst_55422);

return statearr_55470;
})();
var statearr_55471_56793 = state_55429__$1;
(statearr_55471_56793[(2)] = null);

(statearr_55471_56793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (6))){
var inst_55361 = (state_55429[(29)]);
var inst_55360 = cljs.core.deref(cs);
var inst_55361__$1 = cljs.core.keys(inst_55360);
var inst_55362 = cljs.core.count(inst_55361__$1);
var inst_55363 = cljs.core.reset_BANG_(dctr,inst_55362);
var inst_55368 = cljs.core.seq(inst_55361__$1);
var inst_55369 = inst_55368;
var inst_55370 = null;
var inst_55371 = (0);
var inst_55372 = (0);
var state_55429__$1 = (function (){var statearr_55472 = state_55429;
(statearr_55472[(20)] = inst_55371);

(statearr_55472[(29)] = inst_55361__$1);

(statearr_55472[(10)] = inst_55372);

(statearr_55472[(30)] = inst_55363);

(statearr_55472[(12)] = inst_55370);

(statearr_55472[(21)] = inst_55369);

return statearr_55472;
})();
var statearr_55473_56794 = state_55429__$1;
(statearr_55473_56794[(2)] = null);

(statearr_55473_56794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (28))){
var inst_55388 = (state_55429[(25)]);
var inst_55369 = (state_55429[(21)]);
var inst_55388__$1 = cljs.core.seq(inst_55369);
var state_55429__$1 = (function (){var statearr_55474 = state_55429;
(statearr_55474[(25)] = inst_55388__$1);

return statearr_55474;
})();
if(inst_55388__$1){
var statearr_55475_56797 = state_55429__$1;
(statearr_55475_56797[(1)] = (33));

} else {
var statearr_55476_56798 = state_55429__$1;
(statearr_55476_56798[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (25))){
var inst_55371 = (state_55429[(20)]);
var inst_55372 = (state_55429[(10)]);
var inst_55374 = (inst_55372 < inst_55371);
var inst_55375 = inst_55374;
var state_55429__$1 = state_55429;
if(cljs.core.truth_(inst_55375)){
var statearr_55477_56800 = state_55429__$1;
(statearr_55477_56800[(1)] = (27));

} else {
var statearr_55478_56801 = state_55429__$1;
(statearr_55478_56801[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (34))){
var state_55429__$1 = state_55429;
var statearr_55479_56803 = state_55429__$1;
(statearr_55479_56803[(2)] = null);

(statearr_55479_56803[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (17))){
var state_55429__$1 = state_55429;
var statearr_55480_56804 = state_55429__$1;
(statearr_55480_56804[(2)] = null);

(statearr_55480_56804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (3))){
var inst_55427 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55429__$1,inst_55427);
} else {
if((state_val_55430 === (12))){
var inst_55356 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55481_56805 = state_55429__$1;
(statearr_55481_56805[(2)] = inst_55356);

(statearr_55481_56805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (2))){
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55429__$1,(4),ch);
} else {
if((state_val_55430 === (23))){
var state_55429__$1 = state_55429;
var statearr_55482_56806 = state_55429__$1;
(statearr_55482_56806[(2)] = null);

(statearr_55482_56806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (35))){
var inst_55411 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55483_56808 = state_55429__$1;
(statearr_55483_56808[(2)] = inst_55411);

(statearr_55483_56808[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (19))){
var inst_55328 = (state_55429[(7)]);
var inst_55332 = cljs.core.chunk_first(inst_55328);
var inst_55333 = cljs.core.chunk_rest(inst_55328);
var inst_55334 = cljs.core.count(inst_55332);
var inst_55306 = inst_55333;
var inst_55307 = inst_55332;
var inst_55308 = inst_55334;
var inst_55309 = (0);
var state_55429__$1 = (function (){var statearr_55484 = state_55429;
(statearr_55484[(13)] = inst_55306);

(statearr_55484[(15)] = inst_55307);

(statearr_55484[(16)] = inst_55309);

(statearr_55484[(17)] = inst_55308);

return statearr_55484;
})();
var statearr_55485_56810 = state_55429__$1;
(statearr_55485_56810[(2)] = null);

(statearr_55485_56810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (11))){
var inst_55306 = (state_55429[(13)]);
var inst_55328 = (state_55429[(7)]);
var inst_55328__$1 = cljs.core.seq(inst_55306);
var state_55429__$1 = (function (){var statearr_55486 = state_55429;
(statearr_55486[(7)] = inst_55328__$1);

return statearr_55486;
})();
if(inst_55328__$1){
var statearr_55487_56811 = state_55429__$1;
(statearr_55487_56811[(1)] = (16));

} else {
var statearr_55488_56812 = state_55429__$1;
(statearr_55488_56812[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (9))){
var inst_55358 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55489_56813 = state_55429__$1;
(statearr_55489_56813[(2)] = inst_55358);

(statearr_55489_56813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (5))){
var inst_55304 = cljs.core.deref(cs);
var inst_55305 = cljs.core.seq(inst_55304);
var inst_55306 = inst_55305;
var inst_55307 = null;
var inst_55308 = (0);
var inst_55309 = (0);
var state_55429__$1 = (function (){var statearr_55490 = state_55429;
(statearr_55490[(13)] = inst_55306);

(statearr_55490[(15)] = inst_55307);

(statearr_55490[(16)] = inst_55309);

(statearr_55490[(17)] = inst_55308);

return statearr_55490;
})();
var statearr_55491_56814 = state_55429__$1;
(statearr_55491_56814[(2)] = null);

(statearr_55491_56814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (14))){
var state_55429__$1 = state_55429;
var statearr_55492_56815 = state_55429__$1;
(statearr_55492_56815[(2)] = null);

(statearr_55492_56815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (45))){
var inst_55419 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55493_56816 = state_55429__$1;
(statearr_55493_56816[(2)] = inst_55419);

(statearr_55493_56816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (26))){
var inst_55361 = (state_55429[(29)]);
var inst_55415 = (state_55429[(2)]);
var inst_55416 = cljs.core.seq(inst_55361);
var state_55429__$1 = (function (){var statearr_55494 = state_55429;
(statearr_55494[(31)] = inst_55415);

return statearr_55494;
})();
if(inst_55416){
var statearr_55495_56817 = state_55429__$1;
(statearr_55495_56817[(1)] = (42));

} else {
var statearr_55496_56818 = state_55429__$1;
(statearr_55496_56818[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (16))){
var inst_55328 = (state_55429[(7)]);
var inst_55330 = cljs.core.chunked_seq_QMARK_(inst_55328);
var state_55429__$1 = state_55429;
if(inst_55330){
var statearr_55497_56821 = state_55429__$1;
(statearr_55497_56821[(1)] = (19));

} else {
var statearr_55498_56822 = state_55429__$1;
(statearr_55498_56822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (38))){
var inst_55408 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55499_56823 = state_55429__$1;
(statearr_55499_56823[(2)] = inst_55408);

(statearr_55499_56823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (30))){
var state_55429__$1 = state_55429;
var statearr_55500_56824 = state_55429__$1;
(statearr_55500_56824[(2)] = null);

(statearr_55500_56824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (10))){
var inst_55307 = (state_55429[(15)]);
var inst_55309 = (state_55429[(16)]);
var inst_55317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55307,inst_55309);
var inst_55318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55317,(0),null);
var inst_55319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55317,(1),null);
var state_55429__$1 = (function (){var statearr_55501 = state_55429;
(statearr_55501[(26)] = inst_55318);

return statearr_55501;
})();
if(cljs.core.truth_(inst_55319)){
var statearr_55502_56825 = state_55429__$1;
(statearr_55502_56825[(1)] = (13));

} else {
var statearr_55503_56826 = state_55429__$1;
(statearr_55503_56826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (18))){
var inst_55354 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55504_56827 = state_55429__$1;
(statearr_55504_56827[(2)] = inst_55354);

(statearr_55504_56827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (42))){
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55429__$1,(45),dchan);
} else {
if((state_val_55430 === (37))){
var inst_55297 = (state_55429[(9)]);
var inst_55388 = (state_55429[(25)]);
var inst_55397 = (state_55429[(23)]);
var inst_55397__$1 = cljs.core.first(inst_55388);
var inst_55398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55397__$1,inst_55297,done);
var state_55429__$1 = (function (){var statearr_55505 = state_55429;
(statearr_55505[(23)] = inst_55397__$1);

return statearr_55505;
})();
if(cljs.core.truth_(inst_55398)){
var statearr_55506_56828 = state_55429__$1;
(statearr_55506_56828[(1)] = (39));

} else {
var statearr_55507_56829 = state_55429__$1;
(statearr_55507_56829[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (8))){
var inst_55309 = (state_55429[(16)]);
var inst_55308 = (state_55429[(17)]);
var inst_55311 = (inst_55309 < inst_55308);
var inst_55312 = inst_55311;
var state_55429__$1 = state_55429;
if(cljs.core.truth_(inst_55312)){
var statearr_55508_56830 = state_55429__$1;
(statearr_55508_56830[(1)] = (10));

} else {
var statearr_55509_56831 = state_55429__$1;
(statearr_55509_56831[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54501__auto__ = null;
var cljs$core$async$mult_$_state_machine__54501__auto____0 = (function (){
var statearr_55510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55510[(0)] = cljs$core$async$mult_$_state_machine__54501__auto__);

(statearr_55510[(1)] = (1));

return statearr_55510;
});
var cljs$core$async$mult_$_state_machine__54501__auto____1 = (function (state_55429){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55429);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55511){if((e55511 instanceof Object)){
var ex__54504__auto__ = e55511;
var statearr_55512_56833 = state_55429;
(statearr_55512_56833[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56834 = state_55429;
state_55429 = G__56834;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54501__auto__ = function(state_55429){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54501__auto____1.call(this,state_55429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54501__auto____0;
cljs$core$async$mult_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54501__auto____1;
return cljs$core$async$mult_$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55513 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55513[(6)] = c__54836__auto___56757);

return statearr_55513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
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
var G__55515 = arguments.length;
switch (G__55515) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56840 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_56840(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56841 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_56841(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56849 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56849(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56859 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_56859(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56864 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56864(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56868 = arguments.length;
var i__4731__auto___56869 = (0);
while(true){
if((i__4731__auto___56869 < len__4730__auto___56868)){
args__4736__auto__.push((arguments[i__4731__auto___56869]));

var G__56871 = (i__4731__auto___56869 + (1));
i__4731__auto___56869 = G__56871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55520){
var map__55521 = p__55520;
var map__55521__$1 = (((((!((map__55521 == null))))?(((((map__55521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55521):map__55521);
var opts = map__55521__$1;
var statearr_55523_56877 = state;
(statearr_55523_56877[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55524_56878 = state;
(statearr_55524_56878[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_55525_56879 = state;
(statearr_55525_56879[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55516){
var G__55517 = cljs.core.first(seq55516);
var seq55516__$1 = cljs.core.next(seq55516);
var G__55518 = cljs.core.first(seq55516__$1);
var seq55516__$2 = cljs.core.next(seq55516__$1);
var G__55519 = cljs.core.first(seq55516__$2);
var seq55516__$3 = cljs.core.next(seq55516__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55517,G__55518,G__55519,seq55516__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55526 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55527){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55527 = meta55527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55528,meta55527__$1){
var self__ = this;
var _55528__$1 = this;
return (new cljs.core.async.t_cljs$core$async55526(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55527__$1));
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55528){
var self__ = this;
var _55528__$1 = this;
return self__.meta55527;
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55527","meta55527",-1458577499,null)], null);
}));

(cljs.core.async.t_cljs$core$async55526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55526");

(cljs.core.async.t_cljs$core$async55526.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55526.
 */
cljs.core.async.__GT_t_cljs$core$async55526 = (function cljs$core$async$mix_$___GT_t_cljs$core$async55526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55527){
return (new cljs.core.async.t_cljs$core$async55526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55527));
});

}

return (new cljs.core.async.t_cljs$core$async55526(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54836__auto___56897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55630){
var state_val_55631 = (state_55630[(1)]);
if((state_val_55631 === (7))){
var inst_55545 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
var statearr_55632_56898 = state_55630__$1;
(statearr_55632_56898[(2)] = inst_55545);

(statearr_55632_56898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (20))){
var inst_55557 = (state_55630[(7)]);
var state_55630__$1 = state_55630;
var statearr_55633_56899 = state_55630__$1;
(statearr_55633_56899[(2)] = inst_55557);

(statearr_55633_56899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (27))){
var state_55630__$1 = state_55630;
var statearr_55634_56900 = state_55630__$1;
(statearr_55634_56900[(2)] = null);

(statearr_55634_56900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (1))){
var inst_55532 = (state_55630[(8)]);
var inst_55532__$1 = calc_state();
var inst_55534 = (inst_55532__$1 == null);
var inst_55535 = cljs.core.not(inst_55534);
var state_55630__$1 = (function (){var statearr_55635 = state_55630;
(statearr_55635[(8)] = inst_55532__$1);

return statearr_55635;
})();
if(inst_55535){
var statearr_55636_56901 = state_55630__$1;
(statearr_55636_56901[(1)] = (2));

} else {
var statearr_55637_56902 = state_55630__$1;
(statearr_55637_56902[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (24))){
var inst_55604 = (state_55630[(9)]);
var inst_55590 = (state_55630[(10)]);
var inst_55581 = (state_55630[(11)]);
var inst_55604__$1 = (inst_55581.cljs$core$IFn$_invoke$arity$1 ? inst_55581.cljs$core$IFn$_invoke$arity$1(inst_55590) : inst_55581.call(null,inst_55590));
var state_55630__$1 = (function (){var statearr_55638 = state_55630;
(statearr_55638[(9)] = inst_55604__$1);

return statearr_55638;
})();
if(cljs.core.truth_(inst_55604__$1)){
var statearr_55639_56904 = state_55630__$1;
(statearr_55639_56904[(1)] = (29));

} else {
var statearr_55640_56905 = state_55630__$1;
(statearr_55640_56905[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (4))){
var inst_55548 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55548)){
var statearr_55641_56906 = state_55630__$1;
(statearr_55641_56906[(1)] = (8));

} else {
var statearr_55642_56907 = state_55630__$1;
(statearr_55642_56907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (15))){
var inst_55575 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55575)){
var statearr_55643_56908 = state_55630__$1;
(statearr_55643_56908[(1)] = (19));

} else {
var statearr_55644_56909 = state_55630__$1;
(statearr_55644_56909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (21))){
var inst_55580 = (state_55630[(12)]);
var inst_55580__$1 = (state_55630[(2)]);
var inst_55581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55630__$1 = (function (){var statearr_55645 = state_55630;
(statearr_55645[(13)] = inst_55582);

(statearr_55645[(12)] = inst_55580__$1);

(statearr_55645[(11)] = inst_55581);

return statearr_55645;
})();
return cljs.core.async.ioc_alts_BANG_(state_55630__$1,(22),inst_55583);
} else {
if((state_val_55631 === (31))){
var inst_55612 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55612)){
var statearr_55646_56915 = state_55630__$1;
(statearr_55646_56915[(1)] = (32));

} else {
var statearr_55647_56918 = state_55630__$1;
(statearr_55647_56918[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (32))){
var inst_55589 = (state_55630[(14)]);
var state_55630__$1 = state_55630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55630__$1,(35),out,inst_55589);
} else {
if((state_val_55631 === (33))){
var inst_55580 = (state_55630[(12)]);
var inst_55557 = inst_55580;
var state_55630__$1 = (function (){var statearr_55648 = state_55630;
(statearr_55648[(7)] = inst_55557);

return statearr_55648;
})();
var statearr_55649_56919 = state_55630__$1;
(statearr_55649_56919[(2)] = null);

(statearr_55649_56919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (13))){
var inst_55557 = (state_55630[(7)]);
var inst_55564 = inst_55557.cljs$lang$protocol_mask$partition0$;
var inst_55565 = (inst_55564 & (64));
var inst_55566 = inst_55557.cljs$core$ISeq$;
var inst_55567 = (cljs.core.PROTOCOL_SENTINEL === inst_55566);
var inst_55568 = ((inst_55565) || (inst_55567));
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55568)){
var statearr_55650_56920 = state_55630__$1;
(statearr_55650_56920[(1)] = (16));

} else {
var statearr_55651_56921 = state_55630__$1;
(statearr_55651_56921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (22))){
var inst_55590 = (state_55630[(10)]);
var inst_55589 = (state_55630[(14)]);
var inst_55588 = (state_55630[(2)]);
var inst_55589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55588,(0),null);
var inst_55590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55588,(1),null);
var inst_55591 = (inst_55589__$1 == null);
var inst_55592 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55590__$1,change);
var inst_55593 = ((inst_55591) || (inst_55592));
var state_55630__$1 = (function (){var statearr_55652 = state_55630;
(statearr_55652[(10)] = inst_55590__$1);

(statearr_55652[(14)] = inst_55589__$1);

return statearr_55652;
})();
if(cljs.core.truth_(inst_55593)){
var statearr_55653_56922 = state_55630__$1;
(statearr_55653_56922[(1)] = (23));

} else {
var statearr_55654_56923 = state_55630__$1;
(statearr_55654_56923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (36))){
var inst_55580 = (state_55630[(12)]);
var inst_55557 = inst_55580;
var state_55630__$1 = (function (){var statearr_55655 = state_55630;
(statearr_55655[(7)] = inst_55557);

return statearr_55655;
})();
var statearr_55656_56925 = state_55630__$1;
(statearr_55656_56925[(2)] = null);

(statearr_55656_56925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (29))){
var inst_55604 = (state_55630[(9)]);
var state_55630__$1 = state_55630;
var statearr_55657_56926 = state_55630__$1;
(statearr_55657_56926[(2)] = inst_55604);

(statearr_55657_56926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (6))){
var state_55630__$1 = state_55630;
var statearr_55658_56927 = state_55630__$1;
(statearr_55658_56927[(2)] = false);

(statearr_55658_56927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (28))){
var inst_55600 = (state_55630[(2)]);
var inst_55601 = calc_state();
var inst_55557 = inst_55601;
var state_55630__$1 = (function (){var statearr_55659 = state_55630;
(statearr_55659[(15)] = inst_55600);

(statearr_55659[(7)] = inst_55557);

return statearr_55659;
})();
var statearr_55660_56928 = state_55630__$1;
(statearr_55660_56928[(2)] = null);

(statearr_55660_56928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (25))){
var inst_55626 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
var statearr_55661_56930 = state_55630__$1;
(statearr_55661_56930[(2)] = inst_55626);

(statearr_55661_56930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (34))){
var inst_55624 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
var statearr_55662_56931 = state_55630__$1;
(statearr_55662_56931[(2)] = inst_55624);

(statearr_55662_56931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (17))){
var state_55630__$1 = state_55630;
var statearr_55663_56932 = state_55630__$1;
(statearr_55663_56932[(2)] = false);

(statearr_55663_56932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (3))){
var state_55630__$1 = state_55630;
var statearr_55664_56933 = state_55630__$1;
(statearr_55664_56933[(2)] = false);

(statearr_55664_56933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (12))){
var inst_55628 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55630__$1,inst_55628);
} else {
if((state_val_55631 === (2))){
var inst_55532 = (state_55630[(8)]);
var inst_55537 = inst_55532.cljs$lang$protocol_mask$partition0$;
var inst_55538 = (inst_55537 & (64));
var inst_55539 = inst_55532.cljs$core$ISeq$;
var inst_55540 = (cljs.core.PROTOCOL_SENTINEL === inst_55539);
var inst_55541 = ((inst_55538) || (inst_55540));
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55541)){
var statearr_55665_56935 = state_55630__$1;
(statearr_55665_56935[(1)] = (5));

} else {
var statearr_55666_56936 = state_55630__$1;
(statearr_55666_56936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (23))){
var inst_55589 = (state_55630[(14)]);
var inst_55595 = (inst_55589 == null);
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55595)){
var statearr_55667_56938 = state_55630__$1;
(statearr_55667_56938[(1)] = (26));

} else {
var statearr_55668_56939 = state_55630__$1;
(statearr_55668_56939[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (35))){
var inst_55615 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
if(cljs.core.truth_(inst_55615)){
var statearr_55669_56940 = state_55630__$1;
(statearr_55669_56940[(1)] = (36));

} else {
var statearr_55670_56945 = state_55630__$1;
(statearr_55670_56945[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (19))){
var inst_55557 = (state_55630[(7)]);
var inst_55577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55557);
var state_55630__$1 = state_55630;
var statearr_55671_56946 = state_55630__$1;
(statearr_55671_56946[(2)] = inst_55577);

(statearr_55671_56946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (11))){
var inst_55557 = (state_55630[(7)]);
var inst_55561 = (inst_55557 == null);
var inst_55562 = cljs.core.not(inst_55561);
var state_55630__$1 = state_55630;
if(inst_55562){
var statearr_55672_56948 = state_55630__$1;
(statearr_55672_56948[(1)] = (13));

} else {
var statearr_55673_56949 = state_55630__$1;
(statearr_55673_56949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (9))){
var inst_55532 = (state_55630[(8)]);
var state_55630__$1 = state_55630;
var statearr_55674_56950 = state_55630__$1;
(statearr_55674_56950[(2)] = inst_55532);

(statearr_55674_56950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (5))){
var state_55630__$1 = state_55630;
var statearr_55675_56951 = state_55630__$1;
(statearr_55675_56951[(2)] = true);

(statearr_55675_56951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (14))){
var state_55630__$1 = state_55630;
var statearr_55676_56952 = state_55630__$1;
(statearr_55676_56952[(2)] = false);

(statearr_55676_56952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (26))){
var inst_55590 = (state_55630[(10)]);
var inst_55597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55590);
var state_55630__$1 = state_55630;
var statearr_55677_56954 = state_55630__$1;
(statearr_55677_56954[(2)] = inst_55597);

(statearr_55677_56954[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (16))){
var state_55630__$1 = state_55630;
var statearr_55678_56955 = state_55630__$1;
(statearr_55678_56955[(2)] = true);

(statearr_55678_56955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (38))){
var inst_55620 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
var statearr_55679_56956 = state_55630__$1;
(statearr_55679_56956[(2)] = inst_55620);

(statearr_55679_56956[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (30))){
var inst_55582 = (state_55630[(13)]);
var inst_55590 = (state_55630[(10)]);
var inst_55581 = (state_55630[(11)]);
var inst_55607 = cljs.core.empty_QMARK_(inst_55581);
var inst_55608 = (inst_55582.cljs$core$IFn$_invoke$arity$1 ? inst_55582.cljs$core$IFn$_invoke$arity$1(inst_55590) : inst_55582.call(null,inst_55590));
var inst_55609 = cljs.core.not(inst_55608);
var inst_55610 = ((inst_55607) && (inst_55609));
var state_55630__$1 = state_55630;
var statearr_55680_56961 = state_55630__$1;
(statearr_55680_56961[(2)] = inst_55610);

(statearr_55680_56961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (10))){
var inst_55532 = (state_55630[(8)]);
var inst_55553 = (state_55630[(2)]);
var inst_55554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55557 = inst_55532;
var state_55630__$1 = (function (){var statearr_55681 = state_55630;
(statearr_55681[(16)] = inst_55554);

(statearr_55681[(17)] = inst_55556);

(statearr_55681[(18)] = inst_55555);

(statearr_55681[(7)] = inst_55557);

return statearr_55681;
})();
var statearr_55682_56962 = state_55630__$1;
(statearr_55682_56962[(2)] = null);

(statearr_55682_56962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (18))){
var inst_55572 = (state_55630[(2)]);
var state_55630__$1 = state_55630;
var statearr_55683_56963 = state_55630__$1;
(statearr_55683_56963[(2)] = inst_55572);

(statearr_55683_56963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (37))){
var state_55630__$1 = state_55630;
var statearr_55684_56964 = state_55630__$1;
(statearr_55684_56964[(2)] = null);

(statearr_55684_56964[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55631 === (8))){
var inst_55532 = (state_55630[(8)]);
var inst_55550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55532);
var state_55630__$1 = state_55630;
var statearr_55685_56965 = state_55630__$1;
(statearr_55685_56965[(2)] = inst_55550);

(statearr_55685_56965[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__54501__auto__ = null;
var cljs$core$async$mix_$_state_machine__54501__auto____0 = (function (){
var statearr_55686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55686[(0)] = cljs$core$async$mix_$_state_machine__54501__auto__);

(statearr_55686[(1)] = (1));

return statearr_55686;
});
var cljs$core$async$mix_$_state_machine__54501__auto____1 = (function (state_55630){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55630);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55687){if((e55687 instanceof Object)){
var ex__54504__auto__ = e55687;
var statearr_55688_56967 = state_55630;
(statearr_55688_56967[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56968 = state_55630;
state_55630 = G__56968;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54501__auto__ = function(state_55630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54501__auto____1.call(this,state_55630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54501__auto____0;
cljs$core$async$mix_$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54501__auto____1;
return cljs$core$async$mix_$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55689 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55689[(6)] = c__54836__auto___56897);

return statearr_55689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56969 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_56969(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56977 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_56977(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56978 = (function() {
var G__56979 = null;
var G__56979__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__56979__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__56979 = function(p,v){
switch(arguments.length){
case 1:
return G__56979__1.call(this,p);
case 2:
return G__56979__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56979.cljs$core$IFn$_invoke$arity$1 = G__56979__1;
G__56979.cljs$core$IFn$_invoke$arity$2 = G__56979__2;
return G__56979;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55691 = arguments.length;
switch (G__55691) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56978.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56978.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__55694 = arguments.length;
switch (G__55694) {
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
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55692_SHARP_){
if(cljs.core.truth_((p1__55692_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55692_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55692_SHARP_.call(null,topic)))){
return p1__55692_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55692_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55695 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55696){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55696 = meta55696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55697,meta55696__$1){
var self__ = this;
var _55697__$1 = this;
return (new cljs.core.async.t_cljs$core$async55695(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55696__$1));
}));

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55697){
var self__ = this;
var _55697__$1 = this;
return self__.meta55696;
}));

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55695.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55696","meta55696",-230176386,null)], null);
}));

(cljs.core.async.t_cljs$core$async55695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55695");

(cljs.core.async.t_cljs$core$async55695.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55695.
 */
cljs.core.async.__GT_t_cljs$core$async55695 = (function cljs$core$async$__GT_t_cljs$core$async55695(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55696){
return (new cljs.core.async.t_cljs$core$async55695(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55696));
});

}

return (new cljs.core.async.t_cljs$core$async55695(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54836__auto___56988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55769){
var state_val_55770 = (state_55769[(1)]);
if((state_val_55770 === (7))){
var inst_55765 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
var statearr_55771_56993 = state_55769__$1;
(statearr_55771_56993[(2)] = inst_55765);

(statearr_55771_56993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (20))){
var state_55769__$1 = state_55769;
var statearr_55772_56994 = state_55769__$1;
(statearr_55772_56994[(2)] = null);

(statearr_55772_56994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (1))){
var state_55769__$1 = state_55769;
var statearr_55773_56995 = state_55769__$1;
(statearr_55773_56995[(2)] = null);

(statearr_55773_56995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (24))){
var inst_55748 = (state_55769[(7)]);
var inst_55757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55748);
var state_55769__$1 = state_55769;
var statearr_55774_56998 = state_55769__$1;
(statearr_55774_56998[(2)] = inst_55757);

(statearr_55774_56998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (4))){
var inst_55700 = (state_55769[(8)]);
var inst_55700__$1 = (state_55769[(2)]);
var inst_55701 = (inst_55700__$1 == null);
var state_55769__$1 = (function (){var statearr_55775 = state_55769;
(statearr_55775[(8)] = inst_55700__$1);

return statearr_55775;
})();
if(cljs.core.truth_(inst_55701)){
var statearr_55776_56999 = state_55769__$1;
(statearr_55776_56999[(1)] = (5));

} else {
var statearr_55777_57000 = state_55769__$1;
(statearr_55777_57000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (15))){
var inst_55742 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
var statearr_55778_57001 = state_55769__$1;
(statearr_55778_57001[(2)] = inst_55742);

(statearr_55778_57001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (21))){
var inst_55762 = (state_55769[(2)]);
var state_55769__$1 = (function (){var statearr_55779 = state_55769;
(statearr_55779[(9)] = inst_55762);

return statearr_55779;
})();
var statearr_55780_57002 = state_55769__$1;
(statearr_55780_57002[(2)] = null);

(statearr_55780_57002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (13))){
var inst_55724 = (state_55769[(10)]);
var inst_55726 = cljs.core.chunked_seq_QMARK_(inst_55724);
var state_55769__$1 = state_55769;
if(inst_55726){
var statearr_55781_57003 = state_55769__$1;
(statearr_55781_57003[(1)] = (16));

} else {
var statearr_55782_57004 = state_55769__$1;
(statearr_55782_57004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (22))){
var inst_55754 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
if(cljs.core.truth_(inst_55754)){
var statearr_55783_57005 = state_55769__$1;
(statearr_55783_57005[(1)] = (23));

} else {
var statearr_55784_57006 = state_55769__$1;
(statearr_55784_57006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (6))){
var inst_55700 = (state_55769[(8)]);
var inst_55750 = (state_55769[(11)]);
var inst_55748 = (state_55769[(7)]);
var inst_55748__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55700) : topic_fn.call(null,inst_55700));
var inst_55749 = cljs.core.deref(mults);
var inst_55750__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55749,inst_55748__$1);
var state_55769__$1 = (function (){var statearr_55785 = state_55769;
(statearr_55785[(11)] = inst_55750__$1);

(statearr_55785[(7)] = inst_55748__$1);

return statearr_55785;
})();
if(cljs.core.truth_(inst_55750__$1)){
var statearr_55786_57009 = state_55769__$1;
(statearr_55786_57009[(1)] = (19));

} else {
var statearr_55787_57010 = state_55769__$1;
(statearr_55787_57010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (25))){
var inst_55759 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
var statearr_55788_57011 = state_55769__$1;
(statearr_55788_57011[(2)] = inst_55759);

(statearr_55788_57011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (17))){
var inst_55724 = (state_55769[(10)]);
var inst_55733 = cljs.core.first(inst_55724);
var inst_55734 = cljs.core.async.muxch_STAR_(inst_55733);
var inst_55735 = cljs.core.async.close_BANG_(inst_55734);
var inst_55736 = cljs.core.next(inst_55724);
var inst_55710 = inst_55736;
var inst_55711 = null;
var inst_55712 = (0);
var inst_55713 = (0);
var state_55769__$1 = (function (){var statearr_55789 = state_55769;
(statearr_55789[(12)] = inst_55710);

(statearr_55789[(13)] = inst_55711);

(statearr_55789[(14)] = inst_55713);

(statearr_55789[(15)] = inst_55735);

(statearr_55789[(16)] = inst_55712);

return statearr_55789;
})();
var statearr_55790_57014 = state_55769__$1;
(statearr_55790_57014[(2)] = null);

(statearr_55790_57014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (3))){
var inst_55767 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55769__$1,inst_55767);
} else {
if((state_val_55770 === (12))){
var inst_55744 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
var statearr_55791_57015 = state_55769__$1;
(statearr_55791_57015[(2)] = inst_55744);

(statearr_55791_57015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (2))){
var state_55769__$1 = state_55769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55769__$1,(4),ch);
} else {
if((state_val_55770 === (23))){
var state_55769__$1 = state_55769;
var statearr_55792_57016 = state_55769__$1;
(statearr_55792_57016[(2)] = null);

(statearr_55792_57016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (19))){
var inst_55700 = (state_55769[(8)]);
var inst_55750 = (state_55769[(11)]);
var inst_55752 = cljs.core.async.muxch_STAR_(inst_55750);
var state_55769__$1 = state_55769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55769__$1,(22),inst_55752,inst_55700);
} else {
if((state_val_55770 === (11))){
var inst_55710 = (state_55769[(12)]);
var inst_55724 = (state_55769[(10)]);
var inst_55724__$1 = cljs.core.seq(inst_55710);
var state_55769__$1 = (function (){var statearr_55793 = state_55769;
(statearr_55793[(10)] = inst_55724__$1);

return statearr_55793;
})();
if(inst_55724__$1){
var statearr_55794_57017 = state_55769__$1;
(statearr_55794_57017[(1)] = (13));

} else {
var statearr_55795_57018 = state_55769__$1;
(statearr_55795_57018[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (9))){
var inst_55746 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
var statearr_55796_57019 = state_55769__$1;
(statearr_55796_57019[(2)] = inst_55746);

(statearr_55796_57019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (5))){
var inst_55707 = cljs.core.deref(mults);
var inst_55708 = cljs.core.vals(inst_55707);
var inst_55709 = cljs.core.seq(inst_55708);
var inst_55710 = inst_55709;
var inst_55711 = null;
var inst_55712 = (0);
var inst_55713 = (0);
var state_55769__$1 = (function (){var statearr_55797 = state_55769;
(statearr_55797[(12)] = inst_55710);

(statearr_55797[(13)] = inst_55711);

(statearr_55797[(14)] = inst_55713);

(statearr_55797[(16)] = inst_55712);

return statearr_55797;
})();
var statearr_55798_57021 = state_55769__$1;
(statearr_55798_57021[(2)] = null);

(statearr_55798_57021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (14))){
var state_55769__$1 = state_55769;
var statearr_55802_57022 = state_55769__$1;
(statearr_55802_57022[(2)] = null);

(statearr_55802_57022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (16))){
var inst_55724 = (state_55769[(10)]);
var inst_55728 = cljs.core.chunk_first(inst_55724);
var inst_55729 = cljs.core.chunk_rest(inst_55724);
var inst_55730 = cljs.core.count(inst_55728);
var inst_55710 = inst_55729;
var inst_55711 = inst_55728;
var inst_55712 = inst_55730;
var inst_55713 = (0);
var state_55769__$1 = (function (){var statearr_55803 = state_55769;
(statearr_55803[(12)] = inst_55710);

(statearr_55803[(13)] = inst_55711);

(statearr_55803[(14)] = inst_55713);

(statearr_55803[(16)] = inst_55712);

return statearr_55803;
})();
var statearr_55804_57023 = state_55769__$1;
(statearr_55804_57023[(2)] = null);

(statearr_55804_57023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (10))){
var inst_55710 = (state_55769[(12)]);
var inst_55711 = (state_55769[(13)]);
var inst_55713 = (state_55769[(14)]);
var inst_55712 = (state_55769[(16)]);
var inst_55718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55711,inst_55713);
var inst_55719 = cljs.core.async.muxch_STAR_(inst_55718);
var inst_55720 = cljs.core.async.close_BANG_(inst_55719);
var inst_55721 = (inst_55713 + (1));
var tmp55799 = inst_55710;
var tmp55800 = inst_55711;
var tmp55801 = inst_55712;
var inst_55710__$1 = tmp55799;
var inst_55711__$1 = tmp55800;
var inst_55712__$1 = tmp55801;
var inst_55713__$1 = inst_55721;
var state_55769__$1 = (function (){var statearr_55805 = state_55769;
(statearr_55805[(12)] = inst_55710__$1);

(statearr_55805[(13)] = inst_55711__$1);

(statearr_55805[(14)] = inst_55713__$1);

(statearr_55805[(17)] = inst_55720);

(statearr_55805[(16)] = inst_55712__$1);

return statearr_55805;
})();
var statearr_55806_57024 = state_55769__$1;
(statearr_55806_57024[(2)] = null);

(statearr_55806_57024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (18))){
var inst_55739 = (state_55769[(2)]);
var state_55769__$1 = state_55769;
var statearr_55807_57025 = state_55769__$1;
(statearr_55807_57025[(2)] = inst_55739);

(statearr_55807_57025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55770 === (8))){
var inst_55713 = (state_55769[(14)]);
var inst_55712 = (state_55769[(16)]);
var inst_55715 = (inst_55713 < inst_55712);
var inst_55716 = inst_55715;
var state_55769__$1 = state_55769;
if(cljs.core.truth_(inst_55716)){
var statearr_55808_57026 = state_55769__$1;
(statearr_55808_57026[(1)] = (10));

} else {
var statearr_55809_57028 = state_55769__$1;
(statearr_55809_57028[(1)] = (11));

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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_55810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55810[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_55810[(1)] = (1));

return statearr_55810;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_55769){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55769);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55811){if((e55811 instanceof Object)){
var ex__54504__auto__ = e55811;
var statearr_55812_57030 = state_55769;
(statearr_55812_57030[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57031 = state_55769;
state_55769 = G__57031;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_55769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_55769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55813 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55813[(6)] = c__54836__auto___56988);

return statearr_55813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
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
var G__55815 = arguments.length;
switch (G__55815) {
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
var G__55817 = arguments.length;
switch (G__55817) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__55819 = arguments.length;
switch (G__55819) {
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
var c__54836__auto___57051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55858){
var state_val_55859 = (state_55858[(1)]);
if((state_val_55859 === (7))){
var state_55858__$1 = state_55858;
var statearr_55860_57052 = state_55858__$1;
(statearr_55860_57052[(2)] = null);

(statearr_55860_57052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (1))){
var state_55858__$1 = state_55858;
var statearr_55861_57053 = state_55858__$1;
(statearr_55861_57053[(2)] = null);

(statearr_55861_57053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (4))){
var inst_55822 = (state_55858[(7)]);
var inst_55824 = (inst_55822 < cnt);
var state_55858__$1 = state_55858;
if(cljs.core.truth_(inst_55824)){
var statearr_55862_57057 = state_55858__$1;
(statearr_55862_57057[(1)] = (6));

} else {
var statearr_55863_57058 = state_55858__$1;
(statearr_55863_57058[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (15))){
var inst_55854 = (state_55858[(2)]);
var state_55858__$1 = state_55858;
var statearr_55864_57059 = state_55858__$1;
(statearr_55864_57059[(2)] = inst_55854);

(statearr_55864_57059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (13))){
var inst_55847 = cljs.core.async.close_BANG_(out);
var state_55858__$1 = state_55858;
var statearr_55865_57060 = state_55858__$1;
(statearr_55865_57060[(2)] = inst_55847);

(statearr_55865_57060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (6))){
var state_55858__$1 = state_55858;
var statearr_55866_57061 = state_55858__$1;
(statearr_55866_57061[(2)] = null);

(statearr_55866_57061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (3))){
var inst_55856 = (state_55858[(2)]);
var state_55858__$1 = state_55858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55858__$1,inst_55856);
} else {
if((state_val_55859 === (12))){
var inst_55844 = (state_55858[(8)]);
var inst_55844__$1 = (state_55858[(2)]);
var inst_55845 = cljs.core.some(cljs.core.nil_QMARK_,inst_55844__$1);
var state_55858__$1 = (function (){var statearr_55867 = state_55858;
(statearr_55867[(8)] = inst_55844__$1);

return statearr_55867;
})();
if(cljs.core.truth_(inst_55845)){
var statearr_55868_57063 = state_55858__$1;
(statearr_55868_57063[(1)] = (13));

} else {
var statearr_55869_57064 = state_55858__$1;
(statearr_55869_57064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (2))){
var inst_55821 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55822 = (0);
var state_55858__$1 = (function (){var statearr_55870 = state_55858;
(statearr_55870[(9)] = inst_55821);

(statearr_55870[(7)] = inst_55822);

return statearr_55870;
})();
var statearr_55871_57065 = state_55858__$1;
(statearr_55871_57065[(2)] = null);

(statearr_55871_57065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (11))){
var inst_55822 = (state_55858[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55858,(10),Object,null,(9));
var inst_55831 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55822) : chs__$1.call(null,inst_55822));
var inst_55832 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55822) : done.call(null,inst_55822));
var inst_55833 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55831,inst_55832);
var state_55858__$1 = state_55858;
var statearr_55872_57075 = state_55858__$1;
(statearr_55872_57075[(2)] = inst_55833);


cljs.core.async.impl.ioc_helpers.process_exception(state_55858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (9))){
var inst_55822 = (state_55858[(7)]);
var inst_55835 = (state_55858[(2)]);
var inst_55836 = (inst_55822 + (1));
var inst_55822__$1 = inst_55836;
var state_55858__$1 = (function (){var statearr_55873 = state_55858;
(statearr_55873[(10)] = inst_55835);

(statearr_55873[(7)] = inst_55822__$1);

return statearr_55873;
})();
var statearr_55874_57082 = state_55858__$1;
(statearr_55874_57082[(2)] = null);

(statearr_55874_57082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (5))){
var inst_55842 = (state_55858[(2)]);
var state_55858__$1 = (function (){var statearr_55875 = state_55858;
(statearr_55875[(11)] = inst_55842);

return statearr_55875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55858__$1,(12),dchan);
} else {
if((state_val_55859 === (14))){
var inst_55844 = (state_55858[(8)]);
var inst_55849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55844);
var state_55858__$1 = state_55858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55858__$1,(16),out,inst_55849);
} else {
if((state_val_55859 === (16))){
var inst_55851 = (state_55858[(2)]);
var state_55858__$1 = (function (){var statearr_55876 = state_55858;
(statearr_55876[(12)] = inst_55851);

return statearr_55876;
})();
var statearr_55877_57083 = state_55858__$1;
(statearr_55877_57083[(2)] = null);

(statearr_55877_57083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (10))){
var inst_55826 = (state_55858[(2)]);
var inst_55827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55858__$1 = (function (){var statearr_55878 = state_55858;
(statearr_55878[(13)] = inst_55826);

return statearr_55878;
})();
var statearr_55879_57084 = state_55858__$1;
(statearr_55879_57084[(2)] = inst_55827);


cljs.core.async.impl.ioc_helpers.process_exception(state_55858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55859 === (8))){
var inst_55840 = (state_55858[(2)]);
var state_55858__$1 = state_55858;
var statearr_55880_57085 = state_55858__$1;
(statearr_55880_57085[(2)] = inst_55840);

(statearr_55880_57085[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_55881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55881[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_55881[(1)] = (1));

return statearr_55881;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_55858){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55858);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55882){if((e55882 instanceof Object)){
var ex__54504__auto__ = e55882;
var statearr_55883_57092 = state_55858;
(statearr_55883_57092[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57093 = state_55858;
state_55858 = G__57093;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_55858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_55858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55884 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55884[(6)] = c__54836__auto___57051);

return statearr_55884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


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
var G__55887 = arguments.length;
switch (G__55887) {
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
var c__54836__auto___57095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55919){
var state_val_55920 = (state_55919[(1)]);
if((state_val_55920 === (7))){
var inst_55898 = (state_55919[(7)]);
var inst_55899 = (state_55919[(8)]);
var inst_55898__$1 = (state_55919[(2)]);
var inst_55899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55898__$1,(0),null);
var inst_55900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55898__$1,(1),null);
var inst_55901 = (inst_55899__$1 == null);
var state_55919__$1 = (function (){var statearr_55921 = state_55919;
(statearr_55921[(7)] = inst_55898__$1);

(statearr_55921[(8)] = inst_55899__$1);

(statearr_55921[(9)] = inst_55900);

return statearr_55921;
})();
if(cljs.core.truth_(inst_55901)){
var statearr_55922_57096 = state_55919__$1;
(statearr_55922_57096[(1)] = (8));

} else {
var statearr_55923_57097 = state_55919__$1;
(statearr_55923_57097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (1))){
var inst_55888 = cljs.core.vec(chs);
var inst_55889 = inst_55888;
var state_55919__$1 = (function (){var statearr_55924 = state_55919;
(statearr_55924[(10)] = inst_55889);

return statearr_55924;
})();
var statearr_55925_57104 = state_55919__$1;
(statearr_55925_57104[(2)] = null);

(statearr_55925_57104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (4))){
var inst_55889 = (state_55919[(10)]);
var state_55919__$1 = state_55919;
return cljs.core.async.ioc_alts_BANG_(state_55919__$1,(7),inst_55889);
} else {
if((state_val_55920 === (6))){
var inst_55915 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55926_57105 = state_55919__$1;
(statearr_55926_57105[(2)] = inst_55915);

(statearr_55926_57105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (3))){
var inst_55917 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55919__$1,inst_55917);
} else {
if((state_val_55920 === (2))){
var inst_55889 = (state_55919[(10)]);
var inst_55891 = cljs.core.count(inst_55889);
var inst_55892 = (inst_55891 > (0));
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55892)){
var statearr_55928_57106 = state_55919__$1;
(statearr_55928_57106[(1)] = (4));

} else {
var statearr_55929_57107 = state_55919__$1;
(statearr_55929_57107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (11))){
var inst_55889 = (state_55919[(10)]);
var inst_55908 = (state_55919[(2)]);
var tmp55927 = inst_55889;
var inst_55889__$1 = tmp55927;
var state_55919__$1 = (function (){var statearr_55930 = state_55919;
(statearr_55930[(11)] = inst_55908);

(statearr_55930[(10)] = inst_55889__$1);

return statearr_55930;
})();
var statearr_55931_57108 = state_55919__$1;
(statearr_55931_57108[(2)] = null);

(statearr_55931_57108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (9))){
var inst_55899 = (state_55919[(8)]);
var state_55919__$1 = state_55919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55919__$1,(11),out,inst_55899);
} else {
if((state_val_55920 === (5))){
var inst_55913 = cljs.core.async.close_BANG_(out);
var state_55919__$1 = state_55919;
var statearr_55932_57109 = state_55919__$1;
(statearr_55932_57109[(2)] = inst_55913);

(statearr_55932_57109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (10))){
var inst_55911 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55933_57110 = state_55919__$1;
(statearr_55933_57110[(2)] = inst_55911);

(statearr_55933_57110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (8))){
var inst_55898 = (state_55919[(7)]);
var inst_55899 = (state_55919[(8)]);
var inst_55900 = (state_55919[(9)]);
var inst_55889 = (state_55919[(10)]);
var inst_55903 = (function (){var cs = inst_55889;
var vec__55894 = inst_55898;
var v = inst_55899;
var c = inst_55900;
return (function (p1__55885_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55885_SHARP_);
});
})();
var inst_55904 = cljs.core.filterv(inst_55903,inst_55889);
var inst_55889__$1 = inst_55904;
var state_55919__$1 = (function (){var statearr_55934 = state_55919;
(statearr_55934[(10)] = inst_55889__$1);

return statearr_55934;
})();
var statearr_55935_57111 = state_55919__$1;
(statearr_55935_57111[(2)] = null);

(statearr_55935_57111[(1)] = (2));


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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_55936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55936[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_55936[(1)] = (1));

return statearr_55936;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_55919){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55919);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55937){if((e55937 instanceof Object)){
var ex__54504__auto__ = e55937;
var statearr_55938_57118 = state_55919;
(statearr_55938_57118[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57119 = state_55919;
state_55919 = G__57119;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_55919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_55919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55939 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55939[(6)] = c__54836__auto___57095);

return statearr_55939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
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
var G__55941 = arguments.length;
switch (G__55941) {
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
var c__54836__auto___57121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_55965){
var state_val_55966 = (state_55965[(1)]);
if((state_val_55966 === (7))){
var inst_55947 = (state_55965[(7)]);
var inst_55947__$1 = (state_55965[(2)]);
var inst_55948 = (inst_55947__$1 == null);
var inst_55949 = cljs.core.not(inst_55948);
var state_55965__$1 = (function (){var statearr_55967 = state_55965;
(statearr_55967[(7)] = inst_55947__$1);

return statearr_55967;
})();
if(inst_55949){
var statearr_55968_57122 = state_55965__$1;
(statearr_55968_57122[(1)] = (8));

} else {
var statearr_55969_57123 = state_55965__$1;
(statearr_55969_57123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (1))){
var inst_55942 = (0);
var state_55965__$1 = (function (){var statearr_55970 = state_55965;
(statearr_55970[(8)] = inst_55942);

return statearr_55970;
})();
var statearr_55971_57124 = state_55965__$1;
(statearr_55971_57124[(2)] = null);

(statearr_55971_57124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (4))){
var state_55965__$1 = state_55965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55965__$1,(7),ch);
} else {
if((state_val_55966 === (6))){
var inst_55960 = (state_55965[(2)]);
var state_55965__$1 = state_55965;
var statearr_55972_57125 = state_55965__$1;
(statearr_55972_57125[(2)] = inst_55960);

(statearr_55972_57125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (3))){
var inst_55962 = (state_55965[(2)]);
var inst_55963 = cljs.core.async.close_BANG_(out);
var state_55965__$1 = (function (){var statearr_55973 = state_55965;
(statearr_55973[(9)] = inst_55962);

return statearr_55973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55965__$1,inst_55963);
} else {
if((state_val_55966 === (2))){
var inst_55942 = (state_55965[(8)]);
var inst_55944 = (inst_55942 < n);
var state_55965__$1 = state_55965;
if(cljs.core.truth_(inst_55944)){
var statearr_55974_57129 = state_55965__$1;
(statearr_55974_57129[(1)] = (4));

} else {
var statearr_55975_57130 = state_55965__$1;
(statearr_55975_57130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (11))){
var inst_55942 = (state_55965[(8)]);
var inst_55952 = (state_55965[(2)]);
var inst_55953 = (inst_55942 + (1));
var inst_55942__$1 = inst_55953;
var state_55965__$1 = (function (){var statearr_55976 = state_55965;
(statearr_55976[(10)] = inst_55952);

(statearr_55976[(8)] = inst_55942__$1);

return statearr_55976;
})();
var statearr_55977_57131 = state_55965__$1;
(statearr_55977_57131[(2)] = null);

(statearr_55977_57131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (9))){
var state_55965__$1 = state_55965;
var statearr_55978_57132 = state_55965__$1;
(statearr_55978_57132[(2)] = null);

(statearr_55978_57132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (5))){
var state_55965__$1 = state_55965;
var statearr_55979_57133 = state_55965__$1;
(statearr_55979_57133[(2)] = null);

(statearr_55979_57133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (10))){
var inst_55957 = (state_55965[(2)]);
var state_55965__$1 = state_55965;
var statearr_55980_57134 = state_55965__$1;
(statearr_55980_57134[(2)] = inst_55957);

(statearr_55980_57134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55966 === (8))){
var inst_55947 = (state_55965[(7)]);
var state_55965__$1 = state_55965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55965__$1,(11),out,inst_55947);
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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_55981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55981[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_55981[(1)] = (1));

return statearr_55981;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_55965){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_55965);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e55982){if((e55982 instanceof Object)){
var ex__54504__auto__ = e55982;
var statearr_55983_57138 = state_55965;
(statearr_55983_57138[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57141 = state_55965;
state_55965 = G__57141;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_55965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_55965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_55984 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_55984[(6)] = c__54836__auto___57121);

return statearr_55984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55986 = (function (f,ch,meta55987){
this.f = f;
this.ch = ch;
this.meta55987 = meta55987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55988,meta55987__$1){
var self__ = this;
var _55988__$1 = this;
return (new cljs.core.async.t_cljs$core$async55986(self__.f,self__.ch,meta55987__$1));
}));

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55988){
var self__ = this;
var _55988__$1 = this;
return self__.meta55987;
}));

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55989 = (function (f,ch,meta55987,_,fn1,meta55990){
this.f = f;
this.ch = ch;
this.meta55987 = meta55987;
this._ = _;
this.fn1 = fn1;
this.meta55990 = meta55990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55991,meta55990__$1){
var self__ = this;
var _55991__$1 = this;
return (new cljs.core.async.t_cljs$core$async55989(self__.f,self__.ch,self__.meta55987,self__._,self__.fn1,meta55990__$1));
}));

(cljs.core.async.t_cljs$core$async55989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55991){
var self__ = this;
var _55991__$1 = this;
return self__.meta55990;
}));

(cljs.core.async.t_cljs$core$async55989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55985_SHARP_){
var G__55992 = (((p1__55985_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55985_SHARP_) : self__.f.call(null,p1__55985_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55992) : f1.call(null,G__55992));
});
}));

(cljs.core.async.t_cljs$core$async55989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55987","meta55987",1943379652,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55986","cljs.core.async/t_cljs$core$async55986",-67706171,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55990","meta55990",1504718832,null)], null);
}));

(cljs.core.async.t_cljs$core$async55989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55989");

(cljs.core.async.t_cljs$core$async55989.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55989.
 */
cljs.core.async.__GT_t_cljs$core$async55989 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55989(f__$1,ch__$1,meta55987__$1,___$2,fn1__$1,meta55990){
return (new cljs.core.async.t_cljs$core$async55989(f__$1,ch__$1,meta55987__$1,___$2,fn1__$1,meta55990));
});

}

return (new cljs.core.async.t_cljs$core$async55989(self__.f,self__.ch,self__.meta55987,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55993 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55993) : self__.f.call(null,G__55993));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55987","meta55987",1943379652,null)], null);
}));

(cljs.core.async.t_cljs$core$async55986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55986");

(cljs.core.async.t_cljs$core$async55986.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55986.
 */
cljs.core.async.__GT_t_cljs$core$async55986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55986(f__$1,ch__$1,meta55987){
return (new cljs.core.async.t_cljs$core$async55986(f__$1,ch__$1,meta55987));
});

}

return (new cljs.core.async.t_cljs$core$async55986(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55994 = (function (f,ch,meta55995){
this.f = f;
this.ch = ch;
this.meta55995 = meta55995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55996,meta55995__$1){
var self__ = this;
var _55996__$1 = this;
return (new cljs.core.async.t_cljs$core$async55994(self__.f,self__.ch,meta55995__$1));
}));

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55996){
var self__ = this;
var _55996__$1 = this;
return self__.meta55995;
}));

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55995","meta55995",-1879851340,null)], null);
}));

(cljs.core.async.t_cljs$core$async55994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55994");

(cljs.core.async.t_cljs$core$async55994.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55994.
 */
cljs.core.async.__GT_t_cljs$core$async55994 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55994(f__$1,ch__$1,meta55995){
return (new cljs.core.async.t_cljs$core$async55994(f__$1,ch__$1,meta55995));
});

}

return (new cljs.core.async.t_cljs$core$async55994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55997 = (function (p,ch,meta55998){
this.p = p;
this.ch = ch;
this.meta55998 = meta55998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55999,meta55998__$1){
var self__ = this;
var _55999__$1 = this;
return (new cljs.core.async.t_cljs$core$async55997(self__.p,self__.ch,meta55998__$1));
}));

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55999){
var self__ = this;
var _55999__$1 = this;
return self__.meta55998;
}));

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55998","meta55998",638481273,null)], null);
}));

(cljs.core.async.t_cljs$core$async55997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55997");

(cljs.core.async.t_cljs$core$async55997.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async55997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55997.
 */
cljs.core.async.__GT_t_cljs$core$async55997 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55997(p__$1,ch__$1,meta55998){
return (new cljs.core.async.t_cljs$core$async55997(p__$1,ch__$1,meta55998));
});

}

return (new cljs.core.async.t_cljs$core$async55997(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56001 = arguments.length;
switch (G__56001) {
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
var c__54836__auto___57161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_56022){
var state_val_56023 = (state_56022[(1)]);
if((state_val_56023 === (7))){
var inst_56018 = (state_56022[(2)]);
var state_56022__$1 = state_56022;
var statearr_56024_57162 = state_56022__$1;
(statearr_56024_57162[(2)] = inst_56018);

(statearr_56024_57162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (1))){
var state_56022__$1 = state_56022;
var statearr_56025_57163 = state_56022__$1;
(statearr_56025_57163[(2)] = null);

(statearr_56025_57163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (4))){
var inst_56004 = (state_56022[(7)]);
var inst_56004__$1 = (state_56022[(2)]);
var inst_56005 = (inst_56004__$1 == null);
var state_56022__$1 = (function (){var statearr_56026 = state_56022;
(statearr_56026[(7)] = inst_56004__$1);

return statearr_56026;
})();
if(cljs.core.truth_(inst_56005)){
var statearr_56027_57164 = state_56022__$1;
(statearr_56027_57164[(1)] = (5));

} else {
var statearr_56028_57165 = state_56022__$1;
(statearr_56028_57165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (6))){
var inst_56004 = (state_56022[(7)]);
var inst_56009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56004) : p.call(null,inst_56004));
var state_56022__$1 = state_56022;
if(cljs.core.truth_(inst_56009)){
var statearr_56029_57166 = state_56022__$1;
(statearr_56029_57166[(1)] = (8));

} else {
var statearr_56030_57167 = state_56022__$1;
(statearr_56030_57167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (3))){
var inst_56020 = (state_56022[(2)]);
var state_56022__$1 = state_56022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56022__$1,inst_56020);
} else {
if((state_val_56023 === (2))){
var state_56022__$1 = state_56022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56022__$1,(4),ch);
} else {
if((state_val_56023 === (11))){
var inst_56012 = (state_56022[(2)]);
var state_56022__$1 = state_56022;
var statearr_56031_57168 = state_56022__$1;
(statearr_56031_57168[(2)] = inst_56012);

(statearr_56031_57168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (9))){
var state_56022__$1 = state_56022;
var statearr_56032_57169 = state_56022__$1;
(statearr_56032_57169[(2)] = null);

(statearr_56032_57169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (5))){
var inst_56007 = cljs.core.async.close_BANG_(out);
var state_56022__$1 = state_56022;
var statearr_56033_57171 = state_56022__$1;
(statearr_56033_57171[(2)] = inst_56007);

(statearr_56033_57171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (10))){
var inst_56015 = (state_56022[(2)]);
var state_56022__$1 = (function (){var statearr_56034 = state_56022;
(statearr_56034[(8)] = inst_56015);

return statearr_56034;
})();
var statearr_56035_57172 = state_56022__$1;
(statearr_56035_57172[(2)] = null);

(statearr_56035_57172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56023 === (8))){
var inst_56004 = (state_56022[(7)]);
var state_56022__$1 = state_56022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56022__$1,(11),out,inst_56004);
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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_56036 = [null,null,null,null,null,null,null,null,null];
(statearr_56036[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_56036[(1)] = (1));

return statearr_56036;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_56022){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_56022);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e56037){if((e56037 instanceof Object)){
var ex__54504__auto__ = e56037;
var statearr_56038_57175 = state_56022;
(statearr_56038_57175[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57177 = state_56022;
state_56022 = G__57177;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_56022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_56022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_56039 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_56039[(6)] = c__54836__auto___57161);

return statearr_56039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__56041 = arguments.length;
switch (G__56041) {
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
var c__54836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_56103){
var state_val_56104 = (state_56103[(1)]);
if((state_val_56104 === (7))){
var inst_56099 = (state_56103[(2)]);
var state_56103__$1 = state_56103;
var statearr_56105_57181 = state_56103__$1;
(statearr_56105_57181[(2)] = inst_56099);

(statearr_56105_57181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (20))){
var inst_56069 = (state_56103[(7)]);
var inst_56080 = (state_56103[(2)]);
var inst_56081 = cljs.core.next(inst_56069);
var inst_56055 = inst_56081;
var inst_56056 = null;
var inst_56057 = (0);
var inst_56058 = (0);
var state_56103__$1 = (function (){var statearr_56106 = state_56103;
(statearr_56106[(8)] = inst_56056);

(statearr_56106[(9)] = inst_56058);

(statearr_56106[(10)] = inst_56080);

(statearr_56106[(11)] = inst_56055);

(statearr_56106[(12)] = inst_56057);

return statearr_56106;
})();
var statearr_56107_57182 = state_56103__$1;
(statearr_56107_57182[(2)] = null);

(statearr_56107_57182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (1))){
var state_56103__$1 = state_56103;
var statearr_56108_57183 = state_56103__$1;
(statearr_56108_57183[(2)] = null);

(statearr_56108_57183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (4))){
var inst_56044 = (state_56103[(13)]);
var inst_56044__$1 = (state_56103[(2)]);
var inst_56045 = (inst_56044__$1 == null);
var state_56103__$1 = (function (){var statearr_56109 = state_56103;
(statearr_56109[(13)] = inst_56044__$1);

return statearr_56109;
})();
if(cljs.core.truth_(inst_56045)){
var statearr_56110_57184 = state_56103__$1;
(statearr_56110_57184[(1)] = (5));

} else {
var statearr_56111_57185 = state_56103__$1;
(statearr_56111_57185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (15))){
var state_56103__$1 = state_56103;
var statearr_56115_57186 = state_56103__$1;
(statearr_56115_57186[(2)] = null);

(statearr_56115_57186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (21))){
var state_56103__$1 = state_56103;
var statearr_56116_57187 = state_56103__$1;
(statearr_56116_57187[(2)] = null);

(statearr_56116_57187[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (13))){
var inst_56056 = (state_56103[(8)]);
var inst_56058 = (state_56103[(9)]);
var inst_56055 = (state_56103[(11)]);
var inst_56057 = (state_56103[(12)]);
var inst_56065 = (state_56103[(2)]);
var inst_56066 = (inst_56058 + (1));
var tmp56112 = inst_56056;
var tmp56113 = inst_56055;
var tmp56114 = inst_56057;
var inst_56055__$1 = tmp56113;
var inst_56056__$1 = tmp56112;
var inst_56057__$1 = tmp56114;
var inst_56058__$1 = inst_56066;
var state_56103__$1 = (function (){var statearr_56117 = state_56103;
(statearr_56117[(8)] = inst_56056__$1);

(statearr_56117[(9)] = inst_56058__$1);

(statearr_56117[(11)] = inst_56055__$1);

(statearr_56117[(12)] = inst_56057__$1);

(statearr_56117[(14)] = inst_56065);

return statearr_56117;
})();
var statearr_56118_57200 = state_56103__$1;
(statearr_56118_57200[(2)] = null);

(statearr_56118_57200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (22))){
var state_56103__$1 = state_56103;
var statearr_56119_57202 = state_56103__$1;
(statearr_56119_57202[(2)] = null);

(statearr_56119_57202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (6))){
var inst_56044 = (state_56103[(13)]);
var inst_56053 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56044) : f.call(null,inst_56044));
var inst_56054 = cljs.core.seq(inst_56053);
var inst_56055 = inst_56054;
var inst_56056 = null;
var inst_56057 = (0);
var inst_56058 = (0);
var state_56103__$1 = (function (){var statearr_56120 = state_56103;
(statearr_56120[(8)] = inst_56056);

(statearr_56120[(9)] = inst_56058);

(statearr_56120[(11)] = inst_56055);

(statearr_56120[(12)] = inst_56057);

return statearr_56120;
})();
var statearr_56121_57211 = state_56103__$1;
(statearr_56121_57211[(2)] = null);

(statearr_56121_57211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (17))){
var inst_56069 = (state_56103[(7)]);
var inst_56073 = cljs.core.chunk_first(inst_56069);
var inst_56074 = cljs.core.chunk_rest(inst_56069);
var inst_56075 = cljs.core.count(inst_56073);
var inst_56055 = inst_56074;
var inst_56056 = inst_56073;
var inst_56057 = inst_56075;
var inst_56058 = (0);
var state_56103__$1 = (function (){var statearr_56122 = state_56103;
(statearr_56122[(8)] = inst_56056);

(statearr_56122[(9)] = inst_56058);

(statearr_56122[(11)] = inst_56055);

(statearr_56122[(12)] = inst_56057);

return statearr_56122;
})();
var statearr_56123_57212 = state_56103__$1;
(statearr_56123_57212[(2)] = null);

(statearr_56123_57212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (3))){
var inst_56101 = (state_56103[(2)]);
var state_56103__$1 = state_56103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56103__$1,inst_56101);
} else {
if((state_val_56104 === (12))){
var inst_56089 = (state_56103[(2)]);
var state_56103__$1 = state_56103;
var statearr_56124_57213 = state_56103__$1;
(statearr_56124_57213[(2)] = inst_56089);

(statearr_56124_57213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (2))){
var state_56103__$1 = state_56103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56103__$1,(4),in$);
} else {
if((state_val_56104 === (23))){
var inst_56097 = (state_56103[(2)]);
var state_56103__$1 = state_56103;
var statearr_56125_57218 = state_56103__$1;
(statearr_56125_57218[(2)] = inst_56097);

(statearr_56125_57218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (19))){
var inst_56084 = (state_56103[(2)]);
var state_56103__$1 = state_56103;
var statearr_56126_57223 = state_56103__$1;
(statearr_56126_57223[(2)] = inst_56084);

(statearr_56126_57223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (11))){
var inst_56069 = (state_56103[(7)]);
var inst_56055 = (state_56103[(11)]);
var inst_56069__$1 = cljs.core.seq(inst_56055);
var state_56103__$1 = (function (){var statearr_56127 = state_56103;
(statearr_56127[(7)] = inst_56069__$1);

return statearr_56127;
})();
if(inst_56069__$1){
var statearr_56128_57228 = state_56103__$1;
(statearr_56128_57228[(1)] = (14));

} else {
var statearr_56129_57229 = state_56103__$1;
(statearr_56129_57229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (9))){
var inst_56091 = (state_56103[(2)]);
var inst_56092 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_56103__$1 = (function (){var statearr_56130 = state_56103;
(statearr_56130[(15)] = inst_56091);

return statearr_56130;
})();
if(cljs.core.truth_(inst_56092)){
var statearr_56131_57233 = state_56103__$1;
(statearr_56131_57233[(1)] = (21));

} else {
var statearr_56132_57238 = state_56103__$1;
(statearr_56132_57238[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (5))){
var inst_56047 = cljs.core.async.close_BANG_(out);
var state_56103__$1 = state_56103;
var statearr_56133_57239 = state_56103__$1;
(statearr_56133_57239[(2)] = inst_56047);

(statearr_56133_57239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (14))){
var inst_56069 = (state_56103[(7)]);
var inst_56071 = cljs.core.chunked_seq_QMARK_(inst_56069);
var state_56103__$1 = state_56103;
if(inst_56071){
var statearr_56134_57244 = state_56103__$1;
(statearr_56134_57244[(1)] = (17));

} else {
var statearr_56135_57248 = state_56103__$1;
(statearr_56135_57248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (16))){
var inst_56087 = (state_56103[(2)]);
var state_56103__$1 = state_56103;
var statearr_56136_57253 = state_56103__$1;
(statearr_56136_57253[(2)] = inst_56087);

(statearr_56136_57253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56104 === (10))){
var inst_56056 = (state_56103[(8)]);
var inst_56058 = (state_56103[(9)]);
var inst_56063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56056,inst_56058);
var state_56103__$1 = state_56103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56103__$1,(13),out,inst_56063);
} else {
if((state_val_56104 === (18))){
var inst_56069 = (state_56103[(7)]);
var inst_56078 = cljs.core.first(inst_56069);
var state_56103__$1 = state_56103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56103__$1,(20),out,inst_56078);
} else {
if((state_val_56104 === (8))){
var inst_56058 = (state_56103[(9)]);
var inst_56057 = (state_56103[(12)]);
var inst_56060 = (inst_56058 < inst_56057);
var inst_56061 = inst_56060;
var state_56103__$1 = state_56103;
if(cljs.core.truth_(inst_56061)){
var statearr_56137_57257 = state_56103__$1;
(statearr_56137_57257[(1)] = (10));

} else {
var statearr_56138_57258 = state_56103__$1;
(statearr_56138_57258[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54501__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54501__auto____0 = (function (){
var statearr_56139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56139[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54501__auto__);

(statearr_56139[(1)] = (1));

return statearr_56139;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54501__auto____1 = (function (state_56103){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_56103);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e56140){if((e56140 instanceof Object)){
var ex__54504__auto__ = e56140;
var statearr_56141_57260 = state_56103;
(statearr_56141_57260[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57261 = state_56103;
state_56103 = G__57261;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54501__auto__ = function(state_56103){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54501__auto____1.call(this,state_56103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54501__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54501__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_56142 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_56142[(6)] = c__54836__auto__);

return statearr_56142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));

return c__54836__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56144 = arguments.length;
switch (G__56144) {
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
var G__56146 = arguments.length;
switch (G__56146) {
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
var G__56148 = arguments.length;
switch (G__56148) {
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
var c__54836__auto___57266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_56172){
var state_val_56173 = (state_56172[(1)]);
if((state_val_56173 === (7))){
var inst_56167 = (state_56172[(2)]);
var state_56172__$1 = state_56172;
var statearr_56174_57267 = state_56172__$1;
(statearr_56174_57267[(2)] = inst_56167);

(statearr_56174_57267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (1))){
var inst_56149 = null;
var state_56172__$1 = (function (){var statearr_56175 = state_56172;
(statearr_56175[(7)] = inst_56149);

return statearr_56175;
})();
var statearr_56176_57268 = state_56172__$1;
(statearr_56176_57268[(2)] = null);

(statearr_56176_57268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (4))){
var inst_56152 = (state_56172[(8)]);
var inst_56152__$1 = (state_56172[(2)]);
var inst_56153 = (inst_56152__$1 == null);
var inst_56154 = cljs.core.not(inst_56153);
var state_56172__$1 = (function (){var statearr_56177 = state_56172;
(statearr_56177[(8)] = inst_56152__$1);

return statearr_56177;
})();
if(inst_56154){
var statearr_56178_57269 = state_56172__$1;
(statearr_56178_57269[(1)] = (5));

} else {
var statearr_56179_57270 = state_56172__$1;
(statearr_56179_57270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (6))){
var state_56172__$1 = state_56172;
var statearr_56180_57271 = state_56172__$1;
(statearr_56180_57271[(2)] = null);

(statearr_56180_57271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (3))){
var inst_56169 = (state_56172[(2)]);
var inst_56170 = cljs.core.async.close_BANG_(out);
var state_56172__$1 = (function (){var statearr_56181 = state_56172;
(statearr_56181[(9)] = inst_56169);

return statearr_56181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56172__$1,inst_56170);
} else {
if((state_val_56173 === (2))){
var state_56172__$1 = state_56172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56172__$1,(4),ch);
} else {
if((state_val_56173 === (11))){
var inst_56152 = (state_56172[(8)]);
var inst_56161 = (state_56172[(2)]);
var inst_56149 = inst_56152;
var state_56172__$1 = (function (){var statearr_56182 = state_56172;
(statearr_56182[(7)] = inst_56149);

(statearr_56182[(10)] = inst_56161);

return statearr_56182;
})();
var statearr_56183_57274 = state_56172__$1;
(statearr_56183_57274[(2)] = null);

(statearr_56183_57274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (9))){
var inst_56152 = (state_56172[(8)]);
var state_56172__$1 = state_56172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56172__$1,(11),out,inst_56152);
} else {
if((state_val_56173 === (5))){
var inst_56149 = (state_56172[(7)]);
var inst_56152 = (state_56172[(8)]);
var inst_56156 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56152,inst_56149);
var state_56172__$1 = state_56172;
if(inst_56156){
var statearr_56185_57281 = state_56172__$1;
(statearr_56185_57281[(1)] = (8));

} else {
var statearr_56186_57286 = state_56172__$1;
(statearr_56186_57286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (10))){
var inst_56164 = (state_56172[(2)]);
var state_56172__$1 = state_56172;
var statearr_56187_57288 = state_56172__$1;
(statearr_56187_57288[(2)] = inst_56164);

(statearr_56187_57288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56173 === (8))){
var inst_56149 = (state_56172[(7)]);
var tmp56184 = inst_56149;
var inst_56149__$1 = tmp56184;
var state_56172__$1 = (function (){var statearr_56188 = state_56172;
(statearr_56188[(7)] = inst_56149__$1);

return statearr_56188;
})();
var statearr_56189_57297 = state_56172__$1;
(statearr_56189_57297[(2)] = null);

(statearr_56189_57297[(1)] = (2));


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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_56190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56190[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_56190[(1)] = (1));

return statearr_56190;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_56172){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_56172);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e56191){if((e56191 instanceof Object)){
var ex__54504__auto__ = e56191;
var statearr_56192_57314 = state_56172;
(statearr_56192_57314[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57319 = state_56172;
state_56172 = G__57319;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_56172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_56172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_56193 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_56193[(6)] = c__54836__auto___57266);

return statearr_56193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56195 = arguments.length;
switch (G__56195) {
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
var c__54836__auto___57336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_56233){
var state_val_56234 = (state_56233[(1)]);
if((state_val_56234 === (7))){
var inst_56229 = (state_56233[(2)]);
var state_56233__$1 = state_56233;
var statearr_56235_57345 = state_56233__$1;
(statearr_56235_57345[(2)] = inst_56229);

(statearr_56235_57345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (1))){
var inst_56196 = (new Array(n));
var inst_56197 = inst_56196;
var inst_56198 = (0);
var state_56233__$1 = (function (){var statearr_56236 = state_56233;
(statearr_56236[(7)] = inst_56198);

(statearr_56236[(8)] = inst_56197);

return statearr_56236;
})();
var statearr_56237_57355 = state_56233__$1;
(statearr_56237_57355[(2)] = null);

(statearr_56237_57355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (4))){
var inst_56201 = (state_56233[(9)]);
var inst_56201__$1 = (state_56233[(2)]);
var inst_56202 = (inst_56201__$1 == null);
var inst_56203 = cljs.core.not(inst_56202);
var state_56233__$1 = (function (){var statearr_56238 = state_56233;
(statearr_56238[(9)] = inst_56201__$1);

return statearr_56238;
})();
if(inst_56203){
var statearr_56239_57368 = state_56233__$1;
(statearr_56239_57368[(1)] = (5));

} else {
var statearr_56240_57369 = state_56233__$1;
(statearr_56240_57369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (15))){
var inst_56223 = (state_56233[(2)]);
var state_56233__$1 = state_56233;
var statearr_56241_57370 = state_56233__$1;
(statearr_56241_57370[(2)] = inst_56223);

(statearr_56241_57370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (13))){
var state_56233__$1 = state_56233;
var statearr_56242_57371 = state_56233__$1;
(statearr_56242_57371[(2)] = null);

(statearr_56242_57371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (6))){
var inst_56198 = (state_56233[(7)]);
var inst_56219 = (inst_56198 > (0));
var state_56233__$1 = state_56233;
if(cljs.core.truth_(inst_56219)){
var statearr_56243_57372 = state_56233__$1;
(statearr_56243_57372[(1)] = (12));

} else {
var statearr_56244_57374 = state_56233__$1;
(statearr_56244_57374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (3))){
var inst_56231 = (state_56233[(2)]);
var state_56233__$1 = state_56233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56233__$1,inst_56231);
} else {
if((state_val_56234 === (12))){
var inst_56197 = (state_56233[(8)]);
var inst_56221 = cljs.core.vec(inst_56197);
var state_56233__$1 = state_56233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56233__$1,(15),out,inst_56221);
} else {
if((state_val_56234 === (2))){
var state_56233__$1 = state_56233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56233__$1,(4),ch);
} else {
if((state_val_56234 === (11))){
var inst_56213 = (state_56233[(2)]);
var inst_56214 = (new Array(n));
var inst_56197 = inst_56214;
var inst_56198 = (0);
var state_56233__$1 = (function (){var statearr_56245 = state_56233;
(statearr_56245[(7)] = inst_56198);

(statearr_56245[(8)] = inst_56197);

(statearr_56245[(10)] = inst_56213);

return statearr_56245;
})();
var statearr_56246_57376 = state_56233__$1;
(statearr_56246_57376[(2)] = null);

(statearr_56246_57376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (9))){
var inst_56197 = (state_56233[(8)]);
var inst_56211 = cljs.core.vec(inst_56197);
var state_56233__$1 = state_56233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56233__$1,(11),out,inst_56211);
} else {
if((state_val_56234 === (5))){
var inst_56198 = (state_56233[(7)]);
var inst_56197 = (state_56233[(8)]);
var inst_56206 = (state_56233[(11)]);
var inst_56201 = (state_56233[(9)]);
var inst_56205 = (inst_56197[inst_56198] = inst_56201);
var inst_56206__$1 = (inst_56198 + (1));
var inst_56207 = (inst_56206__$1 < n);
var state_56233__$1 = (function (){var statearr_56247 = state_56233;
(statearr_56247[(11)] = inst_56206__$1);

(statearr_56247[(12)] = inst_56205);

return statearr_56247;
})();
if(cljs.core.truth_(inst_56207)){
var statearr_56248_57389 = state_56233__$1;
(statearr_56248_57389[(1)] = (8));

} else {
var statearr_56249_57390 = state_56233__$1;
(statearr_56249_57390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (14))){
var inst_56226 = (state_56233[(2)]);
var inst_56227 = cljs.core.async.close_BANG_(out);
var state_56233__$1 = (function (){var statearr_56251 = state_56233;
(statearr_56251[(13)] = inst_56226);

return statearr_56251;
})();
var statearr_56252_57392 = state_56233__$1;
(statearr_56252_57392[(2)] = inst_56227);

(statearr_56252_57392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (10))){
var inst_56217 = (state_56233[(2)]);
var state_56233__$1 = state_56233;
var statearr_56253_57393 = state_56233__$1;
(statearr_56253_57393[(2)] = inst_56217);

(statearr_56253_57393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56234 === (8))){
var inst_56197 = (state_56233[(8)]);
var inst_56206 = (state_56233[(11)]);
var tmp56250 = inst_56197;
var inst_56197__$1 = tmp56250;
var inst_56198 = inst_56206;
var state_56233__$1 = (function (){var statearr_56254 = state_56233;
(statearr_56254[(7)] = inst_56198);

(statearr_56254[(8)] = inst_56197__$1);

return statearr_56254;
})();
var statearr_56255_57395 = state_56233__$1;
(statearr_56255_57395[(2)] = null);

(statearr_56255_57395[(1)] = (2));


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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_56256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56256[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_56256[(1)] = (1));

return statearr_56256;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_56233){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_56233);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e56257){if((e56257 instanceof Object)){
var ex__54504__auto__ = e56257;
var statearr_56258_57397 = state_56233;
(statearr_56258_57397[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57399 = state_56233;
state_56233 = G__57399;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_56233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_56233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_56259 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_56259[(6)] = c__54836__auto___57336);

return statearr_56259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56261 = arguments.length;
switch (G__56261) {
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
var c__54836__auto___57403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_56303){
var state_val_56304 = (state_56303[(1)]);
if((state_val_56304 === (7))){
var inst_56299 = (state_56303[(2)]);
var state_56303__$1 = state_56303;
var statearr_56305_57408 = state_56303__$1;
(statearr_56305_57408[(2)] = inst_56299);

(statearr_56305_57408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (1))){
var inst_56262 = [];
var inst_56263 = inst_56262;
var inst_56264 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56303__$1 = (function (){var statearr_56306 = state_56303;
(statearr_56306[(7)] = inst_56263);

(statearr_56306[(8)] = inst_56264);

return statearr_56306;
})();
var statearr_56307_57413 = state_56303__$1;
(statearr_56307_57413[(2)] = null);

(statearr_56307_57413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (4))){
var inst_56267 = (state_56303[(9)]);
var inst_56267__$1 = (state_56303[(2)]);
var inst_56268 = (inst_56267__$1 == null);
var inst_56269 = cljs.core.not(inst_56268);
var state_56303__$1 = (function (){var statearr_56308 = state_56303;
(statearr_56308[(9)] = inst_56267__$1);

return statearr_56308;
})();
if(inst_56269){
var statearr_56309_57421 = state_56303__$1;
(statearr_56309_57421[(1)] = (5));

} else {
var statearr_56310_57424 = state_56303__$1;
(statearr_56310_57424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (15))){
var inst_56293 = (state_56303[(2)]);
var state_56303__$1 = state_56303;
var statearr_56311_57431 = state_56303__$1;
(statearr_56311_57431[(2)] = inst_56293);

(statearr_56311_57431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (13))){
var state_56303__$1 = state_56303;
var statearr_56312_57437 = state_56303__$1;
(statearr_56312_57437[(2)] = null);

(statearr_56312_57437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (6))){
var inst_56263 = (state_56303[(7)]);
var inst_56288 = inst_56263.length;
var inst_56289 = (inst_56288 > (0));
var state_56303__$1 = state_56303;
if(cljs.core.truth_(inst_56289)){
var statearr_56313_57438 = state_56303__$1;
(statearr_56313_57438[(1)] = (12));

} else {
var statearr_56314_57439 = state_56303__$1;
(statearr_56314_57439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (3))){
var inst_56301 = (state_56303[(2)]);
var state_56303__$1 = state_56303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56303__$1,inst_56301);
} else {
if((state_val_56304 === (12))){
var inst_56263 = (state_56303[(7)]);
var inst_56291 = cljs.core.vec(inst_56263);
var state_56303__$1 = state_56303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56303__$1,(15),out,inst_56291);
} else {
if((state_val_56304 === (2))){
var state_56303__$1 = state_56303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56303__$1,(4),ch);
} else {
if((state_val_56304 === (11))){
var inst_56267 = (state_56303[(9)]);
var inst_56271 = (state_56303[(10)]);
var inst_56281 = (state_56303[(2)]);
var inst_56282 = [];
var inst_56283 = inst_56282.push(inst_56267);
var inst_56263 = inst_56282;
var inst_56264 = inst_56271;
var state_56303__$1 = (function (){var statearr_56315 = state_56303;
(statearr_56315[(11)] = inst_56281);

(statearr_56315[(7)] = inst_56263);

(statearr_56315[(12)] = inst_56283);

(statearr_56315[(8)] = inst_56264);

return statearr_56315;
})();
var statearr_56316_57464 = state_56303__$1;
(statearr_56316_57464[(2)] = null);

(statearr_56316_57464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (9))){
var inst_56263 = (state_56303[(7)]);
var inst_56279 = cljs.core.vec(inst_56263);
var state_56303__$1 = state_56303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56303__$1,(11),out,inst_56279);
} else {
if((state_val_56304 === (5))){
var inst_56267 = (state_56303[(9)]);
var inst_56271 = (state_56303[(10)]);
var inst_56264 = (state_56303[(8)]);
var inst_56271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56267) : f.call(null,inst_56267));
var inst_56272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56271__$1,inst_56264);
var inst_56273 = cljs.core.keyword_identical_QMARK_(inst_56264,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56274 = ((inst_56272) || (inst_56273));
var state_56303__$1 = (function (){var statearr_56317 = state_56303;
(statearr_56317[(10)] = inst_56271__$1);

return statearr_56317;
})();
if(cljs.core.truth_(inst_56274)){
var statearr_56318_57469 = state_56303__$1;
(statearr_56318_57469[(1)] = (8));

} else {
var statearr_56319_57470 = state_56303__$1;
(statearr_56319_57470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (14))){
var inst_56296 = (state_56303[(2)]);
var inst_56297 = cljs.core.async.close_BANG_(out);
var state_56303__$1 = (function (){var statearr_56321 = state_56303;
(statearr_56321[(13)] = inst_56296);

return statearr_56321;
})();
var statearr_56322_57471 = state_56303__$1;
(statearr_56322_57471[(2)] = inst_56297);

(statearr_56322_57471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (10))){
var inst_56286 = (state_56303[(2)]);
var state_56303__$1 = state_56303;
var statearr_56323_57473 = state_56303__$1;
(statearr_56323_57473[(2)] = inst_56286);

(statearr_56323_57473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56304 === (8))){
var inst_56263 = (state_56303[(7)]);
var inst_56267 = (state_56303[(9)]);
var inst_56271 = (state_56303[(10)]);
var inst_56276 = inst_56263.push(inst_56267);
var tmp56320 = inst_56263;
var inst_56263__$1 = tmp56320;
var inst_56264 = inst_56271;
var state_56303__$1 = (function (){var statearr_56324 = state_56303;
(statearr_56324[(7)] = inst_56263__$1);

(statearr_56324[(14)] = inst_56276);

(statearr_56324[(8)] = inst_56264);

return statearr_56324;
})();
var statearr_56325_57474 = state_56303__$1;
(statearr_56325_57474[(2)] = null);

(statearr_56325_57474[(1)] = (2));


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
var cljs$core$async$state_machine__54501__auto__ = null;
var cljs$core$async$state_machine__54501__auto____0 = (function (){
var statearr_56326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56326[(0)] = cljs$core$async$state_machine__54501__auto__);

(statearr_56326[(1)] = (1));

return statearr_56326;
});
var cljs$core$async$state_machine__54501__auto____1 = (function (state_56303){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_56303);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e56327){if((e56327 instanceof Object)){
var ex__54504__auto__ = e56327;
var statearr_56328_57478 = state_56303;
(statearr_56328_57478[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57479 = state_56303;
state_56303 = G__57479;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
cljs$core$async$state_machine__54501__auto__ = function(state_56303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54501__auto____1.call(this,state_56303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54501__auto____0;
cljs$core$async$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54501__auto____1;
return cljs$core$async$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_56329 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_56329[(6)] = c__54836__auto___57403);

return statearr_56329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
