import React from 'react'
import '../styles/CardFooter.css'

import orangeClock from '../images/icon-bell-orange.svg'
import greenClock from '../images/icon-clock-green.svg'


const status = {
    active: greenClock,
    pending: orangeClock
}
// export const StatusCopy = props => (
//     <span>{jobStatus}</span>
// )

// export const CardIcon = ({cardStatus}) => (
//     <img src={cardStatus[status]} />
// )

const copyStyles = {
    float: 'right'
}
const CardFooter = ({copy}) => {
    return (
        <div className="HW-col1-5 flex-v-center">
        <span>{copy}</span>
        </div>
    )
}

export default CardFooter