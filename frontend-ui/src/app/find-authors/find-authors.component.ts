import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-authors',
  templateUrl: './find-authors.component.html',
  styleUrls: ['./find-authors.component.css']
})
export class FindAuthorsComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder) { }

  authorName: string='';
  author: any={};
  errorMessage: string = '';

  ngOnInit(): void {
    this.findAuthorByName();
  }

  findAuthorByName() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    // const url = `http://localhost:8080/Authors/findByname/,{params}`;
    // this.errorMessage = ''; 
    // console.log('http://localhost:8080/Authors/findByName', { params });
    this.http.get(`http://localhost:8080/Authors/findByName/${this.authorName}`, options).subscribe(
      (response: any) => {
        this.author = response;
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error in fetching author:', error);
        this.author = {};
      }
    );
  }

}
