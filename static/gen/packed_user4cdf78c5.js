(function(){var e=this;this.Stripe=function(){function e(){}return e.version=2,e.endpoint="https://api.stripe.com/v1",e.validateCardNumber=function(t){return t=(t+"").replace(/\s+|-/g,""),t.length>=10&&t.length<=16&&e.luhnCheck(t)},e.validateCVC=function(t){return t=e.trim(t),/^\d+$/.test(t)&&t.length>=3&&t.length<=4},e.validateExpiry=function(t,n){var r,i;return t=e.trim(t),n=e.trim(n),/^\d+$/.test(t)?/^\d+$/.test(n)?parseInt(t,10)<=12?(i=new Date(n,t),r=new Date,i.setMonth(i.getMonth()-1),i.setMonth(i.getMonth()+1,1),i>r):!1:!1:!1},e.cardType=function(t){return e.cardTypes[t.slice(0,2)]||"Unknown"},e.setPublishableKey=function(t){e.key=t},e.createToken=function(t,n,r){var i,s,o;n==null&&(n={});if(!t)throw"card required";if(typeof t!="object")throw"card invalid";typeof n=="function"?(r=n,n={}):typeof n!="object"&&(i=parseInt(n,10),n={},i>0&&(n.amount=i));for(s in t)o=t[s],delete t[s],t[e.underscore(s)]=o;return n.card=t,n.key||(n.key=e.key||e.publishableKey),e.validateKey(n.key),e.ajaxJSONP({url:""+e.endpoint+"/tokens",data:n,method:"POST",success:function(e,t){return typeof r=="function"?r(t,e):void 0},complete:e.complete(r),timeout:4e4})},e.getToken=function(t,n){if(!t)throw"token required";return e.validateKey(e.key),e.ajaxJSONP({url:""+e.endpoint+"/tokens/"+t,data:{key:e.key},success:function(e,t){return typeof n=="function"?n(t,e):void 0},complete:e.complete(n),timeout:4e4})},e.complete=function(e){return function(t,n,r){if(t!=="success")return typeof e=="function"?e(500,{error:{code:t,type:t,message:"An unexpected error has occured.\nWe have been notified of the problem."}}):void 0}},e.validateKey=function(e){if(!e||typeof e!="string")throw new Error("You did not set a valid publishable key.\nCall Stripe.setPublishableKey() with your publishable key.\nFor more info, see https://stripe.com/docs/stripe.js");if(/^sk_/.test(e))throw new Error("You are using a secret key with Stripe.js, instead of the publishable one.\nFor more info, see https://stripe.com/docs/stripe.js")},e}.call(this),typeof module!="undefined"&&module!==null&&(module.exports=this.Stripe),typeof define=="function"&&define("stripe",[],function(){return e.Stripe})}).call(this),function(){var e,t,n,r=[].slice;e=encodeURIComponent,t=(new Date).getTime(),n=function(t,r,i){var s,o;r==null&&(r=[]);for(s in t)o=t[s],i&&(s=""+i+"["+s+"]"),typeof o=="object"?n(o,r,s):r.push(""+s+"="+e(o));return r.join("&").replace(/%20/g,"+")},this.Stripe.ajaxJSONP=function(e){var i,s,o,u,a,f;return e==null&&(e={}),o="sjsonp"+ ++t,a=document.createElement("script"),s=null,i=function(){var t;return(t=a.parentNode)!=null&&t.removeChild(a),o in window&&(window[o]=function(){}),typeof e.complete=="function"?e.complete("abort",f,e):void 0},f={abort:i},a.onerror=function(){return f.abort(),typeof e.error=="function"?e.error(f,e):void 0},window[o]=function(){var t;t=1<=arguments.length?r.call(arguments,0):[],clearTimeout(s),a.parentNode.removeChild(a);try{delete window[o]}catch(n){window[o]=void 0}return typeof e.success=="function"&&e.success.apply(e,t),typeof e.complete=="function"?e.complete("success",f,e):void 0},e.data||(e.data={}),e.data.callback=o,e.method&&(e.data._method=e.method),a.src=e.url+"?"+n(e.data),u=document.getElementsByTagName("head")[0],u.appendChild(a),e.timeout>0&&(s=setTimeout(function(){return f.abort(),typeof e.complete=="function"?e.complete("timeout",f,e):void 0},e.timeout)),f}}.call(this),function(){this.Stripe.trim=function(e){return(e+"").replace(/^\s+|\s+$/g,"")},this.Stripe.underscore=function(e){return(e+"").replace(/([A-Z])/g,function(e){return"_"+e.toLowerCase()})},this.Stripe.luhnCheck=function(e){var t,n,r,i,s,o;r=!0,i=0,n=(e+"").split("").reverse();for(s=0,o=n.length;s<o;s++){t=n[s],t=parseInt(t,10);if(r=!r)t*=2;t>9&&(t-=9),i+=t}return i%10===0},this.Stripe.cardTypes=function(){var e,t,n,r;t={};for(e=n=40;n<=49;e=++n)t[e]="Visa";for(e=r=50;r<=59;e=++r)t[e]="MasterCard";return t[34]=t[37]="American Express",t[60]=t[62]=t[64]=t[65]="Discover",t[35]="JCB",t[30]=t[36]=t[38]=t[39]="Diners Club",t}()}.call(this);
(function(h){var C=h.CC_NUMBER="number",P=h.CC_EXP_MONTH="exp_month",f=h.CC_EXP_YEAR="exp_year",x=h.CC_HOLDER="cardholder",J=h.CC_CVC="cvc",S=h.CC_AMOUNT="amount",K=h.CC_AMOUNT_INT="amount_int",w=h.CC_CURRENCY="currency",j=h.DD_NUMBER="number",B=h.DD_BANK="bank",e=h.DD_HOLDER="accountholder",V=h.DD_COUNTRY="country",u=h.E_CC_INVALID_NUMBER="field_invalid_card_number",d=h.E_CC_INVALID_EXPIRY="field_invalid_card_exp",U=h.E_CC_INVALID_EXP_MONTH="field_invalid_card_exp_month",p=h.E_CC_INVALID_EXP_YEAR="field_invalid_card_exp_year",aa=h.E_CC_INVALID_CVC="field_invalid_card_cvc",q=h.E_CC_INVALID_HOLDER="field_invalid_card_holder",y=h.E_CC_INVALID_AMOUNT="field_invalid_amount",L=h.E_CC_INVALID_AMOUNT_INT="field_invalid_amount_int",M=h.E_CC_INVALID_CURRENCY="field_invalid_currency",n=h.E_DD_INVALID_NUMBER="field_invalid_account_number",Z=h.E_DD_INVALID_BANK="field_invalid_bank_code",g=h.E_CC_INVALID_HOLDER="field_invalid_account_holder";
    var N={};h.config=function N(ad,ae){if(ae!==undefined){N[ad]=ae}return N[ad]};var G=h.increaseMonetaryUnit=function G(af,ae,ad){ae=ae?ae:100;
        ad=ad?ad:2;af=(af/ae).toFixed(ad);return af};var m={c203e48ea268597605e984e71645c0e6:"8a8394c43ab6c27d013ad050a9e92162",acc2d4edde7027e90dbf3ee77cd32268:"8a8394c43ab6c27d013ad04e05ad2140","44aa41ae9543150aa428ce8fdecb764e":"8a8394c43ab6c27d013ad0509349214e","2889d41bc42aa6fbaa840e4ffc001861":"8a8394c63ab6c288013ad050fb502308","38f9898ab274e1d0826b9245f32a3a23":"8a8394c63ab6c288013ad050b47522ff",e2d78c3b672d47b784b7388db448f4c1:"8a8394c43ab6c27d013ad050f18d219b","1ea2a7a1ab0dee3205bf6faa5acc90a9":"8a8394c43ab6c27d013ad050dd2b2191",fa92ccea0a17c68f190624ad4f75ccc9:"8a8394c43ab6c27d013ad050bf9e2173",efc76381fd2ac0b51d504d7179cb1947:"8a8394c43ab6c27d013ad0520d0121f3","4a3eb8d249b43348c8f5e31139c0db55":"8a8394c33ab6b767013ad05106841814","1ddbd34ee4781e84ad437943ca66b27a":"8a8394c73ab6b77a013ad0516eba2733",fc16dc61f3f54c312addfb3187f4bc75:"8a8394c43ab6c27d013ad050d3642187",ad0e0bdce25c34dd8788516534176d68:"8a8394c43ab6c27d013ad0509e5c2158",a27572a3cb8315d02c3052811afc9ea5:"8a8394c43ab6c27d013ad050c95b217d","7691eb8c3f8d2900ecfa7dbe093dfea1":"8a8394c43ab6c27d013ad050e7382196",f4ce1ae21df4c7e1bf73dd2ecba29790:"8a8394c33ab6b767013ad0511de51819","24029d159c47aad517cbdb8e951c440c":"8a8394c63ab6c288013ad051123f230c","0826b421b2cc3d60b2cdfbdf9b1902da":"8a8394c43ab6c27d013ad05156ff21bf","968558e94e7547107ec7fb9e9cac3da7":"8a8394c63ab6c288013ad0512a1d2310","229597c81f1d5ce8f7cdccaa2eebcec6":"8a8394c33ab6b767013ad05135041822","4e2c75b2da3293a36c4ce6bb256943b0":"8a8394c63ab6c288013ad05140102313","0c808981e2fbb2f5ebdd8b972cd7fa5d":"8a8394c23ab6c277013ad0514ac52446","8084290950b4ea81cc329ce00e4ea316":"8a8394c23ab6c277013ad051ed82245d",e5324ef17dfdda9bb3f4aad671aa74bc:"8a8394c23ab6c277013ad05162a2244f","6e6462bae75e5e4db72dd5ca472a3bfc":"8a8394c73ab6b77a013ad05189792747","43d638fc2134f35a06d011ffd9865ba9":"8a8394c73ab6b77a013ad0517c80273d",b2855804b05d8cca1cdac67ef7d39736:"8a8394c73ab6b77a013ad051934e2751","3e1d63691bdfa4dd32650c886788d6e5":"8a8394c43ab6c27d013ad051c09821cc","3b0cdd7a19f343d765873b19a68ca03e":"8a8394c63ab6c288013ad052216c2339","500526f7a82b764a56a6c925276c1d9d":"8a8394c33ab6b767013ad051f8491837","548402557063fe6f4609e7d413c5187b":"8a8394c43ab6c27d013ad051d85f21e1","96f600ca2182d663d6e33a17e509a001":"8a8394c73ab6b77a013ad0519d72275b","5f59830e39623414689232d93421fcad":"8a8394c43ab6c27d013ad051e29a21ea","6206278c267e2700b72494395549123a":"8a8394c83ab6c27b013ad052bb9b232b","09c1374f18d5f529be44626bf95d1b5e":"8a8394c73ab6b77a013ad051ae2e2764",a2249f0247217162a6ae4eb6a374cb8e:"8a8394c43ab6c27d013ad051cd5e21d6",fde6973e5a36b3651f6ffbbbae801297:"8a8394c23ab6c277013ad05202da246c","02bd41e2fc2d8d05b9683737f1f58e48":"8a8394c73ab6b77a013ad0522b402777",af0aa6bc166045fb649688bb049f38bc:"8a8394c63ab6c288013ad05251ad2348","5e079aff1670b65698cb6cb054e5a4fd":"8a8394c63ab6c288013ad05217ab232f",acde02e642464263dfc3966877fd50dd:"8a8394c63ab6c288013ad052653e2351",d64c0222e9f149ee6bff859e4e855c0c:"8a8394c83ab6c27b013ad052a4b62317","94ddfaa37dd139bc34133743860c906e":"8a8394c63ab6c288013ad05244642344",b225620ea2e6c7b89d439531967fca7f:"8a8394c43ab6c27d013ad05236fe21f7",aad83215684d4480b7a253f71f6eac48:"8a8394c73ab6b77a013ad0525b622782","629bbeaeb398399ae3dea8ee56d9721f":"8a8394c83ab6c27b013ad05280d122fc","2cfdd0db2fb009b63082fcd57f2a43c8":"8a8394c63ab6c288013ad052e4a3235d","676d907311c01927f0d626894714b68d":"8a8394c63ab6c288013ad05310ff2371","383a77a25b27992156bad9932df21a44":"8a8394c63ab6c288013ad05270f5235a","56c16790e25d6869d05ab91b0252ef75":"8a8394c83ab6c27b013ad0529a3b230d","7e1d70e5f61a3a9481b75d30aef3e533":"8a8394c43ab6c27d013ad0528d202206","172a99c0f9009773bab7f003bafe5e1a":"8a8394c83ab6c27b013ad052b0152321","187f7cadb04e9b54ec12f1e3a2c09f68":"8a8394c83ab6c27b013ad052d5c7233f","45a5fac07beae532ceeab80789864ada":"8a8394c83ab6c27b013ad052c9662335","0036e160200af231b4219ef2e1f49140":"8a8394c63ab6c288013ad05305c5236c",bbb5e54b266504e39e28ca056a1a86e8:"8a8394c73ab6b77a013ad052f1a1278b","5edb6659a971cdf29bf5016efaca6a57":"8a8394c73ab6b77a013ad052fbb0278e","953f8f9edcb9319dc2f3b7aeb9bf55e9":"8a8394c43ab6c27d013ad0531d8e2215"};
    var l={"4012888888881881":true};var ab=h.tr=function ab(ad){return(ad+"").replace(/^\s+|\s+$/g,"")
    };var i=h.clr=function i(ad){return(ad+"").replace(/\s+|-/g,"")};var Y=h.flip=function Y(ad){return(ad+"").split("").reverse().join("")
    };var X=h.chksum=function X(ai){if(ai.match(/^\d+$/)===null){return false}var ah=Y(ai);
        var af=ah.length;var ad;var ae=0;var ag;for(ad=0;ad<af;++ad){ag=parseInt(ah.charAt(ad),10);
            if(0!==ad%2){ag*=2}ae+=(ag<10)?ag:ag-9}return(0!==ae&&0===ae%10)};var c=h.toFormEncoding=function c(ag,af){var ah=[];
        for(var ai in ag){if(ag.hasOwnProperty(ai)){var ad=af?af+"["+ai+"]":ai;var ae=ag[ai];
            ah.push("object"===typeof ae?c(ae,ad):encodeURIComponent(ad)+"="+encodeURIComponent(ae))
        }}return ah.join("&")};var A=h.validateCardNumber=function A(ad){ad=i(ad);return ad.length>=10&&ad.length<=16&&X(ad)
    };var F=h.validateCvc=function F(ad){ad=ab(ad);return(null!==ad.match(/^\d+$/))&&ad.length>=3&&ad.length<=4
    };var R=h.validateExpMonth=function R(ad){return/^[1-9]|0[1-9]|1[012]$/.test(ab(ad))
    };var T=h.validateExpYear=function T(ad){return/^\d{4}$/.test(ab(ad))};var E=h.validateExpiry=function E(ah,af){if(!R(ah)||!T(af)){return false
    }ah=parseInt(ab(ah),10);af=parseInt(ab(af),10);var ag=new Date(),ad=ag.getFullYear(),ae=ag.getMonth()+1;
        return af>ad||(af===ad&&ah>=ae)};var k=h.validateAmount=function k(ad){ad=ab(ad);
        return/^[0-9.,-]+$/.test(ad)};var I=h.validateAmountInt=function I(ad){ad=ab(ad);
        return/^[0-9]+$/.test(ad)};var Q=h.validateCurrency=function Q(ad){ad=ab(ad);return/^[A-Z]{3}$/.test(ad)
    };var W=h.validateHolder=function W(ad){if(!ad){return false}return/^.{4,128}$/.test(ab(ad))
    };var b=null;var D=function D(){b={};for(var ae=40;ae<=49;++ae){b[ae]="Visa"}for(var ad=50;
                                                                                     ad<=59;++ad){b[ad]="MasterCard"}b[34]="American Express";b[37]="American Express";
        b[60]="Discover";b[62]="Discover";b[64]="Discover";b[65]="Discover";b[35]="JCB";b[30]="Diners Club";
        b[36]="Diners Club";b[38]="Diners Club";b[39]="Diners Club";return b};var z=h.validateAccountNumber=function z(ad){return/^\d+$/.test(i(ad))
    };var r=h.validateBankCode=function r(ad){return/^\d{8}$/.test(i(ad))};var s=h.cardType=function s(ad){b||D();
        return b[(ad+"").substr(0,2)]||"Unknown"};var o=h.getApiKey=function o(){if(typeof PAYMILL_PUBLIC_KEY==="undefined"){throw new Error("No public api key is set. You need to set the global PAYMILL_PUBLIC_KEY variable to your public api key in order to use this api.")
    }if(m[PAYMILL_PUBLIC_KEY]!==undefined){return m[PAYMILL_PUBLIC_KEY]}return PAYMILL_PUBLIC_KEY
    };var t=h.isTestKey=function t(ad){return(ad+"").match(/^\d{10}/)||(typeof PAYMILL_TEST_MODE!=="undefined"&&PAYMILL_TEST_MODE===true)
    };h.transport={execute:function O(ae,ad,af){console.log("eee");throw new Error("paymill.transport.execute() not implemented. Wtf?")
    }};var a=h.createToken=function a(ah,aj,ad,ag){var ai=o(),af={type:"createToken"};
        try{af.data=ah[B]===undefined?v(ah,ai):ac(ah);h.transport.execute(ai,af,aj,ad,ag)
        }catch(ae){setTimeout(function(){aj({apierror:ae})},0)}};function H(ae,ad){return(typeof PAYMILL_PUBLIC_KEY!==undefined&&m[PAYMILL_PUBLIC_KEY]!==undefined)||(h.isTestKey(ae)&&l[ad]!==true)
    }function v(af,ae){var ad={};ad[C]=i(af[C]);ad[P]=ab(af[P]);ad[f]=ab(af[f]);ad[J]=ab(af[J]);
        ad[x]=ab(af[x]);ad[S]=ab(af[S]);ad[K]=ab(af[K]);ad[w]=ab(af[w]);ad[P]=("0"+ad[P]).slice(-2);
        if(!A(ad[C])){throw u}if(!E(ad[P],ad[f])){throw d}if(!F(ad[J])){throw aa}if(ad[x]==="undefined"){delete ad[x]
        }var ag=H(ae,ad[C]);if(ad[K]==="undefined"&&ag){delete ad[K]}else{if(I(ad[K])){ad[S]=G(ad[K]);
            delete ad[K]}else{if(ad[K]!=="undefined"){throw L}}}if(ad[S]==="undefined"&&ag){delete ad[S]
        }else{if(k(ad[S])){ad[S]=G(ad[S],1,2)}else{if(ad[S]==="undefined"){throw y}}}if(ad[w]==="undefined"&&ag){delete ad[w]
        }else{if(!Q(ad[w])){throw M}}return ad}function ac(ae){var ad={};ad[j]=i(ae[j]);ad[B]=i(ae[B]);
        ad[e]=ab(ae[e]);ad[V]="DE";if(!z(ad[j])){throw n}if(!r(ad[B])){throw Z}if(ad[e]==="undefined"||ad[e]===""){throw g
        }return ad}})(window.paymill={});(function(a){a.dom={css:function(c,b){for(var d in b){val=b[d];
    if(typeof val==="number"){val+="px"}c.style[d]=val}},computedStyle:function(c,d){var b="";
    if(document.defaultView&&document.defaultView.getComputedStyle){b=document.defaultView.getComputedStyle(c,"").getPropertyValue(d)
    }else{if(c.currentStyle){d=d.replace(/\-(\w)/g,function(e,f){return f.toUpperCase()
    });b=c.currentStyle[d]}}return b},bind:function(c,b,d){if(c.addEventListener){c.addEventListener(b,d,false)
}else{if(c.attachEvent){c.attachEvent("on"+b,d)}}},innerWidth:function(){if(typeof window.innerWidth==="number"){return window.innerWidth
}if(window.documentElement&&typeof window.documentElement.clientWidth==="number"){return window.documentElement.clientWidth
}if(document.body&&typeof document.body.clientWidth==="number"){return document.body.clientWidth
}},innerHeight:function(){if(typeof window.innerHeight==="number"){return window.innerHeight
}if(window.documentElement&&typeof window.documentElement.clientHeight==="number"){return window.documentElement.clientHeight
}if(document.body&&typeof document.body.clientHeight==="number"){return document.body.clientHeight
}}}})(window.paymill===undefined?window.paymill={}:window.paymill);(function(a,k,o){if(a===undefined||a==null){throw new Error("paymill object not initialized")
}var f=o.head||o.getElementsByTagName("head")[0]||o.documentElement;var b={test:"https://test-token.paymill.de",live:"https://token-v2.paymill.de"};
    var j={test:"https://test-tds.paymill.de/end.php",live:"https://tds.paymill.de/end.php"};
    var c="ACK",s="NOK",p="CONNECTOR_TEST",u="LIVE";var e={"100.100.600":a.E_CC_INVALID_CVC,"100.100.601":a.E_CC_INVALID_CVC,"100.100.303":a.E_CC_INVALID_EXPIRY,"100.100.304":a.E_CC_INVALID_EXPIRY,"100.100.301":a.E_CC_INVALID_EXP_YEAR,"100.100.300":a.E_CC_INVALID_EXP_YEAR,"100.100.201":a.E_CC_INVALID_EXP_MONTH,"100.100.200":a.E_CC_INVALID_EXP_MONTH,"100.100.100":[a.E_CC_INVALID_NUMBER,a.E_DD_INVALID_NUMBER],"100.100.101":[a.E_CC_INVALID_NUMBER,a.E_DD_INVALID_NUMBER],"100.100.400":[a.E_CC_INVALID_HOLDER,a.E_DD_INVALID_HOLDER],"100.100.401":[a.E_CC_INVALID_HOLDER,a.E_DD_INVALID_HOLDER],"100.100.402":[a.E_CC_INVALID_HOLDER,a.E_DD_INVALID_HOLDER]};
    var h={};a.transport.buildRequestUrl=function(y,x){var v=a.isTestKey(y)?b.test:b.live,w=a.toFormEncoding(x);
        if(v.indexOf("?")>=0){v+="&"+w}else{v+="?"+w}return v};function r(B,C,v,z){var x=null,w=null,y=null;
        if(B===null){return C(t("internal_server_error"),null)}else{if(B.error){if(/check channelId or login/.test(B.error.message)){return C(t("invalid_public_key"))
        }return C(t("unknown_error",B.error.message||B.error))}else{var A=B.transaction.processing;
            if(A.result===c){var y=B.transaction.identification.uniqueId;if(A.redirect){g(B,y,C,v,z)
            }else{return C(null,{token:y})}}else{return C(m(B),null)}}}}var n={};function q(D,y){var w=D.url,M=D.params;
        var B=o.body||o.getElementsByTagName("body")[0];var G=600,F=400,x=-60;var L=parseInt(a.dom.computedStyle(B,"margin-left"),10)+parseInt(a.dom.computedStyle(B,"padding-left"),10),K=parseInt(a.dom.computedStyle(B,"margin-top"),10)+parseInt(a.dom.computedStyle(B,"padding-top"),10);
        var H=a.dom.innerWidth(),J=a.dom.innerHeight();n.shadow=o.createElement("div");n.shadow.style.cssText="position:fixed;z-index:2147483646;top:-"+K+"px;left:-"+L+"px;width:"+(k.innerWidth+L)+"px;height:"+(k.innerHeight+K)+"px;background-color:#000;opacity:0.5;";
        n.dialog=o.createElement("div");n.dialog.style.cssText="position:fixed; z-index: 2147483647; width: "+G+"px; height: "+F+"; border-radius: 5px; background: white; font-family: sans-serif; font-size: 14px; -webkit-box-shadow: 0 0 50px rgba(0,0,0,0.3); -moz-box-shadow:  0 0 50px rgba(0,0,0,0.3); box-shadow: 0 0 50px rgba(0,0,0,0.3);";
        n.dialog.style.left=Math.floor(Math.max(0,H/2-G/2))+"px";n.dialog.style.top=Math.floor(Math.max(0,J/2-F/2)+x)+"px";
        n.dialog.innerHTML="<div style=\"border-bottom: 1px solid #c0c0c0!important; -webkit-border-top-right-radius: 5px; -moz-border-radius-topright: 5px; border-top-right-radius: 5px; -webkit-border-bottom-right-radius: 0; -moz-border-radius-bottomright: 0; border-bottom-right-radius: 0; -webkit-border-bottom-left-radius: 0; -moz-border-radius-bottomleft: 0; border-bottom-left-radius: 0; -webkit-border-top-left-radius: 5px; -moz-border-radius-topleft: 5px; border-top-left-radius: 5px; background-color: #dcdcdc; background-image: -moz-linear-gradient(top, #ededed, #c3c3c3); background-image: -ms-linear-gradient(top, #ededed, #c3c3c3); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ededed), to(#c3c3c3)); background-image: -webkit-linear-gradient(top, #ededed, #c3c3c3); background-image: -o-linear-gradient(top, #ededed, #c3c3c3); background-image: linear-gradient(top, #ededed, #c3c3c3); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#c3c3c3', GradientType=0); *zoom: 1; padding: 10px 0 0 0; height: 26px; text-align: center;\">3D-Secure</div><iframe style=\"border:none;width:"+G+"px;height:"+F+'px;"><html><body></body></html></iframe><div style="padding: 14px 15px 15px; margin-bottom: 0; text-align: right; background-color: #f5f5f5; border-top: 1px solid #ddd; -webkit-border-radius: 0 0 6px 6px; -moz-border-radius: 0 0 6px 6px; border-radius: 0 0 6px 6px; -webkit-box-shadow: inset 0 1px 0 #ffffff; -moz-box-shadow: inset 0 1px 0 #ffffff; box-shadow: inset 0 1px 0 #ffffff; *zoom: 1;"><input type="submit" value="'+(a.config("3ds_cancel_label")||"Abbrechen")+"\" style=\"display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 20px; *line-height: 20px; color: #333333; text-align: center; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; cursor: pointer; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0); border-color: #e6e6e6 #e6e6e6 #bfbfbf; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); *background-color: #e6e6e6; filter: progid:DXImageTransform.Microsoft.gradient(enabled = false); border: 1px solid #cccccc; *border: 0; border-bottom-color: #b3b3b3; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; *margin-left: .3em; -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05); -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05); box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);\"></div>";
        var z=n.dialog.firstChild.nextSibling.nextSibling.firstChild;var A=n.dialog.firstChild.nextSibling;
        a.dom.bind(z,"click",y);B.insertBefore(n.shadow,B.firstChild);B.insertBefore(n.dialog,B.firstChild);
        var E=A.contentWindow||A.contentDocument;if(E.document){E=E.document}var v=E.createElement("form");
        v.method="post";v.action=w;for(var I in M){var C=E.createElement("input");C.type="hidden";
            C.name=I;C.value=decodeURIComponent(M[I]);v.appendChild(C)}if(E.body){E.body.appendChild(v)
        }else{E.appendChild(v)}v.submit()}function d(){for(var v in n){n[v].parentNode.removeChild(n[v]);
        n[v]=null}}function g(A,w,G,D,v){var C=A.transaction.processing.redirect;var E=A.transaction.mode===p;
        var z={url:decodeURIComponent(C.url),params:{}};for(var y in C.parameters){z.params[y]=C.parameters[y]
        }var F=D||q,x=v||d,B=j[E?"test":"live"];F(z,function(){x();G(t("3ds_cancelled"))});
        a.receiveMessage(function(I,H){if(I.data==="ok"){x();G(null,{token:w})}if(I.data==="cancelled"){x();
            G(t("3ds_cancelled"))}},B.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}function m(x){var w=x.transaction.processing["return"].code,v=x.transaction.processing["return"].message;
        if(e[w]!==undefined){var y=e[w];if(Object.prototype.toString.apply(y)==="[object Array]"){return t(y[0])
        }return t(y)}return t("unknown_error",v)}function t(w,v){if(v===undefined){return{apierror:w}
    }return{apierror:w,message:v}}var l={exp_month:"account.expiry.month",exp_year:"account.expiry.year",cardholder:"account.holder",number:"account.number",amount:"presentation.amount3D",currency:"presentation.currency3D",cvc:"account.verification",accountholder:"account.holder",bank:"account.bank",country:"account.country"};
    a.transport.execute=function i(A,z,F,E,w){var C="paymillCallback"+parseInt(Math.random()*4294967295,10);
        h[C]=null;a.transport[C]=function(H){h[C]=H};var v=a.isTestKey(A),D=v?p:u,G=j[v?"test":"live"];
        G+="?parentUrl="+encodeURIComponent(encodeURIComponent(k.location.href))+"&";var y={"transaction.mode":D,"channel.id":A,"response.url":G,jsonPFunction:"window.paymill.transport."+C};
        for(var x in z.data){if(l[x]===undefined){continue}y[l[x]]=z.data[x]}var B=o.createElement("script");
        B.async="async";B.src=a.transport.buildRequestUrl(A,y);B.onload=B.onerror=B.onreadystatechange=function(I){if(!B.readyState||/loaded|complete/.test(B.readyState)){var H=h[C];
            delete paymill.transport[C];delete h[C];B.onload=B.onerror=B.onreadystatechange=null;
            f.removeChild(B);r(H,F,E,w)}};f.insertBefore(B,f.firstChild)}})(window.paymill,window,document);
(function(c){var e,f,d=1,b;c.postMessage=function a(h,j,i){if(!j){return}i=i||parent;
    if(window.postMessage){i.postMessage(h,j.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(j){i.location=j.replace(/#.*$/,"")+"#"+(+new Date)+(d++)+"&"+h
    }}};c.receiveMessage=function g(i,h){if(window.postMessage){if(i){b=function(j){if((typeof h==="string"&&j.origin!==h)||(Object.prototype.toString.call(h)==="[object Function]"&&h(j.origin)===!1)){return !1
}i(j)}}if(window.addEventListener){window[i?"addEventListener":"removeEventListener"]("message",b,!1)
}else{window[i?"attachEvent":"detachEvent"]("onmessage",b)}}else{e&&clearInterval(e);
    e=null;if(i){e=setInterval(function(){var k=document.location.hash,j=/^#?\d+&/;if(k!==f&&j.test(k)){f=k;
        i({data:k.replace(j,"")})}},100)}}}})(window.paymill===undefined?window.paymill={}:window.paymill);
/*! jQuery v1.7.1 jquery.com | jquery.org/license */(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
    f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
    {for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);


jQuery.fn.watch = function( id, fn ) {

    return this.each(function(){

        var self = this;

        var oldVal = self[id];
        $(self).data(
            'watch_timer',
            setInterval(function(){
                if (self[id] !== oldVal) {
                    fn.call(self, id, oldVal, self[id]);
                    oldVal = self[id];
                }
            }, 100)
        );

    });

    return self;
};

jQuery.fn.unwatch = function( id ) {

    return this.each(function(){
        clearInterval( $(this).data('watch_timer') );
    });

};

jQuery.fn.valuechange = function(fn) {
    return this.bind('htmlchange', fn);
};

jQuery.event.special.htmlchange = {

    setup: function() {

        jQuery(this).watch('html', function(){
            jQuery.event.handle.call(this, {type:'htmlchange'});
        });

    },

    teardown: function() {
        jQuery(this).unwatch('html');
    }

};
!function(a,b,c,d){a.fn.dropdown=function(b){var e,f=a(this),g=a(c),h=f.selector||"",i="ontouchstart"in c.documentElement,j=(new Date).getTime(),k=[],l=arguments[0],m="string"==typeof l,n=[].slice.call(arguments,1);return f.each(function(){var c,o=a.isPlainObject(b)?a.extend(!0,{},a.fn.dropdown.settings,b):a.extend({},a.fn.dropdown.settings),p=o.className,q=o.metadata,r=o.namespace,s=o.selector,t=o.error,u="."+r,v="module-"+r,w=a(this),x=w.find(s.item),y=w.find(s.text),z=w.find(s.input),A=w.children(s.menu),B=this,C=w.data(v);c={initialize:function(){c.debug("Initializing dropdown",o),c.save.defaults(),c.set.selected(),i&&c.bind.touchEvents(),c.bind.mouseEvents(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of dropdown",c),C=c,w.data(v,c)},destroy:function(){c.verbose("Destroying previous dropdown for",w),x.off(u),w.off(u).removeData(v)},bind:{touchEvents:function(){c.debug("Touch device detected binding touch events"),w.on("touchstart"+u,c.event.test.toggle),x.on("touchstart"+u,c.event.item.mouseenter).on("touchstart"+u,c.event.item.click)},mouseEvents:function(){c.verbose("Mouse detected binding mouse events"),"click"==o.on?w.on("click"+u,c.event.test.toggle):"hover"==o.on?w.on("mouseenter"+u,c.delay.show).on("mouseleave"+u,c.delay.hide):w.on(o.on+u,c.toggle),x.on("mouseenter"+u,c.event.item.mouseenter).on("mouseleave"+u,c.event.item.mouseleave).on("click"+u,c.event.item.click)},intent:function(){c.verbose("Binding hide intent event to document"),i&&g.on("touchstart"+u,c.event.test.touch).on("touchmove"+u,c.event.test.touch),g.on("click"+u,c.event.test.hide)}},unbind:{intent:function(){c.verbose("Removing hide intent event from document"),i&&g.off("touchstart"+u).off("touchmove"+u),g.off("click"+u)}},event:{test:{toggle:function(a){c.determine.intent(a,c.toggle)&&a.preventDefault()},touch:function(a){c.determine.intent(a,function(){"touchstart"==a.type?c.timer=setTimeout(c.hide,o.delay.touch):"touchmove"==a.type&&clearTimeout(c.timer)}),a.stopPropagation()},hide:function(a){c.determine.intent(a,c.hide)}},item:{mouseenter:function(b){var d=a(this).find(s.menu),e=a(this).siblings(s.item).children(s.menu);d.size()>0&&(clearTimeout(c.itemTimer),c.itemTimer=setTimeout(function(){c.animate.hide(!1,e),c.verbose("Showing sub-menu",d),c.animate.show(!1,d)},2*o.delay.show),b.preventDefault())},mouseleave:function(){var b=a(this).find(s.menu);b.size()>0&&(clearTimeout(c.itemTimer),c.itemTimer=setTimeout(function(){c.verbose("Hiding sub-menu",b),c.animate.hide(!1,b)},o.delay.hide))},click:function(b){var e=a(this),f=e.data(q.text)!==d?e.data(q.text):e.text(),g=e.data(q.value)!==d?e.data(q.value):f.toLowerCase(),h=function(){c.determine.selectAction(f,g),a.proxy(o.onChange,B)(g,f)};0===e.find(s.menu).size()&&("touchstart"==b.type?e.one("click",h):h())}},resetStyle:function(){a(this).removeAttr("style")}},determine:{selectAction:function(b,d){c.verbose("Determining action",o.action),a.isFunction(c.action[o.action])?(c.verbose("Triggering preset action",o.action,b,d),c.action[o.action](b,d)):a.isFunction(o.action)?(c.verbose("Triggering user action",o.action,b,d),o.action(b,d)):c.error(t.action,o.action)},intent:function(b,d){return c.debug("Determining whether event occurred in dropdown",b.target),d=d||function(){},0===a(b.target).closest(A).size()?(c.verbose("Triggering event",d),d(),!0):(c.verbose("Event occurred in dropdown, canceling callback"),!1)}},action:{nothing:function(){},hide:function(){c.hide()},activate:function(a,b){b=b!==d?b:a,c.set.selected(b),c.set.value(b),c.hide()},auto:function(a,b){b=b!==d?b:a,c.set.selected(b),c.set.value(b),c.hide()},changeText:function(a,b){b=b!==d?b:a,c.set.selected(b),c.hide()},updateForm:function(a,b){b=b!==d?b:a,c.set.selected(b),c.set.value(b),c.hide()}},get:{text:function(){return y.text()},value:function(){return z.size()>0?z.val():w.data(q.value)},item:function(b){var e=!1;return b=b!==d?b:c.get.value()!==d?c.get.value():c.get.text(),b!==d?x.each(function(){var c=a(this),f=c.data(q.text)!==d?c.data(q.text):c.text(),g=c.data(q.value)!==d?c.data(q.value):f.toLowerCase();g==b?e=a(this):e||f!=b||(e=a(this))}):b=c.get.text(),e||!1}},restore:{defaults:function(){c.restore.defaultText(),c.restore.defaultValue()},defaultText:function(){var a=w.data(q.defaultText);c.debug("Restoring default text",a),c.set.text(a)},defaultValue:function(){var a=w.data(q.defaultValue);a!==d&&(c.debug("Restoring default value",a),c.set.selected(a),c.set.value(a))}},save:{defaults:function(){c.save.defaultText(),c.save.defaultValue()},defaultValue:function(){w.data(q.defaultValue,c.get.value())},defaultText:function(){w.data(q.defaultText,y.text())}},set:{text:function(a){c.debug("Changing text",a,y),y.removeClass(p.placeholder),y.text(a)},value:function(a){c.debug("Adding selected value to hidden input",a,z),z.size()>0?z.val(a):w.data(q.value,a)},active:function(){w.addClass(p.active)},visible:function(){w.addClass(p.visible)},selected:function(a){var b,e=c.get.item(a);e&&(c.debug("Setting selected menu item to",e),b=e.data(q.text)!==d?e.data(q.text):e.text(),x.removeClass(p.active),e.addClass(p.active),c.set.text(b))}},remove:{active:function(){w.removeClass(p.active)},visible:function(){w.removeClass(p.visible)}},is:{selection:function(){return w.hasClass(p.selection)},animated:function(a){return a?a.is(":animated")||a.transition("is animating"):A.is(":animated")||A.transition("is animating")},visible:function(a){return a?a.is(":visible"):A.is(":visible")},hidden:function(a){return a?a.is(":not(:visible)"):A.is(":not(:visible)")}},can:{click:function(){return i||"click"==o.on},show:function(){return!w.hasClass(p.disabled)}},animate:{show:function(b,e){var f=e||A;b=b||function(){},c.is.hidden(f)&&(c.verbose("Doing menu show animation",f),"none"==o.transition?b():a.fn.transition!==d&&w.transition("is supported")?f.transition({animation:o.transition+" in",duration:o.duration,complete:b,queue:!1}):"slide down"==o.transition?f.hide().clearQueue().children().clearQueue().css("opacity",0).delay(50).animate({opacity:1},o.duration,"easeOutQuad",c.event.resetStyle).end().slideDown(100,"easeOutQuad",function(){a.proxy(c.event.resetStyle,this)(),b()}):"fade"==o.transition?f.hide().clearQueue().fadeIn(o.duration,function(){a.proxy(c.event.resetStyle,this)(),b()}):c.error(t.transition,o.transition))},hide:function(b,e){var f=e||A;b=b||function(){},c.is.visible(f)&&(c.verbose("Doing menu hide animation",f),a.fn.transition!==d&&w.transition("is supported")?f.transition({animation:o.transition+" out",duration:o.duration,complete:b,queue:!1}):"none"==o.transition?b():"slide down"==o.transition?f.show().clearQueue().children().clearQueue().css("opacity",1).animate({opacity:0},100,"easeOutQuad",c.event.resetStyle).end().delay(50).slideUp(100,"easeOutQuad",function(){a.proxy(c.event.resetStyle,this)(),b()}):"fade"==o.transition?f.show().clearQueue().fadeOut(150,function(){a.proxy(c.event.resetStyle,this)(),b()}):c.error(t.transition))}},show:function(){c.debug("Checking if dropdown can show"),c.is.hidden()&&(c.hideOthers(),c.set.active(),c.animate.show(function(){c.can.click()&&c.bind.intent(),c.set.visible()}),a.proxy(o.onShow,B)())},hide:function(){!c.is.animated()&&c.is.visible()&&(c.debug("Hiding dropdown"),c.can.click()&&c.unbind.intent(),c.remove.active(),c.animate.hide(c.remove.visible),a.proxy(o.onHide,B)())},delay:{show:function(){c.verbose("Delaying show event to ensure user intent"),clearTimeout(c.timer),c.timer=setTimeout(c.show,o.delay.show)},hide:function(){c.verbose("Delaying hide event to ensure user intent"),clearTimeout(c.timer),c.timer=setTimeout(c.hide,o.delay.hide)}},hideOthers:function(){c.verbose("Finding other dropdowns to hide"),f.not(w).has(s.menu+":visible").dropdown("hide")},toggle:function(){c.verbose("Toggling menu visibility"),c.is.hidden()?c.show():c.hide()},setting:function(b,c){if(a.isPlainObject(b))a.extend(!0,o,b);else{if(c===d)return o[b];o[b]=c}},internal:function(b,e){if(a.isPlainObject(b))a.extend(!0,c,b);else{if(e===d)return c[b];c[b]=e}},debug:function(){o.debug&&(o.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,o.name+":"),c.debug.apply(console,arguments)))},verbose:function(){o.verbose&&o.debug&&(o.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),c.verbose.apply(console,arguments)))},error:function(){c.error=Function.prototype.bind.call(console.error,console,o.name+":"),c.error.apply(console,arguments)},performance:{log:function(a){var b,d,e;o.performance&&(b=(new Date).getTime(),e=j||b,d=b-e,j=b,k.push({Element:B,Name:a[0],Arguments:[].slice.call(a,1)||"","Execution Time":d})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,100)},display:function(){var b=o.name+":",e=0;j=!1,clearTimeout(c.performance.timer),a.each(k,function(a,b){e+=b["Execution Time"]}),b+=" "+e+"ms",h&&(b+=" '"+h+"'"),(console.group!==d||console.table!==d)&&k.length>0&&(console.groupCollapsed(b),console.table?console.table(k):a.each(k,function(a,b){console.log(b.Name+": "+b["Execution Time"]+"ms")}),console.groupEnd()),k=[]}},invoke:function(b,f,g){var h,i,j,k=C;return f=f||n,g=B||g,"string"==typeof b&&k!==d&&(b=b.split(/[\. ]/),h=b.length-1,a.each(b,function(e,f){var g=e!=h?f+b[e+1].charAt(0).toUpperCase()+b[e+1].slice(1):b;if(a.isPlainObject(k[g])&&e!=h)k=k[g];else{if(k[g]!==d)return i=k[g],!1;if(!a.isPlainObject(k[f])||e==h)return k[f]!==d?(i=k[f],!1):(c.error(t.method,b),!1);k=k[f]}})),a.isFunction(i)?j=i.apply(g,f):i!==d&&(j=i),a.isArray(e)?e.push(j):e!==d?e=[e,j]:j!==d&&(e=j),i}},m?(C===d&&c.initialize(),c.invoke(l)):(C!==d&&c.destroy(),c.initialize())}),e?e:this},a.fn.dropdown.settings={name:"Dropdown",namespace:"dropdown",verbose:!0,debug:!0,performance:!0,on:"click",action:"activate",delay:{show:200,hide:300,touch:50},transition:"slide down",duration:250,onChange:function(){},onShow:function(){},onHide:function(){},error:{action:"You called a dropdown action that was not defined",method:"The method you called is not defined.",transition:"The requested transition was not found"},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",text:"text",value:"value"},selector:{menu:".menu",item:".menu > .item",text:"> .text",input:'> input[type="hidden"]'},className:{active:"active",placeholder:"default",disabled:"disabled",visible:"visible",selection:"selection"}},a.extend(a.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}})}(jQuery,window,document);
!function(a,b,c,d){a.fn.transition=function(){{var e,f=a(this),g=f.selector||"",h=(new Date).getTime(),i=[],j=arguments,k=j[0],l=[].slice.call(arguments,1),m="string"==typeof k;b.requestAnimationFrame||b.mozRequestAnimationFrame||b.webkitRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,0)}}return f.each(function(){var b,n,o,p,q,r,s,t,u,v,w=a(this),x=this;v={initialize:function(){b=v.get.settings.apply(x,j),v.verbose("Converted arguments into settings object",b),o=b.error,p=b.className,t=b.namespace,q=b.metadata,u="module-"+t,r=v.get.animationEvent(),s=v.get.animationName(),n=w.data(u)||v,m&&(m=v.invoke(k)),m===!1&&v.animate(),v.instantiate()},instantiate:function(){v.verbose("Storing instance of module",v),w.data(u,n)},destroy:function(){v.verbose("Destroying previous module for",x),w.removeData(u)},refresh:function(){v.verbose("Refreshing display type on next animation"),delete n.displayType},forceRepaint:function(){v.verbose("Forcing element repaint");var a=w.parent(),b=w.next();0===b.size()?w.detach().appendTo(a):w.detach().insertBefore(b)},repaint:function(){v.verbose("Repainting element");x.offsetWidth},animate:function(a){return b=a||b,v.is.supported()?(v.debug("Preparing animation",b.animation),v.is.animating()&&b.queue?(!b.allowRepeats&&v.has.direction()&&v.is.occuring()&&n.queuing!==!0?v.error(o.repeated):v.queue(b.animation),!1):(v.can.animate?v.set.animating(b.animation):v.error(o.noAnimation,b.animation),void 0)):(v.error(o.support),!1)},reset:function(){v.debug("Resetting animation to beginning conditions"),w.off(r),v.restore.conditions(),v.hide(),v.remove.animating()},queue:function(a){v.debug("Queueing animation of",a),n.queuing=!0,w.one(r,function(){n.queuing=!1,v.repaint(),v.animate.apply(this,b)})},complete:function(){v.verbose("CSS animation complete",b.animation),v.is.looping()||(v.is.outward()?(v.verbose("Animation is outward, hiding element"),v.restore.conditions(),v.remove.display(),v.hide(),a.proxy(b.onHide,this)()):v.is.inward()?(v.verbose("Animation is outward, showing element"),v.restore.conditions(),v.show(),a.proxy(b.onShow,this)()):v.restore.conditions(),v.remove.duration(),v.remove.animating()),a.proxy(b.complete,this)()},has:{direction:function(a){return a=a||b.animation,-1!==a.search(p.inward)||-1!==a.search(p.outward)?(v.debug("Direction already set in animation"),!0):!1}},set:{animating:function(a){a=a||b.animation,v.save.conditions(),v.can.transition()&&!v.has.direction()&&v.set.direction(),v.remove.hidden(),v.set.display(),w.addClass(p.animating).addClass(p.transition).addClass(a).one(r,v.complete),v.set.duration(b.duration),v.debug("Starting tween",b.animation,w.attr("class"))},display:function(){var a=v.get.displayType();"block"!==a&&(v.verbose("Setting final visibility to",a),w.css({display:a}))},direction:function(){w.is(":visible")?(v.debug("Automatically determining the direction of animation","Outward"),w.removeClass(p.inward).addClass(p.outward)):(v.debug("Automatically determining the direction of animation","Inward"),w.removeClass(p.outward).addClass(p.inward))},looping:function(){v.debug("Transition set to loop"),w.addClass(p.looping)},duration:function(a){a=a||b.duration,a="number"==typeof a?a+"ms":a,v.verbose("Setting animation duration",a),w.css({"-webkit-animation-duration":a,"-moz-animation-duration":a,"-ms-animation-duration":a,"-o-animation-duration":a,"animation-duration":a})},hidden:function(){w.addClass(p.transition).addClass(p.hidden)},visible:function(){w.addClass(p.transition).addClass(p.visible)}},save:{displayType:function(a){n.displayType=a},transitionExists:function(b,c){a.fn.transition.exists[b]=c,v.verbose("Saving existence of transition",b,c)},conditions:function(){n.cache={className:w.attr("class"),style:w.attr("style")},v.verbose("Saving original attributes",n.cache)}},restore:{conditions:function(){return n.cache===d?!1:(n.cache.className?w.attr("class",n.cache.className):w.removeAttr("class"),n.cache.style?w.attr("style",n.cache.style):"block"===v.get.displayType()&&w.removeAttr("style"),v.is.looping()&&v.remove.looping(),v.verbose("Restoring original attributes",n.cache),void 0)}},remove:{animating:function(){w.removeClass(p.animating)},display:function(){n.displayType!==d&&w.css("display","")},duration:function(){w.css({"-webkit-animation-duration":"","-moz-animation-duration":"","-ms-animation-duration":"","-o-animation-duration":"","animation-duration":""})},hidden:function(){w.removeClass(p.hidden)},visible:function(){w.removeClass(p.visible)},looping:function(){v.debug("Transitions are no longer looping"),w.removeClass(p.looping),v.forceRepaint()}},get:{settings:function(b,c,d){return"object"==typeof b?a.extend(!0,{},a.fn.transition.settings,b):"function"==typeof d?a.extend({},a.fn.transition.settings,{animation:b,complete:d,duration:c}):"string"==typeof c||"number"==typeof c?a.extend({},a.fn.transition.settings,{animation:b,duration:c}):"object"==typeof c?a.extend({},a.fn.transition.settings,c,{animation:b}):"function"==typeof c?a.extend({},a.fn.transition.settings,{animation:b,complete:c}):a.extend({},a.fn.transition.settings,{animation:b})},displayType:function(){return n.displayType===d&&v.can.transition(),n.displayType},transitionExists:function(b){return a.fn.transition.exists[b]},animationName:function(){var a,b=c.createElement("div"),e={animation:"animationName",OAnimation:"oAnimationName",MozAnimation:"mozAnimationName",WebkitAnimation:"webkitAnimationName"};for(a in e)if(b.style[a]!==d)return v.verbose("Determined animation vendor name property",e[a]),e[a];return!1},animationEvent:function(){var a,b=c.createElement("div"),e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(a in e)if(b.style[a]!==d)return v.verbose("Determined animation vendor end event",e[a]),e[a];return!1}},can:{animate:function(){return"none"!==w.css(b.animation)?(v.debug("CSS definition found",w.css(b.animation)),!0):(v.debug("Unable to find css definition",w.attr("class")),!1)},transition:function(){var c,e,f,g,h=w.attr("class"),i=b.animation,j=v.get.transitionExists(b.animation);return(j===d||n.displayType===d)&&(v.verbose("Determining whether animation exists"),c=a("<div>").addClass(h).appendTo(a("body")),e=c.removeClass(p.inward).removeClass(p.outward).addClass(p.animating).addClass(p.transition).addClass(i).css(s),f=c.addClass(p.inward).css(s),g=c.attr("class",h).show().css("display"),v.verbose("Determining final display state",g),e!=f?(v.debug("Transition exists for animation",i),j=!0):(v.debug("Static animation found",i,g),j=!1),c.remove(),v.save.displayType(g),v.save.transitionExists(i,j)),j}},is:{animating:function(){return w.hasClass(p.animating)},inward:function(){return w.hasClass(p.inward)},outward:function(){return w.hasClass(p.outward)},looping:function(){return w.hasClass(p.looping)},occuring:function(a){return a=a||b.animation,w.hasClass(a)},visible:function(){return w.is(":visible")},supported:function(){return s!==!1&&r!==!1}},hide:function(){v.verbose("Hiding element"),v.remove.visible(),v.set.hidden(),v.repaint()},show:function(a){v.verbose("Showing element",a),v.remove.hidden(),v.set.visible(),v.repaint()},start:function(){v.verbose("Starting animation"),w.removeClass(p.disabled)},stop:function(){v.debug("Stopping animation"),w.addClass(p.disabled)},toggle:function(){v.debug("Toggling play status"),w.toggleClass(p.disabled)},setting:function(c,e){if(a.isPlainObject(c))a.extend(!0,b,c);else{if(e===d)return b[c];b[c]=e}},internal:function(b,c){if(a.isPlainObject(b))a.extend(!0,v,b);else{if(c===d)return v[b];v[b]=c}},debug:function(){b.debug&&(b.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,b.name+":"),v.debug.apply(console,arguments)))},verbose:function(){b.verbose&&b.debug&&(b.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,b.name+":"),v.verbose.apply(console,arguments)))},error:function(){v.error=Function.prototype.bind.call(console.error,console,b.name+":"),v.error.apply(console,arguments)},performance:{log:function(a){var c,d,e;b.performance&&(c=(new Date).getTime(),e=h||c,d=c-e,h=c,i.push({Element:x,Name:a[0],Arguments:[].slice.call(a,1)||"","Execution Time":d})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,100)},display:function(){var c=b.name+":",e=0;h=!1,clearTimeout(v.performance.timer),a.each(i,function(a,b){e+=b["Execution Time"]}),c+=" "+e+"ms",g&&(c+=" '"+g+"'"),f.size()>1&&(c+=" ("+f.size()+")"),(console.group!==d||console.table!==d)&&i.length>0&&(console.groupCollapsed(c),console.table?console.table(i):a.each(i,function(a,b){console.log(b.Name+": "+b["Execution Time"]+"ms")}),console.groupEnd()),i=[]}},invoke:function(b,c,f){var g,h,i,j=n;return c=c||l,f=x||f,"string"==typeof b&&j!==d&&(b=b.split(/[\. ]/),g=b.length-1,a.each(b,function(c,e){var f=c!=g?e+b[c+1].charAt(0).toUpperCase()+b[c+1].slice(1):b;if(a.isPlainObject(j[f])&&c!=g)j=j[f];else{if(j[f]!==d)return h=j[f],!1;if(!a.isPlainObject(j[e])||c==g)return j[e]!==d?(h=j[e],!1):!1;j=j[e]}})),a.isFunction(h)?i=h.apply(f,c):h!==d&&(i=h),a.isArray(e)?e.push(i):e!==d?e=[e,i]:i!==d&&(e=i),h||!1}},v.initialize()}),e!==d?e:this},a.fn.transition.exists={},a.fn.transition.settings={name:"Transition",debug:!0,verbose:!0,performance:!0,namespace:"transition",complete:function(){},onShow:function(){},onHide:function(){},allowRepeats:!1,animation:"fade",duration:"700ms",queue:!0,className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"ui transition",visible:"visible"},error:{noAnimation:"There is no css animation matching the one you specified.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);
!function(a,b,c,d){a.fn.checkbox=function(b){var c,e=a(this),f=e.selector||"",g=(new Date).getTime(),h=[],i=arguments[0],j="string"==typeof i,k=[].slice.call(arguments,1);return e.each(function(){var e,l=a.extend(!0,{},a.fn.checkbox.settings,b),m=l.className,n=l.namespace,o=(l.error,"."+n),p="module-"+n,q=a(this),r=a(this).next(l.selector.label).first(),s=a(this).find(l.selector.input),t=q.selector||"",u=q.data(p),v=this;e={initialize:function(){e.verbose("Initializing checkbox",l),l.context&&""!==t?(e.verbose("Adding delegated events"),a(v,l.context).on(t,"click"+o,e.toggle).on(t+" + "+l.selector.label,"click"+o,e.toggle)):(q.on("click"+o,e.toggle).data(p,e),r.on("click"+o,e.toggle)),e.instantiate()},instantiate:function(){e.verbose("Storing instance of module",e),u=e,q.data(p,e)},destroy:function(){e.verbose("Destroying previous module"),q.off(o).removeData(p)},is:{radio:function(){return q.hasClass(m.radio)},enabled:function(){return s.prop("checked")!==d&&s.prop("checked")},disabled:function(){return!e.is.enabled()}},can:{disable:function(){return"boolean"==typeof l.required?l.required:!e.is.radio()}},enable:function(){e.debug("Enabling checkbox",s),s.prop("checked",!0),a.proxy(l.onChange,s.get())(),a.proxy(l.onEnable,s.get())()},disable:function(){e.debug("Disabling checkbox"),s.prop("checked",!1),a.proxy(l.onChange,s.get())(),a.proxy(l.onDisable,s.get())()},toggle:function(){e.verbose("Determining new checkbox state"),e.is.disabled()?e.enable():e.is.enabled()&&e.can.disable()&&e.disable()},setting:function(b,c){if(a.isPlainObject(b))a.extend(!0,l,b);else{if(c===d)return l[b];l[b]=c}},internal:function(b,c){if(a.isPlainObject(b))a.extend(!0,e,b);else{if(c===d)return e[b];e[b]=c}},debug:function(){l.debug&&(l.performance?e.performance.log(arguments):(e.debug=Function.prototype.bind.call(console.info,console,l.name+":"),e.debug.apply(console,arguments)))},verbose:function(){l.verbose&&l.debug&&(l.performance?e.performance.log(arguments):(e.verbose=Function.prototype.bind.call(console.info,console,l.name+":"),e.verbose.apply(console,arguments)))},error:function(){e.error=Function.prototype.bind.call(console.error,console,l.name+":"),e.error.apply(console,arguments)},performance:{log:function(a){var b,c,d;l.performance&&(b=(new Date).getTime(),d=g||b,c=b-d,g=b,h.push({Element:v,Name:a[0],Arguments:[].slice.call(a,1)||"","Execution Time":c})),clearTimeout(e.performance.timer),e.performance.timer=setTimeout(e.performance.display,100)},display:function(){var b=l.name+":",c=0;g=!1,clearTimeout(e.performance.timer),a.each(h,function(a,b){c+=b["Execution Time"]}),b+=" "+c+"ms",f&&(b+=" '"+f+"'"),(console.group!==d||console.table!==d)&&h.length>0&&(console.groupCollapsed(b),console.table?console.table(h):a.each(h,function(a,b){console.log(b.Name+": "+b["Execution Time"]+"ms")}),console.groupEnd()),h=[]}},invoke:function(b,e,f){var g,h,i,j=u;return e=e||k,f=v||f,"string"==typeof b&&j!==d&&(b=b.split(/[\. ]/),g=b.length-1,a.each(b,function(c,e){var f=c!=g?e+b[c+1].charAt(0).toUpperCase()+b[c+1].slice(1):b;if(a.isPlainObject(j[f])&&c!=g)j=j[f];else{if(j[f]!==d)return h=j[f],!1;if(!a.isPlainObject(j[e])||c==g)return j[e]!==d?(h=j[e],!1):!1;j=j[e]}})),a.isFunction(h)?i=h.apply(f,e):h!==d&&(i=h),a.isArray(c)?c.push(i):c!==d?c=[c,i]:i!==d&&(c=i),h}},j?(u===d&&e.initialize(),e.invoke(i)):(u!==d&&e.destroy(),e.initialize())}),c!==d?c:this},a.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",verbose:!0,debug:!0,performance:!0,context:!1,required:"auto",onChange:function(){},onEnable:function(){},onDisable:function(){},error:{method:"The method you called is not defined."},selector:{input:"input[type=checkbox], input[type=radio]",label:"label"},className:{radio:"radio"}}}(jQuery,window,document);
!function(a,b,c,d){a.fn.popup=function(e){var f,g=a(this),h=a(c),i=g.selector||"",j=(new Date).getTime(),k=[],l=arguments[0],m="string"==typeof l,n=[].slice.call(arguments,1);return g.each(function(){var c,g=a.isPlainObject(e)?a.extend(!0,{},a.fn.popup.settings,e):a.extend({},a.fn.popup.settings),o=g.selector,p=g.className,q=g.error,r=g.metadata,s=g.namespace,t="."+g.namespace,u="module-"+s,v=a(this),w=a(g.context),x=g.target?a(g.target):v,y=a(b),z=g.inline?x.offsetParent():y,A=g.inline?x.next(g.selector.popup):y.children(g.selector.popup).last(),B=0,C=this,D=v.data(u);c={initialize:function(){c.debug("Initializing module",v),"click"==g.on?v.on("click",c.toggle):v.on(c.get.startEvent()+t,c.event.start).on(c.get.endEvent()+t,c.event.end),g.target&&c.debug("Target set to element",x),y.on("resize"+t,c.event.resize),c.instantiate()},instantiate:function(){c.verbose("Storing instance of module",c),D=c,v.data(u,D)},refresh:function(){g.inline?(A=x.next(o.popup),z=x.offsetParent()):A=y.children(o.popup).last()},destroy:function(){c.debug("Destroying previous module"),y.off(t),A.remove(),v.off(t).removeData(u)},event:{start:function(){c.timer=setTimeout(function(){c.is.hidden()&&c.show()},g.delay)},end:function(){clearTimeout(c.timer),c.is.visible()&&c.hide()},resize:function(){c.is.visible()&&c.set.position()}},create:function(){c.debug("Creating pop-up html");var b=v.data(r.html)||g.html,d=v.data(r.variation)||g.variation,e=v.data(r.title)||g.title,f=v.data(r.content)||v.attr("title")||g.content;b||f||e?(b||(b=g.template({title:e,content:f})),A=a("<div/>").addClass(p.popup).addClass(d).html(b),g.inline?(c.verbose("Inserting popup element inline",A),A.insertAfter(v)):(c.verbose("Appending popup element to body",A),A.appendTo(w)),a.proxy(g.onCreate,A)()):c.error(q.content)},toggle:function(){c.debug("Toggling pop-up"),c.is.hidden()?(c.debug("Popup is hidden, showing pop-up"),c.unbind.close(),c.hideAll(),c.show()):(c.debug("Popup is visible, hiding pop-up"),c.hide())},show:function(a){a=a||function(){},c.debug("Showing pop-up",g.transition),g.preserve||c.refresh(),c.exists()||c.create(),c.save.conditions(),c.set.position(),c.animate.show(a)},hide:function(a){a=a||function(){},v.removeClass(p.visible),c.restore.conditions(),c.unbind.close(),c.is.visible()&&c.animate.hide(a)},hideAll:function(){a(o.popup).filter(":visible").popup("hide")},hideGracefully:function(b){b&&0===a(b.target).closest(o.popup).size()?(c.debug("Click occurred outside popup hiding popup"),c.hide()):c.debug("Click was inside popup, keeping popup open")},exists:function(){return g.inline?0!==A.size():A.parent(w).size()},remove:function(){c.debug("Removing popup"),A.remove()},save:{conditions:function(){c.cache={title:v.attr("title")},c.cache.title&&v.removeAttr("title"),c.verbose("Saving original attributes",c.cache.title)}},restore:{conditions:function(){return c.cache&&c.cache.title&&v.attr("title",c.cache.title),c.verbose("Restoring original attributes",c.cache.title),!0}},animate:{show:function(b){b=b||function(){},v.addClass(p.visible),g.transition&&a.fn.transition!==d&&v.transition("is supported")?A.transition(g.transition+" in",g.duration,function(){c.bind.close(),a.proxy(b,C)()}):A.stop().fadeIn(g.duration,g.easing,function(){c.bind.close(),a.proxy(b,C)()}),a.proxy(g.onShow,C)()},hide:function(b){b=b||function(){},c.debug("Hiding pop-up"),g.transition&&a.fn.transition!==d&&v.transition("is supported")?A.transition(g.transition+" out",g.duration,function(){c.reset(),b()}):A.stop().fadeOut(g.duration,g.easing,function(){c.reset(),b()}),a.proxy(g.onHide,C)()}},get:{startEvent:function(){return"hover"==g.on?"mouseenter":"focus"==g.on?"focus":void 0},endEvent:function(){return"hover"==g.on?"mouseleave":"focus"==g.on?"blur":void 0},offstagePosition:function(){var d={top:a(b).scrollTop(),bottom:a(b).scrollTop()+a(b).height(),left:0,right:a(b).width()},e={width:A.width(),height:A.outerHeight(),position:A.offset()},f={},g=[];return e.position&&(f={top:e.position.top<d.top,bottom:e.position.top+e.height>d.bottom,right:e.position.left+e.width>d.right,left:e.position.left<d.left}),c.verbose("Checking if outside viewable area",e.position),a.each(f,function(a,b){b&&g.push(a)}),g.length>0?g.join(" "):!1},nextPosition:function(a){switch(a){case"top left":a="bottom left";break;case"bottom left":a="top right";break;case"top right":a="bottom right";break;case"bottom right":a="top center";break;case"top center":a="bottom center";break;case"bottom center":a="right center";break;case"right center":a="left center";break;case"left center":a="top center"}return a}},set:{position:function(d,e){var f,h,i=(a(b).width(),a(b).height(),x.outerWidth()),j=x.outerHeight(),k=A.width(),l=A.outerHeight(),m=z.outerWidth(),n=z.outerHeight(),o=g.distanceAway,s=g.inline?x.position():x.offset();switch(d=d||v.data(r.position)||g.position,e=e||v.data(r.offset)||g.offset,g.inline&&("left center"==d||"right center"==d?(e+=parseInt(b.getComputedStyle(C).getPropertyValue("margin-top"),10),o+=-parseInt(b.getComputedStyle(C).getPropertyValue("margin-left"),10)):(e+=parseInt(b.getComputedStyle(C).getPropertyValue("margin-left"),10),o+=parseInt(b.getComputedStyle(C).getPropertyValue("margin-top"),10))),c.debug("Calculating offset for position",d),d){case"top left":f={bottom:n-s.top+o,right:m-s.left-e,top:"auto",left:"auto"};break;case"top center":f={bottom:n-s.top+o,left:s.left+i/2-k/2+e,top:"auto",right:"auto"};break;case"top right":f={top:"auto",bottom:n-s.top+o,left:s.left+i+e,right:"auto"};break;case"left center":f={top:s.top+j/2-l/2+e,right:m-s.left+o,left:"auto",bottom:"auto"};break;case"right center":f={top:s.top+j/2-l/2+e,left:s.left+i+o,bottom:"auto",right:"auto"};break;case"bottom left":f={top:s.top+j+o,right:m-s.left-e,left:"auto",bottom:"auto"};break;case"bottom center":f={top:s.top+j+o,left:s.left+i/2-k/2+e,bottom:"auto",right:"auto"};break;case"bottom right":f={top:s.top+j+o,left:s.left+i+e,bottom:"auto",right:"auto"}}return A.css(f).removeClass(p.position).addClass(d).addClass(p.loading),h=c.get.offstagePosition(),h?(c.debug("Element is outside boundaries",h),B<g.maxSearchDepth?(d=c.get.nextPosition(d),B++,c.debug("Trying new position",d),c.set.position(d)):(c.error(q.recursion),B=0,c.reset(),A.removeClass(p.loading),!1)):(c.debug("Position is on stage",d),B=0,A.removeClass(p.loading),!0)}},bind:{close:function(){"click"==g.on&&g.closable&&(c.verbose("Binding popup close event to document"),h.on("click"+t,function(b){c.verbose("Pop-up clickaway intent detected"),a.proxy(c.hideGracefully,this)(b)}))}},unbind:{close:function(){"click"==g.on&&g.closable&&(c.verbose("Removing close event from document"),h.off("click"+t))}},is:{animating:function(){return A.is(":animated")||A.hasClass(p.animating)},visible:function(){return A.is(":visible")},hidden:function(){return!c.is.visible()}},reset:function(){A.attr("style","").removeAttr("style"),g.preserve||c.remove()},setting:function(b,c){if(a.isPlainObject(b))a.extend(!0,g,b);else{if(c===d)return g[b];g[b]=c}},internal:function(b,e){if(a.isPlainObject(b))a.extend(!0,c,b);else{if(e===d)return c[b];c[b]=e}},debug:function(){g.debug&&(g.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,g.name+":"),c.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),c.verbose.apply(console,arguments)))},error:function(){c.error=Function.prototype.bind.call(console.error,console,g.name+":"),c.error.apply(console,arguments)},performance:{log:function(a){var b,d,e;g.performance&&(b=(new Date).getTime(),e=j||b,d=b-e,j=b,k.push({Element:C,Name:a[0],Arguments:[].slice.call(a,1)||"","Execution Time":d})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,100)},display:function(){var b=g.name+":",e=0;j=!1,clearTimeout(c.performance.timer),a.each(k,function(a,b){e+=b["Execution Time"]}),b+=" "+e+"ms",i&&(b+=" '"+i+"'"),(console.group!==d||console.table!==d)&&k.length>0&&(console.groupCollapsed(b),console.table?console.table(k):a.each(k,function(a,b){console.log(b.Name+": "+b["Execution Time"]+"ms")}),console.groupEnd()),k=[]}},invoke:function(b,c,e){var g,h,i,j=D;return c=c||n,e=C||e,"string"==typeof b&&j!==d&&(b=b.split(/[\. ]/),g=b.length-1,a.each(b,function(c,e){var f=c!=g?e+b[c+1].charAt(0).toUpperCase()+b[c+1].slice(1):b;if(a.isPlainObject(j[f])&&c!=g)j=j[f];else{if(j[f]!==d)return h=j[f],!1;if(!a.isPlainObject(j[e])||c==g)return j[e]!==d?(h=j[e],!1):!1;j=j[e]}})),a.isFunction(h)?i=h.apply(e,c):h!==d&&(i=h),a.isArray(f)?f.push(i):f!==d?f=[f,i]:i!==d&&(f=i),h}},m?(D===d&&c.initialize(),c.invoke(l)):(D!==d&&c.destroy(),c.initialize())}),f!==d?f:this},a.fn.popup.settings={name:"Popup",debug:!0,verbose:!0,performance:!0,namespace:"popup",onCreate:function(){},onShow:function(){},onHide:function(){},variation:"",content:!1,html:!1,title:!1,on:"hover",target:!1,closable:!0,context:"body",position:"top center",delay:150,inline:!1,preserve:!1,duration:250,easing:"easeOutQuint",transition:"scale",distanceAway:0,offset:0,maxSearchDepth:10,error:{content:"Your popup has no content specified",method:"The method you called is not defined.",recursion:"Popup attempted to reposition element to fit, but could not find an adequate position."},metadata:{content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{animating:"animating",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible"},selector:{popup:".ui.popup"},template:function(a){var b="";return typeof a!==d&&(typeof a.title!==d&&a.title&&(b+='<div class="header">'+a.title+'</div class="header">'),typeof a.content!==d&&a.content&&(b+='<div class="content">'+a.content+"</div>")),b}}}(jQuery,window,document);
/**
 * jQuery Validation Plugin 1.8.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&this.find("input, button").filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
    return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
    validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
    onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
    a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
    minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator");e="on"+e.type.replace(/^validate/,
    "");f.settings[e]&&f.settings[e].call(f,this[0])}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=this.settings.rules;
    c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",a).validateDelegate(":radio, :checkbox, select, option","click",a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",
    [this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=a=this.clean(a);this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,
    a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},
    objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==
        a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,
        this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.clean(a);if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=
        c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=
        this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+
        a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];
        this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);
        this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass().addClass(this.settings.errorClass);d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||
        "");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},
    idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},
    depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<
        0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},
    email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b=
{};a=c(a);for(var d in c.validator.methods){var e=a.attr(d);if(e)b[d]=e}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===
    false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&
    a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},
    methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=
        e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=
        e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||
        a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)},
        url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
        date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9-]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
            0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);
/**
 * Created with PyCharm.
 * User: kristaps
 * Date: 2/6/13
 * Time: 11:12 AM
 * To change this template use File | Settings | File Templates.
 if ($("#logo_upload").length) {
        $("#logo_upload").tooltip({
            box : {
                height  : 200,
                width   : 200
            },
            scale   : 'image',
            action : base_url + 'api/v1/me/images/',
            onUploadCompleted : function(resp){
                $("#logo").val(resp.id)
            }
        })
    }

 */

iu = {}
iu.log = function(msg){
    if(window.console){
        window.console.log(msg);
    }
}
iu.imageUploader = function(element, options){
    this._element = element;
    this._element.addClass('image_uploader')
    var default_options = {
        'action'    : '',
        'scale'     : null, //image/box,
        'postName'  : 'file',
        'box'       : {
            width   : '200',
            height  : '200',
            background_color : '#f8f8f8',
            border_color     : '#c6c6c6'
        },
        'getImageUrl' : function(resp){
            if (resp && resp.url !== 'undefined'){
                return resp.url
            }
        },
        onUploadCompleted: function(resp){
            iu.log("Upload Completed")
        }
    }
    this.options = $.extend(true, default_options,options);
    this.uid = iu.generate_id()
}
iu.generate_id = function(){
    return 'u'+Math.floor(Math.random()*99999)
}

iu.imageUploader.prototype = {
    init : function(){
        this.createIframe()
        this.createForm()
        this.formatBox()
        this.showBackground()
        this._element.bind("click",function(){
            iu.log("lala")
        })

    },
    /**
     * Creates hidden iframe
     */
    createIframe : function(){
        var _this = this;
        var iframe = $('<iframe id="'+this.uid+'"  name="'+this.uid+'"> </iframe>')
        iframe.css({"display" : "none"})
        this._element.append(iframe)
        iframe.unbind('load').bind('load',function(){
            _this.uploadCompleted(iframe)
        })
    },
    getIframeResponse: function(iframe){
        try{
            iframe = iframe[0]
            var content = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document
            var innerHTML = content.body.innerHTML;

            if (innerHTML && innerHTML.match(/^<pre/i)) {
                innerHTML = content.body.firstChild.firstChild.nodeValue;
            }
            response = $.parseJSON(innerHTML)
        }catch(e){
            response = {success : false, error : 'Server returned bad response'}
        }
        return response;
    },
    /**
     * Creates file upload form
     */
    createForm: function(){
        var _this = this;
        var form = $('<form ' +
            'name="UploadForm" ' +
            'method="POST" ' +
            'target="'+this.uid+'" '+
            'action="'+this.options.action+'" '+
            'enctype="multipart/form-data">' +
            '<input type="file" name="'+this.options.postName+'">'+
            '</form>');
        this._element.append(form);

        form.find('input[type="file"]').unbind('change').bind('change', function(){
            if($(this).val())
                _this.onImageChanged(form)
        })

    },
    formatBox: function(){
        this._element.css({
            "width"     : this.options.box.width,
            "height"    : this.options.box.height,
            "background-color"     : this.options.box.background_color,
            "border"     : '1px solid '+this.options.box.border_color
        })
        console.log(this.options)
    },
    /**
     * Is called when form image input changes
     */
    onImageChanged: function(form){
        iu.log("Image changed")
        this.hideBackground()
        this.showLoader()
        //submit form
        form.submit()
    },
    /**
     * Called when iframe content changes
     */
    uploadCompleted: function(iframe){
        iu.log("iframe changed")
        var response = this.getIframeResponse(iframe)
        url = this.options.getImageUrl(response)
        this.hideLoader()
        this.showUploadedImage(url)
        this.options.onUploadCompleted(response)
    },
    /**
     *
     */
    showUploadedImage: function(url){
        var _this = this;
        var image = $('<img class="uploaded_image" src="'+url+'" />')
        this._element.append(image)
        image.load(function(){
            console.log(image, "image load")
            var e = _this._element
            var i = image
            var iW = i.width()
            var iH = i.height()
            var eW = e.width()
            var eH = e.height()
            var ratio = 1

            if(iW > iH){
                if(iW >= eW){
                    var ratio = eW / iW
                }
            }else{
                if(iH >= eH){
                    var ratio = eH / iH
                }
            }

            if(_this.options.scale == 'image'){
                if(iH < iW){
                    if(eH <= eW){
                        var ratio = eH / iH
                    }
                }else{
                    if(iW >= eW){
                        var ratio = eW / iW
                    }
                }
            }

            image.css({
                'width' : image.width()*ratio
            })
            image.fadeIn()

            var iW = image.width()
            var iH = image.height()
            image.css({
                'left'  : (eW - iW) / 2,
                'top'  : (eH - iH) / 2
            })
            _this.showRemoveButton(image)
        })

    },
    showRemoveButton: function(image){
        var _this = this;
        var btn = $('<div class="close"></div>')
        this._element.append(btn)
        btn.bind('click',function(){
            image.fadeOut()
            image.remove()
            btn.remove()
            _this.showBackground();
        })
    },
    /**
     * Shows loader
     */
    showLoader: function(){
        this._element.find('.loader').remove()
        this._element.find('.background').remove()
        var loader = $('<div class="loader"></div>')
        this._element.append(loader)
        loader.css({
            "left":(this._element.width()-loader.width())/2,
            "top":(this._element.height()-loader.height())/2
        })
    },
    hideLoader: function(){
        this._element.find('.loader').fadeOut().remove()
    },
    showBackground : function(){
        var background = $('<div class="background"></div>')
        var bk_ratio = (this._element.width() * 48 / 150) / 48
        bk_ratio = bk_ratio > 2.5 ? 2.5 : bk_ratio
        this._element.append(background)
        background.css({
            "background-size" : "100% auto",
            "width"  : background.width() * bk_ratio,
            "height"  : background.height() * bk_ratio
        })
        background.css({
            "left":(this._element.width()-background.width())/2,
            "top":(this._element.height()-background.height())/2
        })
    },
    hideBackground : function(){

    }
};

(function( $ ){

    var methods = {
        init : function( options ) {

            var ui =  new iu.imageUploader(this,options)
            console.log(ui)
            ui.init()
            return ui
            console.log(this)
        },
        show : function( ) {
            // IS
        },
        hide : function( ) {
            // GOOD
        },
        update : function( content ) {
            // !!!
        }
    };

    $.fn.tooltip = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

    prod_edit_methods = {
        init : function( options ) {
            var ui =  new iu.imageUploader(this,options);
            ui.init = function(){
                this.createIframe();
                this.createForm();
            };
            ui.formatBox = function(){
                //Empty
            };
            ui.onImageChanged = function(form){
                this.showLoader();
                form.submit();
            };
            ui.uploadCompleted = function(iframe){
                var response = this.getIframeResponse(iframe);
                this.options.onUploadCompleted(response);
            };
            ui.showRemoveButton = function(){
                /* */
            };
            ui.showLoader = function(){
                this.options.onUploadProcess();
            };
            ui.init();
            return ui;
        },
        show : function( ) {
            // IS
        },
        hide : function( ) {
            // GOOD
        },
        update : function( content ) {
            // !!!
        }
    };
    $.fn.edit_prod_tooltip = function( method ) {
        // Method calling logic
        if ( prod_edit_methods[method] ) {
            return prod_edit_methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return prod_edit_methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };
})( jQuery );

$.fn.toJSON = function(options){

    options = $.extend({}, options);

    var self = this,
        json = {},
        push_counters = {},
        patterns = {
            "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
            "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
            "push": /^$/,
            "fixed": /^\d+$/,
            "named": /^[a-zA-Z0-9_]+$/
        };


    this.build = function(base, key, value){

        base[key] = value == "" ? value : (isNaN(value) ? value : Number(value));
        return base;
    };

    this.push_counter = function(key, i){
        if(push_counters[key] === undefined){
            push_counters[key] = 0;
        }
        if(i === undefined){
            return push_counters[key]++;
        }
        else if(i !== undefined && i > push_counters[key]){
            return push_counters[key] = ++i;
        }
    };

    $.each($(this).serializeArray(), function(){

        // skip invalid keys
        if(!patterns.validate.test(this.name)){
            return;
        }

        var k,
            keys = this.name.match(patterns.key),
            merge = this.value,
            reverse_key = this.name;

        while((k = keys.pop()) !== undefined){

            // adjust reverse_key
            reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

            // push
            if(k.match(patterns.push)){
                merge = self.build([], self.push_counter(reverse_key), merge);
            }

            // fixed
            else if(k.match(patterns.fixed)){
                self.push_counter(reverse_key, k);
                merge = self.build([], k, merge);
            }

            // named
            else if(k.match(patterns.named)){
                merge = self.build({}, k, merge);
            }
        }

        json = $.extend(true, json, merge);
    });

    return json;
};

/**
 * Created with PyCharm.
 * User: kristaps
 * Date: 9/27/12
 * Time: 2:06 PM
 * To change this template use File | Settings | File Templates.
 */
//     Backbone.js 0.9.2

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

    // Initial Setup
    // -------------

    // Save a reference to the global object (`window` in the browser, `global`
    // on the server).
    var root = this;

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create a local reference to slice/splice.
    var slice = Array.prototype.slice;
    var splice = Array.prototype.splice;

    // The top-level namespace. All public Backbone classes and modules will
    // be attached to this. Exported for both CommonJS and the browser.
    var Backbone;
    if (typeof exports !== 'undefined') {
        Backbone = exports;
    } else {
        Backbone = root.Backbone = {};
    }

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '0.9.2';

    // Require Underscore, if we're on the server, and it's not already present.
    var _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

    // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
    var $ = root.jQuery || root.Zepto || root.ender;

    // Set the JavaScript library that will be used for DOM manipulation and
    // Ajax calls (a.k.a. the `$` variable). By default Backbone will use: jQuery,
    // Zepto, or Ender; but the `setDomLibrary()` method lets you inject an
    // alternate JavaScript library (or a mock library for testing your views
    // outside of a browser).
    Backbone.setDomLibrary = function(lib) {
        $ = lib;
    };

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Backbone.Events
    // -----------------

    // Regular expression used to split event strings
    var eventSplitter = /\s+/;

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may bind with `on` or remove with `off` callback functions
    // to an event; trigger`-ing an event fires all callbacks in succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {

        // Bind one or more space separated events, `events`, to a `callback`
        // function. Passing `"all"` will bind the callback to all events fired.
        on: function(events, callback, context) {

            var calls, event, node, tail, list;
            if (!callback) return this;
            events = events.split(eventSplitter);
            calls = this._callbacks || (this._callbacks = {});

            // Create an immutable callback list, allowing traversal during
            // modification.  The tail is an empty object that will always be used
            // as the next node.
            while (event = events.shift()) {
                list = calls[event];
                node = list ? list.tail : {};
                node.next = tail = {};
                node.context = context;
                node.callback = callback;
                calls[event] = {tail: tail, next: list ? list.next : node};
            }

            return this;
        },

        // Remove one or many callbacks. If `context` is null, removes all callbacks
        // with that function. If `callback` is null, removes all callbacks for the
        // event. If `events` is null, removes all bound callbacks for all events.
        off: function(events, callback, context) {
            var event, calls, node, tail, cb, ctx;

            // No events, or removing *all* events.
            if (!(calls = this._callbacks)) return;
            if (!(events || callback || context)) {
                delete this._callbacks;
                return this;
            }

            // Loop through the listed events and contexts, splicing them out of the
            // linked list of callbacks if appropriate.
            events = events ? events.split(eventSplitter) : _.keys(calls);
            while (event = events.shift()) {
                node = calls[event];
                delete calls[event];
                if (!node || !(callback || context)) continue;
                // Create a new list, omitting the indicated callbacks.
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    cb = node.callback;
                    ctx = node.context;
                    if ((callback && cb !== callback) || (context && ctx !== context)) {
                        this.on(event, cb, ctx);
                    }
                }
            }

            return this;
        },

        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` is, apart from the event name
        // (unless you're listening on `"all"`, which will cause your callback to
        // receive the true name of the event as the first argument).
        trigger: function(events) {
            var event, node, calls, tail, args, all, rest;
            if (!(calls = this._callbacks)) return this;
            all = calls.all;
            events = events.split(eventSplitter);
            rest = slice.call(arguments, 1);

            // For each event, walk through the linked list of callbacks twice,
            // first to trigger the event, then to trigger any `"all"` callbacks.
            while (event = events.shift()) {
                if (node = calls[event]) {
                    tail = node.tail;
                    while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, rest);
                    }
                }
                if (node = all) {
                    tail = node.tail;
                    args = [event].concat(rest);
                    while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, args);
                    }
                }
            }

            return this;
        }

    };

    // Aliases for backwards compatibility.
    Events.bind   = Events.on;
    Events.unbind = Events.off;

    // Backbone.Model
    // --------------

    // Create a new model, with defined attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function(attributes, options) {
        var defaults;
        attributes || (attributes = {});
        if (options && options.parse) attributes = this.parse(attributes);
        if (defaults = getValue(this, 'defaults')) {
            attributes = _.extend({}, defaults, attributes);
        }
        if (options && options.collection) this.collection = options.collection;
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = _.uniqueId('c');
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this.set(attributes, {silent: true});
        // Reset change tracking.
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = _.clone(this.attributes);
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed: null,

        // A hash of attributes that have silently changed since the last time
        // `change` was called.  Will become pending attributes on the next call.
        _silent: null,

        // A hash of attributes that have changed since the last `'change'` event
        // began.
        _pending: null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute: 'id',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // Return a copy of the model's `attributes` object.
        toJSON: function(options) {
            return _.clone(this.attributes);
        },

        // Get the value of an attribute.
        get: function(attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape: function(attr) {
            var html;
            if (html = this._escapedAttributes[attr]) return html;
            var val = this.get(attr);
            return this._escapedAttributes[attr] = _.escape(val == null ? '' : '' + val);
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function(attr) {
            return this.get(attr) != null;
        },

        // Set a hash of model attributes on the object, firing `"change"` unless
        // you choose to silence it.
        set: function(key, value, options) {
            var attrs, attr, val;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (_.isObject(key) || key == null) {
                attrs = key;
                options = value;
            } else {
                attrs = {};
                attrs[key] = value;
            }

            // Extract attributes and options.
            options || (options = {});
            if (!attrs) return this;
            if (attrs instanceof Model) attrs = attrs.attributes;
            if (options.unset) for (attr in attrs) attrs[attr] = void 0;

            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            var changes = options.changes = {};
            var now = this.attributes;
            var escaped = this._escapedAttributes;
            var prev = this._previousAttributes || {};

            // For each `set` attribute...
            for (attr in attrs) {
                val = attrs[attr];

                // If the new and current value differ, record the change.
                if (!_.isEqual(now[attr], val) || (options.unset && _.has(now, attr))) {
                    delete escaped[attr];
                    (options.silent ? this._silent : changes)[attr] = true;
                }

                // Update or delete the current value.
                options.unset ? delete now[attr] : now[attr] = val;

                // If the new and previous value differ, record the change.  If not,
                // then remove changes for this attribute.
                if (!_.isEqual(prev[attr], val) || (_.has(now, attr) != _.has(prev, attr))) {
                    this.changed[attr] = val;
                    if (!options.silent) this._pending[attr] = true;
                } else {
                    delete this.changed[attr];
                    delete this._pending[attr];
                }
            }

            // Fire the `"change"` events.
            if (!options.silent) this.change(options);
            return this;
        },

        // Remove an attribute from the model, firing `"change"` unless you choose
        // to silence it. `unset` is a noop if the attribute doesn't exist.
        unset: function(attr, options) {
            (options || (options = {})).unset = true;
            return this.set(attr, null, options);
        },

        // Clear all attributes on the model, firing `"change"` unless you choose
        // to silence it.
        clear: function(options) {
            (options || (options = {})).unset = true;
            return this.set(_.clone(this.attributes), options);
        },

        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overriden,
        // triggering a `"change"` event.
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                if (!model.set(model.parse(resp, xhr), options)) return false;
                if (success) success(model, resp);
            };
            options.error = Backbone.wrapError(options.error, model, options);
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function(key, value, options) {
            var attrs, current;

            // Handle both `("key", value)` and `({key: value})` -style calls.
            if (_.isObject(key) || key == null) {
                attrs = key;
                options = value;
            } else {
                attrs = {};
                attrs[key] = value;
            }
            options = options ? _.clone(options) : {};

            // If we're "wait"-ing to set changed attributes, validate early.
            if (options.wait) {
                if (!this._validate(attrs, options)) return false;
                current = _.clone(this.attributes);
            }

            // Regular saves `set` attributes before persisting to the server.
            var silentOptions = _.extend({}, options, {silent: true});
            if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
                return false;
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                var serverAttrs = model.parse(resp, xhr);
                if (options.wait) {
                    delete options.wait;
                    serverAttrs = _.extend(attrs || {}, serverAttrs);
                }
                if (!model.set(serverAttrs, options)) return false;
                if (success) {
                    success(model, resp);
                } else {
                    model.trigger('sync', model, resp, options);
                }
            };

            // Finish configuring and sending the Ajax request.
            options.error = Backbone.wrapError(options.error, model, options);
            var method = this.isNew() ? 'create' : 'update';
            var xhr = (this.sync || Backbone.sync).call(this, method, this, options);
            if (options.wait) this.set(current, silentOptions);
            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;

            var triggerDestroy = function() {
                model.trigger('destroy', model, model.collection, options);
            };

            if (this.isNew()) {
                triggerDestroy();
                return false;
            }

            options.success = function(resp) {
                if (options.wait) triggerDestroy();
                if (success) {
                    success(model, resp);
                } else {
                    model.trigger('sync', model, resp, options);
                }
            };

            options.error = Backbone.wrapError(options.error, model, options);
            var xhr = (this.sync || Backbone.sync).call(this, 'delete', this, options);
            if (!options.wait) triggerDestroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function() {
            var base = getValue(this, 'urlRoot') || getValue(this.collection, 'url') || urlError();
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id) + '/';
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function(resp, xhr) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone: function() {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function() {
            return this.id == null;
        },

        // Call this method to manually fire a `"change"` event for this model and
        // a `"change:attribute"` event for each changed attribute.
        // Calling this will cause all objects observing the model to update.
        change: function(options) {
            options || (options = {});
            var changing = this._changing;
            this._changing = true;

            // Silent changes become pending changes.
            for (var attr in this._silent) this._pending[attr] = true;

            // Silent changes are triggered.
            var changes = _.extend({}, options.changes, this._silent);
            this._silent = {};
            for (var attr in changes) {
                this.trigger('change:' + attr, this, this.get(attr), options);
            }
            if (changing) return this;

            // Continue firing `"change"` events while there are pending changes.
            while (!_.isEmpty(this._pending)) {
                this._pending = {};
                this.trigger('change', this, options);
                // Pending and silent changes still remain.
                for (var attr in this.changed) {
                    if (this._pending[attr] || this._silent[attr]) continue;
                    delete this.changed[attr];
                }
                this._previousAttributes = _.clone(this.attributes);
            }

            this._changing = false;
            return this;
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function(attr) {
            if (!arguments.length) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function(diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false, old = this._previousAttributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], (val = diff[attr]))) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function(attr) {
            if (!arguments.length || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
            return _.clone(this._previousAttributes);
        },

        // Check if the model is currently in a valid state. It's only possible to
        // get into an *invalid* state if you're using silent changes.
        isValid: function() {
            return !this.validate(this.attributes);
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. If a specific `error` callback has
        // been passed, call that instead of firing the general `"error"` event.
        _validate: function(attrs, options) {
            if (options.silent || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validate(attrs, options);
            if (!error) return true;
            if (options && options.error) {
                options.error(this, error, options);
            } else {
                this.trigger('error', this, error, options);
            }
            return false;
        }

    });

    // Backbone.Collection
    // -------------------

    // Provides a standard collection class for our sets of models, ordered
    // or unordered. If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, {silent: true, parse: options.parse});
    };

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function(options) {
            return this.map(function(model){ return model.toJSON(options); });
        },

        // Add a model, or list of models to the set. Pass **silent** to avoid
        // firing the `add` event for every new model.
        add: function(models, options) {
            var i, index, length, model, cid, id, cids = {}, ids = {}, dups = [];
            options || (options = {});
            models = _.isArray(models) ? models.slice() : [models];

            // Begin by turning bare objects into model references, and preventing
            // invalid models or duplicate models from being added.
            for (i = 0, length = models.length; i < length; i++) {
                if (!(model = models[i] = this._prepareModel(models[i], options))) {
                    throw new Error("Can't add an invalid model to a collection");
                }
                cid = model.cid;
                id = model.id;
                if (cids[cid] || this._byCid[cid] || ((id != null) && (ids[id] || this._byId[id]))) {
                    dups.push(i);
                    continue;
                }
                cids[cid] = ids[id] = model;
            }

            // Remove duplicates.
            i = dups.length;
            while (i--) {
                models.splice(dups[i], 1);
            }

            // Listen to added models' events, and index models for lookup by
            // `id` and by `cid`.
            for (i = 0, length = models.length; i < length; i++) {
                (model = models[i]).on('all', this._onModelEvent, this);
                this._byCid[model.cid] = model;
                if (model.id != null) this._byId[model.id] = model;
            }

            // Insert models into the collection, re-sorting if needed, and triggering
            // `add` events unless silenced.
            this.length += length;
            index = options.at != null ? options.at : this.models.length;
            splice.apply(this.models, [index, 0].concat(models));
            if (this.comparator) this.sort({silent: true});
            if (options.silent) return this;
            for (i = 0, length = this.models.length; i < length; i++) {
                if (!cids[(model = this.models[i]).cid]) continue;
                options.index = i;
                model.trigger('add', model, this, options);
            }
            return this;
        },

        // Remove a model, or a list of models from the set. Pass silent to avoid
        // firing the `remove` event for every model removed.
        remove: function(models, options) {
            var i, l, index, model;
            options || (options = {});
            models = _.isArray(models) ? models.slice() : [models];
            for (i = 0, l = models.length; i < l; i++) {
                model = this.getByCid(models[i]) || this.get(models[i]);
                if (!model) continue;
                delete this._byId[model.id];
                delete this._byCid[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model);
            }
            return this;
        },

        // Add a model to the end of the collection.
        push: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, options);
            return model;
        },

        // Remove a model from the end of the collection.
        pop: function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },

        // Add a model to the beginning of the collection.
        unshift: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, _.extend({at: 0}, options));
            return model;
        },

        // Remove a model from the beginning of the collection.
        shift: function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },

        // Get a model from the set by id.
        get: function(id) {
            if (id == null) return void 0;
            return this._byId[id.id != null ? id.id : id];
        },

        // Get a model from the set by client id.
        getByCid: function(cid) {
            return cid && this._byCid[cid.cid || cid];
        },

        // Get the model at the given index.
        at: function(index) {
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of `filter`.
        where: function(attrs) {
            if (_.isEmpty(attrs)) return [];
            return this.filter(function(model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key)) return false;
                }
                return true;
            });
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function(options) {
            options || (options = {});
            if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
            var boundComparator = _.bind(this.comparator, this);
            if (this.comparator.length == 1) {
                this.models = this.sortBy(boundComparator);
            } else {
                this.models.sort(boundComparator);
            }
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck: function(attr) {
            return _.map(this.models, function(model){ return model.get(attr); });
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any `add` or `remove` events. Fires `reset` when finished.
        reset: function(models, options) {
            models  || (models = []);
            options || (options = {});
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i]);
            }
            this._reset();
            this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `add: true` is passed, appends the
        // models to the collection instead of resetting.
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === undefined) options.parse = true;
            var collection = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
                if (success) success(collection, resp);
            };
            options.error = Backbone.wrapError(options.error, collection, options);
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function(model, options) {
            var coll = this;
            options = options ? _.clone(options) : {};
            model = this._prepareModel(model, options);
            if (!model) return false;
            if (!options.wait) coll.add(model, options);
            var success = options.success;
            options.success = function(nextModel, resp, xhr) {
                if (options.wait) coll.add(nextModel, options);
                if (success) {
                    success(nextModel, resp);
                } else {
                    nextModel.trigger('sync', model, resp, options);
                }
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function(resp, xhr) {
            return resp;
        },

        // Proxy to _'s chain. Can't be proxied the same way the rest of the
        // underscore methods are proxied because it relies on the underscore
        // constructor.
        chain: function () {
            return _(this.models).chain();
        },

        // Reset all internal state. Called when the collection is reset.
        _reset: function(options) {
            this.length = 0;
            this.models = [];
            this._byId  = {};
            this._byCid = {};
        },

        // Prepare a model or hash of attributes to be added to this collection.
        _prepareModel: function(model, options) {
            options || (options = {});
            if (!(model instanceof Model)) {
                var attrs = model;
                options.collection = this;
                model = new this.model(attrs, options);
                if (!model._validate(model.attributes, options)) model = false;
            } else if (!model.collection) {
                model.collection = this;
            }
            return model;
        },

        // Internal method to remove a model's ties to a collection.
        _removeReference: function(model) {
            if (this == model.collection) {
                delete model.collection;
            }
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function(event, model, collection, options) {
            if ((event == 'add' || event == 'remove') && collection != this) return;
            if (event == 'destroy') {
                this.remove(model, options);
            }
            if (model && event === 'change:' + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
        'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
        'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
        'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
        'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
        };
    });

    // Backbone.Router
    // -------------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var namedParam    = /:\w+/g;
    var splatParam    = /\*\w+/g;
    var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route: function(route, name, callback) {
            Backbone.history || (Backbone.history = new History);
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (!callback) callback = this[name];
            Backbone.history.route(route, _.bind(function(fragment) {
                var args = this._extractParameters(route, fragment);
                callback && callback.apply(this, args);
                this.trigger.apply(this, ['route:' + name].concat(args));
                Backbone.history.trigger('route', this, name, args);
            }, this));
            return this;
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes: function() {
            if (!this.routes) return;
            var routes = [];
            for (var route in this.routes) {
                routes.unshift([route, this.routes[route]]);
            }
            for (var i = 0, l = routes.length; i < l; i++) {
                this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(namedParam, '([^\/]+)')
                .replace(splatParam, '(.*?)');
            return new RegExp('^' + route + '$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted parameters.
        _extractParameters: function(route, fragment) {
            return route.exec(fragment).slice(1);
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on URL fragments. If the
    // browser does not support `onhashchange`, falls back to polling.
    var History = Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');
    };

    // Cached regex for cleaning leading hashes and slashes .
    var routeStripper = /^[#\/]/;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash: function(windowOverride) {
            var loc = windowOverride ? windowOverride.location : window.location;
            var match = loc.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the cross-browser normalized URL fragment, either from the URL,
        // the hash, or the override.
        getFragment: function(fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || forcePushState) {
                    fragment = window.location.pathname;
                    var search = window.location.search;
                    if (search) fragment += search;
                } else {
                    fragment = this.getHash();
                }
            }
            if (!fragment.indexOf(this.options.root)) fragment = fragment.substr(this.options.root.length);
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start: function(options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options          = _.extend({}, {root: '/'}, this.options, options);
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState  = !!this.options.pushState;
            this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
            var fragment          = this.getFragment();
            var docMode           = document.documentMode;
            var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

            if (oldIE) {
                this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._hasPushState) {
                $(window).bind('popstate', this.checkUrl);
            } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
                $(window).bind('hashchange', this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            // Determine if we need to change the base url, for a pushState link
            // opened by a non-pushState browser.
            this.fragment = fragment;
            var loc = window.location;
            var atRoot  = loc.pathname == this.options.root;

            // If we've started off with a route from a `pushState`-enabled browser,
            // but we're currently in a browser that doesn't support it...
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
                this.fragment = this.getFragment(null, true);
                window.location.replace(this.options.root + '#' + this.fragment);
                // Return immediately as browser will do redirect to new url
                return true;

                // Or if we've started out with a hash-based route, but we're currently
                // in a browser where it could be `pushState`-based instead...
            } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                this.fragment = this.getHash().replace(routeStripper, '');
                window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
            }

            if (!this.options.silent) {
                return this.loadUrl();
            }
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop: function() {
            $(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
            clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route: function(route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl: function(e) {
            var current = this.getFragment();
            if (current == this.fragment && this.iframe) current = this.getFragment(this.getHash(this.iframe));
            if (current == this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl() || this.loadUrl(this.getHash());
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl: function(fragmentOverride) {
            var fragment = this.fragment = this.getFragment(fragmentOverride);
            var matched = _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
            return matched;
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate: function(fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {trigger: options};
            var frag = (fragment || '').replace(routeStripper, '');
            if (this.fragment == frag) return;

            // If pushState is available, we use it to set the fragment as a real URL.
            if (this._hasPushState) {
                if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
                this.fragment = frag;
                window.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, frag);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if (this._wantsHashChange) {
                this.fragment = frag;
                this._updateHash(window.location, frag, options.replace);
                if (this.iframe && (frag != this.getFragment(this.getHash(this.iframe)))) {
                    // Opening and closing the iframe tricks IE7 and earlier to push a history entry on hash-tag change.
                    // When replace is true, we don't want this.
                    if(!options.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, frag, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                window.location.assign(this.options.root + fragment);
            }
            if (options.trigger) this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                location.replace(location.toString().replace(/(javascript:|#).*$/, '') + '#' + fragment);
            } else {
                location.hash = fragment;
            }
        }
    });

    // Backbone.View
    // -------------

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId('view');
        this._configure(options || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be prefered to global lookups where possible.
        $: function(selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function() {
            return this;
        },

        // Remove this view from the DOM. Note that the view isn't present in the
        // DOM by default, so calling this method may be a no-op.
        remove: function() {
            this.$el.remove();
            return this;
        },

        // For small amounts of DOM Elements, where a full-blown template isn't
        // needed, use **make** to manufacture elements, one at a time.
        //
        //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
        //
        make: function(tagName, attributes, content) {
            var el = document.createElement(tagName);
            if (attributes) $(el).attr(attributes);
            if (content) $(el).html(content);
            return el;
        },

        // Change the view's element (`this.el` property), including event
        // re-delegation.
        setElement: function(element, delegate) {
            if (this.$el) this.undelegateEvents();
            this.$el = (element instanceof $) ? element : $(element);
            this.el = this.$el[0];
            if (delegate !== false) this.delegateEvents();
            return this;
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save'
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        delegateEvents: function(events) {
            if (!(events || (events = getValue(this, 'events')))) return;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) throw new Error('Method "' + events[key] + '" does not exist');
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if (selector === '') {
                    this.$el.bind(eventName, method);
                } else {
                    this.$el.delegate(selector, eventName, method);
                }
            }
        },

        // Clears all callbacks previously bound to the view with `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function() {
            this.$el.unbind('.delegateEvents' + this.cid);
        },

        // Performs the initial configuration of a View with a set of options.
        // Keys with special meaning *(model, collection, id, className)*, are
        // attached directly to the view.
        _configure: function(options) {
            if (this.options) options = _.extend({}, this.options, options);
            for (var i = 0, l = viewOptions.length; i < l; i++) {
                var attr = viewOptions[i];
                if (options[attr]) this[attr] = options[attr];
            }
            this.options = options;
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function() {
            if (!this.el) {
                var attrs = getValue(this, 'attributes') || {};
                if (this.id) attrs.id = this.id;
                if (this.className) attrs['class'] = this.className;
                this.setElement(this.make(this.tagName, attrs), false);
            } else {
                this.setElement(this.el, false);
            }
        }

    });

    // The self-propagating extend function that Backbone classes use.
    var extend = function (protoProps, classProps) {
        var child = inherits(this, protoProps, classProps);
        child.extend = this.extend;
        return child;
    };

    // Set up inheritance for the model, collection, and view.
    Model.extend = Collection.extend = Router.extend = View.extend = extend;

    // Backbone.sync
    // -------------

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'delete': 'DELETE',
        'read':   'GET'
    };

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        options || (options = {});

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if (!options.url) {
            params.url = getValue(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (!options.data && model && (method == 'create' || method == 'update')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(model.toJSON());
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (Backbone.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (Backbone.emulateHTTP) {
            if (type === 'PUT' || type === 'DELETE') {
                if (Backbone.emulateJSON) params.data._method = type;
                params.type = 'POST';
                params.beforeSend = function(xhr) {
                    xhr.setRequestHeader('X-HTTP-Method-Override', type);
                };
            }
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !Backbone.emulateJSON) {
            params.processData = false;
        }

        // Make the request, allowing the user to override any Ajax options.
        return $.ajax(_.extend(params, options));
    };

    // Wrap an optional error callback with a fallback error event.
    Backbone.wrapError = function(onError, originalModel, options) {
        return function(model, resp) {
            resp = model === originalModel ? resp : model;
            if (onError) {
                onError(originalModel, resp, options);
            } else {
                originalModel.trigger('error', originalModel, resp, options);
            }
        };
    };

    // Helpers
    // -------

    // Shared empty constructor function to aid in prototype-chain creation.
    var ctor = function(){};

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var inherits = function(parent, protoProps, staticProps) {
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ parent.apply(this, arguments); };
        }

        // Inherit class (static) properties from parent.
        _.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Add static properties to the constructor function, if supplied.
        if (staticProps) _.extend(child, staticProps);

        // Correctly set child's `prototype.constructor`.
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is needed later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Helper function to get a value from a Backbone object as a property
    // or as a function.
    var getValue = function(object, prop) {
        if (!(object && object[prop])) return null;
        return _.isFunction(object[prop]) ? object[prop]() : object[prop];
    };

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };

}).call(this);
/*! backbone.paginator - v0.1.54 - 8/18/2012
 * http://github.com/addyosmani/backbone.paginator
 * Copyright (c) 2012 Addy Osmani; Licensed MIT */

Backbone.Paginator = (function ( Backbone, _, $ ) {
    "use strict";

    var Paginator = {};
    Paginator.version = "0.15";

    // @name: clientPager
    //
    // @tagline: Paginator for client-side data
    //
    // @description:
    // This paginator is responsible for providing pagination
    // and sort capabilities for a single payload of data
    // we wish to paginate by the UI for easier browsering.
    //
    Paginator.clientPager = Backbone.Collection.extend({

        // Default values used when sorting and/or filtering.
        initialize: function(){
            this.useDiacriticsPlugin = true; // use diacritics plugin if available
            this.useLevenshteinPlugin = true; // use levenshtein plugin if available

            this.sortColumn = "";
            this.sortDirection = "desc";
            this.lastSortColumn = "";

            this.fieldFilterRules = [];
            this.lastFieldFilterRules = [];

            this.filterFields = "";
            this.filterExpression = "";
            this.lastFilterExpression = "";
        },

        sync: function ( method, model, options ) {

            var self = this;

            // Create default values if no others are specified
            _.defaults(self.paginator_ui, {
                firstPage: 0,
                currentPage: 1,
                perPage: 5,
                totalPages: 10
            });

            // Change scope of 'paginator_ui' object values
            _.each(self.paginator_ui, function(value, key) {
                if( _.isUndefined(self[key]) ) {
                    self[key] = self.paginator_ui[key];
                }
            });

            // Some values could be functions, let's make sure
            // to change their scope too and run them
            var queryAttributes = {};
            _.each(self.server_api, function(value, key){
                if( _.isFunction(value) ) {
                    value = _.bind(value, self);
                    value = value();
                }
                queryAttributes[key] = value;
            });

            var queryOptions = _.clone(self.paginator_core);
            _.each(queryOptions, function(value, key){
                if( _.isFunction(value) ) {
                    value = _.bind(value, self);
                    value = value();
                }
                queryOptions[key] = value;
            });

            // Create default values if no others are specified
            queryOptions = _.defaults(queryOptions, {
                timeout: 25000,
                cache: false,
                type: 'GET',
                dataType: 'jsonp'
            });

            queryOptions = _.extend(queryOptions, {
                jsonpCallback: 'callback',
                data: decodeURIComponent($.param(queryAttributes)),
                processData: false,
                url: _.result(queryOptions, 'url')
            }, options);

            return $.ajax( queryOptions );

        },

        nextPage: function () {
            this.currentPage = ++this.currentPage;
            this.pager();
        },

        previousPage: function () {
            this.currentPage = --this.currentPage || 1;
            this.pager();
        },

        goTo: function ( page ) {
            if(page !== undefined){
                this.currentPage = parseInt(page, 10);
                this.pager();
            }
        },

        howManyPer: function ( perPage ) {
            if(perPage !== undefined){
                var lastPerPage = this.perPage;
                this.perPage = parseInt(perPage, 10);
                this.currentPage = Math.ceil( ( lastPerPage * ( this.currentPage - 1 ) + 1 ) / perPage);
                this.pager();
            }
        },


        // setSort is used to sort the current model. After
        // passing 'column', which is the model's field you want
        // to filter and 'direction', which is the direction
        // desired for the ordering ('asc' or 'desc'), pager()
        // and info() will be called automatically.
        setSort: function ( column, direction ) {
            if(column !== undefined && direction !== undefined){
                this.lastSortColumn = this.sortColumn;
                this.sortColumn = column;
                this.sortDirection = direction;
                this.pager();
                this.info();
            }
        },

        // setFieldFilter is used to filter each value of each model
        // according to `rules` that you pass as argument.
        // Example: You have a collection of books with 'release year' and 'author'.
        // You can filter only the books that were released between 1999 and 2003
        // And then you can add another `rule` that will filter those books only to
        // authors who's name start with 'A'.
        setFieldFilter: function ( fieldFilterRules ) {
            if( !_.isEmpty( fieldFilterRules ) ) {
                this.lastFieldFilterRules = this.fieldFilterRules;
                this.fieldFilterRules = fieldFilterRules;
                this.pager();
                this.info();
            }
        },

        // doFakeFieldFilter can be used to get the number of models that will remain
        // after calling setFieldFilter with a filter rule(s)
        doFakeFieldFilter: function ( fieldFilterRules ) {
            if( !_.isEmpty( fieldFilterRules ) ) {
                var bkp_lastFieldFilterRules = this.lastFieldFilterRules;
                var bkp_fieldFilterRules = this.fieldFilterRules;

                this.lastFieldFilterRules = this.fieldFilterRules;
                this.fieldFilterRules = fieldFilterRules;
                this.pager();
                this.info();

                var cmodels = this.models.length;

                this.lastFieldFilterRules = bkp_lastFieldFilterRules;
                this.fieldFilterRules = bkp_fieldFilterRules;
                this.pager();
                this.info();

                // Return size
                return cmodels;
            }
        },

        // setFilter is used to filter the current model. After
        // passing 'fields', which can be a string referring to
        // the model's field, an array of strings representing
        // each of the model's fields or an object with the name
        // of the model's field(s) and comparing options (see docs)
        // you wish to filter by and
        // 'filter', which is the word or words you wish to
        // filter by, pager() and info() will be called automatically.
        setFilter: function ( fields, filter ) {
            if( fields !== undefined && filter !== undefined ){
                this.filterFields = fields;
                this.lastFilterExpression = this.filterExpression;
                this.filterExpression = filter;
                this.pager();
                this.info();
            }
        },

        // doFakeFilter can be used to get the number of models that will
        // remain after calling setFilter with a `fields` and `filter` args.
        doFakeFilter: function ( fields, filter ) {
            if( fields !== undefined && filter !== undefined ){
                var bkp_filterFields = this.filterFields;
                var bkp_lastFilterExpression = this.lastFilterExpression;
                var bkp_filterExpression = this.filterExpression;

                this.filterFields = fields;
                this.lastFilterExpression = this.filterExpression;
                this.filterExpression = filter;
                this.pager();
                this.info();

                var cmodels = this.models.length;

                this.filterFields = bkp_filterFields;
                this.lastFilterExpression = bkp_lastFilterExpression;
                this.filterExpression = bkp_filterExpression;
                this.pager();
                this.info();

                // Return size
                return cmodels;
            }
        },

        // pager is used to sort, filter and show the data
        // you expect the library to display.
        pager: function () {
            var self = this,
                disp = this.perPage,
                start = (self.currentPage - 1) * disp,
                stop = start + disp;

            // Saving the original models collection is important
            // as we could need to sort or filter, and we don't want
            // to loose the data we fetched from the server.
            if (self.origModels === undefined) {
                self.origModels = self.models;
            }

            self.models = self.origModels;

            // Check if sorting was set using setSort.
            if ( this.sortColumn !== "" ) {
                self.models = self._sort(self.models, this.sortColumn, this.sortDirection);
            }

            // Check if field-filtering was set using setFieldFilter
            if ( !_.isEmpty( this.fieldFilterRules ) ) {
                self.models = self._fieldFilter(self.models, this.fieldFilterRules);
            }

            // Check if filtering was set using setFilter.
            if ( this.filterExpression !== "" ) {
                self.models = self._filter(self.models, this.filterFields, this.filterExpression);
            }

            // If the sorting or the filtering was changed go to the first page
            if ( this.lastSortColumn !== this.sortColumn || this.lastFilterExpression !== this.filterExpression || !_.isEqual(this.fieldFilterRules, this.lastFieldFilterRules) ) {
                start = 0;
                stop = start + disp;
                self.currentPage = 1;

                this.lastSortColumn = this.sortColumn;
                this.lastFieldFilterRules = this.fieldFilterRules;
                this.lastFilterExpression = this.filterExpression;
            }

            // We need to save the sorted and filtered models collection
            // because we'll use that sorted and filtered collection in info().
            self.sortedAndFilteredModels = self.models;

            self.reset(self.models.slice(start, stop));
        },

        // The actual place where the collection is sorted.
        // Check setSort for arguments explicacion.
        _sort: function ( models, sort, direction ) {
            models = models.sort(function (a, b) {
                var ac = a.get(sort),
                    bc = b.get(sort);

                if ( !ac || !bc ) {
                    return 0;
                } else {
                    /* Make sure that both ac and bc are lowercase strings.
                     * .toString() first so we don't have to worry if ac or bc
                     * have other String-only methods.
                     */
                    ac = ac.toString().toLowerCase();
                    bc = bc.toString().toLowerCase();
                }

                if (direction === 'desc') {

                    // We need to know if there aren't any non-number characters
                    // and that there are numbers-only characters and maybe a dot
                    // if we have a float.
                    if((!ac.match(/[^\d\.]/) && ac.match(/[\d\.]*/)) &&
                        (!bc.match(/[^\d\.]/) && bc.match(/[\d\.]*/))
                        ){

                        if( (ac - 0) < (bc - 0) ) {
                            return 1;
                        }
                        if( (ac - 0) > (bc - 0) ) {
                            return -1;
                        }
                    } else {
                        if (ac < bc) {
                            return 1;
                        }
                        if (ac > bc) {
                            return -1;
                        }
                    }

                } else {

                    //Same as the regexp check in the 'if' part.
                    if((!ac.match(/[^\d\.]/) && ac.match(/[\d\.]*/)) &&
                        (!bc.match(/[^\d\.]/) && bc.match(/[\d\.]*/))
                        ){
                        if( (ac - 0) < (bc - 0) ) {
                            return -1;
                        }
                        if( (ac - 0) > (bc - 0) ) {
                            return 1;
                        }
                    } else {
                        if (ac < bc) {
                            return -1;
                        }
                        if (ac > bc) {
                            return 1;
                        }
                    }

                }

                return 0;
            });

            return models;
        },

        // The actual place where the collection is field-filtered.
        // Check setFieldFilter for arguments explicacion.
        _fieldFilter: function( models, rules ) {

            // Check if there are any rules
            if ( _.isEmpty(rules) ) {
                return models;
            }

            var filteredModels = [];

            // Iterate over each rule
            _.each(models, function(model){

                var should_push = true;

                // Apply each rule to each model in the collection
                _.each(rules, function(rule){

                    // Don't go inside the switch if we're already sure that the model won't be included in the results
                    if( !should_push ){
                        return false;
                    }

                    should_push = false;

                    // The field's value will be passed to a custom function, which should
                    // return true (if model should be included) or false (model should be ignored)
                    if(rule.type === "function"){
                        var f = _.wrap(rule.value, function(func){
                            return func( model.get(rule.field) );
                        });
                        if( f() ){
                            should_push = true;
                        }

                        // The field's value is required to be non-empty
                    }else if(rule.type === "required"){
                        if( !_.isEmpty( model.get(rule.field).toString() ) ) {
                            should_push = true;
                        }

                        // The field's value is required to be greater tan N (numbers only)
                    }else if(rule.type === "min"){
                        if( !_.isNaN( Number( model.get(rule.field) ) ) &&
                            !_.isNaN( Number( rule.value ) ) &&
                            Number( model.get(rule.field) ) >= Number( rule.value ) ) {
                            should_push = true;
                        }

                        // The field's value is required to be smaller tan N (numbers only)
                    }else if(rule.type === "max"){
                        if( !_.isNaN( Number( model.get(rule.field) ) ) &&
                            !_.isNaN( Number( rule.value ) ) &&
                            Number( model.get(rule.field) ) <= Number( rule.value ) ) {
                            should_push = true;
                        }

                        // The field's value is required to be between N and M (numbers only)
                    }else if(rule.type === "range"){
                        if( !_.isNaN( Number( model.get(rule.field) ) ) &&
                            _.isObject( rule.value ) &&
                            !_.isNaN( Number( rule.value.min ) ) &&
                            !_.isNaN( Number( rule.value.max ) ) &&
                            Number( model.get(rule.field) ) >= Number( rule.value.min ) &&
                            Number( model.get(rule.field) ) <= Number( rule.value.max ) ) {
                            should_push = true;
                        }

                        // The field's value is required to be more than N chars long
                    }else if(rule.type === "minLength"){
                        if( model.get(rule.field).toString().length >= rule.value ) {
                            should_push = true;
                        }

                        // The field's value is required to be no more than N chars long
                    }else if(rule.type === "maxLength"){
                        if( model.get(rule.field).toString().length <= rule.value ) {
                            should_push = true;
                        }

                        // The field's value is required to be more than N chars long and no more than M chars long
                    }else if(rule.type === "rangeLength"){
                        if( _.isObject( rule.value ) &&
                            !_.isNaN( Number( rule.value.min ) ) &&
                            !_.isNaN( Number( rule.value.max ) ) &&
                            model.get(rule.field).toString().length >= rule.value.min &&
                            model.get(rule.field).toString().length <= rule.value.max ) {
                            should_push = true;
                        }

                        // The field's value is required to be equal to one of the values in rules.value
                    }else if(rule.type === "oneOf"){
                        if( _.isArray( rule.value ) &&
                            _.include( rule.value, model.get(rule.field) ) ) {
                            should_push = true;
                        }

                        // The field's value is required to be equal to the value in rules.value
                    }else if(rule.type === "equalTo"){
                        if( rule.value === model.get(rule.field) ) {
                            should_push = true;
                        }

                        // The field's value is required to match the regular expression
                    }else if(rule.type === "pattern"){
                        if( model.get(rule.field).toString().match(rule.value) ) {
                            should_push = true;
                        }

                        //Unknown type
                    }else{
                        should_push = false;
                    }

                });

                if( should_push ){
                    filteredModels.push(model);
                }

            });

            return filteredModels;
        },

        // The actual place where the collection is filtered.
        // Check setFilter for arguments explicacion.
        _filter: function ( models, fields, filter ) {

            //  For example, if you had a data model containing cars like { color: '', description: '', hp: '' },
            //  your fields was set to ['color', 'description', 'hp'] and your filter was set
            //  to "Black Mustang 300", the word "Black" will match all the cars that have black color, then
            //  "Mustang" in the description and then the HP in the 'hp' field.
            //  NOTE: "Black Musta 300" will return the same as "Black Mustang 300"

            // We accept fields to be a string, an array or an object
            // but if string or array is passed we need to convert it
            // to an object.

            var self = this;

            var obj_fields = {};

            if( _.isString( fields ) ) {
                obj_fields[fields] = {cmp_method: 'regexp'};
            }else if( _.isArray( fields ) ) {
                _.each(fields, function(field){
                    obj_fields[field] = {cmp_method: 'regexp'};
                });
            }else{
                _.each(fields, function( cmp_opts, field ) {
                    obj_fields[field] = _.defaults(cmp_opts, { cmp_method: 'regexp' });
                });
            }

            fields = obj_fields;

            //Remove diacritic characters if diacritic plugin is loaded
            if( _.has(Backbone.Paginator, 'removeDiacritics') && self.useDiacriticsPlugin ){
                filter = Backbone.Paginator.removeDiacritics(filter);
            }

            // 'filter' can be only a string.
            // If 'filter' is string we need to convert it to
            // a regular expression.
            // For example, if 'filter' is 'black dog' we need
            // to find every single word, remove duplicated ones (if any)
            // and transform the result to '(black|dog)'
            if( filter === '' || !_.isString(filter) ) {
                return models;
            } else {
                var words = filter.match(/\w+/ig);
                var pattern = "(" + _.uniq(words).join("|") + ")";
                var regexp = new RegExp(pattern, "igm");
            }

            var filteredModels = [];

            // We need to iterate over each model
            _.each( models, function( model ) {

                var matchesPerModel = [];

                // and over each field of each model
                _.each( fields, function( cmp_opts, field ) {

                    var value = model.get( field );

                    if( value ) {

                        // The regular expression we created earlier let's us detect if a
                        // given string contains each and all of the words in the regular expression
                        // or not, but in both cases match() will return an array containing all
                        // the words it matched.
                        var matchesPerField = [];

                        if( _.has(Backbone.Paginator, 'removeDiacritics') && self.useDiacriticsPlugin ){
                            value = Backbone.Paginator.removeDiacritics(value.toString());
                        }else{
                            value = value.toString();
                        }

                        // Levenshtein cmp
                        if( cmp_opts.cmp_method === 'levenshtein' && _.has(Backbone.Paginator, 'levenshtein') && self.useLevenshteinPlugin ) {
                            var distance = Backbone.Paginator.levenshtein(value, filter);

                            _.defaults(cmp_opts, { max_distance: 0 });

                            if( distance <= cmp_opts.max_distance ) {
                                matchesPerField = _.uniq(words);
                            }

                            // Default (RegExp) cmp
                        }else{
                            matchesPerField = value.match( regexp );
                        }

                        matchesPerField = _.map(matchesPerField, function(match) {
                            return match.toString().toLowerCase();
                        });

                        _.each(matchesPerField, function(match){
                            matchesPerModel.push(match);
                        });

                    }

                });

                // We just need to check if the returned array contains all the words in our
                // regex, and if it does, it means that we have a match, so we should save it.
                matchesPerModel = _.uniq( _.without(matchesPerModel, "") );

                if(  _.isEmpty( _.difference(words, matchesPerModel) ) ) {
                    filteredModels.push(model);
                }

            });

            return filteredModels;
        },

        // You shouldn't need to call info() as this method is used to
        // calculate internal data as first/prev/next/last page...
        info: function () {
            var self = this,
                info = {},
                totalRecords = (self.sortedAndFilteredModels) ? self.sortedAndFilteredModels.length : self.length,
                totalPages = Math.ceil(totalRecords / self.perPage);
            //console.log(self)
            info = {
                totalUnfilteredRecords: self.models.length,
                totalRecords: totalRecords,
                currentPage: self.currentPage,
                perPage: this.perPage,
                totalPages: totalPages,
                lastPage: totalPages,
                previous: false,
                next: false,
                startRecord: totalRecords === 0 ? 0 : (self.currentPage - 1) * this.perPage + 1,
                endRecord: Math.min(totalRecords, self.currentPage * this.perPage)
            };

            if (self.currentPage > 1) {
                info.previous = self.currentPage - 1;
            }

            if (self.currentPage < info.totalPages) {
                info.next = self.currentPage + 1;
            }

            info.pageSet = self.setPagination(info);

            self.information = info;
            return info;
        },


        // setPagination also is an internal function that shouldn't be called directly.
        // It will create an array containing the pages right before and right after the
        // actual page.
        setPagination: function ( info ) {
            var pages = [], i = 0, l = 0;


            // How many adjacent pages should be shown on each side?
            var ADJACENT = 3,
                ADJACENTx2 = ADJACENT * 2,
                LASTPAGE = Math.ceil(info.totalRecords / info.perPage),
                LPM1 = -1;

            if (LASTPAGE > 1) {
                // not enough pages to bother breaking it up
                if (LASTPAGE < (7 + ADJACENTx2)) {
                    for (i = 1, l = LASTPAGE; i <= l; i++) {
                        pages.push(i);
                    }
                }
                // enough pages to hide some
                else if (LASTPAGE > (5 + ADJACENTx2)) {

                    //close to beginning; only hide later pages
                    if (info.currentPage < (1 + ADJACENTx2)) {
                        for (i = 1, l = 4 + ADJACENTx2; i < l; i++) {
                            pages.push(i);
                        }
                    }

                    // in middle; hide some front and some back
                    else if (LASTPAGE - ADJACENTx2 > info.currentPage && info.currentPage > ADJACENTx2) {
                        for (i = info.currentPage - ADJACENT; i <= info.currentPage + ADJACENT; i++) {
                            pages.push(i);
                        }
                    }
                    // close to end; only hide early pages
                    else {
                        for (i = LASTPAGE - (2 + ADJACENTx2); i <= LASTPAGE; i++) {
                            pages.push(i);
                        }
                    }
                }
            }

            return pages;
        }

    });


    // @name: requestPager
    //
    // Paginator for server-side data being requested from a backend/API
    //
    // @description:
    // This paginator is responsible for providing pagination
    // and sort capabilities for requests to a server-side
    // data service (e.g an API)
    //
    Paginator.requestPager = Backbone.Collection.extend({

        sync: function ( method, model, options ) {

            var self = this;

            // Create default values if no others are specified
            _.defaults(self.paginator_ui, {
                firstPage: 0,
                currentPage: 1,
                perPage: 5,
                totalPages: 10
            });

            // Change scope of 'paginator_ui' object values
            _.each(self.paginator_ui, function(value, key) {
                if( _.isUndefined(self[key]) ) {
                    self[key] = self.paginator_ui[key];
                }
            });

            // Some values could be functions, let's make sure
            // to change their scope too and run them
            var queryAttributes = {};
            _.each(self.server_api, function(value, key){
                if( _.isFunction(value) ) {
                    value = _.bind(value, self);
                    value = value();
                }
                queryAttributes[key] = value;
            });

            var queryOptions = _.clone(self.paginator_core);
            _.each(queryOptions, function(value, key){
                if( _.isFunction(value) ) {
                    value = _.bind(value, self);
                    value = value();
                }
                queryOptions[key] = value;
            });

            // Create default values if no others are specified
            queryOptions = _.defaults(queryOptions, {
                timeout: 25000,
                cache: false,
                type: 'GET',
                dataType: 'jsonp'
            });

            // Allows the passing in of {data: {foo: 'bar'}} at request time to overwrite server_api defaults
            if( options.data ){
                options.data = decodeURIComponent($.param(_.extend(queryAttributes,options.data)));
            }else{
                options.data = decodeURIComponent($.param(queryAttributes));
            }

            queryOptions = _.extend(queryOptions, {
                jsonpCallback: 'callback',
                processData: false,
                url: _.result(queryOptions, 'url')
            }, options);

            return $.ajax( queryOptions );

        },

        requestNextPage: function ( options ) {
            if ( this.currentPage !== undefined ) {
                this.currentPage += 1;
                return this.pager( options );
            } else {
                var response = new $.Deferred();
                response.reject();
                return response.promise();
            }
        },

        requestPreviousPage: function ( options ) {
            if ( this.currentPage !== undefined ) {
                this.currentPage -= 1;
                return this.pager( options );
            } else {
                var response = new $.Deferred();
                response.reject();
                return response.promise();
            }
        },

        updateOrder: function ( column ) {
            if (column !== undefined) {
                this.sortField = column;
                this.pager();
            }

        },

        goTo: function ( page, options ) {
            if ( page !== undefined ) {
                this.currentPage = parseInt(page, 10);
                return this.pager( options );
            } else {
                var response = new $.Deferred();
                response.reject();
                return response.promise();
            }
        },

        howManyPer: function ( count ) {
            if( count !== undefined ){
                this.currentPage = this.firstPage;
                this.perPage = count;
                this.pager();
            }
        },

        sort: function () {
            //assign to as needed.
        },

        info: function () {

            var info = {
                // If parse() method is implemented and totalRecords is set to the length
                // of the records returned, make it available. Else, default it to 0
                totalRecords: this.totalRecords || 0,

                currentPage: this.currentPage,
                firstPage: this.firstPage,
                totalPages: this.totalPages,
                lastPage: this.totalPages,
                perPage: this.perPage
            };
            info.pageSet = this.setPagination(info)
            this.information = info;

            return info;
        },

        setPagination: function ( info ) {
            var pages = [], i = 0, l = 0;


            // How many adjacent pages should be shown on each side?
            var ADJACENT = 3,
                ADJACENTx2 = ADJACENT * 2,
                LASTPAGE = info.totalPages,
                LPM1 = -1;

            if (LASTPAGE > 1) {
                // not enough pages to bother breaking it up
                if (LASTPAGE < (7 + ADJACENTx2)) {
                    for (i = 1, l = LASTPAGE; i <= l; i++) {
                        pages.push(i);
                    }
                }
                // enough pages to hide some
                else if (LASTPAGE > (5 + ADJACENTx2)) {

                    //close to beginning; only hide later pages
                    if (info.currentPage < (1 + ADJACENTx2)) {
                        for (i = 1, l = 4 + ADJACENTx2; i < l; i++) {
                            pages.push(i);
                        }
                    }

                    // in middle; hide some front and some back
                    else if (LASTPAGE - ADJACENTx2 > info.currentPage && info.currentPage > ADJACENTx2) {
                        for (i = info.currentPage - ADJACENT; i <= info.currentPage + ADJACENT; i++) {
                            pages.push(i);
                        }
                    }
                    // close to end; only hide early pages
                    else {
                        for (i = LASTPAGE - (2 + ADJACENTx2); i <= LASTPAGE; i++) {
                            pages.push(i);
                        }
                    }
                }
            }

            return pages;
        },

        // fetches the latest results from the server
        pager: function ( options ) {
            if ( !_.isObject(options) ) {
                options = {};
            }
            return this.fetch( options );
        }


    });

    return Paginator;

}( Backbone, _, jQuery ));
/*!
 * bean.js - copyright Jacob Thornton 2011
 * https://github.com/fat/bean
 * MIT License
 * special thanks to:
 * dean edwards: http://dean.edwards.name/
 * dperini: https://github.com/dperini/nwevents
 * the entire mootools team: github.com/mootools/mootools-core
 *//*global module:true, define:true*/
!function(a,b,c){typeof module!="undefined"?module.exports=c(a,b):typeof define=="function"&&typeof define.amd=="object"?define(c):b[a]=c(a,b)}("bean",this,function(a,b){var c=window,d=b[a],e=/over|out/,f=/[^\.]*(?=\..*)\.|.*/,g=/\..*/,h="addEventListener",i="attachEvent",j="removeEventListener",k="detachEvent",l=document||{},m=l.documentElement||{},n=m[h],o=n?h:i,p=Array.prototype.slice,q=/click|mouse|menu|drag|drop/i,r=/^touch|^gesture/i,s={one:1},t=function(a,b,c){for(c=0;c<b.length;c++)a[b[c]]=1;return a}({},("click dblclick mouseup mousedown contextmenu mousewheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange error abort scroll "+(n?"show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend message readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ":"")).split(" ")),u=function(){function a(a,b){while((b=b.parentNode)!==null)if(b===a)return!0;return!1}function b(b){var c=b.relatedTarget;return c?c!==this&&c.prefix!=="xul"&&!/document/.test(this.toString())&&!a(this,c):c===null}return{mouseenter:{base:"mouseover",condition:b},mouseleave:{base:"mouseout",condition:b},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),v=function(){var a="altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which".split(" "),b=a.concat("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")),c=a.concat("char charCode key keyCode".split(" ")),d=a.concat("touches targetTouches changedTouches scale rotation".split(" ")),f="preventDefault",g=function(a){return function(){a[f]?a[f]():a.returnValue=!1}},h="stopPropagation",i=function(a){return function(){a[h]?a[h]():a.cancelBubble=!0}},j=function(a){return function(){a[f](),a[h](),a.stopped=!0}},k=function(a,b,c){var d,e;for(d=c.length;d--;)e=c[d],!(e in b)&&e in a&&(b[e]=a[e])};return function(n,o){var p={originalEvent:n,isNative:o};if(!n)return p;var s,t=n.type,u=n.target||n.srcElement;p[f]=g(n),p[h]=i(n),p.stop=j(p),p.target=u&&u.nodeType===3?u.parentNode:u;if(o){if(t.indexOf("key")!==-1)s=c,p.keyCode=n.which||n.keyCode;else if(q.test(t)){s=b,p.rightClick=n.which===3||n.button===2,p.pos={x:0,y:0};if(n.pageX||n.pageY)p.clientX=n.pageX,p.clientY=n.pageY;else if(n.clientX||n.clientY)p.clientX=n.clientX+l.body.scrollLeft+m.scrollLeft,p.clientY=n.clientY+l.body.scrollTop+m.scrollTop;e.test(t)&&(p.relatedTarget=n.relatedTarget||n[(t==="mouseover"?"from":"to")+"Element"])}else r.test(t)&&(s=d);k(n,p,s||a)}return p}}(),w=function(a,b){return!n&&!b&&(a===l||a===c)?m:a},x=function(){function a(a,b,c,d,e){this.element=a,this.type=b,this.handler=c,this.original=d,this.namespaces=e,this.custom=u[b],this.isNative=t[b]&&a[o],this.eventType=n||this.isNative?b:"propertychange",this.customType=!n&&!this.isNative&&b,this.target=w(a,this.isNative),this.eventSupport=this.target[o]}return a.prototype={inNamespaces:function(a){var b,c;if(!a)return!0;if(!this.namespaces)return!1;for(b=a.length;b--;)for(c=this.namespaces.length;c--;)if(a[b]===this.namespaces[c])return!0;return!1},matches:function(a,b,c){return this.element===a&&(!b||this.original===b)&&(!c||this.handler===c)}},a}(),y=function(){var a={},b=function(c,d,e,f,g){if(!d||d==="*")for(var h in a)h.charAt(0)==="$"&&b(c,h.substr(1),e,f,g);else{var i=0,j,k=a["$"+d],l=c==="*";if(!k)return;for(j=k.length;i<j;i++)if(l||k[i].matches(c,e,f))if(!g(k[i],k,i,d))return}},c=function(b,c,d){var e,f=a["$"+c];if(f)for(e=f.length;e--;)if(f[e].matches(b,d,null))return!0;return!1},d=function(a,c,d){var e=[];return b(a,c,d,null,function(a){return e.push(a)}),e},e=function(b){return(a["$"+b.type]||(a["$"+b.type]=[])).push(b),b},f=function(c){b(c.element,c.type,null,c.handler,function(b,c,d){return c.splice(d,1),c.length===0&&delete a["$"+b.type],!1})},g=function(){var b,c=[];for(b in a)b.charAt(0)==="$"&&(c=c.concat(a[b]));return c};return{has:c,get:d,put:e,del:f,entries:g}}(),z=n?function(a,b,c,d){a[d?h:j](b,c,!1)}:function(a,b,c,d,e){e&&d&&a["_on"+e]===null&&(a["_on"+e]=0),a[d?i:k]("on"+b,c)},A=function(a,b,d){return function(e){return e=v(e||((this.ownerDocument||this.document||this).parentWindow||c).event,!0),b.apply(a,[e].concat(d))}},B=function(a,b,d,e,f,g){return function(h){if(e?e.apply(this,arguments):n?!0:h&&h.propertyName==="_on"+d||!h)h&&(h=v(h||((this.ownerDocument||this.document||this).parentWindow||c).event,g)),b.apply(a,h&&(!f||f.length===0)?arguments:p.call(arguments,h?0:1).concat(f))}},C=function(a,b,c,d,e){return function(){a(b,c,e),d.apply(this,arguments)}},D=function(a,b,c,d){var e,f,h,i=b&&b.replace(g,""),j=y.get(a,i,c);for(e=0,f=j.length;e<f;e++)j[e].inNamespaces(d)&&((h=j[e]).eventSupport&&z(h.target,h.eventType,h.handler,!1,h.type),y.del(h))},E=function(a,b,c,d,e){var h,i=b.replace(g,""),j=b.replace(f,"").split(".");if(y.has(a,i,c))return a;i==="unload"&&(c=C(D,a,i,c,d)),u[i]&&(u[i].condition&&(c=B(a,c,i,u[i].condition,!0)),i=u[i].base||i),h=y.put(new x(a,i,c,d,j[0]&&j)),h.handler=h.isNative?A(a,h.handler,e):B(a,h.handler,i,!1,e,!1),h.eventSupport&&z(h.target,h.eventType,h.handler,!0,h.customType)},F=function(a,b,c){return function(d){var e,f,g=typeof a=="string"?c(a,this):a;for(e=d.target;e&&e!==this;e=e.parentNode)for(f=g.length;f--;)if(g[f]===e)return b.apply(e,arguments)}},G=function(a,b,c){var d,e,h,i,j,k=D,l=b&&typeof b=="string";if(l&&b.indexOf(" ")>0){b=b.split(" ");for(j=b.length;j--;)G(a,b[j],c);return a}h=l&&b.replace(g,""),h&&u[h]&&(h=u[h].type);if(!b||l){if(i=l&&b.replace(f,""))i=i.split(".");k(a,h,c,i)}else if(typeof b=="function")k(a,null,b);else for(d in b)b.hasOwnProperty(d)&&G(a,d,b[d]);return a},H=function(a,b,c,d,e){var f,g,h,i,j=c,k=c&&typeof c=="string";if(b&&!c&&typeof b=="object")for(f in b)b.hasOwnProperty(f)&&H.apply(this,[a,f,b[f]]);else{i=arguments.length>3?p.call(arguments,3):[],g=(k?c:b).split(" "),k&&(c=F(b,j=d,e))&&(i=p.call(i,1)),this===s&&(c=C(G,a,b,c,j));for(h=g.length;h--;)E(a,g[h],c,j,i)}return a},I=function(){return H.apply(s,arguments)},J=n?function(a,b,d){var e=l.createEvent(a?"HTMLEvents":"UIEvents");e[a?"initEvent":"initUIEvent"](b,!0,!0,c,1),d.dispatchEvent(e)}:function(a,b,c){c=w(c,a),a?c.fireEvent("on"+b,l.createEventObject()):c["_on"+b]++},K=function(a,b,c){var d,e,h,i,j,k=b.split(" ");for(d=k.length;d--;){b=k[d].replace(g,"");if(i=k[d].replace(f,""))i=i.split(".");if(!i&&!c&&a[o])J(t[b],b,a);else{j=y.get(a,b),c=[!1].concat(c);for(e=0,h=j.length;e<h;e++)j[e].inNamespaces(i)&&j[e].handler.apply(a,c)}}return a},L=function(a,b,c){var d=0,e=y.get(b,c),f=e.length;for(;d<f;d++)e[d].original&&H(a,e[d].type,e[d].original);return a},M={add:H,one:I,remove:G,clone:L,fire:K,noConflict:function(){return b[a]=d,this}};if(c[i]){var N=function(){var a,b=y.entries();for(a in b)b[a].type&&b[a].type!=="unload"&&G(b[a].element,b[a].type);c[k]("onunload",N),c.CollectGarbage&&c.CollectGarbage()};c[i]("onunload",N)}return M});
//     Underscore.js 1.1.7
//     (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

//(function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.slice,h=d.unshift,i=e.toString,j=e.hasOwnProperty,k=d.forEach,l=d.map,m=d.reduce,n=d.reduceRight,o=d.filter,p=d.every,q=d.some,r=d.indexOf,s=d.lastIndexOf,t=Array.isArray,u=Object.keys,v=f.bind,w=function(a){return new B(a)};typeof module!="undefined"&&module.exports?(module.exports=w,w._=w):a._=w,w.VERSION="1.1.7";var x=w.each=w.forEach=function(a,b,d){if(a==null)return;if(k&&a.forEach===k)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call(d,a[e],e,a)===c)return}else for(var g in a)if(j.call(a,g)&&b.call(d,a[g],g,a)===c)return};w.map=function(a,b,c){var d=[];return a==null?d:l&&a.map===l?a.map(b,c):(x(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)},w.reduce=w.foldl=w.inject=function(a,b,c,d){var e=c!==void 0;a==null&&(a=[]);if(m&&a.reduce===m)return d&&(b=w.bind(b,d)),e?a.reduce(b,c):a.reduce(b);x(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value");return c},w.reduceRight=w.foldr=function(a,b,c,d){a==null&&(a=[]);if(n&&a.reduceRight===n)return d&&(b=w.bind(b,d)),c!==void 0?a.reduceRight(b,c):a.reduceRight(b);var e=(w.isArray(a)?a.slice():w.toArray(a)).reverse();return w.reduce(e,b,c,d)},w.find=w.detect=function(a,b,c){var d;return y(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},w.filter=w.select=function(a,b,c){var d=[];return a==null?d:o&&a.filter===o?a.filter(b,c):(x(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},w.reject=function(a,b,c){var d=[];return a==null?d:(x(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},w.every=w.all=function(a,b,d){var e=!0;return a==null?e:p&&a.every===p?a.every(b,d):(x(a,function(a,f,g){if(!(e=e&&b.call(d,a,f,g)))return c}),e)};var y=w.some=w.any=function(a,b,d){b=b||w.identity;var e=!1;return a==null?e:q&&a.some===q?a.some(b,d):(x(a,function(a,f,g){if(e|=b.call(d,a,f,g))return c}),!!e)};w.include=w.contains=function(a,b){var c=!1;return a==null?c:r&&a.indexOf===r?a.indexOf(b)!=-1:(y(a,function(a){if(c=a===b)return!0}),c)},w.invoke=function(a,b){var c=g.call(arguments,2);return w.map(a,function(a){return(b.call?b||a:a[b]).apply(a,c)})},w.pluck=function(a,b){return w.map(a,function(a){return a[b]})},w.max=function(a,b,c){if(!b&&w.isArray(a))return Math.max.apply(Math,a);var d={computed:-Infinity};return x(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},w.min=function(a,b,c){if(!b&&w.isArray(a))return Math.min.apply(Math,a);var d={computed:Infinity};return x(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},w.sortBy=function(a,b,c){return w.pluck(w.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")},w.groupBy=function(a,b){var c={};return x(a,function(a,d){var e=b(a,d);(c[e]||(c[e]=[])).push(a)}),c},w.sortedIndex=function(a,b,c){c||(c=w.identity);var d=0,e=a.length;while(d<e){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},w.toArray=function(a){return a?a.toArray?a.toArray():w.isArray(a)?g.call(a):w.isArguments(a)?g.call(a):w.values(a):[]},w.size=function(a){return w.toArray(a).length},w.first=w.head=function(a,b,c){return b!=null&&!c?g.call(a,0,b):a[0]},w.rest=w.tail=function(a,b,c){return g.call(a,b==null||c?1:b)},w.last=function(a){return a[a.length-1]},w.compact=function(a){return w.filter(a,function(a){return!!a})},w.flatten=function(a){return w.reduce(a,function(a,b){return w.isArray(b)?a.concat(w.flatten(b)):(a[a.length]=b,a)},[])},w.without=function(a){return w.difference(a,g.call(arguments,1))},w.uniq=w.unique=function(a,b){return w.reduce(a,function(a,c,d){if(0==d||(b===!0?w.last(a)!=c:!w.include(a,c)))a[a.length]=c;return a},[])},w.union=function(){return w.uniq(w.flatten(arguments))},w.intersection=w.intersect=function(a){var b=g.call(arguments,1);return w.filter(w.uniq(a),function(a){return w.every(b,function(b){return w.indexOf(b,a)>=0})})},w.difference=function(a,b){return w.filter(a,function(a){return!w.include(b,a)})},w.zip=function(){var a=g.call(arguments),b=w.max(w.pluck(a,"length")),c=new Array(b);for(var d=0;d<b;d++)c[d]=w.pluck(a,""+d);return c},w.indexOf=function(a,b,c){if(a==null)return-1;var d,e;if(c)return d=w.sortedIndex(a,b),a[d]===b?d:-1;if(r&&a.indexOf===r)return a.indexOf(b);for(d=0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1},w.lastIndexOf=function(a,b){if(a==null)return-1;if(s&&a.lastIndexOf===s)return a.lastIndexOf(b);var c=a.length;while(c--)if(a[c]===b)return c;return-1},w.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);while(e<d)f[e++]=a,a+=c;return f},w.bind=function(a,b){if(a.bind===v&&v)return v.apply(a,g.call(arguments,1));var c=g.call(arguments,2);return function(){return a.apply(b,c.concat(g.call(arguments)))}},w.bindAll=function(a){var b=g.call(arguments,1);return b.length==0&&(b=w.functions(a)),x(b,function(b){a[b]=w.bind(a[b],a)}),a},w.memoize=function(a,b){var c={};return b||(b=w.identity),function(){var d=b.apply(this,arguments);return j.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},w.delay=function(a,b){var c=g.call(arguments,2);return setTimeout(function(){return a.apply(a,c)},b)},w.defer=function(a){return w.delay.apply(w,[a,1].concat(g.call(arguments,1)))};var z=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,a.apply(e,f)};c&&clearTimeout(d);if(c||!d)d=setTimeout(g,b)}};w.throttle=function(a,b){return z(a,b,!1)},w.debounce=function(a,b){return z(a,b,!0)},w.once=function(a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply(this,arguments))}},w.wrap=function(a,b){return function(){var c=[a].concat(g.call(arguments));return b.apply(this,c)}},w.compose=function(){var a=g.call(arguments);return function(){var b=g.call(arguments);for(var c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},w.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}},w.keys=u||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)j.call(a,c)&&(b[b.length]=c);return b},w.values=function(a){return w.map(a,w.identity)},w.functions=w.methods=function(a){var b=[];for(var c in a)w.isFunction(a[c])&&b.push(c);return b.sort()},w.extend=function(a){return x(g.call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&(a[c]=b[c])}),a},w.defaults=function(a){return x(g.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])}),a},w.clone=function(a){return w.isArray(a)?a.slice():w.extend({},a)},w.tap=function(a,b){return b(a),a},w.isEqual=function(a,b){if(a===b)return!0;var c=typeof a,d=typeof b;if(c!=d)return!1;if(a==b)return!0;if(!a&&b||a&&!b)return!1;a._chain&&(a=a._wrapped),b._chain&&(b=b._wrapped);if(a.isEqual)return a.isEqual(b);if(b.isEqual)return b.isEqual(a);if(w.isDate(a)&&w.isDate(b))return a.getTime()===b.getTime();if(w.isNaN(a)&&w.isNaN(b))return!1;if(w.isRegExp(a)&&w.isRegExp(b))return a.source===b.source&&a.global===b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline;if(c!=="object")return!1;if(a.length&&a.length!==b.length)return!1;var e=w.keys(a),f=w.keys(b);if(e.length!=f.length)return!1;for(var g in a)if(!(g in b)||!w.isEqual(a[g],b[g]))return!1;return!0},w.isEmpty=function(a){if(w.isArray(a)||w.isString(a))return a.length===0;for(var b in a)if(j.call(a,b))return!1;return!0},w.isElement=function(a){return!!a&&a.nodeType==1},w.isArray=t||function(a){return i.call(a)==="[object Array]"},w.isObject=function(a){return a===Object(a)},w.isArguments=function(a){return!!a&&!!j.call(a,"callee")},w.isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},w.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)},w.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)},w.isNaN=function(a){return a!==a},w.isBoolean=function(a){return a===!0||a===!1},w.isDate=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)},w.isRegExp=function(a){return!(!(a&&a.test&&a.exec)||!a.ignoreCase&&a.ignoreCase!==!1)},w.isNull=function(a){return a===null},w.isUndefined=function(a){return a===void 0},w.noConflict=function(){return a._=b,this},w.identity=function(a){return a},w.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},w.mixin=function(a){x(w.functions(a),function(b){D(b,w[b]=a[b])})};var A=0;w.uniqueId=function(a){var b=A++;return a?a+b:b},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g},w.template=function(a,b){var c=w.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(c.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj",d);return b?e(b):e};var B=function(a){this._wrapped=a};w.prototype=B.prototype;var C=function(a,b){return b?w(a).chain():a},D=function(a,b){B.prototype[a]=function(){var a=g.call(arguments);return h.call(a,this._wrapped),C(b.apply(w,a),this._chain)}};w.mixin(w),x(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];B.prototype[a]=function(){return b.apply(this._wrapped,arguments),C(this._wrapped,this._chain)}}),x(["concat","join","slice"],function(a){var b=d[a];B.prototype[a]=function(){return C(b.apply(this._wrapped,arguments),this._chain)}}),B.prototype.chain=function(){return this._chain=!0,this},B.prototype.value=function(){return this._wrapped}})();
/**
 * Flotr2 (c) 2012 Carl Sutherland
 * MIT License
 * Special thanks to:
 * Flotr: http://code.google.com/p/flotr/ (fork)
 * Flot: https://github.com/flot/flot (original fork)
 */
(function(){var a=this,b=this.Flotr,c;c={_:_,bean:bean,isIphone:/iphone/i.test(navigator.userAgent),isIE:navigator.appVersion.indexOf("MSIE")!=-1?parseFloat(navigator.appVersion.split("MSIE")[1]):!1,graphTypes:{},plugins:{},addType:function(a,b){c.graphTypes[a]=b,c.defaultOptions[a]=b.options||{},c.defaultOptions.defaultType=c.defaultOptions.defaultType||a},addPlugin:function(a,b){c.plugins[a]=b,c.defaultOptions[a]=b.options||{}},draw:function(a,b,d,e){return e=e||c.Graph,new e(a,b,d)},merge:function(a,b){var d,e,f=b||{};for(d in a)e=a[d],e&&typeof e=="object"?e.constructor===Array?f[d]=this._.clone(e):e.constructor!==RegExp&&!this._.isElement(e)?f[d]=c.merge(e,b?b[d]:undefined):f[d]=e:f[d]=e;return f},clone:function(a){return c.merge(a,{})},getTickSize:function(a,b,d,e){var f=(d-b)/a,g=c.getMagnitude(f),h=10,i=f/g;return i<1.5?h=1:i<2.25?h=2:i<3?h=e===0?2:2.5:i<7.5&&(h=5),h*g},defaultTickFormatter:function(a,b){return a+""},defaultTrackFormatter:function(a){return"("+a.x+", "+a.y+")"},engineeringNotation:function(a,b,c){var d=["Y","Z","E","P","T","G","M","k",""],e=["y","z","a","f","p","n","Âµ","m",""],f=d.length;c=c||1e3,b=Math.pow(10,b||2);if(a===0)return 0;if(a>1)while(f--&&a>=c)a/=c;else{d=e,f=d.length;while(f--&&a<1)a*=c}return Math.round(a*b)/b+d[f]},getMagnitude:function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))},toPixel:function(a){return Math.floor(a)+.5},toRad:function(a){return-a*(Math.PI/180)},floorInBase:function(a,b){return b*Math.floor(a/b)},drawText:function(a,b,d,e,f){if(!a.fillText){a.drawText(b,d,e,f);return}f=this._.extend({size:c.defaultOptions.fontSize,color:"#000000",textAlign:"left",textBaseline:"bottom",weight:1,angle:0},f),a.save(),a.translate(d,e),a.rotate(f.angle),a.fillStyle=f.color,a.font=(f.weight>1?"bold ":"")+f.size*1.3+"px sans-serif",a.textAlign=f.textAlign,a.textBaseline=f.textBaseline,a.fillText(b,0,0),a.restore()},getBestTextAlign:function(a,b){return b=b||{textAlign:"center",textBaseline:"middle"},a+=c.getTextAngleFromAlign(b),Math.abs(Math.cos(a))>.01&&(b.textAlign=Math.cos(a)>0?"right":"left"),Math.abs(Math.sin(a))>.01&&(b.textBaseline=Math.sin(a)>0?"top":"bottom"),b},alignTable:{"right middle":0,"right top":Math.PI/4,"center top":Math.PI/2,"left top":3*(Math.PI/4),"left middle":Math.PI,"left bottom":-3*(Math.PI/4),"center bottom":-Math.PI/2,"right bottom":-Math.PI/4,"center middle":0},getTextAngleFromAlign:function(a){return c.alignTable[a.textAlign+" "+a.textBaseline]||0},noConflict:function(){return a.Flotr=b,this}},a.Flotr=c})(),Flotr.defaultOptions={colors:["#00A8F0","#C0D800","#CB4B4B","#4DA74D","#9440ED"],ieBackgroundColor:"#FFFFFF",title:null,subtitle:null,shadowSize:4,defaultType:null,HtmlText:!0,fontColor:"#545454",fontSize:7.5,resolution:1,parseFloat:!0,xaxis:{ticks:null,minorTicks:null,showLabels:!0,showMinorLabels:!1,labelsAngle:0,title:null,titleAngle:0,noTicks:5,minorTickFreq:null,tickFormatter:Flotr.defaultTickFormatter,tickDecimals:null,min:null,max:null,autoscale:!1,autoscaleMargin:0,color:null,mode:"normal",timeFormat:null,timeMode:"UTC",timeUnit:"millisecond",scaling:"linear",base:Math.E,titleAlign:"center",margin:!0},x2axis:{},yaxis:{ticks:null,minorTicks:null,showLabels:!0,showMinorLabels:!1,labelsAngle:0,title:null,titleAngle:90,noTicks:5,minorTickFreq:null,tickFormatter:Flotr.defaultTickFormatter,tickDecimals:null,min:null,max:null,autoscale:!1,autoscaleMargin:0,color:null,scaling:"linear",base:Math.E,titleAlign:"center",margin:!0},y2axis:{titleAngle:270},grid:{color:"#545454",backgroundColor:null,backgroundImage:null,watermarkAlpha:.4,tickColor:"#DDDDDD",labelMargin:3,verticalLines:!0,minorVerticalLines:null,horizontalLines:!0,minorHorizontalLines:null,outlineWidth:1,outline:"nsew",circular:!1},mouse:{track:!1,trackAll:!1,position:"se",relative:!1,trackFormatter:Flotr.defaultTrackFormatter,margin:5,lineColor:"#FF3F19",trackDecimals:1,sensibility:2,trackY:!0,radius:3,fillColor:null,fillOpacity:.4}},function(){function b(a,b,c,d){this.rgba=["r","g","b","a"];var e=4;while(-1<--e)this[this.rgba[e]]=arguments[e]||(e==3?1:0);this.normalize()}var a=Flotr._,c={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]};b.prototype={scale:function(b,c,d,e){var f=4;while(-1<--f)a.isUndefined(arguments[f])||(this[this.rgba[f]]*=arguments[f]);return this.normalize()},alpha:function(b){return!a.isUndefined(b)&&!a.isNull(b)&&(this.a=b),this.normalize()},clone:function(){return new b(this.r,this.b,this.g,this.a)},limit:function(a,b,c){return Math.max(Math.min(a,c),b)},normalize:function(){var a=this.limit;return this.r=a(parseInt(this.r,10),0,255),this.g=a(parseInt(this.g,10),0,255),this.b=a(parseInt(this.b,10),0,255),this.a=a(this.a,0,1),this},distance:function(a){if(!a)return;a=new b.parse(a);var c=0,d=3;while(-1<--d)c+=Math.abs(this[this.rgba[d]]-a[this.rgba[d]]);return c},toString:function(){return this.a>=1?"rgb("+[this.r,this.g,this.b].join(",")+")":"rgba("+[this.r,this.g,this.b,this.a].join(",")+")"},contrast:function(){var a=1-(.299*this.r+.587*this.g+.114*this.b)/255;return a<.5?"#000000":"#ffffff"}},a.extend(b,{parse:function(a){if(a instanceof b)return a;var d;if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a))return new b(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16));if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))return new b(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10));if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(a))return new b(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16));if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(a))return new b(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]));if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(a))return new b(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55);if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(a))return new b(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]));var e=(a+"").replace(/^\s*([\S\s]*?)\s*$/,"$1").toLowerCase();return e=="transparent"?new b(255,255,255,0):(d=c[e])?new b(d[0],d[1],d[2]):new b(0,0,0,0)},processColor:function(c,d){var e=d.opacity;if(!c)return"rgba(0, 0, 0, 0)";if(c instanceof b)return c.alpha(e).toString();if(a.isString(c))return b.parse(c).alpha(e).toString();var f=c.colors?c:{colors:c};if(!d.ctx)return a.isArray(f.colors)?b.parse(a.isArray(f.colors[0])?f.colors[0][1]:f.colors[0]).alpha(e).toString():"rgba(0, 0, 0, 0)";f=a.extend({start:"top",end:"bottom"},f),/top/i.test(f.start)&&(d.x1=0),/left/i.test(f.start)&&(d.y1=0),/bottom/i.test(f.end)&&(d.x2=0),/right/i.test(f.end)&&(d.y2=0);var g,h,i,j=d.ctx.createLinearGradient(d.x1,d.y1,d.x2,d.y2);for(g=0;g<f.colors.length;g++)h=f.colors[g],a.isArray(h)?(i=h[0],h=h[1]):i=g/(f.colors.length-1),j.addColorStop(i,b.parse(h).alpha(e));return j}}),Flotr.Color=b}(),Flotr.Date={set:function(a,b,c,d){c=c||"UTC",b="set"+(c==="UTC"?"UTC":"")+b,a[b](d)},get:function(a,b,c){return c=c||"UTC",b="get"+(c==="UTC"?"UTC":"")+b,a[b]()},format:function(a,b,c){function f(a){return a+="",a.length==1?"0"+a:a}if(!a)return;var d=this.get,e={h:d(a,"Hours",c).toString(),H:f(d(a,"Hours",c)),M:f(d(a,"Minutes",c)),S:f(d(a,"Seconds",c)),s:d(a,"Milliseconds",c),d:d(a,"Date",c).toString(),m:(d(a,"Month")+1).toString(),y:d(a,"FullYear").toString(),b:Flotr.Date.monthNames[d(a,"Month",c)]},g=[],h,i=!1;for(var j=0;j<b.length;++j)h=b.charAt(j),i?(g.push(e[h]||h),i=!1):h=="%"?i=!0:g.push(h);return g.join("")},getFormat:function(a,b){var c=Flotr.Date.timeUnits;return a<c.second?"%h:%M:%S.%s":a<c.minute?"%h:%M:%S":a<c.day?b<2*c.day?"%h:%M":"%b %d %h:%M":a<c.month?"%b %d":a<c.year?b<c.year?"%b":"%b %y":"%y"},formatter:function(a,b){var c=b.options,d=Flotr.Date.timeUnits[c.timeUnit],e=new Date(a*d);if(b.options.timeFormat)return Flotr.Date.format(e,c.timeFormat,c.timeMode);var f=(b.max-b.min)*d,g=b.tickSize*Flotr.Date.timeUnits[b.tickUnit];return Flotr.Date.format(e,Flotr.Date.getFormat(g,f),c.timeMode)},generator:function(a){function s(a){b(q,a,g,Flotr.floorInBase(c(q,a,g),m))}var b=this.set,c=this.get,d=this.timeUnits,e=this.spec,f=a.options,g=f.timeMode,h=d[f.timeUnit],i=a.min*h,j=a.max*h,k=(j-i)/f.noTicks,l=[],m=a.tickSize,n,o,p;o=f.tickFormatter===Flotr.defaultTickFormatter?this.formatter:f.tickFormatter;for(p=0;p<e.length-1;++p){var q=e[p][0]*d[e[p][1]];if(k<(q+e[p+1][0]*d[e[p+1][1]])/2&&q>=m)break}m=e[p][0],n=e[p][1],n=="year"&&(m=Flotr.getTickSize(f.noTicks*d.year,i,j,0),m==.5&&(n="month",m=6)),a.tickUnit=n,a.tickSize=m;var q=new Date(i),r=m*d[n];switch(n){case"millisecond":s("Milliseconds");break;case"second":s("Seconds");break;case"minute":s("Minutes");break;case"hour":s("Hours");break;case"month":s("Month");break;case"year":s("FullYear")}r>=d.second&&b(q,"Milliseconds",g,0),r>=d.minute&&b(q,"Seconds",g,0),r>=d.hour&&b(q,"Minutes",g,0),r>=d.day&&b(q,"Hours",g,0),r>=d.day*4&&b(q,"Date",g,1),r>=d.year&&b(q,"Month",g,0);var t=0,u=NaN,v;do{v=u,u=q.getTime(),l.push({v:u/h,label:o(u/h,a)});if(n=="month")if(m<1){b(q,"Date",g,1);var w=q.getTime();b(q,"Month",g,c(q,"Month",g)+1);var x=q.getTime();q.setTime(u+t*d.hour+(x-w)*m),t=c(q,"Hours",g),b(q,"Hours",g,0)}else b(q,"Month",g,c(q,"Month",g)+m);else n=="year"?b(q,"FullYear",g,c(q,"FullYear",g)+m):q.setTime(u+r)}while(u<j&&u!=v);return l},timeUnits:{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,year:31556952e3},spec:[[1,"millisecond"],[20,"millisecond"],[50,"millisecond"],[100,"millisecond"],[200,"millisecond"],[500,"millisecond"],[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},function(){var a=Flotr._;Flotr.DOM={addClass:function(b,c){var d=b.className?b.className:"";if(a.include(d.split(/\s+/g),c))return;b.className=(d?d+" ":"")+c},create:function(a){return document.createElement(a)},node:function(a){var b=Flotr.DOM.create("div"),c;return b.innerHTML=a,c=b.children[0],b.innerHTML="",c},empty:function(a){a.innerHTML=""},hide:function(a){Flotr.DOM.setStyles(a,{display:"none"})},insert:function(b,c){a.isString(c)?b.innerHTML+=c:a.isElement(c)&&b.appendChild(c)},opacity:function(a,b){a.style.opacity=b},position:function(a,b){return a.offsetParent?(b=this.position(a.offsetParent),b.left+=a.offsetLeft,b.top+=a.offsetTop,b):{left:a.offsetLeft||0,top:a.offsetTop||0}},removeClass:function(b,c){var d=b.className?b.className:"";b.className=a.filter(d.split(/\s+/g),function(a){if(a!=c)return!0}).join(" ")},setStyles:function(b,c){a.each(c,function(a,c){b.style[c]=a})},show:function(a){Flotr.DOM.setStyles(a,{display:""})},size:function(a){return{height:a.offsetHeight,width:a.offsetWidth}}}}(),function(){var a=Flotr,b=a.bean;a.EventAdapter={observe:function(a,c,d){return b.add(a,c,d),this},fire:function(a,c,d){return b.fire(a,c,d),typeof Prototype!="undefined"&&Event.fire(a,c,d),this},stopObserving:function(a,c,d){return b.remove(a,c,d),this},eventPointer:function(b){if(!a._.isUndefined(b.touches)&&b.touches.length>0)return{x:b.touches[0].pageX,y:b.touches[0].pageY};if(!a._.isUndefined(b.changedTouches)&&b.changedTouches.length>0)return{x:b.changedTouches[0].pageX,y:b.changedTouches[0].pageY};if(b.pageX||b.pageY)return{x:b.pageX,y:b.pageY};if(b.clientX||b.clientY){var c=document,d=c.body,e=c.documentElement;return{x:b.clientX+d.scrollLeft+e.scrollLeft,y:b.clientY+d.scrollTop+e.scrollTop}}}}}(),function(){var a=Flotr,b=a.DOM,c=a._,d=function(a){this.o=a};d.prototype={dimensions:function(a,b,c,d){return a?this.o.html?this.html(a,this.o.element,c,d):this.canvas(a,b):{width:0,height:0}},canvas:function(b,c){if(!this.o.textEnabled)return;c=c||{};var d=this.measureText(b,c),e=d.width,f=c.size||a.defaultOptions.fontSize,g=c.angle||0,h=Math.cos(g),i=Math.sin(g),j=2,k=6,l;return l={width:Math.abs(h*e)+Math.abs(i*f)+j,height:Math.abs(i*e)+Math.abs(h*f)+k},l},html:function(a,c,d,e){var f=b.create("div");return b.setStyles(f,{position:"absolute",top:"-10000px"}),b.insert(f,'<div style="'+d+'" class="'+e+' flotr-dummy-div">'+a+"</div>"),b.insert(this.o.element,f),b.size(f)},measureText:function(b,d){var e=this.o.ctx,f;return!e.fillText||a.isIphone&&e.measure?{width:e.measure(b,d)}:(d=c.extend({size:a.defaultOptions.fontSize,weight:1,angle:0},d),e.save(),e.font=(d.weight>1?"bold ":"")+d.size*1.3+"px sans-serif",f=e.measureText(b),e.restore(),f)}},Flotr.Text=d}(),function(){function e(a,c,d){return b.observe.apply(this,arguments),this._handles.push(arguments),this}var a=Flotr.DOM,b=Flotr.EventAdapter,c=Flotr._,d=Flotr;Graph=function(a,e,f){this._setEl(a),this._initMembers(),this._initPlugins(),b.fire(this.el,"flotr:beforeinit",[this]),this.data=e,this.series=d.Series.getSeries(e),this._initOptions(f),this._initGraphTypes(),this._initCanvas(),this._text=new d.Text({element:this.el,ctx:this.ctx,html:this.options.HtmlText,textEnabled:this.textEnabled}),b.fire(this.el,"flotr:afterconstruct",[this]),this._initEvents(),this.findDataRanges(),this.calculateSpacing(),this.draw(c.bind(function(){b.fire(this.el,"flotr:afterinit",[this])},this))},Graph.prototype={destroy:function(){b.fire(this.el,"flotr:destroy"),c.each(this._handles,function(a){b.stopObserving.apply(this,a)}),this._handles=[],this.el.graph=null},observe:e,_observe:e,processColor:function(a,b){var e={x1:0,y1:0,x2:this.plotWidth,y2:this.plotHeight,opacity:1,ctx:this.ctx};return c.extend(e,b),d.Color.processColor(a,e)},findDataRanges:function(){var a=this.axes,b,e,f;c.each(this.series,function(a){f=a.getRange(),f&&(b=a.xaxis,e=a.yaxis,b.datamin=Math.min(f.xmin,b.datamin),b.datamax=Math.max(f.xmax,b.datamax),e.datamin=Math.min(f.ymin,e.datamin),e.datamax=Math.max(f.ymax,e.datamax),b.used=b.used||f.xused,e.used=e.used||f.yused)},this),!a.x.used&&!a.x2.used&&(a.x.used=!0),!a.y.used&&!a.y2.used&&(a.y.used=!0),c.each(a,function(a){a.calculateRange()});var g=c.keys(d.graphTypes),h=!1;c.each(this.series,function(a){if(a.hide)return;c.each(g,function(b){a[b]&&a[b].show&&(this.extendRange(b,a),h=!0)},this),h||this.extendRange(this.options.defaultType,a)},this)},extendRange:function(a,b){this[a].extendRange&&this[a].extendRange(b,b.data,b[a],this[a]),this[a].extendYRange&&this[a].extendYRange(b.yaxis,b.data,b[a],this[a]),this[a].extendXRange&&this[a].extendXRange(b.xaxis,b.data,b[a],this[a])},calculateSpacing:function(){var a=this.axes,b=this.options,d=this.series,e=b.grid.labelMargin,f=this._text,g=a.x,h=a.x2,i=a.y,j=a.y2,k=b.grid.outlineWidth,l,m,n,o;c.each(a,function(a){a.calculateTicks(),a.calculateTextDimensions(f,b)}),o=f.dimensions(b.title,{size:b.fontSize*1.5},"font-size:1em;font-weight:bold;","flotr-title"),this.titleHeight=o.height,o=f.dimensions(b.subtitle,{size:b.fontSize},"font-size:smaller;","flotr-subtitle"),this.subtitleHeight=o.height;for(m=0;m<b.length;++m)d[m].points.show&&(k=Math.max(k,d[m].points.radius+d[m].points.lineWidth/2));var p=this.plotOffset;g.options.margin===!1?(p.bottom=0,p.top=0):(p.bottom+=(b.grid.circular?0:g.used&&g.options.showLabels?g.maxLabel.height+e:0)+(g.used&&g.options.title?g.titleSize.height+e:0)+k,p.top+=(b.grid.circular?0:h.used&&h.options.showLabels?h.maxLabel.height+e:0)+(h.used&&h.options.title?h.titleSize.height+e:0)+this.subtitleHeight+this.titleHeight+k),i.options.margin===!1?(p.left=0,p.right=0):(p.left+=(b.grid.circular?0:i.used&&i.options.showLabels?i.maxLabel.width+e:0)+(i.used&&i.options.title?i.titleSize.width+e:0)+k,p.right+=(b.grid.circular?0:j.used&&j.options.showLabels?j.maxLabel.width+e:0)+(j.used&&j.options.title?j.titleSize.width+e:0)+k),p.top=Math.floor(p.top),this.plotWidth=this.canvasWidth-p.left-p.right,this.plotHeight=this.canvasHeight-p.bottom-p.top,g.length=h.length=this.plotWidth,i.length=j.length=this.plotHeight,i.offset=j.offset=this.plotHeight,g.setScale(),h.setScale(),i.setScale(),j.setScale()},draw:function(a){var c=this.ctx,d;b.fire(this.el,"flotr:beforedraw",[this.series,this]);if(this.series.length){c.save(),c.translate(this.plotOffset.left,this.plotOffset.top);for(d=0;d<this.series.length;d++)this.series[d].hide||this.drawSeries(this.series[d]);c.restore(),this.clip()}b.fire(this.el,"flotr:afterdraw",[this.series,this]),a&&a()},drawSeries:function(a){function b(a,b){var c=this.getOptions(a,b);this[b].draw(c)}var e=!1;a=a||this.series,c.each(d.graphTypes,function(c,d){a[d]&&a[d].show&&this[d]&&(e=!0,b.call(this,a,d))},this),e||b.call(this,a,this.options.defaultType)},getOptions:function(a,b){var e=a[b],f=this[b],g={context:this.ctx,width:this.plotWidth,height:this.plotHeight,fontSize:this.options.fontSize,fontColor:this.options.fontColor,textEnabled:this.textEnabled,htmlText:this.options.HtmlText,text:this._text,element:this.el,data:a.data,color:a.color,shadowSize:a.shadowSize,xScale:c.bind(a.xaxis.d2p,a.xaxis),yScale:c.bind(a.yaxis.d2p,a.yaxis)};return g=d.merge(e,g),g.fillStyle=this.processColor(e.fillColor||a.color,{opacity:e.fillOpacity}),g},getEventPosition:function(c){var d=document,e=d.body,f=d.documentElement,g=this.axes,h=this.plotOffset,i=this.lastMousePos,j=b.eventPointer(c),k=j.x-i.pageX,l=j.y-i.pageY,m,n,o;return"ontouchstart"in this.el?(m=a.position(this.overlay),n=j.x-m.left-h.left,o=j.y-m.top-h.top):(m=this.overlay.getBoundingClientRect(),n=c.clientX-m.left-h.left-e.scrollLeft-f.scrollLeft,o=c.clientY-m.top-h.top-e.scrollTop-f.scrollTop),{x:g.x.p2d(n),x2:g.x2.p2d(n),y:g.y.p2d(o),y2:g.y2.p2d(o),relX:n,relY:o,dX:k,dY:l,absX:j.x,absY:j.y,pageX:j.x,pageY:j.y}},clickHandler:function(a){if(this.ignoreClick)return this.ignoreClick=!1,this.ignoreClick;b.fire(this.el,"flotr:click",[this.getEventPosition(a),this])},mouseMoveHandler:function(a){if(this.mouseDownMoveHandler)return;var c=this.getEventPosition(a);b.fire(this.el,"flotr:mousemove",[a,c,this]),this.lastMousePos=c},mouseDownHandler:function(a){if(this.mouseUpHandler)return;this.mouseUpHandler=c.bind(function(a){b.stopObserving(document,"mouseup",this.mouseUpHandler),b.stopObserving(document,"mousemove",this.mouseDownMoveHandler),this.mouseDownMoveHandler=null,this.mouseUpHandler=null,b.fire(this.el,"flotr:mouseup",[a,this])},this),this.mouseDownMoveHandler=c.bind(function(c){var d=this.getEventPosition(c);b.fire(this.el,"flotr:mousemove",[a,d,this]),this.lastMousePos=d},this),b.observe(document,"mouseup",this.mouseUpHandler),b.observe(document,"mousemove",this.mouseDownMoveHandler),b.fire(this.el,"flotr:mousedown",[a,this]),this.ignoreClick=!1},drawTooltip:function(b,c,d,e){var f=this.getMouseTrack(),g="opacity:0.7;background-color:#000;color:#fff;display:none;position:absolute;padding:2px 8px;-moz-border-radius:4px;border-radius:4px;white-space:nowrap;",h=e.position,i=e.margin,j=this.plotOffset;c!==null&&d!==null?(e.relative?(h.charAt(0)=="n"?g+="bottom:"+(i-j.top-d+this.canvasHeight)+"px;top:auto;":h.charAt(0)=="s"&&(g+="top:"+(i+j.top+d)+"px;bottom:auto;"),h.charAt(1)=="e"?g+="left:"+(i+j.left+c)+"px;right:auto;":h.charAt(1)=="w"&&(g+="right:"+(i-j.left-c+this.canvasWidth)+"px;left:auto;")):(h.charAt(0)=="n"?g+="top:"+(i+j.top)+"px;bottom:auto;":h.charAt(0)=="s"&&(g+="bottom:"+(i+j.bottom)+"px;top:auto;"),h.charAt(1)=="e"?g+="right:"+(i+j.right)+"px;left:auto;":h.charAt(1)=="w"&&(g+="left:"+(i+j.left)+"px;right:auto;")),f.style.cssText=g,a.empty(f),a.insert(f,b),a.show(f)):a.hide(f)},clip:function(a){var b=this.plotOffset,c=this.canvasWidth,e=this.canvasHeight;a=a||this.ctx,d.isIE&&d.isIE<9?(a.save(),a.fillStyle=this.processColor(this.options.ieBackgroundColor),a.fillRect(0,0,c,b.top),a.fillRect(0,0,b.left,e),a.fillRect(0,e-b.bottom,c,b.bottom),a.fillRect(c-b.right,0,b.right,e),a.restore()):(a.clearRect(0,0,c,b.top),a.clearRect(0,0,b.left,e),a.clearRect(0,e-b.bottom,c,b.bottom),a.clearRect(c-b.right,0,b.right,e))},_initMembers:function(){this._handles=[],this.lastMousePos={pageX:null,pageY:null},this.plotOffset={left:0,right:0,top:0,bottom:0},this.ignoreClick=!0,this.prevHit=null},_initGraphTypes:function(){c.each(d.graphTypes,function(a,b){this[b]=d.clone(a)},this)},_initEvents:function(){var a=this.el,d,e,f;"ontouchstart"in a?(d=c.bind(function(c){f=!0,b.stopObserving(document,"touchend",d),b.fire(a,"flotr:mouseup",[event,this]),this.multitouches=null,e||this.clickHandler(c)},this),this.observe(this.overlay,"touchstart",c.bind(function(c){e=!1,f=!1,this.ignoreClick=!1,c.touches&&c.touches.length>1&&(this.multitouches=c.touches),b.fire(a,"flotr:mousedown",[event,this]),this.observe(document,"touchend",d)},this)),this.observe(this.overlay,"touchmove",c.bind(function(c){var d=this.getEventPosition(c);c.preventDefault(),e=!0,this.multitouches||c.touches&&c.touches.length>1?this.multitouches=c.touches:f||b.fire(a,"flotr:mousemove",[event,d,this]),this.lastMousePos=d},this))):this.observe(this.overlay,"mousedown",c.bind(this.mouseDownHandler,this)).observe(a,"mousemove",c.bind(this.mouseMoveHandler,this)).observe(this.overlay,"click",c.bind(this.clickHandler,this)).observe(a,"mouseout",function(){b.fire(a,"flotr:mouseout")})},_initCanvas:function(){function k(e,f){return e||(e=a.create("canvas"),typeof FlashCanvas!="undefined"&&typeof e.getContext=="function"&&FlashCanvas.initElement(e),e.className="flotr-"+f,e.style.cssText="position:absolute;left:0px;top:0px;",a.insert(b,e)),c.each(i,function(b,c){a.show(e);if(f=="canvas"&&e.getAttribute(c)===b)return;e.setAttribute(c,b*d.resolution),e.style[c]=b+"px"}),e.context_=null,e}function l(a){window.G_vmlCanvasManager&&window.G_vmlCanvasManager.initElement(a);var b=a.getContext("2d");return window.G_vmlCanvasManager||b.scale(d.resolution,d.resolution),b}var b=this.el,d=this.options,e=b.children,f=[],g,h,i,j;for(h=e.length;h--;)g=e[h],!this.canvas&&g.className==="flotr-canvas"?this.canvas=g:!this.overlay&&g.className==="flotr-overlay"?this.overlay=g:f.push(g);for(h=f.length;h--;)b.removeChild(f[h]);a.setStyles(b,{position:"relative"}),i={},i.width=b.clientWidth,i.height=b.clientHeight;if(i.width<=0||i.height<=0||d.resolution<=0)throw"Invalid dimensions for plot, width = "+i.width+", height = "+i.height+", resolution = "+d.resolution;this.canvas=k(this.canvas,"canvas"),this.overlay=k(this.overlay,"overlay"),this.ctx=l(this.canvas),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.octx=l(this.overlay),this.octx.clearRect(0,0,this.overlay.width,this.overlay.height),this.canvasHeight=i.height,this.canvasWidth=i.width,this.textEnabled=!!this.ctx.drawText||!!this.ctx.fillText},_initPlugins:function(){c.each(d.plugins,function(a,b){c.each(a.callbacks,function(a,b){this.observe(this.el,b,c.bind(a,this))},this),this[b]=d.clone(a),c.each(this[b],function(a,d){c.isFunction(a)&&(this[b][d]=c.bind(a,this))},this)},this)},_initOptions:function(a){var e=d.clone(d.defaultOptions);e.x2axis=c.extend(c.clone(e.xaxis),e.x2axis),e.y2axis=c.extend(c.clone(e.yaxis),e.y2axis),this.options=d.merge(a||{},e),this.options.grid.minorVerticalLines===null&&this.options.xaxis.scaling==="logarithmic"&&(this.options.grid.minorVerticalLines=!0),this.options.grid.minorHorizontalLines===null&&this.options.yaxis.scaling==="logarithmic"&&(this.options.grid.minorHorizontalLines=!0),b.fire(this.el,"flotr:afterinitoptions",[this]),this.axes=d.Axis.getAxes(this.options);var f=[],g=[],h=this.series.length,i=this.series.length,j=this.options.colors,k=[],l=0,m,n,o,p;for(n=i-1;n>-1;--n)m=this.series[n].color,m&&(--i,c.isNumber(m)?f.push(m):k.push(d.Color.parse(m)));for(n=f.length-1;n>-1;--n)i=Math.max(i,f[n]+1);for(n=0;g.length<i;){m=j.length==n?new d.Color(100,100,100):d.Color.parse(j[n]);var q=l%2==1?-1:1,r=1+q*Math.ceil(l/2)*.2;m.scale(r,r,r),g.push(m),++n>=j.length&&(n=0,++l)}for(n=0,o=0;n<h;++n){p=this.series[n],p.color?c.isNumber(p.color)&&(p.color=g[p.color].toString()):p.color=g[o++].toString(),p.xaxis||(p.xaxis=this.axes.x),p.xaxis==1?p.xaxis=this.axes.x:p.xaxis==2&&(p.xaxis=this.axes.x2),p.yaxis||(p.yaxis=this.axes.y),p.yaxis==1?p.yaxis=this.axes.y:p.yaxis==2&&(p.yaxis=this.axes.y2);for(var s in d.graphTypes)p[s]=c.extend(c.clone(this.options[s]),p[s]);p.mouse=c.extend(c.clone(this.options.mouse),p.mouse),c.isUndefined(p.shadowSize)&&(p.shadowSize=this.options.shadowSize)}},_setEl:function(a){if(!a)throw"The target container doesn't exist";if(a.graph instanceof Graph)a.graph.destroy();else if(!a.clientWidth)throw"The target container must be visible";a.graph=this,this.el=a}},Flotr.Graph=Graph}(),function(){function c(b){this.orientation=1,this.offset=0,this.datamin=Number.MAX_VALUE,this.datamax=-Number.MAX_VALUE,a.extend(this,b),this._setTranslations()}function d(a){return this.offset+this.orientation*(a-this.min)*this.scale}function e(a){return(this.offset+this.orientation*a)/this.scale+this.min}function f(a){return this.offset+this.orientation*(h(a,this.options.base)-h(this.min,this.options.base))*this.scale}function g(a){return j((this.offset+this.orientation*a)/this.scale+h(this.min,this.options.base),this.options.base)}function h(a,b){return a=Math.log(Math.max(a,Number.MIN_VALUE)),b!==Math.E&&(a/=Math.log(b)),a}function j(a,b){return b===Math.E?Math.exp(a):Math.pow(b,a)}var a=Flotr._,b="logarithmic";c.prototype={setScale:function(){var a=this.length;this.options.scaling==b?this.scale=a/(h(this.max,this.options.base)-h(this.min,this.options.base)):this.scale=a/(this.max-this.min)},calculateTicks:function(){var b=this.options;this.ticks=[],this.minorTicks=[],b.ticks?(this._cleanUserTicks(b.ticks,this.ticks),this._cleanUserTicks(b.minorTicks||[],this.minorTicks)):b.mode=="time"?this._calculateTimeTicks():b.scaling==="logarithmic"?this._calculateLogTicks():this._calculateTicks(),a.each(this.ticks,function(a){a.label+=""}),a.each(this.minorTicks,function(a){a.label+=""})},calculateRange:function(){if(!this.used)return;var a=this,b=a.options,c=b.min!==null?b.min:a.datamin,d=b.max!==null?b.max:a.datamax,e=b.autoscaleMargin;b.scaling=="logarithmic"&&(c<=0&&(c=a.datamin),d<=0&&(d=c));if(d==c){var f=d?.01:1;b.min===null&&(c-=f),b.max===null&&(d+=f)}if(b.scaling==="logarithmic"){c<0&&(c=d/b.base);var g=Math.log(d);b.base!=Math.E&&(g/=Math.log(b.base)),g=Math.ceil(g);var h=Math.log(c);b.base!=Math.E&&(h/=Math.log(b.base)),h=Math.ceil(h),a.tickSize=Flotr.getTickSize(b.noTicks,h,g,b.tickDecimals===null?0:b.tickDecimals),b.minorTickFreq===null&&(g-h>10?b.minorTickFreq=0:g-h>5?b.minorTickFreq=2:b.minorTickFreq=5)}else a.tickSize=Flotr.getTickSize(b.noTicks,c,d,b.tickDecimals);a.min=c,a.max=d,b.min===null&&b.autoscale&&(a.min-=a.tickSize*e,a.min<0&&a.datamin>=0&&(a.min=0),a.min=a.tickSize*Math.floor(a.min/a.tickSize)),b.max===null&&b.autoscale&&(a.max+=a.tickSize*e,a.max>0&&a.datamax<=0&&a.datamax!=a.datamin&&(a.max=0),a.max=a.tickSize*Math.ceil(a.max/a.tickSize)),a.min==a.max&&(a.max=a.min+1)},calculateTextDimensions:function(a,b){var c="",d,e;if(this.options.showLabels)for(e=0;e<this.ticks.length;++e)d=this.ticks[e].label.length,d>c.length&&(c=this.ticks[e].label);this.maxLabel=a.dimensions(c,{size:b.fontSize,angle:Flotr.toRad(this.options.labelsAngle)},"font-size:smaller;","flotr-grid-label"),this.titleSize=a.dimensions(this.options.title,{size:b.fontSize*1.2,angle:Flotr.toRad(this.options.titleAngle)},"font-weight:bold;","flotr-axis-title")},_cleanUserTicks:function(b,c){var d=this,e=this.options,f,g,h,i;a.isFunction(b)&&(b=b({min:d.min,max:d.max}));for(g=0;g<b.length;++g)i=b[g],typeof i=="object"?(f=i[0],h=i.length>1?i[1]:e.tickFormatter(f,{min:d.min,max:d.max})):(f=i,h=e.tickFormatter(f,{min:this.min,max:this.max})),c[g]={v:f,label:h}},_calculateTimeTicks:function(){this.ticks=Flotr.Date.generator(this)},_calculateLogTicks:function(){var a=this,b=a.options,c,d,e=Math.log(a.max);b.base!=Math.E&&(e/=Math.log(b.base)),e=Math.ceil(e);var f=Math.log(a.min);b.base!=Math.E&&(f/=Math.log(b.base)),f=Math.ceil(f);for(i=f;i<e;i+=a.tickSize){d=b.base==Math.E?Math.exp(i):Math.pow(b.base,i);var g=d*(b.base==Math.E?Math.exp(a.tickSize):Math.pow(b.base,a.tickSize)),h=(g-d)/b.minorTickFreq;a.ticks.push({v:d,label:b.tickFormatter(d,{min:a.min,max:a.max})});for(c=d+h;c<g;c+=h)a.minorTicks.push({v:c,label:b.tickFormatter(c,{min:a.min,max:a.max})})}d=b.base==Math.E?Math.exp(i):Math.pow(b.base,i),a.ticks.push({v:d,label:b.tickFormatter(d,{min:a.min,max:a.max})})},_calculateTicks:function(){var a=this,b=a.options,c=a.tickSize,d=a.min,e=a.max,f=c*Math.ceil(d/c),g,h,i,j,k,l;b.minorTickFreq&&(h=c/b.minorTickFreq);for(k=0;(i=j=f+k*c)<=e;++k){g=b.tickDecimals,g===null&&(g=1-Math.floor(Math.log(c)/Math.LN10)),g<0&&(g=0),i=i.toFixed(g),a.ticks.push({v:i,label:b.tickFormatter(i,{min:a.min,max:a.max})});if(b.minorTickFreq)for(l=0;l<b.minorTickFreq&&k*c+l*h<e;++l)i=j+l*h,a.minorTicks.push({v:i,label:b.tickFormatter(i,{min:a.min,max:a.max})})}},_setTranslations:function(a){this.d2p=a?f:d,this.p2d=a?g:e}},a.extend(c,{getAxes:function(a){return{x:new c({options:a.xaxis,n:1,length:this.plotWidth}),x2:new c({options:a.x2axis,n:2,length:this.plotWidth}),y:new c({options:a.yaxis,n:1,length:this.plotHeight,offset:this.plotHeight,orientation:-1}),y2:new c({options:a.y2axis,n:2,length:this.plotHeight,offset:this.plotHeight,orientation:-1})}}}),Flotr.Axis=c}(),function(){function b(b){a.extend(this,b)}var a=Flotr._;b.prototype={getRange:function(){var a=this.data,b=a.length,c=Number.MAX_VALUE,d=Number.MAX_VALUE,e=-Number.MAX_VALUE,f=-Number.MAX_VALUE,g=!1,h=!1,i,j,k;if(b<0||this.hide)return!1;for(k=0;k<b;k++)i=a[k][0],j=a[k][1],i<c&&(c=i,g=!0),i>e&&(e=i,g=!0),j<d&&(d=j,h=!0),j>f&&(f=j,h=!0);return{xmin:c,xmax:e,ymin:d,ymax:f,xused:g,yused:h}}},a.extend(b,{getSeries:function(c){return a.map(c,function(c){var d;return c.data?(d=new b,a.extend(d,c)):d=new b({data:c}),d})}}),Flotr.Series=b}(),Flotr.addType("lines",{options:{show:!1,lineWidth:2,fill:!1,fillBorder:!1,fillColor:null,fillOpacity:.4,steps:!1,stacked:!1},stack:{values:[]},draw:function(a){var b=a.context,c=a.lineWidth,d=a.shadowSize,e;b.save(),b.lineJoin="round",d&&(b.lineWidth=d/2,e=c/2+b.lineWidth/2,b.strokeStyle="rgba(0,0,0,0.1)",this.plot(a,e+d/2,!1),b.strokeStyle="rgba(0,0,0,0.2)",this.plot(a,e,!1)),b.lineWidth=c,b.strokeStyle=a.color,this.plot(a,0,!0),b.restore()},plot:function(a,b,c){function w(){!b&&a.fill&&o&&(p=g(o[0]),d.fillStyle=a.fillStyle,d.lineTo(q,n),d.lineTo(p,n),d.lineTo(p,h(o[1])),d.fill(),a.fillBorder&&d.stroke())}var d=a.context,e=a.width,f=a.height,g=a.xScale,h=a.yScale,i=a.data,j=a.stacked?this.stack:!1,k=i.length-1,l=null,m=null,n=h(0),o=null,p,q,r,s,t,u,v;if(k<1)return;d.beginPath();for(v=0;v<k;++v){if(i[v][1]===null||i[v+1][1]===null){a.fill&&v>0&&i[v][1]&&(d.stroke(),w(),o=null,d.closePath(),d.beginPath());continue}p=g(i[v][0]),q=g(i[v+1][0]),o===null&&(o=i[v]),j?(t=j.values[i[v][0]]||0,u=j.values[i[v+1][0]]||j.values[i[v][0]]||0,r=h(i[v][1]+t),s=h(i[v+1][1]+u),c&&(j.values[i[v][0]]=i[v][1]+t,v==k-1&&(j.values[i[v+1][0]]=i[v+1][1]+u))):(r=h(i[v][1]),s=h(i[v+1][1]));if(r>f&&s>f||r<0&&s<0||p<0&&q<0||p>e&&q>e)continue;(l!=p||m!=r+b)&&d.moveTo(p,r+b),l=q,m=s+b,a.steps?(d.lineTo(l+b/2,r+b),d.lineTo(l+b/2,m)):d.lineTo(l,m)}(!a.fill||a.fill&&!a.fillBorder)&&d.stroke(),w(),d.closePath()},extendYRange:function(a,b,c,d){var e=a.options;if(c.stacked&&(!e.max&&e.max!==0||!e.min&&e.min!==0)){var f=a.max,g=a.min,h=d.positiveSums||{},i=d.negativeSums||{},j,k;for(k=0;k<b.length;k++)j=b[k][0]+"",b[k][1]>0?(h[j]=(h[j]||0)+b[k][1],f=Math.max(f,h[j])):(i[j]=(i[j]||0)+b[k][1],g=Math.min(g,i[j]));d.negativeSums=i,d.positiveSums=h,a.max=f,a.min=g}c.steps&&(this.hit=function(a){var b=a.data,c=a.args,d=a.yScale,e=c[0],f=b.length,g=c[1],h=e.x,i=e.relY,j;for(j=0;j<f-1;j++)if(h>=b[j][0]&&h<=b[j+1][0]){Math.abs(d(b[j][1])-i)<8&&(g.x=b[j][0],g.y=b[j][1],g.index=j,g.seriesIndex=a.index);break}},this.drawHit=function(a){var b=a.context,c=a.args,d=a.data,e=a.xScale,f=c.index,g=e(c.x),h=a.yScale(c.y),i;d.length-1>f&&(i=a.xScale(d[f+1][0]),b.save(),b.strokeStyle=a.color,b.lineWidth=a.lineWidth,b.beginPath(),b.moveTo(g,h),b.lineTo(i,h),b.stroke(),b.closePath(),b.restore())},this.clearHit=function(a){var b=a.context,c=a.args,d=a.data,e=a.xScale,f=a.lineWidth,g=c.index,h=e(c.x),i=a.yScale(c.y),j;d.length-1>g&&(j=a.xScale(d[g+1][0]),b.clearRect(h-f,i-f,j-h+2*f,2*f))})}}),Flotr.addType("bars",{options:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,fillOpacity:.4,horizontal:!1,stacked:!1,centered:!0,topPadding:.1,grouped:!1},stack:{positive:[],negative:[],_positive:[],_negative:[]},draw:function(a){var b=a.context;this.current+=1,b.save(),b.lineJoin="miter",b.lineWidth=a.lineWidth,b.strokeStyle=a.color,a.fill&&(b.fillStyle=a.fillStyle),this.plot(a),b.restore()},plot:function(a){var b=a.data,c=a.context,d=a.shadowSize,e,f,g,h,i,j;if(b.length<1)return;this.translate(c,a.horizontal);for(e=0;e<b.length;e++){f=this.getBarGeometry(b[e][0],b[e][1],a);if(f===null)continue;g=f.left,h=f.top,i=f.width,j=f.height,a.fill&&c.fillRect(g,h,i,j),d&&(c.save(),c.fillStyle="rgba(0,0,0,0.05)",c.fillRect(g+d,h+d,i,j),c.restore()),a.lineWidth&&c.strokeRect(g,h,i,j)}},translate:function(a,b){b&&(a.rotate(-Math.PI/2),a.scale(-1,1))},getBarGeometry:function(a,b,c){var d=c.horizontal,e=c.barWidth,f=c.centered,g=c.stacked?this.stack:!1,h=c.lineWidth,i=f?e/2:0,j=d?c.yScale:c.xScale,k=d?c.xScale:c.yScale,l=d?b:a,m=d?a:b,n=0,o,p,q,r,s;return c.grouped&&(this.current/this.groups,l-=i,e/=this.groups,i=e/2,l=l+e*this.current-i),g&&(o=m>0?g.positive:g.negative,n=o[l]||n,o[l]=n+m),p=j(l-i),q=j(l+e-i),r=k(m+n),s=k(n),s<0&&(s=0),a===null||b===null?null:{x:l,y:m,xScale:j,yScale:k,top:r,left:Math.min(p,q)-h/2,width:Math.abs(q-p)-h,height:s-r}},hit:function(a){var b=a.data,c=a.args,d=c[0],e=c[1],f=d.x,g=d.y,h=this.getBarGeometry(f,g,a),i=h.width/2,j=h.left,k,l;for(l=b.length;l--;)k=this.getBarGeometry(b[l][0],b[l][1],a),k.y>h.y&&Math.abs(j-k.left)<i&&(e.x=b[l][0],e.y=b[l][1],e.index=l,e.seriesIndex=a.index)},drawHit:function(a){var b=a.context,c=a.args,d=this.getBarGeometry(c.x,c.y,a),e=d.left,f=d.top,g=d.width,h=d.height;b.save(),b.strokeStyle=a.color,b.lineWidth=a.lineWidth,this.translate(b,a.horizontal),b.beginPath(),b.moveTo(e,f+h),b.lineTo(e,f),b.lineTo(e+g,f),b.lineTo(e+g,f+h),a.fill&&(b.fillStyle=a.fillStyle,b.fill()),b.stroke(),b.closePath(),b.restore()},clearHit:function(a){var b=a.context,c=a.args,d=this.getBarGeometry(c.x,c.y,a),e=d.left,f=d.width,g=d.top,h=d.height,i=2*a.lineWidth;b.save(),this.translate(b,a.horizontal),b.clearRect(e-i,Math.min(g,g+h)-i,f+2*i,Math.abs(h)+2*i),b.restore()},extendXRange:function(a,b,c,d){this._extendRange(a,b,c,d),this.groups=this.groups+1||1,this.current=0},extendYRange:function(a,b,c,d){this._extendRange(a,b,c,d)},_extendRange:function(a,b,c,d){var e=a.options.max;if(_.isNumber(e)||_.isString(e))return;var f=a.min,g=a.max,h=c.horizontal,i=a.orientation,j=this.positiveSums||{},k=this.negativeSums||{},l,m,n,o;(i==1&&!h||i==-1&&h)&&c.centered&&(g=Math.max(a.datamax+c.barWidth,g),f=Math.min(a.datamin-c.barWidth,f));if(c.stacked&&(i==1&&h||i==-1&&!h))for(o=b.length;o--;)l=b[o][i==1?1:0]+"",m=b[o][i==1?0:1],m>0?(j[l]=(j[l]||0)+m,g=Math.max(g,j[l])):(k[l]=(k[l]||0)+m,f=Math.min(f,k[l]));(i==1&&h||i==-1&&!h)&&c.topPadding&&(a.max===a.datamax||c.stacked&&this.stackMax!==g)&&(g+=c.topPadding*(g-f)),this.stackMin=f,this.stackMax=g,this.negativeSums=k,this.positiveSums=j,a.max=g,a.min=f}}),Flotr.addType("bubbles",{options:{show:!1,lineWidth:2,fill:!0,fillOpacity:.4,baseRadius:2},draw:function(a){var b=a.context,c=a.shadowSize;b.save(),b.lineWidth=a.lineWidth,b.fillStyle="rgba(0,0,0,0.05)",b.strokeStyle="rgba(0,0,0,0.05)",this.plot(a,c/2),b.strokeStyle="rgba(0,0,0,0.1)",this.plot(a,c/4),b.strokeStyle=a.color,b.fillStyle=a.fillStyle,this.plot(a),b.restore()},plot:function(a,b){var c=a.data,d=a.context,e,f,g,h,i;b=b||0;for(f=0;f<c.length;++f)e=this.getGeometry(c[f],a),d.beginPath(),d.arc(e.x+b,e.y+b,e.z,0,2*Math.PI,!0),d.stroke(),a.fill&&d.fill(),d.closePath()},getGeometry:function(a,b){return{x:b.xScale(a[0]),y:b.yScale(a[1]),z:a[2]*b.baseRadius}},hit:function(a){var b=a.data,c=a.args,d=c[0],e=c[1],f=d.x,g=d.y,h,j,k,l;e.best=e.best||Number.MAX_VALUE;for(i=b.length;i--;)j=this.getGeometry(b[i],a),k=j.x-a.xScale(f),l=j.y-a.yScale(g),h=Math.sqrt(k*k+l*l),h<j.z&&j.z<e.best&&(e.x=b[i][0],e.y=b[i][1],e.index=i,e.seriesIndex=a.index,e.best=j.z)},drawHit:function(a){var b=a.context,c=this.getGeometry(a.data[a.args.index],a);b.save(),b.lineWidth=a.lineWidth,b.fillStyle=a.fillStyle,b.strokeStyle=a.color,b.beginPath(),b.arc(c.x,c.y,c.z,0,2*Math.PI,!0),b.fill(),b.stroke(),b.closePath(),b.restore()},clearHit:function(a){var b=a.context,c=this.getGeometry(a.data[a.args.index],a),d=c.z+a.lineWidth;b.save(),b.clearRect(c.x-d,c.y-d,2*d,2*d),b.restore()}}),Flotr.addType("candles",{options:{show:!1,lineWidth:1,wickLineWidth:1,candleWidth:.6,fill:!0,upFillColor:"#00A8F0",downFillColor:"#CB4B4B",fillOpacity:.5,barcharts:!1},draw:function(a){var b=a.context;b.save(),b.lineJoin="miter",b.lineCap="butt",b.lineWidth=a.wickLineWidth||a.lineWidth,this.plot(a),b.restore()},plot:function(a){var b=a.data,c=a.context,d=a.xScale,e=a.yScale,f=a.candleWidth/2,g=a.shadowSize,h=a.lineWidth,i=a.wickLineWidth,j=i%2/2,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(b.length<1)return;for(y=0;y<b.length;y++){l=b[y],m=l[0],o=l[1],p=l[2],q=l[3],r=l[4],s=d(m-f),t=d(m+f),u=e(q),v=e(p),w=e(Math.min(o,r)),x=e(Math.max(o,r)),k=a[o>r?"downFillColor":"upFillColor"],a.fill&&!a.barcharts&&(c.fillStyle="rgba(0,0,0,0.05)",c.fillRect(s+g,x+g,t-s,w-x),c.save(),c.globalAlpha=a.fillOpacity,c.fillStyle=k,c.fillRect(s,x+h,t-s,w-x),c.restore());if(h||i)m=Math.floor((s+t)/2)+j,c.strokeStyle=k,c.beginPath(),a.barcharts?(c.moveTo(m,Math.floor(v+f)),c.lineTo(m,Math.floor(u+f)),n=Math.floor(o+f)+.5,c.moveTo(Math.floor(s)+j,n),c.lineTo(m,n),n=Math.floor(r+f)+.5,c.moveTo(Math.floor(t)+j,n),c.lineTo(m,n)):(c.strokeRect(s,x+h,t-s,w-x),c.moveTo(m,Math.floor(x+h)),c.lineTo(m,Math.floor(v+h)),c.moveTo(m,Math.floor(w+h)),c.lineTo(m,Math.floor(u+h))),c.closePath(),c.stroke()}},extendXRange:function(a,b,c){a.options.max===null&&(a.max=Math.max(a.datamax+.5,a.max),a.min=Math.min(a.datamin-.5,a.min))}}),Flotr.addType("gantt",{options:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,fillOpacity:.4,centered:!0},draw:function(a){var b=this.ctx,c=a.gantt.barWidth,d=Math.min(a.gantt.lineWidth,c);b.save(),b.translate(this.plotOffset.left,this.plotOffset.top),b.lineJoin="miter",b.lineWidth=d,b.strokeStyle=a.color,b.save(),this.gantt.plotShadows(a,c,0,a.gantt.fill),b.restore();if(a.gantt.fill){var e=a.gantt.fillColor||a.color;b.fillStyle=this.processColor(e,{opacity:a.gantt.fillOpacity})}this.gantt.plot(a,c,0,a.gantt.fill),b.restore()},plot:function(a,b,c,d){var e=a.data;if(e.length<1)return;var f=a.xaxis,g=a.yaxis,h=this.ctx,i;for(i=0;i<e.length;i++){var j=e[i][0],k=e[i][1],l=e[i][2],m=!0,n=!0,o=!0;if(k===null||l===null)continue;var p=k,q=k+l,r=j-(a.gantt.centered?b/2:0),s=j+b-(a.gantt.centered?b/2:0);if(q<f.min||p>f.max||s<g.min||r>g.max)continue;p<f.min&&(p=f.min,m=!1),q>f.max&&(q=f.max,f.lastSerie!=a&&(n=!1)),r<g.min&&(r=g.min),s>g.max&&(s=g.max,g.lastSerie!=a&&(n=!1)),d&&(h.beginPath(),h.moveTo(f.d2p(p),g.d2p(r)+c),h.lineTo(f.d2p(p),g.d2p(s)+c),h.lineTo(f.d2p(q),g.d2p(s)+c),h.lineTo(f.d2p(q),g.d2p(r)+c),h.fill(),h.closePath()),a.gantt.lineWidth&&(m||o||n)&&(h.beginPath(),h.moveTo(f.d2p(p),g.d2p(r)+c),h[m?"lineTo":"moveTo"](f.d2p(p),g.d2p(s)+c),h[n?"lineTo":"moveTo"](f.d2p(q),g.d2p(s)+c),h[o?"lineTo":"moveTo"](f.d2p(q),g.d2p(r)+c),h.stroke(),h.closePath())}},plotShadows:function(a,b,c){var d=a.data;if(d.length<1)return;var e,f,g,h,i=a.xaxis,j=a.yaxis,k=this.ctx,l=this.options.shadowSize;for(e=0;e<d.length;e++){f=d[e][0],g=d[e][1],h=d[e][2];if(g===null||h===null)continue;var m=g,n=g+h,o=f-(a.gantt.centered?b/2:0),p=f+b-(a.gantt.centered?b/2:0);if(n<i.min||m>i.max||p<j.min||o>j.max)continue;m<i.min&&(m=i.min),n>i.max&&(n=i.max),o<j.min&&(o=j.min),p>j.max&&(p=j.max);var q=i.d2p(n)-i.d2p(m)-(i.d2p(n)+l<=this.plotWidth?0:l),r=j.d2p(o)-j.d2p(p)-(j.d2p(o)+l<=this.plotHeight?0:l);k.fillStyle="rgba(0,0,0,0.05)",k.fillRect(Math.min(i.d2p(m)+l,this.plotWidth),Math.min(j.d2p(p)+l,this.plotHeight),q,r)}},extendXRange:function(a){if(a.options.max===null){var b=a.min,c=a.max,d,e,f,g,h,i={},j={},k=null;for(d=0;d<this.series.length;++d){g=this.series[d],h=g.gantt;if(h.show&&g.xaxis==a){for(e=0;e<g.data.length;e++)h.show&&(y=g.data[e][0]+"",i[y]=Math.max(i[y]||0,g.data[e][1]+g.data[e][2]),k=g);for(e in i)c=Math.max(i[e],c)}}a.lastSerie=k,a.max=c,a.min=b}},extendYRange:function(a){if(a.options.max===null){var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d,e,f,g,h={},i={},j=null;for(d=0;d<this.series.length;++d){f=this.series[d],g=f.gantt;if(g.show&&!f.hide&&f.yaxis==a){var k=Number.MIN_VALUE,l=Number.MAX_VALUE;for(e=0;e<f.data.length;e++)k=Math.max(k,f.data[e][0]),l=Math.min(l,f.data[e][0]);g.centered?(b=Math.max(k+.5,b),c=Math.min(l-.5,c)):(b=Math.max(k+1,b),c=Math.min(l,c)),g.barWidth+k>b&&(b=a.max+g.barWidth)}}a.lastSerie=j,a.max=b,a.min=c,a.tickSize=Flotr.getTickSize(a.options.noTicks,c,b,a.options.tickDecimals)}}}),function(){function a(a){return typeof a=="object"&&a.constructor&&(Image?!0:a.constructor===Image)}Flotr.defaultMarkerFormatter=function(a){return Math.round(a.y*100)/100+""},Flotr.addType("markers",{options:{show:!1,lineWidth:1,color:"#000000",fill:!1,fillColor:"#FFFFFF",fillOpacity:.4,stroke:!1,position:"ct",verticalMargin:0,labelFormatter:Flotr.defaultMarkerFormatter,fontSize:Flotr.defaultOptions.fontSize,stacked:!1,stackingType:"b",horizontal:!1},stack:{positive:[],negative:[],values:[]},draw:function(a){function m(a,b){return g=d.negative[a]||0,f=d.positive[a]||0,b>0?(d.positive[a]=g+b,g+b):(d.negative[a]=f+b,f+b)}var b=a.data,c=a.context,d=a.stacked?a.stack:!1,e=a.stackingType,f,g,h,i,j,k,l;c.save(),c.lineJoin="round",c.lineWidth=a.lineWidth,c.strokeStyle="rgba(0,0,0,0.5)",c.fillStyle=a.fillStyle;for(i=0;i<b.length;++i)j=b[i][0],k=b[i][1],d&&(e=="b"?a.horizontal?k=m(k,j):j=m(j,k):e=="a"&&(h=d.values[j]||0,d.values[j]=h+k,k=h+k)),l=a.labelFormatter({x:j,y:k,index:i,data:b}),this.plot(a.xScale(j),a.yScale(k),l,a);c.restore()},plot:function(b,c,d,e){var f=e.context;if(a(d)&&!d.complete)throw"Marker image not loaded.";this._plot(b,c,d,e)},_plot:function(b,c,d,e){var f=e.context,g=2,h=b,i=c,j;a(d)?j={height:d.height,width:d.width}:j=e.text.canvas(d),j.width=Math.floor(j.width+g*2),j.height=Math.floor(j.height+g*2),e.position.indexOf("c")!=-1?h-=j.width/2+g:e.position.indexOf("l")!=-1&&(h-=j.width),e.position.indexOf("m")!=-1?i-=j.height/2+g:e.position.indexOf("t")!=-1?i-=j.height+e.verticalMargin:i+=e.verticalMargin,h=Math.floor(h)+.5,i=Math.floor(i)+.5,e.fill&&f.fillRect(h,i,j.width,j.height),e.stroke&&f.strokeRect(h,i,j.width,j.height),a(d)?f.drawImage(d,h+g,i+g):Flotr.drawText(f,d,h+g,i+g,{textBaseline:"top",textAlign:"left",size:e.fontSize,color:e.color})}})}(),function(){var a=Flotr._;Flotr.defaultPieLabelFormatter=function(a,b){return(100*b/a).toFixed(2)+"%"},Flotr.addType("pie",{options:{show:!1,lineWidth:1,fill:!0,fillColor:null,fillOpacity:.6,explode:6,sizeRatio:.6,startAngle:Math.PI/4,labelFormatter:Flotr.defaultPieLabelFormatter,pie3D:!1,pie3DviewAngle:Math.PI/2*.8,pie3DspliceThickness:20},draw:function(a){var b=a.data,c=a.context,d=c.canvas,e=a.lineWidth,f=a.shadowSize,g=a.sizeRatio,h=a.height,i=a.width,j=a.explode,k=a.color,l=a.fill,m=a.fillStyle,n=Math.min(d.width,d.height)*g/2,o=b[0][1],p=[],q=1,r=Math.PI*2*o/this.total,s=this.startAngle||2*Math.PI*a.startAngle,t=s+r,u=s+r/2,v=a.labelFormatter(this.total,o),w=j+n+4,x=Math.cos(u)*w,y=Math.sin(u)*w,z=x<0?"right":"left",A=y>0?"top":"bottom",B,C,D,x,y;c.save(),c.translate(i/2,h/2),c.scale(1,q),C=Math.cos(u)*j,D=Math.sin(u)*j,f>0&&(this.plotSlice(C+f,D+f,n,s,t,c),l&&(c.fillStyle="rgba(0,0,0,0.1)",c.fill())),this.plotSlice(C,D,n,s,t,c),l&&(c.fillStyle=m,c.fill()),c.lineWidth=e,c.strokeStyle=k,c.stroke(),B={size:a.fontSize*1.2,color:a.fontColor,weight:1.5},v&&(a.htmlText||!a.textEnabled?(divStyle="position:absolute;"+A+":"+(h/2+(A==="top"?y:-y))+"px;",divStyle+=z+":"+(i/2+(z==="right"?-x:x))+"px;",p.push('<div style="',divStyle,'" class="flotr-grid-label">',v,"</div>")):(B.textAlign=z,B.textBaseline=A,Flotr.drawText(c,v,x,y,B)));if(a.htmlText||!a.textEnabled){var E=Flotr.DOM.node('<div style="color:'+a.fontColor+'" class="flotr-labels"></div>');Flotr.DOM.insert(E,p.join("")),Flotr.DOM.insert(a.element,E)}c.restore(),this.startAngle=t,this.slices=this.slices||[],this.slices.push({radius:Math.min(d.width,d.height)*g/2,x:C,y:D,explode:j,start:s,end:t})},plotSlice:function(a,b,c,d,e,f){f.beginPath(),f.moveTo(a,b),f.arc(a,b,c,d,e,!1),f.lineTo(a,b),f.closePath()},hit:function(a){var b=a.data[0],c=a.args,d=a.index,e=c[0],f=c[1],g=this.slices[d],h=e.relX-a.width/2,i=e.relY-a.height/2,j=Math.sqrt(h*h+i*i),k=Math.atan(i/h),l=Math.PI*2,m=g.explode||a.explode,n=g.start%l,o=g.end%l;h<0?k+=Math.PI:h>0&&i<0&&(k+=l),j<g.radius+m&&j>m&&(n>=o&&(k<o||k>n)||k>n&&k<o)&&(f.x=b[0],f.y=b[1],f.sAngle=n,f.eAngle=o,f.index=0,f.seriesIndex=d,f.fraction=b[1]/this.total)},drawHit:function(a){var b=a.context,c=this.slices[a.args.seriesIndex];b.save(),b.translate(a.width/2,a.height/2),this.plotSlice(c.x,c.y,c.radius,c.start,c.end,b),b.stroke(),b.restore()},clearHit:function(a){var b=a.context,c=this.slices[a.args.seriesIndex],d=2*a.lineWidth,e=c.radius+d;b.save(),b.translate(a.width/2,a.height/2),b.clearRect(c.x-e,c.y-e,2*e+d,2*e+d),b.restore()},extendYRange:function(a,b){this.total=(this.total||0)+b[0][1]}})}(),Flotr.addType("points",{options:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#FFFFFF",fillOpacity:.4},draw:function(a){var b=a.context,c=a.lineWidth,d=a.shadowSize;b.save(),d>0&&(b.lineWidth=d/2,b.strokeStyle="rgba(0,0,0,0.1)",this.plot(a,d/2+b.lineWidth/2),b.strokeStyle="rgba(0,0,0,0.2)",this.plot(a,b.lineWidth/2)),b.lineWidth=a.lineWidth,b.strokeStyle=a.color,b.fillStyle=a.fillColor||a.color,this.plot(a),b.restore()},plot:function(a,b){var c=a.data,d=a.context,e=a.xScale,f=a.yScale,g,h,i;for(g=c.length-1;g>-1;--g){i=c[g][1];if(i===null)continue;h=e(c[g][0]),i=f(i);if(h<0||h>a.width||i<0||i>a.height)continue;d.beginPath(),b?d.arc(h,i+b,a.radius,0,Math.PI,!1):(d.arc(h,i,a.radius,0,2*Math.PI,!0),a.fill&&d.fill()),d.stroke(),d.closePath()}}}),Flotr.addType("radar",{options:{show:!1,lineWidth:2,fill:!0,fillOpacity:.4,radiusRatio:.9},draw:function(a){var b=a.context,c=a.shadowSize;b.save(),b.translate(a.width/2,a.height/2),b.lineWidth=a.lineWidth,b.fillStyle="rgba(0,0,0,0.05)",b.strokeStyle="rgba(0,0,0,0.05)",this.plot(a,c/2),b.strokeStyle="rgba(0,0,0,0.1)",this.plot(a,c/4),b.strokeStyle=a.color,b.fillStyle=a.fillStyle,this.plot(a),b.restore()},plot:function(a,b){var c=a.data,d=a.context,e=Math.min(a.height,a.width)*a.radiusRatio/2,f=2*Math.PI/c.length,g=-Math.PI/2,h,i;b=b||0,d.beginPath();for(h=0;h<c.length;++h)i=c[h][1]/this.max,d[h===0?"moveTo":"lineTo"](Math.cos(h*f+g)*e*i+b,Math.sin(h*f+g)*e*i+b);d.closePath(),a.fill&&d.fill(),d.stroke()},extendYRange:function(a,b){this.max=Math.max(a.max,this.max||-Number.MAX_VALUE)}}),Flotr.addType("timeline",{options:{show:!1,lineWidth:1,barWidth:.2,fill:!0,fillColor:null,fillOpacity:.4,centered:!0},draw:function(a){var b=a.context;b.save(),b.lineJoin="miter",b.lineWidth=a.lineWidth,b.strokeStyle=a.color,b.fillStyle=a.fillStyle,this.plot(a),b.restore()},plot:function(a){var b=a.data,c=a.context,d=a.xScale,e=a.yScale,f=a.barWidth,g=a.lineWidth,h;Flotr._.each(b,function(a){var b=a[0],h=a[1],i=a[2],j=f,k=Math.ceil(d(b)),l=Math.ceil(d(b+i))-k,m=Math.round(e(h)),n=Math.round(e(h-j))-m,o=k-g/2,p=Math.round(m-n/2)-g/2;c.strokeRect(o,p,l,n),c.fillRect(o,p,l,n)})},extendRange:function(a){var b=a.data,c=a.xaxis,d=a.yaxis,e=a.timeline.barWidth;c.options.min===null&&(c.min=c.datamin-e/2);if(c.options.max===null){var f=c.max;Flotr._.each(b,function(a){f=Math.max(f,a[0]+a[2])},this),c.max=f+e/2}d.options.min===null&&(d.min=d.datamin-e),d.options.min===null&&(d.max=d.datamax+e)}}),function(){var a=Flotr.DOM;Flotr.addPlugin("crosshair",{options:{mode:null,color:"#FF0000",hideCursor:!0},callbacks:{"flotr:mousemove":function(a,b){this.options.crosshair.mode&&(this.crosshair.clearCrosshair(),this.crosshair.drawCrosshair(b))}},drawCrosshair:function(b){var c=this.octx,d=this.options.crosshair,e=this.plotOffset,f=e.left+b.relX+.5,g=e.top+b.relY+.5;if(b.relX<0||b.relY<0||b.relX>this.plotWidth||b.relY>this.plotHeight){this.el.style.cursor=null,a.removeClass(this.el,"flotr-crosshair");return}d.hideCursor&&(this.el.style.cursor="none",a.addClass(this.el,"flotr-crosshair")),c.save(),c.strokeStyle=d.color,c.lineWidth=1,c.beginPath(),d.mode.indexOf("x")!=-1&&(c.moveTo(f,e.top),c.lineTo(f,e.top+this.plotHeight)),d.mode.indexOf("y")!=-1&&(c.moveTo(e.left,g),c.lineTo(e.left+this.plotWidth,g)),c.stroke(),c.restore()},clearCrosshair:function(){var a=this.plotOffset,b=this.lastMousePos,c=this.octx;b&&(c.clearRect(b.relX+a.left,a.top,1,this.plotHeight+1),c.clearRect(a.left,b.relY+a.top,this.plotWidth+1,1))}})}(),function(){function c(a,b,c,d){var e="image/"+a,f=b.toDataURL(e),g=new Image;return g.src=f,g}var a=Flotr.DOM,b=Flotr._;Flotr.addPlugin("download",{saveImage:function(d,e,f,g){var h=null;if(Flotr.isIE&&Flotr.isIE<9)return h="<html><body>"+this.canvas.firstChild.innerHTML+"</body></html>",window.open().document.write(h);if(d!=="jpeg"&&d!=="png")return;h=c(d,this.canvas,e,f);if(!b.isElement(h)||!g)return window.open(h.src);this.download.restoreCanvas(),a.hide(this.canvas),a.hide(this.overlay),a.setStyles({position:"absolute"}),a.insert(this.el,h),this.saveImageElement=h},restoreCanvas:function(){a.show(this.canvas),a.show(this.overlay),this.saveImageElement&&this.el.removeChild(this.saveImageElement),this.saveImageElement=null}})}(),function(){var a=Flotr.EventAdapter,b=Flotr._;Flotr.addPlugin("graphGrid",{callbacks:{"flotr:beforedraw":function(){this.graphGrid.drawGrid()},"flotr:afterdraw":function(){this.graphGrid.drawOutline()}},drawGrid:function(){function p(a){for(n=0;n<a.length;++n){var b=a[n].v/l.max;for(o=0;o<=u;++o)c[o===0?"moveTo":"lineTo"](Math.cos(o*v+w)*t*b,Math.sin(o*v+w)*t*b)}}function q(a,d){b.each(b.pluck(a,"v"),function(a){if(a<=l.min||a>=l.max||(a==l.min||a==l.max)&&e.outlineWidth)return;d(Math.floor(l.d2p(a))+c.lineWidth/2)})}function r(a){c.moveTo(a,0),c.lineTo(a,j)}function s(a){c.moveTo(0,a),c.lineTo(k,a)}var c=this.ctx,d=this.options,e=d.grid,f=e.verticalLines,g=e.horizontalLines,h=e.minorVerticalLines,i=e.minorHorizontalLines,j=this.plotHeight,k=this.plotWidth,l,m,n,o;(f||h||g||i)&&a.fire(this.el,"flotr:beforegrid",[this.axes.x,this.axes.y,d,this]),c.save(),c.lineWidth=1,c.strokeStyle=e.tickColor;if(e.circular){c.translate(this.plotOffset.left+k/2,this.plotOffset.top+j/2);var t=Math.min(j,k)*d.radar.radiusRatio/2,u=this.axes.x.ticks.length,v=2*(Math.PI/u),w=-Math.PI/2;c.beginPath(),l=this.axes.y,g&&p(l.ticks),i&&p(l.minorTicks),f&&b.times(u,function(a){c.moveTo(0,0),c.lineTo(Math.cos(a*v+w)*t,Math.sin(a*v+w)*t)}),c.stroke()}else c.translate(this.plotOffset.left,this.plotOffset.top),e.backgroundColor&&(c.fillStyle=this.processColor(e.backgroundColor,{x1:0,y1:0,x2:k,y2:j}),c.fillRect(0,0,k,j)),c.beginPath(),l=this.axes.x,f&&q(l.ticks,r),h&&q(l.minorTicks,r),l=this.axes.y,g&&q(l.ticks,s),i&&q(l.minorTicks,s),c.stroke();c.restore(),(f||h||g||i)&&a.fire(this.el,"flotr:aftergrid",[this.axes.x,this.axes.y,d,this])},drawOutline:function(){var a=this,b=a.options,c=b.grid,d=c.outline,e=a.ctx,f=c.backgroundImage,g=a.plotOffset,h=g.left,j=g.top,k=a.plotWidth,l=a.plotHeight,m,n,o,p,q,r;if(!c.outlineWidth)return;e.save();if(c.circular){e.translate(h+k/2,j+l/2);var s=Math.min(l,k)*b.radar.radiusRatio/2,t=this.axes.x.ticks.length,u=2*(Math.PI/t),v=-Math.PI/2;e.beginPath(),e.lineWidth=c.outlineWidth,e.strokeStyle=c.color,e.lineJoin="round";for(i=0;i<=t;++i)e[i===0?"moveTo":"lineTo"](Math.cos(i*u+v)*s,Math.sin(i*u+v)*s);e.stroke()}else{e.translate(h,j);var w=c.outlineWidth,x=.5-w+(w+1)%2/2,y="lineTo",z="moveTo";e.lineWidth=w,e.strokeStyle=c.color,e.lineJoin="miter",e.beginPath(),e.moveTo(x,x),k-=w/2%1,l+=w/2,e[d.indexOf("n")!==-1?y:z](k,x),e[d.indexOf("e")!==-1?y:z](k,l),e[d.indexOf("s")!==-1?y:z](x,l),e[d.indexOf("w")!==-1?y:z](x,x),e.stroke(),e.closePath()}e.restore(),f&&(o=f.src||f,p=(parseInt(f.left,10)||0)+g.left,q=(parseInt(f.top,10)||0)+g.top,n=new Image,n.onload=function(){e.save(),f.alpha&&(e.globalAlpha=f.alpha),e.globalCompositeOperation="destination-over",e.drawImage(n,0,0,n.width,n.height,p,q,k,l),e.restore()},n.src=o)}})}(),function(){var a=Flotr.DOM,b=Flotr._,c=Flotr,d="opacity:0.7;background-color:#000;color:#fff;display:none;position:absolute;padding:2px 8px;-moz-border-radius:4px;border-radius:4px;white-space:nowrap;";Flotr.addPlugin("hit",{callbacks:{"flotr:mousemove":function(a,b){this.hit.track(b)},"flotr:click":function(a){this.hit.track(a)},"flotr:mouseout":function(){this.hit.clearHit()}},track:function(a){(this.options.mouse.track||b.any(this.series,function(a){return a.mouse&&a.mouse.track}))&&this.hit.hit(a)},executeOnType:function(a,d,e){function h(a,h){b.each(b.keys(c.graphTypes),function(b){a[b]&&a[b].show&&this[b][d]&&(g=this.getOptions(a,b),g.fill=!!a.mouse.fillColor,g.fillStyle=this.processColor(a.mouse.fillColor||"#ffffff",{opacity:a.mouse.fillOpacity}),g.color=a.mouse.lineColor,g.context=this.octx,g.index=h,e&&(g.args=e),this[b][d].call(this[b],g),f=!0)},this)}var f=!1,g;return b.isArray(a)||(a=[a]),b.each(a,h,this),f},drawHit:function(a){var b=this.octx,c=a.series;if(c.mouse.lineColor){b.save(),b.lineWidth=c.points?c.points.lineWidth:1,b.strokeStyle=c.mouse.lineColor,b.fillStyle=this.processColor(c.mouse.fillColor||"#ffffff",{opacity:c.mouse.fillOpacity}),b.translate(this.plotOffset.left,this.plotOffset.top);if(!this.hit.executeOnType(c,"drawHit",a)){var d=a.xaxis,e=a.yaxis;b.beginPath(),b.arc(d.d2p(a.x),e.d2p(a.y),c.points.radius||c.mouse.radius,0,2*Math.PI,!0),b.fill(),b.stroke(),b.closePath()}b.restore(),this.clip(b)}this.prevHit=a},clearHit:function(){var b=this.prevHit,c=this.octx,d=this.plotOffset;c.save(),c.translate(d.left,d.top);if(b){if(!this.hit.executeOnType(b.series,"clearHit",this.prevHit)){var e=b.series,f=e.points?e.points.lineWidth:1;offset=(e.points.radius||e.mouse.radius)+f,c.clearRect(b.xaxis.d2p(b.x)-offset,b.yaxis.d2p(b.y)-offset,offset*2,offset*2)}a.hide(this.mouseTrack),this.prevHit=null}c.restore()},hit:function(a){var c=this.options,d=this.prevHit,e,f,g,h,i,j,k,l;if(this.series.length===0)return;n={relX:a.relX,relY:a.relY,absX:a.absX,absY:a.absY};if(c.mouse.trackY&&!c.mouse.trackAll&&this.hit.executeOnType(this.series,"hit",[a,n]))b.isUndefined(n.seriesIndex)||(i=this.series[n.seriesIndex],n.series=i,n.mouse=i.mouse,n.xaxis=i.xaxis,n.yaxis=i.yaxis);else{e=this.hit.closest(a);if(e){e=c.mouse.trackY?e.point:e.x,h=e.seriesIndex,i=this.series[h],k=i.xaxis,l=i.yaxis,f=2*i.mouse.sensibility;if(c.mouse.trackAll||e.distanceX<f/k.scale&&(!c.mouse.trackY||e.distanceY<f/l.scale))n.series=i,n.xaxis=i.xaxis,n.yaxis=i.yaxis,n.mouse=i.mouse,n.x=e.x,n.y=e.y,n.dist=e.distance,n.index=e.dataIndex,n.seriesIndex=h}}if(!d||d.index!==n.index||d.seriesIndex!==n.seriesIndex)this.hit.clearHit(),n.series&&n.mouse&&n.mouse.track&&(this.hit.drawMouseTrack(n),this.hit.drawHit(n),Flotr.EventAdapter.fire(this.el,"flotr:hit",[n,this]))},closest:function(a){function v(a){a.distance=m,a.distanceX=n,a.distanceY=o,a.seriesIndex=t,a.dataIndex=u,a.x=r,a.y=s}var b=this.series,c=this.options,d=a.relX,e=a.relY,f=Number.MAX_VALUE,g=Number.MAX_VALUE,h={},i={},j=!1,k,l,m,n,o,p,q,r,s,t,u;for(t=0;t<b.length;t++){k=b[t],l=k.data,p=k.xaxis.p2d(d),q=k.yaxis.p2d(e),l.length&&(j=!0);for(u=l.length;u--;){r=l[u][0],s=l[u][1];if(r===null||s===null)continue;if(r<k.xaxis.min||r>k.xaxis.max)continue;n=Math.abs(r-p),o=Math.abs(s-q),m=n*n+o*o,m<f&&(f=m,v(h)),n<g&&(g=n,v(i))}}return j?{point:h,x:i}:!1},drawMouseTrack:function(b){var c="",e=b.series,f=b.mouse.position,g=b.mouse.margin,h=d,i=this.mouseTrack,j=this.plotOffset,k=j.left,l=j.right,m=j.bottom,n=j.top,o=b.mouse.trackDecimals,p=this.options;i||(i=a.node('<div class="flotr-mouse-value"></div>'),this.mouseTrack=i,a.insert(this.el,i));if(!b.mouse.relative)f.charAt(0)=="n"?c+="top:"+(g+n)+"px;bottom:auto;":f.charAt(0)=="s"&&(c+="bottom:"+(g+m)+"px;top:auto;"),f.charAt(1)=="e"?c+="right:"+(g+l)+"px;left:auto;":f.charAt(1)=="w"&&(c+="left:"+(g+k)+"px;right:auto;");else if(e.bars.show)c+="bottom:"+(g-n-b.yaxis.d2p(b.y/2)+this.canvasHeight)+"px;top:auto;",c+="left:"+(g+k+b.xaxis.d2p(b.x-p.bars.barWidth/2))+"px;right:auto;";else if(e.pie.show){var q={x:this.plotWidth/2,y:this.plotHeight/2},r=Math.min(this.canvasWidth,this.canvasHeight)*e.pie.sizeRatio/2,s=b.sAngle<b.eAngle?(b.sAngle+b.eAngle)/2:(b.sAngle+b.eAngle+2*Math.PI)/2;c+="bottom:"+(g-n-q.y-Math.sin(s)*r/2+this.canvasHeight)+"px;top:auto;",c+="left:"+(g+k+q.x+Math.cos(s)*r/2)+"px;right:auto;"}else f.charAt(0)=="n"?c+="bottom:"+(g-n-b.yaxis.d2p(b.y)+this.canvasHeight)+"px;top:auto;":f.charAt(0)=="s"&&(c+="top:"+(g+n+b.yaxis.d2p(b.y))+"px;bottom:auto;"),f.charAt(1)=="e"?c+="left:"+(g+k+b.xaxis.d2p(b.x))+"px;right:auto;":f.charAt(1)=="w"&&(c+="right:"+(g-k-b.xaxis.d2p(b.x)+this.canvasWidth)+"px;left:auto;");h+=c,i.style.cssText=h;if(!o||o<0)o=0;i.innerHTML=b.mouse.trackFormatter({x:b.x.toFixed(o),y:b.y.toFixed(o),series:b.series,index:b.index,nearest:b,fraction:b.fraction}),a.show(i)}})}(),function(){function a(a,b){return a.which?a.which===1:a.button===0||a.button===1}function b(a,b){return Math.min(Math.max(0,a),b.plotWidth-1)}function c(a,b){return Math.min(Math.max(0,a),b.plotHeight)}var d=Flotr.DOM,e=Flotr.EventAdapter,f=Flotr._;Flotr.addPlugin("selection",{options:{pinchOnly:null,mode:null,color:"#B6D9FF",fps:20},callbacks:{"flotr:mouseup":function(a){var b=this.options.selection,c=this.selection,d=this.getEventPosition(a);if(!b||!b.mode)return;c.interval&&clearInterval(c.interval),this.multitouches?c.updateSelection():b.pinchOnly||c.setSelectionPos(c.selection.second,d),c.clearSelection(),c.selecting&&c.selectionIsSane()&&(c.drawSelection(),c.fireSelectEvent(),this.ignoreClick=!0)},"flotr:mousedown":function(b){var c=this.options.selection,d=this.selection,e=this.getEventPosition(b);if(!c||!c.mode)return;if(!c.mode||!a(b)&&f.isUndefined(b.touches))return;c.pinchOnly||d.setSelectionPos(d.selection.first,e),d.interval&&clearInterval(d.interval),this.lastMousePos.pageX=null,d.selecting=!1,d.interval=setInterval(f.bind(d.updateSelection,this),1e3/c.fps)},"flotr:destroy":function(a){clearInterval(this.selection.interval)}},getArea:function(){var a=this.selection.selection,b=a.first,c=a.second;return{x1:Math.min(b.x,c.x),x2:Math.max(b.x,c.x),y1:Math.min(b.y,c.y),y2:Math.max(b.y,c.y)}},selection:{first:{x:-1,y:-1},second:{x:-1,y:-1}},prevSelection:null,interval:null,fireSelectEvent:function(a){var b=this.axes,c=this.selection.selection,d,f,g,h;a=a||"select",d=b.x.p2d(c.first.x),f=b.x.p2d(c.second.x),g=b.y.p2d(c.first.y),h=b.y.p2d(c.second.y),e.fire(this.el,"flotr:"+a,[{x1:Math.min(d,f),y1:Math.min(g,h),x2:Math.max(d,f),y2:Math.max(g,h),xfirst:d,xsecond:f,yfirst:g,ysecond:h},this])},setSelection:function(a,d){var e=this.options,f=this.axes.x,g=this.axes.y,h=g.scale,i=f.scale,j=e.selection.mode.indexOf("x")!=-1,k=e.selection.mode.indexOf("y")!=-1,l=this.selection.selection;this.selection.clearSelection(),l.first.y=c(j&&!k?0:(g.max-a.y1)*h,this),l.second.y=c(j&&!k?this.plotHeight-1:(g.max-a.y2)*h,this),l.first.x=b(k&&!j?0:a.x1,this),l.second.x=b(k&&!j?this.plotWidth:a.x2,this),this.selection.drawSelection(),d||this.selection.fireSelectEvent()},setSelectionPos:function(a,d){var e=this.options.selection.mode,f=this.selection.selection;e.indexOf("x")==-1?a.x=a==f.first?0:this.plotWidth:a.x=b(d.relX,this),e.indexOf("y")==-1?a.y=a==f.first?0:this.plotHeight-1:a.y=c(d.relY,this)},drawSelection:function(){this.selection.fireSelectEvent("selecting");var a=this.selection.selection,b=this.octx,c=this.options,d=this.plotOffset,e=this.selection.prevSelection;if(e&&a.first.x==e.first.x&&a.first.y==e.first.y&&a.second.x==e.second.x&&a.second.y==e.second.y)return;b.save(),b.strokeStyle=this.processColor(c.selection.color,{opacity:.8}),b.lineWidth=1,b.lineJoin="miter",b.fillStyle=this.processColor(c.selection.color,{opacity:.4}),this.selection.prevSelection={first:{x:a.first.x,y:a.first.y},second:{x:a.second.x,y:a.second.y}};var f=Math.min(a.first.x,a.second.x),g=Math.min(a.first.y,a.second.y),h=Math.abs(a.second.x-a.first.x),i=Math.abs(a.second.y-a.first.y);b.fillRect(f+d.left+.5,g+d.top+.5,h,i),b.strokeRect(f+d.left+.5,g+d.top+.5,h,i),b.restore()},updateSelection:function(){if(!this.lastMousePos.pageX)return;this.selection.selecting=!0;if(this.multitouches)this.selection.setSelectionPos(this.selection.selection.first,this.getEventPosition(this.multitouches[0])),this.selection.setSelectionPos(this.selection.selection.second,this.getEventPosition(this.multitouches[1]));else{if(this.options.selection.pinchOnly)return;this.selection.setSelectionPos(this.selection.selection.second,this.lastMousePos)}this.selection.clearSelection(),this.selection.selectionIsSane()&&this.selection.drawSelection()},clearSelection:function(){if(!this.selection.prevSelection)return;var a=this.selection.prevSelection,b=1,c=this.plotOffset,d=Math.min(a.first.x,a.second.x),e=Math.min(a.first.y,a.second.y),f=Math.abs(a.second.x-a.first.x),g=Math.abs(a.second.y-a.first.y);this.octx.clearRect(d+c.left-b+.5,e+c.top-b,f+2*b+.5,g+2*b+.5),this.selection.prevSelection=null},selectionIsSane:function(){var a=this.selection.selection;return Math.abs(a.second.x-a.first.x)>=5||Math.abs(a.second.y-a.first.y)>=5}})}(),function(){var a=Flotr.DOM;Flotr.addPlugin("labels",{callbacks:{"flotr:afterdraw":function(){this.labels.draw()}},draw:function(){function s(a,b,d){var e=d?b.minorTicks:b.ticks,f=b.orientation===1,h=b.n===1,k,m;k={color:b.options.color||o.grid.color,angle:Flotr.toRad(b.options.labelsAngle),textBaseline:"middle"};for(l=0;l<e.length&&(d?b.options.showMinorLabels:b.options.showLabels);++l){c=e[l],c.label+="";if(!c.label||!c.label.length)continue;x=Math.cos(l*i+j)*g,y=Math.sin(l*i+j)*g,k.textAlign=f?Math.abs(x)<.1?"center":x<0?"right":"left":"left",Flotr.drawText(p,c.label,f?x:3,f?y:-(b.ticks[l].v/b.max)*(g-o.fontSize),k)}}function t(a,b,d,e){function j(a){return a.options.showLabels&&a.used}function k(a,b,c,d){return a.plotOffset.left+(b?d:c?-o.grid.labelMargin:o.grid.labelMargin+a.plotWidth)}function m(a,b,c,d){return a.plotOffset.top+(b?o.grid.labelMargin:d)+(b&&c?a.plotHeight:0)}var f=b.orientation===1,g=b.n===1,h,i;h={color:b.options.color||o.grid.color,textAlign:d,textBaseline:e,angle:Flotr.toRad(b.options.labelsAngle)},h=Flotr.getBestTextAlign(h.angle,h);for(l=0;l<b.ticks.length&&j(b);++l){c=b.ticks[l];if(!c.label||!c.label.length)continue;i=b.d2p(c.v);if(i<0||i>(f?a.plotWidth:a.plotHeight))continue;Flotr.drawText(p,c.label,k(a,f,g,i),m(a,f,g,i),h),!f&&!g&&(p.save(),p.strokeStyle=h.color,p.beginPath(),p.moveTo(a.plotOffset.left+a.plotWidth-8,a.plotOffset.top+b.d2p(c.v)),p.lineTo(a.plotOffset.left+a.plotWidth,a.plotOffset.top+b.d2p(c.v)),p.stroke(),p.restore())}}function u(a,b){var d=b.orientation===1,e=b.n===1,g="",h,i,j,k=a.plotOffset;!d&&!e&&(p.save(),p.strokeStyle=b.options.color||o.grid.color,p.beginPath());if(b.options.showLabels&&(e?!0:b.used))for(l=0;l<b.ticks.length;++l){c=b.ticks[l];if(!c.label||!c.label.length||(d?k.left:k.top)+b.d2p(c.v)<0||(d?k.left:k.top)+b.d2p(c.v)>(d?a.canvasWidth:a.canvasHeight))continue;j=k.top+(d?(e?1:-1)*(a.plotHeight+o.grid.labelMargin):b.d2p(c.v)-b.maxLabel.height/2),h=d?k.left+b.d2p(c.v)-f/2:0,g="",l===0?g=" first":l===b.ticks.length-1&&(g=" last"),g+=d?" flotr-grid-label-x":" flotr-grid-label-y",m+=['<div style="position:absolute; text-align:'+(d?"center":"right")+"; ","top:"+j+"px; ",(!d&&!e?"right:":"left:")+h+"px; ","width:"+(d?f:(e?k.left:k.right)-o.grid.labelMargin)+"px; ",b.options.color?"color:"+b.options.color+"; ":" ",'" class="flotr-grid-label'+g+'">'+c.label+"</div>"].join(" "),!d&&!e&&(p.moveTo(k.left+a.plotWidth-8,k.top+b.d2p(c.v)),p.lineTo(k.left+a.plotWidth,k.top+b.d2p(c.v)))}}var b,c,d,e,f,g,h,i,j,k,l,m="",n=0,o=this.options,p=this.ctx,q=this.axes,r={size:o.fontSize};for(l=0;l<q.x.ticks.length;++l)q.x.ticks[l].label&&++n;f=this.plotWidth/n,o.grid.circular&&(p.save(),p.translate(this.plotOffset.left+this.plotWidth/2,this.plotOffset.top+this.plotHeight/2),g=this.plotHeight*o.radar.radiusRatio/2+o.fontSize,h=this.axes.x.ticks.length,i=2*(Math.PI/h),j=-Math.PI/2,s(this,q.x,!1),s(this,q.x,!0),s(this,q.y,!1),s(this,q.y,!0),p.restore()),!o.HtmlText&&this.textEnabled?(t(this,q.x,"center","top"),t(this,q.x2,"center","bottom"),t(this,q.y,"right","middle"),t(this,q.y2,"left","middle")):(q.x.options.showLabels||q.x2.options.showLabels||q.y.options.showLabels||q.y2.options.showLabels)&&!o.grid.circular&&(m="",u(this,q.x),u(this,q.x2),u(this,q.y),u(this,q.y2),p.stroke(),p.restore(),k=a.create("div"),a.setStyles(k,{fontSize:"smaller",color:o.grid.color}),k.className="flotr-labels",a.insert(this.el,k),a.insert(k,m))}})}(),function(){var a=Flotr.DOM,b=Flotr._;Flotr.addPlugin("legend",{options:{show:!0,noColumns:1,labelFormatter:function(a){return a},labelBoxBorderColor:"#CCCCCC",labelBoxWidth:14,labelBoxHeight:10,labelBoxMargin:5,labelBoxOpacity:.4,container:null,position:"nw",margin:5,backgroundColor:null,backgroundOpacity:.85},callbacks:{"flotr:afterinit":function(){this.legend.insertLegend()}},insertLegend:function(){if(!this.options.legend.show)return;var c=this.series,d=this.plotOffset,e=this.options,f=e.legend,g=[],h=!1,i=this.ctx,j=b.filter(c,function(a){return a.label&&!a.hide}).length,k=f.position,l=f.margin,m,n,o;if(j)if(!e.HtmlText&&this.textEnabled&&!f.container){var p={size:e.fontSize*1.1,color:e.grid.color},q=f.labelBoxWidth,r=f.labelBoxHeight,s=f.labelBoxMargin,t=d.left+l,u=d.top+l,v=0;for(m=c.length-1;m>-1;--m){if(!c[m].label||c[m].hide)continue;n=f.labelFormatter(c[m].label),v=Math.max(v,this._text.measureText(n,p).width)}var w=Math.round(q+s*3+v),x=Math.round(j*(s+r)+s);k.charAt(0)=="s"&&(u=d.top+this.plotHeight-(l+x)),k.charAt(1)=="e"&&(t=d.left+this.plotWidth-(l+w)),o=this.processColor(f.backgroundColor||"rgb(240,240,240)",{opacity:f.backgroundOpacity||.1}),i.fillStyle=o,i.fillRect(t,u,w,x),i.strokeStyle=f.labelBoxBorderColor,i.strokeRect(Flotr.toPixel(t),Flotr.toPixel(u),w,x);var y=t+s,z=u+s;for(m=0;m<c.length;m++){if(!c[m].label||c[m].hide)continue;n=f.labelFormatter(c[m].label),i.fillStyle=c[m].color,i.fillRect(y,z,q-1,r-1),i.strokeStyle=f.labelBoxBorderColor,i.lineWidth=1,i.strokeRect(Math.ceil(y)-1.5,Math.ceil(z)-1.5,q+2,r+2),Flotr.drawText(i,n,y+q+s,z+r,p),z+=r+s}}else{for(m=0;m<c.length;++m){if(!c[m].label||c[m].hide)continue;m%f.noColumns===0&&(g.push(h?"</tr><tr>":"<tr>"),h=!0);var A=c[m],B=f.labelBoxWidth,C=f.labelBoxHeight,E=A.bars?A.bars.fillOpacity:f.labelBoxOpacity,F="opacity:"+E+";filter:alpha(opacity="+E*100+");";n=f.labelFormatter(A.label),o="background-color:"+(A.bars&&A.bars.show&&A.bars.fillColor&&A.bars.fill?A.bars.fillColor:A.color)+";",g.push('<td class="flotr-legend-color-box">','<div style="border:1px solid ',f.labelBoxBorderColor,';padding:1px">','<div style="width:',B-1,"px;height:",C-1,"px;border:1px solid ",c[m].color,'">','<div style="width:',B,"px;height:",C,"px;","opacity:.4;",o,'"></div>',"</div>","</div>","</td>",'<td class="flotr-legend-label">',n,"</td>")}h&&g.push("</tr>");if(g.length>0){var G='<table style="font-size:smaller;color:'+e.grid.color+'">'+g.join("")+"</table>";if(f.container)a.insert(f.container,G);else{var H={position:"absolute","z-index":2};k.charAt(0)=="n"?(H.top=l+d.top+"px",H.bottom="auto"):k.charAt(0)=="s"&&(H.bottom=l+d.bottom+"px",H.top="auto"),k.charAt(1)=="e"?(H.right=l+d.right+"px",H.left="auto"):k.charAt(1)=="w"&&(H.left=l+d.left+"px",H.right="auto");var I=a.create("div"),J;I.className="flotr-legend",a.setStyles(I,H),a.insert(I,G),a.insert(this.el,I);if(!f.backgroundOpacity)return;var K=f.backgroundColor||e.grid.backgroundColor||"#ffffff";b.extend(H,a.size(I),{backgroundColor:K,"z-index":1}),H.width+="px",H.height+="px",I=a.create("div"),I.className="flotr-legend-bg",a.setStyles(I,H),a.opacity(I,f.backgroundOpacity),a.insert(I," "),a.insert(this.el,I)}}}}})}(),function(){function a(a){if(this.options.spreadsheet.tickFormatter)return this.options.spreadsheet.tickFormatter(a);var b=c.find(this.axes.x.ticks,function(b){return b.v==a});return b?b.label:a}var b=Flotr.DOM,c=Flotr._;Flotr.addPlugin("spreadsheet",{options:{show:!1,tabGraphLabel:"Graph",tabDataLabel:"Data",toolbarDownload:"Download CSV",toolbarSelectAll:"Select all",csvFileSeparator:",",decimalSeparator:".",tickFormatter:null,initialTab:"graph"},callbacks:{"flotr:afterconstruct":function(){if(!this.options.spreadsheet.show)return;var a=this.spreadsheet,c=b.node('<div class="flotr-tabs-group" style="position:absolute;left:0px;width:'+this.canvasWidth+'px"></div>'),d=b.node('<div style="float:left" class="flotr-tab selected">'+this.options.spreadsheet.tabGraphLabel+"</div>"),e=b.node('<div style="float:left" class="flotr-tab">'+this.options.spreadsheet.tabDataLabel+"</div>"),f;a.tabsContainer=c,a.tabs={graph:d,data:e},b.insert(c,d),b.insert(c,e),b.insert(this.el,c),f=b.size(e).height+2,this.plotOffset.bottom+=f,b.setStyles(c,{top:this.canvasHeight-f+"px"}),this.observe(d,"click",function(){a.showTab("graph")}).observe(e,"click",function(){a.showTab("data")}),this.options.spreadsheet.initialTab!=="graph"&&a.showTab(this.options.spreadsheet.initialTab)}},loadDataGrid:function(){if(this.seriesData)return this.seriesData;var a=this.series,b={};return c.each(a,function(a,d){c.each(a.data,function(a){var c=a[0],e=a[1],f=b[c];if(f)f[d+1]=e;else{var g=[];g[0]=c,g[d+1]=e,b[c]=g}})}),this.seriesData=c.sortBy(b,function(a,b){return parseInt(b,10)}),this.seriesData},constructDataGrid:function(){if(this.spreadsheet.datagrid)return this.spreadsheet.datagrid;var d=this.series,e=this.spreadsheet.loadDataGrid(),f=["<colgroup><col />"],g,h,i,j=['<table class="flotr-datagrid"><tr class="first-row">'];j.push("<th>&nbsp;</th>"),c.each(d,function(a,b){j.push('<th scope="col">'+(a.label||String.fromCharCode(65+b))+"</th>"),f.push("<col />")}),j.push("</tr>"),c.each(e,function(b){j.push("<tr>"),c.times(d.length+1,function(d){var e="td",f=b[d],g=c.isUndefined(f)?"":Math.round(f*1e5)/1e5;if(d===0){e="th";var h=a.call(this,g);h&&(g=h)}j.push("<"+e+(e=="th"?' scope="row"':"")+">"+g+"</"+e+">")},this),j.push("</tr>")},this),f.push("</colgroup>"),i=b.node(j.join("")),g=b.node('<button type="button" class="flotr-datagrid-toolbar-button">'+this.options.spreadsheet.toolbarDownload+"</button>"),h=b.node('<button type="button" class="flotr-datagrid-toolbar-button">'+this.options.spreadsheet.toolbarSelectAll+"</button>"),this.observe(g,"click",c.bind(this.spreadsheet.downloadCSV,this)).observe(h,"click",c.bind(this.spreadsheet.selectAllData,this));var k=b.node('<div class="flotr-datagrid-toolbar"></div>');b.insert(k,g),b.insert(k,h);var l=this.canvasHeight-b.size(this.spreadsheet.tabsContainer).height-2,m=b.node('<div class="flotr-datagrid-container" style="position:absolute;left:0px;top:0px;width:'+this.canvasWidth+"px;height:"+l+'px;overflow:auto;z-index:10"></div>');return b.insert(m,k),b.insert(m,i),b.insert(this.el,m),this.spreadsheet.datagrid=i,this.spreadsheet.container=m,i},showTab:function(a){if(this.spreadsheet.activeTab===a)return;switch(a){case"graph":b.hide(this.spreadsheet.container),b.removeClass(this.spreadsheet.tabs.data,"selected"),b.addClass(this.spreadsheet.tabs.graph,"selected");break;case"data":this.spreadsheet.datagrid||this.spreadsheet.constructDataGrid(),b.show(this.spreadsheet.container),b.addClass(this.spreadsheet.tabs.data,"selected"),b.removeClass(this.spreadsheet.tabs.graph,"selected");break;default:throw"Illegal tab name: "+a}this.spreadsheet.activeTab=a},selectAllData:function(){if(this.spreadsheet.tabs){var a,b,c,d,e=this.spreadsheet.constructDataGrid();return this.spreadsheet.showTab("data"),setTimeout(function(){(c=e.ownerDocument)&&(d=c.defaultView)&&d.getSelection&&c.createRange&&(a=window.getSelection())&&a.removeAllRanges?(b=c.createRange(),b.selectNode(e),a.removeAllRanges(),a.addRange(b)):document.body&&document.body.createTextRange&&(b=document.body.createTextRange())&&(b.moveToElementText(e),b.select())},0),!0}return!1},downloadCSV:function(){var b="",d=this.series,e=this.options,f=this.spreadsheet.loadDataGrid(),g=encodeURIComponent(e.spreadsheet.csvFileSeparator);if(e.spreadsheet.decimalSeparator===e.spreadsheet.csvFileSeparator)throw"The decimal separator is the same as the column separator ("+e.spreadsheet.decimalSeparator+")";c.each(d,function(a,c){b+=g+'"'+(a.label||String.fromCharCode(65+c)).replace(/\"/g,'\\"')+'"'}),b+="%0D%0A",b+=c.reduce(f,function(b,c){var d=a.call(this,c[0])||"";d='"'+(d+"").replace(/\"/g,'\\"')+'"';var f=c.slice(1).join(g);return e.spreadsheet.decimalSeparator!=="."&&(f=f.replace(/\./g,e.spreadsheet.decimalSeparator)),b+d+g+f+"%0D%0A"},"",this),Flotr.isIE&&Flotr.isIE<9?(b=b.replace(new RegExp(g,"g"),decodeURIComponent(g)).replace(/%0A/g,"\n").replace(/%0D/g,"\r"),window.open().document.write(b)):window.open("data:text/csv,"+b)}})}(),function(){var a=Flotr.DOM;Flotr.addPlugin("titles",{callbacks:{"flotr:afterdraw":function(){this.titles.drawTitles()}},drawTitles:function(){var b,c=this.options,d=c.grid.labelMargin,e=this.ctx,f=this.axes;if(!c.HtmlText&&this.textEnabled){var g={size:c.fontSize,color:c.grid.color,textAlign:"center"};c.subtitle&&Flotr.drawText(e,c.subtitle,this.plotOffset.left+this.plotWidth/2,this.titleHeight+this.subtitleHeight-2,g),g.weight=1.5,g.size*=1.5,c.title&&Flotr.drawText(e,c.title,this.plotOffset.left+this.plotWidth/2,this.titleHeight-2,g),g.weight=1.8,g.size*=.8,f.x.options.title&&f.x.used&&(g.textAlign=f.x.options.titleAlign||"center",g.textBaseline="top",g.angle=Flotr.toRad(f.x.options.titleAngle),g=Flotr.getBestTextAlign(g.angle,g),Flotr.drawText(e,f.x.options.title,this.plotOffset.left+this.plotWidth/2,this.plotOffset.top+f.x.maxLabel.height+this.plotHeight+2*d,g)),f.x2.options.title&&f.x2.used&&(g.textAlign=f.x2.options.titleAlign||"center",g.textBaseline="bottom",g.angle=Flotr.toRad(f.x2.options.titleAngle),g=Flotr.getBestTextAlign(g.angle,g),Flotr.drawText(e,f.x2.options.title,this.plotOffset.left+this.plotWidth/2,this.plotOffset.top-f.x2.maxLabel.height-2*d,g)),f.y.options.title&&f.y.used&&(g.textAlign=f.y.options.titleAlign||"right",g.textBaseline="middle",g.angle=Flotr.toRad(f.y.options.titleAngle),g=Flotr.getBestTextAlign(g.angle,g),Flotr.drawText(e,f.y.options.title,this.plotOffset.left-f.y.maxLabel.width-2*d,this.plotOffset.top+this.plotHeight/2,g)),f.y2.options.title&&f.y2.used&&(g.textAlign=f.y2.options.titleAlign||"left",g.textBaseline="middle",g.angle=Flotr.toRad(f.y2.options.titleAngle),g=Flotr.getBestTextAlign(g.angle,g),Flotr.drawText(e,f.y2.options.title,this.plotOffset.left+this.plotWidth+f.y2.maxLabel.width+2*d,this.plotOffset.top+this.plotHeight/2,g))}else{b=[],c.title&&b.push('<div style="position:absolute;top:0;left:',this.plotOffset.left,"px;font-size:1em;font-weight:bold;text-align:center;width:",this.plotWidth,'px;" class="flotr-title">',c.title,"</div>"),c.subtitle&&b.push('<div style="position:absolute;top:',this.titleHeight,"px;left:",this.plotOffset.left,"px;font-size:smaller;text-align:center;width:",this.plotWidth,'px;" class="flotr-subtitle">',c.subtitle,"</div>"),b.push("</div>"),b.push('<div class="flotr-axis-title" style="font-weight:bold;">'),f.x.options.title&&f.x.used&&b.push('<div style="position:absolute;top:',this.plotOffset.top+this.plotHeight+c.grid.labelMargin+f.x.titleSize.height,"px;left:",this.plotOffset.left,"px;width:",this.plotWidth,"px;text-align:",f.x.options.titleAlign,';" class="flotr-axis-title flotr-axis-title-x1">',f.x.options.title,"</div>"),f.x2.options.title&&f.x2.used&&b.push('<div style="position:absolute;top:0;left:',this.plotOffset.left,"px;width:",this.plotWidth,"px;text-align:",f.x2.options.titleAlign,';" class="flotr-axis-title flotr-axis-title-x2">',f.x2.options.title,"</div>"),f.y.options.title&&f.y.used&&b.push('<div style="position:absolute;top:',this.plotOffset.top+this.plotHeight/2-f.y.titleSize.height/2,"px;left:0;text-align:",f.y.options.titleAlign,';" class="flotr-axis-title flotr-axis-title-y1">',f.y.options.title,"</div>"),f.y2.options.title&&f.y2.used&&b.push('<div style="position:absolute;top:',this.plotOffset.top+this.plotHeight/2-f.y.titleSize.height/2,"px;right:0;text-align:",f.y2.options.titleAlign,';" class="flotr-axis-title flotr-axis-title-y2">',f.y2.options.title,"</div>"),b=b.join("");var h=a.create("div");a.setStyles({color:c.grid.color}),h.className="flotr-titles",a.insert(this.el,h),a.insert(h,b)}}})}();

/*
 SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
;var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;
    if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;
        X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);
        ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");
        if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac};
}(),k=function(){if(!M.w3){return;}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f();
}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false);}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);
    f();}});if(O==top){(function(){if(J){return;}try{j.documentElement.doScroll("left");}catch(X){setTimeout(arguments.callee,0);return;}f();})();}}if(M.wk){(function(){if(J){return;
}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return;}f();})();}s(f);}}();function f(){if(J){return;}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));
    Z.parentNode.removeChild(Z);}catch(aa){return;}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]();}}function K(X){if(J){X();}else{U[U.length]=X;}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false);
}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false);}else{if(typeof O.attachEvent!=D){i(O,"onload",Y);}else{if(typeof O.onload=="function"){var X=O.onload;
    O.onload=function(){X();Y();};}else{O.onload=Y;}}}}}function h(){if(T){V();}else{H();}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);
    aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");
        M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return;}}X.removeChild(aa);Z=null;H();
    })();}else{H();}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);
    if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa);}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;
        ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class");}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align");
        }var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value");
        }}P(ai,ah,Y,ab);}else{p(ae);if(ab){ab(aa);}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z;}ab(aa);}}}}}function z(aa){var X=null;
    var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y;}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z;}}}return X;}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312);
}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null;}else{l=ae;Q=X;}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310";
}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137";}j.title=j.title.slice(0,47)+" - Flash Player Installation";
    var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac;
    }else{ab.flashvars=ac;}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";
        (function(){if(ae.readyState==4){ae.parentNode.removeChild(ae);}else{setTimeout(arguments.callee,10);}})();}u(aa,ab,X);}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");
    Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y);}else{setTimeout(arguments.callee,10);
    }})();}else{Y.parentNode.replaceChild(g(Y),Y);}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML;}else{var Y=ab.getElementsByTagName(r)[0];
    if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true));
    }}}}}return aa;}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X;}if(aa){if(typeof ai.id==D){ai.id=Y;}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae];
}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"';}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"';}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />';
}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id);}else{var Z=C(r);Z.setAttribute("type",q);
    for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac]);}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac]);
    }}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab]);}}aa.parentNode.replaceChild(Z,aa);X=Z;}}return X;}function e(Z,X,Y){var aa=C("param");
    aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa);}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";
    (function(){if(X.readyState==4){b(Y);}else{setTimeout(arguments.callee,10);}})();}else{X.parentNode.removeChild(X);}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null;
}}Y.parentNode.removeChild(Y);}}function c(Z){var X=null;try{X=j.getElementById(Z);}catch(Y){}return X;}function C(X){return j.createElement(X);}function i(Z,X,Y){Z.attachEvent(X,Y);
    I[I.length]=[Z,X,Y];}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false;
}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return;}var aa=j.getElementsByTagName("head")[0];if(!aa){return;}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;
    G=null;}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1];
}G=X;}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y);}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"));
}}}function w(Z,X){if(!m){return;}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y;}else{v("#"+Z,"visibility:"+Y);}}function L(Y){var Z=/[\\\"<>\.;]/;
    var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y;}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;
    for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2]);}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa]);}for(var Y in M){M[Y]=null;}M=null;for(var X in swfobject){swfobject[X]=null;
    }swfobject=null;});}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;
    w(ab,false);}else{if(Z){Z({success:false,id:ab});}}},getObjectById:function(X){if(M.w3){return z(X);}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};
    if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al];}}aj.data=ab;
        aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak];}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai];
        }else{am.flashvars=ai+"="+Z[ai];}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true);}X.success=true;X.ref=an;}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);
            return;}else{w(ah,true);}}if(ac){ac(X);}});}else{if(ac){ac(X);}}},switchOffAutoHideShow:function(){m=false;},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]};
},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X);}else{return undefined;}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y);
}},removeSWF:function(X){if(M.w3){y(X);}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X);}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;
    if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1];}if(aa==null){return L(Z);}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)));
    }}}return"";},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block";
}}if(E){E(B);}}a=false;}}};}();

/*
 SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com

 mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/

 SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilzén and Mammon Media and is released under the MIT License:
 http://www.opensource.org/licenses/mit-license.php

 SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 http://www.opensource.org/licenses/mit-license.php
 */

var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(a){this.initSWFUpload(a)}}SWFUpload.prototype.initSWFUpload=function(b){try{this.customSettings={};this.settings=b;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo()}catch(a){delete SWFUpload.instances[this.movieName];throw a}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(a){if(typeof(a)!=="string"||a.match(/^https?:\/\//i)||a.match(/^\//)){return a}var c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var b=window.location.pathname.lastIndexOf("/");if(b<=0){path="/"}else{path=window.location.pathname.substr(0,b)+"/"}return path+a};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(b,a){this.settings[b]=(this.settings[b]==undefined)?a:this.settings[b]};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+new Date().getTime()}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)}delete this.ensureDefault};SWFUpload.prototype.loadFlash=function(){var a,b;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added"}a=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(a==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id}b=document.createElement("div");b.innerHTML=this.getFlashHTML();a.parentNode.replaceChild(b.firstChild,a);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement()}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")};SWFUpload.prototype.getFlashVars=function(){var b=this.buildParamString();var a=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(a),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(b),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName)}if(this.movieElement===null){throw"Could not find Flash element"}return this.movieElement};SWFUpload.prototype.buildParamString=function(){var c=this.settings.post_params;var b=[];if(typeof(c)==="object"){for(var a in c){if(c.hasOwnProperty(a)){b.push(encodeURIComponent(a.toString())+"="+encodeURIComponent(c[a].toString()))}}}return b.join("&amp;")};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var a=null;a=this.getMovieElement();if(a&&typeof(a.CallFunction)==="unknown"){for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(e){}}try{a.parentNode.removeChild(a)}catch(b){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true}catch(d){return false}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",(this.settings.button_placeholder?"Set":"Not Set"),"\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""))};SWFUpload.prototype.addSetting=function(b,c,a){if(c==undefined){return(this.settings[b]=a)}else{return(this.settings[b]=c)}};SWFUpload.prototype.getSetting=function(a){if(this.settings[a]!=undefined){return this.settings[a]}return""};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue)}return returnValue};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")};SWFUpload.prototype.startUpload=function(a){this.callFlash("StartUpload",[a])};SWFUpload.prototype.cancelUpload=function(a,b){if(b!==false){b=true}this.callFlash("CancelUpload",[a,b])};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")};SWFUpload.prototype.setStats=function(a){this.callFlash("SetStats",[a])};SWFUpload.prototype.getFile=function(a){if(typeof(a)==="number"){return this.callFlash("GetFileByIndex",[a])}else{return this.callFlash("GetFile",[a])}};SWFUpload.prototype.addFileParam=function(a,b,c){return this.callFlash("AddFileParam",[a,b,c])};SWFUpload.prototype.removeFileParam=function(a,b){this.callFlash("RemoveFileParam",[a,b])};SWFUpload.prototype.setUploadURL=function(a){this.settings.upload_url=a.toString();this.callFlash("SetUploadURL",[a])};SWFUpload.prototype.setPostParams=function(a){this.settings.post_params=a;this.callFlash("SetPostParams",[a])};SWFUpload.prototype.addPostParam=function(a,b){this.settings.post_params[a]=b;this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.removePostParam=function(a){delete this.settings.post_params[a];this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.setFileTypes=function(a,b){this.settings.file_types=a;this.settings.file_types_description=b;this.callFlash("SetFileTypes",[a,b])};SWFUpload.prototype.setFileSizeLimit=function(a){this.settings.file_size_limit=a;this.callFlash("SetFileSizeLimit",[a])};SWFUpload.prototype.setFileUploadLimit=function(a){this.settings.file_upload_limit=a;this.callFlash("SetFileUploadLimit",[a])};SWFUpload.prototype.setFileQueueLimit=function(a){this.settings.file_queue_limit=a;this.callFlash("SetFileQueueLimit",[a])};SWFUpload.prototype.setFilePostName=function(a){this.settings.file_post_name=a;this.callFlash("SetFilePostName",[a])};SWFUpload.prototype.setUseQueryString=function(a){this.settings.use_query_string=a;this.callFlash("SetUseQueryString",[a])};SWFUpload.prototype.setRequeueOnError=function(a){this.settings.requeue_on_error=a;this.callFlash("SetRequeueOnError",[a])};SWFUpload.prototype.setHTTPSuccess=function(a){if(typeof a==="string"){a=a.replace(" ","").split(",")}this.settings.http_success=a;this.callFlash("SetHTTPSuccess",[a])};SWFUpload.prototype.setAssumeSuccessTimeout=function(a){this.settings.assume_success_timeout=a;this.callFlash("SetAssumeSuccessTimeout",[a])};SWFUpload.prototype.setDebugEnabled=function(a){this.settings.debug_enabled=a;this.callFlash("SetDebugEnabled",[a])};SWFUpload.prototype.setButtonImageURL=function(a){if(a==undefined){a=""}this.settings.button_image_url=a;this.callFlash("SetButtonImageURL",[a])};SWFUpload.prototype.setButtonDimensions=function(c,a){this.settings.button_width=c;this.settings.button_height=a;var b=this.getMovieElement();if(b!=undefined){b.style.width=c+"px";b.style.height=a+"px"}this.callFlash("SetButtonDimensions",[c,a])};SWFUpload.prototype.setButtonText=function(a){this.settings.button_text=a;this.callFlash("SetButtonText",[a])};SWFUpload.prototype.setButtonTextPadding=function(b,a){this.settings.button_text_top_padding=a;this.settings.button_text_left_padding=b;this.callFlash("SetButtonTextPadding",[b,a])};SWFUpload.prototype.setButtonTextStyle=function(a){this.settings.button_text_style=a;this.callFlash("SetButtonTextStyle",[a])};SWFUpload.prototype.setButtonDisabled=function(a){this.settings.button_disabled=a;this.callFlash("SetButtonDisabled",[a])};SWFUpload.prototype.setButtonAction=function(a){this.settings.button_action=a;this.callFlash("SetButtonAction",[a])};SWFUpload.prototype.setButtonCursor=function(a){this.settings.button_cursor=a;this.callFlash("SetButtonCursor",[a])};SWFUpload.prototype.queueEvent=function(b,c){if(c==undefined){c=[]}else{if(!(c instanceof Array)){c=[c]}}var a=this;if(typeof this.settings[b]==="function"){this.eventQueue.push(function(){this.settings[b].apply(this,c)});setTimeout(function(){a.executeNextEvent()},0)}else{if(this.settings[b]!==null){throw"Event handler "+b+" is unknown or is not a function"}}};SWFUpload.prototype.executeNextEvent=function(){var a=this.eventQueue?this.eventQueue.shift():null;if(typeof(a)==="function"){a.apply(this)}};SWFUpload.prototype.unescapeFilePostParams=function(c){var e=/[$]([0-9a-f]{4})/i;var f={};var d;if(c!=undefined){for(var a in c.post){if(c.post.hasOwnProperty(a)){d=a;var b;while((b=e.exec(d))!==null){d=d.replace(b[0],String.fromCharCode(parseInt("0x"+b[1],16)))}f[d]=c.post[a]}}c.post=f}return c};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(a){return false}};SWFUpload.prototype.flashReady=function(){var a=this.getMovieElement();if(!a){this.debug("Flash called back ready but the flash movie can't be found.");return}this.cleanUp(a);this.queueEvent("swfupload_loaded_handler")};SWFUpload.prototype.cleanUp=function(a){try{if(this.movieElement&&typeof(a.CallFunction)==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(b){}}}}catch(d){}window.__flash__removeCallback=function(e,f){try{if(e){e[f]=null}}catch(g){}}};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")};SWFUpload.prototype.fileQueued=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("file_queued_handler",a)};SWFUpload.prototype.fileQueueError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("file_queue_error_handler",[a,c,b])};SWFUpload.prototype.fileDialogComplete=function(b,c,a){this.queueEvent("file_dialog_complete_handler",[b,c,a])};SWFUpload.prototype.uploadStart=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("return_upload_start_handler",a)};SWFUpload.prototype.returnUploadStart=function(a){var b;if(typeof this.settings.upload_start_handler==="function"){a=this.unescapeFilePostParams(a);b=this.settings.upload_start_handler.call(this,a)}else{if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function"}}if(b===undefined){b=true}b=!!b;this.callFlash("ReturnUploadStart",[b])};SWFUpload.prototype.uploadProgress=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_progress_handler",[a,c,b])};SWFUpload.prototype.uploadError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_error_handler",[a,c,b])};SWFUpload.prototype.uploadSuccess=function(b,a,c){b=this.unescapeFilePostParams(b);this.queueEvent("upload_success_handler",[b,a,c])};SWFUpload.prototype.uploadComplete=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("upload_complete_handler",a)};SWFUpload.prototype.debug=function(a){this.queueEvent("debug_handler",a)};SWFUpload.prototype.debugMessage=function(c){if(this.settings.debug){var a,d=[];if(typeof c==="object"&&typeof c.name==="string"&&typeof c.message==="string"){for(var b in c){if(c.hasOwnProperty(b)){d.push(b+": "+c[b])}}a=d.join("\n")||"";d=a.split("\n");a="EXCEPTION: "+d.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(a)}else{SWFUpload.Console.writeLine(c)}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(d){var b,a;try{b=document.getElementById("SWFUpload_Console");if(!b){a=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(a);b=document.createElement("textarea");b.id="SWFUpload_Console";b.style.fontFamily="monospace";b.setAttribute("wrap","off");b.wrap="off";b.style.overflow="auto";b.style.width="700px";b.style.height="350px";b.style.margin="5px";a.appendChild(b)}b.value+=d+"\n";b.scrollTop=b.scrollHeight-b.clientHeight}catch(c){alert("Exception: "+c.name+" Message: "+c.message)}};

/*
 Uploadify v3.1.1
 Copyright (c) 2012 Reactive Apps, Ronnie Garcia
 Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

(function($) {

    // These methods can be called by adding them as the first argument in the uploadify plugin call
    var methods = {

        init : function(options, swfUploadOptions) {

            return this.each(function() {

                // Create a reference to the jQuery DOM object
                var $this = $(this);

                // Clone the original DOM object
                var $clone = $this.clone();

                // Setup the default options
                var settings = $.extend({
                    // Required Settings
                    id       : $this.attr('id'), // The ID of the DOM object
                    swf      : 'uploadify.swf',  // The path to the uploadify SWF file
                    uploader : 'uploadify.php',  // The path to the server-side upload script

                    // Options
                    auto            : true,               // Automatically upload files when added to the queue
                    buttonClass     : '',                 // A class name to add to the browse button DOM object
                    buttonCursor    : 'hand',             // The cursor to use with the browse button
                    buttonImage     : null,               // (String or null) The path to an image to use for the Flash browse button if not using CSS to style the button
                    buttonText      : 'SELECT FILES',     // The text to use for the browse button
                    checkExisting   : false,              // The path to a server-side script that checks for existing files on the server
                    debug           : false,              // Turn on swfUpload debugging mode
                    fileObjName     : 'Filedata',         // The name of the file object to use in your server-side script
                    fileSizeLimit   : 0,                  // The maximum size of an uploadable file in KB (Accepts units B KB MB GB if string, 0 for no limit)
                    fileTypeDesc    : 'All Files',        // The description for file types in the browse dialog
                    fileTypeExts    : '*.*',              // Allowed extensions in the browse dialog (server-side validation should also be used)
                    height          : 30,                 // The height of the browse button
                    method          : 'post',             // The method to use when sending files to the server-side upload script
                    multi           : true,               // Allow multiple file selection in the browse dialog
                    formData        : {},                 // An object with additional data to send to the server-side upload script with every file upload
                    preventCaching  : true,               // Adds a random value to the Flash URL to prevent caching of it (conflicts with existing parameters)
                    progressData    : 'percentage',       // ('percentage' or 'speed') Data to show in the queue item during a file upload
                    queueID         : false,              // The ID of the DOM object to use as a file queue (without the #)
                    queueSizeLimit  : 999,                // The maximum number of files that can be in the queue at one time
                    removeCompleted : true,               // Remove queue items from the queue when they are done uploading
                    removeTimeout   : 3,                  // The delay in seconds before removing a queue item if removeCompleted is set to true
                    requeueErrors   : false,              // Keep errored files in the queue and keep trying to upload them
                    successTimeout  : 30,                 // The number of seconds to wait for Flash to detect the server's response after the file has finished uploading
                    uploadLimit     : 0,                  // The maximum number of files you can upload
                    width           : 120,                // The width of the browse button

                    // Events
                    overrideEvents   : []             // (Array) A list of default event handlers to skip
                    /*
                     onCancel         // Triggered when a file is cancelled from the queue
                     onClearQueue     // Triggered during the 'clear queue' method
                     onDestroy        // Triggered when the uploadify object is destroyed
                     onDialogClose    // Triggered when the browse dialog is closed
                     onDialogOpen     // Triggered when the browse dialog is opened
                     onDisable        // Triggered when the browse button gets disabled
                     onEnable         // Triggered when the browse button gets enabled
                     onFallback       // Triggered is Flash is not detected
                     onInit           // Triggered when Uploadify is initialized
                     onQueueComplete  // Triggered when all files in the queue have been uploaded
                     onSelectError    // Triggered when an error occurs while selecting a file (file size, queue size limit, etc.)
                     onSelect         // Triggered for each file that is selected
                     onSWFReady       // Triggered when the SWF button is loaded
                     onUploadComplete // Triggered when a file upload completes (success or error)
                     onUploadError    // Triggered when a file upload returns an error
                     onUploadSuccess  // Triggered when a file is uploaded successfully
                     onUploadProgress // Triggered every time a file progress is updated
                     onUploadStart    // Triggered immediately before a file upload starts
                     */
                }, options);

                // Prepare settings for SWFUpload
                var swfUploadSettings = {
                    assume_success_timeout   : settings.successTimeout,
                    button_placeholder_id    : settings.id,
                    button_width             : settings.width,
                    button_height            : settings.height,
                    button_text              : null,
                    button_text_style        : null,
                    button_text_top_padding  : 0,
                    button_text_left_padding : 0,
                    button_action            : (settings.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE),
                    button_disabled          : false,
                    button_cursor            : (settings.buttonCursor == 'arrow' ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND),
                    button_window_mode       : SWFUpload.WINDOW_MODE.TRANSPARENT,
                    debug                    : settings.debug,
                    requeue_on_error         : settings.requeueErrors,
                    file_post_name           : settings.fileObjName,
                    file_size_limit          : settings.fileSizeLimit,
                    file_types               : settings.fileTypeExts,
                    file_types_description   : settings.fileTypeDesc,
                    file_queue_limit         : settings.queueSizeLimit,
                    file_upload_limit        : settings.uploadLimit,
                    flash_url                : settings.swf,
                    prevent_swf_caching      : settings.preventCaching,
                    post_params              : settings.formData,
                    upload_url               : settings.uploader,
                    use_query_string         : (settings.method == 'get'),

                    // Event Handlers
                    file_dialog_complete_handler : handlers.onDialogClose,
                    file_dialog_start_handler    : handlers.onDialogOpen,
                    file_queued_handler          : handlers.onSelect,
                    file_queue_error_handler     : handlers.onSelectError,
                    swfupload_loaded_handler     : settings.onSWFReady,
                    upload_complete_handler      : handlers.onUploadComplete,
                    upload_error_handler         : handlers.onUploadError,
                    upload_progress_handler      : handlers.onUploadProgress,
                    upload_start_handler         : handlers.onUploadStart,
                    upload_success_handler       : handlers.onUploadSuccess
                }

                // Merge the user-defined options with the defaults
                if (swfUploadOptions) {
                    swfUploadSettings = $.extend(swfUploadSettings, swfUploadOptions);
                }
                // Add the user-defined settings to the swfupload object
                swfUploadSettings = $.extend(swfUploadSettings, settings);

                // Detect if Flash is available
                var playerVersion  = swfobject.getFlashPlayerVersion();
                var flashInstalled = (playerVersion.major >= 9);

                if (flashInstalled) {
                    // Create the swfUpload instance
                    window['uploadify_' + settings.id] = new SWFUpload(swfUploadSettings);
                    var swfuploadify = window['uploadify_' + settings.id];

                    // Add the SWFUpload object to the elements data object
                    $this.data('uploadify', swfuploadify);

                    // Wrap the instance
                    var $wrapper = $('<div />', {
                        'id'    : settings.id,
                        'class' : 'uploadify',
                        'css'   : {
                            'height'   : settings.height + 'px',
                            'width'    : settings.width + 'px'
                        }
                    });
                    $('#' + swfuploadify.movieName).wrap($wrapper);
                    // Recreate the reference to wrapper
                    $wrapper = $('#' + settings.id);
                    // Add the data object to the wrapper
                    $wrapper.data('uploadify', swfuploadify);

                    // Create the button
                    var $button = $('<div />', {
                        'id'    : settings.id + '-button',
                        'class' : 'uploadify-button ' + settings.buttonClass
                    });
                    if (settings.buttonImage) {
                        $button.css({
                            'background-image' : "url('" + settings.buttonImage + "')",
                            'text-indent'      : '-9999px'
                        });
                    }
                    $button.html('<span class="uploadify-button-text">' + settings.buttonText + '</span>')
                        .css({
                            'height'      : settings.height + 'px',
                            'line-height' : settings.height + 'px',
                            'width'       : settings.width + 'px'
                        });
                    // Append the button to the wrapper
                    $wrapper.append($button);

                    // Adjust the styles of the movie
                    $('#' + swfuploadify.movieName).css({
                        'position' : 'absolute',
                        'z-index'  : 1
                    });

                    // Create the file queue
                    if (!settings.queueID) {
                        var $queue = $('<div />', {
                            'id'    : settings.id + '-queue',
                            'class' : 'uploadify-queue'
                        });
                        $wrapper.after($queue);
                        swfuploadify.settings.queueID      = settings.id + '-queue';
                        swfuploadify.settings.defaultQueue = true;
                    }

                    // Create some queue related objects and variables
                    swfuploadify.queueData = {
                        files              : {}, // The files in the queue
                        filesSelected      : 0, // The number of files selected in the last select operation
                        filesQueued        : 0, // The number of files added to the queue in the last select operation
                        filesReplaced      : 0, // The number of files replaced in the last select operation
                        filesCancelled     : 0, // The number of files that were cancelled instead of replaced
                        filesErrored       : 0, // The number of files that caused error in the last select operation
                        uploadsSuccessful  : 0, // The number of files that were successfully uploaded
                        uploadsErrored     : 0, // The number of files that returned errors during upload
                        averageSpeed       : 0, // The average speed of the uploads in KB
                        queueLength        : 0, // The number of files in the queue
                        queueSize          : 0, // The size in bytes of the entire queue
                        uploadSize         : 0, // The size in bytes of the upload queue
                        queueBytesUploaded : 0, // The size in bytes that have been uploaded for the current upload queue
                        uploadQueue        : [], // The files currently to be uploaded
                        errorMsg           : 'Some files were not added to the queue:'
                    };

                    // Save references to all the objects
                    swfuploadify.original = $clone;
                    swfuploadify.wrapper  = $wrapper;
                    swfuploadify.button   = $button;
                    swfuploadify.queue    = $queue;

                    // Call the user-defined init event handler
                    if (settings.onInit) settings.onInit.call($this, swfuploadify);

                } else {

                    // Call the fallback function
                    if (settings.onFallback) settings.onFallback.call($this);

                }
            });

        },

        // Stop a file upload and remove it from the queue
        cancel : function(fileID, supressEvent) {

            var args = arguments;

            this.each(function() {
                // Create a reference to the jQuery DOM object
                var $this        = $(this),
                    swfuploadify = $this.data('uploadify'),
                    settings     = swfuploadify.settings,
                    delay        = -1;

                if (args[0]) {
                    // Clear the queue
                    if (args[0] == '*') {
                        var queueItemCount = swfuploadify.queueData.queueLength;
                        $('#' + settings.queueID).find('.uploadify-queue-item').each(function() {
                            delay++;
                            if (args[1] === true) {
                                swfuploadify.cancelUpload($(this).attr('id'), false);
                            } else {
                                swfuploadify.cancelUpload($(this).attr('id'));
                            }
                            $(this).find('.data').removeClass('data').html(' - Cancelled');
                            $(this).find('.uploadify-progress-bar').remove();
                            $(this).delay(1000 + 100 * delay).fadeOut(500, function() {
                                $(this).remove();
                            });
                        });
                        swfuploadify.queueData.queueSize   = 0;
                        swfuploadify.queueData.queueLength = 0;
                        // Trigger the onClearQueue event
                        if (settings.onClearQueue) settings.onClearQueue.call($this, queueItemCount);
                    } else {
                        for (var n = 0; n < args.length; n++) {
                            swfuploadify.cancelUpload(args[n]);
                            $('#' + args[n]).find('.data').removeClass('data').html(' - Cancelled');
                            $('#' + args[n]).find('.uploadify-progress-bar').remove();
                            $('#' + args[n]).delay(1000 + 100 * n).fadeOut(500, function() {
                                $(this).remove();
                            });
                        }
                    }
                } else {
                    var item = $('#' + settings.queueID).find('.uploadify-queue-item').get(0);
                    $item = $(item);
                    swfuploadify.cancelUpload($item.attr('id'));
                    $item.find('.data').removeClass('data').html(' - Cancelled');
                    $item.find('.uploadify-progress-bar').remove();
                    $item.delay(1000).fadeOut(500, function() {
                        $(this).remove();
                    });
                }
            });

        },

        // Revert the DOM object back to its original state
        destroy : function() {

            this.each(function() {
                // Create a reference to the jQuery DOM object
                var $this        = $(this),
                    swfuploadify = $this.data('uploadify'),
                    settings     = swfuploadify.settings;

                // Destroy the SWF object and
                swfuploadify.destroy();

                // Destroy the queue
                if (settings.defaultQueue) {
                    $('#' + settings.queueID).remove();
                }

                // Reload the original DOM element
                $('#' + settings.id).replaceWith(swfuploadify.original);

                // Call the user-defined event handler
                if (settings.onDestroy) settings.onDestroy.call(this);

                delete swfuploadify;
            });

        },

        // Disable the select button
        disable : function(isDisabled) {

            this.each(function() {
                // Create a reference to the jQuery DOM object
                var $this        = $(this),
                    swfuploadify = $this.data('uploadify'),
                    settings     = swfuploadify.settings;

                // Call the user-defined event handlers
                if (isDisabled) {
                    swfuploadify.button.addClass('disabled');
                    if (settings.onDisable) settings.onDisable.call(this);
                } else {
                    swfuploadify.button.removeClass('disabled');
                    if (settings.onEnable) settings.onEnable.call(this);
                }

                // Enable/disable the browse button
                swfuploadify.setButtonDisabled(isDisabled);
            });

        },

        // Get or set the settings data
        settings : function(name, value, resetObjects) {

            var args        = arguments;
            var returnValue = value;

            this.each(function() {
                // Create a reference to the jQuery DOM object
                var $this        = $(this),
                    swfuploadify = $this.data('uploadify'),
                    settings     = swfuploadify.settings;

                if (typeof(args[0]) == 'object') {
                    for (var n in value) {
                        setData(n,value[n]);
                    }
                }
                if (args.length === 1) {
                    returnValue =  settings[name];
                } else {
                    switch (name) {
                        case 'uploader':
                            swfuploadify.setUploadURL(value);
                            break;
                        case 'formData':
                            if (!resetObjects) {
                                value = $.extend(settings.formData, value);
                            }
                            swfuploadify.setPostParams(settings.formData);
                            break;
                        case 'method':
                            if (value == 'get') {
                                swfuploadify.setUseQueryString(true);
                            } else {
                                swfuploadify.setUseQueryString(false);
                            }
                            break;
                        case 'fileObjName':
                            swfuploadify.setFilePostName(value);
                            break;
                        case 'fileTypeExts':
                            swfuploadify.setFileTypes(value, settings.fileTypeDesc);
                            break;
                        case 'fileTypeDesc':
                            swfuploadify.setFileTypes(settings.fileTypeExts, value);
                            break;
                        case 'fileSizeLimit':
                            swfuploadify.setFileSizeLimit(value);
                            break;
                        case 'uploadLimit':
                            swfuploadify.setFileUploadLimit(value);
                            break;
                        case 'queueSizeLimit':
                            swfuploadify.setFileQueueLimit(value);
                            break;
                        case 'buttonImage':
                            swfuploadify.button.css('background-image', settingValue);
                            break;
                        case 'buttonCursor':
                            if (value == 'arrow') {
                                swfuploadify.setButtonCursor(SWFUpload.CURSOR.ARROW);
                            } else {
                                swfuploadify.setButtonCursor(SWFUpload.CURSOR.HAND);
                            }
                            break;
                        case 'buttonText':
                            $('#' + settings.id + '-button').find('.uploadify-button-text').html(value);
                            break;
                        case 'width':
                            swfuploadify.setButtonDimensions(value, settings.height);
                            break;
                        case 'height':
                            swfuploadify.setButtonDimensions(settings.width, value);
                            break;
                        case 'multi':
                            if (value) {
                                swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES);
                            } else {
                                swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE);
                            }
                            break;
                    }
                    settings[name] = value;
                }
            });

            if (args.length === 1) {
                return returnValue;
            }

        },

        // Stop the current uploads and requeue what is in progress
        stop : function() {

            this.each(function() {
                // Create a reference to the jQuery DOM object
                var $this        = $(this),
                    swfuploadify = $this.data('uploadify');

                // Reset the queue information
                swfuploadify.queueData.averageSpeed  = 0;
                swfuploadify.queueData.uploadSize    = 0;
                swfuploadify.queueData.bytesUploaded = 0;
                swfuploadify.queueData.uploadQueue   = [];

                swfuploadify.stopUpload();
            });

        },

        // Start uploading files in the queue
        upload : function() {

            var args = arguments;

            this.each(function() {
                // Create a reference to the jQuery DOM object
                var $this        = $(this),
                    swfuploadify = $this.data('uploadify');

                // Reset the queue information
                swfuploadify.queueData.averageSpeed  = 0;
                swfuploadify.queueData.uploadSize    = 0;
                swfuploadify.queueData.bytesUploaded = 0;
                swfuploadify.queueData.uploadQueue   = [];

                // Upload the files
                if (args[0]) {
                    if (args[0] == '*') {
                        swfuploadify.queueData.uploadSize = swfuploadify.queueData.queueSize;
                        swfuploadify.queueData.uploadQueue.push('*');
                        swfuploadify.startUpload();
                    } else {
                        for (var n = 0; n < args.length; n++) {
                            swfuploadify.queueData.uploadSize += swfuploadify.queueData.files[args[n]].size;
                            swfuploadify.queueData.uploadQueue.push(args[n]);
                        }
                        swfuploadify.startUpload(swfuploadify.queueData.uploadQueue.shift());
                    }
                } else {
                    swfuploadify.startUpload();
                }

            });

        }

    }

    // These functions handle all the events that occur with the file uploader
    var handlers = {

        // Triggered when the file dialog is opened
        onDialogOpen : function() {
            // Load the swfupload settings
            var settings = this.settings;

            // Reset some queue info
            this.queueData.errorMsg       = 'Some files were not added to the queue:';
            this.queueData.filesReplaced  = 0;
            this.queueData.filesCancelled = 0;

            // Call the user-defined event handler
            if (settings.onDialogOpen) settings.onDialogOpen.call(this);
        },

        // Triggered when the browse dialog is closed
        onDialogClose :  function(filesSelected, filesQueued, queueLength) {
            // Load the swfupload settings
            var settings = this.settings;

            // Update the queue information
            this.queueData.filesErrored  = filesSelected - filesQueued;
            this.queueData.filesSelected = filesSelected;
            this.queueData.filesQueued   = filesQueued - this.queueData.filesCancelled;
            this.queueData.queueLength   = queueLength;

            // Run the default event handler
            if ($.inArray('onDialogClose', settings.overrideEvents) < 0) {
                if (this.queueData.filesErrored > 0) {
                    alert(this.queueData.errorMsg);
                }
            }

            // Call the user-defined event handler
            if (settings.onDialogClose) settings.onDialogClose.call(this, this.queueData);

            // Upload the files if auto is true
            if (settings.auto) $('#' + settings.id).uploadify('upload', '*');
        },

        // Triggered once for each file added to the queue
        onSelect : function(file) {
            // Load the swfupload settings
            var settings = this.settings;

            // Check if a file with the same name exists in the queue
            var queuedFile = {};
            for (var n in this.queueData.files) {
                queuedFile = this.queueData.files[n];
                if (queuedFile.uploaded != true && queuedFile.name == file.name) {
                    var replaceQueueItem = confirm('The file named "' + file.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
                    if (!replaceQueueItem) {
                        this.cancelUpload(file.id);
                        this.queueData.filesCancelled++;
                        return false;
                    } else {
                        $('#' + queuedFile.id).remove();
                        this.cancelUpload(queuedFile.id);
                        this.queueData.filesReplaced++;
                    }
                }
            }

            // Get the size of the file
            var fileSize = Math.round(file.size / 1024);
            var suffix   = 'KB';
            if (fileSize > 1000) {
                fileSize = Math.round(fileSize / 1000);
                suffix   = 'MB';
            }
            var fileSizeParts = fileSize.toString().split('.');
            fileSize = fileSizeParts[0];
            if (fileSizeParts.length > 1) {
                fileSize += '.' + fileSizeParts[1].substr(0,2);
            }
            fileSize += suffix;

            // Truncate the filename if it's too long
            var fileName = file.name;
            if (fileName.length > 25) {
                fileName = fileName.substr(0,25) + '...';
            }

            // Run the default event handler
            if ($.inArray('onSelect', settings.overrideEvents) < 0) {

                // Add the file item to the queue
                $('#' + settings.queueID).append('<div id="' + file.id + '" class="uploadify-queue-item">\
					<div class="cancel">\
						<a href="javascript:$(\'#' + settings.id + '\').uploadify(\'cancel\', \'' + file.id + '\')">X</a>\
					</div>\
					<span class="fileName">' + fileName + ' (' + fileSize + ')</span><span class="data"></span>\
					<div class="uploadify-progress">\
						<div class="uploadify-progress-bar"><!--Progress Bar--></div>\
					</div>\
				</div>');

            }

            this.queueData.queueSize += file.size;
            this.queueData.files[file.id] = file;

            // Call the user-defined event handler
            if (settings.onSelect) settings.onSelect.apply(this, arguments);
        },

        // Triggered when a file is not added to the queue
        onSelectError : function(file, errorCode, errorMsg) {
            // Load the swfupload settings
            var settings = this.settings;

            // Run the default event handler
            if ($.inArray('onSelectError', settings.overrideEvents) < 0) {
                switch(errorCode) {
                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                        if (settings.queueSizeLimit > errorMsg) {
                            this.queueData.errorMsg += '\nThe number of files selected exceeds the remaining upload limit (' + errorMsg + ').';
                        } else {
                            this.queueData.errorMsg += '\nThe number of files selected exceeds the queue size limit (' + settings.queueSizeLimit + ').';
                        }
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + file.name + '" exceeds the size limit (' + settings.fileSizeLimit + ').';
                        break;
                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                        this.queueData.errorMsg += '\nThe file "' + file.name + '" is empty.';
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + file.name + '" is not an accepted file type (' + settings.fileTypeDesc + ').';
                        break;
                }
            }
            if (errorCode != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
                delete this.queueData.files[file.id];
            }

            // Call the user-defined event handler
            if (settings.onSelectError) settings.onSelectError.apply(this, arguments);
        },

        // Triggered when all the files in the queue have been processed
        onQueueComplete : function() {
            if (this.settings.onQueueComplete) this.settings.onQueueComplete.call(this, this.settings.queueData);
        },

        // Triggered when a file upload successfully completes
        onUploadComplete : function(file) {
            // Load the swfupload settings
            var settings     = this.settings,
                swfuploadify = this;

            // Check if all the files have completed uploading
            var stats = this.getStats();
            this.queueData.queueLength = stats.files_queued;
            if (this.queueData.uploadQueue[0] == '*') {
                if (this.queueData.queueLength > 0) {
                    this.startUpload();
                } else {
                    this.queueData.uploadQueue = [];

                    // Call the user-defined event handler for queue complete
                    if (settings.onQueueComplete) settings.onQueueComplete.call(this, this.queueData);
                }
            } else {
                if (this.queueData.uploadQueue.length > 0) {
                    this.startUpload(this.queueData.uploadQueue.shift());
                } else {
                    this.queueData.uploadQueue = [];

                    // Call the user-defined event handler for queue complete
                    if (settings.onQueueComplete) settings.onQueueComplete.call(this, this.queueData);
                }
            }

            // Call the default event handler
            if ($.inArray('onUploadComplete', settings.overrideEvents) < 0) {
                if (settings.removeCompleted) {
                    switch (file.filestatus) {
                        case SWFUpload.FILE_STATUS.COMPLETE:
                            setTimeout(function() {
                                if ($('#' + file.id)) {
                                    swfuploadify.queueData.queueSize   -= file.size;
                                    swfuploadify.queueData.queueLength -= 1;
                                    delete swfuploadify.queueData.files[file.id]
                                    $('#' + file.id).fadeOut(500, function() {
                                        $(this).remove();
                                    });
                                }
                            }, settings.removeTimeout * 1000);
                            break;
                        case SWFUpload.FILE_STATUS.ERROR:
                            if (!settings.requeueErrors) {
                                setTimeout(function() {
                                    if ($('#' + file.id)) {
                                        swfuploadify.queueData.queueSize   -= file.size;
                                        swfuploadify.queueData.queueLength -= 1;
                                        delete swfuploadify.queueData.files[file.id];
                                        $('#' + file.id).fadeOut(500, function() {
                                            $(this).remove();
                                        });
                                    }
                                }, settings.removeTimeout * 1000);
                            }
                            break;
                    }
                } else {
                    file.uploaded = true;
                }
            }

            // Call the user-defined event handler
            if (settings.onUploadComplete) settings.onUploadComplete.call(this, file);
        },

        // Triggered when a file upload returns an error
        onUploadError : function(file, errorCode, errorMsg) {
            // Load the swfupload settings
            var settings = this.settings;

            // Set the error string
            var errorString = 'Error';
            switch(errorCode) {
                case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
                    errorString = 'HTTP Error (' + errorMsg + ')';
                    break;
                case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
                    errorString = 'Missing Upload URL';
                    break;
                case SWFUpload.UPLOAD_ERROR.IO_ERROR:
                    errorString = 'IO Error';
                    break;
                case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
                    errorString = 'Security Error';
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
                    alert('The upload limit has been reached (' + errorMsg + ').');
                    errorString = 'Exceeds Upload Limit';
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
                    errorString = 'Failed';
                    break;
                case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
                    errorString = 'Validation Error';
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
                    errorString = 'Cancelled';
                    this.queueData.queueSize   -= file.size;
                    this.queueData.queueLength -= 1;
                    if (file.status == SWFUpload.FILE_STATUS.IN_PROGRESS || $.inArray(file.id, this.queueData.uploadQueue) >= 0) {
                        this.queueData.uploadSize -= file.size;
                    }
                    // Trigger the onCancel event
                    if (settings.onCancel) settings.onCancel.call(this, file);
                    delete this.queueData.files[file.id];
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
                    errorString = 'Stopped';
                    break;
            }

            // Call the default event handler
            if ($.inArray('onUploadError', settings.overrideEvents) < 0) {

                if (errorCode != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && errorCode != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
                    $('#' + file.id).addClass('uploadify-error');
                }

                // Reset the progress bar
                $('#' + file.id).find('.uploadify-progress-bar').css('width','1px');

                // Add the error message to the queue item
                if (errorCode != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && file.status != SWFUpload.FILE_STATUS.COMPLETE) {
                    $('#' + file.id).find('.data').html(' - ' + errorString);
                }
            }

            var stats = this.getStats();
            this.queueData.uploadsErrored = stats.upload_errors;

            // Call the user-defined event handler
            if (settings.onUploadError) settings.onUploadError.call(this, file, errorCode, errorMsg, errorString);
        },

        // Triggered periodically during a file upload
        onUploadProgress : function(file, fileBytesLoaded, fileTotalBytes) {
            // Load the swfupload settings
            var settings = this.settings;

            // Setup all the variables
            var timer            = new Date();
            var newTime          = timer.getTime();
            var lapsedTime       = newTime - this.timer;
            if (lapsedTime > 500) {
                this.timer = newTime;
            }
            var lapsedBytes      = fileBytesLoaded - this.bytesLoaded;
            this.bytesLoaded     = fileBytesLoaded;
            var queueBytesLoaded = this.queueData.queueBytesUploaded + fileBytesLoaded;
            var percentage       = Math.round(fileBytesLoaded / fileTotalBytes * 100);

            // Calculate the average speed
            var suffix = 'KB/s';
            var mbs = 0;
            var kbs = (lapsedBytes / 1024) / (lapsedTime / 1000);
            kbs = Math.floor(kbs * 10) / 10;
            if (this.queueData.averageSpeed > 0) {
                this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + kbs) / 2);
            } else {
                this.queueData.averageSpeed = Math.floor(kbs);
            }
            if (kbs > 1000) {
                mbs = (kbs * .001);
                this.queueData.averageSpeed = Math.floor(mbs);
                suffix = 'MB/s';
            }

            // Call the default event handler
            if ($.inArray('onUploadProgress', settings.overrideEvents) < 0) {
                if (settings.progressData == 'percentage') {
                    $('#' + file.id).find('.data').html(' - ' + percentage + '%');
                } else if (settings.progressData == 'speed' && lapsedTime > 500) {
                    $('#' + file.id).find('.data').html(' - ' + this.queueData.averageSpeed + suffix);
                }
                $('#' + file.id).find('.uploadify-progress-bar').css('width', percentage + '%');
            }

            // Call the user-defined event handler
            if (settings.onUploadProgress) settings.onUploadProgress.call(this, file, fileBytesLoaded, fileTotalBytes, queueBytesLoaded, this.queueData.uploadSize);
        },

        // Triggered right before a file is uploaded
        onUploadStart : function(file) {
            // Load the swfupload settings
            var settings = this.settings;

            var timer        = new Date();
            this.timer       = timer.getTime();
            this.bytesLoaded = 0;
            if (this.queueData.uploadQueue.length == 0) {
                this.queueData.uploadSize = file.size;
            }
            if (settings.checkExisting) {
                $.ajax({
                    type    : 'POST',
                    async   : false,
                    url     : settings.checkExisting,
                    data    : {filename: file.name},
                    success : function(data) {
                        if (data == 1) {
                            var overwrite = confirm('A file with the name "' + file.name + '" already exists on the server.\nWould you like to replace the existing file?');
                            if (!overwrite) {
                                this.cancelUpload(file.id);
                                $('#' + file.id).remove();
                                if (this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0) {
                                    if (this.queueData.uploadQueue[0] == '*') {
                                        this.startUpload();
                                    } else {
                                        this.startUpload(this.queueData.uploadQueue.shift());
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Call the user-defined event handler
            if (settings.onUploadStart) settings.onUploadStart.call(this, file);
        },

        // Triggered when a file upload returns a successful code
        onUploadSuccess : function(file, data, response) {
            // Load the swfupload settings
            var settings = this.settings;
            var stats    = this.getStats();
            this.queueData.uploadsSuccessful = stats.successful_uploads;
            this.queueData.queueBytesUploaded += file.size;

            // Call the default event handler
            if ($.inArray('onUploadSuccess', settings.overrideEvents) < 0) {
                $('#' + file.id).find('.data').html(' - Complete');
            }

            // Call the user-defined event handler
            if (settings.onUploadSuccess) settings.onUploadSuccess.call(this, file, data, response);
        }

    }

    $.fn.uploadify = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('The method ' + method + ' does not exist in $.uploadify');
        }

    }

})($);
(function () {

    window.S3Upload = (function () {

        S3Upload.prototype.s3_sign_put_url = '/signS3put';

        S3Upload.prototype.file_dom_selector = '#file_upload';
        S3Upload.prototype.default_file_type = 'application/octet-stream';

        S3Upload.prototype.onFinishS3Put = function (public_url, file) {
            return console.log('base.onFinishS3Put()', public_url, file);
        };

        S3Upload.prototype.onProgress = function (percent, status, public_url, file, e) {
            return console.log('base.onProgress()', percent, status, public_url, file, e);
        };

        S3Upload.prototype.onError = function (status, file) {
            return console.log('base.onError()', status, file);
        };

        S3Upload.prototype.onDragEnter = function(e){};

        S3Upload.prototype.onDragLeave = function(e){};
        S3Upload.prototype.onDrop = function(e){};

        function S3Upload(options) {
            if (options == null) {
                options = {};
            }
            _.extend(this, options);
            var that = this;

            $(this.file_dom_drop).on('drop',function(e){
                e.originalEvent.stopPropagation();
                e.originalEvent.preventDefault();
                that.onDrop(e)
                that.handleFileSelect(e.originalEvent.dataTransfer)
            }).on('dragover', function (e) {
                    e.preventDefault();
                });

            $(this.file_dom_drop)[0].addEventListener("dragenter", function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                that.onDragEnter(e)
            }, false);

            $(this.file_dom_drop)[0].addEventListener("dragleave", function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                that.onDragLeave(e)
            }, false);

            $(this.file_dom_selector).on('change', function(e){
                if (e.preventDefault) {
                    e.preventDefault();
                }
                that.onDrop(e)
                that.handleFileSelect(e.currentTarget)
            })

        };

        S3Upload.prototype.getFileType = function(file){
            if(file.type.length){
                return file.type;
            }else{
                return 'application/octet-stream'
            }
        };

        S3Upload.prototype.handleFileSelect = function (file_element) {
            var f, files, output, _i, _len, _results;
            this.onProgress(0, 'Upload started.');
            files = file_element.files;
            output = [];
            _results = [];
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                f = files[_i];
                _results.push(this.uploadFile(f));
            }
            return _results;
        };

        S3Upload.prototype.createCORSRequest = function (method, url) {
            var xhr;
            xhr = new XMLHttpRequest();
            if (xhr.withCredentials != null) {
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest !== "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        };

        S3Upload.prototype.executeOnSignedUrl = function (file, callback) {
            var this_s3upload, xhr;
            this_s3upload = this;
            xhr = new XMLHttpRequest();
            xhr.open('GET', this.s3_sign_put_url + '?s3_object_type=' + encodeURIComponent(this.getFileType(file)) + '&s3_object_name=' + encodeURIComponent(file.name), true);
            try {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
            } catch (e) {
            }
            xhr.onload = function(oEvent) {
                var blob = new Blob([xhr.response], {type: "image/png"});
            };
            xhr.onreadystatechange = function (e) {
                var result;
                if (this.readyState === 4 && this.status === 200) {
                    try {
                        result = JSON.parse(this.responseText);
                    } catch (error) {
                        this_s3upload.onError('Signing server returned some ugly/empty JSON: "' + this.responseText + '"');
                        return false;
                    }
                    return callback(result.signed_request, result.url, result);
                } else if (this.readyState === 4 && this.status !== 200) {
                    return this_s3upload.onError('Could not contact request signing server. Status = ' + this.status);
                }
            };
            return xhr.send();
        };

        S3Upload.prototype.uploadToS3 = function (file, url, public_url) {
            var this_s3upload, xhr;
            this_s3upload = this;
            xhr = this.createCORSRequest('PUT', url);
            if (!xhr) {
                this.onError('CORS not supported');
            } else {
                xhr.onload = function (e) {
                    if (xhr.status === 200) {
                        this_s3upload.onProgress(100, 'Upload completed.', public_url, file, e);
                        return this_s3upload.onFinishS3Put(public_url, file);
                    } else {
                        return this_s3upload.onError('Upload error: ' + xhr.status, file, e);
                    }
                };
                xhr.onerror = function (e) {
                    return this_s3upload.onError('XHR error.', file);
                };
                xhr.upload.onprogress = function (e) {
                    var percentLoaded;
                    if (e.lengthComputable) {
                        percentLoaded = Math.round((e.loaded / e.total) * 100);
                        return this_s3upload.onProgress(percentLoaded, (percentLoaded === 100 ? 'Finalizing.' : 'Uploading.'), public_url, file, e);
                    }
                };
            }


            xhr.setRequestHeader('Content-Type', this.getFileType(file));
            xhr.setRequestHeader('x-amz-acl', 'private');
            xhr.setRequestHeader('Content-Disposition', 'attachment');
            return xhr.send(file);
        };

        S3Upload.prototype.validate = function (file) {
            return null;
        };

        S3Upload.prototype.uploadFile = function (file) {
            var error, this_s3upload;
            var that = this;
            error = this.validate(file);
            if (error) {
                this.onError(error, file);
                return null;
            }
            this_s3upload = this;
            return this.executeOnSignedUrl(file, function (signedURL, publicURL, response) {
                that.sign_response = response;
                return this_s3upload.uploadToS3(file, signedURL, publicURL);
            });
        };

        return S3Upload;

    })();

}).call(this);

tpl = {

    templates: {},
    loadTemplates: function(prefix, names, callback) {

        var that = this;

        var loadTemplate = function(index) {
            var name = names[index];
            var uniq = 'uniq';
            try{
                scripts = document.getElementsByTagName('script');
                $.each(scripts,function(k,script){
                    src = $(script).attr('src');
                    if (src){
                        if (src.indexOf('packed_user') !== -1) {
                            uniq = src.slice(src.indexOf('packed_user')+('packed_user').length, src.indexOf('.js'));
                        }
                    }
                });
            }catch(Exception){}

            $.get(prefix + name + '.html?' + uniq, function(data) {

                $.each($(data), function(k, t){
                    var el = $(t);
                    if(el.attr('type') === 'text/template') {
                        that.templates[el.attr('id')] = el.html();
                    }
                });

                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        };
        loadTemplate(0);
    },

    // Get template by name from hash of preloaded templates
    get: function(name) {
        return this.templates[name];
    }

};

/**
 * Enables/Disables checkbox via label.
 * @param obj
 */
function changeCheckboxer(obj){
    var dest = $('#' + obj.attr('for'));
    var cls = 'on';
    if(dest.is(':checked')){
        cls = 'off';
    }
    obj.removeClass().addClass(cls);
    return cls === 'on' ? true : false;
}
/**
 * Changes label by checbox state
 * @param obj
 * @returns {boolean}
 */
function initChecboxer(obj){
    var dest = $('#' + obj.attr('for'));
    var state = dest.is(':checked') ? 'on' : 'off';
    obj.addClass(state);
    return dest.is(':checked');
}
/**
 * Izveido API url, #/
 * @param path
 */
function apiUrl(path){
    return api_url_me + path;
}

function siteUrl(path){
    return path;
}

function getValue(obj, key){
    if(obj && obj.hasOwnProperty(key)){
        return obj[key];
    }
}

function firstToUpper(string){
    if(typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    else {
        return '';
    }
}

function bytesToHuman(size) {
    var suffix = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'],
        tier = 0;

    while (size >= 1024) {
        size = size / 1024;
        tier++;
    }

    return (Math.round(size * 10) / 10).toFixed(1) + ' ' + suffix[tier];
}
function roundNumber(num, dec) {
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
}

function mti(value){
    return parseInt((value*1000000)/10000);
}

function itm(value){
    return (roundNumber(parseFloat(value),2) / 100);
}
function money(amount){
    return (parseFloat(amount)).toFixed(2);
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
}

function clone(obj) {
    if (null === obj || 'object' !== typeof obj) {
        return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

function show_noty(text, type, interval, buttons) {
    if(buttons){
        baseView.notificationView.showConfirmation(text, buttons);
    } else {
        baseView.notificationView.showMessage(text, type,  interval);
    }

}

function notification(text, type, interval, buttons) {
    show_noty(text, type, interval, buttons);
}


function fitImageIn(image, container){
    image.hide();
    container.css({
        'position' : 'relative'
    });

    function onload(){
        var maxX = container.outerWidth();
        var maxY = container.outerHeight();
        var imgW = image.width();
        var imgH = image.height();

        var imgRatio = 1;
        var boxRatio = 1;

        imgRatio = (imgW < imgH) ? imgH/imgW : imgW/imgH;

        var newW = imgRatio*imgW*boxRatio;
        var newH = imgRatio*imgH*boxRatio;

        if(newW <= newH && newW > maxX){
            boxRatio = maxX / newW;
        }
        else if(newH <= newW && newH > maxY){
            boxRatio = maxY / newH;
        }

        var rW = newW * boxRatio;
        var rH = newH * boxRatio;

        image.height(rH);
        image.width(rW);

        var t = 0, l = 0;

        if (rW > maxX) {
            l = (rW - maxX) / -2;
        }
        if (rH > maxY) {
            t = (rH - maxY) / -2;
        }
        image.css({
            'position' : 'absolute',
            'top' : (t) + 'px',
            'left' : (l) + 'px'
        }).fadeIn(100);
    }
    onload();
    image.one('load', function(){
        if(this.complete){
            $(this).load(onload);
        }
    });
    image.load(onload);
}

function selectDropdownOption(option, selected) {
    return option===selected ? 'active' : '';
}

function soc_buttons(name, description, url, image){
    var name = encodeURIComponent(name);
    var description = encodeURIComponent(description);
    var url = encodeURIComponent(url);
    var image = encodeURIComponent(image);
    var facebook  = '<a class="fbshare_producut" onclick="window.open(\'https://www.facebook.com/sharer.php?s=100&amp;p[title]=' + name + '&amp;p[summary]=' + description + '&amp;p[url]=' + url + '&amp;p[images][0]=' + image + '\',\'sharer\',\'toolbar=0,status=0,width=648,height=325\');" href="javascript: void(0)"><i class="icon-facebook-sign"></i> Share</a>';
    var twitter   = '<a class="tweet_producut" "="" onclick="window.open(\'https://twitter.com/share?url=' + url + '&amp;text=' + name + '&amp;\',\'tweet\',\'toolbar=0,status=0,width=648,height=325\')" href="javascript: void(0)"><i class="icon-twitter"></i> Tweet</a>';
    var print = '<span>' + facebook + '</span><span>' + twitter + '</span>';
    return print;
}

function nice_date(date, time){
    d = new Date(date);

    if (d.getFullYear() > 1){
        //neko
    } else {
        d = new Date(date.replace('-', '/'));
    }

    d_str = zeroPad(d.getDate(),2)+'/'+zeroPad(d.getMonth()+1,2)+'/'+d.getFullYear();
    if(time){
        d_str += ' ' + zeroPad(d.getHours(),2) + ':' + zeroPad(d.getMinutes(),2) + ':' + zeroPad(d.getSeconds(),2);
    }
    return d_str;
}

function niceDate(date, time){
    return nice_date(date, time);
}

function nice_date2(date){
    d = new Date(date);
    var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    if (d.getFullYear() > 1){
        //neko
    }else{
        d = new Date(date.replace('-','/'));
    }

    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function print_months_as_items() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        result = '';
    for (var i = 1; i <= 12; i++) {
        result += '<div class="item" data-value="' + i + '">' + months[i - 1] + '</div>';
    }
    return result;
}
function get_short_months() {
    return ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
}

function currency_sign(currency){
    var list = {
        'USD'   : '$',
        'GBP'   : '&pound;',
        'EUR'   : '&euro;',
        'JPY'   : '&yen;'
    };
    return list[currency];
}

function get_value(obj, key){
    if(obj && obj.hasOwnProperty(key)){
        return obj[key];
    }
}

var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];

function checked(value){
    if (value) {
        return 'checked="checked"';
    } else {
        return '';
    }

}

function truncateString(text, length) {
    if(text.length > length){
        return text.substring(0, length) + '...';
    } else {
        return text;
    }
}

function show_browser_notification() {
    if (!new XMLHttpRequest().upload || navigator.appName.indexOf('Microsoft Internet Explorer') !== -1) {
        var notif_message = $('#unsuported_browser_notification').html();
        show_noty(notif_message, 'error', 60000, 0);
    }
}

function show_email_verify_notification() {
    if (!currentUser.get('email_verified')) {
        var notif_message = $('#email_verification_notification').html();
        show_noty(notif_message, 'error', 60000, 0);
    }
}

document.is_facebook_loaded = false;
window.fbAsyncInit = function () {
    FB.Event.subscribe('xfbml.render', function () {
        document.is_facebook_loaded = true;
        $(document).trigger('facebook:ready');
    });
};

function set_up_username_cookie() {
    var username = currentUser.get('merchant_name');
    if (username) {
        var cookieName = 'sellfy_username',
            cookieValue = username,
            myDate = new Date();
        myDate.setMonth(myDate.getMonth() + 12);
        document.cookie = cookieName + '=' + cookieValue + ';expires=' + myDate + ';domain=.sellfy.com;path=/';
    }
}

/* Semantic */
$.fn.dropdown.settings.debug = false;
$.fn.transition.settings.debug = false;
$.fn.checkbox.settings.debug = false;
$.fn.popup.settings.debug = false;

function hash_change_callback(){
    $('.ui.dropdown').dropdown({
        onChange: function(){
            $(this).find('input').trigger('change');
        }
    });

}

/* Get the latest token from server and call function using this token
 * Usage:
 * csrf_enabled_callback(function(token){
 *     console.log(token);
 * });
 */

function csrf_enabled_callback(callback) {
    $.post(base_user_url + 'generate_token/', function(resp) {
        var token = $('#_csrf_token').val();
        if(resp.token){
            token = resp.token;
        }
        if(callback) {
            callback(token);
        }
    });
}

function save_dimmer_toggle($view, show_or_hide) {
    var dimmer = $view.find('.save-dimmer');
    dimmer.toggleClass('active', show_or_hide);
}


function appNavigate(router, href, e){
    e.preventDefault();
    href = href.replace('/user/','');
    router.navigate(href, true);
    scrollToTop();
    return false;
}


var RequestPagerCollection = Backbone.Paginator.requestPager.extend({
    initialize: function() {
        this.page = 1;
        this.paginator_core.url = this.url
    },

    parse: function (data) {
        this.totalPages = data.pagination.pages_total;
        return data.data;
    },

    paginator_core: {
        type: 'GET',
        dataType: 'json',
        url: this.url
    },

    paginator_ui: {
        firstPage: 1,
        currentPage: 1,
        perPage: 10
    },

    server_api: {
        'per_page': function() { return this.perPage },
        'page': function() { return this.currentPage }
    }

});

var ClientPagerCollection = Backbone.Paginator.clientPager.extend({
    initialize: function() {
        this.page = 1;
        this.paginator_core.url = this.url
    },

    parse: function (data) {
        this.totalPages = data.pagination.pages_total;
        return data.data;
    },

    paginator_core: {
        type: 'GET',
        dataType: 'json',
        url: this.url
    },

    paginator_ui: {
        firstPage: 1,
        currentPage: 1,
        perPage: 2
    },

    server_api: {
        'per_page': function() { return this.perPage },
        'page': function() { return this.currentPage }
    }

});

BoneView = Backbone.View.extend({

    init: function(){},

    initialize: function(){
        this.init()
    },

    assign: function(view, selector) {
        view.setElement(this.$(selector)).render();
    },

    hasModel: function(){
        return this.model ? true : false;
    },
    mergeRecursive: function(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if ( obj2[p].constructor==Object ) {
                    obj1[p] = MergeRecursive(obj1[p], obj2[p]);

                } else {
                    obj1[p] = obj2[p];

                }
            } catch(e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }
})

BoneModel = Backbone.Model.extend({
    initialize: function(){
        this.parentSave = this.save
        var that = this;
        this.save = function(data, options, callback){

            var success = function (model, response) {
                show_noty("Updated...", "success");
                if(callback){
                    callback()
                }
            }
            var error = function (model, response) {
                var errObj = $.parseJSON(response.responseText)
                show_noty(errObj.error, "error");
                if(callback){
                    callback()
                }
            }

            if(options){
                if(options.success){
                    success = options.success
                }
                if(options.error){
                    error = options.error
                }
            }

            this.parentSave(data,{
                success: success,
                error: error
            })
        }
    },
    /**
     * Izpilda callback funkciju, kad modelis ieladets no servera
     * @param callback
     */
    fetched: function(callback){
        this.deferred = this.fetch()
        this.deferred.done(function(){
            return callback(this)
        })
    }
})

BoneCollection = Backbone.Collection.extend({
    /**
     * Izpilda callback funkciju, kad modeli ieladets no servera
     * @param callback
     */
    fetched: function(callback){
        this.deferred = this.fetch()
        this.deferred.done(function(){
            return callback(this)
        })
    },

    parse: function(data){
        return data.data;
    }
})

LoadingView = Backbone.View.extend({
    render:function(){
        this.$el.html(_.template(tpl.get('pageLoading')))
    }
})

PageTitleView = Backbone.View.extend({
    render:function(data){
        this.$el.html(_.template(tpl.get('pageTitle'), {data:data}))
    }
})

/** Re-factored 08.08.2014*/
NotificationView = Backbone.View.extend({
    events: {
        'click #not_close': 'hideBox',
        'click #not_confirm': 'doConfirmation'
    },
    confirmationCallback: null,
    notificationFromTop: 22,

    initialize: function () {
        var that = this;
        $(window).on('scroll.notificationScroll', function () {
            that.moveBox();
        });
    },
    render: function () {
        this.$el.html(_.template(tpl.get('notification')));
        this.box = this.$el.find('#notification_box');
        this.boxParent = this.box.parent();
    },
    moveBox: function () {
        try {
            var fromTop = $(window).scrollTop();

            if(fromTop > this.notificationFromTop) {
                this.box.css('position', 'fixed');
            } else {
                this.box.css('position', 'static');
            }
        }catch (e) {}
    },
    showBox: function (type, interval, animationSpeed) {
        var that = this;
        clearInterval(this.closeInterval);
        this.closeInterval = setInterval(function () {
            that.hideBox();
        }, interval);
        this.box.removeClass('error success')
                .addClass(type)
                .slideDown(animationSpeed)
                .parent()
                    .slideDown(animationSpeed);
    },
    hideBox: function () {
        var that = this;
        clearInterval(this.closeInterval);
        this.box.slideUp(function(){
            that.$el.find('#not_message').empty();
            that.box.hide();
        }).parent()
              .slideUp();
    },
    showMessage: function (message, type,  interval, animationSpeed, controls) {
        if (typeof type === 'undefined') {
            type = 'error';
        }
        if (typeof interval === 'undefined') {
            interval = 3000;
        }
        if (typeof animationSpeed === 'undefined') {
            animationSpeed = 300;
        }
        this.$el.find('#not_message').html(message);
        if(!controls){
            this.$el.find('#not_confirm').hide();
        } else {
            this.$el.find('#not_confirm').show();
        }
        this.showBox(type, interval, animationSpeed);
    },
    showConfirmation: function (message, callback) {
        this.showMessage(message, 'error', 50000, 300, 'show-controls');
        this.confirmationCallback = callback;
    },
    doConfirmation: function () {
        this.confirmationCallback();
        this.hideBox();
    }
});

BaseView = BoneView.extend({
    renderPagination: true,
    activeTab: null,
    pageTitleData: null,
    init: function(){
        this.$el = $("#container")
        this.leftMenuView = new LeftMenuView
        this.loadingView = new LoadingView
        this.pageTitleView = new PageTitleView
        if(!this.notificationView)
            this.notificationView = new NotificationView
    },

    render: function(){
        return this;
    },

    setPageSize: function(size){ //thin, wide
        switch(size) {
            case 'thin': {
                this.$el.find(".my_account").show();
            }break;
            case 'wide': {
                this.$el.find(".my_account").hide();
                this.$el.find("#content").addClass('wide');
            }break;
        }
    },
    renderMenus: function(route){
        this.$el.html(_.template(tpl.get('userContainer'), {
            parts: {},
            user: userModel
        }))
        this.leftMenuView.activeRoute = route
        this.assign(this.leftMenuView, '#left_menu');

        return this;
    },

    renderNotificationView: function(){
        this.assign(this.notificationView, "#container_for_notification");
    },

    renderContent: function(view){
        this.setPageSize('thin');
        this.assign(this.loadingView, '#container_for_page_body');
        this.assign(view, '#container_for_page_body');
        if (view.pageTitleData) {
            this.pageTitleView.setElement($('#container_for_title')).render(view.pageTitleData);
        }
        return this;
    },

    showNotification: function(message, type, interval, animationSpeed){
        this.notificationView.showMessage(message, type, interval, animationSpeed)
    },

    pageTitle: function(title){
        $('title').html(title + " - Sellfy.com");
    }

})

FullPageView = BaseView.extend({

    renderMenus: function(route){
        return this;
    }

})

RequestPagerView = BaseView.extend({

    e: {
        'click a.first': 'gotoFirst',
        'click a.prev': 'gotoPrev',
        'click a.next': 'gotoNext',
        'click a.last': 'gotoLast',
        'click a.page': 'gotoPage',
        'click .pagination' : 'blockPagination',
        'click #search': 'search',
        'submit #search_form' : 'search',
        'click #remove-search': 'removeSearch'
    },
    events:{},
    searchEnabled: false,
    customView: false,
    init: function(){},
    initialize: function(){
        this.events = _.extend(this.events, this.e)
        this.collection = new this.collection
        this.tmpRender = this.render
        this.render = function(){
            return this;
        }
        this.collection.pager()
        this.collection.on('reset', this.callTmpRender, this);
        this.collection.on('change', this.callTmpRender, this);
        this.init();
    },
    callTmpRender:function(){

        this.tmpRender()

        if( (this.collection.models).length == 0) { //tabula tukša
            this.$el.append(_.template(tpl.get('noRecords')))
            if(this.customView){
                this.$el.find('#no_data').remove()
            }
        }

        if(this.searchEnabled){
            var search_html = _.template(tpl.get('tableSearch'))
            this.$el.prepend(search_html)

            if(this.tmpSearchValue) {
              this.$el.find('#search_term').val(this.tmpSearchValue) //nav labi
            }
            this.$el.find('#search_term').trigger('focus');
        }


        return this
    },
    showImages: function(){
        this.$el.find(".product_image img").each(function(){
            fitImageIn($(this),$(this).parent())
        })
    },
    renderPagination: function(){
        if( (this.collection.models).length > 0) {
            var pagination =  _.template(tpl.get('pagination'), this.collection.info())
            this.$el.append(pagination)
            this.$el.find('.pagination').animate({
                'opacity': 1
            }).removeClass('pagination-loading')
        }
    },
    blockPagination: function(e){
        e.preventDefault();
        p = $(e.currentTarget)
        if(p.hasClass('pagination-loading'))
            return false;
        p.addClass('pagination-loading').animate({
            'opacity' : 0.4
        })
    },
    search: function(e){
        value = this.$el.find('#search_term').val()
        if(!value)
            value =""
        this.tmpSearchValue = value

        if(!this.collectionUrl){
            this.collectionUrl = this.collection.url
        }
        this.collection.url = this.collectionUrl+"?filter=" + this.search_query(value)
        this.collection.paginator_core.url = this.collection.url
        this.collection.fetch()
        return false;
    },
    removeSearch : function() {
        this.collection.url = this.collectionUrl;
        this.collection.paginator_core.url = this.collection.url;
        this.collection.fetch();
        $('#search_query').remove();
        return false;
    },
    gotoFirst: function (e) {
        e.preventDefault();
        this.collection.goTo(1);
    },

    gotoPrev: function (e) {
        e.preventDefault();
        this.collection.previousPage();
    },

    gotoNext: function (e) {
        e.preventDefault();
        this.collection.nextPage();
    },

    gotoLast: function (e) {
        e.preventDefault();
        this.collection.goTo(this.collection.information.lastPage);
    },

    gotoPage: function (e) {
        e.preventDefault();
        var page = $(e.target).text();
        this.collection.goTo(page);
    },


    getSortOption: function () {
        return $('#sortByOption').val();
    },

    preserveSortOption: function (option) {
        $('#sortByOption').val(option);
    },

    sortByDescending: function (e) {
        e.preventDefault();
        var currentSort = this.getSortOption();
        this.collection.setSort(currentSort, 'desc');
        this.collection.pager();
        this.preserveSortOption(currentSort);
    },

    getFilterField: function () {
        return $('#filterByOption').val();
    },

    getFilterValue: function () {
        return $('#filterString').val();
    },

    preserveFilterField: function (field) {
        $('#filterByOption').val(field);
    },

    preserveFilterValue: function (value) {
        $('#filterString').val(value);
    }
});

ClientPagerView = BaseView.extend({

    e: {
        'click a.first': 'gotoFirst',
        'click a.prev': 'gotoPrev',
        'click a.next': 'gotoNext',
        'click a.last': 'gotoLast',
        'click a.page': 'gotoPage',
        'click .pagination' : 'blockPagination'
    },
    events:{},
    searchEnabled: false,

    initialize: function () {

    },
    render:function(){
        console.log("WWWWWWWWWW", this.collection.models)
        if( (this.collection.models).length == 0 ) { //tabula tukša
            this.$el.html(_.template(tpl.get('noRecords')))
        } else {
            this.$el.html(this.get_html())
            this.renderPagination()
        }
        return this
    },
    get_html: function(){
        return "No html"
    },
    showImages: function(){
        $(".product_image img").each(function(){
            fitImageIn($(this),$(this).parent())
        })
    },
    renderPagination: function(){
        if( (this.collection.models).length > 0) {
            var pagination =  _.template(tpl.get('pagination'), this.collection.info())
            this.$el.append(pagination)
            this.$el.find('.pagination').animate({
                'opacity': 1
            }).removeClass('pagination-loading')
        }
    },
    blockPagination: function(e){
        e.preventDefault();
        p = $(e.currentTarget)
        if(p.hasClass('pagination-loading'))
            return false;
        p.addClass('pagination-loading').animate({
            'opacity' : 0.4
        })
    },
    gotoFirst: function (e) {
        e.preventDefault();
        this.collection.goTo(1);
    },

    gotoPrev: function (e) {
        e.preventDefault();
        this.collection.previousPage();
    },

    gotoNext: function (e) {
        e.preventDefault();
        this.collection.nextPage();
    },

    gotoLast: function (e) {
        e.preventDefault();
        this.collection.goTo(this.collection.information.lastPage);
    },

    gotoPage: function (e) {
        e.preventDefault();
        var page = $(e.target).text();
        this.collection.goTo(page);
    },


    getSortOption: function () {
        return $('#sortByOption').val();
    },

    preserveSortOption: function (option) {
        $('#sortByOption').val(option);
    },

    sortByDescending: function (e) {
        e.preventDefault();
        var currentSort = this.getSortOption();
        this.collection.setSort(currentSort, 'desc');
        this.collection.pager();
        this.preserveSortOption(currentSort);
    },

    getFilterField: function () {
        return $('#filterByOption').val();
    },

    getFilterValue: function () {
        return $('#filterString').val();
    },

    preserveFilterField: function (field) {
        $('#filterByOption').val(field);
    },

    preserveFilterValue: function (value) {
        $('#filterString').val(value);
    }
});

var navigation = {
    'dashboard':{
        '_data' : {
            'title' : 'Dashboard',
            'url'   : siteUrl('dashboard')
        },
        'left': {
            'dashboard':{
                'key': 'dashboard',
                'routes': ['dashboard', 'feed'],
                'title': 'Dashboard',
                'url': siteUrl('dashboard'),
                'icon': 'icon-bar-chart'
            },
            'products':{
                'key':'products',
                'routes':[
                    'allProducts',
                    'embedProduct',
                    'editProduct',
                    'productAdvanced',
                    'newProduct',
                    'newProductEdit',
                    'invites'
                ],
                'title':'Products'
            },
            'marketing':{
                'key':'marketing',
                'routes':[
                    'discounts',
                    'socialDiscounts',
                    'emailUpdates'
                ],
                'title':'Marketing'
            },
            'orders':{
                'key':'orders',
                'routes':['allOrders'],
                'title':'Orders',
                'url':siteUrl('orders')
            }
        }
    },
    'settings':{
        '_data' : {
            'title' : 'Settings',
            'url'   : siteUrl('settings/account')
        },
        'left': {
            'account':{
                'key':'account',
                'routes':['settingsAccount'],
                'title':'Account Settings',
                'url':siteUrl('settings/account')

            },
            'locationTax':{
                'key':'location_settings',
                'routes':['settingsLocationTax'],
                'title':'Location & Tax',
                'url':siteUrl('settings/location_tax')
            },
            'email_settings':{
                'key':'email_settings',
                'routes':['settingsEmails'],
                'title':'Email Settings',
                'url':siteUrl('settings/emails')

            },
            'customization':{
                'key':'customization',
                'routes':['customizationOptions'],
                'title':'Customization',
                'url':siteUrl('settings/customization')
            },
            'change_password':{
                'key':'change_password',
                'routes':['settingsPassword'],
                'title':'Change Password',
                'url':siteUrl('settings/password')

            },
            'payment_options':{
                'key':'payment_options',
                'routes':['settingsPaymentOptions'],
                'title':'Payment Options',
                'url':siteUrl('settings/paymentoptions')
            },
            'integrations': {
                'key': 'integrations',
                'routes': ['settingsIntegrations'],
                'title': 'Integrations',
                'url': siteUrl('settings/integrations')
            },
            'billing':{
                'key':'billing',
                'routes':['settingsBilling'],
                'title':'Billing History',
                'url': siteUrl('settings/billing')
            }
        }
    },
    'logout':{
        '_data' : {
            'title' : '<span class="icon-off"></span>',
            'url'   : base_pub_url + 'logout/'
        },
        'left' : {}
    }
}


LeftMenuView = BoneView.extend({
    activeRoute: null,

    events: {
        'click .submenu .item': 'makeActiveSubMenu'
    },

    render:function () {
        activeMenus =  this.getActiveLeftMenu(navigation, this.activeRoute);
        var menu = navigation[activeMenus['active_parent']]['left'];
        menu = this.setActiveMenu(menu);
        var leftMenuData = {
            menu: menu,
            active: activeMenus['active_left'],
            _:_
        }
        html = _.template(tpl.get('leftMenu'), leftMenuData)
        this.$el.html(html);
    },

    setActiveMenu: function(menu){
        var that = this;
        var activeRoute = this.activeRoute.split(":")[1];

        $.each(menu, function(menuKey, menuAttr){
            if(menuAttr['routes'].indexOf(activeRoute) != -1){
                menuAttr['_is_active'] = true;
                menu[menuKey] = menuAttr;
            }else{
                menuAttr['_is_active'] = false;
            }
            if(menuAttr['_children']){
                menuAttr['_children'] = that.setActiveMenu(menuAttr['_children']);
            }
        });
        return menu;
    },

    makeActiveSubMenu: function(e){
        var item = $(e.currentTarget);
        console.log(item)
        item.parent('.submenu').find('.item').removeClass('active');
        item.addClass('active');
    },

    getActiveLeftMenu:function (menu, route) {
        var active;
        var active_parent
        route = route.split(":")[1];

        $.each(menu, function (x, rl) {
           $.each(rl.left, function (mk, mv) {
               $.each(mv['routes'], function (k, r) {
                   if (r == route){
                       active = mk
                       active_parent = x
                   }
               });
           });
        });

        return {
            'active_left' : active,
            'active_parent' : active_parent
        }
    }

});

$(document).ready(function(){
  var contentView = null;
  baseView = new BaseView();
  currentProductView = null;
  renderContent = true;

    var AppRouter = Backbone.Router.extend({
        routes: {

            /* Old views */
            'dashboard': 'dashboard',
            'products': 'allProducts',
            'orders': 'allOrders',
            'settings/account': 'settingsAccount',
            'settings/profile': 'settingsProfile',
            'settings/password': 'settingsPassword',
            'settings/emails': 'settingsEmails',
            'settings/customization': 'customizationOptions',
            'settings/paymentoptions': 'settingsPaymentOptions',
            'settings/billing': 'settingsBilling',
            'settings/integrations': 'settingsIntegrations',


            /* New routes */
            'feed': 'dontRenderContent',
            'products/new': 'dontRenderContent',
            'products/:key/edit': 'dontRenderContent',
            'products/:key/edit/:share': 'dontRenderContent',
            'invite': 'dontRenderContent',
            'recommend': 'dontRenderContent',
            'purchases': 'dontRenderContent',
            'settings/location_tax': 'dontRenderContent',
            'marketing/email-updates': 'dontRenderContent',
            'marketing/discounts': 'dontRenderContent',
            'marketing/social-discounts': 'dontRenderContent',

            //default
            '/user':  'dashboard',
            '*path':  'dashboard'
        },

      newProduct: function(){
        contentView = new ProductView();
      },

      allProducts: function(){
        contentView = new ProductsTableView();
      },

      allOrders: function(){
        contentView = new OrdersTableView();
      },

      dashboard: function(){
        contentView = new DashboardView();
      },

      settingsAccount: function(){
        contentView = new SettingsAccountView();
      },

      settingsPassword: function(){
        contentView = new SettingsPasswordView();
      },

      settingsEmails: function(){
        contentView = new SettingsEmailsView();
      },

      customizationOptions: function(){
        contentView = new SettingsCustomiztaionView();
      },

      settingsPaymentOptions: function(){
        contentView = new SettingsPaymentOptions();
      },

      settingsBilling: function(){
        contentView = new SettingsBillingView();
      },

      settingsIntegrations: function () {
        contentView = new IntegrationsView();
      },

      dontRenderContent: function() {
        renderContent = false;
      }
  });

    tpl.loadTemplates(base_pub_url + 'static/js/api/templates/', [
        'templates'
    ], function () {
        var appRouter = new AppRouter();

        userModel.fetched(function () {
            currentUser = userModel;

            appRouter.bind('all', function () {
                baseView.renderNotificationView();
                if (renderContent) {
                    if (!contentView) {
                        contentView = new DashboardView();
                    }
                    baseView.renderContent(contentView);
                }
                renderContent = true;
                show_browser_notification();
                show_email_verify_notification();
                hash_change_callback();
            });
            set_up_username_cookie();
            Backbone.history.start(
                {pushState: true, root: '/user/'}
            );
            $(document).on('click', 'a[data-pushstate]', function (e) {
                var href = $(this).attr('href');
                appNavigate(appRouter, href, e);
            });
          /* Hash event change */
          Backbone.history.bind('all', function () {
              /* Show Google movement in /user/ area */
              if(typeof ga !== 'undefined') {
                ga('send', 'pageview', {
                  'page': location.pathname + location.search + location.hash
                });
              }
              hash_change_callback();
          });
        });
    });
});


var ProductFile = Backbone.Model.extend({
  defaults: {
      'pdf_stamping': false,
      'extension': '',
      'name': '',
      'size': 0
  },

  initialize: function () {
      this.on("change:extension", function (model) {
          if (!model.isPDF()) {
            this.set({'pdf_stamping': false});
          }
      });
  },

  normalizedExtension: function () {
      return this.get('extension').toLowerCase().replace('.', '');
  },

  isPDF: function () {
      return this.normalizedExtension() == 'pdf';
  },

  toggleStamping: function () {
    this.set({'pdf_stamping': !this.get('pdf_stamping')});
  }
});

var ProductModel = BoneModel.extend({
    idAttribute: "key",
    defaults:{
        discount: {},
        price: 90,
        g_analytics: '',
        pdf_stamping: false
    },

    initialize: function () {
      this._file = new ProductFile();
      this._file.on('change:pdf_stamping', this.setStamping, this);
    },

    setStamping: function (file) {
      this.set({'pdf_stamping': file.get('pdf_stamping')});
    },

    url: function(){
        if (!this.isNew())
            return api_url_me + "products/" + this.get("key")+"/"
        else
            return api_url_me + "products/"
    },

    product_url:function(){
        return base_pub_url + "p/" + this.id + "/"
    },

    currencySign: function(){
        return currency_sign(this.currency)
    },

    imageUrl: function(){
      if(typeof this.get("image").url==='undefined'){
        return 'https://static.sellfy.com/media/css/images/product-default-placeholder.png';
      } else {
        return this.get("image").url
      }
    },

    parse: function (response) {
      if (!_.has(this, '_file')) {
          this._file = new ProductFile(response.file);
      } else {
          this._file.set(response.file);
      }

      return response;
    }
});

var ProductNamesCollection = BoneCollection.extend({
    model: ProductModel,
    url: api_url_me + "products/?only=name,key,id&per_page=-1&"
})

var ProductAllSoldCollection = BoneCollection.extend({
    model: ProductModel,
    url: api_url_me + "products/all_sold/?only=name,key,id&per_page=-1&"
})

var ProductCollection = RequestPagerCollection.extend({
    model: ProductModel,
    url: api_url_me + "products/?only=price,name,file,currency,key,image,created_at,extension,size,public&"
})

ProductsTableView = RequestPagerView.extend({
    collection: ProductCollection,
    events: {
        'click .public_switch label': 'changePublicState'
    },
    pageTitleData: {
        'caption': 'My products'
    },

    render: function () {
        html = _.template(tpl.get('product_table'), {
            items: this.collection
        });
        this.$el.html(html);
        this.renderPagination();
        this.pageTitle('Products');
        $('.public_label').each(function () {
            initChecboxer($(this));
        });
        lastVisitCookie('dashboard');
        return this;
    },

    changePublicState: function(e) {
        var e = $(e.currentTarget);
        var key = e.parents(".ftr").attr("id");
        var current_model = this.collection.get(key);
        var state = changeCheckboxer(e);
        //Empty file and image, because we don't want to change it
        current_model.set({'public': state, 'file': '', 'image': ''});
        current_model.save();
    }

});

function SelectAll(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

var OrderModel = Backbone.Model.extend({
    idAttribute: "txn_id",
    getPayer:function(){
        if(order.get("payer_email")){
            return order.get("payer_email")
        }else{
            return '';
        }
    },
    getOrderHistory: function(){

        var history = []
        history.push({
            'date'      : this.get('payment_date'),
            'message'    : 'Payment status: ' + this.get('payment_status')
        })

        if (this.get("download")){
            _.each(this.get("download")["history"],function(v){
                history.push({
                    'date'      :  v["date"],
                    'message'    : 'Product downloaded'
                })
            })
        }
        return history
    }

});

var OrderCollection = RequestPagerCollection.extend({
    model: OrderModel,
    url: APIURLV2 + 'orders/',
    //url: apiUrl('orders'),
    parse: function (data) {
        this.totalPages = data.pagination.pages_total;
        return data.items;
    },
});


OrderView = BoneView.extend({
    model: OrderModel,

    render: function(){
        html = _.template(tpl.get('orderDetails'), {order:this.model, _:_})
        this.$el.html(html)
        return this;
    }

})

OrdersTableView = RequestPagerView.extend({
    collection: OrderCollection,

    pageTitleData: {
        caption: 'Order history',
        description: 'Browse your order history. Click on the order to see full details.'
    },

    events: {
        'click .ftr': 'showDetails',
        'click .reset_downloads a': 'resetDownloads'
    },
    searchEnabled: true,

    render: function () {
        html = _.template(tpl.get('ordersTable'), {
            items: this.collection
        })
        this.$el.html(html)
        this.renderPagination()
        this.pageTitle("Orders");
        return this;
    },

    search: function () {
        value = this.$el.find('#search_term').val();

        value = value ? value : '';

        this.tmpSearchValue = value;

        if (!this.collectionUrl) {
            this.collectionUrl = this.collection.url;
        }

        this.collection.url = this.collectionUrl + '?where=' + this.search_query(value);
        this.collection.paginator_core.page = 1;
        this.collection.currentPage = 1;
        this.collection.paginator_core.url = this.collection.url;
        this.collection.fetch();
        return false;
    },

    showDetails: function(e){
        var row = $(e.currentTarget)
        if(row.hasClass('caption'))
            return false;

        txn_id = row.attr("id").replace("row_", "")
        order = this.collection.get(txn_id)
        var container = row.next(".order_details_cont");

        if (container.length) { // aizveram
            var row_next = container.next(".ftr");
            container.html("").animate({
                "min-height":"0px"
            }, 250, function () {
                row.removeClass("active");
                row_next.css({
                    "border-top":"none"
                })
                container.remove()
            })
            return false
        }

        container = $('<div class="order_details_cont" id="' + txn_id + ' "></div>')
        orderView = new OrderView({model: order})
        container.insertAfter(row);
        this.assign(orderView, container)

        if (container.next().hasClass("ftr")) {
            container.next().css({
                "border-top":"1px solid #D9D9D9"
            })
        }

    },

    resetDownloads: function(e){
        var btn = $(e.currentTarget)
        $.post(base_user_url + 'orders/' + btn.attr("id") + '/resend/',{},function(resp){
            //resp = $.parseJSON(resp)
            if (resp.success){
                btn.parent().find('.downloads_used').html(0)
                show_noty("Email sent!","success");
            }else{
                show_noty(resp.error,"error");
            }
        })
        return false
    },

    search_query: function(value){
        return '{"payer_email__icontains": "'+value+'"}'
    }

});

//Refactored 19.02.2014
var DashboardView = BaseView.extend({
    render: function () {
        var _this = this;
        var products = new ProductNamesCollection();
        $.get(base_pub_url + 'is-new-user/', function (data) {
            if (data.success === 'true') {
                _this.$el.html(
                    _.template(tpl.get('welcomeScreen'))
                );
                _this.pageTitle('Welcome to Sellfy');
                ga('set', 'dimension1', 'registered');
                ga('set', 'dimension3', 'user-dashboard');
            }
            else {
                products.fetched(function () {
                    var selectProducts = _.template(tpl.get('productList'), {products : products, _ : _});
                    _this.$el.html(_.template(tpl.get('dashboardMain'), {_ : _, selectProducts : selectProducts}));
                    _this.change_chart();
                    _this.$el.find('.ui.dropdown')
                        .dropdown('setting', 'action', 'activate')
                        .dropdown({
                            onChange: function () {
                                _this.change_chart();
                            }
                        });
                    ga('set', 'dimension1', 'seller');
                    ga('set', 'dimension3', 'user-dashboard');
                });
                _this.pageTitle('Dashboard');
            }
        });
        lastVisitCookie('dashboard');
    },
    change_chart: function () {
        var month = this.$el.find('#month').val(),
            product = this.$el.find('#product_list').val(),
            year = this.$el.find('#year').val(),
            end_day = new Date(year, month, 0).getDate(),
            start_date =  month + '/1/' + year,
            end_date = month + '/' + end_day + '/' + year,
            product_views = this.$el.find('#dashboard-product-views-value');

        this.get_chart_data(
                start_date = start_date,
                end_date = end_date,
                chart = 'social',
                element = 'shares-chart',
                product_key = product,
                callback = this.draw_chart
        );
        this.get_chart_data(
                start_date = start_date,
                end_date = end_date,
                chart = 'sales',
                element = 'sales-chart',
                product_key = product,
                callback = this.draw_chart
        );
        this.get_chart_data(
            start_date = start_date,
            end_date = end_date,
            chart = 'stats',
            element =  null,
            product_key =  product,
            callback = function (resp) {
                product_views.html(resp.product_clicks);
            });
    },
    get_chart_data: function (start_date, end_date, chart, element, product_key, callback) {
        _this = this;

        $.get(api_url_me + 'charts/', {
            start_date : start_date,
            end_date : end_date,
            chart : chart,
            product : product_key
        }, function (resp) {
            callback(resp, element, chart);
        });
    },
    draw_chart: function (resp, element, chart) {
        element = document.getElementById(element); //Flotr require js element
        if (element) {
            var data = [],
                data2 = [],
                container = element,
                sales_count = 0,
                sales_amount = 0.00;

            $.each(resp, function (k, v) {
                var d = Date.parse(k);
                if (chart === 'social') {
                    data.push([d, v.shares]);
                    data2.push([d, v.clicks]);
                } else {
                    data.push([d, itm(v.amount), v.count]);
                    sales_count += v.count;
                    sales_amount += v.amount;
                }
            });

            if (chart === 'sales') {
                $('#dashboard-product-sales-value').html(sales_count);
                $('#dashboard-product-revenue-value').html(currency_sign(userModel.get('currency')) + money(itm(sales_amount)));
            }

            graph = Flotr.draw(container, [
                {
                    data : data,
                    label : 'd1',
                    color : ((chart === 'social') ? '#48C0EF' : '#C3DF81')
                },
                {
                    data : data2,
                    label : 'd2',
                    color : '#BAF3FF',
                    points: {
                        show: false
                    },
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: '#BAF3FF',
                        fillOpacity: 0.7
                    },
                    bars : {
                        show: false
                    }
                }
            ],
            {
                xaxis : {
                    mode : 'time',
                    labelsAngle : 45
                },
                yaxis: {
                    min: 0,
                    tickFormatter: function (tick) {
                        if (chart === 'sales') {
                            return currency_sign(userModel.get('currency')) + money(tick);
                        }
                        else {
                            return parseInt(tick);
                        }
                    }
                },
                bars : {
                    show : true,
                    shadowSize : 1,
                    lineWidth: 3,
                },
                mouse : {
                    track: true,
                    trackAll: true,
                    relative: true,
                    lineColor: ((chart === 'social') ? '#3EB6E5' : '#B9D577'),
                    sensibility: 1,
                    trackFormatter: function (obj) {
                        var value = obj.nearest.y,
                            unix_timestamp = obj.x.substring(0, 10),
                            date = new Date(unix_timestamp * 1000),
                            months = get_short_months();

                        if (chart === 'social') {
                            if (obj.series.label === 'd1') {
                                text = 'Shares: ';
                            }
                            else {
                                text = 'Clicks: ';
                            }
                            text += parseInt(value);
                        } else {
                            text = 'Income: ' + currency_sign(userModel.get('currency')) + money(value);
                            text += '<br/>Sales: ' + obj.series.data[obj.index][2];
                        }
                        return months[date.getMonth()] + ' ' + date.getDate() + '<br/>' + text;
                    }
                },
                grid : {
                    verticalLines : false,
                    outlineWidth: 0,
                    labelMargin: 10
                },
                legend : {
                    show : false
                }
            });
        } else {
            return false;
        }
    }
});

jQuery.validator.addMethod("cardNumber", Stripe.validateCardNumber, "Please enter a valid card number");
jQuery.validator.addMethod("cardCVC", Stripe.validateCVC, "Please enter a valid security code");
jQuery.validator.addMethod("cardExpiry", function() {
    return Stripe.validateExpiry(parseInt($(".card-expiry-month").val()),2000+$(".card-expiry-year").val());
}, "Please enter a valid expiration");
jQuery.validator.addMethod("checkDownLink", function() {
    if($('#email_template_text').val().indexOf('[download_link]') == -1) { return false; }
    else { return true; }
}, "You have forgotten to add [download_link] to your email body field");

function addCCInputNames() {
    $('.card-number').attr('name', 'card-number');
    $('.card-cvc').attr('name', 'card-cvc');
    $('.card-expiry-year').attr('name', 'card-expiry-year');
}

function removeCCInputNames() {
    $('.card-number').removeAttr('name');
    $('.card-cvc').removeAttr('name');
    $('.card-expiry-year').removeAttr('name');
}


var UserModel = BoneModel.extend({
    defaults: {
        g_analytics: '',
        resource: '$direct'
    },
    events: {
        'onSave' : 'fetch'
    },
    idAttribute: 'email',
    url: apiUrl(''),
    getCreditCard: function(){
        if(getValue(this.get('credit_card'), 'last4')){
            return this.get('credit_card');
        }else{
            return false;
        }
    }
});

var userModel = new UserModel(); //inicializejot routes, tiek dabuts useris no servera

var UserSettingView = BaseView.extend({

    events: {
        'submit #change_settings' : 'saveSettings'
    },
    saveSettings: function(e){
        var json = $(e.currentTarget).toJSON();
        userModel.save(json);
        return false;
    }

});

var SettingsAccountView = UserSettingView.extend({

    'events': {
        'change #img_upload_form input[type="file"]': 'uploadImage',
        'click #delete_account': 'deleteAcc',
        'click #facebook_unlink': 'deleteFb',
        'click #resend_email_verification' : 'resendVerification',
        'submit #change_settings' : 'saveSettings'
    },

    pageTitleData: {
        'caption': 'Account Settings',
        'description': 'Your account information and profile settings.'
    },

    render: function() {
        this.$el.html(
            _.template(tpl.get('settingsAccount'),{_:_, item:userModel})
        );
        this.pageTitle('Account settings');

        var headerUploadView = new App.Views.HeaderImageUploader({
            el: this.$('#header_upload_container'),
            model: userModel,
        });

        headerUploadView.render();

    },

    saveSettings: function(e){
        var _this = this,
            json = $(e.currentTarget).toJSON(),
            email = this.$el.find('#email').val(),
            currentEmail = userModel.get('email'),
            onSave = {};

        save_dimmer_toggle(_this.$el, true);
        onSave.success = function(){
            save_dimmer_toggle(_this.$el, false);
            if(email !== currentEmail) {
                $.post(base_user_url + 'change_email/', {email:email}, function(resp) {
                    if(resp.error) {
                        notification(resp.error, 'error');
                    } else if(resp.message) {
                        notification(resp.message, 'success', 5000);
                    } else {
                        notification('Account settings saved successfully!', 'success', 3000);
                    }
                });
            } else {
                notification('Account settings saved successfully!', 'success', 3000);
            }
        };
        onSave.error = function(self, response) {
            error = $.parseJSON(response.responseText);
            notification(error.error, 'error');
            save_dimmer_toggle(_this.$el, false);
        };

        userModel.save(json, onSave);
        return false;
    },
    uploadImage: function(){

        var _this = this;
        $('#img_upload_submit').trigger('click');

        function show_loader() {
            _this.$el.find('#img_upload_container .upload_percentage').show();
        }

        function hide_img_upl_loader() {
            _this.$el.find('#img_upload_container .upload_percentage').hide();
        }

        function show_image(url) {
            _this.$el
                 .find('#file_upload_img')
                 .css('background-image', 'url(' + url + ')')
                 .ready(function() {
                    hide_img_upl_loader();
                 });
        }

        show_loader();

        _this.$el.find('#img_upl_iframe').load(function () {
            var content = $('#img_upl_iframe').contents().find('pre').html(),
                data = $.parseJSON(content);
            _this.$el.find('input[name="image"]').val(data.id);
            show_image(data.url);
        });
    },

    deleteAcc: function() {
        var _this = this,
            answer = confirm('Do you really want to delete your account? (Warning! This action is irreversible!)');
        if(answer) {
            save_dimmer_toggle(_this.$el, true);
            csrf_enabled_callback(function(token){
                $.post('/user/delete_profile/' + token, function(resp) {
                    save_dimmer_toggle(_this.$el, false);
                    if (!resp.success) {
                        alert('Page expired. Please try again after refresh!');
                    }
                    window.location.reload(resp.success);
                });
            });
        }
        return false;
    },
    deleteFb: function() {
        answer = confirm('Do you really want to unlink your Facebook account? (Please use "Forgot password" form to generate password for your account)');
        if(answer)
        {
            $.post(base_user_url+'remove-facebook/', function(data) {
                if(data.success){
                    window.location = base_user_url;
                }
                else{
                    show_noty(data.error, 'error');
                }
            });
        }
        return false;
    },
    resendVerification: function() {
        $.post(base_pub_url+'auth/resend_email/', function() {
            show_noty('Email sent!', 'success');
        });
        return false;
    }

});

var SettingsEmailsView = UserSettingView.extend({
    events: {
        'submit #change_settings' : 'saveSettings'
    },
    pageTitleData: {
        'caption': 'Email Settings',
        'description': 'Change your email communication settings.'
    },
    render: function () {
        this.$el.html(
            _.template(tpl.get('settingsEmails'), {_: _, item: userModel})
        );
        this.pageTitle('Email Settings');
        this.$el.find('.checkbox').checkbox();
    },
    saveSettings: function (e) {
        var json = $(e.currentTarget).toJSON();
        json.news_email_reports = $('#news_email_reports').is(':checked');
        json.weekly_email_reports = $('#weekly_email_reports').is(':checked');
        json.monthly_email_reports = $('#monthly_email_reports').is(':checked');
        userModel.save(json);
        return false;
    }
});

var SettingsCustomiztaionView = UserSettingView.extend({
    events: {
        'submit #change_settings' : 'saveSettings',
    },
    pageTitleData: {
        'caption': 'Customization',
        'description': 'Edit e-mail template your customers receive after the purchase.'
    },

    render:function () {
        this.$el.html(
            _.template(tpl.get('settingsCustomization'), {_:_, item:userModel})
        );
        this.pageTitle('Customization');
    },
    saveSettings: function(e){
        var json = $(e.currentTarget).toJSON();
         userModel.save(json);
        return false;
    }
});

var SettingsPasswordView = UserSettingView.extend({

    events  : {
        'submit form[name="change_password"]' : 'changePassword'
    },

    pageTitleData: {
        'caption': 'Change Password'
    },

    render:function () {
        this.$el.html(
            _.template(tpl.get('settingsPassword'), {_:_})
        );
        this.pageTitle('Change Password');
    },

    changePassword : function(event){
        var form = $(event.currentTarget);
        $.post(base_pub_url + 'auth/change_psw/',form.serialize(), function(resp){
            if (resp.error){
                notification(resp.error, 'error');
            }else{
                notification('Password changed', 'success');
            }
        });
        return false;
    }
});

var SettingsPaymentOptions = BaseView.extend({
    events: {
        'click input[type="submit"]' : 'validateCreditCard',
        'change #default_cc' : 'defaultCCprovider',
        'click #change_cc': 'showChangeCC',
        'click #close_cc': 'hideChangeCC'
    },
    validateCC: false, //vai nepieciesams validet kreditkarti?
    paymillToken: null,
    pageTitleData: {
        'caption': 'Payment Options',
        'description': 'Add/edit your payment options.'
    },

    render: function(){

        this.$el.html(
            _.template(tpl.get('settingsPaymentOptions'),{_:_, item:userModel})
        );

        this.$el.find('#default_cc').trigger('change');

        if (userModel.getCreditCard()) {
            this.$el.find('.po-saved-credit-card').show();
        } else {
            this.$el.find('.po-credit-card-form').show();
            this.$el.find('#close_cc').hide();
        }

        addCCInputNames();

        if (this.validateCC) {
            this.$el.find('form').validate({
                submitHandler: function(){},
                rules: {
                    'card-cvc' : {
                        cardCVC: true,
                        required: true
                    },
                    'card-number' : {
                        cardNumber: true,
                        required: true
                    },
                    'card-expiry-year' : 'cardExpiry'
                }
            });
        }
        this.pageTitle('Payment options');
        this.$el.find('.checkbox').checkbox();
        this.$el.find('.dropdown').dropdown({onChange: function(){
            $(this).find('input').trigger('change');
        }});
    },

    defaultCCprovider: function(e) {

        var value = $(e.currentTarget).val(),
            paymill_cont = this.$el.find('#paymill_tokens'),
            stripe_cont = this.$el.find('#stripe_tokens');
        this.validateCC = true;

        this.showAddCC();
        switch(value) {

            case 'stripe':
                stripe_cont.show();
                paymill_cont.hide();
                break;

            case 'paymill':
                stripe_cont.hide();
                paymill_cont.show();
                break;
        }
    },

    showAddCC: function() {
        this.$el.find('#cc_form_cont').show();
        if (!userModel.getCreditCard()){
            this.$el.find('#no_cc').show();
        } else {
            this.$el.find('#has_cc').show();
        }
    },

    hideAddCC: function() {
        if (!userModel.getCreditCard()){
            this.$el.find('#cc_form_cont').hide();
            this.$el.find('#no_cc').hide();
        }
    },

    showChangeCC: function(){
        this.validateCC = true;
        this.$el.find('.po-saved-credit-card').hide();
        this.$el.find('.po-credit-card-form').show();
        return false;
    },

    hideChangeCC: function() {
        this.validateCC = false;
        this.$el.find('input[name="cc_token"]').remove();
        this.$el.find('.po-saved-credit-card').show();
        this.$el.find('.po-credit-card-form').hide();
        return false;
    },

    validateCreditCard : function() {
        var that = this;

        if(this.validateCC && this.$el.find('#default_cc_enabled').is(':checked')) {
            paymill.createToken({
                number: $('.card-number').val(),   // required, without spaces and hyphens
                cvc: $('.card-cvc').val(),
                exp_month: $('.card-expiry-month').val(),   // required
                exp_year: 2000 + parseInt($('.card-expiry-year').val()),     // required, four digits e.g. "2016"
                amount_int: 1,     // required, integer e.g. "15" for 0.15 EUR
                currency: 'USD' // required, ISO 4217 e.g. "EUR" or "GBP"
            }, function(error, result) {
                if (error) {
                    that.handlePaymillError(error);
                } else {
                    var token = result.token;
                    that.paymillToken = token;
                    $('#change_settings').append('<input type="hidden" name="cc_token" value="' + token + '"/>');
                    that.saveSettings();
                    that.hideChangeCC();
                }
            });
        } else {
            this.saveSettings();
        }
        return false;
    },

    saveSettings: function(){
        var form = this.$el.find('#change_settings'),
            json = form.toJSON();
        json.paypal_enabled = form.find('#paypal_enabled').is(':checked');
        json.cc_payment_enabled = form.find('#default_cc_enabled').is(':checked');
        userModel.on('change', this.render, this);
        userModel.save(json);
        return false;
    },

    handlePaymillError: function(error){
        var errors = {
            field_invalid_card_number : 'Please enter a valid card number',
            field_invalid_card_exp    : 'Please enter a valid expiration',
            field_invalid_card_cvc    : 'Please enter a valid CVV code'
        };
        var msg;
        e = error.apierror;
        if(getValue(error, 'message')) {
            msg = decodeURI(error.message).replace('+', ' ').split('+').join(' ');
        } else {
            if(getValue(errors, e)) {
                msg = errors[e];
            } else {
                msg = error.apierror;
            }
        }
        show_noty(msg, 'error');
    }
});

var SettingsBillingView = BaseView.extend({

    events: {
        'click .payment_invoice' : 'downloadInvoice'
    },

    pageTitleData: {
        'caption': 'Billing History',
        'description': 'Your monthly transaction amounts and invoices for our transaction fees.'
    },

    render: function() {
        var that = this;
        var tmpCharges = userModel.get('charges');
        this.charges = {};

        _.each(tmpCharges, function(c1){
            var c = clone(c1);
            var d = new Date(c.created_at);
            if (c.via == 'paypal') {
                c.via = 'Paid via <i>PayPal</i>';
            } else if (c.via == 'paymill') {
                c.via = 'Paid via <i>Paymill</i>';
            } else {
                c.via = '';
            }
            that.charges[d.getTime()] = c;
        });
        this.$el.html(
            _.template(tpl.get('settingsBilling'),{_:_, charges:this.charges})
        );
        this.pageTitle('Billing history');
    },
    downloadInvoice: function(e){
        $.post(base_user_url+'download_invoice/'+ $(e.currentTarget).attr("id"),null, function(resp) {
            window.location.href = resp;
        });
        return false;
    }
});

var IntegrationsView = BaseView.extend({

    loaded: false,

    events: {
        'submit #change_settings' : 'saveSettings',
        'click #facebook_allow_access' : 'showAccessDialog'
    },

    initialize: function () {
        var _this = this;
        this.pages = {};

        $(document).on('facebook:ready', function () {
            pages = _this.addFacebookPages();
        });
    },
    render: function () {
        var _this = this,
            page_id = userModel.get('facebook_page_tab_id');

        pageTitle('Integrations');

        var html = _.template(App.Templates.get('integrations'), {
            _ : _,
            item : userModel
        });
        _this.$el.html(html);

        if (page_id) {
            if (document.is_facebook_loaded) {
                pages = _this.addFacebookPages();
            }
        } else {
            _this.$('.facebook-page-loading').hide();
            _this.$('.configure-facebook-button').fadeIn();
        }

        return this;
    },
    addFacebookPages: function () {
        var _this = this,
            dropdown = $('#facebook_page_select'),
            fb_button_wrap = _this.$('.configure-facebook-button'),
            fb_button_tab = _this.$('.configure-facebook-pagetab'),
            fb_loading = _this.$('.facebook-page-loading');

        FB.api('/me/accounts', function (response) {
            if (response && response.data && response.data.length > 0) {
                dropdown.find('.menu').empty();
                $.each(response.data, function (key, value) {
                    var div = $('<div></div>'),
                        class_name = 'item';
                    if (_this.page_id === value.id) {
                        class_name += ' active';
                        dropdown.find('input').val(value.id);
                    }
                    div.addClass(class_name)
                       .text(value.name)
                       .attr('data-value', value.id);
                    dropdown.find('.menu').append(div);
                    _this.storeFacebookResponse(value.id, value.access_token);
                });
                _this.$('.ui.dropdown').dropdown();
                fb_button_wrap.fadeOut(function () {
                    fb_loading.hide();
                    fb_button_tab.fadeIn();
                });
            } else {
                _this.removeConnectMessage();
                fb_loading.hide();
                fb_button_wrap.fadeIn();
                if(_this.loaded){
                    show_noty('You need to create at least one Facebook page, in order to add tab page');
                }
            }
            _this.loaded = true;
        });
    },
    showConnectMessage: function () {
        this.$('#facebook_allow_access').text('Connecting...');
    },
    removeConnectMessage: function () {
        this.$('#facebook_allow_access').text('Allow access');
    },
    showAccessDialog: function () {
        var _this = this;
        _this.showConnectMessage();
        FB.login(function (response) {
            if (response.status === 'connected') {
                _this.addFacebookPages();
            }
        }, {scope: 'email, manage_pages'});
        return false;
    },
    storeFacebookResponse: function (id, token) {
        this.pages[id] = token;
    },
    createFacebookTab: function () {
        var _this = this,
            fb_page_id = $('#facebook_page_tab_id').val(),
            access_token = this.pages[fb_page_id];

        if (fb_page_id && access_token) {
            FB.api(
                '/' + fb_page_id + '/tabs',
                'POST',
                {
                    app_id: '254799671228998',
                    access_token: access_token
                },
                function (response) {
                    if (response) {
                        _this.showFacebookSuccessMessage();
                    } else {
                        _this.showFacebookErrorMessage();
                    }
                    _this.removeConnectOnSaveMessage();
                }
            );
        } else {
            _this.showFacebookErrorMessage();
            _this.removeConnectOnSaveMessage();
        }
    },
    showFacebookSuccessMessage: function () {
        show_noty('Page tab created successfully!', 'success');
    },
    showFacebookErrorMessage: function () {
        show_noty('Error while creating page tab. Try again later', 'error');
    },
    showConnectOnSaveMessage: function () {
        this.$('#facebook_page_tab_save_button').val('Please wait..')
                                                .attr('disabled', 'disabled');
    },
    removeConnectOnSaveMessage: function () {
        this.$('#facebook_page_tab_save_button').val('Save settings')
                                                .removeAttr('disabled');
    },
    saveSettings: function (e) {
        var json = $(e.currentTarget).toJSON(),
            _this = this;
        _this.showConnectOnSaveMessage();
        userModel.save(json, {
            success: function () {
                _this.createFacebookTab();
                _this.removeConnectOnSaveMessage();
            },
            error: function (model, response) {
                var resp = $.parseJSON(response.responseText);
                show_noty(resp.error, 'error');
                _this.removeConnectOnSaveMessage();
            }
        });
        return false;
    },
});

/* Welcome screen View */
var UserWelcomeView = BaseView.extend({
    render: function(){
        this.$el.html(
            _.template(tpl.get('welcomeScreen'))
        );
        this.pageTitle('Welcome to Sellfy');
    }
});
var STATES = {"US": {"US-NY": {"tax": "0.040000", "name": "New York"}, "US-PA": {"tax": "0.060000", "name": "Pennsylvania"}, "US-TN": {"tax": "0.070000", "name": "Tennessee"}, "US-ID": {"tax": "0.060000", "name": "Idaho"}, "US-NV": {"tax": "0.068500", "name": "Nevada"}, "US-NJ": {"tax": "0.070000", "name": "New Jersey"}, "US-NH": {"tax": "0.000000", "name": "New Hampshire"}, "US-VA": {"tax": "0.043000", "name": "Virginia"}, "US-HI": {"tax": "0.040000", "name": "Hawaii"}, "US-VT": {"tax": "0.060000", "name": "Vermont"}, "US-NM": {"tax": "0.051250", "name": "New Mexico"}, "US-NC": {"tax": "0.047500", "name": "North Carolina"}, "US-ND": {"tax": "0.050000", "name": "North Dakota"}, "US-NE": {"tax": "0.055000", "name": "Nebraska"}, "US-LA": {"tax": "0.040000", "name": "Louisiana"}, "US-MT": {"tax": "0.000000", "name": "Montana"}, "US-SD": {"tax": "0.040000", "name": "South Dakota"}, "US-DC": {"tax": "0.057500", "name": "District of Columbia"}, "US-DE": {"tax": "0.000000", "name": "Delaware"}, "US-FL": {"tax": "0.060000", "name": "Florida"}, "US-CT": {"tax": "0.063500", "name": "Connecticut"}, "US-WA": {"tax": "0.065000", "name": "Washington"}, "US-KS": {"tax": "0.061500", "name": "Kansas"}, "US-WI": {"tax": "0.050000", "name": "Wisconsin"}, "US-OR": {"tax": "0.000000", "name": "Oregon"}, "US-KY": {"tax": "0.060000", "name": "Kentucky"}, "US-CO": {"tax": "0.029000", "name": "Colorado"}, "US-OH": {"tax": "0.057500", "name": "Ohio"}, "US-IA": {"tax": "0.060000", "name": "Iowa"}, "US-WV": {"tax": "0.060000", "name": "West Virginia"}, "US-WY": {"tax": "0.040000", "name": "Wyoming"}, "US-UT": {"tax": "0.047000", "name": "Utah"}, "US-IN": {"tax": "0.070000", "name": "Indiana"}, "US-IL": {"tax": "0.062500", "name": "Illinois"}, "US-AK": {"tax": "0.000000", "name": "Alaska"}, "US-TX": {"tax": "0.062500", "name": "Texas"}, "US-ME": {"tax": "0.050000", "name": "Maine"}, "US-MD": {"tax": "0.060000", "name": "Maryland"}, "US-MA": {"tax": "0.062500", "name": "Massachusetts"}, "US-AL": {"tax": "0.040000", "name": "Alabama"}, "US-MO": {"tax": "0.042250", "name": "Missouri"}, "US-MN": {"tax": "0.068750", "name": "Minnesota"}, "US-AA": {"tax": "0.000000", "name": "Armed Forces Americas"}, "US-CA": {"tax": "0.075000", "name": "California"}, "US-OK": {"tax": "0.045000", "name": "Oklahoma"}, "US-MI": {"tax": "0.060000", "name": "Michigan"}, "US-GA": {"tax": "0.040000", "name": "Georgia"}, "US-AZ": {"tax": "0.056000", "name": "Arizona"}, "US-AE": {"tax": "0.000000", "name": "Armed Forces"}, "US-MS": {"tax": "0.070000", "name": "Mississippi"}, "US-SC": {"tax": "0.060000", "name": "South Carolina"}, "US-RI": {"tax": "0.070000", "name": "Rhode Island"}, "US-AR": {"tax": "0.065000", "name": "Arkansas"}, "US-AP": {"tax": "0.000000", "name": "Armed Forces Pacific"}}};
var REGIONS = {"R_EU": {"name": "European Union", "members": ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"]}};
var COUNTRIES = {"BD": {"local_name": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6", "tax": "0.150000", "continent": "C_ASIA", "name": "Bangladesh"}, "WF": {"local_name": "Wallis-et-Futuna", "tax": "0.060000", "continent": "C_OCEANIA", "name": "Wallis and Futuna"}, "BF": {"local_name": "Burkina Faso", "tax": "0.180000", "continent": "C_AFRICA", "name": "Burkina Faso"}, "BG": {"local_name": "B\u0103lgarija", "tax": "0.200000", "continent": "C_EUROPE", "name": "Bulgaria"}, "BA": {"local_name": "Bosna i Hercegovina", "tax": "0.170000", "continent": "C_EUROPE", "name": "Bosnia and Herzegovina"}, "BB": {"local_name": "Barbados", "tax": "0.175000", "continent": "C_NAMERICA", "name": "Barbados"}, "BE": {"local_name": "Belgi\u00eb", "tax": "0.210000", "continent": "C_EUROPE", "name": "Belgium"}, "BL": {"local_name": "Saint-Barth\u00e9lemy", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Barth\u00e9lemy"}, "BM": {"local_name": "Bermuda", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Bermuda"}, "BN": {"local_name": "Brunei", "tax": "0.000000", "continent": "C_ASIA", "name": "Brunei"}, "BO": {"local_name": "Bolivia", "tax": "0.130000", "continent": "C_SAMERICA", "name": "Bolivia"}, "JP": {"local_name": "\u65e5\u672c", "tax": "0.050000", "continent": "C_ASIA", "name": "Japan"}, "BI": {"local_name": "Uburundi", "tax": "0.180000", "continent": "C_AFRICA", "name": "Burundi"}, "BJ": {"local_name": "B\u00e9nin", "tax": "0.180000", "continent": "C_AFRICA", "name": "Benin"}, "BT": {"local_name": "\u0f60\u0f56\u0fb2\u0f74\u0f42\u0f0b\u0f61\u0f74\u0f63", "tax": "0.500000", "continent": "C_ASIA", "name": "Bhutan"}, "JM": {"local_name": "Jamaica", "tax": "0.175000", "continent": "C_NAMERICA", "name": "Jamaica"}, "BV": {"local_name": "Bouvet\u00f8ya", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "Bouvet Island"}, "JO": {"local_name": "\u0627\u0644\u0623\u0631\u062f\u0646", "tax": "0.160000", "continent": "C_ASIA", "name": "Jordan"}, "WS": {"local_name": "S\u0101moa", "tax": "0.125000", "continent": "C_OCEANIA", "name": "Samoa"}, "BQ": {"local_name": "Bonaire", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Bonaire"}, "BR": {"local_name": "Brasil", "tax": "0.200000", "continent": "C_SAMERICA", "name": "Brazil"}, "BS": {"local_name": "The Bahamas", "tax": "0.000000", "continent": "C_NAMERICA", "name": "The Bahamas"}, "JE": {"local_name": "Jersey", "tax": "0.050000", "continent": "C_EUROPE", "name": "Jersey"}, "BY": {"local_name": "\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c", "tax": "0.200000", "continent": "C_EUROPE", "name": "Belarus"}, "BZ": {"local_name": "Belize", "tax": "0.125000", "continent": "C_NAMERICA", "name": "Belize"}, "RU": {"local_name": "\u0420\u043e\u0441\u0441\u0438\u044f", "tax": "0.180000", "continent": "C_EUROPE", "name": "Russia"}, "RW": {"local_name": "Rwanda", "tax": "0.000000", "continent": "C_AFRICA", "name": "Rwanda"}, "RS": {"local_name": "\u0421\u0440\u0431\u0438\u0458\u0430", "tax": "0.180000", "continent": "C_EUROPE", "name": "Serbia"}, "LT": {"local_name": "Lietuva", "tax": "0.210000", "continent": "C_EUROPE", "name": "Lithuania"}, "RE": {"local_name": "R\u00e9union", "tax": "0.000000", "continent": "C_AFRICA", "name": "R\u00e9union"}, "LU": {"local_name": "L\u00ebtzebuerg", "tax": "0.150000", "continent": "C_EUROPE", "name": "Luxembourg"}, "LR": {"local_name": "Liberia", "tax": "0.000000", "continent": "C_AFRICA", "name": "Liberia"}, "RO": {"local_name": "Rom\u00e2nia", "tax": "0.240000", "continent": "C_EUROPE", "name": "Romania"}, "LS": {"local_name": "Lesotho", "tax": "0.000000", "continent": "C_AFRICA", "name": "Lesotho"}, "GW": {"local_name": "Guin\u00e9-Bissa", "tax": "0.150000", "continent": "C_AFRICA", "name": "Guinea-Bissa"}, "GU": {"local_name": "Gu\u00e5h\u00e5n", "tax": "0.040000", "continent": "C_OCEANIA", "name": "Guam"}, "GT": {"local_name": "Guatemala", "tax": "0.120000", "continent": "C_NAMERICA", "name": "Guatemala"}, "GS": {"local_name": "South Georgia and the South Sandwich Islands", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "South Georgia and the South Sandwich Islands"}, "GR": {"local_name": "\u0395\u03bb\u03bb\u03ac\u03c2", "tax": "0.230000", "continent": "C_EUROPE", "name": "Greece"}, "GQ": {"local_name": "Guinea Ecuatorial", "tax": "0.000000", "continent": "C_AFRICA", "name": "Equatorial Guinea"}, "GP": {"local_name": "Guadeloupe", "tax": "0.085000", "continent": "C_NAMERICA", "name": "Guadeloupe"}, "BH": {"local_name": "\u0627\u0644\u0628\u062d\u0631\u064a\u0646", "tax": "0.000000", "continent": "C_ASIA", "name": "Bahrain"}, "GY": {"local_name": "Guyana", "tax": "0.160000", "continent": "C_SAMERICA", "name": "Guyana"}, "GG": {"local_name": "Guernsey", "tax": "0.000000", "continent": "C_EUROPE", "name": "Guernsey"}, "GF": {"local_name": "Guyane", "tax": "0.000000", "continent": "C_SAMERICA", "name": "French Guiana"}, "GE": {"local_name": "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd", "tax": "0.180000", "continent": "C_EUROPE", "name": "Georgia"}, "GD": {"local_name": "Grenada", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Grenada"}, "GB": {"local_name": "United Kingdom", "tax": "0.200000", "continent": "C_EUROPE", "name": "United Kingdom"}, "GA": {"local_name": "Gabon", "tax": "0.180000", "continent": "C_AFRICA", "name": "Gabon"}, "SV": {"local_name": "El Salvador", "tax": "0.130000", "continent": "C_NAMERICA", "name": "El Salvador"}, "GN": {"local_name": "Guin\u00e9e", "tax": "0.000000", "continent": "C_AFRICA", "name": "Guinea"}, "GM": {"local_name": "The Gambia", "tax": "0.150000", "continent": "C_AFRICA", "name": "The Gambia"}, "GL": {"local_name": "Kalaallit Nunaat", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Greenland"}, "GI": {"local_name": "Gibraltar", "tax": "0.000000", "continent": "C_EUROPE", "name": "Gibraltar"}, "GH": {"local_name": "Ghana", "tax": "0.000000", "continent": "C_AFRICA", "name": "Ghana"}, "OM": {"local_name": "\u0639\u064f\u0645\u0627\u0646", "tax": "0.000000", "continent": "C_ASIA", "name": "Oman"}, "IL": {"local_name": "Israel", "tax": "0.160000", "continent": "C_ASIA", "name": "Israel"}, "BW": {"local_name": "Lefatshe la Botswana", "tax": "0.120000", "continent": "C_AFRICA", "name": "Botswana"}, "HR": {"local_name": "Hrvatska", "tax": "0.250000", "continent": "C_EUROPE", "name": "Croatia"}, "HT": {"local_name": "Ha\u00efti", "tax": "0.100000", "continent": "C_NAMERICA", "name": "Haiti"}, "HU": {"local_name": "Magyarorsz\u00e1g", "tax": "0.270000", "continent": "C_EUROPE", "name": "Hungary"}, "HK": {"local_name": "\u9999\u6e2f", "tax": "0.000000", "continent": "C_ASIA", "name": "Hong Kong"}, "HN": {"local_name": "Honduras", "tax": "0.120000", "continent": "C_NAMERICA", "name": "Honduras"}, "HM": {"local_name": "Heard Island and McDonald Islands", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "Heard Island and McDonald Islands"}, "VE": {"local_name": "Venezuela", "tax": "0.120000", "continent": "C_SAMERICA", "name": "Venezuela"}, "PR": {"local_name": "Puerto Rico", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Puerto Rico"}, "PS": {"local_name": "Palestinian Territories", "tax": "0.145000", "continent": "C_ASIA", "name": "Palestinian Territories"}, "PW": {"local_name": "Bela", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Pala"}, "PT": {"local_name": "Portugal", "tax": "0.230000", "continent": "C_EUROPE", "name": "Portugal"}, "SJ": {"local_name": "Svalbard", "tax": "0.000000", "continent": "C_EUROPE", "name": "Svalbard"}, "PY": {"local_name": "Paraguay", "tax": "0.100000", "continent": "C_SAMERICA", "name": "Paraguay"}, "IQ": {"local_name": "\u0627\u0644\u0639\u0631\u0627\u0642", "tax": "0.000000", "continent": "C_ASIA", "name": "Iraq"}, "PA": {"local_name": "Panam\u00e1", "tax": "0.070000", "continent": "C_NAMERICA", "name": "Panama"}, "PF": {"local_name": "Polyn\u00e9sie Fran\u00e7aise", "tax": "0.000000", "continent": "C_OCEANIA", "name": "French Polynesia"}, "PG": {"local_name": "Papua Niugini", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Papua New Guinea"}, "PE": {"local_name": "Per\u00fa", "tax": "0.160000", "continent": "C_SAMERICA", "name": "Per"}, "PK": {"local_name": "\u067e\u0627\u06a9\u0633\u062a\u0627\u0646", "tax": "0.160000", "continent": "C_ASIA", "name": "Pakistan"}, "PH": {"local_name": "Pilipinas", "tax": "0.120000", "continent": "C_ASIA", "name": "Philippines"}, "PN": {"local_name": "Pitcairn Islands", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Pitcairn Islands"}, "PL": {"local_name": "Polska", "tax": "0.230000", "continent": "C_EUROPE", "name": "Poland"}, "PM": {"local_name": "Saint-Pierre et Miquelon", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Pierre and Miquelon"}, "ZM": {"local_name": "Zambia", "tax": "0.175000", "continent": "C_AFRICA", "name": "Zambia"}, "EH": {"local_name": "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629", "tax": "0.000000", "continent": "C_AFRICA", "name": "Western Sahara"}, "EE": {"local_name": "Eesti", "tax": "0.200000", "continent": "C_EUROPE", "name": "Estonia"}, "EG": {"local_name": "\u0645\u0635\u0631", "tax": "0.100000", "continent": "C_AFRICA", "name": "Egypt"}, "ZA": {"local_name": "South Africa", "tax": "0.140000", "continent": "C_AFRICA", "name": "South Africa"}, "EC": {"local_name": "Ecuador", "tax": "0.120000", "continent": "C_SAMERICA", "name": "Ecuador"}, "IT": {"local_name": "Italia", "tax": "0.210000", "continent": "C_EUROPE", "name": "Italy"}, "VN": {"local_name": "Vi\u1ec7t Nam", "tax": "0.100000", "continent": "C_ASIA", "name": "Vietnam"}, "SB": {"local_name": "Solomon Islands", "tax": "0.150000", "continent": "C_OCEANIA", "name": "Solomon Islands"}, "ET": {"local_name": "Ityop\"ia", "tax": "0.150000", "continent": "C_AFRICA", "name": "Ethiopia"}, "SO": {"local_name": "\u0627\u0644\u0635\u0648\u0645\u0627\u0644", "tax": "0.140000", "continent": "C_AFRICA", "name": "Somalia"}, "ZW": {"local_name": "Zimbabwe", "tax": "0.000000", "continent": "C_AFRICA", "name": "Zimbabwe"}, "SA": {"local_name": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629", "tax": "0.000000", "continent": "C_ASIA", "name": "Saudi Arabia"}, "ES": {"local_name": "Espa\u00f1a", "tax": "0.180000", "continent": "C_EUROPE", "name": "Spain"}, "ER": {"local_name": "\u0625\u0631\u062a\u0631\u064a\u0627", "tax": "0.000000", "continent": "C_AFRICA", "name": "Eritrea"}, "ME": {"local_name": "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430", "tax": "0.170000", "continent": "C_EUROPE", "name": "Montenegro"}, "MD": {"local_name": "Moldova", "tax": "0.200000", "continent": "C_EUROPE", "name": "Moldova"}, "MG": {"local_name": "Madagasikara", "tax": "0.200000", "continent": "C_AFRICA", "name": "Madagascar"}, "MF": {"local_name": "Saint-Martin", "tax": "0.085000", "continent": "C_NAMERICA", "name": "Saint Martin"}, "MA": {"local_name": "\u0627\u0644\u0645\u063a\u0631\u0628", "tax": "0.200000", "continent": "C_AFRICA", "name": "Morocco"}, "MC": {"local_name": "Monaco", "tax": "0.196000", "continent": "C_EUROPE", "name": "Monaco"}, "UZ": {"local_name": "\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d", "tax": "0.000000", "continent": "C_ASIA", "name": "Uzbekistan"}, "MM": {"local_name": "Myanmar", "tax": "0.300000", "continent": "C_ASIA", "name": "Burma"}, "ML": {"local_name": "Mali", "tax": "0.180000", "continent": "C_AFRICA", "name": "Mali"}, "MO": {"local_name": "\u6fb3\u9580", "tax": "0.000000", "continent": "C_ASIA", "name": "Macau"}, "MN": {"local_name": "\u041c\u043e\u043d\u0433\u043e\u043b \u0423\u043b\u0441", "tax": "0.130000", "continent": "C_ASIA", "name": "Mongolia"}, "MH": {"local_name": "Ael\u014dn\u0304 in M\u0327aje\u013c", "tax": "0.100000", "continent": "C_OCEANIA", "name": "Marshall Islands"}, "MK": {"local_name": "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430", "tax": "0.180000", "continent": "C_EUROPE", "name": "Macedonia"}, "MU": {"local_name": "Maurice", "tax": "0.150000", "continent": "C_AFRICA", "name": "Mauritius"}, "MT": {"local_name": "Malta", "tax": "0.180000", "continent": "C_EUROPE", "name": "Malta"}, "MW": {"local_name": "Malawi", "tax": "0.165000", "continent": "C_AFRICA", "name": "Malawi"}, "MV": {"local_name": "Dhivehi Raajje", "tax": "0.000000", "continent": "C_ASIA", "name": "Maldives"}, "MQ": {"local_name": "Martinique", "tax": "0.085000", "continent": "C_NAMERICA", "name": "Martinique"}, "MP": {"local_name": "Northern Mariana Islands", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Northern Mariana Islands"}, "MS": {"local_name": "Montserrat", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Montserrat"}, "MR": {"local_name": "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627", "tax": "0.140000", "continent": "C_AFRICA", "name": "Mauritania"}, "IM": {"local_name": "Isle of Man", "tax": "0.000000", "continent": "C_EUROPE", "name": "Isle of Man"}, "UG": {"local_name": "Uganda", "tax": "0.000000", "continent": "C_AFRICA", "name": "Uganda"}, "TZ": {"local_name": "Tanzania", "tax": "0.180000", "continent": "C_AFRICA", "name": "Tanzania"}, "MY": {"local_name": "Malaysia", "tax": "0.100000", "continent": "C_ASIA", "name": "Malaysia"}, "MX": {"local_name": "M\u00e9xico", "tax": "0.160000", "continent": "C_NAMERICA", "name": "Mexico"}, "MZ": {"local_name": "Mo\u00e7ambique", "tax": "0.170000", "continent": "C_AFRICA", "name": "Mozambique"}, "FR": {"local_name": "France", "tax": "0.196000", "continent": "C_EUROPE", "name": "France"}, "IO": {"local_name": "Chagos Islands", "tax": "0.000000", "continent": "C_ASIA", "name": "British Indian Ocean Territory"}, "SH": {"local_name": "Saint Helena", "tax": "0.000000", "continent": "C_AFRICA", "name": "Saint Helena"}, "FI": {"local_name": "Suomi", "tax": "0.230000", "continent": "C_EUROPE", "name": "Finland"}, "FJ": {"local_name": "Viti", "tax": "0.150000", "continent": "C_OCEANIA", "name": "Fiji"}, "FK": {"local_name": "Falkland Islands", "tax": "0.000000", "continent": "C_SAMERICA", "name": "Falkland Islands"}, "FM": {"local_name": "Micronesia", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Micronesia"}, "FO": {"local_name": "F\u00f8royar", "tax": "0.250000", "continent": "C_EUROPE", "name": "Faroe Islands"}, "NI": {"local_name": "Nicaragua", "tax": "0.150000", "continent": "C_NAMERICA", "name": "Nicaragua"}, "NL": {"local_name": "Nederland", "tax": "0.210000", "continent": "C_EUROPE", "name": "Netherlands"}, "NO": {"local_name": "Norge", "tax": "0.250000", "continent": "C_EUROPE", "name": "Norway"}, "NA": {"local_name": "Namibia", "tax": "0.150000", "continent": "C_AFRICA", "name": "Namibia"}, "NC": {"local_name": "Nouvelle-Cal\u00e9donie", "tax": "0.000000", "continent": "C_OCEANIA", "name": "New Caledonia"}, "NE": {"local_name": "Niger", "tax": "0.190000", "continent": "C_AFRICA", "name": "Niger"}, "NF": {"local_name": "Norfolk Island", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Norfolk Island"}, "NG": {"local_name": "Nigeria", "tax": "0.050000", "continent": "C_AFRICA", "name": "Nigeria"}, "NZ": {"local_name": "New Zealand", "tax": "0.150000", "continent": "C_OCEANIA", "name": "New Zealand"}, "NP": {"local_name": "Nep\u0101la", "tax": "0.130000", "continent": "C_ASIA", "name": "Nepal"}, "NR": {"local_name": "Naoero", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Naur"}, "NU": {"local_name": "Niu\u0113", "tax": "0.050000", "continent": "C_OCEANIA", "name": "Niue"}, "CK": {"local_name": "K\u016bki \"\u0100irani", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Cook Islands"}, "CI": {"local_name": "C\u00f4te d\"Ivoire", "tax": "0.200000", "continent": "C_AFRICA", "name": "Ivory Coast"}, "CH": {"local_name": "Schweiz", "tax": "0.080000", "continent": "C_EUROPE", "name": "Switzerland"}, "CO": {"local_name": "Colombia", "tax": "0.160000", "continent": "C_SAMERICA", "name": "Colombia"}, "CN": {"local_name": "\u4e2d\u56fd", "tax": "0.170000", "continent": "C_ASIA", "name": "China"}, "CM": {"local_name": "Cameroun", "tax": "0.000000", "continent": "C_AFRICA", "name": "Cameroon"}, "CL": {"local_name": "Chile", "tax": "0.190000", "continent": "C_SAMERICA", "name": "Chile"}, "CC": {"local_name": "Cocos Islands", "tax": "0.000000", "continent": "C_ASIA", "name": "Cocos Islands"}, "CA": {"local_name": "Canada", "tax": "0.050000", "continent": "C_NAMERICA", "name": "Canada"}, "CG": {"local_name": "R\u00e9publique du Congo", "tax": "0.160000", "continent": "C_AFRICA", "name": "Republic of the Congo"}, "CF": {"local_name": "K\u00f6d\u00f6r\u00f6s\u00ease t\u00ee B\u00eaafr\u00eeka", "tax": "0.190000", "continent": "C_AFRICA", "name": "Central African Republic"}, "CD": {"local_name": "R\u00e9publique d\u00e9mocratique du Congo", "tax": "0.160000", "continent": "C_AFRICA", "name": "Democratic Republic of the Congo"}, "CZ": {"local_name": "\u010cesk\u00e1 republika", "tax": "0.200000", "continent": "C_EUROPE", "name": "Czech Republic"}, "CY": {"local_name": "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2", "tax": "0.150000", "continent": "C_ASIA", "name": "Cyprus"}, "CX": {"local_name": "Christmas Island", "tax": "0.000000", "continent": "C_ASIA", "name": "Christmas Island"}, "CR": {"local_name": "Costa Rica", "tax": "0.130000", "continent": "C_NAMERICA", "name": "Costa Rica"}, "CW": {"local_name": "Cura\u00e7ao", "tax": "0.060000", "continent": "C_NAMERICA", "name": "Cura\u00e7ao"}, "CV": {"local_name": "Cabo Verde", "tax": "0.150000", "continent": "C_AFRICA", "name": "Cape Verde"}, "CU": {"local_name": "Cuba", "tax": "0.200000", "continent": "C_NAMERICA", "name": "Cuba"}, "SZ": {"local_name": "Umbuso weSwatini", "tax": "0.140000", "continent": "C_AFRICA", "name": "Swaziland"}, "SY": {"local_name": "\u0633\u0648\u0631\u064a\u0627\u200e", "tax": "0.000000", "continent": "C_ASIA", "name": "Syrian Arab Republic"}, "SX": {"local_name": "Sint Maarten", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Sint Maarten"}, "KG": {"local_name": "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d", "tax": "0.200000", "continent": "C_ASIA", "name": "Kyrgyzstan"}, "KE": {"local_name": "Kenya", "tax": "0.160000", "continent": "C_AFRICA", "name": "Kenya"}, "SR": {"local_name": "Suriname", "tax": "0.000000", "continent": "C_SAMERICA", "name": "Suriname"}, "KI": {"local_name": "Kiribati", "tax": "0.100000", "continent": "C_OCEANIA", "name": "Kiribati"}, "KH": {"local_name": "Kampuchea", "tax": "0.100000", "continent": "C_ASIA", "name": "Cambodia"}, "KN": {"local_name": "Saint Kitts and Nevis", "tax": "0.170000", "continent": "C_NAMERICA", "name": "Saint Kitts and Nevis"}, "KM": {"local_name": "Komori", "tax": "0.100000", "continent": "C_AFRICA", "name": "Comoros"}, "ST": {"local_name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe", "tax": "0.000000", "continent": "C_AFRICA", "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe"}, "SK": {"local_name": "Slovensko", "tax": "0.200000", "continent": "C_EUROPE", "name": "Slovakia"}, "KR": {"local_name": "\ud55c\uad6d", "tax": "0.100000", "continent": "C_ASIA", "name": "South Korea"}, "SI": {"local_name": "Slovenija", "tax": "0.200000", "continent": "C_EUROPE", "name": "Slovenia"}, "KP": {"local_name": "\uc870\uc120", "tax": "0.150000", "continent": "C_ASIA", "name": "North Korea"}, "KW": {"local_name": "\u0627\u0644\u0643\u0648\u064a\u062a", "tax": "0.000000", "continent": "C_ASIA", "name": "Kuwait"}, "SN": {"local_name": "S\u00e9n\u00e9gal", "tax": "0.180000", "continent": "C_AFRICA", "name": "Senegal"}, "SM": {"local_name": "San Marino", "tax": "0.000000", "continent": "C_EUROPE", "name": "San Marino"}, "SL": {"local_name": "Sierra Leone", "tax": "0.150000", "continent": "C_AFRICA", "name": "Sierra Leone"}, "SC": {"local_name": "Seychelles", "tax": "0.150000", "continent": "C_AFRICA", "name": "Seychelles"}, "KZ": {"local_name": "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d", "tax": "0.120000", "continent": "C_ASIA", "name": "Kazakhstan"}, "KY": {"local_name": "Cayman Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Cayman Islands"}, "SG": {"local_name": "Singapore", "tax": "0.070000", "continent": "C_ASIA", "name": "Singapore"}, "SE": {"local_name": "Sverige", "tax": "0.250000", "continent": "C_EUROPE", "name": "Sweden"}, "SD": {"local_name": "\u0627\u0644\u0633\u0648\u062f\u0627\u0646", "tax": "0.100000", "continent": "C_AFRICA", "name": "Sudan"}, "DO": {"local_name": "Rep\u00fablica Dominicana", "tax": "0.160000", "continent": "C_NAMERICA", "name": "Dominican Republic"}, "DM": {"local_name": "Dominica", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Dominica"}, "DJ": {"local_name": "\u062c\u064a\u0628\u0648\u062a\u064a", "tax": "0.000000", "continent": "C_AFRICA", "name": "Djibouti"}, "DK": {"local_name": "Danmark", "tax": "0.250000", "continent": "C_EUROPE", "name": "Denmark"}, "VG": {"local_name": "British Virgin Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "British Virgin Islands"}, "DE": {"local_name": "Deutschland", "tax": "0.190000", "continent": "C_EUROPE", "name": "Germany"}, "YE": {"local_name": "\u0627\u0644\u064a\u0645\u0646", "tax": "0.050000", "continent": "C_ASIA", "name": "Yemen"}, "AT": {"local_name": "\u00d6sterreich", "tax": "0.200000", "continent": "C_EUROPE", "name": "Austria"}, "DZ": {"local_name": "\u0627\u0644\u062c\u0632\u0627\u0626\u0631", "tax": "0.170000", "continent": "C_AFRICA", "name": "Algeria"}, "US": {"local_name": "United States", "tax": "0.000000", "continent": "C_NAMERICA", "name": "United States"}, "LV": {"local_name": "Latvija", "tax": "0.210000", "continent": "C_EUROPE", "name": "Latvia"}, "UY": {"local_name": "Uruguay", "tax": "0.220000", "continent": "C_SAMERICA", "name": "Uruguay"}, "YT": {"local_name": "Mayotte", "tax": "0.000000", "continent": "C_AFRICA", "name": "Mayotte"}, "UM": {"local_name": "United States Minor Outlying Islands", "tax": "0.000000", "continent": "C_OCEANIA", "name": "United States Minor Outlying Islands"}, "LB": {"local_name": "\u0644\u0628\u0646\u0627\u0646", "tax": "0.100000", "continent": "C_ASIA", "name": "Lebanon"}, "LC": {"local_name": "Saint Lucia", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Lucia"}, "LA": {"local_name": "\u0e9b\u0eb0\u0ec0\u0e97\u0e94\u0ea5\u0eb2\u0ea7", "tax": "0.000000", "continent": "C_ASIA", "name": "Laos"}, "TV": {"local_name": "Tuval", "tax": "0.050000", "continent": "C_OCEANIA", "name": "Tuval"}, "TW": {"local_name": "\u81fa\u7063", "tax": "0.050000", "continent": "C_ASIA", "name": "Taiwan"}, "TT": {"local_name": "Trinidad and Tobago", "tax": "0.150000", "continent": "C_NAMERICA", "name": "Trinidad and Tobago"}, "TR": {"local_name": "T\u00fcrkiye", "tax": "0.180000", "continent": "C_EUROPE", "name": "Turkey"}, "LK": {"local_name": "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0", "tax": "0.120000", "continent": "C_ASIA", "name": "Sri Lanka"}, "LI": {"local_name": "Liechtenstein", "tax": "0.080000", "continent": "C_EUROPE", "name": "Liechtenstein"}, "TN": {"local_name": "\u062a\u0648\u0646\u0633", "tax": "0.180000", "continent": "C_AFRICA", "name": "Tunisia"}, "TO": {"local_name": "Tonga", "tax": "0.150000", "continent": "C_OCEANIA", "name": "Tonga"}, "TL": {"local_name": "Timor-Leste", "tax": "0.050000", "continent": "C_ASIA", "name": "East Timor"}, "TM": {"local_name": "T\u00fcrkmenistan", "tax": "0.150000", "continent": "C_ASIA", "name": "Turkmenistan"}, "TJ": {"local_name": "\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d", "tax": "0.200000", "continent": "C_ASIA", "name": "Tajikistan"}, "TK": {"local_name": "Tokela", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Tokela"}, "TH": {"local_name": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22", "tax": "0.070000", "continent": "C_ASIA", "name": "Thailand"}, "TF": {"local_name": "Terres australes et antarctiques fran\u00e7aises", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "French Southern Territories"}, "TG": {"local_name": "Togo", "tax": "0.180000", "continent": "C_AFRICA", "name": "Togo"}, "TD": {"local_name": "Tchad", "tax": "0.180000", "continent": "C_AFRICA", "name": "Chad"}, "TC": {"local_name": "Turks and Caicos Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Turks and Caicos Islands"}, "LY": {"local_name": "\u0644\u064a\u0628\u064a\u0627", "tax": "0.000000", "continent": "C_AFRICA", "name": "Libya"}, "VA": {"local_name": "Citt\u00e0 del Vaticano", "tax": "0.000000", "continent": "C_EUROPE", "name": "Vatican City"}, "VC": {"local_name": "Saint Vincent and the Grenadines", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Vincent and the Grenadines"}, "AE": {"local_name": "\u062f\u0648\u0644\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629", "tax": "0.000000", "continent": "C_ASIA", "name": "United Arab Emirates"}, "AD": {"local_name": "Andorra", "tax": "0.045000", "continent": "C_EUROPE", "name": "Andorra"}, "AG": {"local_name": "Antigua and Barbuda", "tax": "0.150000", "continent": "C_NAMERICA", "name": "Antigua and Barbuda"}, "AF": {"local_name": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646", "tax": "0.050000", "continent": "C_ASIA", "name": "Afghanistan"}, "AI": {"local_name": "Anguilla", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Anguilla"}, "VI": {"local_name": "United States Virgin Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "United States Virgin Islands"}, "IS": {"local_name": "\u00cdsland", "tax": "0.255000", "continent": "C_EUROPE", "name": "Iceland"}, "IR": {"local_name": "\u0627\u06cc\u0631\u0627\u0646", "tax": "0.040000", "continent": "C_ASIA", "name": "Iran"}, "AM": {"local_name": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576", "tax": "0.200000", "continent": "C_ASIA", "name": "Armenia"}, "AL": {"local_name": "Shqip\u00ebria", "tax": "0.200000", "continent": "C_EUROPE", "name": "Albania"}, "AO": {"local_name": "Angola", "tax": "0.100000", "continent": "C_AFRICA", "name": "Angola"}, "AQ": {"local_name": "Antarctica", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "Antarctica"}, "AS": {"local_name": "Amerika S\u0101moa", "tax": "0.000000", "continent": "C_OCEANIA", "name": "American Samoa"}, "AR": {"local_name": "Argentina", "tax": "0.210000", "continent": "C_SAMERICA", "name": "Argentina"}, "AU": {"local_name": "Australia", "tax": "0.100000", "continent": "C_OCEANIA", "name": "Australia"}, "VU": {"local_name": "Vanuat", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Vanuat"}, "AW": {"local_name": "Aruba", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Aruba"}, "IN": {"local_name": "\u0aad\u0abe\u0ab0\u0aa4", "tax": "0.135000", "continent": "C_ASIA", "name": "India"}, "AX": {"local_name": "\u00c5land", "tax": "0.000000", "continent": "C_EUROPE", "name": "\u00c5land"}, "AZ": {"local_name": "Az\u0259rbaycan", "tax": "0.180000", "continent": "C_ASIA", "name": "Azerbaijan"}, "IE": {"local_name": "\u00c9ire", "tax": "0.230000", "continent": "C_EUROPE", "name": "Ireland"}, "ID": {"local_name": "Indonesia", "tax": "0.100000", "continent": "C_ASIA", "name": "Indonesia"}, "UA": {"local_name": "\u0423\u043a\u0440\u0430\u0457\u043d\u0430", "tax": "0.200000", "continent": "C_EUROPE", "name": "Ukraine"}, "QA": {"local_name": "\u0642\u0637\u0631", "tax": "0.000000", "continent": "C_ASIA", "name": "Qatar"}};
var CONTINENTS = {"C_NAMERICA": {"name": "North America"}, "C_ANTARCTICA": {"name": "Antarctica"}, "C_ASIA": {"name": "Asia"}, "C_OCEANIA": {"name": "Oceania"}, "C_AFRICA": {"name": "Africa"}, "C_SAMERICA": {"name": "South America"}, "C_EUROPE": {"name": "Europe"}};
var COUNTRY_ORDER = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"];
var STATE_ORDER = {"US": ["US-AL", "US-AK", "US-AZ", "US-AR", "US-AE", "US-AA", "US-AP", "US-CA", "US-CO", "US-CT", "US-DE", "US-DC", "US-FL", "US-GA", "US-HI", "US-ID", "US-IL", "US-IN", "US-IA", "US-KS", "US-KY", "US-LA", "US-ME", "US-MD", "US-MA", "US-MI", "US-MN", "US-MS", "US-MO", "US-MT", "US-NE", "US-NV", "US-NH", "US-NJ", "US-NM", "US-NY", "US-NC", "US-ND", "US-OH", "US-OK", "US-OR", "US-PA", "US-RI", "US-SC", "US-SD", "US-TN", "US-TX", "US-UT", "US-VT", "US-VA", "US-WA", "US-WV", "US-WI", "US-WY"]};
var CURRENCY_LIST = [{"decimal": {"digits": 2, "mark": "."}, "code": "USD", "name": "United States Dollar", "countries": ["United States"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "TWD", "name": "Taiwan New Dollar", "countries": ["Taiwan"]}, {"decimal": {"digits": 3, "mark": "."}, "code": "ILS", "name": "Israeli New Sheqel", "countries": ["Israel"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "GBP", "name": "British Pound", "countries": ["United Kingdom"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "DKK", "name": "Danish Krone", "countries": ["Denmark"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "CAD", "name": "Canadian Dollar", "countries": ["Canada"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "MXN", "name": "Mexican Peso", "countries": ["Mexico"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "HUF", "name": "Hungarian Forint", "countries": ["Hungary"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "SEK", "name": "Swedish Krona", "countries": ["Sweden"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "SGD", "name": "Singapore Dollar", "countries": ["Singapore"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "HKD", "name": "Hong Kong Dollar", "countries": ["Hong Kong"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "AUD", "name": "Australian Dollar", "countries": ["Australia"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "CHF", "name": "Swiss Franc", "countries": ["Switzerland"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "NZD", "name": "New Zealand Dollar", "countries": ["New Zealand"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "THB", "name": "Thai Baht", "countries": ["Thailand"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "EUR", "name": "Euro", "countries": ["Andorra", "Austria", "Belgium", "Cyprus", "Estonia", "Finland", "France", "Germany", "Greece", "Ireland", "Italy", "Luxembourg", "Malta", "Monaco", "Montenegro", "Netherlands", "Portugal", "San Marino", "Slovakia", "Slovenia", "Spain", "Vatican City"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "NOK", "name": "Norwegian Krone", "countries": ["Norway"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "RUB", "name": "Russian Ruble", "countries": ["Russia"]}, {"decimal": {"digits": 0, "mark": "."}, "code": "JPY", "name": "Japanese Yen", "countries": ["Japan"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "CZK", "name": "Czech Koruna", "countries": ["Czech Republic"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "PLN", "name": "Polish Zloty", "countries": ["Poland"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "PHP", "name": "Philippine Peso", "countries": ["Philippines"]}];

var CURRENCY_MIN = ['USD', 'EUR', 'GBP', 'JPY'];

(function ( $ ) {
    $.fn.dropdown_search = function() {

        var init = function(dropdown) {

            var search_field = dropdown.find('.search-field'),
                menu = dropdown.find('.menu'),
                enter = 13,
                up = 38,
                down = 40;

            dropdown.on('keydown', function(e) {
                if (e.keyCode === enter) {
                    dropdown.dropdown('toggle');
                }
            });

            search_field.on('keyup', function(e) {
                if (e.keyCode === down) {
                    select_first();
                } else {
                    var value = $(this).val(),
                        dropdown = $(this).closest('.menu');
                    find_items(value, dropdown);
                }
            });

            menu.on('keydown', '.item.active', function(e){
                if(check_key(e.keyCode)) {
                    e.preventDefault();
                    move_focus($(this), e.keyCode);
                }
            });

            function select_first() {
                var menu_full = menu.find('.item'),
                    menu_visible = menu_full.filter(':visible'),
                    menu_active = menu_visible.filter('.active'),
                    menu_first = menu_visible.first();

                if(menu_active.length) {
                    set_active(menu_active, 'next');
                } else {
                    menu_full.removeClass('active');
                    menu_first.addClass('active').focus();
                }
            }

            function move_focus(current, key) {
                switch(key) {
                    case up:
                        set_active(current, 'prev');
                        break;
                    case down:
                        set_active(current, 'next');
                        break;
                    case enter:
                        current.click();
                        break;
                }
            }

            function set_active(current, direction) {
                var next = current.nextAll('.item:visible').eq(0);

                if(direction === 'prev') {
                    next = current.prevAll('.item:visible').eq(0);
                }

                if (next.length) {
                    current.removeClass('active').blur();
                    next.addClass('active').focus();
                }
            }

            function find_items(value, dropdown) {
                value = value.toLowerCase();
                dropdown.find('.item').each(function() {
                    var item_value = clean_string($(this).text());
                    if(item_value.indexOf(value) !== -1){
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            }

            function clean_string(str) {
                return str.replace(/  |\n/g,'').toLowerCase();
            }

            function check_key(key) {
                return key===down || key===up || key===enter;
            }
        };


        return this.each(function() {
            if (!$.data(this, 'search_initialized')) {
                $.data(this, 'search_initialized', true);
                init($(this));
            }
        });
    };
}( jQuery ));

function roundNumber(num, dec) {
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
}

function itm(value) {
    return (roundNumber(parseFloat(value || 0),2) / 100);
}

function redirect(url, external) {
    if(external) {
        window.top.location.href = url;
    } else {
        window.location.href = url;
    }
}

function scrollToTop(){
    $('html, body').animate({'scrollTop': 0}, 100);
}

if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

function openNewWindowDialog(url, width, height){
    var $window = $(window),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        params = 'width={0}, height={1}, left={2}, top={3}'.format(
        width,
        height,
        parseInt((windowWidth - width) /2),
        parseInt((windowHeight - height) /2)
    );
    window.open(url, '', params);
}

function selectText(element) {
    $(element).focus();
    $(element).select();
}

function openShareDialog(e){
    e.preventDefault();
    openNewWindowDialog(
        $(this).attr('href'),
        $(this).data().width,
        $(this).data().height
    );
    return false;
}

$(function(){
    $('body').on('click', '.share-button-dialog', openShareDialog);
});
