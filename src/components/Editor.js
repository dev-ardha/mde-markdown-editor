import React from "react";
import Styled from '@emotion/styled'
import { useState } from 'react'
import Preview from './Preview'

const Editor = () => {

    const [ content, setContent ] = useState('# Type markdown here');
    const [ onEditing, setOnEditing ] = useState(true);

    return (
        <EditorStyled>
            <div className="page-nav">
                <div className="buttons">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <ul>
                    <li className={onEditing ? 'active' : ''} onClick={() => setOnEditing(true)}>Editor</li>
                    <li className={onEditing ? '' : 'active'} onClick={() => setOnEditing(false)}>Preview</li>
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