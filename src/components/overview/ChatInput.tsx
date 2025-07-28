import { Textarea } from "@/components/ui/textarea";

type ChatInputProps = {
  placeholder?: string;
  icon?: React.ReactNode;
};

const ChatInput = ({ placeholder, icon }: ChatInputProps) => {
  return (
    <form className="relative">
      <Textarea
        placeholder={placeholder || "Prompt to train messaging style..."}
        rows={1}
        className="flex-1 resize-none text-sm rounded-full p-5 bg-white h-12"
      ></Textarea>

      {icon && (
        <div className="absolute right-10 top-6 -translate-y-1/2 text-gray-400 h-3 w-3 pointer-events-none">
          {icon}
        </div>
      )}
    </form>
  );
};

export default ChatInput;
