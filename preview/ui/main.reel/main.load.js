montageDefine("918dae1","preview/ui/main.reel/main",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Main=n.specialize({constructor:{value:function(){this.super()}},templateDidLoad:{value:function(){window.addEventListener("hashchange",this,!1),this.loadGist()}},loadGist:{value:function(){var e=location.hash.slice(3);e&&(this.templateObjects.preview.id=e)}},handleHashchange:{value:function(){this.loadGist()}}})}});