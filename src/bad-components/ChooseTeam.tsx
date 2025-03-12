import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Team members to choose from - only 6 members since the 7th button is a clear button
const TEAM_MEMBERS = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    const addMember = (member: string) => {
        if (!team.includes(member)) {
            setTeam([...team, member]);
        }
    };

    const clearTeam = () => {
        setTeam([]);
    };

    return (
        <div>
            <h3>Choose Team</h3>
            <div>
                <h4>Current Team:</h4>
                <ul>
                    {team.map((member, index) => (
                        <li key={index}>{member}</li>
                    ))}
                </ul>
                {team.length === 0 && <p>No members selected</p>}
            </div>
            <div>
                <h4>Available Members:</h4>
                <div>
                    {/* Show the 6 regular team member buttons */}
                    {TEAM_MEMBERS.map((member, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                addMember(member);
                            }}
                            style={{ margin: "2px" }}
                        >
                            {member}
                        </Button>
                    ))}

                    {/* Add a 7th button that clears the team */}
                    <Button onClick={clearTeam} style={{ margin: "2px" }}>
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
}
