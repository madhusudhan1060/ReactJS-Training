import React from 'react';
class UserClass extends React.Component {
    // The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(props) {
        super(props);
        this.state = {
            productInfo: {
                title: "",
                price: "",
                description: ""
            }
        }
        console.log("constructor")
    }
    async componentDidMount() {
        const data = await fetch("https://fakestoreapi.com/products/1");
        const json  = await data.json();
        console.log("DidMount", json);
        this.setState({
            productInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render")
        // console.log(typeof(UserClass))
        const {title, price, description} = this.state.productInfo;
        return (
            <div>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
            </div>
        )
    }
}

export default UserClass;