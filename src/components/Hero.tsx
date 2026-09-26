import React, { useEffect, useRef, useState } from 'react';
import { GlassWater, ChevronRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalFrames = 60,
  onOpenReservation
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('Sunlit Vineyard Hills & Manor Estate');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const total = totalFrames;
    const imgs: HTMLImageElement[] = new Array(total);

    // 1. Immediately fetch Frame 1 (<100ms first paint)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Progressive non-blocking preload for frames 2..total in small smooth batches
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= total; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIdx <= total) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;}, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (img && img.complete) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      const naturalW = img.naturalWidth || 1920;
      const naturalH = img.naturalHeight || 1080;
      const imgRatio = naturalW / naturalH;
      const canvasRatio = w / h;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        drawX = 0;
        drawY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
        drawY = 0;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    }

    if (frameIndex <= 60) {
      setActiveChapter('Sunlit Vineyard Hills & Manor Estate');
    } else if (frameIndex <= 120) {
      setActiveChapter('The Grand Lodge & Waterfront Gazebo');
    } else {
      setActiveChapter('Oak Aging Cellars & Sunset Veranda');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setScrollProgress(progress);

      const targetFrame = Math.min(
        totalFrames,
        Math.max(1, Math.floor(progress * (totalFrames - 1)) + 1)
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        renderFrame(targetFrame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => renderFrame(currentFrameRef.current), { passive: true });
    renderFrame(1);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalFrames]);

  return (
    <section ref={containerRef} className="relative h-[450vh] w-full bg-[#0a0b0d] overflow-x-clip">
      {/* Sticky Canvas Screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isLoaded ? 1 : 0.4 }}
        />

        {/* Ambient Darkened Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-[#0a0b0d]/75 pointer-events-none" />

        {/* Narrative Layers */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-24 md:py-28 pointer-events-none">
          {/* Top Status */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c99750]/35 bg-[#12141c]/85 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c99750] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#f5f1eb] font-medium">
                {activeChapter}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-xs tracking-wider text-[#a0adc2]">
              <div className="flex items-center gap-2">
                <GlassWater className="w-4 h-4 text-[#c99750]" />
                <span>Estate Grown Wine & On-Site Brewery</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#3e4657]" />
              <span>5,000 Pristine Albemarle Acres</span>
            </div>
          </div>

          {/* Central Narrative */}
          <div className="my-auto max-w-3xl">
            {scrollProgress < 0.35 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <div className="inline-block">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#c99750] font-semibold border-b border-[#c99750]/40 pb-1">
                    Charlottesville Historic Vineyard & Estate
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f1eb] leading-[1.08]">
                  Five Thousand Acres. <br />
                  <span className="wine-gradient-text">Timeless Virginia</span> Splendor.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#cbd6e2] font-light max-w-2xl leading-relaxed">
                  Discover a secluded pastoral sanctuary in Albemarle County. Sun-drenched vineyards, an on-site craft brewery, monumental cedar event lodges, and private luxury accommodations.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenReservation}
                    className="glass-button px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-[#0a0b0d] bg-[#c99750] hover:bg-[#e5b672] transition-all flex items-center gap-2 shadow-xl"
                  >
                    <span>Reserve Tasting Experience</span>
                    <ChevronRight className="w-4 h-4 text-[#0a0b0d]" />
                  </button>
                  <a
                    href="#experiences"
                    className="px-6 py-3.5 rounded-full border border-[#343e50] bg-[#141724]/60 backdrop-blur-md text-xs tracking-[0.18em] uppercase text-[#f5f1eb] hover:border-[#c99750]/60 transition-all"
                  >
                    Explore Venues & Grounds
                  </a>
                </div>
              </div>
            )}

            {scrollProgress >= 0.35 && scrollProgress < 0.70 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c99750] font-semibold border-b border-[#c99750]/40 pb-1">
                  The Lodge & Waterfront Celebrations
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f1eb] leading-tight">
                  Grand Cedar Architecture. <br />
                  <span className="wine-gradient-text">Lakeside</span> Vows.
                </h2>
                <p className="text-sm sm:text-base text-[#cbd6e2] max-w-xl leading-relaxed">
                  Whether hosting a 300-guest celebration in The Lodge or an intimate twilight dinner in The Historic Event Barn, Mount Ida provides an unforgettable backdrop.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2 max-w-md">
                  <div className="border border-[#262e3e] bg-[#10141e]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8c9cae]">Domain</span>
                    <span className="text-lg font-bold text-[#f5f1eb]">5,000 Ac</span>
                  </div>
                  <div className="border border-[#262e3e] bg-[#10141e]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8c9cae]">Venues</span>
                    <span className="text-lg font-bold text-[#f5f1eb]">4 Settings</span>
                  </div>
                  <div className="border border-[#262e3e] bg-[#10141e]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8c9cae]">Ratings</span>
                    <span className="text-lg font-bold text-[#c99750]">Award-Winning</span>
                  </div>
                </div>
              </div>
            )}

            {scrollProgress >= 0.70 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c99750] font-semibold border-b border-[#c99750]/40 pb-1">
                  Artisanal Wine & Craft Brews
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f1eb] leading-tight">
                  Hand-Harvested Fruit. <br />
                  <span className="wine-gradient-text">Small-Batch</span> Excellence.
                </h2>
                <p className="text-sm sm:text-base text-[#cbd6e2] max-w-xl leading-relaxed">
                  French oak aging, estate viticulture, and mountain spring water fuel our award-winning wine and beer portfolio.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenReservation}
                    className="glass-button px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-[#f5f1eb] border border-[#c99750] flex items-center gap-2"
                  >
                    <span>Reserve Private Tasting</span>
                    <ChevronRight className="w-4 h-4 text-[#c99750]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto border-t border-[#1e2330] pt-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#8c9cae]">Estate Walkthrough</span>
              <div className="w-32 sm:w-48 h-1.5 rounded-full bg-[#1e2330] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c99750] to-[#e5b672] transition-all duration-150"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
              <span className="text-xs font-mono text-[#c99750]">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8c9cae] animate-bounce">
              <span>Scroll to explore estate</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#c99750]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
