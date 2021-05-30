(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../Vendor/Vendors/src/app/Vendor.ts":
/*!*************************************************************************************************!*\
  !*** /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/Vendor/Vendors/src/app/Vendor.ts ***!
  \*************************************************************************************************/
/*! exports provided: Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    return Vendor;
}());



/***/ }),

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

/***/ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit/edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button class=\"btn bg-secondary  btn-block col-md-3\" (click)=\"Cancel()\">\n      back\n    </button>\n  </div>\n  <div class=\"table ml-3\">\n    <div class=\"row\">\n      <div>\n        <input type=\"text\" class=\"form-control ml-1 \" name=\"VendorInvoiceNumber\" placeholder=\"State Invoice Number\"\n          matInput [(ngModel)]=\"bill.VendorInvoiceNumber\" />\n      </div>\n      <mat-form-field class=\"col\">\n        <input type=\"text\" class=\"col ml-1\" name=\"bill.Vendor.VendorId\" placeholder=\"Vendor Id\" matInput\n          [(ngModel)]=\"bill.Vendor.VendorId\" [matAutocomplete]=\"auto\" />\n        <label>{{ bill.Vendor.VendorName }}</label>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of vendors\" (click)=\"UpdateVendor(option)\" [value]=\"option.VendorId\">\n            {{ option.VendorName }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <mat-form-field class=\"col\">\n        <input class=\"col ml-1\" matInput [matDatepicker]=\"picker\" [(ngModel)]=\"bill.BillDate\" placeholder=\"Bill Date\" />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n\n    </div>\n    <div class=\"form-group mt-3\">\n      <label for=\"bill-name\">Bill name</label>\n      <input id=\"bill-name\" name=\"bill-name\" class=\"input-group-text form-control\" [(ngModel)]=\"bill.BillName\"\n        placeholder=\"Bill name\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"bill-amount\">Bill Amount</label>\n      <input id=\"bill-amount\" type=\"number\" name=\"bill-amount\" class=\"input-group-text form-control\" [(ngModel)]=\"bill.Amount\"\n        placeholder=\"Bill Amount\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bill-amount\">Exchange Rate</label>\n      <input id=\"bill-exchange-rate\" type=\"number\" name=\"bill-exchange-rate\" class=\"input-group-text form-control\"\n        [(ngModel)]=\"bill.ExchangeRate\" placeholder=\"Exchange Rate\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bill-amount\">Bill Usd Amount</label>\n      <input id=\"bill-usd-amount\" type=\"number\" name=\"bill-usd-amount\" class=\"input-group-text form-control\"\n        [(ngModel)]=\"bill.UsdAmount\" placeholder=\"Bill Usd Amount\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bill-euro-amount\">Bill Euro Amount</label>\n      <input id=\"bill-euro-amount\" type=\"number\" name=\"bill-euro-amount\" class=\"input-group-text form-control\"\n        [(ngModel)]=\"bill.EuroAmount\" placeholder=\"Bill Euro Amount\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"paid\">Paid Amount</label>\n      <input id=\"paid\" type=\"number\" name=\"paid\" class=\"input-group-text form-control\" [(ngModel)]=\"bill.Paid\"\n        placeholder=\"Paid Amount\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"kdv\">KDV</label>\n      <input name=\"kdv\" id=\"kdv\" type=\"number\" class=\"input-group-text form-control\" [(ngModel)]=\"bill.KDV\" placeholder=\"KDV\" />\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <input id=\"comment\" name=\"comment\" class=\"input-group-text form-control\" [(ngModel)]=\"bill.Comment\"\n        placeholder=\"Comments\" />\n    </div>\n    <form [formGroup]=\"form\" (ngSubmit)=\"OnUploadFile()\">\n      <div class=\"form-group\">\n        <label for=\"fatura\">Fatura</label>\n        <input type=\"file\" id=\"fatura\" (change)=\"onFileChange($event)\" #fileInput>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Upload <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n          aria-hidden=\"true\" *ngIf=\"uploading\"></span></button>\n    </form>\n    <table class=\"table table-borderless\">\n      <thead>\n        <tr>\n          <th>File name</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files \">\n          <td><a href=\"/api/AwsStorage/DownloadFile/{{file.File.FileName}}\" target=\"blank\">{{file.File.FileName}}</a>\n          </td>\n          <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveFileItem(file)\" type=\"button\" value=\"X\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n  <div class=\"row\">\n    <div class=\"col-md-3 mb-3\">\n      <button class=\"btn btn-secondary btn-lg btn-block\" type=\"button\" (click)=\"Cancel()\">\n        Cancel\n      </button>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"ConfirmDelete()\">\n        Delete\n      </button>\n    </div>\n\n\n    <div class=\"col-md-3 mb-3\">\n      <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Save\" (click)=\"Save(bill)\" [attr.disabled]=\"saving ? '' : null\" >\n        Save\n      </button>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n<div *ngIf=\"deletemodal\"  class=\"modal-backdrop fade show\"></div>\n<div *ngIf=\"deletemodal\"  id=\"exampleModalCenter\" class=\"modal fade show\"  tabindex=\"-1\" role=\"dialog\"\n  style=\"display: block; padding-right: 12px;\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Delete</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"CloseModal()\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"CloseModal()\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"Delete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n  <p *ngIf=\"errorVendor\" class=\"alert alert-danger\" role=\"alert\">Fill up the vendor field before saving</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow lg-6\" style=\"background-color:#ff6600\">\n\n    <button class=\"navbar-brand btn d-none d-sm-block\" (click)=\"toggle()\">\n        <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-list\" fill=\"currentColor\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\"\n            d=\"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\" />\n        </svg>\n    </button>\n    <a class=\"navbar-brand d-none d-sm-block\" href=\"#\">NewKi</a>    \n    <button class=\"navbar-toggler position-absolute d-md-none collapsed\" type=\"button\" (click)=\"toggle()\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <ul class=\"navbar-nav px-3 mr-0 ml-auto\">\n        <form asp-area=\"\" asp-controller=\"Account\" asp-action=\"Logout\" method=\"post\" id=\"logoutForm\">\n            <li class=\"nav-item text-nowrap\">\n                <div>\n                    <button class=\"btn\" type=\"button\" (click)=\"signOut()\">Sign out</button>\n                </div>\n            </li>\n        </form>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" box-header with-border\">\n    <input\n      [(ngModel)]=\"searchText\"\n      placeholder=\"search text goes here\"\n      class=\"form-control col-md-3 ml-2 mb-3\"\n    />\n    <a\n      class=\"btn btn-success btn-md btn-block col-md-1 ml-2 mb-3\"\n      [routerLink]=\"['../insert']\"\n      >Add</a>\n   <button class=\"btn btn-success\"   *ngIf=\"showLoadMore\"  (click)=\"LoadAll()\">Load all</button>\n    <table class=\"table table-striped able-sm mt-2\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th  (click)=\"Sort('BillId')\"  scope=\"col\">#</th>\n          <th  class=\"hide-on-large\"  scope=\"col\">Details</th>\n          <th class=\"hide-on-small\" (click)=\"Sort('VendorName')\" scope=\"col\">Vendor Name</th>\n          <th class=\"hide-on-small\" (click)=\"Sort('BillDate')\" scope=\"col\">Invoice Date</th>\n          <th class=\"hide-on-small\" (click)=\"Sort('Amount')\" scope=\"col\">Total Lira</th>\n          <th class=\"hide-on-small\" (click)=\"Sort('UsdAmount')\" scope=\"col\">Total Usd</th>\n          <th class=\"hide-on-small\" (click)=\"Sort('Paid')\"  scope=\"col\">Total Payment</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let bill of filteredBills | filter: searchText\"\n          (dblclick)=\"doubleClick($event)\"\n        >\n          <td  scope=\"col\">\n            <a routerLink=\"/edit\" [queryParams]=\"{id: bill.BillId}\" >\n            {{bill.BillId}}</a></td>\n          <td class=\"hide-on-large\" scope=\"col\"><p>{{ bill.Vendor.VendorName }}, {{ bill.BillDate | date }}, {{ bill.Amount }}, {{ bill.UsdAmount }}, {{ bill.Paid }}</p></td>\n          <td class=\"hide-on-small\" scope=\"col\">{{ bill.Vendor.VendorName }}</td>\n          <td class=\"hide-on-small\"scope=\"col\">{{ bill.BillDate | date }}</td>\n          <td class=\"hide-on-small\"scope=\"col\">{{ bill.Amount }}</td>\n          <td class=\"hide-on-small\"scope=\"col\">{{ bill.UsdAmount }}</td>\n          <td class=\"hide-on-small\" scope=\"col\">{{ bill.Paid }}</td>\n        </tr>\n      </tbody>\n    </table>\n     <button class=\"btn btn-success\" *ngIf=\"showLoadMore\" (click)=\"LoadMore()\">Load more {{start}}-{{totalRows}}</button> \n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/insert/insert.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/insert/insert.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\" >\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button\n      class=\"btn bg-secondary  btn-block col-md-3\"\n      [routerLink]=\"['../home']\"\n    >\n      back\n    </button>\n  </div>\n  <div class=\"table ml-3\" >\n    <div class=\"row\">\n       <div>                        \n                  <input\n                  type=\"text\"\n                  class=\"form-control ml-1 \"\n                  name=\"VendorInvoiceNumber\"\n                  placeholder=\"State Invoice Number\"\n                  matInput\n                  [(ngModel)]=\"bill.VendorInvoiceNumber\"    \n                />\n      </div>\n      <mat-form-field class=\"col\">\n        <input\n          type=\"text\"\n          class=\"col ml-1\"\n          name=\"bill.Vendor.VendorId\"\n          placeholder=\"Vendor Id\"\n          [formControl]= \"VendorsControl\"\n          matInput\n          [(ngModel)]=\"bill.Vendor.VendorId\"\n          [matAutocomplete]=\"auto\"          \n        />\n        <label>{{ bill.Vendor.VendorName }}</label>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option\n            *ngFor=\"let option of filteredOptions | async\"  \n            (click) = \"UpdateVendor(option)\"\n            [value]=\"option.VendorId\"            \n          >\n            {{ option.VendorName }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>      \n      <mat-form-field class=\"col\">\n        <input\n          class=\"col ml-1\"\n          matInput          \n          [matDatepicker]=\"picker\"\n          [(ngModel)]=\"bill.BillDate\"\n          placeholder=\"Bill Date\"\n        />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n      \n      \n    </div> \n    <div class=\"form-group mt-3\">        \n        <label for=\"bill-name\">Bill name</label>\n      <input    \n          id=\"bill-name\"\n          name=\"bill-name\"\n          class=\"input-group-text form-control\"               \n          [(ngModel)]=\"bill.BillName\"\n          placeholder=\"Bill name\"\n        />\n    </div>\n    \n        <div class=\"form-group\">\n          <label for=\"bill-amount\">Bill Amount</label>\n          <input\n            id=\"bill-amount\"\n            name=\"bill-amount\"\n            type=\"number\"\n            class=\"input-group-text form-control\"   \n            [(ngModel)]=\"bill.Amount\"\n            placeholder=\"Bill Amount\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"bill-amount\">Exchange Rate</label>\n          <input\n            id=\"bill-exchange-rate\"\n            name=\"bill-exchange-rate\"\n            type=\"number\"\n            class=\"input-group-text form-control\"   \n            [(ngModel)]=\"bill.ExchangeRate\"\n            placeholder=\"Exchange Rate\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"bill-usd-amount\">Bill Usd Amount</label>\n          <input\n            id=\"bill-usd-amount\"\n            name=\"bill-usd-amount\"\n            type=\"number\"\n            class=\"input-group-text form-control\"   \n            [(ngModel)]=\"bill.UsdAmount\"\n            placeholder=\"Bill Usd Amount\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"bill-euro-amount\">Bill Euro Amount</label>\n          <input\n            id=\"bill-euro-amount\"\n            name=\"bill-usd-amount\"\n            type=\"number\"\n            class=\"input-group-text form-control\"   \n            [(ngModel)]=\"bill.EuroAmount\"\n            placeholder=\"Bill Euro Amount\"\n          />\n        </div>\n\n        <div class=\"form-group\">\n        <label for=\"paid\">Paid Amount</label>\n        <input\n            id=\"paid\"\n            name=\"paid\"\n            type=\"number\"\n            class=\"input-group-text form-control\"   \n            [(ngModel)]=\"bill.Paid\"\n            placeholder=\"Paid Amount\"\n          />\n          </div>\n          <div class=\"form-group\">\n                      <label for=\"kdv\">KDV</label>\n          <input\n              name=\"kdv\"\n              id=\"kdv\"   \n              type=\"number\"             \n              class=\"input-group-text form-control\"   \n              [(ngModel)]=\"bill.KDV\"\n              placeholder=\"KDV\"\n            />\n            </div>\n    \n    \n    <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <input\n          id=\"comment\"\n          name=\"comment\"\n          class=\"input-group-text form-control\"             \n          [(ngModel)]=\"bill.Comment\"\n          placeholder=\"Comments\"\n        />       \n    </div>\n  </div> \n    \n  <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n  <div class=\"row\">\n    <div class=\"col-md-3 mb-3\">\n      <button\n        class=\"btn btn-secondary btn-lg btn-block\"\n        type=\"button\"\n        (click)=\"Cancel()\"\n      >\n        Cancel\n      </button>\n    </div>\n\n\n    <div class=\"col-md-3 mb-3\">\n      <button\n        class=\"btn btn-success btn-lg btn-block\"\n        type=\"button\"\n        value=\"Save\"\n        (click)=\"Save(bill)\"\n        [attr.disabled]=\"saving ? '' : null\"\n      >\n        Save\n      </button>\n    </div>\n  </div>\n  <p *ngIf=\"errorVendor\" class=\"alert alert-danger\" role=\"alert\">Fill up the vendor field before saving</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleMenu\" class=\"col-md d-md-block  sidebar-sticky sticky-top mt-4 \">\n    <ul class=\"nav flex-column\">\n        <li *ngFor=\"let menu of menus\" class=\"nav-item ml-3 mr-3 mt-1 mb-1\">\n            <a class=\"btn btn-dark w-100 text-left\" href=\"{{menu.Url}}\">\n                {{menu.Text}}\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/BillDocumentFile.ts":
/*!*************************************!*\
  !*** ./src/app/BillDocumentFile.ts ***!
  \*************************************/
/*! exports provided: BillDocumentFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDocumentFile", function() { return BillDocumentFile; });
var BillDocumentFile = /** @class */ (function () {
    function BillDocumentFile() {
        this.BillId = 0;
        this.DocumentFileId = 0;
    }
    return BillDocumentFile;
}());



/***/ }),

/***/ "./src/app/DocumentFile.ts":
/*!*********************************!*\
  !*** ./src/app/DocumentFile.ts ***!
  \*********************************/
/*! exports provided: DocumentFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFile", function() { return DocumentFile; });
var DocumentFile = /** @class */ (function () {
    function DocumentFile() {
    }
    return DocumentFile;
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
        this.title = 'Bill';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");





















var appRoutes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "edit", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "insert", component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            exports: [
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [_share_service__WEBPACK_IMPORTED_MODULE_18__["ShareService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"]]
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

/***/ "./src/app/bill.ts":
/*!*************************!*\
  !*** ./src/app/bill.ts ***!
  \*************************/
/*! exports provided: Bill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bill", function() { return Bill; });
var Bill = /** @class */ (function () {
    function Bill() {
    }
    return Bill;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.sass":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bill */ "./src/app/bill.ts");
/* harmony import */ var _BillDocumentFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BillDocumentFile */ "./src/app/BillDocumentFile.ts");
/* harmony import */ var _DocumentFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DocumentFile */ "./src/app/DocumentFile.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Vendor_Vendors_src_app_Vendor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../Vendor/Vendors/src/app/Vendor */ "../../Vendor/Vendors/src/app/Vendor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var EditComponent = /** @class */ (function () {
    function EditComponent(http, route, router, fb, location) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.location = location;
        this.bill = new _bill__WEBPACK_IMPORTED_MODULE_4__["Bill"]();
        this.showSuccess = false;
        this.showError = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.vendors = new Array();
        this.files = new Array();
        this.deletemodal = false;
        this.saving = false;
        this.errorVendor = false;
        this.bill.Vendor = new _Vendor_Vendors_src_app_Vendor__WEBPACK_IMPORTED_MODULE_8__["Vendor"]();
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            fatura: null
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var vendorUrl = "/api/Vendor/";
        var billUrl = "/api/Bill/GetBill/";
        this.id = this.route.snapshot.queryParamMap.get("id");
        this.http.get(vendorUrl)
            .subscribe(function (p) {
            _this.vendors = p;
        });
        this.http.get(billUrl + this.id)
            .subscribe(function (p) {
            _this.bill = p;
            for (var i = 0; i < p.Files.length; i++) {
                _this.files.push(p.Files[i]);
            }
        });
    };
    EditComponent.prototype.Delete = function () {
        var _this = this;
        this.showSuccess = false;
        var billUrl = "/api/Bill/Delete/?billId=" + this.bill.BillId;
        this.http
            .delete(billUrl)
            .toPromise()
            .then(function (res) {
            _this.showSuccess = true;
            _this.router.navigateByUrl("/home");
        });
    };
    EditComponent.prototype.Save = function (bill) {
        var _this = this;
        if (!bill.Vendor || !bill.Vendor.VendorName) {
            this.errorVendor = true;
            this.saving = false;
            return;
        }
        else {
            this.errorVendor = false;
        }
        this.showSuccess = false;
        this.saving = true;
        var billURL = "/api/Bill/Update";
        bill.Files = new Array();
        for (var i = 0; i < this.files.length; i++) {
            var file = new _BillDocumentFile__WEBPACK_IMPORTED_MODULE_5__["BillDocumentFile"]();
            file.BillId = bill.BillId;
            file.DocumentFileId = this.files[i].DocumentFileId;
            file.File = new _DocumentFile__WEBPACK_IMPORTED_MODULE_6__["DocumentFile"]();
            file.File.FileName = this.files[i].File.FileName;
            bill.Files.push(file);
        }
        this.http
            .post(billURL, bill)
            .toPromise()
            .then(function (res) {
            _this.showSuccess = true;
            _this.saving = false;
        });
    };
    EditComponent.prototype.UpdateVendor = function (option) {
        this.bill.Vendor = option;
    };
    EditComponent.prototype.OnUploadFile = function () {
        var _this = this;
        this.form.value.fatura.filename = "bill-" + this.id + "-" + this.form.value.fatura.filename;
        var formModel = this.form.value.fatura;
        this.uploading = true;
        var invoiceUrl = '/api/AwsStorage/UploadFile/';
        this.http
            .post(invoiceUrl, formModel)
            .toPromise()
            .then(function () {
            var newInvoiceFile = new _BillDocumentFile__WEBPACK_IMPORTED_MODULE_5__["BillDocumentFile"]();
            newInvoiceFile.BillId = Number(_this.id);
            var newFile = new _DocumentFile__WEBPACK_IMPORTED_MODULE_6__["DocumentFile"]();
            newFile.FileName = _this.form.value.fatura.filename;
            newInvoiceFile.File = newFile;
            _this.files.push(newInvoiceFile);
            _this.uploading = false;
        });
    };
    EditComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.form.get('fatura').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result
                });
            };
        }
    };
    EditComponent.prototype.RemoveFileItem = function (selectedFile) {
        var index = this.files.indexOf(selectedFile);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
    };
    EditComponent.prototype.Cancel = function () {
        var state = this.location.getState();
        if (state.navigationId > 1) {
            this.location.back();
        }
        else {
            this.router.navigateByUrl("/index");
        }
    };
    EditComponent.prototype.ConfirmDelete = function () {
        this.deletemodal = true;
    };
    EditComponent.prototype.CloseModal = function () {
        this.deletemodal = false;
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/edit/edit.component.sass")]
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: filteredBills, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredBills", function() { return filteredBills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var filteredBills;

var FilterPipe = /** @class */ (function () {
    function FilterPipe(router, route) {
        this.router = router;
        this.route = route;
        this._router = router;
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
        filteredBills = [];
        this._router.navigate([], {
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
                filteredBills.push(it);
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

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Using SCSS variables to store breakpoints */\n@media (max-width: 768px) {\n  .hide-on-small {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hide-on-large {\n    display: none;\n  }\n}\ntd p {\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvOUE1OEE2QTE1OEE2N0MxRi9wcm9qZWN0cy9pbnZlbnRvcnkvaW52ZW50b3J5L1ZpZXdzL0JpbGwvQmlsbC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUFBO0FBRUE7RUFDRztJQUNLLGFBQUE7RUNBTjtBQUNGO0FERUE7RUFDRztJQUNLLGFBQUE7RUNBTjtBQUNGO0FERUE7RUFDSSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVXNpbmcgU0NTUyB2YXJpYWJsZXMgdG8gc3RvcmUgYnJlYWtwb2ludHMgKi9cbiRicmVha3BvaW50LXRhYmxldDogNzY4cHhcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIFxuICAgLmhpZGUtb24tc21hbGwgXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICBcblxuQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXRhYmxldCkgXG4gICAuaGlkZS1vbi1sYXJnZSBcbiAgICAgICAgZGlzcGxheTogbm9uZVxuXG5cbnRkIHBcbiAgICBtYXgtd2lkdGg6MzUwcHhcblxuIiwiLyogVXNpbmcgU0NTUyB2YXJpYWJsZXMgdG8gc3RvcmUgYnJlYWtwb2ludHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlkZS1vbi1zbWFsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRlLW9uLWxhcmdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG50ZCBwIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.bills = new Array();
        this.preventSingleClick = false;
        this.sortUp = new Array();
        this.filteredBills = new Array();
        this.totalRows = 0;
        this.max = 100;
        this.start = 51;
        this.showLoadMore = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var billURL = "/api/Bill/GetBill/0/" + this.max;
        this.searchText = this.route.snapshot.queryParamMap.get("search");
        this.http
            .get(billURL)
            .toPromise()
            .then(function (res) {
            _this.bills = res;
            _this.filteredBills = _this.bills;
            _this.Count();
        });
    };
    HomeComponent.prototype.LoadAll = function () {
        var _this = this;
        var billURL = "/api/Bill/GetBill/100/" + this.totalRows;
        this.http
            .get(billURL)
            .toPromise()
            .then(function (res) {
            for (var cnt = 0; cnt < res.length; cnt++) {
                _this.bills.push(res[cnt]);
                _this.start++;
            }
            _this.showLoadMore = false;
        });
    };
    HomeComponent.prototype.LoadMore = function () {
        var _this = this;
        if (this.start < this.totalRows) {
            var billURL = "/api/Bill/GetBill/" + this.start + "/" + this.max;
            this.http
                .get(billURL)
                .toPromise()
                .then(function (res) {
                for (var cnt = 0; cnt < res.length; cnt++) {
                    _this.bills.push(res[cnt]);
                    _this.start++;
                }
                if (_this.start == _this.totalRows) {
                    _this.showLoadMore = false;
                }
            });
        }
        else {
            this.showLoadMore = false;
        }
    };
    HomeComponent.prototype.Count = function () {
        var _this = this;
        var billURL = "/api/Bill/Count/";
        this.http
            .get(billURL)
            .toPromise()
            .then(function (res) {
            _this.totalRows = res;
        });
    };
    HomeComponent.prototype.doubleClick = function (event) {
        this.preventSingleClick = true;
        clearTimeout(this.timer);
        //Navigate on double click
        this.router.navigate(["/edit/"], {
            queryParams: { id: event.currentTarget.children[0].innerText }
        });
    };
    HomeComponent.prototype.Sort = function (sortHeader) {
        switch (sortHeader) {
            case 'BillId':
                {
                    this.sortUp[0] = !this.sortUp[0];
                    if (this.sortUp[0]) {
                        this.filteredBills.sort(function (a, b) { return a.BillId - b.BillId; });
                    }
                    else {
                        this.filteredBills.sort(function (a, b) { return b.BillId - a.BillId; });
                    }
                    break;
                }
            case 'VendorName':
                {
                    this.sortUp[1] = !this.sortUp[1];
                    if (this.sortUp[1]) {
                        this.filteredBills.sort(function (a, b) { return a.Vendor.VendorName.toLocaleLowerCase().localeCompare(b.Vendor.VendorName.toLocaleLowerCase()); });
                    }
                    else {
                        this.filteredBills.sort(function (a, b) { return b.Vendor.VendorName.toLocaleLowerCase().localeCompare(a.Vendor.VendorName.toLocaleLowerCase()); });
                    }
                    break;
                }
            case 'BillDate':
                {
                    this.sortUp[2] = !this.sortUp[2];
                    if (this.sortUp[2]) {
                        this.filteredBills.sort(function (a, b) { return new Date(a.BillDate).getTime() - new Date(b.BillDate).getTime(); });
                    }
                    else {
                        this.filteredBills.sort(function (a, b) { return new Date(b.BillDate).getTime() - new Date(a.BillDate).getTime(); });
                    }
                    break;
                }
            case 'Amount':
                {
                    this.sortUp[4] = !this.sortUp[4];
                    if (this.sortUp[4]) {
                        this.filteredBills.sort(function (a, b) { return a.Amount - b.Amount; });
                    }
                    else {
                        this.filteredBills.sort(function (a, b) { return b.Amount - a.Amount; });
                    }
                    break;
                }
            case 'UsdAmount':
                {
                    this.sortUp[4] = !this.sortUp[4];
                    if (this.sortUp[4]) {
                        this.filteredBills.sort(function (a, b) { return a.UsdAmount - b.UsdAmount; });
                    }
                    else {
                        this.filteredBills.sort(function (a, b) { return b.UsdAmount - a.UsdAmount; });
                    }
                    break;
                }
            case 'Paid':
                {
                    this.sortUp[5] = !this.sortUp[5];
                    if (this.sortUp[5]) {
                        this.filteredBills.sort(function (a, b) { return a.Paid - b.Paid; });
                    }
                    else {
                        this.filteredBills.sort(function (a, b) { return b.Paid - a.Paid; });
                    }
                    break;
                }
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/insert/insert.component.sass":
/*!**********************************************!*\
  !*** ./src/app/insert/insert.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2VydC9pbnNlcnQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/insert/insert.component.ts":
/*!********************************************!*\
  !*** ./src/app/insert/insert.component.ts ***!
  \********************************************/
/*! exports provided: InsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponent", function() { return InsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Vendor_Vendors_src_app_Vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Vendor/Vendors/src/app/Vendor */ "../../Vendor/Vendors/src/app/Vendor.ts");
/* harmony import */ var _bill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bill */ "./src/app/bill.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var InsertComponent = /** @class */ (function () {
    function InsertComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.bill = new _bill__WEBPACK_IMPORTED_MODULE_3__["Bill"]();
        this.showSuccess = false;
        this.showError = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.VendorsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.vendors = new Array();
        this.saving = false;
        this.exchangeApi = "";
        this.errorVendor = false;
        this.bill.Vendor = new _Vendor_Vendors_src_app_Vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"]();
        this.bill.Amount = 0;
        this.bill.BillDueDate = new Date();
        this.bill.Paid = 0;
        this.bill.ExchangeRate = 6.5;
        this.bill.KDV = 0;
    }
    InsertComponent.prototype.ngOnInit = function () {
        var _this = this;
        var vendorUrl = "/api/Vendor/";
        this.exchangeApi = "/api/exchange/";
        this.http.get(vendorUrl)
            .subscribe(function (p) {
            _this.vendors = p;
            _this.filteredOptions = _this.VendorsControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filter(value); }));
        });
        this.http.get(this.exchangeApi)
            .subscribe(function (p) {
            _this.bill.ExchangeRate = p;
        });
    };
    InsertComponent.prototype.Save = function (bill) {
        var _this = this;
        this.showSuccess = false;
        var billUrl = "/api/Bill/Insert";
        if (!bill.Vendor || !bill.Vendor.VendorName) {
            this.errorVendor = true;
            this.saving = false;
            return;
        }
        else {
            this.errorVendor = false;
        }
        this.saving = true;
        this.http
            .post(billUrl, bill)
            .toPromise()
            .then(function (res) {
            _this.showSuccess = true;
            _this.saving = false;
        });
    };
    InsertComponent.prototype.UpdateVendor = function (option) {
        this.bill.Vendor = option;
    };
    InsertComponent.prototype.Cancel = function () {
        this.router.navigateByUrl("/home");
    };
    InsertComponent.prototype._filter = function (value) {
        var filterValue = value.toString().toLowerCase();
        return this.vendors.filter(function (option) { return option.VendorName.toLowerCase().includes(filterValue); });
    };
    InsertComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    InsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert',
            template: __webpack_require__(/*! raw-loader!./insert.component.html */ "./node_modules/raw-loader/index.js!./src/app/insert/insert.component.html"),
            styles: [__webpack_require__(/*! ./insert.component.sass */ "./src/app/insert/insert.component.sass")]
        })
    ], InsertComponent);
    return InsertComponent;
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

module.exports = __webpack_require__(/*! /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/Bill/Bill/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map