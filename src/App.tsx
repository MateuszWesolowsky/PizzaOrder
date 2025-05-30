import { createBrowserRouter, RouterProvider } from "react-router";
import { menuLoader } from "./api/menuLoader";
import { CreateOrder } from "./components/order/CreateOrder";
import { Menu } from "./components/menu/Menu";
import { Cart } from "./components/cart/Cart";
import { Order } from "./components/order/Order";
import { orderIdLoader } from "./api/orderIdLoader";
import { createNewOrderAction } from "./api/createNewOrderAction";
import { Layout } from "./components/ui/Layout";
import { Home } from "./components/ui/Home";
import { Error } from "./components/ui/Error";
import { updateOrderAction } from "./api/updateOrderAction";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createNewOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderIdLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
