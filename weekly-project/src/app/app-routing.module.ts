import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomePage } from './pages/home/home.page';
import { MusicPage } from './pages/music/music.page';
import { NavbarPage } from './pages/navbar/navbar.page';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'home',
    component:HomePage
  },
  {
    path:'music',
    component:MusicPage
  },
  {
    path:'navbar',
    component:NavbarPage,
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
