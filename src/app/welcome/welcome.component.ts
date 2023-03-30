import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss', '../app.component.scss']
})
export class WelcomeComponent {

  constructor(private router: Router) {}
  go() {
    this.router.navigateByUrl('klausimai/', { state: { welcomeShown: true }});
  }
}
