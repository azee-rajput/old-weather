(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(19),r=a.n(l),c=(a(27),a(28),a(3)),i=a(4),o=a(6),m=a(5),h=a(7),u=a(10),d=a(11),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={latitude:e.latitude,longitude:e.longitude,city:e.city,year:null,month:null,time:null,day:null,name:null,country:null,description:null,temp:null,condition:null,wind:null,humidity:null,pressure:null,icon:null,dn:null,timezone:null,sunrise:null,sunset:null,forecast:[],updated:!1,day1:null,day2:null,day3:null,day4:null,day5:null,pressure1:null,pressure2:null,pressure3:null,pressure4:null,pressure5:null,humidity1:null,humidity2:null,humidity3:null,humidity4:null,humidity5:null,wind1:null,wind2:null,wind3:null,wind4:null,wind5:null,icon1:null,icon2:null,icon3:null,icon4:null,icon5:null,description1:null,description2:null,description3:null,description4:null,description5:null,mounted:!1,value:null,clicked:!1,error:!1,searchFailed:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=new Date,s=a.getUTCFullYear(),n=a.getUTCMonth()+1,l=a.getUTCDate(),r=a.getUTCHours(),c=a.getUTCMinutes(),i=r>=12?"pm":"am",o=(r=(r%=12)||12)+":"+(c=c<10?"0"+c:c)+" "+i;e=this.state.city?"https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&APPID=585205b943a316d3502569db71a3fca9":"https://api.openweathermap.org/data/2.5/weather?lat="+this.state.latitude+"&lon="+this.state.longitude+"&APPID=585205b943a316d3502569db71a3fca9",fetch(e).then((function(e){return e.json()})).then((function(e){return t.setState({latitude:e.coord.lat,longitude:e.coord.lon,name:e.name,country:e.sys.country,description:e.weather[0].description,dn:e.weather[0].icon,temp:e.main.temp-273,condition:e.weather[0].main,humidity:e.main.humidity+"%",pressure:e.main.pressure+" hpa",wind:e.wind.speed+" m/s",time:o,day:l,month:n,year:s,timezone:e.timezone,sunrise:e.sys.sunrise,sunset:e.sys.sunset,mounted:!0})})).catch((function(e){t.setState({error:!0})}))}},{key:"componentDidUpdate",value:function(){var e=this;if(this.state.mounted&&fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+this.state.latitude+"&lon="+this.state.longitude+"&APPID=585205b943a316d3502569db71a3fca9").then((function(e){return e.json()})).then((function(t){return e.setState({forecast:t.list,updated:!0,mounted:!1})})),this.state.updated){var t=new Date(this.state.timezone),a=t.getHours(),s="0"+t.getMinutes(),n=a+":"+s.substr(-2);n=a>=0?"GMT +"+n:"GMT -"+n;var l=new Date(1e3*this.state.sunrise),r=(a=l.getHours())>=12?"pm":"am",c=(a=(a%=12)||12)+":"+(s=(s=l.getMinutes())<10?"0"+s:s)+" "+r,i=new Date(1e3*this.state.sunset);r=(a=i.getHours())>=12?"pm":"am";for(var o,m,h,u,d,p,E,y,w,f,N,b,v,g,k,j,M,C,O,S,T,D,z,P,x,U,B=(a=(a%=12)||12)+":"+(s=(s=i.getMinutes())<10?"0"+s:s)+" "+r,H=0,W=0,A=0,I=0,F=[],R=[],G=0;G<8;G++)H+=this.state.forecast[G].main.temp,W+=this.state.forecast[G].main.pressure,I+=this.state.forecast[G].main.humidity,A+=this.state.forecast[G].wind.speed;o=H/8-273,p=Math.round(W/8),N=Math.round(I/8),j=Math.round(A/8),F[0]=this.state.forecast[4].weather[0].main,T=this.state.forecast[4].weather[0].description,H=0,W=0,A=0,I=0;for(var J=8;J<16;J++)H+=this.state.forecast[J].main.temp,W+=this.state.forecast[J].main.pressure,I+=this.state.forecast[J].main.humidity,A+=this.state.forecast[J].wind.speed;m=H/8-273,E=Math.round(W/8),b=Math.round(I/8),M=Math.round(A/8),F[1]=this.state.forecast[12].weather[0].main,D=this.state.forecast[12].weather[0].description,H=0,W=0,A=0,I=0;for(var Y=16;Y<24;Y++)H+=this.state.forecast[Y].main.temp,W+=this.state.forecast[Y].main.pressure,I+=this.state.forecast[Y].main.humidity,A+=this.state.forecast[Y].wind.speed;h=H/8-273,y=Math.round(W/8),v=Math.round(I/8),C=Math.round(A/8),F[2]=this.state.forecast[20].weather[0].main,z=this.state.forecast[20].weather[0].description,H=0,W=0,A=0,I=0;for(var q=24;q<32;q++)H+=this.state.forecast[q].main.temp,W+=this.state.forecast[q].main.pressure,I+=this.state.forecast[q].main.humidity,A+=this.state.forecast[q].wind.speed;u=H/8-273,w=Math.round(W/8),g=Math.round(I/8),O=Math.round(A/8),F[3]=this.state.forecast[28].weather[0].main,P=this.state.forecast[28].weather[0].description,H=0,W=0,A=0,I=0;for(var L=32;L<40;L++)H+=this.state.forecast[L].main.temp,W+=this.state.forecast[L].main.pressure,I+=this.state.forecast[L].main.humidity,A+=this.state.forecast[L].wind.speed;d=H/8-273,f=Math.round(W/8),k=Math.round(I/8),S=Math.round(A/8),F[4]=this.state.forecast[36].weather[0].main,x=this.state.forecast[36].weather[0].description,H=0,W=0,A=0,I=0;for(var Z=0;Z<5;Z++)switch(F[Z]){case"Thunderstorm":R[Z]="las la-poo-storm";break;case"Rain":R[Z]="las la-cloud-rain";break;case"Drizzle":R[Z]="las la-cloud-sun-rain";break;case"Snow":R[Z]="lar la-snowflake";break;case"Clear":R[Z]="las la-sun";break;case"Clouds":R[Z]="las la-cloud";break;default:R[Z]="las la-smog"}switch(this.setState({timezone:n,sunrise:c,sunset:B,day1:o,day2:m,day3:h,day4:u,day5:d,pressure1:p+" hpa",pressure2:E+" hpa",pressure3:y+" hpa",pressure4:w+" hpa",pressure5:f+" hpa",humidity1:N+"%",humidity2:b+"%",humidity3:v+"%",humidity4:g+"%",humidity5:k+"%",wind1:j+" m/s",wind2:M+" m/s",wind3:C+" m/s",wind4:O+" m/s",wind5:S+" m/s",icon1:R[0],icon2:R[1],icon3:R[2],icon4:R[3],icon5:R[4],description1:T,description2:D,description3:z,description4:P,description5:x,updated:!1}),this.state.condition){case"Thunderstorm":this.setState({icon:"las la-poo-storm"});break;case"Rain":this.setState({icon:"las la-cloud-rain"});break;case"Drizzle":U=this.state.dn.includes("d")?"las la-cloud-sun-rain":"las la-cloud-moon-rain",this.setState({icon:U});break;case"Snow":this.setState({icon:"lar la-snowflake"});break;case"Clear":U=this.state.dn.includes("d")?"las la-sun":"las la-moon",this.setState({icon:U});break;case"Clouds":this.setState({icon:"las la-cloud"});break;default:this.setState({icon:"las la-smog"})}}}},{key:"changed",value:function(e){this.setState({value:e.target.value})}},{key:"search",value:function(){if(null===this.state.value||""===this.state.value||void 0===this.state.value)alert("search bar is empty");else{var e=this.state.value.split(" ").join("+");this.setState({value:e,clicked:!0})}}},{key:"render",value:function(){var e=this;return this.state.clicked?n.a.createElement(u.a,{to:"/redirector/"+this.state.value}):this.state.error?n.a.createElement("div",{className:"row text-center p-3",style:{width:"100%",margin:"auto"}},n.a.createElement(d.b,{to:"/",onClick:function(){return window.location.reload()},className:"col-lg-2 mb-3 display-4",style:{color:"white"}},n.a.createElement("i",{className:"fas fa-sun"},"My Weather")),n.a.createElement("div",{className:"col-lg-10"},n.a.createElement("input",{type:"text",placeholder:"search city",className:"searchTerm",onChange:function(t){return e.changed(t)}}),n.a.createElement("button",{className:"searchButton",onClick:function(){return e.search()}},n.a.createElement("i",{className:"fa fa-search"}))),n.a.createElement("p",{className:"display-1 mt-5 col-sm-12",style:{color:"white"}},'"',this.state.city,'" Not Found')):n.a.createElement("div",{className:"row text-center p-3",style:{width:"100%",margin:"auto"}},n.a.createElement(d.b,{to:"/",onClick:function(){return window.location.reload()},className:"col-lg-2 display-4 mb-3",style:{color:"white"}},n.a.createElement("i",{className:"fas fa-sun"},"My Weather")),n.a.createElement("div",{className:"col-lg-10",style:{margin:"auto"}},n.a.createElement("input",{type:"text",placeholder:"search city",className:"searchTerm",onChange:function(t){return e.changed(t)}}),n.a.createElement("button",{className:"searchButton",onClick:function(){return e.search()}},n.a.createElement("i",{className:"fa fa-search"}))),n.a.createElement("div",{className:"col-sm-12 mt-3 row text-center",style:{color:"white",margin:"auto",justifyContent:"center"}},n.a.createElement("div",{className:"col-md-4 wthr shadow mt-2"},n.a.createElement("h1",{className:"col-12 mb-3"},"Today"),n.a.createElement("div",{className:"row col-12 mb-3",style:{margin:"auto"}},n.a.createElement("span",{className:"col-sm-12 mb-3"},"Time and Date are in Coordinated Universal Time (UTC)"),n.a.createElement("span",{className:"col-lg-3"},this.state.day,"/",this.state.month,"/",this.state.year),n.a.createElement("span",{className:"col-lg-6"},this.state.name,",",this.state.country),n.a.createElement("span",{className:"col-lg-3"},this.state.time)),n.a.createElement("h1",{className:"display-1 mb-3"},Math.round(this.state.temp),"\xb0C"),n.a.createElement("h1",{className:"display-1 mb-3"},n.a.createElement("i",{className:this.state.icon})),n.a.createElement("h2",{className:"display-5 mb-3"},this.state.description),n.a.createElement("table",{className:" table table-borderless table-striped"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null," Pressure ",n.a.createElement("br",null)," ",n.a.createElement("i",{className:"las la-tachometer-alt"})),n.a.createElement("td",null,n.a.createElement("h6",null,this.state.pressure))),n.a.createElement("tr",null,n.a.createElement("td",null," Humidity ",n.a.createElement("br",null)," ",n.a.createElement("i",{className:"las la-tint"})),n.a.createElement("td",null,n.a.createElement("h6",null,this.state.humidity))),n.a.createElement("tr",null,n.a.createElement("td",null," Wind ",n.a.createElement("br",null)," ",n.a.createElement("i",{className:"las la-wind"})),n.a.createElement("td",null,n.a.createElement("h6",null,this.state.wind))),n.a.createElement("tr",null,n.a.createElement("td",null," Sunrise ",n.a.createElement("br",null)," ",n.a.createElement("i",{className:"las la-hourglass-start"})),n.a.createElement("td",null,n.a.createElement("h6",null,this.state.sunrise))),n.a.createElement("tr",null,n.a.createElement("td",null," Sunset ",n.a.createElement("br",null)," ",n.a.createElement("i",{className:"las la-hourglass-end"})),n.a.createElement("td",null,n.a.createElement("h6",null,this.state.sunset)))))),n.a.createElement("div",{className:"row col-md-8 text-center wthr mt-2",style:{justifyContent:"center"}},n.a.createElement("h1",{className:"col-12 mb-3"},"5-day forecast"),n.a.createElement("div",{className:"col-sm-12 row shadow wthrinner"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h6",null,this.state.day+1,"/",this.state.month,"/",this.state.year),n.a.createElement("span",{className:"display-4"},Math.round(this.state.day1),"\xb0C ",n.a.createElement("i",{className:this.state.icon1}))),n.a.createElement("div",{className:"col-sm-8 row"},n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tachometer-alt"})," ",this.state.pressure1),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tint"})," ",this.state.humidity1),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:this.state.icon1})," ",this.state.description1),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"la la-wind"})," ",this.state.wind1))),n.a.createElement("div",{className:"col-sm-12 row shadow wthrinner"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h6",null,this.state.day+2,"/",this.state.month,"/",this.state.year),n.a.createElement("span",{className:"display-4"},Math.round(this.state.day2),"\xb0C ",n.a.createElement("i",{className:this.state.icon2}))),n.a.createElement("div",{className:"col-sm-8 row"},n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tachometer-alt"})," ",this.state.pressure2),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tint"})," ",this.state.humidity2),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:this.state.icon2})," ",this.state.description2),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"la la-wind"})," ",this.state.wind2))),n.a.createElement("div",{className:"col-sm-12 row shadow wthrinner"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h6",null,this.state.day+3,"/",this.state.month,"/",this.state.year),n.a.createElement("span",{className:"display-4"},Math.round(this.state.day3),"\xb0C ",n.a.createElement("i",{className:this.state.icon3}))),n.a.createElement("div",{className:"col-sm-8 row"},n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tachometer-alt"})," ",this.state.pressure3),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tint"})," ",this.state.humidity3),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:this.state.icon3})," ",this.state.description3),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"la la-wind"})," ",this.state.wind3))),n.a.createElement("div",{className:"col-sm-12 row shadow wthrinner"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h6",null,this.state.day+4,"/",this.state.month,"/",this.state.year),n.a.createElement("span",{className:"display-4"},Math.round(this.state.day4),"\xb0C ",n.a.createElement("i",{className:this.state.icon4}))),n.a.createElement("div",{className:"col-sm-8 row"},n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tachometer-alt"})," ",this.state.pressure4),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tint"})," ",this.state.humidity4),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:this.state.icon4})," ",this.state.description4),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"la la-wind"})," ",this.state.wind4))),n.a.createElement("div",{className:"col-sm-12 row mb-2 shadow wthrinner"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h6",null,this.state.day+5,"/",this.state.month,"/",this.state.year),n.a.createElement("span",{className:"display-4"},Math.round(this.state.day5),"\xb0C ",n.a.createElement("i",{className:this.state.icon5}))),n.a.createElement("div",{className:"col-sm-8 row"},n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tachometer-alt"})," ",this.state.pressure5),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"las la-tint"})," ",this.state.humidity5),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:this.state.icon5})," ",this.state.description5),n.a.createElement("h6",{className:"col-sm-6"},n.a.createElement("i",{className:"la la-wind"})," ",this.state.wind5))))))}}]),t}(s.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={lat:36.7783,lon:-119.417931,found:!1,location:[],watch:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.watch=navigator.geolocation.watchPosition((function(t){var a=t.coords.latitude,s=t.coords.longitude;e.setState({lat:a,lon:s,found:!0}),console.log(e.state.lat+"..."+e.state.lon)}),(function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.found?(navigator.geolocation.clearWatch(this.state.watch),n.a.createElement(p,{latitude:this.state.lat,longitude:this.state.lon,city:!1})):n.a.createElement("div",null,n.a.createElement("p",null,"Landing"),n.a.createElement(p,{latitude:this.state.lat,longitude:this.state.lon,city:!1}))}}]),t}(s.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={city:null,url:a.props.match.params.city},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{city:this.props.match.params.value})}}]),t}(s.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(u.a,{to:"/search/"+this.props.match.params.value})}}]),t}(s.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(u.d,null,n.a.createElement(u.b,{exact:!0,path:"/",component:E}),n.a.createElement(u.b,{path:"/search/:value",component:y}),n.a.createElement(u.b,{path:"/redirector/:value",component:w}))}}]),t}(s.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"footering"},n.a.createElement("p",null,"This is a weather forecast website designed and developed by A.Zahir on React js"),n.a.createElement("p",null,"Backend APIs are consumed from ",n.a.createElement("b",null,n.a.createElement("a",{href:"https://openweathermap.org/api",rel:"noopener noreferrer",target:"_blank"},"openweathermap.org")),"."),n.a.createElement("p",null,"Hope You'll like it"),n.a.createElement("p",null,"contact me ",n.a.createElement("i",{className:"far fa-envelope"}," azee.rajput.7@gmail.com")))}}]),t}(s.Component);var b=function(){return n.a.createElement("div",{className:"mainBg"},n.a.createElement(f,null),n.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(d.a,{basename:"/react-weather/#/"},n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.8ebc4894.chunk.js.map