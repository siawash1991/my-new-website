export type Page = 'home' | 'blog' | 'courses' | 'resources';

export type Language = 'en' | 'fa';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  status: 'Open' | 'Full';
  level: 'Advanced' | 'Expert';
  duration: string;
}

export interface Workflow {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Prompt {
  id: number;
  title: string;
  description: string;
  code: string;
}