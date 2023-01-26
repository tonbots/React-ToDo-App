import { ButtonCustom } from "../../atoms";
import { BeakerIcon } from "@heroicons/react/24/solid";

const CustomForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="w-full max-w-md bg-slate-400">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor="task"
        >
          Username
        </label>
        <input
          className=" focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          type="text"
          id="task"
          placeholder="Enter Task"
          required
          autoFocus
          maxLength={60}
          //   value={task}
          //   onInput={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          <BeakerIcon className="h-6 w-6 text-blue-500" />
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
