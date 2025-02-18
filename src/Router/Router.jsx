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

import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Myrequest from "../Component/MyRequest/Myrequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>,
        loader: () => fetch(`https://food-share-plus-server.vercel.app/foodSharePlusSarver`)

      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      }, {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/AddFood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: "/FoodDetails/:id",
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
      },
      {
        path: "/AvailableFoods",
        element: <AvailableFoods></AvailableFoods>

      },
      {
        path: "/ManageMyFoods",
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
      },
      {
        path: "/updatePostManage/:id",
        element: <UpdatePage></UpdatePage>
      },
      {
        path: "/MyFoodRequest",
        element:<PrivateRoute><Myrequest></Myrequest></PrivateRoute>
      }
    ]

  },
]);
export default router