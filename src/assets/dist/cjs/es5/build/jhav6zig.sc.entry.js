"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var chunk_b401efdc_js_1 = require("./chunk-b401efdc.js");
var KetchupPortal = function () { function t() { this.isVisible = !1, this.mirroredCssVars = [], this.refOffset = {}, this.portalRootNode = document.body, this.instance = document.createElement("ketchup-portal-instance"); } return t.prototype.componentWillLoad = function () { this.portalRootNode.appendChild(this.instance); }, t.prototype.componentWillUpdate = function () { this.instance.vNodes = this.nodes; var t = this.styleNode.cloneNode(!0); t.setAttribute("data-portal-style", "true"), this.instance.styleNode = t, chunk_b401efdc_js_1.b(this.instance, this.refOffset), this.instance.isVisible = this.isVisible; }, t.prototype.componentDidUnload = function () { this.portalRootNode.removeChild(this.instance); }, t.prototype.onPortalRootNodeChange = function (t) { t.appendChild(this.instance); }, t.prototype.computeCssVars = function (t, e) { var o = this; if (window) {
    var n = window.getComputedStyle(t);
    e.forEach(function (t) { o.instance.style.setProperty(t, n.getPropertyValue(t)); });
} }, t.prototype.getPortalInstance = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (t) { return [2, this.instance]; }); }); }, t.prototype.onFrameError = function () { this.ketchupHtmlError.emit(); }, t.prototype.onFrameLoaded = function () { this.ketchupHtmlLoaded.emit(); }, t.prototype.render = function () { return null; }, Object.defineProperty(t, "is", { get: function () { return "ketchup-portal"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { cssVarsRef: { type: "Any", attr: "css-vars-ref" }, getPortalInstance: { method: !0 }, isVisible: { type: Boolean, attr: "is-visible" }, mirroredCssVars: { type: "Any", attr: "mirrored-css-vars" }, nodes: { type: "Any", attr: "nodes" }, portalRootNode: { type: "Any", attr: "portal-root-node", watchCallbacks: ["onPortalRootNodeChange"] }, refOffset: { type: "Any", attr: "ref-offset" }, styleNode: { type: "Any", attr: "style-node" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "events", { get: function () { return [{ name: "ketchupHtmlError", method: "ketchupHtmlError", bubbles: !0, cancelable: !1, composed: !0 }, { name: "ketchupHtmlLoaded", method: "ketchupHtmlLoaded", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), t; }(), KetchupPortalInstance = function () { function t() { this.isVisible = !1, this.vNodes = null; } return t.prototype.componentWillUpdate = function () { this.port.shadowRoot.querySelector("style[data-portal-style]") || this.port.shadowRoot.insertBefore(this.styleNode, this.port.shadowRoot.querySelector("style")); }, t.prototype.render = function () { return console.log("portal instance", this.vNodes), this.vNodes; }, Object.defineProperty(t, "is", { get: function () { return "ketchup-portal-instance"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { isVisible: { type: Boolean, attr: "is-visible", reflectToAttr: !0 }, port: { elementRef: !0 }, styleNode: { type: "Any", attr: "style-node" }, vNodes: { type: "Any", attr: "v-nodes" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return ".sc-ketchup-portal-instance-h{display:none!important;position:absolute!important;z-index:99999!important}[is-visible].sc-ketchup-portal-instance-h{display:inline-block!important}"; }, enumerable: !0, configurable: !0 }), t; }();
exports.KetchupPortal = KetchupPortal;
exports.KetchupPortalInstance = KetchupPortalInstance;