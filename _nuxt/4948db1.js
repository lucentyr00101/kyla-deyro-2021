(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{392:function(t,n,e){"use strict";e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return l})),e.d(n,"c",(function(){return v}));var o="ranzpogi",r=[function(t){return!!t||"This field is required."},function(t){return t&&t.length>=3||"Min of 3 characters."},function(t){return t&&t===o||"Click forgot password"}],c="Solve for x: 2x + 3 = 33",l="15",v=[function(t){return!!t||"This field is required."},function(t){return t&&t===l||"Click forgot password"}]},393:function(t,n,e){var content=e(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("376124b3",content,!0,{sourceMap:!1})},394:function(t,n,e){"use strict";e(393)},395:function(t,n,e){var o=e(29)(!1);o.push([t.i,".forgot-password[data-v-695f27bc]{font-weight:700;cursor:pointer;text-decoration:underline;font-size:14px}",""]),t.exports=o},396:function(t,n,e){"use strict";e.r(n);var o=e(392),r={data:function(){return{snackbar:!1}},computed:{userName:function(){return o.d},passwordChallenge:function(){return o.b}}},c=(e(394),e(49)),l=e(54),v=e.n(l),d=e(386),h=e(387),f=e(424),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-row",[e("v-col",{staticClass:"text-center"},[e("span",{staticClass:"forgot-password",on:{click:function(n){t.snackbar=!0}}},[t._v("\n        Forgot Password?\n      ")])])],1),t._v(" "),e("v-snackbar",{attrs:{color:"white",text:"",rounded:"pill"},model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[e("p",{staticClass:"mb-0"},[t._v("\n      Username: "+t._s(t.userName)+"\n    ")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n      Password: "+t._s(t.passwordChallenge)+"\n    ")])])],1)}),[],!1,null,"695f27bc",null);n.default=component.exports;v()(component,{VCol:d.a,VRow:h.a,VSnackbar:f.a})},418:function(t,n,e){var content=e(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("63c9496b",content,!0,{sourceMap:!1})},419:function(t,n,e){var o=e(29)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},424:function(t,n,e){"use strict";var o=e(1),r=(e(50),e(55),e(81),e(418),e(147)),c=e(60),l=e(59),v=e(136),d=e(116),h=e(36),f=e(3),k=e(11);n.a=Object(h.a)(r.a,c.a,v.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,n=t.bar,e=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(f.d)(e+footer+o),paddingLeft:Object(f.d)(r),paddingRight:Object(f.d)(c),paddingTop:Object(f.d)(n+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(k.e)("auto-height",this),0==this.timeout&&Object(k.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(f.i)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(f.i)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var n=Number(this.timeout);this.isActive&&![0,-1].includes(n)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),n))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);