import React from "react";

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <butto>Back</butto>
                <button>Continue</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default PopUp