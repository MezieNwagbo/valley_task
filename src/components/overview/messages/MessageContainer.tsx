import { useState } from "react";

import { FolderSync, SunDim, CalendarClock } from "lucide-react";
import ButtonCustom from "@/components/ButtonCustom";
import { Mail, Edit, CheckCheck } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import DropdownCustom from "@/components/DropdownCustom";
import BadgeCustom from "@/components/BadgeCustom";
import { sequenceVersionHistory } from "@/config/dropdownMenuData";
import { fetchMessages, fetchMessagesV2 } from "@/api/getMessages";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import MessageSkeleton from "./MessageSkeleton";

const MessageContainer = () => {
  const [selectedLabel, setSelectedLabel] = useState("Version 2");
  const selectedVersion = selectedLabel.split(" ")[1];

  const { data, isLoading } = useQuery({
    queryKey: ["messages", selectedVersion],
    queryFn: () =>
      selectedVersion === "1" ? fetchMessages() : fetchMessagesV2(),
  });

  if (isLoading)
    return (
      <>
        <div className="flex items-center justify-between py-5">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-60 rounded-md" />
        </div>
        {[...Array(2)].map((_, idx) => (
          <MessageSkeleton key={idx} />
        ))}
      </>
    );

  return (
    <>
      <div className="flex items-center justify-between py-5">
        <span className="text-sm font-medium text-gray-400">
          Version {selectedVersion} - {data?.label}
        </span>

        <DropdownCustom
          label={
            <BadgeCustom
              label="Sequence version history"
              size="lg"
              icon={<CalendarClock className="h-4 w-4 text-gray-700" />}
              bg="#fff"
              hasChevron={true}
            />
          }
          items={sequenceVersionHistory}
          handleDropdownSelect={(item) => {
            setSelectedLabel(item.label);
          }}
        />
      </div>

      {data?.messages.map((message) => (
        <div
          className="border-1 border-gray-200 rounded-sm p-5 bg-white shadow-sm mb-8"
          key={message.id}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FolderSync className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">
                  Connect Message
                </span>
              </div>

              <div className="flex items-center gap-2">
                <SunDim className="h-5 w-5 text-gray-400" />
                <p className="text-sm font-medium text-gray-400">
                  Justification
                </p>
                <Switch
                  id="dark-mode"
                  className="bg-gray-200 data-[state=checked]:bg-gray-400"
                />

                <div className="border-l-2 border-gray-200 pl-2">
                  <span className="text-sm font-medium text-gray-400">
                    Score:{" "}
                    <span
                      className={`${
                        message.score > 50 ? "text-green-500" : "text-red-400"
                      }`}
                    >
                      {message.score}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`text-sm font-medium text-gray-700 border-r  drop-shadow-accent-foreground p-4 pl-0 ${
                message.score > 50
                  ? "border-r-green-100 shadow-green-100"
                  : "border-r-red-100 shadow-red-100"
              }`}
            >
              {message.content}
            </div>

            <div className="flex justify-between mt-5">
              <ButtonCustom
                icon={<Edit />}
                bgColor="bg-white"
                borderColor="border-gray-300"
                className="text-gray-500"
              />

              <div className="flex items-center gap-2">
                <div className="border-r border-r-gray-200 pr-4">
                  <ButtonCustom
                    icon={<Mail />}
                    bgColor="bg-white"
                    borderColor="border-gray-300"
                    className="text-gray-500"
                  />
                </div>

                <div className="pl-2">
                  <ButtonCustom
                    label="Approve"
                    icon={<CheckCheck />}
                    bgColor="bg-gradient-to-t from-black to-gray-400"
                    borderColor="border-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageContainer;
