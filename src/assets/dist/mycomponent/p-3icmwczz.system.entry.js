System.register(["./p-a690b875.system.js"],function(t){"use strict";var i,e,o,a;return{setters:[function(t){i=t.r;e=t.c;o=t.h;a=t.g}],execute:function(){var l=function(){function t(t){i(this,t);this.closable=false;this.disabled=false;this.close=e(this,"close",7)}t.prototype.onCloseClicked=function(){if(!this.disabled){this.close.emit()}};t.prototype.render=function(){var t=this;var i=null;if(this.closable){i=o("svg",{version:"1.1",width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"false",onClick:function(){return t.onCloseClicked()}},o("path",{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}))}var e={disabled:this.disabled};return o("span",{id:"chip",class:e,tabindex:"0","aria-disabled":this.disabled?"true":"false"},o("span",{id:"content"},o("slot",null),i))};Object.defineProperty(t,"style",{get:function(){return":host{--chi_color:var(--kup-chip_color,#1a1a1a);--chi_icon-color:var(--kup-chip_icon-color,#d91e18);--chi_icon-color-hover:var(--kup-chip_icon-color-hover,#f0423c);--chi_background:var(--kup-chip_background,#f0f0f0);--chi_background-hover:var(--kup-chip_background-hover,#e5e5e5);--chi_disabled-color:var(--kup-chip_disabled-color,#888)}#chip{background:var(--chi_background);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle;margin:.5rem;padding:.5rem;outline:none;cursor:default}#chip:not(.disabled):hover{background:var(--chi_background-hover)}#chip #content{margin:0 3px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle;-ms-flex-pack:justify;justify-content:space-between;color:var(--chi_color)}#chip #content svg{cursor:pointer;fill:var(--chi_icon-color);margin-left:4px}#chip #content svg:hover{fill:var(--chi_icon-color-hover)}#chip.disabled #content{color:var(--chi_disabled-color)}#chip.disabled #content svg{cursor:default;fill:var(--chi_disabled-color)}"},enumerable:true,configurable:true});return t}();t("kup_chip",l);var n=function(){function t(t){i(this,t);this.layout="1";this.visible=false;this.tooltipPosition={};this.kupTooltipLoadData=e(this,"kupTooltipLoadData",6);this.kupTooltipLoadDetail=e(this,"kupTooltipLoadDetail",6)}t.prototype.onDataChanged=function(){var t=this;if(this.visible){this.positionRecalc();this.loadDetailTimeout=setTimeout(function(){return t.loadDetail()},200)}};t.prototype.hasDetailData=function(){return!!this.detailData&&!!this.detailData.rows};t.prototype.resetTimeouts=function(){if(this.tooltipTimeout){clearTimeout(this.tooltipTimeout);this.tooltipTimeout=null}if(this.loadDetailTimeout){clearTimeout(this.loadDetailTimeout);this.loadDetailTimeout=null}};t.prototype.loadDetail=function(){this.loadDetailTimeout=null;this.kupTooltipLoadDetail.emit()};Object.defineProperty(t.prototype,"rows",{get:function(){return this.hasDetailData()?this.detailData.rows:[]},enumerable:true,configurable:true});t.prototype.getImage=function(){if(this.data){return this.data.image}return""};t.prototype.getTitle=function(){if(this.data){return this.data.title}return""};t.prototype.getContent=function(){return this.data?this.data.content:{}};t.prototype.onMouseOver=function(){var t=this;if(!this.tooltipTimeout){this.tooltipTimeout=setTimeout(function(){t.tooltipTimeout=null;t.visible=true;t.kupTooltipLoadData.emit()},200)}};t.prototype.onMouseLeave=function(){this.data=null;this.detailData=null;this.visible=false;this.resetTimeouts()};t.prototype.getDefaultLayout=function(){return[o("div",{class:"left"},o("img",{src:this.getImage(),width:"75",height:"75"})),o("div",{class:"right"},o("h3",null,this.getTitle()),this.getInfos())]};t.prototype.getLayout2=function(){return o("div",null,o("h3",null,this.getTitle()))};t.prototype.getLayout3=function(){return[o("div",null,o("h4",null,this.getTitle())),this.getInfos()]};t.prototype.getInfos=function(){var t=null;var i=this.getContent();if(i){t=[];for(var e=1;e<=2;e++){var a=i["info"+e];if(a&&a.label&&a.label){t.push(o("div",null,o("span",{class:"label"},a.label,": ")," "+a.value))}}}return t};t.prototype.positionRecalc=function(){this.tooltipPosition={};var t=this.wrapperEl.getBoundingClientRect();var i=this.hasDetailData?300:150;if(window.innerHeight-t.bottom<i){this.tooltipPosition.bottom=window.innerHeight-t.top+3+"px"}else{this.tooltipPosition.top=t.bottom+3+"px"}if(window.innerWidth-t.left<350){this.tooltipPosition.right=window.innerWidth-t.right+"px"}else{this.tooltipPosition.left=t.left+"px"}};t.prototype.createTooltip=function(){if(!this.data){return null}var t=null;var i={};if(this.layout==="2"){t=this.getLayout2();i["layout2"]=true}else if(this.layout==="3"){t=this.getLayout3();i["layout3"]=true}else{t=this.getDefaultLayout()}var e=null;if(this.hasDetailData()){e=this.rows.map(function(t){return o("div",{class:"detail-row"},o("div",{class:"detail-row__label"},t.cells["label"].value),o("div",{class:"detail-row__value"},t.cells["value"].value))})}var a={visible:this.hasDetailData()};var l=Object.assign({},this.tooltipPosition);return o("div",{id:"tooltip",hidden:!this.visible||!this.data,style:l},o("div",{id:"main-content",class:i},t),o("div",{id:"detail",class:a},e))};t.prototype.render=function(){var t=this;return o("div",{id:"wrapper",onMouseOver:this.onMouseOver.bind(this),onMouseLeave:this.onMouseLeave.bind(this),ref:function(i){return t.wrapperEl=i}},o("slot",null),this.createTooltip())};Object.defineProperty(t.prototype,"tooltipEl",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{data:["onDataChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--tlt_background:var(--kup-tlt_background,#fff);--tlt_border_color:var(--kup-tlt_border-color,#ccc);--tlt_detail-lbl-color:var(--kup-detail-lbl-color,#616161);--tlt_detail-txt-color:var(--kup-detail-txt-color,#888);--tlt_shadow:var(--kup-tlt_shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5));--tlt_display:var(--kup-tlt_display,inline-block)}:host #wrapper{position:relative;display:var(--tlt_display)}:host #wrapper #tooltip{position:fixed;background:var(--tlt_background);z-index:1000;-webkit-box-shadow:var(--tlt_shadow);box-shadow:var(--tlt_shadow);border-radius:3px;min-width:350px}:host #wrapper #tooltip #main-content{margin:20px;display:-ms-flexbox;display:flex;color:var(--tlt_detail-txt-color)}:host #wrapper #tooltip #main-content .left{width:75px;margin-right:15px}:host #wrapper #tooltip #main-content .right{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}:host #wrapper #tooltip #main-content.layout2{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host #wrapper #tooltip #main-content.layout3{-ms-flex-direction:column;flex-direction:column}:host #wrapper #tooltip #main-content.layout3>div:not(:last-child){margin-bottom:6px}:host #wrapper #tooltip #main-content h3,:host #wrapper #tooltip #main-content h4{margin:0}:host #wrapper #tooltip #main-content .label{color:var(--tlt_detail-lbl-color)}:host #wrapper #tooltip #detail:not(.visible){max-height:0;opacity:0;-webkit-transition:max-height .5s ease-out,opacity .5s ease-out;transition:max-height .5s ease-out,opacity .5s ease-out}:host #wrapper #tooltip #detail.visible{border-top:1px solid var(--tlt_border_color);padding:20px;max-height:500px;opacity:1;-webkit-transition:max-height .5s ease-in,opacity .5s ease-in;transition:max-height .5s ease-in,opacity .5s ease-in}:host #wrapper #tooltip #detail .detail-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host #wrapper #tooltip #detail .detail-row:not(:last-child){margin-bottom:6px}:host #wrapper #tooltip #detail .detail-row__label{color:var(--tlt_detail-lbl-color)}"},enumerable:true,configurable:true});return t}();t("kup_tooltip",n)}}});