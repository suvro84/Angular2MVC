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
//import { Http, Response } from '@angular/http';
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var RegistrationComponent = (function () {
    function RegistrationComponent(http) {
        this.http = http;
        this.students = {};
        this.myName = "Shanu";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        alert('hi');
        this.getData();
    };
    RegistrationComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('/api/StudentMastersAPI/Student')
            .map(function (response) { return response.json(); })
            .subscribe(function (studentData) { return _this.student = studentData; });
        //  alert(this.student);
    };
    RegistrationComponent.prototype.addStudentsDetails = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/StudentMastersAPI/InsertStudents', JSON.stringify(this.students), { headers: headers }).subscribe();
        alert("Student Detail Inserted");
        this.getData();
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "registration",
            //templateUrl: './registration.component.html' //it's my path, you could change
            //templateUrl: 'app/components/Registration/registration.component.html' //it's my path, you could change
            // template: require('./Registration.component.html')
            templateUrl: 'app/Components/Registration/Registration.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
var StudentMasters = (function () {
    function StudentMasters(StdID, StdName, Email, Phone, Address) {
        this.StdID = StdID;
        this.StdName = StdName;
        this.Email = Email;
        this.Phone = Phone;
        this.Address = Address;
    }
    return StudentMasters;
}());
exports.StudentMasters = StudentMasters;
//# sourceMappingURL=Registration.component.js.map