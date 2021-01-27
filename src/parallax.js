import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Layer1 from "./components/layer1";
import Layer2 from "./components/layer2";
import Layer3 from "./components/layer3";
import Layer4 from "./components/layer4";
import Layer5 from "./components/layer5";
import Text from "./components/text";
import Signature from "./components/signature";
import ScrollDown from "./components/scrollDown";

const ParallaxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const multipliers = {
    layer1: {
        x: 0.8,
        y: 0.8,
        s: 0.003,
    },
    layer2: {
        x: -0.4,
        y: 0.35,
        s: 0.002,
    },
    layer3: {
        x: 0.2,
        y: 0.25,
        s: 0.0008,
    },
    layer4: {
        x: 0,
        y: 0,
        s: 0.0006,
    },
    layer5: {
        x: 0,
        y: -0.1,
        s: 0.0006,
    },
    text: {
        startY: -400,
        x: 0,
        y: 0.1,
    },
};

let maxSLayer4 = 0;
let scrollStartLayer4 = 0;
let scrollStartLayer5 = 0;

const Parallax = () => {
    const refLayer1 = useRef();
    const refLayer2 = useRef();
    const refLayer3 = useRef();
    const refLayer4 = useRef();
    const refLayer5 = useRef();
    const refText = useRef();

    useEffect(() => {
        const calculatePosition = (
            ref,
            multiplierX,
            multiplierY,
            multiplierS,
            currentScrollPosition,
            scrollStart,
            maxScale,
            maxPosition
        ) => {
            if (window.screen.availWidth < 1024) {
                maxSLayer4 = 0.85;
            } else {
                maxSLayer4 = 0.65;
            }

            if (window.screen.availWidth < 480) {
                scrollStartLayer4 = 2110;
                scrollStartLayer5 = 3030;
            } else {
                scrollStartLayer4 = 3500;
                scrollStartLayer5 = 3300;
            }

            if (scrollStart) {
                if (currentScrollPosition < scrollStart) {
                    ref.style.transform = `scale(0)`;
                    return;
                }
                currentScrollPosition = currentScrollPosition - scrollStart;
            }

            let positionX = currentScrollPosition * multiplierX;
            let positionY = currentScrollPosition * multiplierY;
            let scale = currentScrollPosition * multiplierS;

            if (maxScale && scale > maxScale) {
                scale = maxScale;
            }

            if (maxPosition && positionY > maxPosition) {
                positionY = maxPosition;
            }

            ref.style.transform = `translate3d(${positionX}px, ${positionY}px, 0) scale3d(${scale}, ${scale}, ${scale})`;
        };

        const deductYPos = (ref, mult, start, pos) => {
            const nextPos = start + pos * mult;
            if (nextPos >= 0) return;

            ref.style.transform = `translate3d(${0}px, ${
                start + pos * mult
            }px, 0)`;
        };

        const updatePosition = (pos) => {
            calculatePosition(
                refLayer1.current,
                multipliers.layer1.x,
                multipliers.layer1.y,
                multipliers.layer1.s,
                pos
            );
            calculatePosition(
                refLayer2.current,
                multipliers.layer2.x,
                multipliers.layer2.y,
                multipliers.layer2.s,
                pos
            );
            calculatePosition(
                refLayer3.current,
                multipliers.layer3.x,
                multipliers.layer3.y,
                multipliers.layer3.s,
                pos
            );
            calculatePosition(
                refLayer4.current,
                multipliers.layer4.x,
                multipliers.layer4.y,
                multipliers.layer4.s,
                pos,
                scrollStartLayer4,
                maxSLayer4
            );

            deductYPos(
                refText.current,
                multipliers.text.y,
                multipliers.text.startY,
                pos
            );
            calculatePosition(
                refLayer5.current,
                multipliers.layer5.x,
                multipliers.layer5.y,
                multipliers.layer5.s,
                pos,
                scrollStartLayer5
            );
        };

        const callbackFunc = () => {
            const currentScrollPosition = window.scrollY;
            setTimeout(() => {
                updatePosition(currentScrollPosition);
            }, 0);
        };

        window.scrollTo(0, 0);

        document.addEventListener("scroll", callbackFunc);

        return () => {
            document.removeEventListener("scroll", callbackFunc);
        };
    }, []);

    return (
        <ParallaxContainer>
            <ScrollDown />
            <Layer1 myRef={refLayer1} />
            <Layer2 myRef={refLayer2} />
            <Layer3 myRef={refLayer3} />
            <Layer4 myRef={refLayer4} />
            <Layer5 myRef={refLayer5} />
            <Signature />
            <Text myRef={refText} />
        </ParallaxContainer>
    );
};

export default Parallax;
