var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

window.Modernizr=function(e,t,n){function r(e){p.cssText=e}function o(e,t){return typeof e===t}var a,i,c,l="2.7.1",d={},s=!0,u=t.documentElement,f="modernizr",m=t.createElement(f),p=m.style,h=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),v={},y=[],g=y.slice,E=function(e,n,r,o){var a,i,c,l,d=t.createElement("div"),s=t.body,m=s||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:f+(r+1),d.appendChild(c);return a=["&#173;",'<style id="s',f,'">',e,"</style>"].join(""),d.id=f,(s?d:m).innerHTML+=a,m.appendChild(d),s||(m.style.background="",m.style.overflow="hidden",l=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),i=n(d,e),s?d.parentNode.removeChild(d):(m.parentNode.removeChild(m),u.style.overflow=l),!!i},b={}.hasOwnProperty;c=o(b,"undefined")||o(b.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return b.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=g.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(g.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(g.call(arguments)))};return r}),v.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:E(["@media (",h.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},v.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n};for(var w in v)c(v,w)&&(i=w.toLowerCase(),d[i]=v[w](),y.push((d[i]?"":"no-")+i));return d.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof s&&s&&(u.className+=" w-mod-"+(t?"":"no-")+e),d[e]=t}return d},r(""),m=a=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;i<l;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return g.shivCSS&&!d&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||c(e,r),e}var d,s,u="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){d=!0,s=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:f.shivCSS!==!1,supportsUnknownElements:s,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=g,l(t)}(this,t),d._version=l,d._prefixes=h,d.testStyles=E,u.className=u.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" w-mod-js w-mod-"+y.join(" w-mod-"):""),d}(this,this.document),Modernizr.addTest("ios",/(ipod|iphone|ipad)/i.test(navigator.userAgent));

}
/*
     FILE ARCHIVED ON 19:41:33 May 12, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:06:51 Aug 14, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.01
  exclusion.robots.policy: 0.151
  exclusion.robots: 0.16
  captures_list: 798.023
  LoadShardBlock: 740.992 (3)
  PetaboxLoader3.resolve: 159.704 (2)
  load_resource: 2290.842
  RedisCDXSource: 32.791
  PetaboxLoader3.datanode: 2566.435 (4)
  CDXLines.iter: 20.972 (3)
*/