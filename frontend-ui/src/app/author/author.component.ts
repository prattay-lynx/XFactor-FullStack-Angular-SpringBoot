import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = 'Author Management table'
  authors: any = [];
  // authors = [
  //   { "id": 101, "birth_date": "1990-05-15", "name": "John Doe", "nationality": "American" },
  //   { "id": 102, "birth_date": "1995-02-18", "name": "Jane Smith", "nationality": "Canadian" },
  //   { "id": 103, "birth_date": "1988-11-30", "name": "Juan Perez", "nationality": "Mexican" }
  // ]
  constructor(private router:Router,private http:HttpClient) { }

  totalAuthors: number = 0;

  addAuthors() {
  console.log("addAuthors button clicked!!")
  // Take user to /add-authors url
  this.router.navigateByUrl('/add-authors')
  }
  
  ngOnInit(): void {
    this.fetchAllAuthors();
    this.findTotalCount();
  }

  findAuthors() {
    console.log("findAuthors button clicked!!")
    this.router.navigateByUrl('/find-authors')
  }

   findTotalCount() {
    this.http.get<number>("http://localhost:8080/Authors/findTotalAuthors").subscribe(
      (response) => {
        this.totalAuthors = response;
      },
      (error) => {
        console.log(error);
      }
    );
   }
  
  fetchAllAuthors() {
    this.http.get("http://localhost:8080/Authors/getAllAuthors")
    .subscribe(resp =>{
      this.authors = resp;
      console.log('Authors retrieved successfully:', this.authors)
    }, error => {
      console.error('Error retrieving Authors:', error);
    });
  }

  deleteAuthor(authorId:Number) {
    const url = 'http://localhost:8080/Authors/deleteAuthors/' + authorId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Author deleted successfully');
      this.fetchAllAuthors()
    }, error => {
      console.error('Error deleting author:', error);
    });
  }

}
