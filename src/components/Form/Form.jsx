import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJob, editInActive, updateJob } from "../../features/job/jobSlice";

export default function Form() {
  const dispatch = useDispatch();
  const { isLoading, editing } = useSelector((state) => state.job);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const [warning, setWarning] = useState("");
  const [edit, setEdit] = useState(false);

  let navigate = useNavigate();

  //Reset Form
  const resetForm = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
    setWarning("");
  };

  //Listen for Edit mode active
  useEffect(() => {
    const { _id, title, type, salary, deadline } = editing || {};
    if (_id) {
      setEdit(true);
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadline(deadline);
    }
  }, [editing]);

  //New Transaction
  const newJob = {
    title,
    type,
    salary: Number(salary),
    deadline,
  };

  //handle Create Job
  const handleAddJob = (e) => {
    e.preventDefault();

    if (title === "" || type === "" || salary === "" || deadline === "") {
      setWarning("Every field must be filled.");
      return;
    }
    if (Number(salary) < 0) {
      setWarning("Salary cannot be negative");
      return;
    }

    dispatch(addJob(newJob));
    resetForm();
    navigate("/");
  };

  //handle Update Job
  const handleUpdateJob = (e) => {
    e.preventDefault();

    if (title === "" || type === "" || salary === "" || deadline === "") {
      setWarning("Every field must be filled.");
      return;
    }
    if (Number(salary) < 0) {
      setWarning("Salary cannot be negative");
      return;
    }

    dispatch(updateJob({ _id: editing?.id, data: newJob }));
    resetForm();
    setEdit(false);
    navigate("/");
  };

  // handle Cancel Edit Mode
  const cancelEditMode = () => {
    setEdit(false);
    resetForm();
    dispatch(editInActive());
    navigate("/addJob");
  };

  return (
    <form
      className="space-y-4"
      onSubmit={edit ? handleUpdateJob : handleAddJob}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex">
          <label
            htmlFor="job-title"
            className="md:w-24 text-lg font-medium text-slate-300"
          >
            Job Title
          </label>
          <span className="px-2">:</span>
        </div>
        <select
          id="job-title"
          name="job-title"
          className="w-full appearance-none bg-slate-700 rounded-md px-4 py-2 pr-6 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option
            hidden
            defaultValue
          >
            Select Job
          </option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex">
          <label
            htmlFor="job-type"
            className="md:w-24 text-lg font-medium text-slate-300"
          >
            Job Type
          </label>
          <span className="px-2">:</span>
        </div>
        <select
          id="job-type"
          name="job-type"
          className="w-full appearance-none bg-slate-700 rounded-md px-4 py-2 pr-6 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option
            hidden
            defaultValue
          >
            Select Job Type
          </option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex">
          <label
            htmlFor="job-salary"
            className="md:w-24 text-lg font-medium text-slate-300"
          >
            Salary
          </label>
          <span className="px-2">:</span>
        </div>
        <div className="flex shadow-sm w-full relative rounded-md bg-slate-700">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2  pointer-events-none">
            BDT
          </span>
          <input
            type="number"
            name="job-salary"
            id="job-salary"
            required
            className="w-full appearance-none rounded-md bg-transparent py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            placeholder="20,00,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex ">
          <label
            htmlFor="deadline"
            className="md:w-24 text-lg font-medium text-slate-300"
          >
            Deadline
          </label>
          <span className="px-2">:</span>
        </div>
        <input
          type="date"
          name="deadline"
          id="deadline"
          className="w-full appearance-none bg-slate-700 text-slate-300 rounded-md px-4 py-2 pr-6 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
          required
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="text-right">
        {edit && (
          <button
            disabled={isLoading}
            type="submit"
            className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md border border-transparent px-4 py-2 font-medium mr-3"
            onClick={cancelEditMode}
          >
            Cancel Edit
          </button>
        )}
        <button
          disabled={isLoading}
          type="submit"
          id="lws-submit"
          className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md border border-transparent px-4 py-2 font-medium"
        >
          {edit ? "  Update" : "Save"}
        </button>
      </div>
    </form>
  );
}
