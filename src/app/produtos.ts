export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeDisponivel: number;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export const produtos: IProduto[] = [
  {
    id: 1,
    descricao: 'Mouse gamer',
    preco: 439.0,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './mouse-3.jpg',
  },
  {
    id: 2,
    descricao: 'Monitor muito bom',
    preco: 1200.5,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './monitor-1.jpg',
  },
  {
    id: 3,
    descricao: 'Teclado excelente',
    preco: 749.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './teclado-1.jpg',
  },
  {
    id: 4,
    descricao: 'Fone para quem joga FPS',
    preco: 599.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './fone-de-ouvido-2.jpg',
  },
  {
    id: 5,
    descricao: 'Fone de ouvido',
    preco: 299.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './fone-de-ouvido-1.jpg',
  },
  {
    id: 6,
    descricao: 'Fone de ouvido bom',
    preco: 399.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './fone-de-ouvido-3.jpg',
  },
  {
    id: 7,
    descricao: 'HD 1TB',
    preco: 499.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './hd.jpg',
  },
  {
    id: 8,
    descricao: 'Combo de placa de vídeos',
    preco: 18449.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './placa-video.jpg',
  },
  {
    id: 9,
    descricao: 'Processador Ryzen',
    preco: 1000,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './processador.jpg',
  },
  {
    id: 10,
    descricao: 'Notebook bom',
    preco: 2500,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './laptop-1.jpg',
  },
  {
    id: 11,
    descricao: 'Notebook excelente',
    preco: 4500,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 10,
    imagem: './laptop-2.jpg',
  },
  {
    id: 12,
    descricao: 'Mouse barato',
    preco: 20,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 20,
    imagem: './mouse-1.png',
  },
  {
    id: 13,
    descricao: 'Mouse ótimo',
    preco: 200,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 20,
    imagem: './mouse-2.jpg',
  },
  {
    id: 14,
    descricao: 'Mouse pequeno',
    preco: 50,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 20,
    imagem: './mouse-4.jpg',
  },
  {
    id: 15,
    descricao: 'Teclado bom',
    preco: 159.99,
    descricaoPreco: 'À vista no PIX',
    quantidadeDisponivel: 20,
    imagem: './teclado-2.jpg',
  },
];
