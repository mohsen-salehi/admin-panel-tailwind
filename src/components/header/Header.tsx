import { Link } from "react-router-dom";
import Notification from "../icons/Notification";
import Profile from "./Profile";

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-3 text-white h-[10%]">
      <strong>Dashboard</strong>
      <div className="flex">
        <Link to="/">
          <Notification />
        </Link>
        <Profile />
      </div>
    </header>
  );
}

export default Header;
