import React from 'react'
import Hero from '../components/Hero';
import Styled from '@emotion/styled'
import Editor from '../components/Editor';
import { Helmet } from 'react-helmet'

const Index = ()=> {
    return(
        <IndexStyled>
            <Helmet>
                <title>My MDE - React Markdown Editor</title>
            </Helmet>
            <Hero/>
            <div className="content">
                <Editor/>
            </div>
        </IndexStyled>
    )
}

const IndexStyled = Styled.div`
    .content{
        padding:0 10% 70px 10%;
        display:flex;
    }
`

export default Index;