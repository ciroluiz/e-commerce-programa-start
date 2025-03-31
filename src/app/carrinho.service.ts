import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerDoCarrinho(produtoId: number) {
    const index = this.itens.findIndex((item) => item.id === produtoId);
    if (index !== -1) {
      this.itens.splice(index, 1); // Remove apenas o primeiro item encontrado
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
      location.reload(); // Atualiza a página para refletir a remoção
    }
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
