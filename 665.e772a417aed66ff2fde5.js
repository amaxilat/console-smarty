"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[665],{62665:function(or,me,_){_.r(me),_.d(me,{amplify_radio_button:function(){return _e},amplify_toast:function(){return we},amplify_totp_setup:function(){return Fe}});var J=_(8239),re=_(75134),ne=_(47289),Ke=_(88774),I=_.n(Ke),w=_(65513),Ye=_(45013),S=_(53799),ye=_(82073),U=_(33542),L=_(30031),Ee=_(84665),Z=_(36755),ze=_(99056),He=_(23833),_e=function(){function i(e){(0,re.Z)(this,i),(0,w.r)(this,e),this.placeholder="",this.checked=!1,this.disabled=!1}return(0,ne.Z)(i,[{key:"render",value:function(){return(0,w.h)("span",{class:"radio-button"},(0,w.h)("input",Object.assign({type:"radio",name:this.name,value:this.value,onInput:this.handleInputChange,placeholder:this.placeholder,id:this.fieldId,checked:this.checked,disabled:this.disabled},this.inputProps)),(0,w.h)("amplify-label",{htmlFor:this.fieldId},this.label))}}]),i}();_e.style=":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";var we=function(){function i(e){(0,re.Z)(this,i),(0,w.r)(this,e),this.message=""}return(0,ne.Z)(i,[{key:"render",value:function(){return(0,w.h)("div",{class:"toast"},(0,w.h)("amplify-icon",{class:"toast-icon",name:"warning"}),this.message?(0,w.h)("span",null,this.message):null,(0,w.h)("slot",null),(0,w.h)("button",{class:"toast-close",onClick:this.handleClose}))}}]),i}();we.style=':host{--background-color:var(--amplify-secondary-tint);--color:var(--amplify-white);--font-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--close-icon-color:var(--amplify-white);--close-icon-hover:var(--amplify-red)}.toast-icon{padding-right:5px}.toast{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;width:100%;z-index:99;-webkit-box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);padding:16px;background-color:var(--background-color);font-size:var(--font-size);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px;font-family:var(--font-family)}.toast>span{margin-right:10px}.toast-close{margin-left:auto;-ms-flex-item-align:center;align-self:center;position:relative;width:18px;height:18px;overflow:hidden;cursor:pointer;background:transparent;border:none}.toast-close::before,.toast-close::after{content:"";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:var(--close-icon-color)}.toast-close:hover::before,.toast-close:hover::after{background:var(--close-icon-hover)}.toast-close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.toast-close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}';var We=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Ve={}.toString,ae=Array.isArray||function(i){return"[object Array]"==Ve.call(i)},Te=(p.TYPED_ARRAY_SUPPORT=function(){try{var i=new Uint8Array(1);return i.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===i.foo()}catch(e){return!1}}())?2147483647:1073741823;function p(i,e,t){return p.TYPED_ARRAY_SUPPORT||this instanceof p?"number"==typeof i?Ce(this,i):function(i,e,t,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(i,e,t,n){if(t<0||e.byteLength<t)throw new RangeError("'offset' is out of bounds");if(e.byteLength<t+(n||0))throw new RangeError("'length' is out of bounds");var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),p.TYPED_ARRAY_SUPPORT?r.__proto__=p.prototype:r=oe(i,r),r}(i,e,t,n):"string"==typeof e?function(i,e){var t=0|be(e),n=K(i,t),r=n.write(e);return r!==t&&(n=n.slice(0,r)),n}(i,e):function(i,e){if(p.isBuffer(e)){var t=0|ie(e.length),n=K(i,t);return 0===n.length||e.copy(n,0,0,t),n}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(i){return i!=i}(e.length)?K(i,0):oe(i,e);if("Buffer"===e.type&&Array.isArray(e.data))return oe(i,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(i,e)}(this,i,e,t):new p(i,e,t)}function ie(i){if(i>=Te)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Te.toString(16)+" bytes");return 0|i}function K(i,e){var t;return p.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=p.prototype:(null===(t=i)&&(t=new p(e)),t.length=e),t}function Ce(i,e){var t=K(i,e<0?0:0|ie(e));if(!p.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function oe(i,e){for(var t=e.length<0?0:0|ie(e.length),n=K(i,t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function Be(i,e){e=e||1/0;for(var t,n=i.length,r=null,a=[],o=0;o<n;++o){if((t=i.charCodeAt(o))>55295&&t<57344){if(!r){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&a.push(239,191,189);continue}r=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),r=t;continue}t=65536+(r-55296<<10|t-56320)}else r&&(e-=3)>-1&&a.push(239,191,189);if(r=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,63&t|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,63&t|128)}else{if(!(t<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128)}}return a}function be(i){return p.isBuffer(i)?i.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(i)||i instanceof ArrayBuffer)?i.byteLength:("string"!=typeof i&&(i=""+i),0===i.length?0:Be(i).length)}p.TYPED_ARRAY_SUPPORT&&(p.prototype.__proto__=Uint8Array.prototype,p.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&p[Symbol.species]===p&&Object.defineProperty(p,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),p.prototype.write=function(e,t,n){void 0===t||void 0===n&&"string"==typeof t?(n=this.length,t=0):isFinite(t)&&(t|=0,isFinite(n)?n|=0:n=void 0);var r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(i,e,t,n){return function(i,e,t,n){for(var r=0;r<n&&!(r+t>=e.length||r>=i.length);++r)e[r+t]=i[r];return r}(Be(e,i.length-t),i,t,n)}(this,e,t,n)},p.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),p.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=p.prototype;else{var a=t-e;r=new p(a,void 0);for(var o=0;o<a;++o)r[o]=this[o+e]}return r},p.prototype.copy=function(e,t,n,r){if(n||(n=0),!r&&0!==r&&(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var o,a=r-n;if(this===e&&n<t&&t<r)for(o=a-1;o>=0;--o)e[o+t]=this[o+n];else if(a<1e3||!p.TYPED_ARRAY_SUPPORT)for(o=0;o<a;++o)e[o+t]=this[o+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+a),t);return a},p.prototype.fill=function(e,t,n){if("string"==typeof e){if("string"==typeof t?(t=0,n=this.length):"string"==typeof n&&(n=this.length),1===e.length){var r=e.charCodeAt(0);r<256&&(e=r)}}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var a;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(a=t;a<n;++a)this[a]=e;else{var o=p.isBuffer(e)?e:new p(e),u=o.length;for(a=0;a<n-t;++a)this[a+t]=o[a%u]}return this},p.concat=function(e,t){if(!ae(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return K(null,0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=Ce(null,t),a=0;for(n=0;n<e.length;++n){var o=e[n];if(!p.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,a),a+=o.length}return r},p.byteLength=be,p.prototype._isBuffer=!0,p.isBuffer=function(e){return!(null==e||!e._isBuffer)};var ue,A_alloc=function(e){var t=new p(e);return t.fill(0),t},A_from=function(e){return new p(e)},nt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],E_getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},E_getSymbolTotalCodewords=function(e){return nt[e]},E_getBCHDigit=function(e){for(var t=0;0!==e;)t++,e>>>=1;return t},E_isKanjiModeEnabled=function(){return void 0!==ue},E_toSJIS=function(e){return ue(e)};function M(i,e,t){return i(t={path:e,exports:{},require:function(r,a){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}var b=M(function(i,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(r){return r&&void 0!==r.bit&&r.bit>=0&&r.bit<4},e.from=function(r,a){if(e.isValid(r))return r;try{return function(n){if("string"!=typeof n)throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}(r)}catch(o){return a}}});function Ae(){this.buffer=[],this.length=0}Ae.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ht=Ae;function W(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=A_alloc(i*i),this.reservedBit=A_alloc(i*i)}W.prototype.set=function(i,e,t,n){var r=i*this.size+e;this.data[r]=t,n&&(this.reservedBit[r]=!0)},W.prototype.get=function(i,e){return this.data[i*this.size+e]},W.prototype.xor=function(i,e,t){this.data[i*this.size+e]^=t},W.prototype.isReserved=function(i,e){return this.reservedBit[i*this.size+e]};var dt=W,gt=M(function(i,e){var t=E_getSymbolSize;e.getRowColCoords=function(r){if(1===r)return[];for(var a=Math.floor(r/7)+2,o=t(r),u=145===o?26:2*Math.ceil((o-13)/(2*a-2)),s=[o-7],f=1;f<a-1;f++)s[f]=s[f-1]-u;return s.push(6),s.reverse()},e.getPositions=function(r){for(var a=[],o=e.getRowColCoords(r),u=o.length,s=0;s<u;s++)for(var f=0;f<u;f++)0===s&&0===f||0===s&&f===u-1||s===u-1&&0===f||a.push([o[s],o[f]]);return a}}),ct=E_getSymbolSize,se=M(function(i,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function n(r,a,o){switch(r){case e.Patterns.PATTERN000:return(a+o)%2==0;case e.Patterns.PATTERN001:return a%2==0;case e.Patterns.PATTERN010:return o%3==0;case e.Patterns.PATTERN011:return(a+o)%3==0;case e.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(o/3))%2==0;case e.Patterns.PATTERN101:return a*o%2+a*o%3==0;case e.Patterns.PATTERN110:return(a*o%2+a*o%3)%2==0;case e.Patterns.PATTERN111:return(a*o%3+(a+o)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}e.isValid=function(a){return null!=a&&""!==a&&!isNaN(a)&&a>=0&&a<=7},e.from=function(a){return e.isValid(a)?parseInt(a,10):void 0},e.getPenaltyN1=function(a){for(var o=a.size,u=0,s=0,f=0,l=null,h=null,d=0;d<o;d++){s=f=0,l=h=null;for(var g=0;g<o;g++){var v=a.get(d,g);v===l?s++:(s>=5&&(u+=s-5+3),l=v,s=1),(v=a.get(g,d))===h?f++:(f>=5&&(u+=f-5+3),h=v,f=1)}s>=5&&(u+=s-5+3),f>=5&&(u+=f-5+3)}return u},e.getPenaltyN2=function(a){for(var o=a.size,u=0,s=0;s<o-1;s++)for(var f=0;f<o-1;f++){var l=a.get(s,f)+a.get(s,f+1)+a.get(s+1,f)+a.get(s+1,f+1);(4===l||0===l)&&u++}return 3*u},e.getPenaltyN3=function(a){for(var o=a.size,u=0,s=0,f=0,l=0;l<o;l++){s=f=0;for(var h=0;h<o;h++)s=s<<1&2047|a.get(l,h),h>=10&&(1488===s||93===s)&&u++,f=f<<1&2047|a.get(h,l),h>=10&&(1488===f||93===f)&&u++}return 40*u},e.getPenaltyN4=function(a){for(var o=0,u=a.data.length,s=0;s<u;s++)o+=a.data[s];return 10*Math.abs(Math.ceil(100*o/u/5)-10)},e.applyMask=function(a,o){for(var u=o.size,s=0;s<u;s++)for(var f=0;f<u;f++)o.isReserved(f,s)||o.xor(f,s,n(a,f,s))},e.getBestMask=function(a,o){for(var u=Object.keys(e.Patterns).length,s=0,f=1/0,l=0;l<u;l++){o(l),e.applyMask(l,a);var h=e.getPenaltyN1(a)+e.getPenaltyN2(a)+e.getPenaltyN3(a)+e.getPenaltyN4(a);e.applyMask(l,a),h<f&&(f=h,s=l)}return s}}),G=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],X=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],j_getTotalCodewordsCount=function(e,t){switch(t){case b.L:return X[4*(e-1)+0];case b.M:return X[4*(e-1)+1];case b.Q:return X[4*(e-1)+2];case b.H:return X[4*(e-1)+3];default:return}},V=A_alloc(512),q=A_alloc(256);!function(){for(var e=1,t=0;t<255;t++)V[t]=e,q[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)V[t]=V[t-255]}();var fe_exp=function(e){return V[e]},fe_mul=function(e,t){return 0===e||0===t?0:V[q[e]+q[t]]},Re=M(function(i,e){e.mul=function(n,r){for(var a=A_alloc(n.length+r.length-1),o=0;o<n.length;o++)for(var u=0;u<r.length;u++)a[o+u]^=fe_mul(n[o],r[u]);return a},e.mod=function(n,r){for(var a=A_from(n);a.length-r.length>=0;){for(var o=a[0],u=0;u<r.length;u++)a[u]^=fe_mul(r[u],o);for(var s=0;s<a.length&&0===a[s];)s++;a=a.slice(s)}return a},e.generateECPolynomial=function(n){for(var r=A_from([1]),a=0;a<n;a++)r=e.mul(r,[1,fe_exp(a)]);return r}}),Tt=He.lW;function le(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}le.prototype.initialize=function(e){this.degree=e,this.genPoly=Re.generateECPolynomial(this.degree)},le.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");var t=A_alloc(this.degree),n=Tt.concat([e,t],e.length+this.degree),r=Re.mod(n,this.genPoly),a=this.degree-r.length;if(a>0){var o=A_alloc(this.degree);return r.copy(o,a),o}return r};var Ct=le,$_isValid=function(e){return!isNaN(e)&&e>=1&&e<=40},Q="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",At="(?:(?![A-Z0-9 $%*+\\-./:]|"+(Q=Q.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+",Pt=new RegExp(Q,"g"),Rt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),It=new RegExp(At,"g"),Mt=new RegExp("[0-9]+","g"),St=new RegExp("[A-Z $%*+\\-./:]+","g"),Lt=new RegExp("^"+Q+"$"),kt=new RegExp("^[0-9]+$"),Dt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),O={KANJI:Pt,BYTE_KANJI:Rt,BYTE:It,NUMERIC:Mt,ALPHANUMERIC:St,testKanji:function(e){return Lt.test(e)},testNumeric:function(e){return kt.test(e)},testAlphanumeric:function(e){return Dt.test(e)}},c=M(function(i,e){e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!$_isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return O.testNumeric(r)?e.NUMERIC:O.testAlphanumeric(r)?e.ALPHANUMERIC:O.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits},e.from=function(r,a){if(e.isValid(r))return r;try{return function(n){if("string"!=typeof n)throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}(r)}catch(o){return a}}}),ee=M(function(i,e){var n=E_getBCHDigit(7973);function a(s,f){return c.getCharCountIndicator(s,f)+4}function o(s,f){var l=0;return s.forEach(function(h){var d=a(h.mode,f);l+=d+h.getBitsLength()}),l}e.from=function(f,l){return $_isValid(f)?parseInt(f,10):l},e.getCapacity=function(f,l,h){if(!$_isValid(f))throw new Error("Invalid QR Code version");void 0===h&&(h=c.BYTE);var v=8*(E_getSymbolTotalCodewords(f)-j_getTotalCodewordsCount(f,l));if(h===c.MIXED)return v;var m=v-a(h,f);switch(h){case c.NUMERIC:return Math.floor(m/10*3);case c.ALPHANUMERIC:return Math.floor(m/11*2);case c.KANJI:return Math.floor(m/13);case c.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(f,l){var h,d=b.from(l,b.M);if(ae(f)){if(f.length>1)return function(s,f){for(var l=1;l<=40;l++)if(o(s,l)<=e.getCapacity(l,f,c.MIXED))return l}(f,d);if(0===f.length)return 1;h=f[0]}else h=f;return function(s,f,l){for(var h=1;h<=40;h++)if(f<=e.getCapacity(h,l,s))return h}(h.mode,h.getLength(),d)},e.getEncodedBits=function(f){if(!$_isValid(f)||f<7)throw new Error("Invalid QR Code version");for(var l=f<<12;E_getBCHDigit(l)-n>=0;)l^=7973<<E_getBCHDigit(l)-n;return f<<12|l}}),Se=E_getBCHDigit(1335);function Y(i){this.mode=c.NUMERIC,this.data=i.toString()}Y.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},Y.prototype.getLength=function(){return this.data.length},Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)},Y.prototype.write=function(e){var t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);var a=this.data.length-t;a>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,3*a+1))};var Le=Y,he=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function z(i){this.mode=c.ALPHANUMERIC,this.data=i}z.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},z.prototype.getLength=function(){return this.data.length},z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)},z.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var n=45*he.indexOf(this.data[t]);n+=he.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(he.indexOf(this.data[t]),6)};var ke=z;function H(i){this.mode=c.BYTE,this.data=A_from(i)}H.getBitsLength=function(e){return 8*e},H.prototype.getLength=function(){return this.data.length},H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)},H.prototype.write=function(i){for(var e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)};var De=H;function x(i){this.mode=c.KANJI,this.data=i}x.getBitsLength=function(e){return 13*e},x.prototype.getLength=function(){return this.data.length},x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)},x.prototype.write=function(i){var e;for(e=0;e<this.data.length;e++){var t=E_toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else{if(!(t>=57408&&t<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");t-=49472}i.put(t=192*(t>>>8&255)+(255&t),13)}};var Ne=x,zt=M(function(i){var e={single_source_shortest_paths:function(n,r,a){var o={},u={};u[r]=0;var f,l,h,d,g,m,s=e.PriorityQueue.make();for(s.push(r,0);!s.empty();)for(h in d=(f=s.pop()).cost,g=n[l=f.value]||{})g.hasOwnProperty(h)&&(m=d+g[h],(void 0===u[h]||u[h]>m)&&(u[h]=m,s.push(h,m),o[h]=l));if(void 0!==a&&void 0===u[a]){var B=["Could not find a path from ",r," to ",a,"."].join("");throw new Error(B)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var a=[],o=r;o;)a.push(o),o=n[o];return a.reverse(),a},find_path:function(n,r,a){var o=e.single_source_shortest_paths(n,r,a);return e.extract_shortest_path_from_predecessor_list(o,a)},PriorityQueue:{make:function(n){var o,r=e.PriorityQueue,a={};for(o in n=n||{},r)r.hasOwnProperty(o)&&(a[o]=r[o]);return a.queue=[],a.sorter=n.sorter||r.default_sorter,a},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){this.queue.push({value:n,cost:r}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};i.exports=e}),de=M(function(i,e){function t(l){return unescape(encodeURIComponent(l)).length}function n(l,h,d){for(var v,g=[];null!==(v=l.exec(d));)g.push({data:v[0],index:v.index,mode:h,length:v[0].length});return g}function r(l){var g,v,h=n(O.NUMERIC,c.NUMERIC,l),d=n(O.ALPHANUMERIC,c.ALPHANUMERIC,l);return E_isKanjiModeEnabled()?(g=n(O.BYTE,c.BYTE,l),v=n(O.KANJI,c.KANJI,l)):(g=n(O.BYTE_KANJI,c.BYTE,l),v=[]),h.concat(d,g,v).sort(function(y,C){return y.index-C.index}).map(function(y){return{data:y.data,mode:y.mode,length:y.length}})}function a(l,h){switch(h){case c.NUMERIC:return Le.getBitsLength(l);case c.ALPHANUMERIC:return ke.getBitsLength(l);case c.KANJI:return Ne.getBitsLength(l);case c.BYTE:return De.getBitsLength(l)}}function f(l,h){var d,g=c.getBestModeForData(l);if((d=c.from(h,g))!==c.BYTE&&d.bit<g.bit)throw new Error('"'+l+'" cannot be encoded with mode '+c.toString(d)+".\n Suggested mode is: "+c.toString(g));switch(d===c.KANJI&&!E_isKanjiModeEnabled()&&(d=c.BYTE),d){case c.NUMERIC:return new Le(l);case c.ALPHANUMERIC:return new ke(l);case c.KANJI:return new Ne(l);case c.BYTE:return new De(l)}}e.fromArray=function(h){return h.reduce(function(d,g){return"string"==typeof g?d.push(f(g,null)):g.data&&d.push(f(g.data,g.mode)),d},[])},e.fromString=function(h,d){for(var m=function(l,h){for(var d={},g={start:{}},v=["start"],m=0;m<l.length;m++){for(var y=l[m],C=[],B=0;B<y.length;B++){var T=y[B],k=""+m+B;C.push(k),d[k]={node:T,lastCount:0},g[k]={};for(var R=0;R<v.length;R++){var P=v[R];d[P]&&d[P].node.mode===T.mode?(g[P][k]=a(d[P].lastCount+T.length,T.mode)-a(d[P].lastCount,T.mode),d[P].lastCount+=T.length):(d[P]&&(d[P].lastCount=T.length),g[P][k]=a(T.length,T.mode)+4+c.getCharCountIndicator(T.mode,h))}}v=C}for(R=0;R<v.length;R++)g[v[R]].end=0;return{map:g,table:d}}(function(l){for(var h=[],d=0;d<l.length;d++){var g=l[d];switch(g.mode){case c.NUMERIC:h.push([g,{data:g.data,mode:c.ALPHANUMERIC,length:g.length},{data:g.data,mode:c.BYTE,length:g.length}]);break;case c.ALPHANUMERIC:h.push([g,{data:g.data,mode:c.BYTE,length:g.length}]);break;case c.KANJI:h.push([g,{data:g.data,mode:c.BYTE,length:t(g.data)}]);break;case c.BYTE:h.push([{data:g.data,mode:c.BYTE,length:t(g.data)}])}}return h}(r(h,E_isKanjiModeEnabled())),d),y=zt.find_path(m.map,"start","end"),C=[],B=1;B<y.length-1;B++)C.push(m.table[y[B]].node);return e.fromArray(C.reduce(function(h,d){var g=h.length-1>=0?h[h.length-1]:null;return g&&g.mode===d.mode?(h[h.length-1].data+=d.data,h):(h.push(d),h)},[]))},e.rawSplit=function(h){return e.fromArray(r(h,E_isKanjiModeEnabled()))}});function ge(i,e,t){var a,o,n=i.size,r=function(e,t){for(var n=e.bit<<3|t,r=n<<10;E_getBCHDigit(r)-Se>=0;)r^=1335<<E_getBCHDigit(r)-Se;return 21522^(n<<10|r)}(e,t);for(a=0;a<15;a++)i.set(a<6?a:a<8?a+1:n-15+a,8,o=1==(r>>a&1),!0),i.set(8,a<8?n-a-1:a<9?15-a-1+1:15-a-1,o,!0);i.set(n-8,8,1,!0)}function Qt(i,e,t){var n=new ht;t.forEach(function(f){n.put(f.mode.bit,4),n.put(f.getLength(),c.getCharCountIndicator(f.mode,i)),f.write(n)});var o=8*(E_getSymbolTotalCodewords(i)-j_getTotalCodewordsCount(i,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var u=(o-n.getLengthInBits())/8,s=0;s<u;s++)n.put(s%2?17:236,8);return function(i,e,t){for(var n=E_getSymbolTotalCodewords(e),a=n-j_getTotalCodewordsCount(e,t),o=function(e,t){switch(t){case b.L:return G[4*(e-1)+0];case b.M:return G[4*(e-1)+1];case b.Q:return G[4*(e-1)+2];case b.H:return G[4*(e-1)+3];default:return}}(e,t),s=o-n%o,f=Math.floor(n/o),l=Math.floor(a/o),h=l+1,d=f-l,g=new Ct(d),v=0,m=new Array(o),y=new Array(o),C=0,B=A_from(i.buffer),T=0;T<o;T++){var k=T<s?l:h;m[T]=B.slice(v,v+k),y[T]=g.encode(m[T]),v+=k,C=Math.max(C,k)}var D,N,R=A_alloc(n),P=0;for(D=0;D<C;D++)for(N=0;N<o;N++)D<m[N].length&&(R[P++]=m[N][D]);for(D=0;D<d;D++)for(N=0;N<o;N++)R[P++]=y[N][D];return R}(n,i,e)}function Gt(i,e,t,n){var r;if(ae(i))r=de.fromArray(i);else{if("string"!=typeof i)throw new Error("Invalid data");var a=e;if(!a){var o=de.rawSplit(i);a=ee.getBestVersionForData(o,t)}r=de.fromString(i,a||40)}var u=ee.getBestVersionForData(r,t);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var s=Qt(e,t,r),f=E_getSymbolSize(e),l=new dt(f);return function(i,e){for(var t=i.size,n=function(e){var t=ct(e);return[[0,0],[t-7,0],[0,t-7]]}(e),r=0;r<n.length;r++)for(var a=n[r][0],o=n[r][1],u=-1;u<=7;u++)if(!(a+u<=-1||t<=a+u))for(var s=-1;s<=7;s++)o+s<=-1||t<=o+s||i.set(a+u,o+s,u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4,!0)}(l,e),function(i){for(var e=i.size,t=8;t<e-8;t++){var n=t%2==0;i.set(t,6,n,!0),i.set(6,t,n,!0)}}(l),function(i,e){for(var t=gt.getPositions(e),n=0;n<t.length;n++)for(var r=t[n][0],a=t[n][1],o=-2;o<=2;o++)for(var u=-2;u<=2;u++)i.set(r+o,a+u,-2===o||2===o||-2===u||2===u||0===o&&0===u,!0)}(l,e),ge(l,t,0),e>=7&&function(i,e){for(var r,a,o,t=i.size,n=ee.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),i.set(r,a=u%3+t-8-3,o=1==(n>>u&1),!0),i.set(a,r,o,!0)}(l,e),function(i,e){for(var t=i.size,n=-1,r=t-1,a=7,o=0,u=t-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!i.isReserved(r,u-s)){var f=!1;o<e.length&&(f=1==(e[o]>>>a&1)),i.set(r,u-s,f),-1==--a&&(o++,a=7)}if((r+=n)<0||t<=r){r-=n,n=-n;break}}}(l,s),isNaN(n)&&(n=se.getBestMask(l,ge.bind(null,l,t))),se.applyMask(n,l),ge(l,t,n),{modules:l,version:e,errorCorrectionLevel:t,maskPattern:n,segments:r}}var ce_create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");var r,a,n=b.M;return void 0!==t&&(n=b.from(t.errorCorrectionLevel,b.M),r=ee.from(t.version),a=se.from(t.maskPattern),t.toSJISFunc&&function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');ue=e}(t.toSJISFunc)),Gt(e,r,n,a)},te=M(function(i,e){function t(n){if("number"==typeof n&&(n=n.toString()),"string"!=typeof n)throw new Error("Color should be defined as hex string");var r=n.slice().replace("#","").split("");if(r.length<3||5===r.length||r.length>8)throw new Error("Invalid hex color: "+n);(3===r.length||4===r.length)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),6===r.length&&r.push("F","F");var a=parseInt(r.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:255&a,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});var o=r.width&&r.width>=21?r.width:void 0;return{width:o,scale:o?4:r.scale||4,margin:null==r.margin||r.margin<0?4:r.margin,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,a){return a.width&&a.width>=r+2*a.margin?a.width/(r+2*a.margin):a.scale},e.getImageWidth=function(r,a){var o=e.getScale(r,a);return Math.floor((r+2*a.margin)*o)},e.qrToImageData=function(r,a,o){for(var u=a.modules.size,s=a.modules.data,f=e.getScale(u,o),l=Math.floor((u+2*o.margin)*f),h=o.margin*f,d=[o.color.light,o.color.dark],g=0;g<l;g++)for(var v=0;v<l;v++){var m=4*(g*l+v),y=o.color.light;g>=h&&v>=h&&g<l-h&&v<l-h&&(y=d[s[Math.floor((g-h)/f)*u+Math.floor((v-h)/f)]?1:0]),r[m++]=y.r,r[m++]=y.g,r[m++]=y.b,r[m]=y.a}}}),Ue=M(function(i,e){e.render=function(a,o,u){var s=u,f=o;void 0===s&&(!o||!o.getContext)&&(s=o,o=void 0),o||(f=function(){try{return document.createElement("canvas")}catch(r){throw new Error("You need to specify a canvas element")}}()),s=te.getOptions(s);var l=te.getImageWidth(a.modules.size,s),h=f.getContext("2d"),d=h.createImageData(l,l);return te.qrToImageData(d.data,a,s),function(r,a,o){r.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=o,a.width=o,a.style.height=o+"px",a.style.width=o+"px"}(h,f,l),h.putImageData(d,0,0),f},e.renderToDataURL=function(a,o,u){var s=u;return void 0===s&&(!o||!o.getContext)&&(s=o,o=void 0),s||(s={}),e.render(a,o,s).toDataURL(s.type||"image/png",(s.rendererOpts||{}).quality)}});function Oe(i,e){var t=i.a/255,n=e+'="'+i.hex+'"';return t<1?n+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':n}function ve(i,e,t){var n=i+e;return void 0!==t&&(n+=" "+t),n}function pe(i,e,t,n,r){var a=[].slice.call(arguments,1),o=a.length,u="function"==typeof a[o-1];if(!u&&!We())throw new Error("Callback required as last argument");if(!u){if(o<1)throw new Error("Too few arguments provided");return 1===o?(t=e,e=n=void 0):2===o&&!e.getContext&&(n=t,t=e,e=void 0),new Promise(function(f,l){try{var h=ce_create(t,n);f(i(h,e,n))}catch(d){l(d)}})}if(o<2)throw new Error("Too few arguments provided");2===o?(r=t,t=e,e=n=void 0):3===o&&(e.getContext&&void 0===r?(r=n,n=void 0):(r=n,n=t,t=e,e=void 0));try{var s=ce_create(t,n);r(null,i(s,e,n))}catch(f){r(f)}}var ar={create:ce_create,toCanvas:pe.bind(null,Ue.render),toDataURL:pe.bind(null,Ue.renderToDataURL),toString:pe.bind(null,function(i,e,t){return function(e,t,n){var r=te.getOptions(t),a=e.modules.size,o=e.modules.data,u=a+2*r.margin,s=r.color.light.a?"<path "+Oe(r.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+Oe(r.color.dark,"stroke")+' d="'+function(i,e,t){for(var n="",r=0,a=!1,o=0,u=0;u<i.length;u++){var s=Math.floor(u%e),f=Math.floor(u/e);!s&&!a&&(a=!0),i[u]?(o++,u>0&&s>0&&i[u-1]||(n+=a?ve("M",s+t,.5+f+t):ve("m",r,0),r=0,a=!1),s+1<e&&i[u+1]||(n+=ve("h",o),o=0)):r++}return n}(o,a,r.margin)+'"/>',d='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+'viewBox="0 0 '+u+" "+u+'" shape-rendering="crispEdges">'+s+f+"</svg>\n";return"function"==typeof n&&n(null,d),d}(i,t)})},F=new Ye.k("TOTP"),Fe=function(){function i(e){(0,re.Z)(this,i),(0,w.r)(this,e),this.inputProps={autoFocus:!0},this.handleAuthStateChange=Z.d,this.headerText=L.T.TOTP_HEADER_TEXT,this.issuer=L.T.TOTP_ISSUER,this.handleComplete=this.onTOTPEvent,this.standalone=!1,this.code=null,this.setupMessage=null,this.qrCodeInput=null,this.loading=!1}return(0,ne.Z)(i,[{key:"componentWillLoad",value:(e=(0,J.Z)(I().mark(function n(){var r=this;return I().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return this.standalone||(this.removeHubListener=(0,Z.o)(function(u){u===ye.A.TOTPSetup&&r.setup()})),o.next=3,this.setup();case 3:case"end":return o.stop()}},n,this)})),function(){return e.apply(this,arguments)})},{key:"handleUserChange",value:function(){this.standalone&&this.setup()}},{key:"disconnectedCallback",value:function(){this.removeHubListener&&this.removeHubListener()}},{key:"buildOtpAuthPath",value:function(t,n,r){return"otpauth://totp/".concat(n,":").concat(t.username,"?secret=").concat(r,"&issuer=").concat(n)}},{key:"onTOTPEvent",value:function(){var e=(0,J.Z)(I().mark(function n(r){return I().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return F.debug("on totp event"),o.next=3,(0,ze.c)(r,this.handleAuthStateChange);case 3:case"end":return o.stop()}},n,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"handleTotpInputChange",value:function(t){this.setupMessage=null,this.qrCodeInput=t.target.value}},{key:"generateQRCode",value:function(){var e=(0,J.Z)(I().mark(function n(r){return I().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,ar.toDataURL(r);case 3:this.qrCodeImageSource=o.sent,o.next=9;break;case 6:o.prev=6,o.t0=o.catch(0),(0,Z.a)(o.t0);case 9:case"end":return o.stop()}},n,this,[[0,6]])}));return function(n){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,J.Z)(I().mark(function n(){var r,a;return I().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!this.code&&!this.loading){u.next=3;break}return F.debug("setup was attempted while another is in progress, skipping setup."),u.abrupt("return");case 3:if(this.user&&this.user.associateSoftwareToken){u.next=6;break}return F.debug("setup was attempted with invalid `user`, skipping setup.",this.user),u.abrupt("return");case 6:if(U.g&&"function"==typeof U.g.setupTOTP){u.next=8;break}throw new Error(Ee.N);case 8:return this.setupMessage=null,r=encodeURI(S.o.get(this.issuer)),this.loading=!0,u.prev=11,u.next=14,U.g.setupTOTP(this.user);case 14:F.debug("secret key",a=u.sent),this.code=this.buildOtpAuthPath(this.user,r,a),this.generateQRCode(this.code),u.next=24;break;case 20:u.prev=20,u.t0=u.catch(11),(0,Z.a)(u.t0),F.debug(S.o.get(L.T.TOTP_SETUP_FAILURE),u.t0);case 24:return u.prev=24,this.loading=!1,u.finish(24);case 27:case"end":return u.stop()}},n,this,[[11,20,24,27]])}));return function(){return e.apply(this,arguments)}}()},{key:"verifyTotpToken",value:function(){var e=(0,J.Z)(I().mark(function n(r){var a;return I().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(r&&r.preventDefault(),this.qrCodeInput){u.next=4;break}return F.debug("No TOTP Code provided"),u.abrupt("return");case 4:if(a=this.user,U.g&&"function"==typeof U.g.verifyTotpToken&&"function"==typeof U.g.setPreferredMFA){u.next=7;break}throw new Error(Ee.N);case 7:return u.prev=7,u.next=10,U.g.verifyTotpToken(a,this.qrCodeInput);case 10:return u.next=12,U.g.setPreferredMFA(a,ye.M.TOTP);case 12:return this.setupMessage=S.o.get(L.T.TOTP_SUCCESS_MESSAGE),F.debug(S.o.get(L.T.TOTP_SUCCESS_MESSAGE)),u.next=16,this.handleComplete(a);case 16:u.next=22;break;case 18:u.prev=18,u.t0=u.catch(7),this.setupMessage=S.o.get(L.T.TOTP_SETUP_FAILURE),F.error(u.t0);case 22:case"end":return u.stop()}},n,this,[[7,18]])}));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return(0,w.h)(w.H,null,(0,w.h)("amplify-form-section",{headerText:S.o.get(this.headerText),submitButtonText:S.o.get(L.T.TOTP_SUBMIT_BUTTON_TEXT),handleSubmit:function(r){return t.verifyTotpToken(r)},loading:this.loading},(0,w.h)("div",{class:"totp-setup"},this.qrCodeImageSource&&(0,w.h)("img",{src:this.qrCodeImageSource,alt:S.o.get(L.T.QR_CODE_ALT)}),(0,w.h)("amplify-form-field",{label:S.o.get(L.T.TOTP_LABEL),inputProps:this.inputProps,fieldId:"totpCode",name:"totpCode",handleInputChange:function(r){return t.handleTotpInputChange(r)}}))))}}],[{key:"watchers",get:function(){return{user:["handleUserChange"]}}}]),i;var e}();Fe.style=".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}"}}]);