const t=window.mycomponent.h;class e{constructor(){this.label="Open in a new window",this.isButton=!1,this.src=""}onFrameError(){this.ketchupHtmlError.emit()}onFrameLoaded(){this.ketchupHtmlLoaded.emit()}render(){return this.isButton?t("a",{"aria-label":this.label,href:this.src,rel:"noopener",target:"_blank"},t("kup-button",{align:"right",iconClass:"mdi mdi-open-in-new",label:this.label})):t("iframe",{class:"ketchup-frame",onError:this.onFrameError.bind(this),onLoad:this.onFrameLoaded.bind(this),src:this.src})}static get is(){return"kup-html"}static get encapsulation(){return"shadow"}static get properties(){return{isButton:{type:Boolean,attr:"is-button",reflectToAttr:!0},label:{type:String,attr:"label"},src:{type:String,attr:"src"}}}static get events(){return[{name:"ketchupHtmlError",method:"ketchupHtmlError",bubbles:!0,cancelable:!1,composed:!0},{name:"ketchupHtmlLoaded",method:"ketchupHtmlLoaded",bubbles:!0,cancelable:!1,composed:!0}]}static get style(){return".sc-kup-html-h{--htm_height:var(--kup-html_height,600px);--htm_width:var(--kup-html_width,100%);display:inline-block;width:100%}[is-button].sc-kup-html-h{display:inline-block;width:auto}.ketchup-frame.sc-kup-html{height:var(--htm_height);width:var(--htm_width)}"}}export{e as KupHtml};