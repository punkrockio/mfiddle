(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,l.length)==l&&"___"===e.substr(e.length-3))}function n(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[c];if(t&&t.key===e)return t;if(!o(e))return void 0;var n=[],i=[];return t={key:e,gets:n,vals:i},s(e,c,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}function i(e){return e.prototype=null,Object.freeze(e)}if("undefined"==typeof ses||!ses.ok||ses.ok()){if("undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e),"function"==typeof WeakMap){var a=WeakMap;if("undefined"==typeof navigator||!/Firefox/.test(navigator.userAgent))return module.exports=WeakMap,void 0}Object.prototype.hasOwnProperty;var r=Object.getOwnPropertyNames,s=Object.defineProperty,o=Object.isExtensible,l="weakmap:",c=l+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var u=new ArrayBuffer(25),h=new Uint8Array(u);crypto.getRandomValues(h),c=l+"rand:"+Array.prototype.map.call(h,function(e){return(e%36).toString(36)}).join("")+"___"}if(s(Object,"getOwnPropertyNames",{value:function(e){return r(e).filter(t)}}),"getPropertyNames"in Object){var d=Object.getPropertyNames;s(Object,"getPropertyNames",{value:function(e){return d(e).filter(t)}})}(function(){var e=Object.freeze;s(Object,"freeze",{value:function(t){return n(t),e(t)}});var t=Object.seal;s(Object,"seal",{value:function(e){return n(e),t(e)}});var i=Object.preventExtensions;s(Object,"preventExtensions",{value:function(e){return n(e),i(e)}})})();var p=function(){function e(t,i){var a,r,l=n(t);return l?(a=l.gets.indexOf(e),r=l.vals):(a=s.indexOf(t),r=o),a>=0?r[a]:i}function t(t){var i,a=n(t);return i=a?a.gets.indexOf(e):s.indexOf(t),i>=0}function a(t,i){var a,r=n(t);r?(a=r.gets.indexOf(e),a>=0?r.vals[a]=i:(r.gets.push(e),r.vals.push(i))):(a=s.indexOf(t),a>=0?o[a]=i:(s.push(t),o.push(i)))}function r(t){var i,a=n(t);return a?(i=a.gets.indexOf(e),i>=0&&(a.gets.splice(i,1),a.vals.splice(i,1))):(i=s.indexOf(t),i>=0&&(s.splice(i,1),o.splice(i,1))),!0}var s=[],o=[];return Object.create(p.prototype,{get___:{value:i(e)},has___:{value:i(t)},set___:{value:i(a)},delete___:{value:i(r)}})};p.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof a?function(){function t(){function t(e,t){return l?o.has(e)?o.get(e):l.get___(e,t):o.get(e,t)}function n(e){return o.has(e)||(l?l.has___(e):!1)}function r(e,t){if(c)try{o.set(e,t)}catch(n){l||(l=new p),l.set___(e,t)}else o.set(e,t)}function s(e){o["delete"](e),l&&l.delete___(e)}var o=new a,l=void 0,c=!1;return Object.create(p.prototype,{get___:{value:i(t)},has___:{value:i(n)},set___:{value:i(r)},delete___:{value:i(s)},permitHostObjects___:{value:i(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");c=!0})}})}t.prototype=p.prototype,module.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),module.exports=p)}})();