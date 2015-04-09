<?php
$id = protect($_GET['id']);
$sql = mysql_query("SELECT * FROM sellify_items WHERE id='$id'");
if(mysql_num_rows($sql)==0) { $redirect = $web['url']."not_found"; header("Location: $redirect"); }
$row = mysql_fetch_array($sql);

function formatBytes($bytes, $precision = 2) { 
    if ($bytes > pow(1024,3)) return round($bytes / pow(1024,3), $precision)." GB";
    else if ($bytes > pow(1024,2)) return round($bytes / pow(1024,2), $precision)." MB";
    else if ($bytes > 1024) return round($bytes / 1024, $precision)." KB";
    else return ($bytes)." B";
} 

$extnafaila = end(explode('.',$row['main_file'])); 

$extnafaila = strtoupper($extnafaila); 

$filesize = formatBytes(filesize($row['main_file']));
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo $row['name']; ?> - <?php echo $web['title']; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php echo $web['description']; ?>">
		<meta name="author" content="Nidigo Design">
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
		
		<!-- Stylesheets -->
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_global.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_productpage.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_marketplace.css">
		<link href="<?php echo $web['url']; ?>static/gen/index-ff32bbed5acf272afa0480aae0eaa0d5.css" media="all" rel="stylesheet" type="text/css" />
		<link href="<?php echo $web['url']; ?>static/gen/index-cc0b97a49fc32ccbbd1bd6960a1574fb.css" media="all" rel="stylesheet" type="text/css" />
		<!-- End Stylesheets -->
	    
		<!-- Favicons -->
		<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#2b5797">
		<meta name="msapplication-TileImage" content="<?php echo $web['url']; ?>static/favicons/mstile-144x144.png">
		<!-- End Favicons -->

		<!-- Custom Fonts
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300,500' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

		<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
  <!-- SCRIPT HEAD --
  <script type="text/javascript" src="//use.typekit.net/dau7ios.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
  <script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"UAMAUVZQGwEGUldUBQM="};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o?o:e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({QJf3ax:[function(t,e){function n(t){function e(e,n,a){t&&t(e,n,a),a||(a={});for(var c=s(e),u=c.length,f=i(a,o,r),d=0;u>d;d++)c[d].apply(f,n);return f}function a(t,e){u[t]=s(t).concat(e)}function s(t){return u[t]||[]}function c(){return n(e)}var u={};return{on:a,emit:e,create:c,listeners:s,_events:u}}function r(){return{}}var o="nr@context",i=t("gos");e.exports=n()},{gos:"7eSDFh"}],ee:[function(t,e){e.exports=t("QJf3ax")},{}],3:[function(t){function e(t,e,n,i,s){try{c?c-=1:r("err",[s||new UncaughtException(t,e,n)])}catch(u){try{r("ierr",[u,(new Date).getTime(),!0])}catch(f){}}return"function"==typeof a?a.apply(this,o(arguments)):!1}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function n(t){r("err",[t,(new Date).getTime()])}var r=t("handle"),o=t(4),i=t("ee"),a=window.onerror,s=!1,c=0;t("loader").features.err=!0,window.onerror=e,NREUM.noticeError=n;try{throw new Error}catch(u){"stack"in u&&(t(5),t(3),"addEventListener"in window&&t(1),window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&t(2),s=!0)}i.on("fn-start",function(){s&&(c+=1)}),i.on("fn-err",function(t,e,r){s&&(this.thrown=!0,n(r))}),i.on("fn-end",function(){s&&!this.thrown&&c>0&&(c-=1)}),i.on("internal-error",function(t){r("ierr",[t,(new Date).getTime(),!0])})},{1:4,2:7,3:5,4:18,5:6,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],4:[function(t,e){function n(t){i.inPlace(t,["addEventListener","removeEventListener"],"-",r)}function r(t){return t[1]}var o=(t(1),t("ee").create()),i=t(2)(o),a=t("gos");if(e.exports=o,n(window),"getPrototypeOf"in Object){for(var s=document;s&&!s.hasOwnProperty("addEventListener");)s=Object.getPrototypeOf(s);s&&n(s);for(var c=XMLHttpRequest.prototype;c&&!c.hasOwnProperty("addEventListener");)c=Object.getPrototypeOf(c);c&&n(c)}else XMLHttpRequest.prototype.hasOwnProperty("addEventListener")&&n(XMLHttpRequest.prototype);o.on("addEventListener-start",function(t){if(t[1]){var e=t[1];"function"==typeof e?this.wrapped=t[1]=a(e,"nr@wrapped",function(){return i(e,"fn-",null,e.name||"anonymous")}):"function"==typeof e.handleEvent&&i.inPlace(e,["handleEvent"],"fn-")}}),o.on("removeEventListener-start",function(t){var e=this.wrapped;e&&(t[1]=e)})},{1:18,2:19,ee:"QJf3ax",gos:"7eSDFh"}],5:[function(t,e){var n=(t(2),t("ee").create()),r=t(1)(n);e.exports=n,r.inPlace(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","msRequestAnimationFrame"],"raf-"),n.on("raf-start",function(t){t[0]=r(t[0],"fn-")})},{1:19,2:18,ee:"QJf3ax"}],6:[function(t,e){function n(t,e,n){var r=t[0];"string"==typeof r&&(r=new Function(r)),t[0]=o(r,"fn-",null,n)}var r=(t(2),t("ee").create()),o=t(1)(r);e.exports=r,o.inPlace(window,["setTimeout","setInterval","setImmediate"],"setTimer-"),r.on("setTimer-start",n)},{1:19,2:18,ee:"QJf3ax"}],7:[function(t,e){function n(){c.inPlace(this,d,"fn-")}function r(t,e){c.inPlace(e,["onreadystatechange"],"fn-")}function o(t,e){return e}var i=t("ee").create(),a=t(1),s=t(2),c=s(i),u=s(a),f=window.XMLHttpRequest,d=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"];e.exports=i,window.XMLHttpRequest=function(t){var e=new f(t);try{i.emit("new-xhr",[],e),u.inPlace(e,["addEventListener","removeEventListener"],"-",function(t,e){return e}),e.addEventListener("readystatechange",n,!1)}catch(r){try{i.emit("internal-error",[r])}catch(o){}}return e},window.XMLHttpRequest.prototype=f.prototype,c.inPlace(XMLHttpRequest.prototype,["open","send"],"-xhr-",o),i.on("send-xhr-start",r),i.on("open-xhr-start",r)},{1:4,2:19,ee:"QJf3ax"}],8:[function(t){function e(t){if("string"==typeof t&&t.length)return t.length;if("object"!=typeof t)return void 0;if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if("undefined"!=typeof FormData&&t instanceof FormData)return void 0;try{return JSON.stringify(t).length}catch(e){return void 0}}function n(t){var n=this.params,r=this.metrics;if(!this.ended){this.ended=!0;for(var i=0;c>i;i++)t.removeEventListener(s[i],this.listener,!1);if(!n.aborted){if(r.duration=(new Date).getTime()-this.startTime,4===t.readyState){n.status=t.status;var a=t.responseType,u="arraybuffer"===a||"blob"===a||"json"===a?t.response:t.responseText,f=e(u);if(f&&(r.rxSize=f),this.sameOrigin){var d=t.getResponseHeader("X-NewRelic-App-Data");d&&(n.cat=d.split(", ").pop())}}else n.status=0;r.cbTime=this.cbTime,o("xhr",[n,r,this.startTime])}}}function r(t,e){var n=i(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}if(window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)){t("loader").features.xhr=!0;var o=t("handle"),i=t(2),a=t("ee"),s=["load","error","abort","timeout"],c=s.length,u=t(1);t(4),t(3),a.on("new-xhr",function(){this.totalCbs=0,this.called=0,this.cbTime=0,this.end=n,this.ended=!1,this.xhrGuids={}}),a.on("open-xhr-start",function(t){this.params={method:t[0]},r(this,t[1]),this.metrics={}}),a.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),a.on("send-xhr-start",function(t,n){var r=this.metrics,o=t[0],i=this;if(r&&o){var u=e(o);u&&(r.txSize=u)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(i.params.aborted=!0),("load"!==t.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof n.onload))&&i.end(n)}catch(e){try{a.emit("internal-error",[e])}catch(r){}}};for(var f=0;c>f;f++)n.addEventListener(s[f],this.listener,!1)}),a.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),a.on("xhr-load-added",function(t,e){var n=""+u(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),a.on("xhr-load-removed",function(t,e){var n=""+u(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),a.on("addEventListener-end",function(t,e){e instanceof XMLHttpRequest&&"load"===t[0]&&a.emit("xhr-load-added",[t[1],t[2]],e)}),a.on("removeEventListener-end",function(t,e){e instanceof XMLHttpRequest&&"load"===t[0]&&a.emit("xhr-load-removed",[t[1],t[2]],e)}),a.on("fn-start",function(t,e,n){e instanceof XMLHttpRequest&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),a.on("fn-end",function(t,e){this.xhrCbStart&&a.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{1:"XL7HBI",2:9,3:7,4:4,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],9:[function(t,e){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");return!r.port&&o[1]&&(r.port=o[1].split("/")[0].split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname),r.sameOrigin=!e.hostname||e.hostname===document.domain&&e.port===n.port&&e.protocol===n.protocol,r}},{}],gos:[function(t,e){e.exports=t("7eSDFh")},{}],"7eSDFh":[function(t,e){function n(t,e,n){if(r.call(t,e))return t[e];var o=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:o,writable:!0,enumerable:!1}),o}catch(i){}return t[e]=o,o}var r=Object.prototype.hasOwnProperty;e.exports=n},{}],D5DuLP:[function(t,e){function n(t,e,n){return r.listeners(t).length?r.emit(t,e,n):(o[t]||(o[t]=[]),void o[t].push(e))}var r=t("ee").create(),o={};e.exports=n,n.ee=r,r.q=o},{ee:"QJf3ax"}],handle:[function(t,e){e.exports=t("D5DuLP")},{}],XL7HBI:[function(t,e){function n(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:i(t,o,function(){return r++})}var r=1,o="nr@id",i=t("gos");e.exports=n},{gos:"7eSDFh"}],id:[function(t,e){e.exports=t("XL7HBI")},{}],loader:[function(t,e){e.exports=t("G9z0Bl")},{}],G9z0Bl:[function(t,e){function n(){var t=p.info=NREUM.info;if(t&&t.agent&&t.licenseKey&&t.applicationID&&c&&c.body){p.proto="https"===d.split(":")[0]||t.sslForHttp?"https://":"http://",a("mark",["onload",i()]);var e=c.createElement("script");e.src=p.proto+t.agent,c.body.appendChild(e)}}function r(){"complete"===c.readyState&&o()}function o(){a("mark",["domContent",i()])}function i(){return(new Date).getTime()}var a=t("handle"),s=window,c=s.document,u="addEventListener",f="attachEvent",d=(""+location).split("?")[0],p=e.exports={offset:i(),origin:d,features:{}};c[u]?(c[u]("DOMContentLoaded",o,!1),s[u]("load",n,!1)):(c[f]("onreadystatechange",r),s[f]("onload",n)),a("mark",["firstbyte",i()])},{handle:"D5DuLP"}],18:[function(t,e){function n(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(0>o?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=n},{}],19:[function(t,e){function n(t){return!(t&&"function"==typeof t&&t.apply&&!t[i])}var r=t("ee"),o=t(1),i="nr@wrapper",a=Object.prototype.hasOwnProperty;e.exports=function(t){function e(t,e,r,a){function nrWrapper(){var n,i,s,u;try{i=this,n=o(arguments),s=r&&r(n,i)||{}}catch(d){f([d,"",[n,i,a],s])}c(e+"start",[n,i,a],s);try{return u=t.apply(i,n)}catch(p){throw c(e+"err",[n,i,p],s),p}finally{c(e+"end",[n,i,u],s)}}return n(t)?t:(e||(e=""),nrWrapper[i]=!0,u(t,nrWrapper),nrWrapper)}function s(t,r,o,i){o||(o="");var a,s,c,u="-"===o.charAt(0);for(c=0;c<r.length;c++)s=r[c],a=t[s],n(a)||(t[s]=e(a,u?s+o:o,i,s,t))}function c(e,n,r){try{t.emit(e,n,r)}catch(o){f([o,e,n,r])}}function u(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){f([r])}for(var o in t)a.call(t,o)&&(e[o]=t[o]);return e}function f(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=r),e.inPlace=s,e.flag=i,e}},{1:18,ee:"QJf3ax"}]},{},["G9z0Bl",3,8]);</script>
  -->
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-17843759-11', 'auto');
	ga('require', 'linkid');
	ga('set', 'dimension4', window.location.pathname);
  </script>
  
  <style>
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  z-index: -1;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}

/********** Blue *************/
.blue,
.toggle-switch *:checked + span:before,
.profile-widget-head:before,
.keys span.operator,
.tag-button:hover,
.dynamic-tags .tagsinput .tag:hover,
.dynamic-tags .tagsinput .tag:hover a,
.thumb > a,
.anchor > li > a.selected,
.price-table .signup > a
{
	background:#6a94ff;
	color:#fff;
}
.dropdown > a > span.blue:before{
	border-left-color:#6a94ff;
}
.anchor > li > a.selected{
	border-color:#6a94ff;
}
.menu-sec > p > a,
.mail-labels > ul > li > a > i,
.my-profile-widget > a:hover {
	color:#6a94ff;
}

/********** Red *************/
.red-color,
.toggle-switch *:checked + span:before,
.profile-widget-head:before,
.keys span.operator,
.tag-button:hover,
.dynamic-tags .tagsinput .tag:hover,
.dynamic-tags .tagsinput .tag:hover a,
.thumb > a,
.anchor > li > a.selected,
.price-table .signup > a
{
	background:#FF4242;
	color:#fff;
}
.dropdown > a > span.blue:before{
	border-left-color:#FF4242;
}
.anchor > li > a.selected{
	border-color:#FF4242;
}
.menu-sec > p > a,
.mail-labels > ul > li > a > i,
.my-profile-widget > a:hover {
	color:#FF4242;
}

/********** Orange *************/
.orange-color,
.toggle-switch *:checked + span:before,
.profile-widget-head:before,
.keys span.operator,
.tag-button:hover,
.dynamic-tags .tagsinput .tag:hover,
.dynamic-tags .tagsinput .tag:hover a,
.thumb > a,
.anchor > li > a.selected,
.price-table .signup > a
{
	background:#FF9742;
	color:#fff;
}
.dropdown > a > span.blue:before{
	border-left-color:#FF9742;
}
.anchor > li > a.selected{
	border-color:#FF9742;
}
.menu-sec > p > a,
.mail-labels > ul > li > a > i,
.my-profile-widget > a:hover {
	color:#FF9742;
}

#footer {
    padding-top: 50px;
}

ol li {
   list-style: decimal inside;
   margin-left: 20px
}

ul li {
   list-style: circle inside;
   margin-left: 20px
}

em {
   font-style: italic;
}
  </style>
</head>

<script>ga('send', 'pageview');</script>

<script>ga('send', 'pageview');</script>


    
<?php if(!$_SESSION['ps_usern']) { ?>
<div class="ui grid full-width sellfy-header">
  <div class="row">
	<div onmousedown="return false">
		<p align="center">
		<a href="<?php echo $web['url']; ?>"><img src="<?php echo $web['url']; ?>static/logo/logo.png" alt="logo" style="width:240px; height:46px;"  /></a>
		</p>
	</div>
	
  </div>
</div>
<?php } ?>
<?php if($_SESSION['ps_usern']) { ?>
<nav class="ui grid full-width sellfy-header">
  <div class="row">
    <div class="column four wide left aligned">
      <div onmousedown="return false">
		<a href="<?php echo $web['url']; ?>"><img src="<?php echo $web['url']; ?>static/logo/logo.png" alt="logo" style="width:240px; height:46px;"  /></a>
	  </div>
    </div>
    <div class="column twelve wide right aligned connect-panel">
      <a href="<?php echo $web['url']; ?>dashboard" data-pushstate="true" class="header-menu no-mobile" data-top-menu="dashboard"
        title="Go to my dashboard">
        Dashboard
      </a>
	  <span>&nbsp;</span>
      <a href="<?php echo $web['url']; ?>upload" data-pushstate="true" class="header-menu no-mobile" data-top-menu="newProduct" title="Upload new product">
        Upload
      </a>
	  <span>&nbsp;</span>
      <div class="ui top right pointing dropdown text header-dropdown-right">
        <span class="header-merchant-logo header-dropdown-url" style="background-image: url('<?php echo $web['url']; ?>static/logo/avatar.png')"></span>
        <i class="fa fa-angle-down"></i>
        <div class="menu header-notification-dropdown">
          <div class="item double red">
            <a class="visible">
              <p style="font-weight:bold"><span style="color:black"><?php echo $web['title']; ?></span></p>
            </a>
            <a class="hidden" href="<?php echo $web['url']; ?>">
              View my store page <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><i class="fa fa-angle-right"></i>
            </a>
          </div>
          <div class="ui divider"></div>
          <div class="item">
            <a href="<?php echo $web['url']; ?>dashboard" data-pushstate="true" title="Go to my dashboard">
              My dashboard
            </a>
          </div>
          <div class="item">
            <a href="<?php echo $web['url']; ?>products" data-pushstate="true" title="View my products">
              My products
            </a>
          </div>
          <div class="ui divider"></div>
          <div class="item">
            <a href="<?php echo $web['url']; ?>admin" data-pushstate="true" title="Edit my settings">
              Admin panel
            </a>
          </div>
          <div class="item">
            <a href="http://discuss.nidigo.com/" target="_blank" title="Support Center">
              Help
            </a>
          </div>
          <div class="item double red" title="Log out">
            <a class="visible">
              Log out
            </a>
            <a class="hidden" href="<?php echo $web['url']; ?>logout">
              Are you sure?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
<?php } ?>
  <div class="body">
    <div class="body-content">
      
    
  <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script>
  

    
        <div class="content product-page-content">
		
        
<div class="feed-wrap-outter">
  <div class="ui grid feed-wrap">
    <div class="row product-wrap" itemtype="http://schema.org/Product">
      <div class="column left-content">
<?php if($row['price_extended'] > 0.00) { ?>
  <div role="alert" class="alert color blue">
	<p align="center">To <strong>download this item</strong>, an email will be sent <strong>after purchase</strong> to your PayPal address. Don't <strong>forget to check your spam folder</strong>.</p>
  </div>
<?php } ?>
        <div class="ui grid feed-content">
          <div class="row feed-item">
            <div class="column product-info">
              
              <div>
              <div class="ui segment item product-item feed-view productpage-view">  
    
    <div onmousedown="return false">
	<div class="ui image product-image">
	
		<?php 
		$nombre1 = 12; 
		$nombre2 = 13; 

		if($row['video_url']) //Si les deux nombres sont égaux 
		{ 
			echo '<a class="product-image-extension">
            <div class="noembed-embed ">
				<div class="noembed-wrapper">    
				  <div class="noembed-embed-inner noembed-youtube">  
					<iframe width=" 459" height="344" src="https://www.youtube.com/embed/'.$row[video_url].'?feature=oembed&amp;wmode=transparent" frameborder="0" allowfullscreen="" style="height: 348.75px;"></iframe>
				  </div>
				</div>
			</div>
          </a>'; 
		} 
		elseif($row['video_url'] == 0) //Les deux nombres ne sont pas égaux mais $nombre1 est supérieur à $nombre2 
		{ 
			echo '<a class="product-image-extension" title="'.$row['name'].'; ?>" rel="nofollow">
			<div class="product-share">
				<a class="ui button tiny share product-share-button" href="#embed">Share & Embed</a>
				<?php if('.$_SESSION['ps_usern'].') { ?><a class="ui button tiny red" href="'.$web['url'].'edit/'.$row['id'].'">Edit product</a><?php } ?>
            </div>
			<img itemprop="image" src="'.$web['url'].''.$row['preview'].'"/>
            
          </a>'; 
		}
		?>
        
      
    </div>
	</div>
  <div class="row product-meta">
    <div class="ui grid">
      <div class="row product-meta-info">
        <div class="column wide sixteen">
          <h3 class="ui header">
            <?php echo $row['name']; ?>
          </h3>
		  
          <?php if($row['demo_url']) { ?>
		  <div class="ui divider"></div>
		  <div class="column aligned center">
			  <a class="ui button red fluid small buy-now-button" href="<?php echo $row['demo_url']; ?>" target="_blank">            
                SEE THE DEMO          
			  </a>
          </div>
		  <?php } ?>
		  
		  <div class="ui divider"></div>
          <div class="product-description">
            <?php echo $row['description']; ?><br><br>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
              
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="column right-sidebar">
        <div class="ui grid segment sidebar-block-wrap bottom-attached">
  <div class="row">
    <div class="column wide four price-wrap">
      <h4 class="ui header">Price:</h4>
    </div>
	<?php if($row['price_extended'] > 0.00) { ?>
    <div class="column wide twelve aligned right product-price">
      
        <?php if($row['price_regular']) { ?>
		<del class="old-price">
          <?php if($web['currency'] == 'USD') { ?><?php echo decode_currency($web['currency']); echo $row['price_regular']; ?><?php } ?><?php if($web['currency'] == 'EUR') { ?><?php echo $row['price_regular']; echo decode_currency($web['currency']); ?><?php } ?>
        </del>
		<?php } ?>
	  
      <font size="6"><?php if($web['currency'] == 'USD') { ?><?php echo decode_currency($web['currency']); echo $row['price_extended']; ?><?php } ?><?php if($web['currency'] == 'EUR') { ?><?php echo $row['price_extended']; echo decode_currency($web['currency']); ?><?php } ?></font>
    </div>
	<?php } ?>
	<?php if($row['price_extended'] == 0.00) { ?>
    <div class="column wide twelve aligned right product-price">	  
      <font size="6">FREE</font>
    </div>
	<?php } ?>
  </div>
  <?php if($row['price_extended'] == 0.00) { ?>
  <div class="row">
    <div class="column aligned center full-width">
      
        <a class="ui button red fluid big buy-now-button" rel="nofollow" id="open_payments">
          
            
              DOWNLOAD NOW
            
          
        </a>
      
    </div>
  </div>
  <?php } ?>
  <?php if($row['price_extended'] > 0.00) { ?>
  <div class="row">
    <div class="column aligned center full-width">
      
        <a class="ui button red fluid big buy-now-button" rel="nofollow" id="open_payments">
          
            
              BUY NOW
            
          
        </a>
      
    </div>
  </div>
  <?php } ?>
  
  <div class="row product-social-share-buttons">
    <div class="column aligned center full-width">
        <p>
          Share this product:
        </p>
        <a class="ui button icon tiny flat twitter share-button-dialog" href="https://twitter.com/intent/tweet?text=<?php echo $row['name']; ?>%20via%20@NidigoNetwork%20-%20&url=<?php echo $web['url']."p/".$row['id']; ?>">
          <i class="fa fa-twitter"></i> Tweet
        </a>
        <a class="ui button icon tiny flat facebook share-button-dialog" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $web['url']."p/".$row['id']; ?>">
          <i class="fa fa-facebook"></i> Share
        </a>
        <form id="product_discount_form">
          <input name="_csrf_token" type="hidden" value="mBeENGmP">
        </form>
    </div>
  </div>
  <div class="ui divider"></div>
  <div class="row full-price">
    <div class="column aligned center full-width">
      <a class="ui button green fluid small buy-now-button" rel="nofollow" id="open_discounts">
          
            
              SHARE
            
          
        </a>
    </div>
  </div>
  
</div>
<div class="ui attached top">
  <div class="ui grid">
  <?php if($row['price_extended'] > 0.00) { ?>
    <div class="row two column">
      <div class="column">
        Sales
      </div>
      <div class="column aligned right">
        <?php echo $row['sales']; ?>
      </div>
    </div>
  <?php } ?>
    <div class="row two column">
      <div class="column">
        Filesize
      </div>
      <div class="column aligned right">
        <?php echo $filesize; ?>
      </div>
    </div>
    <div class="row two column">
      <div class="column">
        Filetype
      </div>
      <div class="column aligned right">
        .<?php echo $extnafaila; ?>
      </div>
    </div>
  </div>
</div>

<?php if($row['price_extended'] > 0.00) { ?>
<div class="ui grid segment sidebar-block-wrap">
  <div class="row">
    <div class="column full-width">
      <h4 class="ui header">
          
            Secured transactions:
          
      </h4>
    </div>
  </div>
  
  
  <div class="ui divider"></div>
  <div class="row">
    <div class="column full-width">
      
        <p>PayPal is one of the largest global e-commerce allowing payments and money transfers to be made through the Internet. The company services a large amount of online stores and serves as a secure payment platform with credit cards or money transfers.</p>
      
    </div>
  </div>
  
</div>
<?php } ?>

<?php if($row['price_extended'] == 0.00) { ?>
<div class="ui grid segment sidebar-block-wrap">
  <div class="row">
    <div class="column full-width">
      <h4 class="ui header">
          
            Free file:
          
      </h4>
    </div>
  </div>
  
  
  <div class="ui divider"></div>
  <div class="row">
    <div class="column full-width">
      
        <p>A product that is free of charge means it can be downloaded by anyone easily. However this does not mean you can do whatever you want, you must comply with the terms of the license.</p>
      
    </div>
  </div>
  
</div>
<?php } ?>


      </div>
      <i class="icon close close-iframe"></i>
    </div>
    <div class="row slide slide-wrap">
      <div class="column full-width">
        <div class="ui segment">
          <form method="post" id="billing_information" class="ui form">
    <div class="stackable ui grid billing-form">
        <div class="row">
		<?php if($row['price_extended'] == 0.00) { ?>
			<h4 class="ui header thin aligned center column">
                Summary
            </h4>
		<?php } ?>
		<?php if($row['price_extended'] > 0.00) { ?>
            <h4 class="ui header thin aligned center column">
                Checkout
            </h4>
		<?php } ?>
        </div>
        <div class="row">
            <div class="column centered billing-summary">
                <div class="ui grid form billing-summary-table">
                    <div class="row">
                        <div class="column wide thirteen">
                            <strong>PRODUCT</strong>
                        </div>
                        <div class="column wide three aligned right">
                            <strong>PRICE</strong>
                        </div>
                    </div>

					<div class="row billing-product">
                        <div class="column wide thirteen">
                            <?php echo $row['name']; ?>
                        </div>
                        <div class="column wide three aligned right">
                            <?php if($row['price_extended'] > 0.00) { ?><?php if($web['currency'] == 'USD') { ?><?php echo decode_currency($web['currency']); echo $row['price_extended']; ?><?php } ?><?php if($web['currency'] == 'EUR') { ?><?php echo $row['price_extended']; echo decode_currency($web['currency']); ?><?php } ?><?php } ?><?php if($row['price_extended'] == 0.00) { ?>FREE<?php } ?>
                        </div>
                    </div>
                    
                    <div class="row billing-total">
                        <div class="column wide thirteen">
                            <strong>Total payment</strong>
                        </div>
                        <div class="column wide three aligned right">
                            <strong>
                                <span id="product_total"><?php if($web['currency'] == 'USD') { ?><?php echo decode_currency($web['currency']); echo $row['price_extended']; ?><?php } ?><?php if($web['currency'] == 'EUR') { ?><?php echo $row['price_extended']; echo decode_currency($web['currency']); ?><?php } ?></span>
                            </strong>
                        </div>
                    </div>
                    <div class="row message validation-error billing-error">
                        <div class="column aligned center">
                            <i class="icon close"></i>
                            <span class="error-text"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<?php if($row['price_extended'] == 0.00) { ?>
		<?php
					if(isset($_POST['do_download'])) {
						$main_file = protect($_POST['main_file']);
						$sql = mysql_query("SELECT * FROM sellify_items WHERE main_file='$main_file'");
						if($row['price_extended'] == 0.00) {
							$file = "./".$row['main_file'];
							if(file_exists($file)) {
								echo '<div class="alert color blue">';
								echo '<p align="center">Downloading a $row[name] is successfully.</p>';
								echo '</div>';
								header('Content-Description: File Transfer');
								header('Content-Type: application/octet-stream');
								header('Content-Disposition: attachment; filename='.basename($file));
								header('Content-Transfer-Encoding: binary');
								header('Expires: 0');
								header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
								header('Pragma: public');
								header('Content-Length: ' . filesize($file));
								ob_clean();
								flush();
								readfile($file);
								exit;
							} else {
								echo '<div class="alert color red-color">';
								echo '<p align="center">File does not exists. Please contact our support.</p>';
								echo '</div>';
							}
						} else {
							echo '<div class="alert color red-color">';
							echo '<p align="center">Download fail! Wrong item, email address or code.</p>';
							echo '</div>';
						}
					}
					?>
        <div class="row">
            <div class="column centered payment-option">
                <div class="ui grid">
                    <div class="row one column">
                        <div class="column aligned center">
                                
                                <a href="<?php echo $web['url']; ?><?php echo $row['main_file']; ?>">
								<input type="button" value="Download" class="ui button small red" tabindex="-1" />
                                </a>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<?php } ?>
		
		<?php if($row['price_extended'] > 0.00) { ?>
        <div class="row">
            <div class="column centered payment-option">
                <div class="ui grid">
                    <div class="row one column">
                        <div class="column aligned center">
                            
                                <div class="button-header">
                                Checkout with:
                                </div>
                                
                                <a href="<?php echo $web['url']; ?>buy/<?php echo $row['id']; ?>/extended/paypal">
								<input type="button" value="PayPal" class="ui button small red" tabindex="-1" />
                                </a>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<?php } ?>
		
		
		
		<div class="ui product-share-modal modal">
    <div class="header">
        Spread the word!
    </div>
    <div class="content">
        <div class="ui grid form">
            <div class="row">
                <div class="column field">
                    <h4 class="ui header normal left aligned">
                        1. Share this product
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="column field center aligned embed-code-holder">
                    <input class="product-share-url" type="text" value="<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>" readonly/>
                </div>
            </div>
            <div class="row three column product-share-social">
                <div class="column">
                    <a class="ui button icon fluid small flat twitter share-button-dialog"
                       href="https://twitter.com/intent/tweet?text=<?php echo $row['name']; ?>%20via%20@NidigoNetwork%20-%20&url=<?php echo $web['url']."p/".$row['id']; ?>"
                       data-height="500" data-width="495">
                        <i class="fa fa-twitter"></i>
                        Tweet
                    </a>
                </div>
                <div class="column">
                    <a class="ui button icon fluid small flat facebook share-button-dialog"
                       data-height="380" data-width="495"
                       href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $web['url']."p/".$row['id']; ?>">
                        <i class="fa fa-facebook"></i>
                        Share
                    </a>
                </div>
                <div class="column">
                    <a class="ui button icon fluid small flat google plus share-button-dialog"
                       data-height="400" data-width="500"
                       href="https://plus.google.com/share?url=<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>">
                        <i class="fa fa-google-plus"></i>
                        Share
                    </a>
                </div>
            </div>
            <div class="ui divider"></div>
            <div class="row">
                <div class="column field">
                    <h4 class="ui header normal left aligned">
                        2. Embed buy now button on your website
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="field">
                        <div class="ui input embed-code-holder">
                            <input class="default-embed" type="text" value="&lt;a href=&#34;<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>&#34; id=&#34;<?php echo $row['id']; ?>&#34;&gt;&lt;img class=&#34;aligncenter&#34; src=&#34;<?php echo $web['url']; ?>static/img/download-button.png&#34; width=&#34;298&#34; height=&#34;64&#34;&gt;&lt;a&gt;"/>

                            <input class="new-window-embed" type="text" value="&lt;a target=&#34;_blank&#34; href=&#34;<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>&#34; id=&#34;<?php echo $row['id']; ?>&#34;&gt;&lt;img class=&#34;aligncenter&#34; src=&#34;<?php echo $web['url']; ?>static/img/download-button.png&#34; width=&#34;298&#34; height=&#34;64&#34;&gt;&lt;a&gt;"/>
                        </div>
                    </div>
                    <div class="field">
                        <input type="checkbox" id="change_embed_code" name="change_embed_code">
                        <label for="change_embed_code">Open link in new tab instead of same page</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>

    <!-- Data inputs -->
    <input type="hidden" name="product" value="87a3" />
    <input type="hidden" name="deal" id="deal" value="" />
    <input type="hidden" name="discount_code" id="discount_code" value="" />
    <input type="hidden" name="save" id="save" value="false" />
</form>
<div id="slide_billing_hide" class="slide_hide">
<i class="fa fa-times"></i>
</div>
        </div>
      </div>
    </div>    
  </div>
</div>

        </div>
    
  
    </div>
  </div>
<footer id="footer" class="site-footer">
  <div class="site-footer__primary">
    <div class="footer-primary">
	  <div class="grid-container">
		<div class="footer-top">
		<center>
			<div href="#" class="marketplace-stats__stat">
				<span> Thank you for visiting our website and </span> we wish you much happiness <span>with our products.</span>
			</div>
		</center>
		</div>
	  </div>
      <div class="footer-bottom">
		<p align="center"><span style="color:white">&copy; <?php echo date("Y"); ?> <?php echo $web['sitename']; ?>. All rights reserved | Propulsed by <a href="http://codecanyon.net/item/sellify-sell-your-digital-products/10122052?ref=Nidigo"><span style="color:white"><u>Sellify</u></span></a></span></p>
	  </div>
    </div>
  </div>
</footer>

  <script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_global.js"></script>
  <input name="_csrf_token" id="_csrf_token" type="hidden" value="mBeENGmP">
  <div id="fb-root"></div>
  
  
  <!-- Social buttons -->
<script>
(function (w, d, s) {
    function go(){
        __adroll_loaded = true;
        var js, fjs = d.getElementsByTagName(s)[0], add = function (url, id) {
            if (d.getElementById(id)) {return; }
            js = d.createElement(s);
            js.src = url;
            js.id = id;
            js.async = true;
            fjs.parentNode.insertBefore(js, fjs);
        };
        // Facebook SDK
        add('//connect.facebook.net/fr_FR/all.js#xfbml=1&appId=922461867783865', 'facebook-jssdk');
        
        // Google+ SDK
        add('//apis.google.com/js/plusone.js?onload=onLoadCallback', 'gplus1js');
        // Perfect audience
        add('//tag.perfectaudience.com/serve/5296fbc6d21ae7dc8f000049.js', 'pa-js');
    }
    if (w.addEventListener) {
        w.addEventListener('load', go, false);
    }
    else if (w.attachEvent) {
        w.attachEvent('onload', go);
    }
}(window, document, 'script'));

/* start Twitter */
window.twttr = (function (d,s,id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));
/* end Twitter */

</script>

	<script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_productpage_f1af34b1.js"></script>
	<script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_marketplace.js"></script>

	<script type="text/javascript">
  
		var PAYMILL_PUBLIC_KEY = '';
		init_paymill_form()
  
	</script>
	<script>
	$('img').bind('contextmenu', function(e){
		return false;
	}); 
	</script>
</body>
</html>