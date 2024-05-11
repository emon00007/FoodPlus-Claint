import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";
import ErrorPages from "../Component/ErrorPages/ErrorPages";
import LogIn from "../Component/LogIng/LogIn";
import Registration from "../Component/Registration/Registration";
import Homes from "../Component/Homes/Homes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      }, {
        path: "/register",
        element: <Registration></Registration>
      }
    ]

  },
]);
export default router