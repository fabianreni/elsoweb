import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string="Welcome to my Website!";
  introduction: string="My name is Fabian Renata-Timea! You are here to get to know me!";
  me: string="./assets/images/me.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
