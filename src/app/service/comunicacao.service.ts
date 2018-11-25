import { Output, EventEmitter } from "@angular/core";

export class ComunicacaoService {

  @Output() notificarComponentePrincipal: EventEmitter<any> = new EventEmitter();

  notificar() {
    this.notificarComponentePrincipal.emit(null);
  }

}