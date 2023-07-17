import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "./assets/slices/usersSlice";
import Login from "./Components/Login";

function App() {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const dispatch = useDispatch();

  return (
    <>
      {/* <div className="h-screen w-screen bg-gray-400 absolute">
        <h1 className="text-xl text-teal-950 flex justify-center mt-8">
          Hey guys This gon be the Game we call GuessTheWord
        </h1>
      </div> */}
      <Login />
    </>
  );
}

export default App;
