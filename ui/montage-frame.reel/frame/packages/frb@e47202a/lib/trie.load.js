montageDefine("e47202a","lib/trie",{dependencies:[],factory:function(t,e,n){function i(t){var e=Object.keys(t),n={value:void 0,children:{}},a={};e.forEach(function(e){if(0===e.length)n.value=t[e];else{var i=e[0];a[i]||(a[i]={});var r=e.slice(1);a[i][r]=t[e]}});var r=Object.keys(a);return r.forEach(function(t){n.children[t]=i(a[t])}),n}n.exports=i}});