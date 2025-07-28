import { useQuery } from "@tanstack/react-query";

export type TrainingNotificationItem = {
  id: string;
  title: string;
  status: "complete" | "in_progress" | "pending";
  category:
    | "Regenerated messaging"
    | "Human edits"
    | "Updated datapoint"
    | "Feedback"
    | "Prospect added"
    | "Prompt"
    | "Custom messages"
    | "Updated datapoint";

  details?: string;
  timestamp: string;
  avatars?: string[];
  rating?: number;
};

export const fetchTrainingNotifications = async (): Promise<
  TrainingNotificationItem[]
> => {
  await new Promise((res) => setTimeout(res, 1000));

  return [
    {
      id: "2",
      title: "Writing style changed from Prospect name to Campaign name",
      // title: "Custom message manually edited by user",
      category: "Human edits",
      status: "in_progress",
      details:
        "Writing style changed from Prospect name to Campaign name to reflect latest direction",
      timestamp: "Tue, May 12, 9:14 AM",
    },
    {
      id: "1",
      title: "Custom message updated by the user",
      category: "Custom messages",
      status: "complete",
      details:
        "The message now focuses on the campaign theme rather than the recipient's name.",
      timestamp: "Tue, May 6, 10:13 AM",
    },
    {
      id: "3",
      title: "Message generated from campaign name to prospect name",
      category: "Regenerated messaging",
      status: "complete",
      details:
        "AI generated a message variant based on the new targeting configuration.",
      timestamp: "Tue, Apr 29, 01:00 PM",
    },
    {
      id: "4",
      title: "Message rated by user",
      category: "Feedback",
      status: "complete",
      rating: 4,
      timestamp: "3 days ago",
    },
    {
      id: "5",
      title:
        "James Laurensky and 45 others have been added to Performance tracking",
      category: "Prospect added",
      status: "complete",
      timestamp: "4 days ago",
      avatars: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/women/62.jpg",
        "https://randomuser.me/api/portraits/women/39.jpg",
        "https://randomuser.me/api/portraits/women/61.jpg",
      ],
    },
    {
      id: "6",
      title: "Added a new prompt to onboarding flow",
      timestamp: "6 days ago",
      category: "Prompt",
      status: "in_progress",
      details:
        "A new training prompt was added to improve assistant onboarding responses.",
    },
    {
      id: "7",
      title: "Updated data point from previous prompts",
      timestamp: "8 days ago",
      category: "Updated datapoint",
      status: "complete",
      details:
        "The updated datapoint now accurately reflects information from the last training session",
    },
  ];
};

export const useTrainingNotifications = () => {
  return useQuery({
    queryKey: ["training-notifications"],
    queryFn: fetchTrainingNotifications,
    staleTime: 5 * 60 * 1000, // optional: cache for 5 mins
  });
};
