(this.webpackJsonpprojektpogoda=this.webpackJsonpprojektpogoda||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),l=a.n(i),c=(a(12),a(3)),o=a(4),u=a(5),s=a(6),m=function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{type:"text",value:e.value,placeholder:"Wpisz miasto",onChange:e.change}),r.a.createElement("button",null,"Wyszukaj miasto"))},h=(a(13),function(e){var t=e.weather,a=t.err,n=t.city,i=t.temp,l=t.date,c=t.sunrise,o=t.sunset,u=t.pressure,s=t.wind,m=null;if(!a&&n){var h=new Date(1e3*c).toLocaleTimeString(),d=new Date(1e3*o).toLocaleTimeString();m=r.a.createElement("div",null,r.a.createElement("h3",null,"Wyniki wyszukiwania dla: ",r.a.createElement("em",null,n)),r.a.createElement("h4",null,"Dane dla dnia i godziny: ",l),r.a.createElement("h4",null,"Aktualna temperatura: ",i,"\xb0C"),r.a.createElement("h4",null,"Wsch\xf3d s\u0142o\u0144ca: ",h),r.a.createElement("h4",null,"Zach\xf3d s\u0142o\u0144ca: ",d),r.a.createElement("h4",null,"Aktualna si\u0142a wiatru: ",s," m/h"),r.a.createElement("h4",null,"Aktualne ci\u015bnienie: ",u," hPa"))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"result"},a?"Nie mamy w bazie: ".concat(n):m))}),d=(a(14),"42f820f38e074d0adb73d09de7748a6c"),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",err:!1},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleCitySubmit=function(t){t.preventDefault();var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&appid=").concat(d,"&units=metric");fetch(a).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(t){var a=(new Date).toLocaleString();e.setState({date:a,city:e.state.value,sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp,pressure:t.main.pressure,wind:t.wind.speed,err:!1})})).catch((function(t){console.log(t),e.setState({err:!0,city:e.state.value})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),r.a.createElement(h,{weather:this.state}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b3a85095.chunk.js.map