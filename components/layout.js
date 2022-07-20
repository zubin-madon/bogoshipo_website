import { Fragment } from "react";
import Navbar from "./Navbar/";
import Footer from "./Navbar/footer";

function Layout({ children }) {
  return (
    <div className="flex-row">
      <Navbar />
      <main className="h-screen">{children}</main>
      <div className="divider"></div>
      
      </div>
  );
}

export default Layout;
