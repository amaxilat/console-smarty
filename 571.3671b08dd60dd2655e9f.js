"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[571],{88571:function(m,_,e){e.r(_),e.d(_,{amplify_federated_sign_in:function(){return c}});var f=e(75134),u=e(47289),a=e(65513),l=e(45013),d=e(82073),n=e(33542),h=e(84665),s=new l.k("amplify-federated-sign-in"),c=function(){function i(o){(0,f.Z)(this,i),(0,a.r)(this,o),this.authState=d.A.SignIn,this.federated={}}return(0,u.Z)(i,[{key:"componentWillLoad",value:function(){if(!n.g||"function"!=typeof n.g.configure)throw new Error(h.N);var r=n.g.configure().oauth,t=void 0===r?{}:r;t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))}},{key:"render",value:function(){return this.federated?Object.values(d.A).includes(this.authState)?(s.debug("federated Config is",this.federated),(0,a.h)("amplify-form-section",{"data-test":"federated-sign-in-section"},(0,a.h)("amplify-section",{"data-test":"federated-sign-in-body-section"},(0,a.h)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(s.debug("federated prop is empty. show nothing"),s.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)}}]),i}()}}]);