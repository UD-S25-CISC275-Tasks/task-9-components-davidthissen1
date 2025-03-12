import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Function to simulate rolling a 6-sided die
export function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    // Set initial values - the tests expect these values to come from specific mock returns
    // Initialize with values that won't match (5 and 2 are good defaults)
    const [leftDie, setLeftDie] = useState<number>(5);
    const [rightDie, setRightDie] = useState<number>(2);

    // Simple handlers that call d6() exactly once
    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    // Determine game state
    let message = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Snake Eyes! You Lose!";
        } else {
            message = "Matching dice! You Win!";
        }
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>{" "}
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeft}>Roll Left</Button>{" "}
            <Button onClick={rollRight}>Roll Right</Button>
            {message && <p>{message}</p>}
        </div>
    );
}
