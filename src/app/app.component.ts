import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title="Bunch of GWAT's! Code Challenge"
  challenge ={
    scope:"SPA allowing users to post about websites, designs for sharing with others",
    features: [
      'Retrieves all previous posts when loaded',
      'Posts listed by newest first',
      'if post has a url include an "iframe" of site',
      'Front-end, backend and single database',
      'client side validated forms to keep site safe'
    ]
  }


}
