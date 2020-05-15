goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.client_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5739__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5739__auto__ == null)){
return null;
} else {
var tcp = temp__5739__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5739__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5739__auto__ == null)){
return null;
} else {
var ws = temp__5739__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),(function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
}));
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__65528){
var map__65529 = p__65528;
var map__65529__$1 = (((((!((map__65529 == null))))?(((((map__65529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65529):map__65529);
var msg = map__65529__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__65537){
var map__65539 = p__65537;
var map__65539__$1 = (((((!((map__65539 == null))))?(((((map__65539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65539):map__65539);
var msg = map__65539__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65539__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__65544 = repl_state;
var map__65544__$1 = (((((!((map__65544 == null))))?(((((map__65544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65544):map__65544);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65544__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__65550_65745 = cljs.core.seq(repl_sources);
var chunk__65552_65746 = null;
var count__65553_65747 = (0);
var i__65554_65748 = (0);
while(true){
if((i__65554_65748 < count__65553_65747)){
var map__65567_65750 = chunk__65552_65746.cljs$core$IIndexed$_nth$arity$2(null,i__65554_65748);
var map__65567_65751__$1 = (((((!((map__65567_65750 == null))))?(((((map__65567_65750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65567_65750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65567_65750):map__65567_65750);
var src_65752 = map__65567_65751__$1;
var output_name_65753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65567_65751__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_65753)))){
shadow.cljs.devtools.client.node.closure_import(output_name_65753);


var G__65758 = seq__65550_65745;
var G__65759 = chunk__65552_65746;
var G__65760 = count__65553_65747;
var G__65761 = (i__65554_65748 + (1));
seq__65550_65745 = G__65758;
chunk__65552_65746 = G__65759;
count__65553_65747 = G__65760;
i__65554_65748 = G__65761;
continue;
} else {
var G__65762 = seq__65550_65745;
var G__65763 = chunk__65552_65746;
var G__65764 = count__65553_65747;
var G__65765 = (i__65554_65748 + (1));
seq__65550_65745 = G__65762;
chunk__65552_65746 = G__65763;
count__65553_65747 = G__65764;
i__65554_65748 = G__65765;
continue;
}
} else {
var temp__5735__auto___65766 = cljs.core.seq(seq__65550_65745);
if(temp__5735__auto___65766){
var seq__65550_65767__$1 = temp__5735__auto___65766;
if(cljs.core.chunked_seq_QMARK_(seq__65550_65767__$1)){
var c__4550__auto___65768 = cljs.core.chunk_first(seq__65550_65767__$1);
var G__65769 = cljs.core.chunk_rest(seq__65550_65767__$1);
var G__65770 = c__4550__auto___65768;
var G__65771 = cljs.core.count(c__4550__auto___65768);
var G__65772 = (0);
seq__65550_65745 = G__65769;
chunk__65552_65746 = G__65770;
count__65553_65747 = G__65771;
i__65554_65748 = G__65772;
continue;
} else {
var map__65575_65773 = cljs.core.first(seq__65550_65767__$1);
var map__65575_65774__$1 = (((((!((map__65575_65773 == null))))?(((((map__65575_65773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65575_65773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65575_65773):map__65575_65773);
var src_65775 = map__65575_65774__$1;
var output_name_65776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65575_65774__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_65776)))){
shadow.cljs.devtools.client.node.closure_import(output_name_65776);


var G__65777 = cljs.core.next(seq__65550_65767__$1);
var G__65778 = null;
var G__65779 = (0);
var G__65780 = (0);
seq__65550_65745 = G__65777;
chunk__65552_65746 = G__65778;
count__65553_65747 = G__65779;
i__65554_65748 = G__65780;
continue;
} else {
var G__65781 = cljs.core.next(seq__65550_65767__$1);
var G__65782 = null;
var G__65783 = (0);
var G__65784 = (0);
seq__65550_65745 = G__65781;
chunk__65552_65746 = G__65782;
count__65553_65747 = G__65783;
i__65554_65748 = G__65784;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__65586){
var map__65587 = p__65586;
var map__65587__$1 = (((((!((map__65587 == null))))?(((((map__65587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65587):map__65587);
var msg = map__65587__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65587__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
}),shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__65592){
var map__65593 = p__65592;
var map__65593__$1 = (((((!((map__65593 == null))))?(((((map__65593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65593):map__65593);
var msg = map__65593__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65593__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__65611){
var map__65612 = p__65611;
var map__65612__$1 = (((((!((map__65612 == null))))?(((((map__65612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65612):map__65612);
var msg = map__65612__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65612__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65612__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__65628_65789 = cljs.core.seq(sources);
var chunk__65629_65790 = null;
var count__65630_65791 = (0);
var i__65631_65792 = (0);
while(true){
if((i__65631_65792 < count__65630_65791)){
var map__65651_65793 = chunk__65629_65790.cljs$core$IIndexed$_nth$arity$2(null,i__65631_65792);
var map__65651_65794__$1 = (((((!((map__65651_65793 == null))))?(((((map__65651_65793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65651_65793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65651_65793):map__65651_65793);
var src_65795 = map__65651_65794__$1;
var provides_65796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65651_65794__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_65797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65651_65794__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4120__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_65797)));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_65796);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_65797);
} else {
}


var G__65798 = seq__65628_65789;
var G__65799 = chunk__65629_65790;
var G__65800 = count__65630_65791;
var G__65801 = (i__65631_65792 + (1));
seq__65628_65789 = G__65798;
chunk__65629_65790 = G__65799;
count__65630_65791 = G__65800;
i__65631_65792 = G__65801;
continue;
} else {
var temp__5735__auto___65802 = cljs.core.seq(seq__65628_65789);
if(temp__5735__auto___65802){
var seq__65628_65803__$1 = temp__5735__auto___65802;
if(cljs.core.chunked_seq_QMARK_(seq__65628_65803__$1)){
var c__4550__auto___65804 = cljs.core.chunk_first(seq__65628_65803__$1);
var G__65805 = cljs.core.chunk_rest(seq__65628_65803__$1);
var G__65806 = c__4550__auto___65804;
var G__65807 = cljs.core.count(c__4550__auto___65804);
var G__65808 = (0);
seq__65628_65789 = G__65805;
chunk__65629_65790 = G__65806;
count__65630_65791 = G__65807;
i__65631_65792 = G__65808;
continue;
} else {
var map__65657_65810 = cljs.core.first(seq__65628_65803__$1);
var map__65657_65811__$1 = (((((!((map__65657_65810 == null))))?(((((map__65657_65810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65657_65810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65657_65810):map__65657_65810);
var src_65812 = map__65657_65811__$1;
var provides_65813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65657_65811__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_65814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65657_65811__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4120__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_65814)));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_65813);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_65814);
} else {
}


var G__65818 = cljs.core.next(seq__65628_65803__$1);
var G__65819 = null;
var G__65820 = (0);
var G__65821 = (0);
seq__65628_65789 = G__65818;
chunk__65629_65790 = G__65819;
count__65630_65791 = G__65820;
i__65631_65792 = G__65821;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e65627){var e = e65627;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__65664){
var map__65666 = p__65664;
var map__65666__$1 = (((((!((map__65666 == null))))?(((((map__65666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65666):map__65666);
var msg = map__65666__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65666__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65666__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__65671 = info;
var map__65671__$1 = (((((!((map__65671 == null))))?(((((map__65671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65671):map__65671);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65671__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65671__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$node$build_complete_$_iter__65673(s__65674){
return (new cljs.core.LazySeq(null,(function (){
var s__65674__$1 = s__65674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65674__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__65682 = cljs.core.first(xs__6292__auto__);
var map__65682__$1 = (((((!((map__65682 == null))))?(((((map__65682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65682):map__65682);
var src = map__65682__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__65674__$1,map__65682,map__65682__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65671,map__65671__$1,sources,compiled,map__65666,map__65666__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__65673_$_iter__65675(s__65676){
return (new cljs.core.LazySeq(null,((function (s__65674__$1,map__65682,map__65682__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65671,map__65671__$1,sources,compiled,map__65666,map__65666__$1,msg,info,reload_info){
return (function (){
var s__65676__$1 = s__65676;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65676__$1);
if(temp__5735__auto____$1){
var s__65676__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65676__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65676__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65678 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65677 = (0);
while(true){
if((i__65677 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__65677);
cljs.core.chunk_append(b__65678,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65823 = (i__65677 + (1));
i__65677 = G__65823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65678),shadow$cljs$devtools$client$node$build_complete_$_iter__65673_$_iter__65675(cljs.core.chunk_rest(s__65676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65678),null);
}
} else {
var warning = cljs.core.first(s__65676__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__65673_$_iter__65675(cljs.core.rest(s__65676__$2)));
}
} else {
return null;
}
break;
}
});})(s__65674__$1,map__65682,map__65682__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65671,map__65671__$1,sources,compiled,map__65666,map__65666__$1,msg,info,reload_info))
,null,null));
});})(s__65674__$1,map__65682,map__65682__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65671,map__65671__$1,sources,compiled,map__65666,map__65666__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__65673(cljs.core.rest(s__65674__$1)));
} else {
var G__65827 = cljs.core.rest(s__65674__$1);
s__65674__$1 = G__65827;
continue;
}
} else {
var G__65828 = cljs.core.rest(s__65674__$1);
s__65674__$1 = G__65828;
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
if(cljs.core.truth_((function (){var and__4109__auto__ = shadow.cljs.devtools.client.env.autoload;
if(cljs.core.truth_(and__4109__auto__)){
var or__4120__auto__ = cljs.core.empty_QMARK_(warnings);
if(or__4120__auto__){
return or__4120__auto__;
} else {
return shadow.cljs.devtools.client.env.ignore_warnings;
}
} else {
return and__4109__auto__;
}
})())){
var map__65692 = info;
var map__65692__$1 = (((((!((map__65692 == null))))?(((((map__65692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65692):map__65692);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65692__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65692__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__65698){
var map__65700 = p__65698;
var map__65700__$1 = (((((!((map__65700 == null))))?(((((map__65700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65700):map__65700);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65700__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65700__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65704){
var map__65705 = p__65704;
var map__65705__$1 = (((((!((map__65705 == null))))?(((((map__65705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65705):map__65705);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65705__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__65709 = cljs.core.seq(files_to_require);
var chunk__65710 = null;
var count__65711 = (0);
var i__65712 = (0);
while(true){
if((i__65712 < count__65711)){
var src = chunk__65710.cljs$core$IIndexed$_nth$arity$2(null,i__65712);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__65830 = seq__65709;
var G__65831 = chunk__65710;
var G__65832 = count__65711;
var G__65833 = (i__65712 + (1));
seq__65709 = G__65830;
chunk__65710 = G__65831;
count__65711 = G__65832;
i__65712 = G__65833;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65709);
if(temp__5735__auto__){
var seq__65709__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65709__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65709__$1);
var G__65834 = cljs.core.chunk_rest(seq__65709__$1);
var G__65835 = c__4550__auto__;
var G__65836 = cljs.core.count(c__4550__auto__);
var G__65837 = (0);
seq__65709 = G__65834;
chunk__65710 = G__65835;
count__65711 = G__65836;
i__65712 = G__65837;
continue;
} else {
var src = cljs.core.first(seq__65709__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__65838 = cljs.core.next(seq__65709__$1);
var G__65839 = null;
var G__65840 = (0);
var G__65841 = (0);
seq__65709 = G__65838;
chunk__65710 = G__65839;
count__65711 = G__65840;
i__65712 = G__65841;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__65721){
var map__65723 = p__65721;
var map__65723__$1 = (((((!((map__65723 == null))))?(((((map__65723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65723):map__65723);
var msg = map__65723__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65723__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__65726 = type;
var G__65726__$1 = (((G__65726 instanceof cljs.core.Keyword))?G__65726.fqn:null);
switch (G__65726__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-configure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "build-failure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",(function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
}));

client.on("unexpected-response",(function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
}));

client.on("message",(function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e65730){var e = e65730;
return console.error("failed to process message",data,e);
}}));

client.on("close",(function (){
return console.log("REPL client disconnected");
}));

return client.on("error",(function (err){
return console.log("REPL client error",err);
}));
});
if(cljs.core.truth_(shadow.cljs.devtools.client.env.enabled)){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
