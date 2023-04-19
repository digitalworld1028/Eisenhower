import { useEffect, useState } from "react"

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(undefined)

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return scrollPosition
}