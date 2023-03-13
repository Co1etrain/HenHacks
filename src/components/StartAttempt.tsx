import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [testing, setTesting] = useState<boolean>(false);
    function startTesting(): void {
        setTesting(!testing);
        setAttempts(attempts - 1);
    }
    function stopTesting(): void {
        setTesting(!testing);
    }

    return (
        <div>
            <Button onClick={startTesting} disabled={testing || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopTesting} disabled={!testing}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(1 + attempts)}
                disabled={testing}
            >
                Mulligan
            </Button>
            Attempts:{attempts}
        </div>
    );
}
