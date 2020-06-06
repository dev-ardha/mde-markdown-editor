import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import Styled from '@emotion/styled'

const Preview = ({source})=> {
    return(
        <PreviewStyled>
            <ReactMarkdown source={source} renderers={{ code: CodeBlock }}/>
        </PreviewStyled>
    )
}

const PreviewStyled = Styled.div`
    padding: 1rem;
    width: 100%;
    background-color:#0c0c0c;
    color:#fff;
    min-height:400px;

    h1, h2, h3, h4, h5, h6{
        font-weight:bold;
        margin-bottom:1rem;
    }
    p{
        margin-bottom:1rem;
    }
    h1{
        font-size:2rem;
    }
    h2{
        font-size:1.75rem;
    }
    h3{
        font-size:1.5rem;
    }
    h4{
        font-size:1.25rem;
    }
    h5{
        font-size:1rem;
    }
`

export default Preview;