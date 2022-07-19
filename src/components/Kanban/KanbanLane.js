import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import TaskItem from "../TaskItem/TaskItem";

const Lane = styled.div`
    background:#eee;
    border-radius:6px;
    width:300px;
    min-height:80vh;
`
const LaneWrapper = styled.div`
    
`
const KanbanLane = ({tasks = [], title}) => {
    const [laneItems, setLaneItems] = useState([]);
    const [laneTitle, setLaneTitle] = useState();

    useEffect( () => {
        setLaneTitle(title);
        setLaneItems(tasks);
    },[title, tasks])

    return(
        <LaneWrapper>
            <h4>{laneTitle}</h4>
            <Lane>
                {laneItems.map( (item) => {
                    <TaskItem key={item.id} title={item.title} type={item.type} exp={item.exp}/>
                })}
            </Lane>
        </LaneWrapper>
    )
}

export default KanbanLane;