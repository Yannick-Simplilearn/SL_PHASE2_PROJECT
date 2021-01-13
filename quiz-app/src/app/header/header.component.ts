import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  helpStatus: boolean = false;
  changeHelpStatus() {
    this.helpStatus = !this.helpStatus;
    console.log(this.helpStatus);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
