(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["homepage-package_subscription"]=n(function(n,e,a,r,t){a=a||n.helpers
var l="",s,o,i,c=this,p="function",f=a.blockHelperMissing
function u(n,e){return"Have a free subscription (or two)!"}function d(n,e){return"Enter your email to learn about new courses."}function b(n,e){return"Sal's Challenge"}function h(n,e){return"Macro Econ"}function m(n,e){return"New Content"}function v(n,e){return"Receive one of Sal's hand-picked favorite videos in your email each week."}function y(n,e){return"One video per week covering content in a typical Macro Econ intro course."}function g(n,e){return"Every two weeks you'll get an email summary of all new content created by our faculty."}function _(n,e){return"Unsubscribe at any time, and we will <em>never</em> share your email."}l+='<ul class="dropdown-menu">\n    <table class="dropdown-table">\n        <tr>\n            <div class="dropdown-title"><h2>'
o=a["_"]
s=o||e["_"]
i=c.program(1,u,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+='</h2></div>\n            <span class="dropdown-throbber"></span>\n        </tr>\n        <tr>\n            <input type="email" name="email" class="email" placeholder="'
o=a["_"]
s=o||e["_"]
i=c.program(3,d,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+='" value="">\n        </tr>\n        <tr>\n            <td>\n                <a href="#" class="simple-button green subscribe-button disabled" data-url="/api/v1/topic/new-and-noteworthy/subscribe">\n                    <span>'
o=a["_"]
s=o||e["_"]
i=c.program(5,b,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+='</span>\n                </a>\n            </td>\n            <td>\n                <a href="#" class="simple-button green subscribe-button disabled" data-url="/api/v1/topic/core-finance/subscribe">\n                    <span>'
o=a["_"]
s=o||e["_"]
i=c.program(7,h,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+='</span>\n                </a>\n            </td>\n            <td>\n                <a href="#" class="simple-button green subscribe-button disabled" data-url="/api/v1/digest/subscribe">\n                    <span>'
o=a["_"]
s=o||e["_"]
i=c.program(9,m,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+='</span>\n                </a>\n            </td>\n        </tr>\n        <tr class="description">\n            <td>\n                '
o=a["_"]
s=o||e["_"]
i=c.program(11,v,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+="\n            </td>\n            <td>\n                "
o=a["_"]
s=o||e["_"]
i=c.program(13,y,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+="\n            </td>\n            <td>\n                "
o=a["_"]
s=o||e["_"]
i=c.program(15,g,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+='\n            </td>\n        </tr>\n    </table>\n\n    <div class="unsubscribe-teaser">'
o=a["_"]
s=o||e["_"]
i=c.program(17,_,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(o&&typeof s===p){s=s.call(e,i)}else{s=f.call(e,s,i)}if(s||s===0){l+=s}l+="</div>\n\n</ul>\n"
return l})})()
;
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["homepage-package_feeds-hovercard"]=e(function(e,n,a,l,s){a=a||e.helpers
var r="",i,t,c,o=this,p="function",f=a.blockHelperMissing
function d(e,n){return"Subscribe to new content"}function h(e,n){return"Get new videos, exercises, and updates delivered to your feed reader."}function u(e,n){return"Videos"}function v(e,n){return"Exercises"}function m(e,n){return"Blog updates"}r+="\n"
r+='\n<div class="hover-card-container">\n    <div class="hover-card-content-container vertical-shadow">\n        <div class="hover-card-content clearfix">\n            <h2 class="pulls">'
t=a["_"]
i=t||n["_"]
c=o.program(1,d,s)
c.hash={}
c.fn=c
c.inverse=o.noop
if(t&&typeof i===p){i=i.call(n,c)}else{i=f.call(n,i,c)}if(i||i===0){r+=i}r+='</h2>\n            <p class="pulled pulls">'
t=a["_"]
i=t||n["_"]
c=o.program(3,h,s)
c.hash={}
c.fn=c
c.inverse=o.noop
if(t&&typeof i===p){i=i.call(n,c)}else{i=f.call(n,i,c)}if(i||i===0){r+=i}r+='</p>\n            <ul class="sample-content-list">\n                <li class="sample-content-link">\n                    <i class="icon-rss"></i>\n                    '
r+='\n                    <a href="http://feeds.feedburner.com/KhanAcademyVideos" rel="alternate" type="application/rss+xml">'
t=a["_"]
i=t||n["_"]
c=o.program(5,u,s)
c.hash={}
c.fn=c
c.inverse=o.noop
if(t&&typeof i===p){i=i.call(n,c)}else{i=f.call(n,i,c)}if(i||i===0){r+=i}r+='</a>\n                </li>\n                <li class="sample-content-link">\n                    <i class="icon-rss"></i>\n                    '
r+='\n                    <a href="http://feeds.feedburner.com/KhanAcademyExercises" rel="alternate" type="application/rss+xml">'
t=a["_"]
i=t||n["_"]
c=o.program(7,v,s)
c.hash={}
c.fn=c
c.inverse=o.noop
if(t&&typeof i===p){i=i.call(n,c)}else{i=f.call(n,i,c)}if(i||i===0){r+=i}r+='</a>\n                </li>\n                <li class="sample-content-link">\n                    <i class="icon-rss"></i>\n                    '
r+='\n                    <a href="http://feeds.feedburner.com/KhanAcademy" rel="alternate" type="application/rss+xml">'
t=a["_"]
i=t||n["_"]
c=o.program(9,m,s)
c.hash={}
c.fn=c
c.inverse=o.noop
if(t&&typeof i===p){i=i.call(n,c)}else{i=f.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                </li>\n            </ul>\n            "
r+='\n            <br>\n        </div>\n    </div>\n    <div class="hover-card-triangle right"></div>\n</div>\n'
return r})})()
;
window.Homepage={init:function(){VideoControls.initThumbnailHover($(".thumbnail"))
$(window).on("hashchange",function(e){if(window.location.hash==="#browse"){window.location.href="/library"}})
_.defer(Homepage.initControls)},initControls:function(){$("#large-search-input").placeholder()
Homepage.initFacebookButton()
Homepage.initTweetButton()
Homepage.initGplusButton()
Homepage.initFeedButton()
$(window).on("scroll.stories-loadcheck",_.throttle(function(e){if($(window).scrollTop()>1e3){_.defer(Homepage.initStories)
$(window).off(".stories-loadcheck")}},100))},initStories:_.once(function(){var e=$(".stories-content-container")
if(!e.length){return}$.ajax({url:"/api/v1/stories/top/cached?v=1",success:function(t){var o=null
var n=3
$.each(t,function(t,i){if(t%n===0){o=$("<div class='row-fluid'></div>")
e.append(o)}var a=_.extend({no_footer:true},i)
var r=new Stories.SimpleSmallView({model:a})
var s=r.render().el
$('<span class="span4 clearfix"></span>').append(s).appendTo(o)})},error:function(){}})}),initFeedButton:function(){$("#rss-feed").qtip({content:{text:Templates.get("homepage.feeds-hovercard")({})},style:{classes:"custom-override feeds-hovercard"},position:{my:"bottom right",at:"top right"},hide:{delay:200,fixed:true}})},initFacebookButton:function(){FacebookUtil.loadFb()},initTweetButton:function(){var e=document.createElement("script")
e.type="text/javascript"
e.async=true
e.src="//platform.twitter.com/widgets.js"
e.onload=_ga.trackTwitter
document.getElementsByTagName("head")[0].appendChild(e)},initGplusButton:function(){var e=document.createElement("script")
e.type="text/javascript"
e.async=true
e.src="https://apis.google.com/js/plusone.js"
var t=document.getElementsByTagName("script")[0]
t.parentNode.insertBefore(e,t)}}
;
window.SubscriptionView=Backbone.View.extend({initialize:function(){this.dropdownView=new SubscriptionDropdownView({el:this.$(".dropdown"),subscriptionView:this})
this.$(".email").placeholder()},updateDropdownViewEl:function(){this.dropdownView.setElement(this.$(".dropdown"))},events:{"click .already-subscribed-container":"beginShowDropdown","focus .not-subscribed-container input.email":"beginShowDropdown","click .not-subscribed-container input.email":"clickInput","click .not-subscribed-container.new":"beginShowDropdown"},clickInput:function(t){t.stopPropagation()},isEmpty:function(){var t=this.$(".not-subscribed-container input.email")
return!t.val().length||t.val()===t.attr("placeholder")},beginShowDropdown:function(t){var i=KA.getUserProfile()
var e=this.$(".not-subscribed-container input.email")
if(this.isEmpty()&&i&&validateEmail(i.get("email"))){e.val(i.get("email"))}this.dropdownView.render()
this.showDropdown()
t.preventDefault()
t.stopPropagation()},updateSubscribedTextAndInput:function(){if(!this.$(".simple-button.toggled").length){this.$(".already-subscribed-container").hide()
this.$(".not-subscribed-container").show()}else{this.$(".already-subscribed-container").show()
this.$(".not-subscribed-container").hide()}},showDropdown:function(){this.$(".dropdown-toggle").dropdown("open").bind("close",function(){this.$(".not-subscribed-container input.email").val(this.$(".dropdown-menu input.email").val())
this.updateSubscribedTextAndInput()}.bind(this)).end()
_.defer(_.bind(function(){this.$(".dropdown-menu input.email").focus()}))}})
window.SubscriptionDropdownView=Backbone.View.extend({templateName:"homepage.subscription",templateContext:{},events:{click:"click","click .subscribe-button":"doSubscribe","keypress input.email":"emailKeypress","keyup input.email":"emailKeyup"},click:function(t){t.stopPropagation()},emailKeypress:function(t){var i=$(t.currentTarget)
if(i.hasClass("invalid")&&validateEmail(i.val())){i.removeClass("invalid")}},emailKeyup:function(t){var i=this.$(".subscribe-button")
i.removeClass("toggled")
_.each(i,function(t){var i=$(t)
if(i.data("original-text")){i.find("span").text(i.data("original-text"))}})},render:function(){if(this.$el.data("rendered")){return}this.$el.data("rendered",true)
this.$(".subscription-dropdown-placeholder").replaceWith(Templates.get(this.templateName)(this.templateContext))
var t=this.$("input.email")
t.val(this.options.subscriptionView.$(".not-subscribed-container input.email").val())
if(this.options.subscriptionView.isEmpty()){t.val("")}this.updateButtons()},updateButtons:function(){this.$(".dropdown-throbber").html("<img src='/images/throbber.gif' class='throbber'/>")
$.get("/api/v1/user/subscriptions",function(t){_.each(t,function(t){var i=""
if(t.context){i="/api/v1/topic/"+t.context.topic_id+"/subscribe"}else{i="/api/v1/digest/subscribe"}this.$('a[data-url="'+i+'"]').addClass("toggled")},this)
this.$(".subscribe-button").removeClass("disabled")
this.$(".dropdown-throbber").html("")}.bind(this))},doSubscribe:function(t){t.preventDefault()
var i=this.$("input.email"),e=i.val(),n=$(t.currentTarget).data("url"),a={email:e},s=$(t.currentTarget)
if(!s.data("original-text")){s.data("original-text",s.text())}if(validateEmail(e)){var o=$._("Subscribed!")
if(s.hasClass("toggled")){a["unsubscribe"]=1
o=$._("Unsubscribed!")}$.post(n,a)
var r=+new Date
s.data("dtLastAnim",r).toggleClass("toggled").find("span").stop(true,true).css("opacity",1).text(o)
setTimeout(function(){if(r!==s.data("dtLastAnim")){return}var t=s.hasClass("toggled")&&s.data("toggled-text")?s.data("toggled-text"):s.data("original-text")
s.find("span").animate({opacity:0},100,function(){s.find("span").text(t).animate({opacity:1},100)})},2e3)}else{i.addClass("invalid").focus()}}})
;
var _ga=_ga||{}
var _gaq=_gaq||[]
_ga.trackSocial=function(t,a){_ga.trackFacebook(t,a)
_ga.trackTwitter(t,a)}
_ga.trackFacebook=function(t,a){var e=_ga.buildTrackerName_(a)
try{if(FB&&FB.Event&&FB.Event.subscribe){FB.Event.subscribe("edge.create",function(a){_gaq.push([e+"_trackSocial","facebook","like",a,t])})
FB.Event.subscribe("edge.remove",function(a){_gaq.push([e+"_trackSocial","facebook","unlike",a,t])})
FB.Event.subscribe("message.send",function(a){_gaq.push([e+"_trackSocial","facebook","send",a,t])})}}catch(r){}}
_ga.buildTrackerName_=function(t){return t?t+".":""}
_ga.trackTwitter=function(t,a){var e=_ga.buildTrackerName_(a)
try{if(twttr&&twttr.events&&twttr.events.bind){twttr.events.bind("tweet",function(a){if(a){var r
if(a.target&&a.target.nodeName=="IFRAME"){r=_ga.extractParamFromUri_(a.target.src,"url")}_gaq.push([e+"_trackSocial","twitter","tweet",r,t])}})}}catch(r){}}
_ga.extractParamFromUri_=function(t,a){if(!t){return}var t=t.split("#")[0]
var e=t.split("?")
if(e.length==1){return}var r=decodeURI(e[1])
a+="="
var c=r.split("&")
for(var i=0,n;n=c[i];++i){if(n.indexOf(a)===0){return unescape(n.split("=")[1])}}return}
