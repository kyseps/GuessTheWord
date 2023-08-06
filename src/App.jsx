import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from ".//utils/store/Slices/usersSlice";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
