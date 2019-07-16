import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { HighlightDirective } from './diretivas/highlight.directive';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { DiretivasCustomizadasComponent } from './diretivas/diretivas-customizadas/diretivas-customizadas.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    HighlightDirective,
    HighlightMouseDirective,
    DiretivasCustomizadasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CursosModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
