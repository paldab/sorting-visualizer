import { Dispatch, SetStateAction } from "react"
import { HighlightState } from "../../providers/SortingArrayProvider"

// General Swap function
const swap = (array: number[],
    idx1: number,
    idx2: number,
    setArray: Dispatch<SetStateAction<number[]>>,
    setHighlight: (highlight: HighlightState) => void) => {
    setHighlight({ compared: null, swapped: [idx1, idx2] })
    const temp = array[idx1]

    array[idx1] = array[idx2]
    array[idx2] = temp

    setArray(array)
}

const waitForDelay = async (delay: number) => {
    await new Promise(resolve => setTimeout(resolve, delay))
}

export const selectionSortAlgo = async (
    array: number[],
    setArrayState: Dispatch<SetStateAction<number[]>>,
    delay: number,
    setHighlight: (highlight: HighlightState) => void
): Promise<number[]> => {

    const arrLength = array.length
    for (let i = 0; i < arrLength - 1; i++) {
        let lowestValue = i

        for (let j = i + 1; j < arrLength; j++) {
            setHighlight({ compared: [j, i], swapped: null })
            if (array[j] < array[lowestValue]) {
                lowestValue = j
            }
        }

        if (lowestValue !== i) {
            swap(array, lowestValue, i, setArrayState, setHighlight)

            await waitForDelay(delay)
        }
    }

    setHighlight({ compared: null, swapped: null })
    return array
}

export const bubbleSortAlgo = async (
    array: number[],
    setArrayState: Dispatch<SetStateAction<number[]>>,
    delay: number,
    setHighlight: (highlight: HighlightState) => void): Promise<number[]> => {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i; j++) {
            const next = j + 1
            if (next > array.length) {
                break
            }
            setHighlight({ compared: [j, next], swapped: null })

            if (array[j] > array[next]) {
                swap(array, j, next, setArrayState, setHighlight)

                await waitForDelay(delay)
            }
        }
    }

    setHighlight({ compared: null, swapped: null })
    return array
}

export const mergeSortAlgo = async (
    array: number[],
    setArrayState: (array: number[]) => void,
    delay: number,
    setHighlight: (highlight: HighlightState) => void): Promise<number[]> => {

    if (array.length <= 1) {
        return array
    }

    const merge = async (arr1: number[], arr2: number[], leftStart: number): Promise<number[]> => {
        const arr: number[] = []

        while (arr1.length && arr2.length) {
            // Highlight the elements that are being compared
            setHighlight({ compared: [leftStart, leftStart + arr1.length + arr2.length - 1], swapped: null })
            await waitForDelay(delay)

            if (arr1[0] < arr2[0]) {
                arr.push(arr1.shift()!)
            } else {
                arr.push(arr2.shift()!)
            }

            setArrayState([...arr, ...arr1, ...arr2])
        }

        // Return remaining value from other array
        const remaining = [...arr, ...arr1, ...arr2]

        // Highlight the range of merged elements
        setHighlight({ compared: null, swapped: [leftStart, leftStart + remaining.length - 1] })
        await waitForDelay(delay)

        return remaining
    }

    const halfArray = Math.ceil(array.length / 2)
    let arr1: number[] = array.slice(0, halfArray)
    let arr2: number[] = array.slice(halfArray)

    arr1 = await mergeSortAlgo(arr1, setArrayState, delay, setHighlight)
    arr2 = await mergeSortAlgo(arr2, setArrayState, delay, setHighlight)

    return merge(arr1, arr2, 0)
}

export const insertionSortAlgo = async (
    array: number[],
    setArrayState: Dispatch<SetStateAction<number[]>>,
    delay: number,
    setHighlight: (highlight: HighlightState) => void): Promise<number[]> => {

    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1, setArrayState, setHighlight)
                await waitForDelay(delay)
            }
        }
    }

    setHighlight({ compared: null, swapped: null })
    return array
}

export const quickSortAlgo = async (
    array: number[],
    low: number,
    high: number,
    setArrayState: Dispatch<SetStateAction<number[]>>,
    delay: number,
    setHighlight: (highlight: HighlightState) => void): Promise<number[]> => {
    // Median of three method
    const partition = async (array: number[], low: number, high: number): Promise<number> => {
        const pivot = array[high];

        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                swap(array, i, j, setArrayState, setHighlight)
                await waitForDelay(delay)
            }
        }

        swap(array, i + 1, high, setArrayState, setHighlight)
        await waitForDelay(delay)
        return i + 1;
    }

    if (low < high) {
        const pivot = await partition(array, low, high);

        quickSortAlgo(array, low, pivot - 1, setArrayState, delay, setHighlight);
        quickSortAlgo(array, pivot + 1, high, setArrayState, delay, setHighlight);
    }

    setHighlight({ compared: null, swapped: null })

    console.log(array)
    return array
}    
