import{c as s,h as g,g as N,q as ee,Q as fe,i as z,u as ve,v as ge,R as te,A as me,r as V,o as be,w as he,s as w,B as ye,l as pe}from"./index.54e90cd4.js";import{c as I,a as ke,d as j,e as xe}from"./render.3dcdf4e4.js";const K={xs:18,sm:24,md:32,lg:38,xl:46},ne={size:String};function ae(e,n=K){return s(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const F="0 0 24 24",H=e=>e,A=e=>`ionicons ${e}`,re={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":A,"ion-ios":A,"ion-logo":A,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},ue={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(re).join("|")+")"),$e=new RegExp("^("+Object.keys(ie).join("|")+")"),D=new RegExp("^("+Object.keys(ue).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,Re=/^svguse:/,we=/^ion-/,Be=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var U=I({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=N(),u=ae(e),l=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),c=s(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const v=t.iconMapFn(a);if(v!==void 0)if(v.icon!==void 0){if(a=v.icon,a==="none"||!a)return{none:!0}}else return{cls:v.cls,content:v.content!==void 0?v.content:" "}}if(Ee.test(a)===!0){const[v,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:v.split("&&").map(p=>{const[r,k,h]=p.split("@@");return g("path",{style:k,d:r,transform:h})})}}if(Se.test(a)===!0)return{img:!0,src:a.substring(4)};if(Re.test(a)===!0){const[v,y=F]=a.split("|");return{svguse:!0,src:v.substring(7),viewBox:y}}let b=" ";const $=a.match(qe);if($!==null)o=re[$[1]](a);else if(Be.test(a)===!0)o=a;else if(we.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(D.test(a)===!0){o="notranslate material-symbols";const v=a.match(D);v!==null&&(a=a.substring(6),o+=ue[v[1]]),b=a}else{o="notranslate material-icons";const v=a.match($e);v!==null&&(a=a.substring(2),o+=ie[v[1]]),b=a}return{cls:o,content:b}});return()=>{const o={class:l.value,style:u.value,"aria-hidden":"true",role:"presentation"};return c.value.none===!0?g(e.tag,o,ke(n.default)):c.value.img===!0?g("span",o,j(n.default,[g("img",{src:c.value.src})])):c.value.svg===!0?g("span",o,j(n.default,[g("svg",{viewBox:c.value.viewBox||"0 0 24 24"},c.value.nodes)])):c.value.svguse===!0?g("span",o,j(n.default,[g("svg",{viewBox:c.value.viewBox},[g("use",{"xlink:href":c.value.src})])])):(c.value.cls!==void 0&&(o.class+=" "+c.value.cls),g(e.tag,o,j(n.default,[c.value.content])))}}});function Ge(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Le(e){return e.appContext.config.globalProperties.$router!==void 0}function W(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function X(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function _e(e,n){for(const t in n){const u=n[t],l=e[t];if(typeof u=="string"){if(u!==l)return!1}else if(Array.isArray(l)===!1||l.length!==u.length||u.some((c,o)=>c!==l[o]))return!1}return!0}function Y(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ce(e,n){return Array.isArray(e)===!0?Y(e,n):Array.isArray(n)===!0?Y(n,e):e===n}function Pe(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ce(e[t],n[t])===!1)return!1;return!0}const Te={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function je(e){const n=N(),{props:t,proxy:u}=n,l=Le(n),c=s(()=>t.disable!==!0&&t.href!==void 0),o=s(()=>l===!0&&t.disable!==!0&&c.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=s(()=>{if(o.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),b=s(()=>a.value!==null),$=s(()=>c.value===!0||b.value===!0),v=s(()=>t.type==="a"||$.value===!0?"a":t.tag||e||"div"),y=s(()=>c.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:a.value.href,target:t.target}:{}),p=s(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const E=u.$route.matched;if(E.length===0)return-1;const C=E.findIndex(X.bind(null,R));if(C>-1)return C;const O=W(f[x-2]);return x>1&&W(R)===O&&E[E.length-1].path!==O?E.findIndex(X.bind(null,f[x-2])):C}),r=s(()=>b.value===!0&&p.value>-1&&_e(u.$route.params,a.value.params)),k=s(()=>r.value===!0&&p.value===u.$route.matched.length-1&&Pe(u.$route.params,a.value.params)),h=s(()=>b.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function d(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(ee(f),u.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:c,hasLink:$,linkTag:v,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:h,linkProps:y,navigateToRouterLink:d}}function Oe(e,n){const t=e.style;for(const u in n)t[u]=n[u]}function Je(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=fe(e)===!0?e.value:e;if(n)return n.$el||n}function Ze(e,n){if(e==null||e.contains(n)===!0)return!0;for(let t=e.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(n))return!0;return!1}function Me(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function G(e,n,t,u){t.modifiers.stop===!0&&te(e);const l=t.modifiers.color;let c=t.modifiers.center;c=c===!0||u===!0;const o=document.createElement("span"),a=document.createElement("span"),b=me(e),{left:$,top:v,width:y,height:p}=n.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,h=`${(y-r)/2}px`,d=c?h:`${b.left-$-k}px`,f=`${(p-r)/2}px`,x=c?f:`${b.top-v-k}px`;a.className="q-ripple__inner",Oe(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${d},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),n.appendChild(o);const R=()=>{o.remove(),clearTimeout(E)};t.abort.push(R);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(R),1)},275)},250)},50)}function J(e,{modifiers:n,value:t,arg:u}){const l=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||u,keyCodes:[].concat(l.keyCodes||13)}}var Ae=xe({name:"ripple",beforeMount(e,n){const t=n.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const u={cfg:t,enabled:n.value!==!1,modifiers:{},abort:[],start(l){u.enabled===!0&&l.qSkipRipple!==!0&&l.type===(u.modifiers.early===!0?"pointerdown":"click")&&G(l,e,u,l.qKeyEvent===!0)},keystart:Me(l=>{u.enabled===!0&&l.qSkipRipple!==!0&&z(l,u.modifiers.keyCodes)===!0&&l.type===`key${u.modifiers.early===!0?"down":"up"}`&&G(l,e,u,!0)},300)};J(u,n),e.__qripple=u,ve(u,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t!==void 0&&(t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&J(t,n))}},beforeUnmount(e){const n=e.__qripple;n!==void 0&&(n.abort.forEach(t=>{t()}),ge(n,"main"),delete e._qripple)}});const ze={size:{type:[Number,String],default:"1em"},color:String};function Ke(e){return{cSize:s(()=>e.size in K?`${K[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ne=I({name:"QSpinner",props:{...ze,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=Ke(e);return()=>g("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const le={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ie=Object.keys(le),Qe={align:{type:String,validator:e=>Ie.includes(e)}};function Ve(e){return s(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${le[n]}`})}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fe={xs:8,sm:10,md:14,lg:20,xl:24},He=["button","submit","reset"],De=/[^\s]\/[^\s]/,Ue={...ne,...Te,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Qe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function We(e){const n=ae(e,Fe),t=Ve(e),{hasRouterLink:u,hasLink:l,linkTag:c,linkProps:o,navigateToRouterLink:a}=je("button"),b=s(()=>{const d=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):d}),$=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>v.value===!0?e.tabindex||0:-1),p=s(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=s(()=>{const d={tabindex:y.value};return l.value===!0?Object.assign(d,o.value):He.includes(e.type)===!0&&(d.type=e.type),c.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),u.value!==!0&&De.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),k=s(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${f}`+(d!==void 0?" "+d:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),h=s(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:b,innerClasses:h,attributes:r,hasRouterLink:u,hasLink:l,linkTag:c,navigateToRouterLink:a,isActionable:v}}const{passiveCapture:q}=pe;let B=null,L=null,_=null;var et=I({name:"QBtn",props:{...Ue,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=N(),{classes:l,style:c,innerClasses:o,attributes:a,hasRouterLink:b,hasLink:$,linkTag:v,navigateToRouterLink:y,isActionable:p}=We(e),r=V(null),k=V(null);let h=null,d,f;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=s(()=>({center:e.round})),C=s(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),O=s(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:Q,onKeydown:oe,onMousedown:de,onTouchstart:ce}:{onClick:w}),se=s(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:c.value,...a.value,...O.value}));function Q(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,q),r.value!==null&&r.value.removeEventListener("blur",M,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,q),r.value.addEventListener("blur",M,q)}}if(b.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};t("click",i,m),i.defaultPrevented!==!0&&m()}else t("click",i)}}function oe(i){r.value!==null&&(t("keydown",i),z(i,[13,32])===!0&&L!==r.value&&(L!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),L=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,q)),w(i)))}function ce(i){r.value!==null&&(t("touchstart",i),i.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&P(),B=r.value,h=i.target,h.addEventListener("touchcancel",S,q),h.addEventListener("touchend",S,q)),d=!0,clearTimeout(f),f=setTimeout(()=>{d=!1},200)))}function de(i){r.value!==null&&(i.qSkipRipple=d===!0,t("mousedown",i),i.defaultPrevented!==!0&&_!==r.value&&(_!==null&&P(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,q)))}function S(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(L===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&ee(m),i.cancelBubble===!0&&te(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}t("keyup",i)}P()}}function P(i){const m=k.value;i!==!0&&(B===r.value||_===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(h!==null&&(h.removeEventListener("touchcancel",S,q),h.removeEventListener("touchend",S,q)),B=h=null),_===r.value&&(document.removeEventListener("mouseup",S,q),_=null),L===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,q),L=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return be(()=>{P(!0)}),Object.assign(u,{click:Q}),()=>{let i=[];e.icon!==void 0&&i.push(g(U,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(g("span",{class:"block"},[e.label])),i=j(n.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(g(U,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},i)),e.loading!==null&&m.push(g(ye,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[g(Ne)])]:null)),he(g(v.value,se.value,m),[[Ae,R.value,void 0,E.value]])}}});export{U as Q,Ae as R,ae as a,Te as b,je as c,Je as d,Oe as e,Ze as f,Ge as g,et as h,Qe as i,Ve as j,ne as u,Le as v};