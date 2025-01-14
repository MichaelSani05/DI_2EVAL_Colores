import { Component, Inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mode: string = ''

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.mode$.subscribe((mode) => {
      this.mode = mode;
      console.log(this.mode);
      this.updateContent(mode);
    });
  }

  private updateContent(mode: string): void {
    if (mode === 'occidental') {
      this.renderer.removeClass(this.document.body, 'oriental');
      this.renderer.addClass(this.document.body, 'occidental');
      console.log('Contenido Occidental');
    } else {
      this.renderer.removeClass(this.document.body, 'occidental');
      this.renderer.addClass(this.document.body, 'oriental');
      console.log('Contenido Oriental');
    }
  }
}
