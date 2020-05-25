goog.provide('todoapp.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
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
var len__4730__auto___80827 = arguments.length;
var i__4731__auto___80828 = (0);
while(true){
if((i__4731__auto___80828 < len__4730__auto___80827)){
args__4736__auto__.push((arguments[i__4731__auto___80828]));

var G__80829 = (i__4731__auto___80828 + (1));
i__4731__auto___80828 = G__80829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return todoapp.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(todoapp.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__80751){
var vec__80752 = p__80751;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80752,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(todoapp.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(todoapp.core.router,route));
}
}));

(todoapp.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(todoapp.core.path_for.cljs$lang$applyTo = (function (seq80749){
var G__80750 = cljs.core.first(seq80749);
var seq80749__$1 = cljs.core.next(seq80749);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80750,seq80749__$1);
}));

todoapp.core.home_page = (function todoapp$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to TODO APP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for(new cljs.core.Keyword(null,"items","items",1031954938))], null),"tasks for today"], null)], null)], null)], null);
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (p__80755,p__80756){
var map__80757 = p__80755;
var map__80757__$1 = (((((!((map__80757 == null))))?(((((map__80757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80757):map__80757);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80757__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__80758 = p__80756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80758,(0),null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719),(function (){var G__80762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80762) : re_frame.core.dispatch.call(null,G__80762));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"num-tasks","num-tasks",1316099064),(1)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-completed","delete-completed",1753568848),(function (db,p__80763){
var vec__80764 = p__80763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80764,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos/all",new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refresh-db","refresh-db",-1071873017)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-failure","generic-failure",-1291650518)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-one","delete-one",1994547204),(function (db,p__80767){
var vec__80768 = p__80767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80768,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80768,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refresh-db","refresh-db",-1071873017)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-failure","generic-failure",-1291650518)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (db,p__80771){
var vec__80772 = p__80771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80772,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80772,(1),null);
var completed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80772,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"completed","completed",-486056503),completed], null),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refresh-db","refresh-db",-1071873017)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-failure","generic-failure",-1291650518)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-task","add-task",-913525549),(function (db,p__80775){
var vec__80776 = p__80775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80776,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80776,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),name,new cljs.core.Keyword(null,"completed","completed",-486056503),false], null),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__80779 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__80779) : ajax.core.json_response_format.call(null,G__80779));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refresh-db","refresh-db",-1071873017)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-failure","generic-failure",-1291650518)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960),(function (p__80780,_){
var map__80781 = p__80780;
var map__80781__$1 = (((((!((map__80781 == null))))?(((((map__80781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80781):map__80781);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80781__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos",new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__80783 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__80783) : ajax.core.json_response_format.call(null,G__80783));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get","success-get",-793761520)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-failure","generic-failure",-1291650518)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refresh-db","refresh-db",-1071873017),(function (db,p__80784){
var vec__80785 = p__80784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80785,(0),null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719),(function (){var G__80788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80788) : re_frame.core.dispatch.call(null,G__80788));
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get","success-get",-793761520),(function (db,p__80789){
var vec__80790 = p__80789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80790,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80790,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"task-list","task-list",-975357719),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generic-failure","generic-failure",-1291650518),(function (db,p__80793){
var vec__80794 = p__80793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80794,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80794,(1),null);
alert(response);

return alert("failure");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tasks","inc-tasks",-2026338634),(function (db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"num-tasks","num-tasks",1316099064),cljs.core.inc);
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
var G__80797_80830 = new cljs.core.Keyword(null,"get-tasklist","get-tasklist",-1308660125);
var G__80798_80831 = todoapp.core.query_tasks;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__80797_80830,G__80798_80831) : re_frame.core.reg_sub.call(null,G__80797_80830,G__80798_80831));
var G__80799_80832 = new cljs.core.Keyword(null,"get-numtasks","get-numtasks",-1719511033);
var G__80800_80833 = todoapp.core.query_num;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__80799_80832,G__80800_80833) : re_frame.core.reg_sub.call(null,G__80799_80832,G__80800_80833));
var task_name_80834 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
todoapp.core.add_todo = (function todoapp$core$add_todo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Please enter details of the task to insert.",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(task_name_80834),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__80801_SHARP_){
return cljs.core.reset_BANG_(task_name_80834,p1__80801_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+ add a new task",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(task_name_80834),"")))){
var G__80802_80835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-task","add-task",-913525549),cljs.core.deref(task_name_80834)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80802_80835) : re_frame.core.dispatch.call(null,G__80802_80835));

var G__80803_80836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-tasks","inc-tasks",-2026338634)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80803_80836) : re_frame.core.dispatch.call(null,G__80803_80836));

return cljs.core.reset_BANG_(task_name_80834,"");
} else {
return cljs.core.List.EMPTY;
}
})], null)], null)], null)], null);
});
todoapp.core.todo_chkbx = (function todoapp$core$todo_chkbx(item_id,p__80804){
var map__80805 = p__80804;
var map__80805__$1 = (((((!((map__80805 == null))))?(((((map__80805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80805):map__80805);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80805__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80805__$1,new cljs.core.Keyword(null,"item","item",249373802));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80805__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__80807 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id,cljs.core.not(completed)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80807) : re_frame.core.dispatch.call(null,G__80807));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todoapp.core.path_for.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"item","item",249373802),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null)], 0))], null),item], null)], null);
});
todoapp.core.delete_one = (function todoapp$core$delete_one(p__80808){
var map__80809 = p__80808;
var map__80809__$1 = (((((!((map__80809 == null))))?(((((map__80809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80809):map__80809);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80809__$1,new cljs.core.Keyword(null,"_","_",1453416199));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__80811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-one","delete-one",1994547204),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80811) : re_frame.core.dispatch.call(null,G__80811));
})], null)], null)], null);
});
todoapp.core.delete_completed = (function todoapp$core$delete_completed(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"clear completed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__80812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-completed","delete-completed",1753568848)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80812) : re_frame.core.dispatch.call(null,G__80812));
})], null)], null);
});
todoapp.core.display_task = (function todoapp$core$display_task(item_id,task){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.todo_chkbx,item_id,task], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.delete_one,task], null)], null);
});
var tasks_80837 = (function (){var G__80813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasklist","get-tasklist",-1308660125)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__80813) : re_frame.core.subscribe.call(null,G__80813));
})();
var num_tasks_80838 = (function (){var G__80814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-numtasks","get-numtasks",-1719511033)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__80814) : re_frame.core.subscribe.call(null,G__80814));
})();
todoapp.core.items_page = (function todoapp$core$items_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"You have ",(cljs.core.deref(num_tasks_80838) - (1))," tasks."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function todoapp$core$items_page_$_iter__80815(s__80816){
return (new cljs.core.LazySeq(null,(function (){
var s__80816__$1 = s__80816;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80816__$1);
if(temp__5735__auto__){
var s__80816__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80816__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__80816__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__80818 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__80817 = (0);
while(true){
if((i__80817 < size__4522__auto__)){
var vec__80819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__80817);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80819,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80819,(1),null);
cljs.core.chunk_append(b__80818,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.display_task,item_id,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_id], null)));

var G__80839 = (i__80817 + (1));
i__80817 = G__80839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80818),todoapp$core$items_page_$_iter__80815(cljs.core.chunk_rest(s__80816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80818),null);
}
} else {
var vec__80822 = cljs.core.first(s__80816__$2);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80822,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80822,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.core.display_task,item_id,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_id], null)),todoapp$core$items_page_$_iter__80815(cljs.core.rest(s__80816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.deref(tasks_80837)));
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
var G__80825 = route;
var G__80825__$1 = (((G__80825 instanceof cljs.core.Keyword))?G__80825.fqn:null);
switch (G__80825__$1) {
case "index":
return new cljs.core.Var(function(){return todoapp.core.home_page;},new cljs.core.Symbol("todoapp.core","home-page","todoapp.core/home-page",834170363,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"todoapp/core.cljs",16,1,29,29,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.home_page)?todoapp.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return todoapp.core.about_page;},new cljs.core.Symbol("todoapp.core","about-page","todoapp.core/about-page",1695359679,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"todoapp/core.cljs",17,1,221,221,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.about_page)?todoapp.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return todoapp.core.items_page;},new cljs.core.Symbol("todoapp.core","items-page","todoapp.core/items-page",-1492818316,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"todoapp/core.cljs",19,3,202,202,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.items_page)?todoapp.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return todoapp.core.item_page;},new cljs.core.Symbol("todoapp.core","item-page","todoapp.core/item-page",1359308578,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todoapp.core","todoapp.core",-205912307,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"todoapp/core.cljs",16,1,213,213,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todoapp.core.item_page)?todoapp.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80825__$1)].join('')));

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

var G__80826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__80826) : re_frame.core.dispatch.call(null,G__80826));
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
