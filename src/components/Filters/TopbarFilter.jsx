import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterJobsType } from "../../features/filter/filterSlice";

export default function TopbarFilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJobFilter = (e) => {
    const filterJob = e.target.value;
    dispatch(filterJobsType(filterJob));
    navigate("/");
  };

  return (
    <select
      name="filter-jobs"
      className="appearance-none bg-slate-800 rounded-md px-4 py-2 pr-6 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
      onChange={handleJobFilter}
    >
      <option
        value=""
        className="text-sky-400"
      >
        All Available Jobs
      </option>
      <option
        value="Internship"
        className="text-red-500"
      >
        Internship
      </option>
      <option
        value="Full Time"
        className="text-amber-500"
      >
        Full Time
      </option>
      <option
        value="Remote"
        className="text-green-300"
      >
        Remote
      </option>
    </select>
  );
}
