import { Skeleton } from "@/components/ui/skeleton";

const MessageSkeleton = () => (
  <div className="border-1 border-gray-200 rounded-sm p-5 bg-white shadow-sm mb-8">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-5 w-10 rounded-full" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>

    <Skeleton className="h-20 w-full mb-4" />

    <div className="flex justify-between mt-5">
      <Skeleton className="h-8 w-8 rounded-sm" />

      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-8 rounded-sm" />
        <Skeleton className="h-8 w-24 rounded-sm" />
      </div>
    </div>
  </div>
);

export default MessageSkeleton;
