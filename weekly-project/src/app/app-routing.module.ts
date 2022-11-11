import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'home',
    component:HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
