import React from 'react'
import Hero from '../components/Hero';
import Styled from '@emotion/styled'
import Editor from '../components/Editor';

const Index = ()=> {
    return(
        <IndexStyled>
            <Hero/>
            <div className="content">
                <Editor/>
            </div>
        </IndexStyled>
    )
}

const IndexStyled = Styled.div`
    .content{
        padding:70px 10%;
        display:flex;
    }
`

export default Index;