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

  baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient, private sessaoPrincipal: SessaoPrincipalService,
  private router: Router) { }

  salvarPost(post: Post): Observable<Post>{
    console.log(post)
    return this.http.post<Post>(this.baseUrl, post)
  }

  deletePost(id: string): void {
    this.http.delete<string>(`${this.baseUrl}/posts/${id}`).subscribe(() =>{
      this.router.navigate([''])
    })
  }

  salvarImg(img: FormData) {
    this.http.post(`${this.baseUrl}/imagem`, img).subscribe(() => {
      console.log("salvando")
      return false
    })
    return false
  }

  msgSucesso(): void {
    this.router.navigate(['sucesso'])
  }

}
