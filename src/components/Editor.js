import React, { useState } from "react";
import Styled from '@emotion/styled'
import Preview from './Preview'

const Editor = () => {

    const [ content, setContent ] = useState('# Type markdown here');
    const [ onEditing, setOnEditing ] = useState(true);
    const [ fileName, setFileName ] = useState('')

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('markdown').value], {type: 'text/plain'});

        element.href = URL.createObjectURL(file);
        element.download = fileName ? `${fileName}.md` : 'untitled.md';
        document.body.appendChild(element);
        element.click();
    }

    return (
        <EditorStyled>
            <div className="page-nav">
                <div className="buttons">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="download">
                    <input className="nav-button" value="Donwload Markdown" type="button" onClick={downloadTxtFile}/>
                    <input className="nav-input" type="text" placeholder="File name..." onChange={(e) => setFileName(e.target.value)}/>
                </div>
                <ul>
                    <li className="nav-button" className={onEditing ? 'active' : ''} onClick={() => setOnEditing(true)}>Editor</li>
                    <li className="nav-button" className={onEditing ? '' : 'active'} onClick={() => setOnEditing(false)}>Preview</li>
                </ul>
            </div>
            <div className="editor">
                <div className="row">
                    {
                        onEditing
                        ? <textarea id="markdown" className="markdown" defaultValue={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        : <Preview source={content}/>
                    }
                </div>
            </div>
        </EditorStyled>
    )
}

const EditorStyled = Styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    border-radius:8px;
    border:1px solid #535353;

    .page-nav{
        display:flex;
        width:100%;
        height:50px;
        align-items:center;
        padding: 0 1rem;
        background-color:#212121;
        border-radius:8px 8px 0 0;

        .download{
            display:flex;
            .nav-button{
                width:50%;
            }
            .nav-input{
                width:50%;
            }
        }
        .buttons{
            display:flex;
            align-items:center;

            .dot{
                width:16px;
                margin-right:10px;
                border-radius:50%;
                height:16px;
                background-color:rgba(0,0,0,0.5);
            }

            .red{
                background-color:#FF605C;
            }
            .yellow{
                background-color:#FFBD44;
            }
            .green{
                background-color:#00CA4E;
            }
        }
        .nav-button{
            cursor:pointer;
        }
        input{
            padding: .5rem 1rem;
            font-size:.8rem;
            margin-left:10px;
            color:#fff;
            background-color:#191919;
            border:none;

            &:focus{
                outline:none;
            }

            &:hover{
                background-color:rgba(0,0,0,0.5);
            }
        }
        .nav-input:focus{
            background-color:#0c0c0c;
        }
        ul{
            display:flex;
            margin-left:auto;

            li{
                padding: .5rem 1rem;
                font-size:.8rem;
                margin-left:10px;
                color:#fff;
                background-color:#191919;
                cursor:pointer;
            }
            li:hover{
                background-color:rgba(0,0,0,0.5);
            }
            .active{
                background-color:#0c0c0c;
            }
        }
    }

    .editor{
        display:flex;
        width:100%;
    }

    .row{
        width:100%;
    }

    .markdown, .preview{
        border-radius:0 0 8px 8px;
    }
    .markdown{
        padding: 1rem;
        resize: none;
        overflow: auto;
        width: 100%;
        min-height: 400px;
        display: block;
        border:none;
        background:#0c0c0c;
        color:#fff;
    }
    .markdown:focus{
        outline:none;
    }

`

export default Editor;