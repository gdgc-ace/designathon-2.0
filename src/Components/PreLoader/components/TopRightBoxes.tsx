import { motion } from "framer-motion";

interface Props {
  progress: number;
}

const topRow = [
  { x: 0, y: 0 },
  { x: 79, y: 0 },
  { x: 159, y: 0 },
  { x: 239, y: 0 },
  { x: 319, y: 0 },
  { x: 399, y: 0 },
];

const bottomRow = [
  { x: 40, y: 40 },
  { x: 119, y: 40 },
  { x: 199, y: 40 },
  { x: 279, y: 40 },
  { x: 359, y: 40 },
  { x: 439, y: 40 },
];

const TopRightBoxes = ({ progress }: Props) => {
  const activePairs = Math.floor((progress / 100) * topRow.length);

  return (
    <div className="overflow-hidden w-[140px] sm:w-[180px] md:w-[260px] lg:w-[360px] xl:w-[440px]">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 479 80"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* TOP ROW */}
        {topRow.map((r, i) => {
          const active = i < activePairs;

          return (
            <motion.rect
              key={`top-${i}`}
              x={r.x}
              y={r.y}
              width="40"
              height="40"
              fill="#F27C06"
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            />
          );
        })}

        {/* BOTTOM ROW */}
        {bottomRow.map((r, i) => {
          const active = i < activePairs;

          return (
            <motion.rect
              key={`bottom-${i}`}
              x={r.x}
              y={r.y}
              width="40"
              height="40"
              fill="#F27C06"
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default TopRightBoxes;