import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import UserDetails from "./UserDetails";
const UserDetailsMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="absolute top-16 right-6 z-50 xl:hidden p-2 cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <UserDetails />
      </SheetContent>
    </Sheet>
  );
};

export default UserDetailsMobile;
