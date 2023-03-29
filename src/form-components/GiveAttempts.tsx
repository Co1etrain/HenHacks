import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    const handleRequestChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setRequestedAttempts(value);
        }
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempt = () => {
        if (requestedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
            setRequestedAttempts(0);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestChange}
            />
            <button onClick={handleGainAttempt}>Gain</button>
        </div>
    );
}
