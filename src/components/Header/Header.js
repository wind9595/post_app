import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='page-header'>
            <nav className='page-header__nav nav'>
                <Link to={'/'}>Home page</Link>
            </nav>
        </header>
    );
}

export default Header;