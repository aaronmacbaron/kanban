import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import TaskItem from "../TaskItem/TaskItem";
import { connect } from "react-redux";

const Lane = styled.div`
    background:#eee;
    border-radius:6px;
    width:300px;
    min-height:80vh;
    padding:5px;
`
const LaneWrapper = styled.div`
    
`
const KanbanLane = ({tasks, title, handleDragStop, laneData, onUpdateLanes}) => {
    const laneRef = useRef();

    const updateLanePosition = (data) => {
        let overwritableData = laneData;
        let newLaneData = laneData.lanes;
        newLaneData.forEach((l) => {
            if(l.title === data.title){
                const { top, left, width, height } = data
                l.lanePosition = {top, left, width, height}
            }
        });
        overwritableData.lanes = newLaneData;
        onUpdateLanes(overwritableData);
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateLanes: dispatch.laneData.updateLanes
    }
}

const mapStateToProps = (state) =>{ 
    return ({
      laneData: state.laneData
    })
  };



export default connect( mapStateToProps, mapDispatchToProps)(KanbanLane);