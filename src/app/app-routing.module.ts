import { SessaoPricipalComponent } from './views/sessao-pricipal/sessao-pricipal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPostagemComponent } from './views/registrar-postagem/registrar-postagem.component';

const routes: Routes = [
{
  path: '',
  component: SessaoPricipalComponent
},
{
  path: 'addpost',
  component: RegistrarPostagemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
