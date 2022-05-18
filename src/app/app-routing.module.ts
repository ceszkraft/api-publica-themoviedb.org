import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { Top20Component } from './pages/top20/top20.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

const routes: Routes = [
  {path: "most-popular", component: Top20Component},
  {path: "upcoming", component: UpcomingComponent},
  {path: "top-rated", component: TopRatedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
