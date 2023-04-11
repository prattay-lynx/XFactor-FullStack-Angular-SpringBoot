import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  totalLoans: number=0;
  constructor(private router: Router,private http:HttpClient) { }
   
  title = 'Loans Management Table'
  loans: any = [];
  
  addLoans(){
    console.log("addLoans button clicked!!")
    // Take user to /add-books url
    this.router.navigateByUrl('/add-loans')
  }
  ngOnInit(): void {
    this.fetchAllLoans();
    this.findTotalCount();
  }

  findTotalCount() {
    this.http.get<number>("http://localhost:8080/Loans/findTotalLoans").subscribe(
      (response) => {
        this.totalLoans = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchAllLoans() {
      this.http.get("http://localhost:8080/Loans/getAllLoans")
    .subscribe(resp =>{
      this.loans= resp;
      console.log('Loan retrieved successfully:', this.loans)
    }, error => {
      console.error('Error retrieving Loan:', error);
    });
  }
  deleteLoan(loanId:Number) {
    const url = 'http://localhost:8080/Loans/deleteLoans/' + loanId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Loan deleted successfully');
      this.fetchAllLoans()
      this.findTotalCount()
    }, error => {
      console.error('Error deleting loan:', error);
    });
  }

}
