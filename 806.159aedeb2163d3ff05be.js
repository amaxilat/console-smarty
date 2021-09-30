"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[806],{7806:function(m,c,s){s.r(c),s.d(c,{amplify_select_mfa_type:function(){return v}});var S=s(8239),P=s(75134),O=s(47289),g=s(88774),p=s.n(g),i=s(65513),y=s(45013),_=s(53799),M=s(82073),f=s(33542),h=s(30031),E=s(84665),d=new y.k("SelectMFAType"),v=function(){function A(u){var t=this;(0,P.Z)(this,A),(0,i.r)(this,u),this.handleSubmit=function(a){return t.verify(a)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1,this.isToastVisible=!1}return(0,O.Z)(A,[{key:"handleRadioButtonChange",value:function(t){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1,this.isToastVisible=!1;var a=t.target,l=a.value,r=a.checked,n=["radio","checkbox"].includes(a.type);l===M.M.SMS&&n&&(this.isSMS=r),l===M.M.TOTP&&n&&(this.isTOTP=r),l===M.M.NOMFA&&n&&(this.isNoMFA=r)}},{key:"verify",value:(u=(0,S.Z)(p().mark(function a(l){var T,n;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&l.preventDefault(),d.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=M.M.TOTP:this.isSMS?this.MFAMethod=M.M.SMS:this.isNoMFA&&(this.MFAMethod=M.M.NOMFA),T=this.authData,f.g&&"function"==typeof f.g.setPreferredMFA){e.next=6;break}throw new Error(E.N);case 6:return this.loading=!0,e.prev=7,e.next=10,f.g.setPreferredMFA(T,this.MFAMethod);case 10:d.debug("Set Preferred MFA Succeeded",e.sent),this.selectMessage="".concat(_.o.get(h.T.SUCCESS_MFA_TYPE)," ").concat(this.MFAMethod),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),(n=e.t0.message)===E.e||n===E.f?(this.TOTPSetup=!0,this.selectMessage=_.o.get(h.T.SETUP_TOTP_REQUIRED)):(d.debug("Set Preferred MFA failed",e.t0),this.selectMessage=_.o.get(h.T.UNABLE_TO_SETUP_MFA_AT_THIS_TIME));case 19:return e.prev=19,this.loading=!1,this.isToastVisible=!0,e.finish(19);case 23:case"end":return e.stop()}},a,this,[[7,15,19,23]])})),function(a){return u.apply(this,arguments)})},{key:"contentBuilder",value:function(){var t=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return d.debug(_.o.get(h.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),(0,i.h)("div",null,(0,i.h)("a",null,_.o.get(h.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var a=this.MFATypes,l=a.SMS,T=a.TOTP,r=a.Optional;return(0,i.h)("amplify-form-section",{submitButtonText:_.o.get(h.T.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:_.o.get(h.T.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(o){return t.handleSubmit(o)},loading:this.loading},l?(0,i.h)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(o){return t.handleRadioButtonChange(o)}}):null,T?(0,i.h)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(o){return t.handleRadioButtonChange(o)}}):null,r?(0,i.h)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(o){return t.handleRadioButtonChange(o)}}):null)}},{key:"renderToast",value:function(){var t=this;return this.isToastVisible&&this.selectMessage?(0,i.h)("amplify-toast",{message:this.selectMessage,handleClose:function(){t.selectMessage=null,t.isToastVisible=!1}}):null}},{key:"render",value:function(){return(0,i.h)("div",null,this.contentBuilder(),this.TOTPSetup?(0,i.h)("amplify-totp-setup",{user:this.authData}):null,this.renderToast())}}]),A;var u}()}}]);