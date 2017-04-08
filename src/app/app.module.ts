import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Pipe, PipeTransform } from '@angular/core';



import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
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
