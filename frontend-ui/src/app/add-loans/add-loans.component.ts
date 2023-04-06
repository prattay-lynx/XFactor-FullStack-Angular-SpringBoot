import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-loans',
  templateUrl: './add-loans.component.html',
  styleUrls: ['./add-loans.component.css']
})
export class AddLoansComponent implements OnInit {
  loansForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private router:Router,private http:HttpClient) {
    this.loansForm = this.formbuilder.group({
      // id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      bookId: ['', [Validators.required]],
      checkoutDate: ['', [Validators.required,]],
      dueDate: ['', [Validators.required,]],
      returnDate: ['', [Validators.required,]],
      studentId: ['',Validators.required],
    })
  }

  saveLoan() {
        // Make Post call to request url http://localhost:8081/students/saveStudents
    
    let loanData = this.loansForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/Loans/saveLoans',loanData)
    .subscribe(response => {
      console.log('loan saved to DB', response)
      this.router.navigateByUrl('/loans')
    }, error =>{
      console.error("Error in loan save", error)
    }
    );
  }

  ngOnInit(): void {
  }

}
