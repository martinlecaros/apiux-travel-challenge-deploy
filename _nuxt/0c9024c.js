(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{253:function(t,e,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("5bf01e24",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";n(253)},255:function(t,e,n){var r=n(132)(!1);r.push([t.i,'.header[data-v-83098c18]{height:75px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:12px solid #f9a825}.header .logo[data-v-83098c18]{max-width:164px}.header .wrapper-nav-link[data-v-83098c18]{display:flex}.header .wrapper-nav-link .nav-link[data-v-83098c18]{list-style:none}.header .wrapper-nav-link .nav-link a[data-v-83098c18]{color:#8bc34a;text-decoration:none;font-size:20px;font-weight:700;margin-right:25px;font-family:"Overpass Mono"}.header .wrapper-nav-link .nav-link a[data-v-83098c18]:hover{padding-bottom:25px;border-bottom:12px solid #8bc34a}',""]),t.exports=r},256:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(59),n(14),n(75),{name:"Header",data:function(){return{data:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-desarrollador-front.cclh.io/options/").then((function(t){return t.json()}));case 2:t.data=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),c=o,l=(n(254),n(46)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?n("p",[t._v("Fetching menu...")]):t.$fetchState.error?n("p",[t._v("An error occurred :(")]):n("div",{staticClass:"header"},[n("NuxtLink",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:t.data.header.logo_header,alt:"Travel"}})]),t._v(" "),n("nav",[n("ul",{staticClass:"wrapper-nav-link"},t._l(t.data.header.menus,(function(e){return n("li",{key:e.menu_url,staticClass:"nav-link"},[n("NuxtLink",{attrs:{to:e.menu_url}},[t._v(t._s(e.menu_label))])],1)})),0)])],1)}),[],!1,null,"83098c18",null);e.default=component.exports}}]);