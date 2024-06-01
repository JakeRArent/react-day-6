import React from "react";
import SignIn from "./pages/SignIn";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  /*{
    path: "/home",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "pokemon/:pokemonID", element: <Pokemon /> },
      { path: "wiki", element: <Wiki /> },
    ]
  },*/
  {
    path: "/",
    element: <SignIn />
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;