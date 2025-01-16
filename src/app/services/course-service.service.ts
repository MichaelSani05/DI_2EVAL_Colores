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
      title: 'Meditación fundamental',
      description: 'Relajate y prioriza tu paz',
      author: 'Maestro Hernani',
      backgroundImage: '../../assets/images/card-3.jpg',
      averageRating: 4.8,
      region: 'occidente'
    },
    {
      id: 4,
      title: 'Domina el mindfulness',
      description: 'Cambia tu mente, cambia tu vida',
      author: 'Michael Sani',
      backgroundImage: '../../assets/images/card-4.jpg',
      averageRating: 4.5,
      region: 'oriente'
    },
    {
      id: 5,
      title: 'Introducción al Feng Shui',
      description: 'Descubre cómo equilibrar la energía de tus espacios.',
      author: 'Maestra Wu',
      backgroundImage: '../../assets/images/card-5.jpg',
      averageRating: 4.7,
      region: 'occidente'
    },
    {
      id: 6,
      title: 'Técnicas de Respiración Pranayama',
      description: 'Domina el arte de la respiración consciente para mejorar tu salud.',
      author: 'Guru Arjun',
      backgroundImage: '../../assets/images/card-6.jpg',
      averageRating: 4.9,
      region: 'oriente'
    },
    {
      id: 7,
      title: 'Arte de la Ceremonia del Té',
      description: 'Explora la historia y la técnica de esta tradición milenaria.',
      author: 'Sensei Yamamoto',
      backgroundImage: '../../assets/images/card-4.jpg',
      averageRating: 4.6,
      region: 'occidente'
    },
    {
      id: 8,
      title: 'Caligrafía Tradicional China',
      description: 'Aprende los principios básicos de la escritura artística.',
      author: 'Profesor Chen',
      backgroundImage: '../../assets/images/card-8.jpg',
      averageRating: 4.8,
      region: 'oriente'
    },
    {
      id: 9,
      title: 'Yoga Restaurativo',
      description: 'Relájate y rejuvenece con posturas suaves y efectivas.',
      author: 'Swami Devi',
      backgroundImage: '../../assets/images/card-9.jpg',
      averageRating: 4.7,
      region: 'occidente'
    },
    {
      id: 10,
      title: 'Jardines Zen Minimalistas',
      description: 'Diseña espacios de paz y contemplación siguiendo las técnicas Zen.',
      author: 'Arquitecto Hoshino',
      backgroundImage: '../../assets/images/card-10.jpg',
      averageRating: 4.9,
      region: 'oriente'
    }
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  getCoursesByRegion(region: 'occidente' | 'oriente'): Course[] {
    return this.courses.filter(course => course.region === region);
  }

}
