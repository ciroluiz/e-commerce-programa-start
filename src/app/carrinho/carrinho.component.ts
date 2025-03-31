import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: false,
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce(
      (totalCarrinho, item) => totalCarrinho + item.preco * item.quantidade,
      0
    );
  }

  removerDoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerDoCarrinho(produtoId);
  }

  comprar() {
    alert('Compra realizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/produtos']);
  }
}
