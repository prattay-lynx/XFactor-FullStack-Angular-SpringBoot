import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor(private router: Router,private http:HttpClient) { }
   
  title = 'Loans Management Table'
  loans: any = [];
  // loans = [
  // {
  //   "id": 1,
  //   "book_id": 123,
  //   "checkout_date": "2022-02-15",
  //   "due_date": "2022-02-22",
  //   "return_date": "2022-02-23",
  //   "student_id": 456
  // },
  // {
  //   "id": 2,
  //   "book_id": 456,
  //   "checkout_date": "2022-03-01",
  //   "due_date": "2022-03-08",
  //   "return_date": "2022-03-23",
  //   "student_id": 789
  // },
  // {
  //   "id": 3,
  //   "book_id": 789,
  //   "checkout_date": "2022-04-01",
  //   "due_date": "2022-04-08",
  //   "return_date": "2022-04-23",
  //   "student_id": 123
  // },
  // {
  //   "id": 4,
  //   "book_id": 234,
  //   "checkout_date": "2022-05-15",
  //   "due_date": "2022-05-22",
  //   "return_date": "2022-05-23",
  //   "student_id": 567
  // },
  // {
  //   "id": 5,
  //   "book_id": 567,
  //   "checkout_date": "2022-06-01",
  //   "due_date": "2022-06-08",
  //   "return_date": "2022-06-09",
  //   "student_id": 234
  // },
  // {
  //   "id": 6,
  //   "book_id": 890,
  //   "checkout_date": "2022-07-01",
  //   "due_date": "2022-07-08",
  //   "return_date": "2022-08-23",
  //   "student_id": 567
  // }
  // ]
  addLoans(){
    console.log("addLoans button clicked!!")
    // Take user to /add-books url
    this.router.navigateByUrl('/add-loans')
  }
  ngOnInit(): void {
    this.fetchAllLoans();
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
    }, error => {
      console.error('Error deleting loan:', error);
    });
  }

}
