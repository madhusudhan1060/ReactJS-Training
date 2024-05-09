import React, {useEffect, useState} from "react";
import RestaurentCard from "./RestaurentCard";
import styled from "styled-components";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const MainWrapper = () => {    
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() =>{
        fetchData();
        console.log("useEffect");
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4107978&lng=78.341552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // setFilteredRes([]);
    }

    

    const handleClick = () => {
        let highRatedRes = resList.filter(res => res.info.avgRating > 4.5);
        setFilteredRes(highRatedRes);
    }

    // conditional rendering
    // if(filteredRes.length === 0) {
    //     return <h1>Loading....</h1>
    // }
    

    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div className="input-group mb-3">
                <input type="text" className="form-control border border-secondary" placeholder="Search Restaurent" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <Button $primary type="button" className="btn btn-sm btn-secondary px-3">Search</Button>
            </div>
            <Button type="button" className="btn btn-sm" onClick={handleClick}>High Rated Restaurent</Button>
            <div className="d-flex flex-wrap row">
                {
                    (filteredRes.length === 0) ? <Shimmer /> : filteredRes.map((res) => (
                        <RestaurentCard key={res.info.id} resData = {res} />
                    ))
                }

            </div>
        </div>
    )
}

export default MainWrapper;