import React from "react";

function NumberOfDays({ startDate, endDate, numPages }) {

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    const pagesDay = Math.trunc(numPages / diffInDays);

    return (
        <div>
            You've {diffInDays} to read the book.
            You've to read {pagesDay} pages per day.
        </div>
    )
}

export default NumberOfDays;