import React, { FC, useContext } from 'react'
import ArrayButton from './ArrayButton'
import { SortObject } from '../../interfaces/sortTypes'
import { Slider } from 'rsuite'
import { SortingArrayProviderContext } from '../../providers/SortingArrayProvider'

interface ButtonHeaderProps {
    generateArray: (...args: any[]) => void
    sorts: SortObject[]
    areButtonsDisabled?: boolean
}

const Header: FC<ButtonHeaderProps> = ({ generateArray, sorts, areButtonsDisabled }) => {
    const { setAmountOfItems, setSortSpeed, isSorting } = useContext(SortingArrayProviderContext)

    return (
        <div className='ring-2 ring-gray-300 dark:ring-gray-500'
            style={{
                height: "70px",
                background: "lightgrey"
            }}
        >
            <div className='flex justify-around items-center w-full h-full'>
                <div className='w-56 flex items-center justify-around'>
                    <ArrayButton onClick={generateArray} text='Generate new Array' color='yellow' />
                    <div>
                        <div>
                            <label>Amount of Items</label>
                            <Slider onChange={(e) => setAmountOfItems(e)} disabled={isSorting} defaultValue={50} step={5} min={30} max={250} style={{ width: 200 }} />
                        </div>
                        <div>
                            <label>Sorting Speed</label>
                            <Slider onChange={(e) => setSortSpeed(e)} disabled={isSorting} defaultValue={100} min={20} step={10} max={500} style={{ width: 200 }} />
                        </div>
                    </div>
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

export default Header