montageDefine("6565094","tests/00-runtests",{dependencies:["fs","assert"],factory:function(e){function t(e,n){if(typeof e!=typeof n)throw Error("types didn't match");if("object"==typeof e&&null!==e)for(var i in e){if(!(i in n))throw Error("result didn't contain property "+i);t(e[i],n[i])}else if(e!==n)throw Error("result doesn't equal expected")}function n(n){i.readdirSync(__dirname+n.dir).map(function(t){return"."===t[0]?!1:".json"===t.substr(-5)?JSON.parse(i.readFileSync(__dirname+n.dir+t)):e(__dirname+n.dir+t)}).forEach(function(e){if(e){var i=!1;r++,console.log("Testing:",e.name),n.test(e,function(n,o){a.ifError(n),t(e.expected,o),i?(r--,s++):i=!0})}}),console.log("->",n.dir.slice(1,-1),"started")}var i=e("fs"),a=e("assert"),r=0,s=0;["./02-dom_utils.js"].map(e).forEach(n),function o(){return 0!==r?process.nextTick(o):(console.log("Total tests:",s),void 0)}()}});