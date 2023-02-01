import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineMessage } from 'react-icons/ai'

const NeedHelp = () => {
    return (
        <div>
            <AiOutlineMessage />
            <div>Need Help</div>
            <div>Our Support Team is at our disposal</div>
            <Button variant='dark'>
                Get Help</Button>
        </div>
    )
}

export default NeedHelp