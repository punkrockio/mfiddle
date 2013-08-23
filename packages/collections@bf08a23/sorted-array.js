"use strict";function SortedArray(t,e,n,i){return this instanceof SortedArray?(Array.isArray(t)?(this.array=t,t=t.splice(0,t.length)):this.array=[],this.contentEquals=e||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=i||Function.noop,this.length=0,this.addEach(t),void 0):new SortedArray(t,e,n,i)}function search(t,e,n){for(var i=0,a=t.length-1;a>=i;){var r=i+a>>1,s=n(e,t[r]);if(s>0)i=r+1;else{if(!(0>s))return r;a=r-1}}return-(i+1)}function searchFirst(t,e,n,i){var a=search(t,e,n);if(0>a)return-1;for(;a>0&&i(e,t[a-1]);)a--;return i(e,t[a])?a:-1}function searchLast(t,e,n,i){var a=search(t,e,n);if(0>a)return-1;for(;t.length-1>a&&i(e,t[a+1]);)a++;return i(e,t[a])?a:-1}function searchForInsertionIndex(t,e,n){var i=search(t,e,n);if(0>i)return-i-1;for(var a=t.length-1;a>i&&0===n(e,t[i+1]);)i++;return i}module.exports=SortedArray;var Shim=require("./shim"),GenericCollection=require("./generic-collection"),PropertyChanges=require("./listen/property-changes"),RangeChanges=require("./listen/range-changes");Object.addEach(SortedArray.prototype,GenericCollection.prototype),Object.addEach(SortedArray.prototype,PropertyChanges.prototype),Object.addEach(SortedArray.prototype,RangeChanges.prototype),SortedArray.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentCompare,this.getDefault)},SortedArray.prototype.has=function(t){var e=search(this.array,t,this.contentCompare);return e>=0&&this.contentEquals(this.array[e],t)},SortedArray.prototype.get=function(t){var e=searchFirst(this.array,t,this.contentCompare,this.contentEquals);return-1!==e?this.array[e]:this.getDefault(t)},SortedArray.prototype.add=function(t){var e=searchForInsertionIndex(this.array,t,this.contentCompare);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([t],[],e),this.array.splice(e,0,t),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([t],[],e),!0},SortedArray.prototype["delete"]=function(t){var e=searchFirst(this.array,t,this.contentCompare,this.contentEquals);return-1!==e?(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[t],e),this.array.splice(e,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[t],e),!0):!1},SortedArray.prototype.indexOf=function(t){return searchFirst(this.array,t,this.contentCompare,this.contentEquals)},SortedArray.prototype.lastIndexOf=function(t){return searchLast(this.array,t,this.contentCompare,this.contentEquals)},SortedArray.prototype.find=function(t){return searchFirst(this.array,t,this.contentCompare,this.contentEquals)},SortedArray.prototype.findLast=function(t){return searchLast(this.array,t,this.contentCompare,this.contentEquals)},SortedArray.prototype.push=function(){this.addEach(arguments)},SortedArray.prototype.unshift=function(){this.addEach(arguments)},SortedArray.prototype.pop=function(){return this.array.pop()},SortedArray.prototype.shift=function(){return this.array.shift()},SortedArray.prototype.slice=function(){return this.array.slice.apply(this.array,arguments)},SortedArray.prototype.splice=function(t,e){return this.swap(t,e,Array.prototype.slice.call(arguments,2))},SortedArray.prototype.swap=function(t,e,n){if(void 0===t&&void 0===e)return[];t=t||0,0>t&&(t+=this.length),void 0===e&&(e=1/0);var i=this.slice(t,t+e);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(n,i,t),this.array.splice(t,e),this.addEach(n),this.dispatchesRangeChanges&&this.dispatchRangeChange(n,i,t),i},SortedArray.prototype.reduce=function(t,e){var n=arguments[2];return this.array.reduce(function(e,i,a){return t.call(n,e,i,a,this)},e,this)},SortedArray.prototype.reduceRight=function(){var t=arguments[2];return this.array.reduceRight(function(e,n,i){return callback.call(t,e,n,i,this)},basis,this)},SortedArray.prototype.min=function(){return this.length?this.array[0]:void 0},SortedArray.prototype.max=function(){return this.length?this.array[this.length-1]:void 0},SortedArray.prototype.one=function(){return this.array.one()},SortedArray.prototype.clear=function(){var t;this.dispatchesRangeChanges&&(t=this.array.slice(),this.dispatchBeforeRangeChange([],t,0)),this.length=0,this.array.clear(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],t,0)},SortedArray.prototype.equals=function(t,e){return this.array.equals(t,e)},SortedArray.prototype.compare=function(t,e){return this.array.compare(t,e)},SortedArray.prototype.iterate=function(t,e){return new this.Iterator(this.array,t,e)},SortedArray.prototype.Iterator=Array.prototype.Iterator;