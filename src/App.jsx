import { CustomForm } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center mt-20 bg-yellow-100">
      <header>
        <h1 className="text-3xl font-bold text-green-500">Todo App</h1>
      </header>
      <CustomForm />
    </div>
  );
}

export default App;
