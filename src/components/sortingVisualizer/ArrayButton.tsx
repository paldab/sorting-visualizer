import React, { FC } from 'react'

interface ArrayButtonProps {
    text: string
    onClick: (...args: any[]) => void
    color?: string
    disabled?: boolean
}

const ArrayButton: FC<ArrayButtonProps> = ({ text, onClick, color, disabled }) => {
    const buttonColor = color ?? "gray"

    return (
        <div>
            <button type='button' disabled={disabled}
                className={`bg-${buttonColor}-400 hover:bg-${buttonColor}-500 focus:outline-none 
                    focus:ring-4 focus:ring-${buttonColor}-300 font-medium rounded-full text-sm 
                    px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-${buttonColor}-900`}
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default ArrayButton
