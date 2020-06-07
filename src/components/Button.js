import React from 'react'
import Styled from '@emotion/styled'

export default function Button(props){
    return(
        <ButtonStyled {...props}/>
    )
}

const ButtonStyled = Styled.button`
    padding:.75rem 1.5rem;
    cursor:pointer;
    background:#d64365;
    font-size:1rem;
    border:none;
    border-radius:5px;
    color:#fff;
`