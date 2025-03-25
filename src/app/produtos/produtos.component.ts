import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }
}
