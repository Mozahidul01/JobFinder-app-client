import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-sm bg-slate-800/10 sticky top-0 z-50 border-b-[1px] border-slate-800">
      <div className="max-w-[90rem] mx-auto py-2 px-4">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="max-h-12"
          />
        </Link>
      </div>
    </nav>
  );
}
