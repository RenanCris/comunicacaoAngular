import { Component, OnInit } from '@angular/core';
import { ComunicacaoService } from './service/comunicacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.service.notificarComponentePrincipal.subscribe( () => this.componentPai++);
  }
  
  constructor(private service: ComunicacaoService) {
    
  }

  componentPai: number = 0;

  onAtualizarValor(event){
    this.componentPai++;
  }
}
