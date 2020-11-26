import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classroom-ui';


  constructor(private router: Router) {
  }

  public registerStudent(): void {
    this.router.navigate(['classroom']);
  }
}
