import { Component } from '@angular/core';

/**
 * Generated class for the MotivatorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'motivator',
  templateUrl: 'motivator.html'
})
export class MotivatorComponent {

  quotes: string[] = [];
  currentQuote: string;

  constructor() {
    this.quotes.push('Hello world');
    this.quotes.push('Goodbye World');
    this.quotes.push('Neither Hello or Goodbye world');
  }

  ngOnInit() {

    this.setRandomQuote();

  }

  setRandomQuote() {

    let randomIndex = Math.floor(Math.random() * this.quotes.length);

    this.currentQuote = this.quotes[randomIndex];

  }

}
