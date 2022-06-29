import { Fragment } from "react";
import Navbar from "./Navbar/";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <footer className="text-center py-92 mt-10">
        <p>Copyrights {new Date().getFullYear()} Bogoshipo.com</p>
      </footer>
    </Fragment>
  );
}

export default Layout;
