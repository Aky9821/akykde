(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[32],{1102:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(0),n(882)),i=n.n(r),l=n(887),c=n(1346),a=n(998),u=n(47),s=n(7),d={id:0,type:"MonitorYourDigitalSecurity",visible:!0,completed:null,seenAt:null,color:c.a.BLUE},f={complete:jest.fn(),hideExpandedSkillInDrawer:jest.fn(),toggleShowAllSkills:jest.fn(),hideSkillDetailsDialog:jest.fn(),openSecurityDashboard:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}});var p=i()([])({secondaryOnboarding:{isHowToOpen:!1},user:{type:u.a.ENTERPRISE_TRIAL}});it("should shallow render the MonitorYourDigitalSecurity ad component without crashing",function(){var e=Object(l.shallow)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(a.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));expect(e).toHaveLength(1)}),it("should open the security dashboard and be completed when the MonitorYourDigitalSecurity button is clicked",function(){var e=Object(l.mount)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(a.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));e.find(".action-cta").at(1).simulate("click"),e.unmount(),expect(f.openSecurityDashboard).toHaveBeenCalled(),expect(f.complete).toHaveBeenCalled(),expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled()}),it("should be closed when the MonitorYourDigitalSecurity button is clicked from all skills",function(){var e=Object(l.mount)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(a.default,{skill:d,expanded:!0,fromAllSkillsDialog:!0})));e.find(".action-cta").at(1).simulate("click"),e.unmount(),expect(f.openSecurityDashboard).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),expect(f.toggleShowAllSkills).toHaveBeenCalled()})},882:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return c(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,l.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return c(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!c(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(70),i=n(883),l=(o=i)&&o.__esModule?o:{default:o};var c=function(e){return"function"===typeof e}},883:function(e,t){var n="[object Object]";var o,r,i=Function.prototype,l=Object.prototype,c=i.toString,a=l.hasOwnProperty,u=c.call(Object),s=l.toString,d=(o=Object.getPrototypeOf,r=Object,function(e){return o(r(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||s.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var o=a.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&c.call(o)==u}},888:function(e,t){},889:function(e,t){},890:function(e,t){},891:function(e,t){}}]);