import React, {useEffect, useState} from "react";
import RestaurentCard from "./RestaurentCard";
import styled from "styled-components";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    const [searchText, setSearchText] = useState("");
    
    const [searchRes, setSearchRes] = useState([]);


    useEffect(() =>{
        fetchData();
        // console.log("useEffect");
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4107978&lng=78.341552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setSearchRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
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

    let searchResult = [];
    const handleBtnRestarauntClick = () => {
        searchResult = searchRes.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRes(searchResult);
    }

    const searchRestaurent = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
        if(searchText.trim() === '') {setFilteredRes(searchRes)}
    }
    
    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div className="d-flex mb-3">
                <div className="input-group">
                    <input type="text" value={searchText} onChange={ searchRestaurent
                        // (e) => {
                        //     setSearchText(e.target.value);
                        // }
                    }
                        className="form-control border border-secondary" placeholder="Search Restaurent" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <Button $primary type="button" 
                    onClick={ handleBtnRestarauntClick
                        // ()=> {
                        //     const searchResult = searchRes.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        //     setFilteredRes(searchResult);
                        // }  
                    }
                        className="btn btn-sm btn-secondary px-3">
                        Search
                    </Button>
                </div>
                <Button type="button" className="btn btn-sm ms-2 text-nowrap" onClick={handleClick}>High Rated Restaurent</Button>
            </div>
            <div className="d-flex flex-wrap row overflow-auto restaurants-wrapper mt-4">
                {
                    (filteredRes.length === 0) ? <Shimmer /> : filteredRes.map((res) => (
                        <Link className="col-3 mb-3 d-flex text-decoration-none" to={"/restaurents/"+ res.info.id} key={res.info.id}>
                            <RestaurentCard resData = {res} />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default MainWrapper;