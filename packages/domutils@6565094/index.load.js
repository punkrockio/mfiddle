montageDefine("6565094","index",{dependencies:["domelementtype"],factory:function(e,t,n){function i(e,t,n,a){for(var r,s=[],o=0,l=t.length;l>o&&!(e(t[o])&&(s.push(t[o]),0>=--a))&&(r=t[o].children,!(n&&r&&r.length>0&&(r=i(e,r,n,a),s=s.concat(r),a-=r.length,0>=a)));o++);return s}function a(e,t,n){for(var i=0,r=t.length;r>i;i++){if(e(t[i]))return t[i];if(n&&t[i].children&&t[i].children.length>0){var s=a(e,t[i].children,!0);if(s)return s}}return null}function r(e,t){return t.reduce(function(t,n){return n.children&&n.children.length>0?t.concat(r(e,n.children)):t},t.filter(e))}function s(e,t,n,s){return Array.isArray(t)||(t=[t]),"number"==typeof s&&isFinite(s)?1===s?(t=a(e,t,n!==!1),t?[t]:[]):i(e,t,n!==!1,s):n===!1?t.filter(e):r(e,t)}function o(e,t){return"function"==typeof t?function(n){return n.attribs&&t(n.attribs[e])}:function(n){return n.attribs&&n.attribs[e]===t}}var l=e("domelementtype"),c=n.exports,u=c.isTag=l.isTag;c.filter=s,c.testElement=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if("tag_name"===n){if(!u(t)||!e.tag_name(t.name))return!1}else if("tag_type"===n){if(!e.tag_type(t.type))return!1}else if("tag_contains"===n){if(u(t)||!e.tag_contains(t.data))return!1}else if(!t.attribs||!e[n](t.attribs[n]))return!1}else;return!0};var h={tag_name:function(e){return"function"==typeof e?function(t){return u(t)&&e(t.name)}:"*"===e?u:function(t){return u(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof type?function(t){return!u(t)&&e(t.data)}:function(t){return!u(t)&&t.data===e}}};c.getElements=function(e,t,n,i){var a=[];for(var r in e)e.hasOwnProperty(r)&&(r in h?a.push(h[r](e[r])):a.push(o(r,e[r])));return 0===a.length?[]:1===a.length?s(a[0],t,n,i):s(function(e){return a.some(function(t){return t(e)})},t,n,i)},c.getElementById=function(e,t,n){return Array.isArray(t)||(t=[t]),a(o("id",e),t,n!==!1)},c.getElementsByTagName=function(e,t,n,i){return s(h.tag_name(e),t,n,i)},c.getElementsByTagType=function(e,t,n,i){return s(h.tag_type(e),t,n,i)},c.removeElement=function(e){e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent&&e.parent.children.splice(e.parent.children.lastIndexOf(e),1)},c.getInnerHTML=function(e){if(!e.children)return"";for(var t=e.children,n=t.length,i="",a=0;n>a;a++)i+=c.getOuterHTML(t[a]);return i};var d={__proto__:null,async:!0,autofocus:!0,autoplay:!0,checked:!0,controls:!0,defer:!0,disabled:!0,hidden:!0,loop:!0,multiple:!0,open:!0,readonly:!0,required:!0,scoped:!0,selected:!0,"/":!0},p={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,link:!0,meta:!0,param:!0,embed:!0};c.getOuterHTML=function(e){var t=e.type;if(t===l.Text)return e.data;if(t===l.Comment)return"<!--"+e.data+"-->";if(t===l.Directive)return"<"+e.data+">";if(t===l.CDATA)return"<!CDATA "+c.getInnerHTML(e)+"]]>";var n="<"+e.name;if("attribs"in e)for(var i in e.attribs)if(e.attribs.hasOwnProperty(i)){n+=" "+i;var a=e.attribs[i];a?n+='="'+a+'"':i in d||(n+='=""')}return e.name in p&&0===e.children.length?n+" />":n+">"+c.getInnerHTML(e)+"</"+e.name+">"},c.getText=function g(e){return Array.isArray(e)?e.map(g).join(""):u(e)||e.type===l.CDATA?g(e.children):e.type===l.Text?e.data:""}}});