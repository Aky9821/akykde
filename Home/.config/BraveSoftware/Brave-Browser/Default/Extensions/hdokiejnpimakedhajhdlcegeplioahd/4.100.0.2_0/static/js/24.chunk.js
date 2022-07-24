(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[24],{1008:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n(1),i=(n(0),n(887)),l=n(7),a=n(882),c=n.n(a),s=n(1346),d=n(993),u=n(39),f=n(47),p={id:0,type:"AddAddress",visible:!0,completed:null,seenAt:null,color:s.a.GREY},h={hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openAddAddress:jest.fn(),openAddressView:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return h}}});var A=c()([]);it("should shallow render the AddAddress component without crashing",function(){var e=A({settings:{features:Object(o.a)({},u.a.NEW_INFIELD_DESIGN_FOR_ONBOARDING,!0)}}),t=Object(i.shallow)(Object(r.jsx)(l.a,{store:e},Object(r.jsx)(d.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));expect(t).toHaveLength(1)}),it("should mount render the AddAddress component with new infield design FS ON and click CTA",function(){var e=A({settings:{features:Object(o.a)({},u.a.NEW_INFIELD_DESIGN_FOR_ONBOARDING,!0)},user:{type:f.a.ENTERPRISE_TRIAL}}),t=Object(i.mount)(Object(r.jsx)(l.a,{store:e},Object(r.jsx)(d.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));expect(t.html().includes('data-automation-id="newInfieldInfo"')).toBeTruthy(),t.find(".add-address-button").at(1).simulate("click"),expect(h.openAddressView).toHaveBeenCalled(),expect(h.hideSkillDetailsDialog).toHaveBeenCalled(),expect(h.toggleShowAllSkills).toHaveBeenCalled(),t.unmount()}),it("should mount render the AddAddress component with new infield design FS OFF and click CTA",function(){var e=A({settings:{features:Object(o.a)({},u.a.NEW_INFIELD_DESIGN_FOR_ONBOARDING,!1)},user:{type:f.a.ENTERPRISE_TRIAL}}),t=Object(i.mount)(Object(r.jsx)(l.a,{store:e},Object(r.jsx)(d.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));expect(t.html().includes('data-automation-id="oldInfieldInfo"')).toBeTruthy(),t.find(".add-address-button").at(1).simulate("click"),expect(h.openAddAddress).toHaveBeenCalled(),expect(h.hideSkillDetailsDialog).toHaveBeenCalled(),expect(h.toggleShowAllSkills).toHaveBeenCalled(),t.unmount()})},882:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return a(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,l.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return a(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!a(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(70),i=n(883),l=(o=i)&&o.__esModule?o:{default:o};var a=function(e){return"function"===typeof e}},883:function(e,t){var n="[object Object]";var o,r,i=Function.prototype,l=Object.prototype,a=i.toString,c=l.hasOwnProperty,s=a.call(Object),d=l.toString,u=(o=Object.getPrototypeOf,r=Object,function(e){return o(r(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||d.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=u(e);if(null===t)return!0;var o=c.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&a.call(o)==s}},888:function(e,t){},889:function(e,t){},890:function(e,t){},891:function(e,t){}}]);