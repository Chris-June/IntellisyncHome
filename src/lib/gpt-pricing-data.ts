export interface PricingTier {
  id: string;
  name: string;
  price: number | undefined;
  description: string;
  features: string[];
  highlighted: boolean;
  isPopular?: boolean;
}

export const gptPricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: "AI Catalyst",
    price: 19.99,
    description: "Ignite your AI journey with cutting-edge tools that transform ideas into reality.",
    features: [
      "Unleash 2,400 Messages Monthly",
      "Tap into Our Powerful Knowledge Vault",
      "Amplify Your Reach with Seamless Assistant Sharing",
      "Master Your Growth with Crystal-Clear Analytics",
      "Risk-Free Launch with 1,000 Test Messages"
    ],
    highlighted: false
  },
  {
    id: 'professional',
    name: "AI Accelerator",
    price: 37.99,
    description: "Supercharge your business with advanced AI capabilities that leave competitors in awe.",
    features: [
      "Everything in AI Catalyst Plus:",
      "Dominate with 4,800 Monthly Messages",
      "Unlock Deep Knowledge Insights",
      "Scale Effortlessly with Enhanced Sharing",
      "Drive Success with Advanced Analytics",
      "Perfect Your AI with 1,000 Test Messages"
    ],
    highlighted: true
  },
  {
    id: 'premium',
    name: "AI Mastermind",
    price: 53.99,
    description: "Command the full spectrum of AI possibilities with our most powerful toolkit yet.",
    features: [
      "Everything in AI Accelerator Plus:",
      "Conquer with 7,200 Monthly Messages",
      "Harness Elite Knowledge Access",
      "Deploy AI Army-Wide with Enterprise Sharing",
      "Forge Ahead with Strategic Analytics",
      "Break Limits with Expanded File Capacity",
      "Shape the Future with Beta Features",
      "Create Unlimited Custom AI Armies",
      "Launch Confidently with 1,000 Test Messages",
      "Upcoming: Unleash Ultimate Control with API Access"
    ],
    highlighted: false
  },
  {
    id: 'enterprise',
    name: "AI Sovereign",
    price: undefined,
    description: "Ascend to AI supremacy with a solution crafted for those who demand nothing but excellence.",
    features: [
      "Wield Custom AI Models with Your OpenAI Arsenal",
      "Command Every Enterprise Feature & Beyond",
      "Forge Unique AI Models with Your Business DNA",
      "Craft Perfect AI Responses with Custom Prompts",
      "Build Your AI Dream Team with Custom Personas",
      "Rule Your Domain with Branded Chat Interface",
      "Transcend Limits with Multi-Modal Mastery",
      "Your Vision, Our Mission - Built to Perfection"
    ],
    highlighted: false
  }
];
