(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),a=n(8),s=n.n(a),o=(n(15),n(5)),l=c.a.createContext(),d=n(25),r=n(4),u=(n(16),n(1)),j=function(e){var t=Object(i.useContext)(l),n=t.dispatch,c=t.setTodoTitle,a=t.setIsEdited,s=t.setTitleBeforeEdit;return Object(u.jsx)("div",{className:"todo__item",children:Object(u.jsxs)("div",{className:"item__wrap",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{id:e.id,className:"item__checkbox",type:"checkbox",checked:e.completed,onChange:function(){return n({type:"toggle",title:e.title})}}),Object(u.jsxs)("span",{className:e.completed||e.className?"item__completed":"",children:[e.point,". ",e.title]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"creating-date",children:e.date}),Object(u.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){c(e.title),a(!0),s(e.title)},children:"Edit"}),Object(u.jsxs)("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){n({type:"remove",title:e.title})},children:[Object(u.jsx)("i",{class:"bi bi-trash-fill"}),"Delete"]})]})]})})},b=function(e){return Object(u.jsx)("div",{className:"todo__list",children:Object(u.jsx)("div",{className:"list__container",children:e.todos.map((function(e,t){return Object(u.jsx)(j,Object(r.a)({point:t+1},e),e.id)}))})})},m=n(10),p=function(e,t){var n=(new Date).toLocaleDateString("ru-RU",{hour:"numeric",minute:"numeric",second:"numeric"});switch(t.type){case"add-edit":return t.edited?e.map((function(e){return e.title===t.titleBefore&&(e.title=t.title,e.date="Edited ".concat(n)),e})):[].concat(Object(m.a)(e),[{id:e.length+1,title:t.title,completed:!1,date:n,deadLineTime:(new Date).getTime(),className:""}]);case"toggle":return e.map((function(e){return e.title===t.title?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}));case"remove":return e.filter((function(e){return e.title!==t.title}));default:return e}},f=(n(18),function(){var e=Object(i.useReducer)(p,JSON.parse(localStorage.getItem("todos"))||[]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),s=Object(o.a)(a,2),r=s[0],j=s[1],m=Object(i.useState)(!1),f=Object(o.a)(m,2),O=f[0],h=f[1],x=Object(i.useState)(""),g=Object(o.a)(x,2),v=g[0],N=g[1];Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(i.useEffect)((function(){var e=setInterval((function(){if(0!==n.length){var e=n.find((function(e){return(new Date).getTime()-e.deadLineTime>=5e3&&!e.completed&&!e.className}));if(e){var t=n.findIndex((function(t){return t.title===e.title}));n.splice(t,1,{id:e.id,title:e.title,className:"item__completed",date:e.date,deadLineTime:e.deadLineTime,completed:e.completed}),localStorage.setItem("todos",JSON.stringify(n))}}}),1e3);return function(){clearInterval(e)}}),[n]);return Object(u.jsx)(l.Provider,{value:{dispatch:c,setTodoTitle:j,setIsEdited:h,setTitleBeforeEdit:N},children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Todo App"}),Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("label",{className:"input-label",htmlFor:"input-task",children:"Next todo"}),Object(u.jsx)("input",{type:"text",name:"task",value:r,onChange:function(e){j(e.target.value)}})]}),Object(u.jsx)(d.a,{className:"input-button",color:"success",onClick:function(){r&&(c({type:"add-edit",title:r,edited:O,titleBefore:v}),j(""),h(!1))},children:O?"Edit task":"Add new task"}),Object(u.jsx)(b,{todos:n})]})})}),O=(n(21),n(22),function(){return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsx)(f,{})})}),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),h()}},[[23,1,2]]]);
//# sourceMappingURL=main.2cbfa440.chunk.js.map