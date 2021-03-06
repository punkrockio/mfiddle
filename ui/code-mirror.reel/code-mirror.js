/* <copyright>
Copyright (c) 2012, Motorola Mobility LLC.
All Rights Reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of Motorola Mobility LLC nor the names of its
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
</copyright> */
/**
    @module "montage/ui/code-mirror.reel"
*/
var Component = require("montage/ui/component").Component,
    CodeMirror = require("./codemirror/codemirror-min").CodeMirror;

/**
    Description TODO
    @class module:"montage/ui/code-mirror.reel".CodeMirror
    @extends module:montage/ui/component.Component
*/
exports.CodeMirror = Component.specialize(/** @lends module:"montage/ui/code-mirror.reel".CodeMirror# */ {
    _codeMirror: {value: null},
    tabSize: {value: 4},
    indentUnit: {value: 4},
    matchBrackets: {value: false},
    lineNumbers: {value: false},
    readOnly: {value: false},
    _newValue: {value: null},

    _mode: {
        value: null
    },

    mode: {
        set: function(value) {
            this._mode = value;
            if (this._codeMirror) {
                if (value == "json") {
                    this._codeMirror.setOption("mode", {
                        name: "javascript",
                        json: true
                    });
                } else {
                    this._codeMirror.setOption("mode", value);
                }
            }
        },
        get: function() {
            return this._mode;
        }
    },

    enterDocument: {
        value: function(firstTime) {
            var codeMirror,
                mode;

            if (firstTime) {
                mode = this.mode === "json" ? {name: "javascript", json: true} : this.mode;
                codeMirror = this._codeMirror = CodeMirror(this._element, {
                    mode: mode,
                    tabSize: this.tabSize,
                    indentUnit: this.indentUnit,
                    matchBrackets: this.matchBracket,
                    lineNumbers: this.lineNumbers,
                    readOnly: this.readOnly,
                    value: this.value
                });
                this._newValue = null;

                // HACK need to wait until the styling affects the element in
                // order to ask codemirror to recalculate its size correctly.
                var element = this.element,
                    parentElement = this.ownerComponent.element.parentElement;

                setTimeout(function styleChecker() {
                    if (getComputedStyle(element).width === getComputedStyle(parentElement).width) {
                        setTimeout(styleChecker, 50);
                    } else {
                        codeMirror.refresh();
                    }
                }, 0);
            }
        }
    },

    draw: {
        value: function() {
            if (this._newValue != null) {
                this._codeMirror.setValue(this._newValue);
                this._newValue = null;
            }
        }
    },

    value: {
        get: function() {
            return this._codeMirror ? (this._newValue != null ? this._newValue : this._codeMirror.getValue()) : this._newValue;
        },
        set: function(value) {
            this._newValue = value;
            this.needsDraw = true;
        }
    },

    hasModeErrors: {
        value: function() {
            return !!this._element.querySelector("*[class~='cm-error']");
        }
    }
});
