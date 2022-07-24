User=function(e,t,n,i){var s;this._username=e,this._accountClass=t,this._roleName=i,this._element=null,this._userMenuText=null,this._identities=n,this._identityDropdown=null,(s=this).identityEnableCallback=function(e){if(s._identityDropdown&&s._identityDropdown.setValue(e._data.deciname,!1),s._userMenuText&&s._userMenuText.children().detach(),e instanceof AllIdentity)s._userMenuText.append(s._userInfo);else{var t=LPTools.createElement("ul","userMenuText");t.appendChild(LPTools.createElement("li","userMenuTextSingle truncateShort",e.getName())),s._userMenuText.append(t)}},s.identityAddedCallback=function(e){s._identities.push(e),s._identityDropdown?s._identityDropdown.setIdentities(s._identities):s.initializeIdentityDropdown(s._element.get(0).firstChild)},Topics.get(Topics.IDENTITY_ENABLE).subscribe(s.identityEnableCallback),Topics.get(Topics.IDENTITY_ADDED).subscribe(s.identityAddedCallback)},function(e){User.prototype.destruct=function(){this._element.unbind(),this._element.empty(),this._userMenuText.empty(),Topics.get(Topics.IDENTITY_ENABLE).unsubscribe(this.identityEnableCallback),Topics.get(Topics.IDENTITY_ADDED).unsubscribe(this.identityAddedCallback),this._username=null,this._accountClass=null,this._roleName=null,this._element=null,this._userMenuText=null,this._identities=null,this._identityDropdown=null};var l=function(e,t,n,i,s){(s=s||{}).id=n,s.class="menuListItem space-clickable";var r=LPTools.createElement("li"),o=LPTools.createElement(t,s);return o.textContent=i,r.appendChild(o),e.appendChild(r),r};User.prototype.initializeIdentityDropdown=function(e){var t=LPTools.createElement("li","menuListHeader identityDropdownMenuItem");t.appendChild(LPTools.createElement("div",{id:"identityDropdownContainer"})),t.children[0].appendChild(LPTools.createElement("img",{id:"identityDropdownIcon",src:"images/vault_4.0/Identity_Avatar.png"}));var n=LPTools.createElement("div");t.children[0].appendChild(n);var i=LPTools.createElement("input",{id:"identityDropdown",class:"dialogInput selectDropdown",type:"text"});n.appendChild(i),e.insertBefore(t,e.firstChild),this._identityDropdown=new IdentityDropdown(i,this._identities);for(var s=0,r=this._identities.length;s<r;++s){var o=this._identities[s];o._enabled&&this._identityDropdown.setValue(o.getName(),!1)}LPPlatform.addEventListener(t,"click",function(e){e.stopPropagation()}),$(t.nextElementSibling).addClass("divider")},User.prototype.initialize=function(e,t){e.empty();var n=LPTools.createElement("ul"),i="";this._userInfo=LPTools.createElement("ul","userMenuText"),this._userInfo.appendChild(LPTools.createElement("li","userMenuTextPrimary truncateShort",this._username)),i=this._accountClass===Constants.USER_ENTERPRISE_ROLE?LPProxy.isIdentity()?Strings.translateString("Identity %s User",this._roleName):Strings.translateString("Enterprise %s User",this._roleName):LPProxy.isFamilyUser()?LPProxy.isAdmin()?Strings.translateString("Family Manager"):Strings.translateString("Family member"):LPProxy.isIdentity()?LPProxy.isAdmin()?Strings.translateString("Identity Admin"):Strings.translateString("Identity User"):Strings.translateString(this._accountClass),this._userInfo.appendChild(LPTools.createElement("li","userMenuTextSecondary",i)),t.append(this._userInfo),$(l(n,"div","accountSettingsIcon",Strings.Vault.ACCOUNT_SETTINGS,{tabindex:6})).bind("click",function(){Topics.get(Topics.EDIT_SETTINGS).publish({source:"accountdropdown"}),bg.sendLpImprove("vault_user_menu_click",{option:"account_settings",os_type:getOsType(),browser_type:getBrowserType()})}),$(l(n,"a","helpCenterIcon",Strings.Vault.SUPPORT_CENTER,{href:"https://support.logmeininc.com/lastpass",target:"_blank",tabindex:7})).bind("click",function(){window.open("https://support.logmeininc.com/lastpass"),bg.sendLpImprove("vault_user_menu_click",{option:"support_center",os_type:getOsType(),browser_type:getBrowserType()})}),$(l(n,"a","attendWebinarIcon",Strings.Vault.ATTEND_TRAINING,{href:"http://link.lastpass.com/InpUsrLpEmb",target:"_blank",tabindex:8})).bind("click",function(){window.open("http://link.lastpass.com/InpUsrLpEmb"),bg.sendLpImprove("vault_user_menu_click",{option:"attend_traning",os_type:getOsType(),browser_type:getBrowserType()})});var s=9;if(reduxApp&&reduxApp.getState().secondaryOnboarding){var r=reduxApp.getState().secondaryOnboarding,o=reduxApp.getState().user.type,a;if(void 0!==r.isEnabled&&!1===r.isEnabled)$(l(n,"div","awardIcon","Free"===o||"Premium_Trial"===o?"Earn 10% off Premium":"Starter kit",{tabindex:s})).bind("click",function(){reduxApp.showSecondaryOnboarding()}),s++}$(l(n,"div","logoutIcon",Strings.Vault.LOGOUT,{tabindex:s})).bind("click",function(){bg.sendLpImprove("logout_clicked",{source:"vault"}),bg.sendLpImprove("vault_user_menu_click",{option:"log_out",os_type:getOsType(),browser_type:getBrowserType()}),LPProxy.logout()}),e.append(n),1<this._identities.length&&this.initializeIdentityDropdown(n),this._element=e,this._userMenuText=t},User.prototype.isFreeOrTrial=function(){return this._accountClass===Constants.USER_FREE||this._accountClass===Constants.USER_PREMIUM_TRIAL},User.prototype.isFree=function(){return this._accountClass===Constants.USER_FREE}}(document);