import { Injectable } from '@angular/core';

@Injectable()
export class MateriasService {

  getCursos() {
    return ['angular', 'nodejs', 'sass'];
  }
}
