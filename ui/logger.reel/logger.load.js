montageDefine("663b209","ui/logger.reel/logger",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Logger=n.specialize({constructor:{value:function(){this.super()}},_scroller:{value:null},_output:{value:null},input:{distinct:!0,value:[]},_isOpen:{value:!1},isOpen:{get:function(){return this._isOpen},set:function(e){this._isOpen!==e&&(this._isOpen=e,this.needsDraw=!0)}},_value:{value:""},_newMessages:{distinct:!0,value:[]},templateDidLoad:{value:function(){this.addRangeAtPathChangeListener("input",this,"handleInputChange")}},log:{value:function(e){this._newMessages.push(e),this.needsDraw=!0}},draw:{value:function(){var e=this._newMessages;if(e.length>0){this._value+=e.join("\n")+"\n",e.length=0,this._element.classList.add("Logger-hilight"),this._scroller.scrollY=Number.MAX_VALUE;var t=this;window.setTimeout(function(){t.needsDraw=!0},100)}else this._element.classList.remove("Logger-hilight");this.isOpen?(this._element.classList.add("open"),this._scroller.needsDraw=!0):(this._element.classList.remove("open"),this._scroller.scrollY=Number.MAX_VALUE),this._output.textContent=this._value}},handleInputChange:{value:function(e){for(var t,n=0;t=e[n];n++)this.log(t)}},handleClearAction:{value:function(){this._value="",this.needsDraw=!0}}})}});