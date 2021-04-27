import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../post/post.model';

@Injectable({
  providedIn: 'root'
})
export class SessaoPrincipalService {

  baseUrl = 'http://localhost:8080/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }

/*   delete(id: string): void{
    this.posterService.deletePost(id)
  } */
}
