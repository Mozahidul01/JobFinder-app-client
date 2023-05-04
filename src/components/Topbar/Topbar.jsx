import { Link } from "react-router-dom";
import TopbarFilter from "../Filters/TopbarFilter";

export default function Topbar() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-row justify-between gap-2 pt-8 text-lg">
        <Link
          to="/addJob"
          className="text-slate-400 hover:text-sky-300 border border-slate-800 hover:border-sky-300 rounded-md px-4 py-2 pr-6 focus:outline-none focus:ring-2 focus:ring-sky-300 "
        >
          <i className="fa-solid fa-file-circle-plus" />
          <span className="pl-2">Add NewJob</span>
        </Link>

        <TopbarFilter />
      </div>
    </div>
  );
}
