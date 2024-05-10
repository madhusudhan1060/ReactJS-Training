import React from "react";
import reactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import MainWrapper from "./components/MainWrapper";
import About from "./components/About";

const App = () => {
    return  (
        <div>
            <HeaderComponent />
            <MainWrapper />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    }
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);