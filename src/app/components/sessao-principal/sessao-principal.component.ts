import { SessaoPrincipalService } from './sessao-principal.service';
import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-sessao-pricipal',
  templateUrl: './sessao-principal.component.html',
  styleUrls: ['./sessao-principal.component.scss']
})
export class SessaoPrincipalComponent implements OnInit {

  posts: Post[] = []

  constructor(private sessaoPrincipalService: SessaoPrincipalService) { }

  ngOnInit(): void {
    this.sessaoPrincipalService.getPosts().subscribe(posts => {
      this.posts = posts
      console.log(this.posts)
    })
  }

 /*  delete(id: string): void {
    this.sessaoPrincipalService.delete(id)
  } */
}
