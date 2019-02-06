import { Injectable } from '@angular/core';
import { Post } from './models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = []
  }

  getAllPosts() {
    return this.arrPosts;
  }

  agregarPosts(pPost: Post) {
    this.arrPosts.push(pPost);
  }

  getPostByCategoria(pCategoria: string): Post[] {
    return this.arrPosts.filter(item => item.categoria == pCategoria);
  }

}
