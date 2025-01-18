import { Injectable } from '@angular/core';

interface Post {
  title: string;
  description: string;
  author: string;
  averageRating: number;
  region: 'occidente' | 'oriente';
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [
    { title: "Los Beneficios del Mindfulness en la Vida Cotidiana", description: "Explora cómo la práctica del mindfulness puede reducir el estrés...", author: "Dr. Jane Smith", averageRating: 4.7, region: "occidente" },
    { title: "Alimentación Consciente: Cómo Mejorar tu Relación con la Comida", description: "Descubre cómo la alimentación consciente puede ayudarte...", author: "Chef Laura González", averageRating: 4.8, region: "occidente" },
    { title: "El Poder de la Respiración para el Manejo del Estrés", description: "Aprende técnicas de respiración simples pero efectivas...", author: "John Doe", averageRating: 4.6, region: "occidente" },
    { title: "Yoga para Principiantes: Posturas Básicas para Empezar", description: "Una guía para aquellos que quieren iniciarse en el yoga...", author: "Emma Johnson", averageRating: 4.9, region: "occidente" },
    { title: "Cómo Crear una Rutina de Sueño Saludable", description: "Consejos prácticos para establecer una rutina de sueño...", author: "Dr. Michael Lee", averageRating: 4.5, region: "occidente" },

    { title: "Meditación Zen: Un Camino hacia la Paz Interior", description: "Una introducción a la meditación Zen, enfocándose en cómo...", author: "Maestro Li Wei", averageRating: 4.9, region: "oriente" },
    { title: "Los Secretos del Ayurveda para una Vida Equilibrada", description: "Explora los principios básicos del Ayurveda...", author: "Dr. Anjali Mehta", averageRating: 4.8, region: "oriente" },
    { title: "Tai Chi: Movimientos Lentos para una Vida Saludable", description: "Descubre los beneficios del Tai Chi, una práctica china...", author: "Profesor Zhang Yi", averageRating: 4.7, region: "oriente" },
    { title: "Alimentación según la Medicina Tradicional China", description: "Aprende cómo los principios de la Medicina Tradicional China...", author: "Dr. Liu Ming", averageRating: 4.8, region: "oriente" },
    { title: "El Arte de la Respiración en el Qigong", description: "Una mirada a cómo el Qigong, una práctica ancestral china...", author: "Maestro Chen Hao", averageRating: 4.9, region: "oriente" }
  ];

  getPostsByRegion(region: 'occidente' | 'oriente'): Post[] {
    return this.posts.filter(post => post.region === region);
  }
}
