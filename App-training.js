import React from "react";
import reactDOM from "react-dom/client";
import logo from '/res-logo.jpeg';

const resObj =  [
    {
        "id": "449026",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Divyasree Techridge",
        "areaName": "Manikonda",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "deliveryTime": 50,        
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        }    
    },

    {
        "id": "449026",
        "name": "KFC",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Divyasree Techridge",
        "areaName": "Hitec City",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "deliveryTime": 50,        
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        }    
    },
    {
        "id": "449026",
        "name": "Pista House",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Divyasree Techridge",
        "areaName": "Kondapur",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "deliveryTime": 50,        
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        }    
    },
    {
        "id": "449026",
        "name": "Pista",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Divyasree Techridge",
        "areaName": "Kondapur",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "deliveryTime": 50,        
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        }    
    },
    {
        "id": "449026",
        "name": "Mehfil",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Divyasree Techridge",
        "areaName": "Kondapur",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "deliveryTime": 50,        
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        }    
    }
]    

    

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

const RestaurentCard = (props) => {
    console.log(props);
    const {name, cuisines, areaName, costForTwo} = props.resData;
    return (
        <div className="col-3 p-3">
            <div className="border border-secondary">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" height="300" alt="res1" />
                <h1>{name}</h1>
                <h3>{cuisines}</h3>
                <h4>{areaName}</h4>
                <p>{costForTwo}</p>
            </div>
        </div>
            )
}

const MainWrapper = () => {
    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div className="input-group mb-3">
                <input type="text" className="form-control border border-secondary" placeholder="Search Restaurent" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="btn btn-sm btn-secondary px-3" type="button">Search</button>
            </div>
            <div className="d-flex flex-wrap row">
                <RestaurentCard resData = {resObj[0]} />
                <RestaurentCard resData = {resObj[1]} />
                <RestaurentCard resData = {resObj[2]} />
                <RestaurentCard resData = {resObj[3]} />
                <RestaurentCard resData = {resObj[4]} />
            </div>
        </div>
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
            <MainWrapper />
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);