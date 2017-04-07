export class Posts{
  title:string;
  body: string;
  category:string;
  subjectUrl:string;


  constructor(title: string, body: string, category: string, subjectUrl: string) {
    this.title = title;
    this.body = body;
    this.category = category;
    this.subjectUrl = subjectUrl;
  }
}
