import {
  SquarePen,
  SendHorizontal,
  Brain,
  SendHorizonal,
  Star,
  StarOff,
} from "lucide-react";

export const renderCategory = (category: string) => {
  switch (category) {
    case "Human edits":
      return "Manual changes";
    case "Custom messages":
      return "Custom message";
    case "Regenerated messaging":
      return "Generated message";
    case "Feedback":
      return "Rating";
    default:
      return category;
  }
};

export const renderIcon = (category: string, rating: number) => {
  switch (category) {
    case "Human edits":
      return <SquarePen className="h-4 w-4 text-gray-500" />;
    case "Updated datapoint":
      return <SendHorizontal className="h-4 w-4 text-gray-500" />;
    case "Custom messages":
      return <SendHorizonal className="h-4 w-4 text-gray-500" />;
    case "Prompt":
      return <Brain className="h-4 w-4 text-gray-500" />;
    case "Regenerated messaging":
      return <Brain className="h-4 w-4 text-gray-500" />;
    case "Feedback":
      return (
        <span className="text-xs text-gray-600 font-medium">{rating}/5</span>
      );
    default:
      return null;
  }
};

export const renderCategoryContent = (isRating: boolean, rating: number) => {
  if (isRating) {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <Star key={i} className="h-4 w-4 text-gray-300 fill-gray-300" />
          ) : (
            <StarOff key={i} className="h-4 w-4 text-gray-300" />
          )
        )}
      </div>
    );
  }
};
