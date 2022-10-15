import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from './SidebarData';
import './style.scss';
import { IconContext } from 'react-icons';
import { BiHide } from "react-icons/bi";

function Index() {
    const [sidebar, setSidebar] = useState(false);
    var isLoggedin = false
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <IconContext.Provider
                            value={{ color: 'black', size: '25px' }}
                        >
                            <div>
                            <FaIcons.FaBars onClick={showSidebar} />
                            </div>
                        </IconContext.Provider>
                    </Link>
                    <div className="my-menu">
                        <ul>
                            <li>
                                <NavLink activeClassName="is-Active" exact to="/">
                                    home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="is-Active"
                                    exact
                                    to="/about-us"
                                >
                                    about
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="is-Active"
                                    exact
                                    to="/contact-us"
                                >
                                    contact
                                </NavLink>
                            </li>
                            {isLoggedin ? (
                                <li>
                                    <NavLink
                                        activeClassName="is-Active"
                                        exact
                                        to="/login"
                                    >
                                        profile
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        activeClassName="is-Active"
                                        exact
                                        to="/login"
                                    >
                                        login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>


                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <IconContext.Provider
                                    value={{ color: 'black', size: '25px' }}
                                >
                                    <div>
                                        <BiHide />
                                    </div>
                                </IconContext.Provider>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <IconContext.Provider
                                            value={{ color: 'black', size: '25px' }}
                                        >
                                            <div>
                                                {item.icon}
                                            </div>
                                        </IconContext.Provider>

                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Index;