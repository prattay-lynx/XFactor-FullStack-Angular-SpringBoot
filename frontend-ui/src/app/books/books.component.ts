import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  totalBooks: number=0;

  ngOnInit(): void {
    this.fetchAllBooks()
    this.findTotalCount()
  }

  title = 'Books Management Table'
  //books = []
  books: any = [];
  
  addBooks() {
  console.log("addBooks button clicked!!")
    // Take user to /add-books url
    this.router.navigateByUrl('/add-books')
  }

  findBook() {
    console.log("findBooks button clicked!!")
    // Take user to /add-books url
    this.router.navigateByUrl('/find-books')
  }

  findTotalCount() {
    this.http.get<number>("http://localhost:8080/book/findTotalBooks").subscribe(
      (response) => {
        this.totalBooks = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchAllBooks(){
    this.http.get("http://localhost:8080/book/getAll")
    .subscribe(resp =>{
      this.books = resp;
      console.log('Books retrieved successfully:', this.books)
    }, error => {
      console.error('Error retrieving books:', error);
    });
  }

   deleteBook(bookId:Number){  
    const url = 'http://localhost:8080/book/deletebyid/' +bookId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Book deleted successfully');
      this.fetchAllBooks()
      this.findTotalCount()
    }, error => {
      console.error('Error deleting book:', error);
    });
  }

}
