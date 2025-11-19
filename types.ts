
export interface Artwork {
  id: string;
  title: string;
  description: string;
  medium: string; // e.g., "Oil on Canvas", "Digital"
  dimensions?: string;
  year: string;
  imageUrl: string;
  curatorNote?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technique' | 'Theory' | 'Medium';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
