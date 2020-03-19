(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aprender-jogar-aprender-jogar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aprender-jogar/aprender-jogar.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aprender-jogar/aprender-jogar.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAprenderJogarAprenderJogarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"btn-light\" [routerLink]=\"'/home'\" [routerDirection]=\"'back'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Aprender a jogar</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n    <div class=\"container-top-radius\">\n\n        <ion-card class=\"card-banner mg-top-0\">\n            <div class=\"title\">Aprenda</div>\n            <p>Não sabe jogar? <br> Aprenda e comece agora!</p>\n        </ion-card>\n\n        <ion-item button tappable class=\"item-form\" *ngFor=\"let item of listTopicos;\"\n                  (click)=\"openModalDetail(item)\">\n            <ion-label>{{item.titulo}}</ion-label>\n        </ion-item>\n\n        <h2>Não encontrou sua dúvida? <br> Entre em contato.</h2>\n\n        <ion-button class=\"btn-confirm\">Fale conosco</ion-button>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/aprender-jogar/aprender-jogar.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/aprender-jogar/aprender-jogar.module.ts ***!
    \*********************************************************/

  /*! exports provided: AprenderJogarPageModule */

  /***/
  function srcAppAprenderJogarAprenderJogarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AprenderJogarPageModule", function () {
      return AprenderJogarPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _aprender_jogar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./aprender-jogar.page */
    "./src/app/aprender-jogar/aprender-jogar.page.ts");

    const routes = [{
      path: '',
      component: _aprender_jogar_page__WEBPACK_IMPORTED_MODULE_7__["AprenderJogarPage"]
    }];
    let AprenderJogarPageModule = class AprenderJogarPageModule {};
    AprenderJogarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_aprender_jogar_page__WEBPACK_IMPORTED_MODULE_7__["AprenderJogarPage"]]
    })], AprenderJogarPageModule);
    /***/
  },

  /***/
  "./src/app/aprender-jogar/aprender-jogar.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/aprender-jogar/aprender-jogar.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAprenderJogarAprenderJogarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n* {\n  font-family: \"Rawline\", sans-serif;\n  font-size: 100%;\n}\n/**\n* Cria icones customizados dentro do Ionicons\n*\n* @param {string} $arg - Nome do icone aplicado no prefixo \"icon\"\n* @param {string} $val - Valor do content relativo ao ícone\n*/\n/** Aplica o bloco apenas se o aparelho tiver ou não suporte à safe area */\n/**\n * Garante que haja um espaçamento mínimo numa certa posição, usando as margens\n * de segurança do próprio aparelho quando possível.\n *\n * Recomendado para padding em itens que ficam nas bordas da tela, ou para\n * margem de itens que flutuam.\n */\n/** Adiciona a margem de segurança a um certo valor */\n/** Deduz a que borda da tela uma certa propriedade se refere */\n/*-- transform: translate > x --*/\n/*-- transform: translate > y --*/\n/*-- transform: translate > z --*/\n/*-- transform: translate > x, y --*/\n/*-- horizontal-align --*/\n/*-- vertical-align --*/\n/*-- dual-align --*/\n/*-- max-lines --*/\n@-webkit-keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.fadein-lista {\n  opacity: 0;\n  -webkit-animation: fadein-lista 0.35s linear;\n          animation: fadein-lista 0.35s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.fadein-lista:nth-child(1) {\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n.fadein-lista:nth-child(2) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.fadein-lista:nth-child(3) {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s;\n}\n.fadein-lista:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.fadein-lista:nth-child(5) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.fadein-lista:nth-child(6) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.fadein-lista:nth-child(7) {\n  -webkit-animation-delay: 1.05s;\n          animation-delay: 1.05s;\n}\n.fadein-lista:nth-child(8) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.fadein-lista:nth-child(9) {\n  -webkit-animation-delay: 1.35s;\n          animation-delay: 1.35s;\n}\n.fadein-lista:nth-child(10) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.fadein-lista:nth-child(11) {\n  -webkit-animation-delay: 1.65s;\n          animation-delay: 1.65s;\n}\n.fadein-lista:nth-child(12) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.fadein-lista:nth-child(13) {\n  -webkit-animation-delay: 1.95s;\n          animation-delay: 1.95s;\n}\n.fadein-lista:nth-child(14) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.fadein-lista:nth-child(15) {\n  -webkit-animation-delay: 2.25s;\n          animation-delay: 2.25s;\n}\n.fadein-lista:nth-child(16) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.fadein-lista:nth-child(17) {\n  -webkit-animation-delay: 2.55s;\n          animation-delay: 2.55s;\n}\n.fadein-lista:nth-child(18) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.fadein-lista:nth-child(19) {\n  -webkit-animation-delay: 2.85s;\n          animation-delay: 2.85s;\n}\n@keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes slideDownOpacity {\n  from {\n    bottom: -600px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes slideDownOpacity {\n  from {\n    bottom: -200px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\nion-content {\n  --padding-top: 16px;\n}\nion-content .card-banner {\n  margin-bottom: 34px;\n  --background: url(\"/assets/imgs/img-card-banner-home.png\") no-repeat right top / contain var(--ion-color-tertiary);\n}\nion-content ion-item ion-label {\n  font-size: 14px;\n  font-weight: 500;\n  white-space: normal;\n  color: var(--ion-color-label-default);\n}\nion-content h2 {\n  margin: 32px 0 22px;\n  text-align: center;\n  font-weight: bold;\n  color: rgba(var(--ion-color-black-rgb), 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXByZW5kZXItam9nYXIvYXByZW5kZXItam9nYXIucGFnZS5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL2ZvbnRzLnNjc3MiLCIvVXNlcnMvcGF1bG9ib250ZW1wby9Eb2N1bWVudHMvZG9uZS9wYXVsb2JvbnRlbXBvL28tam9nby9zcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCIvVXNlcnMvcGF1bG9ib250ZW1wby9Eb2N1bWVudHMvZG9uZS9wYXVsb2JvbnRlbXBvL28tam9nby9zcmMvdGhlbWUvYW5pbWF0aW9ucy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL2FwcC9hcHJlbmRlci1qb2dhci9hcHJlbmRlci1qb2dhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FERUY7QUUyQkE7Ozs7O0NBQUE7QUFvQkEsMEVBQUE7QUFnQkE7Ozs7OztFQUFBO0FBbUJBLHFEQUFBO0FBMEJBLCtEQUFBO0FBbURBLGlDQUFBO0FBT0EsaUNBQUE7QUFPQSxpQ0FBQTtBQU9BLG9DQUFBO0FBT0EseUJBQUE7QUFPQSx1QkFBQTtBQU9BLG1CQUFBO0FBUUEsa0JBQUE7QUNuTkE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7SUFDQSxVQUFBO0VINkJGO0VHMUJBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtJQUNBLFVBQUE7RUg0QkY7QUFDRjtBR3JDQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtJQUNBLFVBQUE7RUg2QkY7RUcxQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsVUFBQTtFSDRCRjtBQUNGO0FHekJBO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxxQ0FBQTtVQUFB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QUNBLGdDQUFBO1lBQUEsd0JBQUE7RUg4REY7QUFDRjtBSXZMQTtFQUNFLG1CQUFBO0FKeUxGO0FJdkxFO0VBQ0UsbUJBQUE7RUFDQSxrSEFBQTtBSnlMSjtBSXJMSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUp1TE47QUluTEU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBSnFMSiIsImZpbGUiOiJzcmMvYXBwL2FwcmVuZGVyLWpvZ2FyL2FwcmVuZGVyLWpvZ2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBmb250LWZhbWlseTogXCJSYXdsaW5lXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyoqXG4qIENyaWEgaWNvbmVzIGN1c3RvbWl6YWRvcyBkZW50cm8gZG8gSW9uaWNvbnNcbipcbiogQHBhcmFtIHtzdHJpbmd9ICRhcmcgLSBOb21lIGRvIGljb25lIGFwbGljYWRvIG5vIHByZWZpeG8gXCJpY29uXCJcbiogQHBhcmFtIHtzdHJpbmd9ICR2YWwgLSBWYWxvciBkbyBjb250ZW50IHJlbGF0aXZvIGFvIMOtY29uZVxuKi9cbi8qKiBBcGxpY2EgbyBibG9jbyBhcGVuYXMgc2UgbyBhcGFyZWxobyB0aXZlciBvdSBuw6NvIHN1cG9ydGUgw6Agc2FmZSBhcmVhICovXG4vKipcbiAqIEdhcmFudGUgcXVlIGhhamEgdW0gZXNwYcOnYW1lbnRvIG3DrW5pbW8gbnVtYSBjZXJ0YSBwb3Npw6fDo28sIHVzYW5kbyBhcyBtYXJnZW5zXG4gKiBkZSBzZWd1cmFuw6dhIGRvIHByw7NwcmlvIGFwYXJlbGhvIHF1YW5kbyBwb3Nzw612ZWwuXG4gKlxuICogUmVjb21lbmRhZG8gcGFyYSBwYWRkaW5nIGVtIGl0ZW5zIHF1ZSBmaWNhbSBuYXMgYm9yZGFzIGRhIHRlbGEsIG91IHBhcmFcbiAqIG1hcmdlbSBkZSBpdGVucyBxdWUgZmx1dHVhbS5cbiAqL1xuLyoqIEFkaWNpb25hIGEgbWFyZ2VtIGRlIHNlZ3VyYW7Dp2EgYSB1bSBjZXJ0byB2YWxvciAqL1xuLyoqIERlZHV6IGEgcXVlIGJvcmRhIGRhIHRlbGEgdW1hIGNlcnRhIHByb3ByaWVkYWRlIHNlIHJlZmVyZSAqL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHggLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHkgLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHogLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHgsIHkgLS0qL1xuLyotLSBob3Jpem9udGFsLWFsaWduIC0tKi9cbi8qLS0gdmVydGljYWwtYWxpZ24gLS0qL1xuLyotLSBkdWFsLWFsaWduIC0tKi9cbi8qLS0gbWF4LWxpbmVzIC0tKi9cbkBrZXlmcmFtZXMgZmFkZWluLWxpc3RhIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjVweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZWluLWxpc3RhIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4tbGlzdGEgMC4zNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNDVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC43NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoOSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMzVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTApIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjY1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS44cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS45NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDIuMXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDIuMjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjU1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi43cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE5KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi44NXM7XG59XG5cbkBrZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltVGV4dG8ge1xuICAwJSwgMjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZURvd25PcGFjaXR5IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtNjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZURvd25PcGFjaXR5IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtMjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmQtYmFubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZ3MvaW1nLWNhcmQtYmFubmVyLWhvbWUucG5nXCIpIG5vLXJlcGVhdCByaWdodCB0b3AgLyBjb250YWluIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGFiZWwtZGVmYXVsdCk7XG59XG5pb24tY29udGVudCBoMiB7XG4gIG1hcmdpbjogMzJweCAwIDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1ibGFjay1yZ2IpLCAwLjYpO1xufSIsIioge1xuICBmb250LWZhbWlseTogJ1Jhd2xpbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwMCU7XG59XG4iLCIvLyBNaXhpbnNcblxuLy8gTWl4aW5zIGRlIHRhYmxldCwgdXNlIGVsZXMgcXVhbmRvIHF1aXNlciBxdWUgdW0gY29udHJvbGUgbW9kaWZpcXVlIG8gdGFtYW5obyBvdSBmb250ZSBxdWFuZG8gZm9yIHRhYmxldFxuLy8gbWFudGVuaGEgYSBlc3RydXR1cmEgbm9ybWFsIGRlIGVzY3JpdGEgZGUgY3NzIHNlbSBwcmVjaXNhciByZWVzY3JldmVyIGNzcyBlc3BlY8OtZmljbyBwYXJhIHRhYmxldFxuJHRhYmxldC13aWR0aDogNzY4cHg7XG5cblxuQG1peGluIGxpbmUtaGVpZ2h0KCRzaXplICwgJGJpZzogdHJ1ZSkge1xuICBsaW5lLWhlaWdodDogJHNpemUgKyBweDtcbiAgQGlmICRiaWcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XG4gICAgICBsaW5lLWhlaWdodDogKCRzaXplICogMS41KSArIHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBmb250c2l6ZSgkc2l6ZSwgJHNtYWxsOnRydWUsICRiaWc6IHRydWUpIHtcbiAgZm9udC1zaXplOiAkc2l6ZSArIHB4O1xuICBAaWYgJGJpZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcbiAgICAgIGZvbnQtc2l6ZTogKCRzaXplICogMS41KSArIHB4O1xuICAgIH1cbiAgfVxuICBAaWYgJHNtYWxsIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skc21hbGwtY2VsbC13aWR0aH0pIHtcbiAgICAgIGZvbnQtc2l6ZTogKCRzaXplICogMC44KSArIHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuKiBDcmlhIGljb25lcyBjdXN0b21pemFkb3MgZGVudHJvIGRvIElvbmljb25zXG4qXG4qIEBwYXJhbSB7c3RyaW5nfSAkYXJnIC0gTm9tZSBkbyBpY29uZSBhcGxpY2FkbyBubyBwcmVmaXhvIFwiaWNvblwiXG4qIEBwYXJhbSB7c3RyaW5nfSAkdmFsIC0gVmFsb3IgZG8gY29udGVudCByZWxhdGl2byBhbyDDrWNvbmVcbiovXG5AbWl4aW4gaWNvbmVzKCRhcmcsICR2YWwpIHtcbiAgLmljb24tI3skYXJnfTpiZWZvcmUsXG4gIC5pb24taW9zLWljb24tI3skYXJnfTpiZWZvcmUsXG4gIC5pb24taW9zLWljb24tI3skYXJnfS1vdXRsaW5lOmJlZm9yZSxcbiAgLmlvbi1tZC1pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLW1kLWljb24tI3skYXJnfS1vdXRsaW5lOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29tb29uJyAhaW1wb3J0YW50O1xuICAgIGNvbnRlbnQ6ICR2YWw7XG4gICAgLy9mb250LXNpemU6ICRmb250LXNpemUtYmFzZSArIDEuMTU7XG4gIH1cbn1cblxuXG4vLyBpcGhvbmUgeCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKiBBcGxpY2EgbyBibG9jbyBhcGVuYXMgc2UgbyBhcGFyZWxobyB0aXZlciBvdSBuw6NvIHN1cG9ydGUgw6Agc2FmZSBhcmVhICovXG4vL0BpbmNsdWRlIHNhZmVBcmVhQWRqdXN0KHBhZGRpbmctdG9wLCAwcHgpO1xuQG1peGluIHN1cHBvcnRzU2FmZUFyZWEoJHN1cHBvcnRzOiB0cnVlKSB7XG4gICRleHByOiB1bnF1b3RlKCdtYXgoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKScpO1xuXG4gIEBpZiAkc3VwcG9ydHMge1xuICAgIEBzdXBwb3J0cyAodG9wOiAkZXhwcikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAc3VwcG9ydHMgbm90ICh0b3A6ICRleHByKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHYXJhbnRlIHF1ZSBoYWphIHVtIGVzcGHDp2FtZW50byBtw61uaW1vIG51bWEgY2VydGEgcG9zacOnw6NvLCB1c2FuZG8gYXMgbWFyZ2Vuc1xuICogZGUgc2VndXJhbsOnYSBkbyBwcsOzcHJpbyBhcGFyZWxobyBxdWFuZG8gcG9zc8OtdmVsLlxuICpcbiAqIFJlY29tZW5kYWRvIHBhcmEgcGFkZGluZyBlbSBpdGVucyBxdWUgZmljYW0gbmFzIGJvcmRhcyBkYSB0ZWxhLCBvdSBwYXJhXG4gKiBtYXJnZW0gZGUgaXRlbnMgcXVlIGZsdXR1YW0uXG4gKi9cbkBtaXhpbiBtaW5JbnNldCgkcHJvcGVydHksJHZhbHVlOiAkY29udGVudC1wYWRkaW5nLCRwb3NpdGlvbjogcG9zaXRpb25PZigkcHJvcGVydHkpLCRhZGQ6IDBweCkge1xuICBAaWYgbm90ICRwb3NpdGlvbiB7XG4gICAgQGVycm9yICdOw6NvIGZvaSBwb3Nzw612ZWwgZGV0ZWN0YXIgcG9zacOnw6NvIGRlICN7JHByb3BlcnR5fS4gUGFzc2UgdW0gcGFyw6JtZXRybyAkcG9zaXRpb24gZXhwbMOtY2l0byc7XG4gIH1cblxuICAjeyRwcm9wZXJ0eX06ICR2YWx1ZSskYWRkO1xuXG4gIEBpbmNsdWRlIHN1cHBvcnRzU2FmZUFyZWEge1xuICAgICN7JHByb3BlcnR5fTogY2FsYyhtYXgoI3skdmFsdWV9LCBlbnYoc2FmZS1hcmVhLWluc2V0LSN7JHBvc2l0aW9ufSkpICsgI3skYWRkfSk7XG4gIH1cbn1cblxuLyoqIEFkaWNpb25hIGEgbWFyZ2VtIGRlIHNlZ3VyYW7Dp2EgYSB1bSBjZXJ0byB2YWxvciAqL1xuQG1peGluIHNhZmVBcmVhQWRqdXN0KCRwcm9wZXJ0eSwgJHZhbHVlLCAkcG9zaXRpb246IHBvc2l0aW9uT2YoJHByb3BlcnR5KSkge1xuICBAaWYgbm90ICRwb3NpdGlvbiB7XG4gICAgQGVycm9yICdOw6NvIGZvaSBwb3Nzw612ZWwgZGV0ZWN0YXIgcG9zacOnw6NvIGRlICN7JHByb3BlcnR5fS4gUGFzc2UgdW0gcGFyw6JtZXRybyAkcG9zaXRpb24gZXhwbMOtY2l0byc7XG4gIH1cblxuICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcblxuICAvLyBDb21wYXRpYmlsaWRhZGUgY29tIGlPUyA5LTEwOiBwYXJhIHRvcCwgYXNzdW1pciAyMHB4IGRlIGJhcnJhIGRlIHN0YXR1c1xuICBAaWYgJHBvc2l0aW9uPT10b3Age1xuICAgIEBpbmNsdWRlIHN1cHBvcnRzU2FmZUFyZWEoZmFsc2UpIHtcbiAgICAgIEBpZiBzdHItaW5kZXgoJyN7Jn0nLCAnLmlvcycpICE9bnVsbCB7XG4gICAgICAgICN7JHByb3BlcnR5fTogY2FsYygjeyR2YWx1ZX0gKyAyMHB4KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAuaW9zICYge1xuICAgICAgICAgICN7JHByb3BlcnR5fTogY2FsYygjeyR2YWx1ZX0gKyAyMHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIHN1cHBvcnRzU2FmZUFyZWEge1xuICAgICN7JHByb3BlcnR5fTogY2FsYygjeyR2YWx1ZX0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LSN7JHBvc2l0aW9ufSkpO1xuICB9XG59XG5cbi8qKiBEZWR1eiBhIHF1ZSBib3JkYSBkYSB0ZWxhIHVtYSBjZXJ0YSBwcm9wcmllZGFkZSBzZSByZWZlcmUgKi9cbkBmdW5jdGlvbiBwb3NpdGlvbk9mKCRwcm9wZXJ0eSkge1xuICBAaWYgc3RyLWluZGV4KCRwcm9wZXJ0eSwgJ3RvcCcpICE9bnVsbCB7XG4gICAgQHJldHVybiB0b3A7XG4gIH1cblxuICBAaWYgc3RyLWluZGV4KCRwcm9wZXJ0eSwgJ3JpZ2h0JykgIT1udWxsIHtcbiAgICBAcmV0dXJuIHJpZ2h0O1xuICB9XG5cbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICdib3R0b20nKSAhPW51bGwge1xuICAgIEByZXR1cm4gYm90dG9tO1xuICB9XG5cbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICdsZWZ0JykgIT1udWxsIHtcbiAgICBAcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBAcmV0dXJuIG51bGw7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gQmFja2dyb3VuZCBDb3ZlclxuQG1peGluIGNvdmVyLWJhY2tncm91bmQoJGltZy11cmksICRiYWNrZ3JvdW5kLXRvcDpcImNlbnRlclwiLCAkYmFja2dyb3VuZC1sZWZ0OlwiY2VudGVyXCIpIHtcbiAgYmFja2dyb3VuZDogdXJsKCRpbWctdXJpKSBuby1yZXBlYXQgdW5xdW90ZSgkYmFja2dyb3VuZC10b3ApIHVucXVvdGUoJGJhY2tncm91bmQtbGVmdCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vLyBDZW50cmFsaXphZG9yIEFic29sdXRvXG5cbkBtaXhpbiBjZW50ZXIoJGhvcml6b250YWw6IHRydWUsICR2ZXJ0aWNhbDogdHJ1ZSkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIEBpZiAoJGhvcml6b250YWwgYW5kICR2ZXJ0aWNhbCkge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfSBAZWxzZSBpZiAoJGhvcml6b250YWwpIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIH0gQGVsc2UgaWYgKCR2ZXJ0aWNhbCkge1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG59XG5cblxuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHggLS0qL1xuQG1peGluIHRyYW5zZm9ybVRyYW5zbGF0ZVgoJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR2YWx1ZSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHZhbHVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR2YWx1ZSk7XG59XG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB5IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVZKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkdmFsdWUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR2YWx1ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkdmFsdWUpO1xufVxuXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geiAtLSovXG5AbWl4aW4gdHJhbnNmb3JtVHJhbnNsYXRlWigkdmFsdWUpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHZhbHVlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigkdmFsdWUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHZhbHVlKTtcbn1cblxuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHgsIHkgLS0qL1xuQG1peGluIHRyYW5zZm9ybVRyYW5zbGF0ZUR1YWwoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG59XG5cbi8qLS0gaG9yaXpvbnRhbC1hbGlnbiAtLSovXG5AbWl4aW4gaG9yaXpvbnRhbEFsaWduKCRwb3NpdGlvbiwgJHBlcmNlbnRhZ2UpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgbGVmdDogJHBlcmNlbnRhZ2U7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybVRyYW5zbGF0ZVgoLSRwZXJjZW50YWdlKTtcbn1cblxuLyotLSB2ZXJ0aWNhbC1hbGlnbiAtLSovXG5AbWl4aW4gdmVydGljYWxBbGlnbigkcG9zaXRpb24sICRwZXJjZW50YWdlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIHRvcDogJHBlcmNlbnRhZ2U7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybVRyYW5zbGF0ZVkoLSRwZXJjZW50YWdlKTtcbn1cblxuLyotLSBkdWFsLWFsaWduIC0tKi9cbkBtaXhpbiBkdWFsQWxpZ24oJHBvc2l0aW9uLCAkcGVyY2VudGFnZVgsICRwZXJjZW50YWdlWSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBsZWZ0OiAkcGVyY2VudGFnZVg7XG4gIHRvcDogJHBlcmNlbnRhZ2VZO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVEdWFsKC0kcGVyY2VudGFnZVgsIC0kcGVyY2VudGFnZVkpO1xufVxuXG4vKi0tIG1heC1saW5lcyAtLSovXG5AbWl4aW4gbWF4TGluZXMoJHZhbHVlKSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJHZhbHVlICFpbXBvcnRhbnQ7IC8vIXBsZWFzZVxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXG59XG4iLCIvLyBmYWRlaW4gc2VxdWVuY2lhbCBsaXN0YVxuLy8gQGV4dGVuZCAuZmFkZWluO1xuQGtleWZyYW1lcyBmYWRlaW4tbGlzdGEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yNXB4LCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZWluLWxpc3RhIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4tbGlzdGEgLjM1cyBsaW5lYXI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRvIDIwIHtcbiAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAkaSAqIC4xNXM7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC8vb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi8vLmFuaW1hdGUtZmxpY2tlciB7XG4vLyAgYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDFzIGluZmluaXRlO1xuLy99XG5cbkBrZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4vL2FuaW1hdGlvbjogYW5pbVRleHRvIDJzICBhbHRlcm5hdGU7XG5Aa2V5ZnJhbWVzIGFuaW1UZXh0byB7XG4gIDAlLCAyNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgNzUlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duT3BhY2l0eSB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogLTYwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZURvd25PcGFjaXR5IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtMjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9mb250cyc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9taXhpbnMnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvYW5pbWF0aW9ucyc7XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcblxuICAuY2FyZC1iYW5uZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1ncy9pbWctY2FyZC1iYW5uZXItaG9tZS5wbmcnKSBuby1yZXBlYXQgcmlnaHQgdG9wIC8gY29udGFpbiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGFiZWwtZGVmYXVsdCk7XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMzJweCAwIDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1ibGFjay1yZ2IpLCAwLjYpO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/aprender-jogar/aprender-jogar.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/aprender-jogar/aprender-jogar.page.ts ***!
    \*******************************************************/

  /*! exports provided: AprenderJogarPage */

  /***/
  function srcAppAprenderJogarAprenderJogarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AprenderJogarPage", function () {
      return AprenderJogarPage;
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


    var _modal_components_modal_aprender_detalhe_modal_aprender_detalhe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modal-components/modal-aprender-detalhe/modal-aprender-detalhe-component */
    "./src/app/modal-components/modal-aprender-detalhe/modal-aprender-detalhe-component.ts");

    let AprenderJogarPage = class AprenderJogarPage {
      constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.listTopicos = [{
          titulo: 'Como realizar os jogos?',
          image: '/assets/imgs/onboard/img-2.png',
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry <br>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }, {
          titulo: 'O que é um jogo de Duque de dezenas?',
          image: '/assets/imgs/onboard/img-2.png',
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry <br>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }, {
          titulo: 'O que é um jogo de Terno de dezenas?',
          image: '/assets/imgs/onboard/img-2.png',
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry <br>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }, {
          titulo: 'O que é um jogo de Milhar?',
          image: '/assets/imgs/onboard/img-2.png',
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry <br>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }];
      }

      ngOnInit() {
        console.log('ngOnInit - > SobrePage');
      }

      openModalDetail(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: _modal_components_modal_aprender_detalhe_modal_aprender_detalhe_component__WEBPACK_IMPORTED_MODULE_3__["ModalAprenderDetalheComponent"],
            keyboardClose: true,
            cssClass: 'modal-fab-bottom',
            componentProps: {
              detalhe: item
            }
          }); // modal.onDidDismiss().then((info: any) => {});

          return yield modal.present();
        });
      }

    };

    AprenderJogarPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    AprenderJogarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aprender-jogar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aprender-jogar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aprender-jogar/aprender-jogar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aprender-jogar.page.scss */
      "./src/app/aprender-jogar/aprender-jogar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], AprenderJogarPage);
    /***/
  }
}]);
//# sourceMappingURL=aprender-jogar-aprender-jogar-module-es5.js.map