(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,c,a){},13:function(e,c,a){"use strict";a.r(c);var t=a(1),n=a(3),s=a.n(n),r=(a(9),a(10),a(4)),i=(a(11),[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}]),d=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],l=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],o=a(0),j=function(){var e=Object(t.useState)(null),c=Object(r.a)(e,2),a=c[0],n=c[1],s=function(e){n(e)},j=d.map((function(e){return function(e){var c=d.find((function(c){return c.id===e}));if(!c)return null;var t=i.find((function(e){return e.id===c.categoryId})),n=l.find((function(e){return e.id===t.ownerId}));return!a||n&&n.id===a?Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:c.id}),Object(o.jsx)("td",{"data-cy":"ProductName",children:c.name}),Object(o.jsx)("td",{"data-cy":"ProductCategory",children:t?"".concat(t.title," - ").concat(t.icon):"Category not found"}),Object(o.jsx)("td",{"data-cy":"ProductUser",className:"has-text-".concat(n?"link":"danger"),children:n?n.name:"User not found"})]},c.id):null}(e.id)}));return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)("nav",{className:"panel",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:"panel-block ".concat(a?"":"is-active"),onClick:function(){return s(null)},children:"All"}),l.map((function(e){return Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:"panel-block ".concat((c=e.id,a===c?"is-active":"")),onClick:function(){return s(e.id)},children:e.name},e.id);var c}))]})})}),Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)("tbody",{children:j})]})]})]})})};s.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b2d795d1.chunk.js.map