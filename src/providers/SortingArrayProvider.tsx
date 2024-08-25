import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react"

interface SortingArrayProviderContextInterface {
    array: number[]
    amountOfItems: number
    isSorting: boolean
    highlight: HighlightState
    sortSpeed: number

    setArray: Dispatch<SetStateAction<number[]>>
    resetArray: () => void,
    setAmountOfItems: Dispatch<SetStateAction<number>>
    setSortSpeed: Dispatch<SetStateAction<number>>
    setIsSorting: Dispatch<SetStateAction<boolean>>
    setHighlight: Dispatch<SetStateAction<HighlightState>>
}

export type HighlightState = {
    compared: [number, number] | null
    swapped: [number, number] | null
}

const contextDefault: SortingArrayProviderContextInterface = {
    array: [],
    amountOfItems: 50,
    isSorting: false,
    highlight: { compared: null, swapped: null },
    sortSpeed: 100,

    setArray: () => null,
    resetArray: () => null,
    setAmountOfItems: () => null,
    setSortSpeed: () => null,
    setIsSorting: () => null,
    setHighlight: () => null
}

const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const SortingArrayProviderContext = createContext<SortingArrayProviderContextInterface>(contextDefault)

const SortingArrayProvider = (props: PropsWithChildren) => {
    const [array, setArray] = useState<number[]>([])
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [highlight, setHighlight] = useState<HighlightState>(contextDefault.highlight)
    const [sortSpeed, setSortSpeed] = useState<number>(contextDefault.sortSpeed)
    const [amountOfItems, setAmountOfItems] = useState<number>(contextDefault.amountOfItems)

    const resetArray = () => {
        const min = 5
        const max = 750
        const arr = []
        for (let i = 0; i < amountOfItems; i++) {
            arr.push(randomInt(min, max))
        }

        setHighlight({ compared: null, swapped: null })
        setIsSorting(false)
        setArray(arr)
    }

    useEffect(() => {
        resetArray()
    }, [amountOfItems])


    return (
        <SortingArrayProviderContext.Provider value={{
            array,
            amountOfItems,
            isSorting,
            highlight,
            sortSpeed,

            setArray,
            resetArray,
            setAmountOfItems,
            setSortSpeed,
            setIsSorting,
            setHighlight
        }}>
            {props.children}
        </SortingArrayProviderContext.Provider>
    )
}

export { SortingArrayProvider, SortingArrayProviderContext }