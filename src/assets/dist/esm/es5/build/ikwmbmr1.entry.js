import{h}from"../mycomponent.core.js";var KetchupBtn=function(){function t(){this.config={}}return t.prototype.onBtnClicked=function(t){this.config.showSelection&&(this.selectedBtnIndex=parseInt(t.target.dataset.id))},t.prototype.render=function(){var t=this,n=[];this.buttons&&(this.config.columns&&this.config.columns>0?this.buttons.forEach(function(o,e){0==e%t.config.columns&&n.push([]),n[n.length-1].push(o)}):this.config.horizontal?n[0]=this.buttons:n=this.buttons.map(function(t){var n=[];return n.push(t),n}));var o=null,e=0;n.length>0&&(o=n.map(function(n){var o=n.map(function(n){var o=t.config.buttonClass||"";return e===t.selectedBtnIndex&&(o+=" btn-selected"),h("td",null,h("kup-button",{iconUrl:t.config.iconUrl,label:n.value,iconClass:n.iconClass,fillspace:t.config.fillspace,showtext:t.config.showtext,showicon:t.config.showicon,rounded:t.config.rounded,textmode:t.config.textmode,transparent:t.config.transparent,buttonClass:o,flat:t.config.flat,"data-id":e++,onKetchupButtonClicked:function(n){return t.onBtnClicked(n)},align:t.config.align,class:t.config.fillspace||!t.config.horizontal?"fillspace":""}))});return h("tr",null,o)}));var i="btn-container";this.config.fillspace&&(i+=" fillspace"),this.config.horizontal||(i+=" vertical");var c={};return this.config.btnStyle&&(this.config.btnStyle.fontColor&&(c["--kup-button_text-color"]=this.config.btnStyle.fontColor),this.config.btnStyle.underline&&(c["--kup-button_text-decoration"]="underline"),this.config.btnStyle.fontName&&(c["--kup-button_font-family"]=this.config.btnStyle.fontName),this.config.btnStyle.fontSize&&(c["--kup-button_font-size"]=this.config.btnStyle.fontSize),this.config.btnStyle.bold&&(c["--kup-button_font-weight"]=700),this.config.btnStyle.bckColor&&(c["--kup-button_main-color"]=this.config.btnStyle.bckColor),this.config.btnStyle.italic&&(c["--kup-button_font-style"]="italic"),this.config.borderColor&&(c["--kup-button_border-color"]=this.config.borderColor)),h("table",{class:i,style:c},h("tbody",null,o))},Object.defineProperty(t,"is",{get:function(){return"ketchup-btn"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttons:{type:"Any",attr:"buttons"},config:{type:"Any",attr:"config"},selectedBtnIndex:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".btn-container{border-collapse:collapse}.btn-container.fillspace{width:100%}.btn-container tbody tr td{padding:3px}"},enumerable:!0,configurable:!0}),t}();export{KetchupBtn};