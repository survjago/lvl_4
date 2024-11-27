import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-errorpage',
  standalone: true,
  imports: [],
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.css'
})
export class ErrorpageComponent {

  constructor(public route: Router ) {}


  return() {
    this.route.navigate(['/contact'])
  }
}
