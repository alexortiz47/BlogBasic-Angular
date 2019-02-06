import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPosts: Post[];

  constructor(private postsService: PostsService) {
    this.listaPosts = this.postsService.getAllPosts();
  }

  ngOnInit() {
  }

}
