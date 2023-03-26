import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import "./index.css";
import Navbar from "./components/navBar";
import { MainPage } from "./components/mainPage";
import { LogIn } from "./components/logIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { UserBooks } from "./components/userBooks";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/user_books",
      element: <UserBooks />,
    },
  ]);

  return (
    <>
      <CookiesProvider>
        <Navbar />
        <RouterProvider router={router} />
      </CookiesProvider>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
