import React from 'react'
import Styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

const About = ()=> {
    return(
        <AboutStyled>
            <Helmet>
                <title>My MDE - About</title>
                <meta name="description" content="A simple markdown editor with live preview built with React.js" />
                <meta name="keyword" content="markdown, ardha, dev.ardha, markdown editor, text editor, markdown preview, react markdown, my mde, mde, react markdown editor, react markdown preview" />
                <title>React Markdown Editor</title>
                <meta name="author" content="dev.ardha"/>
                <meta name="robots" content="index,follow"/>
                <meta content='@ardhaydhtm' name='twitter:site'/>
                <meta content='@ardhaydhtm' name='twitter:creator'/>
            </Helmet>
            <div className="content">
                <h1>About</h1>
                <p>My MDE is an Online Markdown Editor that can help you to write and preview a markdown. You can also download the markdown file by clicking the download button. This website is built on React, and its open source. If you want to contribute to this project, you can visit my github page <a href="https://github.com/dev-ardha/mymde-markdown-editor">here</a></p>
                <p></p>
                <p>Developed by <a href="">dev.ardha</a></p>
            </div>
        </AboutStyled>
    )
}

const AboutStyled = Styled.div`
    .content{
        padding:70px 20% 70px 20%;
        display:flex;
        flex-direction:column;
        color:#fff;
    }
    p{
        margin-bottom:1.25rem;
        line-height:30px;
        letter-spacing:.5px;
    }
    h1{
        text-align:center;
        font-size:2rem;
        font-weight:800;
        margin-bottom:1.25rem;
    }

`

export default About;