(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["stories-package_story"]=e(function(e,a,n,t,r){n=n||e.helpers
var s="",l,i,o,u,f=this,c="function",h=n.helperMissing,d=void 0,v=this.escapeExpression,p=n.blockHelperMissing
function m(e,a){return"disabled"}function b(e,a){return"rotate"}function y(e,a){var t="",r,s
t+='\n        <div class="content-teaser">\n            '
o=n.youtube_id
r=o||e.youtube_id
s=n["if"]
u=f.program(6,g,a)
u.hash={}
u.fn=u
u.inverse=f.program(8,_,a)
r=s.call(e,r,u)
if(r||r===0){t+=r}t+="\n        </div>\n        "
return t}function g(e,a){var t="",r
t+='\n            <div class="youtube-thumbnail-container">\n                <img class="youtube-thumbnail" src="https://img.youtube.com/vi/'
o=n.youtube_id
r=o||e.youtube_id
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===d){r=h.call(e,"youtube_id",{hash:{}})}t+=v(r)+'/hqdefault.jpg">\n                <div class="youtube-thumbnail-title">'
o=n.video_title
r=o||e.video_title
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===d){r=h.call(e,"video_title",{hash:{}})}t+=v(r)+'</div>\n                <img class="youtube-thumbnail-play" src="/images/stories/youtube_play.png">\n            </div>\n            '
return t}function _(e,a){var t="",r,s
t+="\n            &ldquo;"
o=n.teaser_html
r=o||e.teaser_html
s=n["if"]
u=f.program(9,k,a)
u.hash={}
u.fn=u
u.inverse=f.program(11,H,a)
r=s.call(e,r,u)
if(r||r===0){t+=r}t+="&hellip;&rdquo;\n            "
return t}function k(e,a){var t
o=n.teaser_html
t=o||e.teaser_html
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===d){t=h.call(e,"teaser_html",{hash:{}})}if(t||t===0){return t}else{return""}}function H(e,a){var t
o=n.teaser
t=o||e.teaser
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===d){t=h.call(e,"teaser",{hash:{}})}return v(t)}function q(e,a){var t="",r
t+='\n<div class="tape envelope-under">'
o=n.name
r=o||e.name
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===d){r=h.call(e,"name",{hash:{}})}t+=v(r)+"<br>"
o=n.formatted_date
r=o||e.formatted_date
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===d){r=h.call(e,"formatted_date",{hash:{}})}t+=v(r)+"</div>\n"
return t}function M(e,a){var t="",r
t+='\n<div class="envelope-under">\n    <a href="#" class="btn large primary share-story-btn-bottom">'
o=n["_"]
r=o||e["_"]
u=f.program(16,j,a)
u.hash={}
u.fn=u
u.inverse=f.noop
if(o&&typeof r===c){r=r.call(e,u)}else{r=p.call(e,r,u)}if(r||r===0){t+=r}t+="</a>\n</div>\n"
return t}function j(e,a){return"Share your story"}s+='<div class="story '
o=n.disabled
l=o||a.disabled
i=n["if"]
u=f.program(1,m,r)
u.hash={}
u.fn=u
u.inverse=f.program(3,b,r)
l=i.call(a,l,u)
if(l||l===0){s+=l}s+='">\n    <div class="envelope envelope-background">\n        '
o=n.empty
l=o||a.empty
i=n.unless
u=f.program(5,y,r)
u.hash={}
u.fn=u
u.inverse=f.noop
l=i.call(a,l,u)
if(l||l===0){s+=l}s+='\n        <div class="envelope envelope-foreground">&nbsp;</div>\n    </div>\n</div>\n\n<div class="slit-overlay">&nbsp;</div>\n<div class="slit-overlay-background">&nbsp;</div>\n\n'
o=n.name
l=o||a.name
i=n["if"]
u=f.program(13,q,r)
u.hash={}
u.fn=u
u.inverse=f.program(15,M,r)
l=i.call(a,l,u)
if(l||l===0){s+=l}s+="\n"
return s})})()
;
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["stories-package_story-full"]=e(function(e,a,n,t,o){n=n||e.helpers
var r="",s,l,i,f,h=this,p="function",c=n.helperMissing,d=void 0,m=this.escapeExpression,u=n.blockHelperMissing
function y(e,a){var t="",o
t+="From "
i=n.name
o=i||e.name
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===d){o=c.call(e,"name",{hash:{}})}t+=m(o)+", "
i=n.formatted_date
o=i||e.formatted_date
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===d){o=c.call(e,"formatted_date",{hash:{}})}t+=m(o)
return t}function b(e,a){var t="",o
t+='\n        <iframe width="100%" height="380" src="http://www.youtube.com/embed/'
i=n.youtube_id
o=i||e.youtube_id
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===d){o=c.call(e,"youtube_id",{hash:{}})}t+=m(o)+'?rel=0" frameborder="0" allowfullscreen></iframe>\n        '
return t}function v(e,a){var t="",o,r
t+="\n        "
i=n.story
o=i||e.story
i=n.formatContent
r=i||e.formatContent
if(typeof r===p){o=r.call(e,o,{hash:{}})}else if(r===d){o=c.call(e,"formatContent",o,{hash:{}})}else{o=r}t+=m(o)+"\n        "
return t}function g(e,a){var t="",o,r
t+='\n    <div class="modal-footer">\n        <button class="btn prev-btn '
i=n.prev_story
o=i||e.prev_story
r=n.unless
f=h.program(8,_,a)
f.hash={}
f.fn=f
f.inverse=h.noop
o=r.call(e,o,f)
if(o||o===0){t+=o}t+='">'
i=n["_"]
o=i||e["_"]
f=h.program(10,w,a)
f.hash={}
f.fn=f
f.inverse=h.noop
if(i&&typeof o===p){o=o.call(e,f)}else{o=u.call(e,o,f)}if(o||o===0){t+=o}t+='</button>\n        <button class="btn next-btn '
i=n.next_story
o=i||e.next_story
r=n.unless
f=h.program(12,x,a)
f.hash={}
f.fn=f
f.inverse=h.noop
o=r.call(e,o,f)
if(o||o===0){t+=o}t+='">'
i=n["_"]
o=i||e["_"]
f=h.program(14,k,a)
f.hash={}
f.fn=f
f.inverse=h.noop
if(i&&typeof o===p){o=o.call(e,f)}else{o=u.call(e,o,f)}if(o||o===0){t+=o}t+="</button>\n    </div>\n    "
return t}function _(e,a){return"disabled"}function w(e,a){return"&larr; Previous"}function x(e,a){return"disabled"}function k(e,a){return"Next &rarr;"}r+='<div id="modal-story" class="modal-story modal fade hide">\n\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h4>\n            '
i=n["_"]
s=i||a["_"]
f=h.program(1,y,o)
f.hash={}
f.fn=f
f.inverse=h.noop
if(i&&typeof s===p){s=s.call(a,f)}else{s=u.call(a,s,f)}if(s||s===0){r+=s}r+='\n\n            <span class="share-container">\n                <iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/tweet_button.html?count=none&amp;related=khanacademy&amp;text=Read%20this%20story%20from%20a%20Khan%20Academy%20user" style="width:56px; height:20px;"></iframe>\n\n                <iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.khanacademy.org%2Fstories%2F'
i=n.slug
s=i||a.slug
if(typeof s===p){s=s.call(a,{hash:{}})}else if(s===d){s=c.call(a,"slug",{hash:{}})}r+=m(s)+'&amp;send=false&amp;layout=button_count&amp;width=200&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=verdana&amp;height=21&amp;appId=160249463991765" scrolling="no" frameborder="0" style="border:none; position:relative; top:1px; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>\n            </span>\n        </h4>\n    </div>\n\n    <div class="modal-body">\n        '
i=n.youtube_id
s=i||a.youtube_id
l=n["if"]
f=h.program(3,b,o)
f.hash={}
f.fn=f
f.inverse=h.program(5,v,o)
s=l.call(a,s,f)
if(s||s===0){r+=s}r+="\n    </div>\n\n    "
i=n.no_footer
s=i||a.no_footer
l=n.unless
f=h.program(7,g,o)
f.hash={}
f.fn=f
f.inverse=h.noop
s=l.call(a,s,f)
if(s||s===0){r+=s}r+="\n\n</div>\n"
return r})})()
;
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["stories-package_story-editor-row"]=e(function(e,a,n,t,r){n=n||e.helpers
var l="",s,o,i,f,h=this,d="function",c=n.helperMissing,u=void 0,p=this.escapeExpression
function m(e,a){return"\n    Published\n    "}function v(e,a){var t="",r,l
t+="\n        "
i=n.share_allowed
r=i||e.share_allowed
l=n.unless
f=h.program(4,_,a)
f.hash={}
f.fn=f
f.inverse=h.noop
r=l.call(e,r,f)
if(r||r===0){t+=r}t+="\n    "
return t}function _(e,a){return"\n            Sharing not allowed\n        "}function g(e,a){var t="",r
t+="\n        "
i=n.video_url
r=i||e.video_url
if(typeof r===d){r=r.call(e,{hash:{}})}else if(r===u){r=c.call(e,"video_url",{hash:{}})}t+=p(r)+"\n    "
return t}function y(e,a){var t="",r,l
t+="\n        "
i=n.story
r=i||e.story
i=n.formatContent
l=i||e.formatContent
if(typeof l===d){r=l.call(e,r,{hash:{}})}else if(l===u){r=c.call(e,"formatContent",r,{hash:{}})}else{r=l}t+=p(r)+"\n    "
return t}l+='<td class="published">\n    '
i=n.published
s=i||a.published
o=n["if"]
f=h.program(1,m,r)
f.hash={}
f.fn=f
f.inverse=h.program(3,v,r)
s=o.call(a,s,f)
if(s||s===0){l+=s}l+='\n</td>\n<td class="date">'
i=n.formatted_date
s=i||a.formatted_date
if(typeof s===d){s=s.call(a,{hash:{}})}else if(s===u){s=c.call(a,"formatted_date",{hash:{}})}l+=p(s)+'</td>\n<td class="user">'
i=n.name
s=i||a.name
if(typeof s===d){s=s.call(a,{hash:{}})}else if(s===u){s=c.call(a,"name",{hash:{}})}l+=p(s)+'</td>\n<td class="story">\n    '
i=n.video_url
s=i||a.video_url
o=n["if"]
f=h.program(6,g,r)
f.hash={}
f.fn=f
f.inverse=h.program(8,y,r)
s=o.call(a,s,f)
if(s||s===0){l+=s}l+="\n</td>\n"
return l})})()
;
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["stories-package_story-editor-dialog"]=e(function(e,a,l,i,s){l=l||e.helpers
var t="",n,o,r,d,f=this,h="function",c=l.helperMissing,v=void 0,m=this.escapeExpression,p=l.blockHelperMissing
function b(e,a){return'checked="checked"'}function u(e,a){return"Save"}t+='<div class="story-editor-dialog modal fade hide">\n\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h4>'
r=l.name
n=r||a.name
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"name",{hash:{}})}t+=m(n)+" - "
r=l.formatted_date
n=r||a.formatted_date
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"formatted_date",{hash:{}})}t+=m(n)+'</h4>\n    </div>\n\n    <div class="modal-body">\n        <form>\n            <div class="form-row">\n                <label for="name">Author\'s name:</label><br>\n                <input type="text" name="name" id="name" value="'
r=l.name
n=r||a.name
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"name",{hash:{}})}t+=m(n)+'">\n            </div>\n\n            <div class="form-row">\n                <label for="teaser">Teaser (first few lines):</label><br>\n                <textarea name="teaser" id="teaser">'
r=l.teaser
n=r||a.teaser
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"teaser",{hash:{}})}t+=m(n)+'</textarea>\n            </div>\n\n            <div class="form-row">\n                <label for="story">Story:</label><br>\n                <textarea name="story" id="story">'
r=l.story
n=r||a.story
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"story",{hash:{}})}t+=m(n)+'</textarea>\n            </div>\n\n            <div class="form-row">\n                <label for="video_url">Video url:</label><br>\n                <input type="text" name="video_url" id="video_url" value="'
r=l.video_url
n=r||a.video_url
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"video_url",{hash:{}})}t+=m(n)+'">\n            </div>\n\n            <div class="form-row">\n                <label for="video_title">Video title:</label><br>\n                <input type="text" name="video_title" id="video_title" value="'
r=l.video_title
n=r||a.video_title
if(typeof n===h){n=n.call(a,{hash:{}})}else if(n===v){n=c.call(a,"video_title",{hash:{}})}t+=m(n)+'">\n            </div>\n\n            <div class="form-row">\n                <label for="published">Published (visible to public):</label>\n                <input type="checkbox" name="published" id="published" value="1" '
r=l.published
n=r||a.published
o=l["if"]
d=f.program(1,b,s)
d.hash={}
d.fn=d
d.inverse=f.noop
n=o.call(a,n,d)
if(n||n===0){t+=n}t+='>\n            </div>\n        </form>\n    </div>\n\n    <div class="modal-footer">\n        <button class="simple-button save">'
r=l["_"]
n=r||a["_"]
d=f.program(3,u,s)
d.hash={}
d.fn=d
d.inverse=f.noop
if(r&&typeof n===h){n=n.call(a,d)}else{n=p.call(a,n,d)}if(n||n===0){t+=n}t+="</button>\n    </div>\n\n</div>\n"
return t})})()
;
(function(r,n,t,e,i,o,a){n["seedrandom"]=function v(c,g){var w=[]
var S
c=h(u(g?[c,r]:arguments.length?c:[(new Date).getTime(),r,window],3),w)
S=new f(w)
h(S.S,r)
n["random"]=function d(){var r=S.g(e)
var n=a
var f=0
while(r<i){r=(r+f)*t
n*=t
f=S.g(1)}while(r>=o){r/=2
n/=2
f>>>=1}return(r+f)/n}
return c}
function f(r){var n,e,i=this,o=r.length
var a=0,f=i.i=i.j=i.m=0
i.S=[]
i.c=[]
if(!o){r=[o++]}while(a<t){i.S[a]=a++}for(a=0;a<t;a++){n=i.S[a]
f=c(f+n+r[a%o])
e=i.S[f]
i.S[a]=e
i.S[f]=n}i.g=function u(r){var n=i.S
var e=c(i.i+1)
var o=n[e]
var a=c(i.j+o)
var f=n[a]
n[e]=f
n[a]=o
var u=n[c(o+f)]
while(--r){e=c(e+1)
o=n[e]
a=c(a+o)
f=n[a]
n[e]=f
n[a]=o
u=u*t+n[c(o+f)]}i.i=e
i.j=a
return u}
i.g(t)}function u(r,n,t,e,i){t=[]
i=typeof r
if(n&&i=="object"){for(e in r){if(e.indexOf("S")<5){try{t.push(u(r[e],n-1))}catch(o){}}}}return t.length?t:r+(i!="string"?"\x00":"")}function h(r,n,t,e){r+=""
t=0
for(e=0;e<r.length;e++){n[c(e)]=c((t^=n[c(e)]*19)+r.charCodeAt(e))}r=""
for(e in n){r+=String.fromCharCode(n[e])}return r}function c(r){return r&t-1}a=n.pow(t,e)
i=n.pow(2,i)
o=i*2
h(n.random(),r)})([],Math,256,6,52)
;
$(function(){$(".share-story-btn").click(function(s){$(".stories-submit").slideToggle(function(){$(".stories-submit textarea").focus()}).find(".submit-story-btn").html($._("Send us your story")).removeClass("disabled").removeClass("success").addClass("primary")
s.preventDefault()})
$(".share-story-btn-bottom").click(function(s){$("html, body").animate({scrollTop:0},250,function(){if(!$(".stories-submit").is(":visible")){$(".share-story-btn").trigger("click")}})
s.preventDefault()})
$(".submit-story-btn").click(function(s){s.preventDefault()
if($("#story").val().length){$(this).addClass("disabled").html($._("Sending&hellip;"))
var t={share:$("#shareAllow").is(":checked")}
_.each(["story","video","name","email"],function(s){t[s]=$("#"+s).val()})
$.ajax({type:"PUT",contentType:"application/json",dataType:"json",url:"/api/v1/stories",data:JSON.stringify(t),success:function(){$(".submit-story-btn").removeClass("primary").addClass("success").html($._("Success!"))
setTimeout(function(){$(".stories-submit").slideUp().find("textarea").val("")},3e3)}})}})})
;
window.Stories=window.Stories||{}
Stories.router=null
Stories.views={}
Stories.cShown=0
Stories.cRendered=0
Stories.render=function(e){var t=null
var o=null
var n=3
$.each(e.content,function(r,i){if(r%n===0){t=$("<div class='row'></div>")
$(e.target).append(t)}if(o&&!i.empty){o.next_story=i
i.prev_story=o}var s=new Stories.SmallView({model:i})
t.append($(s.render().el))
Stories.views[i.slug]=s
o=i})
Stories.router=new Stories.StoryRouter
Backbone.history.start({pushState:true,root:"/stories/"})}
Stories.SimpleSmallView=Backbone.View.extend({template:Templates.get("stories.story"),events:{"click .story":"handleClick"},render:function(){var e=this.model
$(this.el).html(this.template(this.model)).addClass("span-one-third").addClass("story-container").find(".story").addClass(this.model.envelope||this.randomEnvelope()).not(".disabled").addClass(this.randomRotation())
Stories.cRendered++
return this},handleClick:function(e){this.showFull()},randomRotation:function(){return this.randomChoice(["rotate-6","rotate-neg-6"])},randomEnvelope:function(){if(Stories.cRendered===0){return"envelope-1"}else if(Stories.cRendered===1){return"envelope-2"}return this.randomChoice(["envelope-1","envelope-2","envelope-3","envelope-4"])},randomChoice:function(e){Math.seedrandom(this.model.slug)
var t=Math.floor(Math.random()*e.length)
return e[t]},showFull:function(){$(".content-teaser-show, .content-teaser-hide").removeClass("content-teaser-show").removeClass("content-teaser-hide")
var e=this.model
var t=$(this.el).find(".story")
window.setTimeout(function(){$(t).addClass("content-teaser-show")
setTimeout(function(){$(t).addClass("content-teaser-hide")
var o=$("#modal-story")
var n=new Stories.FullView({model:e})
var r=Stories.cShown>0?"fade":""
$(n.render().el).find("#modal-story").removeClass(Stories.cShown>0?"fade":"").appendTo(document.body).bind("show",function(){Stories.cShown++}).bind("hidden",function(){$(this).remove()
$(t).removeClass("content-teaser-show").removeClass("content-teaser-hide")
Stories.cShown--
if(!Stories.cShown&&Stories.router){Stories.navigateTo(null)}}).modal({keyboard:true,backdrop:true,show:true}).find(".modal-body").scroll(function(){if(!this.fixedScrollRender){var e=$(this).parents(".modal")
$(e).height($(e).height()+1)
$(e).height($(e).height()-1)
this.fixedScrollRender=true}})
o.removeClass("fade").modal("hide")},400)},1)}})
Stories.SmallView=Stories.SimpleSmallView.extend({handleClick:function(e){Stories.navigateTo(this.model)}})
Stories.FullView=Backbone.View.extend({template:Templates.get("stories.story-full"),render:function(){var e=this.model
$(this.el).html(this.template(this.model)).find(".prev-btn").not(".disabled").click(function(){Stories.navigateTo(e.prev_story)}).end().end().find(".next-btn").not(".disabled").click(function(){Stories.navigateTo(e.next_story)})
return this}})
Stories.navigateTo=function(e){if(e){Stories.router.navigate(e.slug,true)}else{Stories.router.navigate("")}}
Stories.StoryRouter=Backbone.Router.extend({routes:{"":"showNone",":story":"showStory"},showNone:function(){$("#modal-story").modal("hide")},showStory:function(e){var t=Stories.views[e]
if(t){t.showFull()}}})
;
window.StoryEditor={rowViews:[]}
StoryEditor.init=function(){$(".next-stories").click(function(){StoryEditor.load($(this).data("cursor"))})
StoryEditor.load()}
StoryEditor.load=function(e){var t=$(".submitted-stories")
$(".next-stories").attr("disabled","disabled")
e=e||""
$.ajax({url:"/api/v1/stories",type:"GET",data:{cursor:e||"",include_unpublished:"1"},success:function(e){t.empty().append("<table>")
StoryEditor.rowViews=_.map(e.stories,function(e){return new StoryEditor.RowView({model:new Backbone.Model(e)})})
_.each(StoryEditor.rowViews,function(e){e.render()
t.find("table").append(e.el)})
if(e.cursor&&e.has_more){$(".next-stories").data("cursor",e.cursor).attr("disabled",null)}$("body").scrollTop(0)}})}
StoryEditor.RowView=Backbone.View.extend({tagName:"tr",template:Templates.get("stories.story-editor-row"),events:{click:"click"},render:function(){this.$el.html(this.template(this.model.attributes))
if(this.model.get("share_allowed")){this.$el.addClass("shareable")}},click:function(){if(!this.model.get("share_allowed")){return}var e=new StoryEditor.DialogView({model:this.model})
e.render()}})
StoryEditor.DialogView=Backbone.View.extend({events:{hidden:"removeDialog","click .save":"save"},template:Templates.get("stories.story-editor-dialog"),render:function(){this.setElement($(this.template(this.model.attributes)))
this.$el.appendTo(document.body).modal({keyboard:true,backdrop:true,show:true})},removeDialog:function(){this.undelegateEvents()
this.$el.remove()},save:function(){this.$el.find("input, textarea, button").attr("disabled","disabled")
var e=this.$el,t=this.model.get("slug")
this.model.set("published",$("#published").is(":checked"))
_.each(["story","teaser","name","video_url","video_title"],_.bind(function(t){this.model.set(t,e.find("#"+t).val())},this))
$.ajax({type:"POST",contentType:"application/json",dataType:"json",url:"/api/v1/stories/"+this.model.get("key"),data:JSON.stringify(this.model.attributes),success:function(){var i=_.find(StoryEditor.rowViews,function(e){return e.model.get("slug")===t})
i.render()
e.modal("hide")}})}})
