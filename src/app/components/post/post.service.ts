import { SessaoPrincipalService } from './../sessao-principal/sessao-principal.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:8080/posts'

  constructor(private http: HttpClient, private sessaoPrincipal: SessaoPrincipalService,
  private router: Router) { }

  salvarPost(post: Post): Observable<Post>{
    console.log(post)
    return this.http.post<Post>(this.baseUrl, post)
  }

  msgSucesso(): void {
    this.router.navigate(['sucesso'])
  }
}
