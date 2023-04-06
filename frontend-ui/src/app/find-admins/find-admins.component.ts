import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-admins',
  templateUrl: './find-admins.component.html',
  styleUrls: ['./find-admins.component.css']
})
export class FindAdminsComponent implements OnInit {

  adminId: string = '';
  admin: any = {};
  errorMessage: string = '';

  adminName: string='';
  admin1: any = {};
  errorMessage1: string = '';
  constructor(private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  findAdminByID() {
    const url = `http://localhost:8080/Admins/findByAdminId/${this.adminId}`;
    // this.errorMessage = ''; 
    this.http.get(url).subscribe(
      (response: any) => {
        this.admin = response;
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error in fetching admin:', error);
        this.admin = {};
      }
    );
  }

  findAdminByName() {
    const url = `http://localhost:8080/Admins/findByname/${this.adminName}`;
    // this.errorMessage = ''; 
    this.http.get(url).subscribe(
      (response: any) => {
        this.admin1 = response;
      },
      (error) => {
        this.errorMessage1 = error.message;
        console.error('Error in fetching admin:', error);
        this.admin1 = {};
      }
    );
  }
}
