export interface AddOn {
  id: string;
  name: string;
  description: string;
}

export const addOns: AddOn[] = [
  {
    id: 'animated-cards',
    name: 'Epic Animated Cards',
    description: 'Step up your design game with slick animations that make your cards come alive when they enter the viewport'
  },
  {
    id: 'parallax',
    name: 'Breathtaking Parallax Scrolling',
    description: 'Immerse your audience with visually stunning background elements that move at different speeds to create a sense of depth'
  },
  {
    id: 'smooth-scroll',
    name: 'Butter-Smooth Scroll',
    description: 'Elevate the user experience with silky-smooth transitions between sections that make your site feel like a dream to navigate'
  },
  {
    id: 'animated-icons',
    name: 'Interactive Icon Animations',
    description: 'Take your icon design to the next level with interactive hover and click animations that engage and delight'
  },
  {
    id: 'image-carousel',
    name: 'Stunning Image Carousel with Timer',
    description: 'Create a visual spectacle with an automated image slideshow that showcases your best work and sets the tone for your site'
  },
  {
    id: 'infinite-scroll',
    name: 'Endless Component Scrolling',
    description: 'Amaze your audience with an endless supply of fresh content that loads seamlessly as they scroll, keeping them engaged and entertained'
  },
  {
    id: 'hover-effects',
    name: 'Mesmerizing Hover Effects',
    description: 'Transform your buttons and cards into eye-catching showstoppers with interactive hover animations that make your site pop'
  },
  {
    id: 'gradient-fills',
    name: 'Gorgeous Gradient Colour Fills',
    description: 'Add a touch of elegance to your design with beautiful gradient backgrounds and text effects that add depth and sophistication to your site'
  },

  {
    id: 'sticky-nav',
    name: 'Sticky Navigation Bar',
    description: 'Keep your navigation bar firmly in sight with a sticky navigation bar that remains fixed at the top while scrolling, complete with smooth visibility toggles based on scroll direction'
  },
  {
    id: 'custom-tooltips',
    name: 'Tailored Tooltips',
    description: 'Craft the perfect tooltip experience with customizable content, animations, and styles that match your brand and design'
  },
  {
    id: 'accordion',
    name: 'Expandable Accordion Components',
    description: 'Effortlessly organize your content with expandable and collapsible sections that make it easy to navigate and find what users need'
  },
  {
    id: 'loading-indicators',
    name: 'Loading Spinners & Skeleton Screens',
    description: 'Keep your users engaged and informed with animated loading indicators and placeholder screens that make your site feel snappy and responsive'
  },
  {
    id: 'responsive-modals',
    name: 'Glorious Responsive Modals',
    description: 'Elevate your modal game with highly customizable, responsive modals that adapt to different devices and screen sizes, complete with entrance and exit animations'
  },
  {
    id: 'context-menus',
    name: 'Effortless Context Menus',
    description: 'Streamline your user experience with interactive right-click menus that provide users with quick access to relevant options'
  },
  {
    id: 'fab-buttons',
    name: 'Floating Action Buttons (FAB)',
    description: 'Add a touch of magic to your design with circular buttons that expand into radial menus or smooth pop-out options for quick actions'
  },
  {
    id: 'micro-interactions',
    name: 'Subtle Micro-Interaction Indicators',
    description: 'Add a touch of finesse to your design with subtle animations that provide users with instant feedback on their actions'
  },
  {
    id: 'progress-bars',
    name: 'Dazzling Progress Bars',
    description: 'Make your progress indicators pop with customizable colors, gradients, and labels that match your brand and style'
  },
  {
    id: 'tab-animations',
    name: 'Sleek Tab Animations',
    description: 'Transform your tabs into a visual treat with multi-tab components that feature smooth sliding or fading transitions between content areas'
  }
];

interface Feature {
  name: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  buildCost: number;
  description: string;
  features: Feature[];
  maxAddOns: number;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Launch Pad',
    price: 19.99,
    buildCost: 500,
    description: 'Launch your digital presence with a stunning, hassle-free website that works for you 24/7',
    features: [
      {
        name: 'One-time Build Investment',
        description: 'Get your professional website up and running with our expert team handling everything from design to deployment. Your journey to digital success starts here!'
      },
      {
        name: 'Stunning Single Page Design',
        description: 'Captivate your audience with a beautifully crafted single-page website that tells your story through smooth, intuitive navigation and eye-catching design elements.'
      },
      {
        name: 'Worry-Free Maintenance',
        description: 'Sleep easy knowing your site is always up-to-date and performing at its best. We handle all updates, security patches, and give your UI a fresh look annually!'
      },
      {
        name: 'Essential Business Sections',
        description: 'Make a powerful impression with professionally designed sections: an attention-grabbing hero, compelling CTAs, showcase features, and a conversion-focused footer.'
      },
      {
        name: 'Responsive Excellence',
        description: 'Delight every visitor with a flawless experience across all devices. Your site automatically adapts to look stunning on phones, tablets, and desktops.'
      },
      {
        name: 'SEO Power-Up',
        description: 'Get discovered by your ideal customers with our SEO optimization package, including strategic meta tags, sitemaps, and search-engine friendly structure.'
      },
      {
        name: 'Bank-Grade Security',
        description: 'Protect your visitors and boost credibility with enterprise-level SSL encryption, giving your site the green padlock that customers trust.'
      },
      {
        name: 'Domain Mastery',
        description: 'Launch with confidence as we handle all the technical domain setup, ensuring your website is perfectly configured and easily accessible.'
      },
      {
        name: 'Smart Analytics Integration',
        description: 'Gain valuable insights into your audience with Google Analytics integration, helping you make data-driven decisions to grow your online presence.'
      }
    ],
    maxAddOns: 2,
    highlighted: false
  },
  {
    id: 'professional',
    name: 'Growth Engine',
    price: 29.99,
    buildCost: 500,
    description: 'Supercharge your online presence with advanced features designed to accelerate your business growth',
    features: [
      {
        name: 'All Launch Pad Features',
        description: 'Get everything from our Launch Pad plan, supercharged with enhanced capabilities and premium customization options.'
      },
      {
        name: 'Enhanced Maintenance Suite',
        description: 'Experience next-level care with priority updates, proactive monitoring, and quarterly UI refreshes to keep your site ahead of the curve.'
      },
      {
        name: 'Dynamic Blog Platform',
        description: 'Transform visitors into loyal followers with a powerful blog system featuring categories, engaging comments, and seamless social sharing.'
      },
      {
        name: 'Lead Generation Powerhouse',
        description: 'Convert visitors into subscribers with eye-catching newsletter forms, automated welcome sequences, and seamless integration with your favorite email platforms.'
      },
      {
        name: 'Social Media Command Center',
        description: 'Amplify your reach with integrated social feeds, one-click sharing, and automated post scheduling to keep your audience engaged across all platforms.'
      },
      {
        name: 'Advanced Contact System',
        description: 'Connect with prospects through smart forms featuring file uploads, conditional logic, and direct integration with your CRM for seamless lead management.'
      }
    ],
    maxAddOns: 4,
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Innovation Suite',
    price: 49.99,
    buildCost: 500,
    description: 'Unleash unlimited potential with our most powerful solution for ambitious businesses',
    features: [
      {
        name: 'All Growth Engine Features',
        description: 'Access every feature from our Growth Engine plan, enhanced with enterprise-grade capabilities and priority support.'
      },
      {
        name: 'VIP Support & Maintenance',
        description: 'Enjoy peace of mind with 24/7 priority support, real-time monitoring, and monthly strategy sessions to keep your digital presence ahead of the competition.'
      },
      {
        name: 'Custom Integration Hub',
        description: 'Seamlessly connect your favorite tools and services with custom API integrations, automated workflows, and advanced data synchronization.'
      },
      {
        name: 'Advanced Analytics Dashboard',
        description: 'Make informed decisions with detailed visitor insights, conversion tracking, and custom reporting tailored to your business goals.'
      },
      {
        name: 'E-commerce Ready',
        description: 'Transform your website into a sales machine with secure payment processing, inventory management, and a smooth shopping experience.'
      },
      {
        name: 'Multi-language Support',
        description: 'Reach a global audience with automatic language detection, content translation, and region-specific customization.'
      }
    ],
    maxAddOns: 8,
    highlighted: false
  }
];
