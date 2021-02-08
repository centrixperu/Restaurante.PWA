import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  marked = false;
  theCheckbox = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
