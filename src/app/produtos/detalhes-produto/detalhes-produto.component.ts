import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../../produtos';
import { ProdutosService } from '../../produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: false,
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css',
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }
}
