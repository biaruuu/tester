import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AniWatch - Watch Anime Online Free",
  description: "Watch your favorite anime series and movies online in HD quality. Stream thousands of anime episodes with English subtitles and dubs. Updated daily with the latest anime releases.",
  keywords: "anime, watch anime, free anime, anime streaming, anime online, anime episodes, anime series, anime movies, subbed anime, dubbed anime",
  authors: [{ name: "AniWatch" }],
  openGraph: {
    title: "AniWatch - Watch Anime Online Free",
    description: "Watch your favorite anime series and movies online in HD quality. Stream thousands of anime episodes with English subtitles and dubs.",
    type: "website",
    url: "https://aniwatchtv.to",
    siteName: "AniWatch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AniWatch - Watch Anime Online Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AniWatch - Watch Anime Online Free",
    description: "Watch your favorite anime series and movies online in HD quality.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
