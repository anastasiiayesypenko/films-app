(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{15:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",{className:"loader"}," Loading... ")}},28:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),c=n.n(l),o=n(23),i=n(10),u=n(9),d=function(){return r.a.createElement("header",null,r.a.createElement("div",null," ",r.a.createElement("h1",null," LOGO ")," ")," ",r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(i.b,{to:"/"}," Home ")," ",r.a.createElement(i.b,{to:"/list"}," My list ")," ")," ")," ")},s=n(17),E=n.n(s),m=n(15),f=[{exact:!0,path:"/",component:E()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,68))},loading:m.a})},{exact:!1,path:"/list",component:E()({loader:function(){return n.e(5).then(n.bind(null,70))},loading:m.a})},{exact:!1,path:"/:title/:id",component:E()({loader:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,69))},loading:m.a})}],p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(u.d,null,f.map(function(e){return r.a.createElement(u.b,Object.assign({key:e.path},e))}),r.a.createElement(u.a,{to:"/"})))},h=n(8),_=n(27),R=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return"function"===typeof a?a(t,n):e(a)}}},S=n(4),v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case S.a.FILM_LOADING:return!0;case S.a.FILM_SEARCH_ERROR:case S.a.FILM_SEARCH_SUCCESS:return!1;default:return e}},A=[],O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S.a.FILM_SEARCH_SUCCESS:return a.films;default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S.a.FILM_SEARCH_ERROR:return a.error;default:return e}},L=n(16),b=[],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S.a.ADD_TO_FAVORITES:return[a.film].concat(Object(L.a)(e));default:return e}},I=[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S.a.MARK_WATCHED:return[a.film].concat(Object(L.a)(e));default:return e}},y=Object(h.combineReducers)({isLoading:v,films:O,error:C,favoritesList:g,watchedList:M}),F=Object(_.composeWithDevTools)({}),w=Object(h.createStore)(y,F(Object(h.applyMiddleware)(R)));c.a.render(r.a.createElement(o.a,{store:w},r.a.createElement(i.a,{basename:"/"},r.a.createElement(u.b,{component:p}))),document.getElementById("root"))},4:function(e,t,n){"use strict";t.a={FILM_LOADING:"FILM_LOADING",FILM_SEARCH_SUCCESS:"FILM_SEARCH_SUCCESS",FILM_SEARCH_ERROR:"FILM_SEARCH_ERROR",ADD_TO_FAVORITES:"ADD_TO_FAVORITES",MARK_WATCHED:"MARK_WATCHED"}}},[[28,4,6]]]);
//# sourceMappingURL=main.6cc3e642.chunk.js.map