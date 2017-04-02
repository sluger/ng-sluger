import { Component, OnInit } from '@angular/core';
import { Person } from './models/models';
import { JsonLoaderService } from "app/services/json-loader.service";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  public ngOnInit(): void {
  }
}
