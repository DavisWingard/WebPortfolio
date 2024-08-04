import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[1px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-md" />
      <div className="px-8 py-2  bg-background rounded-[6px]  relative group transition duration-300 text-slate-300 hover:bg-transparent">
        {title}
      </div>
    </button>
  );
};

export default MagicButton;
