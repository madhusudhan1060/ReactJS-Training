import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
    const [info, setinfo] = useState(null);
    const {resId} = useParams();
    console.log("useParams", resId);

    useEffect(() =>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4107978&lng=78.341552&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        setinfo(json.data);
    };

    if(info === null) return <div className="container-fluid px-5 d-flex flex-wrap"><Shimmer /> </div> 

    // if(info === null) return <div className="d-flex flex-wrap"><Shimmer /> </div>
    const {name, city, costForTwoMessage} = info?.cards[2]?.card?.card?.info;
    const {itemCards} = info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <h1>{name}</h1>
                <p>{city} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>))}
            </ul>

        </div>
    )
}

export default RestaurentMenu;