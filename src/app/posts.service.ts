import { Injectable } from '@angular/core';
import { Post } from './models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      new Post('Titulo Post1', 'Texto del post1', 'Autor del post1', 'https://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', 'Categoría del post1'),
      new Post('Titulo Post2', 'Texto del post2', 'Autor del post2', 'https://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', 'Categoría del post2'),
      new Post('Titulo Post3', 'Texto del post3', 'Autor del post3', 'https://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', 'Categoría del post3'),
      new Post('Titulo Post4', 'Texto del post4', 'Autor del post4', 'https://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', 'Categoría del post4'),
    ]
  }

  getAllPosts() {
    return this.arrPosts;
  }

  agregarPosts(pPost: Post) {
    this.arrPosts.push(pPost);
  }

}
