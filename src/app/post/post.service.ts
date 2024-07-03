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
    posts.push(post);
    this.posts.next([...posts]);
  }

  getPosts(): Observable<IPost[]> {
    return this.posts.asObservable();
  }

  fetchPostsAPI() {
    const endpoint = this.joinURL('posts');
    this._http.get<IResponse<IPost[]>>(endpoint)
      .subscribe((response: IResponse<IPost[]>) => this.posts.next(response.data));
  }

  private joinURL(endpoint: string) {
    return [environment.baseAPIURl, endpoint].join('/');
  }

}
