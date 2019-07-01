"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var chunk_cc6d1815_js_1 = require("./chunk-cc6d1815.js");
var KupFld = function () { function t() { this.config = "", this.showSubmit = !1, this.submitLabel = "", this.submitPos = "right", this.label = "", this.labelPos = "left", this.propagate = {}, this.extensions = {}, this.radioGeneratedName = chunk_cc6d1815_js_1.a("value"), this.currentValue = null, this.previousValue = null, this.onChangeInstance = this.onChange.bind(this), this.onSubmitInstance = this.onSubmit.bind(this); } return t.prototype.updateInternalState = function () { var t, e = this; t = "string" == typeof this.config && this.config ? JSON.parse(this.config) : this.config; var n = Object.keys(t), i = {}; n.forEach(function (n) { n in e ? e[n] = t[n] : i[n] = t[n]; }), this.propagate = i; }, t.prototype.componentWillLoad = function () { this.updateInternalState(); }, t.prototype.onChange = function (t) { var e = t.detail, n = e.value; this.ketchupFldChanged.emit({ originalEvent: t, oldValue: this.currentValue, value: n, info: e.info }), this.previousValue = this.currentValue, this.currentValue = n; }, t.prototype.onSubmit = function (t) { this.ketchupFldSubmit.emit({ originalEvent: t, value: this.currentValue, oldValue: this.previousValue, info: { obj: t.detail.info && t.detail.info.obj ? t.detail.info.obj : void 0 } }); }, t.prototype.getCurrentValue = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (t) { return [2, this.currentValue]; }); }); }, t.prototype.render = function () { var t = [], e = null, n = null; this.label.trim().length && (e = mycomponent_core_js_1.h("label", { class: "kup-fld__label kup-fld--" + this.labelPos }, this.label)), this.showSubmit && (n = mycomponent_core_js_1.h("kup-button", { class: "kup-fld__submit kup-fld--" + this.submitPos, label: this.submitLabel, onKupButtonClicked: this.onSubmitInstance })); var i = "top" === this.labelPos, a = "top" === this.submitPos; (i || a) && t.push(mycomponent_core_js_1.h("div", { class: "kup-fld__top-container" }, i && e ? e : null, a && n ? n : null)), !i && e && t.push(e); var o = "", s = {}; switch (this.type) {
    case "cmb":
        s.displayedField = "value", s.valueField = "value", s.onKetchupComboSelected = this.onChangeInstance, o = "combo";
        break;
    case "rad":
        s.valueField = "obj", s.radioName = this.radioGeneratedName, s.onKetchupRadioChanged = this.onChangeInstance, o = "radio";
        break;
    case "itx":
    case "Itx": s.onKetchupTextInputUpdated = this.onChangeInstance, s.onKetchupTextInputSubmit = this.onSubmitInstance, o = "text-input";
} return t.push(mycomponent_core_js_1.h("kup-" + o, Object.assign({ class: "kup-fld__component", items: this.data }, s, this.propagate))), !a && n && t.push(n), t; }, Object.defineProperty(t, "is", { get: function () { return "kup-fld"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { config: { type: String, attr: "config", watchCallbacks: ["updateInternalState"] }, data: { type: "Any", attr: "data" }, extensions: { state: !0 }, getCurrentValue: { method: !0 }, label: { state: !0 }, labelPos: { state: !0 }, propagate: { state: !0 }, showSubmit: { state: !0 }, submitLabel: { state: !0 }, submitPos: { state: !0 }, type: { state: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "events", { get: function () { return [{ name: "ketchupFldChanged", method: "ketchupFldChanged", bubbles: !0, cancelable: !1, composed: !0 }, { name: "ketchupFldSubmit", method: "ketchupFldSubmit", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return ":host{-ms-flex-wrap:wrap;flex-wrap:wrap;--fld_comp-margin:var(--kup-fld_component-margin,8px)}.kup-fld__top-container,:host{display:-ms-flexbox;display:flex}.kup-fld__top-container{-ms-flex-align:center;align-items:center;-ms-flex-order:0;order:0;width:100%}.kup-fld__label{margin:var(--fld_comp-margin);-ms-flex-order:1;order:1}.kup-fld__label.kup-fld--right{-ms-flex-order:4;order:4}.kup-fld__component{margin:var(--fld_comp-margin);-ms-flex-order:3;order:3}.kup-fld__submit{margin:var(--fld_comp-margin);-ms-flex-order:2;order:2}.kup-fld__submit.kup-fld--right{-ms-flex-order:5;order:5}"; }, enumerable: !0, configurable: !0 }), t; }();
exports.KupFld = KupFld;
