import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hello: string='Welcome to Angular';
  selectedOption: number=2;
helloParagraph: string ='<p id="demo">Welcome to Angular!</p>';
  constructor() {}

  HandleButtonClick() {
  this.hello= 'Button Clicked';
  }

}
