(this["webpackJsonpcrypto-api-v1"]=this["webpackJsonpcrypto-api-v1"]||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(12),o=t.n(r),l=t(2),i=t(13),m=t.n(i),s=(t(36),t(37),function(e){var a=e.name,t=e.price,c=e.symbol,r=e.marketcap,o=e.volume,l=e.image,i=e.priceChange;return n.a.createElement("div",{className:"coin-container"},n.a.createElement("div",{className:"coin-row"},n.a.createElement("div",{className:"coin"},n.a.createElement("img",{src:l,alt:"crypto"}),n.a.createElement("h1",null,a),n.a.createElement("p",{className:"coin-symbol"},c)),n.a.createElement("div",{className:"coin-data"},n.a.createElement("p",{className:"coin-price"},"$",t),n.a.createElement("p",{className:"coin-volume"},"$",o.toLocaleString()),i<0?n.a.createElement("p",{className:"coin-percent red"},i.toFixed(2),"%"):n.a.createElement("p",{className:"coin-percent green"},i.toFixed(2),"%"),n.a.createElement("p",{className:"coin-marketcap"},"Mkt Cap: $",r.toLocaleString()))))});var p=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),p=i[0],u=i[1];Object(c.useEffect)((function(){m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(e){r(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return n.a.createElement("div",{className:"coin-app"},n.a.createElement("div",{className:"coin-search"},n.a.createElement("h1",{className:"coin-text"},"Search a currency"),n.a.createElement("form",null,n.a.createElement("input",{className:"coin-input",type:"text",onChange:function(e){u(e.target.value)},placeholder:"Search"}))),d.map((function(e){return n.a.createElement(s,{key:e.id,name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h})})))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.13d1fed7.chunk.js.map