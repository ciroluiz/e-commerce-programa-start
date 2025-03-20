import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, // Declaração do componente principal
    // Outros componentes declarados aqui
    HeaderComponent, FooterComponent, // Declaração do componente de cabeçalho e rodapé
  ],
  imports: [
    BrowserModule, // Necessário para aplicações web
    AppRoutingModule, // Importa o módulo de rotas configurado em app-routing.module.ts
  ],
  providers: [], // Serviços injetáveis (caso aplicável)
  bootstrap: [AppComponent], // Componente inicial
})
export class AppModule {}
