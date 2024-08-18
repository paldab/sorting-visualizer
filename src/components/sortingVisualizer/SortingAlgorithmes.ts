export const selectionSort = async (array: number[], arraySetState: (array: number[]) => void, delay: number): Promise<number[]> => {
    console.log("tst")
    const swap = (array: number[], idx1: number, idx2: number) => {
        const temp = array[idx1]

        array[idx1] = array[idx2]
        array[idx2] = temp
    }

    console.log("Start Selection Sort")
    const arrLength = array.length
    for (let i = 0; i < arrLength - 1; i++) {
        let min = i

        for (let j = i + 1; j < arrLength; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        if (min !== i) {
            swap(array, min, i)
            arraySetState([...array])

            await new Promise(resolve => setTimeout(resolve, delay))
        }
    }


    return array
}

export const bubbleSort = (array: number[]): number[] => {
    return array
}

export const mergeSort = (array: number[]): number[] => {
    return array
}

export const quickSort = (array: number[]): number[] => {
    return array
}

export const insertionSort = (array: number[]): number[] => {
    return array
}




