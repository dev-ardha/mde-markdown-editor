import React from 'react'
import Styled from '@emotion/styled'
import {NavLink} from 'react-router-dom';

const Navbar = ()=> {
    return(
        <NavbarStyled>
            <div className="container">
                <ul>
                    <NavLink to="/" exact className="navlink" activeClassName="active">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about" exact className="navlink" activeClassName="active">
                        <li>About</li>
                    </NavLink>
                    <a href="https://github.com/dev-ardha/mymde-markdown-editor" exact className="navlink" activeClassName="active">
                        <li>GitHub</li>
                    </a>
                </ul>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = Styled.header`
    position:sticky;
    top:0;
    width:100%;
    border-bottom:1px solid #090909;
    background:#111;

    ul{
        display:flex;
    }
    .navlink{
        text-decoration:none;
    }
    .navlink li{
        padding:1rem 1.5rem;
        color:#fff;
        font-size:.9rem;
        cursor:pointer;
    }
    .active{
        background-color:#666;
    }
`

export default Navbar;