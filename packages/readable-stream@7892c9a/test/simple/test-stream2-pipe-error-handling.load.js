montageDefine("7892c9a","test/simple/test-stream2-pipe-error-handling",{dependencies:["../common","assert","../../readable"],factory:function(e){e("../common");var t=e("assert"),n=e("../../readable");(function(){var e=1e3,i=new n.Readable;i._read=function(t){t=Math.min(e,t),e-=t,i.push(new Buffer(t))};var r;i.unpipe=function(e){r=e,n.Readable.prototype.unpipe.call(this,e)};var a=new n.Writable;a._write=function(e,t,n){n()},i.pipe(a);var s=null;a.on("error",function(e){s=e});var o;a.on("unpipe",function(e){o=e});var l=Error("This stream turned into bacon.");a.emit("error",l),t.strictEqual(s,l),t.strictEqual(o,i),t.strictEqual(r,a)})(),function(){var e=1e3,i=new n.Readable;i._read=function(t){t=Math.min(e,t),e-=t,i.push(new Buffer(t))};var r;i.unpipe=function(e){r=e,n.Readable.prototype.unpipe.call(this,e)};var a=new n.Writable;a._write=function(e,t,n){n()},i.pipe(a);var s;a.on("unpipe",function(e){s=e});var o=Error("This stream turned into bacon."),l=null;try{a.emit("error",o)}catch(c){l=c}t.strictEqual(l,o),t.strictEqual(s,i),t.strictEqual(r,a)}()}});