import { createBrowserRouter } from "react-router-dom";
import Basket from "../Pages/Basket";
import Products from "../Pages/Products";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
    {
      path: "/basket",
      element: <Basket/>,
    },
  ]);
  export default router