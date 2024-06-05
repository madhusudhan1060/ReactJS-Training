import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid px-5 mt-3 main-wrapper">
                <h1>
                    Welcome to about page
                </h1>
                <UserClass name={"Madhusudhan"} Loc={"Hyd"} />
            </div>
        )
    }
}

export default About;