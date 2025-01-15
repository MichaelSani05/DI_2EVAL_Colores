import { Component, Renderer2, ElementRef} from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-main',
  imports: [SliderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  mode: string = ''
  constructor(private renderer: Renderer2, private themeService: ThemeService, private el: ElementRef){}

  ngOnInit(): void {
    this.themeService.mode$.subscribe((mode) => {
      this.mode = mode;
      if (mode == 'occidental') {
        this.updateBackgroundImage("../../assets/images/banner.webp");
      } else if (mode == 'oriental') {
        this.updateBackgroundImage("../../assets/images/banner-3.jpg");
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
