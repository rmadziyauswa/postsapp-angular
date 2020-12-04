import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [
    {
      userId :1,
      Id:1,
      title:'Title 1',
      body:'My Body'
    },
    {
      userId :1,
      Id:2,
      title:'Title 2',
      body:'My Body'
    },
    {
      userId :1,
      Id:3,
      title:'Title 3',
      body:'My Body'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
