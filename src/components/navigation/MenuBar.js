import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Tap Test</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/TestResults">Test Results</a></li>
                    <li><a href="/Subjects">Subjects</a></li>
                    <li><a href="/Programs">Programs</a></li>
                    <li><a href="/Settings">Settings</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;