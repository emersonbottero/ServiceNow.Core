var at=Object.defineProperty,it=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var de=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t)=>{for(var n in t||(t={}))lt.call(t,n)&&de(e,n,t[n]);if(ue)for(var n of ue(t))ut.call(t,n)&&de(e,n,t[n]);return e},fe=(e,t)=>it(e,ct(t));import{i as O,c as dt,e as ft,a as pt,b as ht,d as _t,f as Ne,h as Re,g as mt,j as vt,k as gt,l as Ie,m as bt,s as wt,n as h,o as Be,r as kt,p as V,t as $t,w as xt,u as w,v as I,_ as x,x as d,y as p,z as l,A as b,B as oe,C as E,D as f,E as He,F as S,G as Me,H as Oe,I as De,J as q,K as W,L as D,M as z,N as se,O as g,P as $,Q as B,R as yt,S as Ue,T as Q,U as pe,V as P}from"./plugin-vue_export-helper.7cf9b872.js";const Lt="modulepreload",he={},St="/ServiceNow.Core/",Z=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${St}${o}`,o in he)return;he[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Lt,s||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),s)return new Promise((i,c)=>{r.addEventListener("load",i),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Ct="http://www.w3.org/2000/svg",R=typeof document!="undefined"?document:null,_e=R&&R.createElement("template"),At={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?R.createElementNS(Ct,e):R.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>R.createTextNode(e),createComment:e=>R.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>R.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,s,a){const r=n?n.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===a||!(s=s.nextSibling)););else{_e.innerHTML=o?`<svg>${e}</svg>`:e;const i=_e.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Et(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pt(e,t,n){const o=e.style,s=O(n);if(n&&!s){for(const a in n)ee(o,a,n[a]);if(t&&!O(t))for(const a in t)n[a]==null&&ee(o,a,"")}else{const a=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=a)}}const me=/\s*!important$/;function ee(e,t,n){if(Ne(n))n.forEach(o=>ee(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Tt(e,t);me.test(n)?e.setProperty(Re(o),n.replace(me,""),"important"):e[o]=n}}const ve=["Webkit","Moz","ms"],X={};function Tt(e,t){const n=X[t];if(n)return n;let o=mt(t);if(o!=="filter"&&o in e)return X[t]=o;o=vt(o);for(let s=0;s<ve.length;s++){const a=ve[s]+o;if(a in e)return X[t]=a}return t}const ge="http://www.w3.org/1999/xlink";function Nt(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ge,t.slice(6,t.length)):e.setAttributeNS(ge,t,n);else{const a=gt(t);n==null||a&&!Ie(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Rt(e,t,n,o,s,a,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,s,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ie(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[je,It]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let te=0;const Bt=Promise.resolve(),Ht=()=>{te=0},Mt=()=>te||(Bt.then(Ht),te=je());function Ot(e,t,n,o){e.addEventListener(t,n,o)}function Dt(e,t,n,o){e.removeEventListener(t,n,o)}function Ut(e,t,n,o,s=null){const a=e._vei||(e._vei={}),r=a[t];if(o&&r)r.value=o;else{const[i,c]=jt(t);if(o){const u=a[t]=qt(o,s);Ot(e,i,u,c)}else r&&(Dt(e,i,r,c),a[t]=void 0)}}const be=/(?:Once|Passive|Capture)$/;function jt(e){let t;if(be.test(e)){t={};let n;for(;n=e.match(be);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Re(e.slice(2)),t]}function qt(e,t){const n=o=>{const s=o.timeStamp||je();(It||s>=n.attached-1)&&bt(Wt(o,n.value),t,5,[o])};return n.value=e,n.attached=Mt(),n}function Wt(e,t){if(Ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const we=/^on[a-z]/,zt=(e,t,n,o,s=!1,a,r,i,c)=>{t==="class"?Et(e,o,s):t==="style"?Pt(e,n,o):pt(t)?ht(t)||Ut(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ft(e,t,o,s))?Rt(e,t,o,a,r,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Nt(e,t,o,s))};function Ft(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&we.test(t)&&_t(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||we.test(t)&&O(n)?!1:t in e}const Gt=ft({patchProp:zt},At);let Y,ke=!1;function Kt(){return Y=ke?Y:dt(Gt),ke=!0,Y}const Vt=(...e)=>{const t=Kt().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=Xt(o);if(s)return n(s,!0,s instanceof SVGElement)},t};function Xt(e){return O(e)?document.querySelector(e):e}var Yt='{"lang":"en-US","title":"ServiceNow.Core","description":"Your easy to use REST API integration library","base":"/ServiceNow.Core/","head":[],"themeConfig":{"repo":"emersonbottero/ServiceNow.Core","docsDir":"docs","docsBranch":"main","algolia":{"appId":"HK9BCTMQOX","apiKey":"8119408cf84cbade754f568a5075a213","indexName":"servicenow"},"nav":[{"text":"Guide","link":"/guide/getting-started","activeMatch":"^/guide/"},{"text":"Config Reference","link":"/config/Authentication","activeMatch":"^/config/"},{"text":"Auto Generated","link":"/auto/","activeMatch":"^/auto/"},{"text":"Release Notes","link":"https://github.com/emersonbottero/ServiceNow.Core/releases"}],"sidebar":{"/guide/":[{"text":"Introduction","children":[{"text":"What is ServiceNow.Core?","link":"/"},{"text":"Getting Started","link":"/guide/getting-started"},{"text":"Configuration","link":"/config/Authentication"}]},{"text":"Advanced","children":[{"text":"Custom Flow","link":"/guide/catalog-item"},{"text":"Import Set","link":"/guide/import-set"}]}],"/config/":[{"text":"Configurations","children":[{"text":"Authentication","link":"/config/Authentication"},{"text":"Serializers","link":"/config/Serializers"}]}],"/":[{"text":"Introduction","children":[{"text":"What is ServiceNow.Core?","link":"/"},{"text":"Getting Started","link":"/guide/getting-started"},{"text":"Configuration","link":"/config/Authentication"}]},{"text":"Advanced","children":[{"text":"Custom Flow","link":"/guide/catalog-item"},{"text":"Import Set","link":"/guide/import-set"}]}]}},"locales":{},"langs":{},"scrollOffset":90}';const qe=/^https?:/i,C=typeof window!="undefined";function Jt(e,t){t.sort((n,o)=>{const s=o.split("/").length-n.split("/").length;return s!==0?s:o.length-n.length});for(const n of t)if(e.startsWith(n))return n}function $e(e,t){const n=Jt(t,Object.keys(e));return n?e[n]:void 0}function Qt(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((o,s)=>(o[s]={label:t[s].label,lang:n[s].lang},o),{}):{}}function Zt(e,t){t=en(e,t);const n=$e(e.locales||{},t),o=$e(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,o,{locales:{}}),lang:(n||e).lang,locales:{},langs:Qt(e)})}function en(e,t){if(!C)return t;const n=e.base,o=n.endsWith("/")?n.slice(0,-1):n;return t.slice(o.length)}const We=Symbol(),F=wt(tn(Yt));function tn(e){return JSON.parse(e)}function nn(e){const t=h(()=>Zt(F.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:o}=t.value,s=Object.keys(n).find(a=>n[a].lang===o);return H(s||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function A(){const e=Be(We);if(!e)throw new Error("vitepress data not properly injected in app");return e}function on(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function H(e){return qe.test(e)?e:on(F.value.base,e)}function ze(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),C){const n="/ServiceNow.Core/";t=t.slice(n.length).replace(/\//g,"_")+".md";const o=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${o}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Fe=Symbol(),xe="http://a.com",sn=()=>({path:"/",component:null,data:{frontmatter:{}}});function rn(e,t){const n=kt(sn());function o(r=C?location.href:"/"){const i=new URL(r,xe);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",r=i.pathname+i.search+i.hash),C&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),a(r)}let s=null;async function a(r,i=0){const c=new URL(r,xe),u=s=c.pathname;try{let _=e(u);if("then"in _&&typeof _.then=="function"&&(_=await _),s===u){s=null;const{default:m,__pageData:y}=_;if(!m)throw new Error(`Invalid route component: ${m}`);n.path=u,n.component=V(m),n.data=V(JSON.parse(y)),C&&$t(()=>{if(c.hash&&!i){let k=null;try{k=document.querySelector(decodeURIComponent(c.hash))}catch(L){console.warn(L)}if(k){ye(k,c.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),s===u&&(s=null,n.path=u,n.component=t?V(t):null)}}return C&&(window.addEventListener("click",r=>{const i=r.target.closest("a");if(i){const{href:c,protocol:u,hostname:_,pathname:m,hash:y,target:k}=i,L=window.location,N=m.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&k!=="_blank"&&u===L.protocol&&_===L.hostname&&!(N&&N[0]!==".html")&&(r.preventDefault(),m===L.pathname?y&&y!==L.hash&&(history.pushState(null,"",y),window.dispatchEvent(new Event("hashchange")),ye(i,y,i.classList.contains("header-anchor"))):o(c))}},{capture:!0}),window.addEventListener("popstate",r=>{a(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:o}}function an(){const e=Be(Fe);if(!e)throw new Error("useRouter() is called without provider.");return e}function T(){return an().route}function ye(e,t,n=!1){let o=null;try{o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(s){console.warn(s)}if(o){let s=F.value.scrollOffset;typeof s=="string"&&(s=document.querySelector(s).getBoundingClientRect().bottom+24);const a=parseInt(window.getComputedStyle(o).paddingTop,10),r=window.scrollY+o.getBoundingClientRect().top-s+a;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}function cn(e,t){let n=[],o=!0;const s=a=>{if(o){o=!1;return}const r=[],i=Math.min(n.length,a.length);for(let c=0;c<i;c++){let u=n[c];const[_,m,y=""]=a[c];if(u.tagName.toLocaleLowerCase()===_){for(const k in m)u.getAttribute(k)!==m[k]&&u.setAttribute(k,m[k]);for(let k=0;k<u.attributes.length;k++){const L=u.attributes[k].name;L in m||u.removeAttribute(L)}u.innerHTML!==y&&(u.innerHTML=y)}else document.head.removeChild(u),u=Le(a[c]),document.head.append(u);r.push(u)}n.slice(i).forEach(c=>document.head.removeChild(c)),a.slice(i).forEach(c=>{const u=Le(c);document.head.appendChild(u),r.push(u)}),n=r};xt(()=>{const a=e.data,r=t.value,i=a&&a.title,c=a&&a.description,u=a&&a.frontmatter.head;document.title=(i?i+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",c||r.description),s([...u?un(u):[]])})}function Le([e,t,n]){const o=document.createElement(e);for(const s in t)o.setAttribute(s,t[s]);return n&&(o.innerHTML=n),o}function ln(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function un(e){return e.filter(t=>!ln(t))}const dn=w({name:"VitePressContent",setup(){const e=T();return()=>I("div",{style:{position:"relative"}},[e.component?I(e.component):null])}});const fn=/#.*$/,pn=/(index)?\.(md|html)$/,U=/\/$/,hn=/^[a-z]+:/i;function re(e){return Array.isArray(e)}function ae(e){return hn.test(e)}function _n(e,t){if(t===void 0)return!1;const n=Se(`/${e.data.relativePath}`),o=Se(t);return n===o}function Se(e){return decodeURI(e).replace(fn,"").replace(pn,"")}function mn(e,t){const n=e.endsWith("/"),o=t.startsWith("/");return n&&o?e.slice(0,-1)+t:!n&&!o?`${e}/${t}`:e+t}function ne(e){return/^\//.test(e)?e:`/${e}`}function Ge(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function vn(e){return e===!1||e==="auto"||re(e)}function gn(e){return e.children!==void 0}function bn(e){return re(e)?e.length===0:!e}function ie(e,t){if(vn(e))return e;t=ne(t);for(const n in e)if(t.startsWith(ne(n)))return e[n];return"auto"}function Ke(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Ge(n.link)}),gn(n)&&(t=[...t,...Ke(n.children)]),t),[])}const wn=["href","aria-label"],kn=["src"],$n=w({setup(e){const{site:t,theme:n,localePath:o}=A();return(s,a)=>(d(),p("a",{class:"nav-bar-title",href:l(o),"aria-label":`${l(t).title}, back to home`},[l(n).logo?(d(),p("img",{key:0,class:"logo",src:l(H)(l(n).logo),alt:"Logo"},null,8,kn)):b("",!0),oe(" "+E(l(t).title),1)],8,wn))}});var xn=x($n,[["__scopeId","data-v-cc01ef16"]]);function yn(){const{site:e,localePath:t,theme:n}=A();return h(()=>{const o=e.value.langs,s=Object.keys(o);if(s.length<2)return null;const r=T().path.replace(t.value,""),i=s.map(u=>({text:o[u].label,link:`${u}${r}`}));return{text:n.value.selectText||"Languages",items:i}})}const Ln=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function Sn(){const{site:e}=A();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const o=Cn(n);return{text:An(o,t.repoLabel),link:o}})}function Cn(e){return qe.test(e)?e:`https://github.com/${e}`}function An(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const o=Ln.find(([s,a])=>a.test(n[0]));return o&&o[0]?o[0]:"Source"}function Ve(e){const t=T(),n=ae(e.value.link);return{props:h(()=>{const s=Ce(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(s);else{const r=Ce(e.value.link);a=r==="/"?r===s:s.startsWith(r)}return{class:{active:a,isExternal:n},href:n?e.value.link:H(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function Ce(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const En={},Pn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Tn=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Nn=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Rn=[Tn,Nn];function In(e,t){return d(),p("svg",Pn,Rn)}var ce=x(En,[["render",In]]);const Bn={class:"nav-link"},Hn=w({props:{item:null},setup(e){const n=He(e),{props:o,isExternal:s}=Ve(n.item);return(a,r)=>(d(),p("div",Bn,[f("a",Me({class:"item"},l(o)),[oe(E(e.item.text)+" ",1),l(s)?(d(),S(ce,{key:0})):b("",!0)],16)]))}});var Ae=x(Hn,[["__scopeId","data-v-b8818f8c"]]);const Mn=e=>(Oe("data-v-bbc27490"),e=e(),De(),e),On={class:"nav-dropdown-link-item"},Dn=Mn(()=>f("span",{class:"arrow"},null,-1)),Un={class:"text"},jn={class:"icon"},qn=w({props:{item:null},setup(e){const n=He(e),{props:o,isExternal:s}=Ve(n.item);return(a,r)=>(d(),p("div",On,[f("a",Me({class:"item"},l(o)),[Dn,f("span",Un,E(e.item.text),1),f("span",jn,[l(s)?(d(),S(ce,{key:0})):b("",!0)])],16)]))}});var Wn=x(qn,[["__scopeId","data-v-bbc27490"]]);const zn=["aria-label"],Fn={class:"button-text"},Gn={class:"dialog"},Kn=w({props:{item:null},setup(e){const t=T(),n=q(!1);W(()=>t.path,()=>{n.value=!1});function o(){n.value=!n.value}return(s,a)=>(d(),p("div",{class:D(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":e.item.ariaLabel,onClick:o},[f("span",Fn,E(e.item.text),1),f("span",{class:D(["button-arrow",n.value?"down":"right"])},null,2)],8,zn),f("ul",Gn,[(d(!0),p(z,null,se(e.item.items,r=>(d(),p("li",{key:r.text,class:"dialog-item"},[g(Wn,{item:r},null,8,["item"])]))),128))])],2))}});var Ee=x(Kn,[["__scopeId","data-v-56bf3a3f"]]);const Vn={key:0,class:"nav-links"},Xn={key:1,class:"item"},Yn={key:2,class:"item"},Jn=w({setup(e){const{theme:t}=A(),n=yn(),o=Sn(),s=h(()=>t.value.nav||o.value||n.value);return(a,r)=>l(s)?(d(),p("nav",Vn,[l(t).nav?(d(!0),p(z,{key:0},se(l(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),S(Ee,{key:0,item:i},null,8,["item"])):(d(),S(Ae,{key:1,item:i},null,8,["item"]))]))),128)):b("",!0),l(n)?(d(),p("div",Xn,[g(Ee,{item:l(n)},null,8,["item"])])):b("",!0),l(o)?(d(),p("div",Yn,[g(Ae,{item:l(o)},null,8,["item"])])):b("",!0)])):b("",!0)}});var Xe=x(Jn,[["__scopeId","data-v-eab3edfe"]]);const Qn={emits:["toggle"]},Zn=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),eo=[Zn];function to(e,t,n,o,s,a){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=r=>e.$emit("toggle"))},eo)}var no=x(Qn,[["render",to]]);const oo=e=>(Oe("data-v-675d8756"),e=e(),De(),e),so={class:"nav-bar"},ro=oo(()=>f("div",{class:"flex-grow"},null,-1)),ao={class:"nav"},io=w({emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",so,[g(no,{onToggle:n[0]||(n[0]=o=>t.$emit("toggle"))}),g(xn),ro,f("div",ao,[g(Xe)]),$(t.$slots,"search",{},void 0,!0)]))}});var co=x(io,[["__scopeId","data-v-675d8756"]]);function lo(){let e=null,t=null;const n=_o(o,300);function o(){const r=uo(),i=fo(r);for(let c=0;c<i.length;c++){const u=i[c],_=i[c+1],[m,y]=ho(c,u,_);if(m){history.replaceState(null,document.title,y||" "),s(y);return}}}function s(r){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${r}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function a(r){r&&r.classList.remove("active")}B(()=>{o(),window.addEventListener("scroll",n)}),yt(()=>{s(decodeURIComponent(location.hash))}),Ue(()=>{window.removeEventListener("scroll",n)})}function uo(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function fo(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function po(){return document.querySelector(".nav-bar").offsetHeight}function Pe(e){const t=po();return e.parentElement.offsetTop-t-15}function ho(e,t,n){const o=window.scrollY;return e===0&&o===0?[!0,null]:o<Pe(t)?[!1,null]:!n||o<Pe(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function _o(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),o=!0,setTimeout(()=>{o=!1},t))}}function mo(){const e=T(),{site:t}=A();return lo(),h(()=>{const n=e.data.headers,o=e.data.frontmatter.sidebar,s=e.data.frontmatter.sidebarDepth;if(o===!1)return[];if(o==="auto")return Te(n,s);const a=ie(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?Te(n,s):a})}function Te(e,t){const n=[];if(e===void 0)return[];let o;return e.forEach(({level:s,title:a,slug:r})=>{if(s-1>t)return;const i={text:a,link:`#${r}`};s===2?(o=i,n.push(i)):o&&(o.children||(o.children=[])).push(i)}),n}const Ye=e=>{const t=T(),{site:n,frontmatter:o}=A(),s=e.depth||1,a=o.value.sidebarDepth||1/0,r=t.data.headers,i=e.item.text,c=vo(n.value.base,e.item.link),u=e.item.children,_=_n(t,e.item.link),m=s<a?Je(_,u,r,s+1):null;return I("li",{class:"sidebar-link"},[I(c?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:c},i),m])};function vo(e,t){return t===void 0||t.startsWith("#")?t:mn(e,t)}function Je(e,t,n,o=1){return t&&t.length>0?I("ul",{class:"sidebar-links"},t.map(s=>I(Ye,{item:s,depth:o}))):e&&n?Je(!1,go(n),void 0,o):null}function go(e){return Qe(bo(e))}function bo(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Qe(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Qe(t.children):void 0}))}const wo={key:0,class:"sidebar-links"},ko=w({setup(e){const t=mo();return(n,o)=>l(t).length>0?(d(),p("ul",wo,[(d(!0),p(z,null,se(l(t),s=>(d(),S(l(Ye),{item:s},null,8,["item"]))),256))])):b("",!0)}});const $o=w({props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:D(["sidebar",{open:e.open}])},[g(Xe,{class:"nav"}),$(t.$slots,"sidebar-top",{},void 0,!0),g(ko),$(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var xo=x($o,[["__scopeId","data-v-83e92a68"]]);const yo=/bitbucket.org/;function Lo(){const{page:e,theme:t,frontmatter:n}=A(),o=h(()=>{const{repo:a,docsDir:r="",docsBranch:i="master",docsRepo:c=a,editLinks:u}=t.value,_=n.value.editLink!=null?n.value.editLink:u,{relativePath:m}=e.value;return!_||!m||!a?null:So(a,c,r,i,m)}),s=h(()=>t.value.editLinkText||"Edit this page");return{url:o,text:s}}function So(e,t,n,o,s){return yo.test(e)?Ao(e,t,n,o,s):Co(e,t,n,o,s)}function Co(e,t,n,o,s){return(ae(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${o}/`+(n?n.replace(U,"")+"/":"")+s}function Ao(e,t,n,o,s){return(ae(t)?t:e).replace(U,"")+`/src/${o}/`+(n?n.replace(U,"")+"/":"")+s+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}const Eo={class:"edit-link"},Po=["href"],To=w({setup(e){const{url:t,text:n}=Lo();return(o,s)=>(d(),p("div",Eo,[l(t)?(d(),p("a",{key:0,class:"link",href:l(t),target:"_blank",rel:"noopener noreferrer"},[oe(E(l(n))+" ",1),g(ce,{class:"icon"})],8,Po)):b("",!0)]))}});var No=x(To,[["__scopeId","data-v-1ed99556"]]);const Ro={key:0,class:"last-updated"},Io={class:"prefix"},Bo={class:"datetime"},Ho=w({setup(e){const{theme:t,page:n}=A(),o=h(()=>{const r=t.value.lastUpdated;return r!==void 0&&r!==!1}),s=h(()=>{const r=t.value.lastUpdated;return r===!0?"Last Updated":r}),a=q("");return B(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(r,i)=>l(o)?(d(),p("p",Ro,[f("span",Io,E(l(s))+":",1),f("span",Bo,E(a.value),1)])):b("",!0)}});var Mo=x(Ho,[["__scopeId","data-v-5797b537"]]);const Oo={class:"page-footer"},Do={class:"edit"},Uo={class:"updated"},jo=w({setup(e){return(t,n)=>(d(),p("footer",Oo,[f("div",Do,[g(No)]),f("div",Uo,[g(Mo)])]))}});var qo=x(jo,[["__scopeId","data-v-fb8d84c6"]]);function Wo(){const{page:e,theme:t}=A(),n=h(()=>Ge(ne(e.value.relativePath))),o=h(()=>{const c=ie(t.value.sidebar,n.value);return re(c)?Ke(c):[]}),s=h(()=>o.value.findIndex(c=>c.link===n.value)),a=h(()=>{if(t.value.nextLinks!==!1&&s.value>-1&&s.value<o.value.length-1)return o.value[s.value+1]}),r=h(()=>{if(t.value.prevLinks!==!1&&s.value>0)return o.value[s.value-1]}),i=h(()=>!!a.value||!!r.value);return{next:a,prev:r,hasLinks:i}}const zo={},Fo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Go=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Ko=[Go];function Vo(e,t){return d(),p("svg",Fo,Ko)}var Xo=x(zo,[["render",Vo]]);const Yo={},Jo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Qo=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Zo=[Qo];function es(e,t){return d(),p("svg",Jo,Zo)}var ts=x(Yo,[["render",es]]);const ns={key:0,class:"next-and-prev-link"},os={class:"container"},ss={class:"prev"},rs=["href"],as={class:"text"},is={class:"next"},cs=["href"],ls={class:"text"},us=w({setup(e){const{hasLinks:t,prev:n,next:o}=Wo();return(s,a)=>l(t)?(d(),p("div",ns,[f("div",os,[f("div",ss,[l(n)?(d(),p("a",{key:0,class:"link",href:l(H)(l(n).link)},[g(Xo,{class:"icon icon-prev"}),f("span",as,E(l(n).text),1)],8,rs)):b("",!0)]),f("div",is,[l(o)?(d(),p("a",{key:0,class:"link",href:l(H)(l(o).link)},[f("span",ls,E(l(o).text),1),g(ts,{class:"icon icon-next"})],8,cs)):b("",!0)])])])):b("",!0)}});var ds=x(us,[["__scopeId","data-v-38ede35f"]]);const fs={class:"page"},ps={class:"container"},hs=w({setup(e){return(t,n)=>{const o=Q("Content");return d(),p("main",fs,[f("div",ps,[$(t.$slots,"top",{},void 0,!0),g(o,{class:"content"}),g(qo),g(ds),$(t.$slots,"bottom",{},void 0,!0)])])}}});var _s=x(hs,[["__scopeId","data-v-7eddb2c4"]]);const ms={key:0,id:"ads-container"},vs=w({setup(e){const t=pe(()=>Z(()=>import("./Home.2a7ec628.js"),["assets/Home.2a7ec628.js","assets/plugin-vue_export-helper.7cf9b872.js"])),n=()=>null,o=n,s=n,a=pe(()=>Z(()=>import("./AlgoliaSearchBox.c6e63b22.js"),["assets/AlgoliaSearchBox.c6e63b22.js","assets/plugin-vue_export-helper.7cf9b872.js"])),r=T(),{site:i,page:c,theme:u,frontmatter:_}=A(),m=h(()=>!!_.value.customLayout),y=h(()=>!!_.value.home),k=h(()=>Object.keys(i.value.langs).length>1),L=h(()=>{const v=u.value;return _.value.navbar===!1||v.navbar===!1?!1:i.value.title||v.logo||v.repo||v.nav}),N=q(!1),tt=h(()=>_.value.home||_.value.sidebar===!1?!1:!bn(ie(u.value.sidebar,r.data.relativePath))),G=v=>{N.value=typeof v=="boolean"?v:!N.value},nt=G.bind(null,!1);W(r,nt);const ot=h(()=>[{"no-navbar":!L.value,"sidebar-open":N.value,"no-sidebar":!tt.value}]);return(v,le)=>{const st=Q("Content"),rt=Q("Debug");return d(),p(z,null,[f("div",{class:D(["theme",l(ot)])},[l(L)?(d(),S(co,{key:0,onToggle:G},{search:P(()=>[$(v.$slots,"navbar-search",{},()=>[l(u).algolia?(d(),S(l(a),{key:0,options:l(u).algolia,multilang:l(k)},null,8,["options","multilang"])):b("",!0)])]),_:3})):b("",!0),g(xo,{open:N.value},{"sidebar-top":P(()=>[$(v.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[$(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),f("div",{class:"sidebar-mask",onClick:le[0]||(le[0]=Is=>G(!1))}),l(m)?(d(),S(st,{key:1})):l(y)?$(v.$slots,"home",{key:2},()=>[g(l(t),null,{hero:P(()=>[$(v.$slots,"home-hero")]),features:P(()=>[$(v.$slots,"home-features")]),footer:P(()=>[$(v.$slots,"home-footer")]),_:3})]):(d(),S(_s,{key:3},{top:P(()=>[$(v.$slots,"page-top-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.carbon?(d(),p("div",ms,[(d(),S(l(o),{key:"carbon"+l(c).relativePath,code:l(u).carbonAds.carbon,placement:l(u).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),$(v.$slots,"page-top")]),bottom:P(()=>[$(v.$slots,"page-bottom"),$(v.$slots,"page-bottom-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.custom?(d(),S(l(s),{key:"custom"+l(c).relativePath,code:l(u).carbonAds.custom,placement:l(u).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),g(rt)],64)}}}),gs={class:"theme"},bs=f("h1",null,"404",-1),ws=["href"],ks=w({setup(e){const{site:t}=A(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function o(){return n[Math.floor(Math.random()*n.length)]}return(s,a)=>(d(),p("div",gs,[bs,f("blockquote",null,E(o()),1),f("a",{href:l(t).base,"aria-label":"go to home"},"Take me home.",8,ws)]))}}),Ze={Layout:vs,NotFound:ks},$s={setup(e){const{Layout:t}=Ze;return B(()=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(console.log("setting as dark"),document.body.classList.add("dark")),setTimeout(()=>{let n=document.body.classList.contains("dark")?"\u{1F506}":"\u{1F319}",o=document.getElementsByClassName("nav-links");if(o){let s=o[0];s&&s.insertAdjacentHTML("beforeend",`<div class="item" style="padding: 0 1.5rem;;cursor: pointer;" onclick="document.body.classList.toggle('dark'); this.innerHTML= document.body.classList.contains('dark') ? '\u{1F506}' : '\u{1F319}';"> ${n} </div>`),s=o[1],s&&s.insertAdjacentHTML("beforeend",`<div class="item" style="padding: 0 1.5rem;;cursor: pointer;" onclick="document.body.classList.toggle('dark'); this.innerHTML= document.body.classList.contains('dark') ? '\u{1F506}' : '\u{1F319}';"> ${n} </div>`)}},100)}),(n,o)=>(d(),S(l(t)))}};var xs=fe(K({},Ze),{Layout:$s}),j=K({},xs);const J=new Set,et=()=>document.createElement("link"),ys=e=>{const t=et();t.rel="prefetch",t.href=e,document.head.appendChild(t)},Ls=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let M;const Ss=C&&(M=et())&&M.relList&&M.relList.supports&&M.relList.supports("prefetch")?ys:Ls;function Cs(){if(!C||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(r=>{if(r.isIntersecting){const i=r.target;n.unobserve(i);const{pathname:c}=i;if(!J.has(c)){J.add(c);const u=ze(c);Ss(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:r,hostname:i,pathname:c}=a,u=c.match(/\.\w+$/);u&&u[0]!==".html"||r!=="_blank"&&i===location.hostname&&(c!==location.pathname?n.observe(a):J.add(c))})})};B(o);const s=T();W(()=>s.path,o),Ue(()=>{n&&n.disconnect()})}const As=w({setup(e,{slots:t}){const n=q(!1);return B(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),Es=j.NotFound||(()=>"404 Not Found"),Ps={name:"VitePressApp",setup(){const{site:e}=A();return B(()=>{W(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),Cs(),()=>I(j.Layout)}};function Ts(){const e=Rs(),t=Ns();t.provide(Fe,e);const n=nn(e.route);return t.provide(We,n),C&&cn(e.route,n.site),t.component("Content",dn),t.component("ClientOnly",As),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),j.enhanceApp&&j.enhanceApp({app:t,router:e,siteData:F}),{app:t,router:e}}function Ns(){return Vt(Ps)}function Rs(){let e=C,t;return rn(n=>{let o=ze(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),C?(e=!1,Z(()=>import(o),[])):require(o)},Es)}if(C){const{app:e,router:t}=Ts();t.go().then(()=>{e.mount("#app")})}export{Ae as N,T as a,an as b,Ts as createApp,A as u,H as w};
