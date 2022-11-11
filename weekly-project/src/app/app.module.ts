import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HomePage } from './pages/home/home.page';
import { MoviesPage } from './pages/movies/movies.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MoviesPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
