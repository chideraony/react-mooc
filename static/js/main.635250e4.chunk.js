(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(8),r=a.n(i);a(15),a(16);function l(){return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("a",{className:"navbar-item",href:"#gallery",children:"Gallery"}),Object(c.jsx)("a",{className:"navbar-item",href:"#flavours",children:"Flavours"}),Object(c.jsx)("a",{className:"navbar-item",href:"#shops",children:"Shops"})]})}var u=a(3),h=a(4),j=a(2),o=a(6),b=a(5),d=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(u.a)(this,a),(c=t.call(this,e)).state={value:"coconut"},c.handleChange=c.handleChange.bind(Object(j.a)(c)),c}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(c.jsxs)("div",{id:"flavours",className:"page-break pad1",children:[Object(c.jsx)("h2",{children:"Ice Cream Flavours"}),Object(c.jsxs)("label",{children:["Pick your favorite ice cream flavour:",Object(c.jsxs)("select",{value:this.state.value,onChange:this.handleChange,children:[Object(c.jsx)("option",{value:"grapefruit",children:"Grapefruit"}),Object(c.jsx)("option",{value:"lime",children:"Lime"}),Object(c.jsx)("option",{value:"coconut",children:"Coconut"}),Object(c.jsx)("option",{value:"mango",children:"Mango"})]})]}),Object(c.jsxs)("p",{children:["Your flavour of choice is: ",Object(c.jsx)("strong",{children:this.state.value})]})]})}}]),a}(s.a.Component),m=a(9),p=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(u.a)(this,a),(c=t.call(this,e)).state={list:["Janetta's Gelataria","Dairy Queen","Luca's Gelato"],item:""},c.handleChange=c.handleChange.bind(Object(j.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(j.a)(c)),c}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({item:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState((function(e){return{list:[].concat(Object(m.a)(e.list),[t.state.item])}})),e.preventDefault()}},{key:"render",value:function(){return Object(c.jsxs)("div",{id:"shops",className:"page-break pad1",children:[Object(c.jsx)("h2",{children:"Ice Cream Shops"}),Object(c.jsx)("p",{children:"Use this as a place to note down your favourite places to get ice cream:"}),Object(c.jsx)("ul",{children:this.state.list.map((function(e){return Object(c.jsx)("li",{children:e},e)}))}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{children:"Add a place:"}),Object(c.jsx)("input",{value:this.state.value,onChange:this.handleChange}),Object(c.jsx)("button",{type:"submit",children:"+ add"})]})]})}}]),a}(s.a.Component);function O(){return Object(c.jsxs)("div",{id:"gallery",className:"pad1",children:[Object(c.jsx)("h2",{children:"Ice Cream Gallery"}),Object(c.jsxs)("div",{className:"images",children:[Object(c.jsx)("img",{width:"30%",src:"https://www.cuisinart.co.uk/on/demandware.static/-/Sites-uk-cuisinart-Library/default/dw85481aea/images/recipes/Strawberry-Ice-Cream.jpg"}),Object(c.jsx)("img",{width:"30%",src:"https://www.thespruceeats.com/thmb/E69KpId_2UzDmLKqj_cqBTsyykw=/3135x3135/smart/filters:no_upscale()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg"}),Object(c.jsx)("img",{width:"30%",src:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216744.jpg?output-format=auto&output-quality=auto"})]})]})}var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Sarah's Ice Cream React Site"})}),Object(c.jsx)(O,{}),Object(c.jsx)(d,{}),Object(c.jsx)(p,{}),Object(c.jsx)(l,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.635250e4.chunk.js.map