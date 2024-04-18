import React from "react";
import reactDOM from "react-dom/client";
import logo from '/res-logo.jpeg';


const Logo = () => {
    return <img src={logo} height="50"  alt="logo" />
}

const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled mb-0">
            <li className="ps-3">Home</li>
            <li className="ps-3">About</li>
            <li className="ps-3">Profile</li>
        </ul>
    )
}

const HeaderComponent = () => {
    return (
        <div className='sticky-top bg-light'>
            <div className='container-fluid px-5 d-flex justify-content-between align-items-center'>
                <Logo />
                <NavItems />
            </div>
        </div>
    )
}

const RestaurentCard = (props) => {
    const { resName } = props;
    return (
        <div className="col-3 p-3">
            <div className="border border-secondary">
                <img src="/img/restaurant1.jpg" alt="res1" />
                <h1>{resName}</h1>
                <h3>5 stars</h3>
                <h4>Biryani</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div class="input-group mb-3">
                <input type="text" class="form-control border border-secondary" placeholder="Search Restaurent" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="btn btn-sm btn-secondary px-3" type="button">Search</button>
            </div>
            <div className="d-flex flex-wrap row">
                <RestaurentCard resName="paradise" />
                <RestaurentCard resName="KFC" />
                <RestaurentCard resName="paradise" />
                <RestaurentCard resName="KFC" />
                <RestaurentCard resName="paradise" />
                <RestaurentCard resName="KFC" />
                <RestaurentCard resName="paradise" />
                <RestaurentCard resName="KFC" />
                <RestaurentCard resName="paradise" />
                <RestaurentCard resName="KFC" />
            </div>
        </div>
    )
}

const App = () => {
    return  (
        <div>
            <HeaderComponent />
            <Body />
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);