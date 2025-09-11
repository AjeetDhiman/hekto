import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Layout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] [grid-template-areas:'header''main''footer']">
      <Header />
      <main className="[grid-area:main]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
