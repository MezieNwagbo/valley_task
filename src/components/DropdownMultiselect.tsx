import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

type CategoryFilterDropdownProps = {
  items: string[];
  selected: string[];
  toggle: (category: string) => void;
  name?: string;
  icon?: React.ReactNode;
};

const DropdownMultiSelect = ({
  name = "Types",
  items,
  selected,
  toggle,
  icon,
}: CategoryFilterDropdownProps) => {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit cursor-pointer"
        >
          <span>{icon}</span>
          {selected.length > 0 ? `Filtering (${selected.length})` : name}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <div className="p-2 space-y-2">
          <div className="relative">
            <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={`Search ${name.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-8 text-sm"
            />
          </div>

          <div className="max-h-60 overflow-y-auto space-y-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Checkbox
                    checked={selected.includes(item)}
                    onCheckedChange={() => toggle(item)}
                  />
                  {item}
                </label>
              ))
            ) : (
              <div className="text-xs text-gray-400 italic px-1 py-2">
                No matches found
              </div>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMultiSelect;
