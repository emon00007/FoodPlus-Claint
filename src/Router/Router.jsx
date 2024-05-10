import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";
import ErrorPages from "../Component/ErrorPages/ErrorPages";
import LogIn from "../Component/LogIng/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPages></ErrorPages>,
      children:[
        {
            path:"/login",
            element:<LogIn></LogIn>
        },{
          
        }
      ]

    },
  ]);
  export default router