import { motion } from "framer-motion";

interface Props {
  progress: number;
}

const segments = [
  "M82.3565 39L118 10H46.7939L82.3565 39Z",
  "M47.1584 10L82.3969 39H12L47.1584 10Z",
  "M11 31.0234L38 9.99844H11L11 31.0234Z",

  "M163.356 39L199 10H127.794L163.356 39Z",
  "M128.158 10L163.397 39H93L128.158 10Z",

  "M244.356 39L280 10H208.794L244.356 39Z",
  "M209.158 10L244.397 39H174L209.158 10Z",

  "M325.356 39L361 10H289.794L325.356 39Z",
  "M290.158 10L325.397 39H255L290.158 10Z",

  "M406.356 39L442 10H370.794L406.356 39Z",
  "M371.158 10L406.397 39H336L371.158 10Z",

  "M487.356 39L523 10H451.794L487.356 39Z",
  "M452.158 10L487.397 39H417L452.158 10Z",

  "M568.356 39L604 10H532.794L568.356 39Z",
  "M533.158 10L568.397 39H498L533.158 10Z",

  "M649.356 39L685 10H613.794L649.356 39Z",
  "M614.158 10L649.397 39H579L614.158 10Z",

  "M730.356 39L766 10H694.794L730.356 39Z",
  "M695.158 10L730.397 39H660L695.158 10Z",

  "M811.356 39L847 10H775.794L811.356 39Z",
  "M776.158 10L811.397 39H741L776.158 10Z",

  "M892.356 39L928 10H856.794L892.356 39Z",
  "M857.158 10L892.397 39H822L857.158 10Z",

  "M973.356 39L1009 10H937.794L973.356 39Z",
  "M938.158 10L973.397 39H903L938.158 10Z",

  // EXTRA hidden segment (extends bar)
  "M1054 39L1090 10H1018L1054 39Z",
  "M1018 10L1054 39H983L1018 10Z",
];

const SkewProgressBar = ({ progress }: Props) => {
  const visibleCount = Math.ceil((progress / 100) * segments.length);

  return (
    <div className="w-full overflow-hidden">
      <svg
        width="100%"
        height="48"
        viewBox="0 0 1010 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {segments.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            fill="#D9D9D9"
            initial={{ opacity: 0 }}
            animate={{ opacity: i < visibleCount ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
        ))}

        <rect
          x="0.5"
          y="0.5"
          width="1009"
          height="48"
          rx="7.5"
          stroke="#F5F5F5"
        />
      </svg>
    </div>
  );
};

export default SkewProgressBar;