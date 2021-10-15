import React from 'react'
import styled from 'styled-components'

export function Card() {
    return (
        <StyledCard>
            <div>
                <p>Componentes:</p>
                <p>Facilita em manter partes menores funcionando corretamente</p>
                <p>Você pode reutilizá-los, ou seja, menos código para se escrever</p>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    background-color: #F1F1F1;
    margin: 10px;
    padding: 10px;
    width: 200px;
    height: 200px;
`