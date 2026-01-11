
export type Category = 'All' | 'Facilities' | 'Academics' | 'Activities' | 'Culture' | 'Achievements' | 'Videos';

export interface GalleryItem {
  id: number;
  category: Category;
  type: 'image' | 'video';
  title: string;
  description: string;
  media: string; // Image URL OR YouTube Video ID
  tag: string; // e.g., "Annual Day"
  year: string;
  isSpotlight?: boolean;
}

/**
 * PITCH-READY FALLBACK DATA
 * These will show up until you connect your Google Sheet.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Videos',
    type: 'video',
    title: 'School Anthem & Vision',
    description: 'A look into the philosophy that drives PNREDDY Techno School every day.',
    media: 'dQw4w9WgXcQ', // Placeholder YouTube ID
    tag: 'Culture',
    year: '2024',
    isSpotlight: true
  },
  {
    id: 2,
    category: 'Academics',
    type: 'image',
    title: 'Digital Science Exploration',
    description: 'Our students engaging with 3D models in the new Smart Lab wing.',
    media: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    tag: 'Innovation',
    year: '2024',
    isSpotlight: true
  },
  {
    id: 3,
    category: 'Facilities',
    type: 'image',
    title: 'The Knowledge Hub',
    description: 'Our redesigned library featuring over 5,000 titles and digital access points.',
    media: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
    tag: 'Infrastructure',
    year: '2024',
    isSpotlight: true
  },
  {
    id: 4,
    category: 'Activities',
    type: 'image',
    title: 'Championship Victory',
    description: 'The Under-16 Cricket team celebrating their victory in the Inter-School Meet.',
    media: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop',
    tag: 'Sports',
    year: '2024',
    isSpotlight: false
  },
  {
    id: 5,
    category: 'Culture',
    type: 'image',
    title: 'Traditional Arts Festival',
    description: 'Celebrating the rich cultural heritage of Hyderabad through dance and music.',
    media: 'https://images.unsplash.com/photo-1514533212735-5df27d970db0?q=80&w=2024&auto=format&fit=crop',
    tag: 'Art',
    year: '2023',
    isSpotlight: false
  }
];
