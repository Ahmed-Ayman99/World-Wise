import { Outlet } from "react-router-dom";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

const LayOut = () => {
  return (
    <div className="m-6 grid grid-rows-[auto_1fr_auto] h-[calc(100vh-48px)] max-h-[calc(100vh-48px)] pt-6  pb-2 px-14 hero-bg bg-cover bg-center overflow-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayOut;
