export type MediaItem =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster: string };

export interface Project {
  slug: string;
  title: string;
  description: string; // TODO(Mia): replace placeholder text
  media: MediaItem[];
  links?: { label: string; href: string }[];
}
