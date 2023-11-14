import Map from "../ui/Map";
import Sidebar from "../ui/Sidebar";
import User from "../ui/User";
import ProtectedRoute from "./ProtectedRoute";

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <div className="h-[100vh] p-6 overflow-auto flex relative">
        <Sidebar />
        <Map />
        <User />
      </div>
    </ProtectedRoute>
  );
};

export default AppLayout;
