import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { NavbarPage } from './pages/navbar/navbar.page';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'navbar',
    component:NavbarPage
  },
  {
    path:'**',
    redirectTo:'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
