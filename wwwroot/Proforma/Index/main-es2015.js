(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../Customer/customers/src/app/Customer.ts":
/*!*******************************************************************************************************!*\
  !*** /mnt/1A2EC9902EC9657B/projects/inventory/inventory/Views/Customer/customers/src/app/Customer.ts ***!
  \*******************************************************************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
}


/***/ }),

/***/ "../../ProformaItem/ProformaItem/src/app/ProformaItem.ts":
/*!***************************************************!*\
  !*** ..Item/ProformaItem/src/app/ProformaItem.ts ***!
  \***************************************************/
/*! exports provided: ProformaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProformaItem", function() { return ProformaItem; });
class ProformaItem {
}


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

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button class=\"btn bg-secondary  btn-block col-md-3\" [routerLink]=\"['../home']\">\n      back\n    </button>\n  </div>\n  <div class=\"table ml-3\">\n    <div class=\"row\">\n      <mat-form-field class=\"col\">\n        <input type=\"text\" class=\"col ml-1\" name=\"proforma.Customer.CustomerId\" placeholder=\"Customer Id\"\n          [formControl]=\"CustomerControl\" matInput [(ngModel)]=\"proforma.Customer.CustomerId\"\n          [matAutocomplete]=\"auto\" />\n        <label>{{ proforma.Customer.CustomerName }}</label>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of customerFilteredOptions | async\" (click)=\"UpdateCustomer(option)\"\n            [value]=\"option.CustomerId\">\n            {{ option.CustomerName }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <mat-form-field class=\"col\">\n        <input class=\"col ml-1\" matInput [matDatepicker]=\"picker\" [(ngModel)]=\"proforma.ProformaDate\"\n          placeholder=\"proforma Date\" />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n\n    </div>\n    <div class=\"row\">\n    </div>\n  </div>\n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Weight</th>\n        <th scope=\"col\">Price</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let proformaProformaItem of proformaProformaItems \">\n        <td>{{ proformaProformaItem.ProformaItemId }}</td>\n        <td>{{ proformaProformaItem.ProformaItem.Description }}</td>\n        <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"proformaProformaItem.Weight\" /></td>\n        <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"proformaProformaItem.Price\" /></td>\n        <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveItem(proformaProformaItem)\" type=\"button\"\n            value=\"X\" />\n      </tr>\n      <tr>\n        <td colspan=\"9\">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\" [(ngModel)]=\"searchText\" (keyup)=\"searchChange()\" aria-describedby=\"inputGroup-sizing-default\">\n            <div class=\"input-group-prepend\" (click)=\"AddNewItem()\">\n                <span class=\"btn-success input-group-text\" id=\"inputGroup-sizing-default\">+</span>\n              </div>  \n          </div>\n          <ul [ngClass]=\"autocomplete\">\n            <li *ngFor=\"let palletOption of filteredProformas  | filter: searchText\" class=\"list-group-item\"\n              (click)=\"Add(palletOption.ProformaItemId)\" href=\"#\">{{palletOption.Description}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <form [formGroup]=\"form\" (ngSubmit)=\"OnUploadFile()\">\n    <div class=\"form-group\">\n      <label for=\"fatura\">Fatura</label>\n      <input type=\"file\" id=\"fatura\" (change)=\"onFileChange($event)\" #fileInput>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Upload <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n        aria-hidden=\"true\" *ngIf=\"uploading\"></span></button>\n  </form>\n  <table class=\"table table-borderless\">\n    <thead>\n      <tr>\n        <th>File name</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let file of files \">\n        <td><a href=\"/api/AwsStorage/DownloadFile/{{file.File.FileName}}\" target=\"blank\">{{file.File.FileName}}</a></td>\n        <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveFileItem(file)\" type=\"button\" value=\"X\" /></td>\n      </tr>\n    </tbody>\n  </table>\n  <div>\n    <label>KDV %:</label>\n    <input type=\"number\" class=\"ml-1 form-control\" name=\"proforma.KDV\" placeholder=\"KDV\" [(ngModel)]=\"proforma.Kdv\" />\n    <label>Discount:</label>\n    <input type=\"number\" class=\"ml-1 form-control\" name=\"proforma.Discount\" placeholder=\"Discount\"\n      [(ngModel)]=\"proforma.Discount\" />\n    <label>Exchange Rate:</label>\n    <input type=\"number\" class=\"ml-1 \" class=\"ml-1 form-control\" placeholder=\"Exchange Rate\" [(ngModel)]=\"ExchangeRate\" />\n    <hr />\n    <div class=\"table\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>KDV:</label><label class=\"ml-3\">{{Tax | number:'1.2-3'}}</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total:</label><label class=\"ml-3\">{{TotalUsd | number:'1.2-3'}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total Lira:</label><label class=\"ml-3\">{{TotalLira | number:'1.2-3'}}</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"comment\">Comment:</label>\n        <textarea class=\"form-control\" rows=\"5\" name=\"proforma.Comment\" id=\"proforma.Comment\"\n          [(ngModel)]=\"proforma.Comment\"></textarea>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-check form-check-inline ml-4\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\"\n            [(ngModel)]=\"proforma.Currency\" value=\"Usd\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Usd</label>\n        </div>\n        <div class=\"form-check form-check-inline ml-4\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\"\n            [(ngModel)]=\"proforma.Currency\" value=\"Euro\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Euro</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\"\n            [(ngModel)]=\"proforma.Currency\" value=\"Lira\">\n          <label class=\"form-check-label\" for=\"inlineRadio2\">Lira</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total payment:</label>\n          <input type=\"number\" class=\"ml-1 form-control\" name=\"proforma.Paid\" placeholder=\"Total payment\"\n            [(ngModel)]=\"proforma.Paid\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n  <div class=\"row\">\n    <div class=\"col-md-2 mb-3\">\n      <button class=\"btn btn-secondary btn-lg btn-block\" type=\"button\" (click)=\"Cancel()\">\n        Cancel\n      </button>\n    </div>\n    <div class=\"col-md-2 mb-3\">\n      <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"ConfirmDelete()\">\n        Delete\n      </button>\n    </div>\n    <div class=\"col-md-2 mb-3\">\n      <a href=\"{{ProformaReportUrl}}\" class=\"btn btn-primary btn-lg btn-block\" download>\n        Download PDF\n      </a>\n    </div>\n\n\n    <div class=\"col-md-2 mb-3\">\n      <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Save\" (click)=\"Save(proforma)\">\n        Save\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\"></span>\n      </button>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n<div *ngIf=\"deletemodal\"  class=\"modal-backdrop fade show\"></div>\n<div *ngIf=\"deletemodal\" id=\"exampleModalCenter\" class=\"modal fade show\" tabindex=\"-1\" role=\"dialog\"\n  style=\"display: block; padding-right: 12px;\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Delete</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"CloseModal()\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"CloseModal()\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"Delete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\" box-header with-border\">\n  <input\n    [(ngModel)]=\"searchText\"\n    placeholder=\"search text goes here\"\n    class=\"form-control col-md-3 ml-2 mb-3\"    \n  />\n  <a\n    class=\"btn btn-success btn-md btn-block col-md-1 ml-2 mb-3\"\n    [routerLink]=\"['../insert']\"\n    >Add</a\n  >  \n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th   (click)=\"Sort('InvoiceId')\" scope=\"col\">#</th>\n        <th class=\"hide-on-large\" (click)=\"Sort('CustomerName')\" scope=\"col\">Customer Name</th>\n        <th class=\"hide-on-small\" (click)=\"Sort('CustomerName')\" scope=\"col\">Customer Name</th>\n        <th class=\"hide-on-small\" scope=\"col\">Comment</th>\n        <th class=\"hide-on-small\" (click)=\"Sort('ProformaDate')\" scope=\"col\">Proforma Date</th>\n        <th class=\"hide-on-small\"  (click)=\"Sort('TotalUsd')\" scope=\"col\">Total USD</th>\n        <th class=\"hide-on-small\"  (click)=\"Sort('Paid')\" scope=\"col\">Total Payment</th>        \n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let proforma of proformas | filter: searchText\"\n        (dblclick)=\"doubleClick($event)\"\n      >\n        <td  scope=\"col\">\n          <a routerLink=\"/edit\" [queryParams]=\"{id: proforma.ProformaId}\"  >\n          {{proforma.ProformaId}}</a></td>\n        <td class=\"hide-on-large\" scope=\"col\"><p>{{ proforma.Customer.CustomerName }}, {{ proforma.Comment | slice:0:20 }}, {{ proforma.ProformaDate | date }}, {{ proforma.TotalUsd | number:'1.2-3'}}, {{ proforma.Paid | number:'1.2-3'}}</p></td>\n        <td class=\"hide-on-small\" scope=\"col\">{{ proforma.Customer.CustomerName }}</td>\n        <td class=\"hide-on-small\" scope=\"col\">{{ proforma.Comment | slice:0:20 }}</td>                \n        <td class=\"hide-on-small\" scope=\"col\">{{ proforma.ProformaDate | date }}</td>\n        <td class=\"hide-on-small\" scope=\"col\">{{ proforma.TotalUsd | number:'1.2-3'}}</td>        \n        <td class=\"hide-on-small\"  scope=\"col\">{{ proforma.Paid | number:'1.2-3'}}</td>         \n      </tr>\n    </tbody>\n  </table>\n  <hr/>  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/insert/insert.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/insert/insert.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button class=\"btn bg-secondary  btn-block col-md-3\" [routerLink]=\"['../home']\">\n      back\n    </button>\n  </div>\n  <div class=\"table ml-3\">\n    <div class=\"row\">\n      <mat-form-field class=\"col\">\n        <input type=\"text\" class=\"col ml-1\" name=\"proforma.Customer.CustomerId\" placeholder=\"Customer Id\"\n          [formControl]=\"CustomerControl\" matInput [(ngModel)]=\"proforma.Customer.CustomerId\"\n          [matAutocomplete]=\"auto\" />\n        <label>{{ proforma.Customer.CustomerName }}</label>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of customerFilteredOptions | async\" (click)=\"UpdateCustomer(option)\"\n            [value]=\"option.CustomerId\">\n            {{ option.CustomerName }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <p *ngIf=\"errorCustomer\" class=\"alert alert-danger\" role=\"alert\">*</p>\n      <mat-form-field class=\"col\">\n        <input class=\"col ml-1\" matInput [matDatepicker]=\"picker\" [(ngModel)]=\"proforma.ProformaDate\"\n          placeholder=\"proforma Date\" />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n\n    </div>\n    <div class=\"row\">\n    </div>\n  </div>\n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Weight</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let proformaProformaItem of proformaProformaItems \">\n        <td>{{ proformaProformaItem.ProformaItemId }}</td>\n        <td>{{ proformaProformaItem.ProformaItem.Description }}</td>\n        <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"proformaProformaItem.Weight\" /></td>\n        <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"proformaProformaItem.Price\" /></td>\n        <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveItem(proformaProformaItem)\" type=\"button\"\n            value=\"X\" />\n      </tr>      \n      <tr>\n        <td colspan=\"9\">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\" [(ngModel)]=\"searchText\" (keyup)=\"searchChange()\" aria-describedby=\"inputGroup-sizing-default\">\n            <div class=\"input-group-prepend\" (click)=\"AddNewItem()\">\n                <span class=\"input-group-text btn-success\" id=\"inputGroup-sizing-default\">+</span>\n              </div>  \n          </div>\n          <ul [ngClass]=\"autocomplete\">\n            <li *ngFor=\"let palletOption of filteredProformas  | filter: searchText\" class=\"list-group-item\"\n              (click)=\"Add(palletOption.ProformaItemId)\" href=\"#\">{{palletOption.Description}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"OnUploadFile()\">\n    <div class=\"form-group\">\n      <label for=\"fatura\">Fatura</label>\n      <input type=\"file\" id=\"fatura\" (change)=\"onFileChange($event)\" #fileInput>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Upload <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n        aria-hidden=\"true\" *ngIf=\"uploading\"></span></button>\n  </form>\n  <table class=\"table table-borderless\">\n    <thead>\n      <tr>\n        <th>File name</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let file of files \">\n        <td><a href=\"/api/AwsStorage/DownloadFile/{{file.File.FileName}}\" target=\"blank\">{{file.File.FileName}}</a></td>\n        <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveFileItem(file)\" type=\"button\" value=\"X\" /></td>\n      </tr>\n    </tbody>\n  </table>\n  <div>\n    <label>KDV %:</label>\n    <input type=\"number\" class=\"ml-1 form-control\" name=\"proforma.KDV\" placeholder=\"KDV\" [(ngModel)]=\"proforma.Kdv\" />\n    <label>Discount:</label>\n    <input type=\"number\" class=\"ml-1 form-control\" name=\"proforma.Discount\" placeholder=\"Discount\"\n      [(ngModel)]=\"proforma.Discount\" />\n    <label>Exchange Rate:</label>\n    <input type=\"number\" class=\"ml-1 \" class=\"ml-1 form-control\" placeholder=\"Exchange Rate\" [(ngModel)]=\"ExchangeRate\" />\n    <hr />\n    <div class=\"table\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>KDV:</label><label class=\"ml-3\">{{Tax | number:'1.2-3'}}</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total:</label><label class=\"ml-3\">{{TotalUsd | number:'1.2-3'}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total Lira:</label><label class=\"ml-3\">{{TotalLira | number:'1.2-3'}}</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"comment\">Comment:</label>\n        <textarea class=\"form-control\" rows=\"5\" name=\"proforma.Comment\" id=\"proforma.Comment\"\n          [(ngModel)]=\"proforma.Comment\"></textarea>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-check form-check-inline ml-4\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\"\n            [(ngModel)]=\"proforma.Currency\" value=\"Usd\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Usd</label>\n        </div>\n        <div class=\"form-check form-check-inline ml-4\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\"\n            [(ngModel)]=\"proforma.Currency\" value=\"Euro\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Euro</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\"\n            [(ngModel)]=\"proforma.Currency\" value=\"Lira\">\n          <label class=\"form-check-label\" for=\"inlineRadio2\">Lira</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total payment:</label>\n          <input type=\"number\" class=\"ml-1 form-control\" name=\"proforma.Paid\" placeholder=\"Total payment\"\n            [(ngModel)]=\"proforma.Paid\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n  <div class=\"row\">\n    <div class=\"col-md-2 mb-3\">\n      <button class=\"btn btn-secondary btn-lg btn-block\" type=\"button\" (click)=\"Cancel()\">\n        Cancel\n      </button>\n    </div>\n    <div class=\"col-md-2 mb-3\">\n      <a href=\"{{ProformaReportUrl}}\" class=\"btn btn-primary btn-lg btn-block\" download>\n        Download PDF\n      </a>\n    </div>\n    <div class=\"col-md-2 mb-3\">\n      <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Save\" (click)=\"Save(proforma)\">\n        Save\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\"></span>\n      </button>\n    </div>\n  </div>\n  <p *ngIf=\"errorCustomer\" class=\"alert alert-danger\" role=\"alert\">Fill up the customer field before saving</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleMenu\" class=\"col-md d-md-block  sidebar-sticky sticky-top mt-4 \">\n    <ul class=\"nav flex-column\">\n        <li *ngFor=\"let menu of menus\" class=\"nav-item ml-3 mr-3 mt-1 mb-1\">\n            <a class=\"btn btn-dark w-100 text-left\" href=\"{{menu.Url}}\">\n                {{menu.Text}}\n            </a>\n        </li>\n    </ul>\n</div>\n"

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
class DocumentFile {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/Proforma.ts":
/*!*****************************!*\
  !*** ./src/app/Proforma.ts ***!
  \*****************************/
/*! exports provided: Proforma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proforma", function() { return Proforma; });
class Proforma {
}


/***/ }),

/***/ "./src/app/ProformaDocumentFile.ts":
/*!*****************************************!*\
  !*** ./src/app/ProformaDocumentFile.ts ***!
  \*****************************************/
/*! exports provided: ProformaDocumentFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProformaDocumentFile", function() { return ProformaDocumentFile; });
class ProformaDocumentFile {
    constructor() {
        this.ProformaId = 0;
        this.DocumentFileId = 0;
    }
}


/***/ }),

/***/ "./src/app/ProformaProformaItem.ts":
/*!*****************************************!*\
  !*** ./src/app/ProformaProformaItem.ts ***!
  \*****************************************/
/*! exports provided: ProformaProformaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProformaProformaItem", function() { return ProformaProformaItem; });
class ProformaProformaItem {
    constructor() {
        this.Weight = 0;
        this.Price = 0;
        this.ProformaId = 0;
        this.ProformaItemId = 0;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Invoice';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");





















const appRoutes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "edit", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "insert", component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ],
        providers: [_share_service__WEBPACK_IMPORTED_MODULE_16__["ShareService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuardService = class AuthGuardService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    canActivate(route, state) {
        this.http
            .get(window.location.origin + "/api/check/")
            .toPromise()
            .then()
            .catch((error) => {
            if (error.url.includes("Account/Login")) {
                window.location.href = window.location.origin + "/Account/Login";
            }
        });
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Proforma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Proforma */ "./src/app/Proforma.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Customer/customers/src/app/Customer */ "../../Customer/customers/src/app/Customer.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProformaProformaItem */ "./src/app/ProformaProformaItem.ts");
/* harmony import */ var _DocumentFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DocumentFile */ "./src/app/DocumentFile.ts");
/* harmony import */ var _ProformaDocumentFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ProformaDocumentFile */ "./src/app/ProformaDocumentFile.ts");
/* harmony import */ var _ProformaItem_ProformaItem_src_app_ProformaItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../ProformaItem/ProformaItem/src/app/ProformaItem */ "../../ProformaItem/ProformaItem/src/app/ProformaItem.ts");














let EditComponent = class EditComponent {
    constructor(http, route, router, fb) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.proforma = new _Proforma__WEBPACK_IMPORTED_MODULE_4__["Proforma"]();
        this.showSuccess = false;
        this.showError = false;
        this.CustomerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.PalletsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.BoxesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.customers = new Array();
        this.ProformaItems = new Array();
        this.newProformaItem = new _ProformaItem_ProformaItem_src_app_ProformaItem__WEBPACK_IMPORTED_MODULE_12__["ProformaItem"]();
        this.proformaProformaItems = new Array();
        this.files = new Array();
        this.deletemodal = false;
        this.filteredProformas = new Array();
        this.searchObserve = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]();
        this.autocomplete = "list-group collapse hide";
        this.proforma.Customer = new _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.proforma.Kdv = 8;
        this.TotalUsd = 0;
        this.TotalLira = 0;
        this.ExchangeRate = 5.7;
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fatura: null
        });
    }
    ngOnInit() {
        var customerUrl = "/api/Customer/";
        var proformaItemUrl = "/api/ProformaItem/";
        var proformaUrl = "/api/Proforma/GetProforma/";
        this.id = this.route.snapshot.queryParamMap.get("id");
        this.http.get(customerUrl)
            .subscribe(p => {
            this.customers = p;
            this.customerFilteredOptions = this.CustomerControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(value => this._customerFilter(value)));
        });
        this.http.get(proformaItemUrl)
            .subscribe(p => {
            this.ProformaItems = p.Items;
            this.filteredProformas = p.Items;
            this.filteredOptions = this.PalletsControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(value => this._filter(value)));
        });
        this.http.get(proformaUrl + this.id)
            .subscribe(p => {
            this.proforma = p;
            for (var i = 0; i < p.ProformaProformaItems.length; i++) {
                this.proformaProformaItems.push(p.ProformaProformaItems[i]);
            }
            for (var i = 0; i < p.Files.length; i++) {
                this.files.push(p.Files[i]);
            }
            this.ExchangeRate = this.proforma.ExchangeRate;
            this.TotalUsd = this.proforma.TotalUsd;
            this.Tax = this.proforma.Tax;
            this.Calculate();
        });
        this.ProformaReportUrl = "/ProformaReport/print/?id=" + this.id;
    }
    Add(newProformaId) {
        var selectedProformaItem = this.ProformaItems.find(p => p.ProformaItemId == newProformaId);
        var newProformaProformaItem = new _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__["ProformaProformaItem"]();
        newProformaProformaItem.ProformaItemId = selectedProformaItem.ProformaItemId;
        newProformaProformaItem.ProformaItem = selectedProformaItem;
        newProformaProformaItem.ProformaId = this.proforma.ProformaId;
        newProformaProformaItem.Proforma = this.proforma;
        this.proformaProformaItems.push(newProformaProformaItem);
        this.autocomplete = "list-group collapse hide";
        this.searchText = "";
        this.Calculate();
    }
    _filter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.ProformaItems.filter(option => option.ProformaItemId.toString().includes(filterValue) ||
            option.Description.includes(filterValue));
    }
    _customerFilter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.customers.filter(option => option.CustomerName.toLocaleLowerCase().includes(filterValue));
    }
    Delete() {
        this.showSuccess = false;
        var invoiceUrl = "/api/Proforma/Delete/?proformaId=" + this.proforma.ProformaId;
        this.http
            .delete(invoiceUrl)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.router.navigateByUrl("/home");
        });
    }
    RemoveItem(selectedProforma) {
        const index = this.proformaProformaItems.indexOf(selectedProforma);
        if (index !== -1) {
            this.proformaProformaItems.splice(index, 1);
        }
        this.Calculate();
    }
    Calculate() {
        this.TotalUsd = 0;
        for (var i = 0; i < this.proformaProformaItems.length; i++) {
            var weight = this.proformaProformaItems[i].Weight;
            this.TotalUsd = weight * this.proformaProformaItems[i].Price + this.TotalUsd;
        }
        this.TotalUsd = this.TotalUsd - this.proforma.Discount;
        this.TotalUsd = Math.round(this.TotalUsd * 1000) / 1000;
        this.Tax = this.TotalUsd * this.proforma.Kdv / 100;
        this.Tax = Math.round(this.Tax * 1000) / 1000;
        this.TotalUsd = this.TotalUsd + this.Tax;
        this.TotalLira = this.TotalUsd * this.ExchangeRate;
        this.TotalLira = Math.round(this.TotalLira * 1000) / 1000;
    }
    Save(proforma) {
        this.Calculate();
        this.showSuccess = false;
        this.saving = true;
        var proformaURL = "/api/Proforma/Update";
        this.proforma.ProformaProformaItems = new Array();
        for (var i = 0; i < this.proformaProformaItems.length; i++) {
            var proformaProformaItem = new _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__["ProformaProformaItem"]();
            proformaProformaItem.ProformaId = this.proforma.ProformaId;
            proformaProformaItem.ProformaItemId = this.proformaProformaItems[i].ProformaItemId;
            proformaProformaItem.Weight = this.proformaProformaItems[i].Weight;
            proformaProformaItem.Price = this.proformaProformaItems[i].Price;
            proformaProformaItem.ProformaItem = this.proformaProformaItems[i].ProformaItem;
            proforma.ProformaProformaItems.push(proformaProformaItem);
        }
        this.proforma.Files = new Array();
        for (var i = 0; i < this.files.length; i++) {
            var file = new _ProformaDocumentFile__WEBPACK_IMPORTED_MODULE_11__["ProformaDocumentFile"]();
            file.ProformaId = this.proforma.ProformaId;
            file.DocumentFileId = this.files[i].DocumentFileId;
            file.File = new _DocumentFile__WEBPACK_IMPORTED_MODULE_10__["DocumentFile"]();
            file.File.FileName = this.files[i].File.FileName;
            this.proforma.Files.push(file);
        }
        proforma.ExchangeRate = this.ExchangeRate;
        proforma.TotalUsd = this.TotalUsd;
        proforma.Tax = this.Tax;
        this.http
            .post(proformaURL, proforma)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.saving = false;
        });
    }
    UpdateCustomer(option) {
        this.proforma.Customer = option;
    }
    OnUploadFile() {
        this.form.value.fatura.filename = "pro -" + this.id + "-" + this.form.value.fatura.filename;
        const formModel = this.form.value.fatura;
        this.uploading = true;
        var invoiceUrl = '/api/AwsStorage/UploadFile/';
        this.http
            .post(invoiceUrl, formModel)
            .toPromise()
            .then(() => {
            var newProformaFile = new _ProformaDocumentFile__WEBPACK_IMPORTED_MODULE_11__["ProformaDocumentFile"]();
            newProformaFile.ProformaId = Number(this.id);
            var newFile = new _DocumentFile__WEBPACK_IMPORTED_MODULE_10__["DocumentFile"]();
            newFile.FileName = this.form.value.fatura.filename;
            newProformaFile.File = newFile;
            this.files.push(newProformaFile);
            this.uploading = false;
        });
    }
    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('fatura').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result
                });
            };
        }
    }
    RemoveFileItem(selectedFile) {
        const index = this.files.indexOf(selectedFile);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
    }
    Cancel() {
        this.router.navigateByUrl("/home");
    }
    ConfirmDelete() {
        this.deletemodal = true;
    }
    CloseModal() {
        this.deletemodal = false;
    }
    searchChange() {
        if (this.searchText.length < 1) {
            this.autocomplete = "list-group collapse hide";
        }
        else {
            this.autocomplete = "list-group collapse show";
        }
    }
    AddNewItem() {
        var proformaProformaItem = new _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__["ProformaProformaItem"]();
        var proformaItem = new _ProformaItem_ProformaItem_src_app_ProformaItem__WEBPACK_IMPORTED_MODULE_12__["ProformaItem"]();
        proformaItem.Description = this.searchText;
        proformaItem.ProformaItemId = -1;
        proformaProformaItem.ProformaId = this.proforma.ProformaId;
        proformaProformaItem.ProformaItemId = -1;
        proformaProformaItem.ProformaItem = proformaItem;
        proformaProformaItem.Proforma = this.proforma;
        this.proformaProformaItems.push(proformaProformaItem);
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/edit/edit.component.sass")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: filteredProformas, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredProformas", function() { return filteredProformas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var filteredProformas;
let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        filteredProformas = [];
        searchText = searchText.toString().toLowerCase();
        return items.filter(it => {
            var res = JSON.stringify(it)
                .toLowerCase()
                .includes(searchText);
            if (res) {
                filteredProformas.push(it);
            }
            return res;
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "filter"
    })
], FilterPipe);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(shareService, http) {
        this.shareService = shareService;
        this.http = http;
        this.toggleButton = true;
    }
    ngOnInit() {
        this.shareService.changeMessage(this.toggleButton);
    }
    toggle() {
        this.toggleButton = !this.toggleButton;
        this.shareService.changeMessage(this.toggleButton);
    }
    signOut() {
        this.http
            .post("/Account/Logout", null)
            .toPromise()
            .then(res => {
            window.location.href = window.location.origin + "/Account/Login";
        }).catch(() => {
            window.location.href = window.location.origin + "/Account/Login";
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Using SCSS variables to store breakpoints */\n@media (max-width: 768px) {\n  .hide-on-small {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hide-on-large {\n    display: none;\n  }\n}\ntd p {\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvMUEyRUM5OTAyRUM5NjU3Qi9wcm9qZWN0cy9pbnZlbnRvcnkvaW52ZW50b3J5L1ZpZXdzL1Byb2Zvcm1hL1Byb2Zvcm1hL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUFFQTtFQUNHO0lBQ0ssYUFBQTtFQ0FOO0FBQ0Y7QURFQTtFQUNHO0lBQ0ssYUFBQTtFQ0FOO0FBQ0Y7QURFQTtFQUNJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVc2luZyBTQ1NTIHZhcmlhYmxlcyB0byBzdG9yZSBicmVha3BvaW50cyAqL1xuJGJyZWFrcG9pbnQtdGFibGV0OiA3NjhweFxuQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXRhYmxldCkgXG4gICAuaGlkZS1vbi1zbWFsbCBcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIFxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdGFibGV0KSBcbiAgIC5oaWRlLW9uLWxhcmdlIFxuICAgICAgICBkaXNwbGF5OiBub25lXG5cblxudGQgcFxuICAgIG1heC13aWR0aDozNTBweFxuXG4iLCIvKiBVc2luZyBTQ1NTIHZhcmlhYmxlcyB0byBzdG9yZSBicmVha3BvaW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRlLW9uLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhpZGUtb24tbGFyZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbnRkIHAge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter.pipe */ "./src/app/filter.pipe.ts");





let HomeComponent = class HomeComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.proformas = new Array();
        this.preventSingleClick = false;
        this.sortUp = new Array();
    }
    ngOnInit() {
        var proformaURL = "/api/Proforma/";
        this.http
            .get(proformaURL)
            .toPromise()
            .then(res => {
            this.proformas = res;
        });
    }
    doubleClick(event) {
        this.preventSingleClick = true;
        clearTimeout(this.timer);
        //Navigate on double click
        this.router.navigate(["/edit/"], {
            queryParams: { id: event.currentTarget.children[0].innerText }
        });
    }
    getColor(proforma) {
        var lira = proforma.TotalUsd * proforma.ExchangeRate;
        var isLira = false;
        var diffLira = proforma.Paid - lira;
        var diffUsd = proforma.Paid - proforma.TotalUsd;
        if (proforma.Currency === 'Lira')
            isLira = true;
        if (isLira === false) {
            if (diffUsd < -1)
                return "red";
            if (diffUsd > 1)
                return "green";
        }
        else {
            if (diffLira < -1)
                return "red";
            if (diffLira > 1)
                return "green";
        }
        return "";
    }
    getDifference(proforma) {
        var lira = proforma.TotalUsd * proforma.ExchangeRate;
        var diffLira = proforma.Paid - lira;
        var diffUsd = proforma.Paid - proforma.TotalUsd;
        if (proforma.Currency === 'Lira')
            return diffLira;
        else
            return diffUsd;
    }
    calculateTotalWeight() {
        this.totalPaid = 0;
        this.totalDebt = 0;
        var allProformas = _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredProformas"];
        if (!_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredProformas"])
            allProformas = this.proformas;
        for (var i = 0; i < allProformas.length; i++) {
            if (allProformas[i].Currency !== 'Lira') {
                var lira = allProformas[i].ExchangeRate * allProformas[i].Paid;
                this.totalPaid += lira;
            }
            else {
                this.totalPaid += Number(allProformas[i].Paid);
            }
            this.totalDebt += Number(allProformas[i].TotalUsd) * allProformas[i].ExchangeRate;
        }
    }
    Sort(sortHeader) {
        switch (sortHeader) {
            case 'ProformaId':
                {
                    this.sortUp[0] = !this.sortUp[0];
                    if (this.sortUp[0]) {
                        this.proformas.sort((a, b) => a.ProformaId - b.ProformaId);
                    }
                    else {
                        this.proformas.sort((a, b) => b.ProformaId - a.ProformaId);
                    }
                    break;
                }
            case 'CustomerName':
                {
                    this.sortUp[1] = !this.sortUp[1];
                    if (this.sortUp[1]) {
                        this.proformas.sort((a, b) => a.Customer.CustomerName.toLocaleLowerCase().localeCompare(b.Customer.CustomerName.toLocaleLowerCase()));
                    }
                    else {
                        this.proformas.sort((a, b) => b.Customer.CustomerName.toLocaleLowerCase().localeCompare(a.Customer.CustomerName.toLocaleLowerCase()));
                    }
                    break;
                }
            case 'ProformaDate':
                {
                    this.sortUp[2] = !this.sortUp[2];
                    if (this.sortUp[2]) {
                        this.proformas.sort((a, b) => a.ProformaDate.localeCompare(b.ProformaDate));
                    }
                    else {
                        this.proformas.sort((a, b) => b.ProformaDate.localeCompare(a.ProformaDate));
                    }
                    break;
                }
            case 'TotalUsd':
                {
                    this.sortUp[4] = !this.sortUp[4];
                    if (this.sortUp[4]) {
                        this.proformas.sort((a, b) => a.TotalUsd - b.TotalUsd);
                    }
                    else {
                        this.proformas.sort((a, b) => b.TotalUsd - a.TotalUsd);
                    }
                    break;
                }
            case 'Paid':
                {
                    this.sortUp[5] = !this.sortUp[5];
                    if (this.sortUp[5]) {
                        this.proformas.sort((a, b) => a.Paid - b.Paid);
                    }
                    else {
                        this.proformas.sort((a, b) => b.Paid - a.Paid);
                    }
                    break;
                }
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
    })
], HomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Proforma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Proforma */ "./src/app/Proforma.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Customer/customers/src/app/Customer */ "../../Customer/customers/src/app/Customer.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProformaProformaItem */ "./src/app/ProformaProformaItem.ts");
/* harmony import */ var _DocumentFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DocumentFile */ "./src/app/DocumentFile.ts");
/* harmony import */ var _ProformaDocumentFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ProformaDocumentFile */ "./src/app/ProformaDocumentFile.ts");
/* harmony import */ var _ProformaItem_ProformaItem_src_app_ProformaItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../ProformaItem/ProformaItem/src/app/ProformaItem */ "../../ProformaItem/ProformaItem/src/app/ProformaItem.ts");














let InsertComponent = class InsertComponent {
    constructor(http, route, router, fb) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.proforma = new _Proforma__WEBPACK_IMPORTED_MODULE_4__["Proforma"]();
        this.showSuccess = false;
        this.showError = false;
        this.CustomerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.PalletsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.BoxesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.customers = new Array();
        this.ProformaItems = new Array();
        this.newProformaItem = new _ProformaItem_ProformaItem_src_app_ProformaItem__WEBPACK_IMPORTED_MODULE_12__["ProformaItem"]();
        this.proformaProformaItems = new Array();
        this.files = new Array();
        this.filteredProformas = new Array();
        this.searchObserve = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]();
        this.autocomplete = "list-group collapse hide";
        this.proforma.Customer = new _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.proforma.Kdv = 8;
        this.TotalUsd = 0;
        this.TotalLira = 0;
        this.proforma.Discount = 0;
        this.proforma.Paid = 0;
        this.ExchangeRate = 5.7;
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fatura: null
        });
    }
    ngOnInit() {
        var customerUrl = "/api/Customer/";
        var proformaItemUrl = "/api/ProformaItem/";
        var proformaUrl = "/api/Proforma/GetProforma/";
        this.exchangeApi = "/api/exchange/";
        this.id = this.route.snapshot.queryParamMap.get("id");
        this.errorCustomer = false;
        this.http.get(customerUrl)
            .subscribe(p => {
            this.customers = p;
            this.customerFilteredOptions = this.CustomerControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(value => this._customerFilter(value)));
        });
        this.http.get(proformaItemUrl)
            .subscribe(p => {
            this.ProformaItems = p.Items;
            this.filteredProformas = p.Items;
            this.filteredOptions = this.PalletsControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(value => this._filter(value)));
        });
        this.http.get(this.exchangeApi)
            .subscribe(p => {
            this.ExchangeRate = p;
        });
        this.ProformaReportUrl = "/ProformaReport/print/?id=" + this.id;
    }
    Add(newProformaId) {
        var selectedProformaItem = this.ProformaItems.find(p => p.ProformaItemId == newProformaId);
        var newProformaProformaItem = new _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__["ProformaProformaItem"]();
        newProformaProformaItem.ProformaItemId = selectedProformaItem.ProformaItemId;
        newProformaProformaItem.ProformaItem = selectedProformaItem;
        newProformaProformaItem.ProformaId = this.proforma.ProformaId;
        newProformaProformaItem.Proforma = this.proforma;
        this.proformaProformaItems.push(newProformaProformaItem);
        this.autocomplete = "list-group collapse hide";
        this.searchText = "";
        this.Calculate();
    }
    _filter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.ProformaItems.filter(option => option.ProformaItemId.toString().includes(filterValue) ||
            option.Description.includes(filterValue));
    }
    _customerFilter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.customers.filter(option => option.CustomerName.toLocaleLowerCase().includes(filterValue));
    }
    Delete() {
        this.showSuccess = false;
        var invoiceUrl = "/api/Proforma/Delete/?proformaId=" + this.proforma.ProformaId;
        this.http
            .delete(invoiceUrl)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.router.navigateByUrl("/home");
        });
    }
    RemoveItem(selectedProforma) {
        const index = this.proformaProformaItems.indexOf(selectedProforma);
        if (index !== -1) {
            this.proformaProformaItems.splice(index, 1);
        }
        this.Calculate();
    }
    Calculate() {
        this.TotalUsd = 0;
        for (var i = 0; i < this.proformaProformaItems.length; i++) {
            var weight = this.proformaProformaItems[i].Weight;
            this.TotalUsd = weight * this.proformaProformaItems[i].Price + this.TotalUsd;
        }
        this.TotalUsd = this.TotalUsd - this.proforma.Discount;
        this.TotalUsd = Math.round(this.TotalUsd * 1000) / 1000;
        this.Tax = this.TotalUsd * this.proforma.Kdv / 100;
        this.Tax = Math.round(this.Tax * 1000) / 1000;
        this.TotalUsd = this.TotalUsd + this.Tax;
        this.TotalLira = this.TotalUsd * this.ExchangeRate;
        this.TotalLira = Math.round(this.TotalLira * 1000) / 1000;
    }
    Save(proforma) {
        this.Calculate();
        this.showSuccess = false;
        this.saving = true;
        var proformaURL = "/api/Proforma/Insert";
        this.proforma.ProformaProformaItems = new Array();
        if (!proforma.Customer || !proforma.Customer.CustomerName) {
            this.errorCustomer = true;
            return;
        }
        else {
            this.errorCustomer = false;
        }
        for (var i = 0; i < this.proformaProformaItems.length; i++) {
            var proformaProformaItem = new _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__["ProformaProformaItem"]();
            proformaProformaItem.ProformaId = this.proforma.ProformaId;
            proformaProformaItem.ProformaItemId = this.proformaProformaItems[i].ProformaItemId;
            proformaProformaItem.Weight = this.proformaProformaItems[i].Weight;
            proformaProformaItem.Price = this.proformaProformaItems[i].Price;
            proformaProformaItem.ProformaItem = this.proformaProformaItems[i].ProformaItem;
            proforma.ProformaProformaItems.push(proformaProformaItem);
        }
        this.proforma.Files = new Array();
        for (var i = 0; i < this.files.length; i++) {
            var file = new _ProformaDocumentFile__WEBPACK_IMPORTED_MODULE_11__["ProformaDocumentFile"]();
            file.ProformaId = this.proforma.ProformaId;
            file.DocumentFileId = this.files[i].DocumentFileId;
            file.File = new _DocumentFile__WEBPACK_IMPORTED_MODULE_10__["DocumentFile"]();
            file.File.FileName = this.files[i].File.FileName;
            this.proforma.Files.push(file);
        }
        proforma.ExchangeRate = this.ExchangeRate;
        proforma.TotalUsd = this.TotalUsd;
        proforma.Tax = this.Tax;
        this.http
            .post(proformaURL, proforma)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.saving = false;
        });
    }
    UpdateCustomer(option) {
        this.proforma.Customer = option;
    }
    OnUploadFile() {
        this.form.value.fatura.filename = "inv-" + this.id + "-" + this.form.value.fatura.filename;
        const formModel = this.form.value.fatura;
        this.uploading = true;
        var invoiceUrl = '/api/AwsStorage/UploadFile/';
        this.http
            .post(invoiceUrl, formModel)
            .toPromise()
            .then(() => {
            var newProformaFile = new _ProformaDocumentFile__WEBPACK_IMPORTED_MODULE_11__["ProformaDocumentFile"]();
            newProformaFile.ProformaId = Number(this.id);
            var newFile = new _DocumentFile__WEBPACK_IMPORTED_MODULE_10__["DocumentFile"]();
            newFile.FileName = this.form.value.fatura.filename;
            newProformaFile.File = newFile;
            this.files.push(newProformaFile);
            this.uploading = false;
        });
    }
    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('fatura').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result
                });
            };
        }
    }
    RemoveFileItem(selectedFile) {
        const index = this.files.indexOf(selectedFile);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
    }
    Cancel() {
        this.router.navigateByUrl("/home");
    }
    searchChange() {
        if (this.searchText.length < 1) {
            this.autocomplete = "list-group collapse hide";
        }
        else {
            this.autocomplete = "list-group collapse show";
        }
    }
    AddNewItem() {
        var proformaProformaItem = new _ProformaProformaItem__WEBPACK_IMPORTED_MODULE_9__["ProformaProformaItem"]();
        var proformaItem = new _ProformaItem_ProformaItem_src_app_ProformaItem__WEBPACK_IMPORTED_MODULE_12__["ProformaItem"]();
        proformaItem.Description = this.searchText;
        proformaItem.ProformaItemId = -1;
        proformaProformaItem.ProformaId = this.proforma.ProformaId;
        proformaProformaItem.ProformaItemId = -1;
        proformaProformaItem.ProformaItem = proformaItem;
        proformaProformaItem.Proforma = this.proforma;
        this.proformaProformaItems.push(proformaProformaItem);
    }
};
InsertComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
InsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insert',
        template: __webpack_require__(/*! raw-loader!./insert.component.html */ "./node_modules/raw-loader/index.js!./src/app/insert/insert.component.html"),
        styles: [__webpack_require__(/*! ./insert.component.sass */ "./src/app/insert/insert.component.sass")]
    })
], InsertComponent);



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
class Menu {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/app/nav/Menu.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let NavComponent = class NavComponent {
    constructor(shareService, http) {
        this.shareService = shareService;
        this.http = http;
        this.menus = Array();
        this.toggleMenu = false;
    }
    ngOnInit() {
        this.http
            .get("/api/nav/")
            .toPromise()
            .then(res => {
            for (var i = 0; i < res.length; i++) {
                var menu = new _Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]();
                menu.Text = res[i];
                menu.Url = "/" + res[i] + "/Index/index.html";
                this.menus.push(menu);
            }
        })
            .catch((error) => {
            if (error.status == 200) {
                window.location.href = window.location.origin + "/Account/login";
            }
        });
        this.shareService.currentMessage.subscribe(message => this.toggleMenu = message);
    }
};
NavComponent.ctorParameters = () => [
    { type: _share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.sass */ "./src/app/nav/nav.component.sass")]
    })
], NavComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShareService = class ShareService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
};
ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShareService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/1A2EC9902EC9657B/projects/inventory/inventory/Views/Proforma/Proforma/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map