import React from 'react'
import './NeedHelp.scss'
import { Button } from 'react-bootstrap'
import { AiOutlineMessage } from 'react-icons/ai'

const  NeedHelp = () => {
    return (
        <div className='need-help'>
            <AiOutlineMessage className='icon-news'/>
            <div className='need-help-txt'>Need Help?</div>
            <div className='description'>Our Support Team is at our disposal</div>
            <Button variant='dark'>
                Get Help</Button>
        </div>
    )
}

export default NeedHelp