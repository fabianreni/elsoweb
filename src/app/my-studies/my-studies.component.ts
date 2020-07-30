import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-studies',
  templateUrl: './my-studies.component.html',
  styleUrls: ['./my-studies.component.css']
})
export class MyStudiesComponent implements OnInit {
  graduated: string="I graduated et Sapientia."
  sapi: string="./assets/images/sapi.jpg";
  highscool: string="My High School was Bolyai."
  bolyai: string="./assets/images/bolyai.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
