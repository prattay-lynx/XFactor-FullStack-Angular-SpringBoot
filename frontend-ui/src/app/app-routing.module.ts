import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AddPubComponent } from './add-pub/add-pub.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { FindBooksComponent } from './find-books/find-books.component';
import { FindAdminsComponent } from './find-admins/find-admins.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  
  {
    path: "admins",
    component: AdminComponent
  },

  {
    path: "students",
    component: StudentComponent
  },

  {
    path: "books",
    component: BooksComponent
  },

    {
    path: "authors",
    component: AuthorComponent
  },
    
  {
    path: "publishers",
    component: PublisherComponent
  },

  {
    path: "loans",
    component: LoansComponent
  },
  {
    path: 'add-books',
    component: AddBooksComponent,
  },
  {
    path: 'add-admins',
    component: AddAdminsComponent,
  },
  {
    path: 'add-loans',
    component: AddLoansComponent,
  },
  {
    path: 'add-pub',
    component: AddPubComponent,
  },
  {
    path: 'add-authors',
    component: AddAuthorsComponent,
  },
  {
    path: 'add-students',
    component: AddStudentsComponent,
  },
  {
    path: 'find-books',
    component: FindBooksComponent,
  },
  {
    path: 'find-admins',
    component: FindAdminsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
