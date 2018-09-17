import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  cursos: string[] = ['angular', 'react'];
  mostrarCursos: boolean = false;
  constructor() { }
  
  ngOnInit() {
  }
  
  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
