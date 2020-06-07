import React from 'react'
import Styled from '@emotion/styled'

import Button from './Button'

const Hero = ()=> {
    return(
        <>
        <HeroStyled>
            <div className="container">
                <h1 className="title">My MDE</h1>
                <p className="subtitle">A Simple Online Markdown Editor</p>
                <div className="hero-button">
                    <Button className="btn">About</Button>
                    <Button className="btn">GitHub</Button>
                </div>
            </div>
        </HeroStyled>
        </>
    )
}

const HeroStyled = Styled.div`
    color: #fff;
    height:400px;
    display:flex;
    align-items:center;

    .btn{
        margin:0 .75rem;
    }
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;

    }

    .title{
        font-size:3.5rem;
        font-weight:800;
    }
    .subtitle{
        margin-top:1rem;
        margin-bottom:2rem;
    }
`

export default Hero;