import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularDayOne';
  pageTitle: string = 'Angular Data Binding Practice';
  a: number = 5;
  b: number = 7;

  imageUrl: string =
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
  disable: boolean = false;

  toggleChange() {
    this.disable = !this.disable;
  }
  handleButtonClick() {
    console.log('You Clicked me');
  }
}
