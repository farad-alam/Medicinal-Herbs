"use client";

import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share';
import { toast } from 'sonner';

export default function ArticleShareButtons({ title, url }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copiado para a área de transferência!');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-1">Compartilhar:</span>
      
      <FacebookShareButton url={url} quote={title} className="focus:outline-none">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      
      <TwitterShareButton url={url} title={title} className="focus:outline-none">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      
      <WhatsappShareButton url={url} title={title} className="focus:outline-none">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      
      <TelegramShareButton url={url} title={title} className="focus:outline-none">
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      
      <LinkedinShareButton url={url} title={title} className="focus:outline-none">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      
      <EmailShareButton url={url} subject={title} className="focus:outline-none">
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}