
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';


@Injectable()
export class StudentService{
  
 students : Student[] = [
   {
        name : "John",
        college : "VMEG",
        id : 999
   },
   {
        name : "David",
        college : "VNR",
        id : 888
   }
 ];

 constructor() { }
  
public getStudents(): any {
     const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.students);
            }, 1000);
     });

     return studentsObservable;
 }

}