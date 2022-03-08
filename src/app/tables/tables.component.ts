import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService} from './../posts.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public posts = Array();
  p:any;
  constructor(private _postService: PostsService) { }

  ngOnInit(): void {
    this._postService.getPosts()
        .subscribe(data => this.posts = data);
  }

}
