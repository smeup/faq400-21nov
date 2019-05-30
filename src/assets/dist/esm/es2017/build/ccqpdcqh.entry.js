import { h } from '../mycomponent.core.js';

class KetchupDash {
    constructor() {
        this.layout = '1';
    }
    onDshClickedHandler() {
        this.ketchupDashClicked.emit();
    }
    render() {
        let content = null;
        switch (this.layout) {
            case '2':
                content = (h("div", null,
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" })),
                    h("div", { class: "value-int" },
                        h("slot", { name: "value-int" })),
                    h("div", { class: "value-dec" },
                        h("slot", { name: "value-dec" })),
                    h("div", { class: "unit" },
                        h("slot", { name: "unit" }))));
                break;
            case '3':
                content = (h("div", null,
                    h("div", { class: "value" },
                        h("slot", { name: "value" })),
                    h("div", { class: "descr" },
                        h("slot", { name: "descr" }))));
                break;
            case '4':
                content = (h("div", null,
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" })),
                    h("div", { class: "value-and-unit" },
                        h("div", { class: "value" },
                            h("slot", { name: "value" })),
                        h("div", { class: "unit" },
                            h("slot", { name: "unit" }))),
                    h("div", null),
                    h("div", { class: "descr" },
                        h("slot", { name: "descr" }))));
                break;
            case '5':
                content = (h("div", null,
                    h("div", null,
                        h("div", { class: "descr" },
                            h("slot", { name: "descr" })),
                        h("div", { class: "value" },
                            h("slot", { name: "value" }))),
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" }))));
                break;
            case '6':
                content = (h("div", null,
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" })),
                    h("div", null,
                        h("div", { class: "value" },
                            h("slot", { name: "value" })),
                        h("div", { class: "descr" },
                            h("slot", { name: "descr" })))));
                break;
            case '7':
                content = (h("div", null,
                    h("div", null,
                        h("div", { class: "value" },
                            h("slot", { name: "value" })),
                        h("div", { class: "descr" },
                            h("slot", { name: "descr" }))),
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" }))));
                break;
            case '8':
                content = (h("div", null,
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" })),
                    h("div", { class: "value" },
                        h("slot", { name: "value" })),
                    h("div", { class: "descr" },
                        h("slot", { name: "descr" }))));
                break;
            default:
                content = (h("div", null,
                    h("div", { class: "descr" },
                        h("slot", { name: "descr" })),
                    h("div", { class: "value" },
                        h("slot", { name: "value" }))));
                break;
        }
        return (h("div", { id: "dash", onClick: () => this.onDshClickedHandler() },
            h("div", { id: "content", class: `layout-${this.layout}` }, content)));
    }
    static get is() { return "kup-dash"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "layout": {
            "type": String,
            "attr": "layout"
        }
    }; }
    static get events() { return [{
            "name": "ketchupDashClicked",
            "method": "ketchupDashClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{--dash_bkg-color:var(--kup-dash_background-color,transparent);--dash_color:var(--kup-dash_color,#fff);--dash_border-color:var(--kup-dash_border-color,transparent)}#dash{background-color:var(--dash_bkg-color);border:1px solid var(--dash_border-color);min-height:170px;font-size:30px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:relative}#dash #content{margin:5%}#dash #content .icon{margin:auto;font-size:90%}#dash #content.layout-1,#dash #content.layout-3{text-align:center}#dash #content.layout-1 .descr,#dash #content.layout-3 .descr{font-size:80%}#dash #content.layout-1 .value,#dash #content.layout-3 .value{font-size:150%;padding:2% 0}#dash #content.layout-2>div{display:-ms-flexbox;display:flex}#dash #content.layout-2>div .icon{margin:auto;font-size:200%}#dash #content.layout-2>div .value-int{font-size:250%}#dash #content.layout-2>div .unit,#dash #content.layout-2>div .value-dec{font-size:130%;margin-top:auto;margin-bottom:4%}#dash #content.layout-2>div .unit{margin-left:4%}#dash #content.layout-4>div{display:grid;grid-template-columns:0fr 5fr}#dash #content.layout-4>div .icon{margin:auto;font-size:200%}#dash #content.layout-4>div .value-and-unit{display:-ms-flexbox;display:flex;font-size:250%}#dash #content.layout-4>div .value-and-unit .unit{font-size:50%;margin-top:auto;margin-left:4%;margin-bottom:4%}#dash #content.layout-4>div .descr{margin-left:4%;text-align:left;font-size:80%}#dash #content.layout-5>div,#dash #content.layout-7>div{display:-ms-flexbox;display:flex}#dash #content.layout-5>div .value,#dash #content.layout-7>div .value{font-size:200%}#dash #content.layout-5>div .descr,#dash #content.layout-7>div .descr{margin-left:4%;text-align:left;font-size:65%}#dash #content.layout-5 .icon{font-size:150%;margin:0;margin-top:auto;margin-left:4%;margin-bottom:2%}#dash #content.layout-7 .icon{font-size:150%;margin:0;margin-bottom:auto;margin-left:4%;margin-top:4%}#dash #content.layout-6>div{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}#dash #content.layout-6>div .icon{font-size:250%;width:10%}#dash #content.layout-6>div .value{font-size:220%;text-align:right}#dash #content.layout-6>div .descr{font-size:80%;text-align:right}#dash #content.layout-8>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#dash #content.layout-8>div .icon{margin-right:4%;font-size:75%}#dash #content.layout-8>div .value{margin-right:4%;font-size:250%}#dash #content.layout-8>div .descr{font-size:60%;text-align:left;word-spacing:10000px}"; }
}

export { KetchupDash as KupDash };
