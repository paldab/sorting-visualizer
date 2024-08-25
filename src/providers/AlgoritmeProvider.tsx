import { createContext, PropsWithChildren, useContext } from "react"
import { SortingArrayProviderContext } from "./SortingArrayProvider"
import { selectionSortAlgo, bubbleSortAlgo, mergeSortAlgo, quickSortAlgo, insertionSortAlgo } from "../components/sortingVisualizer/SortingAlgorithmes"

type SortingFunction = (array: number[], ...args: number[]) => Promise<void>

interface AlgoritmeContextInterface {
    selectionSort: SortingFunction
    bubbleSort: SortingFunction
    mergeSort: SortingFunction
    insertionSort: SortingFunction
    quickSort: SortingFunction
}

const algoritmeContextDefault: AlgoritmeContextInterface = {
    selectionSort: () => Promise.resolve(),
    bubbleSort: () => Promise.resolve(),
    mergeSort: () => Promise.resolve(),
    insertionSort: () => Promise.resolve(),
    quickSort: () => Promise.resolve(),
}

const algoritmeProviderContext = createContext<AlgoritmeContextInterface>(algoritmeContextDefault)

const AlgoritmeProvider = (props: PropsWithChildren) => {
    const { setIsSorting, setArray, sortSpeed, setHighlight } = useContext(SortingArrayProviderContext)

    const runSortingAlgorithm = async (func: (...args: any[]) => Promise<number[]>, ...funcArgs: any[]): Promise<void> => {
        setIsSorting(true)

        await func(...funcArgs)

        setHighlight({ compared: null, swapped: null })
        setIsSorting(false)
    }

    const selectionSort = async (array: number[]) => {
        runSortingAlgorithm(selectionSortAlgo, array, setArray, sortSpeed, setHighlight)
    }

    const bubbleSort = async (array: number[]) => {
        runSortingAlgorithm(bubbleSortAlgo, array, setArray, sortSpeed, setHighlight)
    }

    const mergeSort = async (array: number[]) => {
        runSortingAlgorithm(mergeSortAlgo, array, setArray, sortSpeed, setHighlight)
    }

    const insertionSort = async (array: number[]) => {
        runSortingAlgorithm(insertionSortAlgo, array, setArray, sortSpeed, setHighlight)
    }

    const quickSort = async (array: number[]) => {
        runSortingAlgorithm(quickSortAlgo, array, 0, array.length - 1, setArray, sortSpeed, setHighlight)
    }

    return (
        <algoritmeProviderContext.Provider value={{
            selectionSort,
            bubbleSort,
            mergeSort,
            insertionSort,
            quickSort
        }}>
            {props.children}
        </algoritmeProviderContext.Provider>)
}

export { AlgoritmeProvider, algoritmeProviderContext }
