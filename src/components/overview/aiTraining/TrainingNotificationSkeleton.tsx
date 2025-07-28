import { Skeleton } from "@/components/ui/skeleton";

const TrainingNotificationSkeleton = () => {
  return (
    <div className="relative left-0">
      <div className="p-6 pb-0">
        <div className="relative flex-1 p-6 pt-0 space-y-4 border-l border-gray-200">
          {/* Title */}
          <Skeleton className="h-2 w-1/3 bg-gray-200 rounded" />

          {/* Category block */}
          <div className="w-full border border-gray-200 rounded-md px-6 py-8">
            <div className="flex items-center justify-between gap-4">
              {/* Icon + Category name */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 bg-gray-300 rounded" />
                <Skeleton className="h-4 w-150 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingNotificationSkeleton;
