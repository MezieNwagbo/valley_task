import { Brain, RotateCw, SendHorizonal, Tally4 } from "lucide-react";
import ChatInput from "../ChatInput";
import SelectionTag from "@/components/SelectionTag";

const MessageInputSection = () => {
  return (
    <div className="fixed bottom-3 bg-white px-6 py-3 z-10 w-6/7 xl:w-[calc(100%-550px)]">
      <ChatInput
        icon={<SendHorizonal />}
        placeholder="Write a custom message..."
      />

      <div className="flex justify-center items-center gap-3 mt-6">
        <SelectionTag
          label="Custom Message"
          icon={<Tally4 className="h-4 w-4" />}
        />
        <SelectionTag
          label="Regenerate"
          icon={<RotateCw className="h-4 w-4" />}
        />
        <SelectionTag label="Prompt" icon={<Brain className="h-4 w-4" />} />
      </div>
    </div>
  );
};

export default MessageInputSection;
