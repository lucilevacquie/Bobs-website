import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components"
import Layer1 from "./components/layer1"
import Layer2 from "./components/layer2"
import Layer3 from "./components/layer3"
import Layer4 from "./components/layer4"
import Text from "./components/text"

const ParallaxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const multipliers = {
    layer1:{
        x: 0.8,
        y: 0.8,
        s: 0.003
    },
    layer2:{
        x: -0.6,
        y: 0.5,
        s: 0.002
    },
    layer3:{
        x: 0.2,
        y: 0.4,
        s: 0.0009
    },
    layer4:{
        x: 0,
        y: 0.1,
        s: 0.0008
    },
    text:{
        x: 0,
        y: 0.1,
        s: 0.0008
    },

}

const maxYLayer4 = 180;
const maxSLayer4 = 0.85;
const scrollStartLayer4 = 888;

const Parallax = () => {

    const refLayer1 = useRef()
    const refLayer2 = useRef()
    const refLayer3 = useRef()
    const refLayer4 = useRef()
    const refText = useRef()

    const [scale, setScale] = useState()

    

    useEffect(() => {
        const calculatePosition = (ref, multiplierX, multiplierY, multiplierS, currentScrollPosition, maxPosition, maxScale, scrollStart) => {
            let positionX = currentScrollPosition * multiplierX
            let positionY = currentScrollPosition * multiplierY
            setScale(currentScrollPosition * multiplierS)

            if(scrollStart){
                currentScrollPosition = currentScrollPosition - scrollStart
                setScale(currentScrollPosition * multiplierS)
            }

            if(maxScale && scale > maxScale){
                setScale(maxScale)
            }

            if(maxPosition && positionY > maxPosition){
                positionY = maxPosition
            }

            ref.style.transform = `translate3d(${positionX}px, ${positionY}px, 0) scale3d(${scale}, ${scale}, ${scale})`
        }

        const updatePosition = (pos) => {
            calculatePosition(refLayer1.current, multipliers.layer1.x, multipliers.layer1.y, multipliers.layer1.s, pos)
            calculatePosition(refLayer2.current, multipliers.layer2.x, multipliers.layer2.y, multipliers.layer2.s, pos)
            calculatePosition(refLayer3.current, multipliers.layer3.x, multipliers.layer3.y, multipliers.layer3.s, pos)
            calculatePosition(refLayer4.current, multipliers.layer4.x, multipliers.layer4.y, multipliers.layer4.s, pos, maxYLayer4, maxSLayer4, scrollStartLayer4)
            calculatePosition(refText.current, multipliers.text.x, multipliers.text.y, multipliers.text.s, pos)
        }

        const callbackFunc = () => {
            const currentScrollPosition = window.scrollY
            console.log(currentScrollPosition)
            setTimeout(() => {
                updatePosition(currentScrollPosition)
            }, 0)
        }

        document.addEventListener("scroll", callbackFunc)

        return () => {
            document.removeEventListener("scroll", callbackFunc)
        }

    }, [scale])

    return(
        <ParallaxContainer>
            <Layer1 myRef={refLayer1}/>
            <Layer2 myRef={refLayer2}/>
            <Layer3 myRef={refLayer3}/>
            <Layer4 myRef={refLayer4}/>
            <Text myRef={refText}/>
        </ParallaxContainer>
    )
}

export default Parallax;