import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
//import { persona } from 'src/app/model/persona.model';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
//import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-expeduc',
  templateUrl: './expeduc.component.html',
  styleUrls: ['./expeduc.component.scss']
})
export class ExpeducComponent implements OnInit {
  expe: Experiencia[]=[];
  //persona: persona = new persona("","","");
  //educacionList:any;
  //experienceList:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //  this.educacionList=data.education;
    //  this.experienceList=data.experience;
    //})
    //this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else {
      this.isLogged = false;
    }
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data=> {this.expe=data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}

