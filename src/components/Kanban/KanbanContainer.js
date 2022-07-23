import React, { useState } from "react";
import styled from "@emotion/styled";

import KanbanLane from "./KanbanLane";

const Container = styled.div`
    display:flex;
    column-gap:10px;
    justify-content: space-evenly;
    margin: 0 10px;
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