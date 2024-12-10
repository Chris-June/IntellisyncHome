import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LinkedInShareProps {
  url?: string;
  title?: string;
  summary?: string;
}

export function LinkedInShare({ 
  url = window.location.href,
  title = "IntelliSync Solutions - AI-Powered Web Applications",
  summary = "Transform your digital presence with IntelliSync Solutions. We deliver AI-first web applications that drive growth and innovation."
}: LinkedInShareProps) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={() => window.open(shareUrl, '_blank', 'width=600,height=600')}
    >
      <Linkedin className="h-4 w-4" />
      Share on LinkedIn
    </Button>
  );
}