import React, { useState } from "react";
import styled from "@emotion/styled";
import KanbanLane from "./KanbanLane";

const Container = styled.div`
    display:flex;
    column-gap:10px;
    justify-content: space-evenly;
`

const Tracker = styled.span`
    width:10px;
    height:10px;
    position:fixed;
    background:#0F0;
    top: ${props => props.top ?? 0}px;
    left: ${props => props.left ?? 0}px;
`

const KanbanContainer = ({laneData}) => {

    return (
        <Container>
            {laneData && laneData.map((laneObject) => {
                return <KanbanLane 
                            key={`kanbanLane-${laneObject.title}`} 
                            title={laneObject.title} 
                            tasks={laneObject.tasks} 
                        />
                
            })}
        </Container>
    )
}

export default KanbanContainer;