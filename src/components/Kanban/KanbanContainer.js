import React from "react";
import styled from "@emotion/styled";
import KanbanLane from "./KanbanLane";

const Container = styled.div`
    display:flex;
    column-gap:10px;
    justify-content: space-evenly;
`

const KanbanContainer = ({tasks}) => {

    const laneTitles = ["To Do", "In Progress", "Review", "QA", "Done", "Deployed"];

    return (
        <Container>
            {laneTitles.map((laneTitle) => {
                if(laneTitle === "To Do")
                    return <KanbanLane key={`kanbanLane-${laneTitle}`} title={laneTitle} tasks={tasks}/>
                else
                    return <KanbanLane key={`kanbanLane-${laneTitle}`} title={laneTitle} />
            })}
        </Container>
    )
}

export default KanbanContainer;