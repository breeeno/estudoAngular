import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Breno";
  public idade: number = 20;
  public checkdisabled: boolean = false
  public imgSrc: string = "https://conteudo.imguol.com.br/c/entretenimento/09/2021/11/22/valorant-chamber-1637604989645_v2_900x506.jpg"
  public imgTitle: string = "chamber"
  public alt: string = "chamber"


  constructor (){}
  
  ngOnInit(): void {
    console.log("Funcionou!")
  }

}
