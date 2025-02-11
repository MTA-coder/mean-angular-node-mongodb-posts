import { HttpClient } from '@angular/common/http';
import { IPost } from './models/post';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IResponse } from './models';

const environment = {
  baseAPIURl: "http://localhost:3000/api"
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts = new BehaviorSubject<IPost[]>([]);

  /**
   *
   */
  constructor(private _http: HttpClient) {
  }

  addNewPost(post: IPost): void {
    const posts = this.posts.value;
    this.createPostsAPI(post);
    posts.push(post);
    this.posts.next([...posts]);
  }

  getPosts(): Observable<IPost[]> {
    return this.posts.asObservable();
  }

  fetchPostsAPI() {
    const endpoint = this.joinURL('post/get');
    this._http.get<IResponse<IPost[]>>(endpoint)
      .subscribe((response: IResponse<IPost[]>) => this.posts.next(response.data));
  }

  createPostsAPI(post: IPost) {
    const endpoint = this.joinURL('post/create');
    this._http.post<any>(endpoint, post)
      .subscribe((response: any) => console.log(`Posted Frontend => ${response}`));
  }

  private joinURL(endpoint: string) {
    return [environment.baseAPIURl, endpoint].join('/');
  }

}
