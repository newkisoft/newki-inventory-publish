(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../Customer/customers/src/app/Customer.ts":
/*!*******************************************************************************************************!*\
  !*** /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/Customer/customers/src/app/Customer.ts ***!
  \*******************************************************************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
}


/***/ }),

/***/ "../../Pallet/pallet/src/app/pallet.ts":
/*!************************************************************************************************!*\
  !*** /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/Pallet/pallet/src/app/pallet.ts ***!
  \************************************************************************************************/
/*! exports provided: Pallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pallet", function() { return Pallet; });
class Pallet {
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

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button class=\"btn bg-secondary  btn-block col-md-3\" (click)=\"Cancel()\">\n      back\n    </button>\n  </div>\n  <div class=\"table ml-3\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control ml-1 \" name=\"StateInvoiceNumber\" placeholder=\"State Invoice Number\"\n          matInput [(ngModel)]=\"invoice.StateInvoiceNumber\" />\n      </div>\n      <div class=\"col\">\n        <div class=\"d-group mb-3\">\n          <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\"\n            [(ngModel)]=\"customerSearchText\" (keyup)=\"customerSearchChange()\" (click)=\"customerSearchChange()\"\n            aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Select a customer\">\n          <input type=\"hidden\" name=\"invoice.Customer.CustomerId\" id=\"invoice.Customer.CustomerId\"\n            [ngModel]=\"invoice.Customer.CustomerId\" />\n        </div>\n        <ul [ngClass]=\"customerAutocomplete\">\n          <li *ngFor=\"let customer of customers  | filter: customerSearchText\" class=\"list-group-item\"\n            (click)=\"AddCustomer(customer.CustomerId)\" href=\"#\">{{ customer.CustomerName }} </li>\n        </ul>\n      </div>\n      <input class=\"col form-control\" type=\"date\" [ngModel]=\"invoice.InvoiceDate| date:'yyyy-MM-dd'\"\n        (ngModelChange)=\"invoice.InvoiceDate = $event\" />\n\n\n\n    </div>\n    <div class=\"row\">\n    </div>\n  </div>\n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"d-none d-sm-block\" scope=\"col\">#</th>\n        <th scope=\"col\">Pallet Number</th>\n        <th class=\"d-none d-sm-block\" scope=\"col\">Barcode</th>\n        <th scope=\"col\">Pallet Name</th>\n        <th scope=\"col\">Weight</th>\n        <th class=\"d-none d-sm-block\" scope=\"col\">Remaining Weight</th>\n        <th scope=\"col\">Sold weight</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Delivered</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let invoicePallet of invoicePallets \">\n        <td class=\"d-none d-sm-block\"><a href=\"/Pallet/Index/#/edit?id={{ invoicePallet.Pallet.PalletId }}\">{{ invoicePallet.Pallet.PalletId }}</a></td>\n        <td>{{ invoicePallet.Pallet.PalletNumber }}</td>\n        <td class=\"d-none d-sm-block\">{{ invoicePallet.Pallet.Barcode }}</td>\n        <td>{{ invoicePallet.Pallet.YarnType }} {{invoicePallet.Pallet.Denier}} {{invoicePallet.Pallet.Filament}}\n          {{invoicePallet.Pallet.Intermingle}} {{invoicePallet.Pallet.ColorCode}} {{invoicePallet.Pallet.BobbinSize}}\n        </td>\n        <td>{{ invoicePallet.Pallet.Weight }}</td>\n        <td class=\"d-none d-sm-block\">{{ invoicePallet.Pallet.RemainWeight }}</td>\n        <td><input class=\"form-control\" type=\"number\" step=\"0.0001\" [(ngModel)]=\"invoicePallet.Weight\" /></td>\n        <td><input class=\"form-control\" type=\"number\" step=\"0.0001\" [(ngModel)]=\"invoicePallet.Pallet.Price\" /></td>\n        <td><input class=\"form-control\" type=\"checkbox\"  [(ngModel)]=\"invoicePallet.Pallet.IsDelivered\" ngDefaultControl /></td>\n        <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveItem(invoicePallet)\" type=\"button\" value=\"X\" />\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"10\">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\"\n              [(ngModel)]=\"palletSearchText\" (keyup)=\"palletSearchChange()\" (click)=\"palletSearchChange()\"\n              aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Add new pallet\">\n          </div>\n          <ul [ngClass]=\"palletAutocomplete\">\n            <li *ngFor=\"let palletOption of pallets  | filter: palletSearchText\" class=\"list-group-item\"\n              (click)=\"AddPallet(palletOption.PalletId)\" href=\"#\">{{ palletOption.Barcode }} {{ palletOption.YarnType }}\n              {{palletOption.Denier}} {{palletOption.Filament}}\n              {{palletOption.Intermingle}} {{palletOption.ColorCode}} {{palletOption.BobbinSize}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"d-none d-sm-block\" scope=\"col\">#</th>\n        <th scope=\"col\">Barcode</th>\n        <th scope=\"col\">Box Name</th>\n        <th scope=\"col\">Weight</th>\n        <th class=\"d-none d-sm-block\" scope=\"col\">Remaining Weight</th>\n        <th scope=\"col\">Sold weight</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let invoiceBox of invoiceBoxes \">\n        <td class=\"d-none d-sm-block\">{{ invoiceBox.Box.BoxId }}</td>\n        <td>{{ invoiceBox.Box.Barcode }}</td>\n        <td>{{ invoiceBox.Box.YarnType }} {{invoiceBox.Box.Denier}} {{invoiceBox.Box.Filament}}\n          {{invoiceBox.Box.Intermingle}} {{invoiceBox.Box.ColorCode}} {{invoiceBox.Box.BobbinSize}} </td>\n        <td>{{ invoiceBox.Box.Weight }}</td>\n        <td class=\"d-none d-sm-block\">{{ invoiceBox.Box.RemainWeight }}</td>\n        <td><input class=\"form-control\" type=\"number\" step=\"0.0001\" [(ngModel)]=\"invoiceBox.Weight\" /></td>\n        <td><input class=\"form-control\" type=\"number\" step=\"0.0001\" [(ngModel)]=\"invoiceBox.Box.Price\" /></td>\n        <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveBoxItem(invoiceBox)\" type=\"button\" value=\"X\" />\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"9\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\"\n                [(ngModel)]=\"boxSearchText\" (keyup)=\"searchChange()\" (click)=\"searchChange()\" placeholder=\"Add box\"\n                aria-describedby=\"inputGroup-sizing-default\">\n            </div>\n          </div>\n          <ul [ngClass]=\"boxautocomplete\">\n            <li *ngFor=\"let boxOption of boxes  | filter: boxSearchText\" class=\"list-group-item\"\n              (click)=\"AddBox(boxOption.BoxId)\" href=\"#\">{{ boxOption.Barcode }} {{ boxOption.YarnType }}\n              {{boxOption.Denier}} {{boxOption.Filament}}\n              {{boxOption.Intermingle}} {{boxOption.ColorCode}} {{boxOption.BobbinSize}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"container bg-light\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"OnUploadFile()\">\n      <div class=\"form-group\">\n        <label for=\"fatura\">Fatura</label>\n        <input type=\"file\" id=\"fatura\" (change)=\"onFileChange($event)\" #fileInput>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Upload <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n          aria-hidden=\"true\" *ngIf=\"uploading\"></span></button>\n    </form>\n    <table class=\"table table-borderless\">\n      <thead>\n        <tr>\n          <th>File name</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files \">\n          <td><a href=\"/api/AwsStorage/DownloadFile/{{file.File.FileName}}\" target=\"blank\"\n              download>{{file.File.FileName}}</a></td>\n          <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveFileItem(file)\" type=\"button\" value=\"X\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"official-invoice\" [(ngModel)]=\"invoice.HasOfficialInvoice\">\n      <label class=\"form-check-label\" for=\"official-invoice\">Official invoice uploaded</label>\n    </div>\n  </div>\n  <div class=\"container mt-2 mb-2\">\n    <label>KDV %:</label>\n    <input id=\"tax-rate\" type=\"number\" class=\"ml-1 form-control\" name=\"invoice.KDV\" placeholder=\"KDV\"\n      [(ngModel)]=\"invoice.Kdv\" />\n    <label>Discount:</label>\n    <input type=\"number\" class=\"ml-1 form-control\" name=\"invoice.Discount\" placeholder=\"Discount\"\n      [(ngModel)]=\"invoice.Discount\" />\n    <label>Exchange Rate:</label>\n    <input id=\"exchange-rate\" type=\"number\" class=\"ml-1 \" class=\"ml-1 form-control\" placeholder=\"Exchange Rate\"\n      [(ngModel)]=\"ExchangeRate\" />\n    <div class=\"table\">\n      <div class=\"container mt-2 mb-2\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>KDV:</label><label class=\"ml-3\">{{Tax | number:'1.2-3'}}</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Total USD:</label><label class=\"ml-3\">{{TotalUsd | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Total Lira:</label><label class=\"ml-3\">{{TotalLira | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Total Sold Weight:</label><label class=\"ml-3\">{{TotalSoldWeight | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Number of boxes:</label><label class=\"ml-3\">{{NumberOfBoxes | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Number of pallets:</label><label class=\"ml-3\">{{NumberOfPallets | number:'1.2-3'}}</label>\n          </div>\n        </div>\n      </div>\n    <div class=\"container bg-light\">\n      <h3>Payments</h3>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Amount</th>\n            <th>Exchange Rate</th>\n            <th>Payment Date</th>\n          </tr>\n        </thead>\n\n        <tbody>\n\n          <tr *ngFor=\"let payment of invoice.Payments\">\n            <td><input class=\"form-control\" type=\"number\" [ngModel]=\"payment.Amount\" /></td>\n            <td><input class=\"form-control\" type=\"number\" [ngModel]=\"payment.ExchangeRate\" /></td>\n            <td><input class=\"form-control\" type=\"date\" [ngModel]=\"payment.PaymentDate | date:'yyyy-MM-dd'\" /></td>\n            <td><input type=\"button\" class=\"btn btn-danger\" (click)=\"RemovePayment(payment)\" value=\"-\" /></td>\n          </tr>\n          <tr>\n            <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"newInvoicePayment.Amount\" /></td>\n            <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"newInvoicePayment.ExchangeRate\" /></td>\n            <td><input class=\"form-control\" type=\"date\" [(ngModel)]=\"newInvoicePayment.PaymentDate\" /></td>\n            <td><input type=\"button\" class=\"btn btn-success\" (click)=\"AddPayment()\" value=\"+\" /></td>\n          </tr>\n        </tbody>\n      </table>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total:</label>\n          <p><strong>$</strong>{{invoice.Paid}} </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"comment\">Comment:</label>\n      <textarea class=\"form-control\" rows=\"5\" name=\"invoice.Comment\" id=\"invoice.Comment\"\n        [(ngModel)]=\"invoice.Comment\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Driver name:</label>\n      <input type=\"text\" class=\"ml-1 form-control\" name=\"invoice.DriverName\" placeholder=\"Driver name\"\n        [(ngModel)]=\"invoice.DriverName\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Truck registration number:</label>\n      <input type=\"text\" class=\"ml-1 form-control\" name=\"invoice.DriverRegistrationNumber\"\n        placeholder=\"Truck registration number\" [(ngModel)]=\"invoice.DriverRegistrationNumber\" />\n    </div>\n  </div>\n</div>\n<p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n<div class=\"row\">\n  <div class=\"col-md-2 mb-3\">\n    <button class=\"btn btn-secondary btn-lg btn-block\" type=\"button\" (click)=\"Cancel()\">\n      Cancel\n    </button>\n  </div>\n  <div class=\"col-md-2 mb-3\">\n    <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"ConfirmDelete()\">\n      Delete\n    </button>\n  </div>\n  <div class=\"col-md-2 mb-3\">\n    <a href=\"{{InvoiceReportUrl}}\" class=\"btn btn-primary btn-lg btn-block\" download>\n      Download PDF\n    </a>\n  </div>\n  <div class=\"col-md-2 mb-3\">\n    <a href=\"{{ExitReportUrl}}\" class=\"btn btn-primary btn-lg btn-block\" download>\n      Download Exit Reports\n    </a>\n  </div>\n  <div class=\"col-md-2 mb-3\">\n    <button class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"SendEmail()\">\n      Send Email\n    </button>\n  </div>\n  <div class=\"col-md-2 mb-3\">\n    <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Save\" (click)=\"Save(invoice)\"\n      [attr.disabled]=\"saving ? '' : null\">\n      Save\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\"></span>\n    </button>\n  </div>\n</div>\n</div>\n\n<!-- Modal -->\n<div *ngIf=\"deletemodal\" class=\"modal-backdrop fade show\"></div>\n<div *ngIf=\"deletemodal\" id=\"exampleModalCenter\" class=\"modal fade show\" tabindex=\"-1\" role=\"dialog\"\n  style=\"display: block; padding-right: 12px;\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Delete</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"CloseModal()\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"CloseModal()\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"Delete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"col\">\n  <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" class=\"form-control col-md-3 ml-2 mb-3\"\n    (keydown)=\"calculateTotalWeight()\" />\n  <a class=\"btn btn-success btn-md btn-block col-md-1 ml-2 mb-3\" [routerLink]=\"['../insert']\">Add</a>\n  <div *ngIf=\"isLoading\" class=\"progress\">\n    <div [ngClass]=\"progress\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">{{progressPercent}}%</div>\n  </div>\n\n  <table class=\"table table-striped table-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"hide-on-small\" (click)=\"Sort('InvoiceId')\" scope=\"col\">#</th>\n        <th class=\"hide-on-large\" scope=\"col\">Details</th>\n        <th class=\"hide-on-small\" (click)=\"Sort('CustomerName')\" scope=\"col\">Customer Name</th>\n        <th class=\"hide-on-small\" scope=\"col\">Comment</th>\n        <th class=\"hide-on-small\" (click)=\"Sort('InvoiceDate')\" scope=\"col\">Invoice Date</th>\n        <th class=\"hide-on-small\" (click)=\"Sort('TotalUsd')\" scope=\"col\">Total USD</th>\n        <th class=\"hide-on-small\" (click)=\"Sort('Paid')\" scope=\"col\">Total Payment</th>\n        <th>Official Invoice</th>\n        <th scope=\"col\">Difference</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let invoice of invoices | filter: searchText\" (dblclick)=\"doubleClick($event)\">\n        <td class=\"hide-on-small\" class=\"d-none d-sm-block\" scope=\"col\">\n          <a routerLink=\"/edit\" [queryParams]=\"{id: invoice.InvoiceId}\" >\n            {{invoice.InvoiceId}}</a>\n        </td>\n        <td class=\"hide-on-large\" scope=\"col\">\n          <p>{{ invoice.Customer.CustomerName }}, {{invoice.Comment | slice:0:20}}, {{ invoice.InvoiceDate | date }}, {{\n            invoice.TotalUsd | number:'1.2-3'}}, {{ invoice.Paid | number:'1.2-3'}} </p>\n        </td>\n        <td class=\"hide-on-small\" scope=\"col\">{{ invoice.Customer.CustomerName }}</td>\n        <td class=\"hide-on-small\" scope=\"col\">{{invoice.Comment | slice:0:20}}</td>\n        <td class=\"hide-on-small\" scope=\"col\">{{ invoice.InvoiceDate | date }}</td>\n        <td class=\"hide-on-small\" scope=\"col\">{{ invoice.TotalUsd | number:'1.2-3'}}</td>\n        <td class=\"hide-on-small\" [style.color]=\"getColor(invoice)\" scope=\"col\">{{ invoice.Paid | number:'1.2-3'}}</td>\n        <td>\n          <svg *ngIf=\"!invoice.HasOfficialInvoice\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-flag-fill\"\n            fill=\"red\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\"\n              d=\"M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001\" />\n          </svg>\n          <svg *ngIf=\"invoice.HasOfficialInvoice\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\"\n            class=\"bi bi-check-circle-fill\" fill=\"green\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\"\n              d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n          </svg>\n        </td>\n        <td [style.color]=\"getColor(invoice)\" scope=\"col\">{{ getDifference(invoice) | number:'1.2-3'}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <hr />\n  <p> <b>Total paid:</b>{{ totalPaid | number:'1.2-3' }} <b>Total debt:</b> {{totalDebt | number:'1.2-3'}} <b>Total\n      diff:</b> {{totalPaid - totalDebt | number:'1.2-3'}} </p>\n  <div class=\"col-md-2 mb-3\">\n    <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Sync\" (click)=\"Sync()\">\n      Sync\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"syncing\"></span>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/insert/insert.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/insert/insert.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button class=\"btn bg-secondary  btn-block col-md-3\" [routerLink]=\"['../home']\">\n      back\n    </button>\n  </div>\n  <div class=\"table ml-3\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control ml-1 \" name=\"StateInvoiceNumber\" placeholder=\"State Invoice Number\"\n          matInput [(ngModel)]=\"invoice.StateInvoiceNumber\" ngDefaultControl />\n      </div>\n\n      <div class=\"col\">\n        <div class=\"d-group mb-3\">\n          <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\"\n            [(ngModel)]=\"customerSearchText\" (keyup)=\"customerSearchChange()\" (click)=\"customerSearchChange()\"\n            aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Select a customer\">\n        </div>\n        <ul [ngClass]=\"customerAutocomplete\">\n          <li *ngFor=\"let customer of customers  | filter: customerSearchText\" class=\"list-group-item\"\n            (click)=\"AddCustomer(customer.CustomerId)\" href=\"#\">{{ customer.CustomerName }} </li>\n        </ul>\n      </div>\n      <p *ngIf=\"errorCustomer\" class=\"alert alert-danger\" role=\"alert\">*</p>\n      <input class=\"col form-control\" type=\"date\" [ngModel]=\"invoice.InvoiceDate| date:'yyyy-MM-dd'\"\n        (ngModelChange)=\"invoice.InvoiceDate = $event\" />\n    </div>\n  </div>\n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"d-none d-sm-block\" scope=\"col\">#</th>\n        <th scope=\"col\">Pallet Number</th>\n        <th class=\"d-none d-sm-block\" scope=\"col\">Barcode</th>\n        <th scope=\"col\">Pallet Name</th>\n        <th scope=\"col\">Weight</th>\n        <th class=\"d-none d-sm-block\" scope=\"col\">Remaining Weight</th>\n        <th scope=\"col\">Sold weight</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let invoicePallet of invoicePallets \">\n        <td class=\"d-none d-sm-block\"><a href=\"/Pallet/Index/#/edit?id={{ invoicePallet.Pallet.PalletId }}\">{{ invoicePallet.Pallet.PalletId }}</a></td>\n        <td>{{ invoicePallet.Pallet.PalletNumber }}</td>\n        <td class=\"d-none d-sm-block\">{{ invoicePallet.Pallet.Barcode }}</td>\n        <td>{{ invoicePallet.Pallet.YarnType }} {{invoicePallet.Pallet.Denier}} {{invoicePallet.Pallet.Filament}}\n          {{invoicePallet.Pallet.Intermingle}} {{invoicePallet.Pallet.ColorCode}} {{invoicePallet.Pallet.BobbinSize}}\n        </td>\n        <td>{{ invoicePallet.Pallet.Weight }}</td>\n        <td class=\"d-none d-sm-block\">{{ invoicePallet.Pallet.RemainWeight }}</td>\n        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"invoicePallet.Weight\" ngDefaultControl /></td>\n        <td><input class=\"form-control\" type=\"number\" step=\"0.0001\" [(ngModel)]=\"invoicePallet.Pallet.Price\"\n            ngDefaultControl /></td>\n        <td><input class=\"btn btn-danger\" (click)=\"RemoveItem(invoicePallet)\" type=\"button\" value=\"X\" /></td>\n      </tr>   \n      <tr>\n        <td colspan=\"9\">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\" [(ngModel)]=\"palletSearchText\"\n              (keyup)=\"palletSearchChange()\" (click)=\"palletSearchChange()\" aria-describedby=\"inputGroup-sizing-default\"\n              placeholder=\"Add new pallet\">\n          </div>\n          <ul [ngClass]=\"palletAutocomplete\">\n            <li *ngFor=\"let palletOption of pallets  | filter: palletSearchText\" class=\"list-group-item\"\n              (click)=\"AddPallet(palletOption.PalletId)\" href=\"#\">{{ palletOption.Barcode }} {{ palletOption.YarnType }}\n              {{palletOption.Denier}} {{palletOption.Filament}}\n              {{palletOption.Intermingle}} {{palletOption.ColorCode}} {{palletOption.BobbinSize}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped able-sm mt-2\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"d-none d-sm-block\" scope=\"col\">#</th>\n        <th scope=\"col\">Barcode</th>\n        <th scope=\"col\">Box Name</th>\n        <th scope=\"col\">Weight</th>\n        <th class=\"d-none d-sm-block\" scope=\"col\">Remaining Weight</th>\n        <th scope=\"col\">Sold weight</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let invoiceBox of invoiceBoxes \">\n        <td class=\"d-none d-sm-block\">{{ invoiceBox.Box.BoxId }}</td>\n        <td>{{ invoiceBox.Box.Barcode }}</td>\n        <td>{{ invoiceBox.Box.YarnType }} {{invoiceBox.Box.Denier}} {{invoiceBox.Box.Filament}}\n          {{invoiceBox.Box.Intermingle}} {{invoiceBox.Box.ColorCode}} {{invoiceBox.Box.BobbinSize}} </td>\n        <td>{{ invoiceBox.Box.Weight }}</td>\n        <td class=\"d-none d-sm-block\">{{ invoiceBox.Box.RemainWeight }}</td>\n        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"invoiceBox.Weight\" ngDefaultControl /></td>\n        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"invoiceBox.Box.Price\" ngDefaultControl /></td>\n        <td><input class=\"btn btn-danger\" (click)=\"RemoveBoxItem(invoiceBox)\" type=\"button\" value=\"X\" /></td>\n      </tr>\n      <tr>\n        <td colspan=\"9\">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control col-lg\" aria-label=\"Sizing example input\" [(ngModel)]=\"boxSearchText\"\n              (keyup)=\"searchChange()\" (click)=\"searchChange()\" aria-describedby=\"inputGroup-sizing-default\"\n              placeholder=\"Add new box\">\n          </div>\n          <ul [ngClass]=\"boxautocomplete\">\n            <li *ngFor=\"let boxOption of boxes  | filter: boxSearchText\" class=\"list-group-item\"\n              (click)=\"AddBox(boxOption.BoxId)\" href=\"#\">{{ boxOption.Barcode }} {{ boxOption.YarnType }}\n              {{boxOption.Denier}} {{boxOption.Filament}}\n              {{boxOption.Intermingle}} {{boxOption.ColorCode}} {{boxOption.BobbinSize}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"container bg-light\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"OnUploadFile()\">\n      <div class=\"form-group\">\n        <label for=\"fatura\">Fatura</label>\n        <input type=\"file\" id=\"fatura\" (change)=\"onFileChange($event)\" #fileInput>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Upload <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n          aria-hidden=\"true\" *ngIf=\"uploading\"></span></button>\n    </form>\n    <table class=\"table table-borderless\">\n      <thead>\n        <tr>\n          <th>File name</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files \">\n          <td><a href=\"/api/AwsStorage/DownloadFile/{{file.File.FileName}}\" target=\"blank\"\n              download>{{file.File.FileName}}</a></td>\n          <td><input class=\"btn btn-danger float-xl-right\" (click)=\"RemoveFileItem(file)\" type=\"button\" value=\"X\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"official-invoice\" [(ngModel)]=\"invoice.HasOfficialInvoice\">\n      <label class=\"form-check-label\" for=\"official-invoice\">Official invoice uploaded</label>\n    </div>\n  </div>\n  <div class=\"container mt-2 mb-2\">\n    <label>KDV %:</label>\n    <input id=\"tax-rate\" type=\"number\" class=\"ml-1 form-control\" name=\"invoice.KDV\" placeholder=\"KDV\"\n      [(ngModel)]=\"invoice.Kdv\" />\n    <label>Discount:</label>\n    <input type=\"number\" class=\"ml-1 form-control\" name=\"invoice.Discount\" placeholder=\"Discount\"\n      [(ngModel)]=\"invoice.Discount\" />\n    <label>Exchange Rate:</label>\n    <input id=\"exchange-rate\" type=\"number\" class=\"ml-1 \" class=\"ml-1 form-control\" placeholder=\"Exchange Rate\"\n      [(ngModel)]=\"ExchangeRate\" />\n    <div class=\"table\">\n      <div class=\"container mt-2 mb-2\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>KDV:</label><label class=\"ml-3\">{{Tax | number:'1.2-3'}}</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Total USD:</label><label class=\"ml-3\">{{TotalUsd | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Total Lira:</label><label class=\"ml-3\">{{TotalLira | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Total Sold Weight:</label><label class=\"ml-3\">{{TotalSoldWeight | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Number of boxes:</label><label class=\"ml-3\">{{NumberOfBoxes | number:'1.2-3'}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Number of pallets:</label><label class=\"ml-3\">{{NumberOfPallets | number:'1.2-3'}}</label>\n          </div>\n        </div>\n      </div>\n    <div class=\"container bg-light\">\n      <h3>Payments</h3>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Amount</th>\n            <th>Exchange Rate</th>\n            <th>Payment Date</th>\n          </tr>\n        </thead>\n\n        <tbody>\n\n          <tr *ngFor=\"let payment of invoice.Payments\">\n            <td><input class=\"form-control\" type=\"number\" [ngModel]=\"payment.Amount\" /></td>\n            <td><input class=\"form-control\" type=\"number\" [ngModel]=\"payment.ExchangeRate\" /></td>\n            <td><input class=\"form-control\" type=\"date\" [ngModel]=\"payment.PaymentDate | date:'yyyy-MM-dd'\" /></td>\n            <td><input type=\"button\" class=\"btn btn-danger\" (click)=\"RemovePayment(payment)\" value=\"-\" /></td>\n          </tr>\n          <tr>\n            <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"newInvoicePayment.Amount\" /></td>\n            <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"newInvoicePayment.ExchangeRate\" /></td>\n            <td><input class=\"form-control\" type=\"date\" [(ngModel)]=\"newInvoicePayment.PaymentDate\" /></td>\n            <td><input type=\"button\" class=\"btn btn-success\" (click)=\"AddPayment()\" value=\"+\" /></td>\n          </tr>\n        </tbody>\n      </table>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col\">\n          <label>Total:</label>\n          <p><strong>$</strong>{{invoice.Paid}} </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"comment\">Comment:</label>\n      <textarea class=\"form-control\" rows=\"5\" name=\"invoice.Comment\" id=\"invoice.Comment\"\n        [(ngModel)]=\"invoice.Comment\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Driver name:</label>\n      <input type=\"text\" class=\"ml-1 form-control\" name=\"invoice.DriverName\" placeholder=\"Driver name\"\n        [(ngModel)]=\"invoice.DriverName\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Truck registration number:</label>\n      <input type=\"text\" class=\"ml-1 form-control\" name=\"invoice.DriverRegistrationNumber\"\n        placeholder=\"Truck registration number\" [(ngModel)]=\"invoice.DriverRegistrationNumber\" />\n    </div>\n  </div>\n  <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n  <div class=\"row\">\n    <div class=\"col-md-3 mb-3\">\n      <button class=\"btn btn-secondary btn-lg btn-block\" type=\"button\" (click)=\"Cancel()\">\n        Cancel\n      </button>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Save\" (click)=\"Save(invoice)\"\n        [attr.disabled]=\"saving ? '' : null\">\n        Save\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\"></span>\n      </button>\n    </div>\n  </div>\n  <p *ngIf=\"errorCustomer\" class=\"alert alert-danger\" role=\"alert\">Fill up the customer field before saving</p>\n</div>"

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

/***/ "./src/app/Invoice.ts":
/*!****************************!*\
  !*** ./src/app/Invoice.ts ***!
  \****************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
class Invoice {
}


/***/ }),

/***/ "./src/app/InvoiceBox.ts":
/*!*******************************!*\
  !*** ./src/app/InvoiceBox.ts ***!
  \*******************************/
/*! exports provided: InvoiceBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBox", function() { return InvoiceBox; });
class InvoiceBox {
    constructor() {
        this.Weight = 0;
        this.InvoiceId = 0;
        this.BoxId = 0;
    }
}


/***/ }),

/***/ "./src/app/InvoiceDocumentFile.ts":
/*!****************************************!*\
  !*** ./src/app/InvoiceDocumentFile.ts ***!
  \****************************************/
/*! exports provided: InvoiceDocumentFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDocumentFile", function() { return InvoiceDocumentFile; });
class InvoiceDocumentFile {
    constructor() {
        this.InvoiceId = 0;
        this.DocumentFileId = 0;
    }
}


/***/ }),

/***/ "./src/app/InvoicePallet.ts":
/*!**********************************!*\
  !*** ./src/app/InvoicePallet.ts ***!
  \**********************************/
/*! exports provided: InvoicePallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePallet", function() { return InvoicePallet; });
class InvoicePallet {
    constructor() {
        this.Weight = 0;
        this.InvoiceId = 0;
        this.PalletId = 0;
    }
}


/***/ }),

/***/ "./src/app/InvoicePayment.ts":
/*!***********************************!*\
  !*** ./src/app/InvoicePayment.ts ***!
  \***********************************/
/*! exports provided: InvoicePayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePayment", function() { return InvoicePayment; });
class InvoicePayment {
    constructor() {
        this.InvoiceId = 0;
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");





















const appRoutes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "edit", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: "insert", component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_7__["InsertComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
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
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _insert_insert_component__WEBPACK_IMPORTED_MODULE_7__["InsertComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [_share_service__WEBPACK_IMPORTED_MODULE_18__["ShareService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"]]
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
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Invoice */ "./src/app/Invoice.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Customer/customers/src/app/Customer */ "../../Customer/customers/src/app/Customer.ts");
/* harmony import */ var _Pallet_pallet_src_app_pallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../Pallet/pallet/src/app/pallet */ "../../Pallet/pallet/src/app/pallet.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _InvoicePallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../InvoicePallet */ "./src/app/InvoicePallet.ts");
/* harmony import */ var _InvoiceBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../InvoiceBox */ "./src/app/InvoiceBox.ts");
/* harmony import */ var _DocumentFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../DocumentFile */ "./src/app/DocumentFile.ts");
/* harmony import */ var _InvoiceDocumentFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../InvoiceDocumentFile */ "./src/app/InvoiceDocumentFile.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _InvoicePayment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../InvoicePayment */ "./src/app/InvoicePayment.ts");

















let EditComponent = class EditComponent {
    constructor(http, route, router, fb, location) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.location = location;
        this.pallet = new _Invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
        this.showSuccess = false;
        this.showError = false;
        this.CustomerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.PalletsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.BoxesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.invoice = new _Invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
        this.customers = new Array();
        this.pallets = new Array();
        this.boxes = new Array();
        this.newPallet = new _Pallet_pallet_src_app_pallet__WEBPACK_IMPORTED_MODULE_7__["Pallet"]();
        this.invoicePallets = new Array();
        this.invoiceBoxes = new Array();
        this.files = new Array();
        this.deletemodal = false;
        this.boxSearchObserve = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]();
        this.newInvoicePayment = new _InvoicePayment__WEBPACK_IMPORTED_MODULE_15__["InvoicePayment"]();
        this.boxautocomplete = "list-group collapse hide";
        this.customerAutocomplete = "list-group collapse hide";
        this.palletAutocomplete = "list-group collapse hide";
        this.NumberOfBoxes = 0;
        this.NumberOfPallets = 0;
        this.showCamera = false;
        this.invoice.Customer = new _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.invoice.Kdv = 8;
        this.TotalUsd = 0;
        this.TotalSoldWeight = 0;
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
        var palletUrl = "/api/Pallet/";
        var boxUrl = "/api/Box/";
        var invoiceUrl = "/api/Invoice/GetInvoice/";
        this.exchangeApi = "/api/exchange/";
        this.id = this.route.snapshot.queryParamMap.get("id");
        this.newInvoicePayment.Amount = 0;
        this.newInvoicePayment.ExchangeRate = 0;
        this.newInvoicePayment.PaymentDate = new Date();
        this.http.get(customerUrl)
            .subscribe(p => {
            this.customers = p;
            this.customerFilteredOptions = this.CustomerControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._customerFilter(value)));
        });
        this.http
            .post(palletUrl + "search/", ["false"])
            .toPromise()
            .then(res => {
            this.pallets = res;
            this.filteredOptions = this.PalletsControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._filter(value)));
        });
        this.http
            .post(boxUrl + "search/", ["false"])
            .toPromise()
            .then(res => {
            this.boxes = res;
            this.boxFilteredOptions = this.BoxesControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._boxFilter(value)));
        });
        this.http.get(invoiceUrl + this.id)
            .subscribe(p => {
            this.invoice = p;
            for (var i = 0; i < p.InvoicePallets.length; i++) {
                this.invoicePallets.push(p.InvoicePallets[i]);
            }
            for (var i = 0; i < p.InvoiceBoxes.length; i++) {
                this.invoiceBoxes.push(p.InvoiceBoxes[i]);
            }
            for (var i = 0; i < p.Files.length; i++) {
                this.files.push(p.Files[i]);
            }
            this.customerSearchText = this.invoice.Customer.CustomerName;
            this.ExchangeRate = this.invoice.ExchangeRate;
            this.TotalUsd = this.invoice.TotalUsd;
            this.Tax = this.invoice.Tax;
            this.Calculate();
        });
        this.http.get(this.exchangeApi)
            .subscribe(p => {
            this.newInvoicePayment.ExchangeRate = this.ExchangeRate;
        });
        this.InvoiceReportUrl = "/InvoiceReport/print/?id=" + this.id;
        this.ExitReportUrl = "/WarehouseTakeOutReport/print/?invoiceId=" + this.id;
    }
    Add(newPalletId) {
        var selectedPallet = this.pallets.find(p => p.PalletId == newPalletId);
        var newInvoicePallet = new _InvoicePallet__WEBPACK_IMPORTED_MODULE_10__["InvoicePallet"]();
        newInvoicePallet.PalletId = selectedPallet.PalletId;
        newInvoicePallet.Pallet = selectedPallet;
        newInvoicePallet.InvoiceId = this.invoice.InvoiceId;
        newInvoicePallet.Invoice = this.invoice;
        newInvoicePallet.Weight = selectedPallet.RemainWeight;
        this.invoicePallets.push(newInvoicePallet);
        this.Calculate();
        const index = this.pallets.indexOf(selectedPallet);
        if (index !== -1) {
            this.pallets.splice(index, 1);
        }
    }
    _filter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.pallets.filter(option => option.PalletNumber.toString().includes(filterValue) ||
            option.YarnType.includes(filterValue) ||
            option.Barcode.includes(filterValue) ||
            option.Weight.toString().includes(filterValue) ||
            option.Denier.toString().includes(filterValue) ||
            option.Filament.toString().includes(filterValue));
    }
    _boxFilter(value) {
        var filterValue = value.toString().toLowerCase();
        if (!value)
            filterValue = "";
        return this.boxes.filter(option => option.Barcode.toString().includes(filterValue) ||
            option.YarnType.includes(filterValue) ||
            option.Barcode.includes(filterValue) ||
            option.Weight.toString().includes(filterValue) ||
            option.Denier.toString().includes(filterValue) ||
            option.Filament.toString().includes(filterValue));
    }
    _customerFilter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.customers.filter(option => option.CustomerName.toLocaleLowerCase().includes(filterValue));
    }
    Delete() {
        this.showSuccess = false;
        var invoiceUrl = "/api/Invoice/Delete/?invoiceId=" + this.invoice.InvoiceId;
        this.http
            .delete(invoiceUrl)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.router.navigateByUrl("/home");
        });
    }
    SendEmail() {
        this.showSuccess = false;
        var invoiceUrl = "/api/email/?invoiceid=" + this.invoice.InvoiceId;
        this.http
            .get(invoiceUrl)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
        });
    }
    RemoveItem(selectedPallet) {
        const index = this.invoicePallets.indexOf(selectedPallet);
        if (index !== -1) {
            this.invoicePallets.splice(index, 1);
        }
        this.Calculate();
        this.pallets.push(selectedPallet.Pallet);
    }
    AddBox(newBoxId) {
        var selectedBox = this.boxes.find(p => p.BoxId == newBoxId);
        var newInvoiceBox = new _InvoiceBox__WEBPACK_IMPORTED_MODULE_11__["InvoiceBox"]();
        newInvoiceBox.BoxId = selectedBox.BoxId;
        newInvoiceBox.Box = selectedBox;
        newInvoiceBox.InvoiceId = this.invoice.InvoiceId;
        newInvoiceBox.Invoice = this.invoice;
        newInvoiceBox.Weight = selectedBox.RemainWeight;
        this.invoiceBoxes.push(newInvoiceBox);
        this.boxautocomplete = "list-group collapse hide";
        this.boxSearchText = "";
        this.RemoveSearchBoxItem(selectedBox);
        this.Calculate();
    }
    AddPallet(newPalletId) {
        var selectedPallet = this.pallets.find(p => p.PalletId == newPalletId);
        var newInvoicePallet = new _InvoicePallet__WEBPACK_IMPORTED_MODULE_10__["InvoicePallet"]();
        newInvoicePallet.PalletId = selectedPallet.PalletId;
        newInvoicePallet.Pallet = selectedPallet;
        newInvoicePallet.InvoiceId = this.invoice.InvoiceId;
        newInvoicePallet.Invoice = this.invoice;
        newInvoicePallet.Weight = selectedPallet.RemainWeight;
        this.invoicePallets.push(newInvoicePallet);
        this.palletAutocomplete = "list-group collapse hide";
        this.palletSearchText = "";
        this.RemoveSearchPalletItem(selectedPallet);
        this.Calculate();
    }
    AddCustomer(newCustomerId) {
        this.invoice.Customer = this.customers.find(p => p.CustomerId == newCustomerId);
        this.customerAutocomplete = "list-group collapse hide";
        this.customerSearchText = this.invoice.Customer.CustomerName;
    }
    RemoveBoxItem(selectedBox) {
        const index = this.invoiceBoxes.indexOf(selectedBox);
        if (index !== -1) {
            this.invoiceBoxes.splice(index, 1);
        }
        this.Calculate();
    }
    RemoveSearchPalletItem(selectedPallet) {
        const index = this.pallets.indexOf(selectedPallet);
        if (index !== -1) {
            this.pallets.splice(index, 1);
        }
    }
    RemoveSearchBoxItem(selectedBox) {
        const index = this.boxes.indexOf(selectedBox);
        if (index !== -1) {
            this.boxes.splice(index, 1);
        }
    }
    Calculate() {
        this.TotalUsd = 0;
        this.TotalSoldWeight = 0;
        this.NumberOfBoxes = 0;
        this.NumberOfPallets = 0;
        for (var i = 0; i < this.invoicePallets.length; i++) {
            var weight = this.invoicePallets[i].Weight;
            this.TotalUsd = weight * this.invoicePallets[i].Pallet.Price + this.TotalUsd;
            this.TotalSoldWeight += weight;
            this.NumberOfPallets++;
        }
        for (var i = 0; i < this.invoiceBoxes.length; i++) {
            var weight = this.invoiceBoxes[i].Weight;
            this.TotalUsd = weight * this.invoiceBoxes[i].Box.Price + this.TotalUsd;
            this.TotalSoldWeight += weight;
            this.NumberOfBoxes++;
        }
        this.TotalUsd = this.TotalUsd - this.invoice.Discount;
        this.TotalUsd = Math.round(this.TotalUsd * 1000) / 1000;
        this.Tax = this.TotalUsd * this.invoice.Kdv / 100;
        this.Tax = Math.round(this.Tax * 1000) / 1000;
        this.TotalUsd = this.TotalUsd + this.Tax;
        this.TotalLira = this.TotalUsd * this.ExchangeRate;
        this.TotalLira = Math.round(this.TotalLira * 1000) / 1000;
    }
    Save(invoice) {
        this.Calculate();
        this.showSuccess = false;
        this.saving = true;
        var invoiceURL = "/api/Invoice/Update";
        this.invoice.InvoicePallets = new Array();
        for (var i = 0; i < this.invoicePallets.length; i++) {
            var invoicePallet = new _InvoicePallet__WEBPACK_IMPORTED_MODULE_10__["InvoicePallet"]();
            invoicePallet.InvoiceId = this.invoice.InvoiceId;
            invoicePallet.PalletId = this.invoicePallets[i].PalletId;
            invoicePallet.Weight = this.invoicePallets[i].Weight;
            invoicePallet.Pallet = this.invoicePallets[i].Pallet;
            invoice.InvoicePallets.push(invoicePallet);
        }
        this.invoice.InvoiceBoxes = new Array();
        for (var i = 0; i < this.invoiceBoxes.length; i++) {
            var invoiceBox = new _InvoiceBox__WEBPACK_IMPORTED_MODULE_11__["InvoiceBox"]();
            invoiceBox.InvoiceId = this.invoice.InvoiceId;
            invoiceBox.BoxId = this.invoiceBoxes[i].BoxId;
            invoiceBox.Weight = this.invoiceBoxes[i].Weight;
            invoiceBox.Box = this.invoiceBoxes[i].Box;
            invoice.InvoiceBoxes.push(invoiceBox);
        }
        this.invoice.Files = new Array();
        for (var i = 0; i < this.files.length; i++) {
            var file = new _InvoiceDocumentFile__WEBPACK_IMPORTED_MODULE_13__["InvoiceDocumentFile"]();
            file.InvoiceId = this.invoice.InvoiceId;
            file.DocumentFileId = this.files[i].DocumentFileId;
            file.File = new _DocumentFile__WEBPACK_IMPORTED_MODULE_12__["DocumentFile"]();
            file.File.FileName = this.files[i].File.FileName;
            this.invoice.Files.push(file);
        }
        invoice.TotalUsd = this.TotalUsd;
        invoice.Tax = this.Tax;
        this.http.get(this.exchangeApi)
            .subscribe(p => {
            this.newInvoicePayment.ExchangeRate = this.ExchangeRate;
        });
        this.http
            .post(invoiceURL, invoice)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.saving = false;
        });
    }
    UpdateCustomer(option) {
        this.invoice.Customer = option;
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
            var newInvoiceFile = new _InvoiceDocumentFile__WEBPACK_IMPORTED_MODULE_13__["InvoiceDocumentFile"]();
            newInvoiceFile.InvoiceId = Number(this.id);
            var newFile = new _DocumentFile__WEBPACK_IMPORTED_MODULE_12__["DocumentFile"]();
            newFile.FileName = this.form.value.fatura.filename;
            newInvoiceFile.File = newFile;
            this.files.push(newInvoiceFile);
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
        var state = this.location.getState();
        if (state.navigationId > 1) {
            this.location.back();
        }
        else {
            this.router.navigateByUrl("/home");
        }
    }
    ConfirmDelete() {
        this.deletemodal = true;
    }
    CloseModal() {
        this.deletemodal = false;
    }
    searchChange() {
        if (this.boxSearchText.length < 1) {
            this.boxautocomplete = "list-group collapse hide";
        }
        else {
            this.boxautocomplete = "list-group collapse show";
            if (this.boxSearchText.length >= 26) {
                var cnt = 0;
                this.boxes.forEach(p => {
                    if (this.boxSearchText.includes(p.Barcode)) {
                        this.AddBox(p.BoxId);
                        cnt++;
                    }
                });
                this.boxSearchText = '';
            }
        }
    }
    customerSearchChange() {
        this.customerAutocomplete = "list-group collapse show";
    }
    palletSearchChange() {
        if (this.palletSearchText.length < 1) {
            this.palletAutocomplete = "list-group collapse hide";
        }
        else {
            this.palletAutocomplete = "list-group collapse show";
            if (this.palletSearchText.length >= 26) {
                var cnt = 0;
                this.pallets.forEach(p => {
                    if (this.palletSearchText.includes(p.Barcode)) {
                        this.AddPallet(p.PalletId);
                        cnt++;
                    }
                });
                this.palletSearchText = '';
            }
        }
    }
    AddPayment() {
        if (this.invoice.Payments == null)
            this.invoice.Payments = new Array();
        var newInvoicePayment = new _InvoicePayment__WEBPACK_IMPORTED_MODULE_15__["InvoicePayment"]();
        newInvoicePayment.Amount = this.newInvoicePayment.Amount;
        newInvoicePayment.ExchangeRate = this.newInvoicePayment.ExchangeRate;
        newInvoicePayment.PaymentDate = this.newInvoicePayment.PaymentDate;
        this.invoice.Payments.push(newInvoicePayment);
        this.invoice.Paid = this.invoice.Paid + this.newInvoicePayment.Amount / this.newInvoicePayment.ExchangeRate;
        this.newInvoicePayment = new _InvoicePayment__WEBPACK_IMPORTED_MODULE_15__["InvoicePayment"]();
        this.http.get(this.exchangeApi)
            .subscribe(p => {
            this.newInvoicePayment.ExchangeRate = this.ExchangeRate;
        });
    }
    RemovePayment(selectedInvoice) {
        const index = this.invoice.Payments.indexOf(selectedInvoice);
        if (index !== -1) {
            this.invoice.Payments.splice(index, 1);
            this.invoice.Paid = this.invoice.Paid - selectedInvoice.Amount / selectedInvoice.ExchangeRate;
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
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
/*! exports provided: filteredInvoices, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredInvoices", function() { return filteredInvoices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



var filteredInvoices;
let FilterPipe = class FilterPipe {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        filteredInvoices = [];
        searchText = searchText.toString().toLowerCase();
        return items.filter(it => {
            var res = JSON.stringify(it)
                .toLowerCase()
                .includes(searchText);
            if (res) {
                filteredInvoices.push(it);
            }
            return res;
        });
    }
};
FilterPipe.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
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

module.exports = "/* Using SCSS variables to store breakpoints */\n@media (max-width: 768px) {\n  .hide-on-small {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hide-on-large {\n    display: none;\n  }\n}\ntd p {\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvOUE1OEE2QTE1OEE2N0MxRi9wcm9qZWN0cy9pbnZlbnRvcnkvaW52ZW50b3J5L1ZpZXdzL0ludm9pY2UvSW52b2ljZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUFBO0FBRUE7RUFDRztJQUNLLGFBQUE7RUNBTjtBQUNGO0FERUE7RUFDRztJQUNLLGFBQUE7RUNBTjtBQUNGO0FERUE7RUFDSSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVXNpbmcgU0NTUyB2YXJpYWJsZXMgdG8gc3RvcmUgYnJlYWtwb2ludHMgKi9cbiRicmVha3BvaW50LXRhYmxldDogNzY4cHhcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIFxuICAgLmhpZGUtb24tc21hbGwgXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICBcblxuQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXRhYmxldCkgXG4gICAuaGlkZS1vbi1sYXJnZSBcbiAgICAgICAgZGlzcGxheTogbm9uZVxuXG5cbnRkIHBcbiAgICBtYXgtd2lkdGg6MzUwcHhcblxuIiwiLyogVXNpbmcgU0NTUyB2YXJpYWJsZXMgdG8gc3RvcmUgYnJlYWtwb2ludHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlkZS1vbi1zbWFsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRlLW9uLWxhcmdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG50ZCBwIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn0iXX0= */"

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
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.invoices = new Array();
        this.preventSingleClick = false;
        this.sortUp = new Array();
        this.isLoading = false;
        this.progress = "progress-bar progress-bar-striped progress-bar-animated w-0";
        this.progressPercent = 0;
    }
    ngOnInit() {
        var invoiceURL = "/api/Invoice/";
        this.isLoading = true;
        this.progressPercent = 25;
        this.searchText = this.route.snapshot.queryParamMap.get("search");
        this.http
            .get(invoiceURL)
            .toPromise()
            .then(res => {
            this.progressPercent = 90;
            this.invoices = res;
            this.calculateTotalWeight();
            this.progressPercent = 100;
            this.isLoading = false;
        })
            .catch((error) => {
            if (error.status == 200) {
                window.location.href = window.location.origin + "/Account/login";
            }
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
    getColor(invoice) {
        var lira = invoice.TotalUsd * invoice.ExchangeRate;
        var isLira = false;
        var diffLira = invoice.Paid - lira;
        var diffUsd = invoice.Paid - invoice.TotalUsd;
        if (invoice.Currency === 'Lira')
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
    getDifference(invoice) {
        var lira = invoice.TotalUsd * invoice.ExchangeRate;
        var diffLira = invoice.Paid - lira;
        var diffUsd = invoice.Paid - invoice.TotalUsd;
        if (invoice.Currency === 'Lira')
            return diffLira;
        else
            return diffUsd;
    }
    calculateTotalWeight() {
        this.totalPaid = 0;
        this.totalDebt = 0;
        var allInvoices = _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredInvoices"];
        if (!_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredInvoices"])
            allInvoices = this.invoices;
        for (var i = 0; i < allInvoices.length; i++) {
            if (allInvoices[i].Currency !== 'Lira') {
                var lira = allInvoices[i].ExchangeRate * allInvoices[i].Paid;
                this.totalPaid += lira;
            }
            else {
                this.totalPaid += Number(allInvoices[i].Paid);
            }
            this.totalDebt += Number(allInvoices[i].TotalUsd) * allInvoices[i].ExchangeRate;
        }
    }
    Sync() {
        this.syncing = true;
        var syncUrl = "/api/sync/StartInvoice";
        var syncProformaUrl = "/api/sync/GetWebsiteInvoices";
        this.http
            .get(syncUrl)
            .toPromise()
            .then(res => {
            this.syncing = false;
        });
        this.http
            .get(syncProformaUrl)
            .toPromise()
            .then(res => {
            this.syncing = false;
        });
    }
    Sort(sortHeader) {
        switch (sortHeader) {
            case 'InvoiceId':
                {
                    this.sortUp[0] = !this.sortUp[0];
                    if (this.sortUp[0]) {
                        this.invoices.sort((a, b) => a.InvoiceId - b.InvoiceId);
                    }
                    else {
                        this.invoices.sort((a, b) => b.InvoiceId - a.InvoiceId);
                    }
                    break;
                }
            case 'CustomerName':
                {
                    this.sortUp[1] = !this.sortUp[1];
                    if (this.sortUp[1]) {
                        this.invoices.sort((a, b) => a.Customer.CustomerName.toLocaleLowerCase().localeCompare(b.Customer.CustomerName.toLocaleLowerCase()));
                    }
                    else {
                        this.invoices.sort((a, b) => b.Customer.CustomerName.toLocaleLowerCase().localeCompare(a.Customer.CustomerName.toLocaleLowerCase()));
                    }
                    break;
                }
            case 'InvoiceDate':
                {
                    this.sortUp[2] = !this.sortUp[2];
                    if (this.sortUp[2]) {
                        this.invoices.sort((a, b) => a.InvoiceDate.localeCompare(b.InvoiceDate));
                    }
                    else {
                        this.invoices.sort((a, b) => b.InvoiceDate.localeCompare(a.InvoiceDate));
                    }
                    break;
                }
            case 'TotalUsd':
                {
                    this.sortUp[4] = !this.sortUp[4];
                    if (this.sortUp[4]) {
                        this.invoices.sort((a, b) => a.TotalUsd - b.TotalUsd);
                    }
                    else {
                        this.invoices.sort((a, b) => b.TotalUsd - a.TotalUsd);
                    }
                    break;
                }
            case 'Paid':
                {
                    this.sortUp[5] = !this.sortUp[5];
                    if (this.sortUp[5]) {
                        this.invoices.sort((a, b) => a.Paid - b.Paid);
                    }
                    else {
                        this.invoices.sort((a, b) => b.Paid - a.Paid);
                    }
                    break;
                }
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
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
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Invoice */ "./src/app/Invoice.ts");
/* harmony import */ var _InvoicePallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InvoicePallet */ "./src/app/InvoicePallet.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../Customer/customers/src/app/Customer */ "../../Customer/customers/src/app/Customer.ts");
/* harmony import */ var _Pallet_pallet_src_app_pallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../Pallet/pallet/src/app/pallet */ "../../Pallet/pallet/src/app/pallet.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _InvoiceBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../InvoiceBox */ "./src/app/InvoiceBox.ts");
/* harmony import */ var _InvoicePayment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../InvoicePayment */ "./src/app/InvoicePayment.ts");
/* harmony import */ var _InvoiceDocumentFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../InvoiceDocumentFile */ "./src/app/InvoiceDocumentFile.ts");
/* harmony import */ var _DocumentFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../DocumentFile */ "./src/app/DocumentFile.ts");















let InsertComponent = class InsertComponent {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.showSuccess = false;
        this.showError = false;
        this.CustomerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.PalletsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.BoxesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.invoice = new _Invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
        this.customers = new Array();
        this.pallets = new Array();
        this.boxes = new Array();
        this.newPallet = new _Pallet_pallet_src_app_pallet__WEBPACK_IMPORTED_MODULE_8__["Pallet"]();
        this.invoicePallets = new Array();
        this.invoiceBoxes = new Array();
        this.files = new Array();
        this.boxSearchObserve = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"]();
        this.newInvoicePayment = new _InvoicePayment__WEBPACK_IMPORTED_MODULE_12__["InvoicePayment"]();
        this.boxautocomplete = "list-group collapse hide";
        this.customerAutocomplete = "list-group collapse hide";
        this.palletAutocomplete = "list-group collapse hide";
        this.NumberOfBoxes = 0;
        this.NumberOfPallets = 0;
        this.showCamera = false;
        this.invoice.Customer = new _Customer_customers_src_app_Customer__WEBPACK_IMPORTED_MODULE_7__["Customer"]();
        this.invoice.InvoicePallets = new Array();
        this.invoice.InvoiceBoxes = new Array();
    }
    ngOnInit() {
        var customerUrl = "/api/Customer/";
        var palletUrl = "/api/Pallet/";
        var boxUrl = "/api/Box/";
        this.exchangeApi = "/api/exchange/";
        this.errorCustomer = false;
        this.newInvoicePayment.Amount = 0;
        this.newInvoicePayment.ExchangeRate = 0;
        this.newInvoicePayment.PaymentDate = new Date();
        this.invoice.Kdv = 8;
        this.TotalUsd = 0;
        this.TotalSoldWeight = 0;
        this.TotalLira = 0;
        this.ExchangeRate = 5.7;
        this.http.get(customerUrl)
            .subscribe(p => {
            this.customers = p;
            this.customerFilteredOptions = this.CustomerControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._customerFilter(value)));
        });
        this.http
            .post(palletUrl + "search/", ["false"])
            .toPromise()
            .then(res => {
            this.pallets = res;
            this.filteredOptions = this.PalletsControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._filter(value)));
        });
        this.http
            .post(boxUrl + "search/", ["false"])
            .toPromise()
            .then(res => {
            this.boxes = res;
            this.boxFilteredOptions = this.BoxesControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._boxFilter(value)));
        });
        this.http.get(this.exchangeApi)
            .subscribe(p => {
            this.ExchangeRate = p;
            this.newInvoicePayment.ExchangeRate = this.ExchangeRate;
        });
        this.invoice.Kdv = 8;
        this.invoice.Discount = 0;
        this.TotalUsd = 0;
        this.TotalLira = 0;
        this.ExchangeRate = 5.7;
        this.invoice.Paid = 0;
        ;
        this.invoice.InvoiceDate = (new Date()).toISOString();
    }
    RemoveItem(selectedPallet) {
        const index = this.invoicePallets.indexOf(selectedPallet);
        if (index !== -1) {
            this.invoicePallets.splice(index, 1);
        }
        this.Calculate();
        this.pallets.push(selectedPallet.Pallet);
    }
    AddBox(newBoxId) {
        var selectedBox = this.boxes.find(p => p.BoxId == newBoxId);
        var newInvoiceBox = new _InvoiceBox__WEBPACK_IMPORTED_MODULE_11__["InvoiceBox"]();
        newInvoiceBox.BoxId = selectedBox.BoxId;
        newInvoiceBox.Box = selectedBox;
        newInvoiceBox.InvoiceId = this.invoice.InvoiceId;
        newInvoiceBox.Invoice = this.invoice;
        newInvoiceBox.Weight = selectedBox.RemainWeight;
        this.invoiceBoxes.push(newInvoiceBox);
        this.boxautocomplete = "list-group collapse hide";
        this.boxSearchText = "";
        this.RemoveSearchBoxItem(selectedBox);
        this.Calculate();
    }
    AddPallet(newPalletId) {
        var selectedPallet = this.pallets.find(p => p.PalletId == newPalletId);
        var newInvoicePallet = new _InvoicePallet__WEBPACK_IMPORTED_MODULE_5__["InvoicePallet"]();
        newInvoicePallet.PalletId = selectedPallet.PalletId;
        newInvoicePallet.Pallet = selectedPallet;
        newInvoicePallet.Pallet.IsDelivered = true;
        newInvoicePallet.Pallet.DeliveryDate = new Date();
        newInvoicePallet.InvoiceId = this.invoice.InvoiceId;
        newInvoicePallet.Invoice = this.invoice;
        newInvoicePallet.Weight = selectedPallet.RemainWeight;
        this.invoicePallets.push(newInvoicePallet);
        this.palletAutocomplete = "list-group collapse hide";
        this.palletSearchText = "";
        this.RemoveSearchPalletItem(selectedPallet);
        this.Calculate();
    }
    AddCustomer(newCustomerId) {
        this.invoice.Customer = this.customers.find(p => p.CustomerId == newCustomerId);
        this.customerAutocomplete = "list-group collapse hide";
        this.customerSearchText = this.invoice.Customer.CustomerName;
    }
    RemoveBoxItem(selectedBox) {
        const index = this.invoiceBoxes.indexOf(selectedBox);
        if (index !== -1) {
            this.invoiceBoxes.splice(index, 1);
        }
        this.Calculate();
    }
    RemoveSearchBoxItem(selectedBox) {
        const index = this.boxes.indexOf(selectedBox);
        if (index !== -1) {
            this.boxes.splice(index, 1);
        }
    }
    RemoveSearchPalletItem(selectedPallet) {
        const index = this.pallets.indexOf(selectedPallet);
        if (index !== -1) {
            this.pallets.splice(index, 1);
        }
    }
    Calculate() {
        this.TotalUsd = 0;
        for (var i = 0; i < this.invoicePallets.length; i++) {
            var weight = this.invoicePallets[i].Weight;
            this.TotalUsd = weight * this.invoicePallets[i].Pallet.Price + this.TotalUsd;
        }
        for (var i = 0; i < this.invoiceBoxes.length; i++) {
            var weight = this.invoiceBoxes[i].Weight;
            this.TotalUsd = weight * this.invoiceBoxes[i].Box.Price + this.TotalUsd;
        }
        this.TotalUsd = this.TotalUsd - this.invoice.Discount;
        this.TotalUsd = Math.round(this.TotalUsd * 1000) / 1000;
        this.Tax = this.TotalUsd * this.invoice.Kdv / 100;
        this.Tax = Math.round(this.Tax * 1000) / 1000;
        this.TotalUsd = this.TotalUsd + this.Tax;
        this.TotalLira = this.TotalUsd * this.ExchangeRate;
        this.TotalLira = Math.round(this.TotalLira * 1000) / 1000;
    }
    _filter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.pallets.filter(option => option.PalletNumber.toString().includes(filterValue) ||
            option.YarnType.includes(filterValue) ||
            option.Barcode.includes(filterValue) ||
            option.Weight.toString().includes(filterValue) ||
            option.Denier.toString().includes(filterValue) ||
            option.Filament.toString().includes(filterValue));
    }
    _boxFilter(value) {
        var filterValue = value.toString().toLowerCase();
        if (!value)
            filterValue = "";
        return this.boxes.filter(option => option.Barcode.toString().includes(filterValue) ||
            option.YarnType.includes(filterValue) ||
            option.Denier.toString().includes(filterValue) ||
            option.Filament.toString().includes(filterValue));
    }
    _customerFilter(value) {
        const filterValue = value.toString().toLowerCase();
        return this.customers.filter(option => option.CustomerName.toLocaleLowerCase().includes(filterValue));
    }
    Save(invoice) {
        this.Calculate();
        this.showSuccess = false;
        this.saving = true;
        var invoiceURL = "/api/Invoice/Insert";
        this.invoice.InvoicePallets = new Array();
        for (var i = 0; i < this.invoicePallets.length; i++) {
            var invoicePallet = new _InvoicePallet__WEBPACK_IMPORTED_MODULE_5__["InvoicePallet"]();
            invoicePallet.InvoiceId = this.invoice.InvoiceId;
            invoicePallet.PalletId = this.invoicePallets[i].PalletId;
            invoicePallet.Weight = this.invoicePallets[i].Weight;
            invoicePallet.Pallet = this.invoicePallets[i].Pallet;
            invoice.InvoicePallets.push(invoicePallet);
        }
        this.invoice.InvoiceBoxes = new Array();
        for (var i = 0; i < this.invoiceBoxes.length; i++) {
            var invoiceBox = new _InvoiceBox__WEBPACK_IMPORTED_MODULE_11__["InvoiceBox"]();
            invoiceBox.InvoiceId = this.invoice.InvoiceId;
            invoiceBox.BoxId = this.invoiceBoxes[i].BoxId;
            invoiceBox.Weight = this.invoiceBoxes[i].Weight;
            invoiceBox.Box = this.invoiceBoxes[i].Box;
            invoice.InvoiceBoxes.push(invoiceBox);
        }
        this.invoice.Files = new Array();
        for (var i = 0; i < this.files.length; i++) {
            var file = new _InvoiceDocumentFile__WEBPACK_IMPORTED_MODULE_13__["InvoiceDocumentFile"]();
            file.InvoiceId = this.invoice.InvoiceId;
            file.DocumentFileId = this.files[i].DocumentFileId;
            file.File = new _DocumentFile__WEBPACK_IMPORTED_MODULE_14__["DocumentFile"]();
            file.File.FileName = this.files[i].File.FileName;
            this.invoice.Files.push(file);
        }
        invoice.TotalUsd = this.TotalUsd;
        invoice.Tax = this.Tax;
        this.http.get(this.exchangeApi)
            .subscribe(p => {
            this.newInvoicePayment.ExchangeRate = this.ExchangeRate;
        });
        this.http
            .post(invoiceURL, invoice)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.saving = false;
        });
    }
    UpdateCustomer(option) {
        this.invoice.Customer = option;
    }
    SelectCustomer(option) {
        this.invoice.Customer = option;
    }
    SelectDate(option) {
        this.invoice.InvoiceDate = option;
    }
    ToggleShowCustomers() {
        this.showCustomers = !this.showCustomers;
    }
    Cancel() {
        this.router.navigateByUrl("/home");
    }
    searchChange() {
        if (this.boxSearchText.length < 1) {
            this.boxautocomplete = "list-group collapse hide";
        }
        else {
            this.boxautocomplete = "list-group collapse show";
            if (this.boxSearchText.length >= 26) {
                var cnt = 0;
                this.boxes.forEach(p => {
                    if (this.boxSearchText.includes(p.Barcode)) {
                        this.AddBox(p.BoxId);
                        cnt++;
                    }
                });
                this.boxSearchText = '';
            }
        }
    }
    palletSearchChange() {
        if (this.palletSearchText.length < 1) {
            this.palletAutocomplete = "list-group collapse hide";
        }
        else {
            this.palletAutocomplete = "list-group collapse show";
            if (this.palletSearchText.length >= 26) {
                var cnt = 0;
                this.pallets.forEach(p => {
                    if (this.palletSearchText.includes(p.Barcode)) {
                        this.AddPallet(p.PalletId);
                        cnt++;
                    }
                });
                this.palletSearchText = '';
            }
        }
    }
    OnUploadFile() {
        this.form.value.fatura.filename = "inv-0-" + this.form.value.fatura.filename;
        const formModel = this.form.value.fatura;
        this.uploading = true;
        var invoiceUrl = '/api/AwsStorage/UploadFile/';
        this.http
            .post(invoiceUrl, formModel)
            .toPromise()
            .then(() => {
            var newInvoiceFile = new _InvoiceDocumentFile__WEBPACK_IMPORTED_MODULE_13__["InvoiceDocumentFile"]();
            newInvoiceFile.InvoiceId = 0;
            var newFile = new _DocumentFile__WEBPACK_IMPORTED_MODULE_14__["DocumentFile"]();
            newFile.FileName = this.form.value.fatura.filename;
            newInvoiceFile.File = newFile;
            this.files.push(newInvoiceFile);
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
    customerSearchChange() {
        this.customerAutocomplete = "list-group collapse show";
    }
    AddPayment() {
        if (this.invoice.Payments == null)
            this.invoice.Payments = new Array();
        var newInvoicePayment = new _InvoicePayment__WEBPACK_IMPORTED_MODULE_12__["InvoicePayment"]();
        newInvoicePayment.Amount = this.newInvoicePayment.Amount;
        newInvoicePayment.ExchangeRate = this.newInvoicePayment.ExchangeRate;
        newInvoicePayment.PaymentDate = this.newInvoicePayment.PaymentDate;
        this.invoice.Payments.push(newInvoicePayment);
        this.invoice.Paid = this.invoice.Paid + this.newInvoicePayment.Amount / this.newInvoicePayment.ExchangeRate;
        this.newInvoicePayment = new _InvoicePayment__WEBPACK_IMPORTED_MODULE_12__["InvoicePayment"]();
        this.newInvoicePayment.ExchangeRate = this.ExchangeRate;
    }
    RemovePayment(selectedInvoice) {
        const index = this.invoice.Payments.indexOf(selectedInvoice);
        if (index !== -1) {
            this.invoice.Payments.splice(index, 1);
            this.invoice.Paid = this.invoice.Paid - selectedInvoice.Amount / selectedInvoice.ExchangeRate;
        }
    }
};
InsertComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-insert",
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

module.exports = __webpack_require__(/*! /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/Invoice/Invoice/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map