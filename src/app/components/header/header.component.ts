import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private patientSelectURL = 'http://127.0.0.1:8080/launch.html?launch=eyJhIjoiMSJ9&iss=https%3A%2F%2Flaunch.smarthealthit.org%2Fv%2Fr4%2Ffhir';

  constructor() { }

  ngOnInit(): void {
  }

  chooseNewPatient(): void {
    window.location.replace(this.patientSelectURL);
  }

}
