"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var ChartType;
!function (t) { t.Area = "Area", t.Bubble = "Bubble", t.Cal = "Cal", t.Candlestick = "Candlestick", t.Combo = "Combo", t.Geo = "Geo", t.Hbar = "Hbar", t.Line = "Line", t.Ohlc = "Ohlc", t.Pie = "Pie", t.Sankey = "Sankey", t.Scatter = "Scatter", t.Unk = "Unk", t.Vbar = "Vbar"; }(ChartType || (ChartType = {}));
var convertColumns = function (t, e) { if (!t || !e || !e.series)
    return []; var r = []; return r.push(e.axe), e.series.map(function (e) { for (var o, a = 0; a < t.columns.length; a++) {
    var i = t.columns[a];
    if (e === i.name) {
        o = i;
        break;
    }
} o && r.push(o.name); }), r; }, convertRows = function (t, e) { if (!t)
    return []; var r = []; return t.rows && t.rows.forEach(function (t) { var o = t.cells, a = []; e.forEach(function (t) { var e = o[t]; e && e.obj && a.push("NR" === e.obj.t ? parseFloat(e.obj.k) : e.obj.k); }), r.push(a); }), r; }, KupChart = function () { function t() { this.config = { type: ChartType.Hbar, axe: "Col1", series: ["Col2", "Col3"] }; } return t.prototype.componentDidLoad = function () { if (this.config.axe && this.config.series && google)
    try {
        this._loadGoogleChart();
    }
    catch (t) {
        console.log(t);
    } }, t.prototype.componentWillUpdate = function () { this.gChart && this.gChart.clearChart(); }, t.prototype.componentDidUpdate = function () { this._loadGoogleChart(); }, t.prototype._loadGoogleChart = function () { google.charts.setOnLoadCallback(this._createChart.bind(this)); }, t.prototype._createGoogleChart = function () { switch (this.config.type) {
    case ChartType.Area: return new google.visualization.AreaChart(this.chartContainer);
    case ChartType.Bubble: return new google.visualization.BubbleChart(this.chartContainer);
    case ChartType.Cal: return new google.visualization.Calendar(this.chartContainer);
    case ChartType.Candlestick: return new google.visualization.CandlestickChart(this.chartContainer);
    case ChartType.Combo: return new google.visualization.ComboChart(this.chartContainer);
    case ChartType.Geo: return new google.visualization.GeoChart(this.chartContainer);
    case ChartType.Hbar: return new google.visualization.BarChart(this.chartContainer);
    case ChartType.Line: return new google.visualization.LineChart(this.chartContainer);
    case ChartType.Pie: return new google.visualization.PieChart(this.chartContainer);
    case ChartType.Sankey: return new google.visualization.Sankey(this.chartContainer);
    case ChartType.Scatter: return new google.visualization.ScatterChart(this.chartContainer);
    default: return new google.visualization.ColumnChart(this.chartContainer);
} }, t.prototype._createGoogleChartOptions = function () { if (!this.config)
    return {}; var t = {}; if (t.is3D = "3D" === this.config.asp, this.config.colors && (t.colors = this.config.colors), this.config.width)
    try {
        t.width = this.config.width;
    }
    catch (t) {
        console.error(t);
    } if (this.config.height)
    try {
        t.height = this.config.height;
    }
    catch (t) {
        console.error(t);
    } return this.config.hasOwnProperty("leg") && !this.config.leg && (t.legend = { position: "none" }), !this.config.stacked || ChartType.Hbar !== this.config.type && ChartType.Vbar !== this.config.type || (t.isStacked = !0), this.config.title && (t.title = this.config.title, t.titleTextStyle = {}, this.config.titleColor && (t.titleTextStyle.color = this.config.titleColor), this.config.titleSize && (t.titleTextStyle.fontSize = this.config.titleSize)), t; }, t.prototype._createChart = function () { var t = convertColumns(this.data, this.config), e = convertRows(this.data, t), r = new google.visualization.arrayToDataTable([t].concat(e)); this.gChart = this._createGoogleChart(); var o = this._createGoogleChartOptions(); this.gChart.draw(r, o); }, t.prototype.render = function () { var t = this; return mycomponent_core_js_1.h("div", { id: "chart", ref: function (e) { return t.chartContainer = e; } }); }, Object.defineProperty(t, "is", { get: function () { return "kup-chart"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { config: { type: "Any", attr: "config" }, data: { type: "Any", attr: "data" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return ""; }, enumerable: !0, configurable: !0 }), t; }();
exports.KupChart = KupChart;
