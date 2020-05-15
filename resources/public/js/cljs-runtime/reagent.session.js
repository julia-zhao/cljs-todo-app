goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64941 = arguments.length;
var i__4731__auto___64942 = (0);
while(true){
if((i__4731__auto___64942 < len__4730__auto___64941)){
args__4736__auto__.push((arguments[i__4731__auto___64942]));

var G__64943 = (i__4731__auto___64942 + (1));
i__4731__auto___64942 = G__64943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__64803){
var vec__64804 = p__64803;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64804,(0),null);
var temp_a = cljs.core.deref(reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq64788){
var G__64789 = cljs.core.first(seq64788);
var seq64788__$1 = cljs.core.next(seq64788);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64789,seq64788__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64952 = arguments.length;
var i__4731__auto___64954 = (0);
while(true){
if((i__4731__auto___64954 < len__4730__auto___64952)){
args__4736__auto__.push((arguments[i__4731__auto___64954]));

var G__64955 = (i__4731__auto___64954 + (1));
i__4731__auto___64954 = G__64955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__64820){
var vec__64822 = p__64820;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64822,(0),null);
var result = cljs.core.deref(reagent.session.cursor(ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq64810){
var G__64811 = cljs.core.first(seq64810);
var seq64810__$1 = cljs.core.next(seq64810);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64811,seq64810__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64960 = arguments.length;
var i__4731__auto___64961 = (0);
while(true){
if((i__4731__auto___64961 < len__4730__auto___64960)){
args__4736__auto__.push((arguments[i__4731__auto___64961]));

var G__64962 = (i__4731__auto___64961 + (1));
i__4731__auto___64961 = G__64962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq64829){
var G__64830 = cljs.core.first(seq64829);
var seq64829__$1 = cljs.core.next(seq64829);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64830,seq64829__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64970 = arguments.length;
var i__4731__auto___64971 = (0);
while(true){
if((i__4731__auto___64971 < len__4730__auto___64970)){
args__4736__auto__.push((arguments[i__4731__auto___64971]));

var G__64972 = (i__4731__auto___64971 + (1));
i__4731__auto___64971 = G__64972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__64858){
var vec__64860 = p__64858;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64860,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq64850){
var G__64851 = cljs.core.first(seq64850);
var seq64850__$1 = cljs.core.next(seq64850);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64851,seq64850__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64976 = arguments.length;
var i__4731__auto___64978 = (0);
while(true){
if((i__4731__auto___64978 < len__4730__auto___64976)){
args__4736__auto__.push((arguments[i__4731__auto___64978]));

var G__64982 = (i__4731__auto___64978 + (1));
i__4731__auto___64978 = G__64982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__64888){
var vec__64889 = p__64888;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64889,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq64875){
var G__64876 = cljs.core.first(seq64875);
var seq64875__$1 = cljs.core.next(seq64875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64876,seq64875__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64988 = arguments.length;
var i__4731__auto___64989 = (0);
while(true){
if((i__4731__auto___64989 < len__4730__auto___64988)){
args__4736__auto__.push((arguments[i__4731__auto___64989]));

var G__64991 = (i__4731__auto___64989 + (1));
i__4731__auto___64989 = G__64991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__64896_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__64896_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq64900){
var G__64901 = cljs.core.first(seq64900);
var seq64900__$1 = cljs.core.next(seq64900);
var G__64903 = cljs.core.first(seq64900__$1);
var seq64900__$2 = cljs.core.next(seq64900__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64901,G__64903,seq64900__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64994 = arguments.length;
var i__4731__auto___64995 = (0);
while(true){
if((i__4731__auto___64995 < len__4730__auto___64994)){
args__4736__auto__.push((arguments[i__4731__auto___64995]));

var G__64996 = (i__4731__auto___64995 + (1));
i__4731__auto___64995 = G__64996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__64917_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__64917_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq64919){
var G__64921 = cljs.core.first(seq64919);
var seq64919__$1 = cljs.core.next(seq64919);
var G__64922 = cljs.core.first(seq64919__$1);
var seq64919__$2 = cljs.core.next(seq64919__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64921,G__64922,seq64919__$2);
}));


//# sourceMappingURL=reagent.session.js.map
