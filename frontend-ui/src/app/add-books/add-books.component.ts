import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

booksForm : FormGroup;
  constructor(private formbuilder: FormBuilder ,private http: HttpClient,private router:Router ) { 
    this.booksForm = this.formbuilder.group({
      title:['', [Validators.required]],
      author:[''],
      isbn: ['',[Validators.required,Validators.minLength(6)]],
      copies: [0],
      publicationDate: [''],
      publisher: [''],
      category: [''],
      genre: [''],
      subgenre: ['']
    })
  }

  get BookName(): FormControl{
    return this.booksForm.get("title") as FormControl;
  }

  saveBook(){
    // Make Post call to request url http://localhost:8081/books/saveBook
    
    let bookData = this.booksForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/book/saveBooks',bookData)
    .subscribe(response => {
      console.log('Book saved to DB', response)
      this.router.navigateByUrl('/books')
    }, error =>{
      console.error("Error in book save", error)
    }
    );

    //subscribe is a function for the results
    //it returns a response
  }

  ngOnInit(): void {
  }

}
