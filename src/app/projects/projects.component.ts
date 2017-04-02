import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonLoaderService } from "app/services/json-loader.service";
import { Project } from "app/models/models";

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private projects: Array<Project>;
  private subProjects: Subscription;

  constructor(private jsonLoaderService: JsonLoaderService) { }

  public ngOnInit() {
    this.subProjects = this.jsonLoaderService.loadJson("/assets/content/projects.json").subscribe(
      (next) => {
        this.projects = <Array<Project>>next;
      }
    )
  }

  public ngOnDestroy() {
    if (this.subProjects) {
      this.subProjects.unsubscribe();
    }
  }
}
