// src/bad-components/ShoveBox.tsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): React.JSX.Element {
    const [margin, setMargin] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <Button
                onClick={() => {
                    setMargin(margin + 4); // Increment by 4px
                }}
            >
                Shove
            </Button>
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue",
                    marginLeft: `${margin}px`,
                    marginTop: "10px",
                }}
            ></div>
        </div>
    );
}
