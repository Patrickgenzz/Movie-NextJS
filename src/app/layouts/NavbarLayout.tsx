"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Popular",
    href: "/popular/all",
  },

  {
    name: "Season Now",
    href: "/season/all",
  },
  {
    name: "Upcoming Anime",
    href: "/upcoming/all",
  },
];

const NavbarLayout = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    router.push(`/search/${search}`);
  };

  return (
    <>
      <div className="navbar bg-dark">
        <hr className="bg-white" />
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost normal-case text-xl font-bold">
            CuyAnimeList
          </Link>
        </div>
        <div className="navbar-end">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-24 md:w-auto pr-12"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="btn btn-ghost btn-circle absolute right-0 top-0 h-full" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLayout;
