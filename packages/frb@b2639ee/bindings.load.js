montageDefine("b2639ee","bindings",{dependencies:["collections/map","./bind","./compute","./observe","./stringify"],factory:function(e,t){function n(e,t,n){if(t)for(var r in t)i(e,r,t[r],n);return e}function i(e,n,i,a){a=a||Object.empty;var o=r(e);if(d.call(o,n))throw Error("Can't bind to already bound target, "+JSON.stringify(n));return"<-"in i||"<->"in i||"compute"in i?(i.target=e,i.parameters=i.parameters||a.parameters,i.document=i.document||a.document,i.components=i.components||a.components,i.cancel="compute"in i?c(e,n,i):u(e,n,i),o[n]=i,t.count++):("get"in i||"set"in i||"writable"in i||(i.writable=!0),"configurable"in i||(i.configurable=!0),"enumerable"in i||(i.enumerable=!0),Object.defineProperty(e,n,i)),e}function r(e){return h.has(e)||h.set(e,{}),h.get(e)}function a(e,t){var n=r(e);return n[t]}function o(e){var t=r(e);for(var n in t)s(e,n)}function s(e,n){var i=r(e);if(!i[n])throw Error("Can't cancel non-existent binding to "+JSON.stringify(n));var a=i[n];if(a&&a.cancel){a.cancel(),delete i[n],t.count--;for(var n in i)return;h["delete"](e)}}var l=e("collections/map"),u=e("./bind"),c=e("./compute");e("./observe"),e("./stringify");var h=new l,d=Object.prototype.hasOwnProperty;t.count=0,t.bindings=h,t.defineBindings=n,t.defineBinding=i,t.getBindings=r,t.getBinding=a,t.cancelBindings=o,t.cancelBinding=s}});