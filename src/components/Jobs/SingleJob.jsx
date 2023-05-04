import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editActive, removeJob } from "../../features/job/jobSlice";
import formatCurrency from "../../utils/formatCurrency";

export default function SingleJob({ job }) {
  const { _id, title, type, salary, deadline } = job || {};
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleEdit = () => {
    dispatch(editActive(job));
    navigate(`/editJob/${_id}`);
  };

  const handleDelete = () => {
    dispatch(removeJob(_id));
  };

  return (
    <div className="flex flex-row border-b border-slate-700 py-4 mb-2">
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-400 px-2 my-2">
          <p className="flex items-center gap-1">
            <i
              className={`fa-solid fa-stop text-lg mr-1.5 ${
                type === "Internship"
                  ? "text-red-500"
                  : type === "Full Time"
                  ? "text-amber-500"
                  : type === "Remote"
                  ? "text-green-400"
                  : ""
              }`}
            />
            <span>{type}</span>
          </p>

          <p className="flex items-center gap-1">
            <i className="fa-solid fa-bangladeshi-taka-sign text-md mr-1.5" />
            <span>{formatCurrency(salary)}</span>
          </p>

          <p className="flex items-center gap-1">
            <i className="fa-regular fa-calendar text-md mr-1.5" />
            <span>Closing on {deadline}</span>
          </p>
        </div>

        <div className="mt-6 flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md border border-transparent px-4 py-2 text-sm font-medium"
            type="button"
            onClick={handleEdit}
          >
            <i className="fa-solid fa-pen -ml-1 mr-2" />
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md border border-transparent px-4 py-2 text-sm font-medium ml-3"
            type="button"
            onClick={handleDelete}
          >
            <i className="fa-solid fa-trash -ml-1 mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
