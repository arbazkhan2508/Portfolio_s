import React from 'react'
import { useLocation } from 'react-router-dom'

const tradingImg = require('../assets/trading.jpg')
const expertImg = require('../assets/expert.png')
const ecommerce = require('../assets/expert.png')

const imageMap = {
    'trading': tradingImg,
    'expert': expertImg,
    'default': ecommerce,
};

const Details = () => {

    const location = useLocation();
    const path = location?.pathname?.split('/')[1];
    const imagePath = imageMap[path] || imageMap['default'];

    return (
        <div className='w-full '>
            <div className='w-full'>
                <img className='w-full object-contain' src={imagePath} alt="tradingImg" />
            </div>
        </div>
    )
}

export default Details
