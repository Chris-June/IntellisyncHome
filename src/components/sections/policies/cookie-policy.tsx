import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
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
              <Cookie className="h-full w-full text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: March 20, 2024</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              They help us make your experience better while you use our service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies to understand usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for relevant content</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Session Cookies: Temporary cookies that expire when you close your browser</li>
              <li>Persistent Cookies: Remain on your device for a set period</li>
              <li>First-party Cookies: Set by our website</li>
              <li>Third-party Cookies: Set by our partners and service providers</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Browser settings to block or delete cookies</li>
              <li>Our cookie consent tool on the website</li>
              <li>Third-party opt-out tools</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our Cookie Policy, please contact us at:
              <br />
              Email: chris.june@intellisync.ca
              <br />
              Address: Chatham Kent On, Canada
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}