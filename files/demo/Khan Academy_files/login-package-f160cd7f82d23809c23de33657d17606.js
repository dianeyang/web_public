(function(e){var t={"short":icu.getDateFormatSymbols().month_short,"long":icu.getDateFormatSymbols().month_name},a={DMY:"littleEndian",YMD:"bigEndian",MDY:"middleEndian"},n=new Date,i=n.getFullYear(),l=n.getMonth()+1,d=n.getDate()
e.fn.birthdaypicker=function(n){var l={maxAge:120,minAge:0,futureDates:false,maxYear:i,dateFormat:a[icu.getDateFormatSymbols().order_medium],monthFormat:"short",placeholder:true,legend:"",defaultDate:false,fieldName:"birthdate",fieldId:"birthdate",hiddenDate:true,onChange:null,tabindex:null,classes:""}
return this.each(function(){if(n){e.extend(l,n)}var a=""
if(n["classes"]){a=" "+n["classes"]}var d=e("<fieldset class='birthday-picker'></fieldset>"),r=e("<select class='birth-year"+a+"' name='birth[year]'></select>"),o=e("<select class='birth-month"+a+"' name='birth[month]'></select>"),p=e("<select class='birth-day"+a+"' name='birth[day]'></select>")
if(l["legend"]){e("<legend>"+l["legend"]+"</legend>").appendTo(d)}var s=l["tabindex"]
if(l["dateFormat"]=="bigEndian"){d.append(r).append(o).append(p)
if(s!=null){r.attr("tabindex",s)
o.attr("tabindex",s++)
p.attr("tabindex",s++)}}else if(l["dateFormat"]=="littleEndian"){d.append(p).append(o).append(r)
if(s!=null){p.attr("tabindex",s)
o.attr("tabindex",s++)
r.attr("tabindex",s++)}}else{d.append(o).append(p).append(r)
if(s!=null){o.attr("tabindex",s)
p.attr("tabindex",s++)
r.attr("tabindex",s++)}}if(l["placeholder"]){e("<option value='0'>Year:</option>").appendTo(r)
e("<option value='0'>Month:</option>").appendTo(o)
e("<option value='0'>Day:</option>").appendTo(p)}var h
if(l["defaultDate"]){var f=new Date(l["defaultDate"]),u=f.getFullYear(),m=f.getMonth()+1,c=f.getDate()
h=u+"-"+m+"-"+c}if(l["hiddenDate"]){e("<input type='hidden' name='"+l["fieldName"]+"'/>").attr("id",l["fieldId"]).val(h).appendTo(d)}var v=i-l["minAge"]
var g=i-l["maxAge"]
if(l["futureDates"]&&l["maxYear"]!=i){if(l["maxYear"]>1e3){v=l["maxYear"]}else{v=i+l["maxYear"]}}while(v>=g){e("<option></option>").attr("value",v).text(v).appendTo(r)
v--}for(var D=0;D<12;D++){e("<option></option>").attr("value",D+1).text(t[l["monthFormat"]][D]).appendTo(o)}for(var b=1;b<32;b++){e("<option></option>").attr("value",b).text(b).appendTo(p)}e(this).append(d)
if(l["defaultDate"]){var x=new Date(l["defaultDate"])
r.val(x.getFullYear())
o.val(x.getMonth()+1)
p.val(x.getDate())}d.change(function(){var a=new Date,n=a.getFullYear(),i=a.getMonth()+1,d=a.getDate(),s=r.val(),f=o.val(),u=p.val(),m=new Date(s,f,0).getDate(),c=parseInt(o.children(":last").val()),v=parseInt(p.children(":last").val())
if(v>m){while(v>m){p.children(":last").remove()
v--}}else if(v<m){while(v<m){v++
p.append("<option value="+v+">"+v+"</option>")}}if(!l["futureDates"]&&s==n){if(c>i){while(c>i){o.children(":last").remove()
c--}p.children(":first").attr("selected","selected")}}if(s!=n&&c!=12){while(c<12){o.append("<option value="+(c+1)+">"+t[l["monthFormat"]][c]+"</option>")
c++}}if(s*f*u!=0){h=s+"-"+f+"-"+u
e(this).find("#"+l["fieldId"]).val(h)
if(l["onChange"]!=null){l["onChange"](h)}}})})}})(jQuery)
;
var Kicksend={mailcheck:{threshold:3,defaultDomains:["yahoo.com","google.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","comcast.net","googlemail.com","msn.com","hotmail.co.uk","yahoo.co.uk","facebook.com","verizon.net","sbcglobal.net","att.net","gmx.com","mail.com"],defaultTopLevelDomains:["co.uk","com","net","org","info","edu","gov","mil"],run:function(e){e.domains=e.domains||Kicksend.mailcheck.defaultDomains
e.topLevelDomains=e.topLevelDomains||Kicksend.mailcheck.defaultTopLevelDomains
e.distanceFunction=e.distanceFunction||Kicksend.sift3Distance
var n=Kicksend.mailcheck.suggest(encodeURI(e.email),e.domains,e.topLevelDomains,e.distanceFunction)
if(n&&n.domain.indexOf(".")!==-1){if(e.suggested){e.suggested(n)}}else{if(e.empty){e.empty()}}},suggest:function(e,n,i,t){e=e.toLowerCase()
var a=this.splitEmail(e)
var l=this.findClosestDomain(a.domain,n,t)
if(l){if(l!=a.domain){return{address:a.address,domain:l,full:a.address+"@"+l}}}else{var o=this.findClosestDomain(a.topLevelDomain,i)
if(a.domain&&o&&o!=a.topLevelDomain){var s=a.domain
l=s.substring(0,s.lastIndexOf(a.topLevelDomain))+o
return{address:a.address,domain:l,full:a.address+"@"+l}}}return false},findClosestDomain:function(e,n,i){var t
var a=99
var l=null
if(!e||!n){return false}if(!i){i=this.sift3Distance}for(var o=0;o<n.length;o++){if(e===n[o]){return e}t=i(e,n[o])
if(t<a){a=t
l=n[o]}}if(a<=this.threshold&&l!==null){return l}else{return false}},sift3Distance:function(e,n){if(e==null||e.length===0){if(n==null||n.length===0){return 0}else{return n.length}}if(n==null||n.length===0){return e.length}var i=0
var t=0
var a=0
var l=0
var o=5
while(i+t<e.length&&i+a<n.length){if(e.charAt(i+t)==n.charAt(i+a)){l++}else{t=0
a=0
for(var s=0;s<o;s++){if(i+s<e.length&&e.charAt(i+s)==n.charAt(i)){t=s
break}if(i+s<n.length&&e.charAt(i)==n.charAt(i+s)){a=s
break}}}i++}return(e.length+n.length)/2-l},splitEmail:function(e){var n=e.split("@")
if(n.length<2){return false}for(var i=0;i<n.length;i++){if(n[i]===""){return false}}var t=n.pop()
var a=t.split(".")
var l=""
if(a.length==0){return false}else if(a.length==1){l=a[0]}else{for(var i=1;i<a.length;i++){l+=a[i]+"."}if(a.length>=2){l=l.substring(0,l.length-1)}}return{topLevelDomain:l,domain:t,address:n.join("@")}}}}
if(window.jQuery){(function(e){e.fn.mailcheck=function(e){var n=this
if(e.suggested){var i=e.suggested
e.suggested=function(e){i(n,e)}}if(e.empty){var t=e.empty
e.empty=function(){t.call(null,n)}}e.email=this.val()
Kicksend.mailcheck.run(e)}})(jQuery)};
window.Login=window.Login||{}
Login._options={}
Login.initLoginPage=function(i){Login._options=i
$("#login-facebook").click(function(n){Login.connectWithFacebook(i["continueUrl"])})
$("#login-google").click(function(n){Login.connectWithGoogle(i["googleUrl"],i["googleContinueUrl"])})
Analytics.trackSingleEvent("Load Login Form")
FacebookUtil.loadFb()}
Login.baseAppUrl=""
Login.initLoginForm=function(i){Login._options=i
Login.baseAppUrl=i["baseAppUrl"]||""
if($("#identifier").val()){$("#password").focus()}else{$("#identifier").focus()}$("#forgot-hint").click(function(i){var n=$(i.target).prop("href")
var o=$("#identifier").val()
if(n&&o&&o.indexOf("@")>-1){window.top.location=n+"?login_email="+encodeURIComponent(o)
i.preventDefault()}})
Login.attachSubmitHandler(Login.loginWithPassword,$._("Logging in"))}
Login.connectWithFacebook=function(i,n,o){if(!n){n=function(i){window.location=i}}FacebookUtil.runOnFbReady(function(){var e={scope:"email"}
FB.login(function(e){if(e){FacebookUtil.fixMissingCookie(e)}if(e["status"]==="connected"){FacebookUtil.markUsingFbLogin()
var t=Login._options["facebookUrl"]||"/postlogin?type=facebook"
if(o){t+="&isteacher=1"}if(i){t+="&continue="+encodeURIComponent(i)}var a=Analytics.trackSingleEvent("Complete Facebook Signup")
n(t,a)}else{Analytics.trackSingleEvent("Facebook Login Canceled")}},e)})}
Login.connectWithGoogle=function(i,n,o){if(!KA.isMobileCapable&&!KA.isIPad){o=o||function(){window.location=n}
Login.connectWithGoogleComplete=o
centeredPopupWindow(i,"ConnectWithGoogle",870,585)}else{window.location=i+"?continue="+encodeURIComponent(n)}}
Login.loginWithPassword=function(){$("#error-text").css("visiblity","hidden")
if(Login.ensureValid_("#identifier",$._("Email or username required"))&&Login.ensureValid_("#password",$._("Password required"))){Login.asyncFormPost($("#login-form"),function(i){if(i["errors"]){Login.onPasswordLoginFail(i["errors"])}else{Login.onPasswordLoginSuccess(i)}},function(i){})}}
Login.submitDisabled_=false
Login._navigatingAway=false
Login.navigateTo=function(i){Login._navigatingAway=true
window.top.location.replace(Login.baseAppUrl+i)}
Login.disableSubmit=function(){$("#submit-button").attr("disabled",true)
$("#submit-button").val(Login._disabledSubmitText)
Login.submitDisabled_=true}
Login.enableSubmit=function(){$("#submit-button").removeAttr("disabled")
$("#submit-button").val(Login._enabledSubmitText)
Login.submitDisabled_=false}
Login.onPasswordLoginFail=function(i){var n
if(i["badlogin"]){n=$._("Your login or password is incorrect.")}else{n=$._("Error logging in. Please try again.")}$("#error-text").text(n).css("visibility","")
$("#password").val("").focus()}
Login.onPasswordLoginSuccess=function(i){var n="postlogin?type=password"
if(i["continue"]){n+="&continue="+encodeURIComponent(i["continue"])}Login.navigateTo(n)}
Login.ensureValid_=function(i,n,o,e){e=e||function(i){var n=$(i).val()
if(n===$(i).attr("placeholder")){return false}return!!$.trim(n)}
o=o||"#error-text"
if(!e(i)){$(o).text(n)
$(i).focus()
return false}$(o).html("&nbsp;")
return true}
Login.ensureBirthdateValid_=function(i){$("fieldset.birthday-picker").trigger("change")
i=i||"#error-text"
var n=$._("Birthday required")
var o=function(i){return parseInt($(i).val(),10)>0}
return Login.ensureValid_(".birth-month",n,i,o)&&Login.ensureValid_(".birth-day",n,i,o)&&Login.ensureValid_(".birth-year",n,i,o)}
Login.asyncFormPost=function(i,n,o,e){if(Login.submitDisabled_){return}Login.disableSubmit()
$.ajax({type:"POST",url:i.prop("action")||window.location.pathname+window.location.search,data:i.serialize(),dataType:"json",beforeSend:e||$.noop,success:n,error:o,complete:function(){if(!Login._navigatingAway){Login.enableSubmit()}}})}
Login._enabledSubmitText=""
Login._disabledSubmitText=""
Login.attachSubmitHandler=function(i,n){Login._enabledSubmitText=$("#submit-button").val()
Login._disabledSubmitText=n
$("#password").on("keypress",function(n){if(n.keyCode===$.ui.keyCode.ENTER){n.preventDefault()
i()}})
$("#submit-button").click(function(n){n.preventDefault()
i()})}
Login.initBirthdayPicker=function(i){i=i||"#birthday-picker"
var n=$(i)
if(!n.length){return}n.birthdaypicker({placeholder:true,classes:"simple-input ui-corner-all login-input",futureDates:true}).find("option[value='0']").text("")
Login.centerSelectText(i)}
Login.centerSelectText=function(i){if($.browser.webkit){$(i).find("*").addBack().filter("select").css({"padding-top":"0","padding-bottom":"0"})}}
Login.focusOnFirstEmpty=function(i){var n=_.find(_.map(i,$),function(i){return!i.val()||i.val()==="unspecified"})
if(n){n.focus()
return true}return false}
Login.stylizeQTips=function(){_.each($(".icon"),function(i){var n=$(i).prop("title")
$(i).qtip({content:{text:n},style:"qtip-light",position:{my:"top left",at:"bottom right"},hide:{fixed:true,delay:150}})})}
;
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["login-package_signup-success"]=e(function(e,n,a,r,l){a=a||e.helpers
var i="",s,o,t,c,f=this,h="function",p=a.blockHelperMissing,m=a.helperMissing,v=void 0,u=this.escapeExpression
function d(e,n){var r="",l
r+="\n                "
r+='\n                <h3 class="email-header">'
t=a["_"]
l=t||e["_"]
c=f.program(2,g,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===h){l=l.call(e,c)}else{l=p.call(e,l,c)}if(l||l===0){r+=l}r+="</h3>\n            "
return r}function g(e,n){return"We've re-sent you a message at"}function y(e,n){var r="",l
r+="\n                "
r+='\n                <h3 class="email-header">'
t=a["_"]
l=t||e["_"]
c=f.program(5,k,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===h){l=l.call(e,c)}else{l=p.call(e,l,c)}if(l||l===0){r+=l}r+="</h3>\n            "
return r}function k(e,n){return"We've sent you a message at"}function S(e,n){var r="",l
r+='\n                    <img class="mail-icon" src="'
t=a.mailServerIcon
l=t||e.mailServerIcon
if(typeof l===h){l=l.call(e,{hash:{}})}else if(l===v){l=m.call(e,"mailServerIcon",{hash:{}})}r+=u(l)+'">\n                '
return r}function b(e,n){var r="",l
r+="\n                    "
t=a["_"]
l=t||e["_"]
c=f.program(10,_,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===h){l=l.call(e,c)}else{l=p.call(e,l,c)}if(l||l===0){r+=l}r+="\n                "
return r}function _(e,n){return"Check your spam folder if the message doesn't arrive in your inbox soon."}function D(e,n){var r="",l
r+="\n                    "
t=a["_"]
l=t||e["_"]
c=f.program(13,I,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===h){l=l.call(e,c)}else{l=p.call(e,l,c)}if(l||l===0){r+=l}r+="\n                "
return r}function I(e,n){return"Follow the link in that message to create your Khan Academy account."}function N(e,n){var r="",l
r+='\n            <a class="simple-button check-mail-button primary large-font clearfix" href="'
t=a.mailServerUrl
l=t||e.mailServerUrl
if(typeof l===h){l=l.call(e,{hash:{}})}else if(l===v){l=m.call(e,"mailServerUrl",{hash:{}})}r+=u(l)+'">\n                '
r+='\n                <i class="icon-envelope-alt"></i> '
t=a["_"]
l=t||e["_"]
c=f.program(16,U,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===h){l=l.call(e,c)}else{l=p.call(e,l,c)}if(l||l===0){r+=l}r+="\n            </a>\n            "
return r}function U(e,n){var r="",l
r+="Open your "
t=a.mailServerName
l=t||e.mailServerName
if(typeof l===h){l=l.call(e,{hash:{}})}else if(l===v){l=m.call(e,"mailServerName",{hash:{}})}r+=u(l)
return r}function H(e,n){var r="",l
r+='\n            <div class="debug">'
t=a.i18nDoNotTranslate
l=t||e.i18nDoNotTranslate
c=f.program(19,x,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===h){l=l.call(e,c)}else{l=p.call(e,l,c)}if(l||l===0){r+=l}r+='<a href="/completesignup?token='
t=a.token
l=t||e.token
if(typeof l===h){l=l.call(e,{hash:{}})}else if(l===v){l=m.call(e,"token",{hash:{}})}r+=u(l)+'">'
t=a.token
l=t||e.token
if(typeof l===h){l=l.call(e,{hash:{}})}else if(l===v){l=m.call(e,"token",{hash:{}})}r+=u(l)+"</a></div>\n            "
return r}function x(e,n){return"token for debugging: "}i+='<div class="signup-success-dialog modal fade hide">\n    <div class="modal-body">\n        <img src="/images/hand-tree.png" class="tree">\n\n        <div class="body-contents">\n            '
t=a.resendDetected
s=t||n.resendDetected
o=a["if"]
c=f.program(1,d,l)
c.hash={}
c.fn=c
c.inverse=f.program(4,y,l)
s=o.call(n,s,c)
if(s||s===0){i+=s}i+='\n            <div class="address-container">\n                '
t=a.mailServerIcon
s=t||n.mailServerIcon
o=a["if"]
c=f.program(7,S,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(n,s,c)
if(s||s===0){i+=s}i+='\n                <span class="email">'
t=a.email
s=t||n.email
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===v){s=m.call(n,"email",{hash:{}})}i+=u(s)+'</span>\n            </div>\n\n            <h4 class="instructions">\n                '
t=a.resendDetected
s=t||n.resendDetected
o=a["if"]
c=f.program(9,b,l)
c.hash={}
c.fn=c
c.inverse=f.program(12,D,l)
s=o.call(n,s,c)
if(s||s===0){i+=s}i+="\n            </h4>\n\n            "
t=a.mailServerUrl
s=t||n.mailServerUrl
o=a["if"]
c=f.program(15,N,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(n,s,c)
if(s||s===0){i+=s}i+="\n\n            "
t=a.token
s=t||n.token
o=a["if"]
c=f.program(18,H,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(n,s,c)
if(s||s===0){i+=s}i+="\n        </div>\n    </div>\n</div>\n"
return i})})()
;
Login.SignupMode={UNINITIALIZED:0,NORMAL:1,PARENT:2,TEACHER:3}
Login._mode=Login.SignupMode.UNINITIALIZED
Login.initSignupPage=function(e){var i=window.location.href
if(readCookie("u13")&&i.indexOf("signup")!==-1){window.location.href="/signup?under13=1"
return}Login.attachSubmitHandler(Login.submitSignup,$._("Submitting..."))
Login._options=e
Login.initPlaceholder()
Login.showSignupForm()
if(Login._options["parentEmail"]||Login._options["isParent"]){Login.setSignupMode(Login.SignupMode.PARENT,true)}else if(Login._options["isTeacher"]){Login.setSignupMode(Login.SignupMode.TEACHER,true)}else{Login.setSignupMode(Login.SignupMode.NORMAL,true)}var n={"continue":Login._continue,parentEmail:!!Login._options["parentEmail"]}
Analytics.trackSingleEvent("Load Signup Form",n)
FacebookUtil.loadFb()
var o=$(".fb-missing-email")
o.on("click",".showdetails",function(){o.find(".details").slideToggle()})}
Login.initPlaceholder=function(){$(".support-placeholder [placeholder]").focus(function(){var e=$(this)
if(e.val()===e.attr("placeholder")){e.val("")
e.removeClass("placeholder")}}).blur(function(){var e=$(this)
if(e.val()===""||e.val()===e.attr("placeholder")){e.addClass("placeholder")
e.val(e.attr("placeholder"))}}).blur()}
Login.setSignupMode=function(e,i){Login._mode=e
if(i){Login._defaultLabels={firstname:$('label[for="firstname"]').text(),lastname:$('label[for="lastname"]').text(),email:$('label[for="email"]').text(),birthday:$('label[for="birthday"]').text()}}else{$(".signup-top").addClass("enable-transitions")}if(e===Login.SignupMode.NORMAL){Login._continue=Login._options["continue"]||""
$(".normal-signup").show()
$(".parent-signup").hide()
$(".teacher-signup").hide()
$('label[for="firstname"]').text(Login._defaultLabels.firstname)
$('label[for="lastname"]').text(Login._defaultLabels.lastname)
$('label[for="email"]').text(Login._defaultLabels.email)
$('label[for="birthday"]').text(Login._defaultLabels.birthday)
$(".signup-top").removeClass("role-mode")}else if(e===Login.SignupMode.PARENT){Login._continue="/createchild"
if(i){$(".normal-signup-link").hide()}else{Analytics.trackSingleEvent("Choose Parent Signup Form")}$(".parent-signup").show()
$(".normal-signup").hide()
$(".teacher-signup").hide()
$('label[for="firstname"]').text($._("Parent's first name"))
$('label[for="lastname"]').text($._("Parent's last name"))
$('label[for="email"]').text($._("Parent's email"))
$('label[for="birthday"]').text($._("Parent's birthdate"))
$(".signup-top").addClass("role-mode")}else if(e===Login.SignupMode.TEACHER){Login._continue="/students"
if(i){$(".normal-signup-link").hide()}else{Analytics.trackSingleEvent("Choose Teacher Signup Form")}$(".teacher-signup").show()
$(".parent-signup").hide()
$(".normal-signup").hide()
$('label[for="firstname"]').text(Login._defaultLabels.firstname)
$('label[for="lastname"]').text(Login._defaultLabels.lastname)
$('label[for="email"]').text(Login._defaultLabels.email)
$('label[for="birthday"]').text(Login._defaultLabels.birthday)
$(".signup-top").addClass("role-mode")}$("input[name=continue]").val(Login._continue)
$("input[name=isteacher]").val(e===Login.SignupMode.TEACHER?"1":"")}
Login._signupFacebook=function(e){var i=Analytics.trackSingleEvent("Begin Facebook Signup")
Login.connectWithFacebook(Login._continue,function(e,n){i.always(function(){n.always(function(){window.location=e})})},Login._mode===Login.SignupMode.TEACHER)}
Login._signupGoogle=function(e){var i=Login._options["googleContinueUrl"]
var n=""
if(_.isString(i)){n=i}else{n=i["default"]
if(Login._mode===Login.SignupMode.PARENT){n=i["createchild"]}else if(Login._mode===Login.SignupMode.TEACHER){n=i["teacher"]}}Login.connectWithGoogle(Login._options["googleUrl"],n)
e.preventDefault()}
Login._goToLogin=function(e){var i=Login._options["loginUrlBase"]
if(Login._continue){i+="?continue="+encodeURIComponent(Login._continue)}window.location=i}
Login.showSignupForm=function(){$("#login-facebook").click(Login._signupFacebook)
$("#login-google").click(Login._signupGoogle)
$(".login-link").click(Login._goToLogin)
Login.initBirthdayPicker()
$("#email").on(Keys.textChangeEvents,function(e){Login.checkEmailForSuggestions_()})
$("#error-text-email").on("click",".email-suggestion .suggestion-value",function(e){var i=$(e.target).text()
$("#email").val(i).focus()
Login.clearEmailSuggestion_()})
if($(".email-form").is(":visible")){$(".email-form").find("input").first().focus()}if($("#email").val()){$(".email-form-info").hide()
$(".email-form").show()}else{$(".expand-email-form").on("click",function(){$(".email-form-info").slideUp()
$(".email-form").slideDown(function(){$(".email-form").find("input").first().focus()})})}if(readCookie("u13")){$(".homepage-expand-email-form").on("click",function(){window.location.href="/signup?under13=1"})}else{$(".homepage-expand-email-form").on("click",Login._showSecondaryWidget)
$(".homepage-show-oauth-link").on("click",Login._showPrimaryWidget)
$(".role-signup-prompt").show()
$(".homepage-teacher-signup-link").on("click",Login._teacherSignupButtonClicked)
$(".homepage-parent-signup-link").on("click",Login._parentSignupButtonClicked)}$(".teacher-signup-link").on("click",function(){Login.setSignupMode(Login.SignupMode.TEACHER)})
$(".parent-signup-link").on("click",function(){Login.setSignupMode(Login.SignupMode.PARENT)})
$(".normal-signup-link").on("click",function(){Login.setSignupMode(Login.SignupMode.NORMAL)})}
Login._teacherSignupButtonClicked=function(e){if(false){}else if(readCookie("u13")==="1"){}else{$("#homepage-signup-callout").addClass("teacher-signup-form")
Login.setSignupMode(Login.SignupMode.TEACHER,false)
Login._showSecondaryWidget()
e.preventDefault()}}
Login._parentSignupButtonClicked=function(e){if(false){}else if(readCookie("u13")==="1"){}else{$("#homepage-signup-callout").addClass("parent-signup-form")
Login.setSignupMode(Login.SignupMode.PARENT,false)
Login._showSecondaryWidget()
e.preventDefault()}}
Login._showPrimaryWidget=function(){$(".primary-widget").show()
$(".secondary-widget").hide()
if(Login._mode===Login.SignupMode.TEACHER){$("#homepage-signup-callout").removeClass("teacher-signup-form")
Login.setSignupMode(Login.SignupMode.NORMAL,false)}if(Login._mode===Login.SignupMode.PARENT){$("#homepage-signup-callout").removeClass("parent-signup-form")
Login.setSignupMode(Login.SignupMode.NORMAL,false)}}
Login._showSecondaryWidget=function(){$(".primary-widget").hide()
$(".secondary-widget").show(0,function(){if(!$("body").hasClass("ie")){$(".homepage-email-form").find("input").first().focus()}})}
Login.checkEmailForSuggestions_=_.debounce(function(){$("#email").mailcheck({suggested:function(e,i){$(".error-div .field-error").text("")
$("#error-text-email").html("<span class='email-suggestion'>"+$._("Did you mean <span class='suggestion-value'>%(suggestion)s</span>?",{suggestion:i.full})+"</span>"+"</span>")},empty:function(e){Login.clearEmailSuggestion_()}})},800)
Login.clearEmailSuggestion_=function(){$("#error-text-email").text("")}
Login.submitSignup=function(){if(Login.submitDisabled_){return}$(".error-div .field-error").text("")
$(".error-div #error-text-email").html("")
var e=Login.ensureValid_("#firstname",$._("Please tell us your first name"),"#error-text-firstname")&&Login.ensureValid_("#lastname",$._("Please tell us your last name"),"#error-text-lastname")
e=e&&Login.ensureValid_("#email",$._("Please tell us your email address"),"#error-text-email")
if(Login._mode===Login.SignupMode.NORMAL){e=e&&Login.ensureBirthdateValid_("#error-text-birthday")}if(e){Login.disableSubmit()
var i=$("#signup-form").serialize()
$.ajax({type:"POST",url:$("#signup-form").prop("action"),data:i,dataType:"json",success:function(e){Login.handleSignupResponse(e)},error:function(){}})}}
Login.handleSignupResponse=function(e){if(e["under13"]){Login.navigateTo("signup?under13=1")
return}if(e["alreadyLoggedIn"]){Login.navigateTo("/?qnote=loggedin")
return}var i=e["errors"]||{}
if(_.isEmpty(i)){Analytics.trackSingleEvent("Submit Signup Form")
var n=Templates.get("login.signup-success")
var o=$(n(e)).appendTo($(document.body)).modal({backdrop:"static",show:true})}else{$("#error-text-email").html(i["email_html"]).focus()
Login.enableSubmit()}}
;
Login.initInviteSignupPage=function(o){$("#login-facebook").click(Login._signupFacebook)
$("#login-google").click(Login._signupGoogle)
Login._options=o
Analytics.trackSingleEvent("Load InviteSignup Form")
FacebookUtil.loadFb()}
;
Login.initCompleteSignupForm=function(n){if(readCookie("u13")){var e="/signup?under13=1"
if(n["inviteId"]){e+="&inviteId="+n["inviteId"]}window.location.href=e
return}Login.baseAppUrl=n&&n["baseAppUrl"]||""
Login.focusOnFirstEmpty(["#nickname","#gender","#username","#password"])
Login.centerSelectText("#gender")
Login.attachSubmitHandler(Login.submitCompleteSignup,$._("Signing up"))
Analytics.trackSingleEvent("Load Complete-Signup Form")}
Login.submitCompleteSignup=function(){var n=Login.ensureValid_("#nickname",$._("Please tell us your name."))&&Login.ensureValid_("#username",$._("Please pick a username."))&&Login.ensureValid_("#password",$._("We need a password from you."))
if(n){Analytics.trackSingleEvent("Submit Password Signup")
Login.asyncFormPost($("#signup-form"),function(n){if(n["errors"]){Login.onCompleteSignupError(n["errors"])}else{Login.onCompleteSignupSuccess(n)}},function(n){Analytics.trackSingleEvent("Password Signup Hard Failure")},function(n){Analytics.trackSingleEvent("Submit Password Signup Async Begin")})}else{Analytics.trackSingleEvent("Password Signup Incomplete Fields")}}
Login.onCompleteSignupSuccess=function(n){Analytics.trackSingleEvent("Complete Password Signup").always(function(){Login.onPasswordLoginSuccess(n)})}
Login.onCompleteSignupError=function(n){var e=_.find(["nickname","username","password","birthdate","under13"],function(e){return e in n})
Analytics.trackSingleEvent("Password Signup Validation Failure",{firstFailed:e})
if(!e){$("#error-text").text($._("Oops. Something went wrong. Please try again."))
return}if(e==="under13"){var i="signup?under13=1"
if(n["inviteId"]){i+="&inviteId="+n["inviteId"]}Login.navigateTo(i)
return}$("#error-text").text(n[e])
$("#"+e).focus()}
;
Login.initCreateChildForm=function(e){Login.baseAppUrl=e["baseAppUrl"]||""
Login.initBirthdayPicker()
Login.centerSelectText("#gender")
Login.focusOnFirstEmpty(["#username","#password"])
Login.attachSubmitHandler(Login.submitCreateChild,$._("Creating account"))
Login.stylizeQTips()
Analytics.trackSingleEvent("Load Create Child Form")}
Login.submitCreateChild=function(){var e=Login.ensureValid_("#username",$._("Please pick a username."))&&Login.ensureValid_("#password",$._("We need a password from you."))&&Login.ensureBirthdateValid_()
if(e){Login.asyncFormPost($("#create-child-form"),function(e){if(e["errors"]){Login.onCreateChildError(e["errors"])}else{Login.onCreateChildSuccess(e)}},function(e){})}}
Login.onCreateChildSuccess=function(e){Analytics.trackSingleEvent("Submit Create Child Form")
Login.navigateTo("students?listId=childAccounts")}
Login.onCreateChildError=function(e){var i=_.find(["username","password"],function(i){return i in e})
if(i){$("#error-text").text(e[i])
$("#"+i).focus()}else{$("#error-text").text(_.values(e)[0])}}
;
Login.initCreateStudentForm=function(t){Login.baseAppUrl=t["baseAppUrl"]||""
Login.initBirthdayPicker()
Login.centerSelectText("#gender")
Login.focusOnFirstEmpty(["#username","#password"])
Login.attachSubmitHandler(Login.submitCreateStudent,$._("Creating..."))
$("#password").focus(function(){$(".record-info-tip").mouseenter()}).blur(function(){$(".qtip").qtip("hide")})
$("#create-another-student-button").click(Login.clickCreateAnotherStudent)
Login.initPlaceholder()
Login.stylizeQTips()
Analytics.trackSingleEvent("Load Create Student Form")}
Login.submitCreateStudent=function(){var t=Login.ensureValid_("#username",$._("Please pick a username."))&&Login.ensureValid_("#password",$._("We need a password from you."))&&Login.ensureBirthdateValid_()
if(t){Login.asyncFormPost($("#create-student-form"),function(t){if(t["success"]){Login.onCreateStudentSuccess(t["success"])}else{Login.onCreateStudentError(t["errors"])}},function(t){Analytics.trackSingleEvent("Submit Create Student Form Hard Fail")
Login.onCreateStudentError({hardFail:$._("Oops, we broke something, please try again.")})
KAConsole.log("Failed to post create-student-form.")
KAConsole.log(t)})}}
Login.onCreateStudentSuccess=function(t){Analytics.trackSingleEvent("Submit Create Student Form Success")
var e=t.student
StudentLists.Data.allStudents.push(e)
StudentLists.Data.generateStudentIndices()
if(StudentLists.Data.allStudents.length===1){var n=StudentLists.currentListId
SubscriptionToggle.updateListSubscription(n,true,true)}InviteStudentsUI.resetAlerts()
$("#created-student-username").text($("#username").val())
$("#create-student-container").hide()
$("#create-student-success-container").show()
$("#create-another-student-button").focus()
var r=$("#createdStudentTemplate .student-row").clone().addClass("new-request").attr("data-student-key",e.key).find(".student-name a").text(e.nickname).attr("href",e.profileRoot).end().find(".bulk-edit-checkbox").change(StudentLists.handleBulkEditCheckboxChange).end().prependTo(".actual-students-table").slideDown("fast")
StudentLists.redrawListView(false)
InviteStudentsUI.fadeHighlight()
InviteStudentsUI.removeEmptyClassInstructions()}
Login.onCreateStudentError=function(t){Analytics.trackSingleEvent("Submit Create Student Form Fail")
var e=_.find(["username","password"],function(e){return e in t})
if(e){$("#error-text").text(t[e])
$("#"+e).focus()}else{$("#error-text").text(_.values(t)[0])}}
Login.clickCreateAnotherStudent=function(){Analytics.trackSingleEvent("Click to Create Another Student")
$("#create-student-success-container").hide()
$("#create-student-container").show()
$("#create-student-container input:first").focus()}
;
window.DupeAccount=window.DupeAccount||{}
DupeAccount.init=function(e){DupeAccount.$confirmCheckbox=$("#account-confirm")
DupeAccount.$finishLogin=$("#finish-login")
DupeAccount.totalChildren=0
DupeAccount.totalStudents=0
var t=$("#account-list")
var n=$("#account-description")
_.each(e,function(e){var n=e["profile"]
var c=e["numChildren"]
var a=e["numStudents"]
var o=e["numScratchpads"]
DupeAccount.totalChildren+=c
DupeAccount.totalStudents+=a
n.href="javascript:void(0);"
var u=new HoverCardView({model:new ProfileModel(n)})
var i=$('<input type="radio" name="accountKey">').val(n.userKey)
var d=$("<li>"+$.ngettext("1 completed video","%(num)s completed videos",n.countVideosCompleted)+"</li>")
var l=$('<ul class="account-description">')
if(c>0){l.append($('<li class="account-important delete-warn">'+$.ngettext("Parent to 1 child account","Parent to %(num)s child accounts",c)+"</li>"))}if(a>0){l.append($('<li class="account-important">'+$.ngettext("Coaching 1 student","Coaching %(num)s students",a)+"</li>"))}if(o>0){l.append($('<li class="account-important delete-warn">'+(o===1e3?$._("1000+ computer science programs"):$.ngettext("1 computer science program","%(num)s computer science programs",o))+"</li>"))}l.append(d)
var s=$('<div class="account-to-keep account-future">'+$._("This account will be kept")+"</div>")
var r=$('<div class="account-to-delete account-future">'+$._("This account will be deleted")+"</div>")
var p=$('<div class="account-container vertical-shadow">').append(u.render().$el.contents()).append(l).append(s).append(r)
var h=$("<label>").append(i).append(p)
$('<li class="uninitialized">').data("profile",n).data("numChildren",e["numChildren"]).data("numStudents",e["numStudents"]).append(h).appendTo(t)})
$(".hover-card-content-container").removeClass("vertical-shadow")
t.on("change","input:radio",function(){var t=$(this)
if(t.prop("checked")){var c=t.closest("li")
$("#account-list > li").removeClass("checked").removeClass("uninitialized")
c.addClass("checked")
var a=c.data("profile")
n.text('"'+a.nickname+'"')
var o=DupeAccount.totalChildren-c.data("numChildren")
var u=""
if(o>0){u=" ("+$.ngettext("plus 1 child account","plus %(num)s child accounts",o)+") "}$("#deleting-children").text(u)
var i=DupeAccount.totalStudents-c.data("numStudents")
var d=""
if(i>0){d=$.ngettext($.ngettext("The student coached by this account will not be deleted, but they will need to re-add me as a coach.","The student coached by these accounts will not be deleted, but they will need to re-add me as a coach.",e.length-1),$.ngettext("The students coached by this account will not be deleted, but they will need to re-add me as a coach.","The students coached by these accounts will not be deleted, but they will need to re-add me as a coach.",e.length-1),i)}$("#students-message").text(d)}DupeAccount._updateSubmitButton()})
DupeAccount.$confirmCheckbox.change(function(){DupeAccount._updateSubmitButton()})}
DupeAccount._updateSubmitButton=function(){DupeAccount.$finishLogin.prop("disabled",!DupeAccount.$confirmCheckbox.prop("checked")||$("#account-list li.checked").length===0)}
;
window.Settings=window.Settings||{}
Settings.initPasswordChangeForm=function(){$("#password2").on("keypress",function(s){if(s.keyCode===$.ui.keyCode.ENTER){s.preventDefault()
Settings.submitForm_()}})
if($("#existing").get(0)){$("#existing").focus()}else{$("#password1").focus()}$("#submit-settings").click(_.bind(Settings.onClickSubmit_,Settings))}
Settings.onClickSubmit_=function(s){s.preventDefault()
this.submitForm_()}
Settings.submitForm_=function(){$("#submit-settings").val($._("Submitting...")).prop("disabled",true)
Login.asyncFormPost($("#pw-change-form"),function(s){var e=false
if(s["errors"]){var t=s["errors"]
var i=_.first(_.keys(t))
$(".message-container").removeClass("success").addClass("error").text(t[i])
$("#"+i).focus()
e=true}else if(s["success"]){$(".message-container").removeClass("error").addClass("success").text(s["success"])
if(s["continue"]){window.top.location.href=s["continue"]}else{$("#existing, #password1, #password2").val("")
e=true}}if(e){$("#submit-settings").val($._("Change password")).prop("disabled",false)}})}
