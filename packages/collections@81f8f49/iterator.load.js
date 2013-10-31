montageDefine("81f8f49","iterator",{dependencies:["./shim-object","./generic-collection"],factory:function(e,t,n){"use strict";function i(e){if(!(this instanceof i))return new i(e);if(Array.isArray(e)||"string"==typeof e)return i.iterate(e);if(e=r(e),e instanceof i)return e;if(e.next)this.next=function(){return e.next()};else if(e.iterate){var t=e.iterate();this.next=function(){return t.next()}}else{if("[object Function]"!==r.prototype.toString.call(e))throw new TypeError("Can't iterate "+e);this.next=e}}n.exports=i;var r=e("./shim-object"),o=e("./generic-collection");i.prototype.forEach=o.prototype.forEach,i.prototype.map=o.prototype.map,i.prototype.filter=o.prototype.filter,i.prototype.every=o.prototype.every,i.prototype.some=o.prototype.some,i.prototype.any=o.prototype.any,i.prototype.all=o.prototype.all,i.prototype.min=o.prototype.min,i.prototype.max=o.prototype.max,i.prototype.sum=o.prototype.sum,i.prototype.average=o.prototype.average,i.prototype.flatten=o.prototype.flatten,i.prototype.zip=o.prototype.zip,i.prototype.enumerate=o.prototype.enumerate,i.prototype.sorted=o.prototype.sorted,i.prototype.group=o.prototype.group,i.prototype.reversed=o.prototype.reversed,i.prototype.toArray=o.prototype.toArray,i.prototype.toObject=o.prototype.toObject,i.prototype.iterator=o.prototype.iterator,i.prototype.constructClone=function(e){var t=[];return t.addEach(e),t},i.prototype.mapIterator=function(e){var t=i(this),n=arguments[1],o=0;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return new t.constructor(function(){return e.call(n,t.next(),o++,t)})},i.prototype.filterIterator=function(e){var t=i(this),n=arguments[1],o=0;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return new t.constructor(function(){for(var i;;)if(i=t.next(),e.call(n,i,o++,t))return i})},i.prototype.reduce=function(e){var t,n=i(this),o=arguments[1],a=arguments[2],s=0;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;try{t=n.next(),o=arguments.length>1?e.call(a,o,t,s,n):t,s++}catch(l){if(isStopIteration(l)){if(arguments.length>1)return arguments[1];throw TypeError("cannot reduce a value from an empty iterator with no initial value")}throw l}try{for(;;)t=n.next(),o=e.call(a,o,t,s,n),s++}catch(l){if(isStopIteration(l))return o;throw l}},i.prototype.concat=function(){return i.concat(Array.prototype.concat.apply(this,arguments))},i.prototype.dropWhile=function(e){var t,n=i(this),o=arguments[1],a=!1;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return n.forEach(function(i,r){if(!e.call(o,i,r,n))throw a=!0,t=i,StopIteration}),a?n.constructor([t]).concat(n):n.constructor([])},i.prototype.takeWhile=function(e){var t=i(this),n=arguments[1];if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return t.mapIterator(function(i,r){if(!e.call(n,i,r,t))throw StopIteration;return i})},i.prototype.zipIterator=function(){return i.unzip(Array.prototype.concat.apply(this,arguments))},i.prototype.enumerateIterator=function(e){return i.count(e).zipIterator(this)},i.iterate=function(e){var t;return t=0,new i(function(){if("object"==typeof e)for(;!(t in e);){if(t>=e.length)throw StopIteration;t+=1}else if(t>=e.length)throw StopIteration;var n=e[t];return t+=1,n})},i.cycle=function(e,t){2>arguments.length&&(t=1/0);var n=function(){throw StopIteration};return new i(function(){var r;try{return n()}catch(o){if(isStopIteration(o)){if(0>=t)throw o;return t--,r=i.iterate(e),n=r.next.bind(r),n()}throw o}})},i.concat=function(e){e=i(e);var t=function(){throw StopIteration};return new i(function(){var n;try{return t()}catch(r){if(isStopIteration(r))return n=i(e.next()),t=n.next.bind(n),t();throw r}})},i.unzip=function(e){return e=i(e).map(i),0===e.length?new i([]):new i(function(){var t,n=e.map(function(e){try{return e.next()}catch(n){if(!isStopIteration(n))throw n;t=!0}});if(t)throw StopIteration;return n})},i.zip=function(){return i.unzip(Array.prototype.slice.call(arguments))},i.chain=function(){return i.concat(Array.prototype.slice.call(arguments))},i.range=function(e,t,n){return 3>arguments.length&&(n=1),2>arguments.length&&(t=e,e=0),e=e||0,n=n||1,new i(function(){if(e>=t)throw StopIteration;var i=e;return e+=n,i})},i.count=function(e,t){return i.range(e,1/0,t)},i.repeat=function(e,t){return new i.range(t).mapIterator(function(){return e})},"undefined"==typeof isStopIteration&&(global.isStopIteration=function(e){return"[object StopIteration]"===r.prototype.toString.call(e)}),"undefined"==typeof StopIteration&&(global.StopIteration={},r.prototype.toString=function(e){return function(){return this===global.StopIteration||this instanceof global.ReturnValue?"[object StopIteration]":e.call(this,arguments)}}(r.prototype.toString)),a===void 0&&(global.ReturnValue=function a(e){return this.message="Iteration stopped with "+e,Error.captureStackTrace&&Error.captureStackTrace(this,a),this instanceof global.ReturnValue?(this.value=e,void 0):new global.ReturnValue(e)},a.prototype=Error.prototype)}});