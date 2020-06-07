import React from 'react'
import Styled from '@emotion/styled'

const About = ()=> {
    return(
        <AboutStyled>
            <div className="content">
                <h1>About</h1>
                <p>My MDE is an Online Markdown Editor that can help you to write and preview a markdown. You can also download the markdown file by clicking on the download button. This website is built on React, and its open source. If you want to contribute to this project, you can visit my github page <a href="https://github.com/dev-ardha/mymde-markdown-editor">here</a></p>
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