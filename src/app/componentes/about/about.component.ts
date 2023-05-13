import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");

  //miAbout:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //  this.miAbout=data;
    //})
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
