import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './components/HomePage'
import styled from 'styled-components'

function App() {
  return (
  <Container>
    <Header />
    <HomePage />
    <Footer />
  </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export default App
