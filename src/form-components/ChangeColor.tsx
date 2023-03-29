import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "brown"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorOption) => (
                <Form.Check
                    inline
                    type="radio"
                    label={colorOption}
                    value={colorOption}
                    checked={color === colorOption}
                    onChange={handleColorChange}
                    key={colorOption}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                <span>You have choosen {color}.</span>
            </div>
        </div>
    );
}
