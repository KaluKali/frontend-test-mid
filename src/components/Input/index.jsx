import React from "react";
import './input.scss'

function Input({children, className,...props}) {
    return (
        <>
            <input className={`${className} form-input`} {...props}>{children}</input>
        </>
    )
}

function Textarea({children, ...props}) {
    return (
        <>
            <textarea {...props}>{children}</textarea>
        </>
    )
}

export {Input, Textarea}
