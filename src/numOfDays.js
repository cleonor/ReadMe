import React from "react";

function NumberOfDays({ startDate, endDate }) {

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return (
        <div>
            You've {diffInDays} to read the book.
        </div>
    )
}

export default NumberOfDays;