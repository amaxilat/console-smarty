"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[150],{13150:function(w,m,r){r.r(m),r.d(m,{amplify_s3_text:function(){return y}});var d=r(8239),P=r(75134),T=r(47289),b=r(88774),s=r.n(b),n=r(65513),g=r(45013),C=r(53799),O=r(22594),D=r(30031),v=(r(82522),r(55210)),l=new g.k("S3Text"),y=function(){function c(t){(0,P.Z)(this,c),(0,n.r)(this,t),this.contentType="text/*",this.level=O.A.Public,this.fallbackText=D.T.TEXT_FALLBACK_CONTENT}return(0,T.Z)(c,[{key:"watchHandler",value:(t=(0,d.Z)(s().mark(function _(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.load();case 2:case"end":return a.stop()}},_,this)})),function(){return t.apply(this,arguments)})},{key:"componentWillLoad",value:function(){var t=(0,d.Z)(s().mark(function _(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.load();case 2:case"end":return a.stop()}},_,this)}));return function(){return t.apply(this,arguments)}}()},{key:"load",value:function(){var t=(0,d.Z)(s().mark(function _(){var i,a,u,E,h,p,k,f;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.path,u=this.body,E=this.contentType,h=this.level,p=this.track,k=this.identityId,(a=this.textKey)||i){e.next=4;break}return l.debug("empty textKey and path"),e.abrupt("return");case 4:if(l.debug("loading "+(f=a||i)+"..."),!u){e.next=9;break}return e.next=9,(0,v.p)(a,u,h,p,E,l);case 9:return e.prev=9,e.next=12,(0,v.a)(f,h,p,k,l);case 12:this.src=e.sent,e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(9),l.debug(e.t0),new Error(e.t0);case 19:case"end":return e.stop()}},_,this,[[9,15]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return(0,n.h)("div",null,(0,n.h)("div",{class:"text-container"},(0,n.h)("pre",null,this.src?this.src:C.o.get(this.fallbackText))))}}],[{key:"watchers",get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}}}]),c;var t}();y.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"}}]);