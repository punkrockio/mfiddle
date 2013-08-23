montageDefine("e47202a","compile-assigner",{dependencies:["./compile-evaluator","./algebra","./scope"],factory:function(t,e,n){function i(t){return i.semantics.compile(t)}var a=t("./compile-evaluator"),r=t("./algebra"),s=t("./scope"),o={type:"value"},l={type:"literal",value:!0},c={type:"literal",value:!1};n.exports=i,i.semantics={compile:function(t){var e=this.compilers;if("equals"===t.type){var n=this.compile(t.args[0]),i=this.compileEvaluator(t.args[1]);return e.equals(n,i)}if("if"===t.type){var a=this.compileEvaluator(t.args[0]),s=this.compile(t.args[1]),l=this.compile(t.args[2]);return e["if"](a,s,l)}if("and"===t.type||"or"===t.type){var c=r(t.args[0],o),h=r(t.args[1],o),u=this.compileEvaluator(t.args[0]),i=this.compileEvaluator(t.args[1]),d=this.compileEvaluator(c[1]),p=this.compileEvaluator(h[1]),n=this.compile(c[0]),g=this.compile(h[0]);return e[t.type](n,g,u,i,d,p)}if("everyBlock"===t.type){var m=this.compileEvaluator(t.args[0]),v=r(t.args[1],{type:"literal",value:!0}),f=this.compile(v[0]),L=this.compileEvaluator(v[1]);return e.everyBlock(m,f,L)}if(e.hasOwnProperty(t.type)){var y=t.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return e[t.type].apply(null,y)}throw Error("Can't compile assigner for "+JSON.stringify(t.type))},compileEvaluator:a,compilers:{property:function(t,e){return function(n,i){var a=t(i);if(a){var r=e(i);null!=r&&(Array.isArray(a)?a.set(r,n):a[r]=n)}}},get:function(t,e){return function(n,i){var a=t(i);if(a){var r=e(i);null!=r&&a.set(r,n)}}},has:function(t,e){return function(n,i){var a=t(i);if(a){var r=e(i);null!=n&&(n?(a.has||a.contains).call(a,r)||a.add(r):(a.has||a.contains).call(a,r)&&(a.remove||a["delete"]).call(a,r))}}},equals:function(t,e){return function(n,i){return n?t(e(i),i):void 0}},"if":function(t,e,n){return function(i,a){var r=t(a);if(null!=r)return r?e(i,a):n(i,a)}},and:function(t,e,n,i,a,r){return function(s,o){null!=s&&(s?(t(a(l),o),e(r(l),o)):t(n(o)&&!i(o),o))}},or:function(t,e,n,i,a,r){return function(s,o){null!=s&&(s?t(n(o)||!i(o),o):(t(a(c),o),e(r(c),o)))}},rangeContent:function(t){return function(e,n){var i=t(n);i&&(e?i.swap(0,i.length,e):i.clear())}},mapContent:function(t){return function(e,n){var i=t(n);i&&(i.clear(),n.value&&i.addEach(e))}},reversed:function(t){return function(e,n){var i=t(n);i&&i.swap(0,i.length,e.reversed())}},everyBlock:function(t,e,n){return function(i,a){if(i){var r=t(a),o=n(a);r.forEach(function(t){e(o,s.nest(a,t))})}}}}}}});