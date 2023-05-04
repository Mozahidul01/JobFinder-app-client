import Header from "../components/Header/Header";
import JobsList from "../components/Jobs/JobsList";
import Topbar from "../components/Topbar/Topbar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 ">
      <Topbar />

      <main className="bg-slate-800 max-w-4xl my-8 md:my-10 rounded-md mx-auto p-10">
        <Header />
        <JobsList />
      </main>
    </div>
  );
}
