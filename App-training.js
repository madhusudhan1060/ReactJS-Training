import React from "react";
import reactDOM from "react-dom/client";
import logo from '/res-logo.jpeg';


const Logo = () => {
    return <img src={logo} height="50"  alt="logo" />
}

const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled">
            <li className="px-3">Home</li>
            <li className="px-3">About</li>
            <li className="px-3">Profile</li>
        </ul>
    )
}


const HeaderComponent = () => {
    return (
        <div  className='d-flex justify-content-between'>
            <Logo />
            <NavItems />
        </div>
    )
}

const App = () => {
    return  (
        <div>
            <HeaderComponent />
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);