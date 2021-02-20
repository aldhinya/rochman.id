import "./style.css"
import "./pre.css"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import moonIcon from "../images/moon-icon.svg"
import sunIcon from "../images/sun-icon.svg"

const Header = ({ siteTitle }) => {
    return (
        <>
            <div className={'logo-container'}>
                <div className={'title-header'}><Link to="/" title={'ROCHMAN.ID'}>ROCHMAN.ID</Link></div>
                {/* <span style={{ fontStyle: 'italic', display:'inline-block'}}>Novice Programmer</span> */}
                <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <label className={'theme-changer'} style={{marginTop: '5px'}}>
                            {theme === 'light'
                            &&
                            <>
                                <a onClick={e => toggleTheme(e.target.checked ? 'dark' : 'dark')}><img src={moonIcon} alt="moon icon" /></a>
                                <span className={'tooltiptext dark'}>Switch to Dark Mode</span>
                            </>
                            }
                            {theme === 'dark'
                            &&
                            <>
                                <a onClick={e => toggleTheme(e.target.checked ? 'light' : 'light')}><img src={sunIcon} alt="sun icon" /></a>
                                <span className={'tooltiptext light'}>Switch to Light Mode</span>
                            </>
                            }
                            {/*{theme === 'dark' ? `🌕` : `🌑`}*/}
                        </label>
                    )}
                </ThemeToggler>
            </div>
            <div className={'menuku'} id={'myTopnav'}>
                <Link to="/" activeClassName={'active'} title={'Home'}>Home</Link>
                <Link to="/about/" activeClassName={'active'} title={'About'}>About</Link>
                <Link to="/portfolio/" activeClassName={'active'} title={'Portfolio'}>Portfolio</Link>
                <Link to="/contact/" activeClassName={'active'} title={'Contact'}>Contact</Link>
                <Link to="/blog/" activeClassName={'active'} partiallyActive={true} title={'Blog'}>Blog</Link>
                
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
