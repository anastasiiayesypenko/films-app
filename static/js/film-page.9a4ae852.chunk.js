(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{44:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i});var a=n(1),r=function(t){return{type:a.a.ADD_TO_FAVORITES,payload:{film:t}}},c=function(t){return{type:a.a.MARK_WATCHED,payload:{film:t}}},o=function(t){return{type:a.a.DElETE_FROM_FAVORITES,payload:{id:t}}},i=function(t){return{type:a.a.DELETE_FROM_WATCHED,payload:{id:t}}}},46:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(48),r=n.n(a),c=n(47),o="bcf1e9109b9838d979a3eda6f6128d7e";e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return function(n){t.match(/fuck|f/i)&&(t=""),n(Object(c.b)()),r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(e,"&include_adult=false")).then(function(t){n(Object(c.c)(t.data.results)),n(Object(c.f)(t.data.total_pages))}).catch(function(t){return n(Object(c.a)(t))})}}},47:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return c}),n.d(e,"e",function(){return o}),n.d(e,"f",function(){return i}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return d});var a=n(1),r=function(){return{type:a.a.FILM_LOADING}},c=function(t){return{type:a.a.FILM_SEARCH_SUCCESS,payload:{films:t}}},o=function(t){return{type:a.a.SET_FILM_QUERY,payload:{query:t}}},i=function(t){return{type:a.a.SET_PAGES,payload:{totalPages:t}}},u=function(t){return{type:a.a.SET_ACTIVE_PAGE,payload:{activePage:t}}},d=function(t){return{type:a.a.FILM_SEARCH_ERROR,payload:{error:t}}}},94:function(t,e,n){"use strict";n.r(e);var a=n(27),r=n(50),c=n(0),o=n.n(c),i=n(48),u=n.n(i),d=n(46),f=function(t){var e=t.films,n=t.match,a=t.addFilmToFavorites,i=t.markAsWatched,f=t.favoritesList,l=t.watchedList,s=t.deleteFromFavorites,p=t.deleteFromWatched,m=Object(c.useState)(""),b=Object(r.a)(m,2),v=b[0],E=b[1];Object(c.useEffect)(function(){return E(e&&e.find(function(t){return t.id===n.params.id}))},[n.params.id]),v||u.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(d.a,"&query=").concat(n.params.title,"&include_adult=false")).then(function(t){var e=t.data.results;E(e.find(function(t){return t.id===Number(n.params.id)}))}).catch(function(t){return console.log(t)});return o.a.createElement("section",null," ",v&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null," ",v.title," ")," ",o.a.createElement("img",{src:v.poster_path?"https://image.tmdb.org/t/p/w200/".concat(v.poster_path):"https://www.viser.edu.rs/images/no_photo.jpeg",alt:"film poster"}),o.a.createElement("p",null," ",v.vote_average||"No votes"," ")," ",o.a.createElement("p",null," ",v.overview||"No overview available"," ")," ",f.find(function(t){return Number(t.id)===Number(v.id)})?o.a.createElement("button",{type:"button",onClick:function(){s(v.id)}},"Delete from fav"," "):o.a.createElement("button",{type:"button",onClick:function(){a(v)}},"Add to favg"," ")," ",l.find(function(t){return Number(t.id)===Number(v.id)})?o.a.createElement("button",{type:"button",onClick:function(){p(v.id)}},"Delete from watched"," "):o.a.createElement("button",{type:"button",onClick:function(){i(v)}},"Add to watched"," ")," ")," ")},l=n(44);e.default=Object(a.b)(function(t){return{films:t.films,favoritesList:t.favoritesList,watchedList:t.watchedList}},function(t){return{fetchFilms:function(e,n){return t(Object(d.b)(e,n))},addFilmToFavorites:function(e){return t(Object(l.a)(e))},markAsWatched:function(e){return t(Object(l.d)(e))},deleteFromFavorites:function(e){return t(Object(l.b)(e))},deleteFromWatched:function(e){return t(Object(l.c)(e))}}})(f)}}]);
//# sourceMappingURL=film-page.9a4ae852.chunk.js.map