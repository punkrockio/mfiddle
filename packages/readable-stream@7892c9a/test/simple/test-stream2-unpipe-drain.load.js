montageDefine("7892c9a","test/simple/test-stream2-unpipe-drain",{dependencies:["../common.js","assert","../../readable","crypto","util"],factory:function(e){function t(){r.Writable.call(this)}function n(){r.Readable.call(this),this.reads=0}e("../common.js");var i=e("assert"),r=e("../../readable"),a=e("crypto"),s=e("util");s.inherits(t,r.Writable),t.prototype._write=function(){console.log("write called")};var o=new t;s.inherits(n,r.Readable),n.prototype._read=function(e){this.reads+=1,this.push(a.randomBytes(e))};var l=new n,c=new n;l.pipe(o),l.once("readable",function(){process.nextTick(function(){c.pipe(o),c.once("readable",function(){process.nextTick(function(){l.unpipe(o)})})})}),process.on("exit",function(){i.equal(l.reads,2),i.equal(c.reads,2)})}});