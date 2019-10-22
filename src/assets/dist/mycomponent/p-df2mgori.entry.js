import{r as t,c as i,h as s,g as e}from"./p-df6a2f70.js";class a{constructor(s){t(this,s),this.closable=!1,this.disabled=!1,this.close=i(this,"close",7)}onCloseClicked(){this.disabled||this.close.emit()}render(){let t=null;return this.closable&&(t=s("svg",{version:"1.1",width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"false",onClick:()=>this.onCloseClicked()},s("path",{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}))),s("span",{id:"chip",class:{disabled:this.disabled},tabindex:"0","aria-disabled":this.disabled?"true":"false"},s("span",{id:"content"},s("slot",null),t))}static get style(){return":host{--chi_color:var(--kup-chip_color,#1a1a1a);--chi_icon-color:var(--kup-chip_icon-color,#d91e18);--chi_icon-color-hover:var(--kup-chip_icon-color-hover,#f0423c);--chi_background:var(--kup-chip_background,#f0f0f0);--chi_background-hover:var(--kup-chip_background-hover,#e5e5e5);--chi_disabled-color:var(--kup-chip_disabled-color,#888)}#chip{background:var(--chi_background);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle;margin:.5rem;padding:.5rem;outline:none;cursor:default}#chip:not(.disabled):hover{background:var(--chi_background-hover)}#chip #content{margin:0 3px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle;-ms-flex-pack:justify;justify-content:space-between;color:var(--chi_color)}#chip #content svg{cursor:pointer;fill:var(--chi_icon-color);margin-left:4px}#chip #content svg:hover{fill:var(--chi_icon-color-hover)}#chip.disabled #content{color:var(--chi_disabled-color)}#chip.disabled #content svg{cursor:default;fill:var(--chi_disabled-color)}"}}function r(t){const i=t.indexOf("R"),s=t.indexOf("G"),e=t.indexOf("B");if(i<0||s<0||e<0)return;const a=t.substring(i+1,i+4),r=t.substring(s+1,s+4),h=t.substring(e+1,e+4);try{return new o(parseInt(a),parseInt(r),parseInt(h))}catch(t){console.error(t)}return null}class h{constructor(){this.width=100,this.height=100,this.color=null,this.shape="bar"}init(t){t.forEach(t=>{t.toUpperCase().startsWith("HEIGHT;")?this.initHeight(t):t.toUpperCase().startsWith("SHAPE;")?this.initShape(t):t.toUpperCase().startsWith("BCOLOR;")||this.initColor(t)})}initColor(t){if(t.length>11&&this.isValidColor(t)){this.color=r(t.substring(0,12));try{this.width=parseFloat(t.substring(13).replace(",","."))}catch(t){console.error(t)}}else if(t.startsWith("*NONE"))try{this.width=parseFloat(t.substring(6).replace(",","."))}catch(t){console.error(t)}}isTrasparent(){return null===this.color}initHeight(t){if(t){const i=t.substring("HEIGHT;".length).replace(",",".");try{this.height=parseFloat(i)}catch(t){console.error(t)}}}initShape(t){const i=(t=t.substring("SHAPE;".length)).indexOf(";");let s=t;if(i>-1){s=t.substring(0,i);try{this.width=parseFloat(t.substring(i+1).replace(",","."))}catch(t){console.error(t)}}switch(s.toLocaleLowerCase()){case"circle":this.shape="circle";break;case"tril":this.shape="tril";break;case"trir":this.shape="trir"}}isValidColor(t){if(!t)return!1;const i=[];let s=!1,e=null,a=(t=t.trim()).indexOf("R");if(a>-1&&(e=t.substring(a+1,a+4),i[0]=parseInt(e),isNaN(i[0])&&(s=!0)),(a=t.indexOf("G"))>-1&&(e=t.substring(a+1,a+4),i[1]=parseInt(e),isNaN(i[1])&&(s=!0)),(a=t.indexOf("B"))>-1&&(e=t.substring(a+1,a+4),i[2]=parseInt(e),isNaN(i[2])&&(s=!0)),s){const a=t.indexOf("R"),r=t.indexOf("G"),h=t.indexOf("B");if(e=t.substring(a+1,r),i[0]=parseInt(e),isNaN(i[0])&&(s=!0),e=t.substring(r+1,h),i[1]=parseInt(e),isNaN(i[1])&&(s=!0),e=t.substring(h+1),i[2]=parseInt(e),isNaN(i[2])&&(s=!0),s)return!1}return!(i[0]<0||i[0]>255||i[1]<0||i[1]>255||i[2]<0||i[2]>255)}getHeight(){return this.height}getWidth(){return this.width}getShape(){return this.shape}getColor(){return this.color}}class o{constructor(t,i,s){this.r=t,this.g=i,this.b=s}toString(){return`rgb(${this.r},${this.g},${this.b})`}}class l{constructor(i){t(this,i),this.height=30,this.width=300,this.graphic_element_marker_splitter="\\\\",this.graphic_element_splitter="\\\\AND\\\\",this.background_color="BCOLOR;R255G000B000",this.default_color=new o(0,0,0)}onValueChange(){this.draw()}componentDidLoad(){this.draw()}draw(){this.value&&this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.drawGraphicCell())}drawGraphicCell(){this.value.split(this.graphic_element_splitter).forEach((t,i)=>{let s="SHAPE;BAR",e=this.background_color,a="HEIGHT;100";const o=t.split(this.graphic_element_marker_splitter),l=[],n=[];o.forEach(t=>{this.isShapeMarker(t)?s=t:this.isBgColorMarker(t)?e=t:this.isHeightMarker(t)?a=t:this.isDecoratorMarker(t)?n.push(t):l.push(t)});const c=l.map(t=>{const i=new h;return i.init([s,e,a,t]),i});if(0===i&&e!==this.background_color){const t=r(e.substring("BCOLOR;".length));this.drawRect(0,0,this.canvas.width,this.canvas.height,t)}let u=0;c.forEach(t=>{switch(t.getShape()){case"circle":u=this.getNewStarXFromCircle(u,t);break;case"tril":u=this.getNewStarXFromTril(u,t);break;case"trir":u=this.getNewStarXFromTrir(u,t);break;default:u=this.getNewStarXFromBar(u,t)}}),n.forEach(t=>{t.startsWith("SEP")||t.startsWith("DIV")?this.drawSeparator(t):t.startsWith("ARW")?this.drawArrow(t):t.startsWith("GRID")&&this.drawGrid(t)})})}isShapeMarker(t){return t&&t.toUpperCase().startsWith("SHAPE;")}isBgColorMarker(t){return t&&t.toUpperCase().startsWith("BCOLOR;")}isHeightMarker(t){return t&&t.toUpperCase().startsWith("HEIGHT;")}isDecoratorMarker(t){return t&&(t.toUpperCase().startsWith("SEP;")||t.toUpperCase().startsWith("DIV;")||t.toUpperCase().startsWith("ARW;")||t.toUpperCase().startsWith("GRID;"))}getDim(t,i){return Math.floor(t/100*i)}getNewStarXFromBar(t,i){const s=this.getDim(this.canvas.width,i.getWidth()),e=this.getDim(this.canvas.height,i.getHeight()),a=this.canvas.height-e;return i.isTrasparent()||this.drawRect(t,a,s,e,i.getColor()),s}getNewStarXFromCircle(t,i){const s=this.getDim(this.canvas.width,i.getWidth()),e=(t+s)/2;return i.isTrasparent()||this.drawArc(e,this.canvas.height/2,i.getColor()),s}getNewStarXFromTril(t,i){const s=this.getDim(this.canvas.width,i.getWidth());return i.isTrasparent()||this.drawTri(s,0,t,this.canvas.height/2,i.getColor()),s}getNewStarXFromTrir(t,i){const s=this.getDim(this.canvas.width,i.getWidth());return i.isTrasparent()||this.drawTri(t,0,s,this.canvas.height/2,i.getColor()),s}drawArc(t,i,s){this.ctx.fillStyle=s.toString(),this.ctx.beginPath(),this.ctx.arc(t,i,i,0,2*Math.PI,!0),this.ctx.fill()}drawRect(t,i,s,e,a){this.ctx.fillStyle=a.toString(),this.ctx.fillRect(t,i,s,e)}drawTri(t,i,s,e,a){this.ctx.fillStyle=a.toString(),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(s,e),this.ctx.lineTo(t,this.canvas.height),this.ctx.fill()}drawArrow(t){let i=t.substring("ARW;".length);i.indexOf(",")>-1&&(i=i.replace(",",".")),this.ctx.fillStyle=this.default_color.toString();const s=this.getDim(this.canvas.width,parseFloat(i)),e=this.canvas.height,a=Math.floor(e/3),r=a/2;this.ctx.beginPath(),this.ctx.moveTo(s,0),this.ctx.lineTo(s-a,e/2),this.ctx.lineTo(s-r,e/2),this.ctx.lineTo(s-r,e),this.ctx.lineTo(s+r,e),this.ctx.lineTo(s+r,e/2),this.ctx.lineTo(s+a,e/2),this.ctx.fill()}drawGrid(t){let i=t.substring("GRID;".length);i.indexOf(",")>-1&&(i=i.replace(",","."));const s=parseInt(i),e=this.canvas.width/s,a=this.canvas.height/5,r=this.canvas.height-a;for(let t=e;t<this.canvas.width;t+=e)this.drawRect(t,r,1,a,this.default_color)}drawSeparator(t){const i=t.substring("SEP;".length).split(";");let s="R000G000B000",e=2,a=i[0];i.length>1&&(s=i[1]),i.length>2&&(e=parseInt(i[2])),a.indexOf(",")>-1&&(a=a.replace(",","."));const h=this.getDim(this.canvas.width,parseFloat(a));this.drawRect(h,0,e,this.canvas.height,r(s))}render(){return s("canvas",{ref:t=>this.canvas=t,height:this.height,width:this.width},this.value)}static get watchers(){return{value:["onValueChange"]}}}class n{constructor(s){t(this,s),this.layout="1",this.visible=!1,this.tooltipPosition={},this.kupTooltipLoadData=i(this,"kupTooltipLoadData",6),this.kupTooltipLoadDetail=i(this,"kupTooltipLoadDetail",6)}onDataChanged(){if(this.visible){this.tooltipPosition={};const t=this.wrapperEl.getBoundingClientRect();window.innerHeight-t.bottom<150?this.tooltipPosition.bottom=`${t.height+3}px`:this.tooltipPosition.top=`${t.height}px`,window.innerWidth-t.left<350?this.tooltipPosition.right="0":this.tooltipPosition.left="0",this.loadDetailTimeout=setTimeout(()=>this.loadDetail(),200)}}hasDetailData(){return!!this.detailData&&!!this.detailData.rows}resetTimeouts(){this.tooltipTimeout&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=null),this.loadDetailTimeout&&(clearTimeout(this.loadDetailTimeout),this.loadDetailTimeout=null)}loadDetail(){this.loadDetailTimeout=null,this.kupTooltipLoadDetail.emit()}get rows(){return this.hasDetailData()?this.detailData.rows:[]}getImage(){return this.data?this.data.image:""}getTitle(){return this.data?this.data.title:""}getContent(){return this.data?this.data.content:{}}onMouseOver(){this.tooltipTimeout||(this.tooltipTimeout=setTimeout(()=>{this.tooltipTimeout=null,this.visible=!0,this.kupTooltipLoadData.emit()},200))}onMouseLeave(){this.data=null,this.detailData=null,this.visible=!1,this.resetTimeouts()}getDefaultLayout(){return[s("div",{class:"left"},s("img",{src:this.getImage(),width:"75",height:"75"})),s("div",{class:"right"},s("h3",null,this.getTitle()),this.getInfos())]}getLayout2(){return s("div",null,s("h3",null,this.getTitle()))}getLayout3(){return[s("div",null,s("h4",null,this.getTitle())),this.getInfos()]}getInfos(){let t=null;const i=this.getContent();if(i){t=[];for(let e=1;e<=2;e++){const a=i[`info${e}`];a&&a.label&&a.label&&t.push(s("div",null,s("span",{class:"label"},a.label,": ")," "+a.value))}}return t}createTooltip(){if(!this.data)return null;let t=null;const i={};"2"===this.layout?(t=this.getLayout2(),i.layout2=!0):"3"===this.layout?(t=this.getLayout3(),i.layout3=!0):t=this.getDefaultLayout();let e=null;this.hasDetailData()&&(e=this.rows.map(t=>s("div",{class:"detail-row"},s("div",{class:"detail-row__label"},t.cells.label.value),s("div",{class:"detail-row__value"},t.cells.value.value))));const a={visible:this.hasDetailData()},r=Object.assign({},this.tooltipPosition);return s("div",{id:"tooltip",hidden:!this.visible||!this.data,style:r},s("div",{id:"main-content",class:i},t),s("div",{id:"detail",class:a},e))}render(){return s("div",{id:"wrapper",onMouseOver:this.onMouseOver.bind(this),onMouseLeave:this.onMouseLeave.bind(this),ref:t=>this.wrapperEl=t},s("slot",null),this.createTooltip())}get tooltipEl(){return e(this)}static get watchers(){return{data:["onDataChanged"]}}static get style(){return":host{--tlt_background:var(--kup-tlt_background,#fff);--tlt_detail-lbl-color:var(--kup-detail-lbl-color,#888);--tlt_shadow:var(--kup-tlt_shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5))}:host #wrapper{position:relative;display:inline-block}:host #wrapper #tooltip{position:absolute;background:var(--tlt_background);z-index:1000;-webkit-box-shadow:var(--tlt_shadow);box-shadow:var(--tlt_shadow);border-radius:3px;min-width:350px}:host #wrapper #tooltip #main-content{margin:20px;display:-ms-flexbox;display:flex}:host #wrapper #tooltip #main-content .left{width:75px;margin-right:15px}:host #wrapper #tooltip #main-content .right{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}:host #wrapper #tooltip #main-content.layout2{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host #wrapper #tooltip #main-content.layout3{-ms-flex-direction:column;flex-direction:column}:host #wrapper #tooltip #main-content.layout3>div:not(:last-child){margin-bottom:6px}:host #wrapper #tooltip #main-content h3,:host #wrapper #tooltip #main-content h4{margin:0}:host #wrapper #tooltip #main-content .label{color:var(--tlt_detail-lbl-color)}:host #wrapper #tooltip #detail:not(.visible){max-height:0;opacity:0;-webkit-transition:max-height .5s ease-out,opacity .5s ease-out;transition:max-height .5s ease-out,opacity .5s ease-out}:host #wrapper #tooltip #detail.visible{border-top:1px solid #ccc;padding:20px;max-height:500px;opacity:1;-webkit-transition:max-height .5s ease-in,opacity .5s ease-in;transition:max-height .5s ease-in,opacity .5s ease-in}:host #wrapper #tooltip #detail .detail-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host #wrapper #tooltip #detail .detail-row:not(:last-child){margin-bottom:6px}:host #wrapper #tooltip #detail .detail-row__label{color:var(--tlt_detail-lbl-color)}"}}export{a as kup_chip,l as kup_graphic_cell,n as kup_tooltip};