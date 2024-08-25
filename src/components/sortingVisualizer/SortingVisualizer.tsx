import React, { useContext, useEffect, useRef, useState } from 'react'
import Bar from './Bar'
import Header from './Header'
import { SortObject } from '../../interfaces/sortTypes'
import { SortingArrayProviderContext } from '../../providers/SortingArrayProvider'
import { algoritmeProviderContext } from '../../providers/AlgoritmeProvider'
import "./sortingVisualizer.css"

const SortingVisualizer = () => {
    const { array, isSorting, amountOfItems, highlight, resetArray } = useContext(SortingArrayProviderContext)
    const { selectionSort, bubbleSort, mergeSort, insertionSort, quickSort } = useContext(algoritmeProviderContext)
    const [boxWidth, setBoxWidth] = useState<number>(0);
    const arrayBoxRef = useRef<HTMLDivElement | null>(null)
    const barWidth = boxWidth ? boxWidth / amountOfItems - 2 : 0

    const sorts: SortObject[] = [
        { name: "Selection Sort", function: () => selectionSort(array) },
        { name: "Bubble Sort", function: () => bubbleSort(array) },
        { name: "Merge Sort", function: () => mergeSort(array) },
        { name: "Insertion Sort", function: () => insertionSort(array) },
        { name: "Quick Sort", function: () => quickSort(array) },
    ]

    useEffect(() => {
        if (arrayBoxRef.current) {
            setBoxWidth(arrayBoxRef.current.offsetWidth)
        }
    }, [array])

    return (
        <div className='array-container'>
            <div className='mb-6'>
                <Header
                    areButtonsDisabled={isSorting}
                    generateArray={resetArray}
                    sorts={sorts}
                />
            </div>
            <div className='flex justify-center' style={{ display: "flex", justifyContent: "center" }}>
                <div ref={arrayBoxRef} className='array-box'>
                    {array.map((item, idx) => <Bar
                        key={idx}
                        value={item}
                        width={barWidth}
                        isCompared={highlight.compared?.includes(idx)}
                        isSwapped={highlight.swapped?.includes(idx)} />)}
                </div>
            </div>
        </div>
    )
}

export default SortingVisualizer
