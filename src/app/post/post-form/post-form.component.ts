import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/models/post';

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

  constructor(private _fb: FormBuilder) { }

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
    }
  }

  clearForm() {
    this.postForm.markAsPristine();
    this.postForm.markAsUntouched();
    this.postForm.updateValueAndValidity();
    this.postForm.reset();
  }

}
