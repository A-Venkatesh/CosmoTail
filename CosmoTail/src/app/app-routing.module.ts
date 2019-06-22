import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:'registration', component: UserComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'logIn', component: LogInComponent},
  {path:'',component: HomeComponent},
  {path:'**',component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserComponent,HomeComponent,ErrorPageComponent,AboutUsComponent,LogInComponent];
