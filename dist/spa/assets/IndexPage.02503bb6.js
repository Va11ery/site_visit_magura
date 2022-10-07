import{Q as a,a as _}from"./QCard.f26bf248.js";import{d as f,Q as p}from"./QBtn.3815c7dd.js";import{Q as x}from"./QCardActions.0b5d9658.js";import{Q as w}from"./QPage.1bae9a09.js";import{_ as v,F as y,G as i,H as b,I as s,K as t,J as e,L as n,M as u,N as h,O as r,Q as d,R as k,S as q}from"./index.45c696f8.js";import"./use-router-link.5a3cf3c2.js";import"./use-dark.de4a9c7a.js";const z=y({name:"IndexPage",methods:{callMail(){window.open("mailto:16lerochka@mail.ru","_self")}},data(){return{about_us:[{title:"200",text:"\u0428\u0422\u0410\u0422 \u041A\u0412\u0410\u041B\u0418\u0424\u0418\u0426\u0418\u0420\u041E\u0412\u0410\u041D\u041D\u042B\u0425 \u0421\u041E\u0422\u0420\u0423\u0414\u041D\u0418\u041A\u041E\u0412",icon:{name:"gpp_good",color:"warning"}},{title:"100",text:"\u041A\u041E\u041C\u041F\u0410\u041D\u0418\u0419 \u041D\u0410 \u041E\u0411\u0421\u041B\u0423\u0416\u0418\u0412\u0410\u041D\u0418\u0418",icon:{name:"business",color:"warning"}}],card_my_teams:[{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",icon:{name:"groups",color:"secondary"}},{title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",text:"\u0416/\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u043E\u043C, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0443\u0440",icon:{name:"safety_check",color:"blue-grey-10"}},{title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u042F\u0432\u043D\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0442\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",icon:{name:"admin_panel_settings",color:"indigo"}},{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",text:"\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",icon:{name:"groups",color:"secondary"}},{title:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438, \u043E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0434\u0435\u043D\u044C: \u043D\u0430 \u043D\u043E\u0447\u044C",icon:{name:"safety_check",color:"blue-grey-10"}},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",icon:{name:"admin_panel_settings",color:"indigo"}}],card_wat_is_me:[{title:"\u041A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B",text:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0427\u041E\u041E \u0438\u043C\u0435\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043E\u0445\u0440\u0430\u043D\u0435 \u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0435\u0436\u0435\u0433\u043E\u0434\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",icon:{name:"groups",color:"secondary"}},{title:"\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B",text:"\u041D\u0430\u0448\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0441\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0434\u043B\u044F \u0432\u0430\u0441 \u041A\u041F \u0438 \u043E\u0446\u0435\u043D\u044F\u0442 \u0432\u0430\u0448 \u043E\u0431\u044A\u0435\u043A\u0442 \u0432 \u0434\u0435\u043D\u044C \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F.",icon:{name:"safety_check",color:"blue-grey-10"}},{title:"\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",text:"\u0421 \u043A\u0430\u0436\u0434\u044B\u043C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0427\u041E\u041E \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0434\u043E\u0433\u043E\u0432\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438.",icon:{name:"admin_panel_settings",color:"indigo"}}]}}}),c=l=>(k("data-v-7c88483f"),l=l(),q(),l),Q={class:"container q-pt-xl q-pb-xl"},I=c(()=>t("div",{class:"text-overline text-teal",style:{"font-size":"35px"}}," \u0413\u0410\u0420\u0410\u041D\u0422\u0418\u042F \u0411\u0415\u0417\u041E\u041F\u0410\u0421\u041D\u041E\u0421\u0422\u0418! ",-1)),C=c(()=>t("div",{class:"card-oswald",style:{"font-size":"7vw","line-height":"7vw"}}," \u041E\u0411\u0415\u0421\u041F\u0415\u0427\u0418\u041C ",-1)),S=c(()=>t("div",{class:"card-oswald text-yellow",style:{"font-size":"7vw","line-height":"7vw",opacity:"80%"}}," \u0411\u0415\u0417\u041E\u041F\u0410\u0421\u041D\u041E\u0421\u0422\u042C ",-1)),B=c(()=>t("div",{class:"text-caption text-grey q-pt-xl",style:{"font-size":"16px"}}," \u0423\u0441\u043B\u0443\u0433\u0438 \u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043B\u0438\u0446 ",-1)),$=r("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 "),N={class:"bg-white ptb-100"},P={class:"container"},M=c(()=>t("div",{class:"card-oswald q-pb-xl",style:{"font-size":"6vw","line-height":"6vw","font-weight":"700"}}," \u041F\u041E\u0427\u0415\u041C\u0423 \u041C\u042B? ",-1)),V={class:"row q-col-gutter-lg q-pt-xl"},F={class:"text-h6"},L={class:"container text-white ptb-100"},A=c(()=>t("div",{class:"card-oswald q-pb-xl",style:{"font-size":"6vw","line-height":"6vw","font-weight":"700"}}," \u041E \u041D\u0410\u0421 ",-1)),D=r("\u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u043E\u0442 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u0438 \u0441\u0440\u0435\u0434\u0438 \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0435\u0441\u0442\u044C \u0441\u0435\u0442\u0435\u0432\u044B\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u0444\u0438\u043B\u0438\u0430\u043B\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0430\u043D\u043A\u043E\u0432, \u043E\u0444\u0438\u0441\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u0438. \u041D\u0430\u0448 \u043E\u043F\u044B\u0442, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0438\u0445 \u043E\u0442\u0437\u044B\u0432\u044B \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0441\u0430\u043C\u0438 \u0437\u0430 \u0441\u0435\u0431\u044F. \u041C\u044B \u043D\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0431\u044B\u0432\u0430\u0435\u043C \u043F\u043E \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0437\u0432\u043E\u043D\u043A\u0443 \u0438 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u043D\u043E \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u0430, \u043C\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u043E\u043C, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u044B, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0439 \u0438 \xAB\u0422\u0440\u0435\u0432\u043E\u0436\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A\xBB."),E={class:"row q-col-gutter-lg"},G=c(()=>t("div",{class:"bg-white ptb-100"},[t("div",{class:"container"},[t("div",{class:"card-oswald q-pb-xl",style:{"font-size":"6vw","line-height":"6vw","font-weight":"700"}}," \u041D\u0410\u0428\u0410 \u041A\u041E\u041C\u0410\u041D\u0414\u0410 "),t("div",{class:"row q-col-gutter-xl q-pt-xl",style:{"font-size":"20px","font-weight":"500"}},[t("div",{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-6"}," \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u0443\u044E \u043E\u0445\u0440\u0430\u043D\u0443 \u0432\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043D\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u043E\u0437\u044C\u043C\u0435\u0442 \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0433\u0440\u0443\u0437\u043E\u0432, \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043E\u0444\u0438\u0441\u043E\u0432, \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0438 \u0434\u0440. \u0422\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424. "),t("div",{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-6"}," \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043E\u0444\u0438\u0441\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0442 \u0441\u0432\u043E\u044E \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438. \u041D\u0430\u0448\u0438 \u043E\u0445\u0440\u0430\u043D\u043D\u0438\u043A\u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0442 \u0441\u0432\u043E\u044E \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0434\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u0432\u043E\u0438\u0445 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u0443\u043C\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433. ")])])],-1)),H={class:"container text-white ptb-100"},J=c(()=>t("div",{class:"card-oswald q-pb-xl",style:{"font-size":"6vw","line-height":"6vw","font-weight":"700"}}," \u0427\u0422\u041E \u041C\u042B \u041F\u0420\u0415\u0414\u041B\u0410\u0413\u0410\u0415\u041C ",-1)),K={class:"row q-col-gutter-xl q-pt-xl"},O={class:"text-h6",style:{}};function R(l,g,T,j,U,W){return i(),b(w,{class:"bg-dark"},{default:s(()=>[t("div",Q,[e(_,{class:"card border-right bg-dark",flat:"",bordered:"",dark:""},{default:s(()=>[e(a,{class:"q-pt-xl"},{default:s(()=>[I,C,S,B]),_:1}),e(x,{class:"q-pb-xl"},{default:s(()=>[e(f,{outline:"",color:"secondary",style:{width:"300px"},size:"lg",onClick:g[0]||(g[0]=o=>l.callMail())},{default:s(()=>[$]),_:1})]),_:1})]),_:1})]),t("div",N,[t("div",P,[M,t("div",V,[(i(!0),n(h,null,u(l.card_wat_is_me,(o,m)=>(i(),n("div",{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-4",key:m},[e(_,{class:"my-card"},{default:s(()=>[e(p,{name:o.icon.name,size:"8rem",style:{width:"100%"},color:o.icon.color},null,8,["name","color"]),e(a,null,{default:s(()=>[t("div",F,d(o.title),1)]),_:2},1024),e(a,null,{default:s(()=>[r(d(o.text),1)]),_:2},1024)]),_:2},1024)]))),128))])])]),t("div",L,[A,e(_,{class:"card",flat:"",dark:""},{default:s(()=>[e(a,{style:{"font-size":"16px",opacity:"70%"}},{default:s(()=>[D]),_:1}),t("div",E,[(i(!0),n(h,null,u(l.about_us,o=>(i(),n("div",{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-4 about_us_card-center",key:o},[e(p,{name:o.icon.name,size:"8rem",color:o.icon.color},null,8,["name","color"]),e(a,{class:"card-oswald",style:{"font-size":"5vw","line-height":"5vw","font-weight":"700"}},{default:s(()=>[r(d(o.title),1)]),_:2},1024),e(a,{class:"card-oswald",style:{"font-size":"20px","font-weight":"500"}},{default:s(()=>[r(d(o.text),1)]),_:2},1024)]))),128))])]),_:1})]),G,t("div",H,[J,t("div",K,[(i(!0),n(h,null,u(l.card_my_teams,(o,m)=>(i(),n("div",{class:"col col-xs-12 col-sm-6 col-md-6 col-lg-4",key:m},[e(_,{class:"my-card bg-grey-10",dark:"",flat:""},{default:s(()=>[e(p,{name:o.icon.name,size:"8rem",style:{width:"100%"},color:o.icon.color},null,8,["name","color"]),e(a,null,{default:s(()=>[t("div",O,d(o.title),1)]),_:2},1024),e(a,null,{default:s(()=>[r(d(o.text),1)]),_:2},1024)]),_:2},1024)]))),128))])])]),_:1})}var lt=v(z,[["render",R],["__scopeId","data-v-7c88483f"]]);export{lt as default};