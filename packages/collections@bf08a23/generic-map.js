"use strict";function GenericMap(){throw Error("Can't construct. GenericMap is a mixin.")}function Item(t,e){this.key=t,this.value=e}var Object=require("./shim-object"),MapChanges=require("./listen/map-changes"),PropertyChanges=require("./listen/property-changes");module.exports=GenericMap,Object.addEach(GenericMap.prototype,MapChanges.prototype),Object.addEach(GenericMap.prototype,PropertyChanges.prototype),GenericMap.prototype.addEach=function(t){return t&&Object(t)===t&&("function"==typeof t.forEach?"function"==typeof t.keys?t.forEach(function(t,e){this.set(e,t)},this):t.forEach(function(t){this.set(t[0],t[1])},this):Object.keys(t).forEach(function(e){this.set(e,t[e])},this)),this},GenericMap.prototype.get=function(t,e){var n=this.store.get(new this.Item(t));return n?n.value:arguments.length>1?e:this.getDefault(t)},GenericMap.prototype.set=function(t,e){var n=new this.Item(t,e),i=this.store.get(n),a=!1;return i?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,i.value),i.value=e,this.dispatchesMapChanges&&this.dispatchMapChange(t,e)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,void 0),this.store.add(n)&&(this.length++,a=!0),this.dispatchesMapChanges&&this.dispatchMapChange(t,e)),a},GenericMap.prototype.add=function(t,e){return this.set(e,t)},GenericMap.prototype.has=function(t){return this.store.has(new this.Item(t))},GenericMap.prototype["delete"]=function(t){var e=new this.Item(t);if(this.store.has(e)){var n=this.store.get(e).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,n),this.store["delete"](e),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0),!0}return!1},GenericMap.prototype.clear=function(){var t;this.dispatchesMapChanges&&(this.forEach(function(t,e){this.dispatchBeforeMapChange(e,t)},this),t=this.keys()),this.store.clear(),this.length=0,this.dispatchesMapChanges&&t.forEach(function(t){this.dispatchMapChange(t)},this)},GenericMap.prototype.reduce=function(t,e,n){return this.store.reduce(function(e,i){return t.call(n,e,i.value,i.key,this)},e,this)},GenericMap.prototype.reduceRight=function(t,e,n){return this.store.reduceRight(function(e,i){return t.call(n,e,i.value,i.key,this)},e,this)},GenericMap.prototype.keys=function(){return this.map(function(t,e){return e})},GenericMap.prototype.values=function(){return this.map(Function.identity)},GenericMap.prototype.entries=function(){return this.map(function(t,e){return[e,t]})},GenericMap.prototype.items=function(){return this.entries()},GenericMap.prototype.equals=function(t,e){if(e=e||Object.equals,this===t)return!0;if(Object.can(t,"every"))return t.length===this.length&&t.every(function(t,n){return e(this.get(n),t)},this);var n=Object.keys(t);return n.length===this.length&&Object.keys(t).every(function(n){return e(this.get(n),t[n])},this)},GenericMap.prototype.Item=Item,Item.prototype.equals=function(t){return Object.equals(this.key,t.key)&&Object.equals(this.value,t.value)},Item.prototype.compare=function(t){return Object.compare(this.key,t.key)};