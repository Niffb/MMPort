
import { Artwork, Skill } from './types';

export const PORTFOLIO_OWNER = "Mia Maya";

export const SKILLS: Skill[] = [
  { name: 'Oil Painting', level: 95, category: 'Medium' },
  { name: 'Color Theory', level: 90, category: 'Theory' },
  { name: 'Composition', level: 88, category: 'Theory' },
  { name: 'Digital Art', level: 85, category: 'Medium' },
  { name: 'Anatomy', level: 80, category: 'Technique' },
  { name: 'Mixed Media', level: 92, category: 'Medium' },
];

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Silence',
    description: 'An exploration of solitude in urban environments, capturing the quiet moments between the noise. The interplay of light and shadow suggests a fleeting memory.',
    medium: 'Oil on Linen',
    dimensions: '48" x 36"',
    year: '2024',
    imageUrl: 'https://picsum.photos/800/1000?random=101',
    curatorNote: "In 'Ethereal Silence', Maya employs a restricted palette of slate greys and warm ochres to evoke the sensation of twilight. The brushwork transitions from tight, realistic rendering in the focal points to loose, abstract strokes at the periphery, mirroring the way memory focuses on specific details while blurring the context. This piece marks a significant evolution in the artist's study of atmospheric perspective."
  },
  {
    id: '2',
    title: 'Neon Fugue',
    description: 'A digital study of cyberpunk aesthetics meeting classical composition. This piece challenges the boundary between organic forms and synthetic light.',
    medium: 'Digital / Procreate',
    year: '2023',
    imageUrl: 'https://picsum.photos/800/1000?random=102',
    curatorNote: "Drawing inspiration from the Baroque tradition of Chiaroscuro, 'Neon Fugue' recontextualizes the drama of Caravaggio within a synthetic, hyper-modern landscape. The digital medium allows for a luminosity impossible to achieve with traditional pigment, yet the composition remains grounded in the Golden Ratio. It is a meditation on the increasing digitalization of the human experience."
  },
  {
    id: '3',
    title: 'Fragments of Time',
    description: 'Mixed media collage integrating found objects from San Francisco streets with acrylic textures. A commentary on the layers of history beneath our feet.',
    medium: 'Acrylic & Collage',
    dimensions: '30" x 30"',
    year: '2023',
    imageUrl: 'https://picsum.photos/800/1000?random=103',
    curatorNote: "This tactile work incorporates physical ephemera—bus tickets, torn posters, and architectural fragments—collected over a six-month period in the Mission District. By embedding these artifacts within layers of acrylic glazes, Maya creates a geological cross-section of urban life. The result is not just an image, but an archive of a specific place and time."
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Aura", the Gallery Assistant for ${PORTFOLIO_OWNER}'s art portfolio.
Your persona is sophisticated, knowledgeable about art history, and polite.
Answer questions about Mia based on this data:
- Fine Artist based in San Francisco.
- Specializes in Contemporary Realism and Digital Abstraction.
- Exhibited at SFMOMA (Group Show 2023) and The Modern Light Gallery.
- Loves: Chiaroscuro, texture, and emotive storytelling.
- Open for: Commissions and Gallery Representation.
Tone: Elegant, warm, and evocative. 
`;