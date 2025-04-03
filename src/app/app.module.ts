import { LOCALE_ID, NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent, // Declaração do componente principal
    // Outros componentes declarados aqui
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
    BarraPesquisaComponent,
  ],
  imports: [
    BrowserModule, // Necessário para aplicações web
    AppRoutingModule, // Importa o módulo de rotas configurado em app-routing.module.ts
    MatSnackBarModule, // Importa o módulo de snackbar do Angular Material
    FormsModule, // Importa o módulo de formulários do Angular
  ],
  // Serviços injetáveis (caso aplicável)
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }, // Define o locale padrão
  ],
  bootstrap: [AppComponent], // Componente inicial
})
export class AppModule {}
