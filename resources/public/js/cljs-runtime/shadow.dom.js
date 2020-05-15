goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_57158 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_57158(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_57159 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_57159(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__56454 = coll;
var G__56455 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__56454,G__56455) : shadow.dom.lazy_native_coll_seq.call(null,G__56454,G__56455));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__56488 = arguments.length;
switch (G__56488) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__56499 = arguments.length;
switch (G__56499) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__56507 = arguments.length;
switch (G__56507) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__56517 = arguments.length;
switch (G__56517) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__56522 = arguments.length;
switch (G__56522) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__56524 = document;
var G__56525 = shadow.dom.dom_node(el);
return goog.dom.contains(G__56524,G__56525);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__56526 = shadow.dom.dom_node(parent);
var G__56527 = shadow.dom.dom_node(el);
return goog.dom.contains(G__56526,G__56527);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__56529 = shadow.dom.dom_node(el);
var G__56530 = cls;
return goog.dom.classlist.add(G__56529,G__56530);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__56532 = shadow.dom.dom_node(el);
var G__56533 = cls;
return goog.dom.classlist.remove(G__56532,G__56533);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__56535 = arguments.length;
switch (G__56535) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__56540 = shadow.dom.dom_node(el);
var G__56541 = cls;
return goog.dom.classlist.toggle(G__56540,G__56541);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e56551){if((e56551 instanceof Object)){
var e = e56551;
return console.log("didnt support attachEvent",el,e);
} else {
throw e56551;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__56560 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__56561 = null;
var count__56562 = (0);
var i__56563 = (0);
while(true){
if((i__56563 < count__56562)){
var el = chunk__56561.cljs$core$IIndexed$_nth$arity$2(null,i__56563);
var handler_57188__$1 = ((function (seq__56560,chunk__56561,count__56562,i__56563,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56560,chunk__56561,count__56562,i__56563,el))
;
var G__56573_57189 = el;
var G__56574_57190 = cljs.core.name(ev);
var G__56575_57191 = handler_57188__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56573_57189,G__56574_57190,G__56575_57191) : shadow.dom.dom_listen.call(null,G__56573_57189,G__56574_57190,G__56575_57191));


var G__57192 = seq__56560;
var G__57193 = chunk__56561;
var G__57194 = count__56562;
var G__57195 = (i__56563 + (1));
seq__56560 = G__57192;
chunk__56561 = G__57193;
count__56562 = G__57194;
i__56563 = G__57195;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56560);
if(temp__5735__auto__){
var seq__56560__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56560__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56560__$1);
var G__57196 = cljs.core.chunk_rest(seq__56560__$1);
var G__57197 = c__4550__auto__;
var G__57198 = cljs.core.count(c__4550__auto__);
var G__57199 = (0);
seq__56560 = G__57196;
chunk__56561 = G__57197;
count__56562 = G__57198;
i__56563 = G__57199;
continue;
} else {
var el = cljs.core.first(seq__56560__$1);
var handler_57201__$1 = ((function (seq__56560,chunk__56561,count__56562,i__56563,el,seq__56560__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56560,chunk__56561,count__56562,i__56563,el,seq__56560__$1,temp__5735__auto__))
;
var G__56578_57203 = el;
var G__56579_57204 = cljs.core.name(ev);
var G__56580_57205 = handler_57201__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56578_57203,G__56579_57204,G__56580_57205) : shadow.dom.dom_listen.call(null,G__56578_57203,G__56579_57204,G__56580_57205));


var G__57206 = cljs.core.next(seq__56560__$1);
var G__57207 = null;
var G__57208 = (0);
var G__57209 = (0);
seq__56560 = G__57206;
chunk__56561 = G__57207;
count__56562 = G__57208;
i__56563 = G__57209;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__56587 = arguments.length;
switch (G__56587) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__56591 = shadow.dom.dom_node(el);
var G__56592 = cljs.core.name(ev);
var G__56593 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56591,G__56592,G__56593) : shadow.dom.dom_listen.call(null,G__56591,G__56592,G__56593));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__56595 = shadow.dom.dom_node(el);
var G__56596 = cljs.core.name(ev);
var G__56597 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__56595,G__56596,G__56597) : shadow.dom.dom_listen_remove.call(null,G__56595,G__56596,G__56597));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__56599 = cljs.core.seq(events);
var chunk__56600 = null;
var count__56601 = (0);
var i__56602 = (0);
while(true){
if((i__56602 < count__56601)){
var vec__56611 = chunk__56600.cljs$core$IIndexed$_nth$arity$2(null,i__56602);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56611,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56611,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__57214 = seq__56599;
var G__57215 = chunk__56600;
var G__57216 = count__56601;
var G__57217 = (i__56602 + (1));
seq__56599 = G__57214;
chunk__56600 = G__57215;
count__56601 = G__57216;
i__56602 = G__57217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56599);
if(temp__5735__auto__){
var seq__56599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56599__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56599__$1);
var G__57219 = cljs.core.chunk_rest(seq__56599__$1);
var G__57220 = c__4550__auto__;
var G__57221 = cljs.core.count(c__4550__auto__);
var G__57222 = (0);
seq__56599 = G__57219;
chunk__56600 = G__57220;
count__56601 = G__57221;
i__56602 = G__57222;
continue;
} else {
var vec__56616 = cljs.core.first(seq__56599__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__57224 = cljs.core.next(seq__56599__$1);
var G__57225 = null;
var G__57226 = (0);
var G__57227 = (0);
seq__56599 = G__57224;
chunk__56600 = G__57225;
count__56601 = G__57226;
i__56602 = G__57227;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__56620 = cljs.core.seq(styles);
var chunk__56621 = null;
var count__56622 = (0);
var i__56623 = (0);
while(true){
if((i__56623 < count__56622)){
var vec__56644 = chunk__56621.cljs$core$IIndexed$_nth$arity$2(null,i__56623);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56644,(1),null);
var G__56649_57230 = dom;
var G__56650_57231 = cljs.core.name(k);
var G__56651_57232 = (((v == null))?"":v);
goog.style.setStyle(G__56649_57230,G__56650_57231,G__56651_57232);


var G__57234 = seq__56620;
var G__57235 = chunk__56621;
var G__57236 = count__56622;
var G__57237 = (i__56623 + (1));
seq__56620 = G__57234;
chunk__56621 = G__57235;
count__56622 = G__57236;
i__56623 = G__57237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56620);
if(temp__5735__auto__){
var seq__56620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56620__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56620__$1);
var G__57240 = cljs.core.chunk_rest(seq__56620__$1);
var G__57241 = c__4550__auto__;
var G__57242 = cljs.core.count(c__4550__auto__);
var G__57243 = (0);
seq__56620 = G__57240;
chunk__56621 = G__57241;
count__56622 = G__57242;
i__56623 = G__57243;
continue;
} else {
var vec__56655 = cljs.core.first(seq__56620__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56655,(1),null);
var G__56658_57245 = dom;
var G__56659_57246 = cljs.core.name(k);
var G__56660_57247 = (((v == null))?"":v);
goog.style.setStyle(G__56658_57245,G__56659_57246,G__56660_57247);


var G__57249 = cljs.core.next(seq__56620__$1);
var G__57250 = null;
var G__57251 = (0);
var G__57252 = (0);
seq__56620 = G__57249;
chunk__56621 = G__57250;
count__56622 = G__57251;
i__56623 = G__57252;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__56663_57254 = key;
var G__56663_57255__$1 = (((G__56663_57254 instanceof cljs.core.Keyword))?G__56663_57254.fqn:null);
switch (G__56663_57255__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_57259 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_57259,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_57259,"aria-");
}
})())){
el.setAttribute(ks_57259,value);
} else {
(el[ks_57259] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__56674 = shadow.dom.dom_node(el);
var G__56675 = cls;
return goog.dom.classlist.contains(G__56674,G__56675);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__56686){
var map__56687 = p__56686;
var map__56687__$1 = (((((!((map__56687 == null))))?(((((map__56687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56687):map__56687);
var props = map__56687__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56687__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__56689 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56689,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56689,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56689,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__56698 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__56698,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__56698;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__56706 = arguments.length;
switch (G__56706) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__56717){
var vec__56719 = p__56717;
var seq__56720 = cljs.core.seq(vec__56719);
var first__56721 = cljs.core.first(seq__56720);
var seq__56720__$1 = cljs.core.next(seq__56720);
var nn = first__56721;
var first__56721__$1 = cljs.core.first(seq__56720__$1);
var seq__56720__$2 = cljs.core.next(seq__56720__$1);
var np = first__56721__$1;
var nc = seq__56720__$2;
var node = vec__56719;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56724 = nn;
var G__56725 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__56724,G__56725) : create_fn.call(null,G__56724,G__56725));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56726 = nn;
var G__56727 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__56726,G__56727) : create_fn.call(null,G__56726,G__56727));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__56729 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56729,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56729,(1),null);
var seq__56732_57275 = cljs.core.seq(node_children);
var chunk__56733_57276 = null;
var count__56734_57277 = (0);
var i__56735_57278 = (0);
while(true){
if((i__56735_57278 < count__56734_57277)){
var child_struct_57279 = chunk__56733_57276.cljs$core$IIndexed$_nth$arity$2(null,i__56735_57278);
var children_57280 = shadow.dom.dom_node(child_struct_57279);
if(cljs.core.seq_QMARK_(children_57280)){
var seq__56751_57282 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_57280));
var chunk__56753_57283 = null;
var count__56754_57284 = (0);
var i__56755_57285 = (0);
while(true){
if((i__56755_57285 < count__56754_57284)){
var child_57287 = chunk__56753_57283.cljs$core$IIndexed$_nth$arity$2(null,i__56755_57285);
if(cljs.core.truth_(child_57287)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57287);


var G__57289 = seq__56751_57282;
var G__57290 = chunk__56753_57283;
var G__57291 = count__56754_57284;
var G__57292 = (i__56755_57285 + (1));
seq__56751_57282 = G__57289;
chunk__56753_57283 = G__57290;
count__56754_57284 = G__57291;
i__56755_57285 = G__57292;
continue;
} else {
var G__57293 = seq__56751_57282;
var G__57294 = chunk__56753_57283;
var G__57295 = count__56754_57284;
var G__57296 = (i__56755_57285 + (1));
seq__56751_57282 = G__57293;
chunk__56753_57283 = G__57294;
count__56754_57284 = G__57295;
i__56755_57285 = G__57296;
continue;
}
} else {
var temp__5735__auto___57298 = cljs.core.seq(seq__56751_57282);
if(temp__5735__auto___57298){
var seq__56751_57299__$1 = temp__5735__auto___57298;
if(cljs.core.chunked_seq_QMARK_(seq__56751_57299__$1)){
var c__4550__auto___57300 = cljs.core.chunk_first(seq__56751_57299__$1);
var G__57301 = cljs.core.chunk_rest(seq__56751_57299__$1);
var G__57302 = c__4550__auto___57300;
var G__57303 = cljs.core.count(c__4550__auto___57300);
var G__57304 = (0);
seq__56751_57282 = G__57301;
chunk__56753_57283 = G__57302;
count__56754_57284 = G__57303;
i__56755_57285 = G__57304;
continue;
} else {
var child_57305 = cljs.core.first(seq__56751_57299__$1);
if(cljs.core.truth_(child_57305)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57305);


var G__57306 = cljs.core.next(seq__56751_57299__$1);
var G__57307 = null;
var G__57308 = (0);
var G__57309 = (0);
seq__56751_57282 = G__57306;
chunk__56753_57283 = G__57307;
count__56754_57284 = G__57308;
i__56755_57285 = G__57309;
continue;
} else {
var G__57310 = cljs.core.next(seq__56751_57299__$1);
var G__57311 = null;
var G__57312 = (0);
var G__57313 = (0);
seq__56751_57282 = G__57310;
chunk__56753_57283 = G__57311;
count__56754_57284 = G__57312;
i__56755_57285 = G__57313;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_57280);
}


var G__57315 = seq__56732_57275;
var G__57316 = chunk__56733_57276;
var G__57317 = count__56734_57277;
var G__57318 = (i__56735_57278 + (1));
seq__56732_57275 = G__57315;
chunk__56733_57276 = G__57316;
count__56734_57277 = G__57317;
i__56735_57278 = G__57318;
continue;
} else {
var temp__5735__auto___57320 = cljs.core.seq(seq__56732_57275);
if(temp__5735__auto___57320){
var seq__56732_57321__$1 = temp__5735__auto___57320;
if(cljs.core.chunked_seq_QMARK_(seq__56732_57321__$1)){
var c__4550__auto___57322 = cljs.core.chunk_first(seq__56732_57321__$1);
var G__57323 = cljs.core.chunk_rest(seq__56732_57321__$1);
var G__57324 = c__4550__auto___57322;
var G__57325 = cljs.core.count(c__4550__auto___57322);
var G__57326 = (0);
seq__56732_57275 = G__57323;
chunk__56733_57276 = G__57324;
count__56734_57277 = G__57325;
i__56735_57278 = G__57326;
continue;
} else {
var child_struct_57327 = cljs.core.first(seq__56732_57321__$1);
var children_57328 = shadow.dom.dom_node(child_struct_57327);
if(cljs.core.seq_QMARK_(children_57328)){
var seq__56764_57330 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_57328));
var chunk__56766_57331 = null;
var count__56767_57332 = (0);
var i__56768_57333 = (0);
while(true){
if((i__56768_57333 < count__56767_57332)){
var child_57334 = chunk__56766_57331.cljs$core$IIndexed$_nth$arity$2(null,i__56768_57333);
if(cljs.core.truth_(child_57334)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57334);


var G__57337 = seq__56764_57330;
var G__57338 = chunk__56766_57331;
var G__57339 = count__56767_57332;
var G__57340 = (i__56768_57333 + (1));
seq__56764_57330 = G__57337;
chunk__56766_57331 = G__57338;
count__56767_57332 = G__57339;
i__56768_57333 = G__57340;
continue;
} else {
var G__57341 = seq__56764_57330;
var G__57342 = chunk__56766_57331;
var G__57343 = count__56767_57332;
var G__57344 = (i__56768_57333 + (1));
seq__56764_57330 = G__57341;
chunk__56766_57331 = G__57342;
count__56767_57332 = G__57343;
i__56768_57333 = G__57344;
continue;
}
} else {
var temp__5735__auto___57347__$1 = cljs.core.seq(seq__56764_57330);
if(temp__5735__auto___57347__$1){
var seq__56764_57348__$1 = temp__5735__auto___57347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56764_57348__$1)){
var c__4550__auto___57349 = cljs.core.chunk_first(seq__56764_57348__$1);
var G__57350 = cljs.core.chunk_rest(seq__56764_57348__$1);
var G__57351 = c__4550__auto___57349;
var G__57352 = cljs.core.count(c__4550__auto___57349);
var G__57353 = (0);
seq__56764_57330 = G__57350;
chunk__56766_57331 = G__57351;
count__56767_57332 = G__57352;
i__56768_57333 = G__57353;
continue;
} else {
var child_57354 = cljs.core.first(seq__56764_57348__$1);
if(cljs.core.truth_(child_57354)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57354);


var G__57356 = cljs.core.next(seq__56764_57348__$1);
var G__57357 = null;
var G__57358 = (0);
var G__57359 = (0);
seq__56764_57330 = G__57356;
chunk__56766_57331 = G__57357;
count__56767_57332 = G__57358;
i__56768_57333 = G__57359;
continue;
} else {
var G__57360 = cljs.core.next(seq__56764_57348__$1);
var G__57361 = null;
var G__57362 = (0);
var G__57363 = (0);
seq__56764_57330 = G__57360;
chunk__56766_57331 = G__57361;
count__56767_57332 = G__57362;
i__56768_57333 = G__57363;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_57328);
}


var G__57364 = cljs.core.next(seq__56732_57321__$1);
var G__57365 = null;
var G__57366 = (0);
var G__57367 = (0);
seq__56732_57275 = G__57364;
chunk__56733_57276 = G__57365;
count__56734_57277 = G__57366;
i__56735_57278 = G__57367;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__56783 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__56783);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__56786 = cljs.core.seq(node);
var chunk__56787 = null;
var count__56788 = (0);
var i__56789 = (0);
while(true){
if((i__56789 < count__56788)){
var n = chunk__56787.cljs$core$IIndexed$_nth$arity$2(null,i__56789);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57377 = seq__56786;
var G__57378 = chunk__56787;
var G__57379 = count__56788;
var G__57380 = (i__56789 + (1));
seq__56786 = G__57377;
chunk__56787 = G__57378;
count__56788 = G__57379;
i__56789 = G__57380;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56786);
if(temp__5735__auto__){
var seq__56786__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56786__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56786__$1);
var G__57381 = cljs.core.chunk_rest(seq__56786__$1);
var G__57382 = c__4550__auto__;
var G__57383 = cljs.core.count(c__4550__auto__);
var G__57384 = (0);
seq__56786 = G__57381;
chunk__56787 = G__57382;
count__56788 = G__57383;
i__56789 = G__57384;
continue;
} else {
var n = cljs.core.first(seq__56786__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57385 = cljs.core.next(seq__56786__$1);
var G__57386 = null;
var G__57387 = (0);
var G__57388 = (0);
seq__56786 = G__57385;
chunk__56787 = G__57386;
count__56788 = G__57387;
i__56789 = G__57388;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__56795 = shadow.dom.dom_node(new$);
var G__56796 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__56795,G__56796);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__56802 = arguments.length;
switch (G__56802) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__56809 = arguments.length;
switch (G__56809) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__56820 = arguments.length;
switch (G__56820) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57405 = arguments.length;
var i__4731__auto___57406 = (0);
while(true){
if((i__4731__auto___57406 < len__4730__auto___57405)){
args__4736__auto__.push((arguments[i__4731__auto___57406]));

var G__57407 = (i__4731__auto___57406 + (1));
i__4731__auto___57406 = G__57407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__56835_57409 = cljs.core.seq(nodes);
var chunk__56836_57410 = null;
var count__56837_57411 = (0);
var i__56838_57412 = (0);
while(true){
if((i__56838_57412 < count__56837_57411)){
var node_57414 = chunk__56836_57410.cljs$core$IIndexed$_nth$arity$2(null,i__56838_57412);
fragment.appendChild(shadow.dom._to_dom(node_57414));


var G__57415 = seq__56835_57409;
var G__57416 = chunk__56836_57410;
var G__57417 = count__56837_57411;
var G__57418 = (i__56838_57412 + (1));
seq__56835_57409 = G__57415;
chunk__56836_57410 = G__57416;
count__56837_57411 = G__57417;
i__56838_57412 = G__57418;
continue;
} else {
var temp__5735__auto___57419 = cljs.core.seq(seq__56835_57409);
if(temp__5735__auto___57419){
var seq__56835_57420__$1 = temp__5735__auto___57419;
if(cljs.core.chunked_seq_QMARK_(seq__56835_57420__$1)){
var c__4550__auto___57423 = cljs.core.chunk_first(seq__56835_57420__$1);
var G__57426 = cljs.core.chunk_rest(seq__56835_57420__$1);
var G__57427 = c__4550__auto___57423;
var G__57428 = cljs.core.count(c__4550__auto___57423);
var G__57429 = (0);
seq__56835_57409 = G__57426;
chunk__56836_57410 = G__57427;
count__56837_57411 = G__57428;
i__56838_57412 = G__57429;
continue;
} else {
var node_57432 = cljs.core.first(seq__56835_57420__$1);
fragment.appendChild(shadow.dom._to_dom(node_57432));


var G__57433 = cljs.core.next(seq__56835_57420__$1);
var G__57434 = null;
var G__57435 = (0);
var G__57436 = (0);
seq__56835_57409 = G__57433;
chunk__56836_57410 = G__57434;
count__56837_57411 = G__57435;
i__56838_57412 = G__57436;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq56832){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56832));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__56842_57440 = cljs.core.seq(scripts);
var chunk__56843_57441 = null;
var count__56844_57442 = (0);
var i__56845_57443 = (0);
while(true){
if((i__56845_57443 < count__56844_57442)){
var vec__56853_57445 = chunk__56843_57441.cljs$core$IIndexed$_nth$arity$2(null,i__56845_57443);
var script_tag_57446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56853_57445,(0),null);
var script_body_57447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56853_57445,(1),null);
eval(script_body_57447);


var G__57449 = seq__56842_57440;
var G__57450 = chunk__56843_57441;
var G__57451 = count__56844_57442;
var G__57452 = (i__56845_57443 + (1));
seq__56842_57440 = G__57449;
chunk__56843_57441 = G__57450;
count__56844_57442 = G__57451;
i__56845_57443 = G__57452;
continue;
} else {
var temp__5735__auto___57454 = cljs.core.seq(seq__56842_57440);
if(temp__5735__auto___57454){
var seq__56842_57455__$1 = temp__5735__auto___57454;
if(cljs.core.chunked_seq_QMARK_(seq__56842_57455__$1)){
var c__4550__auto___57456 = cljs.core.chunk_first(seq__56842_57455__$1);
var G__57457 = cljs.core.chunk_rest(seq__56842_57455__$1);
var G__57458 = c__4550__auto___57456;
var G__57459 = cljs.core.count(c__4550__auto___57456);
var G__57460 = (0);
seq__56842_57440 = G__57457;
chunk__56843_57441 = G__57458;
count__56844_57442 = G__57459;
i__56845_57443 = G__57460;
continue;
} else {
var vec__56856_57461 = cljs.core.first(seq__56842_57455__$1);
var script_tag_57462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56856_57461,(0),null);
var script_body_57463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56856_57461,(1),null);
eval(script_body_57463);


var G__57465 = cljs.core.next(seq__56842_57455__$1);
var G__57466 = null;
var G__57467 = (0);
var G__57468 = (0);
seq__56842_57440 = G__57465;
chunk__56843_57441 = G__57466;
count__56844_57442 = G__57467;
i__56845_57443 = G__57468;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__56860){
var vec__56861 = p__56860;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56861,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56861,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__56865 = shadow.dom.dom_node(el);
var G__56866 = cls;
return goog.dom.getAncestorByClass(G__56865,G__56866);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__56870 = arguments.length;
switch (G__56870) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__56872 = shadow.dom.dom_node(el);
var G__56873 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__56872,G__56873);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__56874 = shadow.dom.dom_node(el);
var G__56875 = cljs.core.name(tag);
var G__56876 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__56874,G__56875,G__56876);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__56880 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__56880);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__56881 = shadow.dom.dom_node(dom);
var G__56882 = value;
return goog.dom.forms.setValue(G__56881,G__56882);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__56883 = cljs.core.seq(style_keys);
var chunk__56884 = null;
var count__56885 = (0);
var i__56886 = (0);
while(true){
if((i__56886 < count__56885)){
var it = chunk__56884.cljs$core$IIndexed$_nth$arity$2(null,i__56886);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57480 = seq__56883;
var G__57481 = chunk__56884;
var G__57482 = count__56885;
var G__57483 = (i__56886 + (1));
seq__56883 = G__57480;
chunk__56884 = G__57481;
count__56885 = G__57482;
i__56886 = G__57483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56883);
if(temp__5735__auto__){
var seq__56883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56883__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56883__$1);
var G__57488 = cljs.core.chunk_rest(seq__56883__$1);
var G__57489 = c__4550__auto__;
var G__57490 = cljs.core.count(c__4550__auto__);
var G__57491 = (0);
seq__56883 = G__57488;
chunk__56884 = G__57489;
count__56885 = G__57490;
i__56886 = G__57491;
continue;
} else {
var it = cljs.core.first(seq__56883__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57492 = cljs.core.next(seq__56883__$1);
var G__57493 = null;
var G__57494 = (0);
var G__57495 = (0);
seq__56883 = G__57492;
chunk__56884 = G__57493;
count__56885 = G__57494;
i__56886 = G__57495;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k56888,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__56892 = k56888;
var G__56892__$1 = (((G__56892 instanceof cljs.core.Keyword))?G__56892.fqn:null);
switch (G__56892__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56888,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__56893){
var vec__56894 = p__56893;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56894,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56894,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56887){
var self__ = this;
var G__56887__$1 = this;
return (new cljs.core.RecordIter((0),G__56887__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (){var fexpr__56903 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
});
return fexpr__56903(this__4370__auto____$1);
})();
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56889,other56890){
var self__ = this;
var this56889__$1 = this;
return (((!((other56890 == null)))) && ((this56889__$1.constructor === other56890.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56889__$1.x,other56890.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56889__$1.y,other56890.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56889__$1.__extmap,other56890.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__56887){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__56910 = cljs.core.keyword_identical_QMARK_;
var expr__56911 = k__4382__auto__;
if(cljs.core.truth_((function (){var G__56913 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__56914 = expr__56911;
return (pred__56910.cljs$core$IFn$_invoke$arity$2 ? pred__56910.cljs$core$IFn$_invoke$arity$2(G__56913,G__56914) : pred__56910.call(null,G__56913,G__56914));
})())){
return (new shadow.dom.Coordinate(G__56887,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56916 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__56917 = expr__56911;
return (pred__56910.cljs$core$IFn$_invoke$arity$2 ? pred__56910.cljs$core$IFn$_invoke$arity$2(G__56916,G__56917) : pred__56910.call(null,G__56916,G__56917));
})())){
return (new shadow.dom.Coordinate(self__.x,G__56887,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__56887),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__56887){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__56887,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4380__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__56891){
var extmap__4413__auto__ = (function (){var G__56924 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56891,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__56891)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56924);
} else {
return G__56924;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__56891),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__56891),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__56929 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__56929);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__56934 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__56934);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__56937 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__56937);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k56942,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__56953 = k56942;
var G__56953__$1 = (((G__56953 instanceof cljs.core.Keyword))?G__56953.fqn:null);
switch (G__56953__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56942,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__56957){
var vec__56958 = p__56957;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56958,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56958,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56941){
var self__ = this;
var G__56941__$1 = this;
return (new cljs.core.RecordIter((0),G__56941__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (){var fexpr__56966 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
});
return fexpr__56966(this__4370__auto____$1);
})();
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56943,other56944){
var self__ = this;
var this56943__$1 = this;
return (((!((other56944 == null)))) && ((this56943__$1.constructor === other56944.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56943__$1.w,other56944.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56943__$1.h,other56944.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56943__$1.__extmap,other56944.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__56941){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__56970 = cljs.core.keyword_identical_QMARK_;
var expr__56971 = k__4382__auto__;
if(cljs.core.truth_((function (){var G__56973 = new cljs.core.Keyword(null,"w","w",354169001);
var G__56974 = expr__56971;
return (pred__56970.cljs$core$IFn$_invoke$arity$2 ? pred__56970.cljs$core$IFn$_invoke$arity$2(G__56973,G__56974) : pred__56970.call(null,G__56973,G__56974));
})())){
return (new shadow.dom.Size(G__56941,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56975 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__56976 = expr__56971;
return (pred__56970.cljs$core$IFn$_invoke$arity$2 ? pred__56970.cljs$core$IFn$_invoke$arity$2(G__56975,G__56976) : pred__56970.call(null,G__56975,G__56976));
})())){
return (new shadow.dom.Size(self__.w,G__56941,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__56941),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__56941){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__56941,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4380__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__56947){
var extmap__4413__auto__ = (function (){var G__56980 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56947,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__56947)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56980);
} else {
return G__56980;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__56947),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__56947),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__56982 = shadow.dom.dom_node(el);
return goog.style.getSize(G__56982);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__57515 = (i + (1));
var G__57516 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__57515;
ret = G__57516;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56989){
var vec__56990 = p__56989;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56990,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__56997 = arguments.length;
switch (G__56997) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__57007_57525 = new_node;
var G__57008_57526 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__57007_57525,G__57008_57526);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__57012_57527 = new_node;
var G__57013_57528 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__57012_57527,G__57013_57528);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__57532 = ps;
var G__57533 = (i + (1));
el__$1 = G__57532;
i = G__57533;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__57020 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__57020);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__57027 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__57027);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__57029 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__57029);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__57032 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57032,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57032,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57032,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__57036_57540 = cljs.core.seq(props);
var chunk__57037_57541 = null;
var count__57038_57542 = (0);
var i__57039_57543 = (0);
while(true){
if((i__57039_57543 < count__57038_57542)){
var vec__57048_57544 = chunk__57037_57541.cljs$core$IIndexed$_nth$arity$2(null,i__57039_57543);
var k_57545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57048_57544,(0),null);
var v_57546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57048_57544,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_57545);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57545),v_57546);


var G__57547 = seq__57036_57540;
var G__57548 = chunk__57037_57541;
var G__57549 = count__57038_57542;
var G__57550 = (i__57039_57543 + (1));
seq__57036_57540 = G__57547;
chunk__57037_57541 = G__57548;
count__57038_57542 = G__57549;
i__57039_57543 = G__57550;
continue;
} else {
var temp__5735__auto___57551 = cljs.core.seq(seq__57036_57540);
if(temp__5735__auto___57551){
var seq__57036_57552__$1 = temp__5735__auto___57551;
if(cljs.core.chunked_seq_QMARK_(seq__57036_57552__$1)){
var c__4550__auto___57553 = cljs.core.chunk_first(seq__57036_57552__$1);
var G__57554 = cljs.core.chunk_rest(seq__57036_57552__$1);
var G__57555 = c__4550__auto___57553;
var G__57556 = cljs.core.count(c__4550__auto___57553);
var G__57557 = (0);
seq__57036_57540 = G__57554;
chunk__57037_57541 = G__57555;
count__57038_57542 = G__57556;
i__57039_57543 = G__57557;
continue;
} else {
var vec__57054_57558 = cljs.core.first(seq__57036_57552__$1);
var k_57559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57054_57558,(0),null);
var v_57560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57054_57558,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_57559);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57559),v_57560);


var G__57565 = cljs.core.next(seq__57036_57552__$1);
var G__57566 = null;
var G__57567 = (0);
var G__57568 = (0);
seq__57036_57540 = G__57565;
chunk__57037_57541 = G__57566;
count__57038_57542 = G__57567;
i__57039_57543 = G__57568;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__57066 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57066,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57066,(1),null);
var seq__57069_57569 = cljs.core.seq(node_children);
var chunk__57071_57570 = null;
var count__57072_57571 = (0);
var i__57073_57572 = (0);
while(true){
if((i__57073_57572 < count__57072_57571)){
var child_struct_57573 = chunk__57071_57570.cljs$core$IIndexed$_nth$arity$2(null,i__57073_57572);
if((!((child_struct_57573 == null)))){
if(typeof child_struct_57573 === 'string'){
var text_57574 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57574),child_struct_57573].join(''));
} else {
var children_57575 = shadow.dom.svg_node(child_struct_57573);
if(cljs.core.seq_QMARK_(children_57575)){
var seq__57098_57576 = cljs.core.seq(children_57575);
var chunk__57100_57577 = null;
var count__57101_57578 = (0);
var i__57102_57579 = (0);
while(true){
if((i__57102_57579 < count__57101_57578)){
var child_57580 = chunk__57100_57577.cljs$core$IIndexed$_nth$arity$2(null,i__57102_57579);
if(cljs.core.truth_(child_57580)){
node.appendChild(child_57580);


var G__57581 = seq__57098_57576;
var G__57582 = chunk__57100_57577;
var G__57583 = count__57101_57578;
var G__57584 = (i__57102_57579 + (1));
seq__57098_57576 = G__57581;
chunk__57100_57577 = G__57582;
count__57101_57578 = G__57583;
i__57102_57579 = G__57584;
continue;
} else {
var G__57585 = seq__57098_57576;
var G__57586 = chunk__57100_57577;
var G__57587 = count__57101_57578;
var G__57588 = (i__57102_57579 + (1));
seq__57098_57576 = G__57585;
chunk__57100_57577 = G__57586;
count__57101_57578 = G__57587;
i__57102_57579 = G__57588;
continue;
}
} else {
var temp__5735__auto___57589 = cljs.core.seq(seq__57098_57576);
if(temp__5735__auto___57589){
var seq__57098_57590__$1 = temp__5735__auto___57589;
if(cljs.core.chunked_seq_QMARK_(seq__57098_57590__$1)){
var c__4550__auto___57591 = cljs.core.chunk_first(seq__57098_57590__$1);
var G__57592 = cljs.core.chunk_rest(seq__57098_57590__$1);
var G__57593 = c__4550__auto___57591;
var G__57594 = cljs.core.count(c__4550__auto___57591);
var G__57595 = (0);
seq__57098_57576 = G__57592;
chunk__57100_57577 = G__57593;
count__57101_57578 = G__57594;
i__57102_57579 = G__57595;
continue;
} else {
var child_57596 = cljs.core.first(seq__57098_57590__$1);
if(cljs.core.truth_(child_57596)){
node.appendChild(child_57596);


var G__57597 = cljs.core.next(seq__57098_57590__$1);
var G__57598 = null;
var G__57599 = (0);
var G__57600 = (0);
seq__57098_57576 = G__57597;
chunk__57100_57577 = G__57598;
count__57101_57578 = G__57599;
i__57102_57579 = G__57600;
continue;
} else {
var G__57602 = cljs.core.next(seq__57098_57590__$1);
var G__57603 = null;
var G__57604 = (0);
var G__57605 = (0);
seq__57098_57576 = G__57602;
chunk__57100_57577 = G__57603;
count__57101_57578 = G__57604;
i__57102_57579 = G__57605;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57575);
}
}


var G__57607 = seq__57069_57569;
var G__57608 = chunk__57071_57570;
var G__57609 = count__57072_57571;
var G__57610 = (i__57073_57572 + (1));
seq__57069_57569 = G__57607;
chunk__57071_57570 = G__57608;
count__57072_57571 = G__57609;
i__57073_57572 = G__57610;
continue;
} else {
var G__57611 = seq__57069_57569;
var G__57612 = chunk__57071_57570;
var G__57613 = count__57072_57571;
var G__57614 = (i__57073_57572 + (1));
seq__57069_57569 = G__57611;
chunk__57071_57570 = G__57612;
count__57072_57571 = G__57613;
i__57073_57572 = G__57614;
continue;
}
} else {
var temp__5735__auto___57615 = cljs.core.seq(seq__57069_57569);
if(temp__5735__auto___57615){
var seq__57069_57616__$1 = temp__5735__auto___57615;
if(cljs.core.chunked_seq_QMARK_(seq__57069_57616__$1)){
var c__4550__auto___57617 = cljs.core.chunk_first(seq__57069_57616__$1);
var G__57618 = cljs.core.chunk_rest(seq__57069_57616__$1);
var G__57619 = c__4550__auto___57617;
var G__57620 = cljs.core.count(c__4550__auto___57617);
var G__57621 = (0);
seq__57069_57569 = G__57618;
chunk__57071_57570 = G__57619;
count__57072_57571 = G__57620;
i__57073_57572 = G__57621;
continue;
} else {
var child_struct_57622 = cljs.core.first(seq__57069_57616__$1);
if((!((child_struct_57622 == null)))){
if(typeof child_struct_57622 === 'string'){
var text_57623 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57623),child_struct_57622].join(''));
} else {
var children_57624 = shadow.dom.svg_node(child_struct_57622);
if(cljs.core.seq_QMARK_(children_57624)){
var seq__57112_57625 = cljs.core.seq(children_57624);
var chunk__57114_57626 = null;
var count__57115_57627 = (0);
var i__57116_57628 = (0);
while(true){
if((i__57116_57628 < count__57115_57627)){
var child_57629 = chunk__57114_57626.cljs$core$IIndexed$_nth$arity$2(null,i__57116_57628);
if(cljs.core.truth_(child_57629)){
node.appendChild(child_57629);


var G__57631 = seq__57112_57625;
var G__57632 = chunk__57114_57626;
var G__57633 = count__57115_57627;
var G__57634 = (i__57116_57628 + (1));
seq__57112_57625 = G__57631;
chunk__57114_57626 = G__57632;
count__57115_57627 = G__57633;
i__57116_57628 = G__57634;
continue;
} else {
var G__57635 = seq__57112_57625;
var G__57636 = chunk__57114_57626;
var G__57637 = count__57115_57627;
var G__57638 = (i__57116_57628 + (1));
seq__57112_57625 = G__57635;
chunk__57114_57626 = G__57636;
count__57115_57627 = G__57637;
i__57116_57628 = G__57638;
continue;
}
} else {
var temp__5735__auto___57639__$1 = cljs.core.seq(seq__57112_57625);
if(temp__5735__auto___57639__$1){
var seq__57112_57640__$1 = temp__5735__auto___57639__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57112_57640__$1)){
var c__4550__auto___57641 = cljs.core.chunk_first(seq__57112_57640__$1);
var G__57642 = cljs.core.chunk_rest(seq__57112_57640__$1);
var G__57643 = c__4550__auto___57641;
var G__57644 = cljs.core.count(c__4550__auto___57641);
var G__57645 = (0);
seq__57112_57625 = G__57642;
chunk__57114_57626 = G__57643;
count__57115_57627 = G__57644;
i__57116_57628 = G__57645;
continue;
} else {
var child_57646 = cljs.core.first(seq__57112_57640__$1);
if(cljs.core.truth_(child_57646)){
node.appendChild(child_57646);


var G__57647 = cljs.core.next(seq__57112_57640__$1);
var G__57648 = null;
var G__57649 = (0);
var G__57650 = (0);
seq__57112_57625 = G__57647;
chunk__57114_57626 = G__57648;
count__57115_57627 = G__57649;
i__57116_57628 = G__57650;
continue;
} else {
var G__57651 = cljs.core.next(seq__57112_57640__$1);
var G__57652 = null;
var G__57653 = (0);
var G__57654 = (0);
seq__57112_57625 = G__57651;
chunk__57114_57626 = G__57652;
count__57115_57627 = G__57653;
i__57116_57628 = G__57654;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57624);
}
}


var G__57655 = cljs.core.next(seq__57069_57616__$1);
var G__57656 = null;
var G__57657 = (0);
var G__57658 = (0);
seq__57069_57569 = G__57655;
chunk__57071_57570 = G__57656;
count__57072_57571 = G__57657;
i__57073_57572 = G__57658;
continue;
} else {
var G__57659 = cljs.core.next(seq__57069_57616__$1);
var G__57660 = null;
var G__57661 = (0);
var G__57662 = (0);
seq__57069_57569 = G__57659;
chunk__57071_57570 = G__57660;
count__57072_57571 = G__57661;
i__57073_57572 = G__57662;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__57126_57663 = shadow.dom._to_svg;
var G__57127_57664 = "string";
var G__57128_57665 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__57126_57663,G__57127_57664,G__57128_57665);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__57135_57666 = shadow.dom._to_svg;
var G__57136_57667 = "null";
var G__57137_57668 = (function (_){
return null;
});
goog.object.set(G__57135_57666,G__57136_57667,G__57137_57668);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57669 = arguments.length;
var i__4731__auto___57670 = (0);
while(true){
if((i__4731__auto___57670 < len__4730__auto___57669)){
args__4736__auto__.push((arguments[i__4731__auto___57670]));

var G__57672 = (i__4731__auto___57670 + (1));
i__4731__auto___57670 = G__57672;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq57139){
var G__57140 = cljs.core.first(seq57139);
var seq57139__$1 = cljs.core.next(seq57139);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57140,seq57139__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__57143 = arguments.length;
switch (G__57143) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__57144_57676 = shadow.dom.dom_node(el);
var G__57145_57677 = cljs.core.name(event);
var G__57146_57678 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57144_57676,G__57145_57677,G__57146_57678) : shadow.dom.dom_listen.call(null,G__57144_57676,G__57145_57677,G__57146_57678));

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__54836__auto___57679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54837__auto__ = (function (){var switch__54500__auto__ = (function (state_57151){
var state_val_57152 = (state_57151[(1)]);
if((state_val_57152 === (1))){
var state_57151__$1 = state_57151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57151__$1,(2),once_or_cleanup);
} else {
if((state_val_57152 === (2))){
var inst_57148 = (state_57151[(2)]);
var inst_57149 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_57151__$1 = (function (){var statearr_57153 = state_57151;
(statearr_57153[(7)] = inst_57148);

return statearr_57153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57151__$1,inst_57149);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54501__auto__ = null;
var shadow$dom$state_machine__54501__auto____0 = (function (){
var statearr_57154 = [null,null,null,null,null,null,null,null];
(statearr_57154[(0)] = shadow$dom$state_machine__54501__auto__);

(statearr_57154[(1)] = (1));

return statearr_57154;
});
var shadow$dom$state_machine__54501__auto____1 = (function (state_57151){
while(true){
var ret_value__54502__auto__ = (function (){try{while(true){
var result__54503__auto__ = switch__54500__auto__(state_57151);
if(cljs.core.keyword_identical_QMARK_(result__54503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54503__auto__;
}
break;
}
}catch (e57155){if((e57155 instanceof Object)){
var ex__54504__auto__ = e57155;
var statearr_57156_57685 = state_57151;
(statearr_57156_57685[(5)] = ex__54504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57686 = state_57151;
state_57151 = G__57686;
continue;
} else {
return ret_value__54502__auto__;
}
break;
}
});
shadow$dom$state_machine__54501__auto__ = function(state_57151){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54501__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54501__auto____1.call(this,state_57151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54501__auto____0;
shadow$dom$state_machine__54501__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54501__auto____1;
return shadow$dom$state_machine__54501__auto__;
})()
})();
var state__54838__auto__ = (function (){var statearr_57157 = (f__54837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54837__auto__.cljs$core$IFn$_invoke$arity$0() : f__54837__auto__.call(null));
(statearr_57157[(6)] = c__54836__auto___57679);

return statearr_57157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54838__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
