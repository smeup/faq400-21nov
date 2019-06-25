"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var chunk_c31d34fb_js_1 = require("./chunk-c31d34fb.js");
var chunk_77ecfe7f_js_1 = require("./chunk-77ecfe7f.js");
function isObject(t) { var e = typeof t; return null != t && ("object" == e || "function" == e); }
var isObject_1 = isObject, freeGlobal = "object" == typeof chunk_77ecfe7f_js_1.b && chunk_77ecfe7f_js_1.b && chunk_77ecfe7f_js_1.b.Object === Object && chunk_77ecfe7f_js_1.b, _freeGlobal = freeGlobal, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = _freeGlobal || freeSelf || Function("return this")(), _root = root, now = function () { return _root.Date.now(); }, now_1 = now, Symbol = _root.Symbol, _Symbol = Symbol, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol ? Symbol.toStringTag : void 0;
function getRawTag(t) { var e = hasOwnProperty.call(t, symToStringTag), n = t[symToStringTag]; try {
    t[symToStringTag] = void 0;
    var o = !0;
}
catch (t) { } var i = nativeObjectToString.call(t); return o && (e ? t[symToStringTag] = n : delete t[symToStringTag]), i; }
var _getRawTag = getRawTag, objectProto$1 = Object.prototype, nativeObjectToString$1 = objectProto$1.toString;
function objectToString(t) { return nativeObjectToString$1.call(t); }
var _objectToString = objectToString, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag$1 = Symbol ? Symbol.toStringTag : void 0;
function baseGetTag(t) { return null == t ? void 0 === t ? undefinedTag : nullTag : symToStringTag$1 && symToStringTag$1 in Object(t) ? _getRawTag(t) : _objectToString(t); }
var _baseGetTag = baseGetTag;
function isObjectLike(t) { return null != t && "object" == typeof t; }
var isObjectLike_1 = isObjectLike, symbolTag = "[object Symbol]";
function isSymbol(t) { return "symbol" == typeof t || isObjectLike_1(t) && _baseGetTag(t) == symbolTag; }
var isSymbol_1 = isSymbol, NAN = NaN, reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;
function toNumber(t) { if ("number" == typeof t)
    return t; if (isSymbol_1(t))
    return NAN; if (isObject_1(t)) {
    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
    t = isObject_1(e) ? e + "" : e;
} if ("string" != typeof t)
    return 0 === t ? t : +t; t = t.replace(reTrim, ""); var n = reIsBinary.test(t); return n || reIsOctal.test(t) ? freeParseInt(t.slice(2), n ? 2 : 8) : reIsBadHex.test(t) ? NAN : +t; }
var toNumber_1 = toNumber, FUNC_ERROR_TEXT = "Expected a function", nativeMax = Math.max, nativeMin = Math.min;
function debounce(t, e, n) { var o, i, r, a, u, l, s = 0, c = !1, b = !1, p = !0; if ("function" != typeof t)
    throw new TypeError(FUNC_ERROR_TEXT); function h(e) { var n = o, r = i; return o = i = void 0, s = e, a = t.apply(r, n); } function f(t) { var n = t - l; return void 0 === l || n >= e || n < 0 || b && t - s >= r; } function d() { var t = now_1(); if (f(t))
    return m(t); u = setTimeout(d, function (t) { var n = e - (t - l); return b ? nativeMin(n, r - (t - s)) : n; }(t)); } function m(t) { return u = void 0, p && o ? h(t) : (o = i = void 0, a); } function g() { var t = now_1(), n = f(t); if (o = arguments, i = this, l = t, n) {
    if (void 0 === u)
        return function (t) { return s = t, u = setTimeout(d, e), c ? h(t) : a; }(l);
    if (b)
        return u = setTimeout(d, e), h(l);
} return void 0 === u && (u = setTimeout(d, e)), a; } return e = toNumber_1(e) || 0, isObject_1(n) && (c = !!n.leading, r = (b = "maxWait" in n) ? nativeMax(toNumber_1(n.maxWait) || 0, e) : r, p = "trailing" in n ? !!n.trailing : p), g.cancel = function () { void 0 !== u && clearTimeout(u), s = 0, o = l = i = u = void 0; }, g.flush = function () { return void 0 === u ? a : m(now_1()); }, g; }
var debounce_1 = debounce;
function debounceEvent(t, e) { var n = t._original || t; return { _original: t, emit: debounce_1(n.emit.bind(n), e) }; }
var KupTextInput = function () { function t() { this.initialValue = "", this.inputType = "text", this.isClearable = !1, this.label = "", this.maxLength = 524288, this.debounce = 400, this.value = "", this.elementId = chunk_c31d34fb_js_1.b("kup-input"), this.classInputText = "kup-input-text"; } return t.prototype.debounceChanged = function () { this.ketchupTextInputUpdated = debounceEvent(this.ketchupTextInputUpdated, this.debounce); }, t.prototype.componentWillLoad = function () { this.value = this.initialValue; }, t.prototype.componentDidLoad = function () { this.debounceChanged(); }, t.prototype.triggerFocus = function () { this.inputEl.focus(), this.textInput.focus(); }, t.prototype.onClearClick = function () { var t = this, e = this.value; this.value = "", this.ketchupTextInputUpdated.emit({ value: this.value, oldValue: e, info: { obj: this.obj } }), setTimeout(function () { return t.triggerFocus(); }, 10); }, t.prototype.onKeyDown = function (t) { "Enter" === t.key && (t.preventDefault(), this.ketchupTextInputSubmit.emit({ value: this.value, oldValue: this.value, info: { obj: this.obj } })); }, t.prototype.onInputBlurred = function (t) { var e = t.target; this.inputBlur.emit({ value: e.value, oldValue: this.value, info: { obj: this.obj } }), this.value = e.value; }, t.prototype.onInputFocused = function (t) { var e = t.target; this.inputFocused.emit({ value: e.value, oldValue: this.value, info: { obj: this.obj } }), this.value = e.value; }, t.prototype.onInputUpdated = function (t) { var e = t.target; this.ketchupTextInputUpdated.emit({ value: e.value, oldValue: this.value, info: { obj: this.obj } }), this.value = e.value; }, t.prototype.render = function () { var t = this, e = this.classInputText + "__container", n = null; return this.label && (n = mycomponent_core_js_1.h("label", { htmlFor: this.elementId }, this.label)), mycomponent_core_js_1.h("div", { class: e + (this.isClearable ? " " + e + "--clearable" : "") }, n, mycomponent_core_js_1.h("input", { id: this.elementId, class: this.classInputText + (this.isClearable ? " " + this.classInputText + "--clearable" : ""), maxlength: this.maxLength, ref: function (e) { return t.textInput = e; }, tabindex: "0", type: this.inputType, value: this.value, onBlur: this.onInputBlurred.bind(this), onInput: this.onInputUpdated.bind(this), onFocus: this.onInputFocused.bind(this), onKeyDown: this.onKeyDown.bind(this) }), this.isClearable ? mycomponent_core_js_1.h("button", { "aria-label": "Close", class: this.classInputText + "__clear", role: "button", onClick: this.onClearClick.bind(this) }, mycomponent_core_js_1.h("svg", { viewBox: "0 0 24 24" }, mycomponent_core_js_1.h("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }))) : null); }, Object.defineProperty(t, "is", { get: function () { return "kup-text-input"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { debounce: { type: Number, attr: "debounce", watchCallbacks: ["debounceChanged"] }, initialValue: { type: String, attr: "initial-value" }, inputEl: { elementRef: !0 }, inputType: { type: String, attr: "input-type" }, isClearable: { type: Boolean, attr: "is-clearable" }, label: { type: String, attr: "label" }, maxLength: { type: Number, attr: "max-length" }, obj: { type: "Any", attr: "obj" }, triggerFocus: { method: !0 }, value: { state: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "events", { get: function () { return [{ name: "ketchupTextInputBlurred", method: "inputBlur", bubbles: !0, cancelable: !1, composed: !0 }, { name: "ketchupTextInputFocused", method: "inputFocused", bubbles: !0, cancelable: !1, composed: !0 }, { name: "ketchupTextInputSubmit", method: "ketchupTextInputSubmit", bubbles: !0, cancelable: !1, composed: !0 }, { name: "ketchupTextInputUpdated", method: "ketchupTextInputUpdated", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return ":host{--int_color:var(--kup-text-input_color,#000);--int_font-size:var(--kup-text-input_font-size,14px);--int_border-color:var(--kup-text-input_border-color,grey);--int_border-color--selected:var(--kup-text-input_border-color--selected,#4e908f);--int_tr-duration:var(--kup-text-input_transition-duration,0.6s);--int_icon-color:var(--kup-text-input_icon-color,grey);--int_icon-color--hover:var(--kup-text-input_icon-color--hover,#676767);display:inline-block}label{margin-right:.5rem}.kup-input-text{color:var(--int_color);background-color:#fff;border:1px solid var(--int_border-color);border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;padding:4px 6px;position:relative;-webkit-transition:background-color var(--int_tr-duration);transition:background-color var(--int_tr-duration);z-index:0}.kup-input-text__container{display:inline-block;position:relative;z-index:0}.kup-input-text:focus,.kup-input-text:hover{border-color:var(--int_border-color--selected)}.kup-input-text--clearable{padding-right:calc(6px + 4px * 2 + var(--int_font-size))}.kup-input-text__clear{-ms-flex-align:center;align-items:center;background-color:transparent;border:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;margin:0;outline:none;padding:4px;position:absolute;right:6px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.kup-input-text__clear>svg{fill:var(--int_icon-color);height:var(--int_font-size);-webkit-transition:fill var(--int_tr-duration);transition:fill var(--int_tr-duration);width:var(--int_font-size)}.kup-input-text__clear:hover>svg{fill:var(--int_icon-color--hover)}"; }, enumerable: !0, configurable: !0 }), t; }();
exports.KupTextInput = KupTextInput;
