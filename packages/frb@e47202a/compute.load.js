montageDefine("e47202a","compute",{dependencies:["./parse","./compile-observer","./compile-binder","./observers","./scope"],factory:function(t,e,n){function i(t,e,n){n.target=t,n.targetPath=e;var i=n.source=n.source||t,c=n.args,u=n.compute,h=n.parameters=n.parameters||i,d=n.document,p=n.components,g=n.trace,m=n.sourceScope=new l(i,null,h,d,p),f=n.targetScope=new l(t,null,h,d,p),v=c.map(function(t){return a(t)}).map(function(t){if("rangeContent"===t.type){var e=r(t.args[0]);return o.makeRangeContentObserver(e)}if("mapContent"===t.type){var e=r(t.args[0]);return o.makeMapContentObserver(e)}return r(t)}),L=o.makeRangeContentObserver(o.makeObserversObserver(v)),y=o.makeComputerObserver(L,u,t),b=a(e),_=s(b);return _(y,m,f,n,g?{sourcePath:c.join(", "),targetPath:e}:void 0)}var a=t("./parse"),r=t("./compile-observer"),s=t("./compile-binder"),o=t("./observers"),l=t("./scope");n.exports=i}});