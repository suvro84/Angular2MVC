"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var http_service_1 = require("./http.service");
var CustomerService = (function () {
    function CustomerService(httpService) {
        this.httpService = httpService;
    }
    CustomerService.prototype.importCustomers = function (customer) {
        var url = "api/customers/importcustomers";
        return this.httpService.httpPost(customer, url);
    };
    CustomerService.prototype.getCustomers = function (customer) {
        var url = "api/customers/getcustomers";
        return this.httpService.httpPost(customer, url);
    };
    CustomerService.prototype.getCustomer = function (customer) {
        var url = "api/customers/getcustomer";
        return this.httpService.httpPost(customer, url);
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        var url = "api/customers/updatecustomer";
        return this.httpService.httpPost(customer, url);
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map