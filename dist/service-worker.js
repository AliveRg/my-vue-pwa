if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const l=e=>r(e,n),b={module:{uri:n},exports:o,require:l};i[n]=Promise.all(s.map((e=>b[e]||l(e)))).then((e=>(c(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.ca527d8d.css",revision:null},{url:"/img/10.jpg",revision:"438bb489499728d2c1bc9fbbe4aeede9"},{url:"/img/12.jpg",revision:"eddf5b20c22b50f54810284a8eccbdf7"},{url:"/img/13.jpg",revision:"6e0a3fa50bbb20353c7fc90b9eb7fb56"},{url:"/img/14.jpg",revision:"148f1faec40ed6203dc472142b184e3d"},{url:"/img/15.jpg",revision:"61179dd8fd3ce593b5e53dc75620e562"},{url:"/img/17.jpg",revision:"89b13185c61008c7b21de9df11af2b4b"},{url:"/img/18.jpg",revision:"2307ce7b9cb34135073c23559c024d05"},{url:"/img/22.jpg",revision:"53d1a51881b0c82ba4e1126faa2d2aa2"},{url:"/img/23.jpg",revision:"2eb60dfd843dcc5ffa82d6bc686bb5f9"},{url:"/img/24.jpg",revision:"7389feb73e00ac011629e310b3bf49c2"},{url:"/img/27.jpg",revision:"838c80434853111bee7136760571835c"},{url:"/img/29.jpg",revision:"b0bd58c65e44feb83ec7d500d3bc7b29"},{url:"/img/32.jpg",revision:"653336451e0d87d3556670647d5e90a4"},{url:"/img/5.jpg",revision:"23467cc55023114fe841fa95c1b11618"},{url:"/img/6.jpg",revision:"427435ff9bf55c570098675a549b9679"},{url:"/img/7.jpg",revision:"72678129028ec99e9988c9d32eccf36a"},{url:"/img/log_spon-1.png",revision:"b53be69c654d2a9430377ddef593c2c5"},{url:"/img/log_spon-2.png",revision:"c233f7cd933a356f16e3642790f40f69"},{url:"/img/log_spon-3.png",revision:"5e49fb80daba07e28f56a660612c4fe4"},{url:"/img/log_spon-4.png",revision:"e53d93a90c96e0ee12332b8d83a1143c"},{url:"/img/log_spon-5.png",revision:"40c9a6a24fbe8b55e4bed9cddbb6539c"},{url:"/img/logo.e7ff44eb.png",revision:null},{url:"/img/Ломтик 1.png",revision:"2b256aeda26c2f17f3e516ddacf89f4c"},{url:"/index.html",revision:"70f06706d73578b308e1b45658b3822f"},{url:"/js/291.4bb88efe.js",revision:null},{url:"/js/350.8144f40a.js",revision:null},{url:"/js/462.8006fb9f.js",revision:null},{url:"/js/725.e035cfb3.js",revision:null},{url:"/js/app.3e88a3cd.js",revision:null},{url:"/js/chunk-vendors.95fc04b3.js",revision:null},{url:"/manifest.json",revision:"a9e6ad0bc77d4cdbfd303389365c1a3e"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
