import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../../src/components/Home.jsx"
import SignIn from "../../src/components/SignIn.jsx"
import SignUp from "../../src/components/SignUp.jsx"
import Root from "./../Root.jsx"
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  }
])
const Router = () => {
    return (
        <RouterProvider router={routes}>

        </RouterProvider>
    );
};

export default Router;