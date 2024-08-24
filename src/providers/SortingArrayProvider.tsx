import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react"

interface SortingArrayProviderContextInterface {
    array: number[]
    amountOfItems: number
    isSorting: boolean
    highlight: HighlightState
    sortSpeed: number

    setArray: Dispatch<SetStateAction<number[]>>
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
    setIsSorting: () => null,
    setHighlight: () => null
}

const SortingArrayProviderContext = createContext<SortingArrayProviderContextInterface>(contextDefault)

const SortingArrayProvider = (props: PropsWithChildren) => {
    const [array, setArray] = useState<number[]>([])
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [highlight, setHighlight] = useState<HighlightState>({
        compared: null,
        swapped: null
    })
    const [sortSpeed, setSortSpeed] = useState<number>(50)
    const [amountOfItems, setAmountOfItems] = useState<number>(50)


    return (
        <SortingArrayProviderContext.Provider value={{
            array,
            amountOfItems,
            isSorting,
            highlight,
            sortSpeed,

            setArray,
            setIsSorting,
            setHighlight
        }}>
            {props.children}
        </SortingArrayProviderContext.Provider>
    )
}

export { SortingArrayProvider, SortingArrayProviderContext }