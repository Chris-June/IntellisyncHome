import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-lg gradient-primary p-2.5">
              <Shield className="h-full w-full text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: March 20, 2024</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Create an account or update your profile</li>
              <li>Use our services or features</li>
              <li>Contact us for support or information</li>
              <li>Subscribe to newsletters or updates</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and auditors</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: chris.june@intellisync.ca
              <br />
              Address: Chatham-Kent ON, Canada
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}