montageDefine("41b8336","queue",{dependencies:["./q"],factory:function(t,e,n){function i(){var t=a.defer(),e=a.defer();return{put:function(e){var n=a.defer();t.resolve({head:e,tail:n.promise}),t.resolve=n.resolve},get:function(){var n=t.promise.get("head");return t.promise=t.promise.get("tail"),n.fail(function(t){throw e.resolve(t),t})},closed:e.promise,close:function(n){n=n||Error("Can't get value from closed queue");var i={head:a.reject(n)};return i.tail=i,t.resolve(i),e.promise}}}var a=t("./q");n.exports=i}});