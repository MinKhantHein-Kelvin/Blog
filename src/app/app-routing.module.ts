import { SettingComponent } from './admin/dashboard/setting/setting.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  { path : '' , component : HomeComponent,
    children:[
      {
        path : 'dashboard' , component : DashboardComponent,
      },
      {
        path : 'posts' , component : PostsComponent,
      },
      {
        path : 'comments' , component : CommentsComponent,
      },
      {
        path : 'pages' , component : PagesComponent,
      },
      {
        path : 'setting' , component : SettingComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
