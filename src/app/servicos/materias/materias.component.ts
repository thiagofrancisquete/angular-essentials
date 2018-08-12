import { Component, OnInit } from '@angular/core';

import { MateriasService } from './materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  cursos: string[] = [];
  cursosService: MateriasService;

  constructor(private _cursosService: MateriasService) {
    this.cursosService =  _cursosService;
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
