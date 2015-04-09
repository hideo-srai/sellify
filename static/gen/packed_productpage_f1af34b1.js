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

var STATES = {"US": {"US-NY": {"tax": "0.040000", "name": "New York"}, "US-PA": {"tax": "0.060000", "name": "Pennsylvania"}, "US-TN": {"tax": "0.070000", "name": "Tennessee"}, "US-ID": {"tax": "0.060000", "name": "Idaho"}, "US-NV": {"tax": "0.068500", "name": "Nevada"}, "US-NJ": {"tax": "0.070000", "name": "New Jersey"}, "US-NH": {"tax": "0.000000", "name": "New Hampshire"}, "US-VA": {"tax": "0.043000", "name": "Virginia"}, "US-HI": {"tax": "0.040000", "name": "Hawaii"}, "US-VT": {"tax": "0.060000", "name": "Vermont"}, "US-NM": {"tax": "0.051250", "name": "New Mexico"}, "US-NC": {"tax": "0.047500", "name": "North Carolina"}, "US-ND": {"tax": "0.050000", "name": "North Dakota"}, "US-NE": {"tax": "0.055000", "name": "Nebraska"}, "US-LA": {"tax": "0.040000", "name": "Louisiana"}, "US-MT": {"tax": "0.000000", "name": "Montana"}, "US-SD": {"tax": "0.040000", "name": "South Dakota"}, "US-DC": {"tax": "0.057500", "name": "District of Columbia"}, "US-DE": {"tax": "0.000000", "name": "Delaware"}, "US-FL": {"tax": "0.060000", "name": "Florida"}, "US-CT": {"tax": "0.063500", "name": "Connecticut"}, "US-WA": {"tax": "0.065000", "name": "Washington"}, "US-KS": {"tax": "0.061500", "name": "Kansas"}, "US-WI": {"tax": "0.050000", "name": "Wisconsin"}, "US-OR": {"tax": "0.000000", "name": "Oregon"}, "US-KY": {"tax": "0.060000", "name": "Kentucky"}, "US-CO": {"tax": "0.029000", "name": "Colorado"}, "US-OH": {"tax": "0.057500", "name": "Ohio"}, "US-IA": {"tax": "0.060000", "name": "Iowa"}, "US-WV": {"tax": "0.060000", "name": "West Virginia"}, "US-WY": {"tax": "0.040000", "name": "Wyoming"}, "US-UT": {"tax": "0.047000", "name": "Utah"}, "US-IN": {"tax": "0.070000", "name": "Indiana"}, "US-IL": {"tax": "0.062500", "name": "Illinois"}, "US-AK": {"tax": "0.000000", "name": "Alaska"}, "US-TX": {"tax": "0.062500", "name": "Texas"}, "US-ME": {"tax": "0.050000", "name": "Maine"}, "US-MD": {"tax": "0.060000", "name": "Maryland"}, "US-MA": {"tax": "0.062500", "name": "Massachusetts"}, "US-AL": {"tax": "0.040000", "name": "Alabama"}, "US-MO": {"tax": "0.042250", "name": "Missouri"}, "US-MN": {"tax": "0.068750", "name": "Minnesota"}, "US-AA": {"tax": "0.000000", "name": "Armed Forces Americas"}, "US-CA": {"tax": "0.075000", "name": "California"}, "US-OK": {"tax": "0.045000", "name": "Oklahoma"}, "US-MI": {"tax": "0.060000", "name": "Michigan"}, "US-GA": {"tax": "0.040000", "name": "Georgia"}, "US-AZ": {"tax": "0.056000", "name": "Arizona"}, "US-AE": {"tax": "0.000000", "name": "Armed Forces"}, "US-MS": {"tax": "0.070000", "name": "Mississippi"}, "US-SC": {"tax": "0.060000", "name": "South Carolina"}, "US-RI": {"tax": "0.070000", "name": "Rhode Island"}, "US-AR": {"tax": "0.065000", "name": "Arkansas"}, "US-AP": {"tax": "0.000000", "name": "Armed Forces Pacific"}}};
var REGIONS = {"R_EU": {"name": "European Union", "members": ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"]}};
var COUNTRIES = {"BD": {"local_name": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6", "tax": "0.150000", "continent": "C_ASIA", "name": "Bangladesh"}, "WF": {"local_name": "Wallis-et-Futuna", "tax": "0.060000", "continent": "C_OCEANIA", "name": "Wallis and Futuna"}, "BF": {"local_name": "Burkina Faso", "tax": "0.180000", "continent": "C_AFRICA", "name": "Burkina Faso"}, "BG": {"local_name": "B\u0103lgarija", "tax": "0.200000", "continent": "C_EUROPE", "name": "Bulgaria"}, "BA": {"local_name": "Bosna i Hercegovina", "tax": "0.170000", "continent": "C_EUROPE", "name": "Bosnia and Herzegovina"}, "BB": {"local_name": "Barbados", "tax": "0.175000", "continent": "C_NAMERICA", "name": "Barbados"}, "BE": {"local_name": "Belgi\u00eb", "tax": "0.210000", "continent": "C_EUROPE", "name": "Belgium"}, "BL": {"local_name": "Saint-Barth\u00e9lemy", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Barth\u00e9lemy"}, "BM": {"local_name": "Bermuda", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Bermuda"}, "BN": {"local_name": "Brunei", "tax": "0.000000", "continent": "C_ASIA", "name": "Brunei"}, "BO": {"local_name": "Bolivia", "tax": "0.130000", "continent": "C_SAMERICA", "name": "Bolivia"}, "JP": {"local_name": "\u65e5\u672c", "tax": "0.050000", "continent": "C_ASIA", "name": "Japan"}, "BI": {"local_name": "Uburundi", "tax": "0.180000", "continent": "C_AFRICA", "name": "Burundi"}, "BJ": {"local_name": "B\u00e9nin", "tax": "0.180000", "continent": "C_AFRICA", "name": "Benin"}, "BT": {"local_name": "\u0f60\u0f56\u0fb2\u0f74\u0f42\u0f0b\u0f61\u0f74\u0f63", "tax": "0.500000", "continent": "C_ASIA", "name": "Bhutan"}, "JM": {"local_name": "Jamaica", "tax": "0.175000", "continent": "C_NAMERICA", "name": "Jamaica"}, "BV": {"local_name": "Bouvet\u00f8ya", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "Bouvet Island"}, "JO": {"local_name": "\u0627\u0644\u0623\u0631\u062f\u0646", "tax": "0.160000", "continent": "C_ASIA", "name": "Jordan"}, "WS": {"local_name": "S\u0101moa", "tax": "0.125000", "continent": "C_OCEANIA", "name": "Samoa"}, "BQ": {"local_name": "Bonaire", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Bonaire"}, "BR": {"local_name": "Brasil", "tax": "0.200000", "continent": "C_SAMERICA", "name": "Brazil"}, "BS": {"local_name": "The Bahamas", "tax": "0.000000", "continent": "C_NAMERICA", "name": "The Bahamas"}, "JE": {"local_name": "Jersey", "tax": "0.050000", "continent": "C_EUROPE", "name": "Jersey"}, "BY": {"local_name": "\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c", "tax": "0.200000", "continent": "C_EUROPE", "name": "Belarus"}, "BZ": {"local_name": "Belize", "tax": "0.125000", "continent": "C_NAMERICA", "name": "Belize"}, "RU": {"local_name": "\u0420\u043e\u0441\u0441\u0438\u044f", "tax": "0.180000", "continent": "C_EUROPE", "name": "Russia"}, "RW": {"local_name": "Rwanda", "tax": "0.000000", "continent": "C_AFRICA", "name": "Rwanda"}, "RS": {"local_name": "\u0421\u0440\u0431\u0438\u0458\u0430", "tax": "0.180000", "continent": "C_EUROPE", "name": "Serbia"}, "LT": {"local_name": "Lietuva", "tax": "0.210000", "continent": "C_EUROPE", "name": "Lithuania"}, "RE": {"local_name": "R\u00e9union", "tax": "0.000000", "continent": "C_AFRICA", "name": "R\u00e9union"}, "LU": {"local_name": "L\u00ebtzebuerg", "tax": "0.150000", "continent": "C_EUROPE", "name": "Luxembourg"}, "LR": {"local_name": "Liberia", "tax": "0.000000", "continent": "C_AFRICA", "name": "Liberia"}, "RO": {"local_name": "Rom\u00e2nia", "tax": "0.240000", "continent": "C_EUROPE", "name": "Romania"}, "LS": {"local_name": "Lesotho", "tax": "0.000000", "continent": "C_AFRICA", "name": "Lesotho"}, "GW": {"local_name": "Guin\u00e9-Bissa", "tax": "0.150000", "continent": "C_AFRICA", "name": "Guinea-Bissa"}, "GU": {"local_name": "Gu\u00e5h\u00e5n", "tax": "0.040000", "continent": "C_OCEANIA", "name": "Guam"}, "GT": {"local_name": "Guatemala", "tax": "0.120000", "continent": "C_NAMERICA", "name": "Guatemala"}, "GS": {"local_name": "South Georgia and the South Sandwich Islands", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "South Georgia and the South Sandwich Islands"}, "GR": {"local_name": "\u0395\u03bb\u03bb\u03ac\u03c2", "tax": "0.230000", "continent": "C_EUROPE", "name": "Greece"}, "GQ": {"local_name": "Guinea Ecuatorial", "tax": "0.000000", "continent": "C_AFRICA", "name": "Equatorial Guinea"}, "GP": {"local_name": "Guadeloupe", "tax": "0.085000", "continent": "C_NAMERICA", "name": "Guadeloupe"}, "BH": {"local_name": "\u0627\u0644\u0628\u062d\u0631\u064a\u0646", "tax": "0.000000", "continent": "C_ASIA", "name": "Bahrain"}, "GY": {"local_name": "Guyana", "tax": "0.160000", "continent": "C_SAMERICA", "name": "Guyana"}, "GG": {"local_name": "Guernsey", "tax": "0.000000", "continent": "C_EUROPE", "name": "Guernsey"}, "GF": {"local_name": "Guyane", "tax": "0.000000", "continent": "C_SAMERICA", "name": "French Guiana"}, "GE": {"local_name": "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd", "tax": "0.180000", "continent": "C_EUROPE", "name": "Georgia"}, "GD": {"local_name": "Grenada", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Grenada"}, "GB": {"local_name": "United Kingdom", "tax": "0.200000", "continent": "C_EUROPE", "name": "United Kingdom"}, "GA": {"local_name": "Gabon", "tax": "0.180000", "continent": "C_AFRICA", "name": "Gabon"}, "SV": {"local_name": "El Salvador", "tax": "0.130000", "continent": "C_NAMERICA", "name": "El Salvador"}, "GN": {"local_name": "Guin\u00e9e", "tax": "0.000000", "continent": "C_AFRICA", "name": "Guinea"}, "GM": {"local_name": "The Gambia", "tax": "0.150000", "continent": "C_AFRICA", "name": "The Gambia"}, "GL": {"local_name": "Kalaallit Nunaat", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Greenland"}, "GI": {"local_name": "Gibraltar", "tax": "0.000000", "continent": "C_EUROPE", "name": "Gibraltar"}, "GH": {"local_name": "Ghana", "tax": "0.000000", "continent": "C_AFRICA", "name": "Ghana"}, "OM": {"local_name": "\u0639\u064f\u0645\u0627\u0646", "tax": "0.000000", "continent": "C_ASIA", "name": "Oman"}, "IL": {"local_name": "Israel", "tax": "0.160000", "continent": "C_ASIA", "name": "Israel"}, "BW": {"local_name": "Lefatshe la Botswana", "tax": "0.120000", "continent": "C_AFRICA", "name": "Botswana"}, "HR": {"local_name": "Hrvatska", "tax": "0.250000", "continent": "C_EUROPE", "name": "Croatia"}, "HT": {"local_name": "Ha\u00efti", "tax": "0.100000", "continent": "C_NAMERICA", "name": "Haiti"}, "HU": {"local_name": "Magyarorsz\u00e1g", "tax": "0.270000", "continent": "C_EUROPE", "name": "Hungary"}, "HK": {"local_name": "\u9999\u6e2f", "tax": "0.000000", "continent": "C_ASIA", "name": "Hong Kong"}, "HN": {"local_name": "Honduras", "tax": "0.120000", "continent": "C_NAMERICA", "name": "Honduras"}, "HM": {"local_name": "Heard Island and McDonald Islands", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "Heard Island and McDonald Islands"}, "VE": {"local_name": "Venezuela", "tax": "0.120000", "continent": "C_SAMERICA", "name": "Venezuela"}, "PR": {"local_name": "Puerto Rico", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Puerto Rico"}, "PS": {"local_name": "Palestinian Territories", "tax": "0.145000", "continent": "C_ASIA", "name": "Palestinian Territories"}, "PW": {"local_name": "Bela", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Pala"}, "PT": {"local_name": "Portugal", "tax": "0.230000", "continent": "C_EUROPE", "name": "Portugal"}, "SJ": {"local_name": "Svalbard", "tax": "0.000000", "continent": "C_EUROPE", "name": "Svalbard"}, "PY": {"local_name": "Paraguay", "tax": "0.100000", "continent": "C_SAMERICA", "name": "Paraguay"}, "IQ": {"local_name": "\u0627\u0644\u0639\u0631\u0627\u0642", "tax": "0.000000", "continent": "C_ASIA", "name": "Iraq"}, "PA": {"local_name": "Panam\u00e1", "tax": "0.070000", "continent": "C_NAMERICA", "name": "Panama"}, "PF": {"local_name": "Polyn\u00e9sie Fran\u00e7aise", "tax": "0.000000", "continent": "C_OCEANIA", "name": "French Polynesia"}, "PG": {"local_name": "Papua Niugini", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Papua New Guinea"}, "PE": {"local_name": "Per\u00fa", "tax": "0.160000", "continent": "C_SAMERICA", "name": "Per"}, "PK": {"local_name": "\u067e\u0627\u06a9\u0633\u062a\u0627\u0646", "tax": "0.160000", "continent": "C_ASIA", "name": "Pakistan"}, "PH": {"local_name": "Pilipinas", "tax": "0.120000", "continent": "C_ASIA", "name": "Philippines"}, "PN": {"local_name": "Pitcairn Islands", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Pitcairn Islands"}, "PL": {"local_name": "Polska", "tax": "0.230000", "continent": "C_EUROPE", "name": "Poland"}, "PM": {"local_name": "Saint-Pierre et Miquelon", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Pierre and Miquelon"}, "ZM": {"local_name": "Zambia", "tax": "0.175000", "continent": "C_AFRICA", "name": "Zambia"}, "EH": {"local_name": "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629", "tax": "0.000000", "continent": "C_AFRICA", "name": "Western Sahara"}, "EE": {"local_name": "Eesti", "tax": "0.200000", "continent": "C_EUROPE", "name": "Estonia"}, "EG": {"local_name": "\u0645\u0635\u0631", "tax": "0.100000", "continent": "C_AFRICA", "name": "Egypt"}, "ZA": {"local_name": "South Africa", "tax": "0.140000", "continent": "C_AFRICA", "name": "South Africa"}, "EC": {"local_name": "Ecuador", "tax": "0.120000", "continent": "C_SAMERICA", "name": "Ecuador"}, "IT": {"local_name": "Italia", "tax": "0.210000", "continent": "C_EUROPE", "name": "Italy"}, "VN": {"local_name": "Vi\u1ec7t Nam", "tax": "0.100000", "continent": "C_ASIA", "name": "Vietnam"}, "SB": {"local_name": "Solomon Islands", "tax": "0.150000", "continent": "C_OCEANIA", "name": "Solomon Islands"}, "ET": {"local_name": "Ityop\"ia", "tax": "0.150000", "continent": "C_AFRICA", "name": "Ethiopia"}, "SO": {"local_name": "\u0627\u0644\u0635\u0648\u0645\u0627\u0644", "tax": "0.140000", "continent": "C_AFRICA", "name": "Somalia"}, "ZW": {"local_name": "Zimbabwe", "tax": "0.000000", "continent": "C_AFRICA", "name": "Zimbabwe"}, "SA": {"local_name": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629", "tax": "0.000000", "continent": "C_ASIA", "name": "Saudi Arabia"}, "ES": {"local_name": "Espa\u00f1a", "tax": "0.180000", "continent": "C_EUROPE", "name": "Spain"}, "ER": {"local_name": "\u0625\u0631\u062a\u0631\u064a\u0627", "tax": "0.000000", "continent": "C_AFRICA", "name": "Eritrea"}, "ME": {"local_name": "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430", "tax": "0.170000", "continent": "C_EUROPE", "name": "Montenegro"}, "MD": {"local_name": "Moldova", "tax": "0.200000", "continent": "C_EUROPE", "name": "Moldova"}, "MG": {"local_name": "Madagasikara", "tax": "0.200000", "continent": "C_AFRICA", "name": "Madagascar"}, "MF": {"local_name": "Saint-Martin", "tax": "0.085000", "continent": "C_NAMERICA", "name": "Saint Martin"}, "MA": {"local_name": "\u0627\u0644\u0645\u063a\u0631\u0628", "tax": "0.200000", "continent": "C_AFRICA", "name": "Morocco"}, "MC": {"local_name": "Monaco", "tax": "0.196000", "continent": "C_EUROPE", "name": "Monaco"}, "UZ": {"local_name": "\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d", "tax": "0.000000", "continent": "C_ASIA", "name": "Uzbekistan"}, "MM": {"local_name": "Myanmar", "tax": "0.300000", "continent": "C_ASIA", "name": "Burma"}, "ML": {"local_name": "Mali", "tax": "0.180000", "continent": "C_AFRICA", "name": "Mali"}, "MO": {"local_name": "\u6fb3\u9580", "tax": "0.000000", "continent": "C_ASIA", "name": "Macau"}, "MN": {"local_name": "\u041c\u043e\u043d\u0433\u043e\u043b \u0423\u043b\u0441", "tax": "0.130000", "continent": "C_ASIA", "name": "Mongolia"}, "MH": {"local_name": "Ael\u014dn\u0304 in M\u0327aje\u013c", "tax": "0.100000", "continent": "C_OCEANIA", "name": "Marshall Islands"}, "MK": {"local_name": "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430", "tax": "0.180000", "continent": "C_EUROPE", "name": "Macedonia"}, "MU": {"local_name": "Maurice", "tax": "0.150000", "continent": "C_AFRICA", "name": "Mauritius"}, "MT": {"local_name": "Malta", "tax": "0.180000", "continent": "C_EUROPE", "name": "Malta"}, "MW": {"local_name": "Malawi", "tax": "0.165000", "continent": "C_AFRICA", "name": "Malawi"}, "MV": {"local_name": "Dhivehi Raajje", "tax": "0.000000", "continent": "C_ASIA", "name": "Maldives"}, "MQ": {"local_name": "Martinique", "tax": "0.085000", "continent": "C_NAMERICA", "name": "Martinique"}, "MP": {"local_name": "Northern Mariana Islands", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Northern Mariana Islands"}, "MS": {"local_name": "Montserrat", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Montserrat"}, "MR": {"local_name": "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627", "tax": "0.140000", "continent": "C_AFRICA", "name": "Mauritania"}, "IM": {"local_name": "Isle of Man", "tax": "0.000000", "continent": "C_EUROPE", "name": "Isle of Man"}, "UG": {"local_name": "Uganda", "tax": "0.000000", "continent": "C_AFRICA", "name": "Uganda"}, "TZ": {"local_name": "Tanzania", "tax": "0.180000", "continent": "C_AFRICA", "name": "Tanzania"}, "MY": {"local_name": "Malaysia", "tax": "0.100000", "continent": "C_ASIA", "name": "Malaysia"}, "MX": {"local_name": "M\u00e9xico", "tax": "0.160000", "continent": "C_NAMERICA", "name": "Mexico"}, "MZ": {"local_name": "Mo\u00e7ambique", "tax": "0.170000", "continent": "C_AFRICA", "name": "Mozambique"}, "FR": {"local_name": "France", "tax": "0.196000", "continent": "C_EUROPE", "name": "France"}, "IO": {"local_name": "Chagos Islands", "tax": "0.000000", "continent": "C_ASIA", "name": "British Indian Ocean Territory"}, "SH": {"local_name": "Saint Helena", "tax": "0.000000", "continent": "C_AFRICA", "name": "Saint Helena"}, "FI": {"local_name": "Suomi", "tax": "0.230000", "continent": "C_EUROPE", "name": "Finland"}, "FJ": {"local_name": "Viti", "tax": "0.150000", "continent": "C_OCEANIA", "name": "Fiji"}, "FK": {"local_name": "Falkland Islands", "tax": "0.000000", "continent": "C_SAMERICA", "name": "Falkland Islands"}, "FM": {"local_name": "Micronesia", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Micronesia"}, "FO": {"local_name": "F\u00f8royar", "tax": "0.250000", "continent": "C_EUROPE", "name": "Faroe Islands"}, "NI": {"local_name": "Nicaragua", "tax": "0.150000", "continent": "C_NAMERICA", "name": "Nicaragua"}, "NL": {"local_name": "Nederland", "tax": "0.210000", "continent": "C_EUROPE", "name": "Netherlands"}, "NO": {"local_name": "Norge", "tax": "0.250000", "continent": "C_EUROPE", "name": "Norway"}, "NA": {"local_name": "Namibia", "tax": "0.150000", "continent": "C_AFRICA", "name": "Namibia"}, "NC": {"local_name": "Nouvelle-Cal\u00e9donie", "tax": "0.000000", "continent": "C_OCEANIA", "name": "New Caledonia"}, "NE": {"local_name": "Niger", "tax": "0.190000", "continent": "C_AFRICA", "name": "Niger"}, "NF": {"local_name": "Norfolk Island", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Norfolk Island"}, "NG": {"local_name": "Nigeria", "tax": "0.050000", "continent": "C_AFRICA", "name": "Nigeria"}, "NZ": {"local_name": "New Zealand", "tax": "0.150000", "continent": "C_OCEANIA", "name": "New Zealand"}, "NP": {"local_name": "Nep\u0101la", "tax": "0.130000", "continent": "C_ASIA", "name": "Nepal"}, "NR": {"local_name": "Naoero", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Naur"}, "NU": {"local_name": "Niu\u0113", "tax": "0.050000", "continent": "C_OCEANIA", "name": "Niue"}, "CK": {"local_name": "K\u016bki \"\u0100irani", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Cook Islands"}, "CI": {"local_name": "C\u00f4te d\"Ivoire", "tax": "0.200000", "continent": "C_AFRICA", "name": "Ivory Coast"}, "CH": {"local_name": "Schweiz", "tax": "0.080000", "continent": "C_EUROPE", "name": "Switzerland"}, "CO": {"local_name": "Colombia", "tax": "0.160000", "continent": "C_SAMERICA", "name": "Colombia"}, "CN": {"local_name": "\u4e2d\u56fd", "tax": "0.170000", "continent": "C_ASIA", "name": "China"}, "CM": {"local_name": "Cameroun", "tax": "0.000000", "continent": "C_AFRICA", "name": "Cameroon"}, "CL": {"local_name": "Chile", "tax": "0.190000", "continent": "C_SAMERICA", "name": "Chile"}, "CC": {"local_name": "Cocos Islands", "tax": "0.000000", "continent": "C_ASIA", "name": "Cocos Islands"}, "CA": {"local_name": "Canada", "tax": "0.050000", "continent": "C_NAMERICA", "name": "Canada"}, "CG": {"local_name": "R\u00e9publique du Congo", "tax": "0.160000", "continent": "C_AFRICA", "name": "Republic of the Congo"}, "CF": {"local_name": "K\u00f6d\u00f6r\u00f6s\u00ease t\u00ee B\u00eaafr\u00eeka", "tax": "0.190000", "continent": "C_AFRICA", "name": "Central African Republic"}, "CD": {"local_name": "R\u00e9publique d\u00e9mocratique du Congo", "tax": "0.160000", "continent": "C_AFRICA", "name": "Democratic Republic of the Congo"}, "CZ": {"local_name": "\u010cesk\u00e1 republika", "tax": "0.200000", "continent": "C_EUROPE", "name": "Czech Republic"}, "CY": {"local_name": "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2", "tax": "0.150000", "continent": "C_ASIA", "name": "Cyprus"}, "CX": {"local_name": "Christmas Island", "tax": "0.000000", "continent": "C_ASIA", "name": "Christmas Island"}, "CR": {"local_name": "Costa Rica", "tax": "0.130000", "continent": "C_NAMERICA", "name": "Costa Rica"}, "CW": {"local_name": "Cura\u00e7ao", "tax": "0.060000", "continent": "C_NAMERICA", "name": "Cura\u00e7ao"}, "CV": {"local_name": "Cabo Verde", "tax": "0.150000", "continent": "C_AFRICA", "name": "Cape Verde"}, "CU": {"local_name": "Cuba", "tax": "0.200000", "continent": "C_NAMERICA", "name": "Cuba"}, "SZ": {"local_name": "Umbuso weSwatini", "tax": "0.140000", "continent": "C_AFRICA", "name": "Swaziland"}, "SY": {"local_name": "\u0633\u0648\u0631\u064a\u0627\u200e", "tax": "0.000000", "continent": "C_ASIA", "name": "Syrian Arab Republic"}, "SX": {"local_name": "Sint Maarten", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Sint Maarten"}, "KG": {"local_name": "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d", "tax": "0.200000", "continent": "C_ASIA", "name": "Kyrgyzstan"}, "KE": {"local_name": "Kenya", "tax": "0.160000", "continent": "C_AFRICA", "name": "Kenya"}, "SR": {"local_name": "Suriname", "tax": "0.000000", "continent": "C_SAMERICA", "name": "Suriname"}, "KI": {"local_name": "Kiribati", "tax": "0.100000", "continent": "C_OCEANIA", "name": "Kiribati"}, "KH": {"local_name": "Kampuchea", "tax": "0.100000", "continent": "C_ASIA", "name": "Cambodia"}, "KN": {"local_name": "Saint Kitts and Nevis", "tax": "0.170000", "continent": "C_NAMERICA", "name": "Saint Kitts and Nevis"}, "KM": {"local_name": "Komori", "tax": "0.100000", "continent": "C_AFRICA", "name": "Comoros"}, "ST": {"local_name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe", "tax": "0.000000", "continent": "C_AFRICA", "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe"}, "SK": {"local_name": "Slovensko", "tax": "0.200000", "continent": "C_EUROPE", "name": "Slovakia"}, "KR": {"local_name": "\ud55c\uad6d", "tax": "0.100000", "continent": "C_ASIA", "name": "South Korea"}, "SI": {"local_name": "Slovenija", "tax": "0.200000", "continent": "C_EUROPE", "name": "Slovenia"}, "KP": {"local_name": "\uc870\uc120", "tax": "0.150000", "continent": "C_ASIA", "name": "North Korea"}, "KW": {"local_name": "\u0627\u0644\u0643\u0648\u064a\u062a", "tax": "0.000000", "continent": "C_ASIA", "name": "Kuwait"}, "SN": {"local_name": "S\u00e9n\u00e9gal", "tax": "0.180000", "continent": "C_AFRICA", "name": "Senegal"}, "SM": {"local_name": "San Marino", "tax": "0.000000", "continent": "C_EUROPE", "name": "San Marino"}, "SL": {"local_name": "Sierra Leone", "tax": "0.150000", "continent": "C_AFRICA", "name": "Sierra Leone"}, "SC": {"local_name": "Seychelles", "tax": "0.150000", "continent": "C_AFRICA", "name": "Seychelles"}, "KZ": {"local_name": "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d", "tax": "0.120000", "continent": "C_ASIA", "name": "Kazakhstan"}, "KY": {"local_name": "Cayman Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Cayman Islands"}, "SG": {"local_name": "Singapore", "tax": "0.070000", "continent": "C_ASIA", "name": "Singapore"}, "SE": {"local_name": "Sverige", "tax": "0.250000", "continent": "C_EUROPE", "name": "Sweden"}, "SD": {"local_name": "\u0627\u0644\u0633\u0648\u062f\u0627\u0646", "tax": "0.100000", "continent": "C_AFRICA", "name": "Sudan"}, "DO": {"local_name": "Rep\u00fablica Dominicana", "tax": "0.160000", "continent": "C_NAMERICA", "name": "Dominican Republic"}, "DM": {"local_name": "Dominica", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Dominica"}, "DJ": {"local_name": "\u062c\u064a\u0628\u0648\u062a\u064a", "tax": "0.000000", "continent": "C_AFRICA", "name": "Djibouti"}, "DK": {"local_name": "Danmark", "tax": "0.250000", "continent": "C_EUROPE", "name": "Denmark"}, "VG": {"local_name": "British Virgin Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "British Virgin Islands"}, "DE": {"local_name": "Deutschland", "tax": "0.190000", "continent": "C_EUROPE", "name": "Germany"}, "YE": {"local_name": "\u0627\u0644\u064a\u0645\u0646", "tax": "0.050000", "continent": "C_ASIA", "name": "Yemen"}, "AT": {"local_name": "\u00d6sterreich", "tax": "0.200000", "continent": "C_EUROPE", "name": "Austria"}, "DZ": {"local_name": "\u0627\u0644\u062c\u0632\u0627\u0626\u0631", "tax": "0.170000", "continent": "C_AFRICA", "name": "Algeria"}, "US": {"local_name": "United States", "tax": "0.000000", "continent": "C_NAMERICA", "name": "United States"}, "LV": {"local_name": "Latvija", "tax": "0.210000", "continent": "C_EUROPE", "name": "Latvia"}, "UY": {"local_name": "Uruguay", "tax": "0.220000", "continent": "C_SAMERICA", "name": "Uruguay"}, "YT": {"local_name": "Mayotte", "tax": "0.000000", "continent": "C_AFRICA", "name": "Mayotte"}, "UM": {"local_name": "United States Minor Outlying Islands", "tax": "0.000000", "continent": "C_OCEANIA", "name": "United States Minor Outlying Islands"}, "LB": {"local_name": "\u0644\u0628\u0646\u0627\u0646", "tax": "0.100000", "continent": "C_ASIA", "name": "Lebanon"}, "LC": {"local_name": "Saint Lucia", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Lucia"}, "LA": {"local_name": "\u0e9b\u0eb0\u0ec0\u0e97\u0e94\u0ea5\u0eb2\u0ea7", "tax": "0.000000", "continent": "C_ASIA", "name": "Laos"}, "TV": {"local_name": "Tuval", "tax": "0.050000", "continent": "C_OCEANIA", "name": "Tuval"}, "TW": {"local_name": "\u81fa\u7063", "tax": "0.050000", "continent": "C_ASIA", "name": "Taiwan"}, "TT": {"local_name": "Trinidad and Tobago", "tax": "0.150000", "continent": "C_NAMERICA", "name": "Trinidad and Tobago"}, "TR": {"local_name": "T\u00fcrkiye", "tax": "0.180000", "continent": "C_EUROPE", "name": "Turkey"}, "LK": {"local_name": "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0", "tax": "0.120000", "continent": "C_ASIA", "name": "Sri Lanka"}, "LI": {"local_name": "Liechtenstein", "tax": "0.080000", "continent": "C_EUROPE", "name": "Liechtenstein"}, "TN": {"local_name": "\u062a\u0648\u0646\u0633", "tax": "0.180000", "continent": "C_AFRICA", "name": "Tunisia"}, "TO": {"local_name": "Tonga", "tax": "0.150000", "continent": "C_OCEANIA", "name": "Tonga"}, "TL": {"local_name": "Timor-Leste", "tax": "0.050000", "continent": "C_ASIA", "name": "East Timor"}, "TM": {"local_name": "T\u00fcrkmenistan", "tax": "0.150000", "continent": "C_ASIA", "name": "Turkmenistan"}, "TJ": {"local_name": "\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d", "tax": "0.200000", "continent": "C_ASIA", "name": "Tajikistan"}, "TK": {"local_name": "Tokela", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Tokela"}, "TH": {"local_name": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22", "tax": "0.070000", "continent": "C_ASIA", "name": "Thailand"}, "TF": {"local_name": "Terres australes et antarctiques fran\u00e7aises", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "French Southern Territories"}, "TG": {"local_name": "Togo", "tax": "0.180000", "continent": "C_AFRICA", "name": "Togo"}, "TD": {"local_name": "Tchad", "tax": "0.180000", "continent": "C_AFRICA", "name": "Chad"}, "TC": {"local_name": "Turks and Caicos Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Turks and Caicos Islands"}, "LY": {"local_name": "\u0644\u064a\u0628\u064a\u0627", "tax": "0.000000", "continent": "C_AFRICA", "name": "Libya"}, "VA": {"local_name": "Citt\u00e0 del Vaticano", "tax": "0.000000", "continent": "C_EUROPE", "name": "Vatican City"}, "VC": {"local_name": "Saint Vincent and the Grenadines", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Saint Vincent and the Grenadines"}, "AE": {"local_name": "\u062f\u0648\u0644\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629", "tax": "0.000000", "continent": "C_ASIA", "name": "United Arab Emirates"}, "AD": {"local_name": "Andorra", "tax": "0.045000", "continent": "C_EUROPE", "name": "Andorra"}, "AG": {"local_name": "Antigua and Barbuda", "tax": "0.150000", "continent": "C_NAMERICA", "name": "Antigua and Barbuda"}, "AF": {"local_name": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646", "tax": "0.050000", "continent": "C_ASIA", "name": "Afghanistan"}, "AI": {"local_name": "Anguilla", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Anguilla"}, "VI": {"local_name": "United States Virgin Islands", "tax": "0.000000", "continent": "C_NAMERICA", "name": "United States Virgin Islands"}, "IS": {"local_name": "\u00cdsland", "tax": "0.255000", "continent": "C_EUROPE", "name": "Iceland"}, "IR": {"local_name": "\u0627\u06cc\u0631\u0627\u0646", "tax": "0.040000", "continent": "C_ASIA", "name": "Iran"}, "AM": {"local_name": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576", "tax": "0.200000", "continent": "C_ASIA", "name": "Armenia"}, "AL": {"local_name": "Shqip\u00ebria", "tax": "0.200000", "continent": "C_EUROPE", "name": "Albania"}, "AO": {"local_name": "Angola", "tax": "0.100000", "continent": "C_AFRICA", "name": "Angola"}, "AQ": {"local_name": "Antarctica", "tax": "0.000000", "continent": "C_ANTARCTICA", "name": "Antarctica"}, "AS": {"local_name": "Amerika S\u0101moa", "tax": "0.000000", "continent": "C_OCEANIA", "name": "American Samoa"}, "AR": {"local_name": "Argentina", "tax": "0.210000", "continent": "C_SAMERICA", "name": "Argentina"}, "AU": {"local_name": "Australia", "tax": "0.100000", "continent": "C_OCEANIA", "name": "Australia"}, "VU": {"local_name": "Vanuat", "tax": "0.000000", "continent": "C_OCEANIA", "name": "Vanuat"}, "AW": {"local_name": "Aruba", "tax": "0.000000", "continent": "C_NAMERICA", "name": "Aruba"}, "IN": {"local_name": "\u0aad\u0abe\u0ab0\u0aa4", "tax": "0.135000", "continent": "C_ASIA", "name": "India"}, "AX": {"local_name": "\u00c5land", "tax": "0.000000", "continent": "C_EUROPE", "name": "\u00c5land"}, "AZ": {"local_name": "Az\u0259rbaycan", "tax": "0.180000", "continent": "C_ASIA", "name": "Azerbaijan"}, "IE": {"local_name": "\u00c9ire", "tax": "0.230000", "continent": "C_EUROPE", "name": "Ireland"}, "ID": {"local_name": "Indonesia", "tax": "0.100000", "continent": "C_ASIA", "name": "Indonesia"}, "UA": {"local_name": "\u0423\u043a\u0440\u0430\u0457\u043d\u0430", "tax": "0.200000", "continent": "C_EUROPE", "name": "Ukraine"}, "QA": {"local_name": "\u0642\u0637\u0631", "tax": "0.000000", "continent": "C_ASIA", "name": "Qatar"}};
var CONTINENTS = {"C_NAMERICA": {"name": "North America"}, "C_ANTARCTICA": {"name": "Antarctica"}, "C_ASIA": {"name": "Asia"}, "C_OCEANIA": {"name": "Oceania"}, "C_AFRICA": {"name": "Africa"}, "C_SAMERICA": {"name": "South America"}, "C_EUROPE": {"name": "Europe"}};
var COUNTRY_ORDER = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"];
var STATE_ORDER = {"US": ["US-AL", "US-AK", "US-AZ", "US-AR", "US-AE", "US-AA", "US-AP", "US-CA", "US-CO", "US-CT", "US-DE", "US-DC", "US-FL", "US-GA", "US-HI", "US-ID", "US-IL", "US-IN", "US-IA", "US-KS", "US-KY", "US-LA", "US-ME", "US-MD", "US-MA", "US-MI", "US-MN", "US-MS", "US-MO", "US-MT", "US-NE", "US-NV", "US-NH", "US-NJ", "US-NM", "US-NY", "US-NC", "US-ND", "US-OH", "US-OK", "US-OR", "US-PA", "US-RI", "US-SC", "US-SD", "US-TN", "US-TX", "US-UT", "US-VT", "US-VA", "US-WA", "US-WV", "US-WI", "US-WY"]};
var CURRENCY_LIST = [{"decimal": {"digits": 2, "mark": "."}, "code": "USD", "name": "United States Dollar", "countries": ["United States"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "TWD", "name": "Taiwan New Dollar", "countries": ["Taiwan"]}, {"decimal": {"digits": 3, "mark": "."}, "code": "ILS", "name": "Israeli New Sheqel", "countries": ["Israel"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "GBP", "name": "British Pound", "countries": ["United Kingdom"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "DKK", "name": "Danish Krone", "countries": ["Denmark"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "CAD", "name": "Canadian Dollar", "countries": ["Canada"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "MXN", "name": "Mexican Peso", "countries": ["Mexico"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "HUF", "name": "Hungarian Forint", "countries": ["Hungary"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "SEK", "name": "Swedish Krona", "countries": ["Sweden"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "SGD", "name": "Singapore Dollar", "countries": ["Singapore"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "HKD", "name": "Hong Kong Dollar", "countries": ["Hong Kong"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "AUD", "name": "Australian Dollar", "countries": ["Australia"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "CHF", "name": "Swiss Franc", "countries": ["Switzerland"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "NZD", "name": "New Zealand Dollar", "countries": ["New Zealand"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "THB", "name": "Thai Baht", "countries": ["Thailand"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "EUR", "name": "Euro", "countries": ["Andorra", "Austria", "Belgium", "Cyprus", "Estonia", "Finland", "France", "Germany", "Greece", "Ireland", "Italy", "Luxembourg", "Malta", "Monaco", "Montenegro", "Netherlands", "Portugal", "San Marino", "Slovakia", "Slovenia", "Spain", "Vatican City"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "NOK", "name": "Norwegian Krone", "countries": ["Norway"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "RUB", "name": "Russian Ruble", "countries": ["Russia"]}, {"decimal": {"digits": 0, "mark": "."}, "code": "JPY", "name": "Japanese Yen", "countries": ["Japan"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "CZK", "name": "Czech Koruna", "countries": ["Czech Republic"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "PLN", "name": "Polish Zloty", "countries": ["Poland"]}, {"decimal": {"digits": 2, "mark": "."}, "code": "PHP", "name": "Philippine Peso", "countries": ["Philippines"]}];

var CURRENCY_MIN = ['USD', 'EUR', 'GBP', 'JPY'];

function addInputNames() {
    $('.card-number').attr('name', 'card-number');
    $('.card-cvc').attr('name', 'card-cvc');
    $('.card-expiry-year').attr('name', 'card-expiry-year');
}

function removeInputNames() {
    $('.card-number').removeAttr('name');
    $('.card-cvc').removeAttr('name');
    $('.card-expiry-year').removeAttr('name');
}

function enable_cc_pay() {
    $ccpayment_loader.removeClass('active');
}

function resize_slide() {
    var height = content_height;
    if($slide_billing.is(':visible')) {
        height = $slide_billing.height();
    }
    if($slide_ccpayment.is(':visible')) {
        height = $slide_ccpayment.height();
    }
    $productland_content.animate({'height' : height}, animation_speed);
}

function show_validation_error($elem, error_text) {
    $elem.show();
    $elem.find('.error-text').text(error_text);
    resize_slide();
}

function hide_validation_error($elem) {
    $elem.hide();
    resize_slide();
}

function show_ccpayment_validation_error(error_text) {
    hide_validation_error($ccpayment_error);
    enable_cc_pay();
    show_validation_error($ccpayment_error, error_text);
}

function start_cc_pay() {
    hide_validation_error($ccpayment_error);
    $ccpayment_loader.addClass('active');
}

function show_cc_error() {
    enable_cc_pay();
    show_ccpayment_validation_error('Sorry, but your payment was declined');
}

function init_validation(submit) {
    $('#cc-payment-form').validate({
        submitHandler: submit
    });

    /* Init ccpayment global $variables */
    $ccpayment_error = $('.ccpayment-error');
    $ccpayment_error_text = $ccpayment_error.find('.ccpayment-error-text');
    $ccpayment_loader = $('#ccpayment-loader');
}

function complete_cc_payment(token) {
    hide_validation_error($ccpayment_error);
    var form = $('#cc-payment-form');
    form.find('input[name="cc_token"]').remove();
    form.append('<input type="hidden" name="cc_token" value="' + token + '"/>');
    $.ajax({
        url: $(form).attr('action'),
        type : 'POST',
        cache : false,
        data : $(form).serialize()
    }).error(function () {
        show_cc_error();
    }).done(function (data) {
        if (data.success === false) {
            if (data.error) {
                show_ccpayment_validation_error(data.error);
            } else {
                show_cc_error();
            }
        } else {
            if (top.location !== self.location) {
                redirect(data.download_url + 'iframe/');
            } else {
                redirect(data.download_url);
            }
        }
    });
}

function init_stripe_form() {
    function submit() {
        removeInputNames();
        start_cc_pay();
        var product_id = $('input[name="product"').val();
        ga('send', 'event', 'goal-cart', 'step8-click_payment_card-pay', product_id);
        Stripe.createToken({
            number: $('.card-number').val(),
            cvc: $('.card-cvc').val(),
            exp_month: $('.card-expiry-month').val(),
            exp_year: $('.card-expiry-year').val()
        }, function (status, response) {
            if (response.error) {
                show_ccpayment_validation_error(response.error.message);
                addInputNames();
            } else {
                var token = response.id;
                complete_cc_payment(token);
            }
        });
        return false;
    }
    addInputNames();
    init_validation(submit);
    return false;
}

function init_paymill_form() {
    /* #TODO: move errors to the serverside like stripe */
    function get_error(key) {
        var paymill_errors = {
            field_invalid_card_number : 'Please enter a valid card number',
            field_invalid_card_exp : 'Please enter a valid expiration',
            field_invalid_card_cvc : 'Please enter a valid CVC code'
        };
        if (key in paymill_errors) {
            return paymill_errors[key];
        } else {
            return key;
        }
    }

    function submit() {
        removeInputNames();
        start_cc_pay();
        var product_id = $('input[name="product"').val();
        ga('send', 'event', 'goal-cart', 'step8-click_payment_card-pay', product_id);
        paymill.createToken({
            number: $('.card-number').val(),
            cvc: $('.card-cvc').val(),
            exp_month: $('.card-expiry-month').val(),
            exp_year: 2000 + parseInt($('.card-expiry-year').val()),
            amount_int: $('.card-amount-int').val(),
            currency: $('.card-currency').val()
        }, function (error, result) {
            if (error) {
                show_ccpayment_validation_error(get_error(error.apierror));
                addInputNames();
            } else {
                var token = result.token;
                complete_cc_payment(token);
            }
        });
        return false;
    }
    addInputNames();
    init_validation(submit);
    return false;
}

function showShareEmbedDialog(){
    $('.product-share-modal').modal('show');
    return false;
}

function hashDialog(dialog) {
    setTimeout(function() {
        if(dialog==='#embed'){
            showShareEmbedDialog();
            location.hash = '';
        }
    }, 1000);
}

$(document).ready(function () {
    /* Disable semantic ui debug */
    $.fn.transition.settings.debug = false;
    $.fn.checkbox.settings.debug = false;
    $.fn.dropdown.settings.debug = false;
    var product_url = $('#product_url').val(),
        product_url_short = $('#product_url_short').val(),
        product_url_current = $('#product_url_current').val(),
        $dropdown = $('.ui.dropdown'),
        animate_speed = 200,
        dialog = location.hash,
        product_id = $('input[name="product"').val(),
        product_share_discount_click = false,
        self_share_button = $('.product-share'),
        product_image = $('.product-image');

    function init_slides() {
        $productland_content = $('#productland_content');
        $slide_content_wrap = $('#slide_content_wrap');
        $slides = $slide_content_wrap.find('.sellfy-slide');
        $slide_billing = $('#slide_billing');
        $slide_ccpayment = $('#slide_ccpayment');
        content_height = $productland_content.height();
        animation_speed = 250;
        $slides.css('top', content_height);
        $billing_error = $('.billing-error');
        populate_country_dropdown();
        populate_state_dropdown();
    }

    function show_billing_slide(callback) {
        ga('send', 'event', 'goal-cart', 'step1-view_cart', product_id);
        $('.slide-wrap').show();
        $(window).scrollTop(0);
        $('.product-wrap').hide();
        if(callback && typeof callback === 'function'){
            callback();
        }
    }

    function show_payment_slide() {
        ga('send', 'event', 'goal-cart', 'step8-view_payment_card', product_id);
        $('.slide-ccpayment-wrap').show();
        $(window).scrollTop(0);
        $('.slide-wrap').hide();
    }

    $(document).on('click', '#slide_billing_hide', function() {
        $('.product-wrap').show();
        $('.slide-wrap').hide();
    });

     $(document).on('click', '#slide_ccpayment_hide', function() {
        $('.slide-wrap').show();
        $('.slide-ccpayment-wrap').hide();
    });

    function populate_country_dropdown() {
        populate_dropdown(
            $('#buyer_location_country'),
            COUNTRIES,
            COUNTRY_ORDER,
            function(value){
                $state = $('#buyer_location_state');
                $state.hide();
                if(value === 'US') {
                    $state.show();
                } else {
                    calculate_tax();
                }
                resize_slide();
            }
        );
    }

    function populate_state_dropdown() {
        var dropdown = $('#buyer_location_state');
        populate_dropdown(
            dropdown,
            STATES.US,
            STATE_ORDER.US,
            function() {
                calculate_tax();
            }
        );
    }

    function populate_dropdown(dropdown, items, item_order, callback) {
        $.each(item_order, function(index, value){
            var item_meta = items[value],
                item = $('<option class="item"></div>');
            item.attr({'value': value, 'title': item_meta.name})
                .text(item_meta.name);
            dropdown.append(item);
        });
        dropdown.change(function(){
            if(callback){
                callback($(this).val());
            }
        });
    }

    function calculate_tax(init, save, callback){
        var form = $('#billing_information'),
            location_enabled = !!($('#billing_information .old-country-select-form').length),
            country_dropdown = form.find('#buyer_location_country'),
            state_dropdown = form.find('#buyer_location_state'),
            country = country_dropdown.val(),
            state = state_dropdown.val(),
            save_draft = form.find('#save');

        remove_dropdown_validation_error(form);
        if(location_enabled && !init) {
            if(!country) {
                show_dropdown_validation_error(country_dropdown);
                return false;
            } else if (country === 'US' && !state) {
                show_dropdown_validation_error(state_dropdown);
                return false;
            }
        }
        save_draft.val(save);
        get_order_draft(form.serialize(), callback);
    }

    function get_order_draft(order_draft, callback) {
        $.post('/order_draft/', order_draft, function (resp) {
            if (resp.error){
                show_validation_error($billing_error, resp.error);
            } else {
                if(resp.discount && resp.discount.amount) {
                    $('#product_discount').html(resp.discount.amount_str);
                    $('#product_discount_amount').text(resp.discount.percents);
                }
                $('#product_tax').html(resp.tax.amount_str);
                $('#product_tax_amount').text(resp.tax.percents);
                $('#product_total').html(resp.total_str);
                if(callback) {
                    callback(resp);
                }
                hide_validation_error($billing_error);
            }

        });
    }

    function continue_payment(payment_method, email, order_draft_key, total) {
        if(payment_method === 'paypal') {
            redirect('/payments/paypal/' + order_draft_key, true);
        } else if (payment_method === 'download') {
            get_download_link(order_draft_key);
        } else {
            show_payment_slide();
            //hide_validation_error($ccpayment_error);
            $('#draft').val(order_draft_key);
            $('#email').val(email);
            $('#ccpayment_total').html(total);
        }
    }

    function get_download_link(order_draft_key) {
        $.post('/payments/download/', {draft: order_draft_key}, function(resp) {
            if (!resp.error) {
                redirect(resp.download_url);
            } else {
                alert(resp.error);
            }
        });
    }

    function show_dropdown_validation_error($elem) {
        $elem.addClass('error');
    }

    function remove_dropdown_validation_error($form) {
        $form.find('select').removeClass('error');
    }

    /* Billing form */
    $(document)
            .on('submit', '#billing_information', function() {
                var payment_method = $(this).data('payment_method');

                if($(this).valid() && payment_method !== undefined) {
                    calculate_tax(false, true, function(resp){
                        var order_draft_key = resp.key,
                            buyer_email = resp.payer_email;
                        continue_payment(payment_method, buyer_email, order_draft_key, resp.total_str);
                    });
                }
                return false;
            })
            .on('click', '#billing_paypal', function() {
                ga('send', 'event', 'goal-cart', 'step7-click_payment_paypal', product_id);
                $('#billing_information').data('payment_method', 'paypal')
                                         .submit();
            })
            .on('click', '#billing_cc', function() {
                ga('send', 'event', 'goal-cart', 'step7-click_payment_card', product_id);
                $('#billing_information').data('payment_method', 'cc')
                                         .submit();
            })
            .on('click', '#billing_download', function() {
                $('#billing_information').data('payment_method', 'download')
                                         .submit();
            });
    /* end billing form */
    init_slides();

    $(document).on('click', '#open_payments', function () {
        if ($('#open_payments').hasClass('full-price')) {
            ga('send', 'event', 'goal-cart', 'step0-click_add-item_choose-pay', product_id);
        } else {
            ga('send', 'event', 'goal-cart', 'step0-click_add-item', product_id);
        }
        show_billing_slide(function() {
            calculate_tax(true);
        });
        return false;
    });

    $(document).on('click', '#open_discounts', function() {
        ga('send', 'event', 'goal-cart', 'step0-click_add-item_share', product_id);
        $('.product-social-share-buttons').slideToggle(animate_speed);
    });

    /* Preview formating on mobile */
    $('.noembed-youtube iframe, .noembed-vimeo iframe').css('height', $('.noembed-embed-inner').width() * 9 / 16 + 'px');

    /* Fix z-index youtube video embedding firefox bug */
    $('.noembed-youtube iframe').each(function () {
        var url = $(this).attr('src');
        $(this).attr('src', url + '&wmode=transparent');
    });


    /* Dropbox saver for download page */
    function show_dropbox_error(error_text) {
        $('#dropbox_saver_error').hide().text(error_text).show();
    }
    $('#dropbox_saver_holder').one('click', function () {
        var bttn = $(this),
            server_url = bttn.attr('data-href');
        bttn.removeClass('normal').addClass('wait');
        $.ajax({
            type: 'POST',
            url: server_url,
            error: function(){
                show_dropbox_error('Error while contacting Dropbox. Please use Download button');
            },
            success: function(data){
                if(data.success) {
                    bttn.removeClass('wait').addClass('choose');
                    bttn.attr('data-href', data.product_url);
                    bttn.on('click', function(){
                            var bttn_text = bttn.find('.button-choose'),
                                options = {
                                    files: [
                                        {'url' : $(this).attr('data-href')}
                                    ],
                                    success: function () {
                                        bttn_text.text('File saved');
                                    },
                                    progress: function (progress) {
                                        progress = Math.ceil(progress * 100);
                                        bttn_text.text('Saving: ' + progress + '%');
                                    },
                                    error: function (error_text) {
                                        show_dropbox_error(error_text);
                                    }
                                };
                            Dropbox.save(options);
                            return false;
                        });
                } else {
                    show_dropbox_error(data.error);
                    bttn.removeClass('wait').addClass('normal');
                }
            }
        });
        return false;
    });
    /* End dropbox saver for download page */

    /* Open payment options window on page load for /checkout */
    if (!!$('#is_checkout').val()) {
        if($('#open_payments').length) {
            $('#open_payments').click();
        } else {
            $('#open_ccpayment').click();
        }
    }

    /* Facebook social like button */

    window.fbAsyncInit = function() {
        FB.Event.subscribe('edge.create', function(href, widget) {
            ga('send', {
                'hitType': 'social',
                'socialNetwork': 'Facebook',
                'socialAction': 'Like',
                'socialTarget': product_url_short
            });
        });
    }

    /* End facebook social like button */

    /* Simple tweet, not discount */
    $('#product_share_twitter').on('click', function() {
        product_share_discount_click = false;
    });
    /* Real discount tweet */
    $('#twitter_discount').on('click', function() {
        product_share_discount_click = true;
    });

    /* End social share */

    /* Twitter social discount */
    if(window.twttr){
        window.twttr.ready(function (twttr) {
            twttr.events.bind('tweet', function() {
                if(product_share_discount_click) {
                    get_social_discount('twitter');
                } else {
                    ga('send', {
                        'hitType': 'social',
                        'socialNetwork': 'Twitter',
                        'socialAction': 'Tweet',
                        'socialTarget': product_url_short
                    });
                }
            });
        });
    }
    /* End twitter social discount */

    /* Facebook social discount */
    $('#facebook_discount').on('click', function(){
        FB.ui({
            method: 'feed',
            link: product_url
        }, function(response){
            if (!(response === null || typeof response === 'undefined')) {
                get_social_discount('facebook');
            }
        });
    });
    /* End facebook social discount */

    /* Social discount */
    function get_social_discount(via) {
        var url = $('#social_discount_url').val(),
            form_data = $('#product_discount_form').serialize();
        url += '?via=' + via;
        $.post(url, form_data, function(resp) {
            if(resp.error) {
                alert(resp.error);
            } else {
                var ttl = 60;
                add_cookie('social_discount', resp.social_discount, ttl);
                redirect(product_url_current + 'checkout/');
            }
        });
    }
    /* End social discount */


    function minutes_from_now(minutes) {
        var now = new Date(),
            time = now.getTime();
        time += minutes * 1000 * 60;
        now.setTime(time);
        return now.toGMTString();
    }

    function add_cookie(name, value, minutes) {
        var expires = minutes_from_now(minutes);
        document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
    }

    /* Share & embed modal */

    if(self_share_button.length){
        self_share_button.css('height', product_image.height()).show();
    }

    $('body').on('change', '#change_embed_code', function(){
        $('.embed-code-holder').toggleClass('new-window', $(this).is(':checked'));
    });

    $('body').on('click', '.embed-code-holder input', function(e){
        selectText(e.currentTarget);
    });

    $('.product-share-button').on('click', showShareEmbedDialog);
    hashDialog(dialog);

    /* end share & embed modal */

    /* Enable ui dropdowns */
    if($dropdown.length){
        $dropdown.dropdown();
    }

    /* Download page logic */
    var downloadAuthFlow = new AuthFlow('#download_register_button', 'signup', {
        cookieName: function () {
              return 'downloadAuthForm';
        },
        cookieData: function () {
            return {};
        },
        onPageReload: function () {
            assignOrder();
        },
        bindEvents: false,
        signupTag: 'buyer'
    });


    $('#download_register_button').on('click', function () {
        assignOrder(function () {
            downloadAuthFlow.show();
        });
    });

    $('#download_button_open').on('click', function () {
        $('#download_button_holder').slideToggle(animate_speed);
    });
    /* End download page logic */


    /* Close iframe listener */
    $('.close-iframe').on('click', function () {
        parent.postMessage('close_frame', '*');
    });
    /* End close iframe listener */
});


/* Show native share button only on full page load */
$(window).load(function(){
    $social_buttons = $('.social-native-buttons');
    if($social_buttons.length){
        $social_buttons.css('opacity', 1);
    }
});

/* Asign order to user on Download page */
function assignOrder(failCallback) {
    $.post('', {'assign_order': true}, function () {
        window.location.reload();
    }).fail(function() {
        if (failCallback) {
            failCallback();
        }
    });
}

$(document).ready(function () {


    $('.profile-unsubscribe-btn, .profile-subscribe-btn').on('click', function () {

        var $btn = $(this),
            $btn_parent = $btn.parent(),
            isUnsubscribe = $btn.hasClass('profile-unsubscribe-btn');


        function showSubscribe () {
            $btn_parent.removeClass('unfollow').addClass('follow');
        }

        function showUnsubscribe () {
            $btn_parent.removeClass('follow').addClass('unfollow');
            if ($btn.hasClass('followers')) {
                ga('send', 'event', 'user-action_signup-button', 'follow-followers', window.location.pathname);
            } else if ($btn.hasClass('followees')) {
                ga('send', 'event', 'user-action_signup-button', 'follow-following', window.location.pathname);
            } else if ($btn.hasClass('merchant')) {
                ga('send', 'event', 'user-action_signup-button', 'follow-shop', window.location.pathname);
            }
        }

        var url = isUnsubscribe ? '/user/unsubscribe/' : '/user/subscribe/';

        url += ($btn.data('merchant') + '/');


        $.ajax({
            type: 'POST',
            url: url,
            data: {source: 'profile-page'},
            success: function (resp) {
                if (!resp.error) {
                    if (isUnsubscribe) {
                        showSubscribe();
                    } else {
                        showUnsubscribe();
                    }

                    if (resp.error) {
                        show_noty(resp.error);
                    }
                }
            },
            error: function () {
                subscribeAuthFlow.show($btn);
            }
        });
    });

    var subscribeAuthFlow = new AuthFlow('.profile-subscribe-btn, .profile-unsubscribe-btn', 'signup', {
        cookieName: function () {
              return 'subscribeAuthFlow';
        },
        cookieData: function (element) {

            return {
                'merchantName': $(element).data('merchant')
            };
        },
        onPageReload: function (element, cookieData) {
            var btn = $('.profile-subscribe-btn[data-merchant="' + cookieData.merchantName + '"]').first();
            btn.trigger('click');
            btn.click();
        },
        gaSend: function () {
            ga('send', 'event', 'signup', 'step3', 'user-profile');
        },
        bindEvents: false,
        signupTag: 'follow'
    });

    function subscribeAction(url, source, callback) {
        $.ajax({
            type: 'POST',
            url: url,
            data: {source: source},
            success: function (resp) {
                if (resp.success) {
                    if(callback && typeof callback === 'function'){
                        callback();
                    }
                }
            }
        });
    }
});


;(function() {
  function redirect(response) {
    redirectToUrl(response.redirect_url);
  }

  function redirectToUrl(url) {
    this.window.location.href = url;
  }

  function initSignupForm(selector, submitSelector, url, success){
    var $signupForm = $(selector),
        $signupSubmit = $signupForm.find(submitSelector),
        $errorBox = $signupForm.find('.ui.error.message p'),
        successCallback = success || redirect;

    $signupForm.on('submit', function () {
      $signupSubmit.addClass('disabled');

      var signupData = $signupForm.serialize(),
          signupPost = $.post(url, signupData);
      signupPost.done(function(resp){
        if (resp.success){
          successCallback(resp);
        } else {
          $errorBox.html(resp.error);
          $signupForm.addClass('error');
        }
      });
      signupPost.fail(function(resp){
          $errorBox.html('Something wen\'t wrong. Please try again later.');
          $signupForm.addClass('error');
      });
      signupPost.always(function () {
          $signupSubmit.removeClass('disabled');
      });
      return false;
    });
  }
  this.initSignupForm = initSignupForm;
  this.redirectToUrl = redirectToUrl;
}.call(this));
