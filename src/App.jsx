import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "./store/usersSlice";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
