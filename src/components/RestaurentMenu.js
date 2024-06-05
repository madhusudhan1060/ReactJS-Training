import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const RestaurentMenu = () => {
    const [info, setInfo] = useState(null);

    const {resId} = useParams();
    console.log("useParams", resId);
    
    useEffect(() => {
        fetchmenu();
        console.log("Use Effect");
        
    }, []);

    const fetchmenu = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4107978&lng=78.341552&restaurantId=' + resId);
        const json = await res.json();
        console.log(json);
        setInfo(json?.data);
    }

    if(info === null) return <div className="container-fluid px-5 d-flex flex-wrap"><Shimmer /> </div> 

    const {name, city, costForTwoMessage, areaName}  = info?.cards[2].card?.card?.info;
    
    return (
        <div className="container-fluid p-5">            
            <h1 className="mb-3">{name}</h1>
            <p className="mb-2">{city}</p>
            <p className="mb-2">{costForTwoMessage}</p>
            <p className="mb-2">{areaName}</p>
        </div>
    )
}
export default RestaurentMenu;