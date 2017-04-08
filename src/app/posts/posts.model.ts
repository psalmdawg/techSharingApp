export class Posts{
  title:string;
  body: string;
  category:string;
  subjectUrl:string;
  _id?:string;


  constructor(title: string, body: string, category: string, subjectUrl: string, _id:string) {
    this.title = title;
    this.body = body;
    this.category = category;
    this.subjectUrl = subjectUrl;
    this._id = _id;
  }
}
