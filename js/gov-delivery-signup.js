﻿var VAAccess={Random:1,ConfigureForm:function(b,a){var c=b.find("form#"+a+"GovDeliverySignupForm");b.find("#"+a+"GovDeliverySubmitButton").click(function(){var b;VAAccess.ValidateGovDeliveryForm(c)&&(VAAccess.Analytics.Send(this,{gas:["_trackEvent","Email","Submit"],eb:["358013"],fb:["6010896030755","6010907244355"]}),"undefined"!==typeof __adroll&&(window.adroll_segments="general",__adroll.render_pixel_code(window.adroll_adv_id,window.adroll_pix_id)),b=JSON.stringify({email:c.find("#"+a+"GovDeliveryEmail:first").val()}),
c.find("input, select").attr("disabled","disabled"),$.ajax({type:"POST",cache:!1,contentType:"application/json; charset=utf-8",url:"/explore/govdelivery2/Controller.aspx/Signup",data:b,dataType:"json",success:function(a){var b;a.d.error||(b=$("<a/>",{"class":"GovDeliveryCloseButton"}),b.append("<span>Close</span>").appendTo("body").click(function(){var a=$("#GovDeliveryThankYou");a.parent().fadeOut(100,function(){a.dialog("close")});return!1}),c.closest("#GovDeliveryPopupContainer"+VAAccess.Random).dialog("close"),c.find("input, select").not("input[type=submit]").val(""),
$("<div/>",{id:"GovDeliveryThankYou"}).append("<h1>Thank You</h1>").append("<p>Thanks for staying connected to VA.  You'll receive an email confirmation soon.</p>").append('<a id="GovDeliveryThankYouExploreLink" href="/explore/"><span>Explore VA Today</span></a>').append('<a id="GovDeliveryThankYouCloseLink" href="#">Close this window</a>').dialog({create:function(a){},autoOpen:!0,dialogClass:"GovDeliveryPopup",modal:!0,width:611,closeOnEscape:!0,resizable:!1,draggable:!1,zIndex:2E4,position:"center",
close:function(a){b.remove();$("#GovDeliveryThankYou").remove()},open:function(a,c){var d=$(this),e=d.find("#GovDeliveryThankYouCloseLink");d.parent().css("padding","10px");b.css("top",d.parent().position().top-15).css("left",d.parent().position().left+d.parent().width()-2);b.show();$(".ui-widget-overlay").bind("click",function(){d.dialog("close")});e.click(function(){d.dialog("close");return!1})}}));c.find("input, select").removeAttr("disabled")}}));return!1})},ValidateGovDeliveryForm:function(b){var a=
!0;b.unbind();$.removeData(b.get(0),"validator");b.validate({errorClass:"ValidateErrorText",rules:{GovDeliveryEmail:{required:!0,email:!0},popupGovDeliveryEmail:{required:!0,email:!0}},messages:{GovDeliveryEmail:{required:"Required.",email:"Invalid email address."},popupGovDeliveryEmail:{required:"*",email:"*"}},errorPlacement:function(a,b){"popupGovDeliveryEmail"===b.get(0).id?(b.after(a),a.css("margin-left",".5em").css("display","inline").css("width","auto").css("float","none").css("font-size",
"24px").css("clear","none")):b.before(a)}});return a=b.valid()},SetCookie:function(b,a){document.cookie=b+"="+encodeURI(a)+";expires="+(new Date((new Date).getFullYear()+1,1,1)).toGMTString()+";path=/"},GetCookie:function(b){if(0<document.cookie.length){var a=document.cookie.indexOf(b+"="),c="";return-1!==a?(a=a+b.length+1,c=document.cookie.indexOf(";",a),-1===c&&(c=document.cookie.length),decodeURI(document.cookie.substring(a,c))):""}},Analytics:{Send:function(b,a){a=$.extend(!0,{gas:[],eb:[],fb:[],
adroll:[]},a);var c=0;if(void 0!==b){1<a.gas.length&&"undefined"!==typeof _gas&&_gas.push(a.gas);if(0<a.eb.length)for(c=0;c<a.eb.length;c++)"function"===typeof ebConversionTracker&&ebConversionTracker(a.eb[c]);if(0<a.fb.length)for(c=0;c<a.fb.length;c++)"function"===typeof fbConversionTracker&&fbConversionTracker(a.fb[c]);if(0<a.adroll.length)for(c=0;c<a.adroll.length;c++)"undefined"!==typeof __adroll&&(window.adroll_segments=a.adroll[c],__adroll.render_pixel_code(window.adroll_adv_id,window.adroll_pix_id));
void 0!==b.href&&window.setTimeout(function(){window.location=b.href},500)}}}};