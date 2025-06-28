import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Studio Bizkit - Creative Digital Agency</title>
        <meta name="title" content="Studio Bizkit - Creative Digital Agency" />
        <meta name="description" content="Studio Bizkit is a creative digital agency specializing in web design, branding, and digital experiences. We help brands stand out in the digital landscape." />
        <meta name="keywords" content="digital agency, web design, branding, creative, studio, bizkit, digital experiences" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Studio Bizkit" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studiobizkit.com/" />
        <meta property="og:title" content="Studio Bizkit - Creative Digital Agency" />
        <meta property="og:description" content="Studio Bizkit is a creative digital agency specializing in web design, branding, and digital experiences. We help brands stand out in the digital landscape." />
        <meta property="og:image" content="https://i.ibb.co/W4h0y8sK/Screenshot-2025-06-28-123151.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Studio Bizkit" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://studiobizkit.com/" />
        <meta property="twitter:title" content="Studio Bizkit - Creative Digital Agency" />
        <meta property="twitter:description" content="Studio Bizkit is a creative digital agency specializing in web design, branding, and digital experiences. We help brands stand out in the digital landscape." />
        <meta property="twitter:image" content="https://i.ibb.co/W4h0y8sK/Screenshot-2025-06-28-123151.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
