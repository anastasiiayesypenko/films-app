(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{44:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s});var r=n(1),a=function(e){return{type:r.a.ADD_TO_FAVORITES,payload:{film:e}}},i=function(e){return{type:r.a.MARK_WATCHED,payload:{film:e}}},l=function(e){return{type:r.a.DElETE_FROM_FAVORITES,payload:{id:e}}},s=function(e){return{type:r.a.DELETE_FROM_WATCHED,payload:{id:e}}}},45:function(e,t,n){e.exports={title:"UserList_title__32P2A",ul:"UserList_ul__fnxzr",navlink:"UserList_navlink__3qfRQ",navlinkActive:"UserList_navlinkActive__To4k6",filmsUl:"UserList_filmsUl__1s87y",filmsSection:"UserList_filmsSection__PnMow",filmItem:"UserList_filmItem__1Tm6P",masonryGridFilm:"UserList_masonryGridFilm__18ss3",button:"UserList_button__2xvYF",deleteButton:"UserList_deleteButton__wVibC UserList_button__2xvYF",showMoreButton:"UserList_showMoreButton__1uBG_ UserList_button__2xvYF",link:"UserList_link__1E6kZ",img:"UserList_img__3DNbP",mainWrapper:"UserList_mainWrapper__KKRGe",filmItemWrapper:"UserList_filmItemWrapper__2M813"}},49:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(0),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:#fff;}\n"),o=a.a.createElement("g",null,a.a.createElement("g",{id:"Icon-Trash",transform:"translate(232.000000, 228.000000)"},a.a.createElement("polygon",{className:"st0",id:"Fill-6",points:"-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1    "}),a.a.createElement("polygon",{className:"st0",id:"Fill-7",points:"-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1    "}),a.a.createElement("polygon",{className:"st0",id:"Fill-8",points:"-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1    "}),a.a.createElement("polygon",{className:"st0",id:"Fill-9",points:"-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1    "}),a.a.createElement("path",{className:"st0",d:"M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6",id:"Fill-10"}),a.a.createElement("path",{className:"st0",d:"M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1",id:"Fill-11"}))),c=function(e){var t=e.svgRef,n=l(e,["svgRef"]);return a.a.createElement("svg",i({id:"Layer_1",style:{enableBackground:"new 0 0 64 64"},viewBox:"0 0 64 64",xmlSpace:"preserve",ref:t},n),s,o)},m=a.a.forwardRef(function(e,t){return a.a.createElement(c,i({svgRef:t},e))});n.p},91:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n(0),i=n.n(a),l=n(11),s=n(45),o=n.n(s),c=n(49),m=function(e){var t=e.film,n=e.deleteFromFavorites;return i.a.createElement("div",{className:o.a.mainWrapper},i.a.createElement("h3",null," ",t.title," ")," ",i.a.createElement("section",{className:o.a.filmItemWrapper},i.a.createElement("img",{className:o.a.img,src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):"https://www.viser.edu.rs/images/no_photo.jpeg",alt:"film poster"}))," ",i.a.createElement("button",{type:"button",title:"delete from list",onClick:function(){return n(t.id)},className:o.a.deleteButton},i.a.createElement(c.a,{className:o.a.busketSvg})," ")," ",i.a.createElement(l.b,{to:"/".concat(t.title,"/").concat(t.id),className:o.a.link},i.a.createElement("button",{type:"button",className:o.a.showMoreButton},"show more"," ")," ")," ")},u=function(e){var t=e.favoritesList,n=e.deleteFromFavorites;return i.a.createElement("section",{className:o.a.filmsSection},t.length>0?i.a.createElement("ul",{className:o.a.filmsUl},t.map(function(e){return i.a.createElement("li",{key:e.id,className:o.a.filmItem},i.a.createElement(m,{film:e,deleteFromFavorites:n}))})):i.a.createElement("div",null,"This folder is empty.Save one of your favorite film to start!"))},f=n(44);t.default=Object(r.b)(function(e){return{favoritesList:e.favoritesList}},function(e){return{deleteFromFavorites:function(t){return e(Object(f.b)(t))}}})(u)}}]);
//# sourceMappingURL=favorites-page.e25369e6.chunk.js.map