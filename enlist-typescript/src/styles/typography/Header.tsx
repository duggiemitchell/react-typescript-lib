import * as React from 'react'
import glamorous from 'glamorous'
import Sizes from '../sizes'

export const Header = glamorous('div', { propsAreCssOverrides: true })<{
    fontWeight
}>({
    fontFamily: 'Effra, sans-serif',
    fontSize: Sizes.MEDIUM,
    fontSmoothing: 'antialiased'
})
