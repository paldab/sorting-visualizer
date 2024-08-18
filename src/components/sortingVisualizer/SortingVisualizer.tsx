import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import "./sortingVisualizer.css"
import Bar from './Bar'
import ButtonHeader from './ButtonHeader'
import { SortObject } from '../../interfaces/sortTypes'
import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from './SortingAlgorithmes'

const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const SortingVisualizer = () => {
    const [array, setArray] = useState<number[]>([])
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [sortSpeed, setSortSpeed] = useState<number>(50)
    const [boxWidth, setBoxWidth] = useState<number>(0);
    const arrayBoxRef = useRef<HTMLDivElement | null>(null)

    const amountOfItems = 300
    const barWidth = boxWidth ? boxWidth / amountOfItems - 2 : 0

    const handleSelectionSort = async (array: number[]) => {
        setIsSorting(true)
        const arr = await selectionSort(array, setArray, sortSpeed)
        setIsSorting(false)

        return arr
    }

    const sorts: SortObject[] = [
        { name: "Selection Sort", function: () => handleSelectionSort(array) },
        { name: "Bubble Sort", function: () => setArray(prev => bubbleSort([...prev])) },
        { name: "Merge Sort", function: () => setArray(prev => mergeSort([...prev])) },
        { name: "Quick Sort", function: () => setArray(prev => quickSort([...prev])) },
        { name: "Insertion Sort", function: () => setArray(prev => insertionSort([...prev])) },
    ]

    const resetArray = () => {
        const arr = []
        for (let i = 0; i < amountOfItems; i++) {
            arr.push(randomInt(5, 730))
        }

        setArray(arr)
    }

    useEffect(() => {
        resetArray()
    }, [])

    useEffect(() => {
        if (arrayBoxRef.current) {
            setBoxWidth(arrayBoxRef.current.offsetWidth)
        }
    }, [array])

    return (
        <div className='array-container'>
            <div className='mb-6'>
                <ButtonHeader
                    areButtonsDisabled={isSorting}
                    generateArray={resetArray}
                    sorts={sorts}
                />

            </div>
            <div className='flex justify-center' style={{ display: "flex", justifyContent: "center" }}>
                <div ref={arrayBoxRef} className='array-box'>
                    {array.map((item, idx) => <Bar key={idx} value={item} width={barWidth} />)}
                </div>
            </div>
        </div>
    )
}

export default SortingVisualizer