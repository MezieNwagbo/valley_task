import { Check } from "lucide-react";
import { type ReactNode, useState } from "react";
import clsx from "clsx";

type SelectionTagProps = {
  icon?: ReactNode;
  label: string;
  rounded?: string;
  activeBorderColor?: string;
  onToggle?: (active: boolean) => void;
};

const SelectionTag = ({
  icon,
  label,
  rounded = "rounded-full",
  activeBorderColor = "border-[#00B7C8]",
  onToggle,
}: SelectionTagProps) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    const next = !active;
    setActive(next);
    onToggle?.(next);
  };

  return (
    <button
      type="button"
      onClick={toggleActive}
      className={clsx(
        "flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-colors duration-200",
        rounded,
        active
          ? `${activeBorderColor} border-2`
          : "border-gray-300 shadow-sm hover:shadow-md",
        "bg-white text-gray-700"
      )}
    >
      {icon && <span className="text-gray-500">{icon}</span>}
      <span>{label}</span>
      {active && <Check className="ml-auto text-gray-500 w-4 h-4 shrink-0" />}
    </button>
  );
};

export default SelectionTag;
