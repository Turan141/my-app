import { useState } from "react"

const Values = ({ value, isActive, type }) => {
    return (
        <>
        <p className={isActive ? 'selectedType' : ''}>{isActive ? value + type: value}</p>
        </>
    )
}

export default Values