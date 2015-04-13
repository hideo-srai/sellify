<?php if(!$_SESSION['ps_usern']) { $redirect = $web['url']."login"; header("Location:$redirect"); } ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Edit product - <?php echo $web['title']; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php echo $web['description']; ?>">
		<meta name="author" content="Nidigo Design">
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
		
		<!-- Stylesheets -->
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_global.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_productpage.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_marketplace.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_408fb6bf.css">
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
		
		<script src="//cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>
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
  </style>
</head>
<body class="">
  <script>ga('send', 'pageview');</script>

  <?php include 'menu.php' ?>

  <div class="body">
    <div class="body-content">
      <div id="container" class="main-content-wrap">
    <div id="content_wrap" class="inner_wrap">
	<?php
			$id = protect($_GET['id']);
			$sql = mysql_query("SELECT * FROM sellify_items WHERE id='$id'");
			if(mysql_num_rows($sql)==0) { $redirect = $web['url']."not_found"; header("Location:$redirect"); }
			$row = mysql_fetch_array($sql);
			?>
			<?php
			if(isset($_POST['phps_update_info'])) {
				$name = protect($_POST['name']);
						$description = $_POST['description1'];
						$price_regular = protect($_POST['price_regular']);
						$price_extended = protect($_POST['price_extended']);
						$demo_url = protect($_POST['demo_url']);
						$video_url = protect($_POST['video_url']);
						$category_id = protect($_POST['category_id']);
						
						if(empty($name) or empty($price_extended) or empty($description)) { echo '<div class="alert color red-color"><p align="center">Required fiels: Product name, description and price.</p></div>'; }
						else {
							$update = mysql_query("UPDATE sellify_items SET name='$name',description='$description',price_regular='$price_regular',price_extended='$price_extended',demo_url='$demo_url',video_url='$video_url',category_id='$category_id' WHERE id='$row[id]'");
							$row = mysql_fetch_array(mysql_query("SELECT * FROM sellify_items WHERE id='$row[id]'"));
							echo '<div class="alert color blue">';
							echo '<p align="center"><span style="color:white">Your changes was saved successfully.</span></p>';
							echo '</div>';
						}
			}
			
			if(isset($_POST['phps_update_tpfiles'])) {
				$thumbnail = $_FILES['thumbnail_file']['name'];
						$preview = $_FILES['preview_file']['name'];
						$folder_name = $row['id'] * 2;
						$thumbnail_path = "uploads/".$folder_name."/".basename($_FILES['thumbnail_file']['name']);
						$preview_path = "uploads/".$folder_name."/".basename($_FILES['preview_file']['name']);
							
						if(empty($thumbnail) && empty($preview)) { echo '<div class="alert color red-color"><p align="center">Please select an images.</p></div>'; }
						elseif(!empty($thumbnail) && empty($preview)) {
							@unlink($row['thumbnail']);
							if(@move_uploaded_file($_FILES['thumbnail_file']['tmp_name'], $thumbnail_path)) { $error = 0; } else { $error = 1; }
							
							if($error == 0) {
								$update = mysql_query("UPDATE sellify_items SET thumbnail='$thumbnail_path' WHERE id='$row[id]'");
								echo '<div class="alert color blue">';
								echo '<p align="center"><span style="color:white">Item thumbnail was changed successfully.</span></p>';
								echo '</div>';
							} else {
								echo '<div class="alert color red-color">';
								echo '<p align="center">Uploading error! Please try again.</p>';
								echo '</div>';
							}
						} 
						elseif(!empty($preview) && empty($thumbnail)) {
							@unlink($row['preview']);
							if(@move_uploaded_file($_FILES['preview_file']['tmp_name'], $preview_path)) { $error = 0; } else { $error = 1; }
							
							if($error == 0) {
								$update = mysql_query("UPDATE sellify_items SET preview='$preview_path' WHERE id='$row[id]'");
								echo '<div class="alert color blue">';
								echo '<p align="center"><span style="color:white">Item preview was changed successfully.</span></p>';
								echo '</div>';
							} else {
								echo '<div class="alert color red-color">';
								echo '<p align="center">Uploading error! Please try again.</p>';
								echo '</div>';
							}
						}
						elseif(!empty($preview) && !empty($thumbnail)) {
							@unlink($row['thumbnail']);
							@unlink($row['preview']);
							if(@move_uploaded_file($_FILES['thumbnail_file']['tmp_name'], $thumbnail_path)) { $error = 0; } else { $error = 1; }
							if(@move_uploaded_file($_FILES['preview_file']['tmp_name'], $preview_path)) { $error = 0; } else { $error = 1; }
							
							if($error == 0) {
								$update = mysql_query("UPDATE sellify_items SET thumbnail='$thumbnail_path',preview='$preview_path' WHERE id='$row[id]'");
								echo '<div class="alert color blue">';
								echo '<p align="center"><span style="color:white">Item thumbnail and preview image was changed successfully.</span></p>';
								echo '</div>';
							} else {
								echo '<div class="alert color red-color">';
								echo '<p align="center">Uploading error! Please try again.</p>';
								echo '</div>';
							}
						} else {
							echo '<div class="alert color red-color">';
							echo '<p align="center">Uploading error! Please try again.</p>';
							echo '</div>';
						}
			}
			
			if(isset($_POST['phps_update_mfile'])) {
				$main = $_FILES['main_file']['name'];
						$check_dir = $web['main_folder_name'];
						if(!is_dir($check_dir)) { mkdir($check_dir); $contents = '<?php header("Location: ../"); ?>'; file_put_contents($check_dir."index.php",$contents); }
						$folder_name = $row['id'] * 2;
						$folder_name_2 = $folder_name * 5;
						$main_path = $check_dir."/".$folder_name_2."/".basename($_FILES['main_file']['name']);
						$admin_email = $web['email'];
	
						if(empty($main)) { echo '<div class="alert color red-color"><p align="center">Please select main file.</p></div>'; }
						else {
							@unlink($row['main_file']);
							if(@move_uploaded_file($_FILES['main_file']['tmp_name'], $main_path)) { $error = 0; } else { $error = 1; }
							
							if($error == 0) {
								$update = mysql_query("UPDATE sellify_items SET main_file='$main_path' WHERE id='$row[id]'");
								$get_buyers = mysql_query("SELECT * FROM sellify_buyers WHERE item_id='$row[id]'");
								if(mysql_num_rows($get_buyers)>0) {
									while($buyer = mysql_fetch_array($get_buyers)) {
										$buyer_email = $buyer['buyer_email'];
										$random_password=md5(uniqid(rand()));
										$email_code=substr($random_password, 0, 12);
										$insert = mysql_query("INSERT sellify_download_codes (item_id,email,code) VALUES ('$row[id]','$buyer_email','$email_code')");
										$to = $buyer_email;
										$headers  = "From: $web[email]\r\n"; 
										$headers .= "Content-type: text/html\r\n"; 
										$subject = 'New update available for '.$row[name].'';
										$message = "
<html>
<body>
<div class=\"ii gt m14934b2f32ca8ef1 adP adO\">
<div class=\"a3s\" style=\"overflow:hidden;\">
<div style=\"padding:0px;margin:0px;font-family:Helvetica, Arial, sans-serif;font-size:14px;color:#393d4b;\">
<table style=\"padding-top:30px;\" width=\"100%\">
	<tbody>
		<tr>
			<td>
			<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:470px;\">
				<tbody>
					<tr>
						<td style=\"border:1px solid #d1d1d1;border-radius:4px;padding:0;\">
						<div style=\"text-align:center;color:#acafb5;\">
						<div style=\"width:60px;border-radius:6px;margin:30px auto;text-align:center;background:#ffffff;\">&nbsp;</div>

						<h1 style=\"margin:35px 0 15px;text-align:center;font-weight:100;color:#393d4b;\">New update available!</h1>

						<p style=\"width:80%;margin:0 auto;text-align:center;color:#acafb5;\">You can download the file here:</p>

						<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin:40px auto 10px;\">
							<tbody>
								<tr>
									<td align=\"center\" bgcolor=\"#99bd44\" height=\"40\" style=\"display:block;font-size:14px;line-height:40px;font-weight:bold;border-radius:2px;border:1px solid #789c25;\" width=\"200\"><a href=\"$web[url]download/$row[id]\" style=\"color:#ffffff;text-decoration:none;line-height:40px;width:100%;display:inline-block;\" target=\"_blank\">DOWNLOAD</a></td>
								</tr>
							</tbody>
						</table>
						<small><a style=\"color:#acafb5;text-decoration:none;display:block;margin-bottom:60px;font-size:12px;\">Download code: <strong>$email_code</strong></a> </small>

						<div style=\"width:100%;background:#d1d1d1;overflow:hidden;font-size:0px;\">&nbsp;</div>

						<p style=\"color:#393d4b;margin-bottom:10px;\">Let your friends know about our awesome product!</p>

						<div>
						<table align=\"center\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">
							<tbody>
								<tr>
									<td>
									<table align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin:0 auto 10px;\">
										<tbody>
											<tr>
												<td align=\"center\" bgcolor=\"#3A569B\" height=\"36\" style=\"display:block;font-size:14px;line-height:36px;font-weight:bold;border-radius:2px;\" width=\"150\"><a href=\"https://www.facebook.com/sharer/sharer.php?u=$web[url]p/$row[id]\" style=\"color:#ffffff;text-decoration:none;line-height:36px;width:100%;display:inline-block;\" target=\"_blank\"><img alt=\"facebook.png\" class=\"CToWUd\" src=\"https://ci5.googleusercontent.com/proxy/Dx0pmL0FfwL8RxTnXpvUQ2w3ZJAw8AYSYTNqJgSGYNFRULmzEJcbiN4bqbDTZajZ2_H8XKjYtZsLxgGU04Q1dg0da0ram35PvI4dYL891BR2bI4fdgFF9BleOmPDoJYc=s0-d-e1-ft#https://d300b3jgvyc6sw.cloudfront.net/media/css/images/emails/facebook.png\" style=\"vertical-align:middle;\" />&nbsp;SHARE</a></td>
											</tr>
										</tbody>
									</table>
									</td>
									<td>
									<table align=\"left\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin:0 auto 10px;\">
										<tbody>
											<tr>
												<td align=\"center\" bgcolor=\"#3F90CA\" height=\"36\" style=\"display:block;font-size:14px;line-height:36px;font-weight:bold;border-radius:2px;\" width=\"150\"><a href=\"https://twitter.com/home?status=Je%20viens%20d'acheter%20ce%20produit:%20$web[url]p/$row[id]%20via%20@NidigoNetwork\" style=\"color:#ffffff;text-decoration:none;line-height:36px;width:100%;display:inline-block;\" target=\"_blank\"><img alt=\"twitter-square.png\" class=\"CToWUd\" src=\"https://ci3.googleusercontent.com/proxy/HY3fVBjVNxxAAHP71K07n1DkyiqwOUu_i4hz7_qxQya4-gbcMgROPCFOj9tBHNMflf_Vbem7nLXMclX4xMJn6FnJf5F_9XNouJ6WUdTxp2v7id-525lOLzE4jT_qN_wHKCHxPsn8=s0-d-e1-ft#https://d300b3jgvyc6sw.cloudfront.net/media/css/images/emails/twitter-square.png\" style=\"vertical-align:middle;\" /> TWEET</a>&nbsp;</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</div>
						</div>
						</td>
					</tr>
					<tr>
						<td style=\"text-align:center;padding-top:20px;\">&nbsp;</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>
<img alt=\"\" border=\"0\" class=\"CToWUd\" height=\"1\" src=\"\" style=\"width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;\" width=\"1\" />
<div class=\"yj6qo\">&nbsp;</div>

<div class=\"adL\">&nbsp;</div>
</div>

<div class=\"adL\">&nbsp;</div>
</div>
</div>
</body>
</html>
";
										mail($to, $subject, $message, $headers);
									}
								}
								echo '<div class="alert color blue">';
								echo '<p align="center"><span style="color:white">Item main file was updated successfully. Download link is sent to buyers.</span></p>';
								echo '</div>';
							} else {
								echo '<div class="alert color red-color">';
								echo '<p align="center">Uploading error! Please try again.</p>';
								echo '</div>';
							}
						}
			}
			?>
        <div id="container_for_notification">
    <div id="notification_box" class="ui message message-notification" style="position: static;">
        <i id="not_icon" class="warning icon"></i>
        <div id="not_message"></div>
        <div class="message-notification-icons">
            <i id="not_confirm" class="checkmark icon" title="Confirm"></i>
            <i id="not_close" class="close icon" title="Close"></i>
        </div>
    </div>
</div>
    <?php include 'sidemenu.php' ?>
        <div id="content_container">
    <div id="content">

<div id="container_for_title">
    <div class="head-description">
        <div class="ui grid full-width">
            <div class="row equal height two column">
                <div class="column">
                    <h2>
                        
                        Edit
                        
                        Product
                    </h2>
                </div>
                
                <div class="column aligned right">
					<a class="ui button tiny basic" href="<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>">
                        View product
                    </a>
                </div>
                
            </div>
            
        </div>
    </div>
</div>

<div id="container_for_page_body">
    <form action="" method="POST">
        <div id="new_product_container" class="boxtop new-product-container">
            <div id="product-basic" class="product-tab">
                
                <div class="ui grid form full-width product-upload-form-wrap  editing">
                    <div class="row">
                        <div class="column wide sixteen">
                            <div class="field">
								<input type="text" value="<?php echo $row['name']; ?>" class="input-block-level" name="name">
                            </div>
                            <div class="field">
								<textarea class="input-block-level" rows="5" name="description1"><?php echo $row['description']; ?></textarea>
								<script>
									CKEDITOR.replace( 'description1' );
								</script>
                            </div>
							<div class="field">
                                <input type="text" <?php if($row['video_url']) { ?>value="<?php echo $row['video_url']; ?>"<?php } ?> placeholder="YouTube video ID (e.g: Lg-WPNpBhp4)" name="video_url" class="input-block-level">
                            </div>
							<div class="field">
                                <input type="text" <?php if($row['demo_url']) { ?>value="<?php echo $row['demo_url']; ?>"<?php } ?> placeholder="Demo URL (optional)" name="demo_url" class="input-block-level">
                            </div>
							<hr>
							<span>&nbsp;</span>
							<center><a href="http://help.nidigo.com/sellify/difference-between-old-price-and-new-price/" target="_blank"> Please refer to this article for OLD PRICE and NEW PRICE</a></center>
							<center>To make a free product please put <strong>0.00</strong> in the field <strong>NEW PRICE</strong></center>
							<span>&nbsp;</span>
                            <div class="ui grid">
                                <div class="row equal height two column fields">
                                    <div class="column product-upload-price-field">
                                        <div class="ui input join">
                                            <div class="ui dropdown selection product-currency">
                                                <center><div class="text">OLD PRICE</div><center>
                                            </div>
                                            <input class="join" id="appendedPrependedInput" <?php if($row['price_regular']) { ?>value="<?php echo $row['price_regular']; ?>"<?php } ?> placeholder="2.00" name="price_regular" type="text">
                                        </div>
                                    </div>
                                    <div class="column product-upload-price-field">
                                        <div class="ui input join">
                                            <div class="ui dropdown selection product-currency">
                                                <center><div class="text">NEW PRICE <span style="color:red">*</span></div><center>
                                            </div>
                                            <input class="join" id="appendedPrependedInput" value="<?php echo $row['price_extended']; ?>" name="price_extended" type="text">
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
        <div class="setting-button-holder editing">
          <div class="ui grid">
            <div class="row equal height">
              
              <div class="column wide eight aligned middle">
                <a id="delete-product" class="link tiny" href="<?php echo $web['url']."delete/".$row['id']; ?>">
                  Delete product
                </a>
              </div>
              
              <div class="column wide eight aligned right">
                  <input type="submit" name="phps_update_info" value="Update product" class="ui button red submit_product is-edit">
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" name="discount" value="">
        <input type="hidden" id="file" value="" name="file">
        <input type="file" id="upl_file" value="" name="upl_file" class="product-upload-file-upl">
        <input type="hidden" name="image">
    </form>
	<div id="new_product_container" class="boxtop new-product-container">
            <div id="product-basic" class="product-tab">
              <form action="" method="POST" enctype="multipart/form-data">  
                <div class="ui grid form full-width product-upload-form-wrap  editing">
                    <div class="row">
					  <form action="" method="POST" enctype="multipart/form-data">
						<div class="column wide eight">
                            <div class="field product-upload-image " style="">
                                <div class="image-upload-button">
                                    <a class="ui button basic tiny">
                                        <span class="default-image-text">
                                        <input type="file" name="preview_file">
                                        </span>
                                        <span class="image-uploading-text">
                                        Uploading...
                                        </span>
                                    </a>
                                </div>
                                <div class="image-upload-dimension">
                                    Preview image (JPEG recommended)
                                </div>
                                <div class="image-dragdrop">
                                </div>
                            </div>


                        </div>
						<div class="column wide eight">
                            <div class="field product-upload-image " style="">
                                <div class="image-upload-button">
                                    <a class="ui button basic tiny">
                                        <span class="default-image-text">
                                        <input type="file" name="thumbnail_file">
                                        </span>
                                        <span class="image-uploading-text">
                                        Uploading...
                                        </span>
                                    </a>
                                </div>
                                <div class="image-upload-dimension">
                                    Thumbnail (80x80 & JPEG recommended)
                                </div>
                                <div class="image-dragdrop">
                                </div>
                            </div>


                        </div>
					<center><input type="submit" name="phps_update_tpfiles" value="Update images" class="ui button red submit_product is-edit"></center>
					  </form><br><hr><br>
					  <form action="" method="POST" enctype="multipart/form-data">
						<div class="column wide sixteen">
                            <div class="field product-upload-image " style="">
                                <div class="image-upload-button">
                                    <a class="ui button basic tiny">
                                        <span class="default-image-text">
                                        <input type="file" name="main_file">
                                        </span>
                                        <span class="image-uploading-text">
                                        Uploading...
                                        </span>
                                    </a>
                                </div>
                                <div class="image-upload-dimension">
                                    Main file (recommended filetype: .ZIP)
                                </div>
                                <div class="image-dragdrop">
                                </div>
                            </div>


                        </div><br>
						<center><input type="submit" name="phps_update_mfile" value="Update main file" class="ui button red submit_product is-edit"></center>
					  </form>
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
  
    <script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_user_new_backbone.js"></script>
    <script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_user_app2396ba46.js"></script>
    <script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_user4cdf78c5.js"></script>
  
</body>
</html>