(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"da/E":function(n,t,e){"use strict";e.r(t);var i=e("8Y7J"),o=e("mrSG");class l{constructor(){this.slidesOpts=[{id:1,title:"Aprenda a logar de maneira r\xe1pida e f\xe1cil",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"/assets/imgs/onboard/img-1.png"},{id:2,title:"Realize o jogo escolhendo seus n\xfameros ou animal da sorte",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"/assets/imgs/onboard/img-2.png"},{id:3,title:"Confie na sua sorte, comece apostando agora e aumente suas chances",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"/assets/imgs/onboard/img-3.png"}],this.slidesParams={spaceBetween:0,autoplay:!1,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}},this.activeSlide=1}ngOnInit(){return o.a(this,void 0,void 0,(function*(){console.log("ngOnInit - > OnboardPage"),this.slider.ionSlideDidChange.subscribe(()=>o.a(this,void 0,void 0,(function*(){this.activeSlide=(yield this.slider.getActiveIndex())+1})))}))}ionViewWillEnter(){setTimeout(()=>{},1e3)}slideTo(n){this.slider.slideTo(n-1,300)}goSlide(){this.slider.slideNext(300)}}class a{}var c=e("pMnS"),s=e("MKJQ"),d=e("SVse"),r=e("sZkV"),g=e("iInd"),f=i.nb({encapsulation:0,styles:[['@charset "UTF-8";*[_ngcontent-%COMP%]{font-family:Rawline,sans-serif;font-size:100%}@-webkit-keyframes fadein-lista{from{-webkit-transform:translate3d(0,-25px,0);transform:translate3d(0,-25px,0);opacity:0}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes fadein-lista{from{-webkit-transform:translate3d(0,-25px,0);transform:translate3d(0,-25px,0);opacity:0}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}.fadein-lista[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]{opacity:0;-webkit-animation:.35s linear forwards fadein-lista;animation:.35s linear forwards fadein-lista}.fadein-lista[_ngcontent-%COMP%]:nth-child(1), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(1), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:.15s;animation-delay:.15s}.fadein-lista[_ngcontent-%COMP%]:nth-child(2), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(2), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.fadein-lista[_ngcontent-%COMP%]:nth-child(3), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(3), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.45s;animation-delay:.45s}.fadein-lista[_ngcontent-%COMP%]:nth-child(4), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(4), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:.6s;animation-delay:.6s}.fadein-lista[_ngcontent-%COMP%]:nth-child(5), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(5), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:.75s;animation-delay:.75s}.fadein-lista[_ngcontent-%COMP%]:nth-child(6), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(6), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:.9s;animation-delay:.9s}.fadein-lista[_ngcontent-%COMP%]:nth-child(7), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(7), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:1.05s;animation-delay:1.05s}.fadein-lista[_ngcontent-%COMP%]:nth-child(8), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(8), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:1.2s;animation-delay:1.2s}.fadein-lista[_ngcontent-%COMP%]:nth-child(9), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(9), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:1.35s;animation-delay:1.35s}.fadein-lista[_ngcontent-%COMP%]:nth-child(10), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(10), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:1.5s;animation-delay:1.5s}.fadein-lista[_ngcontent-%COMP%]:nth-child(11), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(11), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(11){-webkit-animation-delay:1.65s;animation-delay:1.65s}.fadein-lista[_ngcontent-%COMP%]:nth-child(12), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(12), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(12){-webkit-animation-delay:1.8s;animation-delay:1.8s}.fadein-lista[_ngcontent-%COMP%]:nth-child(13), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(13), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(13){-webkit-animation-delay:1.95s;animation-delay:1.95s}.fadein-lista[_ngcontent-%COMP%]:nth-child(14), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(14), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(14){-webkit-animation-delay:2.1s;animation-delay:2.1s}.fadein-lista[_ngcontent-%COMP%]:nth-child(15), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(15), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(15){-webkit-animation-delay:2.25s;animation-delay:2.25s}.fadein-lista[_ngcontent-%COMP%]:nth-child(16), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(16), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(16){-webkit-animation-delay:2.4s;animation-delay:2.4s}.fadein-lista[_ngcontent-%COMP%]:nth-child(17), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(17), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(17){-webkit-animation-delay:2.55s;animation-delay:2.55s}.fadein-lista[_ngcontent-%COMP%]:nth-child(18), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(18), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(18){-webkit-animation-delay:2.7s;animation-delay:2.7s}.fadein-lista[_ngcontent-%COMP%]:nth-child(19), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%]:nth-child(19), ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]:nth-child(19){-webkit-animation-delay:2.85s;animation-delay:2.85s}@keyframes entrada{0%{opacity:0;-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes entrada{0%{opacity:0;-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}100%{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes flickerAnimation{0%,100%{opacity:1}50%{opacity:0}}@keyframes flickerAnimation{0%,100%{opacity:1}50%{opacity:0}}@-webkit-keyframes animTexto{0%,25%{opacity:0;-webkit-transform:translateX(-300px);transform:translateX(-300px)}100%,75%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes animTexto{0%,25%{opacity:0;-webkit-transform:translateX(-300px);transform:translateX(-300px)}100%,75%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideDownOpacity{from{bottom:-600px;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}to{bottom:0;-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownOpacity{from{bottom:-200px;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}to{bottom:0;-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideLeft{from{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideLeft{from{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slideDown{from{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideDown{from{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}ion-content[_ngcontent-%COMP%]{--background:#18614b}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%}ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{padding:22px 16px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start;background-position:center;background-size:cover;background-repeat:no-repeat}ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80%;text-align:left;color:var(--ion-color-white);opacity:0}ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1.fade-in[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p.fade-in[_ngcontent-%COMP%]{opacity:0}ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;font-weight:600;line-height:32px;letter-spacing:-.33px}ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;letter-spacing:-.16px;line-height:20px}ion-content[_ngcontent-%COMP%]   .slide-actions[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;right:0;margin:0;width:100%;padding:16px}ion-content[_ngcontent-%COMP%]   .slide-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:120px;--box-shadow:0 2px 19px 0 #E2D6C5}ion-content[_ngcontent-%COMP%]   .slides-pager[_ngcontent-%COMP%]{top:-30px;left:16px;position:absolute;z-index:1000;height:20px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}ion-content[_ngcontent-%COMP%]   .slides-pager[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%]{margin:0 6px;width:14px;height:6px;opacity:.5;background-color:var(--ion-color-white);border-radius:3px}ion-content[_ngcontent-%COMP%]   .slides-pager[_ngcontent-%COMP%]   .bullet.active[_ngcontent-%COMP%]{width:34px;opacity:1;-webkit-animation:.3s forwards grow-forward;animation:.3s forwards grow-forward}']],data:{}});function b(n){return i.Hb(0,[(n()(),i.pb(0,0,null,null,14,"ion-slide",[],null,null,null,s.Y,s.w)),i.Db(512,null,d.u,d.v,[i.k,i.r,i.B]),i.ob(2,278528,null,0,d.m,[d.u],{ngStyle:[0,"ngStyle"]},null),i.Cb(3,{"background-image":0}),i.ob(4,49152,null,0,r.mb,[i.h,i.k,i.x],null,null),(n()(),i.pb(5,0,null,0,4,"h1",[],null,null,null,null,null)),i.Db(512,null,d.s,d.t,[i.q,i.r,i.k,i.B]),i.ob(7,278528,null,0,d.h,[d.s],{ngClass:[0,"ngClass"]},null),i.Cb(8,{"fade-in":0}),(n()(),i.Gb(9,null,["",""])),(n()(),i.pb(10,0,null,0,4,"p",[],null,null,null,null,null)),i.Db(512,null,d.s,d.t,[i.q,i.r,i.k,i.B]),i.ob(12,278528,null,0,d.h,[d.s],{ngClass:[0,"ngClass"]},null),i.Cb(13,{"fade-in":0}),(n()(),i.Gb(14,null,["",""]))],(function(n,t){var e=t.component,i=n(t,3,0,"url("+t.context.$implicit.image+")");n(t,2,0,i);var o=n(t,8,0,t.context.$implicit.id===e.activeSlide);n(t,7,0,o);var l=n(t,13,0,t.context.$implicit.id===e.activeSlide);n(t,12,0,l)}),(function(n,t){n(t,9,0,t.context.$implicit.title),n(t,14,0,t.context.$implicit.message)}))}function u(n){return i.Hb(0,[(n()(),i.pb(0,0,null,null,3,"div",[["class","bullet"]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.slideTo(n.context.$implicit.id)&&i),i}),null,null)),i.Db(512,null,d.s,d.t,[i.q,i.r,i.k,i.B]),i.ob(2,278528,null,0,d.h,[d.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Cb(3,{active:0})],(function(n,t){var e=n(t,3,0,t.component.activeSlide==t.context.$implicit.id);n(t,2,0,"bullet",e)}),null)}function C(n){return i.Hb(0,[(n()(),i.pb(0,0,null,null,2,"ion-button",[["class","btn-white btn-round"]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.goSlide()&&i),i}),s.D,s.b)),i.ob(1,49152,null,0,r.j,[i.h,i.k,i.x],null,null),(n()(),i.Gb(-1,0,["Pr\xf3ximo "]))],null,null)}function h(n){return i.Hb(0,[(n()(),i.pb(0,0,null,null,4,"ion-button",[["class","btn-white btn-round"]],null,[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==i.Ab(n,2).onClick()&&o),"click"===t&&(o=!1!==i.Ab(n,3).onClick(e)&&o),o}),s.D,s.b)),i.ob(1,49152,null,0,r.j,[i.h,i.k,i.x],{routerDirection:[0,"routerDirection"]},null),i.ob(2,16384,null,0,g.n,[g.m,g.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.ob(3,737280,null,0,r.Ib,[d.g,r.Db,i.k,g.m,[2,g.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i.Gb(-1,0,["Come\xe7ar "]))],(function(n,t){n(t,1,0,"forward"),n(t,2,0,"/home"),n(t,3,0,"forward")}),null)}function m(n){return i.Hb(0,[i.Eb(402653184,1,{slider:0}),(n()(),i.pb(1,0,null,null,14,"ion-content",[],null,null,null,s.G,s.e)),i.ob(2,49152,null,0,r.t,[i.h,i.k,i.x],{scrollY:[0,"scrollY"]},null),(n()(),i.pb(3,0,null,0,3,"ion-slides",[["class","slides"]],null,null,null,s.Z,s.x)),i.ob(4,49152,[[1,4],["slider",4]],0,r.nb,[i.h,i.k,i.x],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),i.eb(16777216,null,0,1,null,b)),i.ob(6,278528,null,0,d.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(n()(),i.pb(7,0,null,0,8,"ion-fab",[["class","slide-actions"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,s.J,s.g)),i.ob(8,49152,null,0,r.v,[i.h,i.k,i.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),i.pb(9,0,null,0,2,"div",[["class","slides-pager"]],null,null,null,null,null)),(n()(),i.eb(16777216,null,null,1,null,u)),i.ob(11,278528,null,0,d.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(n()(),i.eb(16777216,null,0,1,null,C)),i.ob(13,16384,null,0,d.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,0,1,null,h)),i.ob(15,16384,null,0,d.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,2,0,!1),n(t,4,0,e.slidesParams,!1),n(t,6,0,e.slidesOpts),n(t,8,0,"end","bottom"),n(t,11,0,e.slidesOpts),n(t,13,0,e.activeSlide<=2),n(t,15,0,3==e.activeSlide)}),null)}function O(n){return i.Hb(0,[(n()(),i.pb(0,0,null,null,1,"app-onboard",[],null,null,null,m,f)),i.ob(1,114688,null,0,l,[],null,null)],(function(n,t){n(t,1,0)}),null)}var p=i.lb("app-onboard",l,O,{},{},[]),M=e("s7LF");e.d(t,"OnboardPageModuleNgFactory",(function(){return P}));var P=i.mb(a,[],(function(n){return i.xb([i.yb(512,i.j,i.X,[[8,[c.a,p]],[3,i.j],i.v]),i.yb(4608,d.l,d.k,[i.s,[2,d.x]]),i.yb(4608,M.s,M.s,[]),i.yb(4608,r.b,r.b,[i.x,i.g]),i.yb(4608,r.Cb,r.Cb,[r.b,i.j,i.p]),i.yb(4608,r.Hb,r.Hb,[r.b,i.j,i.p]),i.yb(1073742336,d.b,d.b,[]),i.yb(1073742336,M.r,M.r,[]),i.yb(1073742336,M.g,M.g,[]),i.yb(1073742336,r.Ab,r.Ab,[]),i.yb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),i.yb(1073742336,a,a,[]),i.yb(1024,g.k,(function(){return[[{path:"",component:l}]]}),[])])}))}}]);