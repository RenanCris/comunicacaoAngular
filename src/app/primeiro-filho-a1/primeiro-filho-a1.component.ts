import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComunicacaoService } from '../service/comunicacao.service';

@Component({
  selector: 'app-primeiro-filho-a1',
  templateUrl: './primeiro-filho-a1.component.html',
  styleUrls: ['./primeiro-filho-a1.component.css']
})
export class PrimeiroFilhoA1Component implements OnInit {

  @Output() atualizou: EventEmitter<any> = new EventEmitter();;

  constructor(private service: ComunicacaoService) { 
  }

  ngOnInit() {
  }

  atualizarValorPai(event){
    // this.atualizou.emit(null);
    this.service.notificar();
  }


}
