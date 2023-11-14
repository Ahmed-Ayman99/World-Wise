import Map from "../ui/Map";
import Sidebar from "../ui/Sidebar";
import User from "../ui/User";

const AppLayout = () => {
  return (
    <div className="h-[100vh] p-6 overflow-auto flex relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
