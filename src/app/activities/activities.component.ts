import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent implements OnInit{

  constructor(private renderer : Renderer2, private el : ElementRef){}

  ngOnInit(){
    
  }
}
