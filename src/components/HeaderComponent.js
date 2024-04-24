import logo from '/res-logo.jpeg';

const Logo = () => {
    return <img src={logo} height="50"  alt="logo" />
}

const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled mb-0">
            <li className="px-3">Home</li>
            <li className="px-3">About</li>
            <li className="px-3">Profile</li>
        </ul>
    )
}
const HeaderComponent = () => {
    return (
        <div  className='d-flex justify-content-between align-items-center px-5'>
            <Logo />
            <NavItems />
        </div>
    )
}


export default HeaderComponent;