import React from 'react'
import styled from 'styled-components'

export function Header() {
    return (
        <StyledHeader>
            <p>Trabalhando com Componentes</p>
        </StyledHeader>
    )
}

const StyledHeader = styled.p`
    margin: 0;
    background-color: #d34040;
    height: 60px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-item: center;
`