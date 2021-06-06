import React from "react";
import "./button.scss"

function PrimaryButton({children,figure, onClick,label}) {
    return (
        <button aria-label={label} onClick={onClick} figure={figure} className="btn btn-outline-primary main-btn">{children}</button>
    )
}
export default PrimaryButton;
