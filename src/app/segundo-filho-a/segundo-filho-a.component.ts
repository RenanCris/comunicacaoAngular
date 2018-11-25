import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-segundo-filho-a',
  templateUrl: './segundo-filho-a.component.html',
  styleUrls: ['./segundo-filho-a.component.css']
})
export class SegundoFilhoAComponent implements OnInit {

  @Output() atualizou: EventEmitter<any>;

  constructor() { 
    this.atualizou = new EventEmitter();
  }

  ngOnInit() {
  }

  atualizarValorPai(){
    this.atualizou.emit(null);
  }

}
