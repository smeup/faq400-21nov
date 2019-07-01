const t=window.mycomponent.h;import{a as e}from"./chunk-cc6d1815.js";class s{constructor(){this.config="",this.showSubmit=!1,this.submitLabel="",this.submitPos="right",this.label="",this.labelPos="left",this.propagate={},this.extensions={},this.radioGeneratedName=e("value"),this.currentValue=null,this.previousValue=null,this.onChangeInstance=this.onChange.bind(this),this.onSubmitInstance=this.onSubmit.bind(this)}updateInternalState(){let t;t="string"==typeof this.config&&this.config?JSON.parse(this.config):this.config;const e=Object.keys(t);let s={};e.forEach(e=>{e in this?this[e]=t[e]:s[e]=t[e]}),this.propagate=s}componentWillLoad(){this.updateInternalState()}onChange(t){const{value:e,info:s}=t.detail;this.ketchupFldChanged.emit({originalEvent:t,oldValue:this.currentValue,value:e,info:s}),this.previousValue=this.currentValue,this.currentValue=e}onSubmit(t){this.ketchupFldSubmit.emit({originalEvent:t,value:this.currentValue,oldValue:this.previousValue,info:{obj:t.detail.info&&t.detail.info.obj?t.detail.info.obj:void 0}})}async getCurrentValue(){return this.currentValue}render(){let e=[],s=null,a=null;this.label.trim().length&&(s=t("label",{class:"kup-fld__label kup-fld--"+this.labelPos},this.label)),this.showSubmit&&(a=t("kup-button",{class:"kup-fld__submit kup-fld--"+this.submitPos,label:this.submitLabel,onKupButtonClicked:this.onSubmitInstance}));const i="top"===this.labelPos,n="top"===this.submitPos;(i||n)&&e.push(t("div",{class:"kup-fld__top-container"},i&&s?s:null,n&&a?a:null)),!i&&s&&e.push(s);let l="",o={};switch(this.type){case"cmb":o.displayedField="value",o.valueField="value",o.onKetchupComboSelected=this.onChangeInstance,l="combo";break;case"rad":o.valueField="obj",o.radioName=this.radioGeneratedName,o.onKetchupRadioChanged=this.onChangeInstance,l="radio";break;case"itx":case"Itx":o.onKetchupTextInputUpdated=this.onChangeInstance,o.onKetchupTextInputSubmit=this.onSubmitInstance,l="text-input"}return e.push(t("kup-"+l,Object.assign({class:"kup-fld__component",items:this.data},o,this.propagate))),!n&&a&&e.push(a),e}static get is(){return"kup-fld"}static get encapsulation(){return"shadow"}static get properties(){return{config:{type:String,attr:"config",watchCallbacks:["updateInternalState"]},data:{type:"Any",attr:"data"},extensions:{state:!0},getCurrentValue:{method:!0},label:{state:!0},labelPos:{state:!0},propagate:{state:!0},showSubmit:{state:!0},submitLabel:{state:!0},submitPos:{state:!0},type:{state:!0}}}static get events(){return[{name:"ketchupFldChanged",method:"ketchupFldChanged",bubbles:!0,cancelable:!1,composed:!0},{name:"ketchupFldSubmit",method:"ketchupFldSubmit",bubbles:!0,cancelable:!1,composed:!0}]}static get style(){return":host{-ms-flex-wrap:wrap;flex-wrap:wrap;--fld_comp-margin:var(--kup-fld_component-margin,8px)}.kup-fld__top-container,:host{display:-ms-flexbox;display:flex}.kup-fld__top-container{-ms-flex-align:center;align-items:center;-ms-flex-order:0;order:0;width:100%}.kup-fld__label{margin:var(--fld_comp-margin);-ms-flex-order:1;order:1}.kup-fld__label.kup-fld--right{-ms-flex-order:4;order:4}.kup-fld__component{margin:var(--fld_comp-margin);-ms-flex-order:3;order:3}.kup-fld__submit{margin:var(--fld_comp-margin);-ms-flex-order:2;order:2}.kup-fld__submit.kup-fld--right{-ms-flex-order:5;order:5}"}}export{s as KupFld};