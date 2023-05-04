import axios from "../../utils/axios";

export const getJobs = async () => {
  const response = await axios.get(`/jobs`);

  return response.data;
};

export const createJob = async (data) => {
  const response = await axios.post("/jobs", data);

  return response.data;
};

export const editJob = async (_id, data) => {
  const response = await axios.put(`/jobs/${_id}`, data);

  return response.data;
};

export const deleteJob = async (_id) => {
  const response = await axios.delete(`/jobs/${_id}`);

  return response.data;
};
