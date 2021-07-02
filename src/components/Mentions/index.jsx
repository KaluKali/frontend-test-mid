import React from 'react'
import {animated, useSpring} from '@react-spring/web'

import {config} from "react-spring";
import {useHeight} from "../../hooks/useHeight";

export const Mentions = ({ open, children }) => {
    const [heightRef, height] = useHeight();

    const slideInStyles = useSpring({
        config: { ...config.stiff },
        from: { opacity: 0, height: 0 },
        to: {
            opacity: open ? 1 : 0,
            height: open ? height : 0
        }
    });
    return (
        <>
            <animated.div
                style={{
                    overflow: "hidden",
                    ...slideInStyles
                }}
            >
                <div ref={heightRef}>
                    {children}
                </div>
            </animated.div>
        </>
    )
}
