import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
    // console.log(newPost)
    this.http.post(this.postUrl , newPost)
    .subscribe(data => {
      console.log('ok');
    }, error => {
      console.log(JSON.stringify(error.json()));
    });
  }


  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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
