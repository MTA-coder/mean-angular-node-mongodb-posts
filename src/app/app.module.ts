import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from './post/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
