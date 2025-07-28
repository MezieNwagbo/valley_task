import MenuBar from "../components/MenuBar";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-5">
      <MenuBar />

      <div className="w-full min-h-full bg-white rounded-md">{children}</div>
    </div>
  );
};

export default Layout;
