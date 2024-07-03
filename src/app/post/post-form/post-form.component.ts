import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/post/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm!: FormGroup;

  get f() {
    return this.postForm.controls;
  }

  constructor(
    private _fb: FormBuilder,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.postForm = this._fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  addPost() {
    if (this.postForm.valid) {
      const post = this.postForm.value as IPost;
      this._postService.addNewPost(post);
    }
  }

  clearForm() {
    this.postForm.markAsPristine();
    this.postForm.markAsUntouched();
    this.postForm.updateValueAndValidity();
    this.postForm.reset();
  }

}
