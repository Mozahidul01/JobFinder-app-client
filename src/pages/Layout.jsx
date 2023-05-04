import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import AddNewJob from "./AddNewJob";
import EditJob from "./EditJob";
import Background from "../components/utils/Background";

export default function Layout() {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/addJob"
          element={<AddNewJob />}
        />
        <Route
          path="/editJob/:jobId"
          element={<EditJob />}
        />
      </Routes>
    </BrowserRouter>
  );
}
