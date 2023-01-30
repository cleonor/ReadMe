import React from "react";

export function NumberOfDays({ startDate, endDate, numPages }) {

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    const exactPagesPerDay = (numPages / diffInDays);
    const pagerPerDayRoundDown = Math.floor(exactPagesPerDay);
    const pagerPerDayRoundUp = Math.ceil(exactPagesPerDay);

    return (
        <div>
            You've {diffInDays} days to read the book.
            You've to read between {pagerPerDayRoundDown} and {pagerPerDayRoundUp} pages per day.
        </div>
    )
}
