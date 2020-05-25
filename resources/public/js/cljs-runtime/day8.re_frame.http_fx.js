goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__55021){
var vec__55022 = p__55021;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55022,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55022,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__55025 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__55025);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__55028){
var map__55029 = p__55028;
var map__55029__$1 = (((((!((map__55029 == null))))?(((((map__55029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55029):map__55029);
var request = map__55029__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55029__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55029__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__55026_SHARP_){
var G__55031 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__55026_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55031) : re_frame.core.dispatch.call(null,G__55031));
}),(function (p1__55027_SHARP_){
var G__55032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__55027_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55032) : re_frame.core.dispatch.call(null,G__55032));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__55033 = cljs.core.seq(seq_request_maps);
var chunk__55034 = null;
var count__55035 = (0);
var i__55036 = (0);
while(true){
if((i__55036 < count__55035)){
var request__$1 = chunk__55034.cljs$core$IIndexed$_nth$arity$2(null,i__55036);
var G__55039_55043 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__55039_55043) : ajax.core.ajax_request.call(null,G__55039_55043));


var G__55044 = seq__55033;
var G__55045 = chunk__55034;
var G__55046 = count__55035;
var G__55047 = (i__55036 + (1));
seq__55033 = G__55044;
chunk__55034 = G__55045;
count__55035 = G__55046;
i__55036 = G__55047;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55033);
if(temp__5735__auto__){
var seq__55033__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55033__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55033__$1);
var G__55048 = cljs.core.chunk_rest(seq__55033__$1);
var G__55049 = c__4550__auto__;
var G__55050 = cljs.core.count(c__4550__auto__);
var G__55051 = (0);
seq__55033 = G__55048;
chunk__55034 = G__55049;
count__55035 = G__55050;
i__55036 = G__55051;
continue;
} else {
var request__$1 = cljs.core.first(seq__55033__$1);
var G__55040_55052 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__55040_55052) : ajax.core.ajax_request.call(null,G__55040_55052));


var G__55053 = cljs.core.next(seq__55033__$1);
var G__55054 = null;
var G__55055 = (0);
var G__55056 = (0);
seq__55033 = G__55053;
chunk__55034 = G__55054;
count__55035 = G__55055;
i__55036 = G__55056;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__55041_55057 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__55042_55058 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__55041_55057,G__55042_55058) : re_frame.core.reg_fx.call(null,G__55041_55057,G__55042_55058));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
