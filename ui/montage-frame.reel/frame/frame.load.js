montageDefine("2ef54f3","frame",{dependencies:["montage/core/template","montage/ui/component","montage/core/promise"],factory:function(e){var t=(e("montage/core/template").Template,e("montage/ui/component").Component,e("montage/core/promise").Promise),n=e("montage/ui/component").__root__;window.Frame={_MODULE_ID:"mfiddle",_javascript:document.querySelector('script[type="text/montage-javascript"]'),reset:function(){for(var e,t=n.childComponents,a=0;e=t[a];a++)e.detachFromParentComponent(),e.cleanupDeletedComponentTree();n.needsDraw=!1},boot:function(){var e=this,t=this._javascript.textContent.replace(/^\s*|\s*$/g,"");t?this._defineModule(t,function(t){var n=t.Owner;n?e.instantiate(new t.Owner):e.instantiate()}):this.instantiate()},instantiate:function(t){t&&(t.hasTemplate=!1),e("montage/core/template").instantiateDocument(window.document,window.require,{owner:t}).then(function(){t&&t.attachToParentComponent(),n.needsDraw=!0}).done()},_defineModule:function(n,a){var o=this,r=this._parseDependencies(n),i=Function("require","exports","module",n);t.all(r.map(e.deepLoad)).then(function(){var t={};i(e,t,e.getModule(o._MODULE_ID)),o._addMontageMetadata(t),e.inject(o._MODULE_ID,t),a(e(o._MODULE_ID))})},_addMontageMetadata:function(t){for(var n in t){var a=t[n];a instanceof Object&&(a.hasOwnProperty("_montage_metadata")&&!a._montage_metadata.isInstance?(a._montage_metadata.aliases.push(n),a._montage_metadata.objectName=n):Object.isSealed(a)||Object.defineProperty(t[n],"_montage_metadata",{value:{require:e,module:this._MODULE_ID,moduleId:this._MODULE_ID,property:n,objectName:n,aliases:[n],isInstance:!1}}))}},_parseDependencies:function(e){var t={};return e.replace(/(?:^|[^\w\$_.])require\s*\(\s*["']([^"']*)["']\s*\)/g,function(e,n){t[n]=!0}),Object.keys(t)}},/(iPad|iPhone|iPod).+OS 6/.test(window.navigator.userAgent)&&(n.requestAnimationFrame=null),window.parent.postMessage("ready","*")}});