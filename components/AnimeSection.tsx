import AnimeCard from "./AnimeCard";
import { ChevronRight } from "lucide-react";

interface Anime {
  id: number;
  title: string;
  image: string;
  episodes: number;
  dubs: number;
}

interface AnimeSectionProps {
  title: string;
  animeList: Anime[];
  showViewMore?: boolean;
}

export default function AnimeSection({
  title,
  animeList,
  showViewMore = true,
}: AnimeSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          {title}
        </h2>

        <div className="space-y-4 md:space-y-6">
          {animeList.map((anime) => (
            <div
              key={anime.id}
              className="flex gap-3 md:gap-4 group cursor-pointer"
            >
              <div className="w-24 md:w-32 flex-shrink-0">
                <AnimeCard
                  title=""
                  image={anime.image}
                  episodes={anime.episodes}
                  dubs={anime.dubs}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {anime.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs md:text-sm text-muted-foreground">
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-medium">
                    CC {anime.episodes}
                  </span>
                  <span className="bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded font-medium">
                    🎤 {anime.dubs}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    TV
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewMore && (
          <button className="mt-6 md:mt-8 w-full md:w-auto flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
            View more
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
