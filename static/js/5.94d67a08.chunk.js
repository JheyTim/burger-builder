(this["webpackJsonpburger-project"]=this["webpackJsonpburger-project"]||[]).push([[5],{101:function(e,r,n){"use strict";n.r(r);var t=n(5),a=n(6),i=n(8),o=n(7),c=n(0),s=n.n(c),u=n(14),p=n(17),d=n(97),l=n.n(d),m=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return s.a.createElement("div",{className:l.a.Order},s.a.createElement("p",null,"Ingredients: ",t),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},f=n(40),h=n(15),b=n(39),g=function(e){Object(i.a)(n,e);var r=Object(o.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(b.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return s.a.createElement(m,{key:e.id,ingredients:e.ingredients,price:+e.price})}))),s.a.createElement("div",null,e)}}]),n}(c.Component);r.default=Object(u.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(h.d(r,n))}}}))(Object(f.a)(g,p.a))},97:function(e,r,n){e.exports={Order:"Order_Order__3kYZJ"}}}]);
//# sourceMappingURL=5.94d67a08.chunk.js.map