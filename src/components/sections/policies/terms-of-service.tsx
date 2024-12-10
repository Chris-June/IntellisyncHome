import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export default function TermsOfService() {
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
              <Scale className="h-full w-full text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: March 20, 2024</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using IntelliSync Solutions' services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              We grant you a limited, non-exclusive, non-transferable license to use our services subject to these terms.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>You may not modify or copy our software</li>
              <li>You may not use the service for illegal purposes</li>
              <li>You may not transfer your account to another party</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access to our services.
              We reserve the right to modify or discontinue services with or without notice.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Obligations</h2>
            <p className="text-muted-foreground mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Provide accurate account information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws</li>
              <li>Not interfere with the service's operation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              IntelliSync Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: chris.june@intellisync.ca
              <br />
              Address: Chatham-Kent, Canada, N7L 0A9
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}