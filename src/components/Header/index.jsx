import React from "react";
import './header.scss';

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
        <>
            <header className="app-header">
                <Logo />
                <div className={'navbar'}>
                    <a className="header-nav-link__active" href="#">Home</a>
                    <a className="header-nav-link" href="#">About</a>
                    <a className="header-nav-link" href="#">Expertise</a>
                    <a className="header-nav-link" href="#">Teams</a>
                    <a className="header-nav-link" href="#">Works</a>
                    <a className="header-nav-link" href="#">People Say</a>
                    <a className="header-nav-link" href="#">Contact</a>
                </div>
            </header>
        </>
    );
}

export default Header;
export {Logo}
