import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    standalone: true,
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    imports: [NgFor]
})
export class SliderComponent implements OnInit {
    marcas: string[] = ['../../assets/images/logo-1.webp', '../../assets/images/logo-2.webp', '../../assets/images/logo-3.webp', '../../assets/images/logo-4.webp', '../../assets/images/logo-5.webp'];
    
    constructor() {}

    ngOnInit(): void {}
}
