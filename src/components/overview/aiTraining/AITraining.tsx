import { useState, useMemo } from "react";
import ChatInput from "../ChatInput";
import FilterBar from "./FilterBar";
import TrainingNotification from "./TrainingNotification";
import TrainingNotificationSkeleton from "./TrainingNotificationSkeleton";

import { Sparkles } from "lucide-react";
import { useTrainingNotifications } from "@/api/getTrainingNotifications";
import EmptyData from "@/components/EmptyData";

const AITraining = () => {
  const { data = [], isLoading, isError } = useTrainingNotifications();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isIncludedData, setIsIncludedData] = useState("included");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const categories = useMemo(() => {
    const unique = new Set(data.map((item) => item.category));
    return Array.from(unique);
  }, [data]);

  const filtered = useMemo(() => {
    if (selectedCategories.length === 0) return data;
    return data.filter((item) => selectedCategories.includes(item.category));
  }, [data, selectedCategories]);

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="py-2 px-6">
        <FilterBar
          categories={categories}
          selected={selectedCategories}
          toggle={toggleCategory}
          isIncluded={isIncludedData}
          setIsIncluded={setIsIncludedData}
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 mt-3 pb-20 space-y-4">
        {isLoading && (
          <>
            <TrainingNotificationSkeleton />
            <TrainingNotificationSkeleton />
            <TrainingNotificationSkeleton />
            <TrainingNotificationSkeleton />
          </>
        )}

        {isError && (
          <p className="text-sm text-red-500">Failed to load notifications</p>
        )}

        <section aria-label="Training Notifications">
          {isIncludedData === "excluded" ? (
            <EmptyData />
          ) : (
            filtered.map((notification) => (
              <TrainingNotification key={notification.id} {...notification} />
            ))
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 px-6 py-3 pb-10 z-10 w-6/7 xl:w-[calc(100%-550px)] bg-white">
        <ChatInput icon={<Sparkles className="" />} />
      </footer>
    </div>
  );
};

export default AITraining;
