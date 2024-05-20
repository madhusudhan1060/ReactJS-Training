import React from "react";
import reactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import MainWrapper from "./components/MainWrapper";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";

const App = () => {
    return  (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainWrapper />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "restaurents/:resId",
                element: <RestaurentMenu />,
            }
        ],
        errorElement: <Error />
    },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);