import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pub',
  templateUrl: './add-pub.component.html',
  styleUrls: ['./add-pub.component.css']
})
export class AddPubComponent implements OnInit {
  pubsForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private rout:Router,private http:HttpClient) {
    this.pubsForm = this.formbuilder.group(
      {
      // id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required,]],
      name: ['', [Validators.required,]],
      phone: ['', [Validators.required,Validators.pattern('[0-9]+')]],
      }
    )
  }

  ngOnInit(): void {
  }

  savePub()
  {
    // Make Post call to request url http://localhost:8081/students/saveStudents
    let pubData = this.pubsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/pubs/savePublishers',pubData)
    .subscribe(response => {
      console.log('Publisher saved to DB', response)
      this.rout.navigateByUrl('/publishers')
    }, error =>{
      console.error("Error in Publisher save", error)
    }
    );
  }

}
