"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[565],{565:function(e,t,r){r.r(t),r.d(t,{Search:function(){return h}});var n=r(861),u=r(439),a=r(757),s=r.n(a),c=r(130),i=r(87),o=r(791),l=r(787),f=r(184),h=function(e){var t,r=(0,o.useState)(),a=(0,u.Z)(r,2),h=a[0],v=a[1],m=(0,i.lr)(),p=(0,u.Z)(m,2),_=p[0],d=p[1],x=null!==(t=_.get("query"))&&void 0!==t?t:"";(0,o.useEffect)((function(){if(""!==x){var e=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.fetchMoviesWithQuery(x);case 3:r=e.sent,v(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(x)}}),[x]);return(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault();var t=e.currentTarget;d({query:t.elements.query.value})},children:[(0,f.jsx)("input",{className:"search-form__input",type:"text",name:"query",placeholder:"Search movies",value:x,onChange:function(e){return d({query:e.target.value})}}),(0,f.jsx)("button",{className:"search-form__button",type:"submit",children:"Search"})]}),function(e){if(null!=e)return(0,f.jsx)(c.O,{moviesList:e})}(h)]})}}}]);
//# sourceMappingURL=565.8476d49d.chunk.js.map