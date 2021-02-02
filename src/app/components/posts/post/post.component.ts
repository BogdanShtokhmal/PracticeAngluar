import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
  }

  ChosePost(): void {
    this.route.navigate([this.post.id], {
      relativeTo: this.activatedRoute,
      state: this.post
    });
  }
}


