import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DocsComponent } from "./docs/docs.component";
import { FeaturesComponent } from "./features/features.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogPostComponent } from "./blog/blog-post/blog-post.component";
import { HomeComponent } from "./home/home.component";
import { BlogSinglePostComponent } from "./blog/blog-post/blog-single-post/blog-single-post.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { PostService } from "./post.service";

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    FeaturesComponent,
    BlogComponent,
    BlogPostComponent,
    HomeComponent,
    BlogSinglePostComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
