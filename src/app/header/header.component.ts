import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
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
}
