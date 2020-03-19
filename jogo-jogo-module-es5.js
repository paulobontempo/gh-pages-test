(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jogo-jogo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jogo/jogo.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jogo/jogo.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJogoJogoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"btn-light\" [routerLink]=\"'/home'\" [routerDirection]=\"'back'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Realizar jogo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n    <div class=\"container-top-radius\">\n\n        <p class=\"lb-title\">Opção de aposta</p>\n        <ion-item class=\"item-form\">\n            <ion-select cancelText=\"Cancelar\"\n                        placeholder=\"Selecione o tipo\"\n                        [(ngModel)]=\"tipoJgo\">\n                <ion-select-option *ngFor=\"let TP of listaTipos;\" [value]=\"TP\">{{TP}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <!-- ANIMAL ////////////////////////////////////////////////////////////////////////////////////////////////// -->\n        <p class=\"lb-title\">Em qual animal?</p>\n\n        <animal-slides-component (onSelectSlide)=\"onslideChange($event)\"></animal-slides-component>\n\n        <!-- PREMIO //////////////////////////////////////////////////////////////////////////////////////////////// -->\n        <p class=\"lb-title\">Prêmio</p>\n\n        <div class=\"ct-premio bg-item\">\n            <ion-button class=\"btn-light btn-day is-select\"\n                        (click)=\"openModalSelectDay()\">{{diaSorteio}}\n            </ion-button>\n\n            <div class=\"list-type no-padding display-flex flex-col\" *ngIf=\"sorteios.length\">\n                <div class=\"item-col height-44 display-flex is-select\" *ngFor=\"let hora of sorteios;\">\n                    Sorteio das {{hora}}h\n                </div>\n            </div>\n        </div>\n\n        <ion-item class=\"item-form mg-bottom-22\">\n            <ion-select cancelText=\"Cancelar\"\n                        placeholder=\"Selecione o prêmio\"\n                        [(ngModel)]=\"premioSelecionado\">\n                <ion-select-option *ngFor=\"let premio of listaPremios;\" [value]=\"premio\">{{premio}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <!-- VALOR  ////////////////////////////////////////////////////////////////////////////////////////////////// -->\n        <p class=\"lb-title\">Qual valor você deseja jogar?</p>\n        <add-valor-component [defaultValue]=\"5\" (onChangeValue)=\"changeValue($event)\"></add-valor-component>\n\n        <div class=\"info-bottom display-flex justify-start\">\n            <img [src]=\"'/assets/icons/icon-figa.png'\" alt=\"\">\n            <p>\n                <b>Quanto eu posso ganhar?</b><br>\n                Nesse jogo, você pode ganhar até <br>\n                <b>60x do valor apostado </b> <span>R${{valorApostado}}</span>\n            </p>\n        </div>\n\n        <ion-button class=\"btn-confirm\" [disabled]=\"!doneForm()\">Confirmar aposta</ion-button>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/jogo/jogo.module.ts":
  /*!*************************************!*\
    !*** ./src/app/jogo/jogo.module.ts ***!
    \*************************************/

  /*! exports provided: JogoPageModule */

  /***/
  function srcAppJogoJogoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JogoPageModule", function () {
      return JogoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _jogo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jogo.page */
    "./src/app/jogo/jogo.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _modal_components_modal_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-components/modal-component.module */
    "./src/app/modal-components/modal-component.module.ts");

    const routes = [{
      path: '',
      component: _jogo_page__WEBPACK_IMPORTED_MODULE_6__["JogoPage"]
    }];
    let JogoPageModule = class JogoPageModule {};
    JogoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _modal_components_modal_component_module__WEBPACK_IMPORTED_MODULE_8__["ModalComponents"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_jogo_page__WEBPACK_IMPORTED_MODULE_6__["JogoPage"]]
    })], JogoPageModule);
    /***/
  },

  /***/
  "./src/app/jogo/jogo.page.scss":
  /*!*************************************!*\
    !*** ./src/app/jogo/jogo.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppJogoJogoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n* {\n  font-family: \"Rawline\", sans-serif;\n  font-size: 100%;\n}\n/**\n* Cria icones customizados dentro do Ionicons\n*\n* @param {string} $arg - Nome do icone aplicado no prefixo \"icon\"\n* @param {string} $val - Valor do content relativo ao ícone\n*/\n/** Aplica o bloco apenas se o aparelho tiver ou não suporte à safe area */\n/**\n * Garante que haja um espaçamento mínimo numa certa posição, usando as margens\n * de segurança do próprio aparelho quando possível.\n *\n * Recomendado para padding em itens que ficam nas bordas da tela, ou para\n * margem de itens que flutuam.\n */\n/** Adiciona a margem de segurança a um certo valor */\n/** Deduz a que borda da tela uma certa propriedade se refere */\n/*-- transform: translate > x --*/\n/*-- transform: translate > y --*/\n/*-- transform: translate > z --*/\n/*-- transform: translate > x, y --*/\n/*-- horizontal-align --*/\n/*-- vertical-align --*/\n/*-- dual-align --*/\n/*-- max-lines --*/\n@-webkit-keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.fadein-lista, ion-content .btn-day {\n  opacity: 0;\n  -webkit-animation: fadein-lista 0.35s linear;\n          animation: fadein-lista 0.35s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.fadein-lista:nth-child(1), ion-content .btn-day:nth-child(1) {\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n.fadein-lista:nth-child(2), ion-content .btn-day:nth-child(2) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.fadein-lista:nth-child(3), ion-content .btn-day:nth-child(3) {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s;\n}\n.fadein-lista:nth-child(4), ion-content .btn-day:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.fadein-lista:nth-child(5), ion-content .btn-day:nth-child(5) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.fadein-lista:nth-child(6), ion-content .btn-day:nth-child(6) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.fadein-lista:nth-child(7), ion-content .btn-day:nth-child(7) {\n  -webkit-animation-delay: 1.05s;\n          animation-delay: 1.05s;\n}\n.fadein-lista:nth-child(8), ion-content .btn-day:nth-child(8) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.fadein-lista:nth-child(9), ion-content .btn-day:nth-child(9) {\n  -webkit-animation-delay: 1.35s;\n          animation-delay: 1.35s;\n}\n.fadein-lista:nth-child(10), ion-content .btn-day:nth-child(10) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.fadein-lista:nth-child(11), ion-content .btn-day:nth-child(11) {\n  -webkit-animation-delay: 1.65s;\n          animation-delay: 1.65s;\n}\n.fadein-lista:nth-child(12), ion-content .btn-day:nth-child(12) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.fadein-lista:nth-child(13), ion-content .btn-day:nth-child(13) {\n  -webkit-animation-delay: 1.95s;\n          animation-delay: 1.95s;\n}\n.fadein-lista:nth-child(14), ion-content .btn-day:nth-child(14) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.fadein-lista:nth-child(15), ion-content .btn-day:nth-child(15) {\n  -webkit-animation-delay: 2.25s;\n          animation-delay: 2.25s;\n}\n.fadein-lista:nth-child(16), ion-content .btn-day:nth-child(16) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.fadein-lista:nth-child(17), ion-content .btn-day:nth-child(17) {\n  -webkit-animation-delay: 2.55s;\n          animation-delay: 2.55s;\n}\n.fadein-lista:nth-child(18), ion-content .btn-day:nth-child(18) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.fadein-lista:nth-child(19), ion-content .btn-day:nth-child(19) {\n  -webkit-animation-delay: 2.85s;\n          animation-delay: 2.85s;\n}\n@keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes slideDownOpacity {\n  from {\n    bottom: -600px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes slideDownOpacity {\n  from {\n    bottom: -200px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\nion-header ion-toolbar {\n  --color: var(--ion-color-white);\n}\nion-header ion-toolbar ion-buttons ion-button ion-icon {\n  color: white;\n}\nion-content {\n  --padding-top: 16px;\n  --background: var(--ion-color-primary);\n}\nion-content .item-form {\n  box-shadow: none;\n}\nion-content .item-form ion-select {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(var(--ion-color-black-rgb), 0.5);\n}\nion-content .border-color {\n  border: 0.55px solid rgba(217, 210, 199, 0.4);\n}\nion-content .btn-day {\n  margin: 0 0 14px;\n  width: 100%;\n  font-weight: 600;\n  --border-width: .55px;\n  --border-style: solid;\n  --border-color: rgba(217, 210, 199, 0.4);\n  --border-radius: 10px;\n  --background: rgba(233, 227, 219, 0.5);\n  --background-hover: rgba(233, 227, 219, 0.9);\n  --background-activated: rgba(233, 227, 219, 0.9);\n}\nion-content .ct-premio {\n  width: 100%;\n  margin-bottom: 22px;\n}\nion-content .info-bottom {\n  width: 100%;\n  margin: 32px 0 22px;\n}\nion-content .info-bottom img {\n  height: 64px;\n  margin-right: 12px;\n}\nion-content .info-bottom p {\n  margin: 0;\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: bold;\n  color: rgba(var(--ion-color-black-rgb), 0.3);\n}\nion-content .info-bottom p b {\n  color: rgba(var(--ion-color-black-rgb), 0.5);\n}\nion-content .info-bottom p span {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9nby9qb2dvLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9wYXVsb2JvbnRlbXBvL0RvY3VtZW50cy9kb25lL3BhdWxvYm9udGVtcG8vby1qb2dvL3NyYy90aGVtZS9mb250cy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL21peGlucy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL2FuaW1hdGlvbnMuc2NzcyIsIi9Vc2Vycy9wYXVsb2JvbnRlbXBvL0RvY3VtZW50cy9kb25lL3BhdWxvYm9udGVtcG8vby1qb2dvL3NyYy9hcHAvam9nby9qb2dvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7QURFRjtBRTJCQTs7Ozs7Q0FBQTtBQW9CQSwwRUFBQTtBQWdCQTs7Ozs7O0VBQUE7QUFtQkEscURBQUE7QUEwQkEsK0RBQUE7QUFtREEsaUNBQUE7QUFPQSxpQ0FBQTtBQU9BLGlDQUFBO0FBT0Esb0NBQUE7QUFPQSx5QkFBQTtBQU9BLHVCQUFBO0FBT0EsbUJBQUE7QUFRQSxrQkFBQTtBQ25OQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtJQUNBLFVBQUE7RUg2QkY7RUcxQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsVUFBQTtFSDRCRjtBQUNGO0FHckNBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0lBQ0EsVUFBQTtFSDZCRjtFRzFCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7SUFDQSxVQUFBO0VINEJGO0FBQ0Y7QUd6QkE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUgyQkY7QUd4Qkk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FIMEJOO0FHM0JJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBSDZCTjtBRzlCSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUhnQ047QUdqQ0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FIbUNOO0FHcENJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSHNDTjtBR3ZDSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUh5Q047QUcxQ0k7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FINENOO0FHN0NJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBSCtDTjtBR2hESTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUhrRE47QUduREk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FIcUROO0FHdERJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSHdETjtBR3pESTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUgyRE47QUc1REk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FIOEROO0FHL0RJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBSGlFTjtBR2xFSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUhvRU47QUdyRUk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FIdUVOO0FHeEVJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSDBFTjtBRzNFSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUg2RU47QUc5RUk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FIZ0ZOO0FHM0VBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtFSDhFRjtFRzVFQTtJQUVFLHVDQUFBO1lBQUEsK0JBQUE7RUg2RUY7QUFDRjtBRzFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJDQUFBO1lBQUEsbUNBQUE7RUg0RUY7RUcxRUE7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7WUFBQSwrQkFBQTtFSDRFRjtBQUNGO0FHckVBO0VBQ0U7SUFDRSxVQUFBO0VIdUVGO0VHckVBO0lBQ0UsVUFBQTtFSHVFRjtFR3JFQTtJQUNFLFVBQUE7RUh1RUY7QUFDRjtBR2hGQTtFQUNFO0lBQ0UsVUFBQTtFSHVFRjtFR3JFQTtJQUNFLFVBQUE7RUh1RUY7RUdyRUE7SUFDRSxVQUFBO0VIdUVGO0FBQ0Y7QUdsRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VIb0VGO0VHbEVBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUhvRUY7QUFDRjtBRzVFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7RUhvRUY7RUdsRUE7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFSG9FRjtBQUNGO0FHakVBO0VBQ0U7SUFDRSxjQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtJQUNBLFVBQUE7RUhtRUY7RUdqRUE7SUFDRSxTQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUhtRUY7QUFDRjtBR2hFQSxxQkFBQTtBQUNBO0VBQ0U7SUFDRSxjQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtJQUNBLFVBQUE7RUhrRUY7RUdoRUE7SUFDRSxTQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUhrRUY7QUFDRjtBRy9EQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUhpRUY7RUc5REE7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFSGdFRjtBQUNGO0FHekVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFSGlFRjtFRzlEQTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VIZ0VGO0FBQ0Y7QUc3REE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VIK0RGO0VHNURBO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUg4REY7QUFDRjtBR3ZFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7RUgrREY7RUc1REE7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFSDhERjtBQUNGO0FJdExFO0VBQ0UsK0JBQUE7QUp3TEo7QUlwTFE7RUFDRSxZQUFBO0FKc0xWO0FJL0tBO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtBSmtMRjtBSWhMRTtFQUNFLGdCQUFBO0FKa0xKO0FJaExJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUprTE47QUk5S0U7RUFDRSw2Q0FBQTtBSmdMSjtBSTdLRTtFQUdFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7QUo2S0o7QUkxS0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUo0S0o7QUl6S0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUoyS0o7QUl6S0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUoyS047QUl4S0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBSjBLTjtBSXhLTTtFQUNFLDRDQUFBO0FKMEtSO0FJdktNO0VBQ0UsK0JBQUE7QUp5S1IiLCJmaWxlIjoic3JjL2FwcC9qb2dvL2pvZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhd2xpbmVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKipcbiogQ3JpYSBpY29uZXMgY3VzdG9taXphZG9zIGRlbnRybyBkbyBJb25pY29uc1xuKlxuKiBAcGFyYW0ge3N0cmluZ30gJGFyZyAtIE5vbWUgZG8gaWNvbmUgYXBsaWNhZG8gbm8gcHJlZml4byBcImljb25cIlxuKiBAcGFyYW0ge3N0cmluZ30gJHZhbCAtIFZhbG9yIGRvIGNvbnRlbnQgcmVsYXRpdm8gYW8gw61jb25lXG4qL1xuLyoqIEFwbGljYSBvIGJsb2NvIGFwZW5hcyBzZSBvIGFwYXJlbGhvIHRpdmVyIG91IG7Do28gc3Vwb3J0ZSDDoCBzYWZlIGFyZWEgKi9cbi8qKlxuICogR2FyYW50ZSBxdWUgaGFqYSB1bSBlc3Bhw6dhbWVudG8gbcOtbmltbyBudW1hIGNlcnRhIHBvc2nDp8OjbywgdXNhbmRvIGFzIG1hcmdlbnNcbiAqIGRlIHNlZ3VyYW7Dp2EgZG8gcHLDs3ByaW8gYXBhcmVsaG8gcXVhbmRvIHBvc3PDrXZlbC5cbiAqXG4gKiBSZWNvbWVuZGFkbyBwYXJhIHBhZGRpbmcgZW0gaXRlbnMgcXVlIGZpY2FtIG5hcyBib3JkYXMgZGEgdGVsYSwgb3UgcGFyYVxuICogbWFyZ2VtIGRlIGl0ZW5zIHF1ZSBmbHV0dWFtLlxuICovXG4vKiogQWRpY2lvbmEgYSBtYXJnZW0gZGUgc2VndXJhbsOnYSBhIHVtIGNlcnRvIHZhbG9yICovXG4vKiogRGVkdXogYSBxdWUgYm9yZGEgZGEgdGVsYSB1bWEgY2VydGEgcHJvcHJpZWRhZGUgc2UgcmVmZXJlICovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geCAtLSovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geSAtLSovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geiAtLSovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geCwgeSAtLSovXG4vKi0tIGhvcml6b250YWwtYWxpZ24gLS0qL1xuLyotLSB2ZXJ0aWNhbC1hbGlnbiAtLSovXG4vKi0tIGR1YWwtYWxpZ24gLS0qL1xuLyotLSBtYXgtbGluZXMgLS0qL1xuQGtleWZyYW1lcyBmYWRlaW4tbGlzdGEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yNXB4LCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlaW4tbGlzdGEsIGlvbi1jb250ZW50IC5idG4tZGF5IHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4tbGlzdGEgMC4zNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMiksIGlvbi1jb250ZW50IC5idG4tZGF5Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDMpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNDVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNCksIGlvbi1jb250ZW50IC5idG4tZGF5Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDUpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNzVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNiksIGlvbi1jb250ZW50IC5idG4tZGF5Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDcpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMDVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoOCksIGlvbi1jb250ZW50IC5idG4tZGF5Om50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4ycztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDkpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoOSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMzVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTApLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoMTApIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTEpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoMTEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjY1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEyKSwgaW9uLWNvbnRlbnQgLmJ0bi1kYXk6bnRoLWNoaWxkKDEyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS44cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEzKSwgaW9uLWNvbnRlbnQgLmJ0bi1kYXk6bnRoLWNoaWxkKDEzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS45NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNCksIGlvbi1jb250ZW50IC5idG4tZGF5Om50aC1jaGlsZCgxNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDIuMXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNSksIGlvbi1jb250ZW50IC5idG4tZGF5Om50aC1jaGlsZCgxNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDIuMjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTYpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoMTYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTcpLCBpb24tY29udGVudCAuYnRuLWRheTpudGgtY2hpbGQoMTcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjU1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE4KSwgaW9uLWNvbnRlbnQgLmJ0bi1kYXk6bnRoLWNoaWxkKDE4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi43cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE5KSwgaW9uLWNvbnRlbnQgLmJ0bi1kYXk6bnRoLWNoaWxkKDE5KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi44NXM7XG59XG5cbkBrZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltVGV4dG8ge1xuICAwJSwgMjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZURvd25PcGFjaXR5IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtNjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZURvd25PcGFjaXR5IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtMjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCAuaXRlbS1mb3JtIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5pdGVtLWZvcm0gaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJsYWNrLXJnYiksIDAuNSk7XG59XG5pb24tY29udGVudCAuYm9yZGVyLWNvbG9yIHtcbiAgYm9yZGVyOiAwLjU1cHggc29saWQgcmdiYSgyMTcsIDIxMCwgMTk5LCAwLjQpO1xufVxuaW9uLWNvbnRlbnQgLmJ0bi1kYXkge1xuICBtYXJnaW46IDAgMCAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItd2lkdGg6IC41NXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIxNywgMjEwLCAxOTksIDAuNCk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjI3LCAyMTksIDAuNSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyMzMsIDIyNywgMjE5LCAwLjkpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDIzMywgMjI3LCAyMTksIDAuOSk7XG59XG5pb24tY29udGVudCAuY3QtcHJlbWlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5pb24tY29udGVudCAuaW5mby1ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMnB4IDAgMjJweDtcbn1cbmlvbi1jb250ZW50IC5pbmZvLWJvdHRvbSBpbWcge1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbmlvbi1jb250ZW50IC5pbmZvLWJvdHRvbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJsYWNrLXJnYiksIDAuMyk7XG59XG5pb24tY29udGVudCAuaW5mby1ib3R0b20gcCBiIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJsYWNrLXJnYiksIDAuNSk7XG59XG5pb24tY29udGVudCAuaW5mby1ib3R0b20gcCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iLCIqIHtcbiAgZm9udC1mYW1pbHk6ICdSYXdsaW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuIiwiLy8gTWl4aW5zXG5cbi8vIE1peGlucyBkZSB0YWJsZXQsIHVzZSBlbGVzIHF1YW5kbyBxdWlzZXIgcXVlIHVtIGNvbnRyb2xlIG1vZGlmaXF1ZSBvIHRhbWFuaG8gb3UgZm9udGUgcXVhbmRvIGZvciB0YWJsZXRcbi8vIG1hbnRlbmhhIGEgZXN0cnV0dXJhIG5vcm1hbCBkZSBlc2NyaXRhIGRlIGNzcyBzZW0gcHJlY2lzYXIgcmVlc2NyZXZlciBjc3MgZXNwZWPDrWZpY28gcGFyYSB0YWJsZXRcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xuXG5cbkBtaXhpbiBsaW5lLWhlaWdodCgkc2l6ZSAsICRiaWc6IHRydWUpIHtcbiAgbGluZS1oZWlnaHQ6ICRzaXplICsgcHg7XG4gIEBpZiAkYmlnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xuICAgICAgbGluZS1oZWlnaHQ6ICgkc2l6ZSAqIDEuNSkgKyBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZm9udHNpemUoJHNpemUsICRzbWFsbDp0cnVlLCAkYmlnOiB0cnVlKSB7XG4gIGZvbnQtc2l6ZTogJHNpemUgKyBweDtcbiAgQGlmICRiaWcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XG4gICAgICBmb250LXNpemU6ICgkc2l6ZSAqIDEuNSkgKyBweDtcbiAgICB9XG4gIH1cbiAgQGlmICRzbWFsbCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNtYWxsLWNlbGwtd2lkdGh9KSB7XG4gICAgICBmb250LXNpemU6ICgkc2l6ZSAqIDAuOCkgKyBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiogQ3JpYSBpY29uZXMgY3VzdG9taXphZG9zIGRlbnRybyBkbyBJb25pY29uc1xuKlxuKiBAcGFyYW0ge3N0cmluZ30gJGFyZyAtIE5vbWUgZG8gaWNvbmUgYXBsaWNhZG8gbm8gcHJlZml4byBcImljb25cIlxuKiBAcGFyYW0ge3N0cmluZ30gJHZhbCAtIFZhbG9yIGRvIGNvbnRlbnQgcmVsYXRpdm8gYW8gw61jb25lXG4qL1xuQG1peGluIGljb25lcygkYXJnLCAkdmFsKSB7XG4gIC5pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLWlvcy1pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLWlvcy1pY29uLSN7JGFyZ30tb3V0bGluZTpiZWZvcmUsXG4gIC5pb24tbWQtaWNvbi0jeyRhcmd9OmJlZm9yZSxcbiAgLmlvbi1tZC1pY29uLSN7JGFyZ30tb3V0bGluZTpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbicgIWltcG9ydGFudDtcbiAgICBjb250ZW50OiAkdmFsO1xuICAgIC8vZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKyAxLjE1O1xuICB9XG59XG5cblxuLy8gaXBob25lIHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiogQXBsaWNhIG8gYmxvY28gYXBlbmFzIHNlIG8gYXBhcmVsaG8gdGl2ZXIgb3UgbsOjbyBzdXBvcnRlIMOgIHNhZmUgYXJlYSAqL1xuLy9AaW5jbHVkZSBzYWZlQXJlYUFkanVzdChwYWRkaW5nLXRvcCwgMHB4KTtcbkBtaXhpbiBzdXBwb3J0c1NhZmVBcmVhKCRzdXBwb3J0czogdHJ1ZSkge1xuICAkZXhwcjogdW5xdW90ZSgnbWF4KGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSknKTtcblxuICBAaWYgJHN1cHBvcnRzIHtcbiAgICBAc3VwcG9ydHMgKHRvcDogJGV4cHIpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHN1cHBvcnRzIG5vdCAodG9wOiAkZXhwcikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2FyYW50ZSBxdWUgaGFqYSB1bSBlc3Bhw6dhbWVudG8gbcOtbmltbyBudW1hIGNlcnRhIHBvc2nDp8OjbywgdXNhbmRvIGFzIG1hcmdlbnNcbiAqIGRlIHNlZ3VyYW7Dp2EgZG8gcHLDs3ByaW8gYXBhcmVsaG8gcXVhbmRvIHBvc3PDrXZlbC5cbiAqXG4gKiBSZWNvbWVuZGFkbyBwYXJhIHBhZGRpbmcgZW0gaXRlbnMgcXVlIGZpY2FtIG5hcyBib3JkYXMgZGEgdGVsYSwgb3UgcGFyYVxuICogbWFyZ2VtIGRlIGl0ZW5zIHF1ZSBmbHV0dWFtLlxuICovXG5AbWl4aW4gbWluSW5zZXQoJHByb3BlcnR5LCR2YWx1ZTogJGNvbnRlbnQtcGFkZGluZywkcG9zaXRpb246IHBvc2l0aW9uT2YoJHByb3BlcnR5KSwkYWRkOiAwcHgpIHtcbiAgQGlmIG5vdCAkcG9zaXRpb24ge1xuICAgIEBlcnJvciAnTsOjbyBmb2kgcG9zc8OtdmVsIGRldGVjdGFyIHBvc2nDp8OjbyBkZSAjeyRwcm9wZXJ0eX0uIFBhc3NlIHVtIHBhcsOibWV0cm8gJHBvc2l0aW9uIGV4cGzDrWNpdG8nO1xuICB9XG5cbiAgI3skcHJvcGVydHl9OiAkdmFsdWUrJGFkZDtcblxuICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhIHtcbiAgICAjeyRwcm9wZXJ0eX06IGNhbGMobWF4KCN7JHZhbHVlfSwgZW52KHNhZmUtYXJlYS1pbnNldC0jeyRwb3NpdGlvbn0pKSArICN7JGFkZH0pO1xuICB9XG59XG5cbi8qKiBBZGljaW9uYSBhIG1hcmdlbSBkZSBzZWd1cmFuw6dhIGEgdW0gY2VydG8gdmFsb3IgKi9cbkBtaXhpbiBzYWZlQXJlYUFkanVzdCgkcHJvcGVydHksICR2YWx1ZSwgJHBvc2l0aW9uOiBwb3NpdGlvbk9mKCRwcm9wZXJ0eSkpIHtcbiAgQGlmIG5vdCAkcG9zaXRpb24ge1xuICAgIEBlcnJvciAnTsOjbyBmb2kgcG9zc8OtdmVsIGRldGVjdGFyIHBvc2nDp8OjbyBkZSAjeyRwcm9wZXJ0eX0uIFBhc3NlIHVtIHBhcsOibWV0cm8gJHBvc2l0aW9uIGV4cGzDrWNpdG8nO1xuICB9XG5cbiAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgLy8gQ29tcGF0aWJpbGlkYWRlIGNvbSBpT1MgOS0xMDogcGFyYSB0b3AsIGFzc3VtaXIgMjBweCBkZSBiYXJyYSBkZSBzdGF0dXNcbiAgQGlmICRwb3NpdGlvbj09dG9wIHtcbiAgICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhKGZhbHNlKSB7XG4gICAgICBAaWYgc3RyLWluZGV4KCcjeyZ9JywgJy5pb3MnKSAhPW51bGwge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgMjBweCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLmlvcyAmIHtcbiAgICAgICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgMjBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhIHtcbiAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgZW52KHNhZmUtYXJlYS1pbnNldC0jeyRwb3NpdGlvbn0pKTtcbiAgfVxufVxuXG4vKiogRGVkdXogYSBxdWUgYm9yZGEgZGEgdGVsYSB1bWEgY2VydGEgcHJvcHJpZWRhZGUgc2UgcmVmZXJlICovXG5AZnVuY3Rpb24gcG9zaXRpb25PZigkcHJvcGVydHkpIHtcbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICd0b3AnKSAhPW51bGwge1xuICAgIEByZXR1cm4gdG9wO1xuICB9XG5cbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICdyaWdodCcpICE9bnVsbCB7XG4gICAgQHJldHVybiByaWdodDtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAnYm90dG9tJykgIT1udWxsIHtcbiAgICBAcmV0dXJuIGJvdHRvbTtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAnbGVmdCcpICE9bnVsbCB7XG4gICAgQHJldHVybiBsZWZ0O1xuICB9XG5cbiAgQHJldHVybiBudWxsO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vIEJhY2tncm91bmQgQ292ZXJcbkBtaXhpbiBjb3Zlci1iYWNrZ3JvdW5kKCRpbWctdXJpLCAkYmFja2dyb3VuZC10b3A6XCJjZW50ZXJcIiwgJGJhY2tncm91bmQtbGVmdDpcImNlbnRlclwiKSB7XG4gIGJhY2tncm91bmQ6IHVybCgkaW1nLXVyaSkgbm8tcmVwZWF0IHVucXVvdGUoJGJhY2tncm91bmQtdG9wKSB1bnF1b3RlKCRiYWNrZ3JvdW5kLWxlZnQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLy8gQ2VudHJhbGl6YWRvciBBYnNvbHV0b1xuXG5AbWl4aW4gY2VudGVyKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBAaWYgKCRob3Jpem9udGFsIGFuZCAkdmVydGljYWwpIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH0gQGVsc2UgaWYgKCRob3Jpem9udGFsKSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9IEBlbHNlIGlmICgkdmVydGljYWwpIHtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxufVxuXG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB4IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVYKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR2YWx1ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xufVxuXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geSAtLSovXG5AbWl4aW4gdHJhbnNmb3JtVHJhbnNsYXRlWSgkdmFsdWUpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkdmFsdWUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbn1cblxuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHogLS0qL1xuQG1peGluIHRyYW5zZm9ybVRyYW5zbGF0ZVooJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHZhbHVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG59XG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB4LCB5IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVEdWFsKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xufVxuXG4vKi0tIGhvcml6b250YWwtYWxpZ24gLS0qL1xuQG1peGluIGhvcml6b250YWxBbGlnbigkcG9zaXRpb24sICRwZXJjZW50YWdlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGxlZnQ6ICRwZXJjZW50YWdlO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVYKC0kcGVyY2VudGFnZSk7XG59XG5cbi8qLS0gdmVydGljYWwtYWxpZ24gLS0qL1xuQG1peGluIHZlcnRpY2FsQWxpZ24oJHBvc2l0aW9uLCAkcGVyY2VudGFnZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICB0b3A6ICRwZXJjZW50YWdlO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVZKC0kcGVyY2VudGFnZSk7XG59XG5cbi8qLS0gZHVhbC1hbGlnbiAtLSovXG5AbWl4aW4gZHVhbEFsaWduKCRwb3NpdGlvbiwgJHBlcmNlbnRhZ2VYLCAkcGVyY2VudGFnZVkpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgbGVmdDogJHBlcmNlbnRhZ2VYO1xuICB0b3A6ICRwZXJjZW50YWdlWTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtVHJhbnNsYXRlRHVhbCgtJHBlcmNlbnRhZ2VYLCAtJHBlcmNlbnRhZ2VZKTtcbn1cblxuLyotLSBtYXgtbGluZXMgLS0qL1xuQG1peGluIG1heExpbmVzKCR2YWx1ZSkge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICR2YWx1ZSAhaW1wb3J0YW50OyAvLyFwbGVhc2VcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblxufVxuIiwiLy8gZmFkZWluIHNlcXVlbmNpYWwgbGlzdGFcbi8vIEBleHRlbmQgLmZhZGVpbjtcbkBrZXlmcmFtZXMgZmFkZWluLWxpc3RhIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjVweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGVpbi1saXN0YSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZWluLWxpc3RhIC4zNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICBAZm9yICRpIGZyb20gMSB0byAyMCB7XG4gICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkgKiAuMTVzO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAvL29wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4vLy5hbmltYXRlLWZsaWNrZXIge1xuLy8gIGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiAxcyBpbmZpbml0ZTtcbi8vfVxuXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vL3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuLy9hbmltYXRpb246IGFuaW1UZXh0byAycyAgYWx0ZXJuYXRlO1xuQGtleWZyYW1lcyBhbmltVGV4dG8ge1xuICAwJSwgMjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC02MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVEb3duT3BhY2l0eSB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogLTIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvZm9udHMnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL2FuaW1hdGlvbnMnO1xuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gIC5pdGVtLWZvcm0ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYmxhY2stcmdiKSwgLjUpO1xuICAgIH1cbiAgfVxuXG4gIC5ib3JkZXItY29sb3Ige1xuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEoMjE3LCAyMTAsIDE5OSwgMC40KTtcbiAgfVxuXG4gIC5idG4tZGF5IHtcbiAgICBAZXh0ZW5kIC5mYWRlaW4tbGlzdGE7XG5cbiAgICBtYXJnaW46IDAgMCAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3JkZXItd2lkdGg6IC41NXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyMTcsIDIxMCwgMTk5LCAwLjQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMjcsIDIxOSwgMC41KTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMjMzLCAyMjcsIDIxOSwgMC45KTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDIzMywgMjI3LCAyMTksIDAuOSk7XG4gIH1cblxuICAuY3QtcHJlbWlvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG5cbiAgLmluZm8tYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMycHggMCAyMnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYmxhY2stcmdiKSwgLjMpO1xuXG4gICAgICBiIHtcbiAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJsYWNrLXJnYiksIC41KTtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/jogo/jogo.page.ts":
  /*!***********************************!*\
    !*** ./src/app/jogo/jogo.page.ts ***!
    \***********************************/

  /*! exports provided: JogoPage */

  /***/
  function srcAppJogoJogoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JogoPage", function () {
      return JogoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_components_modal_selecionar_dia_modal_selecionar_dia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modal-components/modal-selecionar-dia/modal-selecionar-dia-component */
    "./src/app/modal-components/modal-selecionar-dia/modal-selecionar-dia-component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let JogoPage = class JogoPage {
      constructor(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.listaTipos = ['Grupo', 'Dezena', 'Centena', 'Milhar', 'Milhar/Centena', 'Duques de dezenas', 'Duque de grupo', 'Termo de dezenas', 'Termo de grupo'];
        this.listaPremios = ['Cabeça - 1º', 'Cercado 1º ao 5º', 'Cercado 1º ao 7º', 'Cercado 1º ao 8º'];
        this.sorteios = [];
        this.diaSorteio = 'Selecione o dia e sorteio';
        this.valorApostado = '3.500';
        this.valorSelecionado = 0;

        if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.data) {
          this.tipoJgo = this.router.getCurrentNavigation().extras.state.data;
        }
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('ngOnInit - > JogoPage');
        });
      }

      changeValue(value) {
        if (value && value.data) {
          this.valorSelecionado = value.data;
        }

        console.log(this.valorSelecionado);
      }

      onslideChange(data) {
        this.animalSelecionado = data.slide;
      }

      openModalSelectDay() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: _modal_components_modal_selecionar_dia_modal_selecionar_dia_component__WEBPACK_IMPORTED_MODULE_3__["ModalSelecionarDiaComponent"],
            keyboardClose: true,
            cssClass: 'modal-fab-bottom',
            componentProps: {}
          });
          modal.onDidDismiss().then(info => {
            if (info && info.data) {
              this.diaSorteio = info.data.dia;
              this.sorteios = info.data.sorteios;
            }
          });
          return yield modal.present();
        });
      }

      doneForm() {
        return !(!this.tipoJgo || !this.diaSorteio || !this.sorteios.length || !this.premioSelecionado || !this.valorSelecionado);
      }

    };

    JogoPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
    }];

    JogoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jogo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jogo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jogo/jogo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jogo.page.scss */
      "./src/app/jogo/jogo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], JogoPage);
    /***/
  }
}]);
//# sourceMappingURL=jogo-jogo-module-es5.js.map