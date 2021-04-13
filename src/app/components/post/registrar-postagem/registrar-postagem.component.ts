import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-postagem',
  templateUrl: './registrar-postagem.component.html',
  styleUrls: ['./registrar-postagem.component.scss']
})
export class RegistrarPostagemComponent implements OnInit {

  post: Post = {
    titulo: '',
    corpo: ''
  }

  constructor(private postService: PostService, private router: Router) { }

    ngOnInit(): void {
    }

    addPost(): void {
      this.postService.salvarPost(this.post).subscribe(() => {
        this.postService.msgSucesso()
      })
    }

  }


