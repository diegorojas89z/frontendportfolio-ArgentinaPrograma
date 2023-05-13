import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-merits',
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss']
})
export class MeritsComponent implements OnInit {
  persona: persona = new persona("","","");
  //myMerits:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //  this.myMerits=data.archivements;
    //})
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
