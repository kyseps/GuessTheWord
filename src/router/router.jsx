import { createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App.jsx";
import Game from "../Components/Game.jsx";
import Teams from "../Components/Teams.jsx";
import BuyGem from "../Components/BuyGem.jsx";
import UserProfile from "../Components/UserProfile.jsx";

export const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Game />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "buyGem",
        element: <BuyGem />,
      },
      {
        path: "userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);
