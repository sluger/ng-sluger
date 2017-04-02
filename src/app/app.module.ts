import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { Ng2PageScrollModule, PageScrollService } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { JsonLoaderService } from "app/services/json-loader.service";
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './projects/project/project.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2PageScrollModule.forRoot(),

  ],
  providers: [
    JsonLoaderService,
    PageScrollService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
