montageDefine("e47202a","binders",{dependencies:["./scope","./observers"],factory:function(t,e){function n(){return Error("").stack.replace(/^.*\n.*\n/,"\n")}function i(t,e,i,a,r,s){return i(b(function(i){if(!r.isActive)try{r.isActive=!0,s&&console.log("SET",s.targetPath,"TO",i,"ON",t,"BECAUSE",s.sourcePath,n()),Array.isArray(t)&&e>>>0===e?t.set(e,i):t[e]=i}finally{r.isActive=!1}}),a)}function a(t,e){return function(n,i,a,r,s){return e(b(function(e){return null!=e?t(b(function(t){return null!=t?t.bindProperty?t.bindProperty(e,n,i,r,s):k(t,e,n,i,r,s):void 0}),a):void 0}),a)}}function r(t,e,i,a,r,s){return i(b(function(i){if(!r.isActive)try{r.isActive=!0,s&&console.log("SET FOR KEY",e,"TO",i,"ON",t,"BECAUSE",s.sourcePath,n()),t.set(e,i)}finally{r.isActive=!1}}),a)}function s(t,e){return function(n,i,a,r,s){return t(b(function(t){return t?e(b(function(e){return null!=e?D(t,e,n,i,r,s):void 0}),a):void 0}),a)}}function o(t,e){return function(i,a,r,s,o){return t(b(function(t){return t?e(b(function(e){return null!=e?i(b(function(i){if(i)(t.has||t.contains).call(t,e)||(o&&console.log("ADD",e,"TO",o.targetPath,"BECAUSE",o.sourcePath,n()),t.add(e));else for(;(t.has||t.contains).call(t,e);)o&&console.log("REMOVE",e,"FROM",o.targetPath,"BECAUSE",o.sourcePath,n()),(t.remove||t["delete"]).call(t,e)}),a):void 0}),r):void 0}),r)}}function l(t,e){return function(i,a,r,s,o){return i(b(function(i){return i?(o&&console.log("BIND",o.targetPath,"TO",o.sourcePath,n()),t(e,a,a,s,o),function(){o&&console.log("UNBIND",o.targetPath,"FROM",o.sourcePath,n())}):void 0}),r)}}function c(t,e,n){return function(i,a,r,s,o){return i(b(function(i){return i?t(b(function(t){function i(t,i,l){a.swap(l,i.length,t.map(function(t){var i=y.nest(r,t);return e(n,i,i,s,o)}))}if(t){var a=[],l=w(t,i,r);return function(){x(a),l()}}}),r):void 0}),a)}}function h(t,e,n,i,a,r){var s=M(i),o=S(n,s);return function(n,i,s,l,c){return n(b(function(n){if(null!=n){if(n){var i=t(a,T,s,l,c),h=e(r,T,s,l,c);return function(){i(),h()}}return t(o,s,s,l,c)}}),i)}}function u(t,e,n,i,a,r){var s=M(i),o=z(n,s);return function(n,i,s,l,c){return n(b(function(n){if(null!=n){if(n)return t(o,s,s,l,c);var i=t(a,P,s,l,c),h=e(r,P,s,l,c);return function(){i(),h()}}}),i)}}function d(t,e,n){return function(i,a,r,s,o){return t(b(function(t){return null!=t?t?e(i,a,r,s,o):n(i,a,r,s,o):void 0}),a)}}function p(t){return function(e,n,i){return t(b(function(t){return t?e(b(function(e){null!=e&&t.splice(0,t.length,e)}),n):void 0}),i)}}function g(t,e){return function(i,a,r,s,o){return t(b(function(t){return t?i(b(function(e){function i(e,i,a){L(t)||(o&&console.log("SWAPPING",i,"FOR",e,"AT",a,"ON",o.targetPath,n()),t.swap?t.swap(a,i.length,e):t.add&&(t.remove||t["delete"])&&(e.forEach(t.add,t),i.forEach(t.remove||t["delete"],t)))}if(e!==t){if(!e)return t.clear(),void 0;if(e.addRangeChangeListener)return e.addRangeChangeListener(i),i(Array.from(e),Array.from(t),0),C(function(){e.removeRangeChangeListener(i)})}}),a):e(_.makeLiteralObserver([]),a,r,s,o)}),r)}}function m(t){return function(e,i,a,r,s){return t(b(function(t){return t?e(b(function(e){function i(e,i){if(!r.isActive)try{r.isActive=!0,void 0===e?(s&&s&&console.log("DELETED",s.targetPath,"FOR KEY",i,"ON",t,"BECAUSE",s.sourcePath,n()),Array.isArray(t)?t.splice(i,1):t["delete"](i)):(s&&s&&console.log("SET",s.targetPath,"FOR KEY",i,"TO",e,"ON",t,"BECAUSE",s.sourcePath,n()),t.set(i,e))}finally{r.isActive=!1}}return e?(t.clear(),e.forEach(i),e.addMapChangeListener(i)):(t.clear(),void 0)}),i):void 0}),a)}}function f(t){return function(e,n,i){return t(b(function(t){return t?e(b(function(e){function n(e,n,i){if(!L(t)){var a=t.length-i-n.length;t.swap(a,n.length,e.reversed())}}return e?(e.addRangeChangeListener(n),n(e,t,0),C(function(){e.removeRangeChangeListener(n)})):(t.clear(),void 0)}),n):void 0}),i)}}function v(t){return function(e,n,i,a,r){return e(b(function(e){return e?Function.noop:t(E,n,i,a,r)}),i)}}function L(t){return t.getRangeChangeDescriptor&&t.getRangeChangeDescriptor().isActive}var y=t("./scope"),_=t("./observers"),b=_.autoCancelPrevious,C=_.once,w=_.observeRangeChange,x=_.cancelEach,M=_.makeNotObserver,z=_.makeOrObserver,S=_.makeAndObserver;_.observeValue;var E=_.makeLiteralObserver(),T=new y(!0),P=new y(!1);e.bindProperty=i;var k=i;e.makePropertyBinder=a,e.bindGet=r;var D=r;e.makeGetBinder=s,e.makeHasBinder=o,e.makeEqualityBinder=l,e.makeEveryBlockBinder=c,e.makeAndBinder=h,e.makeOrBinder=u,e.makeConditionalBinder=d,e.makeOnlyBinder=p,e.makeRangeContentBinder=g,e.makeMapContentBinder=m,e.makeReversedBinder=f,e.makeDefinedBinder=v}});