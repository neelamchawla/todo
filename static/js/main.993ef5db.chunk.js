(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{39:function(e,t,n){e.exports=n(72)},44:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(6),c=n.n(o),r=(n(44),n(45),n(46),n(47),n(30)),s=n(31),i=n(8),d=n(38),u=n(37),h=n(7),m=(n(70),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).addTodo=function(t){var n=e.state,a=n.todo,l=n.list,o=n.id,c={done:!1,id:Date.now(),name:a.charAt(0).toUpperCase()+a.slice(1)};l.push(c),e.setState({list:l,id:o,todo:""})},e.doneTodo=function(t){var n=t.target,a=n.value,l=n.checked,o=e.state.list,c=o.findIndex((function(e){return e.name===a}));console.log("doneTodo",c,a,l),o[c].done=l,e.setState({list:o}),console.log(["done"===l],"total")},e.selectAllChkBox=function(t){var n=e.state.list;n.map((function(e){return e.done=!0})),e.setState({list:n}),console.log("selectAll list",n)},e.deSelectAllChkBox=function(t){var n=e.state.list;n.forEach((function(e){return e.done=!1})),e.setState({list:n}),console.log("de-selectAll list",n)},e.handleDelete=function(t){if(!window.confirm("Are You Sure, You Want To Delete This Item???"))return!1;var n=e.state.list.filter((function(e,n){return n!==t}));console.log("res list",t),e.setState({list:n})},e.DeleteAllItems=function(t){if(!window.confirm("Are You Sure, You Want To Delete All These Items???"))return!1;var n=e.state.list.filter((function(e){return"false"===e}));console.log("Delete list ",t),e.setState({list:n})},e.renderList=function(){return e.state.list.map((function(t,n){return l.a.createElement(f,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(i.a)(e),n)})}))},e.renderActiveList=function(){var t=e.state.list.filter((function(e){return!1===e.done})),n=t.map((function(t,n){return l.a.createElement(f,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(i.a)(e),n)})}));return console.log(t),n},e.renderCompletedList=function(){var t=e.state.list.filter((function(e){return!0===e.done})),n=t.map((function(t,n){return l.a.createElement(f,{key:n,done:t.done,name:t.name,onChange:e.doneTodo,handleDelete:e.handleDelete.bind(Object(i.a)(e),n)})}));return console.log(t),n},e.hideComponent=function(t){switch(t){case"showActive":e.setState({showActive:!0,showAll:!1,showComplete:!1});break;case"showComplete":e.setState({showComplete:!0,showAll:!1,showActive:!1});break;case"showAll":e.setState({showAll:!0,showActive:!1,showComplete:!1});break;default:e.setState({showAll:!0,showActive:!1,showComplete:!1})}},e.state={todo:"",id:Date.now(),done:!1,list:[],showAll:!0,showActive:!1,showComplete:!1},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({todo:e.target.value,done:e.target.done})}},{key:"render",value:function(){var e=this,t=this.state,n=t.showAll,a=t.showActive,o=t.showComplete;return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{htmlFor:"todo"},l.a.createElement("b",null,"TODO LIST")),l.a.createElement("input",{type:"text",className:"form-control",id:"todo",value:this.state.todo,onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-warning",onClick:this.addTodo,disabled:!this.state.todo},"Add "+(this.state.list.length+1))),l.a.createElement("span",{className:"check"},l.a.createElement(h.c,{icon:"check",onClick:this.selectAllChkBox}," Select All")),l.a.createElement("span",{className:"check",style:{float:"right"}},l.a.createElement(h.c,{icon:"ban",onClick:this.deSelectAllChkBox}," De - Select All")),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"box"},n&&this.renderList(),a&&this.renderActiveList(),o&&this.renderCompletedList()),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"aliceblue"}},this.state.list.filter((function(e){return!1===e.done})).length+" items left",l.a.createElement("button",{className:"btn3 btn-danger",onClick:this.DeleteAllItems},l.a.createElement(h.c,{far:!0,icon:"trash-alt"})," Delete All")),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.hideComponent("showAll")}},l.a.createElement(h.c,{icon:"check"})," All"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.hideComponent("showActive")}},l.a.createElement(h.c,{icon:"check"})," Active"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.hideComponent("showComplete")}},l.a.createElement(h.c,{icon:"ban"})," Completed")))}}]),n}(l.a.Component)),f=function(e){var t,n;return e.done?(t=l.a.createElement("strike",null,e.name),n="alert alert-danger"):(t=e.name,n="alert alert-info"),l.a.createElement(a.Fragment,null,l.a.createElement("div",{className:n},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",defaultValue:e.name,onChange:e.onChange,checked:e.done}),"\xa0",t),l.a.createElement("button",{type:"button",className:"btn2 btn-danger",onClick:function(){return e.handleDelete()}},l.a.createElement(h.c,{far:!0,icon:"trash-alt"})))))},b=m;n(71);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.993ef5db.chunk.js.map