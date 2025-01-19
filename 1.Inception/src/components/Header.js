import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="App Logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li className="item">Home</li>
                <li className="item">About Us</li>
                <li className="item">Contact Us</li>
                <li className="item">Cart</li>
            </ul>
        </div>
    </div>

}

export default Header;