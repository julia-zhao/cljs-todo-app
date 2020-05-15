goog.provide('reitit.exception');
goog.require('cljs.core');
goog.require('clojure.string');
reitit.exception.fail_BANG_ = (function reitit$exception$fail_BANG_(var_args){
var G__64585 = arguments.length;
switch (G__64585) {
case 1:
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));

(reitit.exception.fail_BANG_.cljs$lang$maxFixedArity = 2);

reitit.exception.get_message = (function reitit$exception$get_message(e){
return cljs.core.ex_message(e);
});
if((typeof reitit !== 'undefined') && (typeof reitit.exception !== 'undefined') && (typeof reitit.exception.format_exception !== 'undefined')){
} else {
reitit.exception.format_exception = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64604 = cljs.core.get_global_hierarchy;
return (fexpr__64604.cljs$core$IFn$_invoke$arity$0 ? fexpr__64604.cljs$core$IFn$_invoke$arity$0() : fexpr__64604.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.exception","format-exception"),(function (type,_,___$1){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
reitit.exception.exception = (function reitit$exception$exception(e){
var data = cljs.core.ex_data(e);
var message = (function (){var G__64612 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
var G__64613 = reitit.exception.get_message(e);
var G__64614 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data);
return (reitit.exception.format_exception.cljs$core$IFn$_invoke$arity$3 ? reitit.exception.format_exception.cljs$core$IFn$_invoke$arity$3(G__64612,G__64613,G__64614) : reitit.exception.format_exception.call(null,G__64612,G__64613,G__64614));
})();
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4120__auto__ = data;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("reitit.exception","cause","reitit.exception/cause",2130128734),e));
});
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,message,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),(cljs.core.truth_(data)?["\n\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join(''):null)].join('');
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),(function (_,___$1,conflicts){
var resolve_str = (function reitit$exception$resolve_str(path,route_data){
return [(cljs.core.truth_(new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data))?"   ":"-> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not_empty(cljs.core.select_keys(route_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conflicting","conflicting",2003828416)], null))))].join('');
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__64648){
var vec__64652 = p__64648;
var vec__64655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64652,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64655,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64655,(1),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64652,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolve_str(path,route_data)),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__64670){
var vec__64674 = p__64670;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64674,(0),null);
var route_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64674,(1),null);
return resolve_str(path__$1,route_data__$1);
}),vals)),"\n\n"].join('');
}),conflicts));
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),(function (_,___$1,conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__64681){
var vec__64684 = p__64681;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64684,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64684,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals)),"\n"].join('');
}),conflicts));
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),(function (_,___$1,data){
return ["Error merging route-data\n\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
}));

//# sourceMappingURL=reitit.exception.js.map
