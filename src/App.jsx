import { CustomForm, Hero } from "./components";

function App() {
  return (
    // <div className="flex flex-col items-center mt-20 bg-yellow-100">
    //   {/* <header>
    //     <h1 className="text-3xl font-bold text-green-500">Todo App</h1>
    //   </header>
    //   <CustomForm /> */}
    //   <Hero />
    // </div>
    <div className="flex flex-col items-center justify-center mt-20 font-serif">
      <div className="flex">
        <p className="text-xl font-bold mr-2 text-gray-800">Hello!</p>
        <p className="animate-[wiggle_1s_ease-in-out_infinite] text-xl">👋</p>
      </div>

      <p className="text-6xl font-bold mb-5 mt-3 text-gray-800">I'm Kartono</p>
      <Hero />
    </div>
  );
}

export default App;
