import React from "react";
import styled from "@emotion/styled";
import Draggable from "react-draggable";

const TaskContainer = styled.div`
    box-shadow: 1px 1px 8px 0px #ccc !important;
    width:200px;
    height:100px;
    padding:5px 10px;
    margin:8px;
    display:inline-block;
    cursor: pointer;
    &:hover {
        box-shadow: 1px 2px 15px 0px #ccc !important;
    }
`

const TaskItem = ({ id, type, title, exp, onSelect}) => {

    const handleSelect = () => {
        onSelect(id)
    }

    return (
        <Draggable>
            <TaskContainer className="card" onClick={handleSelect}>
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