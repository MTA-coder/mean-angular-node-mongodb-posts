import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/post/models/post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList$!: Observable<IPost[]>;

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.postList$ = this._postService.getPosts();
  }

}
