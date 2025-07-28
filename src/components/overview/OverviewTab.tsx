import { TabsList, TabsTrigger } from "../ui/tabs";
import { tabMenu } from "@/config/tabMenuData";

const OverviewTab = () => {
  return (
    <div className=" border-b border-b-gray-200">
      <TabsList className="flex p-0 bg-transparent rounded-none">
        {tabMenu.map((tab) => (
          <TabsTrigger
            key={tab.label}
            value={tab.label}
            className="px-3 py-2 text-sm font-medium text-gray-400 bg-transparent rounded-none cursor-pointer
                       shadow-none ring-0 outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none 
    
                       data-[state=active]:text-gray-800 data-[state=active]:border-b-solid data-[state=active]:border-b-gray-800
                       data-[state=active]:shadow-none data-[state=active]:bg-transparent"
          >
            {tab.icon}
            {tab.label[0].toUpperCase() + tab.label.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default OverviewTab;
