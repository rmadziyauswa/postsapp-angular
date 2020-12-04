import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SearchComponent } from './Components/search/search.component';
import { PostsListComponent } from './Components/posts-list/posts-list.component';
import { PostListItemComponent } from './Components/post-list-item/post-list-item.component';
import { PostComponent } from './Components/post/post.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PostsListComponent,
    PostListItemComponent,
    PostComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
