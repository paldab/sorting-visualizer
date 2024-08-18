import React, { FC } from 'react'

interface BarProps {
    value: number
    width: number
}

const Bar: FC<BarProps> = ({ value, width }) => {
    return (
        <div style={{
            width: `${width}px`,
            height: `${value}px`,
            margin: "0 1px",
            background: "pink",
        }}></div>
    )
}

export default Bar
