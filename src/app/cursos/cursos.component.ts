import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;

  cursos: string[] = ['Java', 'Ext Js', 'Angular'];
  constructor() {
    this.nomePortal = 'http://loiane.training';

    for (let i = 0; i  < this.cursos.length; i++) {
      const curso = this.cursos[i];
    }
  }
}
