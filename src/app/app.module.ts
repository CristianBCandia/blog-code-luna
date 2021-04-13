import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PosterComponent } from './components/poster/poster.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrarPostagemComponent } from './components/post/registrar-postagem/registrar-postagem.component';
import { MenuNoticiasComponent } from './components/menu-noticias/menu-noticias.component';
import { SessaoPrincipalComponent } from './components/sessao-principal/sessao-principal.component';
import { SucessoComponent } from './components/sucesso/sucesso.component';

@NgModule({
declarations: [
    AppComponent,
    HeaderComponent,
    PosterComponent,
    SessaoPrincipalComponent,
    FooterComponent,
    MenuNoticiasComponent,
    RegistrarPostagemComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
