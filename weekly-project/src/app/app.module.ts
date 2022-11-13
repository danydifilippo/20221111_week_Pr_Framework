import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HomePage } from './pages/home/home.page';
import { HttpClientModule } from '@angular/common/http';
import { MusicPage } from './pages/music/music.page';
import { NavbarPage } from './pages/navbar/navbar.page';



@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MusicPage,
    NavbarPage
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


export class AppModule {

}
