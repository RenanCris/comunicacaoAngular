import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primeiro-filho-a',
  templateUrl: './primeiro-filho-a.component.html',
  styleUrls: ['./primeiro-filho-a.component.css']
})
export class PrimeiroFilhoAComponent implements OnInit {

  @Output() atualizou: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAtualizarValor(event){
    this.atualizou.emit(null);
  }

}
