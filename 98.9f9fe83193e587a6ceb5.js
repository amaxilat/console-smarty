"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[98],{11098:function(T,E,a){a.r(E),a.d(E,{amplify_authenticator:function(){return y}});var o,g=a(8239),C=a(75134),P=a(47289),u=a(93512),D=a(88774),_=a.n(D),n=a(65513),M=a(45013),m=a(54414),t=a(82073),S=a(54840),A=a(33542),c=(a(30031),a(84665)),d=a(36755),U=a(99056),O=((0,u.Z)(o={},t.A.SignIn,"sign-in"),(0,u.Z)(o,t.A.ConfirmSignIn,"confirm-sign-in"),(0,u.Z)(o,t.A.SignUp,"sign-up"),(0,u.Z)(o,t.A.ConfirmSignUp,"confirm-sign-up"),(0,u.Z)(o,t.A.ForgotPassword,"forgot-password"),(0,u.Z)(o,t.A.ResetPassword,"require-new-password"),(0,u.Z)(o,t.A.VerifyContact,"verify-contact"),(0,u.Z)(o,t.A.TOTPSetup,"totp-setup"),(0,u.Z)(o,t.A.Loading,"loading"),o),p=new M.k("Authenticator"),y=function(){function v(i){var s=this;(0,C.Z)(this,v),(0,n.r)(this,i),this.initialAuthState=t.A.SignIn,this.handleAuthStateChange=function(){},this.hideToast=!1,this.authState=t.A.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(r){var e=r.payload;switch(e.event){case"cognitoHostedUI":case"signIn":(0,U.c)(e.data,d.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return(0,d.d)(s.initialAuthState)}},this.handleToastEvent=function(r){var e=r.payload;switch(e.event){case c.T:e.message&&(s.toastMessage=e.message)}}}return(0,P.Z)(v,[{key:"componentWillLoad",value:(i=(0,g.Z)(_().mark(function r(){var e=this;return _().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return(0,d.o)(function(l,I){e.onAuthStateChange(l,I),e.toastMessage=""}),this.hideToast||m.Xb.listen(c.U,this.handleToastEvent),m.Xb.listen(c.A,this.handleExternalAuthEvent),(0,S.Ib)("amplify-authenticator"),h.next=6,this.checkUser();case 6:case"end":return h.stop()}},r,this)})),function(){return i.apply(this,arguments)})},{key:"checkUser",value:function(){var i=(0,g.Z)(_().mark(function r(){var e=this;return _().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(A.g&&"function"==typeof A.g.currentAuthenticatedUser){h.next=2;break}throw new Error(c.N);case 2:return h.abrupt("return",A.g.currentAuthenticatedUser().then(function(l){(0,d.d)(t.A.SignedIn,l)}).catch(function(){(0,d.d)(e.initialAuthState)}));case 3:case"end":return h.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"onAuthStateChange",value:function(){var i=(0,g.Z)(_().mark(function r(e,f){return _().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(void 0!==e){l.next=2;break}return l.abrupt("return",p.error("nextAuthState cannot be undefined"));case 2:p.info("Inside onAuthStateChange Method current authState:",this.authState),this.authState=e===t.A.SignedOut?this.initialAuthState:e,this.authData=f,this.authData&&p.log("Auth Data was set:",this.authData),this.authState===e&&(this.handleAuthStateChange(this.authState,this.authData),p.info("authState has been updated to ".concat(this.authState)));case 7:case"end":return l.stop()}},r,this)}));return function(r,e){return i.apply(this,arguments)}}()},{key:"getAuthComponent",value:function(s){switch(s){case t.A.SignIn:return(0,n.h)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias});case t.A.ConfirmSignIn:return(0,n.h)("amplify-confirm-sign-in",{user:this.authData});case t.A.SignUp:return(0,n.h)("amplify-sign-up",{usernameAlias:this.usernameAlias});case t.A.ConfirmSignUp:return(0,n.h)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias});case t.A.ForgotPassword:return(0,n.h)("amplify-forgot-password",{usernameAlias:this.usernameAlias});case t.A.ResetPassword:return(0,n.h)("amplify-require-new-password",{user:this.authData});case t.A.VerifyContact:return(0,n.h)("amplify-verify-contact",{user:this.authData});case t.A.TOTPSetup:return(0,n.h)("amplify-totp-setup",{user:this.authData});case t.A.Loading:return(0,n.h)("div",null,"Loading...");default:throw new Error("Unhandled auth state: ".concat(s))}}},{key:"getSlotWithAuthComponent",value:function(s){var r=this.getAuthComponent(s),e=O[s],f=null===this.el.querySelector('[slot="'.concat(e,'"]'));return(0,n.h)("slot",{name:e},f&&r)}},{key:"disconnectedCallback",value:function(){return m.Xb.remove(c.A,this.handleExternalAuthEvent),this.hideToast||m.Xb.remove(c.U,this.handleToastEvent),d.o}},{key:"render",value:function(){var s=this;return(0,n.h)(n.H,null,!this.hideToast&&this.toastMessage&&(0,n.h)("amplify-toast",{message:this.toastMessage,handleClose:function(){s.toastMessage=""},"data-test":"authenticator-error"}),this.authState===t.A.SignedIn?[(0,n.h)("slot",{name:"greetings"}),(0,n.h)("slot",null)]:(0,n.h)("div",{class:"auth-container"},this.getSlotWithAuthComponent(this.authState)))}},{key:"el",get:function(){return(0,n.g)(this)}}]),v;var i}();y.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"}}]);