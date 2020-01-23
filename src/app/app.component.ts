import { Component } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ StudentService ]
})
export class AppComponent {
  
   students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });

        console.log(this.students);
    }

   

}
