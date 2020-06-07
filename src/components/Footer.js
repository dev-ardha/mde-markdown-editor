import React from 'react'
import Styled from '@emotion/styled'
import { Github } from '@icons-pack/react-simple-icons'

const Footer = ()=> {
    return(
        <FooterStyled>
            <a href="https://github.com/dev-ardha"><Github className="github"/></a>
            <p>Made with ❤️ and a keyboard by <a href="https://instagram.com/ddev.ardha">dev.ardha</a></p>
        </FooterStyled>
    )
}

const FooterStyled = Styled.footer`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding-bottom:40px;
    align-items:center;
    height:300px;
    border-radius:2rem 2rem 0 0;
    color:#999;

    p{
        font-size:.9rem;
    }
    .github{
        width: 40px;
        margin-bottom: 1.5rem;
        height: 40px;
        fill:#999;

        &:hover{
            fill:#fff;
        }
    }
`

export default Footer;