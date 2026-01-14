"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";

const spotlightAnime = [
  {
    id: 1,
    title: "Gachiakuta",
    number: 7,
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Demon Slayer: Kimetsu no Yaiba",
    number: 5,
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    number: 3,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&h=600&fit=crop",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlightAnime.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const anime = spotlightAnime[currentSlide];

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden mt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${anime.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12 md:pb-20">
        <div className="max-w-2xl space-y-4 animate-fade-in">
          <div className="text-primary text-sm md:text-base font-semibold">
            #{anime.number} Spotlight
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            {anime.title}
          </h1>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Now
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary/80 backdrop-blur-sm hover:bg-secondary font-semibold px-8 gap-2"
            >
              Detail
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {spotlightAnime.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary h-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
