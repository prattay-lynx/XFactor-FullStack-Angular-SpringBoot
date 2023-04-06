import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
  authorsForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router ) {
    this.authorsForm = this.formbuilder.group({
      // id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      birthDate: ['', [Validators.required]],
      name: ['', [Validators.required]],
      nationality: [''],
    })
  }

  ngOnInit(): void {
  }

  saveAuth() {
    // Make Post call to request url http://localhost:8081/students/saveStudents
    let authorData = this.authorsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/Authors/saveAuthors',authorData)
    .subscribe(response => {
      console.log('Author saved to DB', response)
      this.router.navigateByUrl('/authors')
    }, error =>{
      console.error("Error faced in saving Author", error)
    }
    );
  }

}
