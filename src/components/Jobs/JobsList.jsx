import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/job/jobSlice";
import SingleJob from "./SingleJob";
import Loading from "../utils/Loading";

export default function JobsList() {
  const dispatch = useDispatch();
  const { isLoading, isError, jobs, error } = useSelector((state) => state.job);
  const { jobsType, search, sortBy } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Filter jobs based on jobsType and search
  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        if (jobsType && job.type !== jobsType) return false;
        if (search && !job.title.toLowerCase().includes(search.toLowerCase()))
          return false;
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "Salary (Low to High)":
            return a.salary - b.salary;
          case "Salary (High to Low)":
            return b.salary - a.salary;
          default:
            return 0;
        }
      });
  }, [jobs, jobsType, search, sortBy]);

  // Decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="text-red-500 text-lg">{error}</div>;
  } else if (filteredJobs?.length === 0) {
    content = <p className="text-amber-500 text-lg">No Job Found</p>;
  } else {
    content = filteredJobs.map((job) => (
      <SingleJob
        key={job._id}
        job={job}
      />
    ));
  }

  return <div className="jobs-list">{content}</div>;
}
