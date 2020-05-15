goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__60975){
var map__60976 = p__60975;
var map__60976__$1 = (((((!((map__60976 == null))))?(((((map__60976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60976):map__60976);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60976__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60976__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60976__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60976__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4120__auto__ = child_of;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__60978_61005 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__60979_61006 = null;
var count__60980_61007 = (0);
var i__60981_61008 = (0);
while(true){
if((i__60981_61008 < count__60980_61007)){
var vec__60992_61009 = chunk__60979_61006.cljs$core$IIndexed$_nth$arity$2(null,i__60981_61008);
var k_61010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60992_61009,(0),null);
var cb_61011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60992_61009,(1),null);
try{var G__60996_61019 = cljs.core.deref(re_frame.trace.traces);
(cb_61011.cljs$core$IFn$_invoke$arity$1 ? cb_61011.cljs$core$IFn$_invoke$arity$1(G__60996_61019) : cb_61011.call(null,G__60996_61019));
}catch (e60995){var e_61021 = e60995;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61010,"while storing",cljs.core.deref(re_frame.trace.traces),e_61021], 0));
}

var G__61022 = seq__60978_61005;
var G__61023 = chunk__60979_61006;
var G__61024 = count__60980_61007;
var G__61025 = (i__60981_61008 + (1));
seq__60978_61005 = G__61022;
chunk__60979_61006 = G__61023;
count__60980_61007 = G__61024;
i__60981_61008 = G__61025;
continue;
} else {
var temp__5735__auto___61029 = cljs.core.seq(seq__60978_61005);
if(temp__5735__auto___61029){
var seq__60978_61030__$1 = temp__5735__auto___61029;
if(cljs.core.chunked_seq_QMARK_(seq__60978_61030__$1)){
var c__4550__auto___61031 = cljs.core.chunk_first(seq__60978_61030__$1);
var G__61032 = cljs.core.chunk_rest(seq__60978_61030__$1);
var G__61033 = c__4550__auto___61031;
var G__61034 = cljs.core.count(c__4550__auto___61031);
var G__61035 = (0);
seq__60978_61005 = G__61032;
chunk__60979_61006 = G__61033;
count__60980_61007 = G__61034;
i__60981_61008 = G__61035;
continue;
} else {
var vec__60997_61041 = cljs.core.first(seq__60978_61030__$1);
var k_61042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60997_61041,(0),null);
var cb_61043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60997_61041,(1),null);
try{var G__61001_61045 = cljs.core.deref(re_frame.trace.traces);
(cb_61043.cljs$core$IFn$_invoke$arity$1 ? cb_61043.cljs$core$IFn$_invoke$arity$1(G__61001_61045) : cb_61043.call(null,G__61001_61045));
}catch (e61000){var e_61046 = e61000;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61042,"while storing",cljs.core.deref(re_frame.trace.traces),e_61046], 0));
}

var G__61050 = cljs.core.next(seq__60978_61030__$1);
var G__61051 = null;
var G__61052 = (0);
var G__61053 = (0);
seq__60978_61005 = G__61050;
chunk__60979_61006 = G__61051;
count__60980_61007 = G__61052;
i__60981_61008 = G__61053;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
