(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{104:function(e,n,t){"use strict";var r=t(65),a=t.n(r),o=t(66),c=t(129),i=(t(121),t(69)),u=function(e,n){switch(e.status){case 403:"check"===e.url.replace(n,"")?window.location.href="#/login":(i.a.error("\u6743\u9650\u8fc7\u671f\uff0c\u4e24\u79d2\u540e\u8df3\u8f6c\u767b\u5f55\u9875",2),setTimeout((function(){window.location.href="#/login"}),2e3));break;case 404:i.a.error("\u8bf7\u6c42\u8def\u5f84\u627e\u4e0d\u7740");break;default:i.a.error("\u7cfb\u7edf\u7e41\u5fd9")}return e.json()},s=fetch;Object.defineProperty(window,"fetch",{configurable:!0,enumerable:!0,get:function(){return function(e,n){return s("".concat("http://localhost:7000/").concat(e),Object(c.a)({},n,{},{headers:Object(c.a)({"Content-Type":"application/json;charset=UTF-8",Accept:"application/json",authorization:localStorage.getItem("token")},n.headers)})).then(function(){var e=Object(o.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==n.ok){e.next=2;break}return e.abrupt("return",n.json());case 2:return e.abrupt("return",u(n,"http://localhost:7000/"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).then((function(e){return e}))}}});var f=function(e,n,t){var r=fetch(e,{method:"POST",headers:t,body:JSON.stringify(n)});return Promise.race([new Promise((function(e,n){setTimeout((function(){n(new Error("request timeout"))}),1e3)})),r])};t.d(n,"a",(function(){return f}))},223:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var r=t(65),a=t.n(r),o=t(66),c=t(103),i=(t(67),t(79)),u=(t(134),t(218)),s=t(68),f=t(0),l=t.n(f),h=t(76),b=t(69),p=t(20),m=t(104);function d(){var e=Object(s.a)(["\n  width: 2.4rem;\n  height: 0.68rem;\n  border: none;\n  border-radius: 0.08rem;\n"]);return d=function(){return e},e}function g(){var e=Object(s.a)(["\n  margin: 0.4rem auto;\n"]);return g=function(){return e},e}function v(){var e=Object(s.a)(["\n  font-size: 0.6rem;\n  font-weight: bold;\n"]);return v=function(){return e},e}function j(){var e=Object(s.a)(["\n  width: 8.412rem;\n  height: auto;\n  padding: 0.72rem 1.56rem;\n  box-sizing: border-box;\n  border-radius: 2px;\n  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  text-align: center;\n"]);return j=function(){return e},e}function w(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f3f4;\n"]);return w=function(){return e},e}var O=h.a.section(w()),k=h.a.div(j()),x=h.a.h2(v()),y=Object(h.a)(u.a)(g()),E=Object(h.a)(i.a)(d());function C(e){var n=Object(f.useState)(""),t=Object(c.a)(n,2),r=t[0],i=t[1],s=Object(f.useState)(""),h=Object(c.a)(s,2),d=h[0],g=h[1],v=function(){var n=Object(o.a)(a.a.mark((function n(){var t,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={name:r,password:d},n.next=4,Object(m.a)("login",t);case 4:(o=n.sent).token&&(Object(p.b)("token",o.token),e.history.push("/")),o.msg&&b.a.error(o.msg),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return l.a.createElement(O,null,l.a.createElement(k,null,l.a.createElement(x,null,"ADMIN"),l.a.createElement(u.a,{onChange:function(e){i(e.target.value)},placeholder:"admin",value:r,prefix:l.a.createElement("i",{className:"iconfont icon-denglu"})}),l.a.createElement(y,{onChange:function(e){g(e.target.value)},placeholder:"123456",value:d,prefix:l.a.createElement("i",{className:"iconfont icon-mima"})}),l.a.createElement(E,{onClick:v,type:"primary"},"\u767b\u5f55")))}},69:function(e,n,t){"use strict";t(106);var r=t(128);r.a.config({top:10,duration:2,maxCount:3}),n.a=r.a}}]);
//# sourceMappingURL=9.5be2d5ea.chunk.js.map