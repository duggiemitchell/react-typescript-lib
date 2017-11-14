import * as React from 'react'
import glamorous, { Li, Span, Div } from 'glamorous'
import { SubHeading } from '../styles/typography/SubHeading'
import { Checkbox, GrayCheck } from './Checkbox'
import Colors from '../styles/colors'

type SwitchProps = {
    label
    onClick?
}
type SwitchState = {
    checked
}
export class Switch extends React.Component<SwitchProps, SwitchState> {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        checked: true
    }

    handleClick() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }))
    }
    render() {
        return (
            <Li maxWidth="300px" display="flex" justifyContent="space-between">
                <SubHeading fontWeight="bold" color={Colors.DARK_BLUE}>
                    {this.props.label.toUpperCase()}
                </SubHeading>
                <Div display="flex">
                    {this.state.checked ? (
                        <Checkbox
                            onClick={this.handleClick}
                            checked={this.state.checked}
                        />
                    ) : (
                        <GrayCheck
                            onClick={this.handleClick}
                            checked={this.state.checked}
                        />
                    )}
                </Div>
            </Li>
        )
    }
}
