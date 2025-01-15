import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Meditación Zen',
      description: 'Aprende los fundamentos del Zen',
      author: 'Maestro Li',
      backgroundImage: '../../assets/images/card-1.jpg',
      averageRating: 4.8,
      region: 'oriente'
    },
    {
      id: 2,
      title: 'Mindfulness para el día a día',
      description: 'Incorpora mindfulness en tu vida cotidiana',
      author: 'John Doe',
      backgroundImage: '../../assets/images/card-2.jpg',
      averageRating: 4.5,
      region: 'occidente'
    },
    {
      id: 3,
      title: 'Meditación Zen',
      description: 'Aprende los fundamentos del Zen',
      author: 'Maestro Li',
      backgroundImage: '../../assets/images/card-3.jpg',
      averageRating: 4.8,
      region: 'occidente'
    },
    {
      id: 4,
      title: 'Mindfulness para el día a día',
      description: 'Incorpora mindfulness en tu vida cotidiana',
      author: 'John Doe',
      backgroundImage: '../../assets/images/card-4.jpg',
      averageRating: 4.5,
      region: 'oriente'
    },
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  getCoursesByRegion(region: 'occidente' | 'oriente'): Course[] {
    return this.courses.filter(course => course.region === region);
  }

}
