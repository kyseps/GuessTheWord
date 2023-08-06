import { createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../store/index.store";
import App from "../../App.jsx";
import Game from "../../Pages/game/Game";
import Teams from "../../Pages/teams/Teams.jsx";
import BuyGem from "../../Pages/byeGem/BuyGem";
import HomePage from "../../Pages/homepage/HomePage.jsx";
import SignUpPage from "../../Pages/signUp/SignUpPage";

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
        element: <HomePage />,
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
        path: "Game",
        element: <Game />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
    ],
  },
]);
