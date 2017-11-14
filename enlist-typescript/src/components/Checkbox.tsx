import * as React from 'react'
import glamorous from 'glamorous'
import Colors from '../styles/colors'

type CheckBoxProps = {}

export const Checkbox = glamorous.span({
    backgroundColor: `${Colors.PALE_GREY}`,
    width: '35px',
    height: '3px',
    borderRadius: '34px',
    ':before': {
        content: ' ',
        position: 'absolute',
        backgroundColor: `${Colors.CERULEAN}`,
        borderRadius: '50%',
        height: '16px',
        width: '16px',
        bottom: '-66px'
    }
})

export const GrayCheck = glamorous.span({
    backgroundColor: `${Colors.PALE_GREY}`,
    width: '35px',
    height: '3px',
    borderRadius: '34px',
    ':after': {
        content: ' ',
        position: 'absolute',
        backgroundColor: `${Colors.STEEL_GREY}`,
        borderRadius: '50%',
        height: '16px',
        width: '16px',
        bottom: '-66px',
        left: '300px'
    }
})
