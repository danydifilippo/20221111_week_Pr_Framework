import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarPage } from './pages/navbar/navbar.page';
import { HomePage } from './pages/home/home.page';
import { MusicPage } from './pages/music/music.page';



@NgModule({
  declarations: [
    AppComponent,
    NavbarPage,
    HomePage,
    MusicPage
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
