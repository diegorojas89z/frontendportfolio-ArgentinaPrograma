import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {
  persona: persona = new persona("","","");
  //myAptitude:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //  this.myAptitude=data.aptitudes;
    //})
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
