"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var KupHtml = function () { function e() { this.label = "Open in a new window", this.isButton = !1, this.src = ""; } return e.prototype.onFrameError = function () { this.ketchupHtmlError.emit(); }, e.prototype.onFrameLoaded = function () { this.ketchupHtmlLoaded.emit(); }, e.prototype.render = function () { return this.isButton ? mycomponent_core_js_1.h("a", { "aria-label": this.label, href: this.src, rel: "noopener", target: "_blank" }, mycomponent_core_js_1.h("kup-button", { align: "right", iconClass: "mdi mdi-open-in-new", label: this.label })) : mycomponent_core_js_1.h("iframe", { class: "ketchup-frame", onError: this.onFrameError.bind(this), onLoad: this.onFrameLoaded.bind(this), src: this.src }); }, Object.defineProperty(e, "is", { get: function () { return "kup-html"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { isButton: { type: Boolean, attr: "is-button", reflectToAttr: !0 }, label: { type: String, attr: "label" }, src: { type: String, attr: "src" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "ketchupHtmlError", method: "ketchupHtmlError", bubbles: !0, cancelable: !1, composed: !0 }, { name: "ketchupHtmlLoaded", method: "ketchupHtmlLoaded", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ":host{--htm_height:var(--kup-html_height,600px);--htm_width:var(--kup-html_width,100%);display:inline-block;width:100%}:host([is-button]){display:inline-block;width:auto}.ketchup-frame{height:var(--htm_height);width:var(--htm_width)}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.KupHtml = KupHtml;
