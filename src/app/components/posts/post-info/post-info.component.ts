import { Component, OnInit } from '@angular/core';
import {IPost} from '../../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post: IPost;

  constructor(private route: Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {
      this.post = this.route.getCurrentNavigation().extras.state as IPost
    });
  }

  ngOnInit(): void {
  }

}
