Preferences=function(){var r={},a=function(e,o){var t=LPPlatform.getPreference(e);return o=void 0===o?n[e]:o,void 0===t?o:t},t={logoffWhenCloseBrowser:!0,logoffWhenCloseBrowserVal:!0,showvault:!0,hideContextMenus:!0,notificationsBottom:!0,usepopupfill:!0,openloginstart:!0,storeLostOTP:!0,enablenamedpipes:!0,enablenewlogin:!0,htmlindialog:!0,Icon:!0,generateHkKeyCode:!0,generateHkMods:!0,recheckHkKeyCode:!0,recheckHkMods:!0,searchHkKeyCode:!0,searchHkMods:!0,nextHkKeyCode:!0,nextHkMods:!0,prevHkKeyCode:!0,prevHkMods:!0,homeHkKeyCode:!0,homeHkMods:!0,openpopoverHkKeyCode:!0,openpopoverHkMods:!0,rememberpassword:!0,dialogSizePrefs:!0},n={logoffWhenCloseBrowser:!1,logoffWhenCloseBrowserVal:0,idleLogoffEnabled:!1,idleLogoffVal:"",openpref:"tabs",htmlindialog:!1,automaticallyFill:!0,showvault:!1,showAcctsInGroups:!0,hideContextMenus:!1,defaultffid:"0",donotoverwritefilledfields:!1,showNotifications:!0,showGenerateNotifications:!1,showFormFillNotifications:!1,showSaveSiteNotifications:!1,notificationsBottom:!1,showNotificationsAfterClick:!1,showSaveNotificationBar:!0,showChangeNotificationBar:!0,usepopupfill:!0,showmatchingbadge:!0,autoautoVal:25,warninsecureforms:!1,infieldPopupEnabled:!1,dontfillautocompleteoff:!1,pollServerVal:15,clearClipboardSecsVal:60,recentUsedCount:10,searchNotes:!0,openloginstart:!1,storeLostOTP:!0,enablenamedpipes:!0,enablenewlogin:!1,clearfilledfieldsonlogoff:!1,toplevelmatchingsites:!1,language:"en_US",Icon:1,generate_length:12,generate_upper:!0,generate_lower:!0,generate_digits:!0,generate_special:!1,generate_mindigits:1,generate_ambig:!1,generate_reqevery:!0,generate_pronounceable:!1,generate_allcombos:!0,generate_advanced:!1,gridView:!0,compactView:!1,"seenVault4.0":!1,leftMenuMaximize:!0,disablepasswordmanagerasked:!0,rememberemail:!0,rememberpassword:!1,dialogSizePrefs:{},tempID:0,lastreprompttime:0,identity:"",alwayschooseprofilecc:!1,showIntroTutorial:!0};LPPlatform.adjustPreferenceDefaults(n),LPPlatform.isMac()?(n.generateHkKeyCode=0,n.generateHkMods="",n.recheckHkKeyCode=0,n.recheckHkMods="",n.searchHkKeyCode=76,n.searchHkMods="shift meta",n.nextHkKeyCode=33,n.nextHkMods="meta",n.prevHkKeyCode=34,n.prevHkMods="meta",n.homeHkKeyCode=0,n.homeHkMods="",n.openpopoverHkKeyCode=220,n.openpopoverHkMods="meta"):(n.generateHkKeyCode=71,n.generateHkMods="alt",n.recheckHkKeyCode=73,n.recheckHkMods="alt",n.searchHkKeyCode=87,n.searchHkMods="alt",n.nextHkKeyCode=33,n.nextHkMods="alt",n.prevHkKeyCode=34,n.prevHkMods="alt",n.homeHkKeyCode=72,n.homeHkMods="control alt",n.openpopoverHkKeyCode=220,n.openpopoverHkMods="alt");var s=function(e,o){var t;(r[e]||[]).forEach(function(e){e(o)})},i=function(e,o){LPPlatform.setUserPreference(e,o),t[e]&&LPPlatform.setGlobalPreference(e,o),s(e,o)};return{getDefault:function(e){switch(typeof e){case"object":var o={};for(var t in e)o[t]=n[t];return o;case"string":return n[e];default:return null}},get:function(e,o){switch(typeof e){case"object":var t={};for(var r in e)t[r]=a(r,o?o[r]:void 0);return t;case"string":return a(e,o);default:return null}},set:function(e,o){switch(typeof e){case"object":for(var t in e)i(t,e[t]);break;default:i(e,o)}LPPlatform.writePreferences()},addListener:function(e,o){var t=r[e]||[];t.push(o),r[e]=t},removeListener:function(e,o){var t=r[e]||[];r[e]=t.filter(function(e){return e!==o})},triggerChange:s}}();