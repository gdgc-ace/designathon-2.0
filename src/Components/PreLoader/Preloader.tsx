import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopRightBoxes from "./components/TopRightBoxes";
import SphereCanvas from "./components/SphereCanvas";
import SkewProgressBar from "./components/SkewProgressBar";

interface PreloaderProps {
  critical: string[];
  deferred?: string[];
  onComplete: () => void;
}

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => resolve();
  });

const Preloader = ({ critical, deferred = [], onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = Math.max(critical.length, 1);

    const loadAll = async () => {
      const start = performance.now();

      await Promise.all(
        critical.map(async (src) => {
          await preloadImage(src);
          loaded++;

          const percent = (loaded / total) * 80;
          setProgress(percent);
        }),
      );

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, 2500 - elapsed);

      const startValue = progress;
      const startTime = performance.now();

      const animate = () => {
        const t = Math.min(1, (performance.now() - startTime) / remaining);

        const value = startValue + (100 - startValue) * t;
        setProgress(value);

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          setProgress(100);
          setIsLoaded(true);
        }
      };

      requestAnimationFrame(animate);

      deferred.forEach(preloadImage);
    };

    loadAll();
  }, [critical, deferred]);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(onComplete, 700);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-9999 bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* TOP RIGHT BOXES */}
          <div className=" absolute top-6 right-4 w-35 sm:w-45 md:top-10 md:right-0 md:w-auto">
            <TopRightBoxes progress={progress} />
          </div>

          {/* BOTTOM SECTION */}
          <div className=" absolute bottom-6 left-0 w-full px-6 md:bottom-10 md:left-20 md:w-[90%] md:px-0">
            {/* TEXT + MOBILE SPHERE */}
            <div className=" flex items-end justify-between  md:block ">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wide ">
                And the Universe awakens...
              </p>

              {/* MOBILE SPHERE */}
              <div className="w-17.5 h-17.5 md:hidden">
                <SphereCanvas />
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full md:max-w-225">
              <SkewProgressBar progress={progress} />
            </div>
          </div>

          {/* DESKTOP SPHERE */}
          <div className="hidden md:block absolute bottom-6 right-20 w-45 h-45">
            <SphereCanvas />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
