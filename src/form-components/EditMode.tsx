import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleNameChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
    }) => {
        setIsStudent(event.target.checked);
    };

    const handleEditModeChange = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div>
            {isEditMode ? (
                <div>
                    <Form.Label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Label>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a" : "not a"} student
                </div>
            )}
            <Form.Check
                type="switch"
                label={isEditMode ? "Save" : "Edit"}
                onChange={handleEditModeChange}
            />
        </div>
    );
}
