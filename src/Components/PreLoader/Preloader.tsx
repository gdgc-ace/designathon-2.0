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

const MIN_LOADER_TIME = 10000; // 5 seconds :- This is the minimum time the loader will show, even if assets load faster. Adjust as needed.

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
  let loadedCount = 0;
  const total = Math.max(critical.length, 1);

  const loadAll = async () => {
    const start = performance.now();

    await Promise.all(
      critical.map(async (src) => {
        await preloadImage(src);
        loadedCount++;

        const percent = Math.min(
          100,
          Math.round((loadedCount / total) * 100)
        );

        setProgress(percent);
      })
    );

    // ensure final state
    setProgress(100);

    const elapsed = performance.now() - start;
    const remaining = Math.max(0, 2000 - elapsed);

    setTimeout(() => {
      setIsLoaded(true);
    }, remaining);

    // background assets
    deferred.forEach((src) => preloadImage(src));
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
          className="fixed inset-0 z-[9999] bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* TOP RIGHT BOXES */}
          <div className="absolute top-10 right-10">
            <TopRightBoxes progress={progress} />
          </div>

          {/* BOTTOM LEFT CONTENT */}
          <div className="absolute bottom-10 left-20 w-[80%]">
            <p className="text-white text-3xl mb-6 font-light tracking-wide">
              And the Universe awakens...
            </p>
            {/* progress */}
            <div className="w-full max-w-225">
              <SkewProgressBar progress={progress} />
            </div>

            {/* stripes */}
            {/* <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)",
                  animation: "stripeMove 1s linear infinite",
                }}
              /> */}
          </div>

          {/* SPHERE */}
          <div className="absolute bottom-6 right-25">
            <SphereCanvas />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
