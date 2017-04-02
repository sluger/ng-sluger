import { Component, OnInit, Input } from '@angular/core';
import { Project } from "app/models/models";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() { }
  
  ngOnInit() {
  }

}
