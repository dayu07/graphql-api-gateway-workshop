(function(t){function e(e){for(var a,s,o=e[0],l=e[1],u=e[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4989"),n("ab8b");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"collapse navbar-collapse"},[n("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[t._v("Music Store")]),n("ul",{staticClass:"navbar-nav"},[n("cart-nav",{attrs:{"cart-total":t.cartTotal}}),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t.currentUser?[t._v(" "+t._s(t.currentUser)+" ")]:t._e(),n("font-awesome-icon",{attrs:{icon:["fas","user-circle"],size:"lg"}})],2),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdown"}},[t.currentUser?n("a",{staticClass:"dropdown-item",attrs:{href:"/logout"}},[t._v("Logout")]):n("a",{staticClass:"dropdown-item",attrs:{href:"/login.html"}},[t._v("Login")])])])],1)],1)])]),n("router-view",{attrs:{currentUser:t.currentUser}})],1)},i=[],s=(n("13d5"),n("9a2e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[n("font-awesome-icon",{attrs:{icon:["fas","shopping-cart"],size:"lg"}}),t.cartTotal>0?n("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.cartTotal))]):t._e()],1)],1)},l=[],u=(n("a9e3"),{name:"cartNav",props:{cartTotal:Number}}),c=u,m=n("2877"),d=Object(m["a"])(c,o,l,!1,null,null,null),v=d.exports,f=n("74ca"),b=n("478e"),h=n("2bf2"),p={query:{fetchPolicy:"no-cache",errorPolicy:"all"}},g=Object(b["a"])({uri:"/graphql",credentials:"same-origin"}),_=new f["a"]({cache:new h["a"],link:g,defaultOptions:p}),w=_,y=n("9530"),C=n.n(y);function $(){var t=Object(s["a"])(["\n  {\n    currentUser\n  }\n"]);return $=function(){return t},t}function O(){var t=Object(s["a"])(["\n  {\n    cart {\n      items {\n        quantity\n      }\n    }\n  }\n"]);return O=function(){return t},t}var j=C()(O()),x=C()($()),k={name:"App",components:{CartNav:v},data:function(){return{currentUser:null,cartTotal:0}},created:function(){this.fetchCurrentUser(),this.$on("update-cart",this.updateCart)},methods:{fetchCurrentUser:function(){var t=this;w.query({query:x}).then((function(e){t.currentUser=e.data.currentUser,t.currentUser&&t.fetchCartTotal()})).catch((function(t){console.error(t)}))},fetchCartTotal:function(){var t=this;w.query({query:j}).then((function(e){var n=e.data.cart.items;t.cartTotal=n.reduce((function(t,e){return t+e.quantity}),0)})).catch((function(t){console.error(t)}))},updateCart:function(t){this.cartTotal=t}}},q=k,T=(n("034f"),Object(m["a"])(q,r,i,!1,null,null,null)),I=T.exports,S=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("All genres")]),t.loading?n("div",[t._v(" Loading... ")]):t._e(),t.error?n("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.genres?n("div",{staticClass:"row"},t._l(t.genres,(function(t,e){return n("GenreCard",{key:t.id,attrs:{genre:t,index:e}})})),1):t._e()])},D=[],E=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("img",{staticClass:"card-img-top",attrs:{src:"/images/genres/"+t.genre.image,alt:t.genre.name}}),n("div",{staticClass:"card-body bg-light"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.genre.name))]),n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/genre/"+t.genre.id}},[t._v("Explore")])],1)])}),F=[],R={name:"GenreCard",props:{genre:Object}},P=R,A=Object(m["a"])(P,E,F,!1,null,null,null),L=A.exports;function Q(){var t=Object(s["a"])(["\n  {\n    genres {\n      id\n      name\n      image\n    }\n  }\n"]);return Q=function(){return t},t}var N=C()(Q()),M={name:"home",data:function(){return{loading:!1,genres:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.genres=null,this.loading=!0,w.query({query:N}).then((function(e){t.genres=e.data.genres})).catch((function(e){console.error(e),t.error="Failed to load data..."})).finally((function(){t.loading=!1}))}},components:{GenreCard:L}},G=M,z=Object(m["a"])(G,U,D,!1,null,null,null),J=z.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("Albums")]),t.loading?n("div",[t._v(" Loading... ")]):t._e(),t.error?n("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.albums?n("div",{staticClass:"row"},t._l(t.albums,(function(t,e){return n("AlbumCard",{key:t.id,attrs:{album:t,index:e}})})),1):t._e()])},H=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("img",{staticClass:"card-img-top",attrs:{src:"/images/albums/"+t.album.image,alt:t.album.name}}),n("div",{staticClass:"card-body bg-light"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.album.name))]),n("p",{staticClass:"card-text text-right"},[n("Stars",{attrs:{rating:t.album.rating}})],1),n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/album/"+t.album.id}},[t._v("Explore")])],1)])},V=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(" "+t._s(t.rating)+" / 5 "),t.rating<1?n("span",[n("font-awesome-icon",{attrs:{icon:["far","star"]}})],1):n("span",t._l(this.rating,(function(t){return n("font-awesome-icon",{key:t,staticClass:"text-warning",attrs:{icon:["fas","star"]}})})),1)])},X=[],Y={name:"Stars",props:{rating:Number}},Z=Y,tt=Object(m["a"])(Z,W,X,!1,null,null,null),et=tt.exports,nt={name:"AlbumCard",components:{Stars:et},props:{album:Object}},at=nt,rt=Object(m["a"])(at,K,V,!1,null,null,null),it=rt.exports;function st(){var t=Object(s["a"])(["\n  query ($genre: Int!) {\n    albums(genre: $genre) {\n      id\n      name\n      artist\n      image\n      rating\n    }\n  }\n"]);return st=function(){return t},t}var ot=C()(st()),lt={name:"genre",data:function(){return{loading:!1,albums:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.albums=null,this.loading=!0,w.query({query:ot,variables:{genre:this.$route.params.id}}).then((function(e){t.albums=e.data.albums})).catch((function(e){console.error(e),t.error="Failed to load data..."})).finally((function(){t.loading=!1}))}},components:{AlbumCard:it}},ut=lt,ct=Object(m["a"])(ut,B,H,!1,null,null,null),mt=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loading?n("div",[t._v(" Loading... ")]):t._e(),t.error?n("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.album?[n("div",{staticClass:"media"},[n("img",{staticClass:"align-self-start mr-5",attrs:{src:"/images/albums/"+t.album.image,alt:t.album.name}}),n("div",{staticClass:"media-body"},[n("h2",[t._v(t._s(t.album.name))]),n("p",{staticClass:"text-secondary"},[t._v(t._s(t.album.artist)+", "+t._s(t.album.genre.name))]),n("p",[n("Stars",{attrs:{rating:t.rating}}),t.showReviews()?[t._v(" - "),n("a",{attrs:{href:"#reviews"}},[t._v("Reviews")])]:t._e()],2),t.currentUser?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addToCart()}}},[t._v("Add to cart")]):t._e()])]),n("TrackList",{attrs:{album:t.album}})]:t._e(),t.showReviews()?[n("hr"),n("h3",[t._v("Reviews")]),n("div",{attrs:{id:"reviews"}},[t.review.errors.length?[n("p",[t._v("Please correct the following error(s):")]),n("ul",t._l(t.review.errors,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0)]:t._e(),n("form",{staticClass:"form-inline",attrs:{id:"reviewForm"},on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[n("label",{staticClass:"mb-2 mr-sm-2 sr-only",attrs:{for:"reviewComment"}},[t._v("Comment")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.review.comment,expression:"review.comment"}],staticClass:"form-control mb-2 mr-sm-2",attrs:{id:"reviewComment",placeholder:"Enter comment"},domProps:{value:t.review.comment},on:{input:function(e){e.target.composing||t.$set(t.review,"comment",e.target.value)}}}),n("label",{staticClass:"mb-2 mr-sm-2",attrs:{for:"reviewRating"}},[t._v("Rating")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.review.rating,expression:"review.rating"}],staticClass:"custom-select mb-2 mr-sm-2",attrs:{id:"reviewRating"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.review,"rating",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"1"}},[t._v("1")]),n("option",{attrs:{value:"2"}},[t._v("2")]),n("option",{attrs:{value:"3"}},[t._v("3")]),n("option",{attrs:{value:"4"}},[t._v("4")]),n("option",{attrs:{value:"5"}},[t._v("5")])]),n("button",{staticClass:"btn btn-primary mb-2 mr-sm-2",attrs:{type:"submit",form:"reviewForm"}},[t._v("Submit")])]),t.reviews?n("div",{staticClass:"row"},t._l(t.reviews,(function(t,e){return n("ReviewCard",{key:e,attrs:{review:t}})})),1):t._e()],2)]:t._e()],2)},vt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",[t._v("Tracks")]),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.album.tracks,(function(e){return n("tr",{key:e.number},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.number))]),n("td",[t._v(t._s(e.name))])])})),0)])])},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Name")])])])}],ht={name:"TrackList",props:{album:Object}},pt=ht,gt=Object(m["a"])(pt,ft,bt,!1,null,null,null),_t=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("div",{staticClass:"card-body bg-light"},[n("p",{staticClass:"card-text"},[n("Stars",{attrs:{rating:t.review.rating}}),t._v(" "),n("span",{staticClass:"text-secondary"},[t._v(t._s(t.review.name))])],1),n("p",{staticClass:"card-text"},[t._v(t._s(t.review.comment))])])])},yt=[],Ct={name:"ReviewCard",props:{review:Object},components:{Stars:et}},$t=Ct,Ot=Object(m["a"])($t,wt,yt,!1,null,null,null),jt=Ot.exports;function xt(){var t=Object(s["a"])(["\n  mutation ($albumId: Int!) {\n    addToCart(albumId: $albumId) {\n      items {\n        quantity\n      }\n    }\n  }\n"]);return xt=function(){return t},t}function kt(){var t=Object(s["a"])(["\n  mutation ($albumId: Int!, $review: ReviewInput!) {\n    addReview(albumId: $albumId, review: $review) {\n      rating\n      reviews {\n        name\n        rating\n        comment\n      }\n    }\n  }\n"]);return kt=function(){return t},t}function qt(){var t=Object(s["a"])(["\n  query ($id: Int!) {\n    album(id: $id) {\n      id\n      name\n      genre {\n        name\n      }\n      artist\n      image\n      rating\n      tracks {\n        number\n        name\n      }\n      reviews {\n        name\n        rating\n        comment\n      }\n    }\n  }\n"]);return qt=function(){return t},t}var Tt=C()(qt()),It=C()(kt()),St=C()(xt()),Ut={name:"album",data:function(){return{loading:!1,album:null,rating:null,reviews:null,review:{errors:[],comment:null,rating:null},error:null}},props:{currentUser:String},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{showReviews:function(){return this.reviews||this.currentUser},fetchData:function(){var t=this;this.error=this.album=this.rating=this.reviews=null,this.loading=!0,w.query({query:Tt,variables:{id:this.$route.params.id}}).then((function(e){t.album=e.data.album,t.rating=t.album.rating,t.reviews=t.album.reviews&&t.album.reviews.length>0?t.album.reviews:null})).catch((function(e){console.error(e),t.error="Failed to load data..."})).finally((function(){t.loading=!1}))},addToCart:function(){var t=this;w.mutate({mutation:St,variables:{albumId:this.$route.params.id}}).then((function(e){var n=e.data.addToCart.items,a=n.reduce((function(t,e){return t+e.quantity}),0);window.alert("Done!"),t.$parent.$emit("update-cart",a)})).catch((function(t){console.error(t)}))},checkForm:function(){this.review.errors=[],this.review.rating?this.sendForm():this.review.rating||this.review.errors.push("Rating required.")},sendForm:function(){var t=this;w.mutate({mutation:It,variables:{albumId:this.$route.params.id,review:{rating:this.review.rating,comment:this.review.comment}}}).then((function(e){var n=e.data.addReview;t.rating=n.rating,t.reviews=n.reviews})).catch((function(t){console.error(t)})),this.review.rating=this.review.comment=null}},components:{TrackList:_t,Stars:et,ReviewCard:jt}},Dt=Ut,Et=Object(m["a"])(Dt,dt,vt,!1,null,null,null),Ft=Et.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loading?n("div",[t._v(" Loading... ")]):t._e(),t.error?n("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.items&&t.items.length>0?n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.items,(function(e){return n("tr",{key:e.album.id},[n("td",[n("div",{staticClass:"media"},[n("router-link",{attrs:{to:"/album/"+e.album.id}},[n("img",{staticClass:"align-self-start mr-5 cart-album",attrs:{src:"/images/albums/"+e.album.image,alt:e.album.name}})]),n("div",{staticClass:"media-body"},[n("h5",{staticClass:"mt-0"},[n("router-link",{attrs:{to:"/album/"+e.album.id}},[t._v(t._s(e.album.name))])],1),n("p",{staticClass:"text-secondary"},[t._v(t._s(e.album.artist)+", "+t._s(e.album.genre.name))])])],1)]),n("td",[t._v(t._s(e.quantity))]),n("td",[n("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"button"},on:{click:function(n){return t.addOne(e.album.id)}}},[t._v("Add one")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(n){return t.removeOne(e.album.id)}}},[t._v("Remove one")])])])})),0)]):t.currentUser?[t._v(" Cart is empty ")]:[t._v(" Please log in ")]],2)},Pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Album")]),n("th",{attrs:{scope:"col"}},[t._v("Quantity")]),n("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}];function At(){var t=Object(s["a"])(["\n  mutation ($albumId: Int!) {\n    removeFromCart(albumId: $albumId) {\n      items {\n        album {\n          id\n          name\n          artist\n          genre {\n            name\n          }\n          image\n        }\n        quantity\n      }\n    }\n  }\n"]);return At=function(){return t},t}function Lt(){var t=Object(s["a"])(["\n  mutation ($albumId: Int!) {\n    addToCart(albumId: $albumId) {\n      items {\n        album {\n          id\n          name\n          artist\n          genre {\n            name\n          }\n          image\n        }\n        quantity\n      }\n    }\n  }\n"]);return Lt=function(){return t},t}function Qt(){var t=Object(s["a"])(["\n  {\n    cart {\n      items {\n        album {\n          id\n          name\n          artist\n          genre {\n            name\n          }\n          image\n        }\n        quantity\n      }\n    }\n  }\n"]);return Qt=function(){return t},t}var Nt=C()(Qt()),Mt=C()(Lt()),Gt=C()(At()),zt={name:"cart",data:function(){return{loading:!1,items:null,error:null}},props:{currentUser:String},created:function(){this.fetchData()},watch:{$route:"fetchData",currentUser:"fetchData"},methods:{fetchData:function(){var t=this;this.currentUser&&(this.beforeQuery(),w.query({query:Nt}).then((function(e){t.items=e.data.cart.items})).catch(this.handleFailure).finally(this.afterQuery))},addOne:function(t){var e=this;this.beforeQuery(),w.mutate({mutation:Mt,variables:{albumId:t}}).then((function(t){e.items=t.data.addToCart.items,e.updateCartTotal()})).catch(this.handleFailure).finally(this.afterQuery)},removeOne:function(t){var e=this;this.beforeQuery(),w.mutate({mutation:Gt,variables:{albumId:t}}).then((function(t){e.items=t.data.removeFromCart.items,e.updateCartTotal()})).catch(this.handleFailure).finally(this.afterQuery)},updateCartTotal:function(){var t=this.items.reduce((function(t,e){return t+e.quantity}),0);this.$parent.$emit("update-cart",t)},beforeQuery:function(){this.error=this.items=null,this.loading=!0},handleFailure:function(t){console.error(t),this.error="Failed to load data..."},afterQuery:function(){this.loading=!1}}},Jt=zt,Bt=(n("b66e"),Object(m["a"])(Jt,Rt,Pt,!1,null,"b2f30ea6",null)),Ht=Bt.exports;a["a"].use(S["a"]);var Kt=[{path:"/",name:"home",component:J},{path:"/genre/:id",name:"genre",component:mt},{path:"/album/:id",name:"album",component:Ft},{path:"/cart",name:"cart",component:Ht}],Vt=new S["a"]({mode:"history",routes:Kt}),Wt=Vt,Xt=n("ecee"),Yt=n("b702"),Zt=n("c074"),te=n("ad3d");Xt["c"].add(Zt["c"],Yt["a"],Zt["b"],Zt["a"]),a["a"].component("font-awesome-icon",te["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Wt,render:function(t){return t(I)}}).$mount("#app")},"85ec":function(t,e,n){},b66e:function(t,e,n){"use strict";var a=n("f267"),r=n.n(a);r.a},f267:function(t,e,n){}});
//# sourceMappingURL=app.f5bb45ac.js.map