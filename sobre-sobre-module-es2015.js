(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sobre/sobre.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sobre/sobre.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"btn-light\" [routerLink]=\"'/home'\" [routerDirection]=\"'back'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Sobre</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n    <div class=\"container-top-radius\">\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\n            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\n            Aldus PageMaker including versions of Lorem Ipsum\n        </p>\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\n            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\n            Aldus PageMaker including versions of Lorem Ipsum\n        </p>\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\n            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\n            Aldus PageMaker including versions of Lorem Ipsum\n        </p>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sobre/sobre.module.ts":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.module.ts ***!
  \***************************************/
/*! exports provided: SobrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sobre.page */ "./src/app/sobre/sobre.page.ts");








const routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_7__["SobrePage"]
    }
];
let SobrePageModule = class SobrePageModule {
};
SobrePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_7__["SobrePage"]]
    })
], SobrePageModule);



/***/ }),

/***/ "./src/app/sobre/sobre.page.scss":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  font-family: \"Rawline\", sans-serif;\n  font-size: 100%;\n}\n/**\n* Cria icones customizados dentro do Ionicons\n*\n* @param {string} $arg - Nome do icone aplicado no prefixo \"icon\"\n* @param {string} $val - Valor do content relativo ao ícone\n*/\n/** Aplica o bloco apenas se o aparelho tiver ou não suporte à safe area */\n/**\n * Garante que haja um espaçamento mínimo numa certa posição, usando as margens\n * de segurança do próprio aparelho quando possível.\n *\n * Recomendado para padding em itens que ficam nas bordas da tela, ou para\n * margem de itens que flutuam.\n */\n/** Adiciona a margem de segurança a um certo valor */\n/** Deduz a que borda da tela uma certa propriedade se refere */\n/*-- transform: translate > x --*/\n/*-- transform: translate > y --*/\n/*-- transform: translate > z --*/\n/*-- transform: translate > x, y --*/\n/*-- horizontal-align --*/\n/*-- vertical-align --*/\n/*-- dual-align --*/\n/*-- max-lines --*/\n@-webkit-keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fadein-lista {\n  from {\n    -webkit-transform: translate3d(0, -25px, 0);\n            transform: translate3d(0, -25px, 0);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.fadein-lista, ion-content p {\n  opacity: 0;\n  -webkit-animation: fadein-lista 0.35s linear;\n          animation: fadein-lista 0.35s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.fadein-lista:nth-child(1), ion-content p:nth-child(1) {\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n.fadein-lista:nth-child(2), ion-content p:nth-child(2) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.fadein-lista:nth-child(3), ion-content p:nth-child(3) {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s;\n}\n.fadein-lista:nth-child(4), ion-content p:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.fadein-lista:nth-child(5), ion-content p:nth-child(5) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.fadein-lista:nth-child(6), ion-content p:nth-child(6) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.fadein-lista:nth-child(7), ion-content p:nth-child(7) {\n  -webkit-animation-delay: 1.05s;\n          animation-delay: 1.05s;\n}\n.fadein-lista:nth-child(8), ion-content p:nth-child(8) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.fadein-lista:nth-child(9), ion-content p:nth-child(9) {\n  -webkit-animation-delay: 1.35s;\n          animation-delay: 1.35s;\n}\n.fadein-lista:nth-child(10), ion-content p:nth-child(10) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.fadein-lista:nth-child(11), ion-content p:nth-child(11) {\n  -webkit-animation-delay: 1.65s;\n          animation-delay: 1.65s;\n}\n.fadein-lista:nth-child(12), ion-content p:nth-child(12) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.fadein-lista:nth-child(13), ion-content p:nth-child(13) {\n  -webkit-animation-delay: 1.95s;\n          animation-delay: 1.95s;\n}\n.fadein-lista:nth-child(14), ion-content p:nth-child(14) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.fadein-lista:nth-child(15), ion-content p:nth-child(15) {\n  -webkit-animation-delay: 2.25s;\n          animation-delay: 2.25s;\n}\n.fadein-lista:nth-child(16), ion-content p:nth-child(16) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.fadein-lista:nth-child(17), ion-content p:nth-child(17) {\n  -webkit-animation-delay: 2.55s;\n          animation-delay: 2.55s;\n}\n.fadein-lista:nth-child(18), ion-content p:nth-child(18) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.fadein-lista:nth-child(19), ion-content p:nth-child(19) {\n  -webkit-animation-delay: 2.85s;\n          animation-delay: 2.85s;\n}\n@keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes entrada {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes animTexto {\n  0%, 25% {\n    opacity: 0;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  75%, 100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes slideDownOpacity {\n  from {\n    bottom: -600px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes slideDownOpacity {\n  from {\n    bottom: -200px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\nion-content {\n  --padding-top: 16px;\n}\nion-content .lb-title {\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\nion-content p {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  text-align: left;\n  color: var(--ion-color-labels-rgb);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUvc29icmUucGFnZS5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL3RoZW1lL2ZvbnRzLnNjc3MiLCIvVXNlcnMvcGF1bG9ib250ZW1wby9Eb2N1bWVudHMvZG9uZS9wYXVsb2JvbnRlbXBvL28tam9nby9zcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCIvVXNlcnMvcGF1bG9ib250ZW1wby9Eb2N1bWVudHMvZG9uZS9wYXVsb2JvbnRlbXBvL28tam9nby9zcmMvdGhlbWUvYW5pbWF0aW9ucy5zY3NzIiwiL1VzZXJzL3BhdWxvYm9udGVtcG8vRG9jdW1lbnRzL2RvbmUvcGF1bG9ib250ZW1wby9vLWpvZ28vc3JjL2FwcC9zb2JyZS9zb2JyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FERUY7QUUyQkE7Ozs7O0NBQUE7QUFvQkEsMEVBQUE7QUFnQkE7Ozs7OztFQUFBO0FBbUJBLHFEQUFBO0FBMEJBLCtEQUFBO0FBbURBLGlDQUFBO0FBT0EsaUNBQUE7QUFPQSxpQ0FBQTtBQU9BLG9DQUFBO0FBT0EseUJBQUE7QUFPQSx1QkFBQTtBQU9BLG1CQUFBO0FBUUEsa0JBQUE7QUNuTkE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7SUFDQSxVQUFBO0VINkJGO0VHMUJBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtJQUNBLFVBQUE7RUg0QkY7QUFDRjtBR3JDQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtJQUNBLFVBQUE7RUg2QkY7RUcxQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsVUFBQTtFSDRCRjtBQUNGO0FHekJBO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FIMkJGO0FHeEJJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSDBCTjtBRzNCSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUg2Qk47QUc5Qkk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FIZ0NOO0FHakNJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBSG1DTjtBR3BDSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUhzQ047QUd2Q0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FIeUNOO0FHMUNJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSDRDTjtBRzdDSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUgrQ047QUdoREk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FIa0ROO0FHbkRJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBSHFETjtBR3RESTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUh3RE47QUd6REk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FIMkROO0FHNURJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSDhETjtBRy9ESTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUhpRU47QUdsRUk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FIb0VOO0FHckVJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBSHVFTjtBR3hFSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUgwRU47QUczRUk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FINkVOO0FHOUVJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSGdGTjtBRzNFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJDQUFBO1lBQUEsbUNBQUE7RUg4RUY7RUc1RUE7SUFFRSx1Q0FBQTtZQUFBLCtCQUFBO0VINkVGO0FBQ0Y7QUcxRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VINEVGO0VHMUVBO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO1lBQUEsK0JBQUE7RUg0RUY7QUFDRjtBR3JFQTtFQUNFO0lBQ0UsVUFBQTtFSHVFRjtFR3JFQTtJQUNFLFVBQUE7RUh1RUY7RUdyRUE7SUFDRSxVQUFBO0VIdUVGO0FBQ0Y7QUdoRkE7RUFDRTtJQUNFLFVBQUE7RUh1RUY7RUdyRUE7SUFDRSxVQUFBO0VIdUVGO0VHckVBO0lBQ0UsVUFBQTtFSHVFRjtBQUNGO0FHbEVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFSG9FRjtFR2xFQTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VIb0VGO0FBQ0Y7QUc1RUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VIb0VGO0VHbEVBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUhvRUY7QUFDRjtBR2pFQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VIbUVGO0VHakVBO0lBQ0UsU0FBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VIbUVGO0FBQ0Y7QUdoRUEscUJBQUE7QUFDQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VIa0VGO0VHaEVBO0lBQ0UsU0FBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VIa0VGO0FBQ0Y7QUcvREE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VIaUVGO0VHOURBO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUhnRUY7QUFDRjtBR3pFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUhpRUY7RUc5REE7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFSGdFRjtBQUNGO0FHN0RBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFSCtERjtFRzVEQTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VIOERGO0FBQ0Y7QUd2RUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VIK0RGO0VHNURBO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUg4REY7QUFDRjtBSXZMQTtFQUNFLG1CQUFBO0FKeUxGO0FJdkxFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBSnlMSjtBSXRMRTtFQUdFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBSnNMSiIsImZpbGUiOiJzcmMvYXBwL3NvYnJlL3NvYnJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBmb250LWZhbWlseTogXCJSYXdsaW5lXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyoqXG4qIENyaWEgaWNvbmVzIGN1c3RvbWl6YWRvcyBkZW50cm8gZG8gSW9uaWNvbnNcbipcbiogQHBhcmFtIHtzdHJpbmd9ICRhcmcgLSBOb21lIGRvIGljb25lIGFwbGljYWRvIG5vIHByZWZpeG8gXCJpY29uXCJcbiogQHBhcmFtIHtzdHJpbmd9ICR2YWwgLSBWYWxvciBkbyBjb250ZW50IHJlbGF0aXZvIGFvIMOtY29uZVxuKi9cbi8qKiBBcGxpY2EgbyBibG9jbyBhcGVuYXMgc2UgbyBhcGFyZWxobyB0aXZlciBvdSBuw6NvIHN1cG9ydGUgw6Agc2FmZSBhcmVhICovXG4vKipcbiAqIEdhcmFudGUgcXVlIGhhamEgdW0gZXNwYcOnYW1lbnRvIG3DrW5pbW8gbnVtYSBjZXJ0YSBwb3Npw6fDo28sIHVzYW5kbyBhcyBtYXJnZW5zXG4gKiBkZSBzZWd1cmFuw6dhIGRvIHByw7NwcmlvIGFwYXJlbGhvIHF1YW5kbyBwb3Nzw612ZWwuXG4gKlxuICogUmVjb21lbmRhZG8gcGFyYSBwYWRkaW5nIGVtIGl0ZW5zIHF1ZSBmaWNhbSBuYXMgYm9yZGFzIGRhIHRlbGEsIG91IHBhcmFcbiAqIG1hcmdlbSBkZSBpdGVucyBxdWUgZmx1dHVhbS5cbiAqL1xuLyoqIEFkaWNpb25hIGEgbWFyZ2VtIGRlIHNlZ3VyYW7Dp2EgYSB1bSBjZXJ0byB2YWxvciAqL1xuLyoqIERlZHV6IGEgcXVlIGJvcmRhIGRhIHRlbGEgdW1hIGNlcnRhIHByb3ByaWVkYWRlIHNlIHJlZmVyZSAqL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHggLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHkgLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHogLS0qL1xuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHgsIHkgLS0qL1xuLyotLSBob3Jpem9udGFsLWFsaWduIC0tKi9cbi8qLS0gdmVydGljYWwtYWxpZ24gLS0qL1xuLyotLSBkdWFsLWFsaWduIC0tKi9cbi8qLS0gbWF4LWxpbmVzIC0tKi9cbkBrZXlmcmFtZXMgZmFkZWluLWxpc3RhIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjVweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZWluLWxpc3RhLCBpb24tY29udGVudCBwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4tbGlzdGEgMC4zNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEpLCBpb24tY29udGVudCBwOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgyKSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgzKSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNDVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNCksIGlvbi1jb250ZW50IHA6bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoNSksIGlvbi1jb250ZW50IHA6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDYpLCBpb24tY29udGVudCBwOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDcpLCBpb24tY29udGVudCBwOm50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4wNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg4KSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCg5KSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoOSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMzVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTApLCBpb24tY29udGVudCBwOm50aC1jaGlsZCgxMCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxMSksIGlvbi1jb250ZW50IHA6bnRoLWNoaWxkKDExKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS42NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxMiksIGlvbi1jb250ZW50IHA6bnRoLWNoaWxkKDEyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS44cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDEzKSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoMTMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjk1cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE0KSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoMTQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTUpLCBpb24tY29udGVudCBwOm50aC1jaGlsZCgxNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDIuMjVzO1xufVxuLmZhZGVpbi1saXN0YTpudGgtY2hpbGQoMTYpLCBpb24tY29udGVudCBwOm50aC1jaGlsZCgxNikge1xuICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxNyksIGlvbi1jb250ZW50IHA6bnRoLWNoaWxkKDE3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi41NXM7XG59XG4uZmFkZWluLWxpc3RhOm50aC1jaGlsZCgxOCksIGlvbi1jb250ZW50IHA6bnRoLWNoaWxkKDE4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi43cztcbn1cbi5mYWRlaW4tbGlzdGE6bnRoLWNoaWxkKDE5KSwgaW9uLWNvbnRlbnQgcDpudGgtY2hpbGQoMTkpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjg1cztcbn1cblxuQGtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1UZXh0byB7XG4gIDAlLCAyNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgNzUlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC02MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC0yMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG59XG5pb24tY29udGVudCAubGItdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sYWJlbHMtcmdiKTtcbn0iLCIqIHtcbiAgZm9udC1mYW1pbHk6ICdSYXdsaW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuIiwiLy8gTWl4aW5zXG5cbi8vIE1peGlucyBkZSB0YWJsZXQsIHVzZSBlbGVzIHF1YW5kbyBxdWlzZXIgcXVlIHVtIGNvbnRyb2xlIG1vZGlmaXF1ZSBvIHRhbWFuaG8gb3UgZm9udGUgcXVhbmRvIGZvciB0YWJsZXRcbi8vIG1hbnRlbmhhIGEgZXN0cnV0dXJhIG5vcm1hbCBkZSBlc2NyaXRhIGRlIGNzcyBzZW0gcHJlY2lzYXIgcmVlc2NyZXZlciBjc3MgZXNwZWPDrWZpY28gcGFyYSB0YWJsZXRcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xuXG5cbkBtaXhpbiBsaW5lLWhlaWdodCgkc2l6ZSAsICRiaWc6IHRydWUpIHtcbiAgbGluZS1oZWlnaHQ6ICRzaXplICsgcHg7XG4gIEBpZiAkYmlnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xuICAgICAgbGluZS1oZWlnaHQ6ICgkc2l6ZSAqIDEuNSkgKyBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZm9udHNpemUoJHNpemUsICRzbWFsbDp0cnVlLCAkYmlnOiB0cnVlKSB7XG4gIGZvbnQtc2l6ZTogJHNpemUgKyBweDtcbiAgQGlmICRiaWcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XG4gICAgICBmb250LXNpemU6ICgkc2l6ZSAqIDEuNSkgKyBweDtcbiAgICB9XG4gIH1cbiAgQGlmICRzbWFsbCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNtYWxsLWNlbGwtd2lkdGh9KSB7XG4gICAgICBmb250LXNpemU6ICgkc2l6ZSAqIDAuOCkgKyBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiogQ3JpYSBpY29uZXMgY3VzdG9taXphZG9zIGRlbnRybyBkbyBJb25pY29uc1xuKlxuKiBAcGFyYW0ge3N0cmluZ30gJGFyZyAtIE5vbWUgZG8gaWNvbmUgYXBsaWNhZG8gbm8gcHJlZml4byBcImljb25cIlxuKiBAcGFyYW0ge3N0cmluZ30gJHZhbCAtIFZhbG9yIGRvIGNvbnRlbnQgcmVsYXRpdm8gYW8gw61jb25lXG4qL1xuQG1peGluIGljb25lcygkYXJnLCAkdmFsKSB7XG4gIC5pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLWlvcy1pY29uLSN7JGFyZ306YmVmb3JlLFxuICAuaW9uLWlvcy1pY29uLSN7JGFyZ30tb3V0bGluZTpiZWZvcmUsXG4gIC5pb24tbWQtaWNvbi0jeyRhcmd9OmJlZm9yZSxcbiAgLmlvbi1tZC1pY29uLSN7JGFyZ30tb3V0bGluZTpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbicgIWltcG9ydGFudDtcbiAgICBjb250ZW50OiAkdmFsO1xuICAgIC8vZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKyAxLjE1O1xuICB9XG59XG5cblxuLy8gaXBob25lIHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiogQXBsaWNhIG8gYmxvY28gYXBlbmFzIHNlIG8gYXBhcmVsaG8gdGl2ZXIgb3UgbsOjbyBzdXBvcnRlIMOgIHNhZmUgYXJlYSAqL1xuLy9AaW5jbHVkZSBzYWZlQXJlYUFkanVzdChwYWRkaW5nLXRvcCwgMHB4KTtcbkBtaXhpbiBzdXBwb3J0c1NhZmVBcmVhKCRzdXBwb3J0czogdHJ1ZSkge1xuICAkZXhwcjogdW5xdW90ZSgnbWF4KGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSknKTtcblxuICBAaWYgJHN1cHBvcnRzIHtcbiAgICBAc3VwcG9ydHMgKHRvcDogJGV4cHIpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHN1cHBvcnRzIG5vdCAodG9wOiAkZXhwcikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2FyYW50ZSBxdWUgaGFqYSB1bSBlc3Bhw6dhbWVudG8gbcOtbmltbyBudW1hIGNlcnRhIHBvc2nDp8OjbywgdXNhbmRvIGFzIG1hcmdlbnNcbiAqIGRlIHNlZ3VyYW7Dp2EgZG8gcHLDs3ByaW8gYXBhcmVsaG8gcXVhbmRvIHBvc3PDrXZlbC5cbiAqXG4gKiBSZWNvbWVuZGFkbyBwYXJhIHBhZGRpbmcgZW0gaXRlbnMgcXVlIGZpY2FtIG5hcyBib3JkYXMgZGEgdGVsYSwgb3UgcGFyYVxuICogbWFyZ2VtIGRlIGl0ZW5zIHF1ZSBmbHV0dWFtLlxuICovXG5AbWl4aW4gbWluSW5zZXQoJHByb3BlcnR5LCR2YWx1ZTogJGNvbnRlbnQtcGFkZGluZywkcG9zaXRpb246IHBvc2l0aW9uT2YoJHByb3BlcnR5KSwkYWRkOiAwcHgpIHtcbiAgQGlmIG5vdCAkcG9zaXRpb24ge1xuICAgIEBlcnJvciAnTsOjbyBmb2kgcG9zc8OtdmVsIGRldGVjdGFyIHBvc2nDp8OjbyBkZSAjeyRwcm9wZXJ0eX0uIFBhc3NlIHVtIHBhcsOibWV0cm8gJHBvc2l0aW9uIGV4cGzDrWNpdG8nO1xuICB9XG5cbiAgI3skcHJvcGVydHl9OiAkdmFsdWUrJGFkZDtcblxuICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhIHtcbiAgICAjeyRwcm9wZXJ0eX06IGNhbGMobWF4KCN7JHZhbHVlfSwgZW52KHNhZmUtYXJlYS1pbnNldC0jeyRwb3NpdGlvbn0pKSArICN7JGFkZH0pO1xuICB9XG59XG5cbi8qKiBBZGljaW9uYSBhIG1hcmdlbSBkZSBzZWd1cmFuw6dhIGEgdW0gY2VydG8gdmFsb3IgKi9cbkBtaXhpbiBzYWZlQXJlYUFkanVzdCgkcHJvcGVydHksICR2YWx1ZSwgJHBvc2l0aW9uOiBwb3NpdGlvbk9mKCRwcm9wZXJ0eSkpIHtcbiAgQGlmIG5vdCAkcG9zaXRpb24ge1xuICAgIEBlcnJvciAnTsOjbyBmb2kgcG9zc8OtdmVsIGRldGVjdGFyIHBvc2nDp8OjbyBkZSAjeyRwcm9wZXJ0eX0uIFBhc3NlIHVtIHBhcsOibWV0cm8gJHBvc2l0aW9uIGV4cGzDrWNpdG8nO1xuICB9XG5cbiAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgLy8gQ29tcGF0aWJpbGlkYWRlIGNvbSBpT1MgOS0xMDogcGFyYSB0b3AsIGFzc3VtaXIgMjBweCBkZSBiYXJyYSBkZSBzdGF0dXNcbiAgQGlmICRwb3NpdGlvbj09dG9wIHtcbiAgICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhKGZhbHNlKSB7XG4gICAgICBAaWYgc3RyLWluZGV4KCcjeyZ9JywgJy5pb3MnKSAhPW51bGwge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgMjBweCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLmlvcyAmIHtcbiAgICAgICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgMjBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBzdXBwb3J0c1NhZmVBcmVhIHtcbiAgICAjeyRwcm9wZXJ0eX06IGNhbGMoI3skdmFsdWV9ICsgZW52KHNhZmUtYXJlYS1pbnNldC0jeyRwb3NpdGlvbn0pKTtcbiAgfVxufVxuXG4vKiogRGVkdXogYSBxdWUgYm9yZGEgZGEgdGVsYSB1bWEgY2VydGEgcHJvcHJpZWRhZGUgc2UgcmVmZXJlICovXG5AZnVuY3Rpb24gcG9zaXRpb25PZigkcHJvcGVydHkpIHtcbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICd0b3AnKSAhPW51bGwge1xuICAgIEByZXR1cm4gdG9wO1xuICB9XG5cbiAgQGlmIHN0ci1pbmRleCgkcHJvcGVydHksICdyaWdodCcpICE9bnVsbCB7XG4gICAgQHJldHVybiByaWdodDtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAnYm90dG9tJykgIT1udWxsIHtcbiAgICBAcmV0dXJuIGJvdHRvbTtcbiAgfVxuXG4gIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCAnbGVmdCcpICE9bnVsbCB7XG4gICAgQHJldHVybiBsZWZ0O1xuICB9XG5cbiAgQHJldHVybiBudWxsO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vIEJhY2tncm91bmQgQ292ZXJcbkBtaXhpbiBjb3Zlci1iYWNrZ3JvdW5kKCRpbWctdXJpLCAkYmFja2dyb3VuZC10b3A6XCJjZW50ZXJcIiwgJGJhY2tncm91bmQtbGVmdDpcImNlbnRlclwiKSB7XG4gIGJhY2tncm91bmQ6IHVybCgkaW1nLXVyaSkgbm8tcmVwZWF0IHVucXVvdGUoJGJhY2tncm91bmQtdG9wKSB1bnF1b3RlKCRiYWNrZ3JvdW5kLWxlZnQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLy8gQ2VudHJhbGl6YWRvciBBYnNvbHV0b1xuXG5AbWl4aW4gY2VudGVyKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBAaWYgKCRob3Jpem9udGFsIGFuZCAkdmVydGljYWwpIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH0gQGVsc2UgaWYgKCRob3Jpem9udGFsKSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9IEBlbHNlIGlmICgkdmVydGljYWwpIHtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxufVxuXG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB4IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVYKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR2YWx1ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdmFsdWUpO1xufVxuXG4vKi0tIHRyYW5zZm9ybTogdHJhbnNsYXRlID4geSAtLSovXG5AbWl4aW4gdHJhbnNmb3JtVHJhbnNsYXRlWSgkdmFsdWUpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkdmFsdWUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHZhbHVlKTtcbn1cblxuLyotLSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSA+IHogLS0qL1xuQG1peGluIHRyYW5zZm9ybVRyYW5zbGF0ZVooJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHZhbHVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR2YWx1ZSk7XG59XG5cbi8qLS0gdHJhbnNmb3JtOiB0cmFuc2xhdGUgPiB4LCB5IC0tKi9cbkBtaXhpbiB0cmFuc2Zvcm1UcmFuc2xhdGVEdWFsKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xufVxuXG4vKi0tIGhvcml6b250YWwtYWxpZ24gLS0qL1xuQG1peGluIGhvcml6b250YWxBbGlnbigkcG9zaXRpb24sICRwZXJjZW50YWdlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGxlZnQ6ICRwZXJjZW50YWdlO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVYKC0kcGVyY2VudGFnZSk7XG59XG5cbi8qLS0gdmVydGljYWwtYWxpZ24gLS0qL1xuQG1peGluIHZlcnRpY2FsQWxpZ24oJHBvc2l0aW9uLCAkcGVyY2VudGFnZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICB0b3A6ICRwZXJjZW50YWdlO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm1UcmFuc2xhdGVZKC0kcGVyY2VudGFnZSk7XG59XG5cbi8qLS0gZHVhbC1hbGlnbiAtLSovXG5AbWl4aW4gZHVhbEFsaWduKCRwb3NpdGlvbiwgJHBlcmNlbnRhZ2VYLCAkcGVyY2VudGFnZVkpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgbGVmdDogJHBlcmNlbnRhZ2VYO1xuICB0b3A6ICRwZXJjZW50YWdlWTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtVHJhbnNsYXRlRHVhbCgtJHBlcmNlbnRhZ2VYLCAtJHBlcmNlbnRhZ2VZKTtcbn1cblxuLyotLSBtYXgtbGluZXMgLS0qL1xuQG1peGluIG1heExpbmVzKCR2YWx1ZSkge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICR2YWx1ZSAhaW1wb3J0YW50OyAvLyFwbGVhc2VcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblxufVxuIiwiLy8gZmFkZWluIHNlcXVlbmNpYWwgbGlzdGFcbi8vIEBleHRlbmQgLmZhZGVpbjtcbkBrZXlmcmFtZXMgZmFkZWluLWxpc3RhIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjVweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGVpbi1saXN0YSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZWluLWxpc3RhIC4zNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICBAZm9yICRpIGZyb20gMSB0byAyMCB7XG4gICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkgKiAuMTVzO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAvL29wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4vLy5hbmltYXRlLWZsaWNrZXIge1xuLy8gIGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiAxcyBpbmZpbml0ZTtcbi8vfVxuXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vL3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuLy9hbmltYXRpb246IGFuaW1UZXh0byAycyAgYWx0ZXJuYXRlO1xuQGtleWZyYW1lcyBhbmltVGV4dG8ge1xuICAwJSwgMjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93bk9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBib3R0b206IC02MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVEb3duT3BhY2l0eSB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogLTIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvZm9udHMnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL2FuaW1hdGlvbnMnO1xuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG5cbiAgLmxiLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBwIHtcbiAgICBAZXh0ZW5kIC5mYWRlaW4tbGlzdGE7XG4gICAgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxhYmVscy1yZ2IpO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/sobre/sobre.page.ts":
/*!*************************************!*\
  !*** ./src/app/sobre/sobre.page.ts ***!
  \*************************************/
/*! exports provided: SobrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePage", function() { return SobrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SobrePage = class SobrePage {
    constructor() {
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('ngOnInit - > SobrePage');
        });
    }
};
SobrePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sobre',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sobre.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sobre/sobre.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sobre.page.scss */ "./src/app/sobre/sobre.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SobrePage);



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module-es2015.js.map