import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../services/posts-service.service'; 
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  region: 'occidente' | 'oriente' = 'occidente';
  mode : string = ''

  constructor(private postsService: PostsService, private themeService : ThemeService) { }

  ngOnInit(): void {
    this.themeService.mode$.subscribe((mode) => {
      this.mode = mode;
      if (mode == 'occidental') {
        this.region = 'occidente';
        this.posts = this.postsService.getPostsByRegion(this.region);
      } else if (mode == 'oriental') {
        this.region = 'oriente'
        this.posts = this.postsService.getPostsByRegion(this.region);
      }
    });
  }

}
