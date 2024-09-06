import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'login', component: LoginComponent,  },
  { path:'home', component: HomeComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
