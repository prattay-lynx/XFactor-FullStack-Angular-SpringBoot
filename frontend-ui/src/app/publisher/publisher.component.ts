import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  totalPubs: number = 0;
  title = 'Publisher Management Table'
  publ: any = [];

  isBlue = true
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublisher();
    this.findTotalCount();
  }

  addPub() {
  console.log("addPublisher button clicked!!")
  // Take user to /add-publisher url
  this.router.navigateByUrl('/add-pub')
  }

  findTotalCount() {
    this.http.get<number>("http://localhost:8080/pubs/findTotalPublishers").subscribe(
      (response) => {
        this.totalPubs = response;
      },
      (error) => {
        console.log(error);
      }
    );
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
