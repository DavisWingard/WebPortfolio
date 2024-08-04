import React from "react";
import { motion } from "framer-motion";

const MotionButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  initial,
  animate,
  transition,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}) => {
  return (
    <motion.button
      className={`relative p-[1px] ${otherClasses}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.5 }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-md" />
      <div className="bg-background rounded-[6px] relative group transition duration-300 text-slate-300 font-bold hover:bg-transparent">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </div>
    </motion.button>
  );
};

export default MotionButton;
