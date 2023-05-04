import Form from "../components/Form/Form";

export default function EditJob() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 ">
      <div className="bg-slate-800 max-w-4xl mx-auto my-12 md:mt-32 rounded-md p-10">
        <h1 className="mb-10 text-center text-3xl font-bold">Edit Job</h1>
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
}
