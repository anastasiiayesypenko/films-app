(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{44:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return i});var n=a(1),r=function(e){return{type:n.a.ADD_TO_FAVORITES,payload:{film:e}}},o=function(e){return{type:n.a.MARK_WATCHED,payload:{film:e}}},c=function(e){return{type:n.a.DElETE_FROM_FAVORITES,payload:{id:e}}},i=function(e){return{type:n.a.DELETE_FROM_WATCHED,payload:{id:e}}}},46:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(48),r=a.n(n),o=a(47),c="bcf1e9109b9838d979a3eda6f6128d7e";t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return function(a){e.match(/fuck|f/i)&&(e=""),a(Object(o.b)()),r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t,"&include_adult=false")).then(function(e){a(Object(o.c)(e.data.results)),a(Object(o.f)(e.data.total_pages))}).catch(function(e){return a(Object(o.a)(e))})}}},47:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"c",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"f",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"a",function(){return u});var n=a(1),r=function(){return{type:n.a.FILM_LOADING}},o=function(e){return{type:n.a.FILM_SEARCH_SUCCESS,payload:{films:e}}},c=function(e){return{type:n.a.SET_FILM_QUERY,payload:{query:e}}},i=function(e){return{type:n.a.SET_PAGES,payload:{totalPages:e}}},l=function(e){return{type:n.a.SET_ACTIVE_PAGE,payload:{activePage:e}}},u=function(e){return{type:n.a.FILM_SEARCH_ERROR,payload:{error:e}}}},78:function(e,t,a){e.exports={title:"Form_title__1y3C0",form:"Form_form__VWjzV",input:"Form_input__3ATl8",button:"Form_button__3zl93",censureMessage:"Form_censureMessage__2fx7x"}},86:function(e,t,a){e.exports={arrow:"Pagination_arrow__3w388",doubleArrow:"Pagination_doubleArrow__2g85F",firstArrow:"Pagination_firstArrow__1tliz",backArrow:"Pagination_backArrow__20qp7",button:"Pagination_button__35S7S",page:"Pagination_page__1RhMp",pagination:"Pagination_pagination__m_kch"}},87:function(e,t,a){e.exports={film:"FilmItem_film__21O8b",overview:"FilmItem_overview__1UhQm",buttonWrapper:"FilmItem_buttonWrapper__2dv-J",showMoreButton:"FilmItem_showMoreButton__307Ah",showMoreLink:"FilmItem_showMoreLink__g8pT1",title:"FilmItem_title__2V-uz",vote:"FilmItem_vote__1fl45",button:"FilmItem_button__3xX3A",watchedButton:"FilmItem_watchedButton__1Xh7u",deleteWatchedButton:"FilmItem_deleteWatchedButton__3hfRe",favButton:"FilmItem_favButton__3zgan",deleteFavButton:"FilmItem_deleteFavButton__37uv-",img:"FilmItem_img__6lMIz"}},88:function(e,t,a){e.exports={filmsWrapper:"FilmsWrapper_filmsWrapper__sbZn6"}},89:function(e,t,a){e.exports={wrapper:"Home_wrapper__27E9n"}},91:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(46),o=a(0),c=a.n(o),i=a(50),l=a(79),u=(a(77),a(78)),s=a.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=c.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),d=c.a.createElement("path",{fill:"#fff",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),v=function(e){var t=e.svgRef,a=m(e,["svgRef"]);return c.a.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),p,d)},b=c.a.forwardRef(function(e,t){return c.a.createElement(v,f({svgRef:t},e))}),g=(a.p,function(e){var t=e.fetchFilms,a=e.query,n=e.setFilmQuery,r=e.setActivePage,u=Object(o.useState)(a),f=Object(i.a)(u,2),m=f[0],p=f[1];Object(o.useEffect)(function(){r(1)},[a]);return c.a.createElement("div",null,c.a.createElement("h2",{className:s.a.title}," Home ")," ",c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==m?(n(m),t(m,1)):Object(l.b)("Nothing was entered!")},className:s.a.form},c.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){p(e.target.value)},value:m,placeholder:"Enter film title here...",className:s.a.input})," ",c.a.createElement("button",{type:"submit",className:s.a.button},c.a.createElement(b,{className:s.a.search})," ")," ")," ",c.a.createElement("p",{className:s.a.censureMessage}," ","Results are passed through censure filter and do not include adult content."," ")," ",c.a.createElement(l.a,null))}),h=a(85),_=a(86),y=a.n(_);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=c.a.createElement("polyline",{points:"8.5,3 17.5,12 8.5,21 ",strokeMiterlimit:10,strokeWidth:2}),F=function(e){var t=e.svgRef,a=w(e,["svgRef"]);return c.a.createElement("svg",E({enableBackground:"new 0 0 24 24",id:"Layer_1",viewBox:"0 0 24 24",xmlSpace:"preserve",ref:t},a),O)},j=c.a.forwardRef(function(e,t){return c.a.createElement(F,E({svgRef:t},e))});a.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=c.a.createElement("g",null,c.a.createElement("polygon",{points:"2.049,0.58 -0.035,2.664 10.801,13.5 -0.035,24.336 2.049,26.42 14.969,13.5  "}),c.a.createElement("polygon",{points:"13.049,0.58 10.965,2.664 21.801,13.5 10.965,24.336 13.049,26.42 25.969,13.5  "})),P=function(e){var t=e.svgRef,a=k(e,["svgRef"]);return c.a.createElement("svg",N({enableBackground:"new 0 0 26 26",id:"Layer_1",viewBox:"0 0 26 26",xmlSpace:"preserve",ref:t},a),A)},R=c.a.forwardRef(function(e,t){return c.a.createElement(P,N({svgRef:t},e))});a.p;console.log(j);var L=function(e){var t=e.setActivePage,a=e.pages,n=e.query,r=e.fetchFilms,l=Object(h.useStateWithCallbackInstant)(1,function(){console.log("callback")}),u=Object(i.a)(l,2),s=u[0],f=u[1];Object(o.useEffect)(function(){f(1)},[n]);var m=function(e){f(e),t(e),r(n,e),window.scrollTo({top:0})},p=function(e){"back"===e?(t(s-1),f(s-1),r(n,s-1)):(t(s+1),f(s+1),r(n,s+1)),window.scrollTo({top:0})};return c.a.createElement("div",{className:y.a.pagination},c.a.createElement("button",{type:"button",className:y.a.button,disabled:s<2,onClick:function(){return m(1)}},c.a.createElement(R,{className:y.a.firstArrow})," ")," ",c.a.createElement("button",{type:"button",className:y.a.button,disabled:s<2,onClick:function(){return p("back")}},c.a.createElement(j,{className:y.a.backArrow})," ")," ",c.a.createElement("div",{className:y.a.page}," ",s," ")," ",c.a.createElement("button",{type:"button",className:y.a.button,disabled:s===a.totalPages,onClick:function(){return p("forward")}},c.a.createElement(j,{className:y.a.arrow})," ")," ",c.a.createElement("button",{type:"button",className:y.a.button,disabled:s===a.totalPages,onClick:function(){return m(a.totalPages)}},c.a.createElement(R,{className:y.a.doubleArrow})," ")," ")},S=a(11),x=a(87),I=a.n(x);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=c.a.createElement("path",{className:"heroicon-ui",d:"M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"}),C=function(e){var t=e.svgRef,a=M(e,["svgRef"]);return c.a.createElement("svg",W({height:24,viewBox:"0 0 24 24",width:24,ref:t},a),B)},T=c.a.forwardRef(function(e,t){return c.a.createElement(C,W({svgRef:t},e))});a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D=c.a.createElement("path",{clipRule:"evenodd",d:"M195.448,250.001c0,30.078,24.434,54.513,54.513,54.513  c30.078,0,54.513-24.435,54.513-54.513v-0.453c-5.819,5.905-13.805,9.539-22.715,9.539c-17.539,0-31.798-14.264-31.798-31.799  c0-12.626,7.443-23.623,18.08-28.712c-5.631-1.997-11.718-3.087-18.08-3.087C219.882,195.488,195.448,219.926,195.448,250.001z   M455.839,219.017c-33.804-42.97-116.113-114.384-205.79-114.384c-89.762,0-172.162,71.415-205.967,114.384  c-7.63,9.814-11.809,20.444-12.083,30.984c0.275,10.541,4.453,21.171,12.083,30.983c33.806,42.979,116.115,114.383,205.879,114.383  s172.074-71.404,205.878-114.383c7.718-9.813,11.898-20.442,12.173-30.983C467.737,239.461,463.557,228.831,455.839,219.017z   M249.961,340.854c-50.147,0-90.855-40.703-90.855-90.853c0-50.151,40.708-90.855,90.855-90.855  c50.146,0,90.854,40.704,90.854,90.855C340.814,300.15,300.106,340.854,249.961,340.854z"}),H=function(e){var t=e.svgRef,a=q(e,["svgRef"]);return c.a.createElement("svg",z({enableBackground:"new 0 0 500 500",id:"Layer_1",viewBox:"0 0 500 500",width:"500px",xmlSpace:"preserve",ref:t},a),D)},V=c.a.forwardRef(function(e,t){return c.a.createElement(H,z({svgRef:t},e))}),Q=(a.p,function(e){var t=e.film,a=e.addFilmToFavorites,n=e.markAsWatched,r=e.favoritesList,o=e.watchedList,i=e.deleteFromFavorites,l=e.deleteFromWatched;return c.a.createElement("div",{className:I.a.film},c.a.createElement(S.b,{to:"/".concat(t.title,"/").concat(t.id)},c.a.createElement("img",{className:I.a.img,src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):"https://www.viser.edu.rs/images/no_photo.jpeg",alt:"film poster"}))," ",c.a.createElement("div",null,c.a.createElement("h3",{className:I.a.title}," ",t.title," ")," ",t.vote_average>0&&c.a.createElement("p",{className:I.a.vote}," ",t.vote_average," ")," ",c.a.createElement("p",{className:I.a.overview}," ",t.overview||"no overview"," ")," ",c.a.createElement("div",{className:I.a.buttonWrapper}," ",r.find(function(e){return Number(e.id)===Number(t.id)})?c.a.createElement("button",{type:"button",onClick:function(){i(t.id)},className:I.a.button,title:"delete from favorites"},c.a.createElement(T,{className:I.a.deleteFavButton})," "):c.a.createElement("button",{type:"button",onClick:function(){a(t)},title:"add to favorites",className:I.a.button},c.a.createElement(T,{className:I.a.favButton})," ")," ",o.find(function(e){return Number(e.id)===Number(t.id)})?c.a.createElement("button",{type:"button",onClick:function(){l(t.id)},className:I.a.button,title:"delete from watched"},c.a.createElement(V,{className:I.a.deleteWatchedButton})," "):c.a.createElement("button",{type:"button",onClick:function(){n(t)},title:"add to watched",className:I.a.button},c.a.createElement(V,{className:I.a.watchedButton})," ")," ")," ")," ",c.a.createElement("button",{type:"button",className:I.a.showMoreButton},c.a.createElement(S.b,{to:"/".concat(t.title,"/").concat(t.id),className:I.a.showMoreLink}," ","Show more"," ")," ")," ")}),G=a(13),J=a(88),U=a.n(J),X=function(e){var t=e.isLoading,a=e.films,n=e.error,r=e.pages,o=e.query,i=e.addFilmToFavorites,l=e.markAsWatched,u=e.favoritesList,s=e.fetchFilms,f=e.watchedList,m=e.deleteFromFavorites,p=e.deleteFromWatched,d=e.setActivePage;return n&&console.log(n),c.a.createElement("div",null,c.a.createElement("section",{className:U.a.filmsWrapper}," ",t&&c.a.createElement(G.a,null)," ",a.length>0&&a.map(function(e){return c.a.createElement(Q,{key:e.id,film:e,addFilmToFavorites:i,markAsWatched:l,favoritesList:u,watchedList:f,deleteFromFavorites:m,deleteFromWatched:p})}))," ",a.length>0&&c.a.createElement(L,{setActivePage:d,pages:r,query:o,fetchFilms:s})," ")},K=a(89),Y=a.n(K),Z=function(e){var t=e.fetchFilms,a=e.isLoading,n=e.films,r=e.error,o=e.query,i=e.pages,l=e.addFilmToFavorites,u=e.markAsWatched,s=e.favoritesList,f=e.watchedList,m=e.deleteFromFavorites,p=e.deleteFromWatched,d=e.setActivePage,v=e.setFilmQuery;return c.a.createElement("div",{className:Y.a.wrapper},c.a.createElement(g,{fetchFilms:t,query:o,setFilmQuery:v,setActivePage:d})," ",c.a.createElement(X,{fetchFilms:t,isLoading:a,films:n,error:r,pages:i,query:o,addFilmToFavorites:l,markAsWatched:u,favoritesList:s,watchedList:f,deleteFromFavorites:m,deleteFromWatched:p,setActivePage:d})," ")},$=a(44),ee=a(47);t.default=Object(n.b)(function(e){return{isLoading:e.isLoading,films:e.films,error:e.error,query:e.query,pages:e.pages,favoritesList:e.favoritesList,watchedList:e.watchedList}},function(e){return{fetchFilms:function(t,a){return e(Object(r.b)(t,a))},addFilmToFavorites:function(t){return e(Object($.a)(t))},markAsWatched:function(t){return e(Object($.d)(t))},deleteFromFavorites:function(t){return e(Object($.b)(t))},deleteFromWatched:function(t){return e(Object($.c)(t))},setActivePage:function(t){return e(Object(ee.d)(t))},setFilmQuery:function(t){return e(Object(ee.e)(t))}}})(Z)}}]);
//# sourceMappingURL=home-page.2724f233.chunk.js.map