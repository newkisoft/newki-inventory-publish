(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"box\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow lg-6\" style=\"background-color:#ff6600\">\n\n    <button class=\"navbar-brand btn d-none d-sm-block\" (click)=\"toggle()\">\n        <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-list\" fill=\"currentColor\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\"\n            d=\"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\" />\n        </svg>\n    </button>\n    <a class=\"navbar-brand d-none d-sm-block\" href=\"#\">NewKi</a>    \n    <button class=\"navbar-toggler position-absolute d-md-none collapsed\" type=\"button\" (click)=\"toggle()\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <ul class=\"navbar-nav px-3 mr-0 ml-auto\">\n        <form asp-area=\"\" asp-controller=\"Account\" asp-action=\"Logout\" method=\"post\" id=\"logoutForm\">\n            <li class=\"nav-item text-nowrap\">\n                <div>\n                    <button class=\"btn\" type=\"button\" (click)=\"signOut()\">Sign out</button>\n                </div>\n            </li>\n        </form>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<a class=\"btn btn-primary\" href=\"/bulk-pallet-sample.csv\">Download pallet bulk upload sample file</a>\n<table class=\"table table-striped able-sm mt-2\">\n  <thead>\n  <tr>\n    <th>Pallet Number</th>\n    <th>Barcode</th>\n    <th>YarnType</th>\n    <th>Denier</th>\n    <th>Filament</th>\n    <th>BobbinSize</th>\n    <th>Lustre</th>\n    <th>Lot</th>\n    <th>Color</th>\n    <th>ColorCode</th>\n    <th>Intermingle</th>\n    <th>Weight</th>\n    <th>Price</th>    \n  </tr>\n</thead>\n</table>\n<div class=\" box-header with-border\">\n  <form [formGroup]=\"palletform\" (ngSubmit)=\"OnUploadPalletFile()\">\n    <p>Pallets</p>\n    <div class=\"form-group\">\n      <label for=\"bulkpalletlist\">Pallet list</label>\n      <input type=\"file\" id=\"bulkpalletlist\" (change)=\"onPalletFileChange($event)\" />            \n    </div>\n    <button type=\"submit\"  class=\"btn btn-success\">Upload  <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"palletuploading\"></span></button>\n  </form>  \n</div>\n<a class=\"btn btn-primary\" href=\"/bulk-box-sample.csv\">Download box bulk upload sample file</a>\n<table class=\"table table-striped able-sm mt-2\">\n  <thead>\n  <tr>\n    <th>Pallet Id</th>\n    <th>Barcode</th>\n    <th>Weight</th>\n  </tr>\n  </thead>\n</table>\n<div class=\" box-header with-border\">\n  <form [formGroup]=\"boxform\" (ngSubmit)=\"OnUploadBoxFile()\">\n    <p>Box</p>\n    <div class=\"form-group\">\n      <label for=\"bulkboxlist\">Box list</label>\n      <input type=\"file\" id=\"bulkboxlist\" (change)=\"onBoxFileChange($event)\" />            \n    </div>\n    <button type=\"submit\"  class=\"btn btn-success\">Upload  <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"boxuploading\"></span></button>\n  </form>  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleMenu\" class=\"col-md d-md-block  sidebar-sticky sticky-top mt-4 \">\n    <ul class=\"nav flex-column\">\n        <li *ngFor=\"let menu of menus\" class=\"nav-item ml-3 mr-3 mt-1 mb-1\">\n            <a class=\"btn btn-dark w-100 text-left\" href=\"{{menu.Url}}\">\n                {{menu.Text}}\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/UploadFile.ts":
/*!*******************************!*\
  !*** ./src/app/UploadFile.ts ***!
  \*******************************/
/*! exports provided: UploadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
var UploadFile = /** @class */ (function () {
    function UploadFile() {
    }
    return UploadFile;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
















var appRoutes = [
    { path: "index", component: _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "**", component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            exports: [
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"]
            ],
            providers: [_share_service__WEBPACK_IMPORTED_MODULE_14__["ShareService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, http) {
        this.router = router;
        this.http = http;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        this.http
            .get(window.location.origin + "/api/check/")
            .toPromise()
            .then()
            .catch(function (error) {
            if (error.url.includes("Account/Login")) {
                window.location.href = window.location.origin + "/Account/Login";
            }
        });
        return true;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: filteredPallets, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredPallets", function() { return filteredPallets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var filteredPallets;
var FilterPipe = /** @class */ (function () {
    function FilterPipe(router, route) {
        this.router = router;
        this.route = route;
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toString().toLowerCase().trim().replace(/\s\s+/g, ' ');
        var sortedSearchText = this.sort(searchText);
        filteredPallets = [];
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                search: searchText
            },
            queryParamsHandling: 'merge',
            skipLocationChange: false
        });
        return items.filter(function (it) {
            var included = false;
            var sortItemText = _this.sort(_this.cleanText(JSON.stringify(it))
                .toLowerCase());
            var rr = sortItemText.match(sortedSearchText + ".*");
            if (rr != null)
                included = rr.index > 0;
            if (included) {
                filteredPallets.push(it);
                return true;
            }
            return included;
        });
    };
    FilterPipe.prototype.sort = function (text) {
        return text.split(' ').sort().join('.*');
    };
    FilterPipe.prototype.cleanText = function (str) {
        return str.replace(/"\w+":/g, '').replace(/"/g, '').replace(/}/g, '').replace(/{/g, '').replace(/,/g, ' ');
    };
    FilterPipe.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "filter"
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/header/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(shareService, http) {
        this.shareService = shareService;
        this.http = http;
        this.toggleButton = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.shareService.changeMessage(this.toggleButton);
    };
    HeaderComponent.prototype.toggle = function () {
        this.toggleButton = !this.toggleButton;
        this.shareService.changeMessage(this.toggleButton);
    };
    HeaderComponent.prototype.signOut = function () {
        this.http
            .post("/Account/Logout", null)
            .toPromise()
            .then(function (res) {
            window.location.href = window.location.origin + "/Account/Login";
        }).catch(function () {
            window.location.href = window.location.origin + "/Account/Login";
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.sass":
/*!********************************************!*\
  !*** ./src/app/index/index.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _UploadFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UploadFile */ "./src/app/UploadFile.ts");







var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, router, route, fb) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.prices = new Array();
        this.showSuccess = false;
        this.showError = false;
        this.CustomerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.PalletsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.BoxesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.createForm();
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.createForm = function () {
        this.palletform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bulkpalletlist: null
        });
        this.boxform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bulkboxlist: null
        });
    };
    IndexComponent.prototype.fileChange = function (event, formInputName, formGroup) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                formGroup.get(formInputName).setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result
                });
            };
        }
    };
    IndexComponent.prototype.uploadFile = function (fileName, uploadUrl, updateUrl, formModel) {
        var _this = this;
        var uploadFiile = new _UploadFile__WEBPACK_IMPORTED_MODULE_5__["UploadFile"]();
        uploadFiile.filename = fileName;
        uploadFiile.filetype = "CSV";
        this.http
            .post(uploadUrl, formModel)
            .toPromise()
            .then(function () {
            _this.palletuploading = false;
            _this.boxuploading = false;
            _this.http
                .post(updateUrl, uploadFiile)
                .toPromise()
                .then(function () {
            });
        });
    };
    IndexComponent.prototype.OnUploadPalletFile = function () {
        this.palletform.value.bulkpalletlist.filename = "bulk-pallet-upload-" + this.palletform.value.bulkpalletlist.filename;
        var uploadUrl = '/api/AwsStorage/UploadFile/';
        var updateUrl = '/api/PalletBulkImport/UpdateAsync';
        this.palletuploading = true;
        this.uploadFile(this.palletform.value.bulkpalletlist.filename, uploadUrl, updateUrl, this.palletform.value.bulkpalletlist);
    };
    IndexComponent.prototype.OnUploadBoxFile = function () {
        this.boxform.value.bulkboxlist.filename = "bulk-box-upload-" + this.boxform.value.bulkboxlist.filename;
        var uploadUrl = '/api/AwsStorage/UploadFile/';
        var updateUrl = '/api/BoxBulkImport/UpdateAsync';
        this.boxuploading = true;
        this.uploadFile(this.boxform.value.bulkboxlist.filename, uploadUrl, updateUrl, this.boxform.value.bulkboxlist);
    };
    IndexComponent.prototype.onPalletFileChange = function (event) {
        this.fileChange(event, 'bulkpalletlist', this.palletform);
    };
    IndexComponent.prototype.onBoxFileChange = function (event) {
        this.fileChange(event, 'bulkboxlist', this.boxform);
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-index",
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.sass */ "./src/app/index/index.component.sass")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/nav/Menu.ts":
/*!*****************************!*\
  !*** ./src/app/nav/Menu.ts ***!
  \*****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.sass":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/app/nav/Menu.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(shareService, http) {
        this.shareService = shareService;
        this.http = http;
        this.menus = Array();
        this.toggleMenu = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("/api/nav/")
            .toPromise()
            .then(function (res) {
            for (var i = 0; i < res.length; i++) {
                var menu = new _Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]();
                menu.Text = res[i];
                menu.Url = "/" + res[i] + "/Index/index.html";
                _this.menus.push(menu);
            }
        })
            .catch(function (error) {
            if (error.status == 200) {
                window.location.href = window.location.origin + "/Account/login";
            }
        });
        this.shareService.currentMessage.subscribe(function (message) { return _this.toggleMenu = message; });
    };
    NavComponent.ctorParameters = function () { return [
        { type: _share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.sass */ "./src/app/nav/nav.component.sass")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ShareService = /** @class */ (function () {
    function ShareService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentMessage = this.messageSource.asObservable();
    }
    ShareService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/BulkUpload/bulkupload/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map