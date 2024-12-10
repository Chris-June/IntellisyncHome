import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import About from '@/components/sections/about';
import Work from '@/components/sections/work';
import GptBuilder from '@/components/sections/gpt-builder';
import Pricing from '@/components/sections/pricing';
import Promotions from '@/components/sections/promotions';
import PrivacyPolicy from '@/components/sections/policies/privacy-policy';
import TermsOfService from '@/components/sections/policies/terms-of-service';
import CookiePolicy from '@/components/sections/policies/cookie-policy';
import Documentation from '@/pages/documentation';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';
import { Toaster } from '@/components/ui/sonner';
import { useLocation } from 'react-router-dom';
import { DialogProvider } from '@/components/ui/dialog-provider';

function App() {
  const location = useLocation();
  const isStaticPage = ['/privacy-policy', '/terms-of-service', '/cookie-policy', '/documentation'].includes(location.pathname);

  return (
    <ThemeProvider>
      <DialogProvider>
        <div className="relative flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1 flex flex-col">
            {isStaticPage ? (
              {
                '/privacy-policy': <PrivacyPolicy />,
                '/terms-of-service': <TermsOfService />,
                '/cookie-policy': <CookiePolicy />,
                '/documentation': <Documentation />,
              }[location.pathname]
            ) : (
              <>
                <Hero />
                <Features />
                <About />
                <Work />
                <GptBuilder />
                <Promotions />
                <Pricing />
                <Cta />
              </>
            )}
          </main>
          <Footer />
          <Toaster />
        </div>
      </DialogProvider>
    </ThemeProvider>
  );
}

export default App;
