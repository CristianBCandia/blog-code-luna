import { SucessoComponent } from './components/sucesso/sucesso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPostagemComponent } from './components/post/registrar-postagem/registrar-postagem.component';
import { SessaoPrincipalComponent } from './components/sessao-principal/sessao-principal.component';

const routes: Routes = [
{
  path: '',
  component: SessaoPrincipalComponent
},
{
  path: 'addpost',
  component: RegistrarPostagemComponent
},
{
  path: 'sucesso',
  component: SucessoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
