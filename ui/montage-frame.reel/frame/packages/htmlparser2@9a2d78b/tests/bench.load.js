montageDefine("9a2d78b","tests/bench",{dependencies:["ben","node-xml","libxmljs","sax","node-expat","htmlparser","../lib/Parser.js"],factory:function(t){function e(){var t=new c.SaxParser(function(){});this.parse=function(e){t.parseString(e)}}function n(){var t=new u.SaxPushParser(function(){});this.parse=function(e){t.push(e,!1)}}function i(){var t=d.parser();this.parse=function(e){t.write(e)}}function a(){var t=new p.Parser;this.parse=function(e){t.parse(e,!1)}}function r(){var t=new g.DefaultHandler,e=new g.Parser(t);this.parse=function(t){e.parseComplete(t)}}function s(){var t=new m;this.parse=function(e){t.write(e)}}var o=t("ben"),l=[];try{var c=t("node-xml");l.push([e,"node-xml"])}catch(h){}try{var u=t("libxmljs");l.push([n,"libxmljs"])}catch(h){}try{var d=t("sax");l.push([i,"sax"])}catch(h){}try{var p=t("node-expat");l.push([a,"node-expat"])}catch(h){}try{var g=t("htmlparser");l.push([r,"htmlparser"])}catch(h){}try{var m=t("../lib/Parser.js");l.push([s,"htmlparser2"])}catch(h){}var v=l.map(function(t){var e=new t[0],n=t[1];process.stdout.write(n+":"+Array(14-n.length).join(" ")),e.parse("<r>");var i=o(1e6,function(){e.parse("<foo bar='baz'>quux</foo>")});return console.log((i>.01?"":"0")+(1e3*i).toFixed(2),"ms/el"),[n,i]});console.log("\nWinner:",v.sort(function(t,e){return t[1]-e[1]})[0][0])}});