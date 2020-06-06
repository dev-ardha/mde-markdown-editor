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
                    <NavLink to="/github" exact className="navlink" activeClassName="active">
                        <li>GitHub</li>
                    </NavLink>
                </ul>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = Styled.header`
    position:sticky;
    top:0;
    width:100%;
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
        background-color:#e00f7a;
        border-radius:0 0 1rem 1rem;
    }
`

export default Navbar;