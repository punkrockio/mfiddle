montageDefine("e47202a","algebra",{dependencies:[],factory:function(t,e,n){function i(t,e){return i.semantics.solve(t,e)}n.exports=i,i.semantics={solve:function(t,e){for(;;){for(;this.simplifiers.hasOwnProperty(t.type);){var n=this.simplifiers[t.type](t);if(!n)break;t=n}if(!this.solvers.hasOwnProperty(t.type))break;e=this.solvers[t.type](t,e),t=t.args[0]}return[t,e]},simplifiers:{not:function(t){var e=t.args[0];return"not"===e.type?e.args[0]:void 0},add:function(t){var e=t.args[0];return"literal"===e.type&&""===e.value?{type:"toString",args:[t.args[1]]}:void 0},someBlock:function(t){return{type:"not",args:[{type:"everyBlock",args:[t.args[0],{type:"not",args:[t.args[1]]}]}]}}},solvers:{reflect:function(t,e){return{type:t.type,args:[e]}},invert:function(t,e,n){return{type:n,args:[e,t.args[1]]}},toNumber:function(t,e){return this.reflect(t,e)},toString:function(t,e){return this.reflect(t,e)},not:function(t,e){return this.reflect(t,e)},neg:function(t,e){return this.reflect(t,e)},add:function(t,e){return this.invert(t,e,"sub")},sub:function(t,e){return this.invert(t,e,"add")},mul:function(t,e){return this.invert(t,e,"div")},div:function(t,e){return this.invert(t,e,"mul")},pow:function(t,e){return this.invert(t,e,"root")},root:function(t,e){return this.invert(t,e,"pow")},join:function(t,e){return this.invert(t,e,"split")},split:function(t,e){return this.invert(t,e,"join")}}}}});