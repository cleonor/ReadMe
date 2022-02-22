import React from "react";
import "./popUp.css"

function PopUp({ trigger, setTrigged, children }) {
    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="backButton"
                    onClick={() => setTrigged(false)}
                >
                    Back
                </button>
                <button className="continueButton">Continue</button>
                {children}
            </div>
        </div>
    ) : "";
}

export default PopUp