import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.models';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newPost: Post;


  constructor(private postsServices: PostsService) {
    this.newPost = new Post('', '', '', '', '');
  }

  ngOnInit() {
  }

  guardarNewPost() {
    this.postsServices.agregarPosts(this.newPost);
  }
}
