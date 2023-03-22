import * as React from 'react';

interface INumberOfDaysProps {
    startDate: any;
    endDate: any;
    numPages: any;
}

export const NumberOfDays = (props: INumberOfDaysProps) => {

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = props.endDate.getTime() - props.startDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    const exactPagesPerDay = (props.numPages / diffInDays);
    const pagerPerDayRoundDown = Math.floor(exactPagesPerDay);
    const pagerPerDayRoundUp = Math.ceil(exactPagesPerDay);

    return (
        <div>
            You've {diffInDays} days to read the book.
            You've to read between {pagerPerDayRoundDown} and {pagerPerDayRoundUp} pages per day.
        </div>
    )
}
