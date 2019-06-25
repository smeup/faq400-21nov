"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var chunk_c31d34fb_js_1 = require("./chunk-c31d34fb.js");
function KetchupRadioElementFactory() { return { label: "", value: "" }; }
var KupRadio = function () { function e() { this.label = "", this.direction = "horizontal", this.displayedField = "id", this.initialValue = KetchupRadioElementFactory(), this.items = [], this.radioName = "", this.valueField = "id", this.selectedRadio = null; } return e.prototype.checkDirection = function (e) { if (!/horizontal|vertical/.test(e))
    throw new Error("kup-radio: direction must be horizontal or vertical."); }, e.prototype.componentWillLoad = function () { this.reflectInitialValue(this.initialValue); }, e.prototype.reflectInitialValue = function (e, t) { t && e[this.valueField] === t[this.valueField] || this.onRadioChanged(e); }, e.prototype.onRadioChanged = function (e) { this.ketchupRadioChanged.emit({ value: e, oldValue: this.selectedRadio, info: {} }), this.selectedRadio = e; }, e.prototype.radioElementsComposer = function () { var e = this; return this.items.map(function (t) { var i = chunk_c31d34fb_js_1.b(t[e.valueField]); return mycomponent_core_js_1.h("li", { class: "kup-radio__item" + (e.selectedRadio && e.selectedRadio[e.valueField] === t[e.valueField] ? " kup-radio__item--selected" : "") }, mycomponent_core_js_1.h("div", null, mycomponent_core_js_1.h("input", { id: i, type: "radio", name: e.radioName, value: t[e.valueField], onChange: e.onRadioChanged.bind(e, t) })), mycomponent_core_js_1.h("label", { htmlFor: i }, t[e.displayedField])); }); }, e.prototype.render = function () { var e = "kup-radio__group"; return "horizontal" === this.direction && (e += " kup-radio__group--horizontal"), mycomponent_core_js_1.h("div", null, this.label ? mycomponent_core_js_1.h("p", null, this.label) : null, mycomponent_core_js_1.h("ul", { class: e }, this.radioElementsComposer())); }, Object.defineProperty(e, "is", { get: function () { return "kup-radio"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { direction: { type: String, attr: "direction", watchCallbacks: ["checkDirection"] }, displayedField: { type: String, attr: "displayed-field" }, initialValue: { type: "Any", attr: "initial-value", watchCallbacks: ["reflectInitialValue"] }, items: { type: "Any", attr: "items" }, label: { type: String, attr: "label" }, radioName: { type: String, attr: "radio-name" }, selectedRadio: { state: !0 }, valueField: { type: String, attr: "value-field" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "ketchupRadioChanged", method: "ketchupRadioChanged", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ":host{--rad_font-size:var(--kup-radio_font-size,14px);--rad_border-color:var(--kup-radio_border-color,grey);--rad_border-color--selected:var(--kup-radio_border-color,#676767);--rad_color:var(--kup-radio_color,#4e908f);--rad_tr-duration:var(--kup-radio_transition-duration,0.6s)}.kup-radio__group{list-style-type:none;margin:0;padding:0;position:relative;z-index:0}.kup-radio__group.kup-radio__group--horizontal{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.kup-radio__item{display:-ms-flexbox;display:flex;margin:10px 12px}.kup-radio__item,.kup-radio__item>div{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}.kup-radio__item>div{display:-ms-inline-flexbox;display:inline-flex;height:calc(var(--rad_font-size) * 1.4);width:calc(var(--rad_font-size) * 1.4)}.kup-radio__item>div:after,.kup-radio__item>div:before{border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:\"\"}.kup-radio__item>div:before{border:1px solid var(--rad_border-color);height:100%;left:0;position:absolute;top:0;-webkit-transition:border-color var(--rad_tr-duration);transition:border-color var(--rad_tr-duration);width:100%;z-index:0}.kup-radio__item>div:after{background-color:var(--rad_color);height:calc(100% - 6px);position:relative;opacity:0;-webkit-transition:opacity var(--rad_tr-duration);transition:opacity var(--rad_tr-duration);width:calc(100% - 6px);z-index:1}.kup-radio__item>div>input{cursor:pointer;height:100%;left:0;margin:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.kup-radio__item--selected div:before{border-color:var(--rad_border-color--selected)}.kup-radio__item--selected div:after{opacity:1}.kup-radio__item label{cursor:pointer;font-size:var(--rad_font-size);margin-left:10px}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.KupRadio = KupRadio;
