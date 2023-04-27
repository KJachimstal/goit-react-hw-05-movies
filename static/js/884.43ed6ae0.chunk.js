"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{884:function(e,r,t){t.r(r);var n=t(861),a=t(439),i=t(757),s=t.n(i),c=t(791),o=t(689),u=t(390),p=t(87),v=t(184);r.default=function(){var e,r,t=(0,o.UO)().movieId,i=(0,c.useState)(null),h=(0,a.Z)(i,2),l=h[0],d=h[1],f=null!==(e=null===(r=(0,o.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.fetchMovieById(r);case 3:t=e.sent,d(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();e(t)}),[t]),l?(0,v.jsxs)("div",{className:"movie__container",children:[(0,v.jsx)(p.rU,{to:f,children:"Back"}),(0,v.jsxs)("div",{className:"movie__general",children:[(0,v.jsx)("img",{className:"movie__image",src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(l.poster_path),alt:"Movie poster"}),(0,v.jsxs)("div",{className:"movie__info",children:[(0,v.jsx)("h3",{className:"movie__title",children:l.title}),"User Score: ",l.vote_average,"%",(0,v.jsx)("h5",{children:"Overview"})," ",l.overview,(0,v.jsx)("h5",{children:"Genres"}),l.genres.map((function(e){return(0,v.jsxs)("span",{children:[e.name," "]},e.id)}))]})]}),(0,v.jsx)("hr",{className:"divider"}),(0,v.jsx)("h5",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)("hr",{className:"divider"}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(o.j3,{})})]}):null}},390:function(e,r,t){var n=t(861),a=t(757),i=t.n(a),s=t(243),c="8645c0fb88a26a8ad33046f58e6535b4",o=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:c,query:r}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l={fetchTrendingMovies:o,fetchMoviesWithQuery:u,fetchMovieById:p,fetchMovieReviews:v,fetchMovieCredits:h};r.Z=l}}]);
//# sourceMappingURL=884.43ed6ae0.chunk.js.map