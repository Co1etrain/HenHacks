import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    enum Holiday {
        Halloween = "🎃",
        Thanksgiving = "🦃",
        Christmas = "🎄",
        StPatricksDay = "🇮🇪",
        Easter = "🐇"
    }
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Christmas
    );
    function nextAlphabet() {
        const holidaysInOrder = [
            Holiday.Christmas,
            Holiday.Easter,
            Holiday.Halloween,
            Holiday.StPatricksDay,
            Holiday.Thanksgiving
        ];
        const currentIndex = holidaysInOrder.indexOf(currentHoliday);

        const nextIndex =
            holidaysInOrder[(currentIndex + 1) % holidaysInOrder.length];
        return setCurrentHoliday(nextIndex);
    }
    function nextYear() {
        const holidaysInYearOrder = [
            Holiday.StPatricksDay,
            Holiday.Easter,
            Holiday.Halloween,
            Holiday.Thanksgiving,
            Holiday.Christmas
        ];
        const currentIndex = holidaysInYearOrder.indexOf(currentHoliday);

        const nextIndex =
            holidaysInYearOrder[
                (currentIndex + 1) % holidaysInYearOrder.length
            ];
        return setCurrentHoliday(nextIndex);
    }

    return (
        <div>
            Holiday: {currentHoliday}
            <Button onClick={() => nextAlphabet()}>Advance by Alphabet</Button>
            <Button onClick={() => nextYear()}>Advance by Year</Button>
        </div>
    );
}
