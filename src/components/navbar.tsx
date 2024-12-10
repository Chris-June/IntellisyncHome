import { motion } from 'framer-motion';
import { 
  Menu, 
  Sparkles, 
  Info, 
  Briefcase, 
  PiggyBank, 
  MessageSquare, 
  FileText 
} from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const navItems = [
  { name: 'Features', to: 'features', icon: Sparkles },
  { name: 'About', to: 'about', icon: Info },
  { name: 'Work', to: 'work', icon: Briefcase },
  { name: 'Pricing', to: 'pricing', icon: PiggyBank },
  { name: 'Contact', to: 'contact', icon: MessageSquare },
  { name: 'Documentation', to: '/documentation', icon: FileText, type: 'route' },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <ScrollLink
          to="hero"
          smooth
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            IntelliSync Solutions
          </span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <RouterLink
                key={item.to}
                to={item.to}
                className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                <item.icon className="h-4 w-4 stroke-emerald-400" />
                <span>{item.name}</span>
              </RouterLink>
            ) : (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                <item.icon className="h-4 w-4 stroke-emerald-400" />
                <span>{item.name}</span>
              </ScrollLink>
            )
          )}
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) =>
                  item.type === 'route' ? (
                    <RouterLink
                      key={item.to}
                      to={item.to}
                      className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 stroke-emerald-400" />
                      <span>{item.name}</span>
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      smooth
                      className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 stroke-emerald-400" />
                      <span>{item.name}</span>
                    </ScrollLink>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}