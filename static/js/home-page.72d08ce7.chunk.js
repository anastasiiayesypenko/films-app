(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{42:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i});var a=n(1),r=function(e){return{type:a.a.ADD_TO_FAVORITES,payload:{film:e}}},o=function(e){return{type:a.a.MARK_WATCHED,payload:{film:e}}},c=function(e){return{type:a.a.DElETE_FROM_FAVORITES,payload:{id:e}}},i=function(e){return{type:a.a.DELETE_FROM_WATCHED,payload:{id:e}}}},43:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(45),r=n.n(a),o=n(44),c="bcf1e9109b9838d979a3eda6f6128d7e";t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return function(n){n(Object(o.b)()),r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t,"&include_adult=false")).then(function(e){n(Object(o.c)(e.data.results)),n(Object(o.f)(e.data.total_pages))}).catch(function(e){return n(Object(o.a)(e))})}}},44:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return l});var a=n(1),r=function(){return{type:a.a.FILM_LOADING}},o=function(e){return{type:a.a.FILM_SEARCH_SUCCESS,payload:{films:e}}},c=function(e){return{type:a.a.SET_FILM_QUERY,payload:{query:e}}},i=function(e){return{type:a.a.SET_PAGES,payload:{totalPages:e}}},u=function(e){return{type:a.a.SET_ACTIVE_PAGE,payload:{activePage:e}}},l=function(e){return{type:a.a.FILM_SEARCH_ERROR,payload:{error:e}}}},74:function(e,t,n){e.exports={form:"Form_form__VWjzV",input:"Form_input__3ATl8",button:"Form_button__3zl93"}},82:function(e,t,n){e.exports={wrapper:"Home_wrapper__27E9n"}},84:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(43),o=n(0),c=n.n(o),i=n(46),u=n(75),l=(n(73),n(74)),s=n.n(l);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=c.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),p=c.a.createElement("path",{fill:"#fff",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b=function(e){var t=e.svgRef,n=d(e,["svgRef"]);return c.a.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),m,p)},v=c.a.forwardRef(function(e,t){return c.a.createElement(b,f({svgRef:t},e))}),h=(n.p,function(e){var t=e.fetchFilms,n=e.query,a=e.setFilmQuery,r=e.setActivePage,l=Object(o.useState)(n),f=Object(i.a)(l,2),d=f[0],m=f[1];Object(o.useEffect)(function(){r(1)},[n]);return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==d?(a(d),t(d,1)):Object(u.b)("Nothing was entered!")},className:s.a.form},c.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){m(e.target.value)},value:d,className:s.a.input})," ",c.a.createElement("button",{type:"submit",className:s.a.button},c.a.createElement(v,{className:s.a.search})," ")," "),c.a.createElement(u.a,null))}),E=n(81),y=function(e){var t=e.setActivePage,n=e.pages,a=e.query,r=e.fetchFilms,u=Object(E.useStateWithCallbackInstant)(1,function(){window.scrollTo({top:0})}),l=Object(i.a)(u,2),s=l[0],f=l[1];Object(o.useEffect)(function(){f(1)},[a]);var d=function(e){f(e),t(e),r(a,e)},m=function(e){"back"===e?(t(s-1),f(s-1),r(a,s-1)):(t(s+1),f(s+1),r(a,s+1))};return c.a.createElement("div",null,c.a.createElement("button",{type:"button",disabled:s<2,onClick:function(){return d(1)}},"First"),c.a.createElement("button",{type:"button",disabled:s<2,onClick:function(){return m("back")}},"Back"),c.a.createElement("button",{type:"button",disabled:s===n.totalPages,onClick:function(){return m("forward")}},"Forward"),c.a.createElement("div",null," ",s," "),c.a.createElement("button",{type:"button",disabled:s===n.totalPages,onClick:function(){return d(n.totalPages)}},"Last"))},F=n(10),g=function(e){var t=e.film,n=e.addFilmToFavorites,a=e.markAsWatched,r=e.favoritesList,o=e.watchedList,i=e.deleteFromFavorites,u=e.deleteFromWatched;return c.a.createElement("div",{className:"filmWrapper"},c.a.createElement(F.b,{to:"/".concat(t.title,"/").concat(t.id)},c.a.createElement("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):"https://www.viser.edu.rs/images/no_photo.jpeg",alt:"film poster"})),c.a.createElement("div",null,c.a.createElement("h3",null," ",t.title," ")," ",c.a.createElement("p",null,t.vote_average||"no votes"),c.a.createElement("p",null," ",t.overview||"no overview"," "),r.find(function(e){return Number(e.id)===Number(t.id)})?c.a.createElement("button",{type:"button",onClick:function(){i(t.id)}},"Delete from fav"):c.a.createElement("button",{type:"button",onClick:function(){n(t)}},"Add to fav"),o.find(function(e){return Number(e.id)===Number(t.id)})?c.a.createElement("button",{type:"button",onClick:function(){u(t.id)}},"Delete from watched"):c.a.createElement("button",{type:"button",onClick:function(){a(t)}},"Add to watched")),c.a.createElement("button",{type:"button"},c.a.createElement(F.b,{to:"/".concat(t.title,"/").concat(t.id)}," Show more ")))},O=n(12),w=function(e){var t=e.isLoading,n=e.films,a=e.error,r=e.pages,o=e.query,i=e.addFilmToFavorites,u=e.markAsWatched,l=e.favoritesList,s=e.fetchFilms,f=e.watchedList,d=e.deleteFromFavorites,m=e.deleteFromWatched,p=e.setActivePage;return a&&console.log(a),c.a.createElement("section",null," ",t&&c.a.createElement(O.a,null)," ",n.length>0&&n.map(function(e){return c.a.createElement(g,{key:e.id,film:e,addFilmToFavorites:i,markAsWatched:u,favoritesList:l,watchedList:f,deleteFromFavorites:d,deleteFromWatched:m})})," ",n.length>0&&c.a.createElement(y,{setActivePage:p,pages:r,query:o,fetchFilms:s})," ")},_=n(82),A=n.n(_),j=function(e){var t=e.fetchFilms,n=e.isLoading,a=e.films,r=e.error,o=e.query,i=e.pages,u=e.addFilmToFavorites,l=e.markAsWatched,s=e.favoritesList,f=e.watchedList,d=e.deleteFromFavorites,m=e.deleteFromWatched,p=e.setActivePage,b=e.setFilmQuery;return c.a.createElement("div",{className:A.a.wrapper},c.a.createElement(h,{fetchFilms:t,query:o,setFilmQuery:b,setActivePage:p})," ",c.a.createElement(w,{fetchFilms:t,isLoading:n,films:a,error:r,pages:i,query:o,addFilmToFavorites:u,markAsWatched:l,favoritesList:s,watchedList:f,deleteFromFavorites:d,deleteFromWatched:m,setActivePage:p})," ")},L=n(42),k=n(44);t.default=Object(a.b)(function(e){return{isLoading:e.isLoading,films:e.films,error:e.error,query:e.query,pages:e.pages,favoritesList:e.favoritesList,watchedList:e.watchedList}},function(e){return{fetchFilms:function(t,n){return e(Object(r.b)(t,n))},addFilmToFavorites:function(t){return e(Object(L.a)(t))},markAsWatched:function(t){return e(Object(L.d)(t))},deleteFromFavorites:function(t){return e(Object(L.b)(t))},deleteFromWatched:function(t){return e(Object(L.c)(t))},setActivePage:function(t){return e(Object(k.d)(t))},setFilmQuery:function(t){return e(Object(k.e)(t))}}})(j)}}]);
//# sourceMappingURL=home-page.72d08ce7.chunk.js.map