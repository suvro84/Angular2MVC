"use strict";
//import { Component } from '@angular/core';
//import { Http } from "@angular/http";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { Http } from "@angular/http";
//import { StudentMasters } from '../../../../Data';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';
var RegistrationComponent = (function () {
    //public student: StudentMasters[] = [];
    //myName: string; 
    function RegistrationComponent(http) {
        this.http = http;
        this.student = [];
        this.students = {};
        this.myName = "Shanu";
        this.getData();
    }
    RegistrationComponent.prototype.getData = function () {
        //this.http.get('/api/StudentMastersAPI/Student')
        //    .map((responseData) => {
        //        return responseData.json();
        //    })
        //    .map((student: Array<any>) => {
        //        let result: Array<StudentMasters> = [];
        //        if (student) {
        //            student.forEach((student) => {
        //                result.push(new StudentMasters(student.StdID, student.StdName,
        //                    student.Email, student.Phone, student.Address));
        //            });
        //        }
        //        return result;
        //    }) 
        //    .subscribe(res => this.student = res);
        var _this = this;
        this.http.get('/api/StudentMastersAPI/Student').subscribe(function (result) {
            alert(result.json());
            //alert(this.student);
            _this.student = result.json();
        });
    };
    RegistrationComponent.prototype.addStudentsDetails = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/StudentMastersAPI', JSON.stringify(this.students), { headers: headers }).subscribe();
        alert("Student Detail Inserted");
        this.getData();
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "registration"
            // directives: [NgFor],
            // ,template: require('./Registration.component.html')
            ,
            template: require('app/Components/Registration/Registration.component.html')
            //, template: 'app/Components/Registration/Registration.component.html'
            // ,
        }),
        __param(0, core_1.Inject(http_1.Http)),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=Registration.component.js.map