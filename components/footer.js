'use client';

import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/avinash-yavvari',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/avinash-yavvari',
      label: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/avinash-yavvari',
      label: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:avinash.yavvari@example.com',
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Avinash Yavvari
            </h3>
            <p className="text-muted-foreground">
              Senior Data Engineer & AI Platform Architect
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#4F8CFF] transition-all group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-[#4F8CFF] transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Right: Back to Top */}
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/10"
            onClick={scrollToTop}
          >
            Back to Top ↑
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-muted-foreground text-sm">
          <p>
            © {currentYear} Avinash Yavvari. Built with Next.js, Framer Motion, and Three.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
