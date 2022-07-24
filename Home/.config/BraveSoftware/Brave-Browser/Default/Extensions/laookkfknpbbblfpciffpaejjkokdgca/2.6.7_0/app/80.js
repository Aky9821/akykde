(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[80],{82653:(e,t,a)=>{(e.exports=a(23645)(!1)).push([e.id,"\niframe[data-v-2dff5714] { height: 100%; width: 100%; border: none;\n}\n",""])},40093:(e,t,a)=>{(e.exports=a(23645)(!1)).push([e.id,".upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 1.25rem;\n\t--input-bg: rgba(0,0,0,0.03);\n\t--input-border-color: hsl(var(--hue), 2%, 72%);\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--color-icon: var(--color-light-text);\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n\n\tpadding: 3rem;\n}\n\n\t.modal .upgrade-flow { padding-bottom: 1rem; }\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Poppins, Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; opacity: 0.7; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-right-fade-enter-active.upgrade-flow .back,\n\t\t.slide-right-fade-leave-active.upgrade-flow .back,\n\t\t.slide-left-fade-enter-active.upgrade-flow .back,\n\t\t.slide-left-fade-leave-active.upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--color-icon); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: calc(100% - 2px); opacity: 0; color: var(--color); /* <-- Account site override */ font-size: 0.75rem; font-weight: 600; pointer-events: none; text-transform: uppercase; }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input, .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); border: none; background-color: var(--input-bg); box-shadow: inset 0 0 0 1px var(--input-border-color); border-radius: var(--input-border-radius); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -webkit-appearance: none; -webkit-border-radius: var(--input-border-radius); -moz-appearance: none; appearance: none; background-position-x: calc(100% - 6px); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:hover, .upgrade-flow select:hover, .upgrade-flow .radio:hover, .upgrade-flow .input:hover { --input-border-color:  hsl(var(--hue), 2%, 52%); }\n\n\t\t\t.upgrade-flow input:focus, .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* <-- !important needed for account site */ }\n\n\n\n\t\t.upgrade-flow .radio { /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ border-radius: 100%; transition: all var(--transition-medium) ease; }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; font-size: 14px; opacity: 0; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { color: white; opacity: 1; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url('/img/icon/down.svg') no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  {\n}\n",""])},86940:(e,t,a)=>{var n=a(40093);e.exports="string"==typeof n?n:n.toString()},70080:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{ref:"iframe",attrs:{src:e.$options.iframeOrigin+e.$options.iframeQuery,"data-test-loaded":e.loaded,"data-test":"upgrade"},on:{load:e.focusCardElement}})};n._withStripped=!0;var o=a(86940),r=a.n(o);const i={iframeOrigin:m.globals.urlRootAccount+"ext-upgrade",iframeQuery:"?parentURL="+encodeURI(window.origin),name:"Upgrade",props:{transitionActive:{type:Boolean,default:!1},isActiveStep:{type:Boolean,default:!1},plans:{type:Object,default:()=>({})},sales:{type:Object,default:()=>({})}},data:()=>({loaded:!1,selectedPlanId:""}),computed:{planInfo(){const e=this.selectedPlanId||Object.keys(this.plans).find((e=>this.plans[e].default)),t=this.plans[e],a=this.sales&&this.sales[e],n={frequency:t.frequency,price:t.friendlyPrice};return a&&(n.salePrice=a.friendlyPrice),n}},watch:{transitionActive(e){this.loaded&&this.$refs.iframe.contentWindow&&this.$refs.iframe.contentWindow.postMessage({transitioning:e},m.globals.urlRootAccount)},isActiveStep(e){e?(this.focusCardElement(),this.$e.on("modal:interceptSubStepCompletion",this.triggerSubmitFromManager)):this.$e.off("modal:interceptSubStepCompletion",this.triggerSubmitFromManager)}},created(){this.trimmedUrlRootAccount=m.globals.urlRootAccount.slice(0,-1),this.$e.on("upgradeDataChanged",this.updateSelectedPlan),window.addEventListener("message",this.onMessage),this.updateSelectedPlan()},destroyed(){window.removeEventListener("message",this.onMessage),this.$e.off("upgradeDataChanged",this.updateSelectedPlan)},methods:{onMessage(e){e.origin&&e.origin.startsWith(this.trimmedUrlRootAccount)&&("upgrade:submit"===e.data.type?this.onStripeToken(e.data):"upgrade:goBack"===e.data.type?this.$emit("goBack"):"upgrade:loaded"===e.data.type&&this.onIframeLoaded())},onStripeToken(e){const t=localStorage.getObject("upgrade-data");this.subscribe(e.result.token.id,t.plan,"subscribe-existing",t.email,e.name,e.recaptchaResult)},subscribe(e,t,a,n,o,r){const i=this.sales[t]&&this.sales[t].id||this.plans[t]&&this.plans[t].id;$.ajax({type:"POST",url:m.globals.urlRootApi+"account/subscriptions",dataType:"json",contentType:"application/json",data:JSON.stringify({stripe_token:e,plan_id:i,action:a,email:n,name:o,recaptcha:r})}).done((async e=>{m.conditionalFeatures.setFeatures(e.features),e.subscribedAccount&&localStorage.setItem("subscribedAccount",e.subscribedAccount),localStorage.removeItem("unregistered"),this.$emit("nextStep",!0),this.sendMessage({type:"upgrade:submitResponse",success:!0})})).fail((e=>{const t=e&&e.response&&e.response.status;e=e&&e.response&&e.response.data&&e.response.data.message||!0,this.sendMessage({type:"upgrade:submitResponse",error:e,status:t})}))},updateSelectedPlan(){const e=localStorage.getObject("upgrade-data"),t=e&&e.plan;t&&(this.selectedPlanId=t,this.loaded&&this.notifyIframePlanChange())},onIframeLoaded(){this.loaded=!0,this.sendMessage({type:"upgrade:loadedResponse",css:r(),planInfo:this.planInfo})},triggerSubmitFromManager(){this.sendMessage({type:"upgrade:submitFromManager"})},focusCardElement(){this.sendMessage({type:"focus"})},notifyIframePlanChange(){this.sendMessage({planInfo:this.planInfo})},sendMessage(e){this.$refs.iframe&&this.$refs.iframe.contentWindow&&this.$refs.iframe.contentWindow.postMessage(e,m.globals.urlRootAccount)}}};a(53191);var s=(0,a(51900).Z)(i,n,[],!1,null,"2dff5714",null);s.options.__file="source/addins-vue/modal/upgrade/Upgrade.vue";const p=s.exports},53191:(e,t,a)=>{var n=a(82653);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(45346).Z)("82208be6",n,!1,{ssrId:!0})}}]);