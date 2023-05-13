import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  persona: persona = new persona("","","");
  //miPorfolio:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos().subscribe(data =>{
    //  console.log(data);
    //  this.miPorfolio=data;
    //});
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
