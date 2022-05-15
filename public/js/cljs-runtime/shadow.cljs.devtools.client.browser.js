goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___23124 = arguments.length;
var i__4865__auto___23125 = (0);
while(true){
if((i__4865__auto___23125 < len__4864__auto___23124)){
args__4870__auto__.push((arguments[i__4865__auto___23125]));

var G__23126 = (i__4865__auto___23125 + (1));
i__4865__auto___23125 = G__23126;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22644){
var G__22645 = cljs.core.first(seq22644);
var seq22644__$1 = cljs.core.next(seq22644);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22645,seq22644__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22647 = cljs.core.seq(sources);
var chunk__22648 = null;
var count__22649 = (0);
var i__22650 = (0);
while(true){
if((i__22650 < count__22649)){
var map__22663 = chunk__22648.cljs$core$IIndexed$_nth$arity$2(null,i__22650);
var map__22663__$1 = cljs.core.__destructure_map(map__22663);
var src = map__22663__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22664){var e_23127 = e22664;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23127);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23127.message)].join('')));
}

var G__23128 = seq__22647;
var G__23129 = chunk__22648;
var G__23130 = count__22649;
var G__23131 = (i__22650 + (1));
seq__22647 = G__23128;
chunk__22648 = G__23129;
count__22649 = G__23130;
i__22650 = G__23131;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22647);
if(temp__5753__auto__){
var seq__22647__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22647__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22647__$1);
var G__23132 = cljs.core.chunk_rest(seq__22647__$1);
var G__23133 = c__4679__auto__;
var G__23134 = cljs.core.count(c__4679__auto__);
var G__23135 = (0);
seq__22647 = G__23132;
chunk__22648 = G__23133;
count__22649 = G__23134;
i__22650 = G__23135;
continue;
} else {
var map__22665 = cljs.core.first(seq__22647__$1);
var map__22665__$1 = cljs.core.__destructure_map(map__22665);
var src = map__22665__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22669){var e_23136 = e22669;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23136);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23136.message)].join('')));
}

var G__23137 = cljs.core.next(seq__22647__$1);
var G__23138 = null;
var G__23139 = (0);
var G__23140 = (0);
seq__22647 = G__23137;
chunk__22648 = G__23138;
count__22649 = G__23139;
i__22650 = G__23140;
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
return null;
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
var seq__22671 = cljs.core.seq(js_requires);
var chunk__22672 = null;
var count__22673 = (0);
var i__22674 = (0);
while(true){
if((i__22674 < count__22673)){
var js_ns = chunk__22672.cljs$core$IIndexed$_nth$arity$2(null,i__22674);
var require_str_23141 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23141);


var G__23142 = seq__22671;
var G__23143 = chunk__22672;
var G__23144 = count__22673;
var G__23145 = (i__22674 + (1));
seq__22671 = G__23142;
chunk__22672 = G__23143;
count__22673 = G__23144;
i__22674 = G__23145;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22671);
if(temp__5753__auto__){
var seq__22671__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22671__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22671__$1);
var G__23146 = cljs.core.chunk_rest(seq__22671__$1);
var G__23147 = c__4679__auto__;
var G__23148 = cljs.core.count(c__4679__auto__);
var G__23149 = (0);
seq__22671 = G__23146;
chunk__22672 = G__23147;
count__22673 = G__23148;
i__22674 = G__23149;
continue;
} else {
var js_ns = cljs.core.first(seq__22671__$1);
var require_str_23150 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23150);


var G__23151 = cljs.core.next(seq__22671__$1);
var G__23152 = null;
var G__23153 = (0);
var G__23154 = (0);
seq__22671 = G__23151;
chunk__22672 = G__23152;
count__22673 = G__23153;
i__22674 = G__23154;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22677){
var map__22678 = p__22677;
var map__22678__$1 = cljs.core.__destructure_map(map__22678);
var msg = map__22678__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22679(s__22680){
return (new cljs.core.LazySeq(null,(function (){
var s__22680__$1 = s__22680;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22680__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__22685 = cljs.core.first(xs__6308__auto__);
var map__22685__$1 = cljs.core.__destructure_map(map__22685);
var src = map__22685__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__22680__$1,map__22685,map__22685__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22678,map__22678__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22679_$_iter__22681(s__22682){
return (new cljs.core.LazySeq(null,((function (s__22680__$1,map__22685,map__22685__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22678,map__22678__$1,msg,info,reload_info){
return (function (){
var s__22682__$1 = s__22682;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__22682__$1);
if(temp__5753__auto____$1){
var s__22682__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22682__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22682__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22684 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22683 = (0);
while(true){
if((i__22683 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__22683);
cljs.core.chunk_append(b__22684,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23155 = (i__22683 + (1));
i__22683 = G__23155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22684),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22679_$_iter__22681(cljs.core.chunk_rest(s__22682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22684),null);
}
} else {
var warning = cljs.core.first(s__22682__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22679_$_iter__22681(cljs.core.rest(s__22682__$2)));
}
} else {
return null;
}
break;
}
});})(s__22680__$1,map__22685,map__22685__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22678,map__22678__$1,msg,info,reload_info))
,null,null));
});})(s__22680__$1,map__22685,map__22685__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22678,map__22678__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22679(cljs.core.rest(s__22680__$1)));
} else {
var G__23156 = cljs.core.rest(s__22680__$1);
s__22680__$1 = G__23156;
continue;
}
} else {
var G__23157 = cljs.core.rest(s__22680__$1);
s__22680__$1 = G__23157;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22686_23158 = cljs.core.seq(warnings);
var chunk__22687_23159 = null;
var count__22688_23160 = (0);
var i__22689_23161 = (0);
while(true){
if((i__22689_23161 < count__22688_23160)){
var map__22693_23162 = chunk__22687_23159.cljs$core$IIndexed$_nth$arity$2(null,i__22689_23161);
var map__22693_23163__$1 = cljs.core.__destructure_map(map__22693_23162);
var w_23164 = map__22693_23163__$1;
var msg_23165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693_23163__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693_23163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693_23163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693_23163__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23168)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23166),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23167),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23165__$1)].join(''));


var G__23169 = seq__22686_23158;
var G__23170 = chunk__22687_23159;
var G__23171 = count__22688_23160;
var G__23172 = (i__22689_23161 + (1));
seq__22686_23158 = G__23169;
chunk__22687_23159 = G__23170;
count__22688_23160 = G__23171;
i__22689_23161 = G__23172;
continue;
} else {
var temp__5753__auto___23173 = cljs.core.seq(seq__22686_23158);
if(temp__5753__auto___23173){
var seq__22686_23174__$1 = temp__5753__auto___23173;
if(cljs.core.chunked_seq_QMARK_(seq__22686_23174__$1)){
var c__4679__auto___23175 = cljs.core.chunk_first(seq__22686_23174__$1);
var G__23176 = cljs.core.chunk_rest(seq__22686_23174__$1);
var G__23177 = c__4679__auto___23175;
var G__23178 = cljs.core.count(c__4679__auto___23175);
var G__23179 = (0);
seq__22686_23158 = G__23176;
chunk__22687_23159 = G__23177;
count__22688_23160 = G__23178;
i__22689_23161 = G__23179;
continue;
} else {
var map__22697_23180 = cljs.core.first(seq__22686_23174__$1);
var map__22697_23181__$1 = cljs.core.__destructure_map(map__22697_23180);
var w_23182 = map__22697_23181__$1;
var msg_23183__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697_23181__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697_23181__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697_23181__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697_23181__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23186)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23184),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23185),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23183__$1)].join(''));


var G__23187 = cljs.core.next(seq__22686_23174__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__22686_23158 = G__23187;
chunk__22687_23159 = G__23188;
count__22688_23160 = G__23189;
i__22689_23161 = G__23190;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22676_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22676_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22700){
var map__22701 = p__22700;
var map__22701__$1 = cljs.core.__destructure_map(map__22701);
var msg = map__22701__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22702 = cljs.core.seq(updates);
var chunk__22704 = null;
var count__22705 = (0);
var i__22706 = (0);
while(true){
if((i__22706 < count__22705)){
var path = chunk__22704.cljs$core$IIndexed$_nth$arity$2(null,i__22706);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22936_23191 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22940_23192 = null;
var count__22941_23193 = (0);
var i__22942_23194 = (0);
while(true){
if((i__22942_23194 < count__22941_23193)){
var node_23195 = chunk__22940_23192.cljs$core$IIndexed$_nth$arity$2(null,i__22942_23194);
if(cljs.core.not(node_23195.shadow$old)){
var path_match_23196 = shadow.cljs.devtools.client.browser.match_paths(node_23195.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23196)){
var new_link_23197 = (function (){var G__22983 = node_23195.cloneNode(true);
G__22983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23196),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22983;
})();
(node_23195.shadow$old = true);

(new_link_23197.onload = ((function (seq__22936_23191,chunk__22940_23192,count__22941_23193,i__22942_23194,seq__22702,chunk__22704,count__22705,i__22706,new_link_23197,path_match_23196,node_23195,path,map__22701,map__22701__$1,msg,updates,reload_info){
return (function (e){
var seq__22984_23198 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22986_23199 = null;
var count__22987_23200 = (0);
var i__22988_23201 = (0);
while(true){
if((i__22988_23201 < count__22987_23200)){
var map__22994_23202 = chunk__22986_23199.cljs$core$IIndexed$_nth$arity$2(null,i__22988_23201);
var map__22994_23203__$1 = cljs.core.__destructure_map(map__22994_23202);
var task_23204 = map__22994_23203__$1;
var fn_str_23205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22994_23203__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22994_23203__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23207 = goog.getObjectByName(fn_str_23205,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23206)].join(''));

(fn_obj_23207.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23207.cljs$core$IFn$_invoke$arity$2(path,new_link_23197) : fn_obj_23207.call(null,path,new_link_23197));


var G__23208 = seq__22984_23198;
var G__23209 = chunk__22986_23199;
var G__23210 = count__22987_23200;
var G__23211 = (i__22988_23201 + (1));
seq__22984_23198 = G__23208;
chunk__22986_23199 = G__23209;
count__22987_23200 = G__23210;
i__22988_23201 = G__23211;
continue;
} else {
var temp__5753__auto___23212 = cljs.core.seq(seq__22984_23198);
if(temp__5753__auto___23212){
var seq__22984_23213__$1 = temp__5753__auto___23212;
if(cljs.core.chunked_seq_QMARK_(seq__22984_23213__$1)){
var c__4679__auto___23214 = cljs.core.chunk_first(seq__22984_23213__$1);
var G__23215 = cljs.core.chunk_rest(seq__22984_23213__$1);
var G__23216 = c__4679__auto___23214;
var G__23217 = cljs.core.count(c__4679__auto___23214);
var G__23218 = (0);
seq__22984_23198 = G__23215;
chunk__22986_23199 = G__23216;
count__22987_23200 = G__23217;
i__22988_23201 = G__23218;
continue;
} else {
var map__22995_23219 = cljs.core.first(seq__22984_23213__$1);
var map__22995_23220__$1 = cljs.core.__destructure_map(map__22995_23219);
var task_23221 = map__22995_23220__$1;
var fn_str_23222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995_23220__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995_23220__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23224 = goog.getObjectByName(fn_str_23222,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23223)].join(''));

(fn_obj_23224.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23224.cljs$core$IFn$_invoke$arity$2(path,new_link_23197) : fn_obj_23224.call(null,path,new_link_23197));


var G__23225 = cljs.core.next(seq__22984_23213__$1);
var G__23226 = null;
var G__23227 = (0);
var G__23228 = (0);
seq__22984_23198 = G__23225;
chunk__22986_23199 = G__23226;
count__22987_23200 = G__23227;
i__22988_23201 = G__23228;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23195);
});})(seq__22936_23191,chunk__22940_23192,count__22941_23193,i__22942_23194,seq__22702,chunk__22704,count__22705,i__22706,new_link_23197,path_match_23196,node_23195,path,map__22701,map__22701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23196], 0));

goog.dom.insertSiblingAfter(new_link_23197,node_23195);


var G__23229 = seq__22936_23191;
var G__23230 = chunk__22940_23192;
var G__23231 = count__22941_23193;
var G__23232 = (i__22942_23194 + (1));
seq__22936_23191 = G__23229;
chunk__22940_23192 = G__23230;
count__22941_23193 = G__23231;
i__22942_23194 = G__23232;
continue;
} else {
var G__23233 = seq__22936_23191;
var G__23234 = chunk__22940_23192;
var G__23235 = count__22941_23193;
var G__23236 = (i__22942_23194 + (1));
seq__22936_23191 = G__23233;
chunk__22940_23192 = G__23234;
count__22941_23193 = G__23235;
i__22942_23194 = G__23236;
continue;
}
} else {
var G__23237 = seq__22936_23191;
var G__23238 = chunk__22940_23192;
var G__23239 = count__22941_23193;
var G__23240 = (i__22942_23194 + (1));
seq__22936_23191 = G__23237;
chunk__22940_23192 = G__23238;
count__22941_23193 = G__23239;
i__22942_23194 = G__23240;
continue;
}
} else {
var temp__5753__auto___23241 = cljs.core.seq(seq__22936_23191);
if(temp__5753__auto___23241){
var seq__22936_23242__$1 = temp__5753__auto___23241;
if(cljs.core.chunked_seq_QMARK_(seq__22936_23242__$1)){
var c__4679__auto___23243 = cljs.core.chunk_first(seq__22936_23242__$1);
var G__23244 = cljs.core.chunk_rest(seq__22936_23242__$1);
var G__23245 = c__4679__auto___23243;
var G__23246 = cljs.core.count(c__4679__auto___23243);
var G__23247 = (0);
seq__22936_23191 = G__23244;
chunk__22940_23192 = G__23245;
count__22941_23193 = G__23246;
i__22942_23194 = G__23247;
continue;
} else {
var node_23248 = cljs.core.first(seq__22936_23242__$1);
if(cljs.core.not(node_23248.shadow$old)){
var path_match_23249 = shadow.cljs.devtools.client.browser.match_paths(node_23248.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23249)){
var new_link_23250 = (function (){var G__22998 = node_23248.cloneNode(true);
G__22998.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23249),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22998;
})();
(node_23248.shadow$old = true);

(new_link_23250.onload = ((function (seq__22936_23191,chunk__22940_23192,count__22941_23193,i__22942_23194,seq__22702,chunk__22704,count__22705,i__22706,new_link_23250,path_match_23249,node_23248,seq__22936_23242__$1,temp__5753__auto___23241,path,map__22701,map__22701__$1,msg,updates,reload_info){
return (function (e){
var seq__22999_23251 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23001_23252 = null;
var count__23002_23253 = (0);
var i__23003_23254 = (0);
while(true){
if((i__23003_23254 < count__23002_23253)){
var map__23008_23255 = chunk__23001_23252.cljs$core$IIndexed$_nth$arity$2(null,i__23003_23254);
var map__23008_23256__$1 = cljs.core.__destructure_map(map__23008_23255);
var task_23257 = map__23008_23256__$1;
var fn_str_23258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23008_23256__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23008_23256__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23260 = goog.getObjectByName(fn_str_23258,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23259)].join(''));

(fn_obj_23260.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23260.cljs$core$IFn$_invoke$arity$2(path,new_link_23250) : fn_obj_23260.call(null,path,new_link_23250));


var G__23261 = seq__22999_23251;
var G__23262 = chunk__23001_23252;
var G__23263 = count__23002_23253;
var G__23264 = (i__23003_23254 + (1));
seq__22999_23251 = G__23261;
chunk__23001_23252 = G__23262;
count__23002_23253 = G__23263;
i__23003_23254 = G__23264;
continue;
} else {
var temp__5753__auto___23265__$1 = cljs.core.seq(seq__22999_23251);
if(temp__5753__auto___23265__$1){
var seq__22999_23266__$1 = temp__5753__auto___23265__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22999_23266__$1)){
var c__4679__auto___23267 = cljs.core.chunk_first(seq__22999_23266__$1);
var G__23268 = cljs.core.chunk_rest(seq__22999_23266__$1);
var G__23269 = c__4679__auto___23267;
var G__23270 = cljs.core.count(c__4679__auto___23267);
var G__23271 = (0);
seq__22999_23251 = G__23268;
chunk__23001_23252 = G__23269;
count__23002_23253 = G__23270;
i__23003_23254 = G__23271;
continue;
} else {
var map__23009_23272 = cljs.core.first(seq__22999_23266__$1);
var map__23009_23273__$1 = cljs.core.__destructure_map(map__23009_23272);
var task_23274 = map__23009_23273__$1;
var fn_str_23275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009_23273__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009_23273__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23277 = goog.getObjectByName(fn_str_23275,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23276)].join(''));

(fn_obj_23277.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23277.cljs$core$IFn$_invoke$arity$2(path,new_link_23250) : fn_obj_23277.call(null,path,new_link_23250));


var G__23278 = cljs.core.next(seq__22999_23266__$1);
var G__23279 = null;
var G__23280 = (0);
var G__23281 = (0);
seq__22999_23251 = G__23278;
chunk__23001_23252 = G__23279;
count__23002_23253 = G__23280;
i__23003_23254 = G__23281;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23248);
});})(seq__22936_23191,chunk__22940_23192,count__22941_23193,i__22942_23194,seq__22702,chunk__22704,count__22705,i__22706,new_link_23250,path_match_23249,node_23248,seq__22936_23242__$1,temp__5753__auto___23241,path,map__22701,map__22701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23249], 0));

goog.dom.insertSiblingAfter(new_link_23250,node_23248);


var G__23282 = cljs.core.next(seq__22936_23242__$1);
var G__23283 = null;
var G__23284 = (0);
var G__23285 = (0);
seq__22936_23191 = G__23282;
chunk__22940_23192 = G__23283;
count__22941_23193 = G__23284;
i__22942_23194 = G__23285;
continue;
} else {
var G__23286 = cljs.core.next(seq__22936_23242__$1);
var G__23287 = null;
var G__23288 = (0);
var G__23289 = (0);
seq__22936_23191 = G__23286;
chunk__22940_23192 = G__23287;
count__22941_23193 = G__23288;
i__22942_23194 = G__23289;
continue;
}
} else {
var G__23290 = cljs.core.next(seq__22936_23242__$1);
var G__23291 = null;
var G__23292 = (0);
var G__23293 = (0);
seq__22936_23191 = G__23290;
chunk__22940_23192 = G__23291;
count__22941_23193 = G__23292;
i__22942_23194 = G__23293;
continue;
}
}
} else {
}
}
break;
}


var G__23294 = seq__22702;
var G__23295 = chunk__22704;
var G__23296 = count__22705;
var G__23297 = (i__22706 + (1));
seq__22702 = G__23294;
chunk__22704 = G__23295;
count__22705 = G__23296;
i__22706 = G__23297;
continue;
} else {
var G__23298 = seq__22702;
var G__23299 = chunk__22704;
var G__23300 = count__22705;
var G__23301 = (i__22706 + (1));
seq__22702 = G__23298;
chunk__22704 = G__23299;
count__22705 = G__23300;
i__22706 = G__23301;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22702);
if(temp__5753__auto__){
var seq__22702__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22702__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22702__$1);
var G__23302 = cljs.core.chunk_rest(seq__22702__$1);
var G__23303 = c__4679__auto__;
var G__23304 = cljs.core.count(c__4679__auto__);
var G__23305 = (0);
seq__22702 = G__23302;
chunk__22704 = G__23303;
count__22705 = G__23304;
i__22706 = G__23305;
continue;
} else {
var path = cljs.core.first(seq__22702__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23013_23306 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23017_23307 = null;
var count__23018_23308 = (0);
var i__23019_23309 = (0);
while(true){
if((i__23019_23309 < count__23018_23308)){
var node_23310 = chunk__23017_23307.cljs$core$IIndexed$_nth$arity$2(null,i__23019_23309);
if(cljs.core.not(node_23310.shadow$old)){
var path_match_23311 = shadow.cljs.devtools.client.browser.match_paths(node_23310.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23311)){
var new_link_23312 = (function (){var G__23072 = node_23310.cloneNode(true);
G__23072.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23311),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23072;
})();
(node_23310.shadow$old = true);

(new_link_23312.onload = ((function (seq__23013_23306,chunk__23017_23307,count__23018_23308,i__23019_23309,seq__22702,chunk__22704,count__22705,i__22706,new_link_23312,path_match_23311,node_23310,path,seq__22702__$1,temp__5753__auto__,map__22701,map__22701__$1,msg,updates,reload_info){
return (function (e){
var seq__23075_23313 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23077_23314 = null;
var count__23078_23315 = (0);
var i__23079_23316 = (0);
while(true){
if((i__23079_23316 < count__23078_23315)){
var map__23087_23317 = chunk__23077_23314.cljs$core$IIndexed$_nth$arity$2(null,i__23079_23316);
var map__23087_23318__$1 = cljs.core.__destructure_map(map__23087_23317);
var task_23319 = map__23087_23318__$1;
var fn_str_23320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23087_23318__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23087_23318__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23322 = goog.getObjectByName(fn_str_23320,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23321)].join(''));

(fn_obj_23322.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23322.cljs$core$IFn$_invoke$arity$2(path,new_link_23312) : fn_obj_23322.call(null,path,new_link_23312));


var G__23323 = seq__23075_23313;
var G__23324 = chunk__23077_23314;
var G__23325 = count__23078_23315;
var G__23326 = (i__23079_23316 + (1));
seq__23075_23313 = G__23323;
chunk__23077_23314 = G__23324;
count__23078_23315 = G__23325;
i__23079_23316 = G__23326;
continue;
} else {
var temp__5753__auto___23327__$1 = cljs.core.seq(seq__23075_23313);
if(temp__5753__auto___23327__$1){
var seq__23075_23328__$1 = temp__5753__auto___23327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23075_23328__$1)){
var c__4679__auto___23329 = cljs.core.chunk_first(seq__23075_23328__$1);
var G__23330 = cljs.core.chunk_rest(seq__23075_23328__$1);
var G__23331 = c__4679__auto___23329;
var G__23332 = cljs.core.count(c__4679__auto___23329);
var G__23333 = (0);
seq__23075_23313 = G__23330;
chunk__23077_23314 = G__23331;
count__23078_23315 = G__23332;
i__23079_23316 = G__23333;
continue;
} else {
var map__23092_23334 = cljs.core.first(seq__23075_23328__$1);
var map__23092_23335__$1 = cljs.core.__destructure_map(map__23092_23334);
var task_23336 = map__23092_23335__$1;
var fn_str_23337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23092_23335__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23092_23335__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23339 = goog.getObjectByName(fn_str_23337,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23338)].join(''));

(fn_obj_23339.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23339.cljs$core$IFn$_invoke$arity$2(path,new_link_23312) : fn_obj_23339.call(null,path,new_link_23312));


var G__23340 = cljs.core.next(seq__23075_23328__$1);
var G__23341 = null;
var G__23342 = (0);
var G__23343 = (0);
seq__23075_23313 = G__23340;
chunk__23077_23314 = G__23341;
count__23078_23315 = G__23342;
i__23079_23316 = G__23343;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23310);
});})(seq__23013_23306,chunk__23017_23307,count__23018_23308,i__23019_23309,seq__22702,chunk__22704,count__22705,i__22706,new_link_23312,path_match_23311,node_23310,path,seq__22702__$1,temp__5753__auto__,map__22701,map__22701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23311], 0));

goog.dom.insertSiblingAfter(new_link_23312,node_23310);


var G__23344 = seq__23013_23306;
var G__23345 = chunk__23017_23307;
var G__23346 = count__23018_23308;
var G__23347 = (i__23019_23309 + (1));
seq__23013_23306 = G__23344;
chunk__23017_23307 = G__23345;
count__23018_23308 = G__23346;
i__23019_23309 = G__23347;
continue;
} else {
var G__23348 = seq__23013_23306;
var G__23349 = chunk__23017_23307;
var G__23350 = count__23018_23308;
var G__23351 = (i__23019_23309 + (1));
seq__23013_23306 = G__23348;
chunk__23017_23307 = G__23349;
count__23018_23308 = G__23350;
i__23019_23309 = G__23351;
continue;
}
} else {
var G__23352 = seq__23013_23306;
var G__23353 = chunk__23017_23307;
var G__23354 = count__23018_23308;
var G__23355 = (i__23019_23309 + (1));
seq__23013_23306 = G__23352;
chunk__23017_23307 = G__23353;
count__23018_23308 = G__23354;
i__23019_23309 = G__23355;
continue;
}
} else {
var temp__5753__auto___23356__$1 = cljs.core.seq(seq__23013_23306);
if(temp__5753__auto___23356__$1){
var seq__23013_23357__$1 = temp__5753__auto___23356__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23013_23357__$1)){
var c__4679__auto___23358 = cljs.core.chunk_first(seq__23013_23357__$1);
var G__23359 = cljs.core.chunk_rest(seq__23013_23357__$1);
var G__23360 = c__4679__auto___23358;
var G__23361 = cljs.core.count(c__4679__auto___23358);
var G__23362 = (0);
seq__23013_23306 = G__23359;
chunk__23017_23307 = G__23360;
count__23018_23308 = G__23361;
i__23019_23309 = G__23362;
continue;
} else {
var node_23363 = cljs.core.first(seq__23013_23357__$1);
if(cljs.core.not(node_23363.shadow$old)){
var path_match_23364 = shadow.cljs.devtools.client.browser.match_paths(node_23363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23364)){
var new_link_23365 = (function (){var G__23093 = node_23363.cloneNode(true);
G__23093.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23093;
})();
(node_23363.shadow$old = true);

(new_link_23365.onload = ((function (seq__23013_23306,chunk__23017_23307,count__23018_23308,i__23019_23309,seq__22702,chunk__22704,count__22705,i__22706,new_link_23365,path_match_23364,node_23363,seq__23013_23357__$1,temp__5753__auto___23356__$1,path,seq__22702__$1,temp__5753__auto__,map__22701,map__22701__$1,msg,updates,reload_info){
return (function (e){
var seq__23094_23366 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23096_23367 = null;
var count__23097_23368 = (0);
var i__23098_23369 = (0);
while(true){
if((i__23098_23369 < count__23097_23368)){
var map__23102_23370 = chunk__23096_23367.cljs$core$IIndexed$_nth$arity$2(null,i__23098_23369);
var map__23102_23371__$1 = cljs.core.__destructure_map(map__23102_23370);
var task_23372 = map__23102_23371__$1;
var fn_str_23373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23102_23371__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23102_23371__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23375 = goog.getObjectByName(fn_str_23373,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23374)].join(''));

(fn_obj_23375.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23375.cljs$core$IFn$_invoke$arity$2(path,new_link_23365) : fn_obj_23375.call(null,path,new_link_23365));


var G__23376 = seq__23094_23366;
var G__23377 = chunk__23096_23367;
var G__23378 = count__23097_23368;
var G__23379 = (i__23098_23369 + (1));
seq__23094_23366 = G__23376;
chunk__23096_23367 = G__23377;
count__23097_23368 = G__23378;
i__23098_23369 = G__23379;
continue;
} else {
var temp__5753__auto___23380__$2 = cljs.core.seq(seq__23094_23366);
if(temp__5753__auto___23380__$2){
var seq__23094_23381__$1 = temp__5753__auto___23380__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23094_23381__$1)){
var c__4679__auto___23382 = cljs.core.chunk_first(seq__23094_23381__$1);
var G__23383 = cljs.core.chunk_rest(seq__23094_23381__$1);
var G__23384 = c__4679__auto___23382;
var G__23385 = cljs.core.count(c__4679__auto___23382);
var G__23386 = (0);
seq__23094_23366 = G__23383;
chunk__23096_23367 = G__23384;
count__23097_23368 = G__23385;
i__23098_23369 = G__23386;
continue;
} else {
var map__23103_23387 = cljs.core.first(seq__23094_23381__$1);
var map__23103_23388__$1 = cljs.core.__destructure_map(map__23103_23387);
var task_23389 = map__23103_23388__$1;
var fn_str_23390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23103_23388__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23103_23388__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23392 = goog.getObjectByName(fn_str_23390,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23391)].join(''));

(fn_obj_23392.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23392.cljs$core$IFn$_invoke$arity$2(path,new_link_23365) : fn_obj_23392.call(null,path,new_link_23365));


var G__23393 = cljs.core.next(seq__23094_23381__$1);
var G__23394 = null;
var G__23395 = (0);
var G__23396 = (0);
seq__23094_23366 = G__23393;
chunk__23096_23367 = G__23394;
count__23097_23368 = G__23395;
i__23098_23369 = G__23396;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23363);
});})(seq__23013_23306,chunk__23017_23307,count__23018_23308,i__23019_23309,seq__22702,chunk__22704,count__22705,i__22706,new_link_23365,path_match_23364,node_23363,seq__23013_23357__$1,temp__5753__auto___23356__$1,path,seq__22702__$1,temp__5753__auto__,map__22701,map__22701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23364], 0));

goog.dom.insertSiblingAfter(new_link_23365,node_23363);


var G__23397 = cljs.core.next(seq__23013_23357__$1);
var G__23398 = null;
var G__23399 = (0);
var G__23400 = (0);
seq__23013_23306 = G__23397;
chunk__23017_23307 = G__23398;
count__23018_23308 = G__23399;
i__23019_23309 = G__23400;
continue;
} else {
var G__23401 = cljs.core.next(seq__23013_23357__$1);
var G__23402 = null;
var G__23403 = (0);
var G__23404 = (0);
seq__23013_23306 = G__23401;
chunk__23017_23307 = G__23402;
count__23018_23308 = G__23403;
i__23019_23309 = G__23404;
continue;
}
} else {
var G__23405 = cljs.core.next(seq__23013_23357__$1);
var G__23406 = null;
var G__23407 = (0);
var G__23408 = (0);
seq__23013_23306 = G__23405;
chunk__23017_23307 = G__23406;
count__23018_23308 = G__23407;
i__23019_23309 = G__23408;
continue;
}
}
} else {
}
}
break;
}


var G__23409 = cljs.core.next(seq__22702__$1);
var G__23410 = null;
var G__23411 = (0);
var G__23412 = (0);
seq__22702 = G__23409;
chunk__22704 = G__23410;
count__22705 = G__23411;
i__22706 = G__23412;
continue;
} else {
var G__23413 = cljs.core.next(seq__22702__$1);
var G__23414 = null;
var G__23415 = (0);
var G__23416 = (0);
seq__22702 = G__23413;
chunk__22704 = G__23414;
count__22705 = G__23415;
i__22706 = G__23416;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__23104){
var map__23105 = p__23104;
var map__23105__$1 = cljs.core.__destructure_map(map__23105);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23105__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__23106){
var map__23107 = p__23106;
var map__23107__$1 = cljs.core.__destructure_map(map__23107);
var _ = map__23107__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23108,done,error){
var map__23109 = p__23108;
var map__23109__$1 = cljs.core.__destructure_map(map__23109);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23109__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23110,done,error){
var map__23111 = p__23110;
var map__23111__$1 = cljs.core.__destructure_map(map__23111);
var msg = map__23111__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23111__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23111__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23111__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23112){
var map__23113 = p__23112;
var map__23113__$1 = cljs.core.__destructure_map(map__23113);
var src = map__23113__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23113__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23114 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23114) : done.call(null,G__23114));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23115){
var map__23116 = p__23115;
var map__23116__$1 = cljs.core.__destructure_map(map__23116);
var msg__$1 = map__23116__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23117){var ex = e23117;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23118){
var map__23119 = p__23118;
var map__23119__$1 = cljs.core.__destructure_map(map__23119);
var env = map__23119__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23119__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23120){
var map__23121 = p__23120;
var map__23121__$1 = cljs.core.__destructure_map(map__23121);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23121__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23121__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23122){
var map__23123 = p__23122;
var map__23123__$1 = cljs.core.__destructure_map(map__23123);
var svc = map__23123__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23123__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
