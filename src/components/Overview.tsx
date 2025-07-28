import { Tabs, TabsContent } from "@/components/ui/tabs";

import OverviewTab from "./overview/OverviewTab";
import AITraining from "./overview/aiTraining/AITraining";
import Messages from "./overview/messages/Messages";
import Research from "./overview/research/Research";

const Overview = () => {
  return (
    <Tabs defaultValue="AI Training" className="w-full">
      <OverviewTab />

      <div className="h-auto overflow-y-auto">
        <TabsContent value="AI Training">
          <AITraining />
        </TabsContent>
        <TabsContent value="Messages">
          <Messages />
        </TabsContent>
        <TabsContent value="Research">
          <Research />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Overview;
