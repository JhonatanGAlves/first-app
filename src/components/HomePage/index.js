import React from 'react'
import styled from 'styled-components'
import { Card } from '../Card'

export function HomePage() {
    return (
        <StyledColumn>
            <Card />
            <Card />
            <Card />
        </StyledColumn>
    )
}

const StyledColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
`