(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,l.length)==l&&"___"===e.substr(e.length-3))}function n(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[c];if(t&&t.key===e)return t;if(!o(e))return void 0;var n=[],a=[];return t={key:e,gets:n,vals:a},s(e,c,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}function a(e){return e.prototype=null,Object.freeze(e)}if("undefined"==typeof ses||!ses.ok||ses.ok()){if("undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e),"function"==typeof WeakMap){var i=WeakMap;if("undefined"==typeof navigator||!/Firefox/.test(navigator.userAgent))return module.exports=WeakMap,void 0}Object.prototype.hasOwnProperty;var r=Object.getOwnPropertyNames,s=Object.defineProperty,o=Object.isExtensible,l="weakmap:",c=l+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var u=new ArrayBuffer(25),h=new Uint8Array(u);crypto.getRandomValues(h),c=l+"rand:"+Array.prototype.map.call(h,function(e){return(e%36).toString(36)}).join("")+"___"}if(s(Object,"getOwnPropertyNames",{value:function(e){return r(e).filter(t)}}),"getPropertyNames"in Object){var d=Object.getPropertyNames;s(Object,"getPropertyNames",{value:function(e){return d(e).filter(t)}})}(function(){var e=Object.freeze;s(Object,"freeze",{value:function(t){return n(t),e(t)}});var t=Object.seal;s(Object,"seal",{value:function(e){return n(e),t(e)}});var a=Object.preventExtensions;s(Object,"preventExtensions",{value:function(e){return n(e),a(e)}})})();var p=function(){function e(t,a){var i,r,l=n(t);return l?(i=l.gets.indexOf(e),r=l.vals):(i=s.indexOf(t),r=o),i>=0?r[i]:a}function t(t){var a,i=n(t);return a=i?i.gets.indexOf(e):s.indexOf(t),a>=0}function i(t,a){var i,r=n(t);r?(i=r.gets.indexOf(e),i>=0?r.vals[i]=a:(r.gets.push(e),r.vals.push(a))):(i=s.indexOf(t),i>=0?o[i]=a:(s.push(t),o.push(a)))}function r(t){var a,i=n(t);return i?(a=i.gets.indexOf(e),a>=0&&(i.gets.splice(a,1),i.vals.splice(a,1))):(a=s.indexOf(t),a>=0&&(s.splice(a,1),o.splice(a,1))),!0}var s=[],o=[];return Object.create(p.prototype,{get___:{value:a(e)},has___:{value:a(t)},set___:{value:a(i)},delete___:{value:a(r)}})};p.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof i?function(){function t(){function t(e,t){return l?o.has(e)?o.get(e):l.get___(e,t):o.get(e,t)}function n(e){return o.has(e)||(l?l.has___(e):!1)}function r(e,t){if(c)try{o.set(e,t)}catch(n){l||(l=new p),l.set___(e,t)}else o.set(e,t)}function s(e){o["delete"](e),l&&l.delete___(e)}var o=new i,l=void 0,c=!1;return Object.create(p.prototype,{get___:{value:a(t)},has___:{value:a(n)},set___:{value:a(r)},delete___:{value:a(s)},permitHostObjects___:{value:a(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");c=!0})}})}t.prototype=p.prototype,module.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),module.exports=p)}})();