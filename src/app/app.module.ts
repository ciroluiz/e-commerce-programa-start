import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent, // Declaração do componente principal
    // Outros componentes declarados aqui
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
  ],
  imports: [
    BrowserModule, // Necessário para aplicações web
    AppRoutingModule, // Importa o módulo de rotas configurado em app-routing.module.ts
    MatSnackBarModule, // Importa o módulo de snackbar do Angular Material
  ],
  // Serviços injetáveis (caso aplicável)
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }, // Define o locale padrão
  ],
  bootstrap: [AppComponent], // Componente inicial
})
export class AppModule {}
