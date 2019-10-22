import{r as t,h as i}from"./p-df6a2f70.js";function s(t){const i=t.indexOf("R"),s=t.indexOf("G"),r=t.indexOf("B");if(i<0||s<0||r<0)return;const h=t.substring(i+1,i+4),a=t.substring(s+1,s+4),n=t.substring(r+1,r+4);try{return new e(parseInt(h),parseInt(a),parseInt(n))}catch(t){console.error(t)}return null}class r{constructor(){this.width=100,this.height=100,this.color=null,this.shape="bar"}init(t){t.forEach(t=>{t.toUpperCase().startsWith("HEIGHT;")?this.initHeight(t):t.toUpperCase().startsWith("SHAPE;")?this.initShape(t):t.toUpperCase().startsWith("BCOLOR;")||this.initColor(t)})}initColor(t){if(t.length>11&&this.isValidColor(t)){this.color=s(t.substring(0,12));try{this.width=parseFloat(t.substring(13).replace(",","."))}catch(t){console.error(t)}}else if(t.startsWith("*NONE"))try{this.width=parseFloat(t.substring(6).replace(",","."))}catch(t){console.error(t)}}isTrasparent(){return null===this.color}initHeight(t){if(t){const i=t.substring("HEIGHT;".length).replace(",",".");try{this.height=parseFloat(i)}catch(t){console.error(t)}}}initShape(t){const i=(t=t.substring("SHAPE;".length)).indexOf(";");let s=t;if(i>-1){s=t.substring(0,i);try{this.width=parseFloat(t.substring(i+1).replace(",","."))}catch(t){console.error(t)}}switch(s.toLocaleLowerCase()){case"circle":this.shape="circle";break;case"tril":this.shape="tril";break;case"trir":this.shape="trir"}}isValidColor(t){if(!t)return!1;const i=[];let s=!1,r=null,e=(t=t.trim()).indexOf("R");if(e>-1&&(r=t.substring(e+1,e+4),i[0]=parseInt(r),isNaN(i[0])&&(s=!0)),(e=t.indexOf("G"))>-1&&(r=t.substring(e+1,e+4),i[1]=parseInt(r),isNaN(i[1])&&(s=!0)),(e=t.indexOf("B"))>-1&&(r=t.substring(e+1,e+4),i[2]=parseInt(r),isNaN(i[2])&&(s=!0)),s){const e=t.indexOf("R"),h=t.indexOf("G"),a=t.indexOf("B");if(r=t.substring(e+1,h),i[0]=parseInt(r),isNaN(i[0])&&(s=!0),r=t.substring(h+1,a),i[1]=parseInt(r),isNaN(i[1])&&(s=!0),r=t.substring(a+1),i[2]=parseInt(r),isNaN(i[2])&&(s=!0),s)return!1}return!(i[0]<0||i[0]>255||i[1]<0||i[1]>255||i[2]<0||i[2]>255)}getHeight(){return this.height}getWidth(){return this.width}getShape(){return this.shape}getColor(){return this.color}}class e{constructor(t,i,s){this.r=t,this.g=i,this.b=s}toString(){return`rgb(${this.r},${this.g},${this.b})`}}class h{constructor(i){t(this,i),this.height=30,this.width=300,this.graphic_element_marker_splitter="\\\\",this.graphic_element_splitter="\\\\AND\\\\",this.background_color="BCOLOR;R255G000B000",this.default_color=new e(0,0,0)}onValueChange(){this.draw()}componentDidLoad(){this.draw()}draw(){this.value&&this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.drawGraphicCell())}drawGraphicCell(){this.value.split(this.graphic_element_splitter).forEach((t,i)=>{let e="SHAPE;BAR",h=this.background_color,a="HEIGHT;100";const n=t.split(this.graphic_element_marker_splitter),o=[],c=[];n.forEach(t=>{this.isShapeMarker(t)?e=t:this.isBgColorMarker(t)?h=t:this.isHeightMarker(t)?a=t:this.isDecoratorMarker(t)?c.push(t):o.push(t)});const l=o.map(t=>{const i=new r;return i.init([e,h,a,t]),i});if(0===i&&h!==this.background_color){const t=s(h.substring("BCOLOR;".length));this.drawRect(0,0,this.canvas.width,this.canvas.height,t)}let g=0;l.forEach(t=>{switch(t.getShape()){case"circle":g=this.getNewStarXFromCircle(g,t);break;case"tril":g=this.getNewStarXFromTril(g,t);break;case"trir":g=this.getNewStarXFromTrir(g,t);break;default:g=this.getNewStarXFromBar(g,t)}}),c.forEach(t=>{t.startsWith("SEP")||t.startsWith("DIV")?this.drawSeparator(t):t.startsWith("ARW")?this.drawArrow(t):t.startsWith("GRID")&&this.drawGrid(t)})})}isShapeMarker(t){return t&&t.toUpperCase().startsWith("SHAPE;")}isBgColorMarker(t){return t&&t.toUpperCase().startsWith("BCOLOR;")}isHeightMarker(t){return t&&t.toUpperCase().startsWith("HEIGHT;")}isDecoratorMarker(t){return t&&(t.toUpperCase().startsWith("SEP;")||t.toUpperCase().startsWith("DIV;")||t.toUpperCase().startsWith("ARW;")||t.toUpperCase().startsWith("GRID;"))}getDim(t,i){return Math.floor(t/100*i)}getNewStarXFromBar(t,i){const s=this.getDim(this.canvas.width,i.getWidth()),r=this.getDim(this.canvas.height,i.getHeight()),e=this.canvas.height-r;return i.isTrasparent()||this.drawRect(t,e,s,r,i.getColor()),s}getNewStarXFromCircle(t,i){const s=this.getDim(this.canvas.width,i.getWidth()),r=(t+s)/2;return i.isTrasparent()||this.drawArc(r,this.canvas.height/2,i.getColor()),s}getNewStarXFromTril(t,i){const s=this.getDim(this.canvas.width,i.getWidth());return i.isTrasparent()||this.drawTri(s,0,t,this.canvas.height/2,i.getColor()),s}getNewStarXFromTrir(t,i){const s=this.getDim(this.canvas.width,i.getWidth());return i.isTrasparent()||this.drawTri(t,0,s,this.canvas.height/2,i.getColor()),s}drawArc(t,i,s){this.ctx.fillStyle=s.toString(),this.ctx.beginPath(),this.ctx.arc(t,i,i,0,2*Math.PI,!0),this.ctx.fill()}drawRect(t,i,s,r,e){this.ctx.fillStyle=e.toString(),this.ctx.fillRect(t,i,s,r)}drawTri(t,i,s,r,e){this.ctx.fillStyle=e.toString(),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(s,r),this.ctx.lineTo(t,this.canvas.height),this.ctx.fill()}drawArrow(t){let i=t.substring("ARW;".length);i.indexOf(",")>-1&&(i=i.replace(",",".")),this.ctx.fillStyle=this.default_color.toString();const s=this.getDim(this.canvas.width,parseFloat(i)),r=this.canvas.height,e=Math.floor(r/3),h=e/2;this.ctx.beginPath(),this.ctx.moveTo(s,0),this.ctx.lineTo(s-e,r/2),this.ctx.lineTo(s-h,r/2),this.ctx.lineTo(s-h,r),this.ctx.lineTo(s+h,r),this.ctx.lineTo(s+h,r/2),this.ctx.lineTo(s+e,r/2),this.ctx.fill()}drawGrid(t){let i=t.substring("GRID;".length);i.indexOf(",")>-1&&(i=i.replace(",","."));const s=parseInt(i),r=this.canvas.width/s,e=this.canvas.height/5,h=this.canvas.height-e;for(let t=r;t<this.canvas.width;t+=r)this.drawRect(t,h,1,e,this.default_color)}drawSeparator(t){const i=t.substring("SEP;".length).split(";");let r="R000G000B000",e=2,h=i[0];i.length>1&&(r=i[1]),i.length>2&&(e=parseInt(i[2])),h.indexOf(",")>-1&&(h=h.replace(",","."));const a=this.getDim(this.canvas.width,parseFloat(h));this.drawRect(a,0,e,this.canvas.height,s(r))}render(){return i("canvas",{ref:t=>this.canvas=t,height:this.height,width:this.width},this.value)}static get watchers(){return{value:["onValueChange"]}}}export{h as kup_graphic_cell};