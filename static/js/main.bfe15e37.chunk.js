(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/check.b191d3b7.svg"},function(e,t,n){e.exports=n.p+"static/media/check-complete.c884f427.svg"},function(e,t,n){e.exports=n.p+"static/media/check-all.bdae0272.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),l=n.n(o),c=(n(20),n(10)),r=n(7),s=n(2),m=n(3),u=n(6),p=n(4),d=n(1),h=n(5),f=(n(21),n(22),n(11)),b=n.n(f),v=n(12),C=n.n(v),O=n(13),y=n.n(O),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.onClick,a=C.a;return t.isComplete&&(a=y.a),i.a.createElement("div",{className:b()("TodoItem",{"TodoItem-complete":t.isComplete})},i.a.createElement("img",{alt:"",src:a,width:24,height:24,onClick:n}),i.a.createElement("p",null,this.props.item.title))}}]),t}(a.Component),k=n(14),g=n.n(k);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={newItem:"",currentFilter:"All",todoItems:[{title:"Mua bim bim",isComplete:!0},{title:"\u0111i ch\u1ee3",isComplete:!0},{title:"\u0111i \u0111\xe1 b\xf3ng",isComplete:!1}]},e.onKeyUp=e.onKeyUp.bind(Object(d.a)(e)),e.onChange=e.onChange.bind(Object(d.a)(e)),e.All=e.All.bind(Object(d.a)(e)),e.Active=e.Active.bind(Object(d.a)(e)),e.Completed=e.Completed.bind(Object(d.a)(e)),e.Delete=e.Delete.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"onItemClicked",value:function(e){var t=this;return function(n){var a=e.isComplete,i=t.state.todoItems,o=i.indexOf(e);t.setState({todoItems:[].concat(Object(r.a)(i.slice(0,o)),[w({},e,{isComplete:!a})],Object(r.a)(i.slice(o+1)))})}}},{key:"onKeyUp",value:function(e){if(13===e.keyCode){var t=e.target.value;if(!t)return;if(!(t=t.trim()))return;this.setState({newItem:"",todoItems:[{title:t,isComplete:!1}].concat(Object(r.a)(this.state.todoItems))})}}},{key:"onChange",value:function(e){this.setState({newItem:e.target.value})}},{key:"All",value:function(){this.setState({currentFilter:"All"})}},{key:"Active",value:function(){this.setState({currentFilter:"Active"})}},{key:"Completed",value:function(){this.setState({currentFilter:"Completed"})}},{key:"Delete",value:function(){var e=this.state.todoItems.filter((function(e){return!1===e.isComplete}));this.setState({currentFilter:"Delete",todoItems:e})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.todoItems,o=n.newItem,l=n.currentFilter;return"All"===l&&(e=a),"Active"===l&&(e=a.filter((function(e){return!1===e.isComplete}))),"Completed"===l&&(e=a.filter((function(e){return!0===e.isComplete}))),"Delete"===l&&(e=a),i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"todos"),i.a.createElement("div",{className:"todos"},i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"input"},i.a.createElement("img",{alt:"",src:g.a,width:17,height:17}),i.a.createElement("input",{type:"text",placeholder:"Add a new item",value:o,onChange:this.onChange,onKeyUp:this.onKeyUp}))),e.length>0&&e.map((function(e,n){return i.a.createElement(j,{key:n,item:e,onClick:t.onItemClicked(e)})})),i.a.createElement("div",{className:"foo"},i.a.createElement("ul",{className:"filter"},i.a.createElement("li",null,i.a.createElement("p",{onClick:this.All},"All")),i.a.createElement("li",null,i.a.createElement("p",{onClick:this.Active},"Active")),i.a.createElement("li",null,i.a.createElement("p",{onClick:this.Completed},"Completed"))),i.a.createElement("p",{className:"delete",onClick:this.Delete},"Clear completed"))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.bfe15e37.chunk.js.map