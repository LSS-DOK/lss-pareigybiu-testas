import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss', '../app.component.scss']
})
export class ResultsComponent {
  public firstTryCounter: number = 0;
  public wrongCounter: number = 0;

  constructor(private router : Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
    let state = this.router.getCurrentNavigation()?.extras.state as { firstTryCounter : number, wrongCounter: number };
    this.firstTryCounter = state.firstTryCounter;
    this.wrongCounter = state.wrongCounter;
  }

  ngOnInit() : void {
  }
}
