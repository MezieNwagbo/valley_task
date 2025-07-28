import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheck } from "lucide-react";

import type { TrainingNotificationItem } from "@/api/getTrainingNotifications";
import {
  renderCategory,
  renderIcon,
  renderCategoryContent,
} from "@/utils/utils";

type Props = TrainingNotificationItem;

const TrainingNotification = ({
  title,
  category,
  details,
  avatars = [],
  rating = 0,
  timestamp,
}: Props) => {
  const hasDetails = !!details;
  const isProspectAdded = category === "Prospect added";
  const isRating = category === "Feedback";

  return (
    <div className="relative left-0">
      <CircleCheck
        className="absolute left-[13px] top-[3px] h-6 w-6 z-10"
        fill="#00B7C8"
        stroke="white"
      />

      <div className="p-6 pb-0">
        <div className="relative flex-1 overflow-y-auto p-6 pt-0 space-y-4 border-l border-gray-300">
          <p className="text-xs text-gray-500">
            {title} <span className="mx-1">•</span> {timestamp}
          </p>

          {hasDetails ? (
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full border border-gray-200 rounded-md shadow-sm px-5"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline hover:no-underline focus:no-underline cursor-pointer text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    {renderIcon(category, rating)}
                    {renderCategory(category)}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>{details}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            // Items without details
            <div className="w-full border border-gray-200 rounded-md shadow-sm p-4 text-sm text-gray-500 flex items-center justify-between">
              {isProspectAdded ? (
                <div className="flex -space-x-2">
                  {avatars.slice(0, 5).map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Avatar ${idx + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 p-3">
                  {renderIcon(category, rating)}
                  <span>{renderCategoryContent(isRating, rating)}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingNotification;
