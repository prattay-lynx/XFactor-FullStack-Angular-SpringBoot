import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { StudentComponent } from './student/student.component';
import { AuthorComponent } from './author/author.component';
import { AdminComponent } from './admin/admin.component';
import { PublisherComponent } from './publisher/publisher.component';
import { LoansComponent } from './loans/loans.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule  } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPubComponent } from './add-pub/add-pub.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { FindBooksComponent } from './find-books/find-books.component';
import { FindAdminsComponent } from './find-admins/find-admins.component';
import { FindAuthorsComponent } from './find-authors/find-authors.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    StudentComponent,
    AuthorComponent,
    AdminComponent,
    PublisherComponent,
    LoansComponent,
    SidenavComponent,
    HomeComponent,
    AddBooksComponent,
    AddAdminsComponent,
    AddLoansComponent,
    AddPubComponent,
    AddAuthorsComponent,
    AddStudentsComponent,
    FindBooksComponent,
    FindAdminsComponent,
    FindAuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
