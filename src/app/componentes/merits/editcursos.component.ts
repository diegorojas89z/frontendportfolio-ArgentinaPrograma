import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-editcursos',
  templateUrl: './editcursos.component.html',
  styleUrls: ['./editcursos.component.scss']
})
export class EditcursosComponent implements OnInit {
  cursos: Cursos = null;

  constructor(
    private cursosS: CursosService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursosS.detail(id).subscribe(
      data =>{
        this.cursos = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursosS.update(id, this.cursos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el cursos o proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
