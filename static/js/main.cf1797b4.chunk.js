(this["webpackJsonpbreaking-bad-phrases"]=this["webpackJsonpbreaking-bad-phrases"]||[]).push([[0],{12:function(t,e,r){},15:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),c=r(7),s=r.n(c),o=(r(12),r(3)),u=r(2),i=r.n(u),b=r(4),j=r(5),p=r(0),h=function(t){var e=t.quote;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("p",{children:[e.text,Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:e.author})]})})};var l={text:"",author:""},x="https://breakingbadapi.com/api/quote/random",f=function(){var t=Object(j.a)(i.a.mark((function t(e,r){var n,a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.statusText||"404");case 6:return t.next=8,n.json();case 8:a=t.sent,c=Object(b.a)(Object(b.a)({},l),{},{text:a[0].quote,author:a[0].author}),r(c),console.log(c),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,r){return t.apply(this,arguments)}}();var O=function(){var t=function(t){var e=Object(n.useState)(null),r=Object(o.a)(e,2),a=r[0],c=r[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),b=u[0],p=u[1];return Object(n.useEffect)((function(){var e=function(){var t=Object(j.a)(i.a.mark((function t(e){var r,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((r=t.sent).ok){t.next=6;break}throw{error:!0,status:r.status,statusText:r.statusText?r.statusText:"Ocurrio un error"};case 6:return t.next=8,r.json();case 8:n=t.sent,c(n),p(!1),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),c(null),p(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}();e(t)}),[t]),{data:a,error:b}}(x),e=t.data,r=Object(n.useState)(l),a=Object(o.a)(r,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){if(e){var t=Object(b.a)(Object(b.a)({},l),{},{text:e[0].quote,author:e[0].author});s(t)}}),[e]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg",alt:"logo"}),Object(p.jsx)("button",{onClick:function(t){f(x,s)},children:"Get Another"}),Object(p.jsx)(h,{quote:c})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cf1797b4.chunk.js.map