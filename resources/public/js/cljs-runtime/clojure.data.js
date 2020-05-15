goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__55137){
var vec__55138 = p__55137;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55138,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__55147 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55147,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55147,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55147,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__55171 = arguments.length;
switch (G__55171) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4208__auto__ = cljs.core.count(a);
var y__4209__auto__ = cljs.core.count(b);
return ((x__4208__auto__ > y__4209__auto__) ? x__4208__auto__ : y__4209__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

var clojure$data$EqualityPartition$equality_partition$dyn_55400 = (function (x){
var x__4422__auto__ = (((x == null))?null:x);
var m__4423__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4423__auto__.call(null,x));
} else {
var m__4420__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4420__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
});
/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
return clojure$data$EqualityPartition$equality_partition$dyn_55400(x);
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

var clojure$data$Diff$diff_similar$dyn_55409 = (function (a,b){
var x__4422__auto__ = (((a == null))?null:a);
var m__4423__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4423__auto__.call(null,a,b));
} else {
var m__4420__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4420__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
});
/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
return clojure$data$Diff$diff_similar$dyn_55409(a,b);
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__55197_55417 = clojure.data.equality_partition;
var G__55198_55418 = "null";
var G__55199_55419 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__55197_55417,G__55198_55418,G__55199_55419);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__55205_55420 = clojure.data.equality_partition;
var G__55206_55421 = "string";
var G__55207_55422 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__55205_55420,G__55206_55421,G__55207_55422);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__55208_55426 = clojure.data.equality_partition;
var G__55209_55427 = "number";
var G__55210_55428 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__55208_55426,G__55209_55427,G__55210_55428);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__55213_55435 = clojure.data.equality_partition;
var G__55214_55436 = "array";
var G__55215_55437 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__55213_55435,G__55214_55436,G__55215_55437);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__55216_55441 = clojure.data.equality_partition;
var G__55217_55442 = "function";
var G__55218_55443 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__55216_55441,G__55217_55442,G__55218_55443);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__55219_55450 = clojure.data.equality_partition;
var G__55220_55451 = "boolean";
var G__55221_55452 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__55219_55450,G__55220_55451,G__55221_55452);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__55225_55458 = clojure.data.equality_partition;
var G__55226_55459 = "_";
var G__55227_55460 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__55225_55458,G__55226_55459,G__55227_55460);
goog.object.set(clojure.data.Diff,"null",true);

var G__55238_55471 = clojure.data.diff_similar;
var G__55239_55472 = "null";
var G__55240_55473 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__55238_55471,G__55239_55472,G__55240_55473);

goog.object.set(clojure.data.Diff,"string",true);

var G__55241_55478 = clojure.data.diff_similar;
var G__55242_55479 = "string";
var G__55243_55480 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__55241_55478,G__55242_55479,G__55243_55480);

goog.object.set(clojure.data.Diff,"number",true);

var G__55247_55486 = clojure.data.diff_similar;
var G__55248_55487 = "number";
var G__55249_55488 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__55247_55486,G__55248_55487,G__55249_55488);

goog.object.set(clojure.data.Diff,"array",true);

var G__55258_55491 = clojure.data.diff_similar;
var G__55259_55492 = "array";
var G__55260_55493 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__55258_55491,G__55259_55492,G__55260_55493);

goog.object.set(clojure.data.Diff,"function",true);

var G__55275_55504 = clojure.data.diff_similar;
var G__55276_55505 = "function";
var G__55277_55506 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__55275_55504,G__55276_55505,G__55277_55506);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__55281_55521 = clojure.data.diff_similar;
var G__55282_55522 = "boolean";
var G__55283_55523 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__55281_55521,G__55282_55522,G__55283_55523);

goog.object.set(clojure.data.Diff,"_",true);

var G__55286_55527 = clojure.data.diff_similar;
var G__55287_55528 = "_";
var G__55288_55529 = (function (a,b){
var fexpr__55333 = (function (){var G__55334 = clojure.data.equality_partition(a);
var G__55334__$1 = (((G__55334 instanceof cljs.core.Keyword))?G__55334.fqn:null);
switch (G__55334__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55334__$1)].join('')));

}
})();
return (fexpr__55333.cljs$core$IFn$_invoke$arity$2 ? fexpr__55333.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__55333.call(null,a,b));
});
goog.object.set(G__55286_55527,G__55287_55528,G__55288_55529);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
