import React from "react";
import './block.scss'

export default function Block({withOverlay,url,children, className}) {

    return (
        <>
            {withOverlay ? <div style={{background: `url("${url}") no-repeat center top / cover`}}>
                <div className={`block__overlay ${className}`}>
                    {children}
                </div>
            </div> : <div className={`${className}`}>
                {children}
            </div>}
        </>
    )
}
