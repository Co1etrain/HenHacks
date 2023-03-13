import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function switchType(): void {
        if (qType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    function result() {
        if (qType === "short_answer_question") {
            return <span>Short Answer</span>;
        } else if (qType === "multiple_choice_question") {
            return <span>Multiple Choice</span>;
        }
    }

    return (
        <>
            <span>
                <Button onClick={() => switchType()}>Change Type</Button>
            </span>
            <div>{result()}</div>
        </>
    );
}
