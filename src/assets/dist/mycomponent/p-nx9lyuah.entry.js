import{r as t,c as e,h as i,g as a}from"./p-df6a2f70.js";import"./p-d8060b98.js";import{o as s,p as r,n as o,q as n,m as h}from"./p-08b2255d.js";var l,c;function g(t,e){for(let i=0;i<e.length;i++){const a=e[i];if(t===a.name)return a}return null}!function(t){t.Area="Area",t.Bubble="Bubble",t.Cal="Cal",t.Candlestick="Candlestick",t.Combo="Combo",t.Geo="Geo",t.Hbar="Hbar",t.Line="Line",t.Ohlc="Ohlc",t.Pie="Pie",t.Sankey="Sankey",t.Scatter="Scatter",t.Unk="Unk",t.Vbar="Vbar"}(l||(l={})),function(t){t.D2="2D",t.D3="3D"}(c||(c={}));const u=(t,{series:e,axis:i})=>{if(!t||!e)return[];const a=[],s=g(i,t.columns);return s&&a.push(s),e.map(e=>{const i=g(e,t.columns);i&&a.push(i)}),a},C=(t,e,i)=>{if(!t)return[];const a=[];return t.rows&&t.rows.forEach(t=>{const h=t.cells,l=[];e.forEach((t,e)=>{const a=h[t.name];if(a&&a.obj){const t=i&&e>0;if(o(a.obj)){const e=function(t){return t.obj?s(t.obj.k).value():s(t.value).value()}(a);l.push(e),t&&l.push(e.toString())}else if(n(a.obj)){const e=function(t){let e="YYYYMMDD";if(t.obj){const i=t.obj;return"D8"===i.t&&"*DMYY"===i.p&&(e="DDMMYYYY"),r(t.obj.k,e)}return r(t.value,"DD/MM/YYYY")}(a).toDate();l.push(e),t&&l.push(e.toString())}else l.push(a.obj.k),t&&l.push(a.value)}}),a.push(l)}),a};class p{constructor(i){t(this,i),this.types=[l.Hbar],this.colors=[],this.legend=!0,this.stacked=!1,this.showMarks=!1,this.version="45.2",this.kupChartClicked=e(this,"kupChartClicked",6)}componentDidLoad(){if(this.axis&&this.series&&google){document.querySelectorAll(`link[href^="https://www.gstatic.com/charts/${this.version}/css"]`).forEach(t=>this.el.shadowRoot.appendChild(t.cloneNode()));try{this.loadGoogleChart()}catch(t){console.error(t)}}}componentWillUpdate(){this.gChart&&this.gChart.clearChart()}componentDidUpdate(){this.loadGoogleChart()}loadGoogleChart(){google.charts.setOnLoadCallback(this.createChart.bind(this))}createGoogleChart(){if(this.isComboChart())return new google.visualization.ComboChart(this.chartContainer);if(1===this.types.length)switch(this.types[0]){case l.Area:return new google.visualization.AreaChart(this.chartContainer);case l.Bubble:return new google.visualization.BubbleChart(this.chartContainer);case l.Cal:return new google.visualization.Calendar(this.chartContainer);case l.Candlestick:return new google.visualization.CandlestickChart(this.chartContainer);case l.Geo:return new google.visualization.GeoChart(this.chartContainer);case l.Hbar:return new google.visualization.BarChart(this.chartContainer);case l.Line:return new google.visualization.LineChart(this.chartContainer);case l.Pie:return new google.visualization.PieChart(this.chartContainer);case l.Sankey:return new google.visualization.Sankey(this.chartContainer);case l.Scatter:return new google.visualization.ScatterChart(this.chartContainer);default:return new google.visualization.ColumnChart(this.chartContainer)}}getMainChartType(){return this.types.length>0?this.types[0]:l.Unk}isComboChart(){return this.types.length>1}createGoogleChartOptions(){const t={is3D:c.D3===this.asp};return this.colors&&this.colors.length>0&&(t.colors=this.colors),this.width&&(t.width=this.width),this.height&&(t.height=this.height),this.legend||(t.legend={position:"none"}),!this.stacked||l.Hbar!==this.getMainChartType()&&l.Vbar!==this.getMainChartType()||(t.isStacked=!0),this.graphTitle&&(t.title=this.graphTitle,t.titleTextStyle={},this.graphTitleColor&&(t.titleTextStyle.color=this.graphTitleColor),this.graphTitleSize&&(t.titleTextStyle.fontSize=this.graphTitleSize)),this.isComboChart()&&(t.series={},this.types.forEach((e,i)=>{let a="bars";l.Line===e?a="line":l.Area===e&&(a="area"),t.series[i.toString()]={type:a}})),t}createChart(){const t=u(this.data,{axis:this.axis,series:this.series}),e=C(this.data,t,this.showMarks),i=[];for(let e=0;e<t.length;e++)i.push({label:t[e].name}),e>0&&this.showMarks&&i.push({type:"string",role:"annotation"});this.gChartDataTable=new google.visualization.arrayToDataTable([i,...e]),this.gChartView=new google.visualization.DataView(this.gChartDataTable),this.gChart=this.createGoogleChart();const a=this.createGoogleChartOptions();this.gChart.draw(this.gChartView,a),google.visualization.events.addListener(this.gChart,"select",this.onChartSelect.bind(this))}onChartSelect(){const t=this.gChart.getSelection()[0];if(t){const e={};if(t.date){if(e.datetime=t.date,!t.row&&0!=t.row)return;{const i=this.gChartView.getTableRowIndex(t.row);e.row=this.data.rows[i]}}else{const i=t.row,a=t.column,s=this.gChartView.getTableRowIndex(null!=i?i:0);if(e.row=this.data.rows[s],this.series.length>1){let t=this.gChartView.getTableColumnIndex(null!=a?a:0);"annotation"===this.gChartDataTable.getColumnProperty(t,"role")&&--t,e.column=h(this.data.columns,this.series[t-1])}else e.column=h(this.data.columns,this.series[0])}this.kupChartClicked.emit(e)}}render(){return i("div",{id:"chart",ref:t=>this.chartContainer=t})}get el(){return a(this)}}export{p as kup_chart};