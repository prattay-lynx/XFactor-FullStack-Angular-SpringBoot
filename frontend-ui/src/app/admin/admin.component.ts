import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'Admin Management Table'
  admins: any=[]
  //   admins = [{
  //     "id": 1,
  //     "name": "Prattay",
  //     "password": "123456",
  //     "username": "prattay@co.in"
  //   }
  //   ,
  //     {
  //       "id": 2,
  //       "name": "Arinjay",
  //       "password": "pass",
  //       "username": "arinjay@co.in"
  //     }
  //   ,
    
  //     {
  //       "id": 3,
  //       "name": "Soham",
  //       "password": "barca",
  //       "username": "soham@co.in"
  //     }
  //   ,

  //     {"id": 4,
  //     "name": "Arpan",
  //     "password": "909867",
  //     "username": "arpan@co.in"
  //     }
  // ]

  constructor(private router: Router,private http:HttpClient) { }

    totalAdmins: number = 0;
    addAdmins() {
    console.log("addAdmins button clicked!!")
    // Take user to /add-books url
    this.router.navigateByUrl('/add-admins')
    }
  
    ngOnInit(): void {
      this.fetchAllAdmins();
      this.findTotalCount();
    }
  
   findTotalCount() {
    this.http.get<number>("http://localhost:8080/Admins/findTotalAdmins").subscribe(
      (response) => {
        this.totalAdmins = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
    
  findAdmin() {
    console.log("findAdmins button clicked!!")
    this.router.navigateByUrl('/find-admins')
  }

  fetchAllAdmins()
  {
     this.http.get("http://localhost:8080/Admins/getAllAdmins")
    .subscribe(resp =>{
      this.admins = resp;
      console.log('Admins retrieved successfully:', this.admins)
    }, error => {
      console.error('Error retrieving admins:', error);
    });
  }

  deleteAdmin(adminId:Number){
    const url = 'http://localhost:8080/Admins/deleteAdmins/' + adminId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Admin deleted successfully');
      this.fetchAllAdmins()
    }, error => {
      console.error('Error deleting admin:', error);
    });
  }


}
