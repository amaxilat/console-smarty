(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[887],{99887:function(e,t,i){"use strict";i.r(t),i.d(t,{amplify_form_field:function(){return l},amplify_hint:function(){return s},amplify_input:function(){return u},amplify_label:function(){return h}});var o=i(31112),n=i(41998),r=i(65513),a=(i(82073),i(30031),i(10027)),l=function(){function e(t){(0,o.Z)(this,e),(0,r.r)(this,t),this.type="text",this.required=!1,this.placeholder=""}return(0,n.Z)(e,[{key:"render",value:function(){return(0,r.h)("div",{class:"form-field"},this.label&&(0,r.h)("div",{class:"form-field-label"},(0,r.h)("amplify-label",{htmlFor:this.fieldId},this.label)),this.description&&(0,r.h)("div",{id:"".concat(this.fieldId,"-description"),class:"form-field-description","data-test":"form-field-description"},this.description),(0,r.h)("div",null,(0,r.h)("slot",{name:"input"},(0,r.h)("amplify-input",{fieldId:this.fieldId,description:this.description,type:this.type,handleInputChange:this.handleInputChange,placeholder:this.placeholder,name:this.name,value:this.value,inputProps:this.inputProps,disabled:this.disabled,required:this.required}))),this.hint&&(0,r.h)("amplify-hint",{id:"".concat(this.fieldId,"-hint")},this.hint))}}]),e}();l.style="amplify-form-field{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";var s=function(){function e(t){(0,o.Z)(this,e),(0,r.r)(this,t)}return(0,n.Z)(e,[{key:"render",value:function(){return(0,r.h)("div",{class:"hint"},(0,r.h)("slot",null))}}]),e}();s.style=":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";var u=function(){function e(t){(0,o.Z)(this,e),(0,r.r)(this,t),this.type="text",this.handleInputChange=function(){},this.placeholder="",this.required=!1,this.autoCompleted=!1}return(0,n.Z)(e,[{key:"setAutoCompleteValue",value:function(e){var t=this.el.querySelector("input");t&&(t.value=e,t.dispatchEvent(new Event("input")),this.autoCompleted=!0)}},{key:"checkAutoCompletion",value:function(e){var t=this;e&&(e.value?this.setAutoCompleteValue(e.value):e.addEventListener("input",function(e){t.setAutoCompleteValue(e.target.value)}))}},{key:"disconnectedCallback",value:function(){this.removeHubListener&&this.removeHubListener()}},{key:"componentWillLoad",value:function(){var e=this;(0,a.e)("amplify-authenticator",this.el)&&(this.removeHubListener=(0,a.o)(function(){var t=e.el.querySelector("input");t&&(t.value=""),e.autoCompleted=!1}))}},{key:"componentDidLoad",value:function(){if(!this.autoCompleted&&!this.value&&!/Firefox/.test(navigator.userAgent)){var e=(0,a.e)("amplify-auth-container",this.el),t=(0,a.e)("amplify-sign-in",this.el);if(e&&t){var i=e.querySelector("input[name='username']"),o=e.querySelector("input[name='password']");"username"===this.name||"email"===this.name||"phone"===this.name?this.checkAutoCompletion(i):"password"===this.name&&this.checkAutoCompletion(o)}}}},{key:"render",value:function(){var e=this;return(0,r.h)(r.H,{class:"input-host"},(0,r.h)("input",Object.assign({id:this.fieldId,"aria-describedby":this.fieldId&&this.description?"".concat(this.fieldId,"-description"):null,"data-autocompleted":this.autoCompleted,type:this.type,onInput:function(t){e.autoCompleted=!1,e.handleInputChange(t)},placeholder:this.placeholder,name:this.name,class:"input",value:this.value,disabled:this.disabled,required:this.required},this.inputProps)))}},{key:"el",get:function(){return(0,r.g)(this)}}]),e}();u.style="amplify-input{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}[data-autocompleted]{background-color:#e8f0fe !important}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1;-webkit-box-shadow:none;box-shadow:none}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";var h=function(){function e(t){(0,o.Z)(this,e),(0,r.r)(this,t)}return(0,n.Z)(e,[{key:"render",value:function(){return(0,r.h)("label",{class:"label",htmlFor:this.htmlFor},(0,r.h)("slot",null))}}]),e}();h.style=":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}"}}]);