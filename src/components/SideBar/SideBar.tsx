import { Link } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import HomeIcon from "../icons/HomeIcon";
import SunIcon from "../icons/SunIcon";
import ChartIcon from "../icons/ChartIcon";
import TabaleIcon from "../icons/TabaleIcon";
import WalletIcon from "../icons/WalletIcon";
import CalenderIcon from "../icons/CalenderIcon";
import ChatIcon from "../icons/ChatIcon";
import { useState } from "react";

function SideBar() {
  const [active, setActive] = useState<any>();

  return (
    <aside className="flex flex-wrap w-1/12  h-full justify-center content-between py-4 bg-aside ">
      <button className="flex w-full justify-center text-white ">
        <MenuIcon />
      </button>
      <ul className="flex w-full justify-center flex-wrap text-white">
        <li
          className={`w-full flex justify-center my-2 ${
            active === "home"
              ? " border-r-2 border-r-blue-500 text-blue-500 duration-700"
              : ""
          }`}
        >
          <Link onClick={() => setActive("home")} to="/">
            <HomeIcon />
          </Link>
        </li>
        <li
          className={`w-full flex justify-center my-2 ${
            active === "kanban"
              ? " border-r-2 border-r-blue-500 text-blue-500 duration-700"
              : ""
          }`}
        >
          <Link onClick={() => setActive("kanban")} to="/kanban">
            <ChartIcon />
          </Link>
        </li>
        <li
          className={`w-full flex justify-center my-2 ${
            active === "table"
              ? " border-r-2 border-r-blue-500 text-blue-500 duration-700"
              : ""
          }`}
        >
          <Link onClick={() => setActive("table")} to="/table">
            <TabaleIcon />
          </Link>
        </li>
        <li
          className={`w-full flex justify-center my-2 ${
            active === "wallet"
              ? " border-r-2 border-r-blue-500 text-blue-500 duration-700"
              : ""
          }`}
        >
          <Link onClick={() => setActive("wallet")} to="/wallet">
            <WalletIcon />
          </Link>
        </li>
        <li
          className={`w-full flex justify-center my-2 ${
            active === "calender"
              ? " border-r-2 border-r-blue-500 text-blue-500 duration-700"
              : ""
          }`}
        >
          <Link onClick={() => setActive("calender")} to="/calender">
            <CalenderIcon />
          </Link>
        </li>
        <li
          className={`w-full flex justify-center my-2 ${
            active === "chat"
              ? " border-r-2 border-r-blue-500 text-blue-500 duration-700"
              : ""
          }`}
        >
          <Link onClick={() => setActive("chat")} to="/chat">
            <ChatIcon />
          </Link>
        </li>
      </ul>
      <button className="flex w-full text-white justify-center">
        <SunIcon />
      </button>
    </aside>
  );
}

export default SideBar;
