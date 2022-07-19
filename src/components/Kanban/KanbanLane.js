import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import TaskItem from "../TaskItem/TaskItem";

const Lane = styled.div`
    background:#eee;
    border-radius:6px;
    width:300px;
    min-height:80vh;
    padding:5px;
`
const LaneWrapper = styled.div`
    
`
const KanbanLane = ({tasks, title, handleDragStop, updateLanePosition}) => {
    const laneRef = useRef();

    useEffect( ()=> {
        updateLanePosition({
            title,
            top:laneRef.current.offsetTop,
            left:laneRef.current.offsetLeft,
            width: laneRef.current.offsetWidth,
            height: laneRef.current.offsetHeight
        });
    },[])

    return(
        <LaneWrapper>
            <h4>{title}</h4>
            <Lane ref={laneRef}>
                {tasks && tasks.map( (item) => {
                    return <TaskItem 
                                key={item.id} 
                                title={item.title} 
                                type={item.type} 
                                exp={item.exp} 
                                handleStop={handleDragStop}
                            />
                })}
            </Lane>
        </LaneWrapper>
    )
}

export default KanbanLane;