goog.provide('todoapp.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
todoapp.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
todoapp.core.path_for = (function todoapp$core$path_for(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63675 = arguments.length;
var i__4731__auto___63676 = (0);
while(true){
if((i__4731__auto___63676 < len__4730__auto___63675)){
args__4736__auto__.push((arguments[i__4731__auto___63676]));

var G__63677 = (i__4731__auto___63676 + (1));
i__4731__auto___63676 = G__63677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return todoapp.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(todoapp.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__63628){
var vec__63629 = p__63628;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63629,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(todoapp.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(todoapp.core.router,route));
}
}));

(todoapp.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(todoapp.core.path_for.cljs$lang$applyTo = (function (seq63626){
var G__63627 = cljs.core.first(seq63626);
var seq63626__$1 = cljs.core.next(seq63626);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63627,seq63626__$1);
}));

todoapp.core.home_page = (function todoapp$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to TODO APP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for(new cljs.core.Keyword(null,"items","items",1031954938))], null),"tasks for today"], null)], null)], null)], null);
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (db,p__63632){
var vec__63633 = p__63632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63633,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"num-tasks","num-tasks",1316099064),(1)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (db,p__63636){
var vec__63637 = p__63636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63637,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63637,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-list","task-list",-975357719),index,new cljs.core.Keyword(null,"finished","finished",-1018867731)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-task","add-task",-913525549),(function (db,p__63641){
var vec__63642 = p__63641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63642,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63642,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719),(function (p1__63640_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__63640_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"task","task",-1476607993),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"finished","finished",-1018867731),false], 0)));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tasks","inc-tasks",-2026338634),(function (db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"num-tasks","num-tasks",1316099064),cljs.core.inc);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-completed","delete-completed",1753568848),(function (p__63646){
var map__63647 = p__63646;
var map__63647__$1 = (((((!((map__63647 == null))))?(((((map__63647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63647):map__63647);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63647__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63645_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__63645_SHARP_,new cljs.core.Keyword(null,"finished","finished",-1018867731)) === false;
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719)))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-num-tasks","update-num-tasks",-1035851658)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-num-tasks","update-num-tasks",-1035851658),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"num-tasks","num-tasks",1316099064),(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719))) + (1)));
}));
todoapp.core.query_tasks = (function todoapp$core$query_tasks(db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719));
});
todoapp.core.query_num = (function todoapp$core$query_num(db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"num-tasks","num-tasks",1316099064));
});
var G__63649_63678 = new cljs.core.Keyword(null,"get-tasklist","get-tasklist",-1308660125);
var G__63650_63679 = todoapp.core.query_tasks;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__63649_63678,G__63650_63679) : re_frame.core.reg_sub.call(null,G__63649_63678,G__63650_63679));
var G__63651_63680 = new cljs.core.Keyword(null,"get-numtasks","get-numtasks",-1719511033);
var G__63652_63681 = todoapp.core.query_num;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__63651_63680,G__63652_63681) : re_frame.core.reg_sub.call(null,G__63651_63680,G__63652_63681));
var task_name_63682 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
todoapp.core.add_todo = (function todoapp$core$add_todo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Please enter details of the task to insert.",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(task_name_63682),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63653_SHARP_){
return cljs.core.reset_BANG_(task_name_63682,p1__63653_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+ add a new task",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(task_name_63682),"")))){
var G__63654_63683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-task","add-task",-913525549),cljs.core.deref(task_name_63682)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63654_63683) : re_frame.core.dispatch.call(null,G__63654_63683));

var G__63655_63684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-tasks","inc-tasks",-2026338634)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63655_63684) : re_frame.core.dispatch.call(null,G__63655_63684));

return cljs.core.reset_BANG_(task_name_63682,"");
} else {
return cljs.core.List.EMPTY;
}
})], null)], null)], null)], null);
});
todoapp.core.todo_chkbx = (function todoapp$core$todo_chkbx(item_id,p__63656){
var map__63657 = p__63656;
var map__63657__$1 = (((((!((map__63657 == null))))?(((((map__63657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63657):map__63657);
var task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63657__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
var finished = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63657__$1,new cljs.core.Keyword(null,"finished","finished",-1018867731));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),finished,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),item_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63659) : re_frame.core.dispatch.call(null,G__63659));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"item","item",249373802),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null)], 0))], null),task], null)], null);
});
todoapp.core.delete_completed = (function todoapp$core$delete_completed(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"clear completed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-completed","delete-completed",1753568848)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63660) : re_frame.core.dispatch.call(null,G__63660));
})], null)], null);
});
var tasks_63685 = (function (){var G__63661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasklist","get-tasklist",-1308660125)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63661) : re_frame.core.subscribe.call(null,G__63661));
})();
var num_tasks_63686 = (function (){var G__63662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-numtasks","get-numtasks",-1719511033)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63662) : re_frame.core.subscribe.call(null,G__63662));
})();
todoapp.core.items_page = (function todoapp$core$items_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"You have ",(cljs.core.deref(num_tasks_63686) - (1))," tasks."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function todoapp$core$items_page_$_iter__63663(s__63664){
return (new cljs.core.LazySeq(null,(function (){
var s__63664__$1 = s__63664;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63664__$1);
if(temp__5735__auto__){
var s__63664__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63664__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__63664__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__63666 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__63665 = (0);
while(true){
if((i__63665 < size__4522__auto__)){
var vec__63667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__63665);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63667,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63667,(1),null);
cljs.core.chunk_append(b__63666,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.todo_chkbx,item_id,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_id], null)));

var G__63687 = (i__63665 + (1));
i__63665 = G__63687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63666),todoapp$core$items_page_$_iter__63663(cljs.core.chunk_rest(s__63664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63666),null);
}
} else {
var vec__63670 = cljs.core.first(s__63664__$2);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.todo_chkbx,item_id,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_id], null)),todoapp$core$items_page_$_iter__63663(cljs.core.rest(s__63664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.deref(tasks_63685)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.add_todo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.delete_completed], null)], null)], null);
});
todoapp.core.item_page = (function todoapp$core$item_page(){
return (function (){
var routing_data = reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["TASK ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for(new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of tasks"], null)], null)], null);
});
});
todoapp.core.about_page = (function todoapp$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About TODO APP"], null)], null);
});
});
todoapp.core.page_for = (function todoapp$core$page_for(route){
var G__63673 = route;
var G__63673__$1 = (((G__63673 instanceof cljs.core.Keyword))?G__63673.fqn:null);
switch (G__63673__$1) {
case "index":
return new cljs.core.Var(function(){return todoapp.core.home_page;},new cljs.core.Symbol("todoapp.core","home-page","todoapp.core/home-page",834170363,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"todoapp/core.cljs",16,1,27,27,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.home_page)?todoapp.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return todoapp.core.about_page;},new cljs.core.Symbol("todoapp.core","about-page","todoapp.core/about-page",1695359679,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"todoapp/core.cljs",17,1,145,145,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.about_page)?todoapp.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return todoapp.core.items_page;},new cljs.core.Symbol("todoapp.core","items-page","todoapp.core/items-page",-1492818316,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"todoapp/core.cljs",21,5,126,126,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.items_page)?todoapp.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return todoapp.core.item_page;},new cljs.core.Symbol("todoapp.core","item-page","todoapp.core/item-page",1359308578,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"todoapp/core.cljs",16,1,137,137,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.item_page)?todoapp.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63673__$1)].join('')));

}
});
todoapp.core.current_page = (function todoapp$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for(new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for(new cljs.core.Keyword(null,"about","about",1423892543))], null),"About todoapp"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"todoapp was generated by the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/reagent-project/reagent-template"], null),"Reagent Template"], null),"."], null)], null)], null);
});
});
todoapp.core.mount_root = (function todoapp$core$mount_root(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.current_page], null),document.getElementById("app"));

var G__63674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63674) : re_frame.core.dispatch.call(null,G__63674));
});
todoapp.core.init_BANG_ = (function todoapp$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(todoapp.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),todoapp.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(todoapp.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return todoapp.core.mount_root();
});

//# sourceMappingURL=todoapp.core.js.map
