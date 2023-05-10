import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const handleLogin = () => {
    console.log("button Clicked");
  };

  return (
    <nav className="backdrop-blur-md bg-slate-800/10 sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto py-2 px-4">
        <div className="flex justify-between">
          <Link to="/">
            <h1 className="text-3xl font-bold uppercase tracking-wide text-slate-200">
              Job Finder
            </h1>
          </Link>
          <button
            className="bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 rounded-md border border-transparent px-4 py-2 font-medium"
            type="button"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
