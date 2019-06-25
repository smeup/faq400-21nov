"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var chunk_77ecfe7f_js_1 = require("./chunk-77ecfe7f.js");
var SortMode, TotalMode, PaginatorPos, ShowGrid;
!function (e) { e.A = "A", e.D = "D"; }(SortMode || (SortMode = {})), function (e) { e.COUNT = "Count", e.SUM = "Sum", e.AVARAGE = "Avarage"; }(TotalMode || (TotalMode = {})), function (e) { e.TOP = "Top", e.BOTTOM = "Bottom", e.BOTH = "Both"; }(PaginatorPos || (PaginatorPos = {})), function (e) { e.NONE = "None", e.ROW = "Row", e.COL = "Col", e.COMPLETE = "Complete"; }(ShowGrid || (ShowGrid = {}));
var hookCallback, some, numeral = chunk_77ecfe7f_js_1.a(function (e) { var t, o; t = chunk_77ecfe7f_js_1.b, o = function () { var e, t, o, r, n, a = {}, s = {}, i = { currentLocale: "en", zeroFormat: null, nullFormat: null, defaultFormat: "0,0", scalePercentBy100: !0 }, l = { currentLocale: i.currentLocale, zeroFormat: i.zeroFormat, nullFormat: i.nullFormat, defaultFormat: i.defaultFormat, scalePercentBy100: i.scalePercentBy100 }; function u(e, t) { this._input = e, this._value = t; } return (e = function (o) { var r, n, s, i; if (e.isNumeral(o))
    r = o.value();
else if (0 === o || void 0 === o)
    r = 0;
else if (null === o || t.isNaN(o))
    r = null;
else if ("string" == typeof o)
    if (l.zeroFormat && o === l.zeroFormat)
        r = 0;
    else if (l.nullFormat && o === l.nullFormat || !o.replace(/[^0-9]+/g, "").length)
        r = null;
    else {
        for (n in a)
            if ((i = "function" == typeof a[n].regexps.unformat ? a[n].regexps.unformat() : a[n].regexps.unformat) && o.match(i)) {
                s = a[n].unformat;
                break;
            }
        r = (s = s || e._.stringToNumber)(o);
    }
else
    r = Number(o) || null; return new u(o, r); }).version = "2.0.6", e.isNumeral = function (e) { return e instanceof u; }, e._ = t = { numberToFormat: function (t, o, r) { var n, a, i, l, u, c, d, h, f = s[e.options.currentLocale], m = !1, p = !1, g = "", k = "", y = !1; if (t = t || 0, i = Math.abs(t), e._.includes(o, "(") ? (m = !0, o = o.replace(/[\(|\)]/g, "")) : (e._.includes(o, "+") || e._.includes(o, "-")) && (c = e._.includes(o, "+") ? o.indexOf("+") : t < 0 ? o.indexOf("-") : -1, o = o.replace(/[\+|\-]/g, "")), e._.includes(o, "a") && (a = !!(a = o.match(/a(k|m|b|t)?/)) && a[1], e._.includes(o, " a") && (g = " "), o = o.replace(new RegExp(g + "a[kmbt]?"), ""), i >= 1e12 && !a || "t" === a ? (g += f.abbreviations.trillion, t /= 1e12) : i < 1e12 && i >= 1e9 && !a || "b" === a ? (g += f.abbreviations.billion, t /= 1e9) : i < 1e9 && i >= 1e6 && !a || "m" === a ? (g += f.abbreviations.million, t /= 1e6) : (i < 1e6 && i >= 1e3 && !a || "k" === a) && (g += f.abbreviations.thousand, t /= 1e3)), e._.includes(o, "[.]") && (p = !0, o = o.replace("[.]", ".")), l = t.toString().split(".")[0], u = o.split(".")[1], d = o.indexOf(","), n = (o.split(".")[0].split(",")[0].match(/0/g) || []).length, u ? (e._.includes(u, "[") ? (u = (u = u.replace("]", "")).split("["), k = e._.toFixed(t, u[0].length + u[1].length, r, u[1].length)) : k = e._.toFixed(t, u.length, r), l = k.split(".")[0], k = e._.includes(k, ".") ? f.delimiters.decimal + k.split(".")[1] : "", p && 0 === Number(k.slice(1)) && (k = "")) : l = e._.toFixed(t, 0, r), g && !a && Number(l) >= 1e3 && g !== f.abbreviations.trillion)
        switch (l = String(Number(l) / 1e3), g) {
            case f.abbreviations.thousand:
                g = f.abbreviations.million;
                break;
            case f.abbreviations.million:
                g = f.abbreviations.billion;
                break;
            case f.abbreviations.billion: g = f.abbreviations.trillion;
        } if (e._.includes(l, "-") && (l = l.slice(1), y = !0), l.length < n)
        for (var v = n - l.length; v > 0; v--)
            l = "0" + l; return d > -1 && (l = l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + f.delimiters.thousands)), 0 === o.indexOf(".") && (l = ""), h = l + k + (g || ""), m ? h = (m && y ? "(" : "") + h + (m && y ? ")" : "") : c >= 0 ? h = 0 === c ? (y ? "-" : "+") + h : h + (y ? "-" : "+") : y && (h = "-" + h), h; }, stringToNumber: function (e) { var t, o, r, n = s[l.currentLocale], a = e, i = { thousand: 3, million: 6, billion: 9, trillion: 12 }; if (l.zeroFormat && e === l.zeroFormat)
        o = 0;
    else if (l.nullFormat && e === l.nullFormat || !e.replace(/[^0-9]+/g, "").length)
        o = null;
    else {
        for (t in o = 1, "." !== n.delimiters.decimal && (e = e.replace(/\./g, "").replace(n.delimiters.decimal, ".")), i)
            if (r = new RegExp("[^a-zA-Z]" + n.abbreviations[t] + "(?:\\)|(\\" + n.currency.symbol + ")?(?:\\))?)?$"), a.match(r)) {
                o *= Math.pow(10, i[t]);
                break;
            }
        o *= (e.split("-").length + Math.min(e.split("(").length - 1, e.split(")").length - 1)) % 2 ? 1 : -1, e = e.replace(/[^0-9\.]+/g, ""), o *= Number(e);
    } return o; }, isNaN: function (e) { return "number" == typeof e && isNaN(e); }, includes: function (e, t) { return -1 !== e.indexOf(t); }, insert: function (e, t, o) { return e.slice(0, o) + t + e.slice(o); }, reduce: function (e, t) { if (null === this)
        throw new TypeError("Array.prototype.reduce called on null or undefined"); if ("function" != typeof t)
        throw new TypeError(t + " is not a function"); var o, r = Object(e), n = r.length >>> 0, a = 0; if (3 === arguments.length)
        o = arguments[2];
    else {
        for (; a < n && !(a in r);)
            a++;
        if (a >= n)
            throw new TypeError("Reduce of empty array with no initial value");
        o = r[a++];
    } for (; a < n; a++)
        a in r && (o = t(o, r[a], a, r)); return o; }, multiplier: function (e) { var t = e.toString().split("."); return t.length < 2 ? 1 : Math.pow(10, t[1].length); }, correctionFactor: function () { return Array.prototype.slice.call(arguments).reduce(function (e, o) { var r = t.multiplier(o); return e > r ? e : r; }, 1); }, toFixed: function (e, t, o, r) { var n, a, s, i, l = e.toString().split("."), u = t - (r || 0); return n = 2 === l.length ? Math.min(Math.max(l[1].length, u), t) : u, s = Math.pow(10, n), i = (o(e + "e+" + n) / s).toFixed(n), r > t - n && (a = new RegExp("\\.?0{1," + (r - (t - n)) + "}$"), i = i.replace(a, "")), i; } }, e.options = l, e.formats = a, e.locales = s, e.locale = function (e) { return e && (l.currentLocale = e.toLowerCase()), l.currentLocale; }, e.localeData = function (e) { if (!e)
    return s[l.currentLocale]; if (e = e.toLowerCase(), !s[e])
    throw new Error("Unknown locale : " + e); return s[e]; }, e.reset = function () { for (var e in i)
    l[e] = i[e]; }, e.zeroFormat = function (e) { l.zeroFormat = "string" == typeof e ? e : null; }, e.nullFormat = function (e) { l.nullFormat = "string" == typeof e ? e : null; }, e.defaultFormat = function (e) { l.defaultFormat = "string" == typeof e ? e : "0.0"; }, e.register = function (e, t, o) { if (t = t.toLowerCase(), this[e + "s"][t])
    throw new TypeError(t + " " + e + " already registered."); return this[e + "s"][t] = o, o; }, e.validate = function (t, o) { var r, n, a, s, i, l, u, c; if ("string" != typeof t && (t += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", t)), (t = t.trim()).match(/^\d+$/))
    return !0; if ("" === t)
    return !1; try {
    u = e.localeData(o);
}
catch (t) {
    u = e.localeData(e.locale());
} return a = u.currency.symbol, i = u.abbreviations, r = u.delimiters.decimal, n = "." === u.delimiters.thousands ? "\\." : u.delimiters.thousands, !(null !== (c = t.match(/^[^\d]+/)) && (t = t.substr(1), c[0] !== a) || null !== (c = t.match(/[^\d]+$/)) && (t = t.slice(0, -1), c[0] !== i.thousand && c[0] !== i.million && c[0] !== i.billion && c[0] !== i.trillion) || (l = new RegExp(n + "{2}"), t.match(/[^\d.,]/g) || (s = t.split(r)).length > 2 || (s.length < 2 ? !s[0].match(/^\d+.*\d$/) || s[0].match(l) : 1 === s[0].length ? !s[0].match(/^\d+$/) || s[0].match(l) || !s[1].match(/^\d+$/) : !s[0].match(/^\d+.*\d$/) || s[0].match(l) || !s[1].match(/^\d+$/)))); }, e.fn = u.prototype = { clone: function () { return e(this); }, format: function (t, o) { var r, n, s, i = this._value, u = t || l.defaultFormat; if (o = o || Math.round, 0 === i && null !== l.zeroFormat)
        n = l.zeroFormat;
    else if (null === i && null !== l.nullFormat)
        n = l.nullFormat;
    else {
        for (r in a)
            if (u.match(a[r].regexps.format)) {
                s = a[r].format;
                break;
            }
        n = (s = s || e._.numberToFormat)(i, u, o);
    } return n; }, value: function () { return this._value; }, input: function () { return this._input; }, set: function (e) { return this._value = Number(e), this; }, add: function (e) { var o = t.correctionFactor.call(null, this._value, e); return this._value = t.reduce([this._value, e], function (e, t, r, n) { return e + Math.round(o * t); }, 0) / o, this; }, subtract: function (e) { var o = t.correctionFactor.call(null, this._value, e); return this._value = t.reduce([e], function (e, t, r, n) { return e - Math.round(o * t); }, Math.round(this._value * o)) / o, this; }, multiply: function (e) { return this._value = t.reduce([this._value, e], function (e, o, r, n) { var a = t.correctionFactor(e, o); return Math.round(e * a) * Math.round(o * a) / Math.round(a * a); }, 1), this; }, divide: function (e) { return this._value = t.reduce([this._value, e], function (e, o, r, n) { var a = t.correctionFactor(e, o); return Math.round(e * a) / Math.round(o * a); }), this; }, difference: function (t) { return Math.abs(e(this._value).subtract(t).value()); } }, e.register("locale", "en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (e) { var t = e % 10; return 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; }, currency: { symbol: "$" } }), e.register("format", "bps", { regexps: { format: /(BPS)/, unformat: /(BPS)/ }, format: function (t, o, r) { var n, a = e._.includes(o, " BPS") ? " " : ""; return t *= 1e4, o = o.replace(/\s?BPS/, ""), n = e._.numberToFormat(t, o, r), e._.includes(n, ")") ? ((n = n.split("")).splice(-1, 0, a + "BPS"), n = n.join("")) : n = n + a + "BPS", n; }, unformat: function (t) { return +(1e-4 * e._.stringToNumber(t)).toFixed(15); } }), n = "(" + (n = (o = { base: 1e3, suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] }).suffixes.concat((r = { base: 1024, suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] }).suffixes.filter(function (e) { return o.suffixes.indexOf(e) < 0; })).join("|")).replace("B", "B(?!PS)") + ")", e.register("format", "bytes", { regexps: { format: /([0\s]i?b)/, unformat: new RegExp(n) }, format: function (t, n, a) { var s, i, l, u = e._.includes(n, "ib") ? r : o, c = e._.includes(n, " b") || e._.includes(n, " ib") ? " " : ""; for (n = n.replace(/\s?i?b/, ""), s = 0; s <= u.suffixes.length; s++)
        if (i = Math.pow(u.base, s), l = Math.pow(u.base, s + 1), null === t || 0 === t || t >= i && t < l) {
            c += u.suffixes[s], i > 0 && (t /= i);
            break;
        } return e._.numberToFormat(t, n, a) + c; }, unformat: function (t) { var n, a, s = e._.stringToNumber(t); if (s) {
        for (n = o.suffixes.length - 1; n >= 0; n--) {
            if (e._.includes(t, o.suffixes[n])) {
                a = Math.pow(o.base, n);
                break;
            }
            if (e._.includes(t, r.suffixes[n])) {
                a = Math.pow(r.base, n);
                break;
            }
        }
        s *= a || 1;
    } return s; } }), e.register("format", "currency", { regexps: { format: /(\$)/ }, format: function (t, o, r) { var n, a, s = e.locales[e.options.currentLocale], i = { before: o.match(/^([\+|\-|\(|\s|\$]*)/)[0], after: o.match(/([\+|\-|\)|\s|\$]*)$/)[0] }; for (o = o.replace(/\s?\$\s?/, ""), n = e._.numberToFormat(t, o, r), t >= 0 ? (i.before = i.before.replace(/[\-\(]/, ""), i.after = i.after.replace(/[\-\)]/, "")) : t < 0 && !e._.includes(i.before, "-") && !e._.includes(i.before, "(") && (i.before = "-" + i.before), a = 0; a < i.before.length; a++)
        switch (i.before[a]) {
            case "$":
                n = e._.insert(n, s.currency.symbol, a);
                break;
            case " ": n = e._.insert(n, " ", a + s.currency.symbol.length - 1);
        } for (a = i.after.length - 1; a >= 0; a--)
        switch (i.after[a]) {
            case "$":
                n = a === i.after.length - 1 ? n + s.currency.symbol : e._.insert(n, s.currency.symbol, -(i.after.length - (1 + a)));
                break;
            case " ": n = a === i.after.length - 1 ? n + " " : e._.insert(n, " ", -(i.after.length - (1 + a) + s.currency.symbol.length - 1));
        } return n; } }), e.register("format", "exponential", { regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ }, format: function (t, o, r) { var n = ("number" != typeof t || e._.isNaN(t) ? "0e+0" : t.toExponential()).split("e"); return o = o.replace(/e[\+|\-]{1}0/, ""), e._.numberToFormat(Number(n[0]), o, r) + "e" + n[1]; }, unformat: function (t) { var o = e._.includes(t, "e+") ? t.split("e+") : t.split("e-"), r = Number(o[0]), n = Number(o[1]); return n = e._.includes(t, "e-") ? n *= -1 : n, e._.reduce([r, Math.pow(10, n)], function (t, o, r, n) { var a = e._.correctionFactor(t, o); return t * a * (o * a) / (a * a); }, 1); } }), e.register("format", "ordinal", { regexps: { format: /(o)/ }, format: function (t, o, r) { var n = e.locales[e.options.currentLocale], a = e._.includes(o, " o") ? " " : ""; return o = o.replace(/\s?o/, ""), a += n.ordinal(t), e._.numberToFormat(t, o, r) + a; } }), e.register("format", "percentage", { regexps: { format: /(%)/, unformat: /(%)/ }, format: function (t, o, r) { var n, a = e._.includes(o, " %") ? " " : ""; return e.options.scalePercentBy100 && (t *= 100), o = o.replace(/\s?\%/, ""), n = e._.numberToFormat(t, o, r), e._.includes(n, ")") ? ((n = n.split("")).splice(-1, 0, a + "%"), n = n.join("")) : n = n + a + "%", n; }, unformat: function (t) { var o = e._.stringToNumber(t); return e.options.scalePercentBy100 ? .01 * o : o; } }), e.register("format", "time", { regexps: { format: /(:)/, unformat: /(:)/ }, format: function (e, t, o) { var r = Math.floor(e / 60 / 60), n = Math.floor((e - 60 * r * 60) / 60), a = Math.round(e - 60 * r * 60 - 60 * n); return r + ":" + (n < 10 ? "0" + n : n) + ":" + (a < 10 ? "0" + a : a); }, unformat: function (e) { var t = e.split(":"), o = 0; return 3 === t.length ? (o += 60 * Number(t[0]) * 60, o += 60 * Number(t[1]), o += Number(t[2])) : 2 === t.length && (o += 60 * Number(t[0]), o += Number(t[1])), Number(o); } }), e; }, e.exports ? e.exports = o() : t.numeral = o(); });
function hooks() { return hookCallback.apply(null, arguments); }
function setHookCallback(e) { hookCallback = e; }
function isArray(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e); }
function isObject(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e); }
function isObjectEmpty(e) { if (Object.getOwnPropertyNames)
    return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
    if (e.hasOwnProperty(t))
        return !1; return !0; }
function isUndefined(e) { return void 0 === e; }
function isNumber(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e); }
function isDate(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e); }
function map(e, t) { var o, r = []; for (o = 0; o < e.length; ++o)
    r.push(t(e[o], o)); return r; }
function hasOwnProp(e, t) { return Object.prototype.hasOwnProperty.call(e, t); }
function extend(e, t) { for (var o in t)
    hasOwnProp(t, o) && (e[o] = t[o]); return hasOwnProp(t, "toString") && (e.toString = t.toString), hasOwnProp(t, "valueOf") && (e.valueOf = t.valueOf), e; }
function createUTC(e, t, o, r) { return createLocalOrUTC(e, t, o, r, !0).utc(); }
function defaultParsingFlags() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }; }
function getParsingFlags(e) { return null == e._pf && (e._pf = defaultParsingFlags()), e._pf; }
function isValid(e) { if (null == e._isValid) {
    var t = getParsingFlags(e), o = some.call(t.parsedDateParts, function (e) { return null != e; }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && o);
    if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e))
        return r;
    e._isValid = r;
} return e._isValid; }
function createInvalid(e) { var t = createUTC(NaN); return null != e ? extend(getParsingFlags(t), e) : getParsingFlags(t).userInvalidated = !0, t; }
some = Array.prototype.some ? Array.prototype.some : function (e) { for (var t = Object(this), o = t.length >>> 0, r = 0; r < o; r++)
    if (r in t && e.call(this, t[r], r, t))
        return !0; return !1; };
var momentProperties = hooks.momentProperties = [];
function copyConfig(e, t) { var o, r, n; if (isUndefined(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), isUndefined(t._i) || (e._i = t._i), isUndefined(t._f) || (e._f = t._f), isUndefined(t._l) || (e._l = t._l), isUndefined(t._strict) || (e._strict = t._strict), isUndefined(t._tzm) || (e._tzm = t._tzm), isUndefined(t._isUTC) || (e._isUTC = t._isUTC), isUndefined(t._offset) || (e._offset = t._offset), isUndefined(t._pf) || (e._pf = getParsingFlags(t)), isUndefined(t._locale) || (e._locale = t._locale), momentProperties.length > 0)
    for (o = 0; o < momentProperties.length; o++)
        isUndefined(n = t[r = momentProperties[o]]) || (e[r] = n); return e; }
var updateInProgress = !1;
function Moment(e) { copyConfig(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === updateInProgress && (updateInProgress = !0, hooks.updateOffset(this), updateInProgress = !1); }
function isMoment(e) { return e instanceof Moment || null != e && null != e._isAMomentObject; }
function absFloor(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e); }
function toInt(e) { var t = +e, o = 0; return 0 !== t && isFinite(t) && (o = absFloor(t)), o; }
function compareArrays(e, t, o) { var r, n = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), s = 0; for (r = 0; r < n; r++)
    (o && e[r] !== t[r] || !o && toInt(e[r]) !== toInt(t[r])) && s++; return s + a; }
function warn(e) { !1 === hooks.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e); }
function deprecate(e, t) { var o = !0; return extend(function () { if (null != hooks.deprecationHandler && hooks.deprecationHandler(null, e), o) {
    for (var r, n = [], a = 0; a < arguments.length; a++) {
        if (r = "", "object" == typeof arguments[a]) {
            for (var s in r += "\n[" + a + "] ", arguments[0])
                r += s + ": " + arguments[0][s] + ", ";
            r = r.slice(0, -2);
        }
        else
            r = arguments[a];
        n.push(r);
    }
    warn(e + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + (new Error).stack), o = !1;
} return t.apply(this, arguments); }, t); }
var keys, deprecations = {};
function deprecateSimple(e, t) { null != hooks.deprecationHandler && hooks.deprecationHandler(e, t), deprecations[e] || (warn(t), deprecations[e] = !0); }
function isFunction(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e); }
function set(e) { var t, o; for (o in e)
    isFunction(t = e[o]) ? this[o] = t : this["_" + o] = t; this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source); }
function mergeConfigs(e, t) { var o, r = extend({}, e); for (o in t)
    hasOwnProp(t, o) && (isObject(e[o]) && isObject(t[o]) ? (r[o] = {}, extend(r[o], e[o]), extend(r[o], t[o])) : null != t[o] ? r[o] = t[o] : delete r[o]); for (o in e)
    hasOwnProp(e, o) && !hasOwnProp(t, o) && isObject(e[o]) && (r[o] = extend({}, r[o])); return r; }
function Locale(e) { null != e && this.set(e); }
hooks.suppressDeprecationWarnings = !1, hooks.deprecationHandler = null, keys = Object.keys ? Object.keys : function (e) { var t, o = []; for (t in e)
    hasOwnProp(e, t) && o.push(t); return o; };
var defaultCalendar = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };
function calendar(e, t, o) { var r = this._calendar[e] || this._calendar.sameElse; return isFunction(r) ? r.call(t, o) : r; }
var defaultLongDateFormat = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
function longDateFormat(e) { var t = this._longDateFormat[e], o = this._longDateFormat[e.toUpperCase()]; return t || !o ? t : (this._longDateFormat[e] = o.replace(/MMMM|MM|DD|dddd/g, function (e) { return e.slice(1); }), this._longDateFormat[e]); }
var defaultInvalidDate = "Invalid date";
function invalidDate() { return this._invalidDate; }
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(e) { return this._ordinal.replace("%d", e); }
var defaultRelativeTime = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
function relativeTime(e, t, o, r) { var n = this._relativeTime[o]; return isFunction(n) ? n(e, t, o, r) : n.replace(/%d/i, e); }
function pastFuture(e, t) { var o = this._relativeTime[e > 0 ? "future" : "past"]; return isFunction(o) ? o(t) : o.replace(/%s/i, t); }
var aliases = {};
function addUnitAlias(e, t) { var o = e.toLowerCase(); aliases[o] = aliases[o + "s"] = aliases[t] = e; }
function normalizeUnits(e) { return "string" == typeof e ? aliases[e] || aliases[e.toLowerCase()] : void 0; }
function normalizeObjectUnits(e) { var t, o, r = {}; for (o in e)
    hasOwnProp(e, o) && (t = normalizeUnits(o)) && (r[t] = e[o]); return r; }
var priorities = {};
function addUnitPriority(e, t) { priorities[e] = t; }
function getPrioritizedUnits(e) { var t = []; for (var o in e)
    t.push({ unit: o, priority: priorities[o] }); return t.sort(function (e, t) { return e.priority - t.priority; }), t; }
function zeroFill(e, t, o) { var r = "" + Math.abs(e); return (e >= 0 ? o ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - r.length)).toString().substr(1) + r; }
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(e, t, o, r) { var n = r; "string" == typeof r && (n = function () { return this[r](); }), e && (formatTokenFunctions[e] = n), t && (formatTokenFunctions[t[0]] = function () { return zeroFill(n.apply(this, arguments), t[1], t[2]); }), o && (formatTokenFunctions[o] = function () { return this.localeData().ordinal(n.apply(this, arguments), e); }); }
function removeFormattingTokens(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, ""); }
function makeFormatFunction(e) { var t, o, r = e.match(formattingTokens); for (t = 0, o = r.length; t < o; t++)
    r[t] = formatTokenFunctions[r[t]] ? formatTokenFunctions[r[t]] : removeFormattingTokens(r[t]); return function (t) { var n, a = ""; for (n = 0; n < o; n++)
    a += isFunction(r[n]) ? r[n].call(t, e) : r[n]; return a; }; }
function formatMoment(e, t) { return e.isValid() ? (t = expandFormat(t, e.localeData()), formatFunctions[t] = formatFunctions[t] || makeFormatFunction(t), formatFunctions[t](e)) : e.localeData().invalidDate(); }
function expandFormat(e, t) { var o = 5; function r(e) { return t.longDateFormat(e) || e; } for (localFormattingTokens.lastIndex = 0; o >= 0 && localFormattingTokens.test(e);)
    e = e.replace(localFormattingTokens, r), localFormattingTokens.lastIndex = 0, o -= 1; return e; }
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes = {};
function addRegexToken(e, t, o) { regexes[e] = isFunction(t) ? t : function (e, r) { return e && o ? o : t; }; }
function getParseRegexForToken(e, t) { return hasOwnProp(regexes, e) ? regexes[e](t._strict, t._locale) : new RegExp(unescapeFormat(e)); }
function unescapeFormat(e) { return regexEscape(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, o, r, n) { return t || o || r || n; })); }
function regexEscape(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); }
var tokens = {};
function addParseToken(e, t) { var o, r = t; for ("string" == typeof e && (e = [e]), isNumber(t) && (r = function (e, o) { o[t] = toInt(e); }), o = 0; o < e.length; o++)
    tokens[e[o]] = r; }
function addWeekParseToken(e, t) { addParseToken(e, function (e, o, r, n) { r._w = r._w || {}, t(e, r._w, r, n); }); }
function addTimeToArrayFromToken(e, t, o) { null != t && hasOwnProp(tokens, e) && tokens[e](t, o._a, o, e); }
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
function daysInYear(e) { return isLeapYear(e) ? 366 : 365; }
function isLeapYear(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0; }
addFormatToken("Y", 0, 0, function () { var e = this.year(); return e <= 9999 ? "" + e : "+" + e; }), addFormatToken(0, ["YY", 2], 0, function () { return this.year() % 100; }), addFormatToken(0, ["YYYY", 4], 0, "year"), addFormatToken(0, ["YYYYY", 5], 0, "year"), addFormatToken(0, ["YYYYYY", 6, !0], 0, "year"), addUnitAlias("year", "y"), addUnitPriority("year", 1), addRegexToken("Y", matchSigned), addRegexToken("YY", match1to2, match2), addRegexToken("YYYY", match1to4, match4), addRegexToken("YYYYY", match1to6, match6), addRegexToken("YYYYYY", match1to6, match6), addParseToken(["YYYYY", "YYYYYY"], YEAR), addParseToken("YYYY", function (e, t) { t[YEAR] = 2 === e.length ? hooks.parseTwoDigitYear(e) : toInt(e); }), addParseToken("YY", function (e, t) { t[YEAR] = hooks.parseTwoDigitYear(e); }), addParseToken("Y", function (e, t) { t[YEAR] = parseInt(e, 10); }), hooks.parseTwoDigitYear = function (e) { return toInt(e) + (toInt(e) > 68 ? 1900 : 2e3); };
var indexOf, getSetYear = makeGetSet("FullYear", !0);
function getIsLeapYear() { return isLeapYear(this.year()); }
function makeGetSet(e, t) { return function (o) { return null != o ? (set$1(this, e, o), hooks.updateOffset(this, t), this) : get(this, e); }; }
function get(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN; }
function set$1(e, t, o) { e.isValid() && !isNaN(o) && ("FullYear" === t && isLeapYear(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](o, e.month(), daysInMonth(o, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](o)); }
function stringGet(e) { return isFunction(this[e = normalizeUnits(e)]) ? this[e]() : this; }
function stringSet(e, t) { if ("object" == typeof e)
    for (var o = getPrioritizedUnits(e = normalizeObjectUnits(e)), r = 0; r < o.length; r++)
        this[o[r].unit](e[o[r].unit]);
else if (isFunction(this[e = normalizeUnits(e)]))
    return this[e](t); return this; }
function mod(e, t) { return (e % t + t) % t; }
function daysInMonth(e, t) { if (isNaN(e) || isNaN(t))
    return NaN; var o = mod(t, 12); return e += (t - o) / 12, 1 === o ? isLeapYear(e) ? 29 : 28 : 31 - o % 7 % 2; }
indexOf = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) { var t; for (t = 0; t < this.length; ++t)
    if (this[t] === e)
        return t; return -1; }, addFormatToken("M", ["MM", 2], "Mo", function () { return this.month() + 1; }), addFormatToken("MMM", 0, 0, function (e) { return this.localeData().monthsShort(this, e); }), addFormatToken("MMMM", 0, 0, function (e) { return this.localeData().months(this, e); }), addUnitAlias("month", "M"), addUnitPriority("month", 8), addRegexToken("M", match1to2), addRegexToken("MM", match1to2, match2), addRegexToken("MMM", function (e, t) { return t.monthsShortRegex(e); }), addRegexToken("MMMM", function (e, t) { return t.monthsRegex(e); }), addParseToken(["M", "MM"], function (e, t) { t[MONTH] = toInt(e) - 1; }), addParseToken(["MMM", "MMMM"], function (e, t, o, r) { var n = o._locale.monthsParse(e, r, o._strict); null != n ? t[MONTH] = n : getParsingFlags(o).invalidMonth = e; });
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function localeMonths(e, t) { return e ? isArray(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(t) ? "format" : "standalone"][e.month()] : isArray(this._months) ? this._months : this._months.standalone; }
var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function localeMonthsShort(e, t) { return e ? isArray(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(t) ? "format" : "standalone"][e.month()] : isArray(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone; }
function handleStrictParse(e, t, o) { var r, n, a, s = e.toLocaleLowerCase(); if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
        a = createUTC([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase(); return o ? "MMM" === t ? -1 !== (n = indexOf.call(this._shortMonthsParse, s)) ? n : null : -1 !== (n = indexOf.call(this._longMonthsParse, s)) ? n : null : "MMM" === t ? -1 !== (n = indexOf.call(this._shortMonthsParse, s)) ? n : -1 !== (n = indexOf.call(this._longMonthsParse, s)) ? n : null : -1 !== (n = indexOf.call(this._longMonthsParse, s)) ? n : -1 !== (n = indexOf.call(this._shortMonthsParse, s)) ? n : null; }
function localeMonthsParse(e, t, o) { var r, n, a; if (this._monthsParseExact)
    return handleStrictParse.call(this, e, t, o); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (n = createUTC([2e3, r]), o && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), o || this._monthsParse[r] || (a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), o && "MMMM" === t && this._longMonthsParse[r].test(e))
        return r;
    if (o && "MMM" === t && this._shortMonthsParse[r].test(e))
        return r;
    if (!o && this._monthsParse[r].test(e))
        return r;
} }
function setMonth(e, t) { var o; if (!e.isValid())
    return e; if ("string" == typeof t)
    if (/^\d+$/.test(t))
        t = toInt(t);
    else if (!isNumber(t = e.localeData().monthsParse(t)))
        return e; return o = Math.min(e.date(), daysInMonth(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, o), e; }
function getSetMonth(e) { return null != e ? (setMonth(this, e), hooks.updateOffset(this, !0), this) : get(this, "Month"); }
function getDaysInMonth() { return daysInMonth(this.year(), this.month()); }
var defaultMonthsShortRegex = matchWord;
function monthsShortRegex(e) { return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (hasOwnProp(this, "_monthsShortRegex") || (this._monthsShortRegex = defaultMonthsShortRegex), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex); }
var defaultMonthsRegex = matchWord;
function monthsRegex(e) { return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (hasOwnProp(this, "_monthsRegex") || (this._monthsRegex = defaultMonthsRegex), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex); }
function computeMonthsParse() { function e(e, t) { return t.length - e.length; } var t, o, r = [], n = [], a = []; for (t = 0; t < 12; t++)
    o = createUTC([2e3, t]), r.push(this.monthsShort(o, "")), n.push(this.months(o, "")), a.push(this.months(o, "")), a.push(this.monthsShort(o, "")); for (r.sort(e), n.sort(e), a.sort(e), t = 0; t < 12; t++)
    r[t] = regexEscape(r[t]), n[t] = regexEscape(n[t]); for (t = 0; t < 24; t++)
    a[t] = regexEscape(a[t]); this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"); }
function createDate(e, t, o, r, n, a, s) { var i; return e < 100 && e >= 0 ? (i = new Date(e + 400, t, o, r, n, a, s), isFinite(i.getFullYear()) && i.setFullYear(e)) : i = new Date(e, t, o, r, n, a, s), i; }
function createUTCDate(e) { var t; if (e < 100 && e >= 0) {
    var o = Array.prototype.slice.call(arguments);
    o[0] = e + 400, t = new Date(Date.UTC.apply(null, o)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
}
else
    t = new Date(Date.UTC.apply(null, arguments)); return t; }
function firstWeekOffset(e, t, o) { var r = 7 + t - o; return -(7 + createUTCDate(e, 0, r).getUTCDay() - t) % 7 + r - 1; }
function dayOfYearFromWeeks(e, t, o, r, n) { var a, s, i = 1 + 7 * (t - 1) + (7 + o - r) % 7 + firstWeekOffset(e, r, n); return i <= 0 ? s = daysInYear(a = e - 1) + i : i > daysInYear(e) ? (a = e + 1, s = i - daysInYear(e)) : (a = e, s = i), { year: a, dayOfYear: s }; }
function weekOfYear(e, t, o) { var r, n, a = firstWeekOffset(e.year(), t, o), s = Math.floor((e.dayOfYear() - a - 1) / 7) + 1; return s < 1 ? r = s + weeksInYear(n = e.year() - 1, t, o) : s > weeksInYear(e.year(), t, o) ? (r = s - weeksInYear(e.year(), t, o), n = e.year() + 1) : (n = e.year(), r = s), { week: r, year: n }; }
function weeksInYear(e, t, o) { var r = firstWeekOffset(e, t, o), n = firstWeekOffset(e + 1, t, o); return (daysInYear(e) - r + n) / 7; }
function localeWeek(e) { return weekOfYear(e, this._week.dow, this._week.doy).week; }
addFormatToken("w", ["ww", 2], "wo", "week"), addFormatToken("W", ["WW", 2], "Wo", "isoWeek"), addUnitAlias("week", "w"), addUnitAlias("isoWeek", "W"), addUnitPriority("week", 5), addUnitPriority("isoWeek", 5), addRegexToken("w", match1to2), addRegexToken("ww", match1to2, match2), addRegexToken("W", match1to2), addRegexToken("WW", match1to2, match2), addWeekParseToken(["w", "ww", "W", "WW"], function (e, t, o, r) { t[r.substr(0, 1)] = toInt(e); });
var defaultLocaleWeek = { dow: 0, doy: 6 };
function localeFirstDayOfWeek() { return this._week.dow; }
function localeFirstDayOfYear() { return this._week.doy; }
function getSetWeek(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d"); }
function getSetISOWeek(e) { var t = weekOfYear(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d"); }
function parseWeekday(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10); }
function parseIsoWeekday(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e; }
function shiftWeekdays(e, t) { return e.slice(t, 7).concat(e.slice(0, t)); }
addFormatToken("d", 0, "do", "day"), addFormatToken("dd", 0, 0, function (e) { return this.localeData().weekdaysMin(this, e); }), addFormatToken("ddd", 0, 0, function (e) { return this.localeData().weekdaysShort(this, e); }), addFormatToken("dddd", 0, 0, function (e) { return this.localeData().weekdays(this, e); }), addFormatToken("e", 0, 0, "weekday"), addFormatToken("E", 0, 0, "isoWeekday"), addUnitAlias("day", "d"), addUnitAlias("weekday", "e"), addUnitAlias("isoWeekday", "E"), addUnitPriority("day", 11), addUnitPriority("weekday", 11), addUnitPriority("isoWeekday", 11), addRegexToken("d", match1to2), addRegexToken("e", match1to2), addRegexToken("E", match1to2), addRegexToken("dd", function (e, t) { return t.weekdaysMinRegex(e); }), addRegexToken("ddd", function (e, t) { return t.weekdaysShortRegex(e); }), addRegexToken("dddd", function (e, t) { return t.weekdaysRegex(e); }), addWeekParseToken(["dd", "ddd", "dddd"], function (e, t, o, r) { var n = o._locale.weekdaysParse(e, r, o._strict); null != n ? t.d = n : getParsingFlags(o).invalidWeekday = e; }), addWeekParseToken(["d", "e", "E"], function (e, t, o, r) { t[r] = toInt(e); });
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function localeWeekdays(e, t) { var o = isArray(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? shiftWeekdays(o, this._week.dow) : e ? o[e.day()] : o; }
var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function localeWeekdaysShort(e) { return !0 === e ? shiftWeekdays(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort; }
var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function localeWeekdaysMin(e) { return !0 === e ? shiftWeekdays(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin; }
function handleStrictParse$1(e, t, o) { var r, n, a, s = e.toLocaleLowerCase(); if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
        a = createUTC([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase(); return o ? "dddd" === t ? -1 !== (n = indexOf.call(this._weekdaysParse, s)) ? n : null : "ddd" === t ? -1 !== (n = indexOf.call(this._shortWeekdaysParse, s)) ? n : null : -1 !== (n = indexOf.call(this._minWeekdaysParse, s)) ? n : null : "dddd" === t ? -1 !== (n = indexOf.call(this._weekdaysParse, s)) ? n : -1 !== (n = indexOf.call(this._shortWeekdaysParse, s)) ? n : -1 !== (n = indexOf.call(this._minWeekdaysParse, s)) ? n : null : "ddd" === t ? -1 !== (n = indexOf.call(this._shortWeekdaysParse, s)) ? n : -1 !== (n = indexOf.call(this._weekdaysParse, s)) ? n : -1 !== (n = indexOf.call(this._minWeekdaysParse, s)) ? n : null : -1 !== (n = indexOf.call(this._minWeekdaysParse, s)) ? n : -1 !== (n = indexOf.call(this._weekdaysParse, s)) ? n : -1 !== (n = indexOf.call(this._shortWeekdaysParse, s)) ? n : null; }
function localeWeekdaysParse(e, t, o) { var r, n, a; if (this._weekdaysParseExact)
    return handleStrictParse$1.call(this, e, t, o); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (n = createUTC([2e3, 1]).day(r), o && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), o && "dddd" === t && this._fullWeekdaysParse[r].test(e))
        return r;
    if (o && "ddd" === t && this._shortWeekdaysParse[r].test(e))
        return r;
    if (o && "dd" === t && this._minWeekdaysParse[r].test(e))
        return r;
    if (!o && this._weekdaysParse[r].test(e))
        return r;
} }
function getSetDayOfWeek(e) { if (!this.isValid())
    return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = parseWeekday(e, this.localeData()), this.add(e - t, "d")) : t; }
function getSetLocaleDayOfWeek(e) { if (!this.isValid())
    return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d"); }
function getSetISODayOfWeek(e) { if (!this.isValid())
    return null != e ? this : NaN; if (null != e) {
    var t = parseIsoWeekday(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
} return this.day() || 7; }
var defaultWeekdaysRegex = matchWord;
function weekdaysRegex(e) { return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (hasOwnProp(this, "_weekdaysRegex") || (this._weekdaysRegex = defaultWeekdaysRegex), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex); }
var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex(e) { return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (hasOwnProp(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = defaultWeekdaysShortRegex), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex); }
var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex(e) { return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (hasOwnProp(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = defaultWeekdaysMinRegex), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex); }
function computeWeekdaysParse() { function e(e, t) { return t.length - e.length; } var t, o, r, n, a, s = [], i = [], l = [], u = []; for (t = 0; t < 7; t++)
    o = createUTC([2e3, 1]).day(t), r = this.weekdaysMin(o, ""), n = this.weekdaysShort(o, ""), a = this.weekdays(o, ""), s.push(r), i.push(n), l.push(a), u.push(r), u.push(n), u.push(a); for (s.sort(e), i.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++)
    i[t] = regexEscape(i[t]), l[t] = regexEscape(l[t]), u[t] = regexEscape(u[t]); this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"); }
function hFormat() { return this.hours() % 12 || 12; }
function kFormat() { return this.hours() || 24; }
function meridiem(e, t) { addFormatToken(e, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), t); }); }
function matchMeridiem(e, t) { return t._meridiemParse; }
function localeIsPM(e) { return "p" === (e + "").toLowerCase().charAt(0); }
addFormatToken("H", ["HH", 2], 0, "hour"), addFormatToken("h", ["hh", 2], 0, hFormat), addFormatToken("k", ["kk", 2], 0, kFormat), addFormatToken("hmm", 0, 0, function () { return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2); }), addFormatToken("hmmss", 0, 0, function () { return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2); }), addFormatToken("Hmm", 0, 0, function () { return "" + this.hours() + zeroFill(this.minutes(), 2); }), addFormatToken("Hmmss", 0, 0, function () { return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2); }), meridiem("a", !0), meridiem("A", !1), addUnitAlias("hour", "h"), addUnitPriority("hour", 13), addRegexToken("a", matchMeridiem), addRegexToken("A", matchMeridiem), addRegexToken("H", match1to2), addRegexToken("h", match1to2), addRegexToken("k", match1to2), addRegexToken("HH", match1to2, match2), addRegexToken("hh", match1to2, match2), addRegexToken("kk", match1to2, match2), addRegexToken("hmm", match3to4), addRegexToken("hmmss", match5to6), addRegexToken("Hmm", match3to4), addRegexToken("Hmmss", match5to6), addParseToken(["H", "HH"], HOUR), addParseToken(["k", "kk"], function (e, t, o) { var r = toInt(e); t[HOUR] = 24 === r ? 0 : r; }), addParseToken(["a", "A"], function (e, t, o) { o._isPm = o._locale.isPM(e), o._meridiem = e; }), addParseToken(["h", "hh"], function (e, t, o) { t[HOUR] = toInt(e), getParsingFlags(o).bigHour = !0; }), addParseToken("hmm", function (e, t, o) { var r = e.length - 2; t[HOUR] = toInt(e.substr(0, r)), t[MINUTE] = toInt(e.substr(r)), getParsingFlags(o).bigHour = !0; }), addParseToken("hmmss", function (e, t, o) { var r = e.length - 4, n = e.length - 2; t[HOUR] = toInt(e.substr(0, r)), t[MINUTE] = toInt(e.substr(r, 2)), t[SECOND] = toInt(e.substr(n)), getParsingFlags(o).bigHour = !0; }), addParseToken("Hmm", function (e, t, o) { var r = e.length - 2; t[HOUR] = toInt(e.substr(0, r)), t[MINUTE] = toInt(e.substr(r)); }), addParseToken("Hmmss", function (e, t, o) { var r = e.length - 4, n = e.length - 2; t[HOUR] = toInt(e.substr(0, r)), t[MINUTE] = toInt(e.substr(r, 2)), t[SECOND] = toInt(e.substr(n)); });
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem(e, t, o) { return e > 11 ? o ? "pm" : "PM" : o ? "am" : "AM"; }
var globalLocale, getSetHour = makeGetSet("Hours", !0), baseConfig = { calendar: defaultCalendar, longDateFormat: defaultLongDateFormat, invalidDate: defaultInvalidDate, ordinal: defaultOrdinal, dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse, relativeTime: defaultRelativeTime, months: defaultLocaleMonths, monthsShort: defaultLocaleMonthsShort, week: defaultLocaleWeek, weekdays: defaultLocaleWeekdays, weekdaysMin: defaultLocaleWeekdaysMin, weekdaysShort: defaultLocaleWeekdaysShort, meridiemParse: defaultLocaleMeridiemParse }, locales = {}, localeFamilies = {};
function normalizeLocale(e) { return e ? e.toLowerCase().replace("_", "-") : e; }
function chooseLocale(e) { for (var t, o, r, n, a = 0; a < e.length;) {
    for (t = (n = normalizeLocale(e[a]).split("-")).length, o = (o = normalizeLocale(e[a + 1])) ? o.split("-") : null; t > 0;) {
        if (r = loadLocale(n.slice(0, t).join("-")))
            return r;
        if (o && o.length >= t && compareArrays(n, o, !0) >= t - 1)
            break;
        t--;
    }
    a++;
} return globalLocale; }
function loadLocale(e) { var t = null; if (!locales[e] && "undefined" != typeof module && module && module.exports)
    try {
        t = globalLocale._abbr, require("./locale/" + e), getSetGlobalLocale(t);
    }
    catch (e) { } return locales[e]; }
function getSetGlobalLocale(e, t) { var o; return e && ((o = isUndefined(t) ? getLocale(e) : defineLocale(e, t)) ? globalLocale = o : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), globalLocale._abbr; }
function defineLocale(e, t) { if (null !== t) {
    var o, r = baseConfig;
    if (t.abbr = e, null != locales[e])
        deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = locales[e]._config;
    else if (null != t.parentLocale)
        if (null != locales[t.parentLocale])
            r = locales[t.parentLocale]._config;
        else {
            if (null == (o = loadLocale(t.parentLocale)))
                return localeFamilies[t.parentLocale] || (localeFamilies[t.parentLocale] = []), localeFamilies[t.parentLocale].push({ name: e, config: t }), null;
            r = o._config;
        }
    return locales[e] = new Locale(mergeConfigs(r, t)), localeFamilies[e] && localeFamilies[e].forEach(function (e) { defineLocale(e.name, e.config); }), getSetGlobalLocale(e), locales[e];
} return delete locales[e], null; }
function updateLocale(e, t) { if (null != t) {
    var o, r, n = baseConfig;
    null != (r = loadLocale(e)) && (n = r._config), (o = new Locale(t = mergeConfigs(n, t))).parentLocale = locales[e], locales[e] = o, getSetGlobalLocale(e);
}
else
    null != locales[e] && (null != locales[e].parentLocale ? locales[e] = locales[e].parentLocale : null != locales[e] && delete locales[e]); return locales[e]; }
function getLocale(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return globalLocale; if (!isArray(e)) {
    if (t = loadLocale(e))
        return t;
    e = [e];
} return chooseLocale(e); }
function listLocales() { return keys(locales); }
function checkOverflow(e) { var t, o = e._a; return o && -2 === getParsingFlags(e).overflow && (t = o[MONTH] < 0 || o[MONTH] > 11 ? MONTH : o[DATE] < 1 || o[DATE] > daysInMonth(o[YEAR], o[MONTH]) ? DATE : o[HOUR] < 0 || o[HOUR] > 24 || 24 === o[HOUR] && (0 !== o[MINUTE] || 0 !== o[SECOND] || 0 !== o[MILLISECOND]) ? HOUR : o[MINUTE] < 0 || o[MINUTE] > 59 ? MINUTE : o[SECOND] < 0 || o[SECOND] > 59 ? SECOND : o[MILLISECOND] < 0 || o[MILLISECOND] > 999 ? MILLISECOND : -1, getParsingFlags(e)._overflowDayOfYear && (t < YEAR || t > DATE) && (t = DATE), getParsingFlags(e)._overflowWeeks && -1 === t && (t = WEEK), getParsingFlags(e)._overflowWeekday && -1 === t && (t = WEEKDAY), getParsingFlags(e).overflow = t), e; }
function defaults(e, t, o) { return null != e ? e : null != t ? t : o; }
function currentDateArray(e) { var t = new Date(hooks.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]; }
function configFromArray(e) { var t, o, r, n, a, s = []; if (!e._d) {
    for (r = currentDateArray(e), e._w && null == e._a[DATE] && null == e._a[MONTH] && dayOfYearFromWeekInfo(e), null != e._dayOfYear && (a = defaults(e._a[YEAR], r[YEAR]), (e._dayOfYear > daysInYear(a) || 0 === e._dayOfYear) && (getParsingFlags(e)._overflowDayOfYear = !0), o = createUTCDate(a, 0, e._dayOfYear), e._a[MONTH] = o.getUTCMonth(), e._a[DATE] = o.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t)
        e._a[t] = s[t] = r[t];
    for (; t < 7; t++)
        e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
    24 === e._a[HOUR] && 0 === e._a[MINUTE] && 0 === e._a[SECOND] && 0 === e._a[MILLISECOND] && (e._nextDay = !0, e._a[HOUR] = 0), e._d = (e._useUTC ? createUTCDate : createDate).apply(null, s), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[HOUR] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (getParsingFlags(e).weekdayMismatch = !0);
} }
function dayOfYearFromWeekInfo(e) { var t, o, r, n, a, s, i, l; if (null != (t = e._w).GG || null != t.W || null != t.E)
    a = 1, s = 4, o = defaults(t.GG, e._a[YEAR], weekOfYear(createLocal(), 1, 4).year), r = defaults(t.W, 1), ((n = defaults(t.E, 1)) < 1 || n > 7) && (l = !0);
else {
    a = e._locale._week.dow, s = e._locale._week.doy;
    var u = weekOfYear(createLocal(), a, s);
    o = defaults(t.gg, e._a[YEAR], u.year), r = defaults(t.w, u.week), null != t.d ? ((n = t.d) < 0 || n > 6) && (l = !0) : null != t.e ? (n = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : n = a;
} r < 1 || r > weeksInYear(o, a, s) ? getParsingFlags(e)._overflowWeeks = !0 : null != l ? getParsingFlags(e)._overflowWeekday = !0 : (i = dayOfYearFromWeeks(o, r, n, a, s), e._a[YEAR] = i.year, e._dayOfYear = i.dayOfYear); }
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], isoTimes = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
function configFromISO(e) { var t, o, r, n, a, s, i = e._i, l = extendedIsoRegex.exec(i) || basicIsoRegex.exec(i); if (l) {
    for (getParsingFlags(e).iso = !0, t = 0, o = isoDates.length; t < o; t++)
        if (isoDates[t][1].exec(l[1])) {
            n = isoDates[t][0], r = !1 !== isoDates[t][2];
            break;
        }
    if (null == n)
        return void (e._isValid = !1);
    if (l[3]) {
        for (t = 0, o = isoTimes.length; t < o; t++)
            if (isoTimes[t][1].exec(l[3])) {
                a = (l[2] || " ") + isoTimes[t][0];
                break;
            }
        if (null == a)
            return void (e._isValid = !1);
    }
    if (!r && null != a)
        return void (e._isValid = !1);
    if (l[4]) {
        if (!tzRegex.exec(l[4]))
            return void (e._isValid = !1);
        s = "Z";
    }
    e._f = n + (a || "") + (s || ""), configFromStringAndFormat(e);
}
else
    e._isValid = !1; }
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function extractFromRFC2822Strings(e, t, o, r, n, a) { var s = [untruncateYear(e), defaultLocaleMonthsShort.indexOf(t), parseInt(o, 10), parseInt(r, 10), parseInt(n, 10)]; return a && s.push(parseInt(a, 10)), s; }
function untruncateYear(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t; }
function preprocessRFC2822(e) { return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""); }
function checkWeekday(e, t, o) { return !e || defaultLocaleWeekdaysShort.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (getParsingFlags(o).weekdayMismatch = !0, o._isValid = !1, !1); }
var obsOffsets = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
function calculateOffset(e, t, o) { if (e)
    return obsOffsets[e]; if (t)
    return 0; var r = parseInt(o, 10), n = r % 100; return (r - n) / 100 * 60 + n; }
function configFromRFC2822(e) { var t = rfc2822.exec(preprocessRFC2822(e._i)); if (t) {
    var o = extractFromRFC2822Strings(t[4], t[3], t[2], t[5], t[6], t[7]);
    if (!checkWeekday(t[1], o, e))
        return;
    e._a = o, e._tzm = calculateOffset(t[8], t[9], t[10]), e._d = createUTCDate.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), getParsingFlags(e).rfc2822 = !0;
}
else
    e._isValid = !1; }
function configFromString(e) { var t = aspNetJsonRegex.exec(e._i); null === t ? (configFromISO(e), !1 === e._isValid && (delete e._isValid, configFromRFC2822(e), !1 === e._isValid && (delete e._isValid, hooks.createFromInputFallback(e)))) : e._d = new Date(+t[1]); }
function configFromStringAndFormat(e) { if (e._f !== hooks.ISO_8601)
    if (e._f !== hooks.RFC_2822) {
        e._a = [], getParsingFlags(e).empty = !0;
        var t, o, r, n, a, s = "" + e._i, i = s.length, l = 0;
        for (r = expandFormat(e._f, e._locale).match(formattingTokens) || [], t = 0; t < r.length; t++)
            (o = (s.match(getParseRegexForToken(n = r[t], e)) || [])[0]) && ((a = s.substr(0, s.indexOf(o))).length > 0 && getParsingFlags(e).unusedInput.push(a), s = s.slice(s.indexOf(o) + o.length), l += o.length), formatTokenFunctions[n] ? (o ? getParsingFlags(e).empty = !1 : getParsingFlags(e).unusedTokens.push(n), addTimeToArrayFromToken(n, o, e)) : e._strict && !o && getParsingFlags(e).unusedTokens.push(n);
        getParsingFlags(e).charsLeftOver = i - l, s.length > 0 && getParsingFlags(e).unusedInput.push(s), e._a[HOUR] <= 12 && !0 === getParsingFlags(e).bigHour && e._a[HOUR] > 0 && (getParsingFlags(e).bigHour = void 0), getParsingFlags(e).parsedDateParts = e._a.slice(0), getParsingFlags(e).meridiem = e._meridiem, e._a[HOUR] = meridiemFixWrap(e._locale, e._a[HOUR], e._meridiem), configFromArray(e), checkOverflow(e);
    }
    else
        configFromRFC2822(e);
else
    configFromISO(e); }
function meridiemFixWrap(e, t, o) { var r; return null == o ? t : null != e.meridiemHour ? e.meridiemHour(t, o) : null != e.isPM ? ((r = e.isPM(o)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t; }
function configFromStringAndArray(e) { var t, o, r, n, a; if (0 === e._f.length)
    return getParsingFlags(e).invalidFormat = !0, void (e._d = new Date(NaN)); for (n = 0; n < e._f.length; n++)
    a = 0, t = copyConfig({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[n], configFromStringAndFormat(t), isValid(t) && (a += getParsingFlags(t).charsLeftOver, a += 10 * getParsingFlags(t).unusedTokens.length, getParsingFlags(t).score = a, (null == r || a < r) && (r = a, o = t)); extend(e, o || t); }
function configFromObject(e) { if (!e._d) {
    var t = normalizeObjectUnits(e._i);
    e._a = map([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) { return e && parseInt(e, 10); }), configFromArray(e);
} }
function createFromConfig(e) { var t = new Moment(checkOverflow(prepareConfig(e))); return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t; }
function prepareConfig(e) { var t = e._i, o = e._f; return e._locale = e._locale || getLocale(e._l), null === t || void 0 === o && "" === t ? createInvalid({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), isMoment(t) ? new Moment(checkOverflow(t)) : (isDate(t) ? e._d = t : isArray(o) ? configFromStringAndArray(e) : o ? configFromStringAndFormat(e) : configFromInput(e), isValid(e) || (e._d = null), e)); }
function configFromInput(e) { var t = e._i; isUndefined(t) ? e._d = new Date(hooks.now()) : isDate(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? configFromString(e) : isArray(t) ? (e._a = map(t.slice(0), function (e) { return parseInt(e, 10); }), configFromArray(e)) : isObject(t) ? configFromObject(e) : isNumber(t) ? e._d = new Date(t) : hooks.createFromInputFallback(e); }
function createLocalOrUTC(e, t, o, r, n) { var a = {}; return !0 !== o && !1 !== o || (r = o, o = void 0), (isObject(e) && isObjectEmpty(e) || isArray(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = o, a._i = e, a._f = t, a._strict = r, createFromConfig(a); }
function createLocal(e, t, o, r) { return createLocalOrUTC(e, t, o, r, !1); }
hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")); }), hooks.ISO_8601 = function () { }, hooks.RFC_2822 = function () { };
var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = createLocal.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : createInvalid(); }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = createLocal.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : createInvalid(); });
function pickBy(e, t) { var o, r; if (1 === t.length && isArray(t[0]) && (t = t[0]), !t.length)
    return createLocal(); for (o = t[0], r = 1; r < t.length; ++r)
    t[r].isValid() && !t[r][e](o) || (o = t[r]); return o; }
function min() { return pickBy("isBefore", [].slice.call(arguments, 0)); }
function max() { return pickBy("isAfter", [].slice.call(arguments, 0)); }
var now = function () { return Date.now ? Date.now() : +new Date; }, ordering = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
function isDurationValid(e) { for (var t in e)
    if (-1 === indexOf.call(ordering, t) || null != e[t] && isNaN(e[t]))
        return !1; for (var o = !1, r = 0; r < ordering.length; ++r)
    if (e[ordering[r]]) {
        if (o)
            return !1;
        parseFloat(e[ordering[r]]) !== toInt(e[ordering[r]]) && (o = !0);
    } return !0; }
function isValid$1() { return this._isValid; }
function createInvalid$1() { return createDuration(NaN); }
function Duration(e) { var t = normalizeObjectUnits(e), o = t.year || 0, r = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, s = t.day || 0, i = t.hour || 0, l = t.minute || 0, u = t.second || 0, c = t.millisecond || 0; this._isValid = isDurationValid(t), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * i * 60 * 60, this._days = +s + 7 * a, this._months = +n + 3 * r + 12 * o, this._data = {}, this._locale = getLocale(), this._bubble(); }
function isDuration(e) { return e instanceof Duration; }
function absRound(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e); }
function offset(e, t) { addFormatToken(e, 0, 0, function () { var e = this.utcOffset(), o = "+"; return e < 0 && (e = -e, o = "-"), o + zeroFill(~~(e / 60), 2) + t + zeroFill(~~e % 60, 2); }); }
offset("Z", ":"), offset("ZZ", ""), addRegexToken("Z", matchShortOffset), addRegexToken("ZZ", matchShortOffset), addParseToken(["Z", "ZZ"], function (e, t, o) { o._useUTC = !0, o._tzm = offsetFromString(matchShortOffset, e); });
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(e, t) { var o = (t || "").match(e); if (null === o)
    return null; var r = ((o[o.length - 1] || []) + "").match(chunkOffset) || ["-", 0, 0], n = 60 * r[1] + toInt(r[2]); return 0 === n ? 0 : "+" === r[0] ? n : -n; }
function cloneWithOffset(e, t) { var o, r; return t._isUTC ? (o = t.clone(), r = (isMoment(e) || isDate(e) ? e.valueOf() : createLocal(e).valueOf()) - o.valueOf(), o._d.setTime(o._d.valueOf() + r), hooks.updateOffset(o, !1), o) : createLocal(e).local(); }
function getDateOffset(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15); }
function getSetOffset(e, t, o) { var r, n = this._offset || 0; if (!this.isValid())
    return null != e ? this : NaN; if (null != e) {
    if ("string" == typeof e) {
        if (null === (e = offsetFromString(matchShortOffset, e)))
            return this;
    }
    else
        Math.abs(e) < 16 && !o && (e *= 60);
    return !this._isUTC && t && (r = getDateOffset(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? addSubtract(this, createDuration(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, hooks.updateOffset(this, !0), this._changeInProgress = null)), this;
} return this._isUTC ? n : getDateOffset(this); }
function getSetZone(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset(); }
function setOffsetToUTC(e) { return this.utcOffset(0, e); }
function setOffsetToLocal(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(getDateOffset(this), "m")), this; }
function setOffsetToParsedOffset() { if (null != this._tzm)
    this.utcOffset(this._tzm, !1, !0);
else if ("string" == typeof this._i) {
    var e = offsetFromString(matchOffset, this._i);
    null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
} return this; }
function hasAlignedHourOffset(e) { return !!this.isValid() && (e = e ? createLocal(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0); }
function isDaylightSavingTime() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset(); }
function isDaylightSavingTimeShifted() { if (!isUndefined(this._isDSTShifted))
    return this._isDSTShifted; var e = {}; if (copyConfig(e, this), (e = prepareConfig(e))._a) {
    var t = e._isUTC ? createUTC(e._a) : createLocal(e._a);
    this._isDSTShifted = this.isValid() && compareArrays(e._a, t.toArray()) > 0;
}
else
    this._isDSTShifted = !1; return this._isDSTShifted; }
function isLocal() { return !!this.isValid() && !this._isUTC; }
function isUtcOffset() { return !!this.isValid() && this._isUTC; }
function isUtc() { return !!this.isValid() && this._isUTC && 0 === this._offset; }
hooks.updateOffset = function () { };
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(e, t) { var o, r, n, a = e, s = null; return isDuration(e) ? a = { ms: e._milliseconds, d: e._days, M: e._months } : isNumber(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = aspNetRegex.exec(e)) ? (o = "-" === s[1] ? -1 : 1, a = { y: 0, d: toInt(s[DATE]) * o, h: toInt(s[HOUR]) * o, m: toInt(s[MINUTE]) * o, s: toInt(s[SECOND]) * o, ms: toInt(absRound(1e3 * s[MILLISECOND])) * o }) : (s = isoRegex.exec(e)) ? a = { y: parseIso(s[2], o = "-" === s[1] ? -1 : 1), M: parseIso(s[3], o), w: parseIso(s[4], o), d: parseIso(s[5], o), h: parseIso(s[6], o), m: parseIso(s[7], o), s: parseIso(s[8], o) } : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (n = momentsDifference(createLocal(a.from), createLocal(a.to)), (a = {}).ms = n.milliseconds, a.M = n.months), r = new Duration(a), isDuration(e) && hasOwnProp(e, "_locale") && (r._locale = e._locale), r; }
function parseIso(e, t) { var o = e && parseFloat(e.replace(",", ".")); return (isNaN(o) ? 0 : o) * t; }
function positiveMomentsDifference(e, t) { var o = {}; return o.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(o.months, "M").isAfter(t) && --o.months, o.milliseconds = +t - +e.clone().add(o.months, "M"), o; }
function momentsDifference(e, t) { var o; return e.isValid() && t.isValid() ? (t = cloneWithOffset(t, e), e.isBefore(t) ? o = positiveMomentsDifference(e, t) : ((o = positiveMomentsDifference(t, e)).milliseconds = -o.milliseconds, o.months = -o.months), o) : { milliseconds: 0, months: 0 }; }
function createAdder(e, t) { return function (o, r) { var n; return null === r || isNaN(+r) || (deprecateSimple(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = o, o = r, r = n), addSubtract(this, createDuration(o = "string" == typeof o ? +o : o, r), e), this; }; }
function addSubtract(e, t, o, r) { var n = t._milliseconds, a = absRound(t._days), s = absRound(t._months); e.isValid() && (r = null == r || r, s && setMonth(e, get(e, "Month") + s * o), a && set$1(e, "Date", get(e, "Date") + a * o), n && e._d.setTime(e._d.valueOf() + n * o), r && hooks.updateOffset(e, a || s)); }
createDuration.fn = Duration.prototype, createDuration.invalid = createInvalid$1;
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function getCalendarFormat(e, t) { var o = e.diff(t, "days", !0); return o < -6 ? "sameElse" : o < -1 ? "lastWeek" : o < 0 ? "lastDay" : o < 1 ? "sameDay" : o < 2 ? "nextDay" : o < 7 ? "nextWeek" : "sameElse"; }
function calendar$1(e, t) { var o = e || createLocal(), r = cloneWithOffset(o, this).startOf("day"), n = hooks.calendarFormat(this, r) || "sameElse", a = t && (isFunction(t[n]) ? t[n].call(this, o) : t[n]); return this.format(a || this.localeData().calendar(n, this, createLocal(o))); }
function clone() { return new Moment(this); }
function isAfter(e, t) { var o = isMoment(e) ? e : createLocal(e); return !(!this.isValid() || !o.isValid()) && ("millisecond" === (t = normalizeUnits(t) || "millisecond") ? this.valueOf() > o.valueOf() : o.valueOf() < this.clone().startOf(t).valueOf()); }
function isBefore(e, t) { var o = isMoment(e) ? e : createLocal(e); return !(!this.isValid() || !o.isValid()) && ("millisecond" === (t = normalizeUnits(t) || "millisecond") ? this.valueOf() < o.valueOf() : this.clone().endOf(t).valueOf() < o.valueOf()); }
function isBetween(e, t, o, r) { var n = isMoment(e) ? e : createLocal(e), a = isMoment(t) ? t : createLocal(t); return !!(this.isValid() && n.isValid() && a.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(n, o) : !this.isBefore(n, o)) && (")" === r[1] ? this.isBefore(a, o) : !this.isAfter(a, o)); }
function isSame(e, t) { var o, r = isMoment(e) ? e : createLocal(e); return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = normalizeUnits(t) || "millisecond") ? this.valueOf() === r.valueOf() : (o = r.valueOf(), this.clone().startOf(t).valueOf() <= o && o <= this.clone().endOf(t).valueOf())); }
function isSameOrAfter(e, t) { return this.isSame(e, t) || this.isAfter(e, t); }
function isSameOrBefore(e, t) { return this.isSame(e, t) || this.isBefore(e, t); }
function diff(e, t, o) { var r, n, a; if (!this.isValid())
    return NaN; if (!(r = cloneWithOffset(e, this)).isValid())
    return NaN; switch (n = 6e4 * (r.utcOffset() - this.utcOffset()), t = normalizeUnits(t)) {
    case "year":
        a = monthDiff(this, r) / 12;
        break;
    case "month":
        a = monthDiff(this, r);
        break;
    case "quarter":
        a = monthDiff(this, r) / 3;
        break;
    case "second":
        a = (this - r) / 1e3;
        break;
    case "minute":
        a = (this - r) / 6e4;
        break;
    case "hour":
        a = (this - r) / 36e5;
        break;
    case "day":
        a = (this - r - n) / 864e5;
        break;
    case "week":
        a = (this - r - n) / 6048e5;
        break;
    default: a = this - r;
} return o ? a : absFloor(a); }
function monthDiff(e, t) { var o = 12 * (t.year() - e.year()) + (t.month() - e.month()), r = e.clone().add(o, "months"); return -(o + (t - r < 0 ? (t - r) / (r - e.clone().add(o - 1, "months")) : (t - r) / (e.clone().add(o + 1, "months") - r))) || 0; }
function toString() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ"); }
function toISOString(e) { if (!this.isValid())
    return null; var t = !0 !== e, o = t ? this.clone().utc() : this; return o.year() < 0 || o.year() > 9999 ? formatMoment(o, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : isFunction(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", formatMoment(o, "Z")) : formatMoment(o, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"); }
function inspect() { if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)"; var e = "moment", t = ""; this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var o = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"; return this.format(o + r + "-MM-DD[T]HH:mm:ss.SSS" + t + '[")]'); }
function format(e) { e || (e = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat); var t = formatMoment(this, e); return this.localeData().postformat(t); }
function from(e, t) { return this.isValid() && (isMoment(e) && e.isValid() || createLocal(e).isValid()) ? createDuration({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate(); }
function fromNow(e) { return this.from(createLocal(), e); }
function to(e, t) { return this.isValid() && (isMoment(e) && e.isValid() || createLocal(e).isValid()) ? createDuration({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate(); }
function toNow(e) { return this.to(createLocal(), e); }
function locale(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = getLocale(e)) && (this._locale = t), this); }
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) { return void 0 === e ? this.localeData() : this.locale(e); });
function localeData() { return this._locale; }
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
function mod$1(e, t) { return (e % t + t) % t; }
function localStartOfDate(e, t, o) { return e < 100 && e >= 0 ? new Date(e + 400, t, o) - MS_PER_400_YEARS : new Date(e, t, o).valueOf(); }
function utcStartOfDate(e, t, o) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, o) - MS_PER_400_YEARS : Date.UTC(e, t, o); }
function startOf(e) { var t; if (void 0 === (e = normalizeUnits(e)) || "millisecond" === e || !this.isValid())
    return this; var o = this._isUTC ? utcStartOfDate : localStartOfDate; switch (e) {
    case "year":
        t = o(this.year(), 0, 1);
        break;
    case "quarter":
        t = o(this.year(), this.month() - this.month() % 3, 1);
        break;
    case "month":
        t = o(this.year(), this.month(), 1);
        break;
    case "week":
        t = o(this.year(), this.month(), this.date() - this.weekday());
        break;
    case "isoWeek":
        t = o(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
    case "day":
    case "date":
        t = o(this.year(), this.month(), this.date());
        break;
    case "hour":
        t = this._d.valueOf(), t -= mod$1(t + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
        break;
    case "minute":
        t = this._d.valueOf(), t -= mod$1(t, MS_PER_MINUTE);
        break;
    case "second": t = this._d.valueOf(), t -= mod$1(t, MS_PER_SECOND);
} return this._d.setTime(t), hooks.updateOffset(this, !0), this; }
function endOf(e) { var t; if (void 0 === (e = normalizeUnits(e)) || "millisecond" === e || !this.isValid())
    return this; var o = this._isUTC ? utcStartOfDate : localStartOfDate; switch (e) {
    case "year":
        t = o(this.year() + 1, 0, 1) - 1;
        break;
    case "quarter":
        t = o(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
    case "month":
        t = o(this.year(), this.month() + 1, 1) - 1;
        break;
    case "week":
        t = o(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
    case "isoWeek":
        t = o(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
    case "day":
    case "date":
        t = o(this.year(), this.month(), this.date() + 1) - 1;
        break;
    case "hour":
        t = this._d.valueOf(), t += MS_PER_HOUR - mod$1(t + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
        break;
    case "minute":
        t = this._d.valueOf(), t += MS_PER_MINUTE - mod$1(t, MS_PER_MINUTE) - 1;
        break;
    case "second": t = this._d.valueOf(), t += MS_PER_SECOND - mod$1(t, MS_PER_SECOND) - 1;
} return this._d.setTime(t), hooks.updateOffset(this, !0), this; }
function valueOf() { return this._d.valueOf() - 6e4 * (this._offset || 0); }
function unix() { return Math.floor(this.valueOf() / 1e3); }
function toDate() { return new Date(this.valueOf()); }
function toArray() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]; }
function toObject() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() }; }
function toJSON() { return this.isValid() ? this.toISOString() : null; }
function isValid$2() { return isValid(this); }
function parsingFlags() { return extend({}, getParsingFlags(this)); }
function invalidAt() { return getParsingFlags(this).overflow; }
function creationData() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict }; }
function addWeekYearFormatToken(e, t) { addFormatToken(0, [e, e.length], 0, t); }
function getSetWeekYear(e) { return getSetWeekYearHelper.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy); }
function getSetISOWeekYear(e) { return getSetWeekYearHelper.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4); }
function getISOWeeksInYear() { return weeksInYear(this.year(), 1, 4); }
function getWeeksInYear() { var e = this.localeData()._week; return weeksInYear(this.year(), e.dow, e.doy); }
function getSetWeekYearHelper(e, t, o, r, n) { var a; return null == e ? weekOfYear(this, r, n).year : (t > (a = weeksInYear(e, r, n)) && (t = a), setWeekAll.call(this, e, t, o, r, n)); }
function setWeekAll(e, t, o, r, n) { var a = dayOfYearFromWeeks(e, t, o, r, n), s = createUTCDate(a.year, 0, a.dayOfYear); return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this; }
function getSetQuarter(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3); }
addFormatToken(0, ["gg", 2], 0, function () { return this.weekYear() % 100; }), addFormatToken(0, ["GG", 2], 0, function () { return this.isoWeekYear() % 100; }), addWeekYearFormatToken("gggg", "weekYear"), addWeekYearFormatToken("ggggg", "weekYear"), addWeekYearFormatToken("GGGG", "isoWeekYear"), addWeekYearFormatToken("GGGGG", "isoWeekYear"), addUnitAlias("weekYear", "gg"), addUnitAlias("isoWeekYear", "GG"), addUnitPriority("weekYear", 1), addUnitPriority("isoWeekYear", 1), addRegexToken("G", matchSigned), addRegexToken("g", matchSigned), addRegexToken("GG", match1to2, match2), addRegexToken("gg", match1to2, match2), addRegexToken("GGGG", match1to4, match4), addRegexToken("gggg", match1to4, match4), addRegexToken("GGGGG", match1to6, match6), addRegexToken("ggggg", match1to6, match6), addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, o, r) { t[r.substr(0, 2)] = toInt(e); }), addWeekParseToken(["gg", "GG"], function (e, t, o, r) { t[r] = hooks.parseTwoDigitYear(e); }), addFormatToken("Q", 0, "Qo", "quarter"), addUnitAlias("quarter", "Q"), addUnitPriority("quarter", 7), addRegexToken("Q", match1), addParseToken("Q", function (e, t) { t[MONTH] = 3 * (toInt(e) - 1); }), addFormatToken("D", ["DD", 2], "Do", "date"), addUnitAlias("date", "D"), addUnitPriority("date", 9), addRegexToken("D", match1to2), addRegexToken("DD", match1to2, match2), addRegexToken("Do", function (e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient; }), addParseToken(["D", "DD"], DATE), addParseToken("Do", function (e, t) { t[DATE] = toInt(e.match(match1to2)[0]); });
var getSetDayOfMonth = makeGetSet("Date", !0);
function getSetDayOfYear(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d"); }
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), addUnitAlias("dayOfYear", "DDD"), addUnitPriority("dayOfYear", 4), addRegexToken("DDD", match1to3), addRegexToken("DDDD", match3), addParseToken(["DDD", "DDDD"], function (e, t, o) { o._dayOfYear = toInt(e); }), addFormatToken("m", ["mm", 2], 0, "minute"), addUnitAlias("minute", "m"), addUnitPriority("minute", 14), addRegexToken("m", match1to2), addRegexToken("mm", match1to2, match2), addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", !1);
addFormatToken("s", ["ss", 2], 0, "second"), addUnitAlias("second", "s"), addUnitPriority("second", 15), addRegexToken("s", match1to2), addRegexToken("ss", match1to2, match2), addParseToken(["s", "ss"], SECOND);
var token, getSetSecond = makeGetSet("Seconds", !1);
for (addFormatToken("S", 0, 0, function () { return ~~(this.millisecond() / 100); }), addFormatToken(0, ["SS", 2], 0, function () { return ~~(this.millisecond() / 10); }), addFormatToken(0, ["SSS", 3], 0, "millisecond"), addFormatToken(0, ["SSSS", 4], 0, function () { return 10 * this.millisecond(); }), addFormatToken(0, ["SSSSS", 5], 0, function () { return 100 * this.millisecond(); }), addFormatToken(0, ["SSSSSS", 6], 0, function () { return 1e3 * this.millisecond(); }), addFormatToken(0, ["SSSSSSS", 7], 0, function () { return 1e4 * this.millisecond(); }), addFormatToken(0, ["SSSSSSSS", 8], 0, function () { return 1e5 * this.millisecond(); }), addFormatToken(0, ["SSSSSSSSS", 9], 0, function () { return 1e6 * this.millisecond(); }), addUnitAlias("millisecond", "ms"), addUnitPriority("millisecond", 16), addRegexToken("S", match1to3, match1), addRegexToken("SS", match1to3, match2), addRegexToken("SSS", match1to3, match3), token = "SSSS"; token.length <= 9; token += "S")
    addRegexToken(token, matchUnsigned);
function parseMs(e, t) { t[MILLISECOND] = toInt(1e3 * ("0." + e)); }
for (token = "S"; token.length <= 9; token += "S")
    addParseToken(token, parseMs);
var getSetMillisecond = makeGetSet("Milliseconds", !1);
function getZoneAbbr() { return this._isUTC ? "UTC" : ""; }
function getZoneName() { return this._isUTC ? "Coordinated Universal Time" : ""; }
addFormatToken("z", 0, 0, "zoneAbbr"), addFormatToken("zz", 0, 0, "zoneName");
var proto = Moment.prototype;
function createUnix(e) { return createLocal(1e3 * e); }
function createInZone() { return createLocal.apply(null, arguments).parseZone(); }
function preParsePostFormat(e) { return e; }
proto.add = add, proto.calendar = calendar$1, proto.clone = clone, proto.diff = diff, proto.endOf = endOf, proto.format = format, proto.from = from, proto.fromNow = fromNow, proto.to = to, proto.toNow = toNow, proto.get = stringGet, proto.invalidAt = invalidAt, proto.isAfter = isAfter, proto.isBefore = isBefore, proto.isBetween = isBetween, proto.isSame = isSame, proto.isSameOrAfter = isSameOrAfter, proto.isSameOrBefore = isSameOrBefore, proto.isValid = isValid$2, proto.lang = lang, proto.locale = locale, proto.localeData = localeData, proto.max = prototypeMax, proto.min = prototypeMin, proto.parsingFlags = parsingFlags, proto.set = stringSet, proto.startOf = startOf, proto.subtract = subtract, proto.toArray = toArray, proto.toObject = toObject, proto.toDate = toDate, proto.toISOString = toISOString, proto.inspect = inspect, proto.toJSON = toJSON, proto.toString = toString, proto.unix = unix, proto.valueOf = valueOf, proto.creationData = creationData, proto.year = getSetYear, proto.isLeapYear = getIsLeapYear, proto.weekYear = getSetWeekYear, proto.isoWeekYear = getSetISOWeekYear, proto.quarter = proto.quarters = getSetQuarter, proto.month = getSetMonth, proto.daysInMonth = getDaysInMonth, proto.week = proto.weeks = getSetWeek, proto.isoWeek = proto.isoWeeks = getSetISOWeek, proto.weeksInYear = getWeeksInYear, proto.isoWeeksInYear = getISOWeeksInYear, proto.date = getSetDayOfMonth, proto.day = proto.days = getSetDayOfWeek, proto.weekday = getSetLocaleDayOfWeek, proto.isoWeekday = getSetISODayOfWeek, proto.dayOfYear = getSetDayOfYear, proto.hour = proto.hours = getSetHour, proto.minute = proto.minutes = getSetMinute, proto.second = proto.seconds = getSetSecond, proto.millisecond = proto.milliseconds = getSetMillisecond, proto.utcOffset = getSetOffset, proto.utc = setOffsetToUTC, proto.local = setOffsetToLocal, proto.parseZone = setOffsetToParsedOffset, proto.hasAlignedHourOffset = hasAlignedHourOffset, proto.isDST = isDaylightSavingTime, proto.isLocal = isLocal, proto.isUtcOffset = isUtcOffset, proto.isUtc = isUtc, proto.isUTC = isUtc, proto.zoneAbbr = getZoneAbbr, proto.zoneName = getZoneName, proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth), proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth), proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear), proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone), proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
var proto$1 = Locale.prototype;
function get$1(e, t, o, r) { var n = getLocale(), a = createUTC().set(r, t); return n[o](a, e); }
function listMonthsImpl(e, t, o) { if (isNumber(e) && (t = e, e = void 0), e = e || "", null != t)
    return get$1(e, t, o, "month"); var r, n = []; for (r = 0; r < 12; r++)
    n[r] = get$1(e, r, o, "month"); return n; }
function listWeekdaysImpl(e, t, o, r) { "boolean" == typeof e ? (isNumber(t) && (o = t, t = void 0), t = t || "") : (o = t = e, e = !1, isNumber(t) && (o = t, t = void 0), t = t || ""); var n, a = getLocale(), s = e ? a._week.dow : 0; if (null != o)
    return get$1(t, (o + s) % 7, r, "day"); var i = []; for (n = 0; n < 7; n++)
    i[n] = get$1(t, (n + s) % 7, r, "day"); return i; }
function listMonths(e, t) { return listMonthsImpl(e, t, "months"); }
function listMonthsShort(e, t) { return listMonthsImpl(e, t, "monthsShort"); }
function listWeekdays(e, t, o) { return listWeekdaysImpl(e, t, o, "weekdays"); }
function listWeekdaysShort(e, t, o) { return listWeekdaysImpl(e, t, o, "weekdaysShort"); }
function listWeekdaysMin(e, t, o) { return listWeekdaysImpl(e, t, o, "weekdaysMin"); }
proto$1.calendar = calendar, proto$1.longDateFormat = longDateFormat, proto$1.invalidDate = invalidDate, proto$1.ordinal = ordinal, proto$1.preparse = preParsePostFormat, proto$1.postformat = preParsePostFormat, proto$1.relativeTime = relativeTime, proto$1.pastFuture = pastFuture, proto$1.set = set, proto$1.months = localeMonths, proto$1.monthsShort = localeMonthsShort, proto$1.monthsParse = localeMonthsParse, proto$1.monthsRegex = monthsRegex, proto$1.monthsShortRegex = monthsShortRegex, proto$1.week = localeWeek, proto$1.firstDayOfYear = localeFirstDayOfYear, proto$1.firstDayOfWeek = localeFirstDayOfWeek, proto$1.weekdays = localeWeekdays, proto$1.weekdaysMin = localeWeekdaysMin, proto$1.weekdaysShort = localeWeekdaysShort, proto$1.weekdaysParse = localeWeekdaysParse, proto$1.weekdaysRegex = weekdaysRegex, proto$1.weekdaysShortRegex = weekdaysShortRegex, proto$1.weekdaysMinRegex = weekdaysMinRegex, proto$1.isPM = localeIsPM, proto$1.meridiem = localeMeridiem, getSetGlobalLocale("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) { var t = e % 10; return e + (1 === toInt(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"); } }), hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale), hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
var mathAbs = Math.abs;
function abs() { var e = this._data; return this._milliseconds = mathAbs(this._milliseconds), this._days = mathAbs(this._days), this._months = mathAbs(this._months), e.milliseconds = mathAbs(e.milliseconds), e.seconds = mathAbs(e.seconds), e.minutes = mathAbs(e.minutes), e.hours = mathAbs(e.hours), e.months = mathAbs(e.months), e.years = mathAbs(e.years), this; }
function addSubtract$1(e, t, o, r) { var n = createDuration(t, o); return e._milliseconds += r * n._milliseconds, e._days += r * n._days, e._months += r * n._months, e._bubble(); }
function add$1(e, t) { return addSubtract$1(this, e, t, 1); }
function subtract$1(e, t) { return addSubtract$1(this, e, t, -1); }
function absCeil(e) { return e < 0 ? Math.floor(e) : Math.ceil(e); }
function bubble() { var e, t, o, r, n, a = this._milliseconds, s = this._days, i = this._months, l = this._data; return a >= 0 && s >= 0 && i >= 0 || a <= 0 && s <= 0 && i <= 0 || (a += 864e5 * absCeil(monthsToDays(i) + s), s = 0, i = 0), l.milliseconds = a % 1e3, e = absFloor(a / 1e3), l.seconds = e % 60, t = absFloor(e / 60), l.minutes = t % 60, o = absFloor(t / 60), l.hours = o % 24, s += absFloor(o / 24), i += n = absFloor(daysToMonths(s)), s -= absCeil(monthsToDays(n)), r = absFloor(i / 12), i %= 12, l.days = s, l.months = i, l.years = r, this; }
function daysToMonths(e) { return 4800 * e / 146097; }
function monthsToDays(e) { return 146097 * e / 4800; }
function as(e) { if (!this.isValid())
    return NaN; var t, o, r = this._milliseconds; if ("month" === (e = normalizeUnits(e)) || "quarter" === e || "year" === e)
    switch (o = this._months + daysToMonths(t = this._days + r / 864e5), e) {
        case "month": return o;
        case "quarter": return o / 3;
        case "year": return o / 12;
    }
else
    switch (t = this._days + Math.round(monthsToDays(this._months)), e) {
        case "week": return t / 7 + r / 6048e5;
        case "day": return t + r / 864e5;
        case "hour": return 24 * t + r / 36e5;
        case "minute": return 1440 * t + r / 6e4;
        case "second": return 86400 * t + r / 1e3;
        case "millisecond": return Math.floor(864e5 * t) + r;
        default: throw new Error("Unknown unit " + e);
    } }
function valueOf$1() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * toInt(this._months / 12) : NaN; }
function makeAs(e) { return function () { return this.as(e); }; }
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
function clone$1() { return createDuration(this); }
function get$2(e) { return e = normalizeUnits(e), this.isValid() ? this[e + "s"]() : NaN; }
function makeGetter(e) { return function () { return this.isValid() ? this._data[e] : NaN; }; }
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() { return absFloor(this.days() / 7); }
var round = Math.round, thresholds = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
function substituteTimeAgo(e, t, o, r, n) { return n.relativeTime(t || 1, !!o, e, r); }
function relativeTime$1(e, t, o) { var r = createDuration(e).abs(), n = round(r.as("s")), a = round(r.as("m")), s = round(r.as("h")), i = round(r.as("d")), l = round(r.as("M")), u = round(r.as("y")), c = n <= thresholds.ss && ["s", n] || n < thresholds.s && ["ss", n] || a <= 1 && ["m"] || a < thresholds.m && ["mm", a] || s <= 1 && ["h"] || s < thresholds.h && ["hh", s] || i <= 1 && ["d"] || i < thresholds.d && ["dd", i] || l <= 1 && ["M"] || l < thresholds.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u]; return c[2] = t, c[3] = +e > 0, c[4] = o, substituteTimeAgo.apply(null, c); }
function getSetRelativeTimeRounding(e) { return void 0 === e ? round : "function" == typeof e && (round = e, !0); }
function getSetRelativeTimeThreshold(e, t) { return void 0 !== thresholds[e] && (void 0 === t ? thresholds[e] : (thresholds[e] = t, "s" === e && (thresholds.ss = t - 1), !0)); }
function humanize(e) { if (!this.isValid())
    return this.localeData().invalidDate(); var t = this.localeData(), o = relativeTime$1(this, !e, t); return e && (o = t.pastFuture(+this, o)), t.postformat(o); }
var abs$1 = Math.abs;
function sign(e) { return (e > 0) - (e < 0) || +e; }
function toISOString$1() { if (!this.isValid())
    return this.localeData().invalidDate(); var e, t, o = abs$1(this._milliseconds) / 1e3, r = abs$1(this._days), n = abs$1(this._months); e = absFloor(o / 60), t = absFloor(e / 60), o %= 60, e %= 60; var a = absFloor(n / 12), s = n %= 12, i = r, l = t, u = e, c = o ? o.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds(); if (!d)
    return "P0D"; var h = d < 0 ? "-" : "", f = sign(this._months) !== sign(d) ? "-" : "", m = sign(this._days) !== sign(d) ? "-" : "", p = sign(this._milliseconds) !== sign(d) ? "-" : ""; return h + "P" + (a ? f + a + "Y" : "") + (s ? f + s + "M" : "") + (i ? m + i + "D" : "") + (l || u || c ? "T" : "") + (l ? p + l + "H" : "") + (u ? p + u + "M" : "") + (c ? p + c + "S" : ""); }
var proto$2 = Duration.prototype;
function sortRows(e, t) { if (void 0 === e && (e = []), void 0 === t && (t = []), !e)
    return []; if (!t || 0 === t.length)
    return e; var o = t.length > 1; return e.slice(0).sort(function (e, r) { if (o) {
    for (var n = 0; n < t.length; n++) {
        var a = compareRows(e, r, t[n]);
        if (0 !== a)
            return a;
    }
    return 0;
} return compareRows(e, r, t[0]); }); }
function compareRows(e, t, o) { return e.group ? (e.group.children = sortRows(e.group.children), t.group.children = sortRows(t.group.children), e.group.column !== o.column ? 0 : ("A" === o.sortMode ? 1 : -1) * e.group.label.localeCompare(t.group.label)) : compareCell(e.cells[o.column], t.cells[o.column], o.sortMode); }
function filterRows(e, t, o, r) { return void 0 === e && (e = []), void 0 === t && (t = {}), void 0 === o && (o = ""), void 0 === r && (r = []), e ? t && Object.keys(t).length > 0 || o && r ? (n = t ? Object.keys(t) : [], e.filter(function (e) { if (o && r) {
    if (0 === r.length)
        return !0;
    for (var a = !1, s = 0; s < r.length; s++)
        if (e.cells[r[s]].value.toLowerCase().includes(o.toLocaleLowerCase())) {
            a = !0;
            break;
        }
    if (!a)
        return !1;
} return 0 === n.length || n.filter(function (o) { var r = t[o], n = e.cells[o]; return !(!n || !n.value) && (!!n.value.toLowerCase().includes(r.toLowerCase()) || void 0); }).length === n.length; })) : e : []; var n; }
function groupRows(e, t, o) { if (void 0 === e && (e = []), void 0 === t && (t = []), void 0 === o && (o = {}), !e)
    return []; if (!t || 0 === t.length)
    return e; var r = []; return e.forEach(function (e) { for (var n = t[0].column, a = e.cells[n].value, s = null, i = 0; i < r.length; i++) {
    var l = r[i];
    if (l.group.label === a) {
        s = l;
        break;
    }
} for (null === s && r.push(s = { group: { id: a, parent: null, column: n, expanded: !1, label: a, children: [], totals: {} }, cells: {} }), i = 1; i < t.length; i++) {
    for (var u = t[i], c = e.cells[u.column].value, d = null, h = 0; h < s.group.children.length; h++) {
        var f = s.group.children[h];
        if (f.group.label === c) {
            d = f;
            break;
        }
    }
    d || (adjustGroupId(d = { cells: {}, group: { id: c, parent: s, column: u.column, children: [], expanded: !1, label: c, totals: {} } }), s.group.children.push(d)), s = d;
} s.group.children.push(e), updateGroupTotal(s, o, e); }), adjustGroupsAvarage(r, o), r; }
function updateGroupTotal(e, t, o) { if (e && t) {
    var r = Object.keys(t);
    0 !== r.length && r.forEach(function (r) { var n = e.group.totals[r] || 0, a = o.cells[r], s = "NR" === a.obj.t, i = t[r]; switch (i) {
        case TotalMode.COUNT:
            e.group.totals[r] = n + 1;
            for (var l = e.group.parent; null != l;)
                l.group.totals[r] = (l.group.totals[r] || 0) + 1, l = l.group.parent;
            break;
        case TotalMode.SUM:
        case TotalMode.AVARAGE:
            if (s) {
                var u = numeral(a.obj.k);
                e.group.totals[r] = u.add(n).value();
                for (var c = e.group.parent; null != c;)
                    c.group.totals[r] = u.add(c.group.totals[r] || 0).value(), c = c.group.parent;
            }
            break;
        default: console.warn("invalid total mode: " + i);
    } });
} }
function adjustGroupsAvarage(e, t) { if (e && t) {
    var o = Object.keys(t);
    if (0 !== e.length && e[0].group && 0 !== o.length) {
        var r = o.filter(function (e) { return TotalMode.AVARAGE === t[e]; });
        r.length > 0 && e.filter(function (e) { return e.group.children.length > 0; }).forEach(function (e) { return adjustGroupAvarage(e, r); });
    }
} }
function adjustGroupAvarage(e, t) { var o = e.group.children; if (0 === o.length)
    return 0; var r = 0; return o[0].group ? (o.forEach(function (e) { r += adjustGroupAvarage(e, t); }), t.forEach(function (t) { e.group.totals[t] = numeral(e.group.totals[t]).divide(r).value(); })) : (r = o.length, t.forEach(function (t) { e.group.totals[t] = numeral(e.group.totals[t]).divide(e.group.children.length).value(); })), r; }
function calcTotals(e, t) { if (void 0 === e && (e = []), void 0 === t && (t = {}), !e || !t)
    return {}; var o = Object.keys(t), r = {}; if (0 === o.length && o.every(function (e) { return t[e] === TotalMode.COUNT; }))
    o.forEach(function (t) { return r[t] = e.length; });
else {
    e.forEach(function (e) { o.filter(function (e) { return TotalMode.COUNT !== t[e]; }).forEach(function (t) { var o = e.cells[t]; if ("NR" === o.obj.t) {
        var n = numeral(o.obj.k);
        r[t] = n.add(r[t] || 0).value();
    } }); });
    for (var n = 0, a = o; n < a.length; n++) {
        var s = a[n];
        if (t[s] === TotalMode.AVARAGE) {
            var i = r[s];
            i && e.length > 0 && (r[s] = numeral(i).divide(e.length).value());
        }
        else
            t[s] === TotalMode.COUNT && (r[s] = e.length);
    }
} return r; }
function compareCell(e, t, o) { var r = "A" === o ? 1 : -1, n = e.obj, a = t.obj; if (n.t !== a.t || n.p !== a.p) {
    var s = n.t.localeCompare(a.t);
    return 0 === s && (s = n.p.localeCompare(a.p)), s;
} if ("NR" === n.t) {
    var i = numeral(n.k).value(), l = numeral(a.k).value();
    return i === l ? 0 : i > l ? 1 * r : -1 * r;
} if ("D8" === n.t) {
    var u = void 0, c = void 0;
    if ("*YYMD" === n.p)
        u = hooks(n.k, "YYYYMMDD"), c = hooks(a.k, "YYYYMMDD");
    else {
        if ("*DMYY" !== n.p)
            return n.k.localeCompare(a.k);
        u = hooks(n.k, "DDMMYYYY"), c = hooks(a.k, "DDMMYYYY");
    }
    return u.isSame(c) ? 0 : u.isBefore(c) ? -1 * r : 1 * r;
} return r * e.value.localeCompare(t.value); }
function adjustGroupId(e) { if (e.group) {
    for (var t = e.group.id, o = e.group.parent; null !== o;)
        t = o.group.id + ";" + t, o = o.group.parent;
    e.group.id = t;
} }
function isBar(e) { return "J4" === e.t && "BAR" === e.p; }
function isIcon(e) { return "J4" === e.t && "ICO" === e.p; }
function isImage(e) { return "J4" === e.t && "IMG" === e.p; }
function isLink(e) { return "J1" === e.t && "URL" === e.p; }
function isNumber$1(e) { return "NR" === e.t; }
function isVoCodver(e) { return "VO" === e.t && "COD_VER" === e.p; }
proto$2.isValid = isValid$1, proto$2.abs = abs, proto$2.add = add$1, proto$2.subtract = subtract$1, proto$2.as = as, proto$2.asMilliseconds = asMilliseconds, proto$2.asSeconds = asSeconds, proto$2.asMinutes = asMinutes, proto$2.asHours = asHours, proto$2.asDays = asDays, proto$2.asWeeks = asWeeks, proto$2.asMonths = asMonths, proto$2.asQuarters = asQuarters, proto$2.asYears = asYears, proto$2.valueOf = valueOf$1, proto$2._bubble = bubble, proto$2.clone = clone$1, proto$2.get = get$2, proto$2.milliseconds = milliseconds, proto$2.seconds = seconds, proto$2.minutes = minutes, proto$2.hours = hours, proto$2.days = days, proto$2.weeks = weeks, proto$2.months = months, proto$2.years = years, proto$2.humanize = humanize, proto$2.toISOString = toISOString$1, proto$2.toString = toISOString$1, proto$2.toJSON = toISOString$1, proto$2.locale = locale, proto$2.localeData = localeData, proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1), proto$2.lang = lang, addFormatToken("X", 0, 0, "unix"), addFormatToken("x", 0, 0, "valueOf"), addRegexToken("x", matchSigned), addRegexToken("X", matchTimestamp), addParseToken("X", function (e, t, o) { o._d = new Date(1e3 * parseFloat(e, 10)); }), addParseToken("x", function (e, t, o) { o._d = new Date(toInt(e)); }), hooks.version = "2.24.0", setHookCallback(createLocal), hooks.fn = proto, hooks.min = min, hooks.max = max, hooks.now = now, hooks.utc = createUTC, hooks.unix = createUnix, hooks.months = listMonths, hooks.isDate = isDate, hooks.locale = getSetGlobalLocale, hooks.invalid = createInvalid, hooks.duration = createDuration, hooks.isMoment = isMoment, hooks.weekdays = listWeekdays, hooks.parseZone = createInZone, hooks.localeData = getLocale, hooks.isDuration = isDuration, hooks.monthsShort = listMonthsShort, hooks.weekdaysMin = listWeekdaysMin, hooks.defineLocale = defineLocale, hooks.updateLocale = updateLocale, hooks.locales = listLocales, hooks.weekdaysShort = listWeekdaysShort, hooks.normalizeUnits = normalizeUnits, hooks.relativeTimeRounding = getSetRelativeTimeRounding, hooks.relativeTimeThreshold = getSetRelativeTimeThreshold, hooks.calendarFormat = getCalendarFormat, hooks.prototype = proto, hooks.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" };
var KupDataTable = function () { function e() { this.showFilters = !1, this.filters = {}, this.globalFilter = !1, this.sortEnabled = !0, this.sort = [], this.rowsPerPage = 10, this.paginatorPos = PaginatorPos.TOP, this.columnsWidth = [], this.showHeader = !0, this.showGrid = ShowGrid.NONE, this.groups = [], this.expandGroups = !1, this.multiSelection = !1, this.globalFilterValue = "", this.currentPage = 1, this.currentRowsPerPage = 10, this.selectedRows = [], this.groupState = {}, this.openedMenu = null, this.density = "medium", this.renderedRows = []; } return e.prototype.rowsPerPageHandler = function (e) { this.currentRowsPerPage = e; }, e.prototype.expandGroupsHandler = function () { this.forceGroupExpansion(); }, e.prototype.recalculateRows = function () { this.initRows(); }, e.prototype.componentWillLoad = function () { this.rowsPerPageHandler(this.rowsPerPage), this.initRows(), this.expandGroups && this.forceGroupExpansion(); }, e.prototype.componentDidLoad = function () { this.selectRow && this.selectRow > 0 && this.selectRow <= this.renderedRows.length && (this.selectedRows = [], this.selectedRows.push(this.renderedRows[this.selectRow - 1]), this.kupAutoRowSelect.emit({ selectedRow: this.selectedRows[0] })); }, e.prototype.getColumns = function () { return this.data && this.data.columns ? this.data.columns : [{ title: "", name: "", size: 0 }]; }, e.prototype.getVisibleColumns = function () { var e = this, t = this.getColumns().filter(function (e) { return !e.hasOwnProperty("visible") || e.visible; }); return this.isGrouping() ? t.filter(function (t) { for (var o = null, r = 0, n = e.groups; r < n.length; r++) {
    var a = n[r];
    if (a.column === t.name) {
        o = a;
        break;
    }
} return !o || !o.hasOwnProperty("visible") || o.visible; }) : t; }, e.prototype.getColumnByName = function (e) { for (var t = 0, o = this.getColumns(); t < o.length; t++) {
    var r = o[t];
    if (r.name === e)
        return r;
} return null; }, e.prototype.getGroupByName = function (e) { if (!this.isGrouping())
    return null; for (var t = 0, o = this.groups; t < o.length; t++) {
    var r = o[t];
    if (r.column === e)
        return r;
} return null; }, e.prototype.getRows = function () { return this.data && this.data.rows ? this.data.rows : []; }, e.prototype.initRows = function () { var e = this.getFilteredRows(), t = this.sortRows(e); this.footer = calcTotals(t, this.totals), this.rows = this.groupRows(t), this.paginatedRows = this.paginateRows(this.rows); }, e.prototype.getFilteredRows = function () { return filterRows(this.getRows(), this.filters, this.globalFilterValue, this.getVisibleColumns().map(function (e) { return e.name; })); }, e.prototype.isGrouping = function () { return this.groups && this.groups.length > 0; }, e.prototype.hasRowActions = function () { return void 0 !== this.rowActions; }, e.prototype.removeGroup = function (e) { this.groupState = {}; var t = this.groups.indexOf(e); t >= 0 && (this.groups.splice(t, 1), this.groups = this.groups.slice()); }, e.prototype.hasTotals = function () { return this.totals && Object.keys(this.totals).length > 0; }, e.prototype.forceGroupExpansion = function () { var e = this; this.rows.forEach(function (t) { return e.forceRowGroupExpansion(t); }), console.log(this.groupState); }, e.prototype.forceRowGroupExpansion = function (e) { var t = this; if (e.group) {
    var o = this.groupState[e.group.id];
    o ? o.expanded = this.expandGroups : o = { expanded: this.expandGroups }, this.groupState[e.group.id] = o, e.group.children && e.group.children.forEach(function (e) { return t.forceRowGroupExpansion(e); });
} }, e.prototype.onColumnSort = function (e, t) { for (var o = e.ctrlKey, r = 0; r < this.sort.length && (n = this.sort[r]).column !== t; r++)
    ; if (r < this.sort.length) {
    var n = this.sort[r], a = Object.assign({}, n, { sortMode: n.sortMode === SortMode.A ? SortMode.D : SortMode.A });
    if (o) {
        var s = this.sort.slice();
        s[r] = a, this.sort = s;
    }
    else
        this.sort = [a];
}
else
    n = { column: t, sortMode: SortMode.A }, this.sort = o ? this.sort.concat([n]) : [n]; }, e.prototype.onFilterChange = function (e, t) { var o = e.detail; this.currentPage = 1; var r = Object.assign({}, this.filters); 0 === o.value.length ? delete r[t] : r[t] = o.value, this.filters = r; }, e.prototype.onGlobalFilterChange = function (e) { var t = e.detail; this.currentPage = 1, this.globalFilterValue = t.value; }, e.prototype.handlePageChanged = function (e) { this.currentPage = e.detail.newPage; }, e.prototype.handleRowsPerPageChanged = function (e) { this.currentRowsPerPage = e.detail.newRowsPerPage; }, e.prototype.onRowClick = function (e, t) { this.handleRowSelect(t, e.ctrlKey); var o = e.target, r = null; if (o instanceof HTMLElement && "TR" !== o.tagName) {
    for (var n = o; "TD" !== n.tagName;)
        n = n.parentElement;
    r = n.dataset.column;
} this.kupRowSelected.emit({ selectedRows: this.selectedRows, clickedColumn: r }); }, e.prototype.onDefaultRowActionClick = function (e, t) { var o = t.action, r = t.row, n = t.type, a = t.index; e.stopPropagation(), this.kupRowActionClicked.emit({ action: o, index: a, row: r, type: n }); }, e.prototype.onRowActionExpanderClick = function (e, t) { e.stopPropagation(), this.kupRowActionClicked.emit({ row: t, type: "expander" }); }, e.prototype.handleRowSelect = function (e, t) { if (this.multiSelection)
    if (t && this.selectedRows) {
        var o = this.selectedRows.indexOf(e);
        o < 0 ? this.selectedRows = this.selectedRows.concat([e]) : (this.selectedRows.splice(o, 1), this.selectedRows = this.selectedRows.slice());
    }
    else
        this.selectedRows = [e];
else
    this.selectedRows = [e]; }, e.prototype.onRowCheckboxSelection = function (e, t) { if (e.target.checked)
    this.selectedRows = this.selectedRows.length > 0 ? this.selectedRows.concat([t]) : [t];
else {
    var o = this.selectedRows.indexOf(t);
    o >= 0 && (this.selectedRows.splice(o, 1), this.selectedRows = this.selectedRows.slice());
} this.kupRowSelected.emit({ selectedRows: this.selectedRows, clickedColumn: null }); }, e.prototype.onRowExpand = function (e) { e.group.expanded = !e.group.expanded, this.groupState[e.group.id].expanded = e.group.expanded, this.groupState = Object.assign({}, this.groupState); }, e.prototype.onSelectAll = function (e) { this.selectedRows = e.target.checked ? this.renderedRows : [], this.kupRowSelected.emit({ selectedRows: this.selectedRows, clickedColumn: null }); }, e.prototype.onColumnMouseEnter = function (e) { var t = this; this.columnOverTimeout = setTimeout(function () { t.openedMenu = e; }, 500); }, e.prototype.onColumnMouseLeave = function (e) { clearTimeout(this.columnOverTimeout), this.openedMenu === e && (this.openedMenu = null); }, e.prototype.switchColumnGroup = function (e, t) { if (this.openedMenu = null, this.groupState = {}, null !== e) {
    var o = this.groups.indexOf(e);
    this.groups.splice(o, 1), this.groups = this.groups.slice();
}
else
    this.groups = this.groups.concat([{ column: t, visible: !0 }]); }, e.prototype.onOptionClicked = function (e, t) { this.kupOptionClicked.emit({ column: e, row: t }); }, e.prototype.groupRows = function (e) { if (!this.isGrouping())
    return e; var t = groupRows(e, this.groups, this.totals); return this.adjustGroupState(t), t; }, e.prototype.adjustGroupState = function (e) { var t = this; e && 0 !== e.length && e[0].hasOwnProperty("group") && e.forEach(function (e) { return t.adjustGroupStateFromRow(e); }); }, e.prototype.adjustGroupStateFromRow = function (e) { var t = this; if (e && e.hasOwnProperty("group")) {
    var o = e.group, r = this.groupState[o.id];
    r ? o.expanded = r.expanded : this.groupState[o.id] = o, o.children.forEach(function (e) { return t.adjustGroupStateFromRow(e); });
} }, e.prototype.sortRows = function (e) { return sortRows(e, this.sort); }, e.prototype.paginateRows = function (e) { var t = this.currentPage * this.currentRowsPerPage - this.currentRowsPerPage; return e.slice(t, t + this.currentRowsPerPage); }, e.prototype.getSortIcon = function (e) { for (var t = 0, o = this.sort; t < o.length; t++) {
    var r = o[t];
    if (r.column === e)
        return "A" === r.sortMode ? "mdi-sort-ascending" : "mdi-sort-descending";
} return "mdi-sort"; }, e.prototype.calculateColspan = function () { var e = this.getVisibleColumns().length; return this.multiSelection && (e += 1), this.isGrouping() && this.hasTotals() && (e += 1), this.hasRowActions() && (e += 1), e; }, e.prototype.renderHeader = function () { var e = this, t = this.columnsWidth.length > 0, o = this.getVisibleColumns().map(function (o) { var r = null; if (e.showFilters) {
    var n = "";
    e.filters && e.filters[o.name] && (n = e.filters[o.name]), r = mycomponent_core_js_1.h("div", { onMouseEnter: function () { return e.onColumnMouseLeave(o.name); }, onMouseLeave: function () { return e.onColumnMouseEnter(o.name); } }, mycomponent_core_js_1.h("kup-text-input", { class: "datatable-filter", initialValue: n, "data-col": o.name, onKetchupTextInputUpdated: function (t) { e.onFilterChange(t, o.name); } }));
} var a = null; e.sortEnabled && (a = mycomponent_core_js_1.h("span", { class: "column-sort", onMouseEnter: function () { return e.onColumnMouseLeave(o.name); }, onMouseLeave: function () { return e.onColumnMouseEnter(o.name); } }, mycomponent_core_js_1.h("span", { role: "button", "aria-label": "Sort column", class: "mdi " + e.getSortIcon(o.name), onClick: function (t) { return e.onColumnSort(t, o.name); } }))); var s = null; if (t)
    for (var i = 0; i < e.columnsWidth.length; i++) {
        var l = e.columnsWidth[i];
        if (l.column === o.name) {
            var u = l.width.toString() + "px";
            s = { width: u, minWidth: u, maxWidth: u };
            break;
        }
    } var c = [], d = e.getGroupByName(o.name), f = null != d ? "Disattiva raggruppamento" : "Attiva raggruppamento"; c.push(mycomponent_core_js_1.h("li", { role: "menuitem", onClick: function () { return e.switchColumnGroup(d, o.name); } }, mycomponent_core_js_1.h("span", { class: "mdi mdi-book" }), f)), c.push(mycomponent_core_js_1.h("li", { role: "menuitem", onClick: function () { return e.kupAddColumn.emit({ column: o.name }); } }, mycomponent_core_js_1.h("span", { class: "mdi mdi-table-column-plus-after" }), "Aggiungi colonna")); var m = null; return 0 !== c.length && (m = mycomponent_core_js_1.h("div", { class: "column-menu " + (e.openedMenu === o.name ? "open" : "closed") }, mycomponent_core_js_1.h("ul", { role: "menubar" }, c))), mycomponent_core_js_1.h("th", { style: s, onMouseEnter: function () { return e.onColumnMouseEnter(o.name); }, onMouseLeave: function () { return e.onColumnMouseLeave(o.name); } }, mycomponent_core_js_1.h("span", { class: "column-title" }, o.title), a, r, m); }), r = null; this.multiSelection && (r = mycomponent_core_js_1.h("th", { style: { width: "30px", margin: "0 auto" } }, mycomponent_core_js_1.h("input", { type: "checkbox", onChange: function (t) { return e.onSelectAll(t); }, title: "selectedRow: " + this.selectedRows.length + " - renderedRows: " + this.renderedRows.length, checked: this.selectedRows.length > 0 && this.selectedRows.length === this.renderedRows.length }))); var n = null; this.isGrouping() && this.hasTotals() && (n = mycomponent_core_js_1.h("th", null)); var a = null; return this.hasRowActions() && (a = mycomponent_core_js_1.h("th", null)), [r, n, a].concat(o); }, e.prototype.renderFooter = function () { var e = this; if (!this.hasTotals())
    return null; var t = this.getVisibleColumns().map(function (t) { return mycomponent_core_js_1.h("td", null, e.footer[t.name]); }), o = null; this.multiSelection && (o = mycomponent_core_js_1.h("td", null)); var r = null; return this.isGrouping() && this.hasTotals() && (r = mycomponent_core_js_1.h("td", null)), mycomponent_core_js_1.h("tfoot", null, mycomponent_core_js_1.h("tr", null, o, r, t)); }, e.prototype.renderRow = function (e, t) { var o = this; void 0 === t && (t = 0); var r = this.getVisibleColumns(); if (e.group) {
    if (0 === e.group.children.length)
        return null;
    for (var n = "mdi mdi-chevron-" + (e.group.expanded ? "right" : "down"), a = [], s = [], i = 0; i < t; i++)
        s.push(mycomponent_core_js_1.h("span", { class: "indent" }));
    if (this.hasTotals()) {
        (c = []).push(mycomponent_core_js_1.h("td", { colSpan: this.multiSelection ? 2 : 1 }, s, mycomponent_core_js_1.h("span", { role: "button", "aria-label": "Row expander", class: n, onClick: function (t) { t.stopPropagation(), o.onRowExpand(e); } }), e.group.label));
        for (var l = 0, u = r; l < u.length; l++)
            c.push(mycomponent_core_js_1.h("td", { class: "total" }, e.group.totals[u[l].name]));
        a.push(mycomponent_core_js_1.h("tr", { class: "group", onClick: function () { return o.onRowExpand(e); } }, c));
    }
    else
        a.push(mycomponent_core_js_1.h("tr", { class: "group", onClick: function () { return o.onRowExpand(e); } }, mycomponent_core_js_1.h("td", { colSpan: this.calculateColspan() }, s, mycomponent_core_js_1.h("span", { role: "button", "aria-label": "Row expander", class: "row-expander " + n, onClick: function (t) { t.stopPropagation(), o.onRowExpand(e); } }), e.group.label)));
    return e.group.expanded && e.group.children.map(function (e) { return o.renderRow(e, t + 1); }).forEach(function (e) { Array.isArray(e) ? e.forEach(function (e) { return a.push(e); }) : a.push(e); }), a;
} var c = r.map(function (r, n) { var a = r.name, s = []; if (!(0 !== n || o.isGrouping() && o.hasTotals()))
    for (var i = 0; i < t; i++)
        s.push(mycomponent_core_js_1.h("span", { class: "indent" })); var l = e.cells[a], u = null; l.options && (u = mycomponent_core_js_1.h("span", { class: "options", role: "button", "aria-label": "Opzioni oggetto", title: "Opzioni oggetto", onClick: function () { return o.onOptionClicked(a, e); } }, mycomponent_core_js_1.h("i", { class: "mdi mdi-settings" }))); var c = o.renderCell(l, a), d = { number: isNumber$1(l.obj) }; return mycomponent_core_js_1.h("td", { "data-column": a, style: l.style, class: d }, s, c, u); }), d = null; this.multiSelection && (d = mycomponent_core_js_1.h("td", null, mycomponent_core_js_1.h("input", { type: "checkbox", checked: this.selectedRows.includes(e), onClick: function (e) { return e.stopPropagation(); }, onChange: function (t) { return o.onRowCheckboxSelection(t, e); } }))); var f = null; this.isGrouping() && this.hasTotals() && (f = mycomponent_core_js_1.h("td", null)), this.renderedRows.push(e); var m = null; if (this.hasRowActions()) {
    var p = this.renderActions(this.rowActions, e, "default"), g = null, k = null;
    e.actions ? k = this.renderActions(e.actions, e, "variable") : g = mycomponent_core_js_1.h("span", { title: "Espandi voci", class: "row-action mdi mdi-chevron-right", onClick: function (t) { return o.onRowActionExpanderClick(t, e); }, role: "button", "aria-label": "Espandi voci", "aria-pressed": "false" }), m = mycomponent_core_js_1.h("td", null, p, g, k);
} var y = { selected: this.selectedRows.includes(e) }; return mycomponent_core_js_1.h("tr", { class: y, onClick: function (t) { return o.onRowClick(t, e); } }, d, f, m, c); }, e.prototype.renderActions = function (e, t, o) { var r = this; return e.map(function (e, n) { return mycomponent_core_js_1.h("span", { title: e.text, class: "row-action " + e.icon, onClick: function (a) { return r.onDefaultRowActionClick(a, { action: e, index: n, row: t, type: o }); }, role: "button", "aria-label": e.text, "aria-pressed": "false" }); }); }, e.prototype.renderCell = function (e, t) { var o = e.value; if (isIcon(e.obj) || isVoCodver(e.obj))
    o = mycomponent_core_js_1.h("span", { class: e.value });
else if (isImage(e.obj))
    o = mycomponent_core_js_1.h("img", { src: e.value, alt: "", width: "64", height: "64" });
else if (isLink(e.obj))
    o = mycomponent_core_js_1.h("a", { href: e.value, target: "_blank" }, e.value);
else if (isBar(e.obj)) {
    var r = { value: e.value };
    this.columnsWidth && this.columnsWidth[t] && (r.width = this.columnsWidth[t]), o = mycomponent_core_js_1.h("kup-graphic-cell", Object.assign({}, r));
} return mycomponent_core_js_1.h("span", { class: "cell-content" }, o); }, e.prototype.render = function () { var e = this; this.renderedRows = []; var t = null; 0 === this.paginatedRows.length ? t = mycomponent_core_js_1.h("tr", null, mycomponent_core_js_1.h("td", { colSpan: this.calculateColspan() }, "Empty data")) : (t = [], this.paginatedRows.map(function (t) { return e.renderRow(t); }).forEach(function (e) { Array.isArray(e) ? e.forEach(function (e) { return t.push(e); }) : t.push(e); })); var o = this.renderHeader(), r = this.renderFooter(), n = null; this.globalFilter && (n = mycomponent_core_js_1.h("div", { id: "globalFilter" }, mycomponent_core_js_1.h("kup-text-input", { label: "Global filter", onKetchupTextInputUpdated: function (t) { return e.onGlobalFilterChange(t); } }))); var a = null; PaginatorPos.TOP !== this.paginatorPos && PaginatorPos.BOTH !== this.paginatorPos || (a = mycomponent_core_js_1.h("kup-paginator", { id: "top-paginator", max: this.rows.length, perPage: this.rowsPerPage, selectedPerPage: this.currentRowsPerPage, currentPage: this.currentPage, onKupPageChanged: function (t) { return e.handlePageChanged(t); }, onKupRowsPerPageChanged: function (t) { return e.handleRowsPerPageChanged(t); } })); var s = null; PaginatorPos.BOTTOM !== this.paginatorPos && PaginatorPos.BOTH !== this.paginatorPos || (s = mycomponent_core_js_1.h("kup-paginator", { id: "bottom-paginator", max: this.rows.length, perPage: this.rowsPerPage, selectedPerPage: this.currentRowsPerPage, currentPage: this.currentPage, onKupPageChanged: function (t) { return e.handlePageChanged(t); }, onKupRowsPerPageChanged: function (t) { return e.handleRowsPerPageChanged(t); } })); var i = null; if (this.isGrouping()) {
    var l = this.groups.map(function (t) { var o = e.getColumnByName(t.column); return o ? mycomponent_core_js_1.h("div", { class: "group-chip", tabIndex: 0, onClick: function () { return e.removeGroup(t); } }, mycomponent_core_js_1.h("span", { class: "mdi mdi-close-circle" }), o.title) : null; });
    i = mycomponent_core_js_1.h("div", { id: "group-chips" }, l);
} var u = mycomponent_core_js_1.h("div", { id: "density-panel" }, mycomponent_core_js_1.h("kup-button", { class: { active: "small" === this.density }, iconClass: "mdi mdi-format-align-justify", onClick: function () { return e.density = "small"; } }), mycomponent_core_js_1.h("kup-button", { class: { active: "medium" === this.density }, iconClass: "mdi mdi-menu", onClick: function () { return e.density = "medium"; } }), mycomponent_core_js_1.h("kup-button", { class: { active: "big" === this.density }, iconClass: "mdi mdi-view-sequential", onClick: function () { return e.density = "big"; } })), c = { "column-separation": ShowGrid.COMPLETE === this.showGrid || ShowGrid.COL === this.showGrid, "row-separation": ShowGrid.COMPLETE === this.showGrid || ShowGrid.ROW === this.showGrid }; return c["density-" + this.density] = !0, mycomponent_core_js_1.h("div", { id: "data-table-wrapper" }, mycomponent_core_js_1.h("div", { class: "above-wrapper" }, a, n, u), mycomponent_core_js_1.h("div", { class: "below-wrapper" }, i, mycomponent_core_js_1.h("table", { class: c }, mycomponent_core_js_1.h("thead", { hidden: !this.showHeader }, mycomponent_core_js_1.h("tr", null, o)), mycomponent_core_js_1.h("tbody", null, t), r)), s); }, Object.defineProperty(e, "is", { get: function () { return "kup-data-table"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { columnsWidth: { type: "Any", attr: "columns-width" }, currentPage: { state: !0, watchCallbacks: ["recalculateRows"] }, currentRowsPerPage: { state: !0, watchCallbacks: ["recalculateRows"] }, data: { type: "Any", attr: "data", watchCallbacks: ["recalculateRows"] }, density: { state: !0 }, expandGroups: { type: Boolean, attr: "expand-groups", watchCallbacks: ["expandGroupsHandler"] }, filters: { type: "Any", attr: "filters", mutable: !0, watchCallbacks: ["recalculateRows"] }, globalFilter: { type: Boolean, attr: "global-filter" }, globalFilterValue: { state: !0, watchCallbacks: ["recalculateRows"] }, groups: { type: "Any", attr: "groups", mutable: !0, watchCallbacks: ["recalculateRows"] }, groupState: { state: !0 }, multiSelection: { type: Boolean, attr: "multi-selection" }, openedMenu: { state: !0 }, paginatorPos: { type: String, attr: "paginator-pos" }, rowActions: { type: "Any", attr: "row-actions" }, rowsPerPage: { type: Number, attr: "rows-per-page", watchCallbacks: ["rowsPerPageHandler", "recalculateRows"] }, selectedRows: { state: !0 }, selectRow: { type: Number, attr: "select-row" }, showFilters: { type: Boolean, attr: "show-filters" }, showGrid: { type: String, attr: "show-grid" }, showHeader: { type: Boolean, attr: "show-header" }, sort: { type: "Any", attr: "sort", mutable: !0, watchCallbacks: ["recalculateRows"] }, sortEnabled: { type: Boolean, attr: "sort-enabled" }, totals: { type: "Any", attr: "totals", watchCallbacks: ["recalculateRows"] } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "kupAutoRowSelect", method: "kupAutoRowSelect", bubbles: !0, cancelable: !1, composed: !0 }, { name: "kupRowSelected", method: "kupRowSelected", bubbles: !0, cancelable: !1, composed: !0 }, { name: "kupOptionClicked", method: "kupOptionClicked", bubbles: !0, cancelable: !1, composed: !0 }, { name: "kupAddColumn", method: "kupAddColumn", bubbles: !0, cancelable: !1, composed: !0 }, { name: "kupRowActionClicked", method: "kupRowActionClicked", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return "\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);.sc-kup-data-table-h{--int_background-color:var(--kup-data-table_background-color,#fff);--int_main-color:var(--kup-data-table_main-color,#6aaaa7);--int_text-on-main-color:var(--kup-data-table_text-on-main-color,#fff);--int_color:var(--kup-data-table_color,#545454);--int_stronger-color:var(--kup-data-table_stronger-color,#111);--int_hover-color:var(--kup-data-table_hover-color,#545454);--int_hover-background-color:var(--kup-data-table_hover-background-color,#e0e0e0);--int_border-color:var(--kup-data-table_border-color,#000);--int_head-background-color:var(--kup-data-table_head-background-color,#f5f5f5);--int_group-background-color:var(--kup-data-table_group-background-color,#f5f5f5);--int_group-border-color:var(--kup-data-table_group-border-color,#6aaaa7);--int_filter-border-color:var(--kup-data-table_filter-border-color,#dadada);--int_icons-color:var(--kup-data-table_icons-color,grey);--int_icons-hover-color:var(--kup-data-table_icons-hover-color,#a0a0a0);--int_box-shadow:var(--kup-data-table_box-shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5))}#data-table-wrapper.sc-kup-data-table{background-color:var(--int_background-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table{color:var(--int_stronger-color);width:100%;min-width:intrinsic;min-width:-moz-max-content;min-width:-webkit-max-content;border-collapse:collapse;text-align:left}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   td.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   th.sc-kup-data-table{padding:.5rem 1rem}#data-table-wrapper.sc-kup-data-table   table.row-separation.sc-kup-data-table   tr.sc-kup-data-table{border-bottom:1px solid var(--int_border-color)}#data-table-wrapper.sc-kup-data-table   table.column-separation.sc-kup-data-table   td.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.column-separation.sc-kup-data-table   th.sc-kup-data-table{border-right:1px solid var(--int_border-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table{margin-left:.5rem;cursor:pointer}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table   .mdi.sc-kup-data-table{-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table   .mdi-sort-ascending.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table   .mdi-sort-descending.sc-kup-data-table{color:var(--int_main-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   th.sc-kup-data-table   kup-text-input.datatable-filter.sc-kup-data-table{--int_border-color:var(--int_filter-border-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   th.sc-kup-data-table   input.sc-kup-data-table{display:block}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   thead.sc-kup-data-table{background:var(--int_head-background-color);border:1px solid var(--int_border-color);border-bottom:3px solid var(--int_border-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   thead.sc-kup-data-table   th.sc-kup-data-table{position:relative}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table{border:1px solid var(--int_border-color);cursor:pointer}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.selected.sc-kup-data-table > td.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table:hover > td.sc-kup-data-table{color:var(--int_hover-color);background-color:var(--int_hover-background-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table{border-left:10px solid var(--int_group-border-color);background:var(--int_group-background-color);font-weight:700}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table   td.sc-kup-data-table{padding:1rem 0}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table   td.total.sc-kup-data-table{text-align:right;padding-right:1rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table   icon.sc-kup-data-table{margin-right:.5rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table{-webkit-transition:padding .1s ease-in-out;transition:padding .1s ease-in-out}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.number.sc-kup-data-table{text-align:right}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .row-expander.sc-kup-data-table{margin-right:.5rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .indent.sc-kup-data-table{display:inline-block;height:1rem;width:2rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .options.sc-kup-data-table{font-size:1rem;margin-left:.5rem;color:var(--int_icons-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .options.sc-kup-data-table:hover{color:var(--int_icons-hover-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .row-action.sc-kup-data-table{margin-right:.2rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tfoot.sc-kup-data-table   td.sc-kup-data-table{text-align:right}#data-table-wrapper.sc-kup-data-table   table.noGrid.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.noGrid.sc-kup-data-table   td.sc-kup-data-table{border:none}#data-table-wrapper.sc-kup-data-table   table.density-small.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table{padding-top:.2rem;padding-bottom:.2rem}#data-table-wrapper.sc-kup-data-table   table.density-small.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table > td.sc-kup-data-table{padding-top:.75rem;padding-bottom:.75rem}#data-table-wrapper.sc-kup-data-table   table.density-big.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table{padding-top:1rem;padding-bottom:1rem}#data-table-wrapper.sc-kup-data-table   table.density-big.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table > td.sc-kup-data-table{padding-top:1.25rem;padding-bottom:1.25rem}#globalFilter.sc-kup-data-table{margin-bottom:.5rem;text-align:center}#group-chips.sc-kup-data-table{display:-ms-flexbox;display:flex;margin-bottom:.5rem}#group-chips.sc-kup-data-table > .group-chip.sc-kup-data-table{display:-ms-flexbox;display:flex;background-color:var(--int_main-color);padding:.5rem;color:var(--int_text-on-main-color);margin-right:.5rem;cursor:pointer;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}#group-chips.sc-kup-data-table > .group-chip.sc-kup-data-table   icon.sc-kup-data-table{margin-right:.5rem}#group-chips.sc-kup-data-table > .group-chip.sc-kup-data-table:hover{opacity:.75}.column-menu.sc-kup-data-table{background-color:var(--int_background-color);-webkit-box-shadow:var(--int_box-shadow);box-shadow:var(--int_box-shadow);color:var(--int_color);position:absolute;z-index:100;font-weight:400;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.column-menu.closed.sc-kup-data-table{display:none;opacity:0}.column-menu.open.sc-kup-data-table{display:block;opacity:1;-webkit-animation:display-none-transition .5s both;-webkit-animation-timing-function:cubic-bezier(.67,-.81,.89,.71);animation:display-none-transition .5s both;animation-timing-function:cubic-bezier(.67,-.81,.89,.71)}.column-menu.sc-kup-data-table   ul.sc-kup-data-table{list-style-type:none;margin:0;padding:0}.column-menu.sc-kup-data-table   ul.sc-kup-data-table > li.sc-kup-data-table{padding:.8rem;font-size:1rem;-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out}.column-menu.sc-kup-data-table   ul.sc-kup-data-table > li.sc-kup-data-table:hover{cursor:pointer;color:var(--int_main-color)}.column-menu.sc-kup-data-table   ul.sc-kup-data-table > li.sc-kup-data-table   .mdi.sc-kup-data-table{margin-right:.5rem}#density-panel.sc-kup-data-table{text-align:center}#density-panel.sc-kup-data-table   kup-button.sc-kup-data-table{--kup-button_main-color:transparent;--kup-button_opacity:0.25;--kup-button_icon-color:var(--int_main-color);--kup-button_box-shadow:none}#density-panel.sc-kup-data-table   kup-button.sc-kup-data-table:hover{--kup-button_opacity:0.75}#density-panel.sc-kup-data-table   kup-button.active.sc-kup-data-table{--kup-button_opacity:1}\@-webkit-keyframes display-none-transition{0%{opacity:0}}\@keyframes display-none-transition{0%{opacity:0}}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.KupDataTable = KupDataTable;
function getColorFromString(e) { var t = e.indexOf("R"), o = e.indexOf("G"), r = e.indexOf("B"); if (!(t < 0 || o < 0 || r < 0)) {
    var n = e.substring(t + 1, t + 4), a = e.substring(o + 1, o + 4), s = e.substring(r + 1, r + 4);
    try {
        return new Color(parseInt(n), parseInt(a), parseInt(s));
    }
    catch (e) {
        console.error(e);
    }
    return null;
} }
var GraphicElement = function () { function e() { this.width = 100, this.height = 100, this.color = null, this.shape = "bar"; } return e.prototype.init = function (e) { var t = this; e.forEach(function (e) { e.toUpperCase().startsWith("HEIGHT;") ? t.initHeight(e) : e.toUpperCase().startsWith("SHAPE;") ? t.initShape(e) : e.toUpperCase().startsWith("BCOLOR;") || t.initColor(e); }); }, e.prototype.initColor = function (e) { if (e.length > 11 && this.isValidColor(e)) {
    this.color = getColorFromString(e.substring(0, 12));
    try {
        this.width = parseFloat(e.substring(13).replace(",", "."));
    }
    catch (e) {
        console.error(e);
    }
}
else if (e.startsWith("*NONE"))
    try {
        this.width = parseFloat(e.substring(6).replace(",", "."));
    }
    catch (e) {
        console.error(e);
    } }, e.prototype.isTrasparent = function () { return null === this.color; }, e.prototype.initHeight = function (e) { if (e) {
    var t = e.substring("HEIGHT;".length).replace(",", ".");
    try {
        this.height = parseFloat(t);
    }
    catch (e) {
        console.error(e);
    }
} }, e.prototype.initShape = function (e) { var t = (e = e.substring("SHAPE;".length)).indexOf(";"), o = e; if (t > -1) {
    o = e.substring(0, t);
    try {
        this.width = parseFloat(e.substring(t + 1).replace(",", "."));
    }
    catch (e) {
        console.error(e);
    }
} switch (o.toLocaleLowerCase()) {
    case "circle":
        this.shape = "circle";
        break;
    case "tril":
        this.shape = "tril";
        break;
    case "trir": this.shape = "trir";
} }, e.prototype.isValidColor = function (e) { if (!e)
    return !1; var t = [], o = !1, r = null, n = (e = e.trim()).indexOf("R"); if (n > -1 && (r = e.substring(n + 1, n + 4), t[0] = parseInt(r), isNaN(t[0]) && (o = !0)), (n = e.indexOf("G")) > -1 && (r = e.substring(n + 1, n + 4), t[1] = parseInt(r), isNaN(t[1]) && (o = !0)), (n = e.indexOf("B")) > -1 && (r = e.substring(n + 1, n + 4), t[2] = parseInt(r), isNaN(t[2]) && (o = !0)), o) {
    var a = e.indexOf("R"), s = e.indexOf("G"), i = e.indexOf("B");
    if (r = e.substring(a + 1, s), t[0] = parseInt(r), isNaN(t[0]) && (o = !0), r = e.substring(s + 1, i), t[1] = parseInt(r), isNaN(t[1]) && (o = !0), r = e.substring(i + 1), t[2] = parseInt(r), isNaN(t[2]) && (o = !0), o)
        return !1;
} return !(t[0] < 0 || t[0] > 255 || t[1] < 0 || t[1] > 255 || t[2] < 0 || t[2] > 255); }, e.prototype.getHeight = function () { return this.height; }, e.prototype.getWidth = function () { return this.width; }, e.prototype.getShape = function () { return this.shape; }, e.prototype.getColor = function () { return this.color; }, e; }(), Color = function () { function e(e, t, o) { this.r = e, this.g = t, this.b = o; } return e.prototype.toString = function () { return "rgb(" + this.r + "," + this.g + "," + this.b + ")"; }, e; }(), KetchupDataTable = function () { function e() { this.height = 30, this.width = 300, this.graphic_element_marker_splitter = "\\\\", this.graphic_element_splitter = "\\\\AND\\\\", this.background_color = "BCOLOR;R255G000B000", this.default_color = new Color(0, 0, 0); } return e.prototype.onValueChange = function () { this.draw(); }, e.prototype.componentDidLoad = function () { this.draw(); }, e.prototype.draw = function () { this.value && this.canvas.getContext && (this.ctx = this.canvas.getContext("2d"), this.drawGraphicCell()); }, e.prototype.drawGraphicCell = function () { var e = this; this.value.split(this.graphic_element_splitter).forEach(function (t, o) { var r = "SHAPE;BAR", n = e.background_color, a = "HEIGHT;100", s = t.split(e.graphic_element_marker_splitter), i = [], l = []; s.forEach(function (t) { e.isShapeMarker(t) ? r = t : e.isBgColorMarker(t) ? n = t : e.isHeightMarker(t) ? a = t : e.isDecoratorMarker(t) ? l.push(t) : i.push(t); }); var u = i.map(function (e) { var t = new GraphicElement; return t.init([r, n, a, e]), t; }); if (0 === o && n !== e.background_color) {
    var c = getColorFromString(n.substring("BCOLOR;".length));
    e.drawRect(0, 0, e.canvas.width, e.canvas.height, c);
} var d = 0; u.forEach(function (t) { switch (t.getShape()) {
    case "circle":
        d = e.getNewStarXFromCircle(d, t);
        break;
    case "tril":
        d = e.getNewStarXFromTril(d, t);
        break;
    case "trir":
        d = e.getNewStarXFromTrir(d, t);
        break;
    default: d = e.getNewStarXFromBar(d, t);
} }), l.forEach(function (t) { t.startsWith("SEP") || t.startsWith("DIV") ? e.drawSeparator(t) : t.startsWith("ARW") ? e.drawArrow(t) : t.startsWith("GRID") && e.drawGrid(t); }); }); }, e.prototype.isShapeMarker = function (e) { return e && e.toUpperCase().startsWith("SHAPE;"); }, e.prototype.isBgColorMarker = function (e) { return e && e.toUpperCase().startsWith("BCOLOR;"); }, e.prototype.isHeightMarker = function (e) { return e && e.toUpperCase().startsWith("HEIGHT;"); }, e.prototype.isDecoratorMarker = function (e) { return e && (e.toUpperCase().startsWith("SEP;") || e.toUpperCase().startsWith("DIV;") || e.toUpperCase().startsWith("ARW;") || e.toUpperCase().startsWith("GRID;")); }, e.prototype.getDim = function (e, t) { return Math.floor(e / 100 * t); }, e.prototype.getNewStarXFromBar = function (e, t) { var o = this.getDim(this.canvas.width, t.getWidth()), r = this.getDim(this.canvas.height, t.getHeight()), n = this.canvas.height - r; return t.isTrasparent() || this.drawRect(e, n, o, r, t.getColor()), o; }, e.prototype.getNewStarXFromCircle = function (e, t) { var o = this.getDim(this.canvas.width, t.getWidth()), r = (e + o) / 2; return t.isTrasparent() || this.drawArc(r, this.canvas.height / 2, t.getColor()), o; }, e.prototype.getNewStarXFromTril = function (e, t) { var o = this.getDim(this.canvas.width, t.getWidth()); return t.isTrasparent() || this.drawTri(o, 0, e, this.canvas.height / 2, t.getColor()), o; }, e.prototype.getNewStarXFromTrir = function (e, t) { var o = this.getDim(this.canvas.width, t.getWidth()); return t.isTrasparent() || this.drawTri(e, 0, o, this.canvas.height / 2, t.getColor()), o; }, e.prototype.drawArc = function (e, t, o) { this.ctx.fillStyle = o.toString(), this.ctx.beginPath(), this.ctx.arc(e, t, t, 0, 2 * Math.PI, !0), this.ctx.fill(); }, e.prototype.drawRect = function (e, t, o, r, n) { this.ctx.fillStyle = n.toString(), this.ctx.fillRect(e, t, o, r); }, e.prototype.drawTri = function (e, t, o, r, n) { this.ctx.fillStyle = n.toString(), this.ctx.beginPath(), this.ctx.moveTo(e, t), this.ctx.lineTo(o, r), this.ctx.lineTo(e, this.canvas.height), this.ctx.fill(); }, e.prototype.drawArrow = function (e) { var t = e.substring("ARW;".length); t.indexOf(",") > -1 && (t = t.replace(",", ".")), this.ctx.fillStyle = this.default_color.toString(); var o = this.getDim(this.canvas.width, parseFloat(t)), r = this.canvas.height, n = Math.floor(r / 3), a = n / 2; this.ctx.beginPath(), this.ctx.moveTo(o, 0), this.ctx.lineTo(o - n, r / 2), this.ctx.lineTo(o - a, r / 2), this.ctx.lineTo(o - a, r), this.ctx.lineTo(o + a, r), this.ctx.lineTo(o + a, r / 2), this.ctx.lineTo(o + n, r / 2), this.ctx.fill(); }, e.prototype.drawGrid = function (e) { var t = e.substring("GRID;".length); t.indexOf(",") > -1 && (t = t.replace(",", ".")); for (var o = parseInt(t), r = this.canvas.width / o, n = this.canvas.height / 5, a = this.canvas.height - n, s = r; s < this.canvas.width; s += r)
    this.drawRect(s, a, 1, n, this.default_color); }, e.prototype.drawSeparator = function (e) { var t = e.substring("SEP;".length).split(";"), o = "R000G000B000", r = 2, n = t[0]; t.length > 1 && (o = t[1]), t.length > 2 && (r = parseInt(t[2])), n.indexOf(",") > -1 && (n = n.replace(",", ".")); var a = this.getDim(this.canvas.width, parseFloat(n)); this.drawRect(a, 0, r, this.canvas.height, getColorFromString(o)); }, e.prototype.render = function () { var e = this; return mycomponent_core_js_1.h("canvas", { ref: function (t) { return e.canvas = t; }, height: this.height, width: this.width }, this.value); }, Object.defineProperty(e, "is", { get: function () { return "kup-graphic-cell"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { height: { type: Number, attr: "height" }, value: { type: String, attr: "value", watchCallbacks: ["onValueChange"] }, width: { type: Number, attr: "width" } }; }, enumerable: !0, configurable: !0 }), e; }(), KupPaginator = function () { function e() { this.max = 0, this.perPage = 10, this.selectedPerPage = 10, this.currentPage = 1; } return e.prototype.isPrevPageDisabled = function () { return 1 == this.currentPage; }, e.prototype.isNextPageDisabled = function () { return this.currentPage * this.perPage >= this.max; }, e.prototype.onPrevPage = function () { this.isPrevPageDisabled() || this.kupPageChanged.emit({ newPage: this.currentPage - 1 }); }, e.prototype.onNextPage = function () { this.isNextPageDisabled() || this.kupPageChanged.emit({ newPage: this.currentPage + 1 }); }, e.prototype.onGoToPage = function (e) { this.kupPageChanged.emit({ newPage: parseInt(e.target.value) }); }, e.prototype.onRowsPerPage = function (e) { this.kupRowsPerPageChanged.emit({ newRowsPerPage: parseInt(e.target.value) }); }, e.prototype.getGoToPageOptions = function (e) { var t = []; t.push(mycomponent_core_js_1.h("option", { value: "1", selected: 1 === this.currentPage }, "1")); for (var o = 2; o <= e; o++)
    t.push(mycomponent_core_js_1.h("option", { value: o, selected: this.currentPage === o }, o)); return t; }, e.prototype.getRowsPerPageOptions = function () { var e = []; if (this.currentPage != this.max) {
    var t = this.perPage;
    if (0 === t)
        return e;
    for (; t < this.max;)
        e.push(mycomponent_core_js_1.h("option", { value: t, selected: t === this.selectedPerPage }, t)), t *= 2;
    e.push(mycomponent_core_js_1.h("option", { value: this.max, selected: this.max === this.perPage }, this.max));
}
else
    e.push(mycomponent_core_js_1.h("option", { value: this.perPage, selected: !0 }, this.perPage)); return e; }, e.prototype.render = function () { var e = this, t = "mdi mdi-chevron-left"; this.isPrevPageDisabled() && (t += " disabled"); var o = "mdi mdi-chevron-right"; this.isNextPageDisabled() && (o += " disabled"); var r = Math.ceil(this.max / this.selectedPerPage), n = this.getGoToPageOptions(r), a = this.getRowsPerPageOptions(); return mycomponent_core_js_1.h("div", { id: "paginator" }, mycomponent_core_js_1.h("div", { class: "align-left" }, "Pagina", mycomponent_core_js_1.h("span", { class: "prev-page" }, mycomponent_core_js_1.h("icon", { className: t, onclick: function () { return e.onPrevPage(); } })), mycomponent_core_js_1.h("select", { onChange: function (t) { return e.onGoToPage(t); } }, n), mycomponent_core_js_1.h("span", { class: "next-page" }, mycomponent_core_js_1.h("icon", { className: o, onclick: function () { return e.onNextPage(); } })), "Di ", r), mycomponent_core_js_1.h("div", { class: "align-right" }, mycomponent_core_js_1.h("span", { class: "nextPageGroup" }, "Numero risultati: ", this.max), "Mostra", mycomponent_core_js_1.h("select", { onChange: function (t) { return e.onRowsPerPage(t); } }, a), "righe per pagina")); }, Object.defineProperty(e, "is", { get: function () { return "kup-paginator"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { currentPage: { type: Number, attr: "current-page" }, max: { type: Number, attr: "max" }, perPage: { type: Number, attr: "per-page" }, selectedPerPage: { type: Number, attr: "selected-per-page" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "kupPageChanged", method: "kupPageChanged", bubbles: !0, cancelable: !1, composed: !0 }, { name: "kupRowsPerPageChanged", method: "kupRowsPerPageChanged", bubbles: !0, cancelable: !1, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return "\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);.sc-kup-paginator-h{--int_text-color:var(--kup-paginator_text-color,#545454)}#paginator.sc-kup-paginator{color:var(--int_text-color);margin:.5rem 0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}#paginator.sc-kup-paginator   icon.sc-kup-paginator{cursor:pointer;opacity:1;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}#paginator.sc-kup-paginator   icon.sc-kup-paginator:hover:not(.disabled){opacity:.75}#paginator.sc-kup-paginator   icon.disabled.sc-kup-paginator{cursor:default;opacity:.3}#paginator.sc-kup-paginator   .nextPageGroup.sc-kup-paginator, #paginator.sc-kup-paginator   select.sc-kup-paginator{margin:0 .5rem}#paginator.sc-kup-paginator   .next-page.sc-kup-paginator, #paginator.sc-kup-paginator   .prev-page.sc-kup-paginator{margin:0 .25rem}#paginator.sc-kup-paginator   .nextPageGroup.sc-kup-paginator{padding-right:1.5rem}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.KupGraphicCell = KetchupDataTable;
exports.KupPaginator = KupPaginator;
