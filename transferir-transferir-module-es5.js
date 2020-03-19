(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transferir-transferir-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transferir/transferir.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transferir/transferir.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransferirTransferirPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"btn-light\" [routerLink]=\"'/home'\" [routerDirection]=\"'back'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Transferir dinheiro {{step}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n    <div class=\"container-top-radius\">\n        <div *ngIf=\"step == 1\">\n            <p class=\"lb-title mg-top-0\">Qual valor você <br> deseja transferir?</p>\n\n            <add-valor-component [ngClass]=\"'no-input'\"\n                                 [defaultValue]=\"0\"\n                                 (onChangeValue)=\"changeValue($event)\">\n            </add-valor-component>\n\n            <p class=\"lb-desc mg-top-0\"><b>Seu saldo atual é de R${{saldoAtual}}</b></p>\n        </div>\n\n        <div *ngIf=\"step == 2\">\n            <div class=\"display-flex justify-start\">\n                <img class=\"icon-cash\" [src]=\"'./assets/icons/icon-cash.png'\" alt=\"\">\n                <div class=\"lb-title-b\">\n                    Valor a transferir <br> <b>R${{valorSelecionado}},00</b>\n                </div>\n            </div>\n\n            <p><b>Para quem você deseja transferir?</b></p>\n\n            <ion-button class=\"btn-confirm btn-round no-margin-tb\">Transferir para mim</ion-button>\n            <ion-button class=\"btn-confirm btn-round\" (click)=\"stepTo()\">Para outra pessoa</ion-button>\n\n            <p class=\" mg-top-0\"><b>Transferir para contatos salvos</b></p>\n\n            <div class=\"list-scrollX\">\n                <div class=\"item-contato display-flex direction-column\"\n                     [ngClass]=\"{'is-select': (contatoSelecionado && contatoSelecionado.id == ct.id)}\"\n                     *ngFor=\"let ct of listContatos;\"\n                     (click)=\"onSelectContact(ct)\">\n\n                    <span>{{ct.nome.split(' ')[0]}}</span>\n\n                    <img alt=\"\" class=\"img-photo\" [ngClass]=\"{'no-photo':!ct.foto}\"\n                         [src]=\"ct.foto ? ct.foto : './assets/icons/img-icon-avatar.png'\">\n                </div>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n\n        <div *ngIf=\"step == 3\">\n            <div class=\"display-flex justify-start\">\n                <img class=\"icon-cash\" [src]=\"'./assets/icons/icon-cash.png'\" alt=\"\">\n                <div class=\"lb-title-b\">\n                    Valor a transferir <br> <b>R${{valorSelecionado}},00</b>\n                </div>\n            </div>\n\n            <p><b>Digite os dados bancários</b></p>\n\n            <form [formGroup]=\"formGroup\">\n                <ion-item class=\"item-form\">\n                    <ion-input ngModel\n                               type=\"text\"\n                               formControlName=\"name\"\n                               placeholder=\"Nome\">\n                    </ion-input>\n                </ion-item>\n\n                <ion-item class=\"item-form\">\n                    <ion-select ngModel\n                                placeholder=\"Instituição\"\n                                formControlName=\"institution\"\n                                [cancelText]=\"'Cancelar'\">\n                        <ion-select-option value=\"Inter\">Inter</ion-select-option>\n                        <ion-select-option value=\"Nubank\">Nubank</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item class=\"item-form\">\n                    <ion-input ngModel\n                               type=\"tel\"\n                               formControlName=\"agency\"\n                               placeholder=\"Agência\">\n                    </ion-input>\n                </ion-item>\n\n                <ion-item class=\"item-form\">\n                    <ion-input ngModel\n                               type=\"tel\"\n                               formControlName=\"account\"\n                               placeholder=\"Conta\">\n                    </ion-input>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding toggle-item fadein-lista\">\n                    <ion-label>Salvar contato?</ion-label>\n                    <ion-toggle slot=\"end\"\n                                mode=\"ios\"\n                                formControlName=\"saveContact\">\n                    </ion-toggle>\n                </ion-item>\n            </form>\n        </div>\n    </div>\n\n    <ion-fab class=\"fab-bottom display-flex\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-button class=\"btn-confirm btn-round\"\n                    *ngIf=\"step == 1\"\n                    [disabled]=\"!valorSelecionado\"\n                    (click)=\"stepTo()\">Prosseguir\n        </ion-button>\n\n        <ion-button class=\"btn-confirm btn-round\" *ngIf=\"step == 2 || step == 3\"\n                    [disabled]=\"((step == 2  && !contatoSelecionado) || (step == 3 && formGroup.status === 'INVALID'))\"\n                    (click)=\"openModalConfirmar()\">Transferir\n        </ion-button>\n    </ion-fab>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/transferir/transferir.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/transferir/transferir.module.ts ***!
    \*************************************************/

  /*! exports provided: TransferirPageModule */

  /***/
  function srcAppTransferirTransferirModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferirPageModule", function () {
      return TransferirPageModule;
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


    var _transferir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./transferir.page */
    "./src/app/transferir/transferir.page.ts");
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
      component: _transferir_page__WEBPACK_IMPORTED_MODULE_6__["TransferirPage"]
    }];
    let TransferirPageModule = class TransferirPageModule {};
    TransferirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _modal_components_modal_component_module__WEBPACK_IMPORTED_MODULE_8__["ModalComponents"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_transferir_page__WEBPACK_IMPORTED_MODULE_6__["TransferirPage"]]
    })], TransferirPageModule);
    /***/
  },

  /***/
  "./src/app/transferir/transferir.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/transferir/transferir.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransferirTransferirPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n* {\n  font-family: \"Rawline\", sans-serif;\n  font-size: 100%;\n}\n/**\n* Cria icones customizados dentro do Ionicons\n*\n* @param {string} $arg - Nome do icone aplicado no prefixo \"icon\"\n* @param {string} $val - Valor do content relativo ao ícone\n*/\n/** Aplica o bloco apenas se o aparelho tiver ou não suporte à safe area */\n/**\n * Garante que haja um espaçamento mínimo numa certa posição, usando as margens\n * de segurança do próprio aparelho quando possível.\n *\n * Recomendado para padding em itens que ficam nas bordas da tela, ou para\n * margem de itens que flutuam.\n */\n/** Adiciona a margem de segurança a um certo valor */\n/** Deduz a que borda da tela uma certa propriedade se refere */\n/*-- transform: translate > x --*/\n/*-- transform: translate > y --*/\n/*-- transform: translate > z --*/\n/*-- transform: translate > x, y --*/\n/*-- horizontal-align --*/\n/*-- vertical-align --*/\n/*-- dual-align --*/\n/*-- max-lines --*/\n@-webkit-keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.fadein-lista {\n  opacity: 0;\n  -webkit-animation: fadein-lista 0.35s linear;\n          animation: fadein-lista 0.35s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.fadein-lista:nth-child(1) {\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n.fadein-lista:nth-child(2) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.fadein-lista:nth-child(3) {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s;\n}\n.fadein-lista:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.fadein-lista:nth-child(5) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.fadein-lista:nth-child(6) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.fadein-lista:nth-child(7) {\n  -webkit-animation-delay: 1.05s;\n          animation-delay: 1.05s;\n}\n.fadein-lista:nth-child(8) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.fadein-lista:nth-child(9) {\n  -webkit-animation-delay: 1.35s;\n          animation-delay: 1.35s;\n}\n.fadein-lista:nth-child(10) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.fadein-lista:nth-child(11) {\n  -webkit-animation-delay: 1.65s;\n          animation-delay: 1.65s;\n}\n.fadein-lista:nth-child(12) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.fadein-lista:nth-child(13) {\n  -webkit-animation-delay: 1.95s;\n          animation-delay: 1.95s;\n}\n.fadein-lista:nth-child(14) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.fadein-lista:nth-child(15) {\n  -webkit-animation-delay: 2.25s;\n          animation-delay: 2.25s;\n}\n.fadein-lista:nth-child(16) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.fadein-lista:nth-child(17) {\n  -webkit-animation-delay: 2.55s;\n          animation-delay: 2.55s;\n}\n.fadein-lista:nth-child(18) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.fadein-lista:nth-child(19) {\n  -webkit-animation-delay: 2.85s;\n          animation-delay: 2.85s;\n}\n@keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes slideDownOpacity {\n  from {\n    bottom: -600px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes slideDownOpacity {\n  from {\n    bottom: -200px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\nion-header ion-toolbar ion-title {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-content {\n  --padding-top: 16px;\n  --background: var(--ion-color-primary);\n}\nion-content .icon-cash {\n  height: 36px;\n  margin-right: 12px;\n}\nion-content .lb-title-b {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n  color: var(--ion-color-label-default);\n}\nion-content .lb-title-b b {\n  color: var(--ion-color-primary);\n}\nion-content .btn-confirm.no-margin-tb {\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-content .item-form {\n  box-shadow: none;\n}\nion-content .item-form ion-select {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(var(--ion-color-black-rgb), 0.5);\n}\nion-content .list-scrollX {\n  width: 100%;\n  margin: 22px 0;\n  display: -webkit-box;\n}\nion-content .list-scrollX .item-contato {\n  width: 72px;\n  height: 74px;\n  opacity: 0.5;\n  margin: 4px 10px;\n  text-align: center;\n  background: #E9E3DB;\n  border: 1px solid #D9D2C7;\n  box-shadow: 0 2px 19px 0 #EBE2D5;\n  border-radius: 12px;\n}\nion-content .list-scrollX .item-contato.is-select {\n  opacity: 1;\n  width: 110px;\n  height: 100px;\n}\nion-content .list-scrollX .item-contato.is-select img {\n  width: 56px;\n  height: 56px;\n}\nion-content .list-scrollX .item-contato.is-select img.no-photo {\n  width: 40px;\n  height: 40px;\n}\nion-content .list-scrollX .item-contato.is-select span {\n  font-size: 13px;\n  color: rgba(var(--ion-color-black-rgb), 0.7);\n}\nion-content .list-scrollX .item-contato span {\n  font-size: 10px;\n  font-weight: bold;\n  letter-spacing: -0.12px;\n  color: var(--ion-color-black-rgb);\n}\nion-content .list-scrollX .item-contato img {\n  width: 32px;\n  height: 32px;\n  margin-top: 8px;\n  border-radius: 50%;\n  border: 3px solid #FFFFFF;\n}\nion-content .list-scrollX .item-contato img.no-photo {\n  width: 26px;\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXJpci90cmFuc2ZlcmlyLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9wYXVsb2JvbnRlbXBvL0RvY3VtZW50cy9kb25lL3BhdWxvYm9udGVtcG8vby1qb2dvL3NyYy90aGVtZS9mb250cy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL21peGlucy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL2FuaW1hdGlvbnMuc2NzcyIsIi9Vc2Vycy9wYXVsb2JvbnRlbXBvL0RvY3VtZW50cy9kb25lL3BhdWxvYm9udGVtcG8vby1qb2dvL3NyYy9hcHAvdHJhbnNmZXJpci90cmFuc2ZlcmlyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7QURFRjtBRTJCQTs7Ozs7Q0FBQTtBQW9CQSwwRUFBQTtBQWdCQTs7Ozs7O0VBQUE7QUFtQkEscURBQUE7QUEwQkEsK0RBQUE7QUFtREEsaUNBQUE7QUFPQSxpQ0FBQTtBQU9BLGlDQUFBO0FBT0Esb0NBQUE7QUFPQSx5QkFBQTtBQU9BLHVCQUFBO0FBT0EsbUJBQUE7QUFRQSxrQkFBQTtBQ25OQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtJQUNBLFVBQUE7RUg2QkY7RUcxQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsVUFBQTtFSDRCRjtBQUNGO0FHckNBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0lBQ0EsVUFBQTtFSDZCRjtFRzFCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7SUFDQSxVQUFBO0VINEJGO0FBQ0Y7QUd6QkE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUgyQkY7QUd4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QkFBQTtFSDhERjtBQUNGO0FJckxJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBSnVMTjtBSWxMQTtFQUNFLG1CQUFBO0VBQ0Esc0NBQUE7QUpxTEY7QUluTEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUpxTEo7QUlsTEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FKb0xKO0FJbExJO0VBQ0UsK0JBQUE7QUpvTE47QUkvS0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUppTE47QUk3S0U7RUFDRSxnQkFBQTtBSitLSjtBSTdLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FKK0tOO0FJM0tFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBSjZLSjtBSTNLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBSjZLTjtBSTNLTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBSjZLUjtBSTNLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FKNktWO0FJM0tVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUo2S1o7QUl6S1E7RUFDRSxlQUFBO0VBQ0EsNENBQUE7QUoyS1Y7QUl2S007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FKeUtSO0FJdEtNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBSndLUjtBSXRLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUp3S1YiLCJmaWxlIjoic3JjL2FwcC90cmFuc2ZlcmlyL3RyYW5zZmVyaXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhd2xpbmVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKipcbiogQ3JpYSBpY29uZXMgY3VzdG9taXphZG9zIGRlbnRybyBkbyBJb25pY29uc1xuKlxuKiBAcGFyYW0ge3N0cmluZ30gJGFyZyAtIE5vbWUgZG8gaWNvbmUgYXBsaWNhZG8gbm8gcHJlZml4byBcImljb25cIlxuKiBAcGFyYW0ge3N0cmluZ30gJHZhbCAtIFZhbG9yIGRvIGNvbnRlbnQgcmVsYXRpdm8gYW8gw61jb25lXG4qL1xuLyoqIEFwbGljYSBvIGJsb2NvIGFwZW5hcyBzZSBvIGFwYXJlbGhvIHRpdmVyIG91IG7Do28gc3Vwb3J0ZSDDoCBzYWZlIGFyZWEgKi9cbi8qKlxuICogR2FyYW50ZSBxdWUgaGFqYSB1bSBlc3Bhw6dhbWVudG8gbcOtbmltbyBudW1hIGNlcnRhIHBvc2nDp8OjbywgdXNhbmRvIGFzIG1hcmdlbnNcbiAqIGRlIHNlZ3VyYW7Dp2EgZG8gcHLDs3ByaW8gYXBhcmVsaG8gcXVhbmRvIHBvc3PDrXZlbC5cbiAqXG4gKiBSZWNvbWVuZGFkbyBwYXJhIHBhZGRpbmcgZW0gaXRlbnMgcXVlIGZpY2FtIG5hcyBib3JkYXMgZGEgdGVsYSwgb3UgcGFyYVxuICogbWFyZ2VtIGRlIGl0ZW5zIHF1ZSBmbHV0dWFtLlxuICovXG4vKiogQWRpY2lvbmEgYSBtYXJnZW0gZGUgc2VndXJhbsOnYSBhIHVtIGNlcnRvIHZhbG9yICovXG4vKiogRGVkdXogYSBxdWUgYm9yZGEgZGEgdGVsYSB1bWEgY2VydGEgcHJvcHJpZWRhZGUgc2UgcmVmZXJlICovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geCAtLSovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geSAtLSovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geiAtLSovXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geCwgeSAtLSovXG4vKi0tIGhvcml6b250YWwtYWxpZ24gLS0qL1xuLyotLSB2ZXJ0aWNhbC1hbGlnbiAtLSovXG4vKi0tIGR1YWwtYWxpZ24gLS0qL1xuLyotLSBtYXgtbGluZXMgLS0qL1xuQGtleWZyYW1lcyBmYWRlaW4tbGlzdGEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yNXB4LCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlaW4tbGlzdGEge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVpbi1saXN0YSAwLjM1cyBsaW5lYXI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMDVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg5KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4zNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxMCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjk1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4yNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNikge1xuICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNykge1xuICBhbmltYXRpb24tZGVsYXk6IDIuNTVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjdzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTkpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjg1cztcbn1cblxuQGtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1UZXh0byB7XG4gIDAlLCAyNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgNzUlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC02MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC0yMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5pY29uLWNhc2gge1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbmlvbi1jb250ZW50IC5sYi10aXRsZS1iIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sYWJlbC1kZWZhdWx0KTtcbn1cbmlvbi1jb250ZW50IC5sYi10aXRsZS1iIGIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLmJ0bi1jb25maXJtLm5vLW1hcmdpbi10YiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY29udGVudCAuaXRlbS1mb3JtIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5pdGVtLWZvcm0gaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJsYWNrLXJnYiksIDAuNSk7XG59XG5pb24tY29udGVudCAubGlzdC1zY3JvbGxYIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjJweCAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbn1cbmlvbi1jb250ZW50IC5saXN0LXNjcm9sbFggLml0ZW0tY29udGF0byB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luOiA0cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRTlFM0RCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEMkM3O1xuICBib3gtc2hhZG93OiAwIDJweCAxOXB4IDAgI0VCRTJENTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbmlvbi1jb250ZW50IC5saXN0LXNjcm9sbFggLml0ZW0tY29udGF0by5pcy1zZWxlY3Qge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAubGlzdC1zY3JvbGxYIC5pdGVtLWNvbnRhdG8uaXMtc2VsZWN0IGltZyB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5pb24tY29udGVudCAubGlzdC1zY3JvbGxYIC5pdGVtLWNvbnRhdG8uaXMtc2VsZWN0IGltZy5uby1waG90byB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5pb24tY29udGVudCAubGlzdC1zY3JvbGxYIC5pdGVtLWNvbnRhdG8uaXMtc2VsZWN0IHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1ibGFjay1yZ2IpLCAwLjcpO1xufVxuaW9uLWNvbnRlbnQgLmxpc3Qtc2Nyb2xsWCAuaXRlbS1jb250YXRvIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjay1yZ2IpO1xufVxuaW9uLWNvbnRlbnQgLmxpc3Qtc2Nyb2xsWCAuaXRlbS1jb250YXRvIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjRkZGRkZGO1xufVxuaW9uLWNvbnRlbnQgLmxpc3Qtc2Nyb2xsWCAuaXRlbS1jb250YXRvIGltZy5uby1waG90byB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn0iLCIqIHtcbiAgZm9udC1mYW1pbHk6ICdSYXdsaW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuIiwiLy8gTWl4aW5zXG5cbi8vIE1peGlucyBkZSB0YWJsZXQsIHVzZSBlbGVzIHF1YW5kbyBxdWlzZXIgcXVlIHVtIGNvbnRyb2xlIG1vZGlmaXF1ZSBvIHRhbWFuaG8gb3UgZm9udGUgcXVhbmRvIGZvciB0YWJsZXRcbi8vIG1hbnRlbmhhIGEgZXN0cnV0dXJhIG5vcm1hbCBkZSBlc2NyaXRhIGRlIGNzcyBzZW0gcHJlY2lzYXIgcmVlc2NyZXZlciBjc3MgZXNwZWPDrWZpY28gcGFyYSB0YWJsZXRcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xuXG5cbkBtaXhpbiBsaW5lLWhlaWdodCgkc2l6ZSAsICRiaWc6IHRydWUpIHtcbiAgbGluZS1oZWlnaHQ6ICRzaXplICsgcHg7XG4gIEBpZiAkYmlnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xuICAgICAgbGluZS1oZWlnaHQ6ICgkc2l6ZSAqIDEuNSkgKyBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZm9udHNpemUoJHNpemUsICRzbWFsbDp0cnVlLCAkYmlnOiB0cnVlKSB7XG4gIGZvbnQtc2l6ZTogJHNpemUgKyBweDtcbiAgQGlmICRiaWcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XG4gICAgICBmb250LXNpemU6ICgkc2l6ZSAqIDEuNSkgKyBweDtcbiAgICB9XG4gIH1cbiAgQGlmICRzbWFsbCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNtYWxsLWNlbGwtd2lkdGh9KSB7XG4gICAgICBmb250LXNpemU6ICgkc2l6ZSAqIDAuOCkgKyBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiogQ3JpYSBpY29uZXMgY3VzdG9taXphZG9zIGRlbnRybyBkbyBJb25pY29uc1xuKlxuKiBAcGFyYW0ge3N0cmluZ30gJGFyZyAtIE5vbWUgZG8gaWNvbmUgYXBsaWNhZG8gbm8gcHJlZml4byBcImljb25cIlxuKiBAcGFyYW0ge3N0cmluZ30gJHZhbCAtIFZhbG9yIGRvIGNvbnRlbnQgcmVsYXRpdm8gYW8gw61jb25lXG4qL1xuQG1peGluIGljb25lcygkYXJnLCAkdmFsKSB7XG4gIC5pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLWlvcy1pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLWlvcy1pY29uLSN7JGFyZ30tb3V0bGluZTpiZWZvcmUsXG4gIC5pb24tbWQtaWNvbi0jeyRhcmd9OmJlZm9yZSxcbiAgLmlvbi1tZC1pY29uLSN7JGFyZ30tb3V0bGluZTpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbicgIWltcG9ydGFudDtcbiAgICBjb250ZW50OiAkdmFsO1xuICAgIC8vZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKyAxLjE1O1xuICB9XG59XG5cblxuLy8gaXBob25lIHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiogQXBsaWNhIG8gYmxvY28gYXBlbmFzIHNlIG8gYXBhcmVsaG8gdGl2ZXIgb3UgbsOjbyBzdXBvcnRlIMOgIHNhZmUgYXJlYSAqL1xuLy9AaW5jbHVkZSBzYWZlQXJlYUFkanVzdChwYWRkaW5nLXRvcCwgMHB4KTtcbkBtaXhpbiBzdXBwb3J0c1NhZmVBcmVhKCRzdXBwb3J0czogdHJ1ZSkge1xuICAkZXhwcjogdW5xdW90ZSgnbWF4KGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSknKTtcblxuICBAaWYgJHN1cHBvcnRzIHtcbiAgICBAc3VwcG9ydHMgKHRvcDogJGV4cHIpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHN1cHBvcnRzIG5vdCAodG9wOiAkZXhwcikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2FyYW50ZSBxdWUgaGFqYSB1bSBlc3Bhw6dhbWVudG8gbcOtbmltbyBudW1hIGNlcnRhIHBvc2nDp8OjbywgdXNhbmRvIGFzIG1hcmdlbnNcbiAqIGRlIHNlZ3VyYW7Dp2EgZG8gcHLDs3ByaW8gYXBhcmVsaG8gcXVhbmRvIHBvc3PDrXZlbC5cbiAqXG4gKiBSZWNvbWVuZGFkbyBwYXJhIHBhZGRpbmcgZW0gaXRlbnMgcXVlIGZpY2FtIG5hcyBib3JkYXMgZGEgdGVsYSwgb3UgcGFyYVxuICogbWFyZ2VtIGRlIGl0ZW5zIHF1ZSBmbHV0dWFtLlxuICovXG5AbWl4aW4gbWluSW5zZXQoJHByb3BlcnR5LCR2YWx1ZTogJGNvbnRlbnQtcGFkZGluZywkcG9zaXRpb246IHBvc2l0aW9uT2YoJHByb3BlcnR5KSwkYWRkOiAwcHgpIHtcbiAgQGlmIG5vdCAkcG9zaXRpb24ge1xuICAgIEBlcnJvciAnTsOjbyBmb2kgcG9zc8OtdmVsIGRldGVjdGFyIHBvc2nDp8OjbyBkZSAjeyRwcm9wZXJ0eX0uIFBhc3NlIHVtIHBhcsOibWV0cm8gJHBvc2l0aW9uIGV4cGzDrWNpdG8nO1xuICB9XG5cbiAgI3skcHJvcGVydHl9OiAkdmFsdWUrJGFkZDtcblxuICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhIHtcbiAgICAjeyRwcm9wZXJ0eX06IGNhbGMobWF4KCN7JHZhbHVlfSwgZW52KHNhZmUtYXJlYS1pbnNldC0jeyRwb3NpdGlvbn0pKSArICN7JGFkZH0pO1xuICB9XG59XG5cbi8qKiBBZGljaW9uYSBhIG1hcmdlbSBkZSBzZWd1cmFuw6dhIGEgdW0gY2VydG8gdmFsb3IgKi9cbkBtaXhpbiBzYWZlQXJlYUFkanVzdCgkcHJvcGVydHksICR2YWx1ZSwgJHBvc2l0aW9uOiBwb3NpdGlvbk9mKCRwcm9wZXJ0eSkpIHtcbiAgQGlmIG5vdCAkcG9zaXRpb24ge1xuICAgIEBlcnJvciAnTsOjbyBmb2kgcG9zc8OtdmVsIGRldGVjdGFyIHBvc2nDp8OjbyBkZSAjeyRwcm9wZXJ0eX0uIFBhc3NlIHVtIHBhcsOibWV0cm8gJHBvc2l0aW9uIGV4cGzDrWNpdG8nO1xuICB9XG5cbiAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgLy8gQ29tcGF0aWJpbGlkYWRlIGNvbSBpT1MgOS0xMDogcGFyYSB0b3AsIGFzc3VtaXIgMjBweCBkZSBiYXJyYSBkZSBzdGF0dXNcbiAgQGlmICRwb3NpdGlvbj09dG9wIHtcbiAgICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhKGZhbHNlKSB7XG4gICAgICBAaWYgc3RyLWluZGV4KCcjeyZ9JywgJy5pb3MnKSAhPW51bGwge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgMjBweCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLmlvcyAmIHtcbiAgICAgICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgMjBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhIHtcbiAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgZW52KHNhZmUtYXJlYS1pbnNldC0jeyRwb3NpdGlvbn0pKTtcbiAgfVxufVxuXG4vKiogRGVkdXogYSBxdWUgYm9yZGEgZGEgdGVsYSB1bWEgY2VydGEgcHJvcHJpZWRhZGUgc2UgcmVmZXJlICovXG5AZnVuY3Rpb24gcG9zaXRpb25PZigkcHJvcGVydHkpIHtcbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICd0b3AnKSAhPW51bGwge1xuICAgIEByZXR1cm4gdG9wO1xuICB9XG5cbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICdyaWdodCcpICE9bnVsbCB7XG4gICAgQHJldHVybiByaWdodDtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAnYm90dG9tJykgIT1udWxsIHtcbiAgICBAcmV0dXJuIGJvdHRvbTtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAnbGVmdCcpICE9bnVsbCB7XG4gICAgQHJldHVybiBsZWZ0O1xuICB9XG5cbiAgQHJldHVybiBudWxsO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vIEJhY2tncm91bmQgQ292ZXJcbkBtaXhpbiBjb3Zlci1iYWNrZ3JvdW5kKCRpbWctdXJpLCAkYmFja2dyb3VuZC10b3A6XCJjZW50ZXJcIiwgJGJhY2tncm91bmQtbGVmdDpcImNlbnRlclwiKSB7XG4gIGJhY2tncm91bmQ6IHVybCgkaW1nLXVyaSkgbm8tcmVwZWF0IHVucXVvdGUoJGJhY2tncm91bmQtdG9wKSB1bnF1b3RlKCRiYWNrZ3JvdW5kLWxlZnQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLy8gQ2VudHJhbGl6YWRvciBBYnNvbHV0b1xuXG5AbWl4aW4gY2VudGVyKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBAaWYgKCRob3Jpem9udGFsIGFuZCAkdmVydGljYWwpIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH0gQGVsc2UgaWYgKCRob3Jpem9udGFsKSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9IEBlbHNlIGlmICgkdmVydGljYWwpIHtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxufVxuXG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB4IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVYKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR2YWx1ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xufVxuXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geSAtLSovXG5AbWl4aW4gdHJhbnNmb3JtVHJhbnNsYXRlWSgkdmFsdWUpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkdmFsdWUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbn1cblxuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHogLS0qL1xuQG1peGluIHRyYW5zZm9ybVRyYW5zbGF0ZVooJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHZhbHVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG59XG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB4LCB5IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVEdWFsKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xufVxuXG4vKi0tIGhvcml6b250YWwtYWxpZ24gLS0qL1xuQG1peGluIGhvcml6b250YWxBbGlnbigkcG9zaXRpb24sICRwZXJjZW50YWdlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGxlZnQ6ICRwZXJjZW50YWdlO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVYKC0kcGVyY2VudGFnZSk7XG59XG5cbi8qLS0gdmVydGljYWwtYWxpZ24gLS0qL1xuQG1peGluIHZlcnRpY2FsQWxpZ24oJHBvc2l0aW9uLCAkcGVyY2VudGFnZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICB0b3A6ICRwZXJjZW50YWdlO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVZKC0kcGVyY2VudGFnZSk7XG59XG5cbi8qLS0gZHVhbC1hbGlnbiAtLSovXG5AbWl4aW4gZHVhbEFsaWduKCRwb3NpdGlvbiwgJHBlcmNlbnRhZ2VYLCAkcGVyY2VudGFnZVkpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgbGVmdDogJHBlcmNlbnRhZ2VYO1xuICB0b3A6ICRwZXJjZW50YWdlWTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtVHJhbnNsYXRlRHVhbCgtJHBlcmNlbnRhZ2VYLCAtJHBlcmNlbnRhZ2VZKTtcbn1cblxuLyotLSBtYXgtbGluZXMgLS0qL1xuQG1peGluIG1heExpbmVzKCR2YWx1ZSkge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICR2YWx1ZSAhaW1wb3J0YW50OyAvLyFwbGVhc2VcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblxufVxuIiwiLy8gZmFkZWluIHNlcXVlbmNpYWwgbGlzdGFcbi8vIEBleHRlbmQgLmZhZGVpbjtcbkBrZXlmcmFtZXMgZmFkZWluLWxpc3RhIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjVweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGVpbi1saXN0YSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZWluLWxpc3RhIC4zNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICBAZm9yICRpIGZyb20gMSB0byAyMCB7XG4gICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkgKiAuMTVzO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAvL29wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4vLy5hbmltYXRlLWZsaWNrZXIge1xuLy8gIGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiAxcyBpbmZpbml0ZTtcbi8vfVxuXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vL3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuLy9hbmltYXRpb246IGFuaW1UZXh0byAycyAgYWx0ZXJuYXRlO1xuQGtleWZyYW1lcyBhbmltVGV4dG8ge1xuICAwJSwgMjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC02MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVEb3duT3BhY2l0eSB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogLTIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvZm9udHMnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL2FuaW1hdGlvbnMnO1xuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gIC5pY29uLWNhc2gge1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICAubGItdGl0bGUtYiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sYWJlbC1kZWZhdWx0KTtcblxuICAgIGIge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuYnRuLWNvbmZpcm0ge1xuICAgICYubm8tbWFyZ2luLXRiIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWZvcm0ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYmxhY2stcmdiKSwgLjUpO1xuICAgIH1cbiAgfVxuXG4gIC5saXN0LXNjcm9sbFgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjJweCAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXG4gICAgLml0ZW0tY29udGF0byB7XG4gICAgICB3aWR0aDogNzJweDtcbiAgICAgIGhlaWdodDogNzRweDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIG1hcmdpbjogNHB4IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjRTlFM0RCO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDJDNztcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDE5cHggMCAjRUJFMkQ1O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgICAgJi5pcy1zZWxlY3Qge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG5cbiAgICAgICAgICAmLm5vLXBob3RvIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYmxhY2stcmdiKSwgMC43KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2stcmdiKTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XG5cbiAgICAgICAgJi5uby1waG90byB7XG4gICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/transferir/transferir.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/transferir/transferir.page.ts ***!
    \***********************************************/

  /*! exports provided: TransferirPage */

  /***/
  function srcAppTransferirTransferirPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferirPage", function () {
      return TransferirPage;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _modal_components_modal_transferencia_modal_transferencia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal-components/modal-transferencia/modal-transferencia-component */
    "./src/app/modal-components/modal-transferencia/modal-transferencia-component.ts");
    /* harmony import */


    var _modal_components_modal_default_modal_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-components/modal-default/modal-default-component */
    "./src/app/modal-components/modal-default/modal-default-component.ts");

    let TransferirPage = class TransferirPage {
      constructor(router, navCtrl, modalCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.listContatos = [{
          id: 1,
          nome: 'Amanda Nunes',
          foto: './assets/imgs/img-avatar.png'
        }, {
          id: 2,
          nome: 'Amanda Nunes',
          foto: null
        }, {
          id: 3,
          nome: 'Amanda Nunes',
          foto: './assets/imgs/img-avatar.png'
        }, {
          id: 4,
          nome: 'Amanda Nunes',
          foto: './assets/imgs/img-avatar.png'
        }, {
          id: 5,
          nome: 'Amanda Nunes',
          foto: null
        }];
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }),
          institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }),
          agency: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }),
          account: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }),
          saveContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](true)
        });
        this.step = 1;
        this.saldoAtual = '3.500';
        this.valorSelecionado = 0;
        this.contatoSelecionado = null;
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('ngOnInit - > TransferirPage');
        });
      }

      changeValue(value) {
        if (value && value.data) {
          this.valorSelecionado = value.data;
        }

        console.log(this.valorSelecionado);
      }

      stepTo() {
        this.step = this.step + 1;
        this.contatoSelecionado = null;
      }

      onSelectContact(ct) {
        this.contatoSelecionado = ct;
      }

      openModalConfirmar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let isNew, info;

          if (this.step === 3) {
            isNew = true;
            info = this.formGroup.value;
          } else {
            isNew = false;
            info = this.contatoSelecionado;
          }

          const modal = yield this.modalCtrl.create({
            component: _modal_components_modal_transferencia_modal_transferencia_component__WEBPACK_IMPORTED_MODULE_6__["ModalTransferenciaComponent"],
            keyboardClose: true,
            cssClass: 'modal-fab-bottom',
            componentProps: {
              data: info,
              newContact: isNew,
              valor: this.valorSelecionado
            }
          });
          modal.onWillDismiss().then(data => {
            if (data && data.data) {
              this.openModalSuccess();
            }
          });
          return yield modal.present();
        });
      }

      openModalSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: _modal_components_modal_default_modal_default_component__WEBPACK_IMPORTED_MODULE_7__["ModalDefaultComponent"],
            keyboardClose: true,
            cssClass: 'modal-fab-bottom modal-default',
            componentProps: {
              texto: 'Transferência realizada com sucesso!',
              icone: './assets/icons/icon-cash.png',
              cssClass: 'success'
            }
          });
          modal.onWillDismiss().then(info => {
            this.navCtrl.pop();
          });
          return yield modal.present();
        });
      }

      openModalSelectDay() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: _modal_components_modal_selecionar_dia_modal_selecionar_dia_component__WEBPACK_IMPORTED_MODULE_3__["ModalSelecionarDiaComponent"],
            keyboardClose: true,
            cssClass: 'modal-fab-bottom',
            componentProps: {}
          }); // modal.onDidDismiss().then((info: any) => {});

          return yield modal.present();
        });
      }

    };

    TransferirPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
    }];

    TransferirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transferir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transferir.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transferir/transferir.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transferir.page.scss */
      "./src/app/transferir/transferir.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], TransferirPage);
    /***/
  }
}]);
//# sourceMappingURL=transferir-transferir-module-es5.js.map