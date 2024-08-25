import React, { useContext, useEffect, useRef, useState } from 'react'
import Bar from './Bar'
import Header from './Header'
import { SortObject } from '../../interfaces/sortTypes'
import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from './SortingAlgorithmes'
import { SortingArrayProviderContext } from '../../providers/SortingArrayProvider'
import "./sortingVisualizer.css"

const SortingVisualizer = () => {
    const { array, setArray, isSorting, setIsSorting, amountOfItems, highlight, setHighlight, sortSpeed, resetArray } = useContext(SortingArrayProviderContext)
    const [boxWidth, setBoxWidth] = useState<number>(0);
    const arrayBoxRef = useRef<HTMLDivElement | null>(null)

    const barWidth = boxWidth ? boxWidth / amountOfItems - 2 : 0

    const handleSelectionSort = async (array: number[]) => {
        setIsSorting(true)
        const arr = await selectionSort(array, setArray, sortSpeed, setHighlight)
        setIsSorting(false)

        return arr
    }

    const handleBubbleSort = async (array: number[]) => {
        setIsSorting(true)
        const arr = await bubbleSort(array, setArray, sortSpeed, setHighlight)
        setIsSorting(false)

        return arr
    }

    const handleMergeSort = async (array: number[]) => {
        setIsSorting(true)
        const arr = await mergeSort(array, setArray, sortSpeed, setHighlight)
        setIsSorting(false)

        setHighlight({ compared: null, swapped: null })
        return arr
    }

    const handleQuickSort = async (array: number[]) => {
        setIsSorting(true)
        const arr = await quickSort(array, 0, array.length - 1, setArray, sortSpeed, setHighlight)
        setIsSorting(false)

        setHighlight({ compared: null, swapped: null })
        return arr
    }

    const handleInsertionSort = async (array: number[]) => {
        setIsSorting(true)
        const arr = await insertionSort(array, setArray, sortSpeed, setHighlight)
        setIsSorting(false)

        setHighlight({ compared: null, swapped: null })
        return arr
    }

    const sorts: SortObject[] = [
        { name: "Selection Sort", function: () => handleSelectionSort(array) },
        { name: "Bubble Sort", function: () => handleBubbleSort(array) },
        { name: "Merge Sort", function: () => handleMergeSort(array) },
        { name: "Insertion Sort", function: () => handleInsertionSort(array) },
        { name: "Quick Sort", function: () => handleQuickSort(array) },
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