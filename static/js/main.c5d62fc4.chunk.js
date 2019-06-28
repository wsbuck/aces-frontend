(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(56)},39:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),l=a.n(r),i=(a(39),a(8)),s=a(70),o=a(71),u=a(69);function m(e){var t=Object(n.useState)("01/01/2019"),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)(function(){fetch("https://aces-backend-dev.s3-us-west-2.amazonaws.com/lastUpdate.json",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){l(e.lastUpdate)}).catch(function(e){return console.log(e)})}),c.a.createElement("div",null,c.a.createElement(o.a,{position:"static"},c.a.createElement(u.a,{className:"App-bar"},c.a.createElement(s.a,{variant:"h6"},"Pitching Dashboard"),c.a.createElement("div",{className:"last-update-text"},"Last Updated: ",r))))}var p=a(32),h=a(26),f=[{value:"ACES",label:"ACES"},{value:"Whiffs",label:"Whiffs"},{value:"CSW",label:"CSW"}];function d(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)(function(){console.log("getting players");fetch("https://ks506u80el.execute-api.us-west-2.amazonaws.com/dev/pitchers",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return l(function(e){return e.map(function(e){return{value:e.pitcherId,label:e.pitcherName}})}(e))})},[]),c.a.createElement("div",{className:"searchbar-container"},c.a.createElement(h.a,{options:r,defaultOptions:!0,value:e.player,onChange:function(t){e.setPlayerId(t.value),e.setPlayerName(t.label)},className:"player-search"}),c.a.createElement(h.a,{closeMenuOnSelect:!1,isMulti:!0,value:e.metricsObject,options:f,onChange:function(t){if(t){var a=t.map(function(e){return e.value});e.setMetrics(Object(p.a)(a))}}}))}var E=a(15),b=a.n(E),v=a(21),y=a.n(v);function S(e){var t={chart:{type:"pie",backgroundColor:null},title:{text:"Pitch Distribution"},colors:["#819ca9","#29434e","#1e88e5","#6ab7ff","#005cb2","#546e7a"],tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,distance:-30,format:"<b>{point.name}</b>"},showInLegend:!1}},series:[{name:"Pitch",innerSize:"50%",colorByPoint:!0,data:e.pitchDist}]};return c.a.createElement(y.a,{highcharts:b.a,options:t})}var C=a(31);function j(e){var t={chart:{polar:!0,type:"line",backgroundColor:null},title:{text:"Metric by Pitch Type"},colors:["#819ca9","#29434e","#1e88e5","#6ab7ff","#005cb2","#546e7a"],pane:{size:"80%"},xAxis:{categories:["Cutter","Sinker","Change","Curve","Fourseam","Slider"],tickmarkPlacement:"on",lineWidth:0,labels:{}},yAxis:{gridLineInterpolation:"polygon",lineWidth:0,min:0,max:100,labels:{formatter:function(){return this.value+"%"}}},tooltip:{shared:!0,pointFormat:'<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'},series:[{name:"ACES",data:e.pitchMetrics.aces},{name:"Whiffs",data:e.pitchMetrics.whiff},{name:"CSW",data:e.pitchMetrics.csw}]};return c.a.createElement(y.a,{highcharts:b.a,options:t})}function W(e){var t=Object(n.useState)([{y:0},{y:0},{y:0},{y:0},{y:0},{y:0}]),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)({whiff:[0,0,0,0,0,0],csw:[0,0,0,0,0,0],aces:[0,0,0,0,0,0]}),o=Object(i.a)(s,2),u=o[0],m=o[1];return Object(n.useEffect)(function(){var t=e.playerId,a="https://ks506u80el.execute-api.us-west-2.amazonaws.com/dev/pitcher/".concat(t);fetch(a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){for(var a=[],n=[],c=[],r=[],i=0,s=Object.keys(t);i<s.length;i++){var o=s[i];if("pitcherId"!==o&&"pitcherName"!==o&&"All"!==o){var u=t[o].Num,p=t[o]["Whiffs%Rank"],h=t[o].CSWRank,f=t[o].ACES;p=p>0?p:0,h=h>0?h:0,f=f>0?f:0;var d=void 0;0===u?(d="",p=0,h=0):d=o,a.push({name:d,y:Number(u)}),n.push(p),c.push(h),r.push(f)}else"All"===o&&e.setPlayerMetrics({Whiffs:{value:t[o].Whiffs,percentile:t[o]["Whiffs%Rank"]},CSW:{value:t[o].CSW,percentile:t[o].CSWRank},ACES:{value:t[o].ACES_Value,percentile:t[o].ACES}})}l(a),n=e.metrics.includes("Whiffs")?n.map(function(e){return 100*e}):[0,0,0,0,0,0],c=e.metrics.includes("CSW")?c.map(function(e){return 100*e}):[0,0,0,0,0,0],r=e.metrics.includes("ACES")?r.map(function(e){return 100*e}):[0,0,0,0,0,0],m({whiff:n,csw:c,aces:r})}).catch(function(e){return console.log(e)})},[e.playerId,e.metrics,e.setPlayerMetrics]),c.a.createElement("div",{className:"charts-container"},c.a.createElement("div",{className:"chart-item"},c.a.createElement(S,{playerId:e.playerId,pitchDist:r})),c.a.createElement("div",{className:"chart-item"},c.a.createElement(j,{playerId:e.playerId,pitchMetrics:u})))}function w(e){var t=e.playerMetrics;return c.a.createElement("div",{className:"metric-table-container"},c.a.createElement("table",{className:"metric-table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Metric"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null,"Percentile")),c.a.createElement("tr",null,c.a.createElement("td",null,"ACES"),c.a.createElement("td",null,t.ACES.value.toFixed(2)),c.a.createElement("td",null,(100*t.ACES.percentile).toFixed(0)+"%")),c.a.createElement("tr",null,c.a.createElement("td",null,"Whiffs%"),c.a.createElement("td",null,t.Whiffs.value.toFixed(2)),c.a.createElement("td",null,(100*t.Whiffs.percentile).toFixed(0)+"%")),c.a.createElement("tr",null,c.a.createElement("td",null,"CSW%"),c.a.createElement("td",null,t.CSW.value.toFixed(2)),c.a.createElement("td",null,(100*t.CSW.percentile).toFixed(0)+"%")))))}function O(e){var t=Object(n.useState)("Clayton Kershaw"),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)("ckershaw"),o=Object(i.a)(s,2),u=o[0],p=o[1],h=Object(n.useState)(["ACES","Whiffs"]),f=Object(i.a)(h,2),E=f[0],b=f[1],v=Object(n.useState)({ACES:{value:0,percentile:0},Whiffs:{value:0,percentile:0},CSW:{value:0,percentile:0}}),y=Object(i.a)(v,2),S=y[0],C=y[1],j={value:u,label:r},O=E.map(function(e){return{value:e,label:e}});return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:""},c.a.createElement(m,null),c.a.createElement("div",{className:"search-and-metric-container"},c.a.createElement(d,{setPlayerId:p,setPlayerName:l,player:j,setMetrics:b,metricsObject:O}),c.a.createElement(w,{playerMetrics:S}))),c.a.createElement(W,{playerId:j.value,metrics:E,setPlayerMetrics:C}))}a.n(C)()(b.a);a(55);var g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.c5d62fc4.chunk.js.map