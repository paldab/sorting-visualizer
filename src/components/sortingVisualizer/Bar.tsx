import React, { CSSProperties, FC } from 'react'

interface BarProps {
    value: number
    width: number
    isCompared?: boolean
    isSwapped?: boolean
}

const Bar: FC<BarProps> = ({ value, width, isCompared, isSwapped }) => {
    const baseStyle: CSSProperties = {
        width: `${width}px`,
        height: `${value}px`,
        margin: "0 1px",
        borderRadius: "5px",
        background: isCompared ? "#ffeb3b" : isSwapped ? "#ff5722" : "#00bfae",
        boxShadow: isCompared || isSwapped ? "0 0 10px rgba(255, 235, 59, 0.5)" : "none"
    }

    return (
        <div style={baseStyle}></div>
    )
}

export default Bar
