import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {


  ngOnInit() {
    console.log('criar curso carregado');
  }
}
