function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _clicker_clicker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./clicker/clicker.component */
    "./src/app/clicker/clicker.component.ts");
    /* harmony import */


    var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./front-page/front-page.component */
    "./src/app/front-page/front-page.component.ts");

    var routes = [{
      path: 'welcome',
      component: _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_3__["FrontPageComponent"]
    }, {
      path: 'game',
      component: _clicker_clicker_component__WEBPACK_IMPORTED_MODULE_2__["ClickerComponent"]
    }, {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'clicker';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./front-page/front-page.component */
    "./src/app/front-page/front-page.component.ts");
    /* harmony import */


    var _clicker_clicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clicker/clicker.component */
    "./src/app/clicker/clicker.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _play_field_play_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./play-field/play-field.component */
    "./src/app/play-field/play-field.component.ts");
    /* harmony import */


    var _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./info-field/info-field.component */
    "./src/app/info-field/info-field.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_4__["FrontPageComponent"], _clicker_clicker_component__WEBPACK_IMPORTED_MODULE_5__["ClickerComponent"], _play_field_play_field_component__WEBPACK_IMPORTED_MODULE_7__["PlayFieldComponent"], _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_8__["InfoFieldComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_4__["FrontPageComponent"], _clicker_clicker_component__WEBPACK_IMPORTED_MODULE_5__["ClickerComponent"], _play_field_play_field_component__WEBPACK_IMPORTED_MODULE_7__["PlayFieldComponent"], _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_8__["InfoFieldComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/clicker/clicker.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/clicker/clicker.component.ts ***!
    \**********************************************/

  /*! exports provided: ClickerComponent */

  /***/
  function srcAppClickerClickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickerComponent", function () {
      return ClickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../front-page/front-page.component */
    "./src/app/front-page/front-page.component.ts");
    /* harmony import */


    var _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../info-field/info-field.component */
    "./src/app/info-field/info-field.component.ts");
    /* harmony import */


    var _play_field_play_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../play-field/play-field.component */
    "./src/app/play-field/play-field.component.ts");

    var ClickerComponent =
    /*#__PURE__*/
    function () {
      function ClickerComponent() {
        _classCallCheck(this, ClickerComponent);
      }

      _createClass(ClickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClickerComponent;
    }();

    ClickerComponent.ɵfac = function ClickerComponent_Factory(t) {
      return new (t || ClickerComponent)();
    };

    ClickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClickerComponent,
      selectors: [["app-clicker"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function ClickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-front-page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-play-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_1__["FrontPageComponent"], _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_2__["InfoFieldComponent"], _play_field_play_field_component__WEBPACK_IMPORTED_MODULE_3__["PlayFieldComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border: 2px solid black;\n  margin: 0 auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpY2tlci9DOlxcVXNlcnNcXGJib2Rla1xcV29ya3NwYWNlXFxFUEFNX0xBQlxcQW5ndWxhcl9IV18yL3NyY1xcYXBwXFxjbGlja2VyXFxjbGlja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGlja2VyL2NsaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9jbGlja2VyL2NsaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHdpZHRoOiA1MCU7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clicker',
          templateUrl: './clicker.component.html',
          styleUrls: ['./clicker.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/front-page/front-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/front-page/front-page.component.ts ***!
    \****************************************************/

  /*! exports provided: FrontPageComponent */

  /***/
  function srcAppFrontPageFrontPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function () {
      return FrontPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/records.service */
    "./src/app/services/records.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function FrontPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ENTER YOUR NAME");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FrontPageComponent_div_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.playerName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrontPageComponent_div_0_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onNameEnter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start the game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.playerName);
      }
    }

    var FrontPageComponent =
    /*#__PURE__*/
    function () {
      function FrontPageComponent(recordsService, router) {
        _classCallCheck(this, FrontPageComponent);

        this.recordsService = recordsService;
        this.router = router;
        this.playerName = '';
      }

      _createClass(FrontPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNameEnter",
        value: function onNameEnter() {
          if (!this.playerName.trim()) {
            alert('Enter your name, please');
            return;
          }

          this.recordsService.userName = this.playerName.trim();
          this.recordsService.checkLS();
          this.router.navigate(['/game']);
        }
      }]);

      return FrontPageComponent;
    }();

    FrontPageComponent.ɵfac = function FrontPageComponent_Factory(t) {
      return new (t || FrontPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    FrontPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrontPageComponent,
      selectors: [["app-front-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "front-page", 4, "ngIf"], [1, "front-page"], ["type", "text", "name", "form", 3, "ngModel", "ngModelChange"], [3, "click"]],
      template: function FrontPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FrontPageComponent_div_0_Template, 7, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url.includes("welcome"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".front-page[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  margin: 0 auto;\n  border: 2px solid black;\n  justify-content: center;\n  flex-direction: column;\n}\n.front-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .front-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtcGFnZS9DOlxcVXNlcnNcXGJib2Rla1xcV29ya3NwYWNlXFxFUEFNX0xBQlxcQW5ndWxhcl9IV18yL3NyY1xcYXBwXFxmcm9udC1wYWdlXFxmcm9udC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mcm9udC1wYWdlL2Zyb250LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRDtBREFDO0VBQ0MsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LXBhZ2UvZnJvbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcm9udC1wYWdlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmb3JtLCBoMSB7XHJcblx0XHRtYXJnaW46IDIwcHggYXV0bztcclxuXHR9XHJcbn0iLCIuZnJvbnQtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZnJvbnQtcGFnZSBmb3JtLCAuZnJvbnQtcGFnZSBoMSB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-front-page',
          templateUrl: './front-page.component.html',
          styleUrls: ['./front-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info-field/info-field.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/info-field/info-field.component.ts ***!
    \****************************************************/

  /*! exports provided: InfoFieldComponent */

  /***/
  function srcAppInfoFieldInfoFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoFieldComponent", function () {
      return InfoFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/records.service */
    "./src/app/services/records.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoFieldComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Congratilations ", ctx_r5.recordService.userName, ", you set new record for ", ctx_r5.recordService.tempTimer, " sec = ", ctx_r5.recordService.clicks, " clicks!");
      }
    }

    var InfoFieldComponent =
    /*#__PURE__*/
    function () {
      function InfoFieldComponent(recordService) {
        _classCallCheck(this, InfoFieldComponent);

        this.recordService = recordService;
      }

      _createClass(InfoFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoFieldComponent;
    }();

    InfoFieldComponent.ɵfac = function InfoFieldComponent_Factory(t) {
      return new (t || InfoFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]));
    };

    InfoFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoFieldComponent,
      selectors: [["app-info-field"]],
      decls: 19,
      vars: 7,
      consts: [["for", "timer_5"], ["type", "radio", "id", "timer_5", "name", "timer", "value", "5", 3, "disabled", "change"], ["for", "timer_10"], ["type", "radio", "id", "timer_10", "name", "timer", "value", "10", "checked", "", 3, "disabled", "change"], ["for", "timer_15"], ["type", "radio", "id", "timer_15", "name", "timer", "value", "15", 3, "disabled", "change"], [4, "ngIf"]],
      template: function InfoFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5 seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoFieldComponent_Template_input_change_7_listener($event) {
            return ctx.recordService.changeTimer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10 seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoFieldComponent_Template_input_change_11_listener($event) {
            return ctx.recordService.changeTimer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "15 seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoFieldComponent_Template_input_change_15_listener($event) {
            return ctx.recordService.changeTimer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InfoFieldComponent_div_18_Template, 3, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.recordService.userName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.recordService.radioDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.recordService.radioDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.recordService.radioDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Your clicks record for ", ctx.recordService.timer, " seconds is ", ctx.recordService.previousRecord || "empty", ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recordService.winToggle);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tZmllbGQvaW5mby1maWVsZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-field',
          templateUrl: './info-field.component.html',
          styleUrls: ['./info-field.component.scss']
        }]
      }], function () {
        return [{
          type: _services_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/play-field/play-field.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/play-field/play-field.component.ts ***!
    \****************************************************/

  /*! exports provided: PlayFieldComponent */

  /***/
  function srcAppPlayFieldPlayFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayFieldComponent", function () {
      return PlayFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/records.service */
    "./src/app/services/records.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlayFieldComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.recordService.userName, " Practice more, your current result is bad.");
      }
    }

    var PlayFieldComponent =
    /*#__PURE__*/
    function () {
      function PlayFieldComponent(recordService, router) {
        _classCallCheck(this, PlayFieldComponent);

        this.recordService = recordService;
        this.router = router;
      }

      _createClass(PlayFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startGame",
        value: function startGame() {
          this.recordService.startGame();
        }
      }, {
        key: "resetGame",
        value: function resetGame() {
          this.recordService.resetGame();
        }
      }, {
        key: "clickCount",
        value: function clickCount() {
          this.recordService.clickCount();
        }
      }, {
        key: "changeName",
        value: function changeName() {
          this.recordService.resetGame();
          this.router.navigate(['/welcome']);
        }
      }]);

      return PlayFieldComponent;
    }();

    PlayFieldComponent.ɵfac = function PlayFieldComponent_Factory(t) {
      return new (t || PlayFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PlayFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayFieldComponent,
      selectors: [["app-play-field"]],
      decls: 18,
      vars: 5,
      consts: [["id", "clicker", 3, "disabled", "click"], ["id", "reset", 3, "click"], ["id", "change-name", 3, "click"], [4, "ngIf"]],
      template: function PlayFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayFieldComponent_Template_button_click_1_listener() {
            ctx.startGame();
            return ctx.clickCount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayFieldComponent_Template_button_click_3_listener() {
            return ctx.resetGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RESET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayFieldComponent_Template_button_click_5_listener() {
            return ctx.changeName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CHANGE NAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You have made ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " clicks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Timer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " sec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayFieldComponent_div_17_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.recordService.btnDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recordService.btnText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recordService.clicks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recordService.timer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recordService.noWinToggle);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#reset[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n#change-name[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n#clicker[_ngcontent-%COMP%] {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS1maWVsZC9DOlxcVXNlcnNcXGJib2Rla1xcV29ya3NwYWNlXFxFUEFNX0xBQlxcQW5ndWxhcl9IV18yL3NyY1xcYXBwXFxwbGF5LWZpZWxkXFxwbGF5LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5LWZpZWxkL3BsYXktZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQkFBQTtBQ0VEOztBREFBO0VBQ0MscUJBQUE7QUNHRDs7QUREQTtFQUNDLHdCQUFBO0FDSUQ7O0FERkE7RUFDQyx1QkFBQTtBQ0tEIiwiZmlsZSI6InNyYy9hcHAvcGxheS1maWVsZC9wbGF5LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5oMiwgaDMge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcmVzZXQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4jY2hhbmdlLW5hbWUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4jY2xpY2tlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn0iLCJidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaDIsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmVzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbiNjaGFuZ2UtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuI2NsaWNrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-play-field',
          templateUrl: './play-field.component.html',
          styleUrls: ['./play-field.component.scss']
        }]
      }], function () {
        return [{
          type: _services_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/records.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/records.service.ts ***!
    \*********************************************/

  /*! exports provided: RecordsService */

  /***/
  function srcAppServicesRecordsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordsService", function () {
      return RecordsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RecordsService =
    /*#__PURE__*/
    function () {
      function RecordsService() {
        _classCallCheck(this, RecordsService);

        this.timer = 10;
        this.timerName = 'timer_10';
        this.clicks = 0;
        this.userName = '';
        this.btnDisabled = false;
        this.radioDisabled = false;
        this.btnText = 'Click to start';
        this.tempTimer = this.timer;
      }

      _createClass(RecordsService, [{
        key: "checkLS",
        value: function checkLS() {
          if (localStorage.getItem('timer_5')) {
            this.previousRecordFive = +localStorage.getItem('timer_5');
          }

          if (localStorage.getItem('timer_10')) {
            this.previousRecordTen = +localStorage.getItem('timer_10');
          }

          if (localStorage.getItem('timer_15')) {
            this.previousRecordFifteen = +localStorage.getItem('timer_15');
          }

          this.previousRecord = this.previousRecordTen;
        }
      }, {
        key: "setToLS",
        value: function setToLS() {
          if (this.clicks > +localStorage.getItem("".concat(this.timerName))) {
            localStorage.setItem("".concat(this.timerName), this.clicks.toString());
            this.winToggle = true;
          } else {
            this.noWinToggle = true;

            if (+localStorage.getItem("".concat(this.timerName)) - 5 > this.clicks) {}
          }
        }
      }, {
        key: "displayRecord",
        value: function displayRecord() {
          this.checkLS();

          switch (this.timerName) {
            case 'timer_5':
              this.previousRecord = this.previousRecordFive;
              break;

            case 'timer_10':
              this.previousRecord = this.previousRecordTen;
              break;

            case 'timer_15':
              this.previousRecord = this.previousRecordFifteen;
              break;
          }
        }
      }, {
        key: "startGame",
        value: function startGame() {
          var _this = this;

          this.btnText = 'click to count';
          this.radioDisabled = true;

          if (this.timerId !== undefined) {
            return;
          }

          this.timerId = setInterval(function () {
            _this.timer--;

            if (!_this.timer) {
              _this.setToLS();

              clearInterval(_this.timerId);
              _this.timerId = undefined;
              _this.btnDisabled = true;
            }
          }, 1000);
        }
      }, {
        key: "resetGame",
        value: function resetGame() {
          this.displayRecord();
          clearInterval(this.timerId);
          this.timerId = undefined;
          this.timer = this.tempTimer || 10;
          this.clicks = 0;
          this.btnDisabled = false;
          this.radioDisabled = false;
          this.winToggle = false;
          this.noWinToggle = false;
        }
      }, {
        key: "clickCount",
        value: function clickCount() {
          this.clicks++;
        }
      }, {
        key: "changeTimer",
        value: function changeTimer(event) {
          this.timerName = event.target.id;
          this.timer = +event.target.value;
          this.tempTimer = +event.target.value;
          this.displayRecord();
        }
      }]);

      return RecordsService;
    }();

    RecordsService.ɵfac = function RecordsService_Factory(t) {
      return new (t || RecordsService)();
    };

    RecordsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecordsService,
      factory: RecordsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\bbodek\Workspace\EPAM_LAB\Angular_HW_2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map