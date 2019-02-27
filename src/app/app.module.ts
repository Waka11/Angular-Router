import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';
import { BlogSinglePostComponent } from './blog/blog-post/blog-single-post/blog-single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    FeaturesComponent,
    BlogComponent,
    BlogPostComponent,
    HomeComponent,
    BlogSinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
