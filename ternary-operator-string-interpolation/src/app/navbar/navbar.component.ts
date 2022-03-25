import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  loggedIn = false;

  logMeIn() {
    this.loggedIn = !this.loggedIn;
  }

  ngOnInit(): void {}
}
