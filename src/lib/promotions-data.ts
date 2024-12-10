export interface Promotion {
  id: string;
  title: string;
  description: string;
  type: 'discount' | 'upgrade' | 'special';
  badge?: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  features?: string[];
  ctaText: string;
  ctaLink: string;
  terms?: string[];
  highlight?: boolean;
}

export const promotions: Promotion[] = [
  {
    id: 'winter-2024',
    title: 'Winter Special: 25% Off Enterprise Plans',
    description: 'Get a head start on your 2024 digital transformation with our enterprise AI solutions. Limited time offer includes premium support.',
    type: 'discount',
    badge: 'Limited Time',
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    imageUrl: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2670&auto=format&fit=crop',
    features: [
      '25% off annual enterprise subscriptions',
      'Free migration assistance',
      'Dedicated support team',
      'Priority feature requests'
    ],
    ctaText: 'Claim Offer',
    ctaLink: '/contact',
    terms: [
      'Valid for new enterprise subscriptions only',
      'Must be activated by December 31, 2024',
      'Cannot be combined with other offers'
    ],
    highlight: true
  },
  {
    id: 'feature-upgrade-q4',
    title: 'Free GPT-4 Upgrade',
    description: 'Upgrade your existing AI solution with GPT-4 capabilities at no additional cost.',
    type: 'upgrade',
    startDate: '2024-12-01',
    endDate: '2024-12-15',
    features: [
      'GPT-4 integration',
      'Advanced prompt engineering',
      'Increased token limits',
      'Custom model fine-tuning'
    ],
    ctaText: 'Upgrade Now',
    ctaLink: '/dashboard/upgrade',
    highlight: false
  }
];
