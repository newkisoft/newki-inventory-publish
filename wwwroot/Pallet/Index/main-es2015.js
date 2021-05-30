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

/***/ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit/edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5\">\n    <a class=\"btn bg-secondary  btn-block col-md-3 text-light \" (click)=\"Cancel()\">back</a>\n  </div>\n  <form>\n    <div class=\"mb-3\">\n      <label for=\"pallet.PalletId\">Pallet Id:</label>\n      <input class=\"form-control\" id=\"pallet.PalletId\" name=\"pallet.PalletId\" type=\"text\"\n        [(ngModel)]=\"pallet.PalletId\" />\n    </div>\n    <div class=\"mb-3\">      \n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" (click)=\"showWareHouseOptions= !showWareHouseOptions\">\n          {{pallet.Warehouse}}\n        </button>\n        <div   *ngIf=\"showWareHouseOptions\" class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\"  (click)=\"Warehouse('Tekstilkent')\" >Tekstilkent</a>\n          <a class=\"dropdown-item\"  (click)=\"Warehouse('Asbir')\" >Asbir</a>          \n          <a class=\"dropdown-item\"  (click)=\"Warehouse('Hiz')\" >Hiz</a>   \n          <a class=\"dropdown-item\"  (click)=\"Warehouse('Custom')\" >Custom</a>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.PalletNumber\">Pallet Number:</label>\n      <input class=\"form-control\" id=\"pallet.PalletNumber\" name=\"pallet.PalletNumber\" type=\"text\"\n        [(ngModel)]=\"pallet.PalletNumber\" />\n    </div>\n\n    <div class=\"mb-3\">\n      <label for=\"pallet.Barcode\">Barcode:</label>\n      <input class=\"form-control\" id=\"pallet.Barcode\" name=\"pallet.Barcode\" type=\"text\" [(ngModel)]=\"pallet.Barcode\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Barcode\">Lot:</label>\n      <input class=\"form-control\" id=\"pallet.Lot\" name=\"pallet.Lot\" type=\"text\" [(ngModel)]=\"pallet.Lot\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.YarnType\">Yarn Type:</label>\n      <input class=\"form-control\" id=\"pallet.YarnType\" name=\"pallet.YarnType\" type=\"text\"\n        [(ngModel)]=\"pallet.YarnType\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Denier\">Denier:</label>\n      <input class=\"form-control\" id=\"pallet.Denier\" name=\"pallet.Denier\" type=\"text\" [(ngModel)]=\"pallet.Denier\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Filament\">Filament:</label>\n      <input class=\"form-control\" id=\"pallet.Filament\" name=\"pallet.Filament\" type=\"text\"\n        [(ngModel)]=\"pallet.Filament\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Lustre\">Lustre:</label>\n      <input class=\"form-control\" id=\"pallet.Lustre\" name=\"pallet.Lustre\" type=\"text\"\n        [(ngModel)]=\"pallet.Lustre\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Intermingle\">Intermingle:</label>\n      <input class=\"form-control\" id=\"pallet.Intermingle\" name=\"pallet.Intermingle\" type=\"text\"\n        [(ngModel)]=\"pallet.Intermingle\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Color\">Color:</label>\n      <input class=\"form-control\" id=\"pallet.Color\" name=\"pallet.Color\" type=\"text\" [(ngModel)]=\"pallet.Color\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.PalletName\">Color Code:</label>\n      <input class=\"form-control\" id=\"pallet.ColorCode\" name=\"pallet.ColorCode\" type=\"text\"\n        [(ngModel)]=\"pallet.ColorCode\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.PalletName\">Bobbin Size:</label>\n      <input class=\"form-control\" id=\"pallet.BobbinSize\" name=\"pallet.BobbinSize\" type=\"text\"\n        [(ngModel)]=\"pallet.BobbinSize\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Weight\">Weight:</label>\n      <input class=\"form-control\" id=\"pallet.Weight\" name=\"pallet.Weight\" type=\"number\" [(ngModel)]=\"pallet.Weight\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Price\">Price:</label>\n      <input class=\"form-control\" id=\"pallet.Price\" name=\"pallet.Price\" type=\"number\" [(ngModel)]=\"pallet.Price\" />\n    </div>\n    <div class=\"mb-3\">\n    <label for=\"pallet.RemainWeight\">Remain Weight:</label>\n      <input class=\"form-control\" id=\"pallet.RemainWeight\" name=\"pallet.RemainWeight\" type=\"number\"\n        [(ngModel)]=\"pallet.RemainWeight\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Weight\">Number of items:</label>\n      <input class=\"form-control\" id=\"pallet.NumberOfItems\" name=\"pallet.NumberOfItems\" type=\"number\" [(ngModel)]=\"pallet.NumberOfItems\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.RemainingItems\">Remainng number of Items:</label>\n      <input class=\"form-control\" id=\"pallet.RemainingItems\" name=\"pallet.RemainingItems\" type=\"number\"\n        [(ngModel)]=\"pallet.RemainingItems\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Title\">Title:</label>\n      <input class=\"form-control\" id=\"pallet.Title\" name=\"pallet.Title\" type=\"text\" [(ngModel)]=\"pallet.Title\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Details\">Details:</label>\n      <input class=\"form-control\" id=\"pallet.Details\" name=\"pallet.Details\" type=\"text\"\n        [(ngModel)]=\"pallet.Details\" />\n    </div>    \n        <div class=\"mb-3\">\n      <label for=\"pallet.Sold\">Sold:</label>\n      <input id=\"pallet.Sold\" class=\"ml-3\" name=\"pallet.Sold\" type=\"checkbox\" [(ngModel)]=\"pallet.Sold\"\n        ng-checked=\"pallet.Sold\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.IsDelivered\">Delivered:</label>\n      <input id=\"pallet.IsDelivered\" class=\"ml-3\" name=\"pallet.IsDelivered\" type=\"checkbox\" [(ngModel)]=\"pallet.IsDelivered\"\n        ng-checked=\"pallet.IsDelivered\" />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.DeliveryDate\">Delivered on:</label>\n      <input id=\"pallet.DeliveryDate\" class=\"ml-3 form-control\" name=\"pallet.DeliveryDate\" type=\"date\" [ngModel]=\"pallet.DeliveryDate | date:'yyyy-MM-dd'\"\n        ng-checked=\"pallet.DeliveryDate\" />\n    </div>\n    <p>Thumbnail:</p>\n    <img src=\"/api/AwsStorage/DownloadFile/{{pallet.ThumbnailImage}}\" alt =\"Product image\"/>\n    <p>Image:</p>\n    <form [formGroup]=\"form\" (ngSubmit)=\"OnUploadFile('image')\">\n      <div class=\"form-group\">\n        <label for=\"image\">Image</label>\n        <input type=\"file\" id=\"image\" (change)=\"onFileChange($event)\" #fileInput>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Upload <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n          aria-hidden=\"true\" *ngIf=\"uploading\"></span></button>\n    </form>      \n    <img src=\"/api/AwsStorage/DownloadFile/{{pallet.Image}}\" alt =\"Product image\"/>\n\n    <div class=\"mb-3\">\n      <label for=\"pallet.Sold\">Is available for online sale:</label>\n      <input id=\"pallet.IsOnlineProduct\" class=\"ml-3\" name=\"pallet.IsOnlineProduct\" type=\"checkbox\" [(ngModel)]=\"pallet.IsOnlineProduct\"\n        ng-checked=\"pallet.IsOnlineProduct\" />\n    </div>\n\n    <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <button class=\"btn btn-secondary btn-lg btn-block\" type=\"button\" (click)=\"Cancel()\">\n          Cancel\n        </button>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"ConfirmDelete()\">\n          Delete\n        </button>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"button\" value=\"Save\" (click)=\"Save(pallet)\" [attr.disabled]=\"saving ? '' : null\">\n          Save\n          <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\"></span>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n<!-- Modal -->\n<div *ngIf=\"deletemodal\"  class=\"modal-backdrop fade show\"></div>\n<div *ngIf=\"deletemodal\" id=\"exampleModalCenter\" class=\"modal fade show\" tabindex=\"-1\" role=\"dialog\"\n  style=\"display: block; padding-right: 12px;\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Delete</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"CloseModal()\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure?\n      </div>\n      <p *ngIf=\"cannotDelete\" class=\"mr-2 text-danger\">Can not delete this pallet. because there is an invoice or box attached to this.</p>      \n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"CloseModal()\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"Delete()\">Yes</button>\n      </div>      \n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"row mt-2\">\n  <div class=\"col-sm mb-3\">\n    <a class=\"btn btn-success col ml-2 \" [routerLink]=\"['../insert']\">Add</a>\n  </div>\n  <div class=\"col-sm mb-3\">\n    <button class=\"btn btn-success col ml-2\" type=\"button\" value=\"Export\" (click)=\"Export()\">\n      Export To NewKi Website\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"exporting\"></span>\n    </button>\n  </div>\n  <div class=\"col-sm mb-3\">\n    <button class=\"btn btn-success col ml-2\" type=\"button\" value=\"Publish\" (click)=\"Publish()\">\n      Publish Online Products\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"publishing\"></span>\n    </button>\n  </div>\n\n  <div class=\"col-sm mb-3\">\n    <button class=\"btn btn-success  col ml-2 \" type=\"button\" value=\"Bulk update\" (click)=\"ChangeBulkUpdateDialogue()\">\n      Bulk Update\n    </button>\n  </div>\n</div>\n<div class=\"row ml-1\">\n  <button class=\"btn btn-warning  col-sm ml-2 mb-2\" *ngFor=\"let filterOption of filterOptions\"\n    (click)=\"filterBy(filterOption)\">\n    <span *ngIf=\"filterOption != 'true' && filterOption != 'false' \">{{filterOption}}</span>\n    <span *ngIf=\"filterOption == 'true'\">Sold</span>\n    <span *ngIf=\"filterOption == 'false'\">Not Sold</span>\n  </button>\n</div>\n<div class=\"row mt-2\">\n  <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" class=\"form-control col ml-2 \"\n    (keydown)=\"calculateTotalWeight()\" />\n</div>\n<div class=\"row mt-2\">\n  <div *ngFor=\"let filter of filters\" class=\"input-group mb-3 col-2\">\n    <div class=\"input-group-prepend\">\n      <span *ngIf=\"filter != 'true' && filter != 'false' \" class=\"input-group-text\" id=\"basic-addon1\">{{filter}}</span>\n      <span *ngIf=\"filter == 'true'\" class=\"input-group-text\" id=\"basic-addon1\">Sold</span>\n      <span *ngIf=\"filter == 'false'\" class=\"input-group-text\" id=\"basic-addon1\">Not Sold</span>\n    </div>\n    <input type=\"button\" class=\"btn btn-danger\" value=\"X\" (click)=\"RemoveFilter(filter)\">\n  </div>\n</div>\n<div class=\"row ml-1\">\n  <b>Total weight:</b>{{ totlWeight | number:'1.2-3' }} kg = {{totlWeight/1000 | number:'1.2-3'}} tons\n</div>\n<div *ngIf=\"isLoading\" class=\"progress\">\n  <div [ngClass]=\"progress\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n    aria-valuemax=\"100\">{{progressPercent}}%</div>\n</div>\n<p class=\"btn-danger p-2\"><span *ngFor=\"let alert of colorAlerts\">{{alert.ColorCode}}, </span></p>\n<table class=\"table table-striped mt-2 small\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th></th>\n      <th class=\"hide-on-small\" scope=\"col\">#</th>\n      <th class=\"hide-on-large\" scope=\"col\">Details</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('PalletNumber')\">Pallet #</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Barcode')\">Barcode</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Lot')\">Lot</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('YarnType')\">Yarn Type</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Denier')\">Denier</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Filament')\">Filament</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Luster')\">Luster</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Intermingle')\">Intermingle</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Color')\">Color</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('ColorCode')\">Color Code</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('BobbinSize')\">Bobbin Size</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Weight')\">Weight</th>\n      <th class=\"hide-on-small\" (click)=\"Sort('RemainWeight')\" scope=\"col\">Remaining Weight</th>\n      <th class=\"hide-on-small\" scope=\"col\">Warehouse</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Sold')\">Sold</th>\n      <th class=\"hide-on-small\" scope=\"col\" (click)=\"Sort('Delivered')\">Delivered</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pallet of filteredPallets | filter: searchText  \" (keydown)=\"singleClick($event)\"\n      (dblclick)=\"doubleClick($event)\">\n      <td class=\"hide-on-small\"><input type=\"checkbox\" [(ngModel)]=\"pallet.Selected\"></td>\n      <td>\n        <a routerLink=\"/edit\" [queryParams]=\"{id: pallet.PalletId}\">\n          {{ pallet.PalletId }}</a>\n      </td>\n      <td class=\"hide-on-large\">\n        <p>{{ pallet.PalletNumber }}, {{ pallet.Barcode }}, {{ pallet.Lot }}, {{ pallet.YarnType }},\n          {{ pallet.Denier }}/{{ pallet.Filament }}, {{ pallet.Intermingle }},{{ pallet.BobbinSize }}\n          ,{{ pallet.ColorCode }}, {{pallet.RemainWeight}},\n          {{ pallet.Warehouse }} , {{ pallet.Sold }}</p>\n      </td>\n      <td class=\"hide-on-small\">{{ pallet.PalletNumber }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Barcode }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Lot }}</td>\n      <td class=\"hide-on-small\">{{ pallet.YarnType }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Denier }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Filament }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Lustre }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Intermingle }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Color }}</td>\n      <td class=\"hide-on-small\">{{ pallet.ColorCode }}</td>\n      <td class=\"hide-on-small\">{{ pallet.BobbinSize }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Weight }}</td>\n      <td class=\"hide-on-small\">{{ pallet.RemainWeight }}</td>\n      <td class=\"hide-on-small\">{{ pallet.Warehouse }}</td>\n      <td class=\"hide-on-small\">\n        <svg *ngIf=\"pallet.Sold\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-clipboard-check\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z\"/>\n          <path d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z\"/>\n          <path d=\"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z\"/>\n        </svg>\n        <svg *ngIf=\"!pallet.Sold\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-clipboard\" viewBox=\"0 0 16 16\">\n          <path d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z\"/>\n          <path d=\"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z\"/>\n        </svg>\n      </td>\n      <td class=\"hide-on-small\">      \n        <svg *ngIf=\"pallet.IsDelivered\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-truck\" viewBox=\"0 0 16 16\">\n          <path d=\"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n        </svg>\n        <svg *ngIf=\"!pallet.IsDelivered\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-shop\" viewBox=\"0 0 16 16\">\n          <path d=\"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z\"/>\n        </svg>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<hr />\n<b>Total weight:</b>{{ totlWeight | number:'1.2-3' }} kg = {{totlWeight/1000 | number:'1.2-3'}} tons\n\n<!-- Modal -->\n<div *ngIf=\"showBulkUpdate\" class=\"modal-backdrop fade show\"></div>\n<div *ngIf=\"showBulkUpdate\" id=\"bulkupdate\" class=\"modal fade show\" tabindex=\"-1\"\n  style=\"display: block; padding-right: 12px;\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Bulk Update</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"showBulkUpdate=false\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"dropdown\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n            (click)=\"showWareHouseOptions= !showWareHouseOptions\">\n            {{bulkWarehouse}}\n          </button>\n          <div *ngIf=\"showWareHouseOptions\" class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" (click)=\"ChangeWarehouse('Tekstilkent')\">Tekstilkent</a>\n            <a class=\"dropdown-item\" (click)=\"ChangeWarehouse('Asbir')\">Asbir</a>\n            <a class=\"dropdown-item\" (click)=\"ChangeWarehouse('Hiz')\">Hiz</a>\n            <a class=\"dropdown-item\" (click)=\"ChangeWarehouse('Custom')\">Custom</a>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"basic-addon1\">$</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"bulkPrice\" aria-describedby=\"basic-addon1\">\n        </div>\n        <table class=\"table table-striped able-sm mt-2\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Pallet #</th>\n              <th scope=\"col\">Details</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pallet of bulkPallets \">\n              <td>\n                {{ pallet.PalletId }}</td>\n              <td>{{ pallet.PalletNumber }}</td>\n              <td>\n                {{ pallet.Barcode }},{{ pallet.YarnType }},{{ pallet.Denier }},{{ pallet.Filament }},{{ pallet.Lustre\n                }},\n                {{ pallet.Intermingle }},{{pallet.BobbinSize }},{{ pallet.Color }}{{ pallet.ColorCode }},{{\n                pallet.Weight }},{{ pallet.RemainWeight }},{{ pallet.Warehouse }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n            (click)=\"showBulkUpdate=false\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"BulkUpdate()\">Save changes\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/insert/insert.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/insert/insert.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row ml-1 mr-1 mt-3 mb-5 text-light \">\n    <button\n      class=\"btn bg-secondary  btn-block col-md-3\"\n      [routerLink]=\"['../index']\"\n    >\n      back\n    </button>\n  </div>\n  <form>\n    <div class=\"mb-3\">\n      <label for=\"pallet.PalletNumber\">Pallet Number:</label>\n      <input\n        class=\"form-control\"\n        id=\"pallet.PalletNumber\"\n        name=\"pallet.PalletNumber\"\n        type=\"text\"\n        [(ngModel)]=\"pallet.PalletNumber\"\n      />\n    </div>\n    <div class=\"mb-3\">      \n      <label>Warehouse:</label>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{pallet.Warehouse}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" (click)=\"Warehouse('Tekstilkent')\" >Tekstilkent</a>\n          <a class=\"dropdown-item\" (click)=\"Warehouse('Asbir')\" >Asbir</a>          \n          <a class=\"dropdown-item\"  (click)=\"Warehouse('Hiz')\" >Hiz</a>   \n          <a class=\"dropdown-item\" (click)=\"Warehouse('Custom')\" >Custom</a>   \n        </div>\n      </div>\n      \n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Barcode\">Barcode:</label>\n      <input\n        class=\"form-control\"\n        id=\"pallet.Barcode\"\n        name=\"pallet.Barcode\"\n        type=\"text\"\n        [(ngModel)]=\"pallet.Barcode\"\n      />\n    </div>   \n    <div class=\"mb-3\">\n      <label for=\"pallet.Barcode\">Lot:</label>\n      <input\n        class=\"form-control\"\n        id=\"pallet.Lot\"\n        name=\"pallet.Lot\"\n        type=\"text\"\n        [(ngModel)]=\"pallet.Lot\"\n      />\n    </div>  \n    <div class=\"mb-3\">\n        <label for=\"pallet.YarnType\">Yarn Type:</label>\n        <input\n          class=\"form-control\"\n          id=\"pallet.YarnType\"\n          name=\"pallet.YarnType\"\n          type=\"text\"\n          [(ngModel)]=\"pallet.YarnType\"\n        />\n      </div>\n    <div class=\"mb-3\">\n        <label for=\"pallet.Denier\">Denier:</label>\n        <input\n          class=\"form-control\"\n          id=\"pallet.Denier\"\n          name=\"pallet.Denier\"\n          type=\"number\"\n          [(ngModel)]=\"pallet.Denier\"\n        />\n      </div>\n      <div class=\"mb-3\">\n          <label for=\"pallet.Filament\">Filament:</label>\n          <input\n            class=\"form-control\"\n            id=\"pallet.Filament\"\n            name=\"pallet.Filament\"\n            type=\"number\"\n            [(ngModel)]=\"pallet.Filament\"\n          />\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"pallet.Lustre\">Lustre:</label>\n          <input\n            class=\"form-control\"\n            id=\"pallet.Lustre\"\n            name=\"pallet.Lustre\"\n            type=\"text\"\n            [(ngModel)]=\"pallet.Lustre\"\n          />\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"pallet.Intermingle\">Intermingle:</label>\n            <input\n              class=\"form-control\"\n              id=\"pallet.Intermingle\"\n              name=\"pallet.Intermingle\"\n              type=\"text\"\n              [(ngModel)]=\"pallet.Intermingle\"\n            />\n          </div>\n          <div class=\"mb-3\">\n              <label for=\"pallet.Color\">Color:</label>\n              <input\n                class=\"form-control\"\n                id=\"pallet.Color\"\n                name=\"pallet.Color\"\n                type=\"text\"\n                [(ngModel)]=\"pallet.Color\"\n              />\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"pallet.PalletName\">Color Code:</label>\n                <input\n                  class=\"form-control\"\n                  id=\"pallet.ColorCode\"\n                  name=\"pallet.ColorCode\"\n                  type=\"text\"\n                  [(ngModel)]=\"pallet.ColorCode\"\n                />\n              </div>\n              <div class=\"mb-3\">\n                  <label for=\"pallet.PalletName\">Bobbin Size:</label>\n                  <input\n                    class=\"form-control\"\n                    id=\"pallet.BobbinSize\"\n                    name=\"pallet.BobbinSize\"\n                    type=\"text\"\n                    [(ngModel)]=\"pallet.BobbinSize\"\n                  />\n                </div>\n              \n    <div class=\"mb-3\">\n      <label for=\"pallet.Weight\">Weight:</label>\n      <input\n        class=\"form-control\"\n        id=\"pallet.Weight\"\n        name=\"pallet.Weight\"\n        type=\"number\"\n        [(ngModel)]=\"pallet.Weight\"\n      />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Price\">Price:</label>\n      <input\n        class=\"form-control\"\n        id=\"pallet.Price\"\n        name=\"pallet.Price\"\n        type=\"number\"\n        [(ngModel)]=\"pallet.Price\"\n      />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.RemainWeight\">Remain Weight:</label>\n      <input\n        class=\"form-control\"\n        id=\"pallet.RemainWeight\"\n        name=\"pallet.RemainWeight\"\n        type=\"number\"\n        [(ngModel)]=\"pallet.RemainWeight\"\n      />\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"pallet.Sold\">Sold:</label>\n      <input\n        id=\"pallet.Sold\"\n        class=\"ml-3\"\n        name=\"pallet.Sold\"\n        type=\"checkbox\"\n        [(ngModel)]=\"pallet.Sold\"\n        ng-checked=\"pallet.Sold\"\n      />\n    </div>\n    <p class=\"bg-success p-3 mb-2\" *ngIf=\"showSuccess\">Successfully Saved!</p>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <button\n          class=\"btn btn-secondary btn-lg btn-block\"\n          type=\"button\"\n          (click)=\"Cancel()\"\n        >\n          Cancel\n        </button>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <button\n          class=\"btn btn-success btn-lg btn-block\"\n          type=\"button\"\n          value=\"Save\"\n          (click)=\"Save(pallet)\"\n        >\n          Save\n          <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"saving\" [attr.disabled]=\"saving ? '' : null\"></span>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleMenu\" class=\"col-md d-md-block  sidebar-sticky sticky-top mt-4 \">\n    <ul class=\"nav flex-column\">\n        <li *ngFor=\"let menu of menus\" class=\"nav-item ml-3 mr-3 mt-1 mb-1\">\n            <a class=\"btn btn-dark w-100 text-left\" href=\"{{menu.Url}}\">\n                {{menu.Text}}\n            </a>\n        </li>\n    </ul>\n</div>\n"

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
    constructor() { }
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");


















const appRoutes = [
    { path: "index", component: _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: "edit", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: "insert", component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_10__["InsertComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "**", component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
            _insert_insert_component__WEBPACK_IMPORTED_MODULE_10__["InsertComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]
        ],
        providers: [_share_service__WEBPACK_IMPORTED_MODULE_14__["ShareService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]]
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
/* harmony import */ var _pallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pallet */ "./src/app/pallet.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let EditComponent = class EditComponent {
    constructor(http, route, router, fb, location) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.location = location;
        this.pallet = new _pallet__WEBPACK_IMPORTED_MODULE_4__["Pallet"]();
        this.showSuccess = false;
        this.showError = false;
        this.saving = false;
        this.deletemodal = false;
        this.cannotDelete = false;
        this.showWareHouseOptions = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParamMap.get("id");
        var palletsURL = "/api/Pallet/GetPallet/" + this.id;
        this.http
            .get(palletsURL)
            .toPromise()
            .then(res => {
            this.pallet = res;
        });
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            image: null
        });
    }
    Save(pallet) {
        this.showSuccess = false;
        this.saving = true;
        var palletsURL = "/api/Pallet/Update";
        this.http
            .put(palletsURL, pallet)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.saving = false;
        });
    }
    Delete() {
        this.showSuccess = false;
        var palletsURL = "/api/Pallet/Remove/" + this.id;
        var deleteGaurd = "/api/DeleteGaurd/CheckPallet/" + this.id;
        this.http
            .get(deleteGaurd)
            .toPromise()
            .then(res => {
            this.cannotDelete = res;
            if (!res) {
                this.http
                    .delete(palletsURL)
                    .toPromise()
                    .then(res => {
                    this.showSuccess = true;
                    this.router.navigateByUrl("/index");
                });
            }
        });
    }
    Cancel() {
        var state = this.location.getState();
        if (state.navigationId > 1) {
            this.location.back();
        }
        else {
            this.router.navigateByUrl("/index");
        }
    }
    ConfirmDelete() {
        this.deletemodal = true;
    }
    CloseModal() {
        this.deletemodal = false;
    }
    Warehouse(location) {
        this.pallet.Warehouse = location;
        this.showWareHouseOptions = !this.showWareHouseOptions;
    }
    OnUploadFile(imageType) {
        if (imageType == 'image') {
            this.form.value.image.filename = "pallet-image-" + this.id + "-" + this.form.value.image.filename;
        }
        else {
            this.form.value.image.filename = "pallet-thumbnail-image-" + this.id + "-" + this.form.value.image.filename;
        }
        const formModel = this.form.value.image;
        this.uploading = true;
        var invoiceUrl = '/api/AwsStorage/UploadFile/';
        this.http
            .post(invoiceUrl, formModel)
            .toPromise()
            .then(() => {
            if (imageType == 'image') {
                this.pallet.Image = this.form.value.image.filename;
            }
            else {
                this.pallet.ThumbnailImage = this.form.value.image.filename;
            }
            this.uploading = false;
        });
    }
    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('image').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result
                });
            };
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit",
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/edit/edit.component.sass")]
    })
], EditComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



var filteredPallets;
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
        return items.filter(it => {
            var included = false;
            var sortItemText = this.sort(this.cleanText(JSON.stringify(it))
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
    }
    sort(text) {
        return text.split(' ').sort().join('.*');
    }
    cleanText(str) {
        return str.replace(/"\w+":/g, '').replace(/"/g, '').replace(/}/g, '').replace(/{/g, '').replace(/,/g, ' ');
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

/***/ "./src/app/index/index.component.sass":
/*!********************************************!*\
  !*** ./src/app/index/index.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Using SCSS variables to store breakpoints */\n@media (max-width: 768px) {\n  .hide-on-small {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hide-on-large {\n    display: none;\n  }\n}\ntd p {\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvOUE1OEE2QTE1OEE2N0MxRi9wcm9qZWN0cy9pbnZlbnRvcnkvaW52ZW50b3J5L1ZpZXdzL1BhbGxldC9wYWxsZXQvc3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUFFQTtFQUNHO0lBQ0ssYUFBQTtFQ0FOO0FBQ0Y7QURFQTtFQUNHO0lBQ0ssYUFBQTtFQ0FOO0FBQ0Y7QURFQTtFQUNJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFVzaW5nIFNDU1MgdmFyaWFibGVzIHRvIHN0b3JlIGJyZWFrcG9pbnRzICovXG4kYnJlYWtwb2ludC10YWJsZXQ6IDc2OHB4XG5AbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtdGFibGV0KSBcbiAgIC5oaWRlLW9uLXNtYWxsIFxuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIFxuICAgLmhpZGUtb24tbGFyZ2UgXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcblxuXG50ZCBwXG4gICAgbWF4LXdpZHRoOjM1MHB4XG5cbiIsIi8qIFVzaW5nIFNDU1MgdmFyaWFibGVzIHRvIHN0b3JlIGJyZWFrcG9pbnRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpZGUtb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGlkZS1vbi1sYXJnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxudGQgcCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter.pipe */ "./src/app/filter.pipe.ts");





let IndexComponent = class IndexComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.pallets = new Array();
        this.preventSingleClick = false;
        this.sortUp = new Array();
        this.filteredPallets = new Array();
        this.palletsURL = "/api/Pallet/";
        this.showBulkUpdate = false;
        this.publishing = false;
        this.saving = false;
        this.inventoryLowAlertURL = "/api/Dashboard/InventoryLowAlert";
        this.filtersURL = "/api/filter/";
        this.showWareHouseOptions = false;
        this.bulkPallets = new Array();
        this.colorAlerts = new Array();
        this.filterOptions = new Array();
        this.filters = new Array();
        this.isLoading = false;
        this.progress = "progress-bar progress-bar-striped progress-bar-animated w-0";
        this.progressPercent = 0;
    }
    ngOnInit() {
        this.searchText = this.route.snapshot.queryParamMap.get("search");
        this.filterBy("false");
        this.http
            .get(this.inventoryLowAlertURL)
            .toPromise()
            .then(res => {
            this.colorAlerts = res;
        });
        this.http
            .get(this.filtersURL)
            .toPromise()
            .then(res => {
            this.filterOptions = res;
        });
    }
    Export() {
        var palletsURL = "/api/ExportPallet/";
        this.exporting = true;
        this.http
            .get(palletsURL)
            .toPromise()
            .then(res => {
            this.exporting = false;
        });
    }
    singleClick(event) {
        this.preventSingleClick = false;
        const delay = 200;
        this.timer = setTimeout(() => {
            if (!this.preventSingleClick) {
                //Navigate on single click
                for (var i = 0; i < event.path[2].childElementCount; i++) {
                    event.path[2].children[i].className = "";
                }
                event.path[1].className = "bg-warning";
            }
        }, delay);
    }
    doubleClick(event) {
        this.preventSingleClick = true;
        clearTimeout(this.timer);
        //Navigate on double click
        this.router.navigate(["/edit/"], {
            queryParams: { id: event.currentTarget.children[1].innerText }
        });
    }
    calculateTotalWeight() {
        this.totlWeight = 0;
        if (!_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredPallets"]) {
            for (var i = 0; i < this.filteredPallets.length; i++) {
                this.totlWeight += Number(this.filteredPallets[i].Weight);
            }
            return;
        }
        for (var i = 0; i < _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredPallets"].length; i++) {
            this.totlWeight += Number(_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["filteredPallets"][i].Weight);
        }
    }
    Sort(sortHeader) {
        switch (sortHeader) {
            case 'PalletNumber':
                {
                    this.sortUp[0] = !this.sortUp[0];
                    if (this.sortUp[0]) {
                        this.filteredPallets.sort((a, b) => a.PalletNumber - b.PalletNumber);
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.PalletNumber - a.PalletNumber);
                    }
                    break;
                }
            case 'Barcode':
                {
                    this.sortUp[1] = !this.sortUp[1];
                    if (this.sortUp[1]) {
                        this.filteredPallets.sort((a, b) => a.Barcode.localeCompare(b.Barcode));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.Barcode.localeCompare(a.Barcode));
                    }
                    break;
                }
            case 'YarnType':
                {
                    this.sortUp[2] = !this.sortUp[2];
                    if (this.sortUp[1]) {
                        this.filteredPallets.sort((a, b) => a.YarnType.localeCompare(b.YarnType));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.YarnType.localeCompare(a.YarnType));
                    }
                    break;
                }
            case 'Denier':
                {
                    this.sortUp[3] = !this.sortUp[3];
                    if (this.sortUp[3]) {
                        this.filteredPallets.sort((a, b) => a.Denier - b.Denier);
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.Denier - a.Denier);
                    }
                    break;
                }
            case 'Filament':
                {
                    this.sortUp[4] = !this.sortUp[4];
                    if (this.sortUp[4]) {
                        this.filteredPallets.sort((a, b) => a.Filament - b.Filament);
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.Filament - a.Filament);
                    }
                    break;
                }
            case 'Lustre':
                {
                    this.sortUp[5] = !this.sortUp[5];
                    if (this.sortUp[5]) {
                        this.filteredPallets.sort((a, b) => a.Lustre && b.Lustre && a.Lustre.localeCompare(b.Lustre));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => a.Lustre && b.Lustre && b.Lustre.localeCompare(a.Lustre));
                    }
                    break;
                }
            case 'Intermingle':
                {
                    this.sortUp[6] = !this.sortUp[6];
                    if (this.sortUp[6]) {
                        this.filteredPallets.sort((a, b) => a.Intermingle && b.Intermingle && a.Intermingle.localeCompare(b.Intermingle));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => a.Intermingle && b.Intermingle && b.Intermingle.localeCompare(a.Intermingle));
                    }
                    break;
                }
            case 'Color':
                {
                    this.sortUp[7] = !this.sortUp[7];
                    if (this.sortUp[7]) {
                        this.filteredPallets.sort((a, b) => a.Color && b.Color && a.Color.localeCompare(b.Color));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => a.Color && b.Color && b.Color.localeCompare(a.Color));
                    }
                    break;
                }
            case 'ColorCode':
                {
                    this.sortUp[8] = !this.sortUp[8];
                    if (this.sortUp[8]) {
                        this.filteredPallets.sort((a, b) => a.ColorCode && b.ColorCode && a.ColorCode.localeCompare(b.ColorCode));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => a.ColorCode && b.ColorCode && b.ColorCode.localeCompare(a.ColorCode));
                    }
                    break;
                }
            case 'BobbinSize':
                {
                    this.sortUp[9] = !this.sortUp[9];
                    if (this.sortUp[9]) {
                        this.filteredPallets.sort((a, b) => a.BobbinSize && b.BobbinSize && a.BobbinSize.localeCompare(b.BobbinSize));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => a.BobbinSize && b.BobbinSize && b.BobbinSize.localeCompare(a.BobbinSize));
                    }
                    break;
                }
            case 'Weight':
                {
                    this.sortUp[10] = !this.sortUp[10];
                    if (this.sortUp[10]) {
                        this.filteredPallets.sort((a, b) => a.Weight - b.Weight);
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.Weight - a.Weight);
                    }
                    break;
                }
            case 'RemainWeight':
                {
                    this.sortUp[11] = !this.sortUp[11];
                    if (this.sortUp[11]) {
                        this.filteredPallets.sort((a, b) => a.RemainWeight - b.RemainWeight);
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.RemainWeight - a.RemainWeight);
                    }
                    break;
                }
            case 'Sold':
                {
                    this.sortUp[12] = !this.sortUp[12];
                    if (this.sortUp[12]) {
                        this.filteredPallets.sort((a, b) => a.Sold.toString().localeCompare(b.Sold.toString()));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.Sold.toString().localeCompare(a.Sold.toString()));
                    }
                    break;
                }
            case 'Lot':
                {
                    this.sortUp[13] = !this.sortUp[13];
                    if (this.sortUp[13]) {
                        this.filteredPallets.sort((a, b) => a.Lot.localeCompare(b.Lot));
                    }
                    else {
                        this.filteredPallets.sort((a, b) => b.Lot.localeCompare(a.Lot));
                    }
                    break;
                }
        }
    }
    filterBy(keyword) {
        this.progress = "progress-bar progress-bar-striped progress-bar-animated w-0";
        this.progressPercent = 0;
        this.filters.push(keyword);
        this.isLoading = true;
        this.progress = "progress-bar progress-bar-striped progress-bar-animated w-25";
        this.progressPercent = 25;
        this.http
            .post(this.palletsURL + "search/", this.filters)
            .toPromise()
            .then(res => {
            this.progress = "progress-bar progress-bar-striped progress-bar-animated w-85";
            this.progressPercent = 85;
            this.pallets = res;
            this.filteredPallets = this.pallets;
            this.calculateTotalWeight();
            this.isLoading = false;
            this.progress = "progress-bar progress-bar-striped progress-bar-animated w-100";
            this.progressPercent = 100;
        });
    }
    ChangeBulkUpdateDialogue() {
        this.showBulkUpdate = !this.showBulkUpdate;
        this.bulkPallets = new Array();
        for (var i = 0; i < this.pallets.length; i++) {
            if (this.pallets[i].Selected)
                this.bulkPallets.push(this.pallets[i]);
        }
    }
    ChangeWarehouse(warehosue) {
        this.bulkWarehouse = warehosue;
        this.showWareHouseOptions = !this.showWareHouseOptions;
    }
    Publish() {
        var palletsURL = "/api/ExportPallet/ExportForOnlineSale";
        this.publishing = true;
        this.http
            .get(palletsURL)
            .toPromise()
            .then(res => {
            this.publishing = false;
        });
    }
    BulkUpdate() {
        this.saving = true;
        var palletsURL = "/api/BulkPalletUpdate/Update";
        for (var i = 0; i < this.bulkPallets.length; i++) {
            if (this.bulkWarehouse && this.bulkWarehouse.length > 0)
                this.bulkPallets[i].Warehouse = this.bulkWarehouse;
            if (this.bulkPrice && this.bulkPrice != 0)
                this.bulkPallets[i].Price = this.bulkPrice;
        }
        this.http
            .put(palletsURL, this.bulkPallets)
            .toPromise()
            .then(res => {
            this.saving = false;
        });
    }
    RemoveFilter(filter) {
        const index = this.filters.indexOf(filter);
        if (index !== -1) {
            this.filters.splice(index, 1);
        }
        if (this.filters.length == 0) {
            this.http
                .post(this.palletsURL + "search/", ["false", "true"])
                .toPromise()
                .then(res => {
                this.pallets = res;
                this.filteredPallets = this.pallets;
                this.calculateTotalWeight();
            });
        }
        else {
            this.http
                .post(this.palletsURL + "search/", this.filters)
                .toPromise()
                .then(res => {
                this.pallets = res;
                this.filteredPallets = this.pallets;
                this.calculateTotalWeight();
            });
        }
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-index",
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.sass */ "./src/app/index/index.component.sass")]
    })
], IndexComponent);



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
/* harmony import */ var _pallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pallet */ "./src/app/pallet.ts");





let InsertComponent = class InsertComponent {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.pallet = new _pallet__WEBPACK_IMPORTED_MODULE_4__["Pallet"]();
        this.showSuccess = false;
        this.showError = false;
        this.saving = false;
    }
    ngOnInit() { }
    Save(pallet) {
        this.showSuccess = false;
        this.saving = true;
        var palletsURL = "/api/Pallet/Insert";
        this.http
            .post(palletsURL, pallet)
            .toPromise()
            .then(res => {
            this.showSuccess = true;
            this.saving = false;
        });
    }
    Cancel() {
        this.router.navigateByUrl("/index");
    }
    Warehouse(location) {
        this.pallet.Warehouse = location;
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

/***/ "./src/app/pallet.ts":
/*!***************************!*\
  !*** ./src/app/pallet.ts ***!
  \***************************/
/*! exports provided: Pallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pallet", function() { return Pallet; });
class Pallet {
}


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

module.exports = __webpack_require__(/*! /mnt/9A58A6A158A67C1F/projects/inventory/inventory/Views/Pallet/pallet/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map