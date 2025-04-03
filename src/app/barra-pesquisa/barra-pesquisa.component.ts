import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  standalone: false,
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css',
})
export class BarraPesquisaComponent {
  descricao: string = '';

  constructor(private router: Router) {}

  pesquisar() {
    // Verifica se há uma descrição para pesquisar
    if (this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }
    // Se não houver descrição, redireciona para a lista completa de produtos
    this.router.navigate(['produtos']);
  }
}
