import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public compteur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  displaycomptor(compteur : number){
    this.compteur = compteur;
  }

}
