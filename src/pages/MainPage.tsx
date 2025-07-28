import Overview from "@/components/Overview";
import UserDetails from "@/components/userDetails/UserDetails";
import UserDetailsMobile from "@/components/userDetails/UserDetailsMobile";

const MainPage = () => {
  return (
    <>
      <UserDetailsMobile />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_370px] gap-16 p-12 position-relative shadow-sm">
        <Overview />
        <div className="hidden xl:block">
          <UserDetails />
        </div>
      </div>
    </>
  );
};

export default MainPage;
