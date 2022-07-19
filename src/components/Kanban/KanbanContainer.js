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

const KanbanContainer = ({tasks}) => {
    const [lanePositions, setLanePositions] = useState([]);
    const laneTitles = ["To Do", "In Progress", "Review", "QA", "Done", "Deployed"];
    const [trackerX, setTrackerX] = useState(0);
    const [trackerY, setTrackerY] = useState(0);

    const onDragStop = (event) => {
        const {clientX, clientY} = event;
        setTrackerX(clientX);
        setTrackerY(clientY);
        console.log(findProperLane(clientX,clientY));
        console.log("x:",clientX);
        console.log("y:",clientY);
    }

    const onUpdateLanePositions = (laneDetails) => {
        setLanePositions(lanePositions => [...lanePositions, laneDetails]);
    }

    const findProperLane = (x,y) => {
        let laneTitle;
        lanePositions.forEach((pos) => {
            const { width, height, top, left } = pos;
            if( x > left && x < left+width && y > top && y < top+height)
                laneTitle = pos.title;
        })
        return laneTitle;
    }

    return (
        <Container>
            <Tracker top={trackerY} left={trackerX} />
            {laneTitles.map((laneTitle) => {
                if(laneTitle === "To Do")
                    return <KanbanLane key={`kanbanLane-${laneTitle}`} title={laneTitle} tasks={tasks} handleDragStop={onDragStop} updateLanePosition={onUpdateLanePositions}/>
                else
                    return <KanbanLane key={`kanbanLane-${laneTitle}`} title={laneTitle} handleDragStop={onDragStop} updateLanePosition={onUpdateLanePositions}/>
            })}
        </Container>
    )
}

export default KanbanContainer;