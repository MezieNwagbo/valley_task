import PaginationBar from "./PaginationBar";
import { MoreVertical } from "lucide-react";

import DropdownCustom from "./DropdownCustom";

import { pageOptions } from "@/config/dropdownMenuData";

const MenuBar = () => {
  return (
    <div className="flex items-center justify-between">
      <PaginationBar />

      <DropdownCustom label={<MoreVertical size={18} />} items={pageOptions} />
    </div>
  );
};

export default MenuBar;
