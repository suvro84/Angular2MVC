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
var router_1 = require("@angular/router");
var datagrid_core_1 = require("../shared/datagrid/datagrid.core");
var datagrid_component_1 = require("../shared/datagrid/datagrid.component");
var customer_service_1 = require("../services/customer.service");
//import { AlertBoxComponent } from '../Shared/alertbox.component';
var customer_entity_1 = require("../entities/customer.entity");
var transactionalinformation_entity_1 = require("../entities/transactionalinformation.entity");
//@Input() summary: string;
exports.debugVersion = "?version=" + Date.now();
var CustomerInquiryComponent = (function () {
    //   constructor(private alertService: AlertService, private customerService: CustomerService, private router: Router) {
    function CustomerInquiryComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.title = 'Customer Inquiry';
        this.columns = [];
        this.alerts = [];
        this.currentPageNumber = 1;
        console.log("Suvrojyoti kipte---------constructor");
        this.currentPageNumber = 1;
        this.autoFilter = false;
        this.totalPages = 0;
        this.totalRows = 0;
        this.pageSize = 15;
        this.sortDirection = "ASC";
        this.sortExpression = "CompanyName";
    }
    CustomerInquiryComponent.prototype.ngOnInit = function () {
        console.log("Suvrojyoti kipte---------ngOnInit");
        this.columns.push(new datagrid_core_1.DataGridColumn('customerCode', 'Customer Code', '[{"width": "20%" , "disableSorting": false}]'));
        this.columns.push(new datagrid_core_1.DataGridColumn('companyName', 'Company Name', '[{"width": "30%" , "hyperLink": true, "disableSorting": false}]'));
        this.columns.push(new datagrid_core_1.DataGridColumn('city', 'City', '[{"width": "20%" , "disableSorting": false}]'));
        this.columns.push(new datagrid_core_1.DataGridColumn('zipCode', 'Zip Code', '[{"width": "15%" , "disableSorting": false}]'));
        this.columns.push(new datagrid_core_1.DataGridColumn('dateUpdated', 'Date Updated', '[{"width": "15%" , "disableSorting": false, "formatDate": true}]'));
        this.executeSearch();
    };
    CustomerInquiryComponent.prototype.executeSearch = function () {
        var _this = this;
        console.log('1------executeSearch');
        if (this.runningSearch == true)
            return;
        var miliseconds = 500;
        if (this.delaySearch == false) {
            miliseconds = 0;
        }
        this.runningSearch = true;
        setTimeout(function () {
            var customer = new customer_entity_1.Customer();
            customer.customerCode = _this.customerCode;
            customer.companyName = _this.companyName;
            customer.pageSize = _this.pageSize;
            customer.sortDirection = _this.sortDirection;
            customer.sortExpression = _this.sortExpression;
            customer.currentPageNumber = _this.currentPageNumber;
            console.log('2------abc');
            _this.customerService.getCustomers(customer)
                .subscribe(function (response) { return _this.getCustomersOnSuccess(response); }, function (response) { return _this.getCustomersOnError(response); });
        }, miliseconds);
    };
    CustomerInquiryComponent.prototype.getCustomersOnSuccess = function (response) {
        var transactionalInformation = new transactionalinformation_entity_1.TransactionalInformation();
        transactionalInformation.currentPageNumber = this.currentPageNumber;
        transactionalInformation.pageSize = this.pageSize;
        transactionalInformation.totalPages = response.totalPages;
        transactionalInformation.totalRows = response.totalRows;
        transactionalInformation.sortDirection = this.sortDirection;
        transactionalInformation.sortExpression = this.sortExpression;
        this.customers = response.customers;
        this.datagrid.databind(transactionalInformation);
        //this.alertService.renderSuccessMessage(response.returnMessage);
        //this.messageBox = this.alertService.returnFormattedMessage();
        //this.alerts = this.alertService.returnAlerts();
        this.runningSearch = false;
    };
    CustomerInquiryComponent.prototype.getCustomersOnError = function (response) {
        //this.alertService.renderErrorMessage(response.returnMessage);
        //this.messageBox = this.alertService.returnFormattedMessage();
        //this.alerts = this.alertService.returnAlerts();
        this.runningSearch = false;
    };
    CustomerInquiryComponent.prototype.datagridEvent = function (event) {
        var datagridEvent = event.value;
        if (datagridEvent.EventType == "PagingEvent") {
            this.pagingCustomers(datagridEvent.CurrentPageNumber);
        }
        else if (datagridEvent.EventType == "PageSizeChanged") {
            this.pageSizeChanged(datagridEvent.PageSize);
        }
        else if (datagridEvent.EventType == "ItemSelected") {
            this.selectedCustomer(datagridEvent.ItemSelected);
        }
        else if (datagridEvent.EventType == "Sorting") {
            this.sortCustomers(datagridEvent.SortDirection, datagridEvent.SortExpression);
        }
    };
    CustomerInquiryComponent.prototype.selectedCustomer = function (itemSelected) {
        var rowSelected = itemSelected;
        var row = this.customers[rowSelected];
        var customerID = row.customerID;
        this.router.navigate(['/customer/customermaintenance', { id: customerID }]);
    };
    CustomerInquiryComponent.prototype.sortCustomers = function (sortDirection, sortExpression) {
        this.sortDirection = sortDirection;
        this.sortExpression = sortExpression;
        this.currentPageNumber = 1;
        this.delaySearch = false;
        this.executeSearch();
    };
    CustomerInquiryComponent.prototype.pagingCustomers = function (currentPageNumber) {
        this.currentPageNumber = currentPageNumber;
        this.delaySearch = false;
        this.executeSearch();
    };
    CustomerInquiryComponent.prototype.pageSizeChanged = function (pageSize) {
        this.pageSize = pageSize;
        this.currentPageNumber = 1;
        this.delaySearch = false;
        this.executeSearch();
    };
    CustomerInquiryComponent.prototype.reset = function () {
        this.customerCode = "";
        this.companyName = "";
        this.currentPageNumber = 1;
        this.delaySearch = false;
        this.executeSearch();
    };
    CustomerInquiryComponent.prototype.search = function () {
        this.currentPageNumber = 1;
        this.delaySearch = false;
        this.executeSearch();
    };
    CustomerInquiryComponent.prototype.companyNameChanged = function (newValue) {
        var _this = this;
        if (this.autoFilter == false)
            return;
        if (newValue == "")
            return;
        this.companyName = newValue;
        this.currentPageNumber = 1;
        this.delaySearch = true;
        setTimeout(function () {
            _this.executeSearch();
        }, 500);
    };
    CustomerInquiryComponent.prototype.customerCodeChanged = function (newValue) {
        var _this = this;
        if (this.autoFilter == false)
            return;
        if (newValue == "")
            return;
        this.customerCode = newValue;
        this.currentPageNumber = 1;
        this.delaySearch = true;
        setTimeout(function () {
            _this.executeSearch();
        }, 500);
    };
    __decorate([
        core_1.ViewChild(datagrid_component_1.DataGrid),
        __metadata("design:type", datagrid_component_1.DataGrid)
    ], CustomerInquiryComponent.prototype, "datagrid", void 0);
    CustomerInquiryComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/customer/customer-inquiry.component.html' + exports.debugVersion,
            moduleId: module.id
            //  templateUrl: 'app/Components/fetchdata/fetchdata.component.html'
            //directives: [DataGrid, AlertBoxComponent],
            //providers: [ CustomerService]
        }),
        __metadata("design:paramtypes", [customer_service_1.CustomerService, router_1.Router])
    ], CustomerInquiryComponent);
    return CustomerInquiryComponent;
}());
exports.CustomerInquiryComponent = CustomerInquiryComponent;
//# sourceMappingURL=customer-inquiry.component.js.map