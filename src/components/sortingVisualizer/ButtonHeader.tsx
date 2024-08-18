import React, { FC } from 'react'
import ArrayButton from './ArrayButton'
import { SortObject } from '../../interfaces/sortTypes'

interface ButtonHeaderProps {
    generateArray: (...args: any[]) => void
    sorts: SortObject[]
    areButtonsDisabled?: boolean
}

const ButtonHeader: FC<ButtonHeaderProps> = ({ generateArray, sorts, areButtonsDisabled }) => {
    return (
        <div className='ring-2 ring-gray-300 dark:ring-gray-500'
            style={{
                height: "70px",
                background: "lightgrey"
            }}
        >
            <div className='flex justify-around items-center w-full h-full'>
                <div className=''>
                    <ArrayButton onClick={generateArray} text='Generate new Array' color='yellow' />
                </div>
                <div className='flex justify-start items-center'>

                    {sorts.map(sort => (
                        <ArrayButton disabled={areButtonsDisabled ?? false} key={sort.name} text={sort.name} onClick={sort.function} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ButtonHeader