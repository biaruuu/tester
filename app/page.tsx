import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import PromoBanner from "@/components/PromoBanner";
import TrendingSection from "@/components/TrendingSection";
import AnimeSection from "@/components/AnimeSection";
import ScrollToTop from "@/components/ScrollToTop";

const topAiringAnime = [
  {
    id: 1,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    episodes: 1155,
    dubs: 1143,
  },
  {
    id: 2,
    title: "Case Closed",
    image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop",
    episodes: 1187,
    dubs: 123,
  },
  {
    id: 3,
    title: "No Longer Allowed In Another World",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    episodes: 12,
    dubs: 12,
  },
  {
    id: 4,
    title: "Pokémon Horizons: The Series",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop",
    episodes: 122,
    dubs: 101,
  },
];

const mostPopularAnime = [
  {
    id: 1,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    episodes: 1155,
    dubs: 1143,
  },
  {
    id: 2,
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    episodes: 55,
    dubs: 55,
  },
  {
    id: 3,
    title: "Jujutsu Kaisen (TV)",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    episodes: 47,
    dubs: 47,
  },
  {
    id: 4,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1633614749976-248e356fa199?w=400&h=600&fit=crop",
    episodes: 87,
    dubs: 87,
  },
];

const mostFavoriteAnime = [
  {
    id: 1,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    episodes: 1155,
    dubs: 1143,
  },
  {
    id: 2,
    title: "Chainsaw Man",
    image: "https://images.unsplash.com/photo-1611419010196-a360856fc42f?w=400&h=600&fit=crop",
    episodes: 12,
    dubs: 12,
  },
  {
    id: 3,
    title: "Jujutsu Kaisen (TV)",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    episodes: 24,
    dubs: 24,
  },
  {
    id: 4,
    title: "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    episodes: 11,
    dubs: 11,
  },
];

const latestCompletedAnime = [
  {
    id: 1,
    title: "My Gift Lvl 9999 Unlimited Gacha: Backstabbed in a Backwater...",
    image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop",
    episodes: 12,
    dubs: 8,
  },
  {
    id: 2,
    title: "The Iceblade Sorcerer Shall Rule the World",
    image: "https://images.unsplash.com/photo-1633614749976-248e356fa199?w=400&h=600&fit=crop",
    episodes: 12,
    dubs: 12,
  },
  {
    id: 3,
    title: "Classroom of the Elite Season 3",
    image: "https://images.unsplash.com/photo-1611419010196-a360856fc42f?w=400&h=600&fit=crop",
    episodes: 13,
    dubs: 13,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <PromoBanner />
      <TrendingSection />
      <AnimeSection title="Top Airing" animeList={topAiringAnime} />
      <AnimeSection title="Most Popular" animeList={mostPopularAnime} />
      <AnimeSection title="Most Favorite" animeList={mostFavoriteAnime} />
      <AnimeSection
        title="Latest Completed"
        animeList={latestCompletedAnime}
        showViewMore={false}
      />
      <ScrollToTop />

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="text-sm">
            © 2026 AniWatch. All rights reserved. Made with ❤️ for anime fans.
          </p>
        </div>
      </footer>
    </main>
  );
}
