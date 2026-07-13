import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Avinash Yavvari - Senior Data Engineer & AI Platform Architect',
  description: 'Building enterprise-scale cloud data platforms, AI-ready architectures, healthcare analytics solutions, and intelligent systems that transform complex data into measurable business value.',
  keywords: ['Data Engineering', 'AI Engineering', 'Cloud Platforms', 'Healthcare Analytics', 'Machine Learning', 'Azure', 'Snowflake', 'Databricks'],
  authors: [{ name: 'Avinash Yavvari' }],
  openGraph: {
    title: 'Avinash Yavvari - Senior Data Engineer & AI Platform Architect',
    description: 'Building enterprise-scale cloud data platforms, AI-ready architectures, healthcare analytics solutions, and intelligent systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="smooth-scroll">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
