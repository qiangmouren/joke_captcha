(function(e){function t(t){for(var r,c,s=t[0],n=t[1],l=t[2],d=0,u=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var n=a[s];0!==o[n]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],n=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=n;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1130:function(e,t,a){e.exports=a.p+"img/payload_13.786ea4ef.jpg"},"15a8":function(e,t,a){e.exports=a.p+"img/payload_18.f9504996.jpg"},2710:function(e,t,a){e.exports=a.p+"img/payload_14.76c337ca.jpg"},"2b34":function(e,t,a){e.exports=a.p+"img/payload_5.2c504fe5.jpg"},4637:function(e,t,a){e.exports=a.p+"img/payload_4.e3e030c4.jpg"},"4ffd":function(e,t,a){e.exports=a.p+"img/payload_3.238ea39a.jpg"},5288:function(e,t,a){e.exports=a.p+"img/payload_7.83ec34c9.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Captcha")},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"100%",height:"100%",position:"fixed",top:"0px",left:"0px","z-index":"2000000000","background-color":"rgb(255, 255, 255)",opacity:"0.05"},on:{click:e.close}}),r("div",{staticClass:"gc-wrap"},[r("div",{staticClass:"gc-size-wrap",staticStyle:{"z-index":"2000000000",position:"relative"}},[r("div",{staticClass:"gc-size-wrap",attrs:{id:"rc-imageselect"}},[r("div",{attrs:{id:"rc-imageselect"}},[r("div",{staticClass:"rc-imageselect-response-field"}),r("span",{staticClass:"rc-imageselect-tabloop-begin",attrs:{tabindex:"0"}}),r("div",{staticClass:"rc-imageselect-payload"},[r("div",{staticClass:"rc-imageselect-instructions"},[r("div",{staticClass:"rc-imageselect-desc-wrapper"},[r("div",{staticClass:"rc-imageselect-desc-no-canonical",staticStyle:{width:"352px","font-size":"12px"}},[e._v("选择所有包含"),r("strong",{staticStyle:{"font-size":"28px"}},[e._v(e._s(e.objectName))]),e._v("的图片")])]),r("div",{staticClass:"rc-imageselect-progress"})]),r("div",{staticClass:"rc-imageselect-challenge"},[r("div",{staticClass:"rc-imageselect-target",attrs:{id:"rc-imageselect-target",dir:"ltr",role:"presentation","aria-hidden":"true"}},[r("table",{staticClass:"rc-imageselect-table-33"},[r("tbody",e._l(3,(function(t){return r("tr",{key:t},e._l(3,(function(o){return r("td",{key:o,staticClass:"rc-imageselect-tile",class:{"rc-imageselect-tileselected":e.selectedId.includes(t+""+o)},attrs:{role:"button",tabindex:"0","aria-label":"图片验证"},on:{click:function(a){return e.itemClick(t+""+o)}}},[r("div",{staticClass:"rc-image-tile-target"},[r("div",{staticClass:"rc-image-tile-wrapper",staticStyle:{width:"126px",height:"126px"}},[r("img",{staticClass:"rc-image-tile-33",style:{top:"-"+100*(t-1)+"%",left:"-"+100*(o-1)+"%"},attrs:{src:a("7647")("./payload_"+e.payloadId+".jpg")}}),r("div",{staticClass:"rc-image-tile-overlay"})]),r("div",{staticClass:"rc-imageselect-checkbox"})])])})),0)})),0)])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:"rc-imageselect-incorrect-response"==e.errorCode,expression:"errorCode=='rc-imageselect-incorrect-response'"}],staticClass:"rc-imageselect-incorrect-response"},[e._v("请重试。")]),r("div",{directives:[{name:"show",rawName:"v-show",value:"rc-imageselect-error-select-more"==e.errorCode,expression:"errorCode=='rc-imageselect-error-select-more'"}],staticClass:"rc-imageselect-error-select-more"},[e._v("请选择所有相符的图片。")])]),r("div",{staticClass:"rc-footer"},[r("div",{staticClass:"rc-separator"}),r("div",{staticClass:"rc-controls"},[r("div",{staticClass:"primary-controls"},[r("div",{staticClass:"rc-buttons"},[r("div",{staticClass:"button-holder reload-button-holder"},[r("button",{staticClass:"rc-button goog-inline-block rc-button-reload",attrs:{title:"换一个新的验证码",value:"",id:"recaptcha-reload-button",tabindex:"0"},on:{click:e.reload}})]),e._m(0)]),r("div",{staticClass:"verify-button-holder"},[r("button",{staticClass:"rc-button-default goog-inline-block",class:{"rc-button-default-disabled":e.buttonDisabled},attrs:{title:"",value:"",id:"recaptcha-verify-button",tabindex:"0"},on:{click:e.verify}},[e._v("验证")])])]),r("div",{staticClass:"rc-challenge-help",staticStyle:{display:"none"},attrs:{tabindex:"0"}})])]),r("span",{staticClass:"rc-imageselect-tabloop-end",attrs:{tabindex:"0"}})])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"button-holder help-button-holder"},[a("a",{staticClass:"rc-button goog-inline-block rc-button-help",attrs:{href:"https://support.google.com/recaptcha/?hl=en",target:"_blank",rel:"noopener noreferrer",title:"帮助",value:"",id:"recaptcha-help-button",tabindex:"0"}})])}],n=(a("d81d"),a("cb29"),a("caad"),a("2532"),a("4de4"),a("59a1"),20),l=new Array(n+1).fill(1).map((function(e,t){return t+""})),p=function(){return l[Math.floor(Math.random()*l.length)]},d=["公交车","消防栓","烟囱","飞机"],u=function(){return d[Math.floor(Math.random()*d.length)]},g={data:function(){return{buttonDisabled:!1,objectName:u(),payloadId:p(),selectedId:[],errorCode:""}},methods:{verify:function(){var e=this;this.selectedId.length<2?this.throwError("rc-imageselect-error-select-more"):(this.buttonDisabled=!0,setTimeout((function(){e.throwError("rc-imageselect-incorrect-response"),e.reload()}),1e3))},close:function(){this.$emit("close")},reload:function(){var e=this;this.buttonDisabled=!0,this.selectedId=[],setTimeout((function(){var t=e.payloadId+"";while(t==e.payloadId)e.payloadId=p();e.objectName=u(),e.buttonDisabled=!1}),300)},throwError:function(e){var t=this;this.errorCode=e,setTimeout((function(){t.errorCode=""}),1e3)},itemClick:function(e){this.buttonDisabled||(this.selectedId.includes(e)?this.selectedId=this.selectedId.filter((function(t){return t!=e})):this.selectedId.push(e))}}},f=g,b=a("2877"),m=Object(b["a"])(f,c,s,!1,null,null,null),y=m.exports,h={name:"App",components:{Captcha:y}},v=h,_=Object(b["a"])(v,o,i,!1,null,null,null),j=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"59a1":function(e,t,a){},"60d6":function(e,t,a){e.exports=a.p+"img/payload_12.99ee3fa1.jpg"},6188:function(e,t,a){e.exports=a.p+"img/payload_10.a034be11.jpg"},"625c":function(e,t,a){e.exports=a.p+"img/payload_8.3cd8fcb2.jpg"},"6beb":function(e,t,a){e.exports=a.p+"img/payload_11.c0f8d1c0.jpg"},7647:function(e,t,a){var r={"./payload_0.jpg":"9809","./payload_1.jpg":"ebc9","./payload_10.jpg":"6188","./payload_11.jpg":"6beb","./payload_12.jpg":"60d6","./payload_13.jpg":"1130","./payload_14.jpg":"2710","./payload_15.jpg":"8149","./payload_16.jpg":"fb36","./payload_17.jpg":"fa11","./payload_18.jpg":"15a8","./payload_19.jpg":"76ee","./payload_2.jpg":"87f8","./payload_20.jpg":"a4b9","./payload_3.jpg":"4ffd","./payload_4.jpg":"4637","./payload_5.jpg":"2b34","./payload_6.jpg":"e1c1","./payload_7.jpg":"5288","./payload_8.jpg":"625c","./payload_9.jpg":"bff5"};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="7647"},"76ee":function(e,t,a){e.exports=a.p+"img/payload_19.a4cccbed.jpg"},8149:function(e,t,a){e.exports=a.p+"img/payload_15.4a6d1fe4.jpg"},"87f8":function(e,t,a){e.exports=a.p+"img/payload_2.96d98e86.jpg"},9809:function(e,t,a){e.exports=a.p+"img/payload_0.8820c683.jpg"},a4b9:function(e,t,a){e.exports=a.p+"img/payload_20.b8dbb9c5.jpg"},bff5:function(e,t,a){e.exports=a.p+"img/payload_9.8ceaf454.jpg"},e1c1:function(e,t,a){e.exports=a.p+"img/payload_6.7b7ac480.jpg"},ebc9:function(e,t,a){e.exports=a.p+"img/payload_1.46c9d5e9.jpg"},fa11:function(e,t,a){e.exports=a.p+"img/payload_17.3fdd3eb6.jpg"},fb36:function(e,t,a){e.exports=a.p+"img/payload_16.89229783.jpg"}});
//# sourceMappingURL=app.79412193.js.map