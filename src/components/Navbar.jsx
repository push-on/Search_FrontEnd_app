import React from "react";
import { Search } from "./Search";
import { Link } from "react-router-dom";
import { Links } from "./Links";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="sticky pt-3 pb-3 top-0 z-40 w-full flex-none backdrop-blur-xl bg-slate-100/50 dark:bg-slate-900/80 ">
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b  dark:border-slate-600 border-slate-400">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <Link to="/">
            <div className="flex whitespace-nowrap text-2xl dark:bg-slate-800 dark:hover:bg-slate-700 bg-slate-300 font-bold py-2 px-3 rounded-full hover:shadow-lg ">
              <div className="sm:block hidden">
                Search
              </div>
              <div >
                🔎
              </div>
            </div>
          </Link>
          <Search />
          <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="flex whitespace-nowrap font-bold text-xl dark:bg-slate-800 dark:hover:bg-slate-700 bg-slate-300 py-2 px-3 rounded-full hover:shadow-lg">
            <div className="sm:block hidden">
              {darkTheme ? "Light" : "Dark"}
            </div>
            <div >
              {darkTheme ? "💡" : "🌒"}
            </div>
          </button>
        </div>
        <div className="w-screen flex justify-center">
          <Links />
        </div>
      </div>
    </div>
  );
};
