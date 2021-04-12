import { MenuNoticiasComponent } from './views/menu-noticias/menu-noticias.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { PosterComponent } from './views/poster/poster.component';
import { SessaoPricipalComponent } from './views/sessao-pricipal/sessao-pricipal.component';
import { FooterComponent } from './views/footer/footer.component';
import { RegistrarPostagemComponent } from './views/registrar-postagem/registrar-postagem.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PosterComponent,
    SessaoPricipalComponent,
    FooterComponent,
    MenuNoticiasComponent,
    RegistrarPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
