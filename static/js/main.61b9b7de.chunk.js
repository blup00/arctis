(this.webpackJsonparctis1=this.webpackJsonparctis1||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),i=n.n(r),u=(n(15),n(4)),c=n(5),s=n(9),m=n(6),o=n(1),d=n(8),h=(n(16),n(7)),p=n.n(h),E=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.currency),l.a.createElement("td",null,e.unit),l.a.createElement("td",null,e.buying),l.a.createElement("td",null,e.median),l.a.createElement("td",null,e.selling))},y=(n(17),function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:"info"},l.a.createElement("img",{className:"profilepic",src:"profileimage.png",alt:"profile1",height:"80px",width:"auto"}),l.a.createElement("div",null,l.a.createElement("p",null,"User: Moustache Man"),l.a.createElement("p",null,"Balance: 1$"))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,"About Us"),l.a.createElement("li",null,"Statistics"),l.a.createElement("li",null,"Exchange Rates"))))}),b=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))},v=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onButtonSubmit=function(t){t.preventDefault();var n=e.datuum;e.setState({dummy:n.value})},e.trebamDatum=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1;return t<10&&(t="0"+t),n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+t},e.onButtonSubmit=e.onButtonSubmit.bind(Object(o.a)(e)),e.state={values:[],dummy:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(this.state.dummy!==t.dummy){var n=this.state.dummy;p.a.ajax({url:"http://hnbex.eu/api/v1/rates/daily/?date=".concat(n),type:"GET",headers:{"X-Requested-With":"XMLHttpRequest"},crossDomain:!0,dataType:"jsonp"}).done(function(e){this.setState({values:e})}.bind(this))}}},{key:"render",value:function(){var e=this,t=this.state.values.map((function(e){return l.a.createElement(E,{key:e.median_rate,currency:e.currency_code,unit:e.unit_value,buying:e.buying_rate,median:e.median_rate,selling:e.selling_rate})}));return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"filter"},l.a.createElement("input",{type:"date",ref:function(t){return e.datuum=t},name:"datuum",max:this.trebamDatum()}),l.a.createElement("button",{type:"button",onClick:this.onButtonSubmit},"Submit date")),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"lorem"},l.a.createElement(b,null)),l.a.createElement("div",{className:"tablepad"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Currency code"),l.a.createElement("th",null,"Unit value"),l.a.createElement("th",null,"Buying rate"),l.a.createElement("th",null,"Median rate"),l.a.createElement("th",null,"Selling rate"))),l.a.createElement("tbody",null,t)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.61b9b7de.chunk.js.map