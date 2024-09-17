import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 40;
  public valorInicial: number = this.counter;

  //Sumar 1 al contador y Restar depende del valor en el html que mandes
  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = this.valorInicial;
  }

}
