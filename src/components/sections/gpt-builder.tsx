import { motion } from 'framer-motion';
import { Bot, Code2, FileText, BarChart3, Puzzle, Zap, MessageSquare, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { GptFeatureModal } from '@/components/gpt-feature-modal';
import { GptPricingModal } from '@/components/gpt-pricing-modal';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';

const features = [
  {
    title: "No-Code Platform",
    description: "Build and deploy custom AI models without writing a single line of code. Perfect for businesses and individuals.",
    icon: Code2,
    builderBenefit: "Focus on creativity, not complexity. Our no-code platform eliminates technical barriers, allowing you to bring your AI vision to life without programming expertise. Save time and resources while maintaining full control over your custom GPT.",
    companyValue: "We believe in democratizing AI technology. By removing technical barriers, we empower creators to innovate and shape the future of AI interactions, aligning with our mission to make advanced technology accessible to all.",
    personalMessage: "Whether you're building a customer service bot, a creative writing assistant, or an educational tutor, your imagination is the only limit. Transform your unique expertise into an engaging AI experience.",
  },
  {
    title: "Knowledge Base Integration",
    description: "Easily embed text files and PDFs into your AI model using our advanced vector database for intelligent responses.",
    icon: FileText,
    builderBenefit: "Transform your documents, guides, and expertise into an interactive AI knowledge base. Our RAG system ensures your GPT provides accurate, context-aware responses based on your specific content.",
    companyValue: "Knowledge should be accessible and interactive. We're committed to creating technology that transforms static information into dynamic, intelligent conversations that drive value for businesses and users alike.",
    personalMessage: "Your knowledge is unique and valuable. Whether it's technical documentation, creative writing, or industry expertise, bring your content to life through interactive AI conversations.",
  },
  {
    title: "Custom AI Personas",
    description: "Full control over your AI's personality, tone, and behavior through intuitive system prompt customization.",
    icon: Bot,
    builderBenefit: "Create AI personalities that perfectly match your brand voice or creative vision. From professional and formal to friendly and casual, you have complete control over how your GPT communicates.",
    companyValue: "We understand that personality drives engagement. Our platform enables authentic, branded interactions that build trust and create memorable user experiences, reflecting our commitment to meaningful AI interactions.",
    personalMessage: "Give your AI a unique voice! Create characters, specialists, or brand ambassadors that engage users in exactly the way you envision. The personality possibilities are endless.",
  },
  {
    title: "Simple Integration",
    description: "Copy and paste a single line of code to embed your custom GPT on any website or intranet.",
    icon: Puzzle,
    builderBenefit: "Deploy your GPT anywhere with minimal effort. Our simple embedding process works seamlessly across platforms, making it easy to integrate your AI into existing websites or applications.",
    companyValue: "Integration should be effortless. We prioritize simplicity and compatibility, ensuring our technology enhances your digital presence without adding complexity to your workflow.",
    personalMessage: "Your GPT deserves to be shared with the world. Whether it's on your personal blog or company website, we make it incredibly easy to showcase your AI creation.",
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor chat sessions, user engagement, and performance metrics through our comprehensive analytics.",
    icon: BarChart3,
    builderBenefit: "Gain valuable insights into how users interact with your GPT. Track engagement, identify popular topics, and optimize your AI's performance based on real user data.",
    companyValue: "Data-driven improvement is core to our philosophy. We provide the tools and insights needed to continuously enhance AI interactions, ensuring maximum value for both creators and users.",
    personalMessage: "Understanding your audience is key to success. Use our analytics to refine your GPT's knowledge and personality, creating even more engaging and helpful interactions.",
  },
  {
    title: "Real-Time Chat",
    description: "Engage users with responsive, context-aware conversations powered by your custom knowledge base.",
    icon: MessageSquare,
    builderBenefit: "Provide instant, intelligent responses to your users 24/7. Our real-time chat system maintains context and delivers natural, engaging conversations that keep users coming back.",
    companyValue: "We believe in the power of meaningful conversations. Our platform enables genuine, helpful interactions that create value for both businesses and their users, reflecting our commitment to impactful communication.",
    personalMessage: "Every conversation is an opportunity to help, teach, or inspire. Create a GPT that connects with users in ways that matter to them, making each interaction special.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function GptBuilder() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    // Create and load the chatbot script
    const script = document.createElement('script');
    script.src = 'https://intellisync-server-staging-6982843f7a0f.herokuapp.com/chatbot-embed.js';
    script.dataset.lingoId = 'pNXqEuc4jTU3Y07ylF5I';
    script.defer = true;
    script.type = 'module';
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="gpt-builder" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-8 w-8 stroke-emerald-400" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
                GPT Builder Platform
              </h2>
            </div>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
              Create custom AI models in minutes, not months. Our no-code platform empowers you to build,
              deploy, and manage intelligent chatbots with your own knowledge base and personality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-5xl my-8"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background/90" />
              {/* Chatbot Embed */}
              <div id="lingo-chatbot" className="w-full h-full relative z-10" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="relative h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg border-gradient"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/10 rounded-lg" />
                  <CardHeader className="relative p-6">
                    <feature.icon className="h-6 w-6 stroke-emerald-400 mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6">
                    <CardDescription className="text-base mb-4">
                      {feature.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="text-sm"
                      onClick={() => setSelectedFeature(feature)}
                    >
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4 stroke-emerald-400" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 space-y-6 text-center"
          >
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Ready to revolutionize your customer interactions with AI?
              Start building your custom GPT model today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary"
                onClick={() => window.open('https://intellisyncsolutions.io', '_blank')}
              >
                Start Building Free
                <Zap className="ml-2 h-4 w-4 stroke-primary-foreground" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://docs.intellisyncsolutions.io', '_blank')}
              >
                View Documentation
                <FileText className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setIsPricingModalOpen(true)}
              >
                View Pricing
                <BarChart3 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {selectedFeature && (
        <GptFeatureModal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          feature={selectedFeature}
        />
      )}

      <GptPricingModal 
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />
    </section>
  );
}
