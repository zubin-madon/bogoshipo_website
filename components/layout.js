import { Fragment } from "react";
import Navbar from "./Navbar/";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main className="h-screen">{children}</main>
      <div className="divider"></div>
      <footer className="text-center">
        <p>Copyrights {new Date().getFullYear()} Bogoshipo.com</p>
      </footer>
    </Fragment>
  );
}

export default Layout;
