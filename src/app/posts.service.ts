import { Injectable } from '@angular/core';
import { Post } from './models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = JSON.parse(localStorage.getItem('posts')) // Recuperamos lo que haya almacenado en el localStorage
  }

  getAllPosts() {
    return this.arrPosts;
  }

  agregarPosts(pPost: Post) {
    this.arrPosts.push(pPost);
    localStorage.setItem('posts', JSON.stringify(this.arrPosts)) // Agrega nuestros post que estan en el array en el local storage
  }

  getPostByCategoria(pCategoria: string): Post[] {
    return this.arrPosts.filter(item => item.categoria == pCategoria);
  }

}
