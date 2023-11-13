import { Link } from "react-router-dom";
import { Nav, NavItem, NavbarBrand, NavLink, Navbar } from "reactstrap";
import { useSelector } from "react-redux";
import store from "../../data/store";


const NavBar = () => {
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <>
            <Navbar
                color="transparent"
                fixed="top"
                style={{ "backdropFilter": "blur(10px)", "backgroundColor": "rgba(255, 255, 255, 0.3)", "padding": "10px", "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "transition": "backdrop-filter 0.3s, background-color 0.3s" }}
            >
                <NavbarBrand style={{ "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                    Cloud Canteen
                </NavbarBrand>

                <Nav >
                    <NavItem>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <NavLink>
                                Home
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/about'} style={{ textDecoration: 'none' }}>
                            <NavLink>About
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                            <NavLink>
                                Contact
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                            <NavLink>
                                Cart {cartItems.length}
                            </NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar >
        </>
    );
};

export default NavBar;
