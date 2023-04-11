import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Student Management Table'
  totalStuds: number = 0;
  // student= [  {    "id": 1,    "birth_date": "15-08-2002",    "stream": "CSE",    "phone": 9831256690,    "name": "Soham",    "roll": 23  },  {    "id": 2,    "birth_date": "28-12-2002",    "stream": "CSE",    "phone": 6782446372,    "name": "Arinjay",    "roll": 8  },  {    "id": 3,    "birth_date": "31-11-2002",    "stream": "ECE",    "phone": 8240964522,    "name": "Soham",    "roll": 35  },  {    "id": 4,    "birth_date": "02-06-2002",    "stream": "MECH",    "phone": 9831256691,    "name": "Avik",    "roll": 19  },  {    "id": 5,    "birth_date": "10-04-2003",    "stream": "CIVIL",    "phone": 9876543210,    "name": "Susmita",    "roll": 20  }]
  students: any = [];
  constructor(private router: Router, private http: HttpClient) { }
  
   ngOnInit(): void {
     this.fetchAllStudents()
     this.findTotalCount()
   }
  
  addStudents() {
   console.log("addStudent button clicked!!")
    // Take user to /add-student url
    this.router.navigateByUrl('/add-students')
  }

    findTotalCount() {
    this.http.get<number>("http://localhost:8080/Student/findTotalStudents").subscribe(
      (response) => {
        this.totalStuds = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  fetchAllStudents(){
    this.http.get("http://localhost:8080/Student/getAllStudents")
    .subscribe(resp =>{
      this.students = resp;
      console.log('Students retrieved successfully:', this.students)
    }, error => {
      console.error('Error retrieving students:', error);
    });
  }

   deleteStudent(studentId:Number){  
    const url = 'http://localhost:8080/Student/deleteStudents/' + studentId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Student deleted successfully');
      this.fetchAllStudents()
      this.findTotalCount()
    }, error => {
      console.error('Error deleting student:', error);
    });
  }
 

}
