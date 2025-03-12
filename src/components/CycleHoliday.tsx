import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎃 Halloween"
    | "🎄 Christmas"
    | "🎆 New Year's"
    | "🐰 Easter"
    | "🎯 Valentine's Day";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("🎃 Halloween");

    // Alphabetical order: Christmas, Easter, Halloween, New Year's, Valentine's Day
    const nextHolidayAlphabetically: Record<Holiday, Holiday> = {
        "🎃 Halloween": "🎆 New Year's",
        "🎄 Christmas": "🐰 Easter",
        "🎆 New Year's": "🎯 Valentine's Day",
        "🐰 Easter": "🎃 Halloween",
        "🎯 Valentine's Day": "🎄 Christmas",
    };

    // Calendar year order: New Year's, Valentine's Day, Easter, Halloween, Christmas
    const nextHolidayByYear: Record<Holiday, Holiday> = {
        "🎃 Halloween": "🎄 Christmas",
        "🎄 Christmas": "🎆 New Year's",
        "🎆 New Year's": "🎯 Valentine's Day",
        "🎯 Valentine's Day": "🐰 Easter",
        "🐰 Easter": "🎃 Halloween",
    };

    const cycleAlphabetically = () => {
        setCurrentHoliday(nextHolidayAlphabetically[currentHoliday]);
    };

    const cycleByYear = () => {
        setCurrentHoliday(nextHolidayByYear[currentHoliday]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={cycleAlphabetically}>
                Advance by Alphabet
            </Button>{" "}
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
