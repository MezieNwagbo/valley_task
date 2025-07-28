import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  label: string;
  icon?: ReactNode;
  bg?: string;
  textColor?: string;
  border?: string;
  borderStyle?: "solid" | "dotted";
  size?: "sm" | "md" | "lg";
  hasChevron?: boolean;
};

const BadgeCustom = ({
  label,
  icon,
  bg = "bg-gray-100",
  textColor = "text-gray-500",
  borderStyle = "solid",
  border = "border border-gray-300",
  size = "md",
  hasChevron = false,
}: BadgeProps) => {
  const sizeStyles = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-0.5",
    // lg: "text-base px-3 py-1",
    lg: "text-sm px-2.5 py-1.5",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded font-medium gap-1",
        textColor,
        bg,
        border,
        sizeStyles[size],
        {
          "border-solid": borderStyle === "solid",
          "border-dotted": borderStyle === "dotted",
        }
      )}
    >
      <div className="flex items-center">
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </div>
      {hasChevron && <ChevronDown className="h-4 w-4 mt-0.5 text-gray-600" />}
    </span>
  );
};

export default BadgeCustom;
