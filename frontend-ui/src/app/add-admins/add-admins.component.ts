import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.css']
})
export class AddAdminsComponent implements OnInit {
adminsForm : FormGroup;
  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) {
    this.adminsForm = this.formbuilder.group({
      // id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      name: ['',[Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    })
  }

  // get ID(): FormControl{
  //   return this.adminsForm.get("name") as FormControl;
  // }
  get username(): FormControl{
    return this.adminsForm.get("username") as FormControl;
  }
  get password(): FormControl{
    return this.adminsForm.get("password") as FormControl;
  }
  ngOnInit(): void {
  }
  saveAdmin() {
    // Make Post call to request url http://localhost:8081/students/saveStudents
    
    let adminData = this.adminsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/Admins/saveAdmins', adminData)
      .subscribe(response => {
        console.log('Admin saved to DB', response)
        this.router.navigateByUrl('/admins')
      }, error => {
        console.error("Error in Admin save", error)
      }
      );
  }

}
