System.register(["./p-a690b875.system.js"],function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.H}],execute:function(){var n;(function(t){t["TOP_LEFT"]="TL";t["TOP_RIGHT"]="TR";t["BOTTOM_RIGHT"]="BR";t["BOTTOM_LEFT"]="BL"})(n||(n={}));var o=function(){function t(t){e(this,t);this.position=n.TOP_RIGHT}t.prototype.render=function(){var t=this.text||"";var e=n.TOP_RIGHT===this.position;var o=n.BOTTOM_RIGHT===this.position;var s=n.BOTTOM_LEFT===this.position;var T={"top-left":!e&&!o&&!s,"top-right":e,"bottom-right":o,"bottom-left":s};var u={};if(!t&&this.icon){u[this.icon]=true}return i(r,{class:T},i("div",{id:"badge",class:u},t))};Object.defineProperty(t,"style",{get:function(){return"\@import url(https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css);:host{--bdg_background-color:var(--kup-badge_background-color,#95a5a6);--bdg_color:var(--kup-badge_color,#fff);--bdg_dim:var(--kup-badge_dimension,20px);position:absolute;max-width:70%}:host #badge{background-color:var(--bdg_background-color);color:var(--bdg_color);padding:0 3px;font-size:11px;border-radius:3px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(.top-right){top:-3px;right:-4px}:host(.top-left){top:-3px;left:-4px}:host(.bottom-right){bottom:-3px;right:-4px}:host(.bottom-left){bottom:-3px;left:-4px}:host(.centered) #badge{-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--bdg_dim);height:var(--bdg_dim);border-radius:calc(var(--bdg_dim) / 2)}:host(.centered.top-right){top:-10px;right:-10px}:host(.centered.top-left){top:-10px;left:-10px}:host(.centered.bottom-right){bottom:-10px;right:-10px}:host(.centered.bottom-left){bottom:-10px;left:-10px}"},enumerable:true,configurable:true});return t}();t("kup_badge",o)}}});