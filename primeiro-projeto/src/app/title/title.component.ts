import { Component, OnChanges, OnInit, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() public title: string = "Bem vindo"
  
  constructor() {}
  ngOnInit() {}

  ngOnChanges(): void {
    console.log("Houve mudanças.")
  }
  ngOnDestroy(): void {
    console.log("Componente destruído")
  }
}
