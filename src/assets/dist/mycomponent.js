!function(e,t,n,r,o,c,s,i,u,p,a,l,m,h){for(a=e.mycomponent=e.mycomponent||{},(l=t.createElement("style")).innerHTML=u+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),m=t.head.querySelector("meta[charset]"),t.head.insertBefore(l,m?m.nextSibling:t.head.firstChild),function(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push("mycomponent"),n.componentOnReady||(n.componentOnReady=function(){var t=this;function n(n){if(t.nodeName.indexOf("-")>0){for(var r=e["s-apps"],o=0,c=0;c<r.length;c++)if(e[r[c]].componentOnReady){if(e[r[c]].componentOnReady(t,n))return;o++}if(o<r.length)return void(e["s-cr"]=e["s-cr"]||[]).push([t,n])}n(null)}return e.Promise?new e.Promise(n):{then:n}})}(e,0,p),o=o||a.resourcesUrl,l=(m=t.querySelectorAll("script")).length-1;l>=0&&!(h=m[l]).src&&!h.hasAttribute("data-resources-url");l--);m=h.getAttribute("data-resources-url"),!o&&m&&(o=m),!o&&h.src&&(o=(m=h.src.split("/").slice(0,-1)).join("/")+(m.length?"/":"")+"mycomponent/"),l=t.createElement("script"),function(e,t,n,r){return!(t.search.indexOf("core=esm")>0)&&(!(!(t.search.indexOf("core=es5")>0||"file:"===t.protocol)&&e.customElements&&e.customElements.define&&e.fetch&&e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")&&"noModule"in n)||function(e){try{return new Function('import("")'),!1}catch(e){}return!0}())}(e,e.location,l)?l.src=o+"mycomponent.gx0gtwkq.js":(l.src=o+"mycomponent.epvo9vpf.js",l.setAttribute("type","module"),l.setAttribute("crossorigin",!0)),l.setAttribute("data-resources-url",o),l.setAttribute("data-namespace","mycomponent"),t.head.appendChild(l)}(window,document,0,0,0,0,0,0,"ketchup-btn,ketchup-button,ketchup-combo,ketchup-fld,ketchup-html,ketchup-portal,ketchup-portal-instance,ketchup-radio,ketchup-text-input,my-component",HTMLElement.prototype);