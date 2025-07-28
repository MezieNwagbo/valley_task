import { useQuery } from "@tanstack/react-query";

type Message = {
  id: string;
  content: string;
  score: number;
  status: "pending" | "approved" | "rejected";
};

type MessageApiResponse = {
  version: string;
  label: string;
  messages: Message[];
};

type Version = "1" | "2";

export const fetchMessages = async (): Promise<MessageApiResponse> => {
  // Simulate latency
  await new Promise((r) => setTimeout(r, 800));

  return {
    version: "1",
    label: "default",
    messages: [
      {
        id: "msg-1",
        content:
          "Hi Anna, Check out the following documentation on training buisinesses on AI literacy, well worth a read",
        score: 70,
        status: "pending",
      },
      {
        id: "msg-2",
        content:
          "Hey John! Hope Q2 has been treating you well. I’d love to share how we’re helping B2B teams streamline outreach.",
        score: 34,
        status: "approved",
      },
      {
        id: "msg-3",
        content:
          "Hi everyone, just checking to see if you got the memo on the newly installed process documentation before launch, thanks.",
        score: 34,
        status: "approved",
      },
    ],
  };
};

export const fetchMessagesV2 = async (): Promise<MessageApiResponse> => {
  // Simulate latency
  await new Promise((r) => setTimeout(r, 800));

  return {
    version: "2",
    label: "Most recent",
    messages: [
      {
        id: "msg-1",
        content:
          "Hey Crew, Hope you are doing awesome! We've got some juicy reds for you about self custody and shaking off the chains of traditional finance. Check it out",
        score: 24,
        status: "pending",
      },
      {
        id: "msg-2",
        content:
          "Hey John! Hope Q2 has been treating you well. I’d love to share how we’re helping B2B teams streamline outreach.",
        score: 92,
        status: "approved",
      },
    ],
  };
};

export const useMessages = (version: Version = "1") => {
  return useQuery({
    queryKey: ["messages", version],
    queryFn: () => (version === "2" ? fetchMessagesV2() : fetchMessages()),
  });
};
