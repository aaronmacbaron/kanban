import React from "react";
import styled from "@emotion/styled";
import Draggable from "react-draggable";
import { Card } from "@mui/material";

const TaskContainer = styled(Card)`
    margin-bottom:7px;
    padding:10px;
    height:100px;
`

const TaskItem = ({ id, type, title, exp, handleStop}) => {

    return (
        <Draggable onStop={handleStop}>
            <TaskContainer className="card">
                <div className="content">
                    {/* <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
                    <div className="header">
                        {type}
                    </div>
                    <div className="meta">
                        {exp}
                    </div>
                    <div className="description">
                        {title}
                    </div>
                </div>
            </TaskContainer>
        </Draggable>
    )
}

export default TaskItem;