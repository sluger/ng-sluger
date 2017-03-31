import { Component, OnInit } from '@angular/core';
import { Person } from './models/models';
import { JsonLoaderService } from "app/services/json-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'app works!';
  private sluger: Person;

  constructor(private jsonLoaderService: JsonLoaderService) {
  }

  public ngOnInit(): void {
    this.jsonLoaderService.loadJson("/assets/data/persons.json").subscribe(
      (next) => {
        this.sluger = <Person>next;
      }
    )
  }
}
