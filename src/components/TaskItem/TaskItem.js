import React from "react";
import styled from "@emotion/styled";
import Draggable from "react-draggable";
import { Card } from "@mui/material";

const TaskContainer = styled(Card)`
    margin-bottom:7px;
    padding:10px;
    height:100px;
    cursor:pointer;
`

const TaskItem = ({ id, type, title, exp, handleStop, onSelect, maxEarnableExp}) => {
    console.log(maxEarnableExp)
    const handleOnSelect = () => {
        onSelect({id, type, title, exp});
    }

    return (
        <Draggable onStop={handleStop}>
            <TaskContainer className="card" onMouseDownCapture={handleOnSelect}>
                <div className="content">
                    <div className="description">
                            {title}
                    </div>
                    <div className="meta">
                        XP Granted: <meter value={exp/maxEarnableExp}></meter>
                    </div>
                    
                </div>
            </TaskContainer>
        </Draggable>
    )
}

export default TaskItem;