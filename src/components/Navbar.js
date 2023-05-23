import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<div className="navbar">
        <Link to="/" style={{ textDecoration: 'none',color: 'white',display: 'flex'}}>
            <h1>Deloitte</h1><h1 style={{ color: "#72bf35" }}>.</h1>
        </Link>
    </div>);
}

export default Navbar;