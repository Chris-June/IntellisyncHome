import { motion } from 'framer-motion';
import { Book, Code, FileJson, Rocket } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const guides = [
  {
    title: 'Quick Start Guide',
    description: 'Get up and running with IntelliSync in minutes',
    icon: Rocket,
    content: `
      1. Install the IntelliSync SDK
      2. Initialize with your API key
      3. Start using AI-powered features
    `,
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation with examples',
    icon: Code,
    content: `
      Explore our REST API endpoints:
      - Authentication
      - User Management
      - AI Services
      - Analytics
    `,
  },
  {
    title: 'Integration Guide',
    description: 'Learn how to integrate with existing systems',
    icon: FileJson,
    content: `
      Step-by-step integration guides:
      - CMS Integration
      - E-commerce Platforms
      - Analytics Tools
      - Custom Solutions
    `,
  },
];

const codeExamples = {
  javascript: `
import { IntelliSync } from '@intellisync/sdk';

const client = new IntelliSync({
  apiKey: 'your-api-key'
});

// Initialize AI features
await client.initialize();

// Get content recommendations
const recommendations = await client.ai.getRecommendations({
  userId: 'user-123',
  context: 'homepage'
});`,
  python: `
from intellisync import IntelliSync

client = IntelliSync(
    api_key='your-api-key'
)

# Initialize AI features
client.initialize()

# Get content recommendations
recommendations = client.ai.get_recommendations(
    user_id='user-123',
    context='homepage'
)`,
  typescript: `
import { IntelliSync, RecommendationOptions } from '@intellisync/sdk';

const client = new IntelliSync({
  apiKey: string;
});

// Initialize AI features
await client.initialize();

const options: RecommendationOptions = {
  userId: string;
  context: 'homepage' | 'product' | 'content';
};

// Get content recommendations
const recommendations = await client.ai.getRecommendations(options);`,
};

export default function Documentation() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-lg gradient-primary p-2.5">
              <Book className="h-full w-full text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Documentation</h1>
              <p className="text-muted-foreground">
                Everything you need to integrate and build with IntelliSync
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg border-gradient">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/10 rounded-lg" />
                  <CardHeader className="relative">
                    <guide.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative p-6">
                    <pre className="text-sm text-muted-foreground whitespace-pre-line">
                      {guide.content}
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <Card className="relative transform transition-transform hover:-translate-y-1 hover:shadow-lg border-gradient">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/10 rounded-lg" />
                      <CardContent className="relative p-6">
                        <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                          <code>{code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you with any questions or issues.
              </p>
              <Button className="gradient-primary">Contact Support</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}