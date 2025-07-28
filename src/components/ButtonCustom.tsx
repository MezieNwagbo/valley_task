import { Button } from "@/components/ui/button";
import { type ReactNode } from "react";
import clsx from "clsx";

type CustomButtonProps = {
  label?: string;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  height?: string;
  rounded?: string;
  className?: string;
  onClick?: () => void;
};

const ButtonCustom = ({
  label,
  icon,
  bgColor = "bg-gray-800",
  textColor = "text-gray-300",
  borderColor = "border-transparent",
  height = "h-8",
  rounded = "rounded-sm",
  className = "",
  onClick,
}: CustomButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-1 px-3 py-2 border cursor-pointer",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "hover:bg-inherit hover:text-inherit",
        "active:bg-inherit active:text-inherit",
        bgColor,
        textColor,
        borderColor,
        height,
        rounded,
        `hover:${bgColor}`,
        `hover:${textColor}`,
        `hover:${borderColor}`,
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {label && <span>{label}</span>}
    </Button>
  );
};

export default ButtonCustom;
