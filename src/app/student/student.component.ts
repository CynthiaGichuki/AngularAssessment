import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  newStudent = { name: '', course: '', grade: '', balance: 0 };
  students: { name: string, course: string, grade: string, balance: number }[] = [];
  filter = 'all';
  editing: boolean = false;
  selectedStudent:any;


  onSub() {
    this.students.push(this.newStudent);
    this.newStudent = { name: '', course: '', grade: '', balance: 0 };
  }
  onEdit(newStudent: any) {
    this.editing = true;
    this.selectedStudent = newStudent;
  }

  onUpdate() {
    this.editing = false;
    this.selectedStudent = null;
  }

  // editStudent(student: any) {
  //   this.newStudent = student;
  //   this.editing = true;
  // }
}
