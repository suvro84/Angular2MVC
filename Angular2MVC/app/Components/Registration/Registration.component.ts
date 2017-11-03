

//import { Component } from '@angular/core';
//import { Http } from "@angular/http";



import { Component, Injectable, Inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { Http } from "@angular/http";

//import { StudentMasters } from '../../../../Data';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';





@Component({
    selector: "registration"
   // directives: [NgFor],
   // ,template: require('./Registration.component.html')
    , template: require('app/Components/Registration/Registration.component.html')
    //, template: 'app/Components/Registration/Registration.component.html'
   // ,

})
export class RegistrationComponent {
    student: Array<StudentMasters> = []; 
    students = {};
    myName: string; 

    //public student: StudentMasters[] = [];
    //myName: string; 
    constructor(@Inject(Http) public http: Http) {
        this.myName = "Shanu";      
        this.getData();       
    }

    getData() {         
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

        this.http.get('/api/StudentMastersAPI/Student').subscribe(result => {
            alert(result.json());
            //alert(this.student);
            this.student = result.json();
        });
    }

    addStudentsDetails() {     
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/StudentMastersAPI', JSON.stringify(this.students), { headers: headers }).subscribe();
        alert("Student Detail Inserted");
        this.getData();       
    }

    
}
export interface StudentMasters {
    stdID: number;
    stdName: string;
    email: string;
    phone: string;
    address: string;
}