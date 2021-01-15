import React, {useRef, useEffect} from "react"
import styled from "styled-components"
import Layer1 from "./components/layer1"
import Layer2 from "./components/layer2"
import Layer3 from "./components/layer3"

const ParallaxContainer = styled.div``;

const multipliers = {
    layer1: 1,
    layer2: -0.6,
    layer3: 0.2
}

const Parallax = () => {

    const refLayer1 = useRef()
    const refLayer2 = useRef()
    const refLayer3 = useRef()

    const updateXPosition = (ref, multiplier, currentScrollPosition) => {
        let position = currentScrollPosition * multiplier
        ref.style.transform = `translate3d(${position}px, 0, 0)`
    }

    useEffect(() => {
        const updatePosition = (pos) => {
            updateXPosition(refLayer1, multipliers.layer1, pos)
            updateXPosition(refLayer2, multipliers.layer2, pos)
            updateXPosition(refLayer3, multipliers.layer3, pos)
        }

        const callbackFunc = () => {
            const currentScrollPosition = window.scrollY
            setTimeout(() => {
                updatePosition(currentScrollPosition)
            }, 0)
        }

        document.addEventListener("scroll", callbackFunc)

        return () => {
            document.removeEventListener("scroll", callbackFunc)
        }

    }, [])

    return(
        <ParallaxContainer>
            <Layer1 myRef={refLayer1}/>
            <Layer2 myRef={refLayer2}/>
            <Layer3 myRef={refLayer3}/>
        </ParallaxContainer>
    )
}

export default Parallax;