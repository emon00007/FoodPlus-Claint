import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";
import ErrorPages from "../Component/ErrorPages/ErrorPages";
import LogIn from "../Component/LogIng/LogIn";
import Registration from "../Component/Registration/Registration";
import Homes from "../Component/Homes/Homes";
import AddFood from "../Component/AddFood/AddFood";
import FoodDetails from "../Component/FoodDetails/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>,
        loader:()=>fetch(`http://localhost:5000/foodSharePlusSarver`)
        
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      }, {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path:"/AddFood",
        element:<AddFood></AddFood>
      },
      {
        path:"/FoodDetails/:id",
        element:<FoodDetails></FoodDetails>
      }
    ]

  },
]);
export default router