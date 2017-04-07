import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NgForm } from '@angular/forms';

// import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
// import { PostsFormComponent } from './posts-form/posts-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    // PostsFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // NgForm
    // ReactiveFormsModule
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
