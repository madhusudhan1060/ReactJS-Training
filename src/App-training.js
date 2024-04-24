import React from "react";
import reactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import MainWrapper from "./components/MainWrapper";

const App = () => {
    return  (
        <div>
            <HeaderComponent />
            <MainWrapper />
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);