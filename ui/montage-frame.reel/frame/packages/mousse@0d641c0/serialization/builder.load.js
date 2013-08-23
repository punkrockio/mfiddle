montageDefine("0d641c0","serialization/builder",{dependencies:["./ast"],factory:function(t,e){(function(e){function n(){this.init()}var i=t("./ast");Object.defineProperties(n.prototype,{_root:{value:null,writable:!0},_stack:{value:null,writable:!0},_references:{value:null,writable:!0},_placeholderProperty:{value:Object.create(null)},init:{value:function(){return this._references=Object.create(null),this._root=new i.Root,this._stack=[this._root],this}},cleanup:{value:function(){this._references=null,this._root=null,this._stack=null}},getExternalReferences:{value:function(){var t=this._references,e=this._root,n=[];for(var i in t)e.hasProperty(i)&&e.getProperty(i)!==this._placeholderProperty||n.push(i);return n}},relabelReferences:{value:function(t,e){var n=this._references[t];if(n){n=n.slice(0);for(var i=0,a=n.length;a>i;i++)n[i].value=e}}},_registerReference:{value:function(t){var e=this._references,n=t.value;e[n]?e[n].push(t):e[n]=[t]}},_unregisterReference:{value:function(t){var e,n=t.label,i=this._references[n];1===i.length?delete this._references[n]:(e=i.indexOf(t),-1===e?console.log("BUG: reference '"+n+"' not found in registry."):i.splice(e,1))}},_createPlaceholdersForReferences:{value:function(){var t=this._references,e=this._root;for(var n in t)e.hasProperty(n)||e.setProperty(n,this._placeholderProperty)}},getSerialization:{value:function(t){return this._createPlaceholdersForReferences(),this._root.serialize(t)}},root:{get:function(){return this._root}},top:{get:function(){return this._stack[0]}},push:{value:function(t){return this._stack.unshift(t)}},pop:{value:function(){return this._stack.shift()}},createObjectLiteral:{value:function(){return new i.ObjectLiteral(this._root,Object.create(null))}},createArray:{value:function(){return new i.ObjectLiteral(this._root,[])}},createObjectReference:{value:function(t){var e=new i.ObjectReference(this._root,t);return this._registerReference(e),e}},createRegExp:{value:function(t){return new i.RegExpObject(this._root,t)}},createString:{value:function(t){return new i.Value(this._root,t)}},createNumber:{value:function(t){return new i.Value(this._root,t)}},createBoolean:{value:function(t){return new i.Value(this._root,t)}},createNull:{value:function(){return new i.Value(this._root,null)}},createCustomObject:{value:function(){return new i.CustomObject(this._root)}}}),e.Builder=n})(e)}});