(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[999],{24999:function(t,e,n){"use strict";n.r(e),n.d(e,{amplify_s3_text_picker:function(){return v}});var r=n(16304),i=n(31112),s=n(41998),a=n(88774),c=n.n(a),h=n(65513),l=n(6860),u=n(53799),p=n(22594),o=n(30031),k=(n(32152),n(57207)),f=new l.k("S3TextPicker"),v=function(){function t(e){(0,i.Z)(this,t),(0,h.r)(this,e),this.contentType="text/*",this.level=p.A.Public,this.fallbackText=o.T.PICKER_TEXT}var e;return(0,s.Z)(t,[{key:"handleInput",value:(e=(0,r.Z)(c().mark(function t(e){var n,r,i,s,a;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=this.level,s=this.track,a=(void 0===(r=this.path)?"":r)+(0,k.c)(n=e.target.files[0],this.fileToKey),n){t.next=5;break}throw new Error("No file was selected");case 5:return t.prev=5,t.next=8,(0,k.p)(a,n,i,s,n.type,f);case 8:this.src=a,t.next=15;break;case 11:throw t.prev=11,t.t0=t.catch(5),f.debug(t.t0),new Error(t.t0);case 15:case"end":return t.stop()}},t,this,[[5,11]])})),function(t){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return(0,h.h)(h.H,null,(0,h.h)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:u.o.get(this.fallbackText)}),(0,h.h)("amplify-picker",{inputHandler:function(e){return t.handleInput(e)},acceptValue:"text/*"}))}}]),t}()}}]);