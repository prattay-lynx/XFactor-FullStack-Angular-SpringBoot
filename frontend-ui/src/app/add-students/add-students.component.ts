import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
studentsForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private router:Router,private http:HttpClient) {
    this.studentsForm = this.formbuilder.group({
      // id: ['', [Validators.required]],
      name: ['', [Validators.required,]],
      department: ['', [Validators.required,]],
      birthDate: ['', [Validators.required]],
      rollNumber: ['', [Validators.required,]],
      mobileNumber: ['',[Validators.required,Validators.maxLength(10),Validators.pattern("[0-9]+")]],
    })
  }

  ngOnInit(): void {
  }

  saveStudent(){
    // Make Post call to request url http://localhost:8081/students/saveStudents
    
    let studentData = this.studentsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/Student/saveStudents',studentData)
    .subscribe(response => {
      console.log('Student saved to DB', response)
      this.router.navigateByUrl('/students')
    }, error =>{
      console.error("Error in Student save", error)
    }
    );
    //subscribe is a function for the results
    //it returns a response
  }

}
