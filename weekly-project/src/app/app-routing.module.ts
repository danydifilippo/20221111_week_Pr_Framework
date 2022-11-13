import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
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
    component:HomePage,
    canActivate:[AuthGuard]
  },
  {
    path:'music',
    component:MusicPage,
    canActivate:[AuthGuard]
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
