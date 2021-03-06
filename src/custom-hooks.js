import {useRef, useEffect} from 'react'

const usePrevious = (value) => {
    const prev = useRef(null)
    useEffect(() => {
        prev.current = value
    }, [value])
    return prev.current
}

export {
    usePrevious
}
