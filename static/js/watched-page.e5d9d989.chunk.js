(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{44:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"b",function(){return l}),n.d(e,"c",function(){return c});var i=n(1),a=function(t){return{type:i.a.ADD_TO_FAVORITES,payload:{film:t}}},r=function(t){return{type:i.a.MARK_WATCHED,payload:{film:t}}},l=function(t){return{type:i.a.DElETE_FROM_FAVORITES,payload:{id:t}}},c=function(t){return{type:i.a.DELETE_FROM_WATCHED,payload:{id:t}}}},45:function(t,e,n){t.exports={title:"UserList_title__32P2A",ul:"UserList_ul__fnxzr",navlink:"UserList_navlink__3qfRQ",navlinkActive:"UserList_navlinkActive__To4k6",filmsUl:"UserList_filmsUl__1s87y",filmsSection:"UserList_filmsSection__PnMow",filmItem:"UserList_filmItem__1Tm6P",masonryGridFilm:"UserList_masonryGridFilm__18ss3"}},49:function(t,e,n){t.exports={filmItemWrapper:"FilmListltem_filmItemWrapper__FjDzj",button:"FilmListltem_button__3PXUW",link:"FilmListltem_link__2YNuq",img:"FilmListltem_img__7aVnc"}},92:function(t,e,n){"use strict";n.r(e);var i=n(27),a=n(0),r=n.n(a),l=n(45),c=n.n(l),o=n(11),s=n(49),m=n.n(s),u=function(t){var e=t.film,n=t.deleteFromWatched;return r.a.createElement("div",null,r.a.createElement("h3",null," ",e.title," ")," ",r.a.createElement("img",{className:m.a.img,src:e.poster_path?"https://image.tmdb.org/t/p/w200/".concat(e.poster_path):"https://www.viser.edu.rs/images/no_photo.jpeg",alt:"film poster"}),r.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"Delete"," ")," ",r.a.createElement("button",{type:"button"},r.a.createElement(o.b,{to:"/".concat(e.title,"/").concat(e.id)}," Show more ")," ")," ")},_=function(t){var e=t.watchedList,n=t.deleteFromWatched;return r.a.createElement("section",{className:c.a.filmsSection}," ",e.length>0?r.a.createElement("ul",{className:c.a.filmsUl}," ",e.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(u,{film:t,deleteFromWatched:n})," ")})," "):r.a.createElement("div",null," ","This folder is empty.Save any film you have watched to start!"," ")," ")},f=n(44);e.default=Object(i.b)(function(t){return{watchedList:t.watchedList}},function(t){return{deleteFromWatched:function(e){return t(Object(f.c)(e))}}})(_)}}]);
//# sourceMappingURL=watched-page.e5d9d989.chunk.js.map