import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mode: string = ''
  logoImage : string = ''

  constructor(private renderer: Renderer2, private themeService: ThemeService, private el: ElementRef) {}

  ngOnInit(): void {
    this.themeService.mode$.subscribe((mode) => {
      this.mode = mode;
      console.log(this.mode);
      if (mode == 'occidental') {
        this.logoImage = '../../assets/images/Mindly.png'
      } else if (mode == 'oriental') {
        this.logoImage = '../../assets/images/Mindly-2.png'
      }
    });
  }

  toggleTheme(): void {
    const currentMode = this.themeService.getMode();
    const newMode = currentMode === 'occidental' ? 'oriental' : 'occidental';
    this.mode = newMode;
    this.themeService.setMode(newMode);
  }

  headerCompleto(){
    const headerElement = this.el.nativeElement.querySelector('#header');
    if (headerElement) {
      this.renderer.setStyle(
        headerElement,
        'background-color',
        `var(--background-color-2)`
      );
    } else {
      console.warn('Banner element not found!');
    }
  }

  quitarHeader(){
    const headerElement = this.el.nativeElement.querySelector('#header');
    if (headerElement) {
      this.renderer.setStyle(
        headerElement,
        'background-color',
        `none`
      );
    } else {
      console.warn('Banner element not found!');
    }
  }

}
