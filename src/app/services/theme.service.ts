// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private mode = new BehaviorSubject<string>('occidental');
  
  mode$ = this.mode.asObservable();

  setMode(newMode: string): void {
    this.mode.next(newMode);
  }

  getMode(): string {
    return this.mode.value;
  }
}
