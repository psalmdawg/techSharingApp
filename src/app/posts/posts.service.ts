import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PostsService {
  private postUrl = '/api';

  constructor (private http: Http) {}

  getPosts(): Observable<Posts[]> {
    return this.http.get(this.postUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  }


  storePosts(newPost){

    this.http.post(this.postUrl , newPost)
    .subscribe(data => {
    }, error => {
      console.log(JSON.stringify(error.json()));
    });
  }

  deletePost(postId: String) {
    this.http.delete(this.postUrl + '/' + postId)
    .toPromise()
    .then(response => response.json() as String)
    .catch(this.handleError);
    // console.log('delete post')
  }

  // deleteContact(delContactId: String): Promise<String> {
      // return this.http.delete(this.contactsUrl + '/' + delContactId)




  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
