goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58642 = arguments.length;
var i__4731__auto___58643 = (0);
while(true){
if((i__4731__auto___58643 < len__4730__auto___58642)){
args__4736__auto__.push((arguments[i__4731__auto___58643]));

var G__58644 = (i__4731__auto___58643 + (1));
i__4731__auto___58643 = G__58644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq58494){
var G__58495 = cljs.core.first(seq58494);
var seq58494__$1 = cljs.core.next(seq58494);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58495,seq58494__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__58496){
var map__58498 = p__58496;
var map__58498__$1 = (((((!((map__58498 == null))))?(((((map__58498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58498):map__58498);
var src = map__58498__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58498__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58498__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4120__auto__){
return or__4120__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58501 = cljs.core.seq(sources);
var chunk__58502 = null;
var count__58503 = (0);
var i__58504 = (0);
while(true){
if((i__58504 < count__58503)){
var map__58509 = chunk__58502.cljs$core$IIndexed$_nth$arity$2(null,i__58504);
var map__58509__$1 = (((((!((map__58509 == null))))?(((((map__58509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58509):map__58509);
var src = map__58509__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58509__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58509__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58509__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58509__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__58645 = seq__58501;
var G__58646 = chunk__58502;
var G__58647 = count__58503;
var G__58648 = (i__58504 + (1));
seq__58501 = G__58645;
chunk__58502 = G__58646;
count__58503 = G__58647;
i__58504 = G__58648;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58501);
if(temp__5735__auto__){
var seq__58501__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58501__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58501__$1);
var G__58649 = cljs.core.chunk_rest(seq__58501__$1);
var G__58650 = c__4550__auto__;
var G__58651 = cljs.core.count(c__4550__auto__);
var G__58652 = (0);
seq__58501 = G__58649;
chunk__58502 = G__58650;
count__58503 = G__58651;
i__58504 = G__58652;
continue;
} else {
var map__58511 = cljs.core.first(seq__58501__$1);
var map__58511__$1 = (((((!((map__58511 == null))))?(((((map__58511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58511):map__58511);
var src = map__58511__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__58653 = cljs.core.next(seq__58501__$1);
var G__58654 = null;
var G__58655 = (0);
var G__58656 = (0);
seq__58501 = G__58653;
chunk__58502 = G__58654;
count__58503 = G__58655;
i__58504 = G__58656;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58513 = cljs.core.seq(js_requires);
var chunk__58514 = null;
var count__58515 = (0);
var i__58516 = (0);
while(true){
if((i__58516 < count__58515)){
var js_ns = chunk__58514.cljs$core$IIndexed$_nth$arity$2(null,i__58516);
var require_str_58657 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58657);


var G__58658 = seq__58513;
var G__58659 = chunk__58514;
var G__58660 = count__58515;
var G__58661 = (i__58516 + (1));
seq__58513 = G__58658;
chunk__58514 = G__58659;
count__58515 = G__58660;
i__58516 = G__58661;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58513);
if(temp__5735__auto__){
var seq__58513__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58513__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58513__$1);
var G__58662 = cljs.core.chunk_rest(seq__58513__$1);
var G__58663 = c__4550__auto__;
var G__58664 = cljs.core.count(c__4550__auto__);
var G__58665 = (0);
seq__58513 = G__58662;
chunk__58514 = G__58663;
count__58515 = G__58664;
i__58516 = G__58665;
continue;
} else {
var js_ns = cljs.core.first(seq__58513__$1);
var require_str_58666 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58666);


var G__58667 = cljs.core.next(seq__58513__$1);
var G__58668 = null;
var G__58669 = (0);
var G__58670 = (0);
seq__58513 = G__58667;
chunk__58514 = G__58668;
count__58515 = G__58669;
i__58516 = G__58670;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__58517 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__58517) : callback.call(null,G__58517));
} else {
var G__58518 = shadow.cljs.devtools.client.env.files_url();
var G__58519 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__58520 = "POST";
var G__58521 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__58522 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__58518,G__58519,G__58520,G__58521,G__58522);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__58525){
var map__58526 = p__58525;
var map__58526__$1 = (((((!((map__58526 == null))))?(((((map__58526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58526):map__58526);
var msg = map__58526__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__58528 = info;
var map__58528__$1 = (((((!((map__58528 == null))))?(((((map__58528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58528):map__58528);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58528__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58528__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58531(s__58532){
return (new cljs.core.LazySeq(null,(function (){
var s__58532__$1 = s__58532;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58532__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__58537 = cljs.core.first(xs__6292__auto__);
var map__58537__$1 = (((((!((map__58537 == null))))?(((((map__58537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58537):map__58537);
var src = map__58537__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__58532__$1,map__58537,map__58537__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58528,map__58528__$1,sources,compiled,map__58526,map__58526__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58531_$_iter__58533(s__58534){
return (new cljs.core.LazySeq(null,((function (s__58532__$1,map__58537,map__58537__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58528,map__58528__$1,sources,compiled,map__58526,map__58526__$1,msg,info,reload_info){
return (function (){
var s__58534__$1 = s__58534;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58534__$1);
if(temp__5735__auto____$1){
var s__58534__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58534__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58534__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58536 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58535 = (0);
while(true){
if((i__58535 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58535);
cljs.core.chunk_append(b__58536,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58671 = (i__58535 + (1));
i__58535 = G__58671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58536),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58531_$_iter__58533(cljs.core.chunk_rest(s__58534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58536),null);
}
} else {
var warning = cljs.core.first(s__58534__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58531_$_iter__58533(cljs.core.rest(s__58534__$2)));
}
} else {
return null;
}
break;
}
});})(s__58532__$1,map__58537,map__58537__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58528,map__58528__$1,sources,compiled,map__58526,map__58526__$1,msg,info,reload_info))
,null,null));
});})(s__58532__$1,map__58537,map__58537__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58528,map__58528__$1,sources,compiled,map__58526,map__58526__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58531(cljs.core.rest(s__58532__$1)));
} else {
var G__58672 = cljs.core.rest(s__58532__$1);
s__58532__$1 = G__58672;
continue;
}
} else {
var G__58673 = cljs.core.rest(s__58532__$1);
s__58532__$1 = G__58673;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(sources);
})()));
var seq__58539_58674 = cljs.core.seq(warnings);
var chunk__58540_58675 = null;
var count__58541_58676 = (0);
var i__58542_58677 = (0);
while(true){
if((i__58542_58677 < count__58541_58676)){
var map__58547_58678 = chunk__58540_58675.cljs$core$IIndexed$_nth$arity$2(null,i__58542_58677);
var map__58547_58679__$1 = (((((!((map__58547_58678 == null))))?(((((map__58547_58678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58547_58678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58547_58678):map__58547_58678);
var w_58680 = map__58547_58679__$1;
var msg_58681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547_58679__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547_58679__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547_58679__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547_58679__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58684)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58682),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58683),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58681__$1)].join(''));


var G__58685 = seq__58539_58674;
var G__58686 = chunk__58540_58675;
var G__58687 = count__58541_58676;
var G__58688 = (i__58542_58677 + (1));
seq__58539_58674 = G__58685;
chunk__58540_58675 = G__58686;
count__58541_58676 = G__58687;
i__58542_58677 = G__58688;
continue;
} else {
var temp__5735__auto___58689 = cljs.core.seq(seq__58539_58674);
if(temp__5735__auto___58689){
var seq__58539_58690__$1 = temp__5735__auto___58689;
if(cljs.core.chunked_seq_QMARK_(seq__58539_58690__$1)){
var c__4550__auto___58691 = cljs.core.chunk_first(seq__58539_58690__$1);
var G__58692 = cljs.core.chunk_rest(seq__58539_58690__$1);
var G__58693 = c__4550__auto___58691;
var G__58694 = cljs.core.count(c__4550__auto___58691);
var G__58695 = (0);
seq__58539_58674 = G__58692;
chunk__58540_58675 = G__58693;
count__58541_58676 = G__58694;
i__58542_58677 = G__58695;
continue;
} else {
var map__58549_58696 = cljs.core.first(seq__58539_58690__$1);
var map__58549_58697__$1 = (((((!((map__58549_58696 == null))))?(((((map__58549_58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58549_58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58549_58696):map__58549_58696);
var w_58698 = map__58549_58697__$1;
var msg_58699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549_58697__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549_58697__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549_58697__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549_58697__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58702)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58700),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58701),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58699__$1)].join(''));


var G__58703 = cljs.core.next(seq__58539_58690__$1);
var G__58704 = null;
var G__58705 = (0);
var G__58706 = (0);
seq__58539_58674 = G__58703;
chunk__58540_58675 = G__58704;
count__58541_58676 = G__58705;
i__58542_58677 = G__58706;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.truth_((function (){var or__4120__auto__ = cljs.core.empty_QMARK_(warnings);
if(or__4120__auto__){
return or__4120__auto__;
} else {
return shadow.cljs.devtools.client.env.ignore_warnings;
}
})())){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58551){
var map__58552 = p__58551;
var map__58552__$1 = (((((!((map__58552 == null))))?(((((map__58552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58552):map__58552);
var src = map__58552__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58554){
var map__58555 = p__58554;
var map__58555__$1 = (((((!((map__58555 == null))))?(((((map__58555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58555):map__58555);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58557){
var map__58558 = p__58557;
var map__58558__$1 = (((((!((map__58558 == null))))?(((((map__58558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58558):map__58558);
var rc = map__58558__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__58523_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58523_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__58560){
var map__58561 = p__58560;
var map__58561__$1 = (((((!((map__58561 == null))))?(((((map__58561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58561):map__58561);
var msg = map__58561__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58563 = cljs.core.seq(updates);
var chunk__58565 = null;
var count__58566 = (0);
var i__58567 = (0);
while(true){
if((i__58567 < count__58566)){
var path = chunk__58565.cljs$core$IIndexed$_nth$arity$2(null,i__58567);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58593_58707 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58596_58708 = null;
var count__58597_58709 = (0);
var i__58598_58710 = (0);
while(true){
if((i__58598_58710 < count__58597_58709)){
var node_58711 = chunk__58596_58708.cljs$core$IIndexed$_nth$arity$2(null,i__58598_58710);
var path_match_58712 = shadow.cljs.devtools.client.browser.match_paths(node_58711.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58712)){
var new_link_58713 = (function (){var G__58603 = node_58711.cloneNode(true);
G__58603.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58712),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58603;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58712], 0));

goog.dom.insertSiblingAfter(new_link_58713,node_58711);

goog.dom.removeNode(node_58711);


var G__58714 = seq__58593_58707;
var G__58715 = chunk__58596_58708;
var G__58716 = count__58597_58709;
var G__58717 = (i__58598_58710 + (1));
seq__58593_58707 = G__58714;
chunk__58596_58708 = G__58715;
count__58597_58709 = G__58716;
i__58598_58710 = G__58717;
continue;
} else {
var G__58718 = seq__58593_58707;
var G__58719 = chunk__58596_58708;
var G__58720 = count__58597_58709;
var G__58721 = (i__58598_58710 + (1));
seq__58593_58707 = G__58718;
chunk__58596_58708 = G__58719;
count__58597_58709 = G__58720;
i__58598_58710 = G__58721;
continue;
}
} else {
var temp__5735__auto___58722 = cljs.core.seq(seq__58593_58707);
if(temp__5735__auto___58722){
var seq__58593_58723__$1 = temp__5735__auto___58722;
if(cljs.core.chunked_seq_QMARK_(seq__58593_58723__$1)){
var c__4550__auto___58724 = cljs.core.chunk_first(seq__58593_58723__$1);
var G__58725 = cljs.core.chunk_rest(seq__58593_58723__$1);
var G__58726 = c__4550__auto___58724;
var G__58727 = cljs.core.count(c__4550__auto___58724);
var G__58728 = (0);
seq__58593_58707 = G__58725;
chunk__58596_58708 = G__58726;
count__58597_58709 = G__58727;
i__58598_58710 = G__58728;
continue;
} else {
var node_58729 = cljs.core.first(seq__58593_58723__$1);
var path_match_58730 = shadow.cljs.devtools.client.browser.match_paths(node_58729.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58730)){
var new_link_58731 = (function (){var G__58604 = node_58729.cloneNode(true);
G__58604.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58730),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58604;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58730], 0));

goog.dom.insertSiblingAfter(new_link_58731,node_58729);

goog.dom.removeNode(node_58729);


var G__58732 = cljs.core.next(seq__58593_58723__$1);
var G__58733 = null;
var G__58734 = (0);
var G__58735 = (0);
seq__58593_58707 = G__58732;
chunk__58596_58708 = G__58733;
count__58597_58709 = G__58734;
i__58598_58710 = G__58735;
continue;
} else {
var G__58736 = cljs.core.next(seq__58593_58723__$1);
var G__58737 = null;
var G__58738 = (0);
var G__58739 = (0);
seq__58593_58707 = G__58736;
chunk__58596_58708 = G__58737;
count__58597_58709 = G__58738;
i__58598_58710 = G__58739;
continue;
}
}
} else {
}
}
break;
}


var G__58740 = seq__58563;
var G__58741 = chunk__58565;
var G__58742 = count__58566;
var G__58743 = (i__58567 + (1));
seq__58563 = G__58740;
chunk__58565 = G__58741;
count__58566 = G__58742;
i__58567 = G__58743;
continue;
} else {
var G__58744 = seq__58563;
var G__58745 = chunk__58565;
var G__58746 = count__58566;
var G__58747 = (i__58567 + (1));
seq__58563 = G__58744;
chunk__58565 = G__58745;
count__58566 = G__58746;
i__58567 = G__58747;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58563);
if(temp__5735__auto__){
var seq__58563__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58563__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58563__$1);
var G__58748 = cljs.core.chunk_rest(seq__58563__$1);
var G__58749 = c__4550__auto__;
var G__58750 = cljs.core.count(c__4550__auto__);
var G__58751 = (0);
seq__58563 = G__58748;
chunk__58565 = G__58749;
count__58566 = G__58750;
i__58567 = G__58751;
continue;
} else {
var path = cljs.core.first(seq__58563__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58605_58752 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58608_58753 = null;
var count__58609_58754 = (0);
var i__58610_58755 = (0);
while(true){
if((i__58610_58755 < count__58609_58754)){
var node_58756 = chunk__58608_58753.cljs$core$IIndexed$_nth$arity$2(null,i__58610_58755);
var path_match_58757 = shadow.cljs.devtools.client.browser.match_paths(node_58756.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58757)){
var new_link_58758 = (function (){var G__58615 = node_58756.cloneNode(true);
G__58615.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58757),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58615;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58757], 0));

goog.dom.insertSiblingAfter(new_link_58758,node_58756);

goog.dom.removeNode(node_58756);


var G__58759 = seq__58605_58752;
var G__58760 = chunk__58608_58753;
var G__58761 = count__58609_58754;
var G__58762 = (i__58610_58755 + (1));
seq__58605_58752 = G__58759;
chunk__58608_58753 = G__58760;
count__58609_58754 = G__58761;
i__58610_58755 = G__58762;
continue;
} else {
var G__58763 = seq__58605_58752;
var G__58764 = chunk__58608_58753;
var G__58765 = count__58609_58754;
var G__58766 = (i__58610_58755 + (1));
seq__58605_58752 = G__58763;
chunk__58608_58753 = G__58764;
count__58609_58754 = G__58765;
i__58610_58755 = G__58766;
continue;
}
} else {
var temp__5735__auto___58767__$1 = cljs.core.seq(seq__58605_58752);
if(temp__5735__auto___58767__$1){
var seq__58605_58768__$1 = temp__5735__auto___58767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58605_58768__$1)){
var c__4550__auto___58769 = cljs.core.chunk_first(seq__58605_58768__$1);
var G__58770 = cljs.core.chunk_rest(seq__58605_58768__$1);
var G__58771 = c__4550__auto___58769;
var G__58772 = cljs.core.count(c__4550__auto___58769);
var G__58773 = (0);
seq__58605_58752 = G__58770;
chunk__58608_58753 = G__58771;
count__58609_58754 = G__58772;
i__58610_58755 = G__58773;
continue;
} else {
var node_58774 = cljs.core.first(seq__58605_58768__$1);
var path_match_58775 = shadow.cljs.devtools.client.browser.match_paths(node_58774.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58775)){
var new_link_58776 = (function (){var G__58616 = node_58774.cloneNode(true);
G__58616.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58775),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58616;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58775], 0));

goog.dom.insertSiblingAfter(new_link_58776,node_58774);

goog.dom.removeNode(node_58774);


var G__58777 = cljs.core.next(seq__58605_58768__$1);
var G__58778 = null;
var G__58779 = (0);
var G__58780 = (0);
seq__58605_58752 = G__58777;
chunk__58608_58753 = G__58778;
count__58609_58754 = G__58779;
i__58610_58755 = G__58780;
continue;
} else {
var G__58781 = cljs.core.next(seq__58605_58768__$1);
var G__58782 = null;
var G__58783 = (0);
var G__58784 = (0);
seq__58605_58752 = G__58781;
chunk__58608_58753 = G__58782;
count__58609_58754 = G__58783;
i__58610_58755 = G__58784;
continue;
}
}
} else {
}
}
break;
}


var G__58785 = cljs.core.next(seq__58563__$1);
var G__58786 = null;
var G__58787 = (0);
var G__58788 = (0);
seq__58563 = G__58785;
chunk__58565 = G__58786;
count__58566 = G__58787;
i__58567 = G__58788;
continue;
} else {
var G__58789 = cljs.core.next(seq__58563__$1);
var G__58790 = null;
var G__58791 = (0);
var G__58792 = (0);
seq__58563 = G__58789;
chunk__58565 = G__58790;
count__58566 = G__58791;
i__58567 = G__58792;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__58617){
var map__58618 = p__58617;
var map__58618__$1 = (((((!((map__58618 == null))))?(((((map__58618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58618):map__58618);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__58620){
var map__58621 = p__58620;
var map__58621__$1 = (((((!((map__58621 == null))))?(((((map__58621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58621):map__58621);
var msg = map__58621__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58623){
var map__58624 = p__58623;
var map__58624__$1 = (((((!((map__58624 == null))))?(((((map__58624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58624):map__58624);
var src = map__58624__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__58626){
var map__58627 = p__58626;
var map__58627__$1 = (((((!((map__58627 == null))))?(((((map__58627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58627):map__58627);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__58629){
var map__58630 = p__58629;
var map__58630__$1 = (((((!((map__58630 == null))))?(((((map__58630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58630):map__58630);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__58632){
var map__58633 = p__58632;
var map__58633__$1 = (((((!((map__58633 == null))))?(((((map__58633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58633):map__58633);
var msg = map__58633__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__58635 = type;
var G__58635__$1 = (((G__58635 instanceof cljs.core.Keyword))?G__58635.fqn:null);
switch (G__58635__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__58636 = ["http",(cljs.core.truth_(shadow.cljs.devtools.client.env.ssl)?"s":null),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__58637 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__58638 = "POST";
var G__58639 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__58640 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__58636,G__58637,G__58638,G__58639,G__58640);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

(socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e58641){var e = e58641;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___58794 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___58794)){
var s_58795 = temp__5735__auto___58794;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_58795.onclose = (function (e){
return null;
}));

s_58795.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4109__auto__ = document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
