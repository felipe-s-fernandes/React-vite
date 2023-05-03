import { useRef } from "react"

export default function Input() {
    
    const inputRef = useRef<HTMLInputElement>(null)

    function focusMe() {
        inputRef.current?.focus()
    }

    return(
        <>
        <input type="text" ref={inputRef} placeholder="focus me" />
        <button onClick={focusMe} >focus!</button>
        </>
    )
}