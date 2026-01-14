import Image from "next/image";
import { Tv } from "lucide-react";

interface AnimeCardProps {
  title: string;
  image: string;
  episodes?: number;
  dubs?: number;
  showNumber?: number;
  type?: string;
}

export default function AnimeCard({
  title,
  image,
  episodes,
  dubs,
  showNumber,
  type = "TV",
}: AnimeCardProps) {
  return (
    <div className="group relative">
      {/* Show Number (for Trending section) */}
      {showNumber !== undefined && (
        <div className="absolute -left-2 -top-2 z-10 bg-background border-2 border-primary text-primary font-bold text-3xl md:text-4xl px-3 py-1 rounded-md shadow-lg">
          {String(showNumber).padStart(2, "0")}
        </div>
      )}

      <div className="relative overflow-hidden rounded-lg card-hover cursor-pointer">
        {/* Image */}
        <div className="relative aspect-[2/3] bg-secondary">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Info Overlay */}
        {(episodes || dubs) && (
          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {episodes !== undefined && (
                <span className="bg-green-500/90 backdrop-blur-sm text-white px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <span className="text-[10px]">CC</span>
                  {episodes}
                </span>
              )}
              {dubs !== undefined && (
                <span className="bg-pink-500/90 backdrop-blur-sm text-white px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <span className="text-[10px]">🎤</span>
                  {dubs}
                </span>
              )}
              {type && (
                <span className="flex items-center gap-1 text-white/80">
                  <span className="w-1 h-1 bg-white/60 rounded-full" />
                  <Tv className="w-3 h-3" />
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-sm md:text-base font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
  );
}
