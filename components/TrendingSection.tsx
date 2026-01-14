import AnimeCard from "./AnimeCard";
import { ChevronRight } from "lucide-react";

const trendingAnime = [
  {
    id: 1,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Yūsha Shikkaku",
    image: "https://images.unsplash.com/photo-1611419010196-a360856fc42f?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "The Iceblade Sorcerer",
    image: "https://images.unsplash.com/photo-1633614749976-248e356fa199?w=400&h=600&fit=crop",
  },
];

export default function TrendingSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Trending
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {trendingAnime.map((anime, index) => (
            <AnimeCard
              key={anime.id}
              title={anime.title}
              image={anime.image}
              showNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
