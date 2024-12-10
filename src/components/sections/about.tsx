import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AboutModal } from '@/components/about-modal';

const values = [
  {
    title: 'Customer-Centric Innovation',
    description: 'We put our customers first, constantly innovating to meet their evolving needs.',
    longDescription: 'At IntelliSync Solutions, customer-centric innovation is more than just a value—it\'s the foundation of everything we do. We believe that true innovation comes from understanding and addressing the real challenges our customers face in their digital journey.',
    impact: 'Our customer-first approach means that every feature, update, and solution we develop is directly influenced by user feedback and real-world needs. This results in products that not only solve current challenges but anticipate future needs.',
    implementation: 'We maintain continuous dialogue with our customers through regular feedback sessions, user research, and data analysis. This information directly influences our product roadmap and development priorities.',
  },
  {
    title: 'Integrity and Trust',
    description: 'Building lasting relationships through transparency and reliable solutions.',
    longDescription: 'Trust is earned through consistent delivery of promises and maintaining the highest standards of integrity in all our operations. We believe in complete transparency with our clients, partners, and team members.',
    impact: 'Our commitment to integrity creates a foundation of trust that allows our clients to confidently build their digital presence on our platform, knowing their interests are always protected.',
    implementation: 'We maintain rigorous security standards, provide clear documentation, and ensure transparent communication about our processes, limitations, and capabilities.',
  },
  {
    title: 'Accessibility and Scalability',
    description: 'Creating solutions that grow with your business, accessible to everyone.',
    longDescription: 'We believe that powerful technology should be accessible to businesses of all sizes. Our solutions are designed to scale seamlessly from startup to enterprise, ensuring that growth never comes at the cost of accessibility.',
    impact: 'Clients can start small and scale their digital presence as needed, without worrying about technical limitations or the need for complete system overhauls as they grow.',
    implementation: 'Our platform is built on a modular architecture that allows for easy scaling, while maintaining strict accessibility standards to ensure usability for all users.',
  },
];

export default function About() {
  const [selectedValue, setSelectedValue] = useState<typeof values[0] | null>(null);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
            About IntelliSync Solutions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Empowering industries with practical, AI-first solutions that drive growth and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 mt-16 md:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg border-gradient">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/10 rounded-lg" />
                <CardContent className="relative pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <BadgeCheck className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold text-xl">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{value.description}</p>
                  <Button
                    variant="ghost"
                    className="text-sm"
                    onClick={() => setSelectedValue(value)}
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
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
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-[800px] text-lg text-muted-foreground">
            We simplify AI for businesses and personal brands, enabling growth through
            intuitive solutions that adapt to your unique requirements.
          </p>
        </motion.div>
        {selectedValue && (
          <AboutModal
            isOpen={!!selectedValue}
            onClose={() => setSelectedValue(null)}
            value={selectedValue}
          />
        )}
      </div>
    </section>
  );
}