const MissionGuidelines = () => {
  return (
    <section className="min-h-screen w-full bg-background border-t border-white/10 relative overflow-hidden">
      {/* Orange corner decorations */}
      <div className="absolute top-4 left-4 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="w-6 h-6 bg-orange-500" />
        <div className="w-6 h-6 bg-orange-500" />
        <div className="w-6 h-6 bg-orange-500" />
      </div>

      <div className="absolute top-4 right-4 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="col-start-1 row-start-1 w-5 h-5 bg-orange-500" />
        <div className="col-start-2 row-start-1 w-5 h-5 bg-orange-500" />
        <div className="col-start-2 row-start-2 w-5 h-5 bg-orange-500" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 relative">
        {/* Title */}
        <h2 className="text-center text-5xl md:text-7xl font-bold tracking-widest text-white mb-20">
          MISSION GUIDELINES
        </h2>

        {/* MAIN FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 w-full lg:w-1/4">
            {/* Guideline 1 */}
            <div className="h-64 bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/20 flex flex-col justify-start pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-orange-500" />
                <h3 className="text-white text-xl font-bold tracking-wider">
                  Guideline 1
                </h3>
              </div>
              <div className="space-y-1 text-white/70 text-sm tracking-wide">
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
              </div>
            </div>

            {/* Guideline 2 */}
            <div className="h-64 bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/20 flex flex-col justify-start pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-orange-500" />
                <h3 className="text-white text-xl font-bold tracking-wider">
                  Guideline 2
                </h3>
              </div>
              <div className="space-y-1 text-white/70 text-sm tracking-wide">
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
              </div>
            </div>
          </div>

          {/* CENTER VISUAL */}
          <div className="w-full lg:w-2/4 flex flex-wrap gap-2">
            {/* Top Left */}
            <div
              className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
              style={{
                backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 0%",
              }}
            >
              <div className="absolute top-3 left-3 text-white text-[10px] tracking-widest">
                ACCRETION DISK
              </div>
            </div>

            {/* Top Right */}
            <div
              className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
              style={{
                backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 0%",
              }}
            >
              <div className="absolute top-3 left-3 text-white text-[10px] tracking-widest">
                TON-618
              </div>
            </div>

            {/* Bottom Left */}
            <div
              className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
              style={{
                backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 100%",
              }}
            >
              <div className="absolute top-3 left-3 text-white text-[10px] tracking-widest">
                PHOTON DISK
              </div>
            </div>

            {/* Bottom Right */}
            <div
              className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
              style={{
                backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 100%",
              }}
            >
              {/* CTA */}
              <div className=" absolute bottom-5 right-3">
                <button className="h-12 w-50 bg-orange-500 hover:bg-orange-600 transition-colors rounded-md text-white font-bold tracking-widest text-sm uppercase">
                  Download Guidelines
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 w-full lg:w-1/4">
            {/* Guideline 3 */}
            <div className="h-64 bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/20 flex flex-col justify-start pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-orange-500" />
                <h3 className="text-white text-xl font-bold tracking-wider">
                  Guideline 3
                </h3>
              </div>
              <div className="space-y-1 text-white/70 text-sm tracking-wide">
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
              </div>
            </div>

            {/* Guideline 4 */}
            <div className="h-64 bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/20 flex flex-col justify-start pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-orange-500" />
                <h3 className="text-white text-xl font-bold tracking-wider">
                  Guideline 4
                </h3>
              </div>
              <div className="space-y-1 text-white/70 text-sm tracking-wide">
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
                <p>yap yap yap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGuidelines;
