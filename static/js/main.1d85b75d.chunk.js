(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t,a){"use strict";t.a={FILM_LOADING:"FILM_LOADING",FILM_SEARCH_SUCCESS:"FILM_SEARCH_SUCCESS",FILM_SEARCH_ERROR:"FILM_SEARCH_ERROR",ADD_TO_FAVORITES:"ADD_TO_FAVORITES",MARK_WATCHED:"MARK_WATCHED",DElETE_FROM_FAVORITES:"DElETE_FROM_FAVORITES",DELETE_FROM_WATCHED:"DELETE_FROM_WATCHED",SET_PAGES:"SET_PAGES",SET_ACTIVE_PAGE:"SET_ACTIVE_PAGE",SET_FILM_QUERY:"SET_FILM_QUERY"}},13:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),i=a.n(l);t.a=function(){return r.a.createElement("div",{className:i.a.spinnerWrapper},r.a.createElement("div",{className:i.a.ldsSpinner},r.a.createElement("div",null," ")," ",r.a.createElement("div",null," ")," ",r.a.createElement("div",null," ")," ",r.a.createElement("div",null," ")," ",r.a.createElement("div",null," "),r.a.createElement("div",null," ")," ",r.a.createElement("div",null," "),r.a.createElement("div",null," ")," ",r.a.createElement("div",null," "),r.a.createElement("div",null," ")," ",r.a.createElement("div",null," "),r.a.createElement("div",null," ")))}},24:function(e,t,a){e.exports={spinnerWrapper:"Loader_spinnerWrapper__2Epl9",ldsSpinner:"Loader_ldsSpinner__txDjB"}},25:function(e,t,a){e.exports={app:"App_app__wVT2q",main:"App_main__2XDul"}},28:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"c",function(){return l}),a.d(t,"e",function(){return i}),a.d(t,"f",function(){return c}),a.d(t,"d",function(){return o}),a.d(t,"a",function(){return u});var n=a(1),r=function(){return{type:n.a.FILM_LOADING}},l=function(e){return{type:n.a.FILM_SEARCH_SUCCESS,payload:{films:e}}},i=function(e){return{type:n.a.SET_FILM_QUERY,payload:{query:e}}},c=function(e){return{type:n.a.SET_PAGES,payload:{totalPages:e}}},o=function(e){return{type:n.a.SET_ACTIVE_PAGE,payload:{activePage:e}}},u=function(e){return{type:n.a.FILM_SEARCH_ERROR,payload:{error:e}}}},33:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),i=a.n(l),c=a(27),o=a(11),u=a(10),s=a(8),E=a.n(s),d=function(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h1",{className:E.a.logo}," Movie finder "),r.a.createElement("p",{className:E.a.sublogo}," Makes it simple to search for films ")),r.a.createElement("nav",null,r.a.createElement("ul",{className:E.a.ul},r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/",className:E.a.navlink,activeClassName:E.a.navlinkActive},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/list",className:E.a.navlink,activeClassName:E.a.navlinkActive},"My list")))),r.a.createElement(u.a,{from:"/list",to:"/users/profile"}),r.a.createElement("p",null,r.a.createElement("a",{className:E.a.iconLink,href:"https://icons8.com/icon/83218/search"},"Search icon by Icons8")))},_=a(14),p=a.n(_),m=a(13),f=p()({loader:function(){return Promise.all([a.e(0),a.e(9),a.e(3)]).then(a.bind(null,96))},loading:m.a}),v=p()({loader:function(){return a.e(6).then(a.bind(null,95))},loading:m.a}),S=[{exact:!0,path:"/",component:f},{exact:!0,path:"/list",render:function(){return r.a.createElement(u.a,{to:"/list/favorites"})}},{exact:!1,path:"/:title/:id",component:p()({loader:function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,99))},loading:m.a})},{exact:!1,path:"/list/",component:v},{exact:!1,path:"/list/watched",component:p()({loader:function(){return a.e(7).then(a.bind(null,98))},loading:m.a})},{exact:!1,path:"/list/favorites",component:p()({loader:function(){return a.e(1).then(a.bind(null,97))},loading:m.a})}],A=a(25),R=a.n(A),h=function(){return r.a.createElement("div",{className:R.a.app},r.a.createElement(d,null),r.a.createElement("main",{className:R.a.main},S.map(function(e){return r.a.createElement(u.b,Object.assign({key:e.path},e))}),r.a.createElement(u.a,{to:"/"})))},g=a(9),T=a(32),O=function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){return"function"===typeof n?n(t,a):e(n)}}},I=a(1),F=function(e){return function(t){return function(a){t(a);var n=e.getState().favoritesList,r=e.getState().watchedList;switch(a.type){case I.a.ADD_TO_FAVORITES:case I.a.DElETE_FROM_FAVORITES:return localStorage.setItem("favoriteFilms",JSON.stringify(n));case I.a.MARK_WATCHED:case I.a.DELETE_FROM_WATCHED:return localStorage.setItem("watchedFilms",JSON.stringify(r))}}}},y=a(28),L=function(e){return function(t){return function(a){a.type===I.a.SET_FILM_QUERY?(e.dispatch(Object(y.d)(1)),t(a)):t(a)}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case I.a.FILM_LOADING:return!0;case I.a.FILM_SEARCH_ERROR:case I.a.FILM_SEARCH_SUCCESS:return!1;default:return e}},C=[],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case I.a.FILM_SEARCH_SUCCESS:return n.films;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case I.a.FILM_SEARCH_ERROR:return n.error;default:return e}},H=a(18),w=JSON.parse(localStorage.getItem("favoriteFilms"))||[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case I.a.ADD_TO_FAVORITES:return[n.film].concat(Object(H.a)(e));case I.a.DElETE_FROM_FAVORITES:return e.filter(function(e){return e.id!==n.id});default:return e}},P=JSON.parse(localStorage.getItem("watchedFilms"))||[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case I.a.MARK_WATCHED:return[n.film].concat(Object(H.a)(e));case I.a.DELETE_FROM_WATCHED:return e.filter(function(e){return e.id!==n.id});default:return e}},V=a(26),W={activePage:1,totalPages:0},j=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0,n=a.type,r=a.payload;switch(e=r&&r.totalPages>500?500:r&&r.totalPages,n){case I.a.SET_PAGES:return Object(V.a)({},t,{totalPages:e});case I.a.SET_ACTIVE_PAGE:return Object(V.a)({},t,{activePage:r.activePage});default:return t}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case I.a.SET_FILM_QUERY:return n.query;default:return e}},G=Object(g.combineReducers)({isLoading:M,films:D,query:x,pages:j,error:b,favoritesList:N,watchedList:k}),U=Object(T.composeWithDevTools)({}),J=Object(g.createStore)(G,U(Object(g.applyMiddleware)(O,F,L)));i.a.render(r.a.createElement(c.a,{store:J},r.a.createElement(o.a,{basename:"/"},r.a.createElement(u.b,{component:h}))),document.getElementById("root"))},8:function(e,t,a){e.exports={logo:"Header_logo__3y4L2",sublogo:"Header_sublogo__cWjUu",iconLink:"Header_iconLink__134ww",ul:"Header_ul__2lXcu",navlink:"Header_navlink__1JdZm",navlinkActive:"Header_navlinkActive__F8M_t"}}},[[33,5,8]]]);
//# sourceMappingURL=main.1d85b75d.chunk.js.map