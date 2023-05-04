import HeaderFilter from "../Filters/HeaderFilter";

export default function Header() {
  return (
    <div className="lg:flex space-y-2 lg:space-y-0 justify-between mb-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-wide mb-4 md:mb-0">
        All Available Jobs
      </h1>
      <div className="flex gap-4">
        <HeaderFilter />
      </div>
    </div>
  );
}
