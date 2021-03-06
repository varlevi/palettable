import React from 'react'

import switchStyles from './switch.module.css'

const Switch = ({ label, color, func, checked }) => {

    const style = { "--cat-color": color }

    return (
        <div className={switchStyles.container} style={style}>
                <h3>{label}</h3>
                <div className={`${switchStyles.checkboxContainer} ${switchStyles.color}`}>
                    <input type="checkbox" id={label} checked={checked} onClick={() => func()}/>
                    <label for={label}></label>
                    <div className={switchStyles.activeCircle}></div>
            </div>
        </div>
    )
}

export default Switch