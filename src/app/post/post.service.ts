import { IPost } from './models/post';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts = new BehaviorSubject<IPost[]>([]);


  addNewPost(post: IPost): void {
    const posts = this.posts.value;
    posts.push(post);
    this.posts.next([...posts]);
  }

  getPosts(): Observable<IPost[]> {
    return this.posts.asObservable();
  }

}
