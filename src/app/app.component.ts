import { Component, OnInit } from '@angular/core';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mean-angular-node-mongodb-posts';

  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {
  }
}
