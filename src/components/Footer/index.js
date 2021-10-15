import Reac from 'react'
import styled from 'styled-components'

export function Footer() {
    return (
        <StyledFooter>
            <p>Desenvolvido com React</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.p`
    margin: 0;
    background-color: #d34040;
    height: 60px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-item: center;
`