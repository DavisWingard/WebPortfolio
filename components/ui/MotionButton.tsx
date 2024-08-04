import React from "react";
import { motion } from "framer-motion";

const MotionButton = ({
  title,
  imageSrc,
  icon,
  position,
  handleClick,
  otherClasses,
  initial,
  animate,
  transition,
}: {
  title?: string;
  imageSrc?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}) => {
  return (
    <motion.button
      className={`relative p-0 ${otherClasses} flex items-center justify-center`} // Adjusted padding
      initial={initial || { y: -100, opacity: 0 }}
      animate={animate || { y: 0, opacity: 1 }}
      transition={transition || { delay: 1.9, duration: 0.5 }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-md" />
      <div className="bg-background rounded-[6px] relative group transition duration-300 text-slate-300 font-bold hover:bg-transparent flex items-center justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="button image"
            className="" // Fixed size
          />
        ) : (
          <>
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </>
        )}
      </div>
    </motion.button>
  );
};

export default MotionButton;
