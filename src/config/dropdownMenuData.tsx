import { Hand, Archive, Trash2, Edit, Copy, History } from "lucide-react";

export const pageOptions = [
  {
    label: "Archive",
    icon: <Archive size={16} />,
  },
  {
    label: "Delete",
    icon: <Trash2 size={16} />,
  },
  {
    label: "Do not contact",
    icon: <Hand size={16} />,
  },
];

export const writingStyleOptions = [
  {
    label: "Edit",
    icon: <Edit />,
  },
  {
    label: "Duplicate",
    icon: <Copy />,
  },
];

export const sequenceVersionHistory = [
  {
    label: "Version 1",
    value: "1",
    icon: <History className="h-4 w-4 text-gray-500" />,
  },
  {
    label: "Version 2",
    value: "2",
    icon: <History className="h-4 w-4 text-gray-500" />,
  },
];
