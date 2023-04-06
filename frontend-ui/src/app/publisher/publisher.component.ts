import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {


  title = 'Publisher Management Table'
  publ: any = [];
//   publisher=[
//   {
//     "id": 3,
//     "address": "ABC Street, Bengaluru",
//     "email": "with@co.in",
//     "name": "TogetherWith",
//     "phone": 9182407860
//   },
//   {
//     "id": 4,
//     "address": "Elan Street, Pune",
//     "email": "graw@co.in",
//     "name": "McGraw",
//     "phone": 8240964537
//   },
//   {
//     "id": 5,
//     "address": "XYZ Road, Mumbai",
//     "email": "jane@doe.com",
//     "name": "Jane Doe",
//     "phone": 7890123456
//   },
//   {
//     "id": 6,
//     "address": "MNO Avenue, Chennai",
//     "email": "john@smith.com",
//     "name": "John Smith",
//     "phone": 9876543210
//   }
// ]
isBlue = true
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublisher();
  }

    addPub() {
    console.log("addPublisher button clicked!!")
    // Take user to /add-publisher url
    this.router.navigateByUrl('/add-pub')
    }
  
  fetchAllPublisher() {
      this.http.get("http://localhost:8080/pubs/getAllPublishers")
    .subscribe(resp =>{
      this.publ= resp;
      console.log('Publisher retrieved successfully:', this.publ)
    }, error => {
      console.error('Error retrieving Publisher:', error);
    });
  }
  deletePub(pubId:Number) {
    const url = 'http://localhost:8080/pubs/deletePublishers/' + pubId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Publisher deleted successfully');
      this.fetchAllPublisher()
    }, error => {
      console.error('Error deleting Publisher:', error);
    });
  }
  
}
