montageDefine("918dae1","gist",{dependencies:[],factory:function(e,t){var n="https://api.github.com/",i="http://mfiddle.jit.su/",o=t.gist={clientId:"clientId",files:null,oauth:[function(e){o.oauth.callback=e,open("https://github.com/login/oauth/authorize?client_id="+o.clientId+"&scope=gist","popup","width=1015,height=500")},function(e){e?(window.ACCESS_TOKEN=localStorage.access_token=e,o.getUser(o.oauth.callback)):alert("Authentication error"),o.oauth.callback=null}],request:function(e){e.method=e.method||"GET",e.id=e.id||"",e.rev=e.rev||"",e.accepted=e.accepted||[];var t=e.anon||"GET"===e.method;if(!t&&!window.ACCESS_TOKEN)return o.oauth[0](function(){o.request(e)}),void 0;var a=e.path||"gists"+(e.id?"/"+e.id:"")+(e.rev?"/"+e.rev:"")+(e.gpath||""),r="GET"===e.method?i:n;this._xhr({method:e.method,url:r+a+(!e.anon&&window.ACCESS_TOKEN?"?access_token="+ACCESS_TOKEN:""),headers:e.headers,callback:function(t){var n=t.responseText?JSON.parse(t.responseText):null;n&&n.message&&-1===e.accepted.indexOf(t.status)?alert("Sorry, I got a "+t.status+" ("+n.message+")"):e.callback&&e.callback(n,t)},data:e.data?JSON.stringify(e.data):null})},_xhr:function(e){var t=new XMLHttpRequest,n=e.method||"GET",i=e.data||"";if(t.open(n,e.url+("GET"===n&&i?"?"+i:""),!0),"GET"!==n&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.headers)for(var o in e.headers)t.setRequestHeader(o,e.headers[o]);return t.onreadystatechange=function(){4===t.readyState&&t.responseText&&e.callback(t)},t.send("GET"===n?null:i),t},getUser:function(e){o.request({path:"user",callback:function(t){window.user=t,e&&e(t)}})},save:function(e){e=e||{};var t=e.anon||!window.user,n=e.callback;if(!(!o.id||o.user&&window.user&&o.user.id==user.id||t))return o.fork(o.id,o.save,e.anon),void 0;var i=o.id||"",a=e.cssCode,r=e.htmlMarkup,l=e.jsCode,s=e.settings,d="title",p={};a&&(p["component.css"]={content:a}),r&&(p["component.html"]={content:r}),l&&(p["component.js"]={content:l}),p["settings.json"]={content:JSON.stringify(s)},o.request({anon:e.anon,id:t||e.forceNew?null:i,method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},callback:function(e){e.id&&o.update(e),n&&n(e.id)},data:{description:d,"public":!0,files:p}})},fork:function(e,t){o.request({method:"POST",gpath:"/fork",id:e||o.id||null,headers:{"Content-Type":"text/plain; charset=UTF-8"},callback:function(e){e.id&&(o.update(e),t&&t())},data:{}})},load:function(e,t,n){o.request({id:e||o.id,rev:t||o.rev,callback:function(e){o.update(e);var t,i,a,r,l=this.files=e.files,s=l["component.css"],d=l["component.html"],p=l["component.js"],c=l["settings.json"];if(!s||!d||!p)for(var u in l){var m=u.slice(u.lastIndexOf("."));if(s||".css"!=m||(s=l[u]),d||".html"!=m||(d=l[u]),p||".js"!=m||(p=l[u]),s&&d&&p)break}if(s&&(t=s.content),d&&(i=d.content),p&&(a=p.content),c)try{r=JSON.parse(c.content)}catch(g){console.warn("Unknown settings: ",c),r={}}else r={};n&&n(r,t,i,a)}})},update:function(e){var t=e.id,n=e.history&&e.history[0]&&e.history[0].version||"";o.id!=t?(o.id=t,o.rev=void 0):o.rev&&o.rev!==n&&(o.rev=n),e.user&&(o.user=e.user),o.saved=!0},saved:!1};window.ACCESS_TOKEN=localStorage.access_token}});