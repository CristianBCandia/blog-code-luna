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
    corpo: '',
    capa: '',
    perfil: ''
  }

  constructor(private postService: PostService, private router: Router) { }

    ngOnInit(): void {
      document.getElementById('imgPerfil').change(function () {
        const file = this.[0].files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = function () {
          document.getElementById('img').setAttribute('src', fileReader.result)
        }
        fileReader.readAsDataURL(file)
      })
    }

    addPost(): void {
      console.log(this.post.titulo)
      console.log(this.post.corpo)
      console.log(this.post.perfil)
      console.log(this.post.capa)
      this.postService.salvarPost(this.post).subscribe(() => {
        this.postService.msgSucesso()
      })
    }

    
    /* guardarImagemCapa(event: any) {
      event.preventDefault()
      if(event.target.files && event.target.files[0]){
        alert("Evento -> "+event.target.files[0])
        const img = event.target.files[0]
        this.post.capa = img.name
        const formData = new FormData()
        formData.append('img', img)
        this.postService.salvarImg(formData)
      }
      return false
    } */

    guardarImagemPerfil(event: any){
       event.preventDefault()
      if(event.target.files && event.target.files[0]){
        const img = event.target.files[0]
        this.post.perfil = img.name
        const formData = new FormData()
        formData.append('img', img)
        this.postService.salvarImg(formData)
      }
      return false
    }

  }


