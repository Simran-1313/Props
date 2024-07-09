
import Parent from "../src/Components/Parent"

function App() {
  return (
    <div className="text-white text-center h-[100vh] w-[100vw] flex-col  ">
     <div>
     <h2 className="text-black text-xl mt-[2rem] mb-[5rem]">Passing States From Parent to Child and Child to Parent</h2>
     <Parent className="w-[50vw] min-w-[300px] max-w-[500px] m-auto h-[50vh] rounded-xl p-[2rem]   "  ></Parent>
     </div>
    </div>
  );
}

export default App;
