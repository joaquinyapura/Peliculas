import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <div className="w-full bg-sky-900 p-2">footer</div>
    </>
  );
};
