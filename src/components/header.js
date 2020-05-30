import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"
import "./pre.css"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import moonIcon from "../images/moon-icon.svg"
import sunIcon from "../images/sun-icon.svg"

// const menuKlik = event => {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "menuku") {
//         x.className += " responsive";
//     } else {
//         x.className = "menuku";
//     }
//
//     var z = document.getElementById("tombol-switch");
//     if (z.className === "switch switch-left-right") {
//         z.className += " hide";
//     } else {
//         z.className = "switch switch-left-right";
//     }
// }

const Header = ({ siteTitle }) => {
    return (
        <>
            <div className="logo-container">
                <div className={'title-header'}><Link to="/" title={'ROCHMAN.ID'}>ROCHMAN.ID</Link></div>
                <span style={{ fontStyle: 'italic', display:'inline-block'}}>Novice Programmer</span>
            </div>
            <div className="menuku" id="myTopnav">
                <Link to="/" activeClassName={'active'} title={'Home'}>Home</Link>
                <Link to="/blog/" activeClassName={'active'} partiallyActive={true} title={'Blog'}>Blog</Link>
                <Link to="/about/" activeClassName={'active'} title={'About'}>About</Link>
                <Link to="/contact/" activeClassName={'active'} title={'Contact'}>Contact</Link>
                {/*<a href="javascript:void(0);" className="icon" onClick={menuKlik}>MENU</a>*/}
                <ThemeToggler>
                {/*    {({ theme, toggleTheme }) => (*/}
                {/*            <label className="switch switch-left-right" id={'tombol-switch'} title={'Dark Mode'}>*/}
                {/*                <input className="switch-input" onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')} checked={theme === 'dark'} type="checkbox"/>*/}
                {/*                <span className="switch-label" data-on="Dark" data-off="Dark"/>*/}
                {/*                <span className="switch-handle"/>*/}
                {/*            </label>*/}
                {/*    )}*/}
                    {({ theme, toggleTheme }) => (
                        <label className="theme-changer">
                            {theme === 'light'
                            &&
                            <>
                                <a onClick={e => toggleTheme(e.target.checked ? 'dark' : 'dark')}><img src={moonIcon} alt="moon icon" /></a>
                                <span className="tooltiptext dark">Switch to Dark Mode</span>
                            </>
                            }
                            {theme === 'dark'
                            &&
                            <>
                                <a onClick={e => toggleTheme(e.target.checked ? 'light' : 'light')}><img src={sunIcon} alt="sun icon" /></a>
                                <span className="tooltiptext light">Switch to Light Mode</span>
                            </>
                            }
                            {/*{theme === 'dark' ? `🌕` : `🌑`}*/}

                        </label>
                    )}
                </ThemeToggler>
            </div>
        </>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
