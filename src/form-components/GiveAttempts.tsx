import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    const requestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setRequestedAttempts(value);
        }
    };

    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const gainAttempt = () => {
        if (requestedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
            setRequestedAttempts(0);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={requestChange}
                style={{
                    padding: "10px",
                    marginTop: "10px",
                    width: "200px"
                }}
            />
            <button onClick={gainAttempt}>Gain</button>
        </div>
    );
}
