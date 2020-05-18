(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1404:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4989"),n("ab8b");var a=n("2b0e"),r=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar fixed-top navbar-expand-sm navbar-dark bg-secondary"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navBarToggler"}},[n("a",{staticClass:"navbar-brand",attrs:{href:"#/Home"}},[t._v("蔵書管理アプリケーション")]),n("ul",{staticClass:"navbar-nav"},[n("li",[n("a",{staticClass:"nav-link"},[n("router-link",{staticClass:"text-white",attrs:{id:"HomeNav",to:"/Home"}},[t._v("ホーム")])],1)]),n("li",[n("a",{staticClass:"nav-link"},[n("router-link",{staticClass:"text-white",attrs:{id:"BooklistNav",to:"/Booklist"}},[t._v("書籍リスト")])],1)])])])])]),n("div",{staticClass:"container",staticStyle:{"margin-top":"80px !important"},attrs:{role:"main"}},[n("router-view")],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navBarToggler","aria-controls":"navBarToggler","aria-expanded":"false","aria-label":"Azure Java WebApplication Sample"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i=(n("034f"),n("2877")),l={},c=Object(i["a"])(l,o,s,!1,null,null,null),u=c.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"transparent !important"}},[n("h1",[t._v("蔵書管理アプリケーション")]),n("p",[t._v("This is a demo application for Azure App Service using Java and Vue.js.")])])}],b={name:"Home"},m=b,f=Object(i["a"])(m,p,d,!1,null,"6fe3403b",null),v=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"transparent !important"}},[n("h1",[t._v("書籍リスト")]),n("div",{staticClass:"panel"},[n("div",{staticClass:"input-group flex-column",staticStyle:{"margin-bottom":"20px !important"}},[n("form",[n("div",{staticClass:"form-group form-inline float-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.targettitle,expression:"targettitle"}],staticClass:"form-control",attrs:{id:"titleSearch",placeholder:"タイトルで検索"},domProps:{value:t.targettitle},on:{input:function(e){e.target.composing||(t.targettitle=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.searchByTitle(t.targettitle)}}},[t._v("検索")])])])]),n("div",{staticClass:"input-group flex-column",staticStyle:{"margin-bottom":"20px !important"}},[n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-primary",on:{click:t.addNewItem}},[t._v("新規追加")]),n("button",{staticClass:"btn btn-primary float-right",on:{click:t.refreshItems}},[t._v("再読込み")])])]),n("table",{staticClass:"table table-bordered",attrs:{id:"booklist-table"}},[t._m(0),n("tbody",t._l(this.booklist,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"title"},[t._v(t._s(e.title))]),n("td",{staticClass:"author"},[t._v(t._s(e.author))]),n("td",{staticClass:"publisher"},[t._v(t._s(e.publisher))]),n("td",{staticClass:"button"},[n("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:function(n){return t.editItem(e.id)}}},[t._v("詳細編集")]),n("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(n){return t.deleteItem(e.id)}}},[t._v("削除")])])])})),0)])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("タイトル")]),n("th",{attrs:{scope:"col"}},[t._v("著者")]),n("th",{attrs:{scope:"col"}},[t._v("出版社")]),n("th",{attrs:{scope:"col"}})])])}],k=(n("96cf"),n("1da1")),y=n("bc3a"),_=n.n(y),x="https://YOUR_APPNAME.azurewebsites.net/api/",w=new a["a"]({methods:{getItems:function(){return _.a.get(x+"booklist").then((function(t){return t.data}))},getItem:function(t){return _.a.get(x+"booklist/search/"+t).then((function(t){return t.data}))},getByTitle:function(t){return _.a.get(x+"booklist/titlesearch/"+t).then((function(t){return t.data}))},addItem:function(t){return _.a.post(x+"booklist/add",t).then((function(t){return t.data}))},saveItem:function(t){return _.a.post(x+"booklist/update",t).then((function(t){return t.data}))},deleteItem:function(t){return _.a.get(x+"booklist/delete/"+t).then((function(t){return t.data}))}}}),C={name:"Booklist",data:function(){return{booklist:null,targettitle:""}},created:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.getItems();case 2:e=t.sent,this.booklist=e,console.log("Initialized."),console.log(JSON.stringify(this.booklist));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{refreshItems:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.getItems();case 2:n=e.sent,t.booklist=n,t.targettitle="",console.log("Refreshed."),console.log(JSON.stringify(t.booklist));case 7:case"end":return e.stop()}}),e)})))()},addNewItem:function(){this.$router.push({name:"BookDatail",params:{id:null}})},editItem:function(t){this.$router.push({name:"BookDatail",params:{id:t}})},searchByTitle:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=8;break}return n.next=3,w.getByTitle(t);case 3:a=n.sent,e.booklist=a,console.log(a),n.next=9;break;case 8:e.refreshItems();case 9:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,w.deleteItem(t);case 2:a=n.sent,console.log(a),e.refreshItems();case 5:case"end":return n.stop()}}),n)})))()}}},I=C,O=(n("9d31"),Object(i["a"])(I,g,h,!1,null,"277307c5",null)),j=O.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"transparent !important"}},[n("h1",[t._v("詳細編集")]),n("div",{staticClass:"panel"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"titleInput"}},[t._v("タイトル")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.book.title,expression:"book.title"}],staticClass:"form-control",attrs:{id:"titleInput"},domProps:{value:t.book.title},on:{input:function(e){e.target.composing||t.$set(t.book,"title",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"categoryInput"}},[t._v("カテゴリー")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.book.category,expression:"book.category"}],staticClass:"form-control",attrs:{id:"categoryInput"},domProps:{value:t.book.category},on:{input:function(e){e.target.composing||t.$set(t.book,"category",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"authorInput"}},[t._v("著者")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.book.author,expression:"book.author"}],staticClass:"form-control",attrs:{id:"authorInput"},domProps:{value:t.book.author},on:{input:function(e){e.target.composing||t.$set(t.book,"author",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"publisherInput"}},[t._v("出版社")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.book.publisher,expression:"book.publisher"}],staticClass:"form-control",attrs:{id:"publisherInput"},domProps:{value:t.book.publisher},on:{input:function(e){e.target.composing||t.$set(t.book,"publisher",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"publicationDateInput"}},[t._v("発行日")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.book.publicationDate,expression:"book.publicationDate"}],staticClass:"form-control",attrs:{type:"date",id:"publicationDateInput"},domProps:{value:t.book.publicationDate},on:{input:function(e){e.target.composing||t.$set(t.book,"publicationDate",e.target.value)}}})]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.saveItem()}}},[t._v("登録")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.cancelEdit()}}},[t._v("キャンセル")])])])])},$=[],S={name:"BookDetail",data:function(){return{book:{id:null,title:"",category:"",author:"",publisher:"",publicationDate:""}}},created:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.id,null==e){t.next=6;break}return t.next=4,w.getItem(e);case 4:n=t.sent,this.book=n;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{cancelEdit:function(){this.$router.push({name:"Booklist"})},saveItem:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==t.book.id){e.next=8;break}return console.log(t.book),e.next=4,w.saveItem(t.book);case 4:n=e.sent,console.log(n),e.next=13;break;case 8:return console.log(t.book),e.next=11,w.addItem(t.book);case 11:a=e.sent,console.log(a);case 13:t.$router.push({name:"Booklist"});case 14:case"end":return e.stop()}}),e)})))()}}},P=S,R=(n("dd91"),Object(i["a"])(P,B,$,!1,null,"196e1b91",null)),D=R.exports,N={routes:[{name:"Home",path:"/Home",component:v},{name:"Booklist",path:"/Booklist",component:j},{name:"BookDatail",path:"/BookDetail/:id",component:D}]};a["a"].config.productionTip=!1,a["a"].use(r["a"]);var T=new r["a"](N);new a["a"]({render:function(t){return t(u)},router:T}).$mount("#app")},"85ec":function(t,e,n){},"9d31":function(t,e,n){"use strict";var a=n("1404"),r=n.n(a);r.a},d272:function(t,e,n){},dd91:function(t,e,n){"use strict";var a=n("d272"),r=n.n(a);r.a}});
//# sourceMappingURL=app.253d2e09.js.map