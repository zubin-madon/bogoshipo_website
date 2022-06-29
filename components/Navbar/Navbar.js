import Link from "next/link";
import Image from "next/image";
import NavbarWrapper from "./NavbarWrapper";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <div className="">
          <Link href="/" alt="home">
            <Image
              src="/logo192.png"
              layout="intrinsic"
              width={80}
              height={80}
              alt="bogoshipo logo"
            />
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-normal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <nav className="justify-end">
              <li>
                <Link href="/deep-dive">Deep Dive</Link>
              </li>
              <li>
                <Link href="/sneak-previews">Sneak Previews</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </nav>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <nav className="flex justify-end text-xl">
              <li>
                <Link href="/deep-dive">Deep Dive</Link>
              </li>
              <li>
                <Link href="/sneak-previews">Sneak Previews</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </nav>
          </ul>
        </div>
      </NavbarWrapper>
    </>
  );
}
