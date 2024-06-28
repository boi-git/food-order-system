import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import User from "./views/user";
import Dashboard from "./views/dashboard";
import Restaurant from "./views/restaurant/restaurant";
import NotFound from "./views/notfound";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/user",
        element: <User />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/restaurant",
        element: <Restaurant />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
