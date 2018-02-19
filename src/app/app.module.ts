import { CursosModule } from './cursos/cursos/cursos.module';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
