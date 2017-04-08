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
  appState:string;
  activeKey: string;
  @ViewChild('f') signupForm: NgForm;
  constructor(private postsService: PostsService){}


  ngOnInit() {

    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    })
  }

  changeState(state, key){
    console.log('Changing state to: '+state);
    this.appState = state;
  }

  deletePost(posts){
    console.log("deleting posts")
    this.postsService.deletePost(posts);
    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
      // console.log(posts);
    })
  }


  // this.todoService.delete()

  article = {
    title: " ",
    body: " ",
    subjectUrl: " ",
    category: " ",
    created_at: " "
  };
  submitted = false;


  onSubmit(){

    this.submitted = true;
    this.article.title = this.signupForm.value.title;
    this.article.body = this.signupForm.value.body;
    this.article.subjectUrl = this.signupForm.value.subjectUrl;
    this.article.category = this.signupForm.value.category;

    this.signupForm.reset();

    var newPost =  this.article

    this.postsService.storePosts(newPost)
    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
      // console.log(posts);
    })

    this.appState = 'default';

  }




}
