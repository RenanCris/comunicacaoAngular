import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeiroFilhoAComponent } from './primeiro-filho-a/primeiro-filho-a.component';
import { PrimeiroFilhoA1Component } from './primeiro-filho-a1/primeiro-filho-a1.component';
import { SegundoFilhoAComponent } from './segundo-filho-a/segundo-filho-a.component';
import { ComunicacaoService } from './service/comunicacao.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroFilhoAComponent,
    PrimeiroFilhoA1Component,
    SegundoFilhoAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComunicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
