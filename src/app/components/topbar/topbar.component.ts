import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  menuItems: any[];

  constructor() {
    this.menuItems = [
      { path: '/home', title: 'Home'},
      { path: '/projects', title: 'Projects'},
      { path: '/skills', title: 'Skills'},
      { path: '/contact', title: 'Contact'},
    ];
  }

  ngOnInit() {
  }

}
