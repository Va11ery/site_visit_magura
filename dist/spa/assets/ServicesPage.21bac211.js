import{c as g,r as c,e as I,o as M,h as i,v as P,_ as R,G as L,L as H,M as V,N as r,Q as m,X as O,O as o,V as E}from"./index.6fb259c0.js";import{h as F,d as G}from"./QBtn.2db9be15.js";import{c as A,d as D}from"./use-router-link.60f82448.js";import{Q as _,a as U}from"./QCard.f701daaa.js";import{Q as W}from"./QCardActions.6145d140.js";import{Q as X}from"./QPage.da458dd8.js";import"./use-dark.48a7a144.js";const J={ratio:[String,Number]};function K(e,t){return g(()=>{const l=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const Y=16/9;var Z=A({name:"QImg",props:{...J,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Y},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:l}){const v=c(e.initialRatio),h=K(e,v);let s;const a=[c(null),c(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],b=c(0),d=c(!1),p=c(!1),q=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=g(()=>({width:e.width,height:e.height})),Q=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>S(),y);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function y(n){if(clearTimeout(s),p.value=!1,n===null){d.value=!1,a[0].value=null,a[1].value=null;return}d.value=!0,a[b.value].value=n}function N({target:n}){s!==null&&(clearTimeout(s),v.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,w(n,1))}function w(n,u){s===null||u===1e3||(n.complete===!0?k(n):s=setTimeout(()=>{w(n,u+1)},50))}function k(n){s!==null&&(b.value=b.value===1?0:1,a[b.value].value=null,d.value=!1,p.value=!1,l("load",n.currentSrc||n.src))}function B(n){clearTimeout(s),d.value=!1,p.value=!0,a[0].value=null,a[1].value=null,l("error",n)}function $(n,u){return i("div",{class:"q-img__container absolute-full",key:n},u)}function x(n){const u=a[n].value,f={key:"img_"+n,class:Q.value,style:T.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...u};return b.value===n?(f.class+=" q-img__image--waiting",Object.assign(f,{onLoad:N,onError:B})):f.class+=" q-img__image--loaded",$("img"+n,i("img",f))}function j(){return d.value!==!0?i("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},D(t[p.value===!0?"error":"default"])):i("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[i(F,{color:e.spinnerColor,size:e.spinnerSize})])}return y(S()),M(()=>{clearTimeout(s),s=null}),()=>{const n=[];return h.value!==null&&n.push(i("div",{key:"filler",style:h.value})),p.value!==!0&&(a[0].value!==null&&n.push(x(0)),a[1].value!==null&&n.push(x(1))),n.push(i(P,{name:"q-transition--fade"},j)),i("div",{class:q.value,style:z.value,role:"img","aria-label":e.alt},n)}}}),ee="/assets/sec.c25d466f.jpg",C="/assets/objects.81feb17b.jpg",ne="/assets/oxrana_gruza.187d5b79.png";const te=L({name:"ServicesPage",data(){return{dialog:!1,data:[{path:"objects",title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",img:C,text:"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u041E\u041E\u041E \xAB\u041E\u041E \xAB\u041C\u0430\u0433\u0443\u0440\u0430\xBB \u0433\u043E\u0442\u043E\u0432\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430, \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C\u0438.  \u0418\u0445 \u043E\u0431\u0443\u0447\u0430\u044E\u0442 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044E \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u043D\u0430\u0432\u044B\u043A\u0430\u043C \u043F\u0441\u0438\u0445\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0430, \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0439 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u0438, \u0447\u0442\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043D\u0430\u0434\u0435\u0436\u043D\u0443\u044E \u043E\u0445\u0440\u0430\u043D\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432. <br /> <br /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u0412 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u0445\u0440\u0430\u043D\u043D\u0438\u043A\u043E\u0432 \u0432\u0445\u043E\u0434\u0438\u0442: <br  /> - \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435;  <br  /> -  \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438;  <br  /> - \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u043E\u0441\u043C\u043E\u0442\u0440 \u043B\u044E\u0434\u0435\u0439 \u043D\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u043D\u044B\u0445 \u043F\u0443\u043D\u043A\u0442\u0430\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439;  <br  /> - \u043E\u0444\u0438\u0441\u043D\u044B\u0445 \u0437\u0434\u0430\u043D\u0438\u0439, \u0444\u0438\u0440\u043C.  <br  /> <br />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u0418\u0445 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0417\u0430\u043A\u043E\u043D\u0443 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043E\u0442 11.03.1992 \u2116 2487-1 \xAB\u041E \u0447\u0430\u0441\u0442\u043D\u043E\u0439 \u0434\u0435\u0442\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0438 \u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438\xBB."},{path:"cargo",title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",img:ne,text:" &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;\u041C\u044B  \u0442\u0430\u043A\u0436\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u043C\u0435\u0441\u0442\u043D\u044B\u0445 \u0438 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u0438\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A \u0433\u0440\u0443\u0437\u0430.  <br  /> \u0412 \u043D\u0430\u0448\u0435\u0439  \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0430 \u0443\u0441\u043B\u0443\u0433 \u0440\u0435\u0448\u0430\u044E\u0442\u0441\u044F \u0437\u0430\u0434\u0430\u0447\u0438, \u043A\u0430\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0433\u0440\u0443\u0437\u0430, \u0442\u0430\u043A \u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433.   \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043E\u0445\u0440\u0430\u043D\u044B, \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u043C\u0438 \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u044D\u0442\u0438\u0445 \u0437\u0430\u0434\u0430\u0447, \u0438\u043C\u0435\u044E\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0443\u044E \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0438 \u043E\u043F\u044B\u0442. <br  /><br  /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;\u041F\u0440\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0438 \u0433\u0440\u0443\u0437\u0430 \u043F\u043E\u0434 \u043E\u0445\u0440\u0430\u043D\u0443 \u0432 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0430\u043A\u0442 \u043F\u0440\u0438\u0451\u043C\u0430, \u043A\u0443\u0434\u0430 \u0432\u043F\u0438\u0441\u0430\u043D\u044B \u0432\u0441\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F.  \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0433\u0440\u0443\u0437\u0430.   \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0441\u043D\u0430\u0449\u0435\u043D \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C.  <br  /> <br  />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u043E\u0445\u0440\u0430\u043D\u044B \u0432 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D GPS-\u0442\u0440\u0435\u043A\u0435\u0440\u043E\u043C \u0441 \u0432\u044B\u0432\u043E\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0448 \u043F\u0443\u043B\u044C\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u044D\u0442\u043E\u0433\u043E \u0436\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u043E\u0445\u0440\u0430\u043D\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0434\u0430\u0442\u044C \u0441\u0438\u0433\u043D\u0430\u043B \xAB\u0422\u0440\u0435\u0432\u043E\u0433\u0430\xBB \u0432 \u043D\u0430\u0448\u0443 \u0434\u0435\u0436\u0443\u0440\u043D\u0443\u044E \u0447\u0430\u0441\u0442\u044C."},{path:"personal",title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",img:ee,text:"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u0442\u0430\u043A\u0436\u0435 \u0432\u0441\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u0438\u043A\u0438 \u0432\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u044B \u043E\u0433\u043D\u0435\u0441\u0442\u0440\u0435\u043B\u044C\u043D\u044B\u043C \u043E\u0440\u0443\u0436\u0438\u0435\u043C. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u043B\u0438\u0446\u0430, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A\u043E\u0433\u043E \u0440\u043E\u0434\u0430 \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043C\u043E\u0436\u0435\u0442 \u0435\u043C\u0443 \u0443\u0433\u0440\u043E\u0436\u0430\u0442\u044C \u2013 \u0446\u0435\u043B\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043A\u0443\u0448\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0444\u043E\u0440\u0441-\u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0435 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430. <br  /><br /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u0412 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u041E\u041E \xAB\u041C\u0430\u0433\u0443\u0440\u0430\xBB \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044F: <br /> - \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u0447\u0430\u0441; <br> - \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435; <br > - \u043B\u0438\u0447\u043D\u044B\u0439 \u043E\u0445\u0440\u0430\u043D\u043D\u0438\u043A \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432 \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443; <br>- \u043E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u043E\u0440\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439."},{path:"events",title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",img:C,text:"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u041E\u0445\u0440\u0430\u043D\u0430 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E-\u043C\u0430\u0441\u0441\u043E\u0432\u044B\u0445 \u0438 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E-\u043C\u0430\u0441\u0441\u043E\u0432\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0446\u0435\u043B\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u0435\u0440, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u043E\u0445\u0440\u0430\u043D\u0435 \u043C\u0430\u0441\u0441\u043E\u0432\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043B\u044E\u0431\u043E\u0433\u043E \u0442\u0438\u043F\u0430. <br  /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C: <br  /> - \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430, <br  /> - \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0433\u043E\u0441\u0442\u0435\u0439 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, <br  /> - \u043D\u0435\u043F\u0440\u0438\u043A\u043E\u0441\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u0445 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435 \u0438 \u041B\u0435\u043D\u043E\u0431\u043B\u0430\u0441\u0442\u0438. <br  />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0433\u0440\u0443\u043F\u043F\u0443 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043E\u0445\u0440\u0430\u043D\u043D\u0438\u043A\u043E\u0432 \u0438 \u0441\u043F\u0435\u0446\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442. <br  />  \u041E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u0432\u044B\u0441\u0448\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u0438 \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E-\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430, \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044E \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439, \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0430, \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439, \u0443\u0433\u0440\u043E\u0436\u0430\u044E\u0449\u0438\u0445 \u0436\u0438\u0437\u043D\u0438, \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044E \u0438 \u0445\u043E\u0440\u043E\u0448\u0435\u043C\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044E \u0433\u043E\u0441\u0442\u0435\u0439 \u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430. <br  /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u043C \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044E. <br  />\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0445\u0440\u0430\u043D\u044B \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044E \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u043E\u043C. \u041E\u0441\u0442\u0430\u0435\u043C\u0441\u044F \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0438 \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0435 \u0440\u044B\u043D\u043A\u0430 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0438 \u0433\u043E\u0442\u043E\u0432\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0445\u0440\u0430\u043D\u0443 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0412\u0430\u0448\u0435\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438."}]}},computed:{getInfo(){var e;return(e=this.data.filter(t=>t.path===this.$route.name)[0])!=null?e:""}},methods:{callMail(){window.open("mailto:foton024@yandex.ru","_self")}}}),se={class:"container"},ae={class:"ptb-100"},ie={class:"card-oswald text-dark text-center adaptive-title",style:{"font-size":"3vw","line-height":"3vw","font-weight":"700","text-transform":"uppercase"}},le=["innerHTML"],re=E(" \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ");function oe(e,t,l,v,h,s){return H(),V(X,{class:"bg-white"},{default:r(()=>[m("div",se,[m("div",ae,[m("div",ie,O(e.getInfo.title),1)]),o(U,{class:"my-card",flat:""},{default:r(()=>[o(_,{class:"row q-col-gutter-xl q-pt-xl"},{default:r(()=>[o(_,{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-6"},{default:r(()=>[o(Z,{class:"rounded-borders",src:e.getInfo.img},null,8,["src"])]),_:1}),o(_,{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-6"},{default:r(()=>[m("div",{class:"item-caption text-dark",innerHTML:e.getInfo.text},null,8,le)]),_:1})]),_:1}),o(W,{class:"q-pa-md"},{default:r(()=>[o(G,{outline:"",color:"secondary",style:{width:"300px"},size:"lg",onClick:t[0]||(t[0]=a=>e.callMail())},{default:r(()=>[re]),_:1})]),_:1})]),_:1})])]),_:1})}var me=R(te,[["render",oe],["__scopeId","data-v-e316400a"]]);export{me as default};
