(function(e,t){var n,i,r=typeof t,o=e.document,s=e.location,a=e.jQuery,u=e.$,l={},f=[],c="1.9.1",p=f.concat,d=f.push,h=f.slice,g=f.indexOf,m=l.toString,y=l.hasOwnProperty,v=c.trim,b=function(e,t){return new b.fn.init(e,t,i)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){if(o.addEventListener||e.type==="load"||o.readyState==="complete"){q()
b.ready()}},q=function(){if(o.addEventListener){o.removeEventListener("DOMContentLoaded",H,false)
e.removeEventListener("load",H,false)}else{o.detachEvent("onreadystatechange",H)
e.detachEvent("onload",H)}}
b.fn=b.prototype={jquery:c,constructor:b,init:function(e,n,i){var r,s
if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){r=[null,e,null]}else{r=N.exec(e)}if(r&&(r[1]||!n)){if(r[1]){n=n instanceof b?n[0]:n
b.merge(this,b.parseHTML(r[1],n&&n.nodeType?n.ownerDocument||n:o,true))
if(C.test(r[1])&&b.isPlainObject(n)){for(r in n){if(b.isFunction(this[r])){this[r](n[r])}else{this.attr(r,n[r])}}}return this}else{s=o.getElementById(r[2])
if(s&&s.parentNode){if(s.id!==r[2]){return i.find(e)}this.length=1
this[0]=s}this.context=o
this.selector=e
return this}}else if(!n||n.jquery){return(n||i).find(e)}else{return this.constructor(n).find(e)}}else if(e.nodeType){this.context=this[0]=e
this.length=1
return this}else if(b.isFunction(e)){return i.ready(e)}if(e.selector!==t){this.selector=e.selector
this.context=e.context}return b.makeArray(e,this)},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e)
t.prevObject=this
t.context=this.context
return t},each:function(e,t){return b.each(this,e,t)},ready:function(e){b.ready.promise().done(e)
return this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice}
b.fn.init.prototype=b.fn
b.extend=b.fn.extend=function(){var e,n,i,r,o,s,a=arguments[0]||{},u=1,l=arguments.length,f=false
if(typeof a==="boolean"){f=a
a=arguments[1]||{}
u=2}if(typeof a!=="object"&&!b.isFunction(a)){a={}}if(l===u){a=this;--u}for(;u<l;u++){if((o=arguments[u])!=null){for(r in o){e=a[r]
i=o[r]
if(a===i){continue}if(f&&i&&(b.isPlainObject(i)||(n=b.isArray(i)))){if(n){n=false
s=e&&b.isArray(e)?e:[]}else{s=e&&b.isPlainObject(e)?e:{}}a[r]=b.extend(f,s,i)}else if(i!==t){a[r]=i}}}}return a}
b.extend({noConflict:function(t){if(e.$===b){e.$=u}if(t&&e.jQuery===b){e.jQuery=a}return b},isReady:false,readyWait:1,holdReady:function(e){if(e){b.readyWait++}else{b.ready(true)}},ready:function(e){if(e===true?--b.readyWait:b.isReady){return}if(!o.body){return setTimeout(b.ready)}b.isReady=true
if(e!==true&&--b.readyWait>0){return}n.resolveWith(o,[b])
if(b.fn.trigger){b(o).trigger("ready").off("ready")}},isFunction:function(e){return b.type(e)==="function"},isArray:Array.isArray||function(e){return b.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||b.type(e)!=="object"||e.nodeType||b.isWindow(e)){return false}try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(n){return false}var i
for(i in e){}return i===t||y.call(e,i)},isEmptyObject:function(e){var t
for(t in e){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t
t=false}t=t||o
var i=C.exec(e),r=!n&&[]
if(i){return[t.createElement(i[1])]}i=b.buildFragment([e],t,r)
if(r){b(r).remove()}return b.merge([],i.childNodes)},parseJSON:function(t){if(e.JSON&&e.JSON.parse){return e.JSON.parse(t)}if(t===null){return t}if(typeof t==="string"){t=b.trim(t)
if(t){if(k.test(t.replace(S,"@").replace(A,"]").replace(E,""))){return new Function("return "+t)()}}}b.error("Invalid JSON: "+t)},parseXML:function(n){var i,r
if(!n||typeof n!=="string"){return null}try{if(e.DOMParser){r=new DOMParser
i=r.parseFromString(n,"text/xml")}else{i=new ActiveXObject("Microsoft.XMLDOM")
i.async="false"
i.loadXML(n)}}catch(o){i=t}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){b.error("Invalid XML: "+n)}return i},noop:function(){},globalEval:function(t){if(t&&b.trim(t)){(e.execScript||function(t){e["eval"].call(e,t)})(t)}},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,o=e.length,s=M(e)
if(n){if(s){for(;r<o;r++){i=t.apply(e[r],n)
if(i===false){break}}}else{for(r in e){i=t.apply(e[r],n)
if(i===false){break}}}}else{if(s){for(;r<o;r++){i=t.call(e[r],r,e[r])
if(i===false){break}}}else{for(r in e){i=t.call(e[r],r,e[r])
if(i===false){break}}}}return e},trim:v&&!v.call("﻿ ")?function(e){return e==null?"":v.call(e)}:function(e){return e==null?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[]
if(e!=null){if(M(Object(e))){b.merge(n,typeof e==="string"?[e]:e)}else{d.call(n,e)}}return n},inArray:function(e,t,n){var i
if(t){if(g){return g.call(t,e,n)}i=t.length
n=n?n<0?Math.max(0,i+n):n:0
for(;n<i;n++){if(n in t&&t[n]===e){return n}}}return-1},merge:function(e,n){var i=n.length,r=e.length,o=0
if(typeof i==="number"){for(;o<i;o++){e[r++]=n[o]}}else{while(n[o]!==t){e[r++]=n[o++]}}e.length=r
return e},grep:function(e,t,n){var i,r=[],o=0,s=e.length
n=!!n
for(;o<s;o++){i=!!t(e[o],o)
if(n!==i){r.push(e[o])}}return r},map:function(e,t,n){var i,r=0,o=e.length,s=M(e),a=[]
if(s){for(;r<o;r++){i=t(e[r],r,n)
if(i!=null){a[a.length]=i}}}else{for(r in e){i=t(e[r],r,n)
if(i!=null){a[a.length]=i}}}return p.apply([],a)},guid:1,proxy:function(e,n){var i,r,o
if(typeof n==="string"){o=e[n]
n=e
e=o}if(!b.isFunction(e)){return t}i=h.call(arguments,2)
r=function(){return e.apply(n||this,i.concat(h.call(arguments)))}
r.guid=e.guid=e.guid||b.guid++
return r},access:function(e,n,i,r,o,s,a){var u=0,l=e.length,f=i==null
if(b.type(i)==="object"){o=true
for(u in i){b.access(e,n,u,i[u],true,s,a)}}else if(r!==t){o=true
if(!b.isFunction(r)){a=true}if(f){if(a){n.call(e,r)
n=null}else{f=n
n=function(e,t,n){return f.call(b(e),n)}}}if(n){for(;u<l;u++){n(e[u],i,a?r:r.call(e[u],u,n(e[u],i)))}}}return o?e:f?n.call(e):l?n(e[0],i):s},now:function(){return(new Date).getTime()}})
b.ready.promise=function(t){if(!n){n=b.Deferred()
if(o.readyState==="complete"){setTimeout(b.ready)}else if(o.addEventListener){o.addEventListener("DOMContentLoaded",H,false)
e.addEventListener("load",H,false)}else{o.attachEvent("onreadystatechange",H)
e.attachEvent("onload",H)
var i=false
try{i=e.frameElement==null&&o.documentElement}catch(r){}if(i&&i.doScroll){(function s(){if(!b.isReady){try{i.doScroll("left")}catch(e){return setTimeout(s,50)}q()
b.ready()}})()}}}return n.promise(t)}
b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()})
function M(e){var t=e.length,n=b.type(e)
if(b.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||n!=="function"&&(t===0||typeof t==="number"&&t>0&&t-1 in e)}i=b(o)
var _={}
function F(e){var t=_[e]={}
b.each(e.match(w)||[],function(e,n){t[n]=true})
return t}b.Callbacks=function(e){e=typeof e==="string"?_[e]||F(e):b.extend({},e)
var n,i,r,o,s,a,u=[],l=!e.once&&[],f=function(t){i=e.memory&&t
r=true
s=a||0
a=0
o=u.length
n=true
for(;u&&s<o;s++){if(u[s].apply(t[0],t[1])===false&&e.stopOnFalse){i=false
break}}n=false
if(u){if(l){if(l.length){f(l.shift())}}else if(i){u=[]}else{c.disable()}}},c={add:function(){if(u){var t=u.length;(function r(t){b.each(t,function(t,n){var i=b.type(n)
if(i==="function"){if(!e.unique||!c.has(n)){u.push(n)}}else if(n&&n.length&&i!=="string"){r(n)}})})(arguments)
if(n){o=u.length}else if(i){a=t
f(i)}}return this},remove:function(){if(u){b.each(arguments,function(e,t){var i
while((i=b.inArray(t,u,i))>-1){u.splice(i,1)
if(n){if(i<=o){o--}if(i<=s){s--}}}})}return this},has:function(e){return e?b.inArray(e,u)>-1:!!(u&&u.length)},empty:function(){u=[]
return this},disable:function(){u=l=i=t
return this},disabled:function(){return!u},lock:function(){l=t
if(!i){c.disable()}return this},locked:function(){return!l},fireWith:function(e,t){t=t||[]
t=[e,t.slice?t.slice():t]
if(u&&(!r||l)){if(n){l.push(t)}else{f(t)}}return this},fire:function(){c.fireWith(this,arguments)
return this},fired:function(){return!!r}}
return c}
b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){r.done(arguments).fail(arguments)
return this},then:function(){var e=arguments
return b.Deferred(function(n){b.each(t,function(t,o){var s=o[0],a=b.isFunction(e[t])&&e[t]
r[o[1]](function(){var e=a&&a.apply(this,arguments)
if(e&&b.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[s+"With"](this===i?n.promise():this,a?[e]:arguments)}})})
e=null}).promise()},promise:function(e){return e!=null?b.extend(e,i):i}},r={}
i.pipe=i.then
b.each(t,function(e,o){var s=o[2],a=o[3]
i[o[1]]=s.add
if(a){s.add(function(){n=a},t[e^1][2].disable,t[2][2].lock)}r[o[0]]=function(){r[o[0]+"With"](this===r?i:this,arguments)
return this}
r[o[0]+"With"]=s.fireWith})
i.promise(r)
if(e){e.call(r,r)}return r},when:function(e){var t=0,n=h.call(arguments),i=n.length,r=i!==1||e&&b.isFunction(e.promise)?i:0,o=r===1?e:b.Deferred(),s=function(e,t,n){return function(i){t[e]=this
n[e]=arguments.length>1?h.call(arguments):i
if(n===a){o.notifyWith(t,n)}else if(!--r){o.resolveWith(t,n)}}},a,u,l
if(i>1){a=new Array(i)
u=new Array(i)
l=new Array(i)
for(;t<i;t++){if(n[t]&&b.isFunction(n[t].promise)){n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a))}else{--r}}}if(!r){o.resolveWith(l,n)}return o.promise()}})
b.support=function(){var t,n,i,s,a,u,l,f,c,p,d=o.createElement("div")
d.setAttribute("className","t")
d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"
n=d.getElementsByTagName("*")
i=d.getElementsByTagName("a")[0]
if(!n||!i||!n.length){return{}}a=o.createElement("select")
l=a.appendChild(o.createElement("option"))
s=d.getElementsByTagName("input")[0]
i.style.cssText="top:1px;float:left;opacity:.5"
t={getSetAttribute:d.className!=="t",leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:i.getAttribute("href")==="/a",opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:o.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:o.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false}
s.checked=true
t.noCloneChecked=s.cloneNode(true).checked
a.disabled=true
t.optDisabled=!l.disabled
try{delete d.test}catch(h){t.deleteExpando=false}s=o.createElement("input")
s.setAttribute("value","")
t.input=s.getAttribute("value")===""
s.value="t"
s.setAttribute("type","radio")
t.radioValue=s.value==="t"
s.setAttribute("checked","t")
s.setAttribute("name","t")
u=o.createDocumentFragment()
u.appendChild(s)
t.appendChecked=s.checked
t.checkClone=u.cloneNode(true).cloneNode(true).lastChild.checked
if(d.attachEvent){d.attachEvent("onclick",function(){t.noCloneEvent=false})
d.cloneNode(true).click()}for(p in{submit:true,change:true,focusin:true}){d.setAttribute(f="on"+p,"t")
t[p+"Bubbles"]=f in e||d.attributes[f].expando===false}d.style.backgroundClip="content-box"
d.cloneNode(true).style.backgroundClip=""
t.clearCloneStyle=d.style.backgroundClip==="content-box"
b(function(){var n,i,s,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0]
if(!u){return}n=o.createElement("div")
n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"
u.appendChild(n).appendChild(d)
d.innerHTML="<table><tr><td></td><td>t</td></tr></table>"
s=d.getElementsByTagName("td")
s[0].style.cssText="padding:0;margin:0;border:0;display:none"
c=s[0].offsetHeight===0
s[0].style.display=""
s[1].style.display="none"
t.reliableHiddenOffsets=c&&s[0].offsetHeight===0
d.innerHTML=""
d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"
t.boxSizing=d.offsetWidth===4
t.doesNotIncludeMarginInBodyOffset=u.offsetTop!==1
if(e.getComputedStyle){t.pixelPosition=(e.getComputedStyle(d,null)||{}).top!=="1%"
t.boxSizingReliable=(e.getComputedStyle(d,null)||{width:"4px"}).width==="4px"
i=d.appendChild(o.createElement("div"))
i.style.cssText=d.style.cssText=a
i.style.marginRight=i.style.width="0"
d.style.width="1px"
t.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)}if(typeof d.style.zoom!==r){d.innerHTML=""
d.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1"
t.inlineBlockNeedsLayout=d.offsetWidth===3
d.style.display="block"
d.innerHTML="<div></div>"
d.firstChild.style.width="5px"
t.shrinkWrapBlocks=d.offsetWidth!==3
if(t.inlineBlockNeedsLayout){u.style.zoom=1}}u.removeChild(n)
n=d=s=i=null})
n=a=u=l=i=s=null
return t}()
var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g
function P(e,n,i,r){if(!b.acceptData(e)){return}var o,s,a=b.expando,u=typeof n==="string",l=e.nodeType,c=l?b.cache:e,p=l?e[a]:e[a]&&a
if((!p||!c[p]||!r&&!c[p].data)&&u&&i===t){return}if(!p){if(l){e[a]=p=f.pop()||b.guid++}else{p=a}}if(!c[p]){c[p]={}
if(!l){c[p].toJSON=b.noop}}if(typeof n==="object"||typeof n==="function"){if(r){c[p]=b.extend(c[p],n)}else{c[p].data=b.extend(c[p].data,n)}}o=c[p]
if(!r){if(!o.data){o.data={}}o=o.data}if(i!==t){o[b.camelCase(n)]=i}if(u){s=o[n]
if(s==null){s=o[b.camelCase(n)]}}else{s=o}return s}function R(e,t,n){if(!b.acceptData(e)){return}var i,r,o,s=e.nodeType,a=s?b.cache:e,u=s?e[b.expando]:b.expando
if(!a[u]){return}if(t){o=n?a[u]:a[u].data
if(o){if(!b.isArray(t)){if(t in o){t=[t]}else{t=b.camelCase(t)
if(t in o){t=[t]}else{t=t.split(" ")}}}else{t=t.concat(b.map(t,b.camelCase))}for(i=0,r=t.length;i<r;i++){delete o[t[i]]}if(!(n?$:b.isEmptyObject)(o)){return}}}if(!n){delete a[u].data
if(!$(a[u])){return}}if(s){b.cleanData([e],true)}else if(b.support.deleteExpando||a!=a.window){delete a[u]}else{a[u]=null}}b.extend({cache:{},expando:"jQuery"+(c+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando]
return!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,true)},_removeData:function(e,t){return R(e,t,true)},acceptData:function(e){if(e.nodeType&&e.nodeType!==1&&e.nodeType!==9){return false}var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()]
return!t||t!==true&&e.getAttribute("classid")===t}})
b.fn.extend({data:function(e,n){var i,r,o=this[0],s=0,a=null
if(e===t){if(this.length){a=b.data(o)
if(o.nodeType===1&&!b._data(o,"parsedAttrs")){i=o.attributes
for(;s<i.length;s++){r=i[s].name
if(!r.indexOf("data-")){r=b.camelCase(r.slice(5))
W(o,r,a[r])}}b._data(o,"parsedAttrs",true)}}return a}if(typeof e==="object"){return this.each(function(){b.data(this,e)})}return b.access(this,function(n){if(n===t){return o?W(o,e,b.data(o,e)):null}this.each(function(){b.data(this,e,n)})},null,n,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}})
function W(e,n,i){if(i===t&&e.nodeType===1){var r="data-"+n.replace(B,"-$1").toLowerCase()
i=e.getAttribute(r)
if(typeof i==="string"){try{i=i==="true"?true:i==="false"?false:i==="null"?null:+i+""===i?+i:O.test(i)?b.parseJSON(i):i}catch(o){}b.data(e,n,i)}else{i=t}}return i}function $(e){var t
for(t in e){if(t==="data"&&b.isEmptyObject(e[t])){continue}if(t!=="toJSON"){return false}}return true}b.extend({queue:function(e,t,n){var i
if(e){t=(t||"fx")+"queue"
i=b._data(e,t)
if(n){if(!i||b.isArray(n)){i=b._data(e,t,b.makeArray(n))}else{i.push(n)}}return i||[]}},dequeue:function(e,t){t=t||"fx"
var n=b.queue(e,t),i=n.length,r=n.shift(),o=b._queueHooks(e,t),s=function(){b.dequeue(e,t)}
if(r==="inprogress"){r=n.shift()
i--}o.cur=r
if(r){if(t==="fx"){n.unshift("inprogress")}delete o.stop
r.call(e,s,o)}if(!i&&o){o.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks"
return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue")
b._removeData(e,n)})})}})
b.fn.extend({queue:function(e,n){var i=2
if(typeof e!=="string"){n=e
e="fx"
i--}if(arguments.length<i){return b.queue(this[0],e)}return n===t?this:this.each(function(){var t=b.queue(this,e,n)
b._queueHooks(this,e)
if(e==="fx"&&t[0]!=="inprogress"){b.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){e=b.fx?b.fx.speeds[e]||e:e
t=t||"fx"
return this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var i,r=1,o=b.Deferred(),s=this,a=this.length,u=function(){if(!--r){o.resolveWith(s,[s])}}
if(typeof e!=="string"){n=e
e=t}e=e||"fx"
while(a--){i=b._data(s[a],e+"queueHooks")
if(i&&i.empty){r++
i.empty.add(u)}}u()
return o.promise(n)}})
var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input
b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){e=b.propFix[e]||e
return this.each(function(){try{this[e]=t
delete this[e]}catch(n){}})},addClass:function(e){var t,n,i,r,o,s=0,a=this.length,u=typeof e==="string"&&e
if(b.isFunction(e)){return this.each(function(t){b(this).addClass(e.call(this,t,this.className))})}if(u){t=(e||"").match(w)||[]
for(;s<a;s++){n=this[s]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(X," "):" ")
if(i){o=0
while(r=t[o++]){if(i.indexOf(" "+r+" ")<0){i+=r+" "}}n.className=b.trim(i)}}}return this},removeClass:function(e){var t,n,i,r,o,s=0,a=this.length,u=arguments.length===0||typeof e==="string"&&e
if(b.isFunction(e)){return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))})}if(u){t=(e||"").match(w)||[]
for(;s<a;s++){n=this[s]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(X," "):"")
if(i){o=0
while(r=t[o++]){while(i.indexOf(" "+r+" ")>=0){i=i.replace(" "+r+" "," ")}}n.className=e?b.trim(i):""}}}return this},toggleClass:function(e,t){var n=typeof e,i=typeof t==="boolean"
if(b.isFunction(e)){return this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var o,s=0,a=b(this),u=t,l=e.match(w)||[]
while(o=l[s++]){u=i?u:!a.hasClass(o)
a[u?"addClass":"removeClass"](o)}}else if(n===r||n==="boolean"){if(this.className){b._data(this,"__className__",this.className)}this.className=this.className||e===false?"":b._data(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,i=this.length
for(;n<i;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0){return true}}return false},val:function(e){var n,i,r,o=this[0]
if(!arguments.length){if(o){i=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()]
if(i&&"get"in i&&(n=i.get(o,"value"))!==t){return n}n=o.value
return typeof n==="string"?n.replace(U,""):n==null?"":n}return}r=b.isFunction(e)
return this.each(function(n){var o,s=b(this)
if(this.nodeType!==1){return}if(r){o=e.call(this,n,s.val())}else{o=e}if(o==null){o=""}else if(typeof o==="number"){o+=""}else if(b.isArray(o)){o=b.map(o,function(e){return e==null?"":e+""})}i=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()]
if(!i||!("set"in i)||i.set(this,o,"value")===t){this.value=o}})}})
b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value
return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,i=e.options,r=e.selectedIndex,o=e.type==="select-one"||r<0,s=o?null:[],a=o?r+1:i.length,u=r<0?a:o?r:0
for(;u<a;u++){n=i[u]
if((n.selected||u===r)&&(b.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!b.nodeName(n.parentNode,"optgroup"))){t=b(n).val()
if(o){return t}s.push(t)}}return s},set:function(e,t){var n=b.makeArray(t)
b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0})
if(!n.length){e.selectedIndex=-1}return n}}},attr:function(e,n,i){var o,s,a,u=e.nodeType
if(!e||u===3||u===8||u===2){return}if(typeof e.getAttribute===r){return b.prop(e,n,i)}s=u!==1||!b.isXMLDoc(e)
if(s){n=n.toLowerCase()
o=b.attrHooks[n]||(J.test(n)?z:I)}if(i!==t){if(i===null){b.removeAttr(e,n)}else if(o&&s&&"set"in o&&(a=o.set(e,i,n))!==t){return a}else{e.setAttribute(n,i+"")
return i}}else if(o&&s&&"get"in o&&(a=o.get(e,n))!==null){return a}else{if(typeof e.getAttribute!==r){a=e.getAttribute(n)}return a==null?t:a}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(w)
if(o&&e.nodeType===1){while(n=o[r++]){i=b.propFix[n]||n
if(J.test(n)){if(!Q&&G.test(n)){e[b.camelCase("default-"+n)]=e[i]=false}else{e[i]=false}}else{b.attr(e,n,"")}e.removeAttribute(Q?n:i)}}},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&t==="radio"&&b.nodeName(e,"input")){var n=e.value
e.setAttribute("type",t)
if(n){e.value=n}return t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,i){var r,o,s,a=e.nodeType
if(!e||a===3||a===8||a===2){return}s=a!==1||!b.isXMLDoc(e)
if(s){n=b.propFix[n]||n
o=b.propHooks[n]}if(i!==t){if(o&&"set"in o&&(r=o.set(e,i,n))!==t){return r}else{return e[n]=i}}else{if(o&&"get"in o&&(r=o.get(e,n))!==null){return r}else{return e[n]}}},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex")
return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}})
z={get:function(e,n){var i=b.prop(e,n),r=typeof i==="boolean"&&e.getAttribute(n),o=typeof i==="boolean"?K&&Q?r!=null:G.test(n)?e[b.camelCase("default-"+n)]:!!r:e.getAttributeNode(n)
return o&&o.value!==false?n.toLowerCase():t},set:function(e,t,n){if(t===false){b.removeAttr(e,n)}else if(K&&Q||!G.test(n)){e.setAttribute(!Q&&b.propFix[n]||n,n)}else{e[b.camelCase("default-"+n)]=e[n]=true}return n}}
if(!K||!Q){b.attrHooks.value={get:function(e,n){var i=e.getAttributeNode(n)
return b.nodeName(e,"input")?e.defaultValue:i&&i.specified?i.value:t},set:function(e,t,n){if(b.nodeName(e,"input")){e.defaultValue=t}else{return I&&I.set(e,t,n)}}}}if(!Q){I=b.valHooks.button={get:function(e,n){var i=e.getAttributeNode(n)
return i&&(n==="id"||n==="name"||n==="coords"?i.value!=="":i.specified)?i.value:t},set:function(e,n,i){var r=e.getAttributeNode(i)
if(!r){e.setAttributeNode(r=e.ownerDocument.createAttribute(i))}r.value=n+=""
return i==="value"||n===e.getAttribute(i)?n:t}}
b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,t===""?false:t,n)}}
b.each(["width","height"],function(e,t){b.attrHooks[t]=b.extend(b.attrHooks[t],{set:function(e,n){if(n===""){e.setAttribute(t,"auto")
return n}}})})}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var i=e.getAttribute(n,2)
return i==null?t:i}})})
b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode
if(t){t.selectedIndex
if(t.parentNode){t.parentNode.selectedIndex}}return null}})}if(!b.support.enctype){b.propFix.enctype="encoding"}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,t){if(b.isArray(t)){return e.checked=b.inArray(b(e).val(),t)>=0}}})})
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,it=/^([^.]*)(?:\.(.+)|)$/
function rt(){return true}function ot(){return false}b.event={global:{},add:function(e,n,i,o,s){var a,u,l,f,c,p,d,h,g,m,y,v=b._data(e)
if(!v){return}if(i.handler){f=i
i=f.handler
s=f.selector}if(!i.guid){i.guid=b.guid++}if(!(u=v.events)){u=v.events={}}if(!(p=v.handle)){p=v.handle=function(e){return typeof b!==r&&(!e||b.event.triggered!==e.type)?b.event.dispatch.apply(p.elem,arguments):t}
p.elem=e}n=(n||"").match(w)||[""]
l=n.length
while(l--){a=it.exec(n[l])||[]
g=y=a[1]
m=(a[2]||"").split(".").sort()
c=b.event.special[g]||{}
g=(s?c.delegateType:c.bindType)||g
c=b.event.special[g]||{}
d=b.extend({type:g,origType:y,data:o,handler:i,guid:i.guid,selector:s,needsContext:s&&b.expr.match.needsContext.test(s),namespace:m.join(".")},f)
if(!(h=u[g])){h=u[g]=[]
h.delegateCount=0
if(!c.setup||c.setup.call(e,o,m,p)===false){if(e.addEventListener){e.addEventListener(g,p,false)}else if(e.attachEvent){e.attachEvent("on"+g,p)}}}if(c.add){c.add.call(e,d)
if(!d.handler.guid){d.handler.guid=i.guid}}if(s){h.splice(h.delegateCount++,0,d)}else{h.push(d)}b.event.global[g]=true}e=null},remove:function(e,t,n,i,r){var o,s,a,u,l,f,c,p,d,h,g,m=b.hasData(e)&&b._data(e)
if(!m||!(f=m.events)){return}t=(t||"").match(w)||[""]
l=t.length
while(l--){a=it.exec(t[l])||[]
d=g=a[1]
h=(a[2]||"").split(".").sort()
if(!d){for(d in f){b.event.remove(e,d+t[l],n,i,true)}continue}c=b.event.special[d]||{}
d=(i?c.delegateType:c.bindType)||d
p=f[d]||[]
a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)")
u=o=p.length
while(o--){s=p[o]
if((r||g===s.origType)&&(!n||n.guid===s.guid)&&(!a||a.test(s.namespace))&&(!i||i===s.selector||i==="**"&&s.selector)){p.splice(o,1)
if(s.selector){p.delegateCount--}if(c.remove){c.remove.call(e,s)}}}if(u&&!p.length){if(!c.teardown||c.teardown.call(e,h,m.handle)===false){b.removeEvent(e,d,m.handle)}delete f[d]}}if(b.isEmptyObject(f)){delete m.handle
b._removeData(e,"events")}},trigger:function(n,i,r,s){var a,u,l,f,c,p,d,h=[r||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[]
l=p=r=r||o
if(r.nodeType===3||r.nodeType===8){return}if(nt.test(g+b.event.triggered)){return}if(g.indexOf(".")>=0){m=g.split(".")
g=m.shift()
m.sort()}u=g.indexOf(":")<0&&"on"+g
n=n[b.expando]?n:new b.Event(g,typeof n==="object"&&n)
n.isTrigger=true
n.namespace=m.join(".")
n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
n.result=t
if(!n.target){n.target=r}i=i==null?[n]:b.makeArray(i,[n])
c=b.event.special[g]||{}
if(!s&&c.trigger&&c.trigger.apply(r,i)===false){return}if(!s&&!c.noBubble&&!b.isWindow(r)){f=c.delegateType||g
if(!nt.test(f+g)){l=l.parentNode}for(;l;l=l.parentNode){h.push(l)
p=l}if(p===(r.ownerDocument||o)){h.push(p.defaultView||p.parentWindow||e)}}d=0
while((l=h[d++])&&!n.isPropagationStopped()){n.type=d>1?f:c.bindType||g
a=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle")
if(a){a.apply(l,i)}a=u&&l[u]
if(a&&b.acceptData(l)&&a.apply&&a.apply(l,i)===false){n.preventDefault()}}n.type=g
if(!s&&!n.isDefaultPrevented()){if((!c._default||c._default.apply(r.ownerDocument,i)===false)&&!(g==="click"&&b.nodeName(r,"a"))&&b.acceptData(r)){if(u&&r[g]&&!b.isWindow(r)){p=r[u]
if(p){r[u]=null}b.event.triggered=g
try{r[g]()}catch(v){}b.event.triggered=t
if(p){r[u]=p}}}}return n.result},dispatch:function(e){e=b.event.fix(e)
var n,i,r,o,s,a=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],f=b.event.special[e.type]||{}
u[0]=e
e.delegateTarget=this
if(f.preDispatch&&f.preDispatch.call(this,e)===false){return}a=b.event.handlers.call(this,e,l)
n=0
while((o=a[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem
s=0
while((r=o.handlers[s++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(r.namespace)){e.handleObj=r
e.data=r.data
i=((b.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,u)
if(i!==t){if((e.result=i)===false){e.preventDefault()
e.stopPropagation()}}}}}if(f.postDispatch){f.postDispatch.call(this,e)}return e.result},handlers:function(e,n){var i,r,o,s,a=[],u=n.delegateCount,l=e.target
if(u&&l.nodeType&&(!e.button||e.type!=="click")){for(;l!=this;l=l.parentNode||this){if(l.nodeType===1&&(l.disabled!==true||e.type!=="click")){o=[]
for(s=0;s<u;s++){r=n[s]
i=r.selector+" "
if(o[i]===t){o[i]=r.needsContext?b(i,this).index(l)>=0:b.find(i,this,null,[l]).length}if(o[i]){o.push(r)}}if(o.length){a.push({elem:l,handlers:o})}}}}if(u<n.length){a.push({elem:this,handlers:n.slice(u)})}return a},fix:function(e){if(e[b.expando]){return e}var t,n,i,r=e.type,s=e,a=this.fixHooks[r]
if(!a){this.fixHooks[r]=a=tt.test(r)?this.mouseHooks:et.test(r)?this.keyHooks:{}}i=a.props?this.props.concat(a.props):this.props
e=new b.Event(s)
t=i.length
while(t--){n=i[t]
e[n]=s[n]}if(!e.target){e.target=s.srcElement||o}if(e.target.nodeType===3){e.target=e.target.parentNode}e.metaKey=!!e.metaKey
return a.filter?a.filter(e,s):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var i,r,s,a=n.button,u=n.fromElement
if(e.pageX==null&&n.clientX!=null){r=e.target.ownerDocument||o
s=r.documentElement
i=r.body
e.pageX=n.clientX+(s&&s.scrollLeft||i&&i.scrollLeft||0)-(s&&s.clientLeft||i&&i.clientLeft||0)
e.pageY=n.clientY+(s&&s.scrollTop||i&&i.scrollTop||0)-(s&&s.clientTop||i&&i.clientTop||0)}if(!e.relatedTarget&&u){e.relatedTarget=u===e.target?n.toElement:u}if(!e.which&&a!==t){e.which=a&1?1:a&2?3:a&4?2:0}return e}},special:{load:{noBubble:true},click:{trigger:function(){if(b.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click()
return false}}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus){try{this.focus()
return false}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===o.activeElement&&this.blur){this.blur()
return false}},delegateType:"focusout"},beforeunload:{postDispatch:function(e){if(e.result!==t){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,i){var r=b.extend(new b.Event,n,{type:e,isSimulated:true,originalEvent:{}})
if(i){b.event.trigger(r,null,t)}else{b.event.dispatch.call(t,r)}if(r.isDefaultPrevented()){n.preventDefault()}}}
b.removeEvent=o.removeEventListener?function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}:function(e,t,n){var i="on"+t
if(e.detachEvent){if(typeof e[i]===r){e[i]=null}e.detachEvent(i,n)}}
b.Event=function(e,t){if(!(this instanceof b.Event)){return new b.Event(e,t)}if(e&&e.type){this.originalEvent=e
this.type=e.type
this.isDefaultPrevented=e.defaultPrevented||e.returnValue===false||e.getPreventDefault&&e.getPreventDefault()?rt:ot}else{this.type=e}if(t){b.extend(this,t)}this.timeStamp=e&&e.timeStamp||b.now()
this[b.expando]=true}
b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=rt
if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=rt
if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=rt
this.stopPropagation()}}
b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj
if(!r||r!==i&&!b.contains(i,r)){e.type=o.origType
n=o.handler.apply(this,arguments)
e.type=t}return n}}})
if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false}b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,i=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t
if(i&&!b._data(i,"submitBubbles")){b.event.add(i,"submit._submit",function(e){e._submit_bubble=true})
b._data(i,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble
if(this.parentNode&&!e.isTrigger){b.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(b.nodeName(this,"form")){return false}b.event.remove(this,"._submit")}}}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(Z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}})
b.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}b.event.simulate("change",this,e,true)})}return false}b.event.add(this,"beforeactivate._change",function(e){var t=e.target
if(Z.test(t.nodeName)&&!b._data(t,"changeBubbles")){b.event.add(t,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){b.event.simulate("change",this.parentNode,e,true)}})
b._data(t,"changeBubbles",true)}})},handle:function(e){var t=e.target
if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox"){return e.handleObj.handler.apply(this,arguments)}},teardown:function(){b.event.remove(this,"._change")
return!Z.test(this.nodeName)}}}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,i=function(e){b.event.simulate(t,e.target,b.event.fix(e),true)}
b.event.special[t]={setup:function(){if(n++===0){o.addEventListener(e,i,true)}},teardown:function(){if(--n===0){o.removeEventListener(e,i,true)}}}})}b.fn.extend({on:function(e,n,i,r,o){var s,a
if(typeof e==="object"){if(typeof n!=="string"){i=i||n
n=t}for(s in e){this.on(s,n,i,e[s],o)}return this}if(i==null&&r==null){r=n
i=n=t}else if(r==null){if(typeof n==="string"){r=i
i=t}else{r=i
i=n
n=t}}if(r===false){r=ot}else if(!r){return this}if(o===1){a=r
r=function(e){b().off(e)
return a.apply(this,arguments)}
r.guid=a.guid||(a.guid=b.guid++)}return this.each(function(){b.event.add(this,e,r,i,n)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,n,i){var r,o
if(e&&e.preventDefault&&e.handleObj){r=e.handleObj
b(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler)
return this}if(typeof e==="object"){for(o in e){this.off(o,n,e[o])}return this}if(n===false||typeof n==="function"){i=n
n=t}if(i===false){i=ot}return this.each(function(){b.event.remove(this,e,i,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n){return b.event.trigger(e,t,n,true)}}});(function(e,t){var n,i,r,o,s,a,u,l,f,c,p,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=rt(),E=rt(),S=rt(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length
for(;t<n;t++){if(this[t]===e){return t}}return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=new RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=new RegExp("^"+_+"*,"+_+"*"),I=new RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=new RegExp(R),X=new RegExp("^"+O+"$"),U={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:new RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536
return n!==n?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320)}
try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[]
while(t=this[e++]){n.push(t)}return n}}function it(e){return Y.test(e+"")}function rt(){var e,t=[]
return e=function(n,i){if(t.push(n+=" ")>r.cacheLength){delete e[t.shift()]}return e[n]=i}}function ot(e){e[x]=true
return e}function st(e){var t=c.createElement("div")
try{return e(t)}catch(n){return false}finally{t=null}}function at(e,t,n,i){var r,o,s,a,u,l,p,g,m,v
if((t?t.ownerDocument||t:w)!==c){f(t)}t=t||c
n=n||[]
if(!e||typeof e!=="string"){return n}if((a=t.nodeType)!==1&&a!==9){return[]}if(!d&&!i){if(r=J.exec(e)){if(s=r[1]){if(a===9){o=t.getElementById(s)
if(o&&o.parentNode){if(o.id===s){n.push(o)
return n}}else{return n}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&y(t,o)&&o.id===s){n.push(o)
return n}}}else if(r[2]){H.apply(n,q.call(t.getElementsByTagName(e),0))
return n}else if((s=r[3])&&T.getByClassName&&t.getElementsByClassName){H.apply(n,q.call(t.getElementsByClassName(s),0))
return n}}if(T.qsa&&!h.test(e)){p=true
g=x
m=t
v=a===9&&e
if(a===1&&t.nodeName.toLowerCase()!=="object"){l=pt(e)
if(p=t.getAttribute("id")){g=p.replace(K,"\\$&")}else{t.setAttribute("id",g)}g="[id='"+g+"'] "
u=l.length
while(u--){l[u]=g+dt(l[u])}m=V.test(e)&&t.parentNode||t
v=l.join(",")}if(v){try{H.apply(n,q.call(m.querySelectorAll(v),0))
return n}catch(b){}finally{if(!p){t.removeAttribute("id")}}}}}return wt(e.replace(W,"$1"),t,n,i)}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?t.nodeName!=="HTML":false}
f=at.setDocument=function(e){var n=e?e.ownerDocument||e:w
if(n===c||n.nodeType!==9||!n.documentElement){return c}c=n
p=n.documentElement
d=s(n)
T.tagNameNoComments=st(function(e){e.appendChild(n.createComment(""))
return!e.getElementsByTagName("*").length})
T.attributes=st(function(e){e.innerHTML="<select></select>"
var t=typeof e.lastChild.getAttribute("multiple")
return t!=="boolean"&&t!=="string"})
T.getByClassName=st(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>"
if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false}e.lastChild.className="e"
return e.getElementsByClassName("e").length===2})
T.getByName=st(function(e){e.id=x+0
e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>"
p.insertBefore(e,p.firstChild)
var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length
T.getIdNotName=!n.getElementById(x)
p.removeChild(e)
return t})
r.attrHandle=st(function(e){e.innerHTML="<a href='#'></a>"
return e.firstChild&&typeof e.firstChild.getAttribute!==A&&e.firstChild.getAttribute("href")==="#"})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}}
if(T.getIdNotName){r.find["ID"]=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}}
r.filter["ID"]=function(e){var t=e.replace(et,tt)
return function(e){return e.getAttribute("id")===t}}}else{r.find["ID"]=function(e,n){if(typeof n.getElementById!==A&&!d){var i=n.getElementById(e)
return i?i.id===e||typeof i.getAttributeNode!==A&&i.getAttributeNode("id").value===e?[i]:t:[]}}
r.filter["ID"]=function(e){var t=e.replace(et,tt)
return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id")
return n&&n.value===t}}}r.find["TAG"]=T.tagNameNoComments?function(e,t){if(typeof t.getElementsByTagName!==A){return t.getElementsByTagName(e)}}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e)
if(e==="*"){while(n=o[r++]){if(n.nodeType===1){i.push(n)}}return i}return o}
r.find["NAME"]=T.getByName&&function(e,t){if(typeof t.getElementsByName!==A){return t.getElementsByName(name)}}
r.find["CLASS"]=T.getByClassName&&function(e,t){if(typeof t.getElementsByClassName!==A&&!d){return t.getElementsByClassName(e)}}
g=[]
h=[":focus"]
if(T.qsa=it(n.querySelectorAll)){st(function(e){e.innerHTML="<select><option selected=''></option></select>"
if(!e.querySelectorAll("[selected]").length){h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!e.querySelectorAll(":checked").length){h.push(":checked")}})
st(function(e){e.innerHTML="<input type='hidden' i=''/>"
if(e.querySelectorAll("[i^='']").length){h.push("[*^$]="+_+"*(?:\"\"|'')")}if(!e.querySelectorAll(":enabled").length){h.push(":enabled",":disabled")}e.querySelectorAll("*,:x")
h.push(",.*:")})}if(T.matchesSelector=it(m=p.matchesSelector||p.mozMatchesSelector||p.webkitMatchesSelector||p.oMatchesSelector||p.msMatchesSelector)){st(function(e){T.disconnectedMatch=m.call(e,"div")
m.call(e,"[s!='']:x")
g.push("!=",R)})}h=new RegExp(h.join("|"))
g=new RegExp(g.join("|"))
y=it(p.contains)||p.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,i=t&&t.parentNode
return e===i||!!(i&&i.nodeType===1&&(n.contains?n.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false}
v=p.compareDocumentPosition?function(e,t){var i
if(e===t){u=true
return 0}if(i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t)){if(i&1||e.parentNode&&e.parentNode.nodeType===11){if(e===n||y(w,e)){return-1}if(t===n||y(w,t)){return 1}return 0}return i&4?-1:1}return e.compareDocumentPosition?-1:1}:function(e,t){var i,r=0,o=e.parentNode,s=t.parentNode,a=[e],l=[t]
if(e===t){u=true
return 0}else if(!o||!s){return e===n?-1:t===n?1:o?-1:s?1:0}else if(o===s){return ut(e,t)}i=e
while(i=i.parentNode){a.unshift(i)}i=t
while(i=i.parentNode){l.unshift(i)}while(a[r]===l[r]){r++}return r?ut(a[r],l[r]):a[r]===w?-1:l[r]===w?1:0}
u=false;[0,0].sort(v)
T.detectDuplicates=u
return c}
at.matches=function(e,t){return at(e,null,null,t)}
at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c){f(e)}t=t.replace(Z,"='$1']")
if(T.matchesSelector&&!d&&(!g||!g.test(t))&&!h.test(t)){try{var n=m.call(e,t)
if(n||T.disconnectedMatch||e.document&&e.document.nodeType!==11){return n}}catch(i){}}return at(t,c,null,[e]).length>0}
at.contains=function(e,t){if((e.ownerDocument||e)!==c){f(e)}return y(e,t)}
at.attr=function(e,t){var n
if((e.ownerDocument||e)!==c){f(e)}if(!d){t=t.toLowerCase()}if(n=r.attrHandle[t]){return n(e)}if(d||T.attributes){return e.getAttribute(t)}return((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===true?t:n&&n.specified?n.value:null}
at.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
at.uniqueSort=function(e){var t,n=[],i=1,r=0
u=!T.detectDuplicates
e.sort(v)
if(u){for(;t=e[i];i++){if(t===e[i-1]){r=n.push(i)}}while(r--){e.splice(n[r],1)}}return e}
function ut(e,t){var n=t&&e,i=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j)
if(i){return i}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase()
return n==="input"&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase()
return(n==="input"||n==="button")&&t.type===e}}function ct(e){return ot(function(t){t=+t
return ot(function(n,i){var r,o=e([],n.length,t),s=o.length
while(s--){if(n[r=o[s]]){n[r]=!(i[r]=n[r])}}})})}o=at.getText=function(e){var t,n="",i=0,r=e.nodeType
if(!r){for(;t=e[i];i++){n+=o(t)}}else if(r===1||r===9||r===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=o(e)}}}else if(r===3||r===4){return e.nodeValue}return n}
r=at.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(et,tt)
e[3]=(e[4]||e[5]||"").replace(et,tt)
if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase()
if(e[1].slice(0,3)==="nth"){if(!e[3]){at.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"))
e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){at.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[5]&&e[2]
if(U["CHILD"].test(e[0])){return null}if(e[4]){e[2]=e[4]}else if(n&&z.test(n)&&(t=pt(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t)
e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(et,tt).toLowerCase()
return function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(e){var t=k[e+" "]
return t||(t=new RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=at.attr(i,e)
if(r==null){return t==="!="}if(!t){return true}r+=""
return t==="="?r===n:t==="!="?r!==n:t==="^="?n&&r.indexOf(n)===0:t==="*="?n&&r.indexOf(n)>-1:t==="$="?n&&r.slice(-n.length)===n:t==="~="?(" "+r+" ").indexOf(n)>-1:t==="|="?r===n||r.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,i,r){var o=e.slice(0,3)!=="nth",s=e.slice(-4)!=="last",a=t==="of-type"
return i===1&&r===0?function(e){return!!e.parentNode}:function(t,n,u){var l,f,c,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a
if(m){if(o){while(g){c=t
while(c=c[g]){if(a?c.nodeName.toLowerCase()===y:c.nodeType===1){return false}}h=g=e==="only"&&!h&&"nextSibling"}return true}h=[s?m.firstChild:m.lastChild]
if(s&&v){f=m[x]||(m[x]={})
l=f[e]||[]
d=l[0]===N&&l[1]
p=l[0]===N&&l[2]
c=d&&m.childNodes[d]
while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if(c.nodeType===1&&++p&&c===t){f[e]=[N,d,p]
break}}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N){p=l[1]}else{while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if((a?c.nodeName.toLowerCase()===y:c.nodeType===1)&&++p){if(v){(c[x]||(c[x]={}))[e]=[N,p]}if(c===t){break}}}}p-=r
return p===i||p%i===0&&p/i>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e)
if(i[x]){return i(t)}if(i.length>1){n=[e,e,"",t]
return r.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var r,o=i(e,t),s=o.length
while(s--){r=M.call(e,o[s])
e[r]=!(n[r]=o[s])}}):function(e){return i(e,0,n)}}return i}},pseudos:{not:ot(function(e){var t=[],n=[],i=a(e.replace(W,"$1"))
return i[x]?ot(function(e,t,n,r){var o,s=i(e,null,r,[]),a=e.length
while(a--){if(o=s[a]){e[a]=!(t[a]=o)}}}):function(e,r,o){t[0]=e
i(t,null,o,n)
return!n.pop()}}),has:ot(function(e){return function(t){return at(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){if(!X.test(e||"")){at.error("unsupported lang: "+e)}e=e.replace(et,tt).toLowerCase()
return function(t){var n
do{if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang){n=n.toLowerCase()
return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1)
return false}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return!r.pseudos["empty"](e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t
return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:ct(function(){return[0]}),last:ct(function(e,t){return[t-1]}),eq:ct(function(e,t,n){return[n<0?n+t:n]}),even:ct(function(e,t){var n=0
for(;n<t;n+=2){e.push(n)}return e}),odd:ct(function(e,t){var n=1
for(;n<t;n+=2){e.push(n)}return e}),lt:ct(function(e,t,n){var i=n<0?n+t:n
for(;--i>=0;){e.push(i)}return e}),gt:ct(function(e,t,n){var i=n<0?n+t:n
for(;++i<t;){e.push(i)}return e})}}
for(n in{radio:true,checkbox:true,file:true,password:true,image:true}){r.pseudos[n]=lt(n)}for(n in{submit:true,reset:true}){r.pseudos[n]=ft(n)}function pt(e,t){var n,i,o,s,a,u,l,f=E[e+" "]
if(f){return t?0:f.slice(0)}a=e
u=[]
l=r.preFilter
while(a){if(!n||(i=$.exec(a))){if(i){a=a.slice(i[0].length)||a}u.push(o=[])}n=false
if(i=I.exec(a)){n=i.shift()
o.push({value:n,type:i[0].replace(W," ")})
a=a.slice(n.length)}for(s in r.filter){if((i=U[s].exec(a))&&(!l[s]||(i=l[s](i)))){n=i.shift()
o.push({value:n,type:s,matches:i})
a=a.slice(n.length)}}if(!n){break}}return t?a.length:a?at.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,i=""
for(;t<n;t++){i+=e[t].value}return i}function ht(e,t,n){var r=t.dir,o=n&&r==="parentNode",s=C++
return t.first?function(t,n,i){while(t=t[r]){if(t.nodeType===1||o){return e(t,n,i)}}}:function(t,n,a){var u,l,f,c=N+" "+s
if(a){while(t=t[r]){if(t.nodeType===1||o){if(e(t,n,a)){return true}}}}else{while(t=t[r]){if(t.nodeType===1||o){f=t[x]||(t[x]={})
if((l=f[r])&&l[0]===c){if((u=l[1])===true||u===i){return u===true}}else{l=f[r]=[c]
l[1]=e(t,n,a)||i
if(l[1]===true){return true}}}}}}}function gt(e){return e.length>1?function(t,n,i){var r=e.length
while(r--){if(!e[r](t,n,i)){return false}}return true}:e[0]}function mt(e,t,n,i,r){var o,s=[],a=0,u=e.length,l=t!=null
for(;a<u;a++){if(o=e[a]){if(!n||n(o,i,r)){s.push(o)
if(l){t.push(a)}}}}return s}function yt(e,t,n,i,r,o){if(i&&!i[x]){i=yt(i)}if(r&&!r[x]){r=yt(r,o)}return ot(function(o,s,a,u){var l,f,c,p=[],d=[],h=s.length,g=o||xt(t||"*",a.nodeType?[a]:a,[]),m=e&&(o||!t)?mt(g,p,e,a,u):g,y=n?r||(o?e:h||i)?[]:s:m
if(n){n(m,y,a,u)}if(i){l=mt(y,d)
i(l,[],a,u)
f=l.length
while(f--){if(c=l[f]){y[d[f]]=!(m[d[f]]=c)}}}if(o){if(r||e){if(r){l=[]
f=y.length
while(f--){if(c=y[f]){l.push(m[f]=c)}}r(null,y=[],l,u)}f=y.length
while(f--){if((c=y[f])&&(l=r?M.call(o,c):p[f])>-1){o[l]=!(s[l]=c)}}}}else{y=mt(y===s?y.splice(h,y.length):y)
if(r){r(null,s,y,u)}else{H.apply(s,y)}}})}function vt(e){var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],u=s?1:0,f=ht(function(e){return e===t},a,true),c=ht(function(e){return M.call(t,e)>-1},a,true),p=[function(e,n,i){return!s&&(i||n!==l)||((t=n).nodeType?f(e,n,i):c(e,n,i))}]
for(;u<o;u++){if(n=r.relative[e[u].type]){p=[ht(gt(p),n)]}else{n=r.filter[e[u].type].apply(null,e[u].matches)
if(n[x]){i=++u
for(;i<o;i++){if(r.relative[e[i].type]){break}}return yt(u>1&&gt(p),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,u<i&&vt(e.slice(u,i)),i<o&&vt(e=e.slice(i)),i<o&&dt(e))}p.push(n)}}return gt(p)}function bt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,u,f,p,d){var h,g,m,y=[],v=0,b="0",x=a&&[],w=d!=null,T=l,C=a||s&&r.find["TAG"]("*",d&&u.parentNode||u),k=N+=T==null?1:Math.random()||.1
if(w){l=u!==c&&u
i=n}for(;(h=C[b])!=null;b++){if(s&&h){g=0
while(m=e[g++]){if(m(h,u,f)){p.push(h)
break}}if(w){N=k
i=++n}}if(o){if(h=!m&&h){v--}if(a){x.push(h)}}}v+=b
if(o&&b!==v){g=0
while(m=t[g++]){m(x,y,u,f)}if(a){if(v>0){while(b--){if(!(x[b]||y[b])){y[b]=L.call(p)}}}y=mt(y)}H.apply(p,y)
if(w&&!a&&y.length>0&&v+t.length>1){at.uniqueSort(p)}}if(w){N=k
l=T}return x}
return o?ot(a):a}a=at.compile=function(e,t){var n,i=[],r=[],o=S[e+" "]
if(!o){if(!t){t=pt(e)}n=t.length
while(n--){o=vt(t[n])
if(o[x]){i.push(o)}else{r.push(o)}}o=S(e,bt(r,i))}return o}
function xt(e,t,n){var i=0,r=t.length
for(;i<r;i++){at(e,t[i],n)}return n}function wt(e,t,n,i){var o,s,u,l,f,c=pt(e)
if(!i){if(c.length===1){s=c[0]=c[0].slice(0)
if(s.length>2&&(u=s[0]).type==="ID"&&t.nodeType===9&&!d&&r.relative[s[1].type]){t=r.find["ID"](u.matches[0].replace(et,tt),t)[0]
if(!t){return n}e=e.slice(s.shift().value.length)}o=U["needsContext"].test(e)?0:s.length
while(o--){u=s[o]
if(r.relative[l=u.type]){break}if(f=r.find[l]){if(i=f(u.matches[0].replace(et,tt),V.test(s[0].type)&&t.parentNode||t)){s.splice(o,1)
e=i.length&&dt(s)
if(!e){H.apply(n,q.call(i,0))
return n}break}}}}}a(e,c)(i,t,d,n,V.test(e))
return n}r.pseudos["nth"]=r.pseudos["eq"]
function Tt(){}r.filters=Tt.prototype=r.pseudos
r.setFilters=new Tt
f()
at.attr=b.attr
b.find=at
b.expr=at.selectors
b.expr[":"]=b.expr.pseudos
b.unique=at.uniqueSort
b.text=at.getText
b.isXMLDoc=at.isXML
b.contains=at.contains})(e)
var st=/Until$/,at=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ft={children:true,contents:true,next:true,prev:true}
b.fn.extend({find:function(e){var t,n,i,r=this.length
if(typeof e!=="string"){i=this
return this.pushStack(b(e).filter(function(){for(t=0;t<r;t++){if(b.contains(i[t],this)){return true}}}))}n=[]
for(t=0;t<r;t++){b.find(e,this[t],n)}n=this.pushStack(r>1?b.unique(n):n)
n.selector=(this.selector?this.selector+" ":"")+e
return n},has:function(e){var t,n=b(e,this),i=n.length
return this.filter(function(){for(t=0;t<i;t++){if(b.contains(this,n[t])){return true}}})},not:function(e){return this.pushStack(pt(this,e,false))},filter:function(e){return this.pushStack(pt(this,e,true))},is:function(e){return!!e&&(typeof e==="string"?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,i=0,r=this.length,o=[],s=lt.test(e)||typeof e!=="string"?b(e,t||this.context):0
for(;i<r;i++){n=this[i]
while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(s?s.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n)
break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return b.inArray(this[0],b(e))}return b.inArray(e.jquery?e[0]:e,this)},add:function(e,t){var n=typeof e==="string"?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),i=b.merge(this.get(),n)
return this.pushStack(b.unique(i))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}})
b.fn.andSelf=b.fn.addBack
function ct(e,t){do{e=e[t]}while(e&&e.nodeType!==1)
return e}b.each({parent:function(e){var t=e.parentNode
return t&&t.nodeType!==11?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return ct(e,"nextSibling")},prev:function(e){return ct(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,i){var r=b.map(this,t,n)
if(!st.test(e)){i=n}if(i&&typeof i==="string"){r=b.filter(i,r)}r=this.length>1&&!ft[e]?b.unique(r):r
if(this.length>1&&at.test(e)){r=r.reverse()}return this.pushStack(r)}})
b.extend({filter:function(e,t,n){if(n){e=":not("+e+")"}return t.length===1?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,i){var r=[],o=e[n]
while(o&&o.nodeType!==9&&(i===t||o.nodeType!==1||!b(o).is(i))){if(o.nodeType===1){r.push(o)}o=o[n]}return r},sibling:function(e,t){var n=[]
for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}})
function pt(e,t,n){t=t||0
if(b.isFunction(t)){return b.grep(e,function(e,i){var r=!!t.call(e,i,e)
return r===n})}else if(t.nodeType){return b.grep(e,function(e){return e===t===n})}else if(typeof t==="string"){var i=b.grep(e,function(e){return e.nodeType===1})
if(ut.test(t)){return b.filter(t,i,!n)}else{t=b.filter(t,i)}}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment()
if(n.createElement){while(t.length){n.createElement(t.pop())}}return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=new RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"))
At.optgroup=At.option
At.tbody=At.tfoot=At.colgroup=At.caption=At.thead
At.th=At.td
b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(t){b(this).wrapAll(e.call(this,t))})}if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(true)
if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this
while(e.firstChild&&e.firstChild.nodeType===1){e=e.firstChild}return e}).append(this)}return this},wrapInner:function(e){if(b.isFunction(e)){return this.each(function(t){b(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=b(this),n=t.contents()
if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=b.isFunction(e)
return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(e,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,i=0
for(;(n=this[i])!=null;i++){if(!e||b.filter(e,[n]).length>0){if(!t&&n.nodeType===1){b.cleanData(Ot(n))}if(n.parentNode){if(t&&b.contains(n.ownerDocument,n)){Mt(Ot(n,"script"))}n.parentNode.removeChild(n)}}}return this},empty:function(){var e,t=0
for(;(e=this[t])!=null;t++){if(e.nodeType===1){b.cleanData(Ot(e,false))}while(e.firstChild){e.removeChild(e.firstChild)}if(e.options&&b.nodeName(e,"select")){e.options.length=0}}return this},clone:function(e,t){e=e==null?false:e
t=t==null?e:t
return this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},i=0,r=this.length
if(e===t){return n.nodeType===1?n.innerHTML.replace(gt,""):t}if(typeof e==="string"&&!Tt.test(e)&&(b.support.htmlSerialize||!mt.test(e))&&(b.support.leadingWhitespace||!yt.test(e))&&!At[(bt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(vt,"<$1></$2>")
try{for(;i<r;i++){n=this[i]||{}
if(n.nodeType===1){b.cleanData(Ot(n,false))
n.innerHTML=e}}n=0}catch(o){}}if(n){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e)
if(!t&&typeof e!=="string"){e=b(e).not(this).detach()}return this.domManip([e],true,function(e){var t=this.nextSibling,n=this.parentNode
if(n){b(this).remove()
n.insertBefore(e,t)}})},detach:function(e){return this.remove(e,true)},domManip:function(e,n,i){e=p.apply([],e)
var r,o,s,a,u,l,f=0,c=this.length,d=this,h=c-1,g=e[0],m=b.isFunction(g)
if(m||!(c<=1||typeof g!=="string"||b.support.checkClone||!Ct.test(g))){return this.each(function(r){var o=d.eq(r)
if(m){e[0]=g.call(this,r,n?o.html():t)}o.domManip(e,n,i)})}if(c){l=b.buildFragment(e,this[0].ownerDocument,false,this)
r=l.firstChild
if(l.childNodes.length===1){l=r}if(r){n=n&&b.nodeName(r,"tr")
a=b.map(Ot(l,"script"),Ht)
s=a.length
for(;f<c;f++){o=l
if(f!==h){o=b.clone(o,true,true)
if(s){b.merge(a,Ot(o,"script"))}}i.call(n&&b.nodeName(this[f],"table")?Lt(this[f],"tbody"):this[f],o,f)}if(s){u=a[a.length-1].ownerDocument
b.map(a,qt)
for(f=0;f<s;f++){o=a[f]
if(kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)){if(o.src){b.ajax({url:o.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,""))}}}}l=r=null}}return this}})
function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type")
e.type=(t&&t.specified)+"/"+e.type
return e}function qt(e){var t=Et.exec(e.type)
if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function Mt(e,t){var n,i=0
for(;(n=e[i])!=null;i++){b._data(n,"globalEval",!t||b._data(t[i],"globalEval"))}}function _t(e,t){if(t.nodeType!==1||!b.hasData(e)){return}var n,i,r,o=b._data(e),s=b._data(t,o),a=o.events
if(a){delete s.handle
s.events={}
for(n in a){for(i=0,r=a[n].length;i<r;i++){b.event.add(t,n,a[n][i])}}}if(s.data){s.data=b.extend({},s.data)}}function Ft(e,t){var n,i,r
if(t.nodeType!==1){return}n=t.nodeName.toLowerCase()
if(!b.support.noCloneEvent&&t[b.expando]){r=b._data(t)
for(i in r.events){b.removeEvent(t,i,r.handle)}t.removeAttribute(b.expando)}if(n==="script"&&t.text!==e.text){Ht(t).text=e.text
qt(t)}else if(n==="object"){if(t.parentNode){t.outerHTML=e.outerHTML}if(b.support.html5Clone&&(e.innerHTML&&!b.trim(t.innerHTML))){t.innerHTML=e.innerHTML}}else if(n==="input"&&Nt.test(e.type)){t.defaultChecked=t.checked=e.checked
if(t.value!==e.value){t.value=e.value}}else if(n==="option"){t.defaultSelected=t.selected=e.defaultSelected}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,i=0,r=[],o=b(e),s=o.length-1
for(;i<=s;i++){n=i===s?this:this.clone(true)
b(o[i])[t](n)
d.apply(r,n.get())}return this.pushStack(r)}})
function Ot(e,n){var i,o,s=0,a=typeof e.getElementsByTagName!==r?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==r?e.querySelectorAll(n||"*"):t
if(!a){for(a=[],i=e.childNodes||e;(o=i[s])!=null;s++){if(!n||b.nodeName(o,n)){a.push(o)}else{b.merge(a,Ot(o,n))}}}return n===t||n&&b.nodeName(e,n)?b.merge([e],a):a}function Bt(e){if(Nt.test(e.type)){e.defaultChecked=e.checked}}b.extend({clone:function(e,t,n){var i,r,o,s,a,u=b.contains(e.ownerDocument,e)
if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")){o=e.cloneNode(true)}else{Dt.innerHTML=e.outerHTML
Dt.removeChild(o=Dt.firstChild)}if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!b.isXMLDoc(e)){i=Ot(o)
a=Ot(e)
for(s=0;(r=a[s])!=null;++s){if(i[s]){Ft(r,i[s])}}}if(t){if(n){a=a||Ot(e)
i=i||Ot(o)
for(s=0;(r=a[s])!=null;s++){_t(r,i[s])}}else{_t(e,o)}}i=Ot(o,"script")
if(i.length>0){Mt(i,!u&&Ot(e,"script"))}i=a=r=null
return o},buildFragment:function(e,t,n,i){var r,o,s,a,u,l,f,c=e.length,p=dt(t),d=[],h=0
for(;h<c;h++){o=e[h]
if(o||o===0){if(b.type(o)==="object"){b.merge(d,o.nodeType?[o]:o)}else if(!wt.test(o)){d.push(t.createTextNode(o))}else{a=a||p.appendChild(t.createElement("div"))
u=(bt.exec(o)||["",""])[1].toLowerCase()
f=At[u]||At._default
a.innerHTML=f[1]+o.replace(vt,"<$1></$2>")+f[2]
r=f[0]
while(r--){a=a.lastChild}if(!b.support.leadingWhitespace&&yt.test(o)){d.push(t.createTextNode(yt.exec(o)[0]))}if(!b.support.tbody){o=u==="table"&&!xt.test(o)?a.firstChild:f[1]==="<table>"&&!xt.test(o)?a:0
r=o&&o.childNodes.length
while(r--){if(b.nodeName(l=o.childNodes[r],"tbody")&&!l.childNodes.length){o.removeChild(l)}}}b.merge(d,a.childNodes)
a.textContent=""
while(a.firstChild){a.removeChild(a.firstChild)}a=p.lastChild}}}if(a){p.removeChild(a)}if(!b.support.appendChecked){b.grep(Ot(d,"input"),Bt)}h=0
while(o=d[h++]){if(i&&b.inArray(o,i)!==-1){continue}s=b.contains(o.ownerDocument,o)
a=Ot(p.appendChild(o),"script")
if(s){Mt(a)}if(n){r=0
while(o=a[r++]){if(kt.test(o.type||"")){n.push(o)}}}}a=null
return p},cleanData:function(e,t){var n,i,o,s,a=0,u=b.expando,l=b.cache,c=b.support.deleteExpando,p=b.event.special
for(;(n=e[a])!=null;a++){if(t||b.acceptData(n)){o=n[u]
s=o&&l[o]
if(s){if(s.events){for(i in s.events){if(p[i]){b.event.remove(n,i)}else{b.removeEvent(n,i,s.handle)}}}if(l[o]){delete l[o]
if(c){delete n[u]}else if(typeof n.removeAttribute!==r){n.removeAttribute(u)}else{n[u]=null}f.push(o)}}}}}})
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=new RegExp("^("+x+")(.*)$","i"),Yt=new RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=new RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"]
function tn(e,t){if(t in e){return t}var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=en.length
while(r--){t=en[r]+n
if(t in e){return t}}return i}function nn(e,t){e=t||e
return b.css(e,"display")==="none"||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,i,r,o=[],s=0,a=e.length
for(;s<a;s++){i=e[s]
if(!i.style){continue}o[s]=b._data(i,"olddisplay")
n=i.style.display
if(t){if(!o[s]&&n==="none"){i.style.display=""}if(i.style.display===""&&nn(i)){o[s]=b._data(i,"olddisplay",un(i.nodeName))}}else{if(!o[s]){r=nn(i)
if(n&&n!=="none"||!r){b._data(i,"olddisplay",r?n:b.css(i,"display"))}}}}for(s=0;s<a;s++){i=e[s]
if(!i.style){continue}if(!t||i.style.display==="none"||i.style.display===""){i.style.display=t?o[s]||"":"none"}}return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,i){var r,o,s={},a=0
if(b.isArray(n)){o=Rt(e)
r=n.length
for(;a<r;a++){s[n[a]]=b.css(e,n[a],false,o)}return s}return i!==t?b.style(e,n,i):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,true)},hide:function(){return rn(this)},toggle:function(e){var t=typeof e==="boolean"
return this.each(function(){if(t?e:nn(this)){b(this).show()}else{b(this).hide()}})}})
b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity")
return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,i,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var o,s,a,u=b.camelCase(n),l=e.style
n=b.cssProps[u]||(b.cssProps[u]=tn(l,u))
a=b.cssHooks[n]||b.cssHooks[u]
if(i!==t){s=typeof i
if(s==="string"&&(o=Jt.exec(i))){i=(o[1]+1)*o[2]+parseFloat(b.css(e,n))
s="number"}if(i==null||s==="number"&&isNaN(i)){return}if(s==="number"&&!b.cssNumber[u]){i+="px"}if(!b.support.clearCloneStyle&&i===""&&n.indexOf("background")===0){l[n]="inherit"}if(!a||!("set"in a)||(i=a.set(e,i,r))!==t){try{l[n]=i}catch(f){}}}else{if(a&&"get"in a&&(o=a.get(e,false,r))!==t){return o}return l[n]}},css:function(e,n,i,r){var o,s,a,u=b.camelCase(n)
n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u))
a=b.cssHooks[n]||b.cssHooks[u]
if(a&&"get"in a){s=a.get(e,true,i)}if(s===t){s=Wt(e,n,r)}if(s==="normal"&&n in Kt){s=Kt[n]}if(i===""||i){o=parseFloat(s)
return i===true||b.isNumeric(o)?o||0:s}return s},swap:function(e,t,n,i){var r,o,s={}
for(o in t){s[o]=e.style[o]
e.style[o]=t[o]}r=n.apply(e,i||[])
for(o in t){e.style[o]=s[o]}return r}})
if(e.getComputedStyle){Rt=function(t){return e.getComputedStyle(t,null)}
Wt=function(e,n,i){var r,o,s,a=i||Rt(e),u=a?a.getPropertyValue(n)||a[n]:t,l=e.style
if(a){if(u===""&&!b.contains(e.ownerDocument,e)){u=b.style(e,n)}if(Yt.test(u)&&Ut.test(n)){r=l.width
o=l.minWidth
s=l.maxWidth
l.minWidth=l.maxWidth=l.width=u
u=a.width
l.width=r
l.minWidth=o
l.maxWidth=s}}return u}}else if(o.documentElement.currentStyle){Rt=function(e){return e.currentStyle}
Wt=function(e,n,i){var r,o,s,a=i||Rt(e),u=a?a[n]:t,l=e.style
if(u==null&&l&&l[n]){u=l[n]}if(Yt.test(u)&&!zt.test(n)){r=l.left
o=e.runtimeStyle
s=o&&o.left
if(s){o.left=e.currentStyle.left}l.left=n==="fontSize"?"1em":u
u=l.pixelLeft+"px"
l.left=r
if(s){o.left=s}}return u===""?"auto":u}}function on(e,t,n){var i=Vt.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function sn(e,t,n,i,r){var o=n===(i?"border":"content")?4:t==="width"?1:0,s=0
for(;o<4;o+=2){if(n==="margin"){s+=b.css(e,n+Zt[o],true,r)}if(i){if(n==="content"){s-=b.css(e,"padding"+Zt[o],true,r)}if(n!=="margin"){s-=b.css(e,"border"+Zt[o]+"Width",true,r)}}else{s+=b.css(e,"padding"+Zt[o],true,r)
if(n!=="padding"){s+=b.css(e,"border"+Zt[o]+"Width",true,r)}}}return s}function an(e,t,n){var i=true,r=t==="width"?e.offsetWidth:e.offsetHeight,o=Rt(e),s=b.support.boxSizing&&b.css(e,"boxSizing",false,o)==="border-box"
if(r<=0||r==null){r=Wt(e,t,o)
if(r<0||r==null){r=e.style[t]}if(Yt.test(r)){return r}i=s&&(b.support.boxSizingReliable||r===e.style[t])
r=parseFloat(r)||0}return r+sn(e,t,n||(s?"border":"content"),i,o)+"px"}function un(e){var t=o,n=Gt[e]
if(!n){n=ln(e,t)
if(n==="none"||!n){Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement)
t=(Pt[0].contentWindow||Pt[0].contentDocument).document
t.write("<!doctype html><html><body>")
t.close()
n=ln(e,t)
Pt.detach()}Gt[e]=n}return n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),i=b.css(n[0],"display")
n.remove()
return i}b.each(["height","width"],function(e,t){b.cssHooks[t]={get:function(e,n,i){if(n){return e.offsetWidth===0&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return an(e,t,i)}):an(e,t,i)}},set:function(e,n,i){var r=i&&Rt(e)
return on(e,n,i?sn(e,t,i,b.support.boxSizing&&b.css(e,"boxSizing",false,r)==="border-box",r):0)}}})
if(!b.support.opacity){b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=b.isNumeric(t)?"alpha(opacity="+t*100+")":"",o=i&&i.filter||n.filter||""
n.zoom=1
if((t>=1||t==="")&&b.trim(o.replace($t,""))===""&&n.removeAttribute){n.removeAttribute("filter")
if(t===""||i&&!i.filter){return}}n.filter=$t.test(o)?o.replace($t,r):o+" "+r}}}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(e,t){if(t){return b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"])}}}}if(!b.support.pixelPosition&&b.fn.position){b.each(["top","left"],function(e,t){b.cssHooks[t]={get:function(e,n){if(n){n=Wt(e,t)
return Yt.test(n)?b(e).position()[t]+"px":n}}}})}})
if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!b.support.reliableHiddenOffsets&&(e.style&&e.style.display||b.css(e,"display"))==="none"}
b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}}b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var i=0,r={},o=typeof n==="string"?n.split(" "):[n]
for(;i<4;i++){r[e+Zt[i]+t]=o[i]||o[i-2]||o[0]}return r}}
if(!Ut.test(e)){b.cssHooks[e+t].set=on}})
var fn=/%20/g,cn=/\[\]$/,pn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i
b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements")
return e?b.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val()
return n==null?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(pn,"\r\n")}}):{name:t.name,value:n.replace(pn,"\r\n")}}).get()}})
b.param=function(e,n){var i,r=[],o=function(e,t){t=b.isFunction(t)?t():t==null?"":t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(n===t){n=b.ajaxSettings&&b.ajaxSettings.traditional}if(b.isArray(e)||e.jquery&&!b.isPlainObject(e)){b.each(e,function(){o(this.name,this.value)})}else{for(i in e){gn(i,e[i],n,o)}}return r.join("&").replace(fn,"+")}
function gn(e,t,n,i){var r
if(b.isArray(t)){b.each(t,function(t,r){if(n||cn.test(e)){i(e,r)}else{gn(e+"["+(typeof r==="object"?t:"")+"]",r,n,i)}})}else if(!n&&b.type(t)==="object"){for(r in t){gn(e+"["+r+"]",t[r],n,i)}}else{i(e,t)}}b.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})
b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)}
var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*")
try{yn=s.href}catch(Ln){yn=o.createElement("a")
yn.href=""
yn=yn.href}mn=En.exec(yn.toLowerCase())||[]
function Hn(e){return function(t,n){if(typeof t!=="string"){n=t
t="*"}var i,r=0,o=t.toLowerCase().match(w)||[]
if(b.isFunction(n)){while(i=o[r++]){if(i[0]==="+"){i=i.slice(1)||"*";(e[i]=e[i]||[]).unshift(n)}else{(e[i]=e[i]||[]).push(n)}}}}}function qn(e,t,n,i){var r={},o=e===jn
function s(a){var u
r[a]=true
b.each(e[a]||[],function(e,a){var l=a(t,n,i)
if(typeof l==="string"&&!o&&!r[l]){t.dataTypes.unshift(l)
s(l)
return false}else if(o){return!(u=l)}})
return u}return s(t.dataTypes[0])||!r["*"]&&s("*")}function Mn(e,n){var i,r,o=b.ajaxSettings.flatOptions||{}
for(r in n){if(n[r]!==t){(o[r]?e:i||(i={}))[r]=n[r]}}if(i){b.extend(true,e,i)}return e}b.fn.load=function(e,n,i){if(typeof e!=="string"&&Sn){return Sn.apply(this,arguments)}var r,o,s,a=this,u=e.indexOf(" ")
if(u>=0){r=e.slice(u,e.length)
e=e.slice(0,u)}if(b.isFunction(n)){i=n
n=t}else if(n&&typeof n==="object"){s="POST"}if(a.length>0){b.ajax({url:e,type:s,dataType:"html",data:n}).done(function(e){o=arguments
a.html(r?b("<div>").append(b.parseHTML(e)).find(r):e)}).complete(i&&function(e,t){a.each(i,o||[e.responseText,t,e])})}return this}
b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}})
b.each(["get","post"],function(e,n){b[n]=function(e,i,r,o){if(b.isFunction(i)){o=o||r
r=i
i=t}return b.ajax({url:e,type:n,dataType:o,data:i,success:r})}})
b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){if(typeof e==="object"){n=e
e=t}n=n||{}
var i,r,o,s,a,u,l,f,c=b.ajaxSetup({},n),p=c.context||c,d=c.context&&(p.nodeType||p.jquery)?b(p):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=c.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t
if(x===2){if(!f){f={}
while(t=Tn.exec(s)){f[t[1].toLowerCase()]=t[2]}}t=f[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return x===2?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
if(!x){e=v[n]=v[n]||e
y[e]=t}return this},overrideMimeType:function(e){if(!x){c.mimeType=e}return this},statusCode:function(e){var t
if(e){if(x<2){for(t in e){m[t]=[m[t],e[t]]}}else{N.always(e[N.status])}}return this},abort:function(e){var t=e||T
if(l){l.abort(t)}k(0,t)
return this}}
h.promise(N).complete=g.add
N.success=N.done
N.error=N.fail
c.url=((e||c.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//")
c.type=n.method||n.type||c.method||c.type
c.dataTypes=b.trim(c.dataType||"*").toLowerCase().match(w)||[""]
if(c.crossDomain==null){i=En.exec(c.url.toLowerCase())
c.crossDomain=!!(i&&(i[1]!==mn[1]||i[2]!==mn[2]||(i[3]||(i[1]==="http:"?80:443))!=(mn[3]||(mn[1]==="http:"?80:443))))}if(c.data&&c.processData&&typeof c.data!=="string"){c.data=b.param(c.data,c.traditional)}qn(An,c,n,N)
if(x===2){return N}u=c.global
if(u&&b.active++===0){b.event.trigger("ajaxStart")}c.type=c.type.toUpperCase()
c.hasContent=!Cn.test(c.type)
o=c.url
if(!c.hasContent){if(c.data){o=c.url+=(bn.test(o)?"&":"?")+c.data
delete c.data}if(c.cache===false){c.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++}}if(c.ifModified){if(b.lastModified[o]){N.setRequestHeader("If-Modified-Since",b.lastModified[o])}if(b.etag[o]){N.setRequestHeader("If-None-Match",b.etag[o])}}if(c.data&&c.hasContent&&c.contentType!==false||n.contentType){N.setRequestHeader("Content-Type",c.contentType)}N.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Dn+"; q=0.01":""):c.accepts["*"])
for(r in c.headers){N.setRequestHeader(r,c.headers[r])}if(c.beforeSend&&(c.beforeSend.call(p,N,c)===false||x===2)){return N.abort()}T="abort"
for(r in{success:1,error:1,complete:1}){N[r](c[r])}l=qn(jn,c,n,N)
if(!l){k(-1,"No Transport")}else{N.readyState=1
if(u){d.trigger("ajaxSend",[N,c])}if(c.async&&c.timeout>0){a=setTimeout(function(){N.abort("timeout")},c.timeout)}try{x=1
l.send(y,k)}catch(C){if(x<2){k(-1,C)}else{throw C}}}function k(e,n,i,r){var f,y,v,w,T,C=n
if(x===2){return}x=2
if(a){clearTimeout(a)}l=t
s=r||""
N.readyState=e>0?4:0
if(i){w=_n(c,N,i)}if(e>=200&&e<300||e===304){if(c.ifModified){T=N.getResponseHeader("Last-Modified")
if(T){b.lastModified[o]=T}T=N.getResponseHeader("etag")
if(T){b.etag[o]=T}}if(e===204){f=true
C="nocontent"}else if(e===304){f=true
C="notmodified"}else{f=Fn(c,w)
C=f.state
y=f.data
v=f.error
f=!v}}else{v=C
if(e||!C){C="error"
if(e<0){e=0}}}N.status=e
N.statusText=(n||C)+""
if(f){h.resolveWith(p,[y,C,N])}else{h.rejectWith(p,[N,C,v])}N.statusCode(m)
m=t
if(u){d.trigger(f?"ajaxSuccess":"ajaxError",[N,c,f?y:v])}g.fireWith(p,[N,C])
if(u){d.trigger("ajaxComplete",[N,c])
if(!--b.active){b.event.trigger("ajaxStop")}}}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}})
function _n(e,n,i){var r,o,s,a,u=e.contents,l=e.dataTypes,f=e.responseFields
for(a in f){if(a in i){n[f[a]]=i[a]}}while(l[0]==="*"){l.shift()
if(o===t){o=e.mimeType||n.getResponseHeader("Content-Type")}}if(o){for(a in u){if(u[a]&&u[a].test(o)){l.unshift(a)
break}}}if(l[0]in i){s=l[0]}else{for(a in i){if(!l[0]||e.converters[a+" "+l[0]]){s=a
break}if(!r){r=a}}s=s||r}if(s){if(s!==l[0]){l.unshift(s)}return i[s]}}function Fn(e,t){var n,i,r,o,s={},a=0,u=e.dataTypes.slice(),l=u[0]
if(e.dataFilter){t=e.dataFilter(t,e.dataType)}if(u[1]){for(r in e.converters){s[r.toLowerCase()]=e.converters[r]}}for(;i=u[++a];){if(i!=="*"){if(l!=="*"&&l!==i){r=s[l+" "+i]||s["* "+i]
if(!r){for(n in s){o=n.split(" ")
if(o[1]===i){r=s[l+" "+o[0]]||s["* "+o[0]]
if(r){if(r===true){r=s[n]}else if(s[n]!==true){i=o[0]
u.splice(a--,0,i)}break}}}}if(r!==true){if(r&&e["throws"]){t=r(t)}else{try{t=r(t)}catch(f){return{state:"parsererror",error:r?f:"No conversion from "+l+" to "+i}}}}}l=i}}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){b.globalEval(e)
return e}}})
b.ajaxPrefilter("script",function(e){if(e.cache===t){e.cache=false}if(e.crossDomain){e.type="GET"
e.global=false}})
b.ajaxTransport("script",function(e){if(e.crossDomain){var n,i=o.head||b("head")[0]||o.documentElement
return{send:function(t,r){n=o.createElement("script")
n.async=true
if(e.scriptCharset){n.charset=e.scriptCharset}n.src=e.url
n.onload=n.onreadystatechange=function(e,t){if(t||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null
if(n.parentNode){n.parentNode.removeChild(n)}n=null
if(!t){r(200,"success")}}}
i.insertBefore(n,i.firstChild)},abort:function(){if(n){n.onload(t,true)}}}}})
var On=[],Bn=/(=)\?(?=&|$)|\?\?/
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++
this[e]=true
return e}})
b.ajaxPrefilter("json jsonp",function(n,i,r){var o,s,a,u=n.jsonp!==false&&(Bn.test(n.url)?"url":typeof n.data==="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data")
if(u||n.dataTypes[0]==="jsonp"){o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback
if(u){n[u]=n[u].replace(Bn,"$1"+o)}else if(n.jsonp!==false){n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o}n.converters["script json"]=function(){if(!a){b.error(o+" was not called")}return a[0]}
n.dataTypes[0]="json"
s=e[o]
e[o]=function(){a=arguments}
r.always(function(){e[o]=s
if(n[o]){n.jsonpCallback=i.jsonpCallback
On.push(o)}if(a&&b.isFunction(s)){s(a[0])}a=s=t})
return"script"}})
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e
for(e in Pn){Pn[e](t,true)}}
function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In
Rn=b.ajaxSettings.xhr()
b.support.cors=!!Rn&&"withCredentials"in Rn
Rn=b.support.ajax=!!Rn
if(Rn){b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var i
return{send:function(r,o){var s,a,u=n.xhr()
if(n.username){u.open(n.type,n.url,n.async,n.username,n.password)}else{u.open(n.type,n.url,n.async)}if(n.xhrFields){for(a in n.xhrFields){u[a]=n.xhrFields[a]}}if(n.mimeType&&u.overrideMimeType){u.overrideMimeType(n.mimeType)}if(!n.crossDomain&&!r["X-Requested-With"]){r["X-Requested-With"]="XMLHttpRequest"}try{for(a in r){u.setRequestHeader(a,r[a])}}catch(l){}u.send(n.hasContent&&n.data||null)
i=function(e,r){var a,l,f,c
try{if(i&&(r||u.readyState===4)){i=t
if(s){u.onreadystatechange=b.noop
if($n){delete Pn[s]}}if(r){if(u.readyState!==4){u.abort()}}else{c={}
a=u.status
l=u.getAllResponseHeaders()
if(typeof u.responseText==="string"){c.text=u.responseText}try{f=u.statusText}catch(p){f=""}if(!a&&n.isLocal&&!n.crossDomain){a=c.text?200:404}else if(a===1223){a=204}}}}catch(d){if(!r){o(-1,d)}}if(c){o(a,f,c,l)}}
if(!n.async){i()}else if(u.readyState===4){setTimeout(i)}else{s=++Wn
if($n){if(!Pn){Pn={}
b(e).unload($n)}Pn[s]=i}u.onreadystatechange=i}},abort:function(){if(i){i(t,true)}}}}})}var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=new RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[ni],Qn={"*":[function(e,t){var n,i,r=this.createTween(e,t),o=Yn.exec(t),s=r.cur(),a=+s||0,u=1,l=20
if(o){n=+o[2]
i=o[3]||(b.cssNumber[e]?"":"px")
if(i!=="px"&&a){a=b.css(r.elem,e,true)||n||1
do{u=u||".5"
a=a/u
b.style(r.elem,e,a+i)}while(u!==(u=r.cur()/s)&&u!==1&&--l)}r.unit=i
r.start=a
r.end=o[1]?a+(o[1]+1)*n:n}return r}]}
function Kn(){setTimeout(function(){Xn=t})
return Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var i=(Qn[t]||[]).concat(Qn["*"]),r=0,o=i.length
for(;r<o;r++){if(i[r].call(e,t,n)){return}}})}function ei(e,t,n){var i,r,o=0,s=Gn.length,a=b.Deferred().always(function(){delete u.elem}),u=function(){if(r){return false}var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),i=n/l.duration||0,o=1-i,s=0,u=l.tweens.length
for(;s<u;s++){l.tweens[s].run(o)}a.notifyWith(e,[l,o,n])
if(o<1&&u){return n}else{a.resolveWith(e,[l])
return false}},l=a.promise({elem:e,props:b.extend({},t),opts:b.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var i=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
l.tweens.push(i)
return i},stop:function(t){var n=0,i=t?l.tweens.length:0
if(r){return this}r=true
for(;n<i;n++){l.tweens[n].run(1)}if(t){a.resolveWith(e,[l,t])}else{a.rejectWith(e,[l,t])}return this}}),f=l.props
ti(f,l.opts.specialEasing)
for(;o<s;o++){i=Gn[o].call(l,e,f,l.opts)
if(i){return i}}Zn(l,f)
if(b.isFunction(l.opts.start)){l.opts.start.call(e,l)}b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue}))
return l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function ti(e,t){var n,i,r,o,s
for(r in e){i=b.camelCase(r)
o=t[i]
n=e[r]
if(b.isArray(n)){o=n[1]
n=e[r]=n[0]}if(r!==i){e[i]=n
delete e[r]}s=b.cssHooks[i]
if(s&&"expand"in s){n=s.expand(n)
delete e[i]
for(r in n){if(!(r in e)){e[r]=n[r]
t[r]=o}}}else{t[i]=o}}}b.Animation=b.extend(ei,{tweener:function(e,t){if(b.isFunction(e)){t=e
e=["*"]}else{e=e.split(" ")}var n,i=0,r=e.length
for(;i<r;i++){n=e[i]
Qn[n]=Qn[n]||[]
Qn[n].unshift(t)}},prefilter:function(e,t){if(t){Gn.unshift(e)}else{Gn.push(e)}}})
function ni(e,t,n){var i,r,o,s,a,u,l,f,c,p=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e)
if(!n.queue){f=b._queueHooks(e,"fx")
if(f.unqueued==null){f.unqueued=0
c=f.empty.fire
f.empty.fire=function(){if(!f.unqueued){c()}}}f.unqueued++
p.always(function(){p.always(function(){f.unqueued--
if(!b.queue(e,"fx").length){f.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[d.overflow,d.overflowX,d.overflowY]
if(b.css(e,"display")==="inline"&&b.css(e,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||un(e.nodeName)==="inline"){d.display="inline-block"}else{d.zoom=1}}}if(n.overflow){d.overflow="hidden"
if(!b.support.shrinkWrapBlocks){p.always(function(){d.overflow=n.overflow[0]
d.overflowX=n.overflow[1]
d.overflowY=n.overflow[2]})}}for(r in t){s=t[r]
if(Vn.exec(s)){delete t[r]
u=u||s==="toggle"
if(s===(m?"hide":"show")){continue}g.push(r)}}o=g.length
if(o){a=b._data(e,"fxshow")||b._data(e,"fxshow",{})
if("hidden"in a){m=a.hidden}if(u){a.hidden=!m}if(m){b(e).show()}else{p.done(function(){b(e).hide()})}p.done(function(){var t
b._removeData(e,"fxshow")
for(t in h){b.style(e,t,h[t])}})
for(r=0;r<o;r++){i=g[r]
l=p.createTween(i,m?a[i]:0)
h[i]=a[i]||b.style(e,i)
if(!(i in a)){a[i]=l.start
if(m){l.end=l.start
l.start=i==="width"||i==="height"?1:0}}}}}function ii(e,t,n,i,r){return new ii.prototype.init(e,t,n,i,r)}b.Tween=ii
ii.prototype={constructor:ii,init:function(e,t,n,i,r,o){this.elem=e
this.prop=n
this.easing=r||"swing"
this.options=t
this.start=this.now=this.cur()
this.end=i
this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=ii.propHooks[this.prop]
return e&&e.get?e.get(this):ii.propHooks._default.get(this)},run:function(e){var t,n=ii.propHooks[this.prop]
if(this.options.duration){this.pos=t=b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start
if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{ii.propHooks._default.set(this)}return this}}
ii.prototype.init.prototype=ii.prototype
ii.propHooks={_default:{get:function(e){var t
if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=b.css(e.elem,e.prop,"")
return!t||t==="auto"?0:t},set:function(e){if(b.fx.step[e.prop]){b.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[b.cssProps[e.prop]]!=null||b.cssHooks[e.prop])){b.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}}
ii.propHooks.scrollTop=ii.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}}
b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t]
b.fn[t]=function(e,i,r){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(ri(t,true),e,i,r)}})
b.fn.extend({fadeTo:function(e,t,n,i){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=b.isEmptyObject(e),o=b.speed(t,n,i),s=function(){var t=ei(this,b.extend({},e),o)
s.finish=function(){t.stop(true)}
if(r||b._data(this,"finish")){t.stop(true)}}
s.finish=s
return r||o.queue===false?this.each(s):this.queue(o.queue,s)},stop:function(e,n,i){var r=function(e){var t=e.stop
delete e.stop
t(i)}
if(typeof e!=="string"){i=n
n=e
e=t}if(n&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,n=e!=null&&e+"queueHooks",o=b.timers,s=b._data(this)
if(n){if(s[n]&&s[n].stop){r(s[n])}}else{for(n in s){if(s[n]&&s[n].stop&&Jn.test(n)){r(s[n])}}}for(n=o.length;n--;){if(o[n].elem===this&&(e==null||o[n].queue===e)){o[n].anim.stop(i)
t=false
o.splice(n,1)}}if(t||!i){b.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=b._data(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=b.timers,s=i?i.length:0
n.finish=true
b.queue(this,e,[])
if(r&&r.cur&&r.cur.finish){r.cur.finish.call(this)}for(t=o.length;t--;){if(o[t].elem===this&&o[t].queue===e){o[t].anim.stop(true)
o.splice(t,1)}}for(t=0;t<s;t++){if(i[t]&&i[t].finish){i[t].finish.call(this)}}delete n.finish})}})
function ri(e,t){var n,i={height:e},r=0
t=t?1:0
for(;r<4;r+=2-t){n=Zt[r]
i["margin"+n]=i["padding"+n]=e}if(t){i.opacity=i.width=e}return i}b.each({slideDown:ri("show"),slideUp:ri("hide"),slideToggle:ri("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})
b.speed=function(e,t,n){var i=e&&typeof e==="object"?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t}
i.duration=b.fx.off?0:typeof i.duration==="number"?i.duration:i.duration in b.fx.speeds?b.fx.speeds[i.duration]:b.fx.speeds._default
if(i.queue==null||i.queue===true){i.queue="fx"}i.old=i.complete
i.complete=function(){if(b.isFunction(i.old)){i.old.call(this)}if(i.queue){b.dequeue(this,i.queue)}}
return i}
b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}}
b.timers=[]
b.fx=ii.prototype.init
b.fx.tick=function(){var e,n=b.timers,i=0
Xn=b.now()
for(;i<n.length;i++){e=n[i]
if(!e()&&n[i]===e){n.splice(i--,1)}}if(!n.length){b.fx.stop()}Xn=t}
b.fx.timer=function(e){if(e()&&b.timers.push(e)){b.fx.start()}}
b.fx.interval=13
b.fx.start=function(){if(!Un){Un=setInterval(b.fx.tick,b.fx.interval)}}
b.fx.stop=function(){clearInterval(Un)
Un=null}
b.fx.speeds={slow:600,fast:200,_default:400}
b.fx.step={}
if(b.expr&&b.expr.filters){b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}}b.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)})}var n,i,o={top:0,left:0},s=this[0],a=s&&s.ownerDocument
if(!a){return}n=a.documentElement
if(!b.contains(n,s)){return o}if(typeof s.getBoundingClientRect!==r){o=s.getBoundingClientRect()}i=oi(a)
return{top:o.top+(i.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(i.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}}
b.offset={setOffset:function(e,t,n){var i=b.css(e,"position")
if(i==="static"){e.style.position="relative"}var r=b(e),o=r.offset(),s=b.css(e,"top"),a=b.css(e,"left"),u=(i==="absolute"||i==="fixed")&&b.inArray("auto",[s,a])>-1,l={},f={},c,p
if(u){f=r.position()
c=f.top
p=f.left}else{c=parseFloat(s)||0
p=parseFloat(a)||0}if(b.isFunction(t)){t=t.call(e,n,o)}if(t.top!=null){l.top=t.top-o.top+c}if(t.left!=null){l.left=t.left-o.left+p}if("using"in t){t.using.call(e,l)}else{r.css(l)}}}
b.fn.extend({position:function(){if(!this[0]){return}var e,t,n={top:0,left:0},i=this[0]
if(b.css(i,"position")==="fixed"){t=i.getBoundingClientRect()}else{e=this.offsetParent()
t=this.offset()
if(!b.nodeName(e[0],"html")){n=e.offset()}n.top+=b.css(e[0],"borderTopWidth",true)
n.left+=b.css(e[0],"borderLeftWidth",true)}return{top:t.top-n.top-b.css(i,"marginTop",true),left:t.left-n.left-b.css(i,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement
while(e&&(!b.nodeName(e,"html")&&b.css(e,"position")==="static")){e=e.offsetParent}return e||o.documentElement})}})
b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var i=/Y/.test(n)
b.fn[e]=function(r){return b.access(this,function(e,r,o){var s=oi(e)
if(o===t){return s?n in s?s[n]:s.document.documentElement[r]:e[r]}if(s){s.scrollTo(!i?o:b(s).scrollLeft(),i?o:b(s).scrollTop())}else{e[r]=o}},e,r,arguments.length,null)}})
function oi(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(i,r){b.fn[r]=function(r,o){var s=arguments.length&&(i||typeof r!=="boolean"),a=i||(r===true||o===true?"margin":"border")
return b.access(this,function(n,i,r){var o
if(b.isWindow(n)){return n.document.documentElement["client"+e]}if(n.nodeType===9){o=n.documentElement
return Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])}return r===t?b.css(n,i,a):b.style(n,i,r,a)},n,s?r:t,s,null)}})})
e.jQuery=e.$=b
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b})}})(window)
;
if(window.KA_ENABLE_RAVENJS){!function(e){function n(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function t(e){return"undefined"==typeof e}var r={},i=e.TraceKit,o=[].slice,c="?"
r.noConflict=function(){return e.TraceKit=i,r},r.wrap=function(e){function n(){try{return e.apply(this,arguments)}catch(n){throw r.report(n),n}}return n},r.report=function(){function t(e){l(),p.push(e)}function i(e){for(var n=p.length-1;n>=0;--n)p[n]===e&&p.splice(n,1)}function c(e,t){var i=null
if(!t||r.collectWindowErrors){for(var c in p)if(n(p,c))try{p[c].apply(null,[e].concat(o.call(arguments,2)))}catch(a){i=a}if(i)throw i}}function a(e,n,t){var i=null
if(h)r.computeStackTrace.augmentStackTraceWithInitialElement(h,n,t,e),i=h,h=null,g=null
else{var o={url:n,line:t}
o.func=r.computeStackTrace.guessFunctionName(o.url,o.line),o.context=r.computeStackTrace.gatherContext(o.url,o.line),i={mode:"onerror",message:e,url:document.location.href,stack:[o],useragent:navigator.userAgent}}return c(i,"from window.onerror"),s?s.apply(this,arguments):!1}function l(){f!==!0&&(s=e.onerror,e.onerror=a,f=!0)}function u(n){var t=o.call(arguments,1)
if(h){if(g===n)return
var i=h
h=null,g=null,c.apply(null,[i,null].concat(t))}var a=r.computeStackTrace(n)
throw h=a,g=n,e.setTimeout(function(){g===n&&(h=null,g=null,c.apply(null,[a,null].concat(t)))},a.incomplete?2e3:0),n}var s,f,p=[],g=null,h=null
return u.subscribe=t,u.unsubscribe=i,u}(),r.computeStackTrace=function(){function i(n){function t(){try{return new e.XMLHttpRequest}catch(n){return new e.ActiveXObject("Microsoft.XMLHTTP")}}if(!r.remoteFetching)return""
try{var i=t()
return i.open("GET",n,!1),i.send(""),i.responseText}catch(o){return""}}function o(e){if(!n(b,e)){var t="";-1!==e.indexOf(document.domain)&&(t=i(e)),b[e]=t?t.split("\n"):[]}return b[e]}function a(e,n){var r,i=/function ([^(]*)\(([^)]*)\)/,a=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,l="",u=10,s=o(e)
if(!s.length)return c
for(var f=0;u>f;++f)if(l=s[n-f]+l,!t(l)){if(r=a.exec(l))return r[1]
if(r=i.exec(l))return r[1]}return c}function l(e,n){var i=o(e)
if(!i.length)return null
var c=[],a=Math.floor(r.linesOfContext/2),l=a+r.linesOfContext%2,u=Math.max(0,n-a-1),s=Math.min(i.length,n+l-1)
n-=1
for(var f=u;s>f;++f)t(i[f])||c.push(i[f])
return c.length>0?c:null}function u(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function s(e){return u(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function f(e,n){for(var t,r,i=0,c=n.length;c>i;++i)if((t=o(n[i])).length&&(t=t.join("\n"),r=e.exec(t)))return{url:n[i],line:t.substring(0,r.index).split("\n").length,column:r.index-t.lastIndexOf("\n",r.index)-1}
return null}function p(e,n,t){var r,i=o(n),c=new RegExp("\\b"+u(e)+"\\b")
return t-=1,i&&i.length>t&&(r=c.exec(i[t]))?r.index:null}function g(n){for(var t,r,i,o,c=[e.location.href],a=document.getElementsByTagName("script"),l=""+n,p=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,g=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,h=0;h<a.length;++h){var d=a[h]
d.src&&c.push(d.src)}if(i=p.exec(l)){var m=i[1]?"\\s+"+i[1]:"",v=i[2].split(",").join("\\s*,\\s*")
t=u(i[3]).replace(/;$/,";?"),r=new RegExp("function"+m+"\\s*\\(\\s*"+v+"\\s*\\)\\s*{\\s*"+t+"\\s*}")}else r=new RegExp(u(l).replace(/\s+/g,"\\s+"))
if(o=f(r,c))return o
if(i=g.exec(l)){var x=i[1]
if(t=s(i[2]),r=new RegExp("on"+x+"=[\\'\"]\\s*"+t+"\\s*[\\'\"]","i"),o=f(r,c[0]))return o
if(r=new RegExp(t),o=f(r,c))return o}return null}function h(e){if(!e.stack)return null
for(var n,t,r=/^\s*at (?:((?:\[object object\])?\S+) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,i=/^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,o=e.stack.split("\n"),u=[],s=/^(.*) is undefined$/.exec(e.message),f=0,g=o.length;g>f;++f){if(n=i.exec(o[f]))t={url:n[3],func:n[1]||c,args:n[2]?n[2].split(","):"",line:+n[4],column:n[5]?+n[5]:null}
else{if(!(n=r.exec(o[f])))continue
t={url:n[2],func:n[1]||c,line:+n[3],column:n[4]?+n[4]:null}}!t.func&&t.line&&(t.func=a(t.url,t.line)),t.line&&(t.context=l(t.url,t.line)),u.push(t)}return u[0]&&u[0].line&&!u[0].column&&s&&(u[0].column=p(s[1],u[0].url,u[0].line)),u.length?{mode:"stack",name:e.name,message:e.message,url:document.location.href,stack:u,useragent:navigator.userAgent}:null}function d(e){for(var n,t=e.stacktrace,r=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,i=t.split("\n"),o=[],c=0,u=i.length;u>c;c+=2)if(n=r.exec(i[c])){var s={line:+n[1],column:+n[2],func:n[3]||n[4],args:n[5]?n[5].split(","):[],url:n[6]}
if(!s.func&&s.line&&(s.func=a(s.url,s.line)),s.line)try{s.context=l(s.url,s.line)}catch(f){}s.context||(s.context=[i[c+1]]),o.push(s)}return o.length?{mode:"stacktrace",name:e.name,message:e.message,url:document.location.href,stack:o,useragent:navigator.userAgent}:null}function m(t){var r=t.message.split("\n")
if(r.length<4)return null
var i,c,u,p,g=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,h=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,d=/^\s*Line (\d+) of function script\s*$/i,m=[],v=document.getElementsByTagName("script"),x=[]
for(c in v)n(v,c)&&!v[c].src&&x.push(v[c])
for(c=2,u=r.length;u>c;c+=2){var w=null
if(i=g.exec(r[c]))w={url:i[2],func:i[3],line:+i[1]}
else if(i=h.exec(r[c])){w={url:i[3],func:i[4]}
var y=+i[1],E=x[i[2]-1]
if(E&&(p=o(w.url))){p=p.join("\n")
var b=p.indexOf(E.innerText)
b>=0&&(w.line=y+p.substring(0,b).split("\n").length)}}else if(i=d.exec(r[c])){var k=e.location.href.replace(/#.*$/,""),S=i[1],C=new RegExp(s(r[c+1]))
p=f(C,[k]),w={url:k,line:p?p.line:S,func:""}}if(w){w.func||(w.func=a(w.url,w.line))
var R=l(w.url,w.line),O=R?R[Math.floor(R.length/2)]:null
w.context=R&&O.replace(/^\s*/,"")===r[c+1].replace(/^\s*/,"")?R:[r[c+1]],m.push(w)}}return m.length?{mode:"multiline",name:t.name,message:r[0],url:document.location.href,stack:m,useragent:navigator.userAgent}:null}function v(e,n,t,r){var i={url:n,line:t}
if(i.url&&i.line){e.incomplete=!1,i.func||(i.func=a(i.url,i.line)),i.context||(i.context=l(i.url,i.line))
var o=/ '([^']+)' /.exec(r)
if(o&&(i.column=p(o[1],i.url,i.line)),e.stack.length>0&&e.stack[0].url===i.url){if(e.stack[0].line===i.line)return!1
if(!e.stack[0].line&&e.stack[0].func===i.func)return e.stack[0].line=i.line,e.stack[0].context=i.context,!1}return e.stack.unshift(i),e.partial=!0,!0}return e.incomplete=!0,!1}function x(e,n){for(var t,i,o,l=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,u=[],s={},f=!1,h=x.caller;h&&!f;h=h.caller)if(h!==w&&h!==r.report){if(i={url:null,func:c,line:null,column:null},h.name?i.func=h.name:(t=l.exec(h.toString()))&&(i.func=t[1]),o=g(h)){i.url=o.url,i.line=o.line,i.func===c&&(i.func=a(i.url,i.line))
var d=/ '([^']+)' /.exec(e.message||e.description)
d&&(i.column=p(d[1],o.url,o.line))}s[""+h]?f=!0:s[""+h]=!0,u.push(i)}n&&u.splice(0,n)
var m={mode:"callers",name:e.name,message:e.message,url:document.location.href,stack:u,useragent:navigator.userAgent}
return v(m,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),m}function w(e,n){var t=null
n=null==n?0:+n
try{if(t=d(e))return t}catch(r){if(E)throw r}try{if(t=h(e))return t}catch(r){if(E)throw r}try{if(t=m(e))return t}catch(r){if(E)throw r}try{if(t=x(e,n+1))return t}catch(r){if(E)throw r}return{mode:"failed"}}function y(e){e=(null==e?0:+e)+1
try{throw new Error}catch(n){return w(n,e+1)}return null}var E=!1,b={}
return w.augmentStackTraceWithInitialElement=v,w.guessFunctionName=a,w.gatherContext=l,w.ofCaller=y,w}(),r.remoteFetching||(r.remoteFetching=!0),r.collectWindowErrors||(r.collectWindowErrors=!0),(!r.linesOfContext||r.linesOfContext<1)&&(r.linesOfContext=7),e.TraceKit=r}(window),function(e,n){"use strict"
function t(e,n){var t,r
n=n||{},e="raven"+e.substr(0,1).toUpperCase()+e.substr(1),document.createEvent?(t=document.createEvent("HTMLEvents"),t.initEvent(e,!0,!0)):(t=document.createEventObject(),t.eventType=e)
for(r in n)n.hasOwnProperty(r)&&(t[r]=n[r])
if(document.createEvent)document.dispatchEvent(t)
else try{document.fireEvent("on"+t.eventType.toLowerCase(),t)}catch(i){}}function r(e){for(var n=A.exec(e),t={},r=6;r--;)t[j[r]]=n[r]||""
return t}function i(e){return"undefined"==typeof e}function o(e){return"function"==typeof e}function c(e){return"string"==typeof e}function a(e,n){var t,r
if(i(e.length))for(t in e)e.hasOwnProperty(t)&&n.call(null,t,e[t])
else if(r=e.length)for(t=0;r>t;t++)n.call(null,t,e[t])}function l(){if(_)return _
var e=["sentry_version=4","sentry_client=raven-js/"+T.VERSION]
return b&&e.push("sentry_key="+b),_="?"+e.join("&")}function u(e,n){var r=[]
e.stack&&e.stack.length&&a(e.stack,function(e,n){var t=s(n)
t&&r.push(t)}),t("handle",{stackInfo:e,options:n}),p(e.name,e.message,e.url,e.lineno,r,n)}function s(e){if(e.url){var n,t={filename:e.url,lineno:e.line,colno:e.column,"function":e.func||"?"},r=f(e)
if(r){var i=["pre_context","context_line","post_context"]
for(n=3;n--;)t[i[n]]=r[n]}return t.in_app=!(!R.includePaths.test(t.filename)||/(Raven|TraceKit)\./.test(t["function"])||/raven\.(min\.)js$/.test(t.filename)),t}}function f(e){if(e.context&&R.fetchContext){for(var n=e.context,t=~~(n.length/2),r=n.length,o=!1;r--;)if(n[r].length>300){o=!0
break}if(o){if(i(e.column))return
return[[],n[t].substr(e.column,50),[]]}return[n.slice(0,t),n[t],n.slice(t+1)]}}function p(e,n,t,r,i,o){var c,a
n&&(R.ignoreErrors.test(n)||(i&&i.length?(c={frames:i},t=t||i[0].filename):t&&(c={frames:[{filename:t,lineno:r}]}),R.ignoreUrls&&R.ignoreUrls.test(t)||(!R.whitelistUrls||R.whitelistUrls.test(t))&&(a=r?n+" at "+r:n,d(g({exception:{type:e,value:n},stacktrace:c,culprit:t,message:a},o)))))}function g(e,n){return n?(a(n,function(n,t){e[n]=t}),e):e}function h(){var e={url:document.location.href,headers:{"User-Agent":navigator.userAgent}}
return document.referrer&&(e.headers.Referer=document.referrer),e}function d(e){v()&&(e=g({project:k,logger:R.logger,site:R.site,platform:"javascript",request:h()},e),e.tags=g(R.tags,e.tags),e.extra=g(R.extra,e.extra),e.tags||delete e.tags,e.extra||delete e.extra,E&&(e.user=E),o(R.dataCallback)&&(e=R.dataCallback(e)),(!o(R.shouldSendCallback)||R.shouldSendCallback(e))&&m(e))}function m(e){var n=new Image,r=y+l()+"&sentry_data="+encodeURIComponent(JSON.stringify(e))
n.onload=function(){t("success",{data:e,src:r})},n.onerror=n.onabort=function(){t("failure",{data:e,src:r})},n.src=r}function v(){return C?y?!0:(e.console&&console.error&&console.error("Error: Raven has not been configured."),!1):!1}function x(e){for(var n=[],t=e.length;t--;)n[t]=c(e[t])?e[t].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"):e[t].source
return new RegExp(n.join("|"),"i")}var w,y,E,b,k,S=e.Raven,C=!(!e.JSON||!e.JSON.stringify),R={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,tags:{},extra:{}},O=TraceKit.noConflict()
O.remoteFetching=!1
var _,T={VERSION:"1.1.0",TraceKit:O,afterLoad:function(){var n=e.RavenConfig
n&&this.config(n.dsn,n.config).install()},noConflict:function(){return e.Raven=S,T},config:function(e,n){var t=r(e),i=t.path.lastIndexOf("/"),o=t.path.substr(1,i)
return n&&a(n,function(e,n){R[e]=n}),R.ignoreErrors.push("Script error."),R.ignoreErrors.push("Script error"),R.ignoreErrors=x(R.ignoreErrors),R.ignoreUrls=R.ignoreUrls.length?x(R.ignoreUrls):!1,R.whitelistUrls=R.whitelistUrls.length?x(R.whitelistUrls):!1,R.includePaths=x(R.includePaths),b=t.user,k=~~t.path.substr(i+1),y="//"+t.host+(t.port?":"+t.port:"")+"/"+o+"api/"+k+"/store/",t.protocol&&(y=t.protocol+":"+y),R.fetchContext&&(O.remoteFetching=!0),R.linesOfContext&&(O.linesOfContext=R.linesOfContext),O.collectWindowErrors=!!R.collectWindowErrors,T},install:function(){return v()?(O.report.subscribe(u),T):void 0},context:function(e,t,r){return o(e)&&(r=t||[],t=e,e=n),T.wrap(e,t).apply(this,r)},wrap:function(e,t){function r(){for(var n=[],r=arguments.length;r--;)n[r]=T.wrap(e,arguments[r])
try{return t.apply(this,n)}catch(i){throw T.captureException(i,e),i}}if(i(t)&&!o(e))return e
if(o(e)&&(t=e,e=n),!o(t))return t
if(t.__raven__)return t
for(var c in t)t.hasOwnProperty(c)&&(r[c]=t[c])
return r.__raven__=!0,r},uninstall:function(){return O.report.unsubscribe(u),T},captureException:function(e,n){if(c(e))return T.captureMessage(e,n)
w=e
try{O.report(e,n)}catch(t){if(e!==t)throw t}return T},captureMessage:function(e,n){return d(g({message:e},n)),T},setUser:function(e){return E=e,T},lastException:function(){return w}},j="source protocol user host port path".split(" "),A=/^(?:(\w+):)?\/\/(\w+)@([\w\.]+)(?::(\d+))?(\/.*)/
T.afterLoad(),e.Raven=T,"function"==typeof define&&define.amd&&define("raven",[],function(){return T.noConflict()})}(window),function(e,n,t){"use strict"
if(t){var r=t.event.add
t.event.add=function(e,i,o,c,a){var l
return o.handler?(l=o.handler,o.handler=n.wrap(o.handler)):(l=o,o=n.wrap(o)),o.guid=l.guid?l.guid:l.guid=t.guid++,r.call(this,e,i,o,c,a)}
var i=t.fn.ready
t.fn.ready=function(e){return i.call(this,n.wrap(e))}
var o=t.ajax
t.ajax=function(e,r){var i,c=["complete","error","success"]
for("object"==typeof e&&(r=e,e=void 0),r=r||{};i=c.pop();)t.isFunction(r[i])&&(r[i]=n.wrap(r[i]))
try{return o.call(this,e,r)}catch(a){throw n.captureException(a),a}}}}(this,Raven,window.jQuery),function(e,n){"use strict"
var t=function(t){var r=e[t]
e[t]=function(){var e=[].slice.call(arguments),t=e[0]
return"function"==typeof t&&(e[0]=n.wrap(t)),r.apply?r.apply(this,e):r(e[0],e[1])}}
t("setTimeout"),t("setInterval")}(this,Raven)
var tags={}
if(window.KA){tags.version=KA.version}Raven.config("https://0d3382554dd24dc998a5937351b12379@app.getsentry.com/15744",{tags:tags,ignoreErrors:["top.GLOBALS","originalCreateNotification","canvas.contentDocument","MyApp_RemoveAllHighlights","http://tt.epicplay.com","Can't find variable: ZiteReader","jigsaw is not defined","ComboSearch is not defined","http://loading.retry.widdit.com/","atomicFindClose","fb_xd_fragment","bmi_SafeAddOnload","EBCallBackMessageReceived","conduitPage","Script error."],ignoreUrls:[/graph\.facebook\.com/i,/connect\.facebook\.net\/en_US\/all\.js/i,/eatdifferent\.com\.woopra-ns\.com/i,/static\.woopra\.com\/js\/woopra\.js/i,/extensions\//i,/^chrome:\/\//i,/127\.0\.0\.1:4001\/isrunning/i,/webappstoolbarba\.texthelp\.com\//i,/metrics\.itunes\.apple\.com\.edgesuite\.net\//i]})
Raven.install()};
window.KAConsole={_oldMessages:[],_flushOldMessages:function(){for(var s=0,o=this._oldMessages.length;s<o;s++){this.log.apply(this,this._oldMessages[s])}this._oldMessages=[]},_logToBuffer:function(){this._oldMessages.push(arguments)},_logOrPreserve:function(){if(window.console){this.enable()
this.log.apply(this,arguments)}else{this._logToBuffer.apply(this,arguments)}},_logCompatible:function(){if(!window.console){return}if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.call(console.log,null,arguments)}},enable:function(){if(window.console){if(console.log.bind){this.log=console.log.bind(console)}else{this.log=this._logCompatible}this._flushOldMessages()}else{this.log=this._logOrPreserve}},disable:function(){this.log=this._logToBuffer},init:function(s){if(s){this.enable()}else{this.disable()}}}
KAConsole.init(window.KA_IS_DEV)
;
(function(){var n=this
var r=n._
var t={}
var e=Array.prototype,i=Object.prototype,u=Function.prototype
var a=e.push,f=e.slice,l=e.concat,c=i.toString,o=i.hasOwnProperty
var s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,y=e.every,m=e.some,d=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=u.bind
var j=function(n){if(n instanceof j)return n
if(!(this instanceof j))return new j(n)
this._wrapped=n}
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=j}exports._=j}else{n._=j}j.VERSION="1.4.4"
var A=j.each=j.forEach=function(n,r,e){if(n==null)return
if(s&&n.forEach===s){n.forEach(r,e)}else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++){if(r.call(e,n[i],i,n)===t)return}}else{for(var a in n){if(j.has(n,a)){if(r.call(e,n[a],a,n)===t)return}}}}
j.map=j.collect=function(n,r,t){var e=[]
if(n==null)return e
if(p&&n.map===p)return n.map(r,t)
A(n,function(n,i,u){e[e.length]=r.call(t,n,i,u)})
return e}
var O="Reduce of empty array with no initial value"
j.reduce=j.foldl=j.inject=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(v&&n.reduce===v){if(e)r=j.bind(r,e)
return i?n.reduce(r,t):n.reduce(r)}A(n,function(n,u,a){if(!i){t=n
i=true}else{t=r.call(e,t,n,u,a)}})
if(!i)throw new TypeError(O)
return t}
j.reduceRight=j.foldr=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(h&&n.reduceRight===h){if(e)r=j.bind(r,e)
return i?n.reduceRight(r,t):n.reduceRight(r)}var u=n.length
if(u!==+u){var a=j.keys(n)
u=a.length}A(n,function(f,l,c){l=a?a[--u]:--u
if(!i){t=n[l]
i=true}else{t=r.call(e,t,n[l],l,c)}})
if(!i)throw new TypeError(O)
return t}
j.find=j.detect=function(n,r,t){var e
E(n,function(n,i,u){if(r.call(t,n,i,u)){e=n
return true}})
return e}
j.filter=j.select=function(n,r,t){var e=[]
if(n==null)return e
if(g&&n.filter===g)return n.filter(r,t)
A(n,function(n,i,u){if(r.call(t,n,i,u))e[e.length]=n})
return e}
j.reject=function(n,r,t){return j.filter(n,function(n,e,i){return!r.call(t,n,e,i)},t)}
j.every=j.all=function(n,r,e){r||(r=j.identity)
var i=true
if(n==null)return i
if(y&&n.every===y)return n.every(r,e)
A(n,function(n,u,a){if(!(i=i&&r.call(e,n,u,a)))return t})
return!!i}
var E=j.some=j.any=function(n,r,e){r||(r=j.identity)
var i=false
if(n==null)return i
if(m&&n.some===m)return n.some(r,e)
A(n,function(n,u,a){if(i||(i=r.call(e,n,u,a)))return t})
return!!i}
j.contains=j.include=function(n,r){if(n==null)return false
if(d&&n.indexOf===d)return n.indexOf(r)!=-1
return E(n,function(n){return n===r})}
j.invoke=function(n,r){var t=f.call(arguments,2)
var e=j.isFunction(r)
return j.map(n,function(n){return(e?r:n[r]).apply(n,t)})}
j.pluck=function(n,r){return j.map(n,function(n){return n[r]})}
j.where=function(n,r,t){if(j.isEmpty(r))return t?null:[]
return j[t?"find":"filter"](n,function(n){for(var t in r){if(r[t]!==n[t])return false}return true})}
j.findWhere=function(n,r){return j.where(n,r,true)}
j.max=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.max.apply(Math,n)}if(!r&&j.isEmpty(n))return-Infinity
var e={computed:-Infinity,value:-Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a>=e.computed&&(e={value:n,computed:a})})
return e.value}
j.min=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.min.apply(Math,n)}if(!r&&j.isEmpty(n))return Infinity
var e={computed:Infinity,value:Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a<e.computed&&(e={value:n,computed:a})})
return e.value}
j.shuffle=function(n){var r
var t=0
var e=[]
A(n,function(n){r=j.random(t++)
e[t-1]=e[r]
e[r]=n})
return e}
var k=function(n){return j.isFunction(n)?n:function(r){return r[n]}}
j.sortBy=function(n,r,t){var e=k(r)
return j.pluck(j.map(n,function(n,r,i){return{value:n,index:r,criteria:e.call(t,n,r,i)}}).sort(function(n,r){var t=n.criteria
var e=r.criteria
if(t!==e){if(t>e||t===void 0)return 1
if(t<e||e===void 0)return-1}return n.index<r.index?-1:1}),"value")}
var I=function(n,r,t,e){var i={}
var u=k(r||j.identity)
A(n,function(r,a){var f=u.call(t,r,a,n)
e(i,f,r)})
return i}
j.groupBy=function(n,r,t){return I(n,r,t,function(n,r,t){(j.has(n,r)?n[r]:n[r]=[]).push(t)})}
j.countBy=function(n,r,t){return I(n,r,t,function(n,r){if(!j.has(n,r))n[r]=0
n[r]++})}
j.sortedIndex=function(n,r,t,e){t=t==null?j.identity:k(t)
var i=t.call(e,r)
var u=0,a=n.length
while(u<a){var f=u+a>>>1
t.call(e,n[f])<i?u=f+1:a=f}return u}
j.toArray=function(n){if(!n)return[]
if(j.isArray(n))return f.call(n)
if(n.length===+n.length)return j.map(n,j.identity)
return j.values(n)}
j.size=function(n){if(n==null)return 0
return n.length===+n.length?n.length:j.keys(n).length}
j.first=j.head=j.take=function(n,r,t){if(n==null)return void 0
return r!=null&&!t?f.call(n,0,r):n[0]}
j.initial=function(n,r,t){return f.call(n,0,n.length-(r==null||t?1:r))}
j.last=function(n,r,t){if(n==null)return void 0
if(r!=null&&!t){return f.call(n,Math.max(n.length-r,0))}else{return n[n.length-1]}}
j.rest=j.tail=j.drop=function(n,r,t){return f.call(n,r==null||t?1:r)}
j.compact=function(n){return j.filter(n,j.identity)}
var F=function(n,r,t){A(n,function(n){if(j.isArray(n)){r?a.apply(t,n):F(n,r,t)}else{t.push(n)}})
return t}
j.flatten=function(n,r){return F(n,r,[])}
j.without=function(n){return j.difference(n,f.call(arguments,1))}
j.uniq=j.unique=function(n,r,t,e){if(j.isFunction(r)){e=t
t=r
r=false}var i=t?j.map(n,t,e):n
var u=[]
var a=[]
A(i,function(t,e){if(r?!e||a[a.length-1]!==t:!j.contains(a,t)){a.push(t)
u.push(n[e])}})
return u}
j.union=function(){return j.uniq(l.apply(e,arguments))}
j.intersection=function(n){var r=f.call(arguments,1)
return j.filter(j.uniq(n),function(n){return j.every(r,function(r){return j.indexOf(r,n)>=0})})}
j.difference=function(n){var r=l.apply(e,f.call(arguments,1))
return j.filter(n,function(n){return!j.contains(r,n)})}
j.zip=function(){var n=f.call(arguments)
var r=j.max(j.pluck(n,"length"))
var t=new Array(r)
for(var e=0;e<r;e++){t[e]=j.pluck(n,""+e)}return t}
j.object=function(n,r){if(n==null)return{}
var t={}
for(var e=0,i=n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t}
j.indexOf=function(n,r,t){if(n==null)return-1
var e=0,i=n.length
if(t){if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else{e=j.sortedIndex(n,r)
return n[e]===r?e:-1}}if(d&&n.indexOf===d)return n.indexOf(r,t)
for(;e<i;e++)if(n[e]===r)return e
return-1}
j.lastIndexOf=function(n,r,t){if(n==null)return-1
var e=t!=null
if(b&&n.lastIndexOf===b){return e?n.lastIndexOf(r,t):n.lastIndexOf(r)}var i=e?t:n.length
while(i--)if(n[i]===r)return i
return-1}
j.range=function(n,r,t){if(arguments.length<=1){r=n||0
n=0}t=arguments[2]||1
var e=Math.max(Math.ceil((r-n)/t),0)
var i=0
var u=new Array(e)
while(i<e){u[i++]=n
n+=t}return u}
j.bind=function(n,r){if(n.bind===w&&w)return w.apply(n,f.call(arguments,1))
var t=f.call(arguments,2)
return function(){return n.apply(r,t.concat(f.call(arguments)))}}
j.partial=function(n){var r=f.call(arguments,1)
return function(){return n.apply(this,r.concat(f.call(arguments)))}}
j.bindAll=function(n){var r=f.call(arguments,1)
if(r.length===0)r=j.functions(n)
A(r,function(r){n[r]=j.bind(n[r],n)})
return n}
j.memoize=function(n,r){var t={}
r||(r=j.identity)
return function(){var e=r.apply(this,arguments)
return j.has(t,e)?t[e]:t[e]=n.apply(this,arguments)}}
j.delay=function(n,r){var t=f.call(arguments,2)
return setTimeout(function(){return n.apply(null,t)},r)}
j.defer=function(n){return j.delay.apply(j,[n,1].concat(f.call(arguments,1)))}
j.throttle=function(n,r){var t,e,i,u
var a=0
var f=function(){a=new Date
i=null
u=n.apply(t,e)}
return function(){var l=new Date
var c=r-(l-a)
t=this
e=arguments
if(c<=0){clearTimeout(i)
i=null
a=l
u=n.apply(t,e)}else if(!i){i=setTimeout(f,c)}return u}}
j.debounce=function(n,r,t){var e,i
return function(){var u=this,a=arguments
var f=function(){e=null
if(!t)i=n.apply(u,a)}
var l=t&&!e
clearTimeout(e)
e=setTimeout(f,r)
if(l)i=n.apply(u,a)
return i}}
j.once=function(n){var r=false,t
return function(){if(r)return t
r=true
t=n.apply(this,arguments)
n=null
return t}}
j.wrap=function(n,r){return function(){var t=[n]
a.apply(t,arguments)
return r.apply(this,t)}}
j.compose=function(){var n=arguments
return function(){var r=arguments
for(var t=n.length-1;t>=0;t--){r=[n[t].apply(this,r)]}return r[0]}}
j.after=function(n,r){if(n<=0)return r()
return function(){if(--n<1){return r.apply(this,arguments)}}}
j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object")
var r=[]
for(var t in n)if(j.has(n,t))r[r.length]=t
return r}
j.values=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push(n[t])
return r}
j.pairs=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push([t,n[t]])
return r}
j.invert=function(n){var r={}
for(var t in n)if(j.has(n,t))r[n[t]]=t
return r}
j.functions=j.methods=function(n){var r=[]
for(var t in n){if(j.isFunction(n[t]))r.push(t)}return r.sort()}
j.extend=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){n[t]=r[t]}}})
return n}
j.pick=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
A(t,function(t){if(t in n)r[t]=n[t]})
return r}
j.omit=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
for(var i in n){if(!j.contains(t,i))r[i]=n[i]}return r}
j.defaults=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){if(n[t]==null)n[t]=r[t]}}})
return n}
j.clone=function(n){if(!j.isObject(n))return n
return j.isArray(n)?n.slice():j.extend({},n)}
j.tap=function(n,r){r(n)
return n}
var R=function(n,r,t,e){if(n===r)return n!==0||1/n==1/r
if(n==null||r==null)return n===r
if(n instanceof j)n=n._wrapped
if(r instanceof j)r=r._wrapped
var i=c.call(n)
if(i!=c.call(r))return false
switch(i){case"[object String]":return n==String(r)
case"[object Number]":return n!=+n?r!=+r:n==0?1/n==1/r:n==+r
case"[object Date]":case"[object Boolean]":return+n==+r
case"[object RegExp]":return n.source==r.source&&n.global==r.global&&n.multiline==r.multiline&&n.ignoreCase==r.ignoreCase}if(typeof n!="object"||typeof r!="object")return false
var u=t.length
while(u--){if(t[u]==n)return e[u]==r}t.push(n)
e.push(r)
var a=0,f=true
if(i=="[object Array]"){a=n.length
f=a==r.length
if(f){while(a--){if(!(f=R(n[a],r[a],t,e)))break}}}else{var l=n.constructor,o=r.constructor
if(l!==o&&!(j.isFunction(l)&&l instanceof l&&j.isFunction(o)&&o instanceof o)){return false}for(var s in n){if(j.has(n,s)){a++
if(!(f=j.has(r,s)&&R(n[s],r[s],t,e)))break}}if(f){for(s in r){if(j.has(r,s)&&!a--)break}f=!a}}t.pop()
e.pop()
return f}
j.isEqual=function(n,r){return R(n,r,[],[])}
j.isEmpty=function(n){if(n==null)return true
if(j.isArray(n)||j.isString(n))return n.length===0
for(var r in n)if(j.has(n,r))return false
return true}
j.isElement=function(n){return!!(n&&n.nodeType===1)}
j.isArray=x||function(n){return c.call(n)=="[object Array]"}
j.isObject=function(n){return n===Object(n)}
A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(r){return c.call(r)=="[object "+n+"]"}})
if(!j.isArguments(arguments)){j.isArguments=function(n){return!!(n&&j.has(n,"callee"))}}if(typeof/./!=="function"){j.isFunction=function(n){return typeof n==="function"}}j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))}
j.isNaN=function(n){return j.isNumber(n)&&n!=+n}
j.isBoolean=function(n){return n===true||n===false||c.call(n)=="[object Boolean]"}
j.isNull=function(n){return n===null}
j.isUndefined=function(n){return n===void 0}
j.has=function(n,r){return o.call(n,r)}
j.noConflict=function(){n._=r
return this}
j.identity=function(n){return n}
j.times=function(n,r,t){var e=Array(n)
for(var i=0;i<n;i++)e[i]=r.call(t,i)
return e}
j.random=function(n,r){if(r==null){r=n
n=0}return n+Math.floor(Math.random()*(r-n+1))}
var S={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}}
S.unescape=j.invert(S.escape)
var M={escape:new RegExp("["+j.keys(S.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(S.unescape).join("|")+")","g")}
j.each(["escape","unescape"],function(n){j[n]=function(r){if(r==null)return""
return(""+r).replace(M[n],function(r){return S[n][r]})}})
j.result=function(n,r){if(n==null)return null
var t=n[r]
return j.isFunction(t)?t.call(n):t}
j.mixin=function(n){A(j.functions(n),function(r){var t=j[r]=n[r]
j.prototype[r]=function(){var n=[this._wrapped]
a.apply(n,arguments)
return D.call(this,t.apply(j,n))}})}
var N=0
j.uniqueId=function(n){var r=++N+""
return n?n+r:r}
j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
var T=/(.)^/
var q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"}
var B=/\\|'|\r|\n|\t|\u2028|\u2029/g
j.template=function(n,r,t){var e
t=j.defaults({},t,j.templateSettings)
var i=new RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g")
var u=0
var a="__p+='"
n.replace(i,function(r,t,e,i,f){a+=n.slice(u,f).replace(B,function(n){return"\\"+q[n]})
if(t){a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"}if(e){a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"}if(i){a+="';\n"+i+"\n__p+='"}u=f+r.length
return r})
a+="';\n"
if(!t.variable)a="with(obj||{}){\n"+a+"}\n"
a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n"
try{e=new Function(t.variable||"obj","_",a)}catch(f){f.source=a
throw f}if(r)return e(r,j)
var l=function(n){return e.call(this,n,j)}
l.source="function("+(t.variable||"obj")+"){\n"+a+"}"
return l}
j.chain=function(n){return j(n).chain()}
var D=function(n){return this._chain?j(n).chain():n}
j.mixin(j)
A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=e[n]
j.prototype[n]=function(){var t=this._wrapped
r.apply(t,arguments)
if((n=="shift"||n=="splice")&&t.length===0)delete t[0]
return D.call(this,t)}})
A(["concat","join","slice"],function(n){var r=e[n]
j.prototype[n]=function(){return D.call(this,r.apply(this._wrapped,arguments))}})
j.extend(j.prototype,{chain:function(){this._chain=true
return this},value:function(){return this._wrapped}})}).call(this)
;
(function(){var t=this
var e=t.Backbone
var i=[]
var r=i.push
var s=i.slice
var n=i.splice
var a
if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0"
var h=t._
if(!h&&typeof require!=="undefined")h=require("underscore")
a.$=t.jQuery||t.Zepto||t.ender||t.$
a.noConflict=function(){t.Backbone=e
return this}
a.emulateHTTP=false
a.emulateJSON=false
var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this
this._events||(this._events={})
var r=this._events[t]||(this._events[t]=[])
r.push({callback:e,context:i,ctx:i||this})
return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this
var r=this
var s=h.once(function(){r.off(t,s)
e.apply(this,arguments)})
s._callback=e
return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f
if(!this._events||!l(this,"off",t,[e,i]))return this
if(!t&&!e&&!i){this._events={}
return this}a=t?[t]:h.keys(this._events)
for(o=0,u=a.length;o<u;o++){t=a[o]
if(n=this._events[t]){this._events[t]=r=[]
if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c]
if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this
var e=s.call(arguments,1)
if(!l(this,"trigger",t,e))return this
var i=this._events[t]
var r=this._events.all
if(i)c(i,e)
if(r)c(r,arguments)
return this},stopListening:function(t,e,i){var r=this._listeners
if(!r)return this
var s=!e&&!i
if(typeof e==="object")i=this
if(t)(r={})[t._listenerId]=t
for(var n in r){r[n].off(e,i,this)
if(s)delete this._listeners[n]}return this}}
var u=/\s+/
var l=function(t,e,i,r){if(!i)return true
if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u)
for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true}
var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2]
switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx)
return
case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n)
return
case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a)
return
case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h)
return
default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}}
var f={listenTo:"on",listenToOnce:"once"}
h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={})
var n=e._listenerId||(e._listenerId=h.uniqueId("l"))
s[n]=e
if(typeof i==="object")r=this
e[t](i,r,this)
return this}})
o.bind=o.on
o.unbind=o.off
h.extend(a,o)
var d=a.Model=function(t,e){var i
var r=t||{}
e||(e={})
this.cid=h.uniqueId("c")
this.attributes={}
h.extend(this,h.pick(e,p))
if(e.parse)r=this.parse(r,e)||{}
if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e)
this.changed={}
this.initialize.apply(this,arguments)}
var p=["url","urlRoot","collection"]
h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c
if(t==null)return this
if(typeof t==="object"){s=t
i=e}else{(s={})[t]=e}i||(i={})
if(!this._validate(s,i))return false
n=i.unset
o=i.silent
a=[]
u=this._changing
this._changing=true
if(!u){this._previousAttributes=h.clone(this.attributes)
this.changed={}}c=this.attributes,l=this._previousAttributes
if(this.idAttribute in s)this.id=s[this.idAttribute]
for(r in s){e=s[r]
if(!h.isEqual(c[r],e))a.push(r)
if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true
for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this
if(!o){while(this._pending){this._pending=false
this.trigger("change",this,i)}}this._pending=false
this._changing=false
return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={}
for(var i in this.attributes)e[i]=void 0
return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed)
return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false
var e,i=false
var r=this._changing?this._previousAttributes:this.attributes
for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null
return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=this
var i=t.success
t.success=function(r){if(!e.set(e.parse(r,t),t))return false
if(i)i(e,r,t)
e.trigger("sync",e,r,t)}
R(this,t)
return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes
if(t==null||typeof t==="object"){r=t
i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false
i=h.extend({validate:true},i)
if(!this._validate(r,i))return false
if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true
var o=this
var u=i.success
i.success=function(t){o.attributes=a
var e=o.parse(t,i)
if(i.wait)e=h.extend(r||{},e)
if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i)
o.trigger("sync",o,t,i)}
R(this,i)
s=this.isNew()?"create":i.patch?"patch":"update"
if(s==="patch")i.attrs=r
n=this.sync(s,this,i)
if(r&&i.wait)this.attributes=a
return n},destroy:function(t){t=t?h.clone(t):{}
var e=this
var i=t.success
var r=function(){e.trigger("destroy",e,e.collection,t)}
t.success=function(s){if(t.wait||e.isNew())r()
if(i)i(e,s,t)
if(!e.isNew())e.trigger("sync",e,s,t)}
if(this.isNew()){t.success()
return false}R(this,t)
var s=this.sync("delete",this,t)
if(!t.wait)r()
return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U()
if(this.isNew())return t
return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true
t=h.extend({},this.attributes,t)
var i=this.validationError=this.validate(t,e)||null
if(!i)return true
this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}))
return false}})
var v=["keys","values","pairs","invert","pick","omit"]
h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.attributes)
return h[t].apply(h,e)}})
var g=a.Collection=function(t,e){e||(e={})
if(e.url)this.url=e.url
if(e.model)this.model=e.model
if(e.comparator!==void 0)this.comparator=e.comparator
this._reset()
this.initialize.apply(this,arguments)
if(t)this.reset(t,h.extend({silent:true},e))}
var m={add:true,remove:true,merge:true}
var y={add:true,merge:false,remove:false}
h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t]
e||(e={})
var i,r,s,n
for(i=0,r=t.length;i<r;i++){n=this.get(t[i])
if(!n)continue
delete this._byId[n.id]
delete this._byId[n.cid]
s=this.indexOf(n)
this.models.splice(s,1)
this.length--
if(!e.silent){e.index=s
n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m)
if(e.parse)t=this.parse(t,e)
if(!h.isArray(t))t=t?[t]:[]
var i,s,a,o,u,l
var c=e.at
var f=this.comparator&&c==null&&e.sort!==false
var d=h.isString(this.comparator)?this.comparator:null
var p=[],v=[],g={}
for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue
if(u=this.get(a)){if(e.remove)g[u.cid]=true
if(e.merge){u.set(a.attributes,e)
if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a)
a.on("all",this._onModelEvent,this)
this._byId[a.cid]=a
if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true
this.length+=p.length
if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true})
if(e.silent)return this
for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e)
return this},reset:function(t,e){e||(e={})
for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models
this._reset()
this.add(t,h.extend({silent:true},e))
if(!e.silent)this.trigger("reset",this,e)
return this},push:function(t,e){t=this._prepareModel(t,e)
this.add(t,h.extend({at:this.length},e))
return t},pop:function(t){var e=this.at(this.length-1)
this.remove(e,t)
return e},unshift:function(t,e){t=this._prepareModel(t,e)
this.add(t,h.extend({at:0},e))
return t},shift:function(t){var e=this.at(0)
this.remove(e,t)
return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0
return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[]
return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator")
t||(t={})
if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t)
return this},sortedIndex:function(t,e,i){e||(e=this.comparator)
var r=h.isFunction(e)?e:function(t){return t.get(e)}
return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=t.success
var i=this
t.success=function(r){var s=t.reset?"reset":"set"
i[s](r,t)
if(e)e(i,r,t)
i.trigger("sync",i,r,t)}
R(this,t)
return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{}
if(!(t=this._prepareModel(t,e)))return false
if(!e.wait)this.add(t,e)
var i=this
var r=e.success
e.success=function(s){if(e.wait)i.add(t,e)
if(r)r(t,s,e)}
t.save(null,e)
return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0
this.models=[]
this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this
return t}e||(e={})
e.collection=this
var i=new this.model(t,e)
if(!i._validate(t,e)){this.trigger("invalid",this,t,e)
return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection
t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return
if(t==="destroy")this.remove(e,r)
if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)]
if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}})
var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"]
h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.models)
return h[t].apply(h,e)}})
var w=["groupBy","countBy","sortBy"]
h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)}
return h[t](this.models,r,i)}})
var b=a.View=function(t){this.cid=h.uniqueId("view")
this._configure(t||{})
this._ensureElement()
this.initialize.apply(this,arguments)
this.delegateEvents()}
var x=/^(\S+)\s*(.*)$/
var E=["model","collection","el","id","attributes","className","tagName","events"]
h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove()
this.stopListening()
return this},setElement:function(t,e){if(this.$el)this.undelegateEvents()
this.$el=t instanceof a.$?t:a.$(t)
this.el=this.$el[0]
if(e!==false)this.delegateEvents()
return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this
this.undelegateEvents()
for(var e in t){var i=t[e]
if(!h.isFunction(i))i=this[t[e]]
if(!i)continue
var r=e.match(x)
var s=r[1],n=r[2]
i=h.bind(i,this)
s+=".delegateEvents"+this.cid
if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t)
h.extend(this,h.pick(t,E))
this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"))
if(this.id)t.id=h.result(this,"id")
if(this.className)t["class"]=h.result(this,"className")
var e=a.$("<"+h.result(this,"tagName")+">").attr(t)
this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}})
a.sync=function(t,e,i){var r=k[t]
h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON})
var s={type:r,dataType:"json"}
if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json"
s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded"
s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST"
if(i.emulateJSON)s.data._method=r
var n=i.beforeSend
i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r)
if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i))
e.trigger("request",e,o,i)
return o}
var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"}
a.ajax=function(){return a.$.ajax.apply(a.$,arguments)}
var S=a.Router=function(t){t||(t={})
if(t.routes)this.routes=t.routes
this._bindRoutes()
this.initialize.apply(this,arguments)}
var $=/\((.*?)\)/g
var T=/(\(\?)?:\w+/g
var H=/\*\w+/g
var A=/[\-{}\[\]+?.,\\\^$|#\s]/g
h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t)
if(h.isFunction(e)){i=e
e=""}if(!i)i=this[e]
var r=this
a.history.route(t,function(s){var n=r._extractParameters(t,s)
i&&i.apply(r,n)
r.trigger.apply(r,["route:"+e].concat(n))
r.trigger("route",e,n)
a.history.trigger("route",r,e,n)})
return this},navigate:function(t,e){a.history.navigate(t,e)
return this},_bindRoutes:function(){if(!this.routes)return
this.routes=h.result(this,"routes")
var t,e=h.keys(this.routes)
while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)")
return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1)
return h.map(i,function(t){return t?decodeURIComponent(t):null})}})
var I=a.History=function(){this.handlers=[]
h.bindAll(this,"checkUrl")
if(typeof window!=="undefined"){this.location=window.location
this.history=window.history}}
var N=/^[#\/]|\s+$/g
var P=/^\/+|\/+$/g
var O=/msie [\w.]+/
var C=/\/$/
I.started=false
h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/)
return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname
var i=this.root.replace(C,"")
if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started")
I.started=true
this.options=h.extend({},{root:"/"},this.options,t)
this.root=this.options.root
this._wantsHashChange=this.options.hashChange!==false
this._wantsPushState=!!this.options.pushState
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
var e=this.getFragment()
var i=document.documentMode
var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7)
this.root=("/"+this.root+"/").replace(P,"/")
if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow
this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e
var s=this.location
var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true)
this.location.replace(this.root+this.location.search+"#"+this.fragment)
return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"")
this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl)
clearInterval(this._checkUrlInterval)
I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment()
if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false
if(this.iframe)this.navigate(e)
this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t)
var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e)
return true}})
return i},navigate:function(t,e){if(!I.started)return false
if(!e||e===true)e={trigger:e}
t=this.getFragment(t||"")
if(this.fragment===t)return
this.fragment=t
var i=this.root+t
if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace)
if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close()
this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"")
t.replace(r+"#"+e)}else{t.hash="#"+e}}})
a.history=new I
var j=function(t,e){var i=this
var r
if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e)
var s=function(){this.constructor=r}
s.prototype=i.prototype
r.prototype=new s
if(t)h.extend(r.prototype,t)
r.__super__=i.prototype
return r}
d.extend=g.extend=S.extend=b.extend=I.extend=j
var U=function(){throw new Error('A "url" property or function must be specified')}
var R=function(t,e){var i=e.error
e.error=function(r){if(i)i(t,r,e)
t.trigger("error",t,r,e)}}}).call(this)
;
var Handlebars={}
Handlebars.VERSION="1.0.beta.5"
Handlebars.helpers={}
Handlebars.partials={}
Handlebars.registerHelper=function(e,r,n){if(n){r.not=n}this.helpers[e]=r}
Handlebars.registerPartial=function(e,r){this.partials[e]=r}
Handlebars.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new Error("Could not find property '"+e+"'")}})
var toString=Object.prototype.toString,functionType="[object Function]"
Handlebars.registerHelper("blockHelperMissing",function(e,r){var n=r.inverse||function(){},t=r.fn
var a=""
var i=toString.call(e)
if(i===functionType){e=e.call(this)}if(e===true){return t(this)}else if(e===false||e==null){return n(this)}else if(i==="[object Array]"){if(e.length>0){for(var s=0,l=e.length;s<l;s++){a=a+t(e[s])}}else{a=n(this)}return a}else{return t(e)}})
Handlebars.registerHelper("each",function(e,r){var n=r.fn,t=r.inverse
var a=""
if(e&&e.length>0){for(var i=0,s=e.length;i<s;i++){a=a+n(e[i])}}else{a=t(this)}return a})
Handlebars.registerHelper("if",function(e,r){var n=toString.call(e)
if(n===functionType){e=e.call(this)}if(!e||Handlebars.Utils.isEmpty(e)){return r.inverse(this)}else{return r.fn(this)}})
Handlebars.registerHelper("unless",function(e,r){var n=r.fn,t=r.inverse
r.fn=t
r.inverse=n
return Handlebars.helpers["if"].call(this,e,r)})
Handlebars.registerHelper("with",function(e,r){return r.fn(e)})
Handlebars.registerHelper("log",function(e){Handlebars.log(e)})
Handlebars.Exception=function(e){var r=Error.prototype.constructor.apply(this,arguments)
for(var n in r){if(r.hasOwnProperty(n)){this[n]=r[n]}}this.message=r.message}
Handlebars.Exception.prototype=new Error
Handlebars.SafeString=function(e){this.string=e}
Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}
var r=/&(?!\w+;)|[<>"'`]/g
var n=/[&<>"'`]/
var t=function(r){return e[r]||"&amp;"}
Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()}else if(e==null||e===false){return""}if(!n.test(e)){return e}return e.replace(r,t)},isEmpty:function(e){if(typeof e==="undefined"){return true}else if(e===null){return true}else if(e===false){return true}else if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true}else{return false}}}})()
Handlebars.VM={template:function(e){var r={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(e,r,n){var t=this.programs[e]
if(n){return Handlebars.VM.program(r,n)}else if(t){return t}else{t=this.programs[e]=Handlebars.VM.program(r)
return t}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop}
return function(n,t){t=t||{}
return e.call(r,Handlebars,n,t.helpers,t.partials,t.data)}},programWithDepth:function(e,r,n){var t=Array.prototype.slice.call(arguments,2)
return function(n,a){a=a||{}
return e.apply(this,[n,a.data||r].concat(t))}},program:function(e,r){return function(n,t){t=t||{}
return e(n,t.data||r)}},noop:function(){return""},invokePartial:function(e,r,n,t,a,i){var s={helpers:t,partials:a,data:i}
if(e===undefined){throw new Handlebars.Exception("The partial "+r+" could not be found")}else if(e instanceof Function){return e(n,s)}else if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+r+" could not be compiled when running in runtime-only mode")}else{a[r]=Handlebars.compile(e)
return a[r](n,s)}}}
Handlebars.template=Handlebars.VM.template
;
var gae_bingo=function(){var n="/gae_bingo/blotter/"
var e=$.noop
var r=$.noop
var o={}
var a=function(o){o=typeof o==="undefined"?{}:o
n=o.path||n
e=o.success!==undefined?o.success:e
r=o.error!==undefined?o.error:r
e=o.debug===undefined?e:function(n,e,r){console.log("gae_bingo success("+r.status+"):",n)}
r=o.debug===undefined?r:function(n,e){console.error("gae_bingo error ("+n.status+"):",n)}}
var t=function(a,t,i,c,u){u=u||r
c=c||e
var s=window.JSON.stringify||$.noop
var d={canonical_name:a,alternative_params:s(t),conversion_name:s(i)}
return jQuery.ajax({type:"POST",url:n+"ab_test",data:d,success:function(n,e,r){o[a]=n
c(n,e,r)},error:u})}
var i=function(o,a,t){t=t||r
a=a||e
return jQuery.ajax({url:n+"bingo",type:"POST",data:{convert:$.isArray(o)?o.join("	"):o},success:a,error:t})}
var c=function(n,e){var r="/gae_bingo/redirect"
r+="?continue="+encodeURIComponent(n)
if(!$.isArray(e)){e=[e]}_.each(e,function(n){r+="&conversion_name="+encodeURIComponent(n)})
return r}
return{init:a,ab_test:window.JSON?t:$.noop,bingo:i,tests:o,create_redirect_url:c}}()
;
(function(t,e){var r=Array.prototype,n=Object.prototype,i=r.slice,s=n.hasOwnProperty,a=r.forEach,l={}
var o={forEach:function(t,e,r){var n,i,o
if(t===null){return}if(a&&t.forEach===a){t.forEach(e,r)}else if(t.length===+t.length){for(n=0,i=t.length;n<i;n++){if(n in t&&e.call(r,t[n],n,t)===l){return}}}else{for(o in t){if(s.call(t,o)){if(e.call(r,t[o],o,t)===l){return}}}}},extend:function(t){this.forEach(i.call(arguments,1),function(e){for(var r in e){t[r]=e[r]}})
return t}}
var h=function(t){this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}}},domain:"messages"}
this.options=o.extend({},this.defaults,t)
this.textdomain(this.options.domain)
if(t.domain&&!this.options.locale_data[this.options.domain]){throw new Error("Text domain set to non-existent domain: `"+t.domain+"`")}}
h.context_delimiter=String.fromCharCode(4)
function u(t){return h.PF.compile(t||"nplurals=2; plural=(n != 1);")}function c(t,e){this._key=t
this._i18n=e}o.extend(c.prototype,{onDomain:function(t){this._domain=t
return this},withContext:function(t){this._context=t
return this},ifPlural:function(t,e){this._val=t
this._pkey=e
return this},fetch:function(t){if({}.toString.call(t)!="[object Array]"){t=[].slice.call(arguments)}return(t&&t.length?h.sprintf:function(t){return t})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),t)}})
o.extend(h.prototype,{translate:function(t){return new c(t,this)},textdomain:function(t){if(!t){return this._textdomain}this._textdomain=t},gettext:function(t){return this.dcnpgettext.call(this,e,e,t)},dgettext:function(t,r){return this.dcnpgettext.call(this,t,e,r)},dcgettext:function(t,r){return this.dcnpgettext.call(this,t,e,r)},ngettext:function(t,r,n){return this.dcnpgettext.call(this,e,e,t,r,n)},dngettext:function(t,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcngettext:function(t,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},pgettext:function(t,r){return this.dcnpgettext.call(this,e,t,r)},dpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},dcpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},npgettext:function(t,r,n,i){return this.dcnpgettext.call(this,e,t,r,n,i)},dnpgettext:function(t,e,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcnpgettext:function(t,e,r,n,i){n=n||r
t=t||this._textdomain
i=typeof i=="undefined"?1:i
var s
if(!this.options){s=new h
return s.dcnpgettext.call(s,undefined,undefined,r,n,i)}if(!this.options.locale_data){throw new Error("No locale data provided.")}if(!this.options.locale_data[t]){throw new Error("Domain `"+t+"` was not found.")}if(!this.options.locale_data[t][""]){throw new Error("No locale meta information provided.")}if(!r){throw new Error("No translation key found.")}if(typeof i!="number"){i=parseInt(i,10)
if(isNaN(i)){throw new Error("The number that was passed in is not a number.")}}var a=e?e+h.context_delimiter+r:r,l=this.options.locale_data,o=l[t],c=o[""].plural_forms||(l.messages||this.defaults.locale_data.messages)[""].plural_forms,f=u(c)(i)+1,p,d
if(!o){throw new Error("No domain named `"+t+"` could be found.")}p=o[a]
if(!p||f>=p.length){if(this.options.missing_key_callback){this.options.missing_key_callback(a)}d=[null,r,n]
return d[u(c)(i)+1]}d=p[f]
if(!d){d=[null,r,n]
return d[u(c)(i)+1]}return d}})
var f=function(){function t(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function e(t,e){for(var r=[];e>0;r[--e]=t){}return r.join("")}var r=function(){if(!r.cache.hasOwnProperty(arguments[0])){r.cache[arguments[0]]=r.parse(arguments[0])}return r.format.call(null,r.cache[arguments[0]],arguments)}
r.format=function(r,n){var i=1,s=r.length,a="",l,o=[],h,u,c,p,d,y
for(h=0;h<s;h++){a=t(r[h])
if(a==="string"){o.push(r[h])}else if(a==="array"){c=r[h]
if(c[2]){l=n[i]
for(u=0;u<c[2].length;u++){if(!l.hasOwnProperty(c[2][u])){throw f('[sprintf] property "%s" does not exist',c[2][u])}l=l[c[2][u]]}}else if(c[1]){l=n[c[1]]}else{l=n[i++]}if(/[^s]/.test(c[8])&&t(l)!="number"){throw f("[sprintf] expecting number but found %s",t(l))}if(typeof l=="undefined"||l===null){l=""}switch(c[8]){case"b":l=l.toString(2)
break
case"c":l=String.fromCharCode(l)
break
case"d":l=parseInt(l,10)
break
case"e":l=c[7]?l.toExponential(c[7]):l.toExponential()
break
case"f":l=c[7]?parseFloat(l).toFixed(c[7]):parseFloat(l)
break
case"o":l=l.toString(8)
break
case"s":l=(l=String(l))&&c[7]?l.substring(0,c[7]):l
break
case"u":l=Math.abs(l)
break
case"x":l=l.toString(16)
break
case"X":l=l.toString(16).toUpperCase()
break}l=/[def]/.test(c[8])&&c[3]&&l>=0?"+"+l:l
d=c[4]?c[4]=="0"?"0":c[4].charAt(1):" "
y=c[6]-String(l).length
p=c[6]?e(d,y):""
o.push(c[5]?l+p:p+l)}}return o.join("")}
r.cache={}
r.parse=function(t){var e=t,r=[],n=[],i=0
while(e){if((r=/^[^\x25]+/.exec(e))!==null){n.push(r[0])}else if((r=/^\x25{2}/.exec(e))!==null){n.push("%")}else if((r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))!==null){if(r[2]){i|=1
var s=[],a=r[2],l=[]
if((l=/^([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(l[1])
while((a=a.substring(l[0].length))!==""){if((l=/^\.([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(l[1])}else if((l=/^\[(\d+)\]/.exec(a))!==null){s.push(l[1])}else{throw"[sprintf] huh?"}}}else{throw"[sprintf] huh?"}r[2]=s}else{i|=2}if(i===3){throw"[sprintf] mixing positional and named placeholders is not (yet) supported"}n.push(r)}else{throw"[sprintf] huh?"}e=e.substring(r[0].length)}return n}
return r}()
var p=function(t,e){e.unshift(t)
return f.apply(null,e)}
h.parse_plural=function(t,e){t=t.replace(/n/g,e)
return h.parse_expression(t)}
h.sprintf=function(t,e){if({}.toString.call(e)=="[object Array]"){return p(t,[].slice.call(e))}return f.apply(this,[].slice.call(arguments))}
h.prototype.sprintf=function(){return h.sprintf.apply(this,arguments)}
h.PF={}
h.PF.parse=function(t){var e=h.PF.extractPluralExpr(t)
return h.PF.parser.parse.call(h.PF.parser,e)}
h.PF.compile=function(t){function e(t){return t===true?1:t?t:0}var r=h.PF.parse(t)
return function(t){return e(h.PF.interpreter(r)(t))}}
h.PF.interpreter=function(t){return function(e){var r
switch(t.type){case"GROUP":return h.PF.interpreter(t.expr)(e)
case"TERNARY":if(h.PF.interpreter(t.expr)(e)){return h.PF.interpreter(t.truthy)(e)}return h.PF.interpreter(t.falsey)(e)
case"OR":return h.PF.interpreter(t.left)(e)||h.PF.interpreter(t.right)(e)
case"AND":return h.PF.interpreter(t.left)(e)&&h.PF.interpreter(t.right)(e)
case"LT":return h.PF.interpreter(t.left)(e)<h.PF.interpreter(t.right)(e)
case"GT":return h.PF.interpreter(t.left)(e)>h.PF.interpreter(t.right)(e)
case"LTE":return h.PF.interpreter(t.left)(e)<=h.PF.interpreter(t.right)(e)
case"GTE":return h.PF.interpreter(t.left)(e)>=h.PF.interpreter(t.right)(e)
case"EQ":return h.PF.interpreter(t.left)(e)==h.PF.interpreter(t.right)(e)
case"NEQ":return h.PF.interpreter(t.left)(e)!=h.PF.interpreter(t.right)(e)
case"MOD":return h.PF.interpreter(t.left)(e)%h.PF.interpreter(t.right)(e)
case"VAR":return e
case"NUM":return t.val
default:throw new Error("Invalid Token found.")}}}
h.PF.extractPluralExpr=function(t){t=t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
if(!/;\s*$/.test(t)){t=t.concat(";")}var e=/nplurals\=(\d+);/,r=/plural\=(.*);/,n=t.match(e),i={},s
if(n.length>1){i.nplurals=n[1]}else{throw new Error("nplurals not found in plural_forms string: "+t)}t=t.replace(e,"")
s=t.match(r)
if(!(s&&s.length>1)){throw new Error("`plural` expression not found: "+t)}return s[1]}
h.PF.parser=function(){var t={trace:function r(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function n(t,e,r,i,s,a,l){var o=a.length-1
switch(s){case 1:return{type:"GROUP",expr:a[o-1]}
break
case 2:this.$={type:"TERNARY",expr:a[o-4],truthy:a[o-2],falsey:a[o]}
break
case 3:this.$={type:"OR",left:a[o-2],right:a[o]}
break
case 4:this.$={type:"AND",left:a[o-2],right:a[o]}
break
case 5:this.$={type:"LT",left:a[o-2],right:a[o]}
break
case 6:this.$={type:"LTE",left:a[o-2],right:a[o]}
break
case 7:this.$={type:"GT",left:a[o-2],right:a[o]}
break
case 8:this.$={type:"GTE",left:a[o-2],right:a[o]}
break
case 9:this.$={type:"NEQ",left:a[o-2],right:a[o]}
break
case 10:this.$={type:"EQ",left:a[o-2],right:a[o]}
break
case 11:this.$={type:"MOD",left:a[o-2],right:a[o]}
break
case 12:this.$={type:"GROUP",expr:a[o-1]}
break
case 13:this.$={type:"VAR"}
break
case 14:this.$={type:"NUM",val:Number(t)}
break}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function i(t,e){throw new Error(t)},parse:function s(t){var e=this,r=[0],n=[null],i=[],s=this.table,a="",l=0,o=0,h=0,u=2,c=1
this.lexer.setInput(t)
this.lexer.yy=this.yy
this.yy.lexer=this.lexer
if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={}
var f=this.lexer.yylloc
i.push(f)
if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError
function p(t){r.length=r.length-2*t
n.length=n.length-t
i.length=i.length-t}function d(){var t
t=e.lexer.lex()||1
if(typeof t!=="number"){t=e.symbols_[t]||t}return t}var y,g,x,m,_,b,k={},w,E,P,v
while(true){x=r[r.length-1]
if(this.defaultActions[x]){m=this.defaultActions[x]}else{if(y==null)y=d()
m=s[x]&&s[x][y]}t:if(typeof m==="undefined"||!m.length||!m[0]){if(!h){v=[]
for(w in s[x])if(this.terminals_[w]&&w>2){v.push("'"+this.terminals_[w]+"'")}var F=""
if(this.lexer.showPosition){F="Parse error on line "+(l+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+this.terminals_[y]+"'"}else{F="Parse error on line "+(l+1)+": Unexpected "+(y==1?"end of input":"'"+(this.terminals_[y]||y)+"'")}this.parseError(F,{text:this.lexer.match,token:this.terminals_[y]||y,line:this.lexer.yylineno,loc:f,expected:v})}if(h==3){if(y==c){throw new Error(F||"Parsing halted.")}o=this.lexer.yyleng
a=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
y=d()}while(1){if(u.toString()in s[x]){break}if(x==0){throw new Error(F||"Parsing halted.")}p(1)
x=r[r.length-1]}g=y
y=u
x=r[r.length-1]
m=s[x]&&s[x][u]
h=3}if(m[0]instanceof Array&&m.length>1){throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+y)}switch(m[0]){case 1:r.push(y)
n.push(this.lexer.yytext)
i.push(this.lexer.yylloc)
r.push(m[1])
y=null
if(!g){o=this.lexer.yyleng
a=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
if(h>0)h--}else{y=g
g=null}break
case 2:E=this.productions_[m[1]][1]
k.$=n[n.length-E]
k._$={first_line:i[i.length-(E||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(E||1)].first_column,last_column:i[i.length-1].last_column}
b=this.performAction.call(k,a,o,l,this.yy,m[1],n,i)
if(typeof b!=="undefined"){return b}if(E){r=r.slice(0,-1*E*2)
n=n.slice(0,-1*E)
i=i.slice(0,-1*E)}r.push(this.productions_[m[1]][0])
n.push(k.$)
i.push(k._$)
P=s[r[r.length-2]][r[r.length-1]]
r.push(P)
break
case 3:return true}}return true}}
var e=function(){var t={EOF:1,parseError:function e(t,r){if(this.yy.parseError){this.yy.parseError(t,r)}else{throw new Error(t)}},setInput:function(t){this._input=t
this._more=this._less=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
return this},input:function(){var t=this._input[0]
this.yytext+=t
this.yyleng++
this.match+=t
this.matched+=t
var e=t.match(/\n/)
if(e)this.yylineno++
this._input=this._input.slice(1)
return t},unput:function(t){this._input=t+this._input
return this},more:function(){this._more=true
return this},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length)
return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match
if(t.length<20){t+=this._input.substr(0,20-t.length)}return(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput()
var e=new Array(t.length+1).join("-")
return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true
var t,e,r,n
if(!this._more){this.yytext=""
this.match=""}var i=this._currentRules()
for(var s=0;s<i.length;s++){e=this._input.match(this.rules[i[s]])
if(e){n=e[0].match(/\n.*/g)
if(n)this.yylineno+=n.length
this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-1:this.yylloc.last_column+e[0].length}
this.yytext+=e[0]
this.match+=e[0]
this.matches=e
this.yyleng=this.yytext.length
this._more=false
this._input=this._input.slice(e[0].length)
this.matched+=e[0]
t=this.performAction.call(this,this.yy,this,i[s],this.conditionStack[this.conditionStack.length-1])
if(t)return t
else return}}if(this._input===""){return this.EOF}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function r(){var t=this.next()
if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function n(t){this.conditionStack.push(t)},popState:function i(){return this.conditionStack.pop()},_currentRules:function s(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function a(t){this.begin(t)}}
t.performAction=function l(t,e,r,n){var i=n
switch(r){case 0:break
case 1:return 20
break
case 2:return 19
break
case 3:return 8
break
case 4:return 9
break
case 5:return 6
break
case 6:return 7
break
case 7:return 11
break
case 8:return 13
break
case 9:return 10
break
case 10:return 12
break
case 11:return 14
break
case 12:return 15
break
case 13:return 16
break
case 14:return 17
break
case 15:return 18
break
case 16:return 5
break
case 17:return"INVALID"
break}}
t.rules=[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./]
t.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:true}}
return t}()
t.lexer=e
return t}()
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=h}exports.Jed=h}else{if(typeof define==="function"&&define.amd){define("jed",function(){return h})}t["Jed"]=h}})(this)
;
(function(){var n="en"
var l={af:"nplurals=2; plural=(n != 1)",ar:"nplurals=6; plural= n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5",az:"nplurals=2; plural=(n != 1)",bg:"nplurals=2; plural=(n != 1)",ca:"nplurals=2; plural=(n != 1)",cs:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",da:"nplurals=2; plural=(n != 1)",de:"nplurals=2; plural=(n != 1)",el:"nplurals=2; plural=(n != 1)",en:"nplurals=2; plural=(n != 1)","es-ES":"nplurals=2; plural=(n != 1)",fi:"nplurals=2; plural=(n != 1)",fr:"nplurals=2; plural=(n > 1)",he:"nplurals=2; plural=(n != 1)",hi:"nplurals=2; plural=(n!=1)",hu:"nplurals=2; plural=(n != 1)",it:"nplurals=2; plural=(n != 1)",ja:"nplurals=1; plural=0",ko:"nplurals=1; plural=0",nl:"nplurals=2; plural=(n != 1)",no:"nplurals=2; plural=(n != 1)",pl:"nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","pt-BR":"nplurals=2; plural=(n != 1)","pt-PT":"nplurals=2; plural=(n != 1)",ro:"nplurals=3; plural=(n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2)",ru:"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","si-LK":"nplurals=2; plural=(n != 1)",sk:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",sr:"nplurals=4; plural=n==1? 3 : n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","sv-SE":"nplurals=2; plural=(n != 1) ",tr:"nplurals=1; plural=0",uk:"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","ur-PK":"nplurals=2; plural=(n != 1)",vi:"nplurals=1; plural=0",xh:"nplurals=2; plural=(n != 1)","zh-CN":"nplurals=1; plural=0","zh-TW":"nplurals=1; plural=0"}
var r=function(r){return l[r]||l[n]}
window.i18n=new Jed({})
i18n.options.locale_data={}
jQuery._=function(n,l){l=l||{}
if(typeof n==="object"&&n.messages){n=n.messages[0]}return n.replace(/%\(([\w_]+)\)s/g,function(n,r){var a=l[r]
return a===undefined?n:a})}
jQuery.ngettext=function(l,a,u,p){var s=l
var e=s.lang||n
if(!i18n.options.locale_data[e]){i18n.options.locale_data[e]={"":{domain:e,lang:e,plural_forms:r(e)}}}if(typeof s==="object"){p=u
u=a
l=s.messages[0]
i18n.options.locale_data[e][l]=[null].concat(s.messages)}p=p||{}
p.num=p.num||u
return jQuery._(i18n.dngettext(e,l,a,u),p)}
jQuery.ngetpos=function(n,l){l=l||"en"
return Jed.PF.compile(r(l))(n)}
jQuery.isSingular=function(n,l){return jQuery.ngetpos(n,l)===0}
jQuery.i18nDoNotTranslate=jQuery._
i18n.handlebars_underscore=function(n){return n.fn(this)}
i18n.handlebars_do_not_translate=function(n){return n.fn(this)}
i18n.handlebars_ngettext=function(n,l,r,a){if(typeof l!=="string"){a=l
l="en"
r=0}this.num=this.num||n
return jQuery.ngetpos(n)===r?a.fn(this):a.inverse(this)}})()
;
(function(){var t={am_pm:["AM","PM"],day_name:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],era:["BC","AD"],era_name:["Before Christ","Anno Domini"],month_name:["January","February","March","April","May","June","July","August","September","October","November","December"],month_short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],order_full:"MDY",order_long:"MDY",order_medium:"MDY",order_short:"MDY"}
var e={decimal_separator:".",grouping_separator:",",minus:"-"}
var n={SHORT_PADDED_CENTURY:function(t){if(t){return(t.getMonth()+101+"").substring(1)+"/"+(t.getDate()+101+"").substring(1)+"/"+t.getFullYear()}},SHORT:function(t){if(t){return t.getMonth()+1+"/"+t.getDate()+"/"+(t.getFullYear()+"").substring(2)}},SHORT_NOYEAR:function(t){if(t){return t.getMonth()+1+"/"+t.getDate()}},SHORT_NODAY:function(t){if(t){return t.getMonth()+1+" "+(t.getFullYear()+"").substring(2)}},MEDIUM:function(e){if(e){return t.month_short[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}},MEDIUM_NOYEAR:function(e){if(e){return t.month_short[e.getMonth()]+" "+e.getDate()}},MEDIUM_WEEKDAY_NOYEAR:function(e){if(e){return t.day_short[e.getDay()]+" "+t.month_short[e.getMonth()]+" "+e.getDate()}},LONG_NODAY:function(e){if(e){return t.month_name[e.getMonth()]+" "+e.getFullYear()}},LONG:function(e){if(e){return t.month_name[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}},FULL:function(e){if(e){return t.day_name[e.getDay()]+","+" "+t.month_name[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}}}
window.icu=window.icu||new Object
var r=window.icu
r.getCountry=function(){return""}
r.getCountryName=function(){return""}
r.getDateFormat=function(t){var e={}
e.format=n[t]
return e}
r.getDateFormats=function(){return n}
r.getDateFormatSymbols=function(){return t}
r.getDecimalFormat=function(t){var n={}
n.format=function(n){var r=n<0?Math.abs(n).toFixed(t):n.toFixed(t)
var a=r.split(".")
s=a[0]
var o=a[1]
var u=/(\d+)(\d{3})/
while(u.test(s)){s=s.replace(u,"$1"+e["grouping_separator"]+"$2")}return(n<0?e["minus"]:"")+s+e["decimal_separator"]+o}
return n}
r.getDecimalFormatSymbols=function(){return e}
r.getIntegerFormat=function(){var t={}
t.format=function(t){var n=t<0?Math.abs(t).toString():t.toString()
var r=/(\d+)(\d{3})/
while(r.test(n)){n=n.replace(r,"$1"+e["grouping_separator"]+"$2")}return t<0?e["minus"]+n:n}
return t}
r.getLanguage=function(){return"en"}
r.getLanguageName=function(){return"English"}
r.getLocale=function(){return"en"}
r.getLocaleName=function(){return"English"}})()
;
(function(){var e=false
function a(t,n,r){var i=this
this.files=[]
this.progress=0
this.lastProgress=0
this.downloadStarted=false
this.evaluationRequested=false
this.packageName=t
_.each(n,function(e){i.files.push({filename:e,content:null,evaled:false})})
this.startDownload=function(){if(i.downloadStarted){return}i.downloadStarted=true
_.each(i.files,function(e){$.ajax({type:"GET",url:e.filename,data:null,success:function(a){i.finishDownload(e,a)},error:function(e,a,t){r.deferred.fail()},dataType:"html"})})}
this.finishDownload=function(a,t){if(e){KAConsole.log("Package "+i.packageName+" downloaded "+a.filename)}a.content=t
i.progress++
r.deferred.notify(i.progress/(2*i.files.length))
i.lastProgress=i.progress
if(i.evaluationRequested){i._evaluate()}}
this.evaluateWhenReady=function(){if(i.evaluationRequested){return}i.evaluationRequested=true
if(!i.downloadStarted){i.startDownload()
return}i._evaluate()}
this._evaluate=function(){var a=false
_.each(i.files,function(e){if(a){return}if(e.content){if(!e.evaled){o(e,i.packageName)}}else{a=true}})
if(a){if(i.progress!==i.lastProgress){r.deferred.notify(i.progress/(2*i.files.length))
i.lastProgress=i.progress}}else{try{r.deferred.resolve(r.toExport)}catch(t){KAConsole.log("Listener failed on load of "+this.packageName)
throw t}if(e){KAConsole.log("Package "+i.packageName+" evaluated.")}}}
function o(t,n){var r
var o=t.filename.slice(t.filename.lastIndexOf(".")+1)
r=a.Formats[o](t,n)
if(e){KAConsole.log("Package "+n+" evaled "+t.filename)}t.evaled=true
i.progress++
return r}}(function(){a._getHead=function(){return document.getElementsByTagName("head")[0]||document.documentElement}
var e
a._qualifyUrl=function(a){if(!e){e=document.createElement("a")}e.href=a
return e.href}
function t(e){var a=e.split("/")
var t=a.pop().replace(".","_")
var n=a.pop().replace("-package","")
return n+"_"+t}a.Formats={js:function(e){var t=a._qualifyUrl(e.filename)
$.globalEval(e.content+"\n//# sourceURL="+t+"\n")},css:function(e){var n=t(e.filename)
var r=document.getElementById(n)
if(!r){r=document.createElement("style")
r.id=n
r.setAttribute("data-href",e.filename)
a._getHead().appendChild(r)}if(r.styleSheet){try{r.styleSheet.cssText=e.content}catch(i){throw new Error("Couldn't reassign styleSheet.cssText.")}}else{(function(e){if(r.childNodes.length>0){if(r.firstChild.nodeValue!==e.nodeValue){r.replaceChild(e,r.firstChild)}}else{r.appendChild(e)}})(document.createTextNode(e.content))}}}})()
window.PackageManager=_.extend(window.PackageManager||{},{_packages:{},_getPackage:function(e){if(!this._packages[e]){this._packages[e]={deferred:new $.Deferred,dependencies:[],toExport:{}}}return this._packages[e]},setLoadedAndExport:function(e,a){this.define(e,a)
this.setLoaded(e)},setLoaded:function(){_.each(arguments,function(e){var a=this._getPackage(e)
a.deferred.resolve(a.toExport)},this)},define:function(e,a){_.extend(this._getPackage(e).toExport,a)},registerDynamic:function(t,n){var r=t.name
var i=this._getPackage(r)
if(!i.loader){i.loader=n||new a(r,t.files,i)
i.dependencies=t.dependencies||[]}if(e){KAConsole.log("Package "+r+" registered.")}},registerManifests:function(e){var a=this
_.each(e,function(e,t){_.each(e,function(e){a.registerDynamic(e)})})},precache:function(e,a){var t=this._getPackage(e)
if(t.deferred.state()==="resolved"){return}if(!t.loader){throw new Error("Cannot dynamically load '"+e+"' without it first being registered.")}if(t.loader.downloadStarted){return}_.each(t.dependencies,function(e){PackageManager.precache(e,a)})
if(a){_.delay(_.bind(t.loader.startDownload,t.loader),a)}else{t.loader.startDownload()}},require:function(){return $.when.apply(this,_.map(arguments,function(e){var a=this._getPackage(e)
if(a.deferred.state()!=="resolved"){this.precache(e)
this.require.apply(this,a.dependencies).then(function(){a.loader.evaluateWhenReady()})}return a.deferred},this))},whenLoaded:function(e){return this._getPackage(e).deferred},getCurrentPackage:function(e){return this._getPackage(e).toExport},isLoaded:function(e){return this._getPackage(e).deferred.state()==="resolved"},PackageLoader:a})
if(PackageManager._q){PackageManager.setLoaded.apply(PackageManager,PackageManager._q)
delete PackageManager._q}})()
;
(function(t,e){var i=0,n=/^ui-id-\d+$/
t.ui=t.ui||{}
if(t.ui.version){return}t.extend(t.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})
t.fn.extend({_focus:t.fn.focus,focus:function(e,i){return typeof e==="number"?this.each(function(){var n=this
setTimeout(function(){t(n).focus()
if(i){i.call(n)}},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e
if(t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){e=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0)}else{e=this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e){return this.css("zIndex",i)}if(this.length){var n=t(this[0]),r,s
while(n.length&&n[0]!==document){r=n.css("position")
if(r==="absolute"||r==="relative"||r==="fixed"){s=parseInt(n.css("zIndex"),10)
if(!isNaN(s)&&s!==0){return s}}n=n.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++i}})},removeUniqueId:function(){return this.each(function(){if(n.test(this.id)){t(this).removeAttr("id")}})}})
function r(e,i){var n,r,o,u=e.nodeName.toLowerCase()
if("area"===u){n=e.parentNode
r=n.name
if(!e.href||!r||n.nodeName.toLowerCase()!=="map"){return false}o=t("img[usemap=#"+r+"]")[0]
return!!o&&s(o)}return(/input|select|textarea|button|object/.test(u)?!e.disabled:"a"===u?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return t.css(this,"visibility")==="hidden"}).length}t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])},focusable:function(e){return r(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var i=t.attr(e,"tabindex"),n=isNaN(i)
return(n||i>=0)&&r(e,!n)}})
if(!t("<a>").outerWidth(1).jquery){t.each(["Width","Height"],function(i,n){var r=n==="Width"?["Left","Right"]:["Top","Bottom"],s=n.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight}
function u(e,i,n,s){t.each(r,function(){i-=parseFloat(t.css(e,"padding"+this))||0
if(n){i-=parseFloat(t.css(e,"border"+this+"Width"))||0}if(s){i-=parseFloat(t.css(e,"margin"+this))||0}})
return i}t.fn["inner"+n]=function(i){if(i===e){return o["inner"+n].call(this)}return this.each(function(){t(this).css(s,u(this,i)+"px")})}
t.fn["outer"+n]=function(e,i){if(typeof e!=="number"){return o["outer"+n].call(this,e)}return this.each(function(){t(this).css(s,u(this,e,true,i)+"px")})}})}if(!t.fn.addBack){t.fn.addBack=function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}}if(t("<a>").data("a-b","a").removeData("a-b").data("a-b")){t.fn.removeData=function(e){return function(i){if(arguments.length){return e.call(this,t.camelCase(i))}else{return e.call(this)}}}(t.fn.removeData)}t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
t.support.selectstart="onselectstart"in document.createElement("div")
t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}})
t.extend(t.ui,{plugin:{add:function(e,i,n){var r,s=t.ui[e].prototype
for(r in n){s.plugins[r]=s.plugins[r]||[]
s.plugins[r].push([i,n[r]])}},call:function(t,e,i){var n,r=t.plugins[e]
if(!r||!t.element[0].parentNode||t.element[0].parentNode.nodeType===11){return}for(n=0;n<r.length;n++){if(t.options[r[n][0]]){r[n][1].apply(t.element,i)}}}},hasScroll:function(e,i){if(t(e).css("overflow")==="hidden"){return false}var n=i&&i==="left"?"scrollLeft":"scrollTop",r=false
if(e[n]>0){return true}e[n]=1
r=e[n]>0
e[n]=0
return r}})})(jQuery)
;
(function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData
t.cleanData=function(e){for(var i=0,n;(n=e[i])!=null;i++){try{t(n).triggerHandler("remove")}catch(o){}}s(e)}
t.widget=function(e,i,n){var s,o,r,a,u={},d=e.split(".")[0]
e=e.split(".")[1]
s=d+"-"+e
if(!n){n=i
i=t.Widget}t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)}
t[d]=t[d]||{}
o=t[d][e]
r=t[d][e]=function(t,e){if(!this._createWidget){return new r(t,e)}if(arguments.length){this._createWidget(t,e)}}
t.extend(r,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]})
a=new i
a.options=t.widget.extend({},a.options)
t.each(n,function(e,n){if(!t.isFunction(n)){u[e]=n
return}u[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)}
return function(){var e=this._super,i=this._superApply,o
this._super=t
this._superApply=s
o=n.apply(this,arguments)
this._super=e
this._superApply=i
return o}}()})
r.prototype=t.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix:e},u,{constructor:r,namespace:d,widgetName:e,widgetFullName:s})
if(o){t.each(o._childConstructors,function(e,i){var n=i.prototype
t.widget(n.namespace+"."+n.widgetName,r,i._proto)})
delete o._childConstructors}else{i._childConstructors.push(r)}t.widget.bridge(e,r)}
t.widget.extend=function(i){var s=n.call(arguments,1),o=0,r=s.length,a,u
for(;o<r;o++){for(a in s[o]){u=s[o][a]
if(s[o].hasOwnProperty(a)&&u!==e){if(t.isPlainObject(u)){i[a]=t.isPlainObject(i[a])?t.widget.extend({},i[a],u):t.widget.extend({},u)}else{i[a]=u}}}}return i}
t.widget.bridge=function(i,s){var o=s.prototype.widgetFullName||i
t.fn[i]=function(r){var a=typeof r==="string",u=n.call(arguments,1),d=this
r=!a&&u.length?t.widget.extend.apply(null,[r].concat(u)):r
if(a){this.each(function(){var n,s=t.data(this,o)
if(!s){return t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}if(!t.isFunction(s[r])||r.charAt(0)==="_"){return t.error("no such method '"+r+"' for "+i+" widget instance")}n=s[r].apply(s,u)
if(n!==s&&n!==e){d=n&&n.jquery?d.pushStack(n.get()):n
return false}})}else{this.each(function(){var e=t.data(this,o)
if(e){e.option(r||{})._init()}else{t.data(this,o,new s(r,this))}})}return d}}
t.Widget=function(){}
t.Widget._childConstructors=[]
t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0]
this.element=t(n)
this.uuid=i++
this.eventNamespace="."+this.widgetName+this.uuid
this.options=t.widget.extend({},this.options,this._getCreateOptions(),e)
this.bindings=t()
this.hoverable=t()
this.focusable=t()
if(n!==this){t.data(n,this.widgetFullName,this)
this._on(true,this.element,{remove:function(t){if(t.target===n){this.destroy()}}})
this.document=t(n.style?n.ownerDocument:n.document||n)
this.window=t(this.document[0].defaultView||this.document[0].parentWindow)}this._create()
this._trigger("create",null,this._getCreateEventData())
this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName))
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled")
this.bindings.unbind(this.eventNamespace)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s=i,o,r,a
if(arguments.length===0){return t.widget.extend({},this.options)}if(typeof i==="string"){s={}
o=i.split(".")
i=o.shift()
if(o.length){r=s[i]=t.widget.extend({},this.options[i])
for(a=0;a<o.length-1;a++){r[o[a]]=r[o[a]]||{}
r=r[o[a]]}i=o.pop()
if(n===e){return r[i]===e?null:r[i]}r[i]=n}else{if(n===e){return this.options[i]===e?null:this.options[i]}s[i]=n}}this._setOptions(s)
return this},_setOptions:function(t){var e
for(e in t){this._setOption(e,t[e])}return this},_setOption:function(t,e){this.options[t]=e
if(t==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(e,i,n){var s,o=this
if(typeof e!=="boolean"){n=i
i=e
e=false}if(!n){n=i
i=this.element
s=this.widget()}else{i=s=t(i)
this.bindings=this.bindings.add(i)}t.each(n,function(n,r){function a(){if(!e&&(o.options.disabled===true||t(this).hasClass("ui-state-disabled"))){return}return(typeof r==="string"?o[r]:r).apply(o,arguments)}if(typeof r!=="string"){a.guid=r.guid=r.guid||a.guid||t.guid++}var u=n.match(/^(\w+)\s*(.*)$/),d=u[1]+o.eventNamespace,l=u[2]
if(l){s.delegate(l,d,a)}else{i.bind(d,a)}})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return(typeof t==="string"?n[t]:t).apply(n,arguments)}var n=this
return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e)
this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e)
this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,r=this.options[e]
n=n||{}
i=t.Event(i)
i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase()
i.target=this.element[0]
o=i.originalEvent
if(o){for(s in o){if(!(s in i)){i[s]=o[s]}}}this.element.trigger(i,n)
return!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===false||i.isDefaultPrevented())}}
t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){if(typeof s==="string"){s={effect:s}}var r,a=!s?e:s===true||typeof s==="number"?i:s.effect||i
s=s||{}
if(typeof s==="number"){s={duration:s}}r=!t.isEmptyObject(s)
s.complete=o
if(s.delay){n.delay(s.delay)}if(r&&t.effects&&t.effects.effect[a]){n[e](s)}else if(a!==e&&n[a]){n[a](s.duration,s.easing,o)}else{n.queue(function(i){t(this)[e]()
if(o){o.call(n[0])}i()})}}})})(jQuery)
;
(function(e,t){var s=false
e(document).mouseup(function(){s=false})
e.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this
this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(s){if(true===e.data(s.target,t.widgetName+".preventClickEvent")){e.removeData(s.target,t.widgetName+".preventClickEvent")
s.stopImmediatePropagation()
return false}})
this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
if(this._mouseMoveDelegate){e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(t){if(s){return}this._mouseStarted&&this._mouseUp(t)
this._mouseDownEvent=t
var i=this,o=t.which===1,u=typeof this.options.cancel==="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:false
if(!o||u||!this._mouseCapture(t)){return true}this.mouseDelayMet=!this.options.delay
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==false
if(!this._mouseStarted){t.preventDefault()
return true}}if(true===e.data(t.target,this.widgetName+".preventClickEvent")){e.removeData(t.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(e){return i._mouseMove(e)}
this._mouseUpDelegate=function(e){return i._mouseUp(e)}
e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
t.preventDefault()
s=true
return true},_mouseMove:function(t){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button){return this._mouseUp(t)}if(this._mouseStarted){this._mouseDrag(t)
return t.preventDefault()}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==false
this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)}return!this._mouseStarted},_mouseUp:function(t){e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
if(this._mouseStarted){this._mouseStarted=false
if(t.target===this._mouseDownEvent.target){e.data(t.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(t)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery)
;
(function(t,i){t.ui=t.ui||{}
var e,o=Math.max,l=Math.abs,n=Math.round,f=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,p=/%$/,c=t.fn.position
function a(t,i,e){return[parseFloat(t[0])*(p.test(t[0])?i/100:1),parseFloat(t[1])*(p.test(t[1])?e/100:1)]}function d(i,e){return parseInt(t.css(i,e),10)||0}function g(i){var e=i[0]
if(e.nodeType===9){return{width:i.width(),height:i.height(),offset:{top:0,left:0}}}if(t.isWindow(e)){return{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}}if(e.preventDefault){return{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}}return{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}t.position={scrollbarWidth:function(){if(e!==i){return e}var o,l,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=n.children()[0]
t("body").append(n)
o=f.offsetWidth
n.css("overflow","scroll")
l=f.offsetWidth
if(o===l){l=n[0].clientWidth}n.remove()
return e=o-l},getScrollInfo:function(i){var e=i.isWindow?"":i.element.css("overflow-x"),o=i.isWindow?"":i.element.css("overflow-y"),l=e==="scroll"||e==="auto"&&i.width<i.element[0].scrollWidth,n=o==="scroll"||o==="auto"&&i.height<i.element[0].scrollHeight
return{width:l?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var e=t(i||window),o=t.isWindow(e[0])
return{element:e,isWindow:o,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:o?e.width():e.outerWidth(),height:o?e.height():e.outerHeight()}}}
t.fn.position=function(i){if(!i||!i.of){return c.apply(this,arguments)}i=t.extend({},i)
var e,p,u,m,w,W,v=t(i.of),y=t.position.getWithinInfo(i.within),b=t.position.getScrollInfo(y),H=(i.collision||"flip").split(" "),x={}
W=g(v)
if(v[0].preventDefault){i.at="left top"}p=W.width
u=W.height
m=W.offset
w=t.extend({},m)
t.each(["my","at"],function(){var t=(i[this]||"").split(" "),e,o
if(t.length===1){t=f.test(t[0])?t.concat(["center"]):s.test(t[0])?["center"].concat(t):["center","center"]}t[0]=f.test(t[0])?t[0]:"center"
t[1]=s.test(t[1])?t[1]:"center"
e=r.exec(t[0])
o=r.exec(t[1])
x[this]=[e?e[0]:0,o?o[0]:0]
i[this]=[h.exec(t[0])[0],h.exec(t[1])[0]]})
if(H.length===1){H[1]=H[0]}if(i.at[0]==="right"){w.left+=p}else if(i.at[0]==="center"){w.left+=p/2}if(i.at[1]==="bottom"){w.top+=u}else if(i.at[1]==="center"){w.top+=u/2}e=a(x.at,p,u)
w.left+=e[0]
w.top+=e[1]
return this.each(function(){var f,s,r=t(this),h=r.outerWidth(),c=r.outerHeight(),g=d(this,"marginLeft"),W=d(this,"marginTop"),T=h+g+d(this,"marginRight")+b.width,L=c+W+d(this,"marginBottom")+b.height,P=t.extend({},w),I=a(x.my,r.outerWidth(),r.outerHeight())
if(i.my[0]==="right"){P.left-=h}else if(i.my[0]==="center"){P.left-=h/2}if(i.my[1]==="bottom"){P.top-=c}else if(i.my[1]==="center"){P.top-=c/2}P.left+=I[0]
P.top+=I[1]
if(!t.support.offsetFractions){P.left=n(P.left)
P.top=n(P.top)}f={marginLeft:g,marginTop:W}
t.each(["left","top"],function(o,l){if(t.ui.position[H[o]]){t.ui.position[H[o]][l](P,{targetWidth:p,targetHeight:u,elemWidth:h,elemHeight:c,collisionPosition:f,collisionWidth:T,collisionHeight:L,offset:[e[0]+I[0],e[1]+I[1]],my:i.my,at:i.at,within:y,elem:r})}})
if(i.using){s=function(t){var e=m.left-P.left,n=e+p-h,f=m.top-P.top,s=f+u-c,a={target:{element:v,left:m.left,top:m.top,width:p,height:u},element:{element:r,left:P.left,top:P.top,width:h,height:c},horizontal:n<0?"left":e>0?"right":"center",vertical:s<0?"top":f>0?"bottom":"middle"}
if(p<h&&l(e+n)<p){a.horizontal="center"}if(u<c&&l(f+s)<u){a.vertical="middle"}if(o(l(e),l(n))>o(l(f),l(s))){a.important="horizontal"}else{a.important="vertical"}i.using.call(this,t,a)}}r.offset(t.extend(P,{using:s}))})}
t.ui.position={fit:{left:function(t,i){var e=i.within,l=e.isWindow?e.scrollLeft:e.offset.left,n=e.width,f=t.left-i.collisionPosition.marginLeft,s=l-f,r=f+i.collisionWidth-n-l,h
if(i.collisionWidth>n){if(s>0&&r<=0){h=t.left+s+i.collisionWidth-n-l
t.left+=s-h}else if(r>0&&s<=0){t.left=l}else{if(s>r){t.left=l+n-i.collisionWidth}else{t.left=l}}}else if(s>0){t.left+=s}else if(r>0){t.left-=r}else{t.left=o(t.left-f,t.left)}},top:function(t,i){var e=i.within,l=e.isWindow?e.scrollTop:e.offset.top,n=i.within.height,f=t.top-i.collisionPosition.marginTop,s=l-f,r=f+i.collisionHeight-n-l,h
if(i.collisionHeight>n){if(s>0&&r<=0){h=t.top+s+i.collisionHeight-n-l
t.top+=s-h}else if(r>0&&s<=0){t.top=l}else{if(s>r){t.top=l+n-i.collisionHeight}else{t.top=l}}}else if(s>0){t.top+=s}else if(r>0){t.top-=r}else{t.top=o(t.top-f,t.top)}}},flip:{left:function(t,i){var e=i.within,o=e.offset.left+e.scrollLeft,n=e.width,f=e.isWindow?e.scrollLeft:e.offset.left,s=t.left-i.collisionPosition.marginLeft,r=s-f,h=s+i.collisionWidth-n-f,p=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,c=i.at[0]==="left"?i.targetWidth:i.at[0]==="right"?-i.targetWidth:0,a=-2*i.offset[0],d,g
if(r<0){d=t.left+p+c+a+i.collisionWidth-n-o
if(d<0||d<l(r)){t.left+=p+c+a}}else if(h>0){g=t.left-i.collisionPosition.marginLeft+p+c+a-f
if(g>0||l(g)<h){t.left+=p+c+a}}},top:function(t,i){var e=i.within,o=e.offset.top+e.scrollTop,n=e.height,f=e.isWindow?e.scrollTop:e.offset.top,s=t.top-i.collisionPosition.marginTop,r=s-f,h=s+i.collisionHeight-n-f,p=i.my[1]==="top",c=p?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,a=i.at[1]==="top"?i.targetHeight:i.at[1]==="bottom"?-i.targetHeight:0,d=-2*i.offset[1],g,u
if(r<0){u=t.top+c+a+d+i.collisionHeight-n-o
if(t.top+c+a+d>r&&(u<0||u<l(r))){t.top+=c+a+d}}else if(h>0){g=t.top-i.collisionPosition.marginTop+c+a+d-f
if(t.top+c+a+d>h&&(g>0||l(g)<h)){t.top+=c+a+d}}}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments)
t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments)
t.ui.position.fit.top.apply(this,arguments)}}};(function(){var i,e,o,l,n,f=document.getElementsByTagName("body")[0],s=document.createElement("div")
i=document.createElement(f?"div":"body")
o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"}
if(f){t.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"})}for(n in o){i.style[n]=o[n]}i.appendChild(s)
e=f||document.documentElement
e.insertBefore(i,e.firstChild)
s.style.cssText="position: absolute; left: 10.7432222px;"
l=t(s).offset().left
t.support.offsetFractions=l>10&&l<11
i.innerHTML=""
e.removeChild(i)})()})(jQuery)
;
(function(e){e.support.touch="ontouchend"in document
if(!e.support.touch){return}var t=e.ui.mouse.prototype,o=t._mouseInit,u
function n(e,t){if(e.originalEvent.touches.length>1){return}e.preventDefault()
var o=e.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents")
u.initMouseEvent(t,true,true,window,1,o.screenX,o.screenY,o.clientX,o.clientY,false,false,false,false,0,null)
e.target.dispatchEvent(u)}t._touchStart=function(e){var t=this
if(u||!t._mouseCapture(e.originalEvent.changedTouches[0])){return}u=true
t._touchMoved=false
n(e,"mouseover")
n(e,"mousemove")
n(e,"mousedown")}
t._touchMove=function(e){if(!u){return}this._touchMoved=true
n(e,"mousemove")}
t._touchEnd=function(e){if(!u){return}n(e,"mouseup")
n(e,"mouseout")
if(!this._touchMoved){n(e,"click")}u=false}
t._mouseInit=function(){var t=this
t.element.bind("touchstart",e.proxy(t,"_touchStart")).bind("touchmove",e.proxy(t,"_touchMove")).bind("touchend",e.proxy(t,"_touchEnd"))
o.call(t)}})(jQuery)
;
jQuery.effects||function(e,t){var n="ui-effects-"
e.effects={effect:{}};(function(e,t){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},a={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},o={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},f=s.support={},u=e("<p>")[0],l,c=e.each
u.style.cssText="background-color:rgba(1,1,1,.5)"
f.rgba=u.style.backgroundColor.indexOf("rgba")>-1
c(a,function(e,t){t.cache="_"+e
t.props.alpha={idx:3,type:"percent",def:1}})
function d(e,t,n){var r=o[t.type]||{}
if(e==null){return n||!t.def?null:t.def}e=r.floor?~~e:parseFloat(e)
if(isNaN(e)){return t.def}if(r.mod){return(e+r.mod)%r.mod}return 0>e?0:r.max<e?r.max:e}function h(t){var n=s(),r=n._rgba=[]
t=t.toLowerCase()
c(i,function(e,i){var s,o=i.re.exec(t),f=o&&i.parse(o),u=i.space||"rgba"
if(f){s=n[u](f)
n[a[u].cache]=s[a[u].cache]
r=n._rgba=s._rgba
return false}})
if(r.length){if(r.join()==="0,0,0,0"){e.extend(r,l.transparent)}return n}return l[t]}s.fn=e.extend(s.prototype,{parse:function(n,r,i,o){if(n===t){this._rgba=[null,null,null,null]
return this}if(n.jquery||n.nodeType){n=e(n).css(r)
r=t}var f=this,u=e.type(n),p=this._rgba=[]
if(r!==t){n=[n,r,i,o]
u="array"}if(u==="string"){return this.parse(h(n)||l._default)}if(u==="array"){c(a.rgba.props,function(e,t){p[t.idx]=d(n[t.idx],t)})
return this}if(u==="object"){if(n instanceof s){c(a,function(e,t){if(n[t.cache]){f[t.cache]=n[t.cache].slice()}})}else{c(a,function(t,r){var i=r.cache
c(r.props,function(e,t){if(!f[i]&&r.to){if(e==="alpha"||n[e]==null){return}f[i]=r.to(f._rgba)}f[i][t.idx]=d(n[e],t,true)})
if(f[i]&&e.inArray(null,f[i].slice(0,3))<0){f[i][3]=1
if(r.from){f._rgba=r.from(f[i])}}})}return this}},is:function(e){var t=s(e),n=true,r=this
c(a,function(e,i){var s,a=t[i.cache]
if(a){s=r[i.cache]||i.to&&i.to(r._rgba)||[]
c(i.props,function(e,t){if(a[t.idx]!=null){n=a[t.idx]===s[t.idx]
return n}})}return n})
return n},_space:function(){var e=[],t=this
c(a,function(n,r){if(t[r.cache]){e.push(n)}})
return e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=a[r],f=this.alpha()===0?s("transparent"):this,u=f[i.cache]||i.to(f._rgba),l=u.slice()
n=n[i.cache]
c(i.props,function(e,r){var i=r.idx,s=u[i],a=n[i],f=o[r.type]||{}
if(a===null){return}if(s===null){l[i]=a}else{if(f.mod){if(a-s>f.mod/2){s+=f.mod}else if(s-a>f.mod/2){s-=f.mod}}l[i]=d((a-s)*t+s,r)}})
return this[r](l)},blend:function(t){if(this._rgba[3]===1){return this}var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba
return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e})
if(n[3]===1){n.pop()
t="rgb("}return t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){if(e==null){e=t>2?1:0}if(t&&t<3){e=Math.round(e*100)+"%"}return e})
if(n[3]===1){n.pop()
t="hsl("}return t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop()
if(t){n.push(~~(r*255))}return"#"+e.map(n,function(e){e=(e||0).toString(16)
return e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}})
s.fn.parse.prototype=s.fn
function p(e,t,n){n=(n+1)%1
if(n*6<1){return e+(t-e)*n*6}if(n*2<1){return t}if(n*3<2){return e+(t-e)*(2/3-n)*6}return e}a.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),a=Math.min(t,n,r),o=s-a,f=s+a,u=f*.5,l,c
if(a===s){l=0}else if(t===s){l=60*(n-r)/o+360}else if(n===s){l=60*(r-t)/o+120}else{l=60*(t-n)/o+240}if(o===0){c=0}else if(u<=.5){c=o/f}else{c=o/(2-f)}return[Math.round(l)%360,c,u,i==null?1:i]}
a.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,a=2*r-s
return[Math.round(p(a,s,t+1/3)*255),Math.round(p(a,s,t)*255),Math.round(p(a,s,t-1/3)*255),i]}
c(a,function(n,i){var a=i.props,o=i.cache,f=i.to,u=i.from
s.fn[n]=function(n){if(f&&!this[o]){this[o]=f(this._rgba)}if(n===t){return this[o].slice()}var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,h=this[o].slice()
c(a,function(e,t){var n=l[i==="object"?e:t.idx]
if(n==null){n=h[t.idx]}h[t.idx]=d(n,t)})
if(u){r=s(u(h))
r[o]=h
return r}else{return s(h)}}
c(a,function(t,i){if(s.fn[t]){return}s.fn[t]=function(s){var a=e.type(s),o=t==="alpha"?this._hsla?"hsla":"rgba":n,f=this[o](),u=f[i.idx],l
if(a==="undefined"){return u}if(a==="function"){s=s.call(this,u)
a=e.type(s)}if(s==null&&i.empty){return this}if(a==="string"){l=r.exec(s)
if(l){s=u+parseFloat(l[2])*(l[1]==="+"?1:-1)}}f[i.idx]=s
return this[o](f)}})})
s.hook=function(t){var n=t.split(" ")
c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,a,o=""
if(r!=="transparent"&&(e.type(r)!=="string"||(i=h(r)))){r=s(i||r)
if(!f.rgba&&r._rgba[3]!==1){a=n==="backgroundColor"?t.parentNode:t
while((o===""||o==="transparent")&&a&&a.style){try{o=e.css(a,"backgroundColor")
a=a.parentNode}catch(u){}}r=r.blend(o&&o!=="transparent"?o:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(u){}}}
e.fx.step[n]=function(t){if(!t.colorInit){t.start=s(t.elem,n)
t.end=s(t.end)
t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})}
s.hook(n)
e.cssHooks.borderColor={expand:function(e){var t={}
c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e})
return t}}
l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr){jQuery.style(e.elem,n,e.end)
e.setAttr=true}}})
function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={}
if(i&&i.length&&i[0]&&i[i[0]]){r=i.length
while(r--){n=i[r]
if(typeof i[n]==="string"){s[e.camelCase(n)]=i[n]}}}else{for(n in i){if(typeof i[n]==="string"){s[n]=i[n]}}}return s}function s(t,n){var i={},s,a
for(s in n){a=n[s]
if(t[s]!==a){if(!r[s]){if(e.fx.step[s]||!isNaN(parseFloat(a))){i[s]=a}}}}return i}if(!e.fn.addBack){e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}e.effects.animateClass=function(t,r,a,o){var f=e.speed(r,a,o)
return this.queue(function(){var r=e(this),a=r.attr("class")||"",o,u=f.children?r.find("*").addBack():r
u=u.map(function(){var t=e(this)
return{el:t,start:i(this)}})
o=function(){e.each(n,function(e,n){if(t[n]){r[n+"Class"](t[n])}})}
o()
u=u.map(function(){this.end=i(this.el[0])
this.diff=s(this.start,this.end)
return this})
r.attr("class",a)
u=u.map(function(){var t=this,n=e.Deferred(),r=e.extend({},f,{queue:false,complete:function(){n.resolve(t)}})
this.el.animate(this.diff,r)
return n.promise()})
e.when.apply(e,u.get()).done(function(){o()
e.each(arguments,function(){var t=this.el
e.each(this.diff,function(e){t.css(e,"")})})
f.complete.call(r[0])})})}
e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return arguments.length>1?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass.apply(this,arguments)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,a){if(typeof r==="boolean"||r===t){if(!i){return this._toggleClass(n,r)}else{return e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,a)}}else{return e.effects.animateClass.call(this,{toggle:n},r,i,s)}},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})})();(function(){e.extend(e.effects,{version:"1.10.1",save:function(e,t){for(var r=0;r<t.length;r++){if(t[r]!==null){e.data(n+t[r],e[0].style[t[r]])}}},restore:function(e,r){var i,s
for(s=0;s<r.length;s++){if(r[s]!==null){i=e.data(n+r[s])
if(i===t){i=""}e.css(r[s],i)}}},setMode:function(e,t){if(t==="toggle"){t=e.is(":hidden")?"show":"hide"}return t},getBaseline:function(e,t){var n,r
switch(e[0]){case"top":n=0
break
case"middle":n=.5
break
case"bottom":n=1
break
default:n=e[0]/t.height}switch(e[1]){case"left":r=0
break
case"center":r=.5
break
case"right":r=1
break
default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper")){return t.parent()}var n={width:t.outerWidth(true),height:t.outerHeight(true),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement
try{s.id}catch(a){s=document.body}t.wrap(r)
if(t[0]===s||e.contains(t[0],s)){e(s).focus()}r=t.parent()
if(t.css("position")==="static"){r.css({position:"relative"})
t.css({position:"relative"})}else{e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")})
e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r)
if(isNaN(parseInt(n[r],10))){n[r]="auto"}})
t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}t.css(i)
return r.css(n).show()},removeWrapper:function(t){var n=document.activeElement
if(t.parent().is(".ui-effects-wrapper")){t.parent().replaceWith(t)
if(t[0]===n||e.contains(t[0],n)){e(n).focus()}}return t},setTransition:function(t,n,r,i){i=i||{}
e.each(n,function(e,n){var s=t.cssUnit(n)
if(s[0]>0){i[n]=s[0]*r+s[1]}})
return i}})
function r(t,n,r,i){if(e.isPlainObject(t)){n=t
t=t.effect}t={effect:t}
if(n==null){n={}}if(e.isFunction(n)){i=n
r=null
n={}}if(typeof n==="number"||e.fx.speeds[n]){i=r
r=n
n={}}if(e.isFunction(r)){i=r
r=null}if(n){e.extend(t,n)}r=r||n.duration
t.duration=e.fx.off?0:typeof r==="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default
t.complete=i||n.complete
return t}function i(t){if(!t||typeof t==="number"||e.fx.speeds[t]){return true}return typeof t==="string"&&!e.effects.effect[t]}e.fn.extend({effect:function(){var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect]
if(e.fx.off||!s){if(n){return this[n](t.duration,t.complete)}else{return this.each(function(){if(t.complete){t.complete.call(this)}})}}function a(n){var r=e(this),i=t.complete,a=t.mode
function o(){if(e.isFunction(i)){i.call(r[0])}if(e.isFunction(n)){n()}}if(r.is(":hidden")?a==="hide":a==="show"){o()}else{s.call(r[0],t,o)}}return i===false?this.each(a):this.queue(i||"fx",a)},_show:e.fn.show,show:function(e){if(i(e)){return this._show.apply(this,arguments)}else{var t=r.apply(this,arguments)
t.mode="show"
return this.effect.call(this,t)}},_hide:e.fn.hide,hide:function(e){if(i(e)){return this._hide.apply(this,arguments)}else{var t=r.apply(this,arguments)
t.mode="hide"
return this.effect.call(this,t)}},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t==="boolean"||e.isFunction(t)){return this.__toggle.apply(this,arguments)}else{var n=r.apply(this,arguments)
n.mode="toggle"
return this.effect.call(this,n)}},cssUnit:function(t){var n=this.css(t),r=[]
e.each(["em","px","%","pt"],function(e,t){if(n.indexOf(t)>0){r=[parseFloat(n),t]}})
return r}})})();(function(){var t={}
e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}})
e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4
while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}})
e.each(t,function(t,n){e.easing["easeIn"+t]=n
e.easing["easeOut"+t]=function(e){return 1-n(1-e)}
e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})})()}(jQuery)
;
jQuery.migrateMute=true
;
(function(e,t,n){var r={}
e.migrateWarnings=[]
if(!e.migrateMute&&t.console&&console.log){console.log("JQMIGRATE: Logging is active")}if(e.migrateTrace===n){e.migrateTrace=true}e.migrateReset=function(){r={}
e.migrateWarnings.length=0}
function a(n){if(!r[n]){r[n]=true
e.migrateWarnings.push(n)
if(t.console&&console.warn&&!e.migrateMute){console.warn("JQMIGRATE: "+n)
if(e.migrateTrace&&console.trace){console.trace()}}}}function i(t,n,r,i){if(Object.defineProperty){try{Object.defineProperty(t,n,{configurable:true,enumerable:true,get:function(){a(i)
return r},set:function(e){a(i)
r=e}})
return}catch(o){}}e._definePropertyBroken=true
t[n]=r}if(document.compatMode==="BackCompat"){a("jQuery is not compatible with Quirks Mode")}var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},f=/^(?:input|button)$/i,l=/^[238]$/,d=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i
i(e,"attrFn",o||{},"jQuery.attrFn is deprecated")
e.attr=function(t,r,i,u){var c=r.toLowerCase(),g=t&&t.nodeType
if(u){if(s.length<4){a("jQuery.fn.attr( props, pass ) is deprecated")}if(t&&!l.test(g)&&(o?r in o:e.isFunction(e.fn[r]))){return e(t)[r](i)}}if(r==="type"&&i!==n&&f.test(t.nodeName)&&t.parentNode){a("Can't change the 'type' of an input or button in IE 6/7/8")}if(!e.attrHooks[c]&&d.test(c)){e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r)
return i===true||typeof i!=="boolean"&&(a=t.getAttributeNode(r))&&a.nodeValue!==false?r.toLowerCase():n},set:function(t,n,r){var a
if(n===false){e.removeAttr(t,r)}else{a=e.propFix[r]||r
if(a in t){t[a]=true}t.setAttribute(r,r.toLowerCase())}return r}}
if(p.test(c)){a("jQuery.fn.attr('"+c+"') may use property instead of attribute")}}return s.call(e,t,r,i)}
e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase()
if(n==="button"){return u.apply(this,arguments)}if(n!=="input"&&n!=="option"){a("jQuery.fn.attr('value') no longer gets properties")}return t in e?e.value:null},set:function(e,t){var n=(e.nodeName||"").toLowerCase()
if(n==="button"){return c.apply(this,arguments)}if(n!=="input"&&n!=="option"){a("jQuery.fn.attr('value', val) no longer sets properties")}e.value=t}}
var g,h,v=e.fn.init,m=e.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/
e.fn.init=function(t,n,r){var i
if(t&&typeof t==="string"&&!e.isPlainObject(n)&&(i=y.exec(t))&&i[1]){if(t.charAt(0)!=="<"){a("$(html) HTML strings must start with '<' character")}if(n&&n.context){n=n.context}if(e.parseHTML){return v.call(this,e.parseHTML(e.trim(t),n,true),n,r)}}return v.apply(this,arguments)}
e.fn.init.prototype=e.fn
e.parseJSON=function(e){if(!e&&e!==null){a("jQuery.parseJSON requires a valid JSON string")
return null}return m.apply(this,arguments)}
e.uaMatch=function(e){e=e.toLowerCase()
var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[]
return{browser:t[1]||"",version:t[2]||"0"}}
if(!e.browser){g=e.uaMatch(navigator.userAgent)
h={}
if(g.browser){h[g.browser]=true
h.version=g.version}if(h.chrome){h.webkit=true}else if(h.webkit){h.safari=true}e.browser=h}i(e,"browser",e.browser,"jQuery.browser is deprecated")
e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(true,t,this)
t.superclass=this
t.fn=t.prototype=this()
t.fn.constructor=t
t.sub=this.sub
t.fn.init=function r(a,i){if(i&&i instanceof e&&!(i instanceof t)){i=t(i)}return e.fn.init.call(this,a,i,n)}
t.fn.init.prototype=t.fn
var n=t(document)
a("jQuery.sub() is deprecated")
return t}
e.ajaxSetup({converters:{"text json":e.parseJSON}})
var b=e.fn.data
e.fn.data=function(t){var r,i,o=this[0]
if(o&&t==="events"&&arguments.length===1){r=e.data(o,t)
i=e._data(o,t)
if((r===n||r===i)&&i!==n){a("Use of jQuery.fn.data('events') is deprecated")
return i}}return b.apply(this,arguments)}
var w=/\/(java|ecma)script/i,j=e.fn.andSelf||e.fn.addBack
e.fn.andSelf=function(){a("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()")
return j.apply(this,arguments)}
if(!e.clean){e.clean=function(t,n,r,i){n=n||document
n=!n.nodeType&&n[0]||n
n=n.ownerDocument||n
a("jQuery.clean() is deprecated")
var o,s,u,c,f=[]
e.merge(f,e.buildFragment(t,n).childNodes)
if(r){u=function(e){if(!e.type||w.test(e.type)){return i?i.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e)}}
for(o=0;(s=f[o])!=null;o++){if(!(e.nodeName(s,"script")&&u(s))){r.appendChild(s)
if(typeof s.getElementsByTagName!=="undefined"){c=e.grep(e.merge([],s.getElementsByTagName("script")),u)
f.splice.apply(f,[o+1,0].concat(c))
o+=c.length}}}}return f}}var x=e.event.add,Q=e.event.remove,k=e.event.trigger,N=e.fn.toggle,C=e.fn.live,S=e.fn.die,T="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",H=new RegExp("\\b(?:"+T+")\\b"),M=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){if(typeof t!=="string"||e.event.special.hover){return t}if(M.test(t)){a("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return t&&t.replace(M,"mouseenter$1 mouseleave$1")}
if(e.event.props&&e.event.props[0]!=="attrChange"){e.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(e.event.dispatch){i(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}e.event.add=function(e,t,n,r,i){if(e!==document&&H.test(t)){a("AJAX events should be attached to document: "+t)}x.call(this,e,A(t||""),n,r,i)}
e.event.remove=function(e,t,n,r,a){Q.call(this,e,A(t)||"",n,r,a)}
e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0)
a("jQuery.fn.error() is deprecated")
e.splice(0,0,"error")
if(arguments.length){return this.bind.apply(this,e)}this.triggerHandler.apply(this,e)
return this}
e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n)){return N.apply(this,arguments)}a("jQuery.fn.toggle(handler, handler...) is deprecated")
var r=arguments,i=t.guid||e.guid++,o=0,s=function(n){var a=(e._data(this,"lastToggle"+t.guid)||0)%o
e._data(this,"lastToggle"+t.guid,a+1)
n.preventDefault()
return r[a].apply(this,arguments)||false}
s.guid=i
while(o<r.length){r[o++].guid=i}return this.click(s)}
e.fn.live=function(t,n,r){a("jQuery.fn.live() is deprecated")
if(C){return C.apply(this,arguments)}e(this.context).on(t,this.selector,n,r)
return this}
e.fn.die=function(t,n){a("jQuery.fn.die() is deprecated")
if(S){return S.apply(this,arguments)}e(this.context).off(t,this.selector||"**",n)
return this}
e.event.trigger=function(e,t,n,r){if(!n&&!H.test(e)){a("Global events are undocumented and deprecated")}return k.call(this,e,t,n||document,r)}
e.each(T.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this
if(t!==document){e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,true)})
e._data(this,n,e.guid++)}return false},teardown:function(){if(this!==document){e.event.remove(document,n+"."+e._data(this,n))}return false}}})})(jQuery,window)
;
(function(e,i){e.widget("ui.progressbar",{version:"1.10.1",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue()
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min})
this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element)
this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow")
this.valueDiv.remove()},value:function(e){if(e===i){return this.options.value}this.options.value=this._constrainedValue(e)
this._refreshValue()},_constrainedValue:function(e){if(e===i){e=this.options.value}this.indeterminate=e===false
if(typeof e!=="number"){e=0}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var i=e.value
delete e.value
this._super(e)
this.options.value=this._constrainedValue(i)
this._refreshValue()},_setOption:function(e,i){if(e==="max"){i=Math.max(this.min,i)}this._super(e,i)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var i=this.options.value,t=this._percentage()
this.valueDiv.toggle(this.indeterminate||i>this.min).toggleClass("ui-corner-right",i===this.options.max).width(t.toFixed(0)+"%")
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate)
if(this.indeterminate){this.element.removeAttr("aria-valuenow")
if(!this.overlayDiv){this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":i})
if(this.overlayDiv){this.overlayDiv.remove()
this.overlayDiv=null}}if(this.oldValue!==i){this.oldValue=i
this._trigger("change")}if(i===this.options.max){this._trigger("complete")}}})})(jQuery)
;
(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else{t(jQuery)}})(function(t){t.timeago=function(e){if(e instanceof Date){return n(e)}else if(typeof e==="string"){return n(t.timeago.parse(e))}else if(typeof e==="number"){return n(new Date(e))}else{return n(t.timeago.datetime(e))}}
var e=t.timeago
t.extend(t.timeago,{settings:{refreshMillis:6e4,allowFuture:false,localeTitle:false,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){var r=this.settings.strings
var a=r.prefixAgo
var i=r.suffixAgo
if(this.settings.allowFuture){if(e<0){a=r.prefixFromNow
i=r.suffixFromNow}}var n=Math.abs(e)/1e3
var o=n/60
var s=o/60
var u=s/24
var m=u/365
function f(a,i){var n=t.isFunction(a)?a(i,e):a
var o=r.numbers&&r.numbers[i]||i
return n.replace(/%d/i,o)}var d=n<45&&f(r.seconds,Math.round(n))||n<90&&f(r.minute,1)||o<45&&f(r.minutes,Math.round(o))||o<90&&f(r.hour,1)||s<24&&f(r.hours,Math.round(s))||s<42&&f(r.day,1)||u<30&&f(r.days,Math.round(u))||u<45&&f(r.month,1)||u<365&&f(r.months,Math.round(u/30))||m<1.5&&f(r.year,1)||f(r.years,Math.round(m))
var l=r.wordSeparator||""
if(r.wordSeparator===undefined){l=" "}return t.trim([a,d,i].join(l))},parse:function(e){var r=t.trim(e)
r=r.replace(/\.\d+/,"")
r=r.replace(/-/,"/").replace(/-/,"/")
r=r.replace(/T/," ").replace(/Z/," UTC")
r=r.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")
return new Date(r)},datetime:function(r){var a=e.isTime(r)?t(r).attr("datetime"):t(r).attr("title")
return e.parse(a)},isTime:function(e){return t(e).get(0).tagName.toLowerCase()==="time"}})
var r={init:function(){var r=t.proxy(a,this)
r()
var i=e.settings
if(i.refreshMillis>0){setInterval(r,i.refreshMillis)}},update:function(r){t(this).data("timeago",{datetime:e.parse(r)})
a.apply(this)}}
t.fn.timeago=function(t,e){var a=t?r[t]:r.init
if(!a){throw new Error("Unknown function name '"+t+"' for timeago")}this.each(function(){a.call(this,e)})
return this}
function a(){var e=i(this)
if(!isNaN(e.datetime)){t(this).text(n(e.datetime))}return this}function i(r){r=t(r)
if(!r.data("timeago")){r.data("timeago",{datetime:e.datetime(r)})
var a=t.trim(r.text())
if(e.settings.localeTitle){r.attr("title",r.data("timeago").datetime.toLocaleString())}else if(a.length>0&&!(e.isTime(r)&&r.attr("title"))){r.attr("title",a)}}return r.data("timeago")}function n(t){return e.inWords(o(t))}function o(t){return(new Date).getTime()-t.getTime()}document.createElement("abbr")
document.createElement("time")})
;
jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}
;
new function(t){var a=!!("placeholder"in document.createElement("input"))
t.fn.placeholder=function(i){if(a){return this}i=i||{}
var e=i.dataKey||"placeholderValue"
var r=i.attr||"placeholder"
var n=i.className||"placeholder"
var s=i.values||[]
var l=i.blockSubmit||false
var o=i.blankSubmit||false
var u=i.onSubmit||false
var f=i.value||""
var c=i.cursor_position||0
return this.filter(":input").each(function(a){t.data(this,e,s[a]||t(this).attr(r))}).each(function(){if(t.trim(t(this).val())==="")t(this).addClass(n).val(t.data(this,e))}).focus(function(){if(t.trim(t(this).val())===t.data(this,e))t(this).removeClass(n).val(f)
if(t.fn.setCursorPosition){t(this).setCursorPosition(c)}}).blur(function(){if(t.trim(t(this).val())===f)t(this).addClass(n).val(t.data(this,e))}).each(function(a,i){if(l)new function(a){t(a.form).submit(function(){return t.trim(t(a).val())!=t.data(a,e)})}(i)
else if(o)new function(a){t(a.form).submit(function(){if(t.trim(t(a).val())==t.data(a,e))t(a).removeClass(n).val("")
return true})}(i)
else if(u)new function(a){t(a.form).submit(u)}(i)})}}(jQuery)
;
(function(e,t,i){(function(e){"use strict"
if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(jQuery&&!jQuery.fn.qtip){e(jQuery)}})(function(o){var n=true,r=false,s=null,a="x",l="y",f="width",c="height",d="top",u="left",h="bottom",p="right",g="center",m="flip",v="flipinvert",y="shift",b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",w,x,q,j="qtip",T="data-hasqtip",C={},z=["ui-widget","ui-tooltip"],k="div.qtip."+j,A=j+"-default",I=j+"-focus",M=j+"-hover",L="_replacedByqTip",E="oldtitle",O
function S(i){q={pageX:i.pageX,pageY:i.pageY,type:"mousemove",scrollX:e.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:e.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}}function W(e){var t=function(e){return e===s||"object"!==typeof e},i=function(e){return!o.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"===typeof e&&!e.jquery&&!e.then)}
if(!e||"object"!==typeof e){return r}if(t(e.metadata)){e.metadata={type:e.metadata}}if("content"in e){if(t(e.content)||e.content.jquery){e.content={text:e.content}}if(i(e.content.text||r)){e.content.text=r}if("title"in e.content){if(t(e.content.title)){e.content.title={text:e.content.title}}if(i(e.content.title.text||r)){e.content.title.text=r}}}if("position"in e&&t(e.position)){e.position={my:e.position,at:e.position}}if("show"in e&&t(e.show)){e.show=e.show.jquery?{target:e.show}:e.show===n?{ready:n}:{event:e.show}}if("hide"in e&&t(e.hide)){e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}}if("style"in e&&t(e.style)){e.style={classes:e.style}}o.each(x,function(){if(this.sanitize){this.sanitize(e)}})
return e}function F(i,a,l,f){var c=this,m=t.body,v=j+"-"+l,y=0,L=0,F=o(),X=".qtip-"+l,$="qtip-disabled",D,P
c.id=l
c.rendered=r
c.destroyed=r
c.elements=D={target:i}
c.timers={img:{}}
c.options=a
c.checks={}
c.plugins={}
c.cache=P={event:{},target:o(),disabled:r,attr:f,onTarget:r,lastClass:""}
function N(e){var t=0,i,o=a,n=e.split(".")
while(o=o[n[t++]]){if(t<n.length){i=o}}return[i||a,n.pop()]}function B(e){return z.concat("").join(e?"-"+e+" ":" ")}function _(){var e=a.style.widget,t=F.hasClass($)
F.removeClass($)
$=e?"ui-state-disabled":"qtip-disabled"
F.toggleClass($,t)
F.toggleClass("ui-helper-reset "+B(),e).toggleClass(A,a.style.def&&!e)
if(D.content){D.content.toggleClass(B("content"),e)}if(D.titlebar){D.titlebar.toggleClass(B("header"),e)}if(D.button){D.button.toggleClass(j+"-icon",!e)}}function Y(e){if(D.title){D.titlebar.remove()
D.titlebar=D.title=D.button=s
if(e!==r){c.reposition()}}}function H(){var e=a.content.title.button,t=typeof e==="string",i=t?e:"Close tooltip"
if(D.button){D.button.remove()}if(e.jquery){D.button=e}else{D.button=o("<a />",{"class":"qtip-close "+(a.style.widget?"":j+"-icon"),title:i,"aria-label":i}).prepend(o("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}))}D.button.appendTo(D.titlebar||F).attr("role","button").click(function(e){if(!F.hasClass($)){c.hide(e)}return r})}function G(){var e=v+"-title"
if(D.titlebar){Y()}D.titlebar=o("<div />",{"class":j+"-titlebar "+(a.style.widget?B("header"):"")}).append(D.title=o("<div />",{id:e,"class":j+"-title","aria-atomic":n})).insertBefore(D.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(e){o(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(e){o(this).toggleClass("ui-state-hover",e.type==="mouseover")})
if(a.content.title.button){H()}}function Q(e){var t=D.button
if(!c.rendered){return r}if(!e){t.remove()}else{H()}}function V(e,t){var n=D.title
if(!c.rendered||!e){return r}if(o.isFunction(e)){e=e.call(i,P.event,c)}if(e===r||!e&&e!==""){return Y(r)}else if(e.jquery&&e.length>0){n.empty().append(e.css({display:"block"}))}else{n.html(e)}if(t!==r&&c.rendered&&F[0].offsetWidth>0){c.reposition(P.event)}}function R(e){if(e&&o.isFunction(e.done)){e.done(function(e){U(e,null,r)})}}function U(e,t,n){var s=D.content
if(!c.rendered||!e){return r}if(o.isFunction(e)){e=e.call(i,P.event,c)||""}if(n!==r){R(a.content.deferred)}if(e.jquery&&e.length>0){s.empty().append(e.css({display:"block"}))}else{s.html(e)}function l(e){var t=o(this),i=t.find("img").add(t.filter("img")),n=[]
function r(t){if(t.src===b||o.inArray(t,n)!==-1){return}n.push(t)
o.data(t,"imagesLoaded",{src:t.src})
if(i.length===n.length){setTimeout(e)
i.unbind(".imagesLoaded")}}if(!i.length){return e()}i.bind("load.imagesLoaded error.imagesLoaded",function(e){r(e.target)}).each(function(e,t){var i=t.src,n=o.data(t,"imagesLoaded")
if(n&&n.src===i||t.complete&&t.naturalWidth){r(t)}else if(t.readyState||t.complete){t.src=b
t.src=i}})}if(c.rendered<0){F.queue("fx",l)}else{L=0
l.call(F[0],o.noop)}return c}function J(){var s=a.position,f={show:a.show.target,hide:a.hide.target,viewport:o(s.viewport),document:o(t),body:o(t.body),window:o(e)},d={show:o.trim(""+a.show.event).split(" "),hide:o.trim(""+a.hide.event).split(" ")},u=x.ie===6
function h(e){if(F.hasClass($)){return r}clearTimeout(c.timers.show)
clearTimeout(c.timers.hide)
var t=function(){c.toggle(n,e)}
if(a.show.delay>0){c.timers.show=setTimeout(t,a.show.delay)}else{t()}}function p(e){if(F.hasClass($)||y||L){return r}var t=o(e.relatedTarget),i=t.closest(k)[0]===F[0],n=t[0]===f.show[0]
clearTimeout(c.timers.show)
clearTimeout(c.timers.hide)
if(this!==t[0]&&(s.target==="mouse"&&i)||a.hide.fixed&&(/mouse(out|leave|move)/.test(e.type)&&(i||n))){try{e.preventDefault()
e.stopImmediatePropagation()}catch(l){}return}if(a.hide.delay>0){c.timers.hide=setTimeout(function(){c.hide(e)},a.hide.delay)}else{c.hide(e)}}function g(e){if(F.hasClass($)){return r}clearTimeout(c.timers.inactive)
c.timers.inactive=setTimeout(function(){c.hide(e)},a.hide.inactive)}function m(e){if(c.rendered&&F[0].offsetWidth>0){c.reposition(e)}}F.bind("mouseenter"+X+" mouseleave"+X,function(e){var t=e.type==="mouseenter"
if(t){c.focus(e)}F.toggleClass(M,t)})
if(/mouse(out|leave)/i.test(a.hide.event)){if(a.hide.leave==="window"){f.document.bind("mouseout"+X+" blur"+X,function(e){if(!/select|option/.test(e.target.nodeName)&&!e.relatedTarget){c.hide(e)}})}}if(a.hide.fixed){f.hide=f.hide.add(F)
F.bind("mouseover"+X,function(){if(!F.hasClass($)){clearTimeout(c.timers.hide)}})}else if(/mouse(over|enter)/i.test(a.show.event)){f.hide.bind("mouseleave"+X,function(e){clearTimeout(c.timers.show)})}if((""+a.hide.event).indexOf("unfocus")>-1){s.container.closest("html").bind("mousedown"+X+" touchstart"+X,function(e){var t=o(e.target),n=c.rendered&&!F.hasClass($)&&F[0].offsetWidth>0,r=t.parents(k).filter(F[0]).length>0
if(t[0]!==i[0]&&t[0]!==F[0]&&!r&&!i.has(t[0]).length&&n){c.hide(e)}})}if("number"===typeof a.hide.inactive){f.show.bind("qtip-"+l+"-inactive",g)
o.each(w.inactiveEvents,function(e,t){f.hide.add(D.tooltip).bind(t+X+"-inactive",g)})}o.each(d.hide,function(e,t){var i=o.inArray(t,d.show),n=o(f.hide)
if(i>-1&&n.add(f.show).length===n.length||t==="unfocus"){f.show.bind(t+X,function(e){if(F[0].offsetWidth>0){p(e)}else{h(e)}})
delete d.show[i]}else{f.hide.bind(t+X,p)}})
o.each(d.show,function(e,t){f.show.bind(t+X,h)})
if("number"===typeof a.hide.distance){f.show.add(F).bind("mousemove"+X,function(e){var t=P.origin||{},i=a.hide.distance,o=Math.abs
if(o(e.pageX-t.pageX)>=i||o(e.pageY-t.pageY)>=i){c.hide(e)}})}if(s.target==="mouse"){f.show.bind("mousemove"+X,S)
if(s.adjust.mouse){if(a.hide.event){F.bind("mouseleave"+X,function(e){if((e.relatedTarget||e.target)!==f.show[0]){c.hide(e)}})
D.target.bind("mouseenter"+X+" mouseleave"+X,function(e){P.onTarget=e.type==="mouseenter"})}f.document.bind("mousemove"+X,function(e){if(c.rendered&&P.onTarget&&!F.hasClass($)&&F[0].offsetWidth>0){c.reposition(e||q)}})}}if(s.adjust.resize||f.viewport.length){(o.event.special.resize?f.viewport:f.window).bind("resize"+X,m)}if(s.adjust.scroll){f.window.add(s.container).bind("scroll"+X,m)}}function K(){var i=[a.show.target[0],a.hide.target[0],c.rendered&&D.tooltip[0],a.position.container[0],a.position.viewport[0],a.position.container.closest("html")[0],e,t]
if(c.rendered){o([]).pushStack(o.grep(i,function(e){return typeof e==="object"})).unbind(X)}else{a.show.target.unbind(X+"-create")}}c.checks.builtin={"^id$":function(e,t,i){var s=i===n?w.nextid:i,a=j+"-"+s
if(s!==r&&s.length>0&&!o("#"+a).length){F[0].id=a
D.content[0].id=a+"-content"
D.title[0].id=a+"-title"}},"^content.text$":function(e,t,i){U(a.content.text)},"^content.deferred$":function(e,t,i){R(a.content.deferred)},"^content.title.text$":function(e,t,i){if(!i){return Y()}if(!D.title&&i){G()}V(i)},"^content.title.button$":function(e,t,i){Q(i)},"^position.(my|at)$":function(e,t,i){if("string"===typeof i){e[t]=new x.Corner(i)}},"^position.container$":function(e,t,i){if(c.rendered){F.appendTo(i)}},"^show.ready$":function(){if(!c.rendered){c.render(1)}else{c.toggle(n)}},"^style.classes$":function(e,t,i){F.attr("class",j+" qtip "+i)},"^style.width|height":function(e,t,i){F.css(t,i)},"^style.widget|content.title":_,"^events.(render|show|move|hide|focus|blur)$":function(e,t,i){F[(o.isFunction(i)?"":"un")+"bind"]("tooltip"+t,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=a.position
F.attr("tracking",e.target==="mouse"&&e.adjust.mouse)
K()
J()}}
o.extend(c,{_triggerEvent:function(e,t,i){var n=o.Event("tooltip"+e)
n.originalEvent=(i?o.extend({},i):s)||P.event||s
F.trigger(n,[c].concat(t||[]))
return!n.isDefaultPrevented()},render:function(e){if(c.rendered){return c}var t=a.content.text,s=a.content.title,l=a.position
o.attr(i[0],"aria-describedby",v)
F=D.tooltip=o("<div/>",{id:v,"class":[j,A,a.style.classes,j+"-pos-"+a.position.my.abbrev()].join(" "),width:a.style.width||"",height:a.style.height||"",tracking:l.target==="mouse"&&l.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":r,"aria-describedby":v+"-content","aria-hidden":n}).toggleClass($,P.disabled).data("qtip",c).appendTo(a.position.container).append(D.content=o("<div />",{"class":j+"-content",id:v+"-content","aria-atomic":n}))
c.rendered=-1
y=1
if(s.text){G()
if(!o.isFunction(s.text)){V(s.text,r)}}else if(s.button){H()}if(!o.isFunction(t)||t.then){U(t,r)}c.rendered=n
_()
o.each(a.events,function(e,t){if(o.isFunction(t)){F.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}})
o.each(x,function(){if(this.initialize==="render"){this(c)}})
J()
F.queue("fx",function(t){c._triggerEvent("render")
y=0
if(a.show.ready||e){c.toggle(n,P.event,r)}t()})
return c},get:function(e){var t,i
switch(e.toLowerCase()){case"dimensions":t={height:F.outerHeight(r),width:F.outerWidth(r)}
break
case"offset":t=x.offset(F,a.position.container)
break
default:i=N(e.toLowerCase())
t=i[0][i[1]]
t=t.precedance?t.string():t
break}return t},set:function(e,t){var i=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,l=/^content\.(title|attr)|style/i,f=r,d=c.checks,u
function h(e,t){var i,o,n
for(i in d){for(o in d[i]){if(n=new RegExp(o,"i").exec(e)){t.push(n)
d[i][o].apply(c,t)}}}}if("string"===typeof e){u=e
e={}
e[u]=t}else{e=o.extend(n,{},e)}o.each(e,function(t,n){var r=N(t.toLowerCase()),s
s=r[0][r[1]]
r[0][r[1]]="object"===typeof n&&n.nodeType?o(n):n
e[t]=[r[0],r[1],n,s]
f=i.test(t)||f})
W(a)
y=1
o.each(e,h)
y=0
if(c.rendered&&F[0].offsetWidth>0&&f){c.reposition(a.position.target==="mouse"?s:P.event)}return c},toggle:function(e,i){if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(P.event.type)&&a.show.target.add(i.target).length===a.show.target.length&&F.has(i.relatedTarget).length){return c}P.event=o.extend({},i)}if(!c.rendered){return e?c.render(1):c}var s=e?"show":"hide",f=a[s],d=a[!e?"show":"hide"],u=a.position,h=a.content,p=F.css("width"),g=F[0].offsetWidth>0,m=e||f.target.length===1,v=!i||f.target.length<2||P.target[0]===i.target,y,b
if((typeof e).search("boolean|number")){e=!g}if(!F.is(":animated")&&g===e&&v){return c}if(!c._triggerEvent(s,[90])){return c}o.attr(F[0],"aria-hidden",!!!e)
if(e){P.origin=o.extend({},q)
c.focus(i)
if(o.isFunction(h.text)){U(h.text,r)}if(o.isFunction(h.title.text)){V(h.title.text,r)}if(!O&&u.target==="mouse"&&u.adjust.mouse){o(t).bind("mousemove.qtip",S)
O=n}if(!p){F.css("width",F.outerWidth())}c.reposition(i,arguments[2])
if(!p){F.css("width","")}if(!!f.solo){(typeof f.solo==="string"?o(f.solo):o(k,f.solo)).not(F).not(f.target).qtip("hide",o.Event("tooltipsolo"))}}else{clearTimeout(c.timers.show)
delete P.origin
if(O&&!o(k+'[tracking="true"]:visible',f.solo).not(F).length){o(t).unbind("mousemove.qtip")
O=r}c.blur(i)}function w(){if(e){if(x.ie){F[0].style.removeAttribute("filter")}F.css("overflow","")
if("string"===typeof f.autofocus){o(f.autofocus,F).focus()}f.target.trigger("qtip-"+l+"-inactive")}else{F.css({display:"",visibility:"",opacity:"",left:"",top:""})}c._triggerEvent(e?"visible":"hidden")}if(f.effect===r||m===r){F[s]()
w.call(F)}else if(o.isFunction(f.effect)){F.stop(1,1)
f.effect.call(F,c)
F.queue("fx",function(e){w()
e()})}else{F.fadeTo(90,e?1:0,w)}if(e){f.target.trigger("qtip-"+l+"-inactive")}return c},show:function(e){return c.toggle(n,e)},hide:function(e){return c.toggle(r,e)},focus:function(e){if(!c.rendered){return c}var t=o(k),i=parseInt(F[0].style.zIndex,10),n=w.zindex+t.length,r=o.extend({},e),s
if(!F.hasClass(I)){if(c._triggerEvent("focus",[n],r)){if(i!==n){t.each(function(){if(this.style.zIndex>i){this.style.zIndex=this.style.zIndex-1}})
t.filter("."+I).qtip("blur",r)}F.addClass(I)[0].style.zIndex=n}}return c},blur:function(e){F.removeClass(I)
c._triggerEvent("blur",[F.css("zIndex")],e)
return c},reposition:function(i,n){if(!c.rendered||y){return c}y=1
var s=a.position.target,l=a.position,f=l.my,m=l.at,v=l.adjust,b=v.method.split(" "),w=F.outerWidth(r),j=F.outerHeight(r),T=0,C=0,z=F.css("position"),k=l.viewport,A={left:0,top:0},I=l.container,M=F[0].offsetWidth>0,L=i&&i.type==="scroll",E=o(e),O,S
if(o.isArray(s)&&s.length===2){m={x:u,y:d}
A={left:s[0],top:s[1]}}else if(s==="mouse"&&(i&&i.pageX||P.event.pageX)){m={x:u,y:d}
i=q&&q.pageX&&(v.mouse||!i||!i.pageX)?{pageX:q.pageX,pageY:q.pageY}:(i&&(i.type==="resize"||i.type==="scroll")?P.event:i&&i.pageX&&i.type==="mousemove"?i:(!v.mouse||a.show.distance)&&P.origin&&P.origin.pageX?P.origin:i)||i||P.event||q||{}
if(z!=="static"){A=I.offset()}A={left:i.pageX-A.left,top:i.pageY-A.top}
if(v.mouse&&L){A.left-=q.scrollX-E.scrollLeft()
A.top-=q.scrollY-E.scrollTop()}}else{if(s==="event"&&i&&i.target&&i.type!=="scroll"&&i.type!=="resize"){P.target=o(i.target)}else if(s!=="event"){P.target=o(s.jquery?s:D.target)}s=P.target
s=o(s).eq(0)
if(s.length===0){return c}else if(s[0]===t||s[0]===e){T=x.iOS?e.innerWidth:s.width()
C=x.iOS?e.innerHeight:s.height()
if(s[0]===e){A={top:(k||s).scrollTop(),left:(k||s).scrollLeft()}}}else if(x.imagemap&&s.is("area")){O=x.imagemap(c,s,m,x.viewport?b:r)}else if(x.svg&&s[0].ownerSVGElement){O=x.svg(c,s,m,x.viewport?b:r)}else{T=s.outerWidth(r)
C=s.outerHeight(r)
A=s.offset()}if(O){T=O.width
C=O.height
S=O.offset
A=O.position}A=x.offset(s,A,I)
if(x.iOS>3.1&&x.iOS<4.1||x.iOS>=4.3&&x.iOS<4.33||!x.iOS&&z==="fixed"){A.left-=E.scrollLeft()
A.top-=E.scrollTop()}A.left+=m.x===p?T:m.x===g?T/2:0
A.top+=m.y===h?C:m.y===g?C/2:0}A.left+=v.x+(f.x===p?-w:f.x===g?-w/2:0)
A.top+=v.y+(f.y===h?-j:f.y===g?-j/2:0)
if(x.viewport){A.adjusted=x.viewport(c,A,l,T,C,w,j)
if(S&&A.adjusted.left){A.left+=S.left}if(S&&A.adjusted.top){A.top+=S.top}}else{A.adjusted={left:0,top:0}}if(!c._triggerEvent("move",[A,k.elem||k],i)){return c}delete A.adjusted
if(n===r||!M||isNaN(A.left)||isNaN(A.top)||s==="mouse"||!o.isFunction(l.effect)){F.css(A)}else if(o.isFunction(l.effect)){l.effect.call(F,c,o.extend({},A))
F.queue(function(e){o(this).css({opacity:"",height:""})
if(x.ie){this.style.removeAttribute("filter")}e()})}y=0
return c},disable:function(e){if("boolean"!==typeof e){e=!(F.hasClass($)||P.disabled)}if(c.rendered){F.toggleClass($,e)
o.attr(F[0],"aria-disabled",e)}else{P.disabled=!!e}return c},enable:function(){return c.disable(r)},destroy:function(e){if(c.destroyed){return}c.destroyed=n
function t(){var e=i[0],t=o.attr(e,E),n=i.data("qtip")
if(c.rendered){o.each(c.plugins,function(e){if(this.destroy){this.destroy()}delete c.plugins[e]})
F.stop(1,0).find("*").remove().end().remove()
c.rendered=r}clearTimeout(c.timers.show)
clearTimeout(c.timers.hide)
K()
if(!n||c===n){i.removeData("qtip").removeAttr(T)
if(a.suppress&&t){i.attr("title",t)
i.removeAttr(E)}i.removeAttr("aria-describedby")}i.unbind(".qtip-"+l)
delete C[c.id]
delete c.options
delete c.elements
delete c.cache
delete c.timers
delete c.checks}if(e===n){t()}else{F.bind("tooltiphidden",t)
c.hide()}return i}})}function X(e,i,a){var l,f,c,d,u,h=o(t.body),p=e[0]===t?h:e,g=e.metadata?e.metadata(a.metadata):s,m=a.metadata.type==="html5"&&g?g[a.metadata.name]:s,v=e.data(a.metadata.name||"qtipopts")
try{v=typeof v==="string"?o.parseJSON(v):v}catch(y){}d=o.extend(n,{},w.defaults,a,typeof v==="object"?W(v):s,W(m||g))
f=d.position
d.id=i
if("boolean"===typeof d.content.text){c=e.attr(d.content.attr)
if(d.content.attr!==r&&c){d.content.text=c}else{return r}}if(!f.container.length){f.container=h}if(f.target===r){f.target=p}if(d.show.target===r){d.show.target=p}if(d.show.solo===n){d.show.solo=f.container.closest("body")}if(d.hide.target===r){d.hide.target=p}if(d.position.viewport===n){d.position.viewport=f.container}f.container=f.container.eq(0)
f.at=new x.Corner(f.at)
f.my=new x.Corner(f.my)
if(e.data("qtip")){if(d.overwrite){e.qtip("destroy")}else if(d.overwrite===r){return r}}e.attr(T,true)
if(d.suppress&&(u=e.attr("title"))){e.removeAttr("title").attr(E,u).attr("title","")}l=new F(e,d,i,!!c)
e.data("qtip",l)
e.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var e
if(e=o(this).data("qtip")){e.destroy()}})
return l}w=o.fn.qtip=function(e,t,a){var l=(""+e).toLowerCase(),f=s,c=o.makeArray(arguments).slice(1),d=c[c.length-1],u=this[0]?o.data(this[0],"qtip"):s
if(!arguments.length&&u||l==="api"){return u}else if("string"===typeof e){this.each(function(){var e=o.data(this,"qtip")
if(!e){return n}if(d&&d.timeStamp){e.cache.event=d}if((l==="option"||l==="options")&&t){if(o.isPlainObject(t)||a!==i){e.set(t,a)}else{f=e.get(t)
return r}}else if(e[l]){e[l].apply(e[l],c)}})
return f!==s?f:this}else if("object"===typeof e||!arguments.length){u=W(o.extend(n,{},e))
return w.bind.call(this,u,d)}}
w.bind=function(e,t){return this.each(function(s){var a,l,f,c,d,u
u=o.isArray(e.id)?e.id[s]:e.id
u=!u||u===r||u.length<1||C[u]?w.nextid++:C[u]=u
c=".qtip-"+u+"-create"
d=X(o(this),u,e)
if(d===r){return n}a=d.options
o.each(x,function(){if(this.initialize==="initialize"){this(d)}})
l={show:a.show.target,hide:a.hide.target}
f={show:o.trim(""+a.show.event).replace(/ /g,c+" ")+c,hide:o.trim(""+a.hide.event).replace(/ /g,c+" ")+c}
if(/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)){f.hide+=" mouseleave"+c}l.show.bind("mousemove"+c,function(e){S(e)
d.cache.onTarget=n})
function h(e){function t(){d.render(typeof e==="object"||a.show.ready)
l.show.add(l.hide).unbind(c)}if(d.cache.disabled){return r}d.cache.event=o.extend({},e)
d.cache.target=e?o(e.target):[i]
if(a.show.delay>0){clearTimeout(d.timers.show)
d.timers.show=setTimeout(t,a.show.delay)
if(f.show!==f.hide){l.hide.bind(f.hide,function(){clearTimeout(d.timers.show)})}}else{t()}}l.show.bind(f.show,h)
if(a.show.ready||a.prerender){h(t)}})}
x=w.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,g).toLowerCase()
this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase()
this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase()
var t=e.charAt(0)
this.precedance=t==="t"||t==="b"?l:a
this.string=function(){return this.precedance===l?this.y+this.x:this.x+this.y}
this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1)
return e===t?e:this.precedance===l?t+e:e+t}
this.invertx=function(e){this.x=this.x===u?p:this.x===p?u:e||this.x}
this.inverty=function(e){this.y=this.y===d?h:this.y===h?d:e||this.y}
this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,i,n){var r=e.closest("body"),s=x.ie&&t.compatMode!=="CSS1Compat",a=n,l,f,c
function d(e,t){i.left+=t*e.scrollLeft()
i.top+=t*e.scrollTop()}if(a){do{if(a.css("position")!=="static"){f=a.position()
i.left-=f.left+(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("marginLeft"),10)||0)
i.top-=f.top+(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)
if(!l&&(c=a.css("overflow"))!=="hidden"&&c!=="visible"){l=a}}}while((a=o(a[0].offsetParent)).length)
if(l&&l[0]!==r[0]||s){d(l||r,1)}}return i},ie:function(){var e=3,i=t.createElement("div")
while(i.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->"){if(!i.getElementsByTagName("i")[0]){break}}return e>4?e:r}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||r,fn:{attr:function(e,t){if(this.length){var i=this[0],n="title",r=o.data(i,"qtip")
if(e===n&&r&&"object"===typeof r&&r.options.suppress){if(arguments.length<2){return o.attr(i,E)}if(r&&r.options.content.attr===n&&r.cache.attr){r.set("content.text",t)}return this.attr(E,t)}}return o.fn["attr"+L].apply(this,arguments)},clone:function(e){var t=o([]),i="title",n=o.fn["clone"+L].apply(this,arguments)
if(!e){n.filter("["+E+"]").attr("title",function(){return o.attr(this,E)}).removeAttr(E)}return n}}}
o.each(x.fn,function(e,t){if(!t||o.fn[e+L]){return n}var i=o.fn[e+L]=o.fn[e]
o.fn[e]=function(){return t.apply(this,arguments)||i.apply(this,arguments)}})
if(!o.ui){o["cleanData"+L]=o.cleanData
o.cleanData=function(e){for(var t=0,n;(n=e[t])!==i&&n.getAttribute(T);t++){try{o(n).triggerHandler("removeqtip")}catch(r){}}o["cleanData"+L](e)}}w.version="2.0.1-31-"
w.nextid=0
w.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" ")
w.zindex=15e3
w.defaults={prerender:r,id:r,overwrite:n,suppress:n,content:{text:n,attr:"title",deferred:r,title:{text:r,button:r}},position:{my:"top left",at:"bottom right",target:r,container:r,viewport:r,adjust:{x:0,y:0,mouse:n,scroll:n,resize:n,method:"flipinvert flipinvert"},effect:function(e,t,i){o(this).animate(t,{duration:200,queue:r})}},show:{target:r,event:"mouseenter",effect:n,delay:90,solo:r,ready:r,autofocus:r},hide:{target:r,event:"mouseleave",effect:n,delay:0,fixed:r,inactive:r,leave:"window",distance:r},style:{classes:"",widget:r,width:r,height:r,def:n},events:{render:s,move:s,show:s,hide:s,toggle:s,visible:s,hidden:s,focus:s,blur:s}}
x.svg=function(e,i,n,r){var s=o(t),a=i[0],l={width:0,height:0,position:{top:1e10,left:1e10}},f,c,d,u,h
while(!a.getBBox){a=a.parentNode}if(a.getBBox&&a.parentNode){f=a.getBBox()
c=a.getScreenCTM()
d=a.farthestViewportElement||a
if(!d.createSVGPoint){return l}u=d.createSVGPoint()
u.x=f.x
u.y=f.y
h=u.matrixTransform(c)
l.position.left=h.x
l.position.top=h.y
u.x+=f.width
u.y+=f.height
h=u.matrixTransform(c)
l.width=h.x-l.position.left
l.height=h.y-l.position.top
l.position.left+=s.scrollLeft()
l.position.top+=s.scrollTop()}return l}
var $,D=".qtip-ajax",P=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
function N(e){var t=this,i=e.elements.tooltip,s=e.options.content.ajax,a=w.defaults.content.ajax,l=n,f=r,c
e.checks.ajax={"^content.ajax":function(e,o,n){if(o==="ajax"){s=n}if(o==="once"){t.init()}else if(s&&s.url){t.load()}else{i.unbind(D)}}}
o.extend(t,{init:function(){if(s&&s.url){i.unbind(D)[s.once?"one":"bind"]("tooltipshow"+D,t.load)}return t},load:function(i){if(f){f=r
return}var d=s.url.lastIndexOf(" "),u=s.url,h,p=!s.loading&&l
if(p){try{i.preventDefault()}catch(g){}}else if(i&&i.isDefaultPrevented()){return t}if(c&&c.abort){c.abort()}if(d>-1){h=u.substr(d)
u=u.substr(0,d)}function m(){var t
if(e.destroyed){return}l=r
if(p){f=n
e.show(i.originalEvent)}if((t=a.complete||s.complete)&&o.isFunction(t)){t.apply(s.context||e,arguments)}}function v(t,i,n){var r
if(e.destroyed){return}if(h&&"string"===typeof t){t=o("<div/>").append(t.replace(P,"")).find(h)}if((r=a.success||s.success)&&o.isFunction(r)){r.call(s.context||e,t,i,n)}else{e.set("content.text",t)}}function y(t,i,o){if(e.destroyed||t.status===0){return}e.set("content.text",i+": "+o)}c=o.ajax(o.extend({error:a.error||y,context:e},s,{url:u,success:v,complete:m}))},destroy:function(){if(c&&c.abort){c.abort()}e.destroyed=n}})
t.init()}$=x.ajax=function(e){var t=e.plugins.ajax
return"object"===typeof t?t:e.plugins.ajax=new N(e)}
$.initialize="render"
$.sanitize=function(e){var t=e.content,i
if(t&&"ajax"in t){i=t.ajax
if(typeof i!=="object"){i=e.content.ajax={url:i}}if("boolean"!==typeof i.once&&i.once){i.once=!!i.once}}}
o.extend(n,w.defaults,{content:{ajax:{loading:n,once:n}}})
var B,_=".qtip-tip",Y=!!t.createElement("canvas").getContext
function H(e,t,i){var o=Math.ceil(t/2),n=Math.ceil(i/2),r={bottomright:[[0,0],[t,i],[t,0]],bottomleft:[[0,0],[t,0],[0,i]],topright:[[0,i],[t,0],[t,i]],topleft:[[0,0],[0,i],[t,i]],topcenter:[[0,i],[o,0],[t,i]],bottomcenter:[[0,0],[t,0],[o,i]],rightcenter:[[0,0],[t,n],[0,i]],leftcenter:[[t,0],[t,i],[0,n]]}
r.lefttop=r.bottomright
r.righttop=r.bottomleft
r.leftbottom=r.topright
r.rightbottom=r.topleft
return r[e.string()]}function G(e,t){var m=this,v=e.options.style.tip,b=e.elements,w=b.tooltip,q={top:0,left:0},j={width:v.width,height:v.height},T={},C=v.border||0,z
m.corner=s
m.mimic=s
m.border=C
m.offset=v.offset
m.size=j
e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){if(!m.init()){m.destroy()}e.reposition()},"^style.tip.(height|width)$":function(){j={width:v.width,height:v.height}
m.create()
m.update()
e.reposition()},"^content.title.text|style.(classes|widget)$":function(){if(b.tip&&b.tip.length){m.update()}}}
function k(e){var t=w.is(":visible")
w.show()
e()
w.toggle(t)}function A(){j.width=v.height
j.height=v.width}function I(){j.width=v.width
j.height=v.height}function M(t,o,s,f){if(!b.tip){return}var c=m.corner.clone(),w=s.adjusted,x=e.options.position.adjust.method.split(" "),j=x[0],T=x[1]||x[0],C={left:r,top:r,x:0,y:0},z,k={},A
if(m.corner.fixed!==n){if(j===y&&c.precedance===a&&w.left&&c.y!==g){c.precedance=c.precedance===a?l:a}else if(j!==y&&w.left){c.x=c.x===g?w.left>0?u:p:c.x===u?p:u}if(T===y&&c.precedance===l&&w.top&&c.x!==g){c.precedance=c.precedance===l?a:l}else if(T!==y&&w.top){c.y=c.y===g?w.top>0?d:h:c.y===d?h:d}if(c.string()!==q.corner.string()&&(q.top!==w.top||q.left!==w.left)){m.update(c,r)}}z=m.position(c,w)
z[c.x]+=E(c,c.x)
z[c.y]+=E(c,c.y)
if(z.right!==i){z.left=-z.right}if(z.bottom!==i){z.top=-z.bottom}z.user=Math.max(0,v.offset)
if(C.left=j===y&&!!w.left){if(c.x===g){k["margin-left"]=C.x=z["margin-left"]-w.left}else{A=z.right!==i?[w.left,-z.left]:[-w.left,z.left]
if((C.x=Math.max(A[0],A[1]))>A[0]){s.left-=w.left
C.left=r}k[z.right!==i?p:u]=C.x}}if(C.top=T===y&&!!w.top){if(c.y===g){k["margin-top"]=C.y=z["margin-top"]-w.top}else{A=z.bottom!==i?[w.top,-z.top]:[-w.top,z.top]
if((C.y=Math.max(A[0],A[1]))>A[0]){s.top-=w.top
C.top=r}k[z.bottom!==i?h:d]=C.y}}b.tip.css(k).toggle(!(C.x&&C.y||c.x===g&&C.y||c.y===g&&C.x))
s.left-=z.left.charAt?z.user:j!==y||C.top||!C.left&&!C.top?z.left:0
s.top-=z.top.charAt?z.user:T!==y||C.left||!C.left&&!C.top?z.top:0
q.left=w.left
q.top=w.top
q.corner=c.clone()}function L(){var t=v.corner,i=e.options.position,o=i.at,s=i.my.string?i.my.string():i.my
if(t===r||s===r&&o===r){return r}else{if(t===n){m.corner=new x.Corner(s)}else if(!t.string){m.corner=new x.Corner(t)
m.corner.fixed=n}}q.corner=new x.Corner(m.corner.string())
return m.corner.string()!=="centercenter"}function E(e,t,i){t=!t?e[e.precedance]:t
var o=b.titlebar&&e.y===d,n=o?b.titlebar:w,r="border-"+t+"-width",s=function(e){return parseInt(e.css(r),10)},a
k(function(){a=(i?s(i):s(b.content)||s(n)||s(w))||0})
return a}function O(e){var t=b.titlebar&&e.y===d,i=t?b.titlebar:b.content,o="-moz-",n="-webkit-",r="border-radius-"+e.y+e.x,s="border-"+e.y+"-"+e.x+"-radius",a=function(e){return parseInt(i.css(e),10)||parseInt(w.css(e),10)},l
k(function(){l=a(s)||a(r)||a(o+s)||a(o+r)||a(n+s)||a(n+r)||0})
return l}function S(e){var t,i,s,a=b.tip.css("cssText",""),l=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,c="border-"+l[l.precedance]+"-color",u="background-color",h="transparent",p=" !important",y=b.titlebar,x=y&&(l.y===d||l.y===g&&a.position().top+j.height/2+v.offset<y.outerHeight(n)),q=x?y:b.content
function C(e,t,i){var o=e.css(t)||h
if(i&&o===e.css(i)){return r}else{return f.test(o)?r:o}}k(function(){T.fill=C(a,u)||C(q,u)||C(b.content,u)||C(w,u)||a.css(u)
T.border=C(a,c,"color")||C(q,c,"color")||C(b.content,c,"color")||C(w,c,"color")||w.css(c)
o("*",a).add(a).css("cssText",u+":"+h+p+";border:0"+p+";")})}function W(e){var t=e.precedance===l,i=j[t?f:c],o=j[t?c:f],n=e.string().indexOf(g)>-1,r=i*(n?.5:1),s=Math.pow,a=Math.round,d,u,h,p=Math.sqrt(s(r,2)+s(o,2)),m=[C/r*p,C/o*p]
m[2]=Math.sqrt(s(m[0],2)-s(C,2))
m[3]=Math.sqrt(s(m[1],2)-s(C,2))
d=p+m[2]+m[3]+(n?0:m[0])
u=d/p
h=[a(u*o),a(u*i)]
return{height:h[t?0:1],width:h[t?1:0]}}function F(e,t,i){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'}o.extend(m,{init:function(){var e=L()&&(Y||x.ie)
if(e){m.create()
m.update()
w.unbind(_).bind("tooltipmove"+_,M)}return e},create:function(){var e=j.width,t=j.height,i
if(b.tip){b.tip.remove()}b.tip=o("<div />",{"class":"qtip-tip"}).css({width:e,height:t}).prependTo(w)
if(Y){o("<canvas />").appendTo(b.tip)[0].getContext("2d").save()}else{i=F("shape",'coordorigin="0,0"',"position:absolute;")
b.tip.html(i+i)
o("*",b.tip).bind("click"+_+" mousedown"+_,function(e){e.stopPropagation()})}},update:function(e,t){var i=b.tip,f=i.children(),c=j.width,y=j.height,z=v.mimic,k=Math.round,M,L,O,X,$
if(!e){e=q.corner||m.corner}if(z===r){z=e}else{z=new x.Corner(z)
z.precedance=e.precedance
if(z.x==="inherit"){z.x=e.x}else if(z.y==="inherit"){z.y=e.y}else if(z.x===z.y){z[e.precedance]=e[e.precedance]}}M=z.precedance
if(e.precedance===a){A()}else{I()}b.tip.css({width:c=j.width,height:y=j.height})
S(e)
if(T.border!=="transparent"){C=E(e,s)
if(v.border===0&&C>0){T.fill=T.border}m.border=C=v.border!==n?v.border:C}else{m.border=C=0}O=H(z,c,y)
m.size=$=W(e)
i.css($).css("line-height",$.height+"px")
if(e.precedance===l){X=[k(z.x===u?C:z.x===p?$.width-c-C:($.width-c)/2),k(z.y===d?$.height-y:0)]}else{X=[k(z.x===u?$.width-c:0),k(z.y===d?C:z.y===h?$.height-y-C:($.height-y)/2)]}if(Y){f.attr($)
L=f[0].getContext("2d")
L.restore()
L.save()
L.clearRect(0,0,3e3,3e3)
L.fillStyle=T.fill
L.strokeStyle=T.border
L.lineWidth=C*2
L.lineJoin="miter"
L.miterLimit=100
L.translate(X[0],X[1])
L.beginPath()
L.moveTo(O[0][0],O[0][1])
L.lineTo(O[1][0],O[1][1])
L.lineTo(O[2][0],O[2][1])
L.closePath()
if(C){if(w.css("background-clip")==="border-box"){L.strokeStyle=T.fill
L.stroke()}L.strokeStyle=T.border
L.stroke()}L.fill()}else{O="m"+O[0][0]+","+O[0][1]+" l"+O[1][0]+","+O[1][1]+" "+O[2][0]+","+O[2][1]+" xe"
X[2]=C&&/^(r|b)/i.test(e.string())?x.ie===8?2:1:0
f.css({coordsize:c+C+" "+(y+C),antialias:""+(z.string().indexOf(g)>-1),left:X[0],top:X[1],width:c+C,height:y+C}).each(function(e){var t=o(this)
t[t.prop?"prop":"attr"]({coordsize:c+C+" "+(y+C),path:O,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!(C||e))
if(!e&&t.html()===""){t.html(F("stroke",'weight="'+C*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))}})}setTimeout(function(){b.tip.css({display:"inline-block",visibility:"visible"})},1)
if(t!==r){m.position(e)}},position:function(e){var t=b.tip,i={},n=Math.max(0,v.offset),s,h,p
if(v.corner===r||!t){return r}e=e||m.corner
s=e.precedance
h=W(e)
p=[e.x,e.y]
if(s===a){p.reverse()}o.each(p,function(t,o){var r,a,p
if(o===g){r=s===l?u:d
i[r]="50%"
i["margin-"+r]=-Math.round(h[s===l?f:c]/2)+n}else{r=E(e,o)
a=E(e,o,b.content)
p=O(e)
i[o]=t?a:n+(p>r?p:-r)}})
i[e[s]]-=h[s===a?f:c]
t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(i)
return i},destroy:function(){w.unbind(_)
if(b.tip){b.tip.find("*").remove().end().remove()}delete m.corner
delete m.mimic
delete m.size}})
m.init()}B=x.tip=function(e){var t=e.plugins.tip
return"object"===typeof t?t:e.plugins.tip=new G(e)}
B.initialize="render"
B.sanitize=function(e){var t=e.style,i
if(t&&"tip"in t){i=e.style.tip
if(typeof i!=="object"){e.style.tip={corner:i}}if(!/string|boolean/i.test(typeof i.corner)){i.corner=n}if(typeof i.width!=="number"){delete i.width}if(typeof i.height!=="number"){delete i.height}if(typeof i.border!=="number"&&i.border!==n){delete i.border}if(typeof i.offset!=="number"){delete i.offset}}}
o.extend(n,w.defaults,{style:{tip:{corner:n,mimic:r,width:6,height:6,border:n,offset:0}}})
var Q,V,R="is-modal-qtip",U=k+"["+R+"]",J=".qtipmodal"
V=function(){var i=this,a={},l,f,c,d
function u(e){if(o.expr[":"].focusable){return o.expr[":"].focusable}var t=!isNaN(o.attr(e,"tabindex")),i=e.nodeName.toLowerCase(),n,r,s
if("area"===i){n=e.parentNode
r=n.name
if(!e.href||!r||n.nodeName.toLowerCase()!=="map"){return false}s=o("img[usemap=#"+r+"]")[0]
return!!s&&s.is(":visible")}return/input|select|textarea|button|object/.test(i)?!e.disabled:"a"===i?e.href||t:t}function h(e){if(a.length<1&&e.length){e.not("body").blur()}else{a.first().focus()}}function p(e){if(!d.is(":visible")){return}var t=o(e.target),i=l.elements.tooltip,n=t.closest(k),s
s=n.length<1?r:parseInt(n[0].style.zIndex,10)>parseInt(i[0].style.zIndex,10)
if(!s&&t.closest(k)[0]!==i[0]){h(t)}f=e.target===a[a.length-1]}o.extend(i,{init:function(){d=i.elem=o("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return r}}).hide()
function n(){var e=o(this)
d.css({height:e.height(),width:e.width()})}o(e).bind("resize"+J,n)
n()
o(t.body).bind("focusin"+J,p)
o(t).bind("keydown"+J,function(e){if(l&&l.options.show.modal.escape&&e.keyCode===27){l.hide(e)}})
d.bind("click"+J,function(e){if(l&&l.options.show.modal.blur){l.hide(e)}})
return i},update:function(e){l=e
if(e.options.show.modal.stealfocus!==r){a=e.elements.tooltip.find("*").filter(function(){return u(this)})}else{a=[]}},toggle:function(e,a,f){var u=o(t.body),p=e.elements.tooltip,g=e.options.show.modal,m=g.effect,v=a?"show":"hide",y=d.is(":visible"),b=o(U).filter(":visible:not(:animated)").not(p),w
i.update(e)
if(a&&g.stealfocus!==r){h(o(":focus"))}d.toggleClass("blurs",g.blur)
if(a){d.css({left:0,top:0}).appendTo(t.body)}if(d.is(":animated")&&y===a&&c!==r||!a&&b.length){return i}d.stop(n,r)
if(o.isFunction(m)){m.call(d,a)}else if(m===r){d[v]()}else{d.fadeTo(parseInt(f,10)||90,a?1:0,function(){if(!a){d.hide()}})}if(!a){d.queue(function(e){d.css({left:"",top:""})
if(!b.length){d.detach()}e()})}c=a
if(l.destroyed){l=s}return i}})
i.init()}
V=new V
function K(e){var i=this,s=e.options.show.modal,a=e.elements,l=a.tooltip,f=J+e.id,c
e.checks.modal={"^show.modal.(on|blur)$":function(){i.destroy()
i.init()
c.toggle(l.is(":visible"))}}
o.extend(i,{init:function(){if(!s.on){return i}c=a.overlay=V.elem
l.attr(R,n).css("z-index",x.modal.zindex+o(U).length).bind("tooltipshow"+f+" tooltiphide"+f,function(e,t,n){var r=e.originalEvent
if(e.target===l[0]){if(r&&e.type==="tooltiphide"&&/mouse(leave|enter)/.test(r.type)&&o(r.relatedTarget).closest(c[0]).length){try{e.preventDefault()}catch(s){}}else if(!r||r&&!r.solo){i.toggle(e,e.type==="tooltipshow",n)}}}).bind("tooltipfocus"+f,function(e,t){if(e.isDefaultPrevented()||e.target!==l[0]){return}var i=o(U),n=x.modal.zindex+i.length,r=parseInt(l[0].style.zIndex,10)
c[0].style.zIndex=n-1
i.each(function(){if(this.style.zIndex>r){this.style.zIndex-=1}})
i.filter("."+I).qtip("blur",e.originalEvent)
l.addClass(I)[0].style.zIndex=n
V.update(t)
try{e.preventDefault()}catch(s){}}).bind("tooltiphide"+f,function(e){if(e.target===l[0]){o(U).filter(":visible").not(l).last().qtip("focus",e)}})
return i},toggle:function(t,o,n){if(t&&t.isDefaultPrevented()){return i}V.toggle(e,!!o,n)
return i},destroy:function(){o([t,l]).removeAttr(R).unbind(f)
V.toggle(e,r)
delete a.overlay}})
i.init()}Q=x.modal=function(e){var t=e.plugins.modal
return"object"===typeof t?t:e.plugins.modal=new K(e)}
Q.sanitize=function(e){if(e.show){if(typeof e.show.modal!=="object"){e.show.modal={on:!!e.show.modal}}else if(typeof e.show.modal.on==="undefined"){e.show.modal.on=n}}}
Q.zindex=w.zindex-200
Q.initialize="render"
o.extend(n,w.defaults,{show:{modal:{on:r,effect:n,blur:n,stealfocus:n,escape:n}}})
x.viewport=function(i,o,n,r,s,m,b){var w=n.target,x=i.elements.tooltip,q=n.my,T=n.at,C=n.adjust,z=C.method.split(" "),k=z[0],A=z[1]||z[0],I=n.viewport,M=n.container,L=i.cache,E=i.plugins.tip,O={left:0,top:0},S,W,F
if(!I.jquery||w[0]===e||w[0]===t.body||C.method==="none"){return O}S=x.css("position")==="fixed"
I={elem:I,height:I[(I[0]===e?"h":"outerH")+"eight"](),width:I[(I[0]===e?"w":"outerW")+"idth"](),scrollleft:S?0:I.scrollLeft(),scrolltop:S?0:I.scrollTop(),offset:I.offset()||{left:0,top:0}}
M={elem:M,scrollLeft:M.scrollLeft(),scrollTop:M.scrollTop(),offset:M.offset()||{left:0,top:0}}
function X(e,t,i,n,r,s,a,l,f){var c=o[r],d=q[e],u=T[e],h=i===y,p=-M.offset[r]+I.offset[r]+I["scroll"+r],m=d===r?f:d===s?-f:-f/2,b=u===r?l:u===s?-l:-l/2,w=E&&E.size?E.size[a]||0:0,x=E&&E.corner&&E.corner.precedance===e&&!h?w:0,j=p-c+x,C=c+f-I[a]-p+x,z=m-(q.precedance===e||d===q[t]?b:0)-(u===g?l/2:0)
if(h){x=E&&E.corner&&E.corner.precedance===t?w:0
z=(d===r?1:-1)*m-x
o[r]+=j>0?j:C>0?-C:0
o[r]=Math.max(-M.offset[r]+I.offset[r]+(x&&E.corner[e]===g?E.offset:0),c-z,Math.min(Math.max(-M.offset[r]+I.offset[r]+I[a],c+z),o[r]))}else{n*=i===v?2:0
if(j>0&&(d!==r||C>0)){o[r]-=z+n
W["invert"+e](r)}else if(C>0&&(d!==s||j>0)){o[r]-=(d===g?-z:z)+n
W["invert"+e](s)}if(o[r]<p&&-o[r]>C){o[r]=c
W=q.clone()}}return o[r]-c}if(k!=="shift"||A!=="shift"){W=q.clone()}O={left:k!=="none"?X(a,l,k,C.x,u,p,f,r,m):0,top:A!=="none"?X(l,a,A,C.y,d,h,c,s,b):0}
if(W&&L.lastClass!==(F=j+"-pos-"+W.abbrev())){x.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=F)}return O}
x.imagemap=function(e,t,i,n){if(!t.jquery){t=o(t)}var r=e.cache.areas={},s=(t[0].shape||t.attr("shape")).toLowerCase(),a=t[0].coords||t.attr("coords"),l=a.split(","),f=[],c=o('img[usemap="#'+t.parent("map").attr("name")+'"]'),m=c.offset(),v={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},y=0,b=0,w
function x(e,t,i){var o=0,n=1,r=1,s=0,a=0,l=e.width,f=e.height
while(l>0&&f>0&&n>0&&r>0){l=Math.floor(l/2)
f=Math.floor(f/2)
if(i.x===u){n=l}else if(i.x===p){n=e.width-l}else{n+=Math.floor(l/2)}if(i.y===d){r=f}else if(i.y===h){r=e.height-f}else{r+=Math.floor(f/2)}o=t.length
while(o--){if(t.length<2){break}s=t[o][0]-e.position.left
a=t[o][1]-e.position.top
if(i.x===u&&s>=n||i.x===p&&s<=n||i.x===g&&(s<n||s>e.width-n)||i.y===d&&a>=r||i.y===h&&a<=r||i.y===g&&(a<r||a>e.height-r)){t.splice(o,1)}}}return{left:t[0][0],top:t[0][1]}}m.left+=Math.ceil((c.outerWidth()-c.width())/2)
m.top+=Math.ceil((c.outerHeight()-c.height())/2)
if(s==="poly"){y=l.length
while(y--){b=[parseInt(l[--y],10),parseInt(l[y+1],10)]
if(b[0]>v.position.right){v.position.right=b[0]}if(b[0]<v.position.left){v.position.left=b[0]}if(b[1]>v.position.bottom){v.position.bottom=b[1]}if(b[1]<v.position.top){v.position.top=b[1]}f.push(b)}}else{y=-1
while(y++<l.length){f.push(parseInt(l[y],10))}}switch(s){case"rect":v={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),position:{left:Math.min(f[0],f[2]),top:Math.min(f[1],f[3])}}
break
case"circle":v={width:f[2]+2,height:f[2]+2,position:{left:f[0],top:f[1]}}
break
case"poly":v.width=Math.abs(v.position.right-v.position.left)
v.height=Math.abs(v.position.bottom-v.position.top)
if(i.abbrev()==="c"){v.position={left:v.position.left+v.width/2,top:v.position.top+v.height/2}}else{if(!r[i+a]){v.position=x(v,f.slice(),i)
if(n&&(n[0]==="flip"||n[1]==="flip")){v.offset=x(v,f.slice(),{x:i.x===u?p:i.x===p?u:g,y:i.y===d?h:i.y===h?d:g})
v.offset.left-=v.position.left
v.offset.top-=v.position.top}r[i+a]=v}v=r[i+a]}v.width=v.height=0
break}v.position.left+=m.left
v.position.top+=m.top
return v}
var Z
function et(i){var s=this,a=i.elements,l=i.options,d=a.tooltip,u=".ie6-"+i.id,h=o("select, object").length<1,p=0,g=r,m
i.checks.ie6={"^content|style$":function(e,t,i){redraw()}}
o.extend(s,{init:function(){var i=o(e),r
if(h){a.bgiframe=o('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" '+' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); '+'-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>')
a.bgiframe.appendTo(d)
d.bind("tooltipmove"+u,s.adjustBGIFrame)}m=o("<div/>",{id:"qtip-rcontainer"}).appendTo(t.body)
s.redraw()
if(a.overlay&&!g){r=function(){a.overlay[0].style.top=i.scrollTop()+"px"}
i.bind("scroll.qtip-ie6, resize.qtip-ie6",r)
r()
a.overlay.addClass("qtipmodal-ie6fix")
g=n}},adjustBGIFrame:function(){var e=i.get("dimensions"),t=i.plugins.tip,o=a.tip,n,r
r=parseInt(d.css("border-left-width"),10)||0
r={left:-r,top:-r}
if(t&&o){n=t.corner.precedance==="x"?["width","left"]:["height","top"]
r[n[1]]-=o[n[0]]()}a.bgiframe.css(r).css(e)},redraw:function(){if(i.rendered<1||p){return s}var e=l.style,t=l.position.container,o,n,r,a
p=1
if(e.height){d.css(c,e.height)}if(e.width){d.css(f,e.width)}else{d.css(f,"").appendTo(m)
n=d.width()
if(n%2<1){n+=1}r=d.css("max-width")||""
a=d.css("min-width")||""
o=(r+a).indexOf("%")>-1?t.width()/100:0
r=(r.indexOf("%")>-1?o:1)*parseInt(r,10)||n
a=(a.indexOf("%")>-1?o:1)*parseInt(a,10)||0
n=r+a?Math.min(Math.max(n,a),r):n
d.css(f,Math.round(n)).appendTo(t)}p=0
return s},destroy:function(){if(h){a.bgiframe.remove()}d.unbind(u)}})
s.init()}Z=x.ie6=function(e){var t=e.plugins.ie6
if(x.ie!==6){return r}return"object"===typeof t?t:e.plugins.ie6=new et(e)}
Z.initialize="render"})})(window,document)
;
(function(e){e.fn.menuAim=function(e){this.each(function(){t.call(this,e)})
return this}
function t(t){var n=e(this),i=null,u=[],o=null,r=null,f=e.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:e.noop,exit:e.noop,activate:e.noop,deactivate:e.noop,exitMenu:e.noop},t)
var c=3,l=300
var a=function(e){u.push({x:e.pageX,y:e.pageY})
if(u.length>c){u.shift()}}
var s=function(){if(r){clearTimeout(r)}if(f.exitMenu(this)){if(i){f.deactivate(i)}i=null}}
var v=function(){if(r){clearTimeout(r)}f.enter(this)
y(this)},h=function(){f.exit(this)}
var m=function(){x(this)}
var x=function(e){if(e===i){return}if(i){f.deactivate(i)}f.activate(e)
i=e}
var y=function(e){var t=p()
if(t){r=setTimeout(function(){y(e)},t)}else{x(e)}}
var p=function(){if(!i||!e(i).is(f.submenuSelector)){return 0}var t=n.offset(),r={x:t.left,y:t.top-f.tolerance},c={x:t.left+n.outerWidth(),y:r.y},a={x:t.left,y:t.top+n.outerHeight()+f.tolerance},s={x:t.left+n.outerWidth(),y:a.y},v=u[u.length-1],h=u[0]
if(!v){return 0}if(!h){h=v}if(h.x<t.left||h.x>s.x||h.y<t.top||h.y>s.y){return 0}if(o&&v.x===o.x&&v.y===o.y){return 0}function m(e,t){return(t.y-e.y)/(t.x-e.x)}var x=c,y=s
if(f.submenuDirection==="left"){x=a
y=r}else if(f.submenuDirection==="below"){x=s
y=a}else if(f.submenuDirection==="above"){x=r
y=c}var p=m(v,x),b=m(v,y),d=m(h,x),g=m(h,y)
if(p<d&&b>g){o=v
return l}o=null
return 0}
n.mouseleave(s).find(f.rowSelector).mouseenter(v).mouseleave(h).click(m)
e(document).mousemove(a)}})(jQuery)
;
!function(n){"use strict"
n(function(){n.support.transition=function(){var n=function(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i
for(i in t){if(n.style[i]!==undefined){return t[i]}}}()
return n&&{end:n}}()})}(window.jQuery)
;
!function(t){"use strict"
var e=function(e,i){this.options=i
this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this))
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)}
e.prototype={constructor:e,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var e=this,i=t.Event("show")
this.$element.trigger(i)
if(this.isShown||i.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var i=t.support.transition&&e.$element.hasClass("fade")
if(!e.$element.parent().length){e.$element.appendTo(document.body)}e.$element.show()
if(i){e.$element[0].offsetWidth}e.$element.addClass("in").attr("aria-hidden",false)
e.enforceFocus()
i?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")})},hide:function(e){e&&e.preventDefault()
var i=this
e=t.Event("hide")
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
t(document).off("focusin.modal")
this.$element.removeClass("in").attr("aria-hidden",true)
t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var e=this
t(document).off("focusin.bs.modal").on("focusin.bs.modal",function(t){if(e.$element[0]!==t.target&&!e.$element.has(t.target).length){e.$element.focus()}})},escape:function(){var t=this
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&t.hide()})}else if(!this.isShown){this.$element.off("keyup.dismiss.modal")}},hideWithTransition:function(){var e=this,i=setTimeout(function(){e.$element.off(t.support.transition.end)
e.hideModal()},500)
this.$element.one(t.support.transition.end,function(){clearTimeout(i)
e.hideModal()})},hideModal:function(){var t=this
this.$element.hide()
this.backdrop(function(){t.removeBackdrop()
t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null},backdrop:function(e){var i=this,o=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var n=t.support.transition&&o
this.$backdrop=t('<div class="modal-backdrop '+o+'" />').appendTo(document.body)
this.$backdrop.click(this.options.backdrop=="static"?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this))
if(n)this.$backdrop[0].offsetWidth
this.$backdrop.addClass("in")
if(!e)return
n?this.$backdrop.one(t.support.transition.end,e):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()}else if(e){e()}}}
var i=t.fn.modal
t.fn.modal=function(i){return this.each(function(){var o=t(this),n=o.data("modal"),s=t.extend({},t.fn.modal.defaults,o.data(),typeof i=="object"&&i)
if(!n)o.data("modal",n=new e(this,s))
if(typeof i=="string")n[i]()
else if(s.show)n.show()})}
t.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
t.fn.modal.Constructor=e
t.fn.modal.noConflict=function(){t.fn.modal=i
return this}
t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),o=i.attr("href"),n=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},n.data(),i.data())
e.preventDefault()
n.modal(s).one("hide",function(){i.focus()})})}(window.jQuery)
;
window.Modernizr=function(e,n,t){var o="2.6.2",r={},i=n.documentElement,u="modernizr",f=n.createElement(u),a=f.style,l,s={}.toString,c=" -webkit- -moz- -o- -ms- ".split(" "),d={},p={},y={},v=[],h=v.slice,m,w=function(e,t,o,r){var f,a,l,s,c=n.createElement("div"),d=n.body,p=d||n.createElement("body")
if(parseInt(o,10)){while(o--){l=n.createElement("div")
l.id=r?r[o]:u+(o+1)
c.appendChild(l)}}f=["&#173;",'<style id="s',u,'">',e,"</style>"].join("")
c.id=u;(d?c:p).innerHTML+=f
p.appendChild(c)
if(!d){p.style.background=""
p.style.overflow="hidden"
s=i.style.overflow
i.style.overflow="hidden"
i.appendChild(p)}a=t(c,e)
if(!d){p.parentNode.removeChild(p)
i.style.overflow=s}else{c.parentNode.removeChild(c)}return!!a},b={}.hasOwnProperty,C
if(!E(b,"undefined")&&!E(b.call,"undefined")){C=function(e,n){return b.call(e,n)}}else{C=function(e,n){return n in e&&E(e.constructor.prototype[n],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function L(e){var n=this
if(typeof n!="function"){throw new TypeError}var t=h.call(arguments,1),o=function(){if(this instanceof o){var r=function(){}
r.prototype=n.prototype
var i=new r
var u=n.apply(i,t.concat(h.call(arguments)))
if(Object(u)===u){return u}return i}else{return n.apply(e,t.concat(h.call(arguments)))}}
return o}}function T(e){a.cssText=e}function j(e,n){return T(c.join(e+";")+(n||""))}function E(e,n){return typeof e===n}function g(e,n){return!!~(""+e).indexOf(n)}function x(e,n,o){for(var r in e){var i=n[e[r]]
if(i!==t){if(o===false)return e[r]
if(E(i,"function")){return i.bind(o||n)}return i}}return false}d["touch"]=function(){var t
if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch){t=true}else{w(["@media (",c.join("touch-enabled),("),u,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=e.offsetTop===9})}return t}
for(var z in d){if(C(d,z)){m=z.toLowerCase()
r[m]=d[z]()
v.push((r[m]?"":"no-")+m)}}r.addTest=function(e,n){if(typeof e=="object"){for(var o in e){if(C(e,o)){r.addTest(o,e[o])}}}else{e=e.toLowerCase()
if(r[e]!==t){return r}n=typeof n=="function"?n():n
if(typeof enableClasses!=="undefined"&&enableClasses){i.className+=" "+(n?"":"no-")+e}r[e]=n}return r}
T("")
f=l=null
r._version=o
r._prefixes=c
r.testStyles=w
return r}(this,this.document)
;
!function(t){"use strict"
var o=".dropdown-toggle",n=function(o,n){if(n==="hover"&&!Modernizr.touch){t(o).on("mouseenter",function(){t(this).dropdown("open")}).parent().on("mouseleave",function(){t(this).find(".dropdown-toggle").dropdown("close")}).find(".caret").on("click",function(){t(this).parent().dropdown("toggle")
return false})}else{t(o).on("click.dropdown.data-api",this.toggle)}}
n.prototype={constructor:n,toggle:function(o){var e=t(this),r=e.attr("data-target"),a,i
if(!r){r=e.attr("href")
r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}a=t(r)
a.length||(a=e.parent())
i=a.hasClass("open")
if(i){n.prototype.close.call(this)}else{n.prototype.open.call(this)}return false},open:function(){var o=t(this)
if(o.hasClass("caret")){o=o.parent()}o.trigger("open").parent().addClass("open")},close:function(){var o=t(this)
o.trigger("close").parent().removeClass("open")}}
function e(n){t(o).each(function(o,e){if(t(e).hasClass("no-auto-close")&&t(n.target).closest(t(e).parent()).length>0){return}t(e).trigger("close").parent().removeClass("open")})}t.fn.dropdown=function(o){return this.each(function(){var e=t(this),r=e.data("dropdown")
if(!r){e.data("dropdown",r=new n(this,o))}if(typeof o=="string"){var a=r[o]
if(a){a.call(this)}}})}
t.fn.dropdown.Constructor=n
t(function(){t("html").on("click.dropdown.data-api",e)})}(window.jQuery)
;
window.LocalStore={version:4,keyPrefix:"ka",cacheKey:function(e){if(!e){throw new Error("Attempting to use LocalStore without a key")}return[this.keyPrefix,this.version,e].join(":")},get:function(e){var o=window.localStorage[LocalStore.cacheKey(e)]
if(o){return JSON.parse(o)}return null},set:function(e,o){var t=JSON.stringify(o),r=LocalStore.cacheKey(e)
try{window.localStorage[r]=t}catch(a){LocalStore.clearAll()}},del:function(e){var o=this.cacheKey(e)
if(o in window.localStorage){delete window.localStorage[o]}},clearAll:function(){var e=0
while(e<localStorage.length){var o=localStorage.key(e)
if(o.indexOf(LocalStore.keyPrefix+":")===0){delete localStorage[o]}else{e++}}}}
;
window.RegexUtil=function(){function e(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function n(n){n=e(n)
var r=function(e){return t[e.toUpperCase()]||e}
n=n.replace(/\S/g,r)
return n}var r={A:"àá",E:"èéÉ",I:"í",O:"ò-ö",U:"ùü"}
var t=_.object(_.map(r,function(e,n){return[n,"["+n+n.toLowerCase()+e+"]"]}))
var a=_.object(_.map(r,function(e,n){return[n,"["+e+"]"]}))
var c={}
_.each(a,function(e,n){c[n.toLowerCase()]=new RegExp(e,"g")})
var o=_.values(a).join("|")
var u=new RegExp(o)
return{escapeRegex:e,accentInsensitive:n,accentedCharRegexes:c,anyAccentedCharRegex:u}}()
;
window.createCookie=function(e,o,i,n){var t
if(i){var r=new Date
r.setTime(r.getTime()+i*24*60*60*1e3)
t="; expires="+r.toGMTString()}else{t=""}if(n){n="; domain="+n}else{n=""}document.cookie=e+"="+o+t+n+"; path=/"}
window.readCookie=function(e){var o=e+"="
var i=document.cookie.split(";")
for(var n=0;n<i.length;n++){var t=i[n]
while(t.charAt(0)===" "){t=t.substring(1,t.length)}if(t.indexOf(o)===0){return t.substring(o.length,t.length)}}return null}
window.eraseCookie=function(e,o){createCookie(e,"",-1,o)}
window.areCookiesEnabled=function(){createCookie("detectCookiesEnabled","KhanAcademy")
if(readCookie("detectCookiesEnabled")==null){return false}eraseCookie("detectCookiesEnabled")
return true}
;
window.Keys={}
Keys.isTextModifyingKeyEvent_=function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||e.keyCode>=112&&e.keyCode<=123){return false}switch(e.keyCode){case $.ui.keyCode.ALT:case $.ui.keyCode.CAPS_LOCK:case $.ui.keyCode.COMMAND:case $.ui.keyCode.COMMAND_LEFT:case $.ui.keyCode.COMMAND_RIGHT:case $.ui.keyCode.CONTROL:case $.ui.keyCode.DOWN:case $.ui.keyCode.END:case $.ui.keyCode.ENTER:case $.ui.keyCode.ESCAPE:case $.ui.keyCode.HOME:case $.ui.keyCode.INSERT:case $.ui.keyCode.LEFT:case $.ui.keyCode.MENU:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.SHIFT:case $.ui.keyCode.UP:case $.ui.keyCode.WINDOWS:return false
default:return true}}
Keys.textChangeEvents="oninput"in document.createElement("input")?"input":"keyup paste cut drop"
;
window.IncrementalCollection=Backbone.Collection.extend({initialize:function(){Backbone.Collection.prototype.initialize.apply(this,arguments)
if(!this.idAttribute){this.idAttribute=this.model.prototype.idAttribute
if(!this.idAttribute){this.idAttribute="id"}}},fetchByID:function(e,t,i){var n=this.get(e)
if(!n){var l={}
l[this.idAttribute]=e
n=new this.model(l)
this.add(n,{silent:true})}if(!n.__inited){if(!n.__callbacks){n.__callbacks=[]}if(t){n.__callbacks.push({callback:t,args:i})}if(!n.__requesting){KAConsole.log("IC ("+e+"): Sending request...")
n.fetch({success:function(){KAConsole.log("IC ("+e+"): Request succeeded.")
n.__inited=true
n.__requesting=false
_.each(n.__callbacks,function(e){e.callback.apply(null,[n].concat(e.args))})
n.__callbacks=[]},error:function(){KAConsole.log("IC ("+e+"): Request failed!")
n.__requesting=false},data:{casing:i&&i.camelCase?"camel":"underscore",preview:i&&i.preview||""}})
n.__requesting=true}else{KAConsole.log("IC ("+e+"): Already requested.")}}else{KAConsole.log("IC ("+e+"): Already loaded.")
if(t){t.apply(null,[n].concat(i))}}return n},resetInited:function(e,t){this.reset(e,t)
_.each(this.models,function(e){e.__inited=true})},addInited:function(e,t){var i=this
this.add(e,t)
_.each(e,function(e){var t=i.get(e[i.idAttribute])
t.__inited=true})},deinitModel:function(e){var t=this.get(e)
if(t){t.__inited=false}}})
window.OnceMixin={once:function(e,t,i){var n=_.bind(function(){t.apply(i||this,arguments)
this.off(null,n)},this)
this.on(e,n)
return this}}
;
_.mixin({renameKeys:function(n,e){var r={}
_(n).each(function(n,t){var u=e[t]||t
r[u]=n})
return r},intersperse:function(n,e){if(n.length===0){return[]}return _.reduce(n.slice(1),function(n,r,t){var u=typeof e==="function"?e(t):e
return n.concat([u,r])},[n[0]])},indexBy:function(n,e){var r=null
if(typeof e==="string"){r=function(n){return n[e]}}else{r=e}return _.reduce(n,function(n,e){n[r(e)]=e
return n},{})}})
;
(function(t){var n=/\b(?:(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>&]+|&amp;|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’&]))/gi
var o={autolink:function(t,o){return t.replace(n,function(t){if(!/^https?:\/\//.test(t)){t="http://"+t}var n=o?'rel="nofollow"':""
return"<a "+n+' href="'+t+'">'+t+"</a>"})}}
t.Autolink=o})(typeof window==="undefined"?global:window)
;
(function(){var e={}
var n=this,i=n.async
if(typeof module!=="undefined"&&module.exports){module.exports=e}else{n.async=e}e.until=function(n,i,t){if(!n()){i(function(u){if(u){return t(u)}e.until(n,i,t)})}else{t()}}})()
;
(function(t){function n(t,n){return function(e){return u(t.call(this,e),n)}}function e(t){return function(n){return this.lang().ordinal(t.call(this,n))}}function s(){}function r(t){a(this,t)}function i(t){var n=this._data={},e=t.years||t.year||t.y||0,s=t.months||t.month||t.M||0,r=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,a=t.hours||t.hour||t.h||0,u=t.minutes||t.minute||t.m||0,d=t.seconds||t.second||t.s||0,h=t.milliseconds||t.millisecond||t.ms||0
this._milliseconds=h+d*1e3+u*6e4+a*36e5,this._days=i+r*7,this._months=s+e*12,n.milliseconds=h%1e3,d+=o(h/1e3),n.seconds=d%60,u+=o(d/60),n.minutes=u%60,a+=o(u/60),n.hours=a%24,i+=o(a/24),i+=r*7,n.days=i%30,s+=o(i/30),n.months=s%12,e+=o(s/12),n.years=e}function a(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])
return t}function o(t){return t<0?Math.ceil(t):Math.floor(t)}function u(t,n){var e=t+""
while(e.length<n)e="0"+e
return e}function d(t,n,e){var s=n._milliseconds,r=n._days,i=n._months,a
s&&t._d.setTime(+t+s*e),r&&t.date(t.date()+r*e),i&&(a=t.date(),t.date(1).month(t.month()+i*e).date(Math.min(a,t.daysInMonth())))}function h(t){return Object.prototype.toString.call(t)==="[object Array]"}function c(t,n){var e=Math.min(t.length,n.length),s=Math.abs(t.length-n.length),r=0,i
for(i=0;i<e;i++)~~t[i]!==~~n[i]&&r++
return r+s}function f(t,n){return n.abbr=t,U[t]||(U[t]=new s),U[t].set(n),U[t]}function l(t){return t?(!U[t]&&Z&&require("./lang/"+t),U[t]):O.fn._lang}function _(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function m(t){var n=t.match(W),e,s
for(e=0,s=n.length;e<s;e++)an[n[e]]?n[e]=an[n[e]]:n[e]=_(n[e])
return function(r){var i=""
for(e=0;e<s;e++)i+=typeof n[e].call=="function"?n[e].call(r,t):n[e]
return i}}function y(t,n){function e(n){return t.lang().longDateFormat(n)||n}var s=5
while(s--&&P.test(n))n=n.replace(P,e)
return en[n]||(en[n]=m(n)),en[n](t)}function M(t){switch(t){case"DDDD":return N
case"YYYY":return $
case"YYYYY":return I
case"S":case"SS":case"SSS":case"DDD":return J
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return X
case"X":return q
case"Z":case"ZZ":return j
case"T":return R
case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return E
default:return new RegExp(t.replace("\\",""))}}function D(t,n,e){var s,r,i=e._a
switch(t){case"M":case"MM":i[1]=n==null?0:~~n-1
break
case"MMM":case"MMMM":s=l(e._l).monthsParse(n),s!=null?i[1]=s:e._isValid=!1
break
case"D":case"DD":case"DDD":case"DDDD":n!=null&&(i[2]=~~n)
break
case"YY":i[0]=~~n+(~~n>68?1900:2e3)
break
case"YYYY":case"YYYYY":i[0]=~~n
break
case"a":case"A":e._isPm=(n+"").toLowerCase()==="pm"
break
case"H":case"HH":case"h":case"hh":i[3]=~~n
break
case"m":case"mm":i[4]=~~n
break
case"s":case"ss":i[5]=~~n
break
case"S":case"SS":case"SSS":i[6]=~~(("0."+n)*1e3)
break
case"X":e._d=new Date(parseFloat(n)*1e3)
break
case"Z":case"ZZ":e._useUTC=!0,s=(n+"").match(Q),s&&s[1]&&(e._tzh=~~s[1]),s&&s[2]&&(e._tzm=~~s[2]),s&&s[0]==="+"&&(e._tzh=-e._tzh,e._tzm=-e._tzm)}n==null&&(e._isValid=!1)}function p(t){var n,e,s=[]
if(t._d)return
for(n=0;n<7;n++)t._a[n]=s[n]=t._a[n]==null?n===2?1:0:t._a[n]
s[3]+=t._tzh||0,s[4]+=t._tzm||0,e=new Date(0),t._useUTC?(e.setUTCFullYear(s[0],s[1],s[2]),e.setUTCHours(s[3],s[4],s[5],s[6])):(e.setFullYear(s[0],s[1],s[2]),e.setHours(s[3],s[4],s[5],s[6])),t._d=e}function Y(t){var n=t._f.match(W),e=t._i,s,r
t._a=[]
for(s=0;s<n.length;s++)r=(M(n[s]).exec(e)||[])[0],r&&(e=e.slice(e.indexOf(r)+r.length)),an[n[s]]&&D(n[s],r,t)
t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&t._a[3]===12&&(t._a[3]=0),p(t)}function g(t){var n,e,s,i=99,o,u,d
while(t._f.length){n=a({},t),n._f=t._f.pop(),Y(n),e=new r(n)
if(e.isValid()){s=e
break}d=c(n._a,e.toArray()),d<i&&(i=d,s=e)}a(t,s)}function w(t){var n,e=t._i
if(B.exec(e)){t._f="YYYY-MM-DDT"
for(n=0;n<4;n++)if(K[n][1].exec(e)){t._f+=K[n][0]
break}j.exec(e)&&(t._f+=" Z"),Y(t)}else t._d=new Date(e)}function T(n){var e=n._i,s=x.exec(e)
e===t?n._d=new Date:s?n._d=new Date(+s[1]):typeof e=="string"?w(n):h(e)?(n._a=e.slice(0),p(n)):n._d=e instanceof Date?new Date(+e):new Date(e)}function v(t,n,e,s,r){return r.relativeTime(n||1,!!e,t,s)}function k(t,n,e){var s=C(Math.abs(t)/1e3),r=C(s/60),i=C(r/60),a=C(i/24),o=C(a/365),u=s<45&&["s",s]||r===1&&["m"]||r<45&&["mm",r]||i===1&&["h"]||i<22&&["hh",i]||a===1&&["d"]||a<=25&&["dd",a]||a<=45&&["M"]||a<345&&["MM",C(a/30)]||o===1&&["y"]||["yy",o]
return u[2]=n,u[3]=t>0,u[4]=e,v.apply({},u)}function S(t,n,e){var s=e-n,r=e-t.day()
return r>s&&(r-=7),r<s-7&&(r+=7),Math.ceil(O(t).add("d",r).dayOfYear()/7)}function F(t){var n=t._i,e=t._f
return n===null||n===""?null:(typeof n=="string"&&(t._i=n=l().preparse(n)),O.isMoment(n)?(t=a({},n),t._d=new Date(+n._d)):e?h(e)?g(t):Y(t):T(t),new r(t))}function b(t,n){O.fn[t]=O.fn[t+"s"]=function(t){var e=this._isUTC?"UTC":""
return t!=null?(this._d["set"+e+n](t),this):this._d["get"+e+n]()}}function H(t){O.duration.fn[t]=function(){return this._data[t]}}function L(t,n){O.duration.fn["as"+t]=function(){return+this/n}}var O,z="2.0.0",C=Math.round,A,U={},Z=typeof module!="undefined"&&module.exports,x=/^\/?Date\((\-?\d+)/i,W=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,V=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,E=/\d\d?/,J=/\d{1,3}/,N=/\d{3}/,$=/\d{1,4}/,I=/[+\-]?\d{1,6}/,X=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,j=/Z|[\+\-]\d\d:?\d\d/i,R=/T/i,q=/[\+\-]?\d+(\.\d{1,3})?/,B=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,G="YYYY-MM-DDTHH:mm:ssZ",K=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Q=/([\+\-]|\d\d)/gi,tn="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),nn={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},en={},sn="DDD w W M D d".split(" "),rn="M D H h m s w W".split(" "),an={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),n="+"
return t<0&&(t=-t,n="-"),n+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),n="+"
return t<0&&(t=-t,n="-"),n+u(~~(10*t/6),4)},X:function(){return this.unix()}}
while(sn.length)A=sn.pop(),an[A+"o"]=e(an[A])
while(rn.length)A=rn.pop(),an[A+A]=n(an[A],2)
an.DDDD=n(an.DDD,3),s.prototype={set:function(t){var n,e
for(e in t)n=t[e],typeof n=="function"?this[e]=n:this["_"+e]=n},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var n,e,s,r
this._monthsParse||(this._monthsParse=[])
for(n=0;n<12;n++){this._monthsParse[n]||(e=O([2e3,n]),s="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[n]=new RegExp(s.replace(".",""),"i"))
if(this._monthsParse[n].test(t))return n}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var n=this._longDateFormat[t]
return!n&&this._longDateFormat[t.toUpperCase()]&&(n=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=n),n},meridiem:function(t,n,e){return t>11?e?"pm":"PM":e?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(t,n){var e=this._calendar[t]
return typeof e=="function"?e.apply(n):e},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,n,e,s){var r=this._relativeTime[e]
return typeof r=="function"?r(t,n,e,s):r.replace(/%d/i,t)},pastFuture:function(t,n){var e=this._relativeTime[t>0?"future":"past"]
return typeof e=="function"?e(n):e.replace(/%s/i,n)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return S(t,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},O=function(t,n,e){return F({_i:t,_f:n,_l:e,_isUTC:!1})},O.utc=function(t,n,e){return F({_useUTC:!0,_isUTC:!0,_l:e,_i:t,_f:n})},O.unix=function(t){return O(t*1e3)},O.duration=function(t,n){var e=O.isDuration(t),s=typeof t=="number",r=e?t._data:s?{}:t,a
return s&&(n?r[n]=t:r.milliseconds=t),a=new i(r),e&&t.hasOwnProperty("_lang")&&(a._lang=t._lang),a},O.version=z,O.defaultFormat=G,O.lang=function(t,n){var e
if(!t)return O.fn._lang._abbr
n?f(t,n):U[t]||l(t),O.duration.fn._lang=O.fn._lang=l(t)},O.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),l(t)},O.isMoment=function(t){return t instanceof r},O.isDuration=function(t){return t instanceof i},O.fn=r.prototype={clone:function(){return O(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return O.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return this._isValid==null&&(this._a?this._isValid=!c(this._a,(this._isUTC?O.utc(this._a):O(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(t){var n=y(this,t||O.defaultFormat)
return this.lang().postformat(n)},add:function(t,n){var e
return typeof t=="string"?e=O.duration(+n,t):e=O.duration(t,n),d(this,e,1),this},subtract:function(t,n){var e
return typeof t=="string"?e=O.duration(+n,t):e=O.duration(t,n),d(this,e,-1),this},diff:function(t,n,e){var s=this._isUTC?O(t).utc():O(t).local(),r=(this.zone()-s.zone())*6e4,i,a
return n&&(n=n.replace(/s$/,"")),n==="year"||n==="month"?(i=(this.daysInMonth()+s.daysInMonth())*432e5,a=(this.year()-s.year())*12+(this.month()-s.month()),a+=(this-O(this).startOf("month")-(s-O(s).startOf("month")))/i,n==="year"&&(a/=12)):(i=this-s-r,a=n==="second"?i/1e3:n==="minute"?i/6e4:n==="hour"?i/36e5:n==="day"?i/864e5:n==="week"?i/6048e5:i),e?a:o(a)},from:function(t,n){return O.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(t){return this.from(O(),t)},calendar:function(){var t=this.diff(O().startOf("day"),"days",!0),n=t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"
return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var t=this.year()
return t%4===0&&t%100!==0||t%400===0},isDST:function(){return this.zone()<O([this.year()]).zone()||this.zone()<O([this.year(),5]).zone()},day:function(t){var n=this._isUTC?this._d.getUTCDay():this._d.getDay()
return t==null?n:this.add({d:t-n})},startOf:function(t){t=t.replace(/s$/,"")
switch(t){case"year":this.month(0)
case"month":this.date(1)
case"week":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return t==="week"&&this.day(0),this},endOf:function(t){return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(t,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)>+O(t).startOf(n)},isBefore:function(t,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)<+O(t).startOf(n)},isSame:function(t,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)===+O(t).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return O.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var n=C((O(this).startOf("day")-O(this).startOf("year"))/864e5)+1
return t==null?n:this.add("d",t-n)},isoWeek:function(t){var n=S(this,1,4)
return t==null?n:this.add("d",(t-n)*7)},week:function(t){var n=this.lang().week(this)
return t==null?n:this.add("d",(t-n)*7)},lang:function(n){return n===t?this._lang:(this._lang=l(n),this)}}
for(A=0;A<tn.length;A++)b(tn[A].toLowerCase().replace(/s$/,""),tn[A])
b("year","FullYear"),O.fn.days=O.fn.day,O.fn.weeks=O.fn.week,O.fn.isoWeeks=O.fn.isoWeek,O.duration.fn=i.prototype={weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(t){var n=+this,e=k(n,!t,this.lang())
return t&&(e=this.lang().pastFuture(n,e)),this.lang().postformat(e)},lang:O.fn.lang}
for(A in nn)nn.hasOwnProperty(A)&&(L(A,nn[A]),H(A.toLowerCase()))
L("Weeks",6048e5),O.lang("en",{ordinal:function(t){var n=t%10,e=~~(t%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th"
return t+e}}),Z&&(module.exports=O),typeof ender=="undefined"&&(this.moment=O),typeof define=="function"&&define.amd&&define("moment",[],function(){return O})}).call(this)
;
;
window.Analytics=function(e){var t=Date.now||function(){return+new Date}
var a=null
var r=0
var i=null
var n=[]
var s={persistData:{timestamp:0,events:{},trackingProperties:{}},loadAndSendPersistData:function(){if(window.sessionStorage){var e=null
try{e=$.parseJSON(sessionStorage.getItem("ka_analytics"))}catch(a){}var r=t()
if(e&&r-e.timestamp<60*1e3){this.persistData=e
this.trackingProperties=this.trackingProperties||{}
_.each(e.events,this._sendEvent,this)}}},addEvent:function(e){this.persistData.events[e.id]=e
this._storePersistData()
return this._sendEvent(e)},_sendEvent:function(e){var t=$.Deferred()
window.mixpanel.track(e.name,e.parameters,_(function(a,r){if(a===1||a.status===1){delete this.persistData.events[e.id]
this._storePersistData()
KAConsole.log("Successfully sent event "+e.id)
t.resolve()}else{KAConsole.log("Failed to send event "+e.id,a.error)
t.reject()}}).bind(this))
return t.promise()},_storePersistData:function(){if(window.sessionStorage){this.persistData.timestamp=t()
var e=JSON.stringify(this.persistData)
sessionStorage.setItem("ka_analytics",e)}},setTrackingProperty:function(e,t){this.persistData.trackingProperties[e]=t
this._storePersistData()},getTrackingProperty:function(e){return this.persistData.trackingProperties[e]}}
_.extend(e,{trackInitialPageLoad:function(r){var i=document.referrer.split("/")[2]
var o=/^([0-9a-z-]+\.)*khanacademy\.org$/
var c=!o.test(i)
s.loadAndSendPersistData()
$(window).unload(function(){e._trackActivityEnd(t())})
$("body").on("click","a",function(t){var a=$(this).attr("data-tag")
if(a){var r=$(this).attr("href")
e.trackSingleEvent("Link Click",{"Link Tag":a,Href:r})}})
this.trackPageLoad(r,c)
_.each(n,function(e){this.trackSingleEvent(e.name,e.parameters)},this)
setTimeout(function(){var r=t()
e._trackActivityEnd(r)
a=null},4*60*60*1e3)},trackPageLoad:function(i,n){var o=t()
var c=i>0?Math.floor((o-i)/1e3):0
s.addEvent({id:"Page Load"+o,name:"Page Load",parameters:_.extend({Page:window.location.pathname,"Load Time (s)":c},e.SuperProps)})
if(n){s.addEvent({id:"Landing Page Load"+o,name:"Landing Page Load (real)",parameters:_.extend({"Landing Page":window.location.pathname},e.SuperProps)})
s.setTrackingProperty("Session Start",o)
s.setTrackingProperty("Session Pages",1)}else{var d=s.getTrackingProperty("Session Pages")
if(d){s.setTrackingProperty("Session Pages",d+1)}}a=window.location.pathname
r=o
this.trackActivityBegin("Page View",{})},handleRouterNavigation:function(t){if(t.indexOf("route:")!==0){return}_gaq.push(["_trackPageview",window.location.pathname])
if(window.VisitTracking){VisitTracking.trackVisit()}if(!a){return}if(window.location.pathname!==a){e.trackPageLoad(0,false)}},trackActivityBegin:function(r,n){if(!a){return null}var s=t()
this._trackActivityEnd(s)
n._startTime=s
_.extend(n,e.SuperProps)
i={id:r+s,name:r,parameters:n}
KAConsole.log("Started tracking activity "+(r+s))
return i},trackActivityEnd:function(e){if(e===i){var a=t()
this._trackActivityEnd(a)
this.trackActivityBegin("Page View",{})}},_trackActivityEnd:function(e){if(i){var t=i
var n=Math.floor((e-t.parameters._startTime)/1e3)
var o=Math.floor((e-r)/1e3)
var c=s.getTrackingProperty("Session Start")
t.parameters[t.name+" Page"]=a
t.parameters[t.name+" Duration (s)"]=n
t.parameters[t.name+" Page Time (s)"]=o
delete t.parameters._startTime
if(c){var d=Math.floor((e-c)/1e3)
var g=s.getTrackingProperty("Session Pages")
t.parameters[t.name+" Session Time (s)"]=d
t.parameters[t.name+" Session Pages"]=g}KAConsole.log("Stopped tracking activity "+t.name+" after "+n+" sec.")
s.addEvent(t)
i=null}},trackSingleEvent:function(i,o){o=o||{}
if(!a){n.push({name:i,parameters:o})
return $.Deferred().resolve()}var c=t()
o["Page"]=a
o[i+" Page Time (s)"]=Math.floor((c-r)/1e3)
_.extend(o,e.SuperProps)
var d={id:i+c,name:i,parameters:o}
KAConsole.log("Tracking single event "+(i+c))
return s.addEvent(d)}})
return e}(window.Analytics||{})
;
window.NotificationsLoader={_loaded:false,init:function(){$("#user-info").on("open","#user-notifications",function(n){NotificationsLoader.load()
NotificationsLoader.clearBrandNewCount()}).on("click",".user-notifications-toggle",function(n){return false})},require:function(){return PackageManager.require("notifications.js","notifications.css")},load:function(){if(this._loaded){return}this.require().then(function(){Notifications.load()})
this._loaded=true},loadFromAPI:function(n){this.require().then(function(){var t=n["readable"],i=n["urgent"],e=n["continueUrl"]
if(t.length){Notifications.renderFromAPI(t)
NotificationsLoader.incrementBrandNewCount(t.length)}if(i.length){Notifications.renderUrgent(i[0],e)}})},loadUrgent:function(n,t){this.require().then(function(){Notifications.renderUrgent(n,t)})},clearBrandNewCount:function(){var n=$(".notification-bubble")
if(parseInt(n.text())!==0){$(".notification-bubble").text("0").hide().parents(".icon").removeClass("brand-new")
updateDocumentTitle({noteCount:0})
this.require().then(function(){Notifications.clearBrandNewCount()})}},incrementBrandNewCount:function(n){var t=$(".notification-bubble")
var i=parseInt(t.text())+n
t.text(i).show().parents(".icon").addClass("brand-new")
updateDocumentTitle({noteCount:i})}}
$(function(){NotificationsLoader.init()})
;
window.IssueLoader={_issue_package:null,init:function(){$(".issueLoader").on("mouseover",function(e){IssueLoader.require()})
$(".report-issue").on("click",function(e){IssueLoader.load(e)
return false})},require:function(){if(this._issue_package===null){this._issue_package=PackageManager.require("issues.js","issues.css")}return this._issue_package},load:function(e){var s=this.require()
$.when(s).done(function(s){s.toggleReportIssueModal($(e.target).data("report-type"))})}}
$(function(){IssueLoader.init()})
;
window.TypeaheadLoader=function(){var e=null,a=null
function i(){if(!e){e=PackageManager.require("typeahead.js")}return e}function n(){if(!a){var e="/api/v1/autocompleteindex?k&v="+KA.commitSHA
a=$.getJSON(e)}return a}function t(){$.when(i(),n()).done(_.bind(function(){var e=$(this),a=e.is(":focus")
if(e.data("typeaheadInitialized")){return}e.data("typeaheadInitialized",true).typeaheadSearch().on("typeahead:initialized",function(){if(e.is(":focus")){e.typeahead("setQuery",e.val())}})
if(a){e.focus()}},this))}function r(){var e=$(".typeahead-search input[type=text]")
if(!e.length){return}e.on("mouseover focus keydown",t)
_.delay(function(){i()
n()},2e3)}return{init:r,requireIndex:n}}()
$(TypeaheadLoader.init)
;
window.APIActionResults={init:function(){this.hooks=[]
$(document).ajaxComplete(function(e,xhr,settings){if(xhr&&xhr.getResponseHeader("X-KA-API-Version-Mismatch")){apiVersionMismatch()}if(xhr&&xhr.getResponseHeader("X-KA-API-Response")&&xhr.responseText){if(xhr.responseText.indexOf("action_results")===-1&&xhr.responseText.indexOf("actionResults")===-1){return}var result
try{eval("result = "+xhr.responseText)}catch(err){return}if(result){var action=result["action_results"]||result["actionResults"]
if(action){APIActionResults.respondToAction(action)}}}})
jQuery.ajaxSetup({beforeSend:function(e,r){if(typeof KA!=="undefined"&&KA.language&&r&&r.url&&(r.url.indexOf("/api/")>-1||r.url.indexOf("/profile/graph")>-1||r.url.indexOf("/goals/new")>-1||r.url.indexOf("/khan-exercises/exercises/")>-1)){var i=r.url.replace(/([?&])lang=[^&]*/,"$1lang="+KA.language)
r.url=i+(i===r.url?(/\?/.test(r.url)?"&":"?")+"lang="+KA.language:"")}if(r&&r.url&&r.url.indexOf("/api/")>-1){if(r.cache===undefined&&!/[\?&]v=/.test(r.url)){var n=jQuery.now(),i=r.url.replace(/([?&])_=[^&]*/,"$1_="+n)
r.url=i+(i===r.url?(/\?/.test(r.url)?"&":"?")+"_="+n:"")}var t=readCookie("fkey")
if(t){e.setRequestHeader("X-KA-FKey",t)}else{apiVersionMismatch()
if(r.error){r.error()}return false}}}})},toCamelCase:function(e){return e.replace(/_([a-z])/g,function(e,r){return r.toUpperCase()})},respondToAction:function(e){$(APIActionResults.hooks).each(function(r,i){if(typeof e[i.prop]!=="undefined"){i.fxn(e[i.prop])}})},register:function(e,r){this.hooks[this.hooks.length]={prop:e,fxn:r}
this.hooks[this.hooks.length]={prop:APIActionResults.toCamelCase(e),fxn:r}}}
window.apiVersionMismatch=function(){NotificationsLoader.loadUrgent({class_:["ApiVersionMismatchNotification"]})}
APIActionResults.init()
$(function(){if(!_.isUndefined(window.ENV)&&window.ENV.scratchpad&&window.ENV.trusted&&window!==top){return}APIActionResults.register("notifications_added",_.bind(NotificationsLoader.loadFromAPI,NotificationsLoader))
APIActionResults.register("user_profile",function(e){var r={}
for(var i in e){if(e.hasOwnProperty(i)){r[APIActionResults.toCamelCase(i)]=e[i]}}e=r
var n=KA.setUserProfile(e)
NavHeader.renderUserDropdown()
NavHeader.renderNotificationsDropdown()})})
;
window.Templates={}
Templates.cache_={}
Templates.fromScript_=function(e){var a=$("#template_"+e)
if(!a.length){return null}var t=a.html()
if(!$.trim(t).length){return null}return Handlebars.compile(t)}
Templates.getCanonicalName=function(e){if(e.indexOf(".")>-1){var a=e.split(".")
e=a[0]+"-package_"+a[1]}return e}
Templates.get=function(e){e=Templates.getCanonicalName(e)
if(Handlebars.templates){var a=Handlebars.templates[e]
if(a){return a}}var t=Templates.cache_[e]||(Templates.cache_[e]=Templates.fromScript_(e))
return t}
;
window.FacebookUtil={init:function(){if(!window.FB_APP_ID){return}window.fbAsyncInit=function(){FB.init({appId:FB_APP_ID,status:false,cookie:true,xfbml:true,oauth:true})
if(FacebookUtil.isUsingFbLogin()){FB.getLoginStatus(function(e){if(e.authResponse){FacebookUtil.fixMissingCookie(e.authResponse)}else{eraseCookie("fbl")}})}FB.Event.subscribe("auth.login",function(e){FacebookUtil.setFacebookID(e.authResponse.userID)})
FB.Event.subscribe("xfbml.render",function(e){var o=$("#facepile-holder")
var i=22
if(o.height()<=i*1.5){return}o.animate({opacity:1,duration:200,easing:"easeInOutCubic"})
Analytics.trackSingleEvent("Load Facepile")})
FacebookUtil.fbReadyDeferred_.resolve()}
$("#user-info").on("click","#page_logout",function(e){var o=window.location.hostname
if(o.indexOf("local.")===0){o=o.substring(6)}var i=FacebookUtil.isUsingFbLogin()
eraseCookie("fbsr_"+FB_APP_ID)
eraseCookie("fbsr_"+FB_APP_ID,"."+o)
eraseCookie("fbm_"+FB_APP_ID)
eraseCookie("fbm_"+FB_APP_ID,"."+o)
eraseCookie("fbl")
if(i){try{FB.logout(function(){window.location=$("#page_logout").attr("href")})
return false}catch(t){window.location=$("#page_logout").attr("href")}}})
if(FacebookUtil.isUsingFbLogin()){FacebookUtil.loadFb()}},fbLoadStarted_:false,loadFb:function(){if(this.fbLoadStarted_){return}this.fbLoadStarted_=true
var e=document.createElement("script")
e.async=true
e.src=document.location.protocol+"//connect.facebook.net/"+icu.getLocale().replace(/-/g,"_")+"/all.js"
var o=document.getElementById("fb-root")
if(o){o.appendChild(e)}},fbReadyDeferred_:new $.Deferred,runOnFbReady:function(e){this.loadFb()
this.fbReadyDeferred_.done(e)},isUsingFbLoginCached_:undefined,facebookID:undefined,getFacebookID:function(){if(window.USERNAME&&FacebookUtil.isUsingFbLogin()){return FacebookUtil.facebookID||LocalStore.get("facebookID")}return null},setFacebookID:function(e){FacebookUtil.facebookID=e
LocalStore.set("facebookID",e)},isUsingFbLogin:function(){if(FacebookUtil.isUsingFbLoginCached_===undefined){FacebookUtil.isUsingFbLoginCached_=!!readCookie("fbl")}return FacebookUtil.isUsingFbLoginCached_},markUsingFbLogin:function(){createCookie("fbl",true,30)},setPublishStreamPermission:function(e){var o=LocalStore.get("fbPublishStream")
if(!o){o={}}var i=FacebookUtil.getFacebookID()
if(i){if(e){o[i]=true}else{delete o[i]}LocalStore.set("fbPublishStream",o)}},hasPublishStreamPermission:function(){var e=LocalStore.get("fbPublishStream")
if(e&&e[FacebookUtil.getFacebookID()]){return true}return false},fixMissingCookie:function(e){if(readCookie("fbsr_"+FB_APP_ID)){return}if(e&&e.signedRequest){createCookie("fbsr_"+FB_APP_ID,e.signedRequest)}}}
FacebookUtil.init()
;
window.Social={init:function(){$("body").on("click",".twitterShare",function(){Social.openTwitterPopup(this.href)
return false})},prepFacebook:function(){FacebookUtil.runOnFbReady(function(){})},facebookShare:function(e,t,n){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:t,picture:n,caption:"www.khanacademy.org"})})
return false},facebookVideo:function(e,t,n){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:"http://www.khanacademy.org/"+n,picture:"http://www.khanacademy.org/images/handtreehorizontal_facebook.png",caption:"www.khanacademy.org",description:t,message:$._("I just learned about %(title)s on Khan Academy",{title:e})})})
return false},formatMailtoUrl:function(e){var t=e.subject
var n=e.body
var a="mailto:"+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(n)
return a.replace(/\s/g,"+")},emailBadge:function(e,t){return Social.formatMailtoUrl({subject:$._("I just earned the %(badge)s badge on Khan Academy!",{badge:t}),body:$._("Check it out at %(url)s.",{url:e})})},openTwitterPopup:function(e){var t=550,n=370,a=($(window).width()-t)/2,o=($(window).height()-n)/2,i="status=1"+",width="+t+",height="+n+",top="+o+",left="+a
window.open(e,"twitter",i)},formatTwitterShareUrl:function(e){var t=e.url
var n=e.text
var a="http://twitter.com/intent/tweet?"+"url="+encodeURIComponent(t)+"&text="+encodeURIComponent(n)+"&related=khanacademy:Khan Academy"
return a.replace(/\s/g,"+")},twitterBadge:function(e,t){return Social.formatTwitterShareUrl({url:e,text:$._("I just earned the %(badge)s badge on @khanacademy! Check it out at",{badge:t})})}}
$(function(){Social.init()})
;
window.Promos={}
Promos.cache_={}
Promos.hasUserSeen=function(o,e,r){if(o in Promos.cache_){e.call(r,Promos.cache_[o])
return}$.ajax({type:"GET",url:"/api/v1/user/promo/"+encodeURIComponent(o),success:function(c){Promos.cache_[o]=c
e.call(r,c)},error:function(){e.call(r,true)}})}
Promos.markAsSeen=function(o){$.ajax({type:"POST",url:"/api/v1/user/promo/"+encodeURIComponent(o)})
Promos.cache_[o]=true}
;
(function(){var b=Handlebars.template,r=Handlebars.templates=Handlebars.templates||{}
r["shared-package_throbber-grid"]=b(function(b,r,l,c,i){l=l||b.helpers
var o="",s,e=this
o+='<div class="throbber-grid">\n    '
o+='\n    <!--[if lte IE 9]>\n    <img class="throbber-fallback" src="/images/throbber-full.gif" />\n    <![endif]-->\n    <div class="throbber-row clearfix">\n         <div class="block-0 throbber-block"></div>\n         <div class="block-1 throbber-block"></div>\n         <div class="block-2 throbber-block"></div>\n    </div>\n    <div class="throbber-row clearfix">\n         <div class="block-7 throbber-block"></div>\n         <div class="block-8 throbber-block"></div>\n         <div class="block-3 throbber-block"></div>\n    </div>\n    <div class="throbber-row clearfix">\n         <div class="block-6 throbber-block"></div>\n         <div class="block-5 throbber-block"></div>\n         <div class="block-4 throbber-block"></div>\n    </div>\n</div>'
return o})})()
;
(function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["shared-package_user-dropdown"]=n(function(n,a,o,l,e){o=o||n.helpers
var s="",i,r,t,f,c=this,h="function",p=o.helperMissing,g=void 0,u=this.escapeExpression,d=o.blockHelperMissing
function m(n,a){var l="",e
l+='<a class="nav-link log-in-link" href="'
t=o.loginUrl
e=t||n.loginUrl
if(typeof e===h){e=e.call(n,{hash:{}})}else if(e===g){e=p.call(n,"loginUrl",{hash:{}})}l+=u(e)+'">'
t=o["_"]
e=t||n["_"]
f=c.program(2,v,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof e===h){e=e.call(n,f)}else{e=d.call(n,e,f)}if(e||e===0){l+=e}l+="</a>"
return l}function v(n,a){return"Log in"}function U(n,a){var l="",e
l+='\n            <a class="simple-button right-control primary" href="'
t=o.signUpUrl
e=t||n.signUpUrl
if(typeof e===h){e=e.call(n,{hash:{}})}else if(e===g){e=p.call(n,"signUpUrl",{hash:{}})}l+=u(e)+'">'
t=o["_"]
e=t||n["_"]
f=c.program(5,_,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof e===h){e=e.call(n,f)}else{e=d.call(n,e,f)}if(e||e===0){l+=e}l+="</a>\n            "
return l}function _(n,a){return"Sign up to save"}function w(n,a){var l="",e
l+='\n            <a class="simple-button right-control" href="/settings">'
t=o["_"]
e=t||n["_"]
f=c.program(8,y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof e===h){e=e.call(n,f)}else{e=d.call(n,e,f)}if(e||e===0){l+=e}l+="</a>\n            "
return l}function y(n,a){return"Settings"}function S(n,a){return"Log out"}t=o.isPhantom
i=t||a.isPhantom
r=o["if"]
f=c.program(1,m,e)
f.hash={}
f.fn=f
f.inverse=c.noop
i=r.call(a,i,f)
if(i||i===0){s+=i}s+='<span\n    id="user-notifications">'
s+='</span>\n\n<span class="dropdown">\n    <span class="username_and_notification dropdown-toggle">\n        <a href="'
t=o.profileRoot
i=t||a.profileRoot
if(typeof i===h){i=i.call(a,{hash:{}})}else if(i===g){i=p.call(a,"profileRoot",{hash:{}})}s+=u(i)+'" class="nav-link show-demo-dialog"><img class="user-avatar" src="'
t=o.avatarSrc
i=t||a.avatarSrc
if(typeof i===h){i=i.call(a,{hash:{}})}else if(i===g){i=p.call(a,"avatarSrc",{hash:{}})}s+=u(i)+'"><span class="user-name">'
t=o.nickname
i=t||a.nickname
if(typeof i===h){i=i.call(a,{hash:{}})}else if(i===g){i=p.call(a,"nickname",{hash:{}})}s+=u(i)+'</span><i class="icon-chevron-down"></i></a>\n    </span>\n    <ul class="dropdown-menu no-submenus">\n        <a class="hover-card-link show-demo-dialog" href="'
t=o.profileRoot
i=t||a.profileRoot
if(typeof i===h){i=i.call(a,{hash:{}})}else if(i===g){i=p.call(a,"profileRoot",{hash:{}})}s+=u(i)+'"></a>\n        '
s+='\n        <div class="user-dropdown-controls clearfix">\n            '
t=o.showSignUpToSave
i=t||a.showSignUpToSave
r=o["if"]
f=c.program(4,U,e)
f.hash={}
f.fn=f
f.inverse=c.noop
i=r.call(a,i,f)
if(i||i===0){s+=i}s+="\n\n            "
t=o.showSettings
i=t||a.showSettings
r=o["if"]
f=c.program(7,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
i=r.call(a,i,f)
if(i||i===0){s+=i}s+='\n\n            <!-- Facebook\'s JS logout requires the page_logout ID -->\n            <a id="page_logout" class="simple-button left-control" href="'
t=o.logoutUrl
i=t||a.logoutUrl
if(typeof i===h){i=i.call(a,{hash:{}})}else if(i===g){i=p.call(a,"logoutUrl",{hash:{}})}s+=u(i)+'">'
t=o["_"]
i=t||a["_"]
f=c.program(10,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof i===h){i=i.call(a,f)}else{i=d.call(a,i,f)}if(i||i===0){s+=i}s+="</a>\n        </div>\n    </ul>\n</span>\n\n\n\n\n"
return s})})()
;
(function(){var n=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["shared-package_notifications-dropdown"]=n(function(n,s,o,a,i){o=o||n.helpers
var e="",l,t,r,c,p=this,u="function",f=o.helperMissing,d=void 0,h=this.escapeExpression,g=o.blockHelperMissing
function m(n,s){return"brand-new"}function v(n,s){return'style="display:none;"'}function b(n,s){return"Notifications"}function w(n,s){return"No notifications. You can get back to learning!"}e+='<span class="dropdown">\n    <span class="user-notifications-toggle dropdown-toggle">\n        <a class="nav-link user-notification" href="javascript: void 0;">\n            <span class="icon '
r=o.count
l=r||s.count
t=o["if"]
c=p.program(1,m,i)
c.hash={}
c.fn=c
c.inverse=p.noop
l=t.call(s,l,c)
if(l||l===0){e+=l}e+='">\n                <span class="notification-bubble" '
r=o.count
l=r||s.count
t=o.unless
c=p.program(3,v,i)
c.hash={}
c.fn=c
c.inverse=p.noop
l=t.call(s,l,c)
if(l||l===0){e+=l}e+=">"
r=o.count
l=r||s.count
if(typeof l===u){l=l.call(s,{hash:{}})}else if(l===d){l=f.call(s,"count",{hash:{}})}e+=h(l)+'</span>\n            </span>\n            <i class="icon-chevron-down"></i>\n        </a>\n    </span>\n    <ul class="outer-dropdown-menu dropdown-menu unloaded">\n        <li class="notifications-heading">'
r=o["_"]
l=r||s["_"]
c=p.program(5,b,i)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof l===u){l=l.call(s,c)}else{l=g.call(s,l,c)}if(l||l===0){e+=l}e+='</li>\n        <li class="antiscroll-wrap">\n            <ul class="inner-dropdown-menu antiscroll-inner dropdown-menu no-submenus">\n                <li class="loading"><img src="/images/throbber.gif"></li>\n                <li class="empty" style="display: none;"><div>'
r=o["_"]
l=r||s["_"]
c=p.program(7,w,i)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof l===u){l=l.call(s,c)}else{l=g.call(s,l,c)}if(l||l===0){e+=l}e+="</div></li>\n            </ul>\n        </li>\n    </ul>\n</span>\n"
return e})})()
;
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["shared-package_small-exercise-icon"]=e(function(e,n,r,i,a){r=r||e.helpers
var s="",o,t,l,c,f=this,p="function",u=r.blockHelperMissing
function h(e,n){var i="",a
i+='\n\n<span class="small-exercise-icon node-complete" data-desc="'
l=r["_"]
a=l||e["_"]
c=f.program(2,d,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===p){a=a.call(e,c)}else{a=u.call(e,a,c)}if(a||a===0){i+=a}i+='"></span>\n\n'
return i}function d(e,n){return"You just earned proficiency in this skill"}function m(e,n){var i="",a,s
i+="\n\n"
l=r.reviewing
a=l||e.reviewing
s=r["if"]
c=f.program(5,v,n)
c.hash={}
c.fn=c
c.inverse=f.program(8,y,n)
a=s.call(e,a,c)
if(a||a===0){i+=a}i+="\n"
return i}function v(e,n){var i="",a
i+='\n\n<span class="small-exercise-icon node-review" data-desc="'
l=r["_"]
a=l||e["_"]
c=f.program(6,g,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===p){a=a.call(e,c)}else{a=u.call(e,a,c)}if(a||a===0){i+=a}i+='"></span>\n\n'
return i}function g(e,n){return"You've earned proficiency in this skill. We think it's time for you to review it, because either it's been a while or you recently had some trouble."}function y(e,n){var i="",a,s
i+="\n\n"
l=r.proficient
a=l||e.proficient
s=r["if"]
c=f.program(9,_,n)
c.hash={}
c.fn=c
c.inverse=f.program(12,b,n)
a=s.call(e,a,c)
if(a||a===0){i+=a}i+="\n"
return i}function _(e,n){var i="",a
i+='\n\n<span class="small-exercise-icon node-complete" data-desc="'
l=r["_"]
a=l||e["_"]
c=f.program(10,k,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===p){a=a.call(e,c)}else{a=u.call(e,a,c)}if(a||a===0){i+=a}i+='"></span>\n\n'
return i}function k(e,n){return"You've earned proficiency in this skill"}function b(e,n){var i="",a,s
i+="\n\n"
l=r.suggested
a=l||e.suggested
s=r["if"]
c=f.program(13,w,n)
c.hash={}
c.fn=c
c.inverse=f.program(16,H,n)
a=s.call(e,a,c)
if(a||a===0){i+=a}i+="\n"
return i}function w(e,n){var i="",a
i+='\n\n<span class="small-exercise-icon node-suggested" data-desc="'
l=r["_"]
a=l||e["_"]
c=f.program(14,x,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===p){a=a.call(e,c)}else{a=u.call(e,a,c)}if(a||a===0){i+=a}i+='"></span>\n\n'
return i}function x(e,n){return"You've completed all the pre-requisites for this skill, so we think you're ready for it"}function H(e,n){var i="",a
i+='\n\n<span class="small-exercise-icon node-not-started" data-desc="'
l=r["_"]
a=l||e["_"]
c=f.program(17,Y,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===p){a=a.call(e,c)}else{a=u.call(e,a,c)}if(a||a===0){i+=a}i+='"></span>\n\n'
return i}function Y(e,n){return"This is a skill you can practice"}l=r.justEarnedProficiency
o=l||n.justEarnedProficiency
t=r["if"]
c=f.program(1,h,a)
c.hash={}
c.fn=c
c.inverse=f.program(4,m,a)
o=t.call(n,o,c)
if(o||o===0){s+=o}s+="\n"
return s})})()
;
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["shared-package_share-links"]=a(function(a,e,n,i,l){n=n||a.helpers
var s="",t,r,c,o=this,f="function",h=n.helperMissing,p=void 0,m=this.escapeExpression,k=n.blockHelperMissing
function v(a,e){return"Email"}function d(a,e){return"Tweet"}function u(a,e){return"Share"}s+='<div class="share-links" data-badge-name="'
r=n.name
t=r||e.name
if(typeof t===f){t=t.call(e,{hash:{}})}else if(t===p){t=h.call(e,"name",{hash:{}})}s+=m(t)+'">\n    <a class="emailShare" href="'
r=n.emailLink
t=r||e.emailLink
if(typeof t===f){t=t.call(e,{hash:{}})}else if(t===p){t=h.call(e,"emailLink",{hash:{}})}s+=m(t)+'" target="_blank">\n        <i class="icon-envelope"></i>\n        '
r=n["_"]
t=r||e["_"]
c=o.program(1,v,l)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=k.call(e,t,c)}if(t||t===0){s+=t}s+='\n    </a>\n    <a class="twitterShare" href="'
r=n.twitterLink
t=r||e.twitterLink
if(typeof t===f){t=t.call(e,{hash:{}})}else if(t===p){t=h.call(e,"twitterLink",{hash:{}})}s+=m(t)+'" target="_blank">\n        <i class="icon-twitter"></i>\n        '
r=n["_"]
t=r||e["_"]
c=o.program(3,d,l)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=k.call(e,t,c)}if(t||t===0){s+=t}s+='\n    </a>\n    <a class="facebookShare" href="javascript:void 0">\n        <i class="icon-facebook"></i>\n        '
r=n["_"]
t=r||e["_"]
c=o.program(5,u,l)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=k.call(e,t,c)}if(t||t===0){s+=t}s+='\n    </a>\n	<div class="clearFloat"></div>\n</div>\n'
return s})})()
;
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["shared-package_badge"]=e(function(e,a,i,n,t){i=i||e.helpers
var s="",l,c,o,r,d=this,h="function",f=i.helperMissing,p=void 0,v=this.escapeExpression
function g(e,a){return"achievement-badge-owned"}function b(e,a){var n="",t
n+="data-objectives='"
o=i.objectives
t=o||e.objectives
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===p){t=f.call(e,"objectives",{hash:{}})}n+=v(t)+"'"
return n}function m(e,a){var n="",t
n+='<div class="energy-points-badge">'
o=i.points
t=o||e.points
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===p){t=f.call(e,"points",{hash:{}})}n+=v(t)+"</div>"
return n}s+='<div class="achievement-badge category-'
o=i.badgeCategory
l=o||a.badgeCategory
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"badgeCategory",{hash:{}})}s+=v(l)+" "
o=i.isOwned
l=o||a.isOwned
c=i["if"]
r=d.program(1,g,t)
r.hash={}
r.fn=r
r.inverse=d.noop
l=c.call(a,l,r)
if(l||l===0){s+=l}s+='" title="'
o=i.translatedSafeExtendedDescription
l=o||a.translatedSafeExtendedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedSafeExtendedDescription",{hash:{}})}s+=v(l)+'" '
o=i.canBecomeGoal
l=o||a.canBecomeGoal
c=i["if"]
r=d.program(3,b,t)
r.hash={}
r.fn=r
r.inverse=d.noop
l=c.call(a,l,r)
if(l||l===0){s+=l}s+='>\n  <div id="outline-box">\n  <img src="'
o=i.iconSrc
l=o||a.iconSrc
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"iconSrc",{hash:{}})}s+=v(l)+'" id="badge-icon"/>\n  <div class="achievement-text">\n  <div class="achievement-title">'
o=i.translatedDescription
l=o||a.translatedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedDescription",{hash:{}})}s+=v(l)+'</div>\n  <div class="achievement-desc achievement-desc-no-count">\n    '
o=i.translatedSafeExtendedDescription
l=o||a.translatedSafeExtendedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedSafeExtendedDescription",{hash:{}})}s+=v(l)+"\n  </div>\n  </div>\n  "
o=i.points
l=o||a.points
c=i["if"]
r=d.program(5,m,t)
r.hash={}
r.fn=r
r.inverse=d.noop
l=c.call(a,l,r)
if(l||l===0){s+=l}s+="\n  </div>\n</div>\n"
return s})})()
;
(function(){var e=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["shared-package_progress-icon"]=e(function(e,s,a,l,n){a=a||e.helpers
var t="",i,p,r=this,h="function",c=a.helperMissing,o=void 0,f=this.escapeExpression
t+='\n<span class="progress-icon icon-'
p=a.type
i=p||s.type
if(typeof i===h){i=i.call(s,{hash:{}})}else if(i===o){i=c.call(s,"type",{hash:{}})}t+=f(i)+"-node "
p=a.key
i=p||s.key
if(typeof i===h){i=i.call(s,{hash:{}})}else if(i===o){i=c.call(s,"key",{hash:{}})}t+=f(i)+" "
p=a.extraClasses
i=p||s.extraClasses
if(typeof i===h){i=i.call(s,{hash:{}})}else if(i===o){i=c.call(s,"extraClasses",{hash:{}})}t+=f(i)+'"></span>\n\n'
return t})})()
;
(function(){var e=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["shared-package_progress-icon-subway"]=e(function(e,s,a,l,i){a=a||e.helpers
var n="",t,p,c=this,h="function",d=a.helperMissing,y=void 0,o=this.escapeExpression
n+='<div class="subway-icon '
p=a.key
t=p||s.key
if(typeof t===h){t=t.call(s,{hash:{}})}else if(t===y){t=d.call(s,"key",{hash:{}})}n+=o(t)+'">\n    <div class="pipe"></div>\n    <div class="pipe completed"></div>\n    <div class="status '
p=a.key
t=p||s.key
if(typeof t===h){t=t.call(s,{hash:{}})}else if(t===y){t=d.call(s,"key",{hash:{}})}n+=o(t)+" "
p=a.type
t=p||s.type
if(typeof t===h){t=t.call(s,{hash:{}})}else if(t===y){t=d.call(s,"type",{hash:{}})}n+=o(t)+'-node">\n    </div>\n</div>\n'
return n})})()
;
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["shared-package_topic-browser-pulldown"]=e(function(e,n,l,a,i){l=l||e.helpers
var r="",s,o,t,f,h=this,c="function",d=l.blockHelperMissing,u=l.helperMissing,p=void 0,v=this.escapeExpression
function m(e,n){var a="",i
a+="\n        "
t=l["_"]
i=t||e["_"]
f=h.program(2,g,n)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof i===c){i=i.call(e,f)}else{i=d.call(e,i,f)}if(i||i===0){a+=i}a+="\n      "
return a}function g(e,n){return"Dashboard"}function _(e,n){var a="",i
a+="\n        "
t=l["_"]
i=t||e["_"]
f=h.program(5,w,n)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof i===c){i=i.call(e,f)}else{i=d.call(e,i,f)}if(i||i===0){a+=i}a+="\n      "
return a}function w(e,n){return"Home"}function y(e,n){return"Knowledge Map"}function b(e,n){var a="",i
a+='\n  <li class="has-submenu">\n  <a class="menulink goals-link">'
t=l["_"]
i=t||e["_"]
f=h.program(10,k,n)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof i===c){i=i.call(e,f)}else{i=d.call(e,i,f)}if(i||i===0){a+=i}a+='\n      <i class="icon-chevron-right"></i>\n      <i class="icon-chevron-left"></i>\n  </a>\n    <div class="dropdown-menu no-submenus sub-menu-custom goals-menu">\n        <div class="goals-title">'
t=l["_"]
i=t||e["_"]
f=h.program(12,B,n)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof i===c){i=i.call(e,f)}else{i=d.call(e,i,f)}if(i||i===0){a+=i}a+='</div>\n        <div class="goals-menu-contents">\n            '
a+="\n        </div>\n    </div>\n  </li>\n  "
return a}function k(e,n){return"Goals"}function B(e,n){return"Goals"}function H(e,n){var a="",i,r
a+="\n    "
t=l.reordered_children
i=t||e.reordered_children
r=l["if"]
f=h.programWithDepth(x,n,e)
f.hash={}
f.fn=f
f.inverse=h.program(28,W,n)
i=r.call(e,i,f)
if(i||i===0){a+=i}a+="\n  "
return a}function x(e,n,a){var i="",r,s
i+='\n      <li class="level'
t=l.level
r=t||e.level
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"level",{hash:{}})}i+=v(r)+' has-submenu">\n        <a data-tag="TopicBrowserPulldown" class="menulink">'
t=l.translated_title
r=t||e.translated_title
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"translated_title",{hash:{}})}i+=v(r)+'\n        <i class="icon-chevron-right"></i>\n        <i class="icon-chevron-left"></i>\n        </a>\n        <div class="dropdown-menu no-submenus sub-menu-custom '
t=l.identifier
r=t||a.identifier
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"...identifier",{hash:{}})}i+=v(r)+' domain-color">\n          <div class="submenu-title">'
t=l.href
r=t||e.href
s=l["if"]
f=h.program(16,G,n)
f.hash={}
f.fn=f
f.inverse=h.noop
r=s.call(e,r,f)
if(r||r===0){i+=r}t=l.translated_title
r=t||e.translated_title
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"translated_title",{hash:{}})}i+=v(r)
t=l.href
r=t||e.href
s=l["if"]
f=h.program(18,M,n)
f.hash={}
f.fn=f
f.inverse=h.noop
r=s.call(e,r,f)
if(r||r===0){i+=r}t=l.include_knowledgemap_link
r=t||e.include_knowledgemap_link
s=l["if"]
f=h.program(20,P,n)
f.hash={}
f.fn=f
f.inverse=h.noop
r=s.call(e,r,f)
if(r||r===0){i+=r}i+='</div>\n          <ul class="clearfix">\n          '
t=l.reordered_children
r=t||e.reordered_children
s=l.each
f=h.programWithDepth(D,n,e)
f.hash={}
f.fn=f
f.inverse=h.noop
r=s.call(e,r,f)
if(r||r===0){i+=r}i+="\n          </ul>\n        </div>\n      </li>\n    "
return i}function G(e,n){var a="",i
a+='<a href="'
t=l.href
i=t||e.href
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=u.call(e,"href",{hash:{}})}a+=v(i)+'">'
return a}function M(e,n){return"</a>"}function P(e,n){var a="",i
a+='<a href="/exercisedashboard" class="km-link">'
t=l["_"]
i=t||e["_"]
f=h.program(21,T,n)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof i===c){i=i.call(e,f)}else{i=d.call(e,i,f)}if(i||i===0){a+=i}a+="</a>"
return a}function T(e,n){return"Knowledge Map"}function D(e,n,a){var i="",r,s
i+='\n            <li class="level'
t=l.level
r=t||e.level
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"level",{hash:{}})}i+=v(r)+" "
t=l.identifier
r=t||a.identifier
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"...identifier",{hash:{}})}i+=v(r)+" "
t=l.has_divider
r=t||e.has_divider
s=l["if"]
f=h.program(24,I,n)
f.hash={}
f.fn=f
f.inverse=h.noop
r=s.call(e,r,f)
if(r||r===0){i+=r}i+='">\n              <a '
t=l.href
r=t||e.href
s=l["if"]
f=h.program(26,K,n)
f.hash={}
f.fn=f
f.inverse=h.noop
r=s.call(e,r,f)
if(r||r===0){i+=r}i+=' data-tag="TopicBrowserPulldown" class="menulink">'
t=l.translated_title
r=t||e.translated_title
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=u.call(e,"translated_title",{hash:{}})}i+=v(r)+"</a>\n            </li>\n          "
return i}function I(e,n){return" has-divider"}function K(e,n){var a="",i
a+='href="'
t=l.href
i=t||e.href
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=u.call(e,"href",{hash:{}})}a+=v(i)+'"'
return a}function W(e,n){var a="",i,r
a+='\n      <li class="level'
t=l.level
i=t||e.level
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=u.call(e,"level",{hash:{}})}a+=v(i)
t=l.has_divider
i=t||e.has_divider
r=l["if"]
f=h.program(29,E,n)
f.hash={}
f.fn=f
f.inverse=h.noop
i=r.call(e,i,f)
if(i||i===0){a+=i}a+='">\n        <a '
t=l.href
i=t||e.href
r=l["if"]
f=h.program(31,j,n)
f.hash={}
f.fn=f
f.inverse=h.noop
i=r.call(e,i,f)
if(i||i===0){a+=i}a+=' data-tag="TopicBrowserPulldown" class="menulink">'
t=l.translated_title
i=t||e.translated_title
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=u.call(e,"translated_title",{hash:{}})}a+=v(i)+"</a>\n      </li>\n    "
return a}function E(e,n){return" has-divider"}function j(e,n){var a="",i
a+='href="'
t=l.href
i=t||e.href
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=u.call(e,"href",{hash:{}})}a+=v(i)+'"'
return a}function q(e,n){return"Browse all"}r+="\n\n"
r+='\n<ul class="topic-browser-menu dropdown-menu new none-active" data-role="listview" data-inset="true">\n\n  '
r+='\n  <li>\n    <a href="/" class="menulink">\n      '
t=l.signedIn
s=t||n.signedIn
o=l["if"]
f=h.program(1,m,i)
f.hash={}
f.fn=f
f.inverse=h.program(4,_,i)
s=o.call(n,s,f)
if(s||s===0){r+=s}r+='\n    </a>\n  </li>\n  <li>\n    <a href="/exercisedashboard" class="menulink">'
t=l["_"]
s=t||n["_"]
f=h.program(7,y,i)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof s===c){s=s.call(n,f)}else{s=d.call(n,s,f)}if(s||s===0){r+=s}r+="</a>\n  </li>\n  "
t=l.hasGoals
s=t||n.hasGoals
o=l["if"]
f=h.program(9,b,i)
f.hash={}
f.fn=f
f.inverse=h.noop
s=o.call(n,s,f)
if(s||s===0){r+=s}r+='\n  <li class="has-divider"></li>\n\n  '
r+="\n  "
t=l.topics
s=t||n.topics
o=l.each
f=h.program(14,H,i)
f.hash={}
f.fn=f
f.inverse=h.noop
s=o.call(n,s,f)
if(s||s===0){r+=s}r+="\n\n  "
r+='\n  <li class="has-divider"></li>\n  <li>\n    <a href="/library" data-tag="TopicBrowserPulldownBrowse" class="menulink">'
t=l["_"]
s=t||n["_"]
f=h.program(33,q,i)
f.hash={}
f.fn=f
f.inverse=h.noop
if(t&&typeof s===c){s=s.call(n,f)}else{s=d.call(n,s,f)}if(s||s===0){r+=s}r+="</a>\n  </li>\n</ul>\n\n"
return r})})()
;
(function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["shared-package_video-transcript"]=t(function(t,a,e,s,i){e=e||t.helpers
var l="",n,r,o,f,p=this,c="function",h=e.helperMissing,m=void 0,d=this.escapeExpression
function u(t,a){var s="",i,l
s+="\n            "
o=e.ka_is_valid
i=o||t.ka_is_valid
l=e["if"]
f=p.program(2,v,a)
f.hash={}
f.fn=f
f.inverse=p.noop
i=l.call(t,i,f)
if(i||i===0){s+=i}s+="\n        "
return s}function v(t,a){var s="",i,l
s+='\n            <li data-milliseconds="'
o=e.start_time
i=o||t.start_time
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===m){i=h.call(t,"start_time",{hash:{}})}s+=d(i)+'">\n                <a href="javascript:void(0)" data-fmttime="'
o=e.start_time
i=o||t.start_time
o=e.formatTimestamp
l=o||t.formatTimestamp
if(typeof l===c){i=l.call(t,i,{hash:{}})}else if(l===m){i=h.call(t,"formatTimestamp",i,{hash:{}})}else{i=l}s+=d(i)+'">'
o=e.text
i=o||t.text
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===m){i=h.call(t,"text",{hash:{}})}s+=d(i)+"</a>\n            </li>\n            "
return s}l+='<div class="subtitles-container desktop-only">\n    <ul itemprop="transcript" class="subtitles">\n        '
o=e.subtitles
n=o||a.subtitles
r=e.each
f=p.program(1,u,i)
f.hash={}
f.fn=f
f.inverse=p.noop
n=r.call(a,n,f)
if(n||n===0){l+=n}l+="\n    </ul>\n</div>\n"
return l})})()
;
(function(){Handlebars.registerHelper("opttr",function(e){var r=[]
_.each(e.hash,function(e,n){if(e!==null&&e!==undefined){r.push(n+'="'+Handlebars.Utils.escapeExpression(e)+'"')}})
return new Handlebars.SafeString(r.join(" "))})
Handlebars.registerHelper("debug",function(e,r){console.log("Handlebars debug: ",e)})
Handlebars.registerHelper("repeat",function(e,r){var n=r.fn
var t=""
for(var a=0;a<e;a++){t=t+n(this)}return t})
Handlebars.registerHelper("eachWithMidpoint",function(e,r){var n=[]
var t=r.fn
if(e){var a=Math.floor((e.length+1)/2)
for(var s=0;s<e.length;s++){e[s]["midpoint"]=s===a
n.push(t(e[s]))}}return n.join("")})
window.serialCommafy=function(e,r){if(!_.isArray(e)){return r}var n=e.length
if(n===0){return r}else if(n===1){return e[0].toString()}else if(n===2){return $._("%(item1)s and %(item2)s",{item1:e[0].toString(),item2:e[1].toString()})}else{return $._("%(items_with_commas)s, and %(last_item)s",{items_with_commas:e.slice(0,n-1).join(", "),last_item:e[n-1].toString()})}}
Handlebars.registerHelper("serialCommafy",serialCommafy)
Handlebars.registerHelper("_",i18n.handlebars_underscore)
Handlebars.registerHelper("i18nDoNotTranslate",i18n.handlebars_do_not_translate)
Handlebars.registerHelper("ngettext",i18n.handlebars_ngettext)
Handlebars.registerHelper("reverseEach",function(e,r){var n=""
for(var t=e.length-1;t>=0;t--){n+=r(e[t])}return n})
Handlebars.registerHelper("invokePartial",function(e,r,n){var t=e+"."+r
var a=Templates.get(t),s=n.hash
return a(s)})
Handlebars.registerHelper("toBingoHref",function(e){var r=_.toArray(arguments).slice(1,arguments.length-1)
return gae_bingo.create_redirect_url.call(null,e,r)})
Handlebars.registerHelper("multiply",function(e,r){return e*r})
Handlebars.registerHelper("toLoginRedirectHref",function(e){return"/login?continue="+encodeURIComponent(e)})
Handlebars.registerHelper("commafy",function(e){return icu.getIntegerFormat().format(e)})
Handlebars.registerHelper("ellipsis",function(e,r){var n=(e||"").replace(/(<([^>]+)>)/gi,"")
if(n.length<r){return n}else{return n.substr(0,r-3)+"..."}})
var e=function(e,r,n){var t=60*parseInt(r,10)+parseInt(n,10)
return"<span class='youTube' data-seconds='"+t+"'>"+e+"</span>"}
window.formatContent=function(r,n){r=Handlebars.Utils.escapeExpression(r)
var t=/(\d{1,3}):([0-5]\d)/g
r=r.replace(t,e)
var a=/[\n]/g
r=r.replace(a,"<br>")
r=r.replace(/(\W|^)_(\S.*?\S)_(\W|$)/g,function(e,r,n,t){return r+"<em>"+n+"</em>"+t})
r=r.replace(/(\W|^)\*(\b.*?\b)\*(\W|$)/g,function(e,r,n,t){return r+"<b>"+n+"</b>"+t})
r=r.replace(/&#x60;&#x60;&#x60;(.*?)&#x60;&#x60;&#x60;/gm,function(e,r){r=r.replace(/^\s*(<br>)+/,"")
r=r.replace(/(<br>)+\s*$/,"")
return"<pre><code>"+r+"</code></pre>"})
r=r.replace(/&#x60;(.*?)&#x60;/g,function(e,r){return"<code>"+r+"</code>"})
r=Autolink.autolink(r,n)
return r}
Handlebars.registerHelper("formatContent",function(e,r){return new Handlebars.SafeString(formatContent(e,!!(r&&r.hash.nofollow)))})
Handlebars.registerHelper("arrayLength",function(e){return e.length})
Handlebars.registerHelper("ifLoggedIn",function(e){if(KA.getUserProfile()&&!KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("ifPhantom",function(e){if(!KA.getUserProfile()||KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("urlencode",function(e){return encodeURIComponent(e)})
Handlebars.registerHelper("formatTimestamp",function(e){var r=e/1e3
var n=parseInt(r)%60
if(n<10){n="0"+n}return parseInt(r/60)+":"+n})
window.stripProtocol=function(e){if(!e){return e}if(e.indexOf("http://")===0){return e.substring(5)}else if(e.indexOf("https://")===0){return e.substring(6)}return e}
Handlebars.registerHelper("stripProtocol",stripProtocol)
Handlebars.registerPartial("shared_small-exercise-icon",Templates.get("shared.small-exercise-icon"))
Handlebars.registerPartial("shared_share-links",Templates.get("shared.share-links"))
Handlebars.registerPartial("shared_badge",Templates.get("shared.badge"))
Handlebars.registerPartial("shared_progress-icon",Templates.get("shared.progress-icon"))
Handlebars.registerPartial("shared_throbber-grid",Templates.get("shared.throbber-grid"))
Handlebars.registerHelper("if_GANDALF_COMMUNITY_SUPPORT",function(e){var r=window.KA||{}
if(r.GANDALF_COMMUNITY_SUPPORT){return e.fn(this)}else{return e.inverse(this)}})})()
;
window.ProfileModel=Backbone.Model.extend({defaults:{avatarName:"darth",avatarSrc:"/images/darth.png",bio:"",countVideosCompleted:0,dateJoined:"",email:"",isCoachingLoggedInUser:false,isParentOfLoggedInUser:false,isActivityAccessible:false,nickname:"",points:0,username:"",isDataCollectible:false,isSelf:false,isPublic:false,followRequiresApproval:true},url:"/api/v1/user/profile",isPhantom:function(){var e=this.get("email")
return e&&e.indexOf(ProfileModel.PHANTOM_EMAIL_PREFIX)===0},isPrivate:function(){return this.get("isActivityAccessible")===false&&this.get("isPublic")===false},isActivityAccessible:function(){return this.get("isActivityAccessible")},getIdentifier:function(){return this.get("username")||this.get("email")},isEditable:function(){return this.get("isSelf")&&!this.isPhantom()},isFullyEditable:function(){return this.isEditable()&&this.get("isDataCollectible")},toJSON:function(){var e=ProfileModel.__super__.toJSON.call(this)
e["isPhantom"]=this.isPhantom()
e["isEditable"]=this.isEditable()
e["isFullyEditable"]=this.isFullyEditable()
return e},getIfUndefined:function(e,i){if(e&&e[i]!==undefined){return e[i]}return this.get(i)},save:function(e,i){i=i||{}
i.contentType="application/json"
i.data=JSON.stringify({userKey:this.getIfUndefined(e,"userKey"),avatarName:this.getIfUndefined(e,"avatarName"),bio:this.getIfUndefined(e,"bio"),nickname:$.trim(this.getIfUndefined(e,"nickname")),username:this.getIfUndefined(e,"username"),isPublic:this.getIfUndefined(e,"isPublic")})
var t=i.success
i.success=function(e,i){e.trigger("savesuccess")
if(t){t(e,i)}}
Backbone.Model.prototype.save.call(this,e,i)},parse:function(e,i){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}Backbone.Model.prototype.parse.call(this,e,i)},validateNickname:function(e){this.trigger("validate:nickname",$.trim(e).length>0)},validateUsername:function(e){if(e===this.get("username")){this.trigger("validate:username")
return}e=e.toLowerCase().replace(/\./g,"")
if(/^[a-z][a-z0-9]{2,}$/.test(e)){$.ajax({url:"/api/v1/user/username_available",type:"GET",data:{username:e},dataType:"json",success:_.bind(this.onValidateUsernameResponse_,this)})}else{var i=""
if(e.length<3){i=$._("Too short.")}else if(/^[^a-z]/.test(e)){i=$._("Start with a letter.")}else{i=$._("Letters and numbers only.")}this.trigger("validate:username",i,false)}},onValidateUsernameResponse_:function(e){var i=e?$._("Looks good!"):$._("Not available.")
this.trigger("validate:username",i,e)}})
ProfileModel.PHANTOM_EMAIL_PREFIX="http://nouserid.khanacademy.org/"
;
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["shared-package_youtube-iframe-player"]=e(function(e,a,t,l,n){t=t||e.helpers
var s="",o,i,h,r,u=this,d="function",f=t.helperMissing,c=void 0,p=this.escapeExpression
function b(e,a){var l="",n
l+='\n    data-topicid="'
h=t.topicId
n=h||e.topicId
if(typeof n===d){n=n.call(e,{hash:{}})}else if(n===c){n=f.call(e,"topicId",{hash:{}})}l+=p(n)+'"\n    '
return l}function y(e,a){return"1"}function m(e,a){return"0"}s+='<iframe\n    class="player"\n    type="text/html"\n    width="'
h=t.width
o=h||a.width
if(typeof o===d){o=o.call(a,{hash:{}})}else if(o===c){o=f.call(a,"width",{hash:{}})}s+=p(o)+'"\n    height="'
h=t.height
o=h||a.height
if(typeof o===d){o=o.call(a,{hash:{}})}else if(o===c){o=f.call(a,"height",{hash:{}})}s+=p(o)+'"\n    data-youtubeid="'
h=t.youtubeId
o=h||a.youtubeId
if(typeof o===d){o=o.call(a,{hash:{}})}else if(o===c){o=f.call(a,"youtubeId",{hash:{}})}s+=p(o)+'"\n    data-translatedyoutubeid="'
h=t.translatedYoutubeId
o=h||a.translatedYoutubeId
if(typeof o===d){o=o.call(a,{hash:{}})}else if(o===c){o=f.call(a,"translatedYoutubeId",{hash:{}})}s+=p(o)+'"\n    data-translatedyoutubelang="'
h=t.translatedYoutubeLang
o=h||a.translatedYoutubeLang
if(typeof o===d){o=o.call(a,{hash:{}})}else if(o===c){o=f.call(a,"translatedYoutubeLang",{hash:{}})}s+=p(o)+'"\n    '
h=t.topicId
o=h||a.topicId
i=t["if"]
r=u.program(1,b,n)
r.hash={}
r.fn=r
r.inverse=u.noop
o=i.call(a,o,r)
if(o||o===0){s+=o}s+='\n    src="https://www.youtube.com/embed/'
h=t.translatedYoutubeId
o=h||a.translatedYoutubeId
if(typeof o===d){o=o.call(a,{hash:{}})}else if(o===c){o=f.call(a,"translatedYoutubeId",{hash:{}})}s+=p(o)+"?enablejsapi=1&wmode=transparent&modestbranding=1&rel=0&fs=1&showinfo="
h=t.showInfo
o=h||a.showInfo
i=t["if"]
r=u.program(3,y,n)
r.hash={}
r.fn=r
r.inverse=u.program(5,m,n)
o=i.call(a,o,r)
if(o||o===0){s+=o}s+='"\n    frameborder="0"\n    allowfullscreen\n    webkitallowfullscreen\n    mozallowfullscreen\n ></iframe>\n'
return s})})()
;
window.Poppler=function(){function t(){this.events=[]
this.duration=-1
this.eventIndex=0
this.indicesById={}
this.began=false
this.blocked=false
_.bindAll(this)}t.timeFn=function(t){return t.time}
t.nextPeriod=function(t,e){return Math.round(Math.floor(t/e+1))*e}
t.prototype.add=function(e,i,n){i.time=e
i.id=n
var s=_.sortedIndex(this.events,i,t.timeFn)
while(this.events[s]&&this.events[s].time===e){s++}this.events.splice(s,0,i)}
t.prototype.begin=function(){this.began=true
this.indicesById=_.reduce(this.events,function(t,e,i){t[e.id]=i
return t},{})}
t.prototype.trigger=function e(t){if(!this.began){this.begin()}if(this.blocked){return}if(this.duration!==-1){var e=t-this.duration
var i=.001
if(Math.abs(e)<i){return}var n=1
if(Math.abs(e)>n){return}}this.duration=t
this._triggerEvents()}
t.prototype._triggerEvents=function(){var t=this.eventIndex
while(this.events[this.eventIndex]&&this.events[this.eventIndex].time<=this.duration){var e=this.events[this.eventIndex]()
this.eventIndex++
if(e){this.blocked=true
break}}return t!==this.eventIndex}
t.prototype.resumeEvents=function(){this.blocked=false
return this._triggerEvents()}
t.prototype.seek=function(e){if(!this.began){this.begin()}this.duration=e
this.eventIndex=_.sortedIndex(this.events,{time:this.duration},t.timeFn)
KAConsole.log("Poppler.seek, duration:",this.duration,"eventIndex:",this.eventIndex)}
t.prototype.seekToId=function(t){if(!this.began){this.begin()}var e=this.indicesById[t]
if(e==null){throw new Error("No event found with id"+t)}var i=this.events[e]
this.duration=i.time
this.eventIndex=e
KAConsole.log("Poppler.seekToId, duration:",this.duration,"eventIndex:",this.eventIndex)}
return t}()
;
window.VideoPlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,VIDEO_CUED:5}
window.VideoPlayerStateName={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"cued"}
window.VideoControls={autoPlayEnabled:false,autoPlayCallback:null,continuousPlayButton:null,initContinuousPlayLinks:function(e){this.continuousPlayButton=$("a.continuous-play",e)
this.continuousPlayButton.click(function(){VideoControls.setAutoPlayEnabled(!VideoControls.autoPlayEnabled)})
this.setAutoPlayEnabled(VideoControls.autoPlayEnabled)},setAutoPlayEnabled:function(e){this.autoPlayEnabled=e
this.continuousPlayButton.toggleClass("green",e)
if(e){this.continuousPlayButton.html($._("Continuous play is ON"))}else{this.continuousPlayButton.html($._("Continuous play is OFF"))}},setAutoPlayCallback:function(e){this.autoPlayCallback=e},initThumbnails:function(){$("#thumbnails").cycle({fx:"scrollHorz",timeout:0,speed:550,slideResize:0,easing:"easeInOutBack",startingSlide:0,prev:"#arrow-left",next:"#arrow-right",before:function(){$(this).find("div.pending").each(function(){$(this).css("background-image","url('"+$(this).data("src")+"')")})}}).css({width:""})
this.initThumbnailHover($("#thumbnails").find(".thumbnail_td"))},initThumbnailHover:function(e){var t={duration:150,queue:false}
e.hover(function(){$(this).find(".thumbnail_label").animate({marginTop:-78},t).end().find(".thumbnail_teaser").animate({height:45},t)},function(){$(this).find(".thumbnail_label").animate({marginTop:-32},t).end().find(".thumbnail_teaser").animate({height:0},t)})},thumbnailClick:function(){var e=$(this).parents("td").first()
var t=e.attr("data-youtube-id")
if(t){VideoControls.playVideo(t,e.attr("data-key"),true)
$("#thumbnails td.selected").removeClass("selected")
e.addClass("selected")
return false}},playVideo:function(e,t,i){if(VideoControls.player&&e){if(i||this.autoPlayEnabled){VideoControls.player.loadVideoById(e,0,"default")}else{VideoControls.player.cueVideoById(e,0,"default")}VideoControls.scrollToPlayer()}}}
window.requireYouTubeAPI=function(){if(!requireYouTubeAPI._scriptPromise){requireYouTubeAPI._scriptPromise=$.getScript("//www.youtube.com/player_api").then(function(){KAConsole.log("Executed YouTube iframe API script")})}if(!requireYouTubeAPI._APIReadyPromise){requireYouTubeAPI._APIReadyPromise=$.Deferred()
requireYouTubeAPI._APIReadyPromise.then(function(){KAConsole.log("YouTube iframe API is ready")})}return requireYouTubeAPI._APIReadyPromise}
window.onYouTubeIframeAPIReady=function(){if(!requireYouTubeAPI._scriptPromise){throw new Error("Unencapsulated request for YouTube iframe API detected")}requireYouTubeAPI().resolve()}
requireYouTubeAPI().then(function(){$(".video-basic iframe.player").each(function(e,t){var i=$(t).attr("data-youtubeid")
var a=$(t).parents(".video-basic")
if(!i){throw new Error("The 'data-youtubeid' attribute must be specified for iframe players")}new BasicVideoView({youtubeId:i,el:a})})})
window.VideoPlayerModel=Backbone.Model.extend({MIN_SECONDS_BETWEEN_SAVES:30,MIN_PERCENT_BETWEEN_SAVES:.1,MIN_SECONDS_BETWEEN_SAVES_PHANTOM:60,MIN_PERCENT_BETWEEN_SAVES_PHANTOM:.25,REQUIRED_PERCENT_FOR_FULL_POINTS:.9,defaults:{percentLastSaved:0,secondsWatchedSinceSave:0,timeAtLastPoll:0,width:800,height:480,isEmbedded:false,points:0,possiblePoints:750,videoKey:"",youtubeId:"0",playbackSpeedAvailable:false,playerState:VideoPlayerState.UNSTARTED,isPhantom:false,showOptions:true,showPoints:true,showInfo:true,showShare:true,transcriptAvailable:false,topicID:undefined},initialize:function(){_.bindAll(this)
this.set({wallTimeLastSaved:new Date})
if(this.get("isPhantom")){this.set({secondsBetweenSaves:this.MIN_SECONDS_BETWEEN_SAVES_PHANTOM,percentBetweenSaves:this.MIN_PERCENT_BETWEEN_SAVES_PHANTOM,maxConsecutiveFailures:3})}else{this.set({secondsBetweenSaves:this.MIN_SECONDS_BETWEEN_SAVES,percentBetweenSaves:this.MIN_PERCENT_BETWEEN_SAVES,maxConsecutiveFailures:Infinity})}this.consecutiveFailures=0},fetch:function(){return $.ajax({type:"GET",url:this.url(),data:{casing:"camel",videoKey:this.get("videoKey")},success:this._handleResults})},save:function(){var e=this
if(this.saving){return}if(!areCookiesEnabled()){KAConsole.log("Cookies seem to be disabled. Not logging progress.")
return}if(this.consecutiveFailures>=this.get("maxConsecutiveFailures")){KAConsole.log("Not sending video log due to too many failures")
return}this.saving=true
this._updateSecondsWatchedSinceSave()
var t=this.get("wallTimeLastSaved")
var i={casing:"camel",last_second_watched:this.getVideoPosition(),seconds_watched:this.get("secondsWatchedSinceSave"),topic_id:this.get("topicID"),hostpage:this.get("hostpage")}
if(this.get("videoKey")){i.videoKey=this.get("videoKey")}if(this.get("videoTaskKey")){i.video_task_key=this.get("videoTaskKey")}var a=$.ajax({type:"GET",url:this.url("log_compatability"),data:i,success:function(t){if(!t){return}e.consecutiveFailures=0
e._finishSave(t.actionResults.userVideo)},error:function(){e.set({wallTimeLastSaved:t})
e.consecutiveFailures+=1},complete:function(){e.saving=false}})
this.set({wallTimeLastSaved:new Date,percentLastSaved:this.getPercentWatched(),secondsWatchedSinceSave:0})
return a},_finishSave:function(e){this.pointsSaved=e.points
this._handleResults(e)
if(e.complete){Analytics.trackSingleEvent("Video Complete",this.getAnalyticsParameters())}},_handleResults:function(e){_.extend(e,e.video)
e.video_path=e.downloadUrls&&e.downloadUrls.mp4||""
this.pointsSaved=e.points
if(e.points<this.get("points")){delete e.points}if(e.hasQuestions){$.ajax({type:"GET",url:"/labs/socrates_abtest",success:this._handleAbTest})}else{e.socratesAvailable=false
e.socratesEnabled=false}this.set(e)},_handleAbTest:function(e){if(e){this.set({socratesEnabled:true})}else{this.set({socratesEnabled:false})}},url:function(e){var t="/api/v1/user/videos/"+encodeURIComponent(this.get("youtubeId"))
if(e){t+="/"+e}return t},getAnalyticsParameters:function(){return{"Video ID":this.get("videoKey")||this.get("youtubeId"),"Video Title":this.get("title"),"Video Topic ID":this.get("topicID")}},getVideoPosition:function(){if(!this.player||!this.player.getCurrentTime){return 0}return this.player.getCurrentTime()||0},_updateSecondsWatchedSinceSave:function(){var e=new Date
var t=(e-this.get("wallTimeLastPoll"))/1e3
this.set("wallTimeLastPoll",e)
var i=this.getVideoPosition()
var a=i-this.get("videoPositionLastPoll")
this.set("videoPositionLastPoll",i)
var s=Math.max(0,Math.min(2,a/t))
var n=t*s
var o=this.get("secondsWatchedSinceSave")
if(n>0){o+=n
this.set("secondsWatchedSinceSave",o)}return o},_updatePointsEstimate:function(){var e=this.getDuration()
if(e===0){return}var t=this.get("secondsWatchedSinceSave")
var i=Math.min(1,t/e)
var a=i+this.pointsSaved/this.get("possiblePoints")
if(a>this.REQUIRED_PERCENT_FOR_FULL_POINTS){a=1}var s=Math.floor(this.get("possiblePoints")*a)
if(s<this.get("points")){return}this.set({points:s})},_isAutoSaveIntervalExceeded:function(){var e=this.getDuration()*this.get("percentBetweenSaves")
var t=Math.min(e,this.get("secondsBetweenSaves"))
return this.get("secondsWatchedSinceSave")>t},updateAndSaveIfNeeded:function(){this._updateSecondsWatchedSinceSave()
if(this._isAutoSaveIntervalExceeded()){this.save()}else{var e=this.getPercentWatched()
var t=this.get("percentLastSaved")
var i=this.REQUIRED_PERCENT_FOR_FULL_POINTS
if(t<i&&e>=i){this.save()}else{this._updatePointsEstimate()}}},getPercentWatched:function(){var e=this.getDuration()
if(e===0){return 0}return Math.min(1,this.getVideoPosition()/e)},getDuration:function(){if(this.player==null||this.player.getDuration==null){return 0}var e=this.player.getDuration()||this.get("duration")||0
return Math.max(0,e)},setPlayerState:function(e){this._updateSecondsWatchedSinceSave()
this._updatePointsEstimate()
var t=this.get("playerState")
this.set({playerState:e})
if(t===VideoPlayerState.PLAYING&&e===VideoPlayerState.PLAYING){this.trigger("change:playerState")}if(e===VideoPlayerState.ENDED){this.save()}else if(e===VideoPlayerState.PAUSED){if(this.get("secondsWatchedSinceSave")>1){this.save()}}this._logAnalyticsActivity(e)
this._logAnalyticsPlayPercent(e)},_logAnalyticsActivity:function(e){if(e===VideoPlayerState.ENDED){if(this.analyticsActivity){this.analyticsActivity.parameters["Percent (end)"]=this.get("percentLastSaved")
Analytics.trackActivityEnd(this.analyticsActivity)
this.analyticsActivity=null}}else if(e===VideoPlayerState.PAUSED){if(this.analyticsActivity){this.analyticsActivity.parameters["Percent (end)"]=this.get("percentLastSaved")
Analytics.trackActivityEnd(this.analyticsActivity)
this.analyticsActivity=null}}else if(e===VideoPlayerState.PLAYING){if(!this.analyticsActivity){var t=this.getAnalyticsParameters()
t["Percent (begin)"]=this.get("percentLastSaved")
this.analyticsActivity=Analytics.trackActivityBegin("Video Play",t)}}},_logAnalyticsPlayPercent:function(){if(this.analyticsPercentTimer){window.clearInterval(this.analyticsPercentTimer)}if(this.get("playerState")!==VideoPlayerState.PLAYING){return}if(!this.analyticsTrackedPercent){this.analyticsTrackedPercent={}}var e=Math.floor(this.getPercentWatched()*100)
if(e>0&&e%10===0&&!this.analyticsTrackedPercent[e]){this.analyticsTrackedPercent[e]=true
Analytics.trackSingleEvent("Video Play Progress -"+e+"%",this.getAnalyticsParameters())}this.analyticsPercentTimer=window.setInterval(this._logAnalyticsPlayPercent,1e3)}})
window.videoViews={views:{},callbacks:{},getWhenReady:function(e,t){if(this.views[e]){var i=this.views[e]
i.whenReady().then(function(){t(i)})}else{this.callbacks[e]=this.callbacks[e]||[]
this.callbacks[e].push(t)}},getWhenReadyDeferred:function(e){var t=new $.Deferred
this.getWhenReady(e,function(e){t.resolve(e)})
return t.promise()},get:function(e){return this.views[e]},at:function(e){var t=_.map(this.views,function(e,t){return t})
return this.views[t[e]]||null},set:function(e,t){this.views[e]=t
t.whenReady().then(_(function(){_.each(this.callbacks[e],function(e){e(t)})
_.each(this.callbacks["any"],function(e){e(t)})}).bind(this))},remove:function(e){delete this.views[e]},each:function(e){_.each(this.views,function(t){t.whenReady().then(function(){e(t)})})},eachWhenReady:function(e){this.each(e)
this.getWhenReady("any",e)}}
window.BasicVideoView=Backbone.View.extend({_readyDeferred:null,_poppler:null,_delayedCallbacks:null,initialize:function(){this._readyDeferred=new $.Deferred
this._delayedCallbacks=[]
_.bindAll(this)
this.playerApiId=this.options.youtubeId
videoViews.set(this.playerApiId,this)
this._initializeModel()
this.playerView=new YoutubeIFramePlayerView({model:this.model,el:this.el,videoView:this})
this._beginIntervalUpdate()
this._initTimestampJumps()
this._initPlaceholder()
this._initializeEventListeners()},render:function(){this.playerView.render()},_initTimestampJumps:function(e){$(e||"body").on("click",".youTube",this.clickYouTubeJump)
this.whenReady().then(_(function(){if(this.options.timestamp!=null){this.playFrom(this.options.timestamp)}}).bind(this))},_initializeModel:function(){var e=KA.getUserProfile()
var t=_.extend({playerApiId:this.playerApiId,isPhantom:!e||e.isPhantom()},this.options)
this.model=new VideoPlayerModel(t)
if(this.options.videoQuality){this.whenReady().then(_(function(){this.setPlaybackQuality(this.options.videoQuality)}).bind(this))}},_initializeEventListeners:function(){this.whenReady().then(function(){$(KA).trigger("contentLoaded")})
this.model.bind("change:playerState",_.bind(function(){var e=this.model.previous("playerState")
var t=VideoPlayerStateName[e]
var i=this.model.get("playerState")
var a=window.VideoPlayerStateName[i]
KAConsole.log("VideoView: playerState "+t+" -> "+a)
this.trigger("stateChange",i,e)
this.trigger(a,t)},this))
this._initializePoppler()},_initializePoppler:function(){this._poppler=new Poppler
this.once("playing",_.bind(this._recursiveTrigger,this,_.bind(this._poppler.trigger,this.poppler))).on("playing",function(){if(this._popplerIgnoresNextPlay){this._popplerIgnoresNextPlay=false}else{this._poppler.seek(this.model.getVideoPosition())}},this).on("buffering",function(){this._popplerIgnoresNextPlay=true},this).on("paused",function(e){if(e==="unstarted"){this._poppler.seek(this.model.getVideoPosition())}else{this._popplerIgnoresNextPlay=false}},this)},_recursiveTrigger:function(e){var t=this.model.getVideoPosition()
e(t)
t=this.model.getVideoPosition()
var i=(Poppler.nextPeriod(t,.1)-t)*1e3
_.delay(this._recursiveTrigger,i,e)
while(this._delayedCallbacks.length>0&&t>=this._delayedCallbacks[0].seconds){var a=this._delayedCallbacks.shift()
a.callback(t)}},_beginIntervalUpdate:function(){if(this.intervalId){clearInterval(this.intervalId)}this.intervalId=setInterval(this.model.updateAndSaveIfNeeded,1e4)},whenReady:function(){if(!this._readyDeferredPromise){this._readyDeferredPromise=this._readyDeferred.promise()}return this._readyDeferredPromise},whenDurationNonzero:function(e){var t=this
var i=this.model.getDuration()
if(i>0){e(i)
return}this.on("playing",_.once(function(){t.whenDurationNonzero(e)}))},playerReady:function(){this._readyDeferred.resolve(this)
var e=[.25,.5,1,1.5,2]
var t=this.getAvailablePlaybackRates()
var i=_.every(e,function(e){return _.contains(t,e)})
if(i){this.model.set({playbackSpeedAvailable:true})}},play:function(e,t){e=_.defaults(e||{},{silent:false})
if(this.model.player&&this.model.player.playVideo){if(t){this.once("playing",t)}if(e.silent){this._popplerIgnoresNextPlay=true}this.model.player.playVideo()}},pause:function(e){if(this.model.player&&this.model.player.pauseVideo){if(this.isPaused()||this.isUnstarted()){if(e){e.call()}}else{if(e){this.once("paused",e)}this.model.player.pauseVideo()}}},setPlaybackQuality:function(e){if(this.model.player&&this.model.player.setPlaybackQuality){this.model.player.setPlaybackQuality(e)}},getPlaybackRate:function(){if(this.model.player&&this.model.player.getPlaybackRate){return this.model.player.getPlaybackRate()}},getAvailablePlaybackRates:function(){if(this.model.player&&this.model.player.getAvailablePlaybackRates){return this.model.player.getAvailablePlaybackRates()}},setPlaybackRate:function(e){if(this.model.player&&this.model.player.setPlaybackRate){this.model.player.setPlaybackRate(e)}},clickYouTubeJump:function(e){var t=$(e.target).data("seconds")
if(this.model.player&&t){this.playFrom(Math.max(0,t-2))
this.scrollToPlayer()}},_preseek:function(e){var t=this.model.player.getPlayerState()
if(t===VideoPlayerState.UNSTARTED){this._poppler.blocked=true
this.play({silent:true},_.bind(this.pause,this,_(function(){this._poppler.blocked=false
e()}).bind(this)))}else{e()}},_afterSeek:function(e,t){if(!t){return}var i=this.model
async.until(function(){return i.getVideoPosition()===e},function(e){_.delay(e,1)},t)},seekTo:function(e,t){KAConsole.log("seekTo")
this._preseek(_(function(){this.model.player.seekTo(e,true)
this._afterSeek(e,t)}).bind(this))},playFrom:function(e,t){KAConsole.log("playFrom")
var i=this.model.player.getPlayerState()
if(i===VideoPlayerState.PAUSED){var a=t
t=_(function(){this.play(null,a)}).bind(this)
this._afterSeek(e,t)}else if(i===VideoPlayerState.UNSTARTED&&t){this.once("playing",t)}this.model.player.seekTo(e,true)},seekToAfterId:function(e,t){KAConsole.log("seekToAfterId",e)
this._poppler.seekToId(e)
this._poppler.eventIndex++
var i=this._poppler.duration
this.seekTo(i,t)},scrollToPlayer:function(){var e=this.$(".player-container")
if(e.length===0){e=this.$el}var t=e.offset().top-2
if($(window).scrollTop()>t){$(window).scrollTop(t)}},playVideo:function(e,t,i){if(this.model.player&&e){if(i){this.model.player.loadVideoById(e,0,"default")}else{this.model.player.cueVideoById(e,0,"default")}this.scrollToPlayer()}},close:function(){if(this.intervalId){clearInterval(this.intervalId)}videoViews.remove(this.playerApiId)
this.remove()},_initPlaceholder:function(){var e=this
var t=this.$el.parents("#main-video-placeholder")
if(t.length===0){return}var i=t.find(".player-loading-wrapper")
t.click(function(t){if($(t.srcElement).hasClass("youtube-placeholder-title")){return true}e.play()
return false})
var a=true
this.on("playing",function(){if(a){a=false
i.css({left:0,top:0})
t.find(".youtube-play").hide()
t.find(".youtube-placeholder-title").hide()}})},onPositionChange:function(e){return this._recursiveTrigger(_.bind(function(){e(this.model.getVideoPosition())},this))},atSeconds:function(e,t,i){this._poppler.add(e,t,i)},atPercent:function(e,t){if(e>=100){this.on("ended",t)
return}this.whenDurationNonzero(_.bind(function(i){this.atSeconds(e/100*i,t)},this))},onceAfterSeconds:function(e,t){var i={seconds:e,callback:t}
var a=_.sortedIndex(this._delayedCallbacks,i,function(e){return e.seconds})
this._delayedCallbacks.splice(a,0,i)},onceAfterPercent:function(e,t){this.whenDurationNonzero(_.bind(function(i){this.onceAfterSeconds(e/100*i,t)},this))}})
_.each(window.VideoPlayerStateName,function(e,t){e=e.charAt(0).toUpperCase()+e.slice(1)
t=parseInt(t,10)
BasicVideoView.prototype["is"+e]=function(){return this.model.get("playerState")===t}})
_.extend(BasicVideoView.prototype,OnceMixin)
window.YoutubeIFramePlayerView=Backbone.View.extend({className:"player-container",template:Templates.get("shared.youtube-iframe-player"),initialize:function(){_.bindAll(this)
if(this.options.unrendered){this.render()}if(this.$("iframe").length===0){throw new Error("No iframe found in the iframe player; aborting.")}this.iframeId="iframePlayer_"+this.cid
this.$("iframe").attr("id",this.iframeId)
this.videoReadyDeferred=$.Deferred()
_.defer(_.bind(function(){requireYouTubeAPI().then(this._initializePlayer)},this))
this.model.set({playerType:"iframe"})},_initializePlayer:function(){if(!window.YT){KAConsole.log("YouTube API not ready, aborting this player and "+"hoping it will be replaced by the alternate player")
return}var e=this
this.model.player=new YT.Player(this.iframeId,{height:this.model.get("height"),width:this.model.get("width"),videoId:this.model.get("translatedYoutubeId"),events:{onReady:function(){e.options.videoView.playerReady()
e.videoReadyDeferred.resolve(e.model.player)},onStateChange:function(t){e.options.videoView.model.setPlayerState(t.data)}}})},render:function(){this.$el.html(this.template(this.model.attributes))},setSecond:function(e){this.videoReadyDeferred.done(function(t){t.seekTo(e,true)})}})
;
window.NavHeader={_renderedUserDropdown:false,_renderedNotificationsDropdown:false,init:function(e){this._userDropdownContext=_.extend({showSignUpToSave:true,showSettings:false},e)
updateDocumentTitle()},_userDropdownContext:null,renderNotificationsDropdown:function(){if(this._renderedNotificationsDropdown){return}var e=KA.getUserProfile(),o=e?e.get("countBrandNewNotifications"):0
$("#user-notifications").html(Templates.get("shared.notifications-dropdown")({count:o}))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
this._renderedNotificationsDropdown=true},renderUserDropdown:function(e){if(this._renderedUserDropdown){return}var o=KA.getUserProfile()
if(!o){return}var r=o.isPhantom()
if(r){o.set("nickname",$._("Unclaimed points"))}var n=Templates.get("shared.user-dropdown"),t={isPhantom:r,avatarSrc:o.get("avatarSrc"),nickname:o.get("nickname")}
_.extend(this._userDropdownContext,t,e)
if(!this._userDropdownContext["profileRoot"]){this._userDropdownContext["profileRoot"]=o.get("profileRoot")}$("#user-info").html(n(this._userDropdownContext))
var i={model:o,contentOnly:true,href:this._userDropdownContext["profileRoot"],el:$("#user-info .dropdown-menu .hover-card-link")},d=new HoverCardView(i)
d.render()
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
this._renderedUserDropdown=true}}
window.NavFooter={init:function(){if(!KA.isMobileCapable){var e=$("footer li.heading:first-child")
e.addClass("footer-scroll-cue")
e.on("click",function(){var e=$(document).height()-$(window).height()
$("html, body").animate({scrollTop:e},360,"easeInOutCubic")})}}}
;
window.HoverCard={_cache:{},_link:function(e,r){if(r!=null&&e.is("a")&&!e.attr("href")){var a="discussion"
if(e.hasClass("profile-programs")){a="programs"}e.attr("href",r+a)}},createHoverCardQtip:function(e,r){var a=$(e)
var t=a.data("user-id"),o=a.data("has-qtip")
if(!t||o){return}var i=HoverCard._cache[t],d
if(i!=null){d=i.html
var s=i.model.get("profileRoot")
HoverCard._link(a,s)}else{var n=new HoverCardView
d=n.render().el.innerHTML
$.ajax({type:"GET",url:"/api/v1/user/profile",data:{casing:"camel",userId:t},dataType:"json",success:_.bind(HoverCard._onHoverCardDataLoaded,this,a)})}a.data("has-qtip",true)
a.qtip({content:{text:d},style:{classes:"custom-override"},hide:{delay:100,fixed:true},position:r||{my:"top left",at:"bottom left"}})
a.qtip("show")},_onHoverCardDataLoaded:function(e,r){var a=e.data("user-id"),t=new ProfileModel(r)
if(e.attr("href")){t.set({href:e.attr("href")})}if(e.hasClass("profile-programs")){t.set({href:t.get("profileRoot")+"programs"})}var o=new HoverCardView({model:t}),i=o.render().el.innerHTML
HoverCard._cache[a]={model:t,html:i}
e.qtip("option","content.text",i)
var d=t.get("profileRoot")
HoverCard._link(e,d)}}
;
window.HoverCardView=Backbone.View.extend({initialize:function(e){this._options=e||{}
this.template=Templates.get("shared.hover-card")
if(this.model){this.model.bind("change",_.bind(this.render,this))}},render:function(){var e=this._options
if(this.model){_.extend(e,this.model.toJSON())
if(this.model.isPhantom()){e["nickname"]=$._("Unclaimed points")}if(this.model.get("username")==="sal"){e["isSal"]=true}if(this.model.isPrivate()){e["isPrivate"]=this.model.isPrivate()
e["messageOnly"]=true}}else{e["messageOnly"]=true}this.$el.html(this.template(e))
if(this.model&&this.model.isPhantom()){this.$(".join-date").hide()}else{this.$("abbr.timeago").timeago()}return this}})
;
(function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["shared-package_hover-card"]=n(function(n,a,e,i,s){e=e||n.helpers
var r="",l,o,t,c,f=this,h="function",p=e.helperMissing,v=void 0,d=this.escapeExpression,u=e.blockHelperMissing
function m(n,a){return"private"}function g(n,a){return'\n    <div class="hover-card-triangle"></div>\n    '}function y(n,a){return" vertical-shadow"}function b(n,a){var i="",s,r
i+='\n                <div class="hover-card-message">\n                    '
t=e.isPrivate
s=t||n.isPrivate
r=e["if"]
c=f.program(8,_,a)
c.hash={}
c.fn=c
c.inverse=f.program(11,k,a)
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                </div>\n            "
return i}function _(n,a){var i="",s
i+="\n                        "
t=e["_"]
s=t||n["_"]
c=f.program(9,R,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===h){s=s.call(n,c)}else{s=u.call(n,s,c)}if(s||s===0){i+=s}i+="\n                    "
return i}function R(n,a){var i="",s
i+='This person does not have a public profile,\n                        but you can view their\n                        <a href="'
t=e.profileRoot
s=t||n.profileRoot
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"profileRoot",{hash:{}})}i+=d(s)+'discussion">discussion history</a>\n                        and <a href="'
t=e.profileRoot
s=t||n.profileRoot
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"profileRoot",{hash:{}})}i+=d(s)+'programs">programs</a>.'
return i}function k(n,a){var i="",s
i+="\n                        "
t=e["_"]
s=t||n["_"]
c=f.program(12,J,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===h){s=s.call(n,c)}else{s=u.call(n,s,c)}if(s||s===0){i+=s}i+="\n                    "
return i}function J(n,a){return"Finding profile information..."}function O(n,a){var i="",s,r
i+='\n                <div class="avatar-pic-container">\n                    <img src="'
t=e.avatarSrc
s=t||n.avatarSrc
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"avatarSrc",{hash:{}})}i+=d(s)+'" style="width: 50px; height: 50px;">\n                </div>\n                <div class="user-info">\n                    '
t=e.isPrivate
s=t||n.isPrivate
r=e.unless
c=f.program(15,P,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+='\n                    <div class="badge-container">\n                        '
t=e.publicBadges
s=t||n.publicBadges
r=e.each
c=f.program(20,w,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+='\n                    </div>\n                </div>\n                <div class="user-stats">\n                    '
t=e.isSal
s=t||n.isSal
r=e["if"]
c=f.program(24,z,a)
c.hash={}
c.fn=c
c.inverse=f.program(29,F,a)
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                </div>\n            "
return i}function P(n,a){var i="",s,r
i+='\n                        <span class="nickname">\n                            <a class="profile-link" href="'
t=e.href
s=t||n.href
r=e["if"]
c=f.program(16,x,a)
c.hash={}
c.fn=c
c.inverse=f.program(18,S,a)
s=r.call(n,s,c)
if(s||s===0){i+=s}i+='">'
t=e.nickname
s=t||n.nickname
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"nickname",{hash:{}})}i+=d(s)+"</a>\n                        </span>\n                    "
return i}function x(n,a){var i
t=e.href
i=t||n.href
if(typeof i===h){i=i.call(n,{hash:{}})}else if(i===v){i=p.call(n,"href",{hash:{}})}return d(i)}function S(n,a){var i="",s
t=e.profileRoot
s=t||n.profileRoot
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"profileRoot",{hash:{}})}i+=d(s)+"discussion"
return i}function w(n,a){var i="",s,r
i+="\n                            "
s=n
r=e["if"]
c=f.program(21,H,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                        "
return i}function H(n,a){var i="",s,r
i+="\n                                "
s=n
r=e["with"]
c=f.program(22,j,a)
c.hash={}
c.fn=c
c.inverse=f.noop
s=r.call(n,s,c)
if(s||s===0){i+=s}i+="\n                            "
return i}function j(n,a){var i="",s
i+='\n                                    <img class="badge-icon" src="'
t=e.icons
s=t||n.icons
s=s===null||s===undefined||s===false?s:s.small
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"icons.small",{hash:{}})}i+=d(s)+'" alt="'
t=e.description
s=t||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"description",{hash:{}})}i+=d(s)+'" title="'
t=e.description
s=t||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"description",{hash:{}})}i+=d(s)+'">\n                                '
return i}function z(n,a){var i="",s
i+='\n                        <div class="points">'
t=e["_"]
s=t||n["_"]
c=f.program(25,B,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===h){s=s.call(n,c)}else{s=u.call(n,s,c)}if(s||s===0){i+=s}i+='</div>\n                        <div class="join-date">'
t=e["_"]
s=t||n["_"]
c=f.program(27,E,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===h){s=s.call(n,c)}else{s=u.call(n,s,c)}if(s||s===0){i+=s}i+="</div>\n                    "
return i}function B(n,a){return'<span style="font-size: 200%">&infin;</span> <span class="points-label">points</span>'}function E(n,a){return"Founder &amp; Executive Director"}function F(n,a){var i="",s
i+='\n                        <div class="points">'
t=e["_"]
s=t||n["_"]
c=f.program(30,M,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===h){s=s.call(n,c)}else{s=u.call(n,s,c)}if(s||s===0){i+=s}i+='</div>\n                        <div class="join-date">'
t=e["_"]
s=t||n["_"]
c=f.program(32,D,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===h){s=s.call(n,c)}else{s=u.call(n,s,c)}if(s||s===0){i+=s}i+="</div>\n                    "
return i}function M(n,a){var i="",s,r
i+='<span style="font-size: 150%">'
t=e.points
s=t||n.points
t=e.commafy
r=t||n.commafy
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===v){s=p.call(n,"commafy",s,{hash:{}})}else{s=r}i+=d(s)+'</span> <span class="points-label">points</span>'
return i}function D(n,a){var i="",s
i+='Joined <abbr class="timeago" title="'
t=e.dateJoined
s=t||n.dateJoined
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"dateJoined",{hash:{}})}i+=d(s)+'">'
t=e.dateJoined
s=t||n.dateJoined
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=p.call(n,"dateJoined",{hash:{}})}i+=d(s)+"</abbr>"
return i}r+='<div class="hover-card-container '
t=e.isPrivate
l=t||a.isPrivate
o=e["if"]
c=f.program(1,m,s)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(a,l,c)
if(l||l===0){r+=l}r+='">\n    '
t=e.contentOnly
l=t||a.contentOnly
o=e.unless
c=f.program(3,g,s)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(a,l,c)
if(l||l===0){r+=l}r+='\n    <div class="hover-card-content-container'
t=e.contentOnly
l=t||a.contentOnly
o=e.unless
c=f.program(5,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(a,l,c)
if(l||l===0){r+=l}r+='">\n        <div class="hover-card-content clearfix">\n            '
t=e.messageOnly
l=t||a.messageOnly
o=e["if"]
c=f.program(7,b,s)
c.hash={}
c.fn=c
c.inverse=f.program(14,O,s)
l=o.call(a,l,c)
if(l||l===0){r+=l}r+="\n        </div>\n    </div>\n</div>\n"
return r})})()
;
window.VisitTracking=function(r){if(!window.KA||!areCookiesEnabled()){return}function i(r){var i=new Date
if(r){i=new Date(r)}return Math.floor(+i/1e3)}var e=60*60*3
var t=365*2
var n=60*30
var a=KA.currentServerTime()
var o=i()
r.trackVisit=function(){var r=KA.getUserID()
var s=encodeURIComponent(r)
var v=i()
var u=v-o
var f=a+u
function c(){createCookie("return_visits_"+s,f,t)}function d(){var e=""
if(!r){e="pre_phantom"}else if(KA.getUserProfile().isPhantom()){e="phantom"}else{e="logged_in"}var t=["return_visit_binary","return_visit_count",e+"_return_visit_binary",e+"_return_visit_count"]
var n=KA.getUserProfile()
if(n&&!n.attributes.isPhantom){var a=i(n.attributes.dateJoined)
if(v-a<60*60*24*7){t.push("logged_in_return_visit_7_day_binary","logged_in_return_visit_7_day_count")}}gae_bingo.bingo(t)
c()}var g=+readCookie("return_visits_"+s)
if(!g){c()
return}var l=f-g
if(l>e){_.delay(d,3e4)}else if(l>n){c()}}
r.trackVisit()
return r}(window.VisitTracking||{})
;
window.GoalsInit=_.once(function(){var o=$.Deferred()
PackageManager.require("goals.js").then(function(){window.GoalBook=new GoalCollection(window.GoalsBootstrap||[])
window.GoalBook.updateActive()
APIActionResults.register("updateGoals",$.proxy(GoalBook.incrementalUpdate,window.GoalBook))
var e=$(".topic-browser-menu .goals-menu-contents")
if(e.length){var a=new GoalBookView({el:e,model:GoalBook})
a.render()}else{window.myGoalBookView=new PopupGoalBookView({el:"#goals-nav-container",model:GoalBook})
window.myGoalSummaryView=new GoalSummaryView({el:"#goals-container",model:GoalBook,goalBookView:myGoalBookView})
window.myGoalSummaryView.render()}window.newGoalDialog=new NewGoalDialog({model:GoalBook})
window.newCustomGoalDialog=new NewCustomGoalDialog
o.resolve()})
return o.promise()})
;
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["shared-package_generic-dialog"]=a(function(a,e,t,l,i){t=t||a.helpers
var s="",n,o,r,h,c=this,f="function",d=t.helperMissing,p=void 0,u=this.escapeExpression
function v(a,e){var l="",i,s
l+='\n    <div class="modal-footer">\n        '
r=t.buttons
i=r||a.buttons
s=t.each
h=c.program(2,m,e)
h.hash={}
h.fn=h
h.inverse=c.noop
i=s.call(a,i,h)
if(i||i===0){l+=i}l+="\n    </div>\n    "
return l}function m(a,e){var l="",i,s
l+="\n            "
r=t.buttonColor
i=r||a.buttonColor
s=t["if"]
h=c.program(3,b,e)
h.hash={}
h.fn=h
h.inverse=c.program(5,g,e)
i=s.call(a,i,h)
if(i||i===0){l+=i}l+="\n        "
return l}function b(a,e){var l="",i
l+='\n                <a class="generic-button simple-button '
r=t.buttonColor
i=r||a.buttonColor
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===p){i=d.call(a,"buttonColor",{hash:{}})}l+=u(i)+'" href="javascript:void(0)" data-id="'
r=t.title
i=r||a.title
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===p){i=d.call(a,"title",{hash:{}})}l+=u(i)+'">'
r=t.title
i=r||a.title
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===p){i=d.call(a,"title",{hash:{}})}l+=u(i)+"</a>\n            "
return l}function g(a,e){var l="",i
l+='\n                <a class="generic-button simple-button" href="javascript:void(0)" data-id="'
r=t.title
i=r||a.title
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===p){i=d.call(a,"title",{hash:{}})}l+=u(i)+'">'
r=t.title
i=r||a.title
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===p){i=d.call(a,"title",{hash:{}})}l+=u(i)+"</a>\n            "
return l}s+='<div class="generic-dialog modal hide">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
r=t.title
n=r||e.title
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===p){n=d.call(e,"title",{hash:{}})}s+=u(n)+'</h2>\n    </div>\n    <div class="modal-body">\n        <p>'
r=t.message
n=r||e.message
if(typeof n===f){n=n.call(e,{hash:{}})}else if(n===p){n=d.call(e,"message",{hash:{}})}if(n||n===0){s+=n}s+="</p>\n    </div>\n    "
r=t.buttons
n=r||e.buttons
o=t["if"]
h=c.program(1,v,i)
h.hash={}
h.fn=h
h.inverse=c.noop
n=o.call(e,n,h)
if(n||n===0){s+=n}s+="\n</div>\n"
return s})})()
;
window.centeredPopupWindow=function(e,t,o,i){var n=window.screenLeft?window.screenLeft:window.screenX
var r=window.screenTop?window.screenTop:window.screenY
var a=n+(window.innerWidth-o)/2
var s=r+(window.innerHeight-i)/2
var d="menubar=no, scrollbars=yes, resizable=no, toolbar=no, "+"location=no, directories=no, status=yes, dependent=yes, "+"width="+o+", height="+i+", "+"top="+s+", left="+a
return window.open(e,t,d)}
window.validateEmail=function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
return e.match(t)}
window.updateDocumentTitle=function(e){var t=KA.getUserProfile()
if(e&&typeof e.pageName!=="undefined"){KA.currentPageName=e.pageName}if(e&&t&&typeof e.noteCount!=="undefined"){t.set("countBrandNewNotifications",e.noteCount)}var o=t?t.get("countBrandNewNotifications"):0,i=KA.currentPageName
document.title=o>0?"("+o+") "+i:i}
window.browserSupportsCSSTransitions=_.once(function(){var e=document.body||document.documentElement
var t=e.style
var o="transition"
if(typeof t[o]==="string"){return true}var i=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1)
for(var n=0;n<i.length;n++){if(typeof t[i[n]+o]==="string"){return true}}return false})
$(function(){$(".page-search input[type=text]").placeholder()
$(".search-input").closest("form").submit(function(e){return!!$.trim($(this).find(".search-input").val())})
$("#user-info").on("userUpdate",function(){$(this).find(".dropdown-toggle").dropdown("ontouchstart"in window?null:"hover")}).trigger("userUpdate")})
window.Badges={showMoreContext:function(e){var t=$(e).parents(".badge-context-hidden-link")
var o=t.parents(".achievement-badge")
var i=$(".badge-context-hidden",o)
if(t.length&&o.length&&i.length){$(".ellipsis",t).remove()
t.html(t.text())
i.css("display","")
o.find(".achievement-desc").addClass("expanded")
o.css("min-height",o.css("height")).css("height","auto")
o.nextAll(".achievement-badge").first().css("clear","both")}},renderShareLinks:function(e,t){var o=Badges.ShareLinksView.addShareLinksContext(t)
var i=new Badges.ShareLinksView({el:e,model:new Backbone.Model(o)})
i.render()}}
Badges.ShareLinksView=Backbone.View.extend({template:Templates.get("shared.share-links"),events:{"click .emailShare":"shareEmail","click .twitterShare":"shareTwitter","click .facebookShare":"shareFacebook"},render:function(){this.$el.html(this.template(this.model.attributes))},trackShare:function(e){var t=this.model.get("description")
var o=this.model.get("badgeCategory")
if(window._gaq){_gaq.push(["_trackEvent","Badges",e,t,o])}var i={}
i["Description"]=t
i["Badge Category"]=o
i["Name"]=this.model.get("name")
i["Points"]=this.model.get("points")
Analytics.trackSingleEvent("Badges "+e,i)},shareEmail:function(e){this.trackShare("Share Email")},shareTwitter:function(e){this.trackShare("Share Twitter")},shareFacebook:function(e){if(this.alreadySharedOnFacebook){KAConsole.log("Ignored duplicate share attempt.")
return}if(!window.USERNAME){this.showQTip($._("<a href='/login?continue=/profile' class='simple-button qtip-button green'>Log in</a> to claim your badge on Facebook."))
return}var t=this.model
var o=t.get("slug")
var i=window.USERNAME&&FacebookUtil.isUsingFbLogin()
if(i&&FacebookUtil.hasPublishStreamPermission()){this.openGraphShare(o)}else{var n=this
FacebookUtil.runOnFbReady(function(){FB.login(function(e){if(!e||e.error||!e.authResponse){var t=e&&e.error?e.error.code:null
n.handleFacebookErrors(t)}else if(e){FB.api("/me/permissions","get",function(e){if(!e||e.error){var t=e&&e.error?e.error.code:null
n.handleFacebookErrors(t)}else{var i=e.data&&e.data[0]&&e.data[0].publish_stream===1
if(i){FacebookUtil.setPublishStreamPermission(true)
n.openGraphShare(o)}else{FacebookUtil.setPublishStreamPermission(false)
n.showQTip($._("Sorry, you must grant access in order to share this on Facebook. Try again."))
KAConsole.log("FB OpenGraph badge share failed - permission denied.")}}})}},{scope:"email,publish_stream"})})}},handleFacebookErrors:function(e){if(e===200){FacebookUtil.setPublishStreamPermission(false)
this.showQTip($._("Sorry, you must grant access in order to share this on Facebook. Try again."))}else if(e===3501){this.setShared($._("This badge has already been posted to your timeline."))}else{this.showQTip($._("Sorry, we weren't able to share this. Please try again later."))}},handleErrors:function(e){var t=e.responseText
var o=e.status
KAConsole.log(t)
if(o===401){this.showQTip($._("Sorry, our records don't show that you've earned this badge."))
return}else if(o===400){var i=/(#)(\d+)/
var n=i.exec(t)
if(n){var r=n[2]
this.handleFacebookErrors(parseInt(r))
return}}this.showQTip($._("Sorry, we weren't able to share this. Please try again."))},openGraphShare:function(e){this.showQTip("<img src='/images/spinner-arrows-bg-1c1c1c.gif' style='margin-right: 5px; position: relative; top: 1px'> "+$._("Sharing on Facebook..."),true)
$.ajax({type:"POST",url:"/api/v1/user/badges/"+e+"/opengraph-earn",success:_.bind(this.finishShare,this),error:_.bind(this.handleErrors,this)})},setShared:function(e){this.alreadySharedOnFacebook=true
this.$(".facebookShare").contents().last().replaceWith("Shared")
this.showQTip(e)},finishShare:function(){this.setShared($._("This badge will now appear in your timeline!"))
this.trackShare("Share Facebook Open Graph")
KAConsole.log("OG post succeeded!")},showQTip:function(e,t){var o=this.$(".facebookShare")
var i={content:e,position:{my:"top right",at:"bottom left"},show:{ready:true},style:"qtip-shadow qtip-rounded qtip-youtube",hide:{delay:5e3},events:{hidden:_.bind(this.removeHideDelay,this)}}
if(t){i.hide=false
delete i.events}else{setTimeout(_.bind(function(){this.hide()
this.removeHideDelay()},this),5e3)}this.$(".facebookShare").qtip(i)},removeHideDelay:function(){this.$(".facebookShare").qtip("api").set("hide.delay",0)},hide:function(){var e=this.$(".facebookShare").qtip("api")
if(e){e.hide()}}},{addShareLinksContext:function(e){var t=e.absoluteUrl
var o=e.translatedDescription
e.emailLink=Social.emailBadge(t,o)
e.twitterLink=Social.twitterBadge(t,o)
return e}})
window.DemoNotifications={show:function(){NotificationsLoader.loadUrgent({class_:["DemoNotification"]})
$(".show-demo-dialog").click(function(e){e.preventDefault()
var t=e.target.href||"/"
t="/logout?continue="+encodeURIComponent(t)
popupGenericMessageBox({title:"Leaving Demo",message:$._("The Demo allows you to view coach and student reports for a demo account. Navigating out of the demo area will log you out of the demo account."),buttons:[{title:"Cancel",action:hideGenericMessageBox},{title:"Leave demo",action:function(){hideGenericMessageBox
window.location=t},buttonColor:"green"}]})})}}
window.Timezone={tz_offset:null,append_tz_offset_query_param:function(e){if(e.indexOf("?")>-1){e+="&"}else{e+="?"}return e+"tz_offset="+Timezone.get_tz_offset()},get_tz_offset:function(){if(this.tz_offset==null){this.tz_offset=-1*(new Date).getTimezoneOffset()}return this.tz_offset}}
if(!Date.prototype.toISOString){Date.prototype.toISOString=function(){var e=function(e){return e<10?"0"+e:e}
return this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z"}}window.parseISO8601=function(e){var t=e.split("T"),o=t[0].split("-"),i=t[1].split("Z"),n=i[0].split(":"),r=n[2].split("."),a=Number(n[0]),s=new Date
s.setUTCFullYear(Number(o[0]))
s.setUTCMonth(Number(o[1])-1)
s.setUTCDate(Number(o[2]))
s.setUTCHours(Number(a))
s.setUTCMinutes(Number(n[1]))
s.setUTCSeconds(Number(r[0]))
if(r[1]){s.setUTCMilliseconds(Number(r[1]))}return s}
window.CSSMenus={active_menu:null,init:function(){$(".noscript").removeClass("noscript")
$(document).delegate(".css-menu > ul > li","click",function(){if(CSSMenus.active_menu){CSSMenus.active_menu.removeClass("css-menu-js-hover")}if(CSSMenus.active_menu&&this===CSSMenus.active_menu[0]){CSSMenus.active_menu=null}else{CSSMenus.active_menu=$(this).addClass("css-menu-js-hover")}})
$(document).bind("click focusin",function(e){if(CSSMenus.active_menu&&$(e.target).closest(".css-menu").length===0){CSSMenus.active_menu.removeClass("css-menu-js-hover")
CSSMenus.active_menu=null}})
$(document).delegate(".css-menu a",{focus:function(e){$(e.target).addClass("css-menu-js-hover").closest(".css-menu > ul > li").addClass("css-menu-js-hover")},blur:function(e){$(e.target).removeClass("css-menu-js-hover").closest(".css-menu > ul > li").removeClass("css-menu-js-hover")}})}}
$(CSSMenus.init)
window.Throbber={jElement:null,show:function(e,t){if(!Throbber.jElement){Throbber.jElement=$("<img style='display:none;' src='/images/throbber.gif' class='throbber'/>")
$(document.body).append(Throbber.jElement)}if(!e.length){return}var o=e.offset()
var i=o.top+e.height()/2-8
var n=t?o.left-16-4:o.left+e.width()+4
Throbber.jElement.css("top",i).css("left",n).css("z-index",2e3).css("display","")},hide:function(){if(Throbber.jElement){Throbber.jElement.css("display","none")}}}
window.ProgressLoadingView=Backbone.View.extend({initialize:function(){this.render()},render:function(){this.$el.html('<div class="loading-progress-bar ui-progressbar ui-widget ui-widget-content ui-corner-all"><div class="ui-progressbar-value ui-widget-header ui-corner-left ui-corner-right"></div></div>')}})
window.temporaryDetachElement=function(e,t,o){var i,n
i=e.next()
if(i.length>0){n=function(){e.insertBefore(i)}}else{i=e.parent()
n=function(){e.appendTo(i)}}e.detach()
var r=t.call(o||this,e)
n()
return r};(function(){var e=null
window.popupGenericMessageBox=function(t){if(e){$(e).modal("hide").remove()}t=_.extend({buttons:[{title:"OK",action:hideGenericMessageBox}]},t)
var o=Templates.get("shared.generic-dialog")
e=$(o(t)).appendTo(document.body).modal({keyboard:true,backdrop:true,show:true}).get(0)
if(t.width){$(e).css({width:t.width+"px","margin-left":-.5*t.width+"px"})}_.each(t.buttons,function(t){$('.generic-button[data-id="'+t.title+'"]',$(e)).click(t.action)})}
window.hideGenericMessageBox=function(){if(e){$(e).modal("hide")}e=null}})()
window.HeaderTopicBrowser={init:function(){this.initDropdownBehavior($("#top-header").find(".dropdown-toggle"))
$(".nav-subheader .topic-browser-menu").menuAim({submenuSelector:".has-submenu",activate:function(e){$(e).addClass("hover-active")},deactivate:function(e){$(e).removeClass("hover-active")}})},_$activeDropdown:null,closeTopLevelDropdown:function(){if(this._$activeDropdown){this._$activeDropdown.dropdown("close")
this._$activeDropdown=null}},initDropdownBehavior:function(e){e=e.not("[data-hasDropdownBehavior]")
e.dropdown().on("close",function(e){$(e.target).parent().find(".dropdown-menu").find(".hover-active").removeClass("hover-active")}).on("open",function(e){HeaderTopicBrowser.closeTopLevelDropdown()
HeaderTopicBrowser._$activeDropdown=$(e.target)}).end().siblings(".dropdown-menu").click(function(e){e.stopPropagation()}).end().attr("data-hasDropdownBehavior",true)}}
window.parseQueryString=function(e){e=e||window.location.search.substring(1)
var t={},o,i=/\+/g,n=/([^&=]+)=?([^&]*)/g,r=function(e){return decodeURIComponent(e.replace(i," "))}
while(o=n.exec(e)){t[r(o[1])]=r(o[2])}return t}
window.isLoadedFromBrowserCache=function(){if(isLoadedFromBrowserCache.memoized==null){isLoadedFromBrowserCache.memoized=$("#page_loaded_from_browser_cache").val()==="1"
$("#page_loaded_from_browser_cache").val("1")}return isLoadedFromBrowserCache.memoized}
window.bookmarkMe=function(e,t){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(document.title,window.location.href,"")}else if(window.external&&window.external.AddFavorite){window.external.AddFavorite(location.href,document.title)}else if(window.opera&&window.print){this.title=document.title
return true}else{var o=e||$._("Press Command + D to bookmark this page.")
var i=t||$._("Press CTRL + D to bookmark this page.")
if(navigator.userAgent.toLowerCase().indexOf("mac")!==-1){alert(o)}else{alert(i)}}}
;
$(function(){$(document).delegate("input.blur-on-esc","keyup",function(n,i){if(i&&i.silent){return}if(n.which===27){$(n.target).blur()}})
$(document).on("click",'[href="/login"]',function(n){if(window.KA&&KA.loginUrl){window.location.assign(KA.loginUrl)
n.preventDefault()}})})
if(window._qf){$.each(window._qf,function(n,i){$(i)})}