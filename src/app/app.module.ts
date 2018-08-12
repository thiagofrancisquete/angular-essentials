import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputPropertyComponent } from './iniciais/output-property/output-property.component';
import { MeuPrimeiroComponent } from './iniciais/meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './iniciais/meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './iniciais/data-binding/data-binding.component';
import { InputPropertyComponent } from './iniciais/input-property/input-property.component';
import { CicloComponent } from './iniciais/ciclo/ciclo.component';
import { CursosModule } from './iniciais/cursos/cursos.module';
import { MeuFormModule } from './iniciais/meu-form/meu-form.module';
import { MateriasComponent } from './servicos/materias/materias.component';
import { MateriasService } from './servicos/materias/materias.service';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    MateriasComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [MateriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
