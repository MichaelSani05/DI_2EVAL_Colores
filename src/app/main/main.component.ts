import { Component, Renderer2, ElementRef} from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ThemeService } from '../services/theme.service';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [SliderComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  mode: string = ''
  courses: Course[] = [];

  constructor(private renderer: Renderer2, private themeService: ThemeService, private el: ElementRef, private courseService: CourseService){}

  ngOnInit(): void {
    this.themeService.mode$.subscribe((mode) => {
      this.mode = mode;
      if (mode == 'occidental') {
        this.updateBackgroundImage("../../assets/images/banner.webp");
        this.courses = this.courseService.getCoursesByRegion('occidente');
      } else if (mode == 'oriental') {
        this.updateBackgroundImage("../../assets/images/banner-3.jpg");
        this.courses = this.courseService.getCoursesByRegion('oriente');
      }
    });
  }

  updateBackgroundImage(imageUrl: string): void {
    const bannerElement = this.el.nativeElement.querySelector('#banner');
    if (bannerElement) {
      this.renderer.setStyle(
        bannerElement,
        'background-image',
        `url(${imageUrl})`
      );
    } else {
      console.warn('Banner element not found!');
    }
  }

}
