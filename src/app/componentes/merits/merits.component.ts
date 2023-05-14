import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-merits',
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss']
})
export class MeritsComponent implements OnInit {
  cursos: Cursos[] = [];

  constructor(private cursosS: CursosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarCurso();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarCurso(): void{
    this.cursosS.lista().subscribe(
      data =>{
        this.cursos = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.cursosS.delete(id).subscribe(
        data => {
          this.cargarCurso();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
