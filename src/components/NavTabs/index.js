import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  const history = useHistory();

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className='f1'>
      <Navbar.Brand onClick={() => history.push('/react-portfolio')}>Reagan Grunwald
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push('/react-portfolio')}>About Me</Nav.Link>

          <Nav.Link onClick={() => history.push('/react-portfolio/portfolio')}>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="#">Reagan Grunwald</a>
    //   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    //     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse justify-content-end">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //           About Me
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
    //           Portfolio
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default NavTabs;
