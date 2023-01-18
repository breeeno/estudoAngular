import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck,  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{ valor}}
  <button (click)="adicionar()">Adicionar</button>
  <br>
  <button (click)="destruirComponente()">Destruir componente</button>
  <br>
  <app-title *ngIf="destruir "></app-title>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  
  public destruir: boolean = true;

  constructor() { }
  
  public valor: number = 1;

  public adicionar(): number {
    return this.valor += 1;
  }

  public destruirComponente() {
    this.destruir = false;
  }

  ngOnInit(): void {
     console.log("Método ngOnInit")
  };
  ngDoCheck(): void {
    console.log("Método ngDoCheck")
  };
  ngAfterContentInit(): void {
    console.log("Método ngAfterContentInit")
  };
  ngAfterContentChecked(): void {
    console.log("Método ngAfterContentChecked")
  };
  ngAfterViewInit(): void {
    console.log("Método ngAfterViewInit")
  };
  ngAfterViewChecked(): void {
    console.log("Método ngAfterViewChecked")
  }
}