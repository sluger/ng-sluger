import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('state', [
      state('active', style({
        height: '5rem'
      })),
      state('inactive', style({
        height: '3.5rem'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  private state = 'active';

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  private onWindowScroll($event: Event): void {
    let yPos = this.document.body.scrollTop;
    if (yPos > 50 && this.state == 'active') {
      this.state = 'inactive'
    } else if (yPos < 50 && this.state == 'inactive') {
      this.state = 'active';
    }
  };
}
