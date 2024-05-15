import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";
import ErrorPages from "../Component/ErrorPages/ErrorPages";
import LogIn from "../Component/LogIng/LogIn";
import Registration from "../Component/Registration/Registration";
import Homes from "../Component/Homes/Homes";
import AddFood from "../Component/AddFood/AddFood";
import FoodDetails from "../Component/FoodDetails/FoodDetails";
import AvailableFoods from "../Component/AvailableFoods/AvailableFoods";
import ManageMyFoods from "../Component/ManageMyFoods/ManageMyFoods";
import UpdatePage from "../Component/UpdatePage/UpdatePage";

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
      },
      {path:"/AvailableFoods",
      element:<AvailableFoods></AvailableFoods>

      },
      {
        path:"/ManageMyFoods",
        element:<ManageMyFoods></ManageMyFoods>
      },
      {
        path:"/updatePostManage/:id",
        element:<UpdatePage></UpdatePage>
      }
    ]

  },
]);
export default router