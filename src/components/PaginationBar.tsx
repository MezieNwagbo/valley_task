import { X, ChevronUp, ChevronDown } from "lucide-react";

import { metaData } from "@/config/paginationData";

const PaginationBar = () => {
  return (
    <div className="flex items-center gap-2 p-4">
      <X size={16} className="text-gray-600 cursor-pointer" />

      <button className="p-1 border border-gray-200 rounded">
        <ChevronUp size={20} className="text-gray-400" />
      </button>

      <button className="p-1 border border-gray-200 rounded">
        <ChevronDown size={20} className="text-gray-400" />
      </button>

      <span className="text-gray-600 text-sm">
        {metaData.start} of {metaData.totalItems} in{" "}
        <span className="underline underline-offset-2">
          {metaData.documentName}
        </span>
      </span>
    </div>
  );
};

export default PaginationBar;
