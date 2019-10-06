import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  openDetails: boolean;
  ngOnInit() {
    this.openDetails = false;
  }

  toggleTab(){
    this.openDetails = !this.openDetails;
  }
  anyButtonClicked() {
    return this.openDetails;
  }
}
