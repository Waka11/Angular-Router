import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogSinglePostComponent } from './blog/blog-post/blog-single-post/blog-single-post.component';

const routes: Routes = [
  { path: " ", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "features", component: FeaturesComponent },
  { path: "docs", component: DocsComponent },
  { path: "blog", component: BlogComponent },
  { path: "blog/:id/:title/:content", component: BlogSinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
