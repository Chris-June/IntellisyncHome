import { Brain, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LinkedInShare } from '@/components/linkedin-share';

const links = {
  product: [
    { name: 'Features', to: 'features', type: 'scroll' },
    { name: 'Pricing', to: 'pricing', type: 'scroll' },
    { name: 'About', to: 'about', type: 'scroll' },
    { name: 'Contact', href: 'mailto:chris.june@intellisync.ca', type: 'external' },
    { name: 'Documentation', href: 'https://docs.intellisync.ca', type: 'external' },
  ],
  tools: [
    { name: 'GPT Builder', href: 'https://intellisyncsolutions.io', type: 'external' },
  ],
  social: [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/intellisync_ca' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/intellisync-solutions' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <ScrollLink
              to="hero"
              smooth
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Brain className="h-8 w-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg p-1.5" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                IntelliSync
              </span>
            </ScrollLink>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with AI-driven solutions for the modern web.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  {link.type === 'scroll' ? (
                    <ScrollLink
                      to={link.to}
                      smooth
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <a
                      href={link.href}
                      target={link.type === 'external' ? '_blank' : undefined}
                      rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              {links.tools.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.type === 'external' ? '_blank' : undefined}
                    rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <Button
              variant="outline"
              className="w-full mb-4"
              onClick={() => window.location.href = 'mailto:contact@intellisync.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">Visit our {social.name} page</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p> 2024 IntelliSync Solutions. All rights reserved.</p>
          <div className="flex space-x-4">
            <RouterLink to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </RouterLink>
            <RouterLink to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </RouterLink>
            <RouterLink to="/cookie-policy" className="hover:text-foreground transition-colors">
              Cookie Policy
            </RouterLink>
            <LinkedInShare />
          </div>
        </div>
      </div>
    </footer>
  );
}