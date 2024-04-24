import RestaurentCard from "./RestaurentCard";
import styled from "styled-components";
import resList from "./utils/static/mockdata";

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
    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div className="input-group mb-3">
                <input type="text" className="form-control border border-secondary" placeholder="Search Restaurent" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                {/* <button className="btn btn-sm btn-secondary px-3" type="button">Search</button> */}
                <Button type="button" className="btn btn-sm btn-secondary px-3">Search</Button>
                {/* <Button $primary>Primary</Button> */}
            </div>
            <div className="d-flex flex-wrap row">
                {
                    resList.map((res) => (
                        <RestaurentCard key={res.info.id} resData = {res} />
                    ))
                }

            </div>
        </div>
    )
}

export default MainWrapper;