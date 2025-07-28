import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Funnel, Signature } from "lucide-react";

import BadgeCustom from "../../BadgeCustom";
import { writingStyleOptions } from "@/config/dropdownMenuData";
import DropdownCustom from "../../DropdownCustom";
import DropdownMultiSelect from "../../DropdownMultiselect";

type FilterBarProps = {
  categories: string[];
  selected: string[];
  toggle: (cat: string) => void;
  isIncluded: string;
  setIsIncluded: (included: string) => void;
};

const FilterBar = ({
  categories,
  selected,
  toggle,
  isIncluded,
  setIsIncluded,
}: FilterBarProps) => {
  return (
    <header
      className="flex justify-between items-center"
      aria-label="Filter controls"
    >
      <div className="flex items-center gap-2">
        <Tabs
          defaultValue={isIncluded === "excluded" ? "Excluded" : "Included"}
        >
          <TabsList className="rounded-sm border border-gray-200">
            <TabsTrigger
              value="Included"
              className="rounded-sm p-3 cursor-pointer"
              onClick={() => setIsIncluded("included")}
              aria-label="Show included notifications"
            >
              Included
            </TabsTrigger>
            <TabsTrigger
              value="Excluded"
              className="rounded-sm p-3 cursor-pointer"
              onClick={() => setIsIncluded("excluded")}
              aria-label="Show excluded notifications"
            >
              Excluded
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <DropdownMultiSelect
          items={categories}
          selected={selected}
          toggle={toggle}
          icon={<Funnel className="h-4 w-4 text-gray-500" />}
        />
      </div>

      <DropdownCustom
        label={
          <BadgeCustom
            label={`Zayd's Writing Style`}
            size="lg"
            icon={<Signature className="h-3 w-3 text-gray-400" />}
            bg="#fff"
            hasChevron={true}
          />
        }
        items={writingStyleOptions}
      />
    </header>
  );
};

export default FilterBar;
