(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"btn-light\" [routerLink]=\"'/home'\" [routerDirection]=\"'back'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Acessar conta</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n    <div class=\"container-top-radius\">\n\n        <p>\n            <b>Criar conta</b> <br>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </p>\n\n        <div class=\"btns-content\">\n            <ion-fab-button class=\"btn-white\">\n                <img [src]=\"'/assets/icons/icon-facebook.png'\" alt=\"\">\n            </ion-fab-button>\n\n            <ion-fab-button class=\"btn-white\">\n                <img [src]=\"'/assets/icons/icon-google.png'\" alt=\"\">\n            </ion-fab-button>\n\n            <ion-fab-button class=\"btn-white\" [routerLink]=\"'/criar-conta'\" [routerDirection]=\"'forward'\">\n                <img class=\"hght-22\" [src]=\"'/assets/icons/icon-mail-logo.png'\" alt=\"\">\n            </ion-fab-button>\n        </div>\n\n        <p>\n            <b>Já tenho conta</b> <br>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </p>\n\n        <form [formGroup]=\"formGroup\" (submit)=\"authenticate()\">\n\n            <ion-item class=\"item-form\">\n                <ion-input ngModel\n                           type=\"email\"\n                           formControlName=\"email\"\n                           placeholder=\"email@mail.com\">\n                </ion-input>\n            </ion-item>\n\n            <!--ion-no-padding-->\n            <ion-item class=\"item-form\">\n                <ion-input ngModel\n                           type=\"password\"\n                           formControlName=\"password\"\n                           placeholder=\"Senha\">\n                </ion-input>\n            </ion-item>\n\n            <ion-button class=\"btn-light btn-forgot-pass\"\n                        (click)=\"onForgotPassword()\">Esqueceu a senha?\n            </ion-button>\n\n            <ion-button type=\"submit\"\n                        class=\"btn-round\"\n                        [disabled]=\"formGroup.invalid\"\n                        (click)=\"authenticate()\">Entrar\n            </ion-button>\n        </form>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];
    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n* {\n  font-family: \"Rawline\", sans-serif;\n  font-size: 100%;\n}\n/**\n* Cria icones customizados dentro do Ionicons\n*\n* @param {string} $arg - Nome do icone aplicado no prefixo \"icon\"\n* @param {string} $val - Valor do content relativo ao ícone\n*/\n/** Aplica o bloco apenas se o aparelho tiver ou não suporte à safe area */\n/**\n * Garante que haja um espaçamento mínimo numa certa posição, usando as margens\n * de segurança do próprio aparelho quando possível.\n *\n * Recomendado para padding em itens que ficam nas bordas da tela, ou para\n * margem de itens que flutuam.\n */\n/** Adiciona a margem de segurança a um certo valor */\n/** Deduz a que borda da tela uma certa propriedade se refere */\n/*-- transform: translate > x --*/\n/*-- transform: translate > y --*/\n/*-- transform: translate > z --*/\n/*-- transform: translate > x, y --*/\n/*-- horizontal-align --*/\n/*-- vertical-align --*/\n/*-- dual-align --*/\n/*-- max-lines --*/\n@-webkit-keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.fadein-lista, ion-content .item-form,\nion-content ion-fab-button {\n  opacity: 0;\n  -webkit-animation: fadein-lista 0.35s linear;\n          animation: fadein-lista 0.35s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.fadein-lista:nth-child(1), ion-content .item-form:nth-child(1),\nion-content ion-fab-button:nth-child(1) {\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n.fadein-lista:nth-child(2), ion-content .item-form:nth-child(2),\nion-content ion-fab-button:nth-child(2) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.fadein-lista:nth-child(3), ion-content .item-form:nth-child(3),\nion-content ion-fab-button:nth-child(3) {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s;\n}\n.fadein-lista:nth-child(4), ion-content .item-form:nth-child(4),\nion-content ion-fab-button:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.fadein-lista:nth-child(5), ion-content .item-form:nth-child(5),\nion-content ion-fab-button:nth-child(5) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.fadein-lista:nth-child(6), ion-content .item-form:nth-child(6),\nion-content ion-fab-button:nth-child(6) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.fadein-lista:nth-child(7), ion-content .item-form:nth-child(7),\nion-content ion-fab-button:nth-child(7) {\n  -webkit-animation-delay: 1.05s;\n          animation-delay: 1.05s;\n}\n.fadein-lista:nth-child(8), ion-content .item-form:nth-child(8),\nion-content ion-fab-button:nth-child(8) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.fadein-lista:nth-child(9), ion-content .item-form:nth-child(9),\nion-content ion-fab-button:nth-child(9) {\n  -webkit-animation-delay: 1.35s;\n          animation-delay: 1.35s;\n}\n.fadein-lista:nth-child(10), ion-content .item-form:nth-child(10),\nion-content ion-fab-button:nth-child(10) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.fadein-lista:nth-child(11), ion-content .item-form:nth-child(11),\nion-content ion-fab-button:nth-child(11) {\n  -webkit-animation-delay: 1.65s;\n          animation-delay: 1.65s;\n}\n.fadein-lista:nth-child(12), ion-content .item-form:nth-child(12),\nion-content ion-fab-button:nth-child(12) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.fadein-lista:nth-child(13), ion-content .item-form:nth-child(13),\nion-content ion-fab-button:nth-child(13) {\n  -webkit-animation-delay: 1.95s;\n          animation-delay: 1.95s;\n}\n.fadein-lista:nth-child(14), ion-content .item-form:nth-child(14),\nion-content ion-fab-button:nth-child(14) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.fadein-lista:nth-child(15), ion-content .item-form:nth-child(15),\nion-content ion-fab-button:nth-child(15) {\n  -webkit-animation-delay: 2.25s;\n          animation-delay: 2.25s;\n}\n.fadein-lista:nth-child(16), ion-content .item-form:nth-child(16),\nion-content ion-fab-button:nth-child(16) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.fadein-lista:nth-child(17), ion-content .item-form:nth-child(17),\nion-content ion-fab-button:nth-child(17) {\n  -webkit-animation-delay: 2.55s;\n          animation-delay: 2.55s;\n}\n.fadein-lista:nth-child(18), ion-content .item-form:nth-child(18),\nion-content ion-fab-button:nth-child(18) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.fadein-lista:nth-child(19), ion-content .item-form:nth-child(19),\nion-content ion-fab-button:nth-child(19) {\n  -webkit-animation-delay: 2.85s;\n          animation-delay: 2.85s;\n}\n@keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes slideDownOpacity {\n  from {\n    bottom: -600px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes slideDownOpacity {\n  from {\n    bottom: -200px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\nion-header ion-toolbar {\n  --color: var(--ion-color-white);\n}\nion-header ion-toolbar ion-buttons ion-button ion-icon {\n  color: white;\n}\nion-content {\n  --padding-top: 16px;\n  --background: var(--ion-color-primary);\n}\nion-content form {\n  margin: 22px 0;\n}\nion-content p {\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: var(--ion-color-labels-rgb);\n}\nion-content p b {\n  font-size: 15px;\n  font-weight: 600;\n}\nion-content .btns-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 16px 0 54px;\n}\nion-content .btns-content ion-fab-button {\n  width: 44px;\n  height: 44px;\n  margin: 0 16px;\n}\nion-content .btns-content ion-fab-button img {\n  height: 24px;\n}\nion-content .btns-content ion-fab-button img.hght-22 {\n  height: 22px;\n}\nion-content .btn-forgot-pass {\n  float: right;\n  margin: 0;\n  height: 26px;\n  font-weight: normal;\n  --border-radius: 26px;\n}\nion-content .btn-round {\n  width: 50%;\n  margin: 22px 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL2ZvbnRzLnNjc3MiLCIvVXNlcnMvcGF1bG9ib250ZW1wby9Eb2N1bWVudHMvZG9uZS9wYXVsb2JvbnRlbXBvL28tam9nby9zcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCIvVXNlcnMvcGF1bG9ib250ZW1wby9Eb2N1bWVudHMvZG9uZS9wYXVsb2JvbnRlbXBvL28tam9nby9zcmMvdGhlbWUvYW5pbWF0aW9ucy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FERUY7QUUyQkE7Ozs7O0NBQUE7QUFvQkEsMEVBQUE7QUFnQkE7Ozs7OztFQUFBO0FBbUJBLHFEQUFBO0FBMEJBLCtEQUFBO0FBbURBLGlDQUFBO0FBT0EsaUNBQUE7QUFPQSxpQ0FBQTtBQU9BLG9DQUFBO0FBT0EseUJBQUE7QUFPQSx1QkFBQTtBQU9BLG1CQUFBO0FBUUEsa0JBQUE7QUNuTkE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7SUFDQSxVQUFBO0VINkJGO0VHMUJBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtJQUNBLFVBQUE7RUg0QkY7QUFDRjtBR3JDQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtJQUNBLFVBQUE7RUg2QkY7RUcxQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsVUFBQTtFSDRCRjtBQUNGO0FHekJBOztFQUNFLFVBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBSDRCRjtBR3pCSTs7RUFDRSw4QkFBQTtVQUFB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QkFBQTtFSGtGRjtBQUNGO0FJMU1FO0VBQ0UsK0JBQUE7QUo0TUo7QUl4TVE7RUFDRSxZQUFBO0FKME1WO0FJbk1BO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtBSnNNRjtBSXBNRTtFQUNFLGNBQUE7QUpzTUo7QUluTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FKcU1KO0FJbk1JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FKcU1OO0FJNUxFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBSjhMSjtBSTVMSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBSjhMTjtBSTVMTTtFQUNFLFlBQUE7QUo4TFI7QUk1TFE7RUFDRSxZQUFBO0FKOExWO0FJeExFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBSjBMSjtBSXZMRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBSnlMSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBmb250LWZhbWlseTogXCJSYXdsaW5lXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyoqXG4qIENyaWEgaWNvbmVzIGN1c3RvbWl6YWRvcyBkZW50cm8gZG8gSW9uaWNvbnNcbipcbiogQHBhcmFtIHtzdHJpbmd9ICRhcmcgLSBOb21lIGRvIGljb25lIGFwbGljYWRvIG5vIHByZWZpeG8gXCJpY29uXCJcbiogQHBhcmFtIHtzdHJpbmd9ICR2YWwgLSBWYWxvciBkbyBjb250ZW50IHJlbGF0aXZvIGFvIMOtY29uZVxuKi9cbi8qKiBBcGxpY2EgbyBibG9jbyBhcGVuYXMgc2UgbyBhcGFyZWxobyB0aXZlciBvdSBuw6NvIHN1cG9ydGUgw6Agc2FmZSBhcmVhICovXG4vKipcbiAqIEdhcmFudGUgcXVlIGhhamEgdW0gZXNwYcOnYW1lbnRvIG3DrW5pbW8gbnVtYSBjZXJ0YSBwb3Npw6fDo28sIHVzYW5kbyBhcyBtYXJnZW5zXG4gKiBkZSBzZWd1cmFuw6dhIGRvIHByw7NwcmlvIGFwYXJlbGhvIHF1YW5kbyBwb3Nzw612ZWwuXG4gKlxuICogUmVjb21lbmRhZG8gcGFyYSBwYWRkaW5nIGVtIGl0ZW5zIHF1ZSBmaWNhbSBuYXMgYm9yZGFzIGRhIHRlbGEsIG91IHBhcmFcbiAqIG1hcmdlbSBkZSBpdGVucyBxdWUgZmx1dHVhbS5cbiAqL1xuLyoqIEFkaWNpb25hIGEgbWFyZ2VtIGRlIHNlZ3VyYW7Dp2EgYSB1bSBjZXJ0byB2YWxvciAqL1xuLyoqIERlZHV6IGEgcXVlIGJvcmRhIGRhIHRlbGEgdW1hIGNlcnRhIHByb3ByaWVkYWRlIHNlIHJlZmVyZSAqL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHggLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHkgLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHogLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHgsIHkgLS0qL1xuLyotLSBob3Jpem9udGFsLWFsaWduIC0tKi9cbi8qLS0gdmVydGljYWwtYWxpZ24gLS0qL1xuLyotLSBkdWFsLWFsaWduIC0tKi9cbi8qLS0gbWF4LWxpbmVzIC0tKi9cbkBrZXlmcmFtZXMgZmFkZWluLWxpc3RhIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjVweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZWluLWxpc3RhLCBpb24tY29udGVudCAuaXRlbS1mb3JtLFxuaW9uLWNvbnRlbnQgaW9uLWZhYi1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVpbi1saXN0YSAwLjM1cyBsaW5lYXI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMSksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDEpLFxuaW9uLWNvbnRlbnQgaW9uLWZhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDIpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCgyKSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDMpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCgzKSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg0KSwgaW9uLWNvbnRlbnQgLml0ZW0tZm9ybTpudGgtY2hpbGQoNCksXG5pb24tY29udGVudCBpb24tZmFiLWJ1dHRvbjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg1KSwgaW9uLWNvbnRlbnQgLml0ZW0tZm9ybTpudGgtY2hpbGQoNSksXG5pb24tY29udGVudCBpb24tZmFiLWJ1dHRvbjpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNzVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNiksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDYpLFxuaW9uLWNvbnRlbnQgaW9uLWZhYi1idXR0b246bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNyksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDcpLFxuaW9uLWNvbnRlbnQgaW9uLWZhYi1idXR0b246bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDgpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCg4KSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4ycztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDkpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCg5KSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCg5KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4zNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxMCksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDEwKSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCgxMCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxMSksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDExKSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCgxMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTIpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCgxMiksXG5pb24tY29udGVudCBpb24tZmFiLWJ1dHRvbjpudGgtY2hpbGQoMTIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTMpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCgxMyksXG5pb24tY29udGVudCBpb24tZmFiLWJ1dHRvbjpudGgtY2hpbGQoMTMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjk1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE0KSwgaW9uLWNvbnRlbnQgLml0ZW0tZm9ybTpudGgtY2hpbGQoMTQpLFxuaW9uLWNvbnRlbnQgaW9uLWZhYi1idXR0b246bnRoLWNoaWxkKDE0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE1KSwgaW9uLWNvbnRlbnQgLml0ZW0tZm9ybTpudGgtY2hpbGQoMTUpLFxuaW9uLWNvbnRlbnQgaW9uLWZhYi1idXR0b246bnRoLWNoaWxkKDE1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4yNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNiksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDE2KSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCgxNikge1xuICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNyksIGlvbi1jb250ZW50IC5pdGVtLWZvcm06bnRoLWNoaWxkKDE3KSxcbmlvbi1jb250ZW50IGlvbi1mYWItYnV0dG9uOm50aC1jaGlsZCgxNykge1xuICBhbmltYXRpb24tZGVsYXk6IDIuNTVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTgpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCgxOCksXG5pb24tY29udGVudCBpb24tZmFiLWJ1dHRvbjpudGgtY2hpbGQoMTgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjdzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTkpLCBpb24tY29udGVudCAuaXRlbS1mb3JtOm50aC1jaGlsZCgxOSksXG5pb24tY29udGVudCBpb24tZmFiLWJ1dHRvbjpudGgtY2hpbGQoMTkpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjg1cztcbn1cblxuQGtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1UZXh0byB7XG4gIDAlLCAyNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgNzUlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC02MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC0yMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IGZvcm0ge1xuICBtYXJnaW46IDIycHggMDtcbn1cbmlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGFiZWxzLXJnYik7XG59XG5pb24tY29udGVudCBwIGIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY29udGVudCAuYnRucy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTZweCAwIDU0cHg7XG59XG5pb24tY29udGVudCAuYnRucy1jb250ZW50IGlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5pb24tY29udGVudCAuYnRucy1jb250ZW50IGlvbi1mYWItYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMjRweDtcbn1cbmlvbi1jb250ZW50IC5idG5zLWNvbnRlbnQgaW9uLWZhYi1idXR0b24gaW1nLmhnaHQtMjIge1xuICBoZWlnaHQ6IDIycHg7XG59XG5pb24tY29udGVudCAuYnRuLWZvcmdvdC1wYXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNnB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bi1yb3VuZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMjJweCAyNSU7XG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnUmF3bGluZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cbiIsIi8vIE1peGluc1xuXG4vLyBNaXhpbnMgZGUgdGFibGV0LCB1c2UgZWxlcyBxdWFuZG8gcXVpc2VyIHF1ZSB1bSBjb250cm9sZSBtb2RpZmlxdWUgbyB0YW1hbmhvIG91IGZvbnRlIHF1YW5kbyBmb3IgdGFibGV0XG4vLyBtYW50ZW5oYSBhIGVzdHJ1dHVyYSBub3JtYWwgZGUgZXNjcml0YSBkZSBjc3Mgc2VtIHByZWNpc2FyIHJlZXNjcmV2ZXIgY3NzIGVzcGVjw61maWNvIHBhcmEgdGFibGV0XG4kdGFibGV0LXdpZHRoOiA3NjhweDtcblxuXG5AbWl4aW4gbGluZS1oZWlnaHQoJHNpemUgLCAkYmlnOiB0cnVlKSB7XG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZSArIHB4O1xuICBAaWYgJGJpZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAoJHNpemUgKiAxLjUpICsgcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGZvbnRzaXplKCRzaXplLCAkc21hbGw6dHJ1ZSwgJGJpZzogdHJ1ZSkge1xuICBmb250LXNpemU6ICRzaXplICsgcHg7XG4gIEBpZiAkYmlnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xuICAgICAgZm9udC1zaXplOiAoJHNpemUgKiAxLjUpICsgcHg7XG4gICAgfVxuICB9XG4gIEBpZiAkc21hbGwge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzbWFsbC1jZWxsLXdpZHRofSkge1xuICAgICAgZm9udC1zaXplOiAoJHNpemUgKiAwLjgpICsgcHg7XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4qIENyaWEgaWNvbmVzIGN1c3RvbWl6YWRvcyBkZW50cm8gZG8gSW9uaWNvbnNcbipcbiogQHBhcmFtIHtzdHJpbmd9ICRhcmcgLSBOb21lIGRvIGljb25lIGFwbGljYWRvIG5vIHByZWZpeG8gXCJpY29uXCJcbiogQHBhcmFtIHtzdHJpbmd9ICR2YWwgLSBWYWxvciBkbyBjb250ZW50IHJlbGF0aXZvIGFvIMOtY29uZVxuKi9cbkBtaXhpbiBpY29uZXMoJGFyZywgJHZhbCkge1xuICAuaWNvbi0jeyRhcmd9OmJlZm9yZSxcbiAgLmlvbi1pb3MtaWNvbi0jeyRhcmd9OmJlZm9yZSxcbiAgLmlvbi1pb3MtaWNvbi0jeyRhcmd9LW91dGxpbmU6YmVmb3JlLFxuICAuaW9uLW1kLWljb24tI3skYXJnfTpiZWZvcmUsXG4gIC5pb24tbWQtaWNvbi0jeyRhcmd9LW91dGxpbmU6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gICAgY29udGVudDogJHZhbDtcbiAgICAvL2ZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICsgMS4xNTtcbiAgfVxufVxuXG5cbi8vIGlwaG9uZSB4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqIEFwbGljYSBvIGJsb2NvIGFwZW5hcyBzZSBvIGFwYXJlbGhvIHRpdmVyIG91IG7Do28gc3Vwb3J0ZSDDoCBzYWZlIGFyZWEgKi9cbi8vQGluY2x1ZGUgc2FmZUFyZWFBZGp1c3QocGFkZGluZy10b3AsIDBweCk7XG5AbWl4aW4gc3VwcG9ydHNTYWZlQXJlYSgkc3VwcG9ydHM6IHRydWUpIHtcbiAgJGV4cHI6IHVucXVvdGUoJ21heChlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpJyk7XG5cbiAgQGlmICRzdXBwb3J0cyB7XG4gICAgQHN1cHBvcnRzICh0b3A6ICRleHByKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBzdXBwb3J0cyBub3QgKHRvcDogJGV4cHIpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdhcmFudGUgcXVlIGhhamEgdW0gZXNwYcOnYW1lbnRvIG3DrW5pbW8gbnVtYSBjZXJ0YSBwb3Npw6fDo28sIHVzYW5kbyBhcyBtYXJnZW5zXG4gKiBkZSBzZWd1cmFuw6dhIGRvIHByw7NwcmlvIGFwYXJlbGhvIHF1YW5kbyBwb3Nzw612ZWwuXG4gKlxuICogUmVjb21lbmRhZG8gcGFyYSBwYWRkaW5nIGVtIGl0ZW5zIHF1ZSBmaWNhbSBuYXMgYm9yZGFzIGRhIHRlbGEsIG91IHBhcmFcbiAqIG1hcmdlbSBkZSBpdGVucyBxdWUgZmx1dHVhbS5cbiAqL1xuQG1peGluIG1pbkluc2V0KCRwcm9wZXJ0eSwkdmFsdWU6ICRjb250ZW50LXBhZGRpbmcsJHBvc2l0aW9uOiBwb3NpdGlvbk9mKCRwcm9wZXJ0eSksJGFkZDogMHB4KSB7XG4gIEBpZiBub3QgJHBvc2l0aW9uIHtcbiAgICBAZXJyb3IgJ07Do28gZm9pIHBvc3PDrXZlbCBkZXRlY3RhciBwb3Npw6fDo28gZGUgI3skcHJvcGVydHl9LiBQYXNzZSB1bSBwYXLDom1ldHJvICRwb3NpdGlvbiBleHBsw61jaXRvJztcbiAgfVxuXG4gICN7JHByb3BlcnR5fTogJHZhbHVlKyRhZGQ7XG5cbiAgQGluY2x1ZGUgc3VwcG9ydHNTYWZlQXJlYSB7XG4gICAgI3skcHJvcGVydHl9OiBjYWxjKG1heCgjeyR2YWx1ZX0sIGVudihzYWZlLWFyZWEtaW5zZXQtI3skcG9zaXRpb259KSkgKyAjeyRhZGR9KTtcbiAgfVxufVxuXG4vKiogQWRpY2lvbmEgYSBtYXJnZW0gZGUgc2VndXJhbsOnYSBhIHVtIGNlcnRvIHZhbG9yICovXG5AbWl4aW4gc2FmZUFyZWFBZGp1c3QoJHByb3BlcnR5LCAkdmFsdWUsICRwb3NpdGlvbjogcG9zaXRpb25PZigkcHJvcGVydHkpKSB7XG4gIEBpZiBub3QgJHBvc2l0aW9uIHtcbiAgICBAZXJyb3IgJ07Do28gZm9pIHBvc3PDrXZlbCBkZXRlY3RhciBwb3Npw6fDo28gZGUgI3skcHJvcGVydHl9LiBQYXNzZSB1bSBwYXLDom1ldHJvICRwb3NpdGlvbiBleHBsw61jaXRvJztcbiAgfVxuXG4gICN7JHByb3BlcnR5fTogJHZhbHVlO1xuXG4gIC8vIENvbXBhdGliaWxpZGFkZSBjb20gaU9TIDktMTA6IHBhcmEgdG9wLCBhc3N1bWlyIDIwcHggZGUgYmFycmEgZGUgc3RhdHVzXG4gIEBpZiAkcG9zaXRpb249PXRvcCB7XG4gICAgQGluY2x1ZGUgc3VwcG9ydHNTYWZlQXJlYShmYWxzZSkge1xuICAgICAgQGlmIHN0ci1pbmRleCgnI3smfScsICcuaW9zJykgIT1udWxsIHtcbiAgICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JHZhbHVlfSArIDIwcHgpO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIC5pb3MgJiB7XG4gICAgICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JHZhbHVlfSArIDIwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgc3VwcG9ydHNTYWZlQXJlYSB7XG4gICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JHZhbHVlfSArIGVudihzYWZlLWFyZWEtaW5zZXQtI3skcG9zaXRpb259KSk7XG4gIH1cbn1cblxuLyoqIERlZHV6IGEgcXVlIGJvcmRhIGRhIHRlbGEgdW1hIGNlcnRhIHByb3ByaWVkYWRlIHNlIHJlZmVyZSAqL1xuQGZ1bmN0aW9uIHBvc2l0aW9uT2YoJHByb3BlcnR5KSB7XG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAndG9wJykgIT1udWxsIHtcbiAgICBAcmV0dXJuIHRvcDtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAncmlnaHQnKSAhPW51bGwge1xuICAgIEByZXR1cm4gcmlnaHQ7XG4gIH1cblxuICBAaWYgc3RyLWluZGV4KCRwcm9wZXJ0eSwgJ2JvdHRvbScpICE9bnVsbCB7XG4gICAgQHJldHVybiBib3R0b207XG4gIH1cblxuICBAaWYgc3RyLWluZGV4KCRwcm9wZXJ0eSwgJ2xlZnQnKSAhPW51bGwge1xuICAgIEByZXR1cm4gbGVmdDtcbiAgfVxuXG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyBCYWNrZ3JvdW5kIENvdmVyXG5AbWl4aW4gY292ZXItYmFja2dyb3VuZCgkaW1nLXVyaSwgJGJhY2tncm91bmQtdG9wOlwiY2VudGVyXCIsICRiYWNrZ3JvdW5kLWxlZnQ6XCJjZW50ZXJcIikge1xuICBiYWNrZ3JvdW5kOiB1cmwoJGltZy11cmkpIG5vLXJlcGVhdCB1bnF1b3RlKCRiYWNrZ3JvdW5kLXRvcCkgdW5xdW90ZSgkYmFja2dyb3VuZC1sZWZ0KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8vIENlbnRyYWxpemFkb3IgQWJzb2x1dG9cblxuQG1peGluIGNlbnRlcigkaG9yaXpvbnRhbDogdHJ1ZSwgJHZlcnRpY2FsOiB0cnVlKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgQGlmICgkaG9yaXpvbnRhbCBhbmQgJHZlcnRpY2FsKSB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9IEBlbHNlIGlmICgkaG9yaXpvbnRhbCkge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgfSBAZWxzZSBpZiAoJHZlcnRpY2FsKSB7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbn1cblxuXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geCAtLSovXG5AbWl4aW4gdHJhbnNmb3JtVHJhbnNsYXRlWCgkdmFsdWUpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHZhbHVlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHZhbHVlKTtcbn1cblxuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHkgLS0qL1xuQG1peGluIHRyYW5zZm9ybVRyYW5zbGF0ZVkoJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR2YWx1ZSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR2YWx1ZSk7XG59XG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB6IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVaKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigkdmFsdWUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigkdmFsdWUpO1xufVxuXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geCwgeSAtLSovXG5AbWl4aW4gdHJhbnNmb3JtVHJhbnNsYXRlRHVhbCgkeCwgJHkpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbn1cblxuLyotLSBob3Jpem9udGFsLWFsaWduIC0tKi9cbkBtaXhpbiBob3Jpem9udGFsQWxpZ24oJHBvc2l0aW9uLCAkcGVyY2VudGFnZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBsZWZ0OiAkcGVyY2VudGFnZTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtVHJhbnNsYXRlWCgtJHBlcmNlbnRhZ2UpO1xufVxuXG4vKi0tIHZlcnRpY2FsLWFsaWduIC0tKi9cbkBtaXhpbiB2ZXJ0aWNhbEFsaWduKCRwb3NpdGlvbiwgJHBlcmNlbnRhZ2UpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgdG9wOiAkcGVyY2VudGFnZTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtVHJhbnNsYXRlWSgtJHBlcmNlbnRhZ2UpO1xufVxuXG4vKi0tIGR1YWwtYWxpZ24gLS0qL1xuQG1peGluIGR1YWxBbGlnbigkcG9zaXRpb24sICRwZXJjZW50YWdlWCwgJHBlcmNlbnRhZ2VZKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGxlZnQ6ICRwZXJjZW50YWdlWDtcbiAgdG9wOiAkcGVyY2VudGFnZVk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybVRyYW5zbGF0ZUR1YWwoLSRwZXJjZW50YWdlWCwgLSRwZXJjZW50YWdlWSk7XG59XG5cbi8qLS0gbWF4LWxpbmVzIC0tKi9cbkBtaXhpbiBtYXhMaW5lcygkdmFsdWUpIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkdmFsdWUgIWltcG9ydGFudDsgLy8hcGxlYXNlXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG5cbn1cbiIsIi8vIGZhZGVpbiBzZXF1ZW5jaWFsIGxpc3RhXG4vLyBAZXh0ZW5kIC5mYWRlaW47XG5Aa2V5ZnJhbWVzIGZhZGVpbi1saXN0YSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTI1cHgsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlaW4tbGlzdGEge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVpbi1saXN0YSAuMzVzIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbiAgQGZvciAkaSBmcm9tIDEgdG8gMjAge1xuICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6ICRpICogLjE1cztcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLy9vcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLy8uYW5pbWF0ZS1mbGlja2VyIHtcbi8vICBhbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gMXMgaW5maW5pdGU7XG4vL31cblxuQGtleWZyYW1lcyBmbGlja2VyQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbi8vYW5pbWF0aW9uOiBhbmltVGV4dG8gMnMgIGFsdGVybmF0ZTtcbkBrZXlmcmFtZXMgYW5pbVRleHRvIHtcbiAgMCUsIDI1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgfVxuICA3NSUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd25PcGFjaXR5IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtNjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC0yMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2ZvbnRzJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL21peGlucyc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9hbmltYXRpb25zJztcblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICBmb3JtIHtcbiAgICBtYXJnaW46IDIycHggMDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sYWJlbHMtcmdiKTtcblxuICAgIGIge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuaXRlbS1mb3JtLFxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgQGV4dGVuZCAuZmFkZWluLWxpc3RhO1xuICB9XG5cbiAgLmJ0bnMtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTZweCAwIDU0cHg7XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNDRweDtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIG1hcmdpbjogMCAxNnB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG5cbiAgICAgICAgJi5oZ2h0LTIyIHtcbiAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLWZvcmdvdC1wYXNzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMjZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjZweDtcbiAgfVxuXG4gIC5idG4tcm91bmQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAyMnB4IDI1JTtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LoginPage = class LoginPage {
      constructor(storage, navCtrl, router) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.router = router;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          })
        });
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('ngOnInit - > LoginPage');
        });
      }

      authenticate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.storage.set('is-login', true); // this.navCtrl.navigateBack('home');

          this.navCtrl.navigateRoot('home');
        });
      }

      onForgotPassword() {}

    };

    LoginPage.ctorParameters = () => [{
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map