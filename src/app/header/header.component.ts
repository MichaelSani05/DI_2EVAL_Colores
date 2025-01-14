import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private isOccidental: boolean = true;

  constructor(private renderer: Renderer2) {}

  toggleTheme(): void {
    this.isOccidental = !this.isOccidental;

    if (this.isOccidental) {
      this.renderer.removeClass(document.body, 'oriental');
      this.renderer.addClass(document.body, 'occidental');
    } else {
      this.renderer.removeClass(document.body, 'occidental');
      this.renderer.addClass(document.body, 'oriental');
    }
  }
}
