import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const answerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const isAnswerCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control
                type="text"
                value={userAnswer}
                onChange={answerChange}
            />
            {isAnswerCorrect ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}
