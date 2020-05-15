goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
var G__61120 = (function (){
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : re_frame.interop.next_tick.call(null,f));
});
return (re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__61120) : re_frame.interop.after_render.call(null,G__61120));
}),new cljs.core.Keyword(null,"yield","yield",177875009),re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

var re_frame$router$IEventQueue$push$dyn_61264 = (function (this$,event){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router.push[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4423__auto__.call(null,this$,event));
} else {
var m__4420__auto__ = (re_frame.router.push["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4420__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
re_frame.router.push = (function re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$push$dyn_61264(this$,event);
}
});

var re_frame$router$IEventQueue$add_post_event_callback$dyn_61265 = (function (this$,id,callack){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4423__auto__.call(null,this$,id,callack));
} else {
var m__4420__auto__ = (re_frame.router.add_post_event_callback["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4420__auto__.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
return re_frame$router$IEventQueue$add_post_event_callback$dyn_61265(this$,id,callack);
}
});

var re_frame$router$IEventQueue$remove_post_event_callback$dyn_61266 = (function (this$,f){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4423__auto__.call(null,this$,f));
} else {
var m__4420__auto__ = (re_frame.router.remove_post_event_callback["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4420__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
return re_frame$router$IEventQueue$remove_post_event_callback$dyn_61266(this$,f);
}
});

var re_frame$router$IEventQueue$purge$dyn_61269 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router.purge[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (re_frame.router.purge["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
re_frame.router.purge = (function re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
return re_frame$router$IEventQueue$purge$dyn_61269(this$);
}
});

var re_frame$router$IEventQueue$_fsm_trigger$dyn_61277 = (function (this$,trigger,arg){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4423__auto__.call(null,this$,trigger,arg));
} else {
var m__4420__auto__ = (re_frame.router._fsm_trigger["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4420__auto__.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return re_frame$router$IEventQueue$_fsm_trigger$dyn_61277(this$,trigger,arg);
}
});

var re_frame$router$IEventQueue$_add_event$dyn_61278 = (function (this$,event){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._add_event[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4423__auto__.call(null,this$,event));
} else {
var m__4420__auto__ = (re_frame.router._add_event["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4420__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_add_event$dyn_61278(this$,event);
}
});

var re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_61282 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_61282(this$);
}
});

var re_frame$router$IEventQueue$_run_next_tick$dyn_61286 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (re_frame.router._run_next_tick["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_next_tick$dyn_61286(this$);
}
});

var re_frame$router$IEventQueue$_run_queue$dyn_61291 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._run_queue[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (re_frame.router._run_queue["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_queue$dyn_61291(this$);
}
});

var re_frame$router$IEventQueue$_exception$dyn_61298 = (function (this$,ex){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._exception[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4423__auto__.call(null,this$,ex));
} else {
var m__4420__auto__ = (re_frame.router._exception["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4420__auto__.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
return re_frame$router$IEventQueue$_exception$dyn_61298(this$,ex);
}
});

var re_frame$router$IEventQueue$_pause$dyn_61305 = (function (this$,later_fn){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._pause[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4423__auto__.call(null,this$,later_fn));
} else {
var m__4420__auto__ = (re_frame.router._pause["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4420__auto__.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return re_frame$router$IEventQueue$_pause$dyn_61305(this$,later_fn);
}
});

var re_frame$router$IEventQueue$_resume$dyn_61309 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._resume[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (re_frame.router._resume["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
re_frame.router._resume = (function re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_resume$dyn_61309(this$);
}
});

var re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_61316 = (function (this$,event){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4423__auto__.call(null,this$,event));
} else {
var m__4420__auto__ = (re_frame.router._call_post_event_callbacks["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4420__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_61316(this$,event);
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5733__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5733__auto__)){
var later_fn = temp__5733__auto__;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__61319 = (n - (1));
n = G__61319;
continue;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__61231 = (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__61231) : re_frame.interop.next_tick.call(null,G__61231));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__61232 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61233 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61233);

try{try{var vec__61236 = (function (){var G__61239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__61239)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61239)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61236,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61236,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__60957__auto___61332 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__60957__auto___61332);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__60955__auto___61333 = re_frame.interop.now();
var duration__60956__auto___61334 = (end__60955__auto___61333 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__60956__auto___61334,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__60955__auto___61333);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61232);
}} else {
var vec__61243 = (function (){var G__61246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__61246)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__61246)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61243,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61243,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__60957__auto___61345 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__60957__auto___61345);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__61257 = (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__61257) : later_fn.call(null,G__61257));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.events.handle(event_v);

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e61259){var ex = e61259;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__61260 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__61261 = null;
var count__61262 = (0);
var i__61263 = (0);
while(true){
if((i__61263 < count__61262)){
var callback = chunk__61261.cljs$core$IIndexed$_nth$arity$2(null,i__61263);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__61370 = seq__61260;
var G__61371 = chunk__61261;
var G__61372 = count__61262;
var G__61373 = (i__61263 + (1));
seq__61260 = G__61370;
chunk__61261 = G__61371;
count__61262 = G__61372;
i__61263 = G__61373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61260);
if(temp__5735__auto__){
var seq__61260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61260__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61260__$1);
var G__61374 = cljs.core.chunk_rest(seq__61260__$1);
var G__61375 = c__4550__auto__;
var G__61376 = cljs.core.count(c__4550__auto__);
var G__61377 = (0);
seq__61260 = G__61374;
chunk__61261 = G__61375;
count__61262 = G__61376;
i__61263 = G__61377;
continue;
} else {
var callback = cljs.core.first(seq__61260__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__61378 = cljs.core.next(seq__61260__$1);
var G__61379 = null;
var G__61380 = (0);
var G__61381 = (0);
seq__61260 = G__61378;
chunk__61261 = G__61379;
count__61262 = G__61380;
i__61263 = G__61381;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = re_frame.interop.empty_queue);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$purge$arity$1(null);

throw ex;
}));

(re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frame.router.EventQueue.cljs$lang$type = true);

(re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue");

(re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"re-frame.router/EventQueue");
}));

/**
 * Positional factory function for re-frame.router/EventQueue.
 */
re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.event_queue.re_frame$router$IEventQueue$push$arity$2(null,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle(event_v);

re_frame.router.event_queue.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);

return null;
});

//# sourceMappingURL=re_frame.router.js.map
