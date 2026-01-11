
import { GalleryItem, Category } from '../data/galleryData';

/**
 * 🚀 PRODUCTION SETUP
 * 1. Create a Google Sheet with headers: Category, Type, Title, Description, MediaURL, Tag, Year, IsSpotlight
 * 2. File > Share > Publish to Web > CSV
 * 3. Paste the URL below:
 */
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/PASTE_YOUR_ID_HERE/pub?output=csv';

/**
 * SMART LINK CONVERTER
 * Makes photos and videos work just by pasting links.
 */
const processMediaLink = (url: string): { type: 'image' | 'video', value: string } => {
  if (!url) return { type: 'image', value: '' };

  // 1. Detect YouTube (Full URL or just ID)
  const ytRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const ytMatch = url.match(ytRegex);
  if (ytMatch && ytMatch[2].length === 11) {
    return { type: 'video', value: ytMatch[2] };
  }
  // If it's just an 11-char string (like an ID), assume video
  if (url.length === 11 && !url.includes('.') && !url.includes('/')) {
    return { type: 'video', value: url };
  }

  // 2. Detect Google Drive
  if (url.includes('drive.google.com')) {
    const driveMatch = url.match(/\/d\/(.+?)\/(view|edit|usp)/) || url.match(/id=(.+?)(&|$)/);
    const fileId = driveMatch ? driveMatch[1] : null;
    if (fileId) {
      return { type: 'image', value: `https://lh3.googleusercontent.com/d/${fileId}` };
    }
  }

  // 3. Default to Image (for Unsplash/Direct links)
  return { type: 'image', value: url };
};

export const fetchGalleryFromCloud = async (): Promise<GalleryItem[]> => {
  try {
    // If the URL hasn't been replaced yet, don't try to fetch
    if (SHEET_CSV_URL.includes('PASTE_YOUR_ID_HERE')) return [];

    const response = await fetch(SHEET_CSV_URL);
    if (!response.ok) throw new Error('Not setup');
    
    const csvText = await response.text();
    const lines = csvText.split('\n').filter(l => l.trim() !== '').slice(1);
    
    return lines.map((line, index) => {
      // Split by comma but ignore commas inside quotes
      const cells = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      const [category, , title, description, mediaUrl, tag, year, isSpotlight] = cells.map(c => c.replace(/^"|"$/g, '').trim());
      
      const processed = processMediaLink(mediaUrl);
      
      return {
        id: Date.now() + index,
        category: (category || 'Activities') as Category,
        type: processed.type,
        title: title || 'New Entry',
        description: description || '',
        media: processed.value,
        tag: tag || 'School',
        year: year || '2024',
        isSpotlight: isSpotlight?.toLowerCase() === 'true'
      };
    }).filter(item => item.media);
  } catch (error) {
    return []; 
  }
};
