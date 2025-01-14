import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mode: string = ''

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.mode$.subscribe((mode) => {
      this.mode = mode;
      console.log(this.mode);
    });
  }

  toggleTheme(): void {
    const currentMode = this.themeService.getMode();
    const newMode = currentMode === 'occidental' ? 'oriental' : 'occidental';
    this.mode = newMode;
    this.themeService.setMode(newMode);
  }
}
