import * as React from 'react'
import glamorous from 'glamorous'
import Sizes from '../sizes'

type HeaderProps = {
    icon
}
export const Header = glamorous('div', { propsAreCssOverrides: true })<{
    fontWeight?
    icon?: any
    iconPlacement?
}>({
    fontFamily: 'Effra, sans-serif',
    fontSize: Sizes.MEDIUM,
    fontSmoothing: 'antialiased'
})
