import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() public resultEmit =  new EventEmitter<number>();

  public compteur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() : void {
    this.compteur++;
    this.resultEmit.emit(this.compteur);
  }

  decrement() : void {
    this.compteur--;
    this.resultEmit.emit(this.compteur);
  }
}
