(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"name":"Ace of Diamonds","image":"/images/ace-diamonds.png"},{"id":2,"name":"2 of Diamonds","image":"/images/2-diamonds.png"},{"id":3,"name":"3 of Diamonds","image":"/images/3-diamonds.png"},{"id":4,"name":"4 of Diamonds","image":"/images/4-diamonds.png"},{"id":5,"name":"Ace of Spades","image":"/images/ace-spades.png"},{"id":6,"name":"Ace of Diamonds","image":"/images/ace-diamonds.png"},{"id":7,"name":"Jack of Spades","image":"/images/jack-spades.png"},{"id":8,"name":"King of Spades","image":"/images/king-spades.png"},{"id":9,"name":"Queen of Spades","image":"/images/queen-spades.png"},{"id":10,"name":"8 of Spades","image":"/images/8-spades.png"},{"id":11,"name":"10 of Spades","image":"/images/10-spades.png"},{"id":12,"name":"Joker","image":"/images/joker.png"}]')},12:function(e,a,t){e.exports=t(23)},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(10),c=t.n(o),r=(t(21),t(1)),s=t(2),l=t(4),d=t(3),h=t(5),m=(t(22),function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.handleClick;return i.a.createElement("article",{className:"card"},i.a.createElement("img",{src:this.props.image,alt:"clickycard",dataid:this.props.id,dataname:this.props.name,onClick:function(){return a(e.props.id)}}))}}]),a}(n.Component)),g=t(11),u=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={clickycards:g,clicked:[],score:0,highScore:0,helpText:"Click on an image to earn points, but don't click on any image more than once!"},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"handleClick",value:function(e){if(console.log("idClicked: ",e),this.state.clicked.includes(e)){console.log("true");var a=this.state.score>this.state.highScore?this.state.score:this.state.highScore;this.setState({clicked:[],score:0,highScore:a,helpText:"Game Over! You already clicked that one."})}else{console.log("false");var t=this.state.score>=this.state.highScore?this.state.score+1:this.state.highScore;10===t?this.setState({clicked:this.state.clicked,score:0,highScore:t,helpText:"You win! Thanks for playing."}):this.setState({clicked:this.state.clicked,score:this.state.score+1,highScore:t,helpText:"You guessed correctly!"})}this.state.clicked.push(e)}},{key:"shuffle",value:function(e){for(var a=e.length;a>0;){var t=Math.floor(Math.random()*a),n=e[--a];e[a]=e[t],e[t]=n}return e}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"grid-container"},i.a.createElement("nav",null,i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("h1",{style:{color:"Game Over! You already clicked that one."===this.state.helpText?"red":"white"}},this.state.helpText),i.a.createElement("h1",null,i.a.createElement("span",null,"Score: ",this.state.score),i.a.createElement("span",null,"Top Score: ",this.state.highScore))),i.a.createElement("main",null,this.shuffle(this.state.clickycards).map((function(a,t){return i.a.createElement(m,{key:t,id:a.id,name:a.name,image:a.image,clicked:a.clicked,handleClick:e.handleClick.bind(e)})})))),i.a.createElement("footer",null,i.a.createElement("a",{href:"http://ryanadiaz.com/",target:"_blank",rel:"noopener noreferrer"},"Created by Ryan Diaz")))}}]),a}(n.Component),p=function(){return i.a.createElement(u,null)},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(p,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");f?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):k(e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.48d0bc61.chunk.js.map