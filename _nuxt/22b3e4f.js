(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{177:function(t,e,r){"use strict";r.r(e);var o=r(183),n={computed:{twtBlue:function(){return o.a}}},c=(r(312),r(49)),l=r(54),d=r.n(l),f=r(385),v=r(386),m=r(387),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{attrs:{id:"homeHead","align-content":"space-between"}},[o("v-col",[o("v-avatar",{attrs:{color:"twitter-primary",size:"35"}},[o("img",{attrs:{src:r(308)}})])],1),t._v(" "),o("v-col",{staticClass:"d-flex align-center justify-center"},[o("img",{staticClass:"twitter-icon-blue small",attrs:{src:t.twtBlue,alt:"twitter-blue"}})]),t._v(" "),o("v-col",{staticClass:"text-right d-flex align-center justify-end"},[o("img",{staticClass:"xsmall",attrs:{src:r(309),alt:"top-tweets"}})])],1)}),[],!1,null,"46d1b143",null);e.default=component.exports;d()(component,{VAvatar:f.a,VCol:v.a,VRow:m.a})},178:function(t,e,r){"use strict";r.r(e);r(35);var o={computed:{value:function(){var t=this.$route.name;return["home","happy-birthday"].indexOf(t)}}},n=r(49),c=r(54),l=r.n(c),d=r(388),f=r(389),v=r(378),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-bottom-navigation",{attrs:{value:t.value,grow:"",color:"twitter-primary","background-color":"#121212"}},[r("v-btn",{on:{click:function(e){return t.$router.push({name:"home"})}}},[r("span",[t._v("Home")]),t._v(" "),r("v-icon",[t._v("mdi-home")])],1),t._v(" "),r("v-btn",{on:{click:function(e){return t.$router.push({name:"happy-birthday"})}}},[r("span",[t._v("Happy Birthday")]),t._v(" "),r("v-icon",[t._v("mdi-cake-variant")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBottomNavigation:d.a,VBtn:f.a,VIcon:v.a})},183:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return n}));var o=r(310),n=r(311)},221:function(t,e,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("dc093880",content,!0,{sourceMap:!1})},223:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("0657e9e4",content,!0,{sourceMap:!1})},247:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("7922b41e",content,!0,{sourceMap:!1})},261:function(t,e,r){"use strict";var head=r(177),o=r(178),n={components:{HomeHead:head.default,BottomNav:o.default}},c=(r(353),r(49)),l=r(54),d=r.n(l),f=r(384),v=r(391),m=r(390),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-main",[r("v-container",{attrs:{fluid:""}},[r("home-head")],1),t._v(" "),r("div",{staticClass:"main-wrapper height custom-scrollbar"},[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("bottom-nav")],1)],1)}),[],!1,null,"caeeb6ca",null);e.a=component.exports;d()(component,{HomeHead:r(177).default,BottomNav:r(178).default}),d()(component,{VApp:f.a,VContainer:v.a,VMain:m.a})},262:function(t,e,r){"use strict";var o=r(49),n=r(54),c=r.n(n),l=r(384),d=r(390),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:l.a,VMain:d.a})},265:function(t,e,r){r(266),t.exports=r(267)},289:function(t,e,r){"use strict";r.r(e);var o=r(87),n=(r(55),r(35),["store","route"]);e.default=function(t){var e=t.store,r=t.route,c=(Object(o.a)(t,n),e.$router),l=e.getters.loggedIn;["home","happy-birthday"].includes(r.name)&&!l&&c.push({name:"index"})}},298:function(t,e,r){"use strict";r(221)},299:function(t,e,r){var o=r(29)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},304:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("59c62de7",content,!0,{sourceMap:!1})},305:function(t,e,r){var o=r(29)(!1);o.push([t.i,".twitter-icon-blue{width:50px}img.small{width:35px}img.xsmall{width:25px}body{max-width:375px;margin:0 auto;background:#4e4e4e}.custom-scrollbar::-webkit-scrollbar{width:10px}.custom-scrollbar::-webkit-scrollbar-track{background-color:#e4e4e4;border-radius:100px}.custom-scrollbar::-webkit-scrollbar-thumb{border-radius:100px;background-image:linear-gradient(180deg,#d0368a,#708ad4 99%);box-shadow:inset 2px 2px 5px 0 hsla(0,0%,100%,.5)}",""]),t.exports=o},308:function(t,e,r){t.exports=r.p+"img/kd-dp.04dd86f.jpeg"},309:function(t,e,r){t.exports=r.p+"img/top-tweets.c89fce7.svg"},310:function(t,e,r){t.exports=r.p+"img/twitter-white.29b430a.png"},311:function(t,e,r){t.exports=r.p+"img/twitter-blue.6c453e0.svg"},312:function(t,e,r){"use strict";r(223)},313:function(t,e,r){var o=r(29)(!1);o.push([t.i,"#homeHead[data-v-46d1b143]{border-bottom:1px solid #2f3336;position:absolute;top:12px;width:100%;background:#121212;z-index:10}",""]),t.exports=o},353:function(t,e,r){"use strict";r(247)},354:function(t,e,r){var o=r(29)(!1);o.push([t.i,".height[data-v-caeeb6ca]{max-height:91vh;min-height:91vh;overflow-y:auto;overflow-x:hidden}.main-wrapper[data-v-caeeb6ca]{margin-top:38px}",""]),t.exports=o},357:function(t,e,r){"use strict";r.r(e),e.default={state:function(){return{loggedIn:!1}},mutations:{setAuth:function(t,e){t.loggedIn=e}},getters:{loggedIn:function(t){return t.loggedIn}}}},79:function(t,e,r){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(298),r(49)),c=r(54),l=r.n(c),d=r(384),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[265,14,2,15]]]);