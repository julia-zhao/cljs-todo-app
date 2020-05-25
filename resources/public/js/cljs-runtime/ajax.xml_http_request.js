goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__54747 = e.target.readyState;
var fexpr__54746 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__54746.cljs$core$IFn$_invoke$arity$1 ? fexpr__54746.cljs$core$IFn$_invoke$arity$1(G__54747) : fexpr__54746.call(null,G__54747));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__54761,handler){
var map__54762 = p__54761;
var map__54762__$1 = (((((!((map__54762 == null))))?(((((map__54762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54762):map__54762);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54762__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54762__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54762__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54762__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54762__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54762__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54762__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__54758_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__54758_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___54844 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___54844)){
var response_type_54845 = temp__5735__auto___54844;
(this$__$1.responseType = cljs.core.name(response_type_54845));
} else {
}

var seq__54767_54847 = cljs.core.seq(headers);
var chunk__54768_54848 = null;
var count__54769_54849 = (0);
var i__54770_54850 = (0);
while(true){
if((i__54770_54850 < count__54769_54849)){
var vec__54784_54852 = chunk__54768_54848.cljs$core$IIndexed$_nth$arity$2(null,i__54770_54850);
var k_54853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54784_54852,(0),null);
var v_54854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54784_54852,(1),null);
this$__$1.setRequestHeader(k_54853,v_54854);


var G__54855 = seq__54767_54847;
var G__54856 = chunk__54768_54848;
var G__54857 = count__54769_54849;
var G__54858 = (i__54770_54850 + (1));
seq__54767_54847 = G__54855;
chunk__54768_54848 = G__54856;
count__54769_54849 = G__54857;
i__54770_54850 = G__54858;
continue;
} else {
var temp__5735__auto___54859 = cljs.core.seq(seq__54767_54847);
if(temp__5735__auto___54859){
var seq__54767_54860__$1 = temp__5735__auto___54859;
if(cljs.core.chunked_seq_QMARK_(seq__54767_54860__$1)){
var c__4550__auto___54861 = cljs.core.chunk_first(seq__54767_54860__$1);
var G__54862 = cljs.core.chunk_rest(seq__54767_54860__$1);
var G__54863 = c__4550__auto___54861;
var G__54864 = cljs.core.count(c__4550__auto___54861);
var G__54865 = (0);
seq__54767_54847 = G__54862;
chunk__54768_54848 = G__54863;
count__54769_54849 = G__54864;
i__54770_54850 = G__54865;
continue;
} else {
var vec__54793_54874 = cljs.core.first(seq__54767_54860__$1);
var k_54875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54793_54874,(0),null);
var v_54876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54793_54874,(1),null);
this$__$1.setRequestHeader(k_54875,v_54876);


var G__54879 = cljs.core.next(seq__54767_54860__$1);
var G__54880 = null;
var G__54881 = (0);
var G__54882 = (0);
seq__54767_54847 = G__54879;
chunk__54768_54848 = G__54880;
count__54769_54849 = G__54881;
i__54770_54850 = G__54882;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4120__auto__ = body;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
