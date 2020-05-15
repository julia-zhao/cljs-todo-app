goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__61267 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61268 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61268);

try{try{var seq__61270 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61271 = null;
var count__61272 = (0);
var i__61273 = (0);
while(true){
if((i__61273 < count__61272)){
var vec__61283 = chunk__61271.cljs$core$IIndexed$_nth$arity$2(null,i__61273);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(1),null);
var temp__5733__auto___61335 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61335)){
var effect_fn_61336 = temp__5733__auto___61335;
(effect_fn_61336.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61336.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61336.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61337 = seq__61270;
var G__61338 = chunk__61271;
var G__61339 = count__61272;
var G__61340 = (i__61273 + (1));
seq__61270 = G__61337;
chunk__61271 = G__61338;
count__61272 = G__61339;
i__61273 = G__61340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61270);
if(temp__5735__auto__){
var seq__61270__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61270__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61270__$1);
var G__61341 = cljs.core.chunk_rest(seq__61270__$1);
var G__61342 = c__4550__auto__;
var G__61343 = cljs.core.count(c__4550__auto__);
var G__61344 = (0);
seq__61270 = G__61341;
chunk__61271 = G__61342;
count__61272 = G__61343;
i__61273 = G__61344;
continue;
} else {
var vec__61287 = cljs.core.first(seq__61270__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61287,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61287,(1),null);
var temp__5733__auto___61346 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61346)){
var effect_fn_61347 = temp__5733__auto___61346;
(effect_fn_61347.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61347.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61347.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61348 = cljs.core.next(seq__61270__$1);
var G__61349 = null;
var G__61350 = (0);
var G__61351 = (0);
seq__61270 = G__61348;
chunk__61271 = G__61349;
count__61272 = G__61350;
i__61273 = G__61351;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__60955__auto___61352 = re_frame.interop.now();
var duration__60956__auto___61353 = (end__60955__auto___61352 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__60956__auto___61353,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__60955__auto___61352);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61267);
}} else {
var seq__61290 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61292 = null;
var count__61293 = (0);
var i__61294 = (0);
while(true){
if((i__61294 < count__61293)){
var vec__61302 = chunk__61292.cljs$core$IIndexed$_nth$arity$2(null,i__61294);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61302,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61302,(1),null);
var temp__5733__auto___61354 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61354)){
var effect_fn_61355 = temp__5733__auto___61354;
(effect_fn_61355.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61355.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61355.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61356 = seq__61290;
var G__61357 = chunk__61292;
var G__61358 = count__61293;
var G__61359 = (i__61294 + (1));
seq__61290 = G__61356;
chunk__61292 = G__61357;
count__61293 = G__61358;
i__61294 = G__61359;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61290);
if(temp__5735__auto__){
var seq__61290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61290__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61290__$1);
var G__61360 = cljs.core.chunk_rest(seq__61290__$1);
var G__61361 = c__4550__auto__;
var G__61362 = cljs.core.count(c__4550__auto__);
var G__61363 = (0);
seq__61290 = G__61360;
chunk__61292 = G__61361;
count__61293 = G__61362;
i__61294 = G__61363;
continue;
} else {
var vec__61306 = cljs.core.first(seq__61290__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61306,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61306,(1),null);
var temp__5733__auto___61364 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61364)){
var effect_fn_61365 = temp__5733__auto___61364;
(effect_fn_61365.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61365.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61365.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61366 = cljs.core.next(seq__61290__$1);
var G__61367 = null;
var G__61368 = (0);
var G__61369 = (0);
seq__61290 = G__61366;
chunk__61292 = G__61367;
count__61293 = G__61368;
i__61294 = G__61369;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__61310 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61311 = null;
var count__61312 = (0);
var i__61313 = (0);
while(true){
if((i__61313 < count__61312)){
var map__61320 = chunk__61311.cljs$core$IIndexed$_nth$arity$2(null,i__61313);
var map__61320__$1 = (((((!((map__61320 == null))))?(((((map__61320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61320):map__61320);
var effect = map__61320__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__61310,chunk__61311,count__61312,i__61313,map__61320,map__61320__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__61310,chunk__61311,count__61312,i__61313,map__61320,map__61320__$1,effect,ms,dispatch))
,ms);
}


var G__61382 = seq__61310;
var G__61383 = chunk__61311;
var G__61384 = count__61312;
var G__61385 = (i__61313 + (1));
seq__61310 = G__61382;
chunk__61311 = G__61383;
count__61312 = G__61384;
i__61313 = G__61385;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61310);
if(temp__5735__auto__){
var seq__61310__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61310__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61310__$1);
var G__61388 = cljs.core.chunk_rest(seq__61310__$1);
var G__61389 = c__4550__auto__;
var G__61390 = cljs.core.count(c__4550__auto__);
var G__61391 = (0);
seq__61310 = G__61388;
chunk__61311 = G__61389;
count__61312 = G__61390;
i__61313 = G__61391;
continue;
} else {
var map__61322 = cljs.core.first(seq__61310__$1);
var map__61322__$1 = (((((!((map__61322 == null))))?(((((map__61322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61322):map__61322);
var effect = map__61322__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61322__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61322__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__61310,chunk__61311,count__61312,i__61313,map__61322,map__61322__$1,effect,ms,dispatch,seq__61310__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__61310,chunk__61311,count__61312,i__61313,map__61322,map__61322__$1,effect,ms,dispatch,seq__61310__$1,temp__5735__auto__))
,ms);
}


var G__61392 = cljs.core.next(seq__61310__$1);
var G__61393 = null;
var G__61394 = (0);
var G__61395 = (0);
seq__61310 = G__61392;
chunk__61311 = G__61393;
count__61312 = G__61394;
i__61313 = G__61395;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__61324 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61325 = null;
var count__61326 = (0);
var i__61327 = (0);
while(true){
if((i__61327 < count__61326)){
var event = chunk__61325.cljs$core$IIndexed$_nth$arity$2(null,i__61327);
re_frame.router.dispatch(event);


var G__61398 = seq__61324;
var G__61399 = chunk__61325;
var G__61400 = count__61326;
var G__61401 = (i__61327 + (1));
seq__61324 = G__61398;
chunk__61325 = G__61399;
count__61326 = G__61400;
i__61327 = G__61401;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61324);
if(temp__5735__auto__){
var seq__61324__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61324__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61324__$1);
var G__61402 = cljs.core.chunk_rest(seq__61324__$1);
var G__61403 = c__4550__auto__;
var G__61404 = cljs.core.count(c__4550__auto__);
var G__61405 = (0);
seq__61324 = G__61402;
chunk__61325 = G__61403;
count__61326 = G__61404;
i__61327 = G__61405;
continue;
} else {
var event = cljs.core.first(seq__61324__$1);
re_frame.router.dispatch(event);


var G__61408 = cljs.core.next(seq__61324__$1);
var G__61409 = null;
var G__61410 = (0);
var G__61411 = (0);
seq__61324 = G__61408;
chunk__61325 = G__61409;
count__61326 = G__61410;
i__61327 = G__61411;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61328 = cljs.core.seq(value);
var chunk__61329 = null;
var count__61330 = (0);
var i__61331 = (0);
while(true){
if((i__61331 < count__61330)){
var event = chunk__61329.cljs$core$IIndexed$_nth$arity$2(null,i__61331);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__61412 = seq__61328;
var G__61413 = chunk__61329;
var G__61414 = count__61330;
var G__61415 = (i__61331 + (1));
seq__61328 = G__61412;
chunk__61329 = G__61413;
count__61330 = G__61414;
i__61331 = G__61415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61328);
if(temp__5735__auto__){
var seq__61328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61328__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61328__$1);
var G__61416 = cljs.core.chunk_rest(seq__61328__$1);
var G__61417 = c__4550__auto__;
var G__61418 = cljs.core.count(c__4550__auto__);
var G__61419 = (0);
seq__61328 = G__61416;
chunk__61329 = G__61417;
count__61330 = G__61418;
i__61331 = G__61419;
continue;
} else {
var event = cljs.core.first(seq__61328__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__61420 = cljs.core.next(seq__61328__$1);
var G__61421 = null;
var G__61422 = (0);
var G__61423 = (0);
seq__61328 = G__61420;
chunk__61329 = G__61421;
count__61330 = G__61422;
i__61331 = G__61423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
