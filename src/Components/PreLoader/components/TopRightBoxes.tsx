import React from "react";

const TopRightBoxes = () => {
  return (
    <div className="flex flex-col  items-center justify-center fixed top-0 right-0 mr-10 m-1">
      {/* Top row - 6 boxes */}
      <div className="flex gap-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`top-${i}`}
            className="h-12 w-12 bg-[#F27C06]"
            style={{
              animation: "boxLoad 10s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Bottom row - 6 boxes, offset to create zig-zag */}
      <div className="flex gap-12 translate-x-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="h-12 w-12 bg-[#F27C06]"
            style={{
              animation: "boxLoad 10s ease-in-out infinite",
              animationDelay: `${i * 0.15 + 0.075}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRightBoxes;
