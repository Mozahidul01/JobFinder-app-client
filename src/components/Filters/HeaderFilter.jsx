import { useDispatch } from "react-redux";
import { searchJobs, sortedBy } from "../../features/filter/filterSlice";

export default function HeaderFilter() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    dispatch(searchJobs(searchText));
  };

  const handSort = (e) => {
    const sortBy = e.target.value;
    dispatch(sortedBy(sortBy));
  };

  return (
    <>
      <div className="relative rounded-md bg-slate-700">
        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2  pointer-events-none"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="w-full appearance-none rounded-md bg-transparent py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          name="search"
          onChange={handleSearch}
        />
      </div>

      <select
        className="appearance-none bg-slate-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
        onChange={handSort}
      >
        <option>Default</option>
        <option>Salary (Low to High)</option>
        <option>Salary (High to Low)</option>
      </select>
    </>
  );
}
