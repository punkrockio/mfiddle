function compile(t){return compile.semantics.compile(t)}var compileObserver=require("./compile-observer"),Observers=require("./observers"),Binders=require("./binders"),solve=require("./algebra"),valueSyntax={type:"value"},trueSyntax={type:"literal",value:!0};module.exports=compile,compile.semantics={compilers:{property:Binders.makePropertyBinder,get:Binders.makeGetBinder,has:Binders.makeHasBinder,only:Binders.makeOnlyBinder,rangeContent:Binders.makeRangeContentBinder,mapContent:Binders.makeMapContentBinder,reversed:Binders.makeReversedBinder,and:Binders.makeAndBinder,or:Binders.makeOrBinder},compile:function(t){var e=this.compilers;if("default"===t.type)return this.compile(t.args[0]);if("literal"===t.type){if(null==t.value)return Function.noop;throw Error("Can't bind to literal: "+t.value)}if("equals"===t.type){var n=this.compile(t.args[0]),i=compileObserver(t.args[1]);return Binders.makeEqualityBinder(n,i)}if("if"===t.type){var a=compileObserver(t.args[0]),r=this.compile(t.args[1]),s=this.compile(t.args[2]);return Binders.makeConditionalBinder(a,r,s)}if("and"===t.type||"or"===t.type){var o=solve(t.args[0],valueSyntax),l=solve(t.args[1],valueSyntax),n=this.compile(o[0]),c=this.compile(l[0]),h=compileObserver(o[1]),u=compileObserver(l[1]),d=compileObserver(t.args[0]),i=compileObserver(t.args[1]);return this.compilers[t.type](n,c,d,i,h,u)}if("everyBlock"===t.type){var p=compileObserver(t.args[0]),g=solve(t.args[1],trueSyntax),m=this.compile(g[0]),f=compileObserver(g[1]);return Binders.makeEveryBlockBinder(p,m,f)}if("rangeContent"===t.type){var v,L=compileObserver(t.args[0]);try{v=this.compile(t.args[0])}catch(y){v=Function.noop}return Binders.makeRangeContentBinder(L,v)}if("defined"===t.type){var v=this.compile(t.args[0]);return Binders.makeDefinedBinder(v)}if(e.hasOwnProperty(t.type)){var _=t.args.map(compileObserver,compileObserver.semantics);return e[t.type].apply(null,_)}throw Error("Can't compile binder for "+JSON.stringify(t.type))}};