import React from 'react'
import { Container } from 'react-bootstrap'
import NavContent from './Components/NavContent/NavContent'
import NavTop from './Components/NavTop/NavTop'

const Main = () => {
    return (
        <Container fluid className='main-div'>
            <NavTop />
            <NavContent/>
        </Container>


    )
}

export default Main