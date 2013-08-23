function compile(t){return compile.semantics.compile(t)}var Object=require("collections/shim-object"),Map=require("collections/map"),SortedSet=require("collections/sorted-set"),Operators=require("./operators"),Scope=require("./scope");module.exports=compile;var compilers={literal:function(t){return function(){return t.value}},value:function(){return function(t){return t.value}},parameters:function(){return function(t){return t.parameters}},element:function(t){return function(e){return e.document.getElementById(t.id)}},component:function(t){return function(e){return e.components.getObjectByLabel(t.label)}},tuple:function(t){var e=t.args.map(this.compile,this);return function(t){return e.map(function(e){return e(t)})}},record:function(t){var e=t.args,n={};for(var i in e)n[i]=this.compile(e[i]);return function(t){var e={};for(var i in n)e[i]=n[i](t);return e}}},argCompilers={mapBlock:function(t,e){return function(n){return t(n).map(function(t){return e(Scope.nest(n,t))})}},filterBlock:function(t,e){return function(n){return t(n).filter(function(t){return e(Scope.nest(n,t))})}},someBlock:function(t,e){return function(n){return t(n).some(function(t){return e(Scope.nest(n,t))})}},everyBlock:function(t,e){return function(n){return t(n).every(function(t){return e(Scope.nest(n,t))})}},sortedBlock:function(t,e){return function(n){return t(n).sorted(Function.by(function(t){return e(Scope.nest(n,t))}))}},sortedSetBlock:function(t,e){return function(n){function i(t){return e(Scope.nest(n,t))}function a(t,e){return Object.compare(i(t),i(e))}function r(t,e){return Object.equals(i(t),i(e))}return new SortedSet(t(n),r,a)}},groupBlock:function(t,e){return function(n){return t(n).group(function(t){return e(Scope.nest(n,t))})}},groupMapBlock:function(t,e){return function(n){return new Map(t(n).group(function(t){return e(Scope.nest(n,t))}))}},minBlock:function(t,e){return function(n){return t(n).min(Function.by(function(t){return e(Scope.nest(n,t))}))}},maxBlock:function(t,e){return function(n){return t(n).max(Function.by(function(t){return e(Scope.nest(n,t))}))}},parent:function(t){return function(e){return t(e.parent)}},"with":function(t,e){return function(n){return e(Scope.nest(n,t(n)))}},"if":function(t,e,n){return function(i){return t(i)?e(i):n(i)}},not:function(t){return function(e){return!t(e)}},and:function(t,e){return function(n){return t(n)&&e(n)}},or:function(t,e){return function(n){return t(n)||e(n)}},"default":function(t,e){return function(n){var i=t(n);return null==i&&(i=e(n)),i}},defined:function(t){return function(e){var n=t(e);return null!=n}},path:function(t,e){return function(n){var i=t(n),a=e(n),r=require("./parse");try{var s=r(a),o=compile(s);return o(Scope.nest(n,i))}catch(l){}}}},operators=Object.clone(Operators,1);Object.addEach(operators,{property:function(t,e){return t[e]},get:function(t,e){return t.get(e)},mapContent:Function.identity,rangeContent:Function.identity,view:function(t,e,n){return t.slice(e,e+n)}});var semantics=compile.semantics={compilers:compilers,argCompilers:argCompilers,operators:operators,compile:function(t){var e=this.compilers,n=this.argCompilers,i=this.operators;if(e.hasOwnProperty(t.type))return e[t.type].call(this,t);if(n.hasOwnProperty(t.type)){var a=t.args.map(this.compile,this);return n[t.type].apply(null,a)}i.hasOwnProperty(t.type)||(i[t.type]=function(e){var n=Array.prototype.slice.call(arguments,1);if(!e[t.type])throw new TypeError("Can't call "+JSON.stringify(t.type)+" of "+e);return e[t.type].apply(e,n)});var r=i[t.type],a=t.args.map(this.compile,this);return function(t){var e=a.map(function(e){return e(t)});if(e.every(Operators.defined))return r.apply(null,e)}}};