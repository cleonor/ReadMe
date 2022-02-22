import React from "react";
import "./popUp.css"

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="backButton">Back</button>
                <button className="continueButton">Continue</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default PopUp