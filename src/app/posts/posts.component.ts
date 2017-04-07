import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from './posts.service';
import { NgForm } from '@angular/forms';
import { Posts } from './posts.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  posts:Posts[];
  @ViewChild('f') signupForm: NgForm;
  constructor(private postsService: PostsService){}

  ngOnInit() {
    // console.log('somethings')
    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    })
  }

  article = {
    title: " ",
    body: " ",
    subjectUrl: " ",
    category: " ",
    created_at: " "
  };
  submitted = false;


  onSubmit(){
    const created_at = new Date().toString();

    this.submitted = true;
    this.article.title = this.signupForm.value.title;
    this.article.body = this.signupForm.value.body;
    this.article.subjectUrl = this.signupForm.value.subjectUrl;
    this.article.category = this.signupForm.value.category;
    this.article.created_at = created_at;
    this.signupForm.reset();

    var newPost =  this.article

    this.postsService.storePosts(newPost)

  }


}
