import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../post/post.model';
import { SessaoPrincipalComponent } from './sessao-principal.component';

@Injectable({
  providedIn: 'root'
})
export class SessaoPrincipalService {

  baseUrl = 'http://localhost:3001/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }

}
