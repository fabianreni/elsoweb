import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  email:string="Email";
  skype:string="Skype";
  email_name:string="renata_timi98@yahoo.com"
  skype_name:string="renata_timi98"
  constructor() { }

  ngOnInit(): void {
  }

}
