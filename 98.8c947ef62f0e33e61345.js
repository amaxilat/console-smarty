(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[98],{11098:function(t,e,a){"use strict";a.r(e),a.d(e,{amplify_authenticator:function(){return w}});var n,i=a(16304),s=a(31112),r=a(41998),o=a(5587),u=a(88774),h=a.n(u),c=a(65513),l=a(6860),g=a(54414),d=a(82073),f=a(84581),p=a(33542),m=(a(30031),a(68513)),A=a(10027),v=a(86757),y=((0,o.Z)(n={},d.A.SignIn,"sign-in"),(0,o.Z)(n,d.A.ConfirmSignIn,"confirm-sign-in"),(0,o.Z)(n,d.A.SignUp,"sign-up"),(0,o.Z)(n,d.A.ConfirmSignUp,"confirm-sign-up"),(0,o.Z)(n,d.A.ForgotPassword,"forgot-password"),(0,o.Z)(n,d.A.ResetPassword,"require-new-password"),(0,o.Z)(n,d.A.VerifyContact,"verify-contact"),(0,o.Z)(n,d.A.TOTPSetup,"totp-setup"),(0,o.Z)(n,d.A.Loading,"loading"),n),S=new l.k("Authenticator"),w=function(){function t(e){var a=this;(0,s.Z)(this,t),(0,c.r)(this,e),this.initialAuthState=d.A.SignIn,this.handleAuthStateChange=function(){},this.hideToast=!1,this.authState=d.A.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var e=t.payload;switch(e.event){case"cognitoHostedUI":case"signIn":(0,v.c)(e.data,A.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return(0,A.d)(a.initialAuthState)}},this.handleToastEvent=function(t){var e=t.payload;switch(e.event){case m.T:e.message&&(a.toastMessage=e.message)}}}var e,a,n;return(0,r.Z)(t,[{key:"componentWillLoad",value:(n=(0,i.Z)(h().mark(function t(){var e=this;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(0,A.o)(function(t,a){e.onAuthStateChange(t,a),e.toastMessage=""}),this.hideToast||g.Xb.listen(m.U,this.handleToastEvent),g.Xb.listen(m.A,this.handleExternalAuthEvent),(0,f.Ib)("amplify-authenticator"),t.next=6,this.checkUser();case 6:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})},{key:"checkUser",value:(a=(0,i.Z)(h().mark(function t(){var e=this;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(p.g&&"function"==typeof p.g.currentAuthenticatedUser){t.next=2;break}throw new Error(m.N);case 2:return t.abrupt("return",p.g.currentAuthenticatedUser().then(function(t){(0,A.d)(d.A.SignedIn,t)}).catch((0,i.Z)(h().mark(function t(){var a;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=null;try{a=localStorage.getItem(m.c)}catch(n){S.debug("Failed to get the auth state from local storage",n)}if(t.prev=2,a!==d.A.SignedIn){t.next=6;break}return t.next=6,p.g.signOut();case 6:(0,A.d)(e.initialAuthState),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),S.debug("Failed to sign out",t.t0);case 12:case"end":return t.stop()}},t,null,[[2,9]])}))));case 3:case"end":return t.stop()}},t)})),function(){return a.apply(this,arguments)})},{key:"onAuthStateChange",value:(e=(0,i.Z)(h().mark(function t(e,a){return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e){t.next=2;break}return t.abrupt("return",S.error("nextAuthState cannot be undefined"));case 2:S.info("Inside onAuthStateChange Method current authState:",this.authState),this.authState=e===d.A.SignedOut?this.initialAuthState:e,this.authData=a,this.authData&&S.log("Auth Data was set:",this.authData),this.authState===e&&(this.handleAuthStateChange(this.authState,this.authData),S.info("authState has been updated to ".concat(this.authState)));case 7:case"end":return t.stop()}},t,this)})),function(t,a){return e.apply(this,arguments)})},{key:"getAuthComponent",value:function(t){switch(t){case d.A.SignIn:return(0,c.h)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias});case d.A.ConfirmSignIn:return(0,c.h)("amplify-confirm-sign-in",{user:this.authData});case d.A.SignUp:return(0,c.h)("amplify-sign-up",{usernameAlias:this.usernameAlias});case d.A.ConfirmSignUp:return(0,c.h)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias});case d.A.ForgotPassword:return(0,c.h)("amplify-forgot-password",{usernameAlias:this.usernameAlias});case d.A.ResetPassword:return(0,c.h)("amplify-require-new-password",{user:this.authData});case d.A.VerifyContact:return(0,c.h)("amplify-verify-contact",{user:this.authData});case d.A.TOTPSetup:return(0,c.h)("amplify-totp-setup",{user:this.authData});case d.A.Loading:return(0,c.h)("div",null,"Loading...");default:throw new Error("Unhandled auth state: ".concat(t))}}},{key:"getSlotWithAuthComponent",value:function(t){var e=this.getAuthComponent(t),a=y[t],n=null===this.el.querySelector('[slot="'.concat(a,'"]'));return(0,c.h)("slot",{name:a},n&&e)}},{key:"disconnectedCallback",value:function(){return g.Xb.remove(m.A,this.handleExternalAuthEvent),this.hideToast||g.Xb.remove(m.U,this.handleToastEvent),A.o}},{key:"render",value:function(){var t=this;return(0,c.h)(c.H,null,!this.hideToast&&this.toastMessage&&(0,c.h)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}),this.authState===d.A.SignedIn?[(0,c.h)("slot",{name:"greetings"}),(0,c.h)("slot",null)]:(0,c.h)("div",{class:"auth-container"},this.getSlotWithAuthComponent(this.authState)))}},{key:"el",get:function(){return(0,c.g)(this)}}]),t}();w.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"}}]);