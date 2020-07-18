(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{134:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},242:function(e,t,n){e.exports=n(465)},424:function(e,t,n){},462:function(e,t,n){},465:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(24),c=n.n(o),r=n(14),s=n(87),i=n(34),d=n(231),u=n(232),m=n(233),h={list:[{done:!1,id:1593421396484,name:"Demo1"},{done:!1,id:1593421398837,name:"Demo2"}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST":return console.log("list created",t.list),e;case"SET_LIST_ERROR":return console.log("error",t.err),e;default:return e}},b=Object(i.c)({list:f}),p=Object(i.e)(b,Object(i.d)(Object(i.a)(d.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:u.getFirestore})))),E=(n(424),n(425),n(426),n(427),n(7)),v=(n(134),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{htmlFor:"todo"},l.a.createElement("b",null,"TODO LIST")),l.a.createElement("nav",{className:"navbar red darken-3"},l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(r.c,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/todo1"},"Todo 1")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/todo2"},"Todo 2")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/todo3"},"Todo 3")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/redux"},"Redux")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/todo6"},"Todo6")))))}),g=n(18),k=n(19),C=n(21),A=n(20),w=n(234),y=n.n(w),S=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={posts:[]},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://jsonplaceholder.typicode.com/posts").then((function(t){e.setState({posts:t.data.slice(0,5)})}))}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map((function(e){return l.a.createElement("div",{className:"containers container",key:e.id},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},e.id,".",e.title),l.a.createElement("p",{className:"body"},e.body)))})):l.a.createElement("div",{className:"center"},"No Post's Yet");return l.a.createElement("div",{className:"home"},l.a.createElement("h4",null,"Todo List Demo's"),l.a.createElement("div",{className:"box2"},t))}}]),n}(a.Component),O=n(9),N=n(12),j=(n(228),function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).addTodo=function(t){var n=e.state,a=n.todo,l=n.list,o=n.id,c={done:!1,id:Date.now(),name:a.charAt(0).toUpperCase()+a.slice(1)};l.push(c),e.setState({list:l,id:o,todo:""})},e.doneTodo=function(t){var n=t.target,a=n.value,l=n.checked,o=e.state.list,c=o.findIndex((function(e){return e.name===a}));console.log("doneTodo: ",c,a,l),o[c].done=l,e.setState({list:o})},e.handleSave=function(t){console.log(e.state)},e.selectAllChkBox=function(t){var n=e.state.list;n.map((function(e){return e.done=!0})),e.setState({list:n})},e.deSelectAllChkBox=function(t){var n=e.state.list;n.forEach((function(e){return e.done=!1})),e.setState({list:n})},e.handleDelete=function(t){if(!window.confirm("Are You Sure, You Want To Delete This Item???"))return!1;var n=e.state.list.filter((function(e,n){return console.log("res list: e, item, id: ",e,n,t),n!==t}));e.setState({list:n})},e.DeleteAllItems=function(t){if(!window.confirm("Are You Sure, You Want To Delete All These Items???"))return!1;var n=e.state.list.filter((function(e){return"false"===e}));e.setState({list:n})},e.renderList=function(){var t=e.state.list;return t.map((function(n,a){return l.a.createElement(T,{key:a,done:n.done,name:n.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(O.a)(e),a),list:t})}))},e.renderActiveList=function(){var t=e.state.list.filter((function(e){return!1===e.done})),n=t.map((function(t,n){return l.a.createElement(T,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(O.a)(e),n)})}));return console.log(t),n},e.renderCompletedList=function(){var t=e.state.list.filter((function(e){return!0===e.done})),n=t.map((function(t,n){return l.a.createElement(T,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(O.a)(e),n)})}));return console.log(t),n},e.hideComponent=function(t){switch(t){case"showActive":e.setState({showActive:!0,showAll:!1,showComplete:!1});break;case"showComplete":e.setState({showComplete:!0,showAll:!1,showActive:!1});break;case"showAll":e.setState({showAll:!0,showActive:!1,showComplete:!1});break;default:e.setState({showAll:!0,showActive:!1,showComplete:!1})}},e.state={todo:"",id:Date.now(),done:!1,list:[],showAll:!0,showActive:!1,showComplete:!1},e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(k.a)(n,[{key:"handleChange",value:function(e){this.setState({todo:e.target.value,done:e.target.done})}},{key:"render",value:function(){var e=this,t=this.state,n=t.showAll,a=t.showActive,o=t.showComplete;return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("input",{type:"text",className:"form-control",id:"todo",value:this.state.todo,onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-warning",onClick:this.addTodo,disabled:!this.state.todo},"Add "+(this.state.list.length+1)),l.a.createElement("button",{className:"btn btn-success",type:"submit",onSubmit:this.handleSave},"Save Data"),l.a.createElement("button",{className:"btn btn-info"},"Fetch Data"))),l.a.createElement("span",{className:"check"},l.a.createElement(N.c,{icon:"check",onClick:this.selectAllChkBox,disabled:0===this.state.list.length}," Select All")),l.a.createElement("span",{className:"check",style:{float:"right"}},l.a.createElement(N.c,{icon:"ban",onClick:this.deSelectAllChkBox,disabled:0===this.state.list.length}," De - Select All")),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"box"},n&&this.renderList(),a&&this.renderActiveList(),o&&this.renderCompletedList()),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"aliceblue"}},this.state.list.filter((function(e){return!1===e.done})).length+" items left",l.a.createElement("button",{className:"btn3 btn-danger",onClick:this.DeleteAllItems,disabled:0===this.state.list.length},l.a.createElement(N.c,{far:!0,icon:"trash-alt"})," Delete All")),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.hideComponent("showAll")}},l.a.createElement(N.c,{icon:"check"})," All"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.hideComponent("showActive")}},l.a.createElement(N.c,{icon:"check"})," Active"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.hideComponent("showComplete")}},l.a.createElement(N.c,{icon:"ban"})," Completed")))}}]),n}(l.a.Component)),T=function(e){var t,n;return e.done?(t=l.a.createElement("strike",null,e.name),n="alert alert-danger"):(t=e.name,n="alert alert-info"),l.a.createElement(a.Fragment,null,l.a.createElement("div",{className:n},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",defaultValue:e.name,onChange:e.onChange,checked:e.done}),"\xa0",t),l.a.createElement("button",{type:"button",className:"btn2 btn-danger",onClick:function(){return e.handleDelete()}},l.a.createElement(N.c,{far:!0,icon:"trash-alt"})))))},x=j,D=n(88),I=(n(229),n(462),n(239)),L=n(240);var F=function(e){var t=e.items.map((function(t){return l.a.createElement("div",{className:"list",key:t.key},l.a.createElement("p",null,l.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),l.a.createElement("span",null,l.a.createElement(I.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"trash"}))))}));return l.a.createElement("div",null,l.a.createElement(L.a,{duration:300,easing:"ease-in-out"},t))},B=n(63),Y=n(241);B.b.add(Y.a);var U=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.addItem=a.addItem.bind(Object(O.a)(a)),a.handleInput=a.handleInput.bind(Object(O.a)(a)),a.deleteItem=a.deleteItem.bind(Object(O.a)(a)),a.setUpdate=a.setUpdate.bind(Object(O.a)(a)),a}return Object(k.a)(n,[{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(D.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){console.log("items:"+this.state.items);var n=this.state.items;return n.map((function(n){n.key===t&&(console.log(n.key+"    "+t),n.text=e)})),this.setState({items:n}),n}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("form",{id:"to-do-form",className:"container",onSubmit:this.addItem},l.a.createElement("input",{type:"text",placeholder:"Enter task",value:this.state.currentItem.text,onChange:this.handleInput}),l.a.createElement("button",{type:"submit"},"Add")),l.a.createElement("div",{className:"box2"},l.a.createElement("p",null,this.state.items.text),l.a.createElement(F,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))))}}]),n}(l.a.Component),R=function(e){var t=e.todos,n=e.deleteTodo,a=t.length?t.map((function(e){return l.a.createElement("div",{className:"list collection",key:e.id},l.a.createElement("p",{className:"center",onClick:function(){n(e.id)}},e.content))})):l.a.createElement("p",{className:"center"},"No todo's left");return l.a.createElement("div",{className:"box2"},l.a.createElement("div",{className:"list collection center",style:{cursor:"pointer"}},a))},_=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(k.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"AddTodo"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"home"},"Add new todo:"),l.a.createElement("input",{style:{width:"100%",boxShadow:"1px 2px 6px 5px blueviolet"},placeholder:"Enter Items",type:"text",onChange:this.handleChange,value:this.state.content})))}}]),n}(a.Component),W=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={todos:[{id:1,content:"buy milk"},{id:2,content:"buy apple"}]},e.deleteTodo=function(t){console.log(t);var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.addTodo=function(t){t.id=Math.random();var n=[].concat(Object(D.a)(e.state.todos),[t]);e.setState({todos:n})},e}return Object(k.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"TodoList"},l.a.createElement(_,{addTodo:this.addTodo}),l.a.createElement(R,{todos:this.state.todos,deleteTodo:this.deleteTodo}))}}]),n}(a.Component),J=n(140),M=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).addTodo=function(t){var n=e.state,a=n.todo,l=n.id,o=e.props.list,c={done:!1,id:Date.now(),name:a.charAt(0).toUpperCase()+a.slice(1)};o.push(c),e.setState({list:o,id:l,todo:""})},e.doneTodo=function(t){var n=t.target,a=n.value,l=n.checked,o=e.props.list,c=o.findIndex((function(e){return e.name===a}));console.log("doneTodo: ",c,a,l),o[c].done=l,e.setState({list:o})},e.handleSave=function(t){t.preventDefault(),console.log(e.state.list),e.props.setList(e.state.list)},e.selectAllChkBox=function(t){var n=e.props.list;n.map((function(e){return e.done=!0})),e.setState({list:n})},e.deSelectAllChkBox=function(t){var n=e.props.list;n.forEach((function(e){return e.done=!1})),e.setState({list:n})},e.handleDelete=function(t){if(!window.confirm("Are You Sure, You Want To Delete This Item???"))return!1;var n=e.state.list.filter((function(e,n){return n!==t}));e.setState({list:n})},e.DeleteAllItems=function(t){if(!window.confirm("Are You Sure, You Want To Delete All These Items???"))return!1;var n=e.state.list.filter((function(e){return"false"===e}));e.setState({list:n})},e.renderList=function(){var t=e.props.list;return t.map((function(n,a){return l.a.createElement(V,{key:a,done:n.done,name:n.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(O.a)(e),a),list:t})}))},e.renderActiveList=function(){var t=e.state.list.filter((function(e){return!1===e.done})),n=t.map((function(t,n){return l.a.createElement(V,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(O.a)(e),n)})}));return console.log(t),n},e.renderCompletedList=function(){var t=e.state.list.filter((function(e){return!0===e.done})),n=t.map((function(t,n){return l.a.createElement(V,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(O.a)(e),n)})}));return console.log(t),n},e.hideComponent=function(t){switch(t){case"showActive":e.setState({showActive:!0,showAll:!1,showComplete:!1});break;case"showComplete":e.setState({showComplete:!0,showAll:!1,showActive:!1});break;case"showAll":e.setState({showAll:!0,showActive:!1,showComplete:!1});break;default:e.setState({showAll:!0,showActive:!1,showComplete:!1})}},e.state={todo:"",id:Date.now(),done:!1,list:[],showAll:!0,showActive:!1,showComplete:!1},e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(k.a)(n,[{key:"handleChange",value:function(e){this.setState({todo:e.target.value,done:e.target.done})}},{key:"render",value:function(){var e=this,t=this.state,n=t.showAll,a=t.showActive,o=t.showComplete;return console.log(this.props),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("input",{type:"text",className:"form-control",id:"todo",value:this.state.todo,onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-warning",onClick:this.addTodo,disabled:!this.state.todo},"Add "+(this.state.list.length+1)))),l.a.createElement("span",{className:"check"},l.a.createElement(N.c,{icon:"check",onClick:this.selectAllChkBox,disabled:0===this.state.list.length}," Select All")),l.a.createElement("span",{className:"check",style:{float:"right"}},l.a.createElement(N.c,{icon:"ban",onClick:this.deSelectAllChkBox,disabled:0===this.state.list.length}," De - Select All")),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"box"},n&&this.renderList(),a&&this.renderActiveList(),o&&this.renderCompletedList()),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"aliceblue"}},this.state.list.filter((function(e){return!1===e.done})).length+" items left",l.a.createElement("button",{className:"btn3 btn-danger",onClick:this.DeleteAllItems,disabled:0===this.state.list.length},l.a.createElement(N.c,{far:!0,icon:"trash-alt"})," Delete All")),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.hideComponent("showAll")}},l.a.createElement(N.c,{icon:"check"})," All"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.hideComponent("showActive")}},l.a.createElement(N.c,{icon:"check"})," Active"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.hideComponent("showComplete")}},l.a.createElement(N.c,{icon:"ban"})," Completed")))}}]),n}(l.a.Component),V=function(e){var t,n;return e.done?(t=l.a.createElement("strike",null,e.name),n="alert alert-danger"):(t=e.name,n="alert alert-info"),l.a.createElement(a.Fragment,null,l.a.createElement("div",{className:n},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",defaultValue:e.name,onChange:e.onChange,checked:e.done}),"\xa0",t),l.a.createElement("button",{type:"button",className:"btn2 btn-danger",onClick:function(){return e.handleDelete()}},l.a.createElement(N.c,{far:!0,icon:"trash-alt"})))))},H=Object(s.b)((function(e){return console.log(e),{list:e.list.list}}),(function(e){return{setList:function(t){return e(function(e){return function(t,n,a){a.getFirebase;(0,a.getFirestore)().collection("todoList").add(Object(J.a)(Object(J.a)({},e),{},{done:!1,id:123456,name:"testing"})).then((function(){t({type:"SET_LIST",list:e})})).catch((function(e){t({type:"SET_LIST_ERROR",err:e})}))}}(t))}}}))(M),P=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("h1",null,"todo6"))}}]),n}(a.Component);var q=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(E.a,{exact:!0,path:"/",component:S}),l.a.createElement(E.a,{path:"/todo1",component:x}),l.a.createElement(E.a,{path:"/todo2",component:U}),l.a.createElement(E.a,{path:"/todo3",component:W}),l.a.createElement(E.a,{path:"/redux",component:H}),l.a.createElement(E.a,{path:"/todo6",component:P})))};c.a.render(l.a.createElement(s.a,{store:p},l.a.createElement(r.a,null,l.a.createElement(q,null))),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.d0804277.chunk.js.map