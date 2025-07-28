import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { ReactNode } from "react";

export type DropdownItem = {
  label: string;
  icon: ReactNode;
  showChevron?: boolean;
  onSelect?: () => void;
};

type DropdownProps = {
  label: ReactNode;
  items: DropdownItem[];
  stayOnClick?: boolean;
  handleDropdownSelect?: (item: DropdownItem) => void;
};

const DropdownCustom = ({
  label,
  items,
  stayOnClick,
  handleDropdownSelect,
}: DropdownProps) => {
  const handleSelect = (e: Event, item: DropdownItem) => {
    if (stayOnClick) {
      e.preventDefault();
    }
    handleDropdownSelect?.(item);
  };

  return (
    <DropdownMenu>
      <div>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-1 text-sm text-gray-700shadow-none outline-none ring-0 border-none hover: focus:outline-none focus:ring-0  cursor-pointer">
            {label}
          </button>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent align="end" className="w-52">
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={(e) => handleSelect(e, item)}
            className="flex items-center gap-2"
          >
            {item.icon}
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownCustom;
