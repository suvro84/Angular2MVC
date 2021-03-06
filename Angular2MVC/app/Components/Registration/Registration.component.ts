﻿import { Component, Injectable, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { NgIf, NgFor } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
@Component({
    selector: "registration",
    //templateUrl: './registration.component.html' //it's my path, you could change
    //templateUrl: 'app/components/Registration/registration.component.html' //it's my path, you could change
   // template: require('./Registration.component.html')
    templateUrl: 'app/Components/Registration/Registration.component.html'
})
export class RegistrationComponent implements OnInit {

    ngOnInit(): void {
        alert('hi');
        this.getData();
    }

    students = {};

    student: IStudentMasters[];

    myName: string;

    constructor(public http: Http) {
        this.myName = "Shanu";
    }

    getData() {


        this.http.get('/api/StudentMastersAPI/Student')
            .map((response: Response) => <IStudentMasters[]>response.json())
            .subscribe(
            studentData => this.student = studentData);
      //  alert(this.student);

    }

    addStudentsDetails() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/StudentMastersAPI/InsertStudents', JSON.stringify(this.students), { headers: headers }).subscribe();
        alert("Student Detail Inserted");
        this.getData();
    }



}

export interface IStudentMasters {
    StdID: number;
    StdName: string;
    Email: string;
    Phone: string;
    Address: string;
}

export class StudentMasters implements IStudentMasters {
    constructor(public StdID: number, public StdName: string, public Email: string, public Phone: string, public Address: string) { }
}