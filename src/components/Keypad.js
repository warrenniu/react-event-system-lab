// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    handleClick = () => {
        console.log('Entering password...')

    }
    
    render() {
        return (
        <input onKeyUp={this.handleClick} type="password" />
        )
}
}
export default Keypad
