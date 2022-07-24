(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[1808],{83924:(e,a,t)=>{(a=e.exports=t(23645)(!1)).i(t(40093),""),a.push([e.id,"\n.choose-plan[data-v-5464ffd0] {}\n.plan-list[data-v-5464ffd0] { width: var(--form-width-narrow); margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); grid-gap: 8px;\n}\n.plan-list-item[data-v-5464ffd0] { --choose-plan-padding: 14px; padding: var(--choose-plan-padding); align-items: center; display: inline-flex; flex-direction: row; flex: 1 0 49%; background: hsl(0, 0%, 98%); box-shadow: inset 0 0 0 1px var(--input-border-color); border-radius: var(--border-radius); cursor: pointer; outline: none; text-align: left; transition: var(--a-medium);\n}\n.plan-list-item[data-v-5464ffd0]:hover { /*background: hsl(var(--hue-modal), 6%, 92%) linear-gradient(178deg, rgba(255,255,255,0.25), rgba(0,0,0,0.1));*/\n}\n.plan-list-radio-wrapper[data-v-5464ffd0] { display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n.choose-plan .radio[data-v-5464ffd0] { --size: 20px; height: var(--size); width: var(--size); display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.12); box-shadow: none;\n}\n.choose-plan .radio .icon-check[data-v-5464ffd0] { --size: 12px; height: var(--size); width: var(--size); display: none;\n}\n.choose-plan-text-wrapper[data-v-5464ffd0] { margin-left: var(--choose-plan-padding);\n}\n.plan-list-title[data-v-5464ffd0] { margin: -1px 0 3px; display: inline-block; font-size: 1.125rem; font-weight: 500;\n}\n.choose-plan-term .period[data-v-5464ffd0] { margin-right: 6px; margin-bottom: 4px; white-space: nowrap;\n}\n.choose-plan-badge[data-v-5464ffd0] { padding: 3px 5px; display: inline; background: white; border: 1px solid hsla(var(--hue), 60%, 45%, 0.5); border-radius: var(--border-radius); color: var(--color-active); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; vertical-align: 17%; white-space: nowrap;\n}\n.choose-plan-badge[data-v-5464ffd0]:last-child { margin-right: 0;\n}\n.choose-plan-price[data-v-5464ffd0] { opacity: 0.7; font-size: 0.875rem;\n}\n.choose-plan-description[data-v-5464ffd0] { margin-left: 5px; opacity: 0.5; font-size: 0.8125rem;\n}\n.choose-plan .active[data-v-5464ffd0] { opacity: 1 !important; background: hsl(var(--hue-modal), 60%, 95%); box-shadow: inset 0 0 0 2px hsl(var(--hue), 50%, 50%); color: #444 !important; transform: translateY(-1px);\n}\n.choose-plan .active .radio[data-v-5464ffd0] { background: var(--color-active);\n}\n.choose-plan .active .radio .icon-check[data-v-5464ffd0] { display: block; fill: #fff;\n}\n\n\n\t/* Sale updates */\n.has-sale[data-v-5464ffd0] { --sale-color: var(--color-active);\n}\n.has-sale .choose-plan-price-sale[data-v-5464ffd0] { opacity: 1; color: hsl(122, 39%, 49%); font-weight: 500;\n}\n.has-sale .choose-plan-badge[data-v-5464ffd0] { border-color: var(--sale-color); background-color: var(--sale-color); color: white;\n}\n.has-sale .choose-plan-description[data-v-5464ffd0] { margin-top: 3px; margin-left: 0; display: block;\n}\n.has-sale .choose-plan-description .u--strikeout[data-v-5464ffd0] { opacity: 0.7;\n}\n",""])},40093:(e,a,t)=>{(e.exports=t(23645)(!1)).push([e.id,".upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 1.25rem;\n\t--input-bg: rgba(0,0,0,0.03);\n\t--input-border-color: hsl(var(--hue), 2%, 72%);\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--color-icon: var(--color-light-text);\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n\n\tpadding: 3rem;\n}\n\n\t.modal .upgrade-flow { padding-bottom: 1rem; }\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Poppins, Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; opacity: 0.7; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-right-fade-enter-active.upgrade-flow .back,\n\t\t.slide-right-fade-leave-active.upgrade-flow .back,\n\t\t.slide-left-fade-enter-active.upgrade-flow .back,\n\t\t.slide-left-fade-leave-active.upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--color-icon); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: calc(100% - 2px); opacity: 0; color: var(--color); /* <-- Account site override */ font-size: 0.75rem; font-weight: 600; pointer-events: none; text-transform: uppercase; }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input, .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); border: none; background-color: var(--input-bg); box-shadow: inset 0 0 0 1px var(--input-border-color); border-radius: var(--input-border-radius); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -webkit-appearance: none; -webkit-border-radius: var(--input-border-radius); -moz-appearance: none; appearance: none; background-position-x: calc(100% - 6px); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:hover, .upgrade-flow select:hover, .upgrade-flow .radio:hover, .upgrade-flow .input:hover { --input-border-color:  hsl(var(--hue), 2%, 52%); }\n\n\t\t\t.upgrade-flow input:focus, .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* <-- !important needed for account site */ }\n\n\n\n\t\t.upgrade-flow .radio { /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ border-radius: 100%; transition: all var(--transition-medium) ease; }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; font-size: 14px; opacity: 0; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { color: white; opacity: 1; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url('/img/icon/down.svg') no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  {\n}\n",""])},26409:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K"},13608:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS43MDEgNDUuNyI+PHBhdGggZD0iTTIwLjY4NyAzOC4zMzJhNS4zMDggNS4zMDggMCAwMS03LjUwNSAwTDEuNTU0IDI2LjcwNEE1LjMwNiA1LjMwNiAwIDExOS4wNTkgMTkuMmw2LjkyOCA2LjkyN2ExLjM0NCAxLjM0NCAwIDAwMS44OTYgMEwzNi42NDIgNy4zNjhhNS4zMDggNS4zMDggMCAwMTcuNTA1IDcuNTA0bC0yMy40NiAyMy40NnoiIC8+PC9zdmc+Cg=="},21808:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var n=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("section",{staticClass:"upgrade-flow choose-plan",attrs:{"data-test":"choose-plan"}},[e.showBack?n("div",{staticClass:"back icon-wrapper",attrs:{"data-test":"back"},on:{click:e.goBack}},[n("inline-svg",{staticClass:"icon icon-back",attrs:{src:t(26409)}}),e._v(" "),n("span",{staticClass:"icon-label"},[e._v("Email")])],1):e._e(),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"form-body"},[n("ul",{staticClass:"plan-list"},e._l(e.plans,(function(a,o){return n("li",{key:o,staticClass:"plan-list-item",class:{active:e.selectedPlanKey===o,"has-sale":e.getSale(o)},attrs:{tabindex:"0","data-test":a.frequency.toLowerCase()+"-plan"},on:{click:function(a){e.selectedPlanKey=o}}},[n("div",{staticClass:"plan-list-radio-wrapper"},[n("i",{staticClass:"radio"},[n("inline-svg",{staticClass:"icon-check",attrs:{src:t(13608)}})],1)]),e._v(" "),n("div",{staticClass:"choose-plan-text-wrapper"},[n("div",{staticClass:"choose-plan-term"},[n("span",{staticClass:"period"},[e._v(e._s(a.overrideName||"Billed "+a.frequency))]),e._v(" "),e.getSale(o)?n("span",{staticClass:"choose-plan-badge"},[e._v(e._s(e.getSale(o).badgeText))]):a.badgeText?n("span",{staticClass:"choose-plan-badge"},[e._v(e._s(a.badgeText))]):e._e()]),e._v(" "),n("span",{staticClass:"choose-plan-price",class:{"u--strikeout":e.getSale(o)}},[e._v("$"+e._s(a.friendlyPrice)+"/"+e._s(a.interval))]),e._v(" "),e.getSale(o)?n("span",{staticClass:"choose-plan-price choose-plan-price-sale"},[e._v(" $"+e._s(e.getSale(o).friendlyPrice)+"/"+e._s(a.interval))]):e._e(),e._v(" "),a.friendlyMonthlyPrice?n("span",{staticClass:"choose-plan-description"},[n("span",[e._v("Equal to ")]),e._v(" "),n("span",{staticClass:"monthly-price",class:{"u--strikeout":e.getSale(o)}},[e._v("$"+e._s(a.friendlyMonthlyPrice))]),e._v(" "),e.getSale(o)?n("span",{staticClass:"monthly-price"},[e._v(" $"+e._s(e.getSale(o).friendlyMonthlyPrice))]):e._e(),n("span",[e._v("/month")])]):e._e()])])})),0)])])};n._withStripped=!0;var o=t(71308);const r={name:"ChoosePlan",props:{showBack:{type:Boolean,default:!0},plans:{type:Object,default:()=>({})},sales:{type:Object,default:()=>({})}},data:()=>({selectedPlanKey:""}),watch:{plans:{handler(){const e=localStorage.getObject("upgrade-data")||{};e.plan?this.selectedPlanKey=e.plan:this.selectDefaultPlan()},immediate:!0},selectedPlanKey(e){o.ZP.capture("plan select",{feature:"upgrade",term:e})}},created(){this.$e.on("modal:interceptSubStepCompletion",this.savePlan)},destroyed(){this.$e.off("modal:interceptSubStepCompletion",this.savePlan)},methods:{savePlan(){let e=localStorage.getObject("upgrade-data")||{};e.plan=this.selectedPlanKey,localStorage.setObject("upgrade-data",e),this.$e.trigger("upgradeDataChanged"),this.$e.trigger("modal:subStepCompletionIntercepted")},goBack(){this.$emit("goBack")},selectDefaultPlan(){const e=Object.keys(this.plans).find((e=>this.plans[e].default));e&&(this.selectedPlanKey=e),this.savePlan()},getSale(e){return this.sales[e]}}};t(54886);var i=(0,t(51900).Z)(r,n,[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("header",[t("h2",[e._v("Choose a Plan")]),e._v(" "),t("div",{staticClass:"description"},[e._v("Upgrade to Plus")])])}],!1,null,"5464ffd0",null);i.options.__file="source/addins-vue/modal/upgrade/ChoosePlan.vue";const l=i.exports},54886:(e,a,t)=>{var n=t(83924);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,t(45346).Z)("2ba70b23",n,!1,{ssrId:!0})}}]);