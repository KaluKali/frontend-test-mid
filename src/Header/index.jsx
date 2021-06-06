import React from "react";
import './header.scss';
import {Nav, Navbar} from "react-bootstrap";

function Logo() {
    return (
        <div className={'logo'}>
            <div className={'icon-logo'} />
            <p>tajam</p>
        </div>
    )
}

function Header() {
    return (
        <header>
            <Navbar className={'fixed-header-bg pe-4 ps-4'} expand={'lg'} fixed={'top'}>
                <Navbar.Brand href={'#'}><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id={'responsive-navbar-nav'} className={'justify-content-end'}>
                    <Nav>
                        <Nav.Item><Nav.Link className="header-nav-link__active" href="#">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="header-nav-link" href="#">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="header-nav-link" href="#">Expertise</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="header-nav-link" href="#">Teams</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="header-nav-link" href="#">Works</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="header-nav-link" href="#">People</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="header-nav-link" href="#">Contact</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
export {Logo}
