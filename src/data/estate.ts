export interface EstateExperience {
  id: string;
  title: string;
  category: 'Winery & Dining' | 'Weddings & Celebrations' | 'Private Stays' | 'Wine Club';
  capacity: string;
  setting: string;
  image: string;
  highlights: string[];
  description: string;
}

export const EXPERIENCES_DATA: EstateExperience[] = [
  {
    id: 'tasting-room-taphouse',
    title: 'The Tasting Room & Taphouse',
    category: 'Winery & Dining',
    capacity: 'Casual & Reserved Seating',
    setting: 'Panoramic Blue Ridge Ridge-line',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Estate-Grown Vintages', 'On-Site Craft Brewery', 'Wood-Fired Hearth Kitchen'],
    description: 'Perched overlooking the vineyard hills. Featuring full flights of estate wines, small-batch craft beer brewed on-site, and seasonal cuisine with outdoor fire pits.'
  },
  {
    id: 'the-lodge',
    title: 'The Grand Lodge at Mount Ida',
    category: 'Weddings & Celebrations',
    capacity: 'Up to 300 Guests',
    setting: 'Historic Cedar & Lake Pavilion',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Waterfront Gazebo Ceremony Lawn', 'Grand Fireplace Ballroom', 'Private Bridal & Groom Suites'],
    description: 'Charlottesville premier luxury wedding destination. A monumental cedar lodge featuring soaring vaulted ceilings, two-story stone fireplaces, and an expansive covered terrace.'
  },
  {
    id: 'the-event-barn',
    title: 'The Historic Event Barn',
    category: 'Weddings & Celebrations',
    capacity: 'Up to 250 Guests',
    setting: 'Rolling Vineyard Pastures',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Antique Crystal Chandeliers', 'Climate-Controlled Year-Round', 'Private Cocktail Veranda'],
    description: 'Impeccably restored rustic elegance with heart pine flooring, bespoke iron chandeliers, and sweeping views of horse pastures and the vineyard.'
  },
  {
    id: 'reserve-wine-club',
    title: 'Mount Ida Reserve Wine & Beer Club',
    category: 'Wine Club',
    capacity: 'Private Membership',
    setting: 'Exclusive Member Vault',
    image: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Quarterly Cellar Allocations', 'Complimentary Estate Tastings', 'VIP Invitations to Harvest Dinners'],
    description: 'Join a tight-knit community of wine and craft beer enthusiasts with direct access to limited-barrel vintages and private sommelier experiences.'
  },
  {
    id: 'estate-cottages',
    title: 'Historic Manor & Estate Cottages',
    category: 'Private Stays',
    capacity: 'Multi-Bedroom Residences',
    setting: '5,000 Private Acres',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Historic 18th-Century Manor', 'Private In-Ground Pools', 'Secluded Forest Trails'],
    description: 'Experience true Southern hospitality in our restored private cottages and historic manor. Perfect for wedding parties, executive retreats, and weekend escapes.'
  }
];
