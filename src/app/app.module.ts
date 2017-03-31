import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JsonLoaderService } from "app/services/json-loader.service";
import { NavbarComponent } from './navbar/navbar.component';
import { ContentsComponent } from './contents/contents.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    JsonLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
