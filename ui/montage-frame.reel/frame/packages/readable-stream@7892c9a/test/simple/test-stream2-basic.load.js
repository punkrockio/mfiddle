montageDefine("7892c9a","test/simple/test-stream2-basic",{dependencies:["../common.js","../../lib/_stream_readable","assert","util","events"],factory:function(e){function t(e){r.apply(this),this._buffer=new Buffer(e||100),this._buffer.fill("x"),this._pos=0,this._bufs=10}function n(){l.apply(this),this.received=[],this.flush=!1}function a(e,t){u++,c.push([e,t])}function i(){var e=c.shift();if(!e)return console.error("ok");var t=e[0],n=e[1];console.log("# %s",t),n({same:s.deepEqual,ok:s,equal:s.equal,end:function(){u--,i()}})}e("../common.js");var r=e("../../lib/_stream_readable"),s=e("assert"),o=e("util"),l=e("events").EventEmitter;o.inherits(t,r),t.prototype.read=function(e){if(0===e)return null;var t=this._buffer.length-this._pos;e=e||t,e=Math.max(e,0);var n=Math.min(e,t);if(0===n)return setTimeout(function(){this._pos=0,this._bufs-=1,0>=this._bufs?this.ended||(this.emit("end"),this.ended=!0):this.emit("readable")}.bind(this),10),null;var a=this._buffer.slice(this._pos,this._pos+n);return this._pos+=n,a},o.inherits(n,l),n.prototype.write=function(e){return this.received.push(""+e),this.emit("write",e),!0},n.prototype.end=function(e){e&&this.write(e),this.emit("end",this.received)};var c=[],u=0;process.on("exit",function(){s.equal(u,0)}),process.nextTick(i),a("a most basic test",function(e){function n(){for(var e;null!==(e=a.read(s++));)i.push(""+e);a.once("readable",n)}var a=new t(20),i=[],r=["x","xx","xxx","xxxx","xxxxx","xxxxx","xxxxxxxx","xxxxxxxxx","xxx","xxxxxxxxxxxx","xxxxxxxx","xxxxxxxxxxxxxxx","xxxxx","xxxxxxxxxxxxxxxxxx","xx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx"];a.on("end",function(){e.same(i,r),e.end()});var s=1;n()}),a("pipe",function(e){var a=new t(5),i=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"],r=new n;r.on("end",function(t){e.same(t,i),e.end()}),a.pipe(r)}),[1,2,3,4,5,6,7,8,9].forEach(function(e){a("unpipe",function(a){var i=new t(5),r=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"];r=[r.slice(0,e),r.slice(e)];var s=[new n,new n],o=e;s[0].on("write",function(){0===--o&&(i.unpipe(),a.equal(i._readableState.pipes,null),s[0].end(),i.pipe(s[1]),a.equal(i._readableState.pipes,s[1]))});var l=0,c=!1,u=!1;s[0].on("end",function(e){a.equal(c,!1),c=!0,l++,a.same(e,r[0])}),s[1].on("end",function(e){a.equal(u,!1),u=!0,l++,a.equal(l,2),a.same(e,r[1]),a.end()}),i.pipe(s[0])})}),a("multipipe",function(e){var a=new t(5),i=[new n,new n],r=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"],s=2;i[0].on("end",function(t){e.same(t,r,"first"),0===--s&&e.end()}),i[1].on("end",function(t){e.same(t,r,"second"),0===--s&&e.end()}),a.pipe(i[0]),a.pipe(i[1])}),[1,2,3,4,5,6,7,8,9].forEach(function(e){a("multi-unpipe",function(a){var i=new t(5),r=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"];r=[r.slice(0,e),r.slice(e)];var s=[new n,new n,new n],o=e;s[0].on("write",function(){0===--o&&(i.unpipe(),s[0].end(),i.pipe(s[1]))});var l=0;s[0].on("end",function(e){l++,a.same(e,r[0])}),s[1].on("end",function(e){l++,a.equal(l,2),a.same(e,r[1]),a.end()}),i.pipe(s[0]),i.pipe(s[2])})}),a("back pressure respected",function(e){function t(){}var n=new r({objectMode:!0});n._read=t;var a=0;n.push(["one"]),n.push(["two"]),n.push(["three"]),n.push(["four"]),n.push(null);var i=new r;i.write=function(e){s.equal(e[0],"one"),i.emit("close"),process.nextTick(function(){n.pipe(l),n.pipe(c)})},i.end=t,n.pipe(i);var o=["two","two","three","three","four","four"],l=new r;l.write=function(e){return s.equal(e[0],o.shift()),s.equal(a,0),a++,"four"===e[0]?!0:(setTimeout(function(){a--,l.emit("drain")},10),!1)},l.end=t;var c=new r;c.write=function(e){return s.equal(e[0],o.shift()),s.equal(a,1),a++,"four"===e[0]?!0:(setTimeout(function(){a--,c.emit("drain")},50),!1)},c.end=function(){s.equal(a,2),s.equal(o.length,0),e.end()}}),a("read(0) for ended streams",function(e){var t=new r,n=!1,a=!1;t._read=function(){},t.push(new Buffer("foo")),t.push(null);var i=t.read(0);s.equal(i,null);var o=new r;o.write=function(e){n=!0,s.equal(a,!1),s.equal(""+e,"foo")},o.end=function(){a=!0,s.equal(n,!0),e.end()},t.pipe(o)}),a("sync _read ending",function(e){var t=new r,n=!1;t._read=function(){t.push(null)},t.once("end",function(){n=!0}),t.read(),process.nextTick(function(){s.equal(n,!0),e.end()})}),a("adding readable triggers data flow",function(e){var t=new r({highWaterMark:5}),n=!1,a=0;t._read=function(){2===a++?t.push(null):t.push(new Buffer("asdf"))},t.on("readable",function(){n=!0,t.read()}),t.on("end",function(){e.equal(a,3),e.ok(n),e.end()})})}});